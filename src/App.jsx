import { useState, useEffect, useCallback, useRef } from "react";
import { EMAIL_TEMPLATES, LANGUAGE_OPTIONS } from "./templates";

// ═══════════════════════════════════════════════════════════════════════════════
//  🎛 VARIABLE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

const VARIABLE_DEFS = [
  {
    key: "CATEGORY_V3",
    label: "Category",
    options: [
      { value: "Beauty / Wellness / Healthcare", label: "💆 Beauty / Wellness" },
      { value: "Food & Drink",                  label: "🍽 Food & Drink" },
      { value: "Leisure Offers / Activities",   label: "🎭 Leisure / Activities" },
      { value: "Services",                      label: "🔧 Services (else)" },
    ],
  },
  {
    key: "MERCHANT_TYPE",
    label: "Merchant Type",
    options: [
      { value: "New",      label: "🆕 New" },
      { value: "Inactive", label: "😴 Inactive" },
      { value: "Existing", label: "✅ Existing (else)" },
    ],
  },
  {
    key: "ACCOUNT_OWNER_NAME",
    label: "Account Manager",
    options: [
      { value: "Jane Smith",        label: "👤 Has AM" },
      { value: "House Account",     label: "🏠 House Account" },
      { value: "Merchant Support",  label: "🚫 No AM (else)" },
    ],
  },
  {
    key: "HAS_LIVE_DEAL",
    label: "Live Deal",
    options: [
      { value: "True",  label: "🟢 Has Live Deal" },
      { value: "False", label: "🔴 No Live Deal" },
    ],
  },
  {
    key: "MERCHANT_PERMALINK",
    label: "Permalink",
    options: [
      { value: "my-deal-url", label: "🔗 Has Permalink" },
      { value: "",            label: "❌ No Permalink" },
    ],
  },
];

const DEFAULTS = Object.fromEntries(
  VARIABLE_DEFS.map(v => [v.key, v.options[0].value])
);

// ═══════════════════════════════════════════════════════════════════════════════
//  AMPscript evaluator
// ═══════════════════════════════════════════════════════════════════════════════

function ampCondition(cond, vars) {
  cond = cond.trim();
  if (/\s+and\s+/i.test(cond)) return cond.split(/\s+and\s+/i).every(c => ampCondition(c.trim(), vars));
  if (/\s+or\s+/i.test(cond)) return cond.split(/\s+or\s+/i).some(c => ampCondition(c.trim(), vars));
  let m;
  m = cond.match(/^not\s+empty\((\w+)\)$/i);
  if (m) return !!vars[m[1]] && vars[m[1]] !== "";
  m = cond.match(/^empty\((\w+)\)$/i);
  if (m) return !vars[m[1]] || vars[m[1]] === "";
  m = cond.match(/IndexOf\((\w+),\s*"([^"]*)"\)\s*==\s*0/i);
  if (m) return !String(vars[m[1]] ?? "").includes(m[2]);
  m = cond.match(/^(\w+)\s*==\s*"([^"]*)"$/i);
  if (m) return String(vars[m[1]] ?? "") === m[2];
  m = cond.match(/^(\w+)\s*!=\s*"([^"]*)"$/i);
  if (m) return String(vars[m[1]] ?? "") !== m[2];
  m = cond.match(/^(\w+)\s*==\s*(?:''|"")$/i);
  if (m) return String(vars[m[1]] ?? "") === "";
  m = cond.match(/^(\w+)\s*!=\s*(?:''|"")$/i);
  if (m) return String(vars[m[1]] ?? "") !== "";
  return false;
}

function processIfBlocks(html, vars) {
  let str = html.replace(/%%\[(?:\s*endif\s*)+\]%%/gi, match => {
    const count = (match.match(/endif/gi) || []).length;
    return "%%[ endif ]%%\n".repeat(count);
  });
  const tagRegex = /%%\[\s*(if\s+[\s\S]+?|elseif\s+[\s\S]+?|else|endif)\s*\]%%/gi;
  let tokens = [];
  let lastIdx = 0;
  let match;
  while ((match = tagRegex.exec(str)) !== null) {
    if (match.index > lastIdx) tokens.push({ type: 'text', val: str.slice(lastIdx, match.index) });
    let content = match[1].trim();
    if (/^if\s+/i.test(content)) tokens.push({ type: 'if', cond: content.replace(/^if\s+/i, '').replace(/\s+then$/i, '').trim() });
    else if (/^elseif\s+/i.test(content)) tokens.push({ type: 'elseif', cond: content.replace(/^elseif\s+/i, '').replace(/\s+then$/i, '').trim() });
    else if (/^else$/i.test(content)) tokens.push({ type: 'else' });
    else if (/^endif$/i.test(content)) tokens.push({ type: 'endif' });
    lastIdx = tagRegex.lastIndex;
  }
  if (lastIdx < str.length) tokens.push({ type: 'text', val: str.slice(lastIdx) });
  function evaluateTokens(tks) {
     let result = "";
     let i = 0;
     while (i < tks.length) {
        let t = tks[i];
        if (t.type === 'text') { result += t.val; i++; }
        else if (t.type === 'if') {
           let depth = 1; let blockTokens = []; i++;
           while (i < tks.length && depth > 0) {
              if (tks[i].type === 'if') depth++;
              else if (tks[i].type === 'endif') depth--;
              if (depth > 0) blockTokens.push(tks[i]);
              i++;
           }
           let branches = []; let currentBranch = { cond: t.cond, tokens: [] }; let branchDepth = 0;
           for (let j = 0; j < blockTokens.length; j++) {
              let bt = blockTokens[j];
              if (bt.type === 'if') branchDepth++;
              else if (bt.type === 'endif') branchDepth--;
              if (branchDepth === 0 && bt.type === 'elseif') { branches.push(currentBranch); currentBranch = { cond: bt.cond, tokens: [] }; }
              else if (branchDepth === 0 && bt.type === 'else') { branches.push(currentBranch); currentBranch = { cond: '__else__', tokens: [] }; }
              else currentBranch.tokens.push(bt);
           }
           branches.push(currentBranch);
           for (let b of branches) {
              if (b.cond === '__else__' || ampCondition(b.cond, vars)) { result += evaluateTokens(b.tokens); break; }
           }
        } else { i++; }
     }
     return result;
  }
  return evaluateTokens(tokens);
}

function evaluateAmpscript(html, vars) {
  if (!html) return "";
  let r = html;
  r = r.replace(/<script runat="server"[\s\S]*?<\/script>/gi, "");
  r = r.replace(/%%=ContentBlockByID\([^)]*\)=%%/g, "");
  r = r.replace(/%%=RedirectTo\([^)]*\)=%%/g, "#");
  r = r.replace(/%%=v\(@\w+\)=%%/gi, "#");
  r = r.replace(/%%=CloudPagesURL\([^)]*\)=%%/gi, "#");
  r = processIfBlocks(r, vars);
  r = r.replace(/%%\[[\s\S]*?\]%%/g, "");
  r = r.replace(/%%=[^%]*=%%/g, "");
  return r;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  Build iframe HTML
// ═══════════════════════════════════════════════════════════════════════════════

function buildIframeDoc(vars, htmlTemplate) {
  const evaluated = evaluateAmpscript(htmlTemplate, vars);
  const styleMatches = [...htmlTemplate.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
  const styles = styleMatches.map(m => m[1]).join("\n");
  const bodyMatch = evaluated.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : evaluated;

  const heightScript = [
    "<scr" + "ipt>",
    "function reportHeight(){",
    "  var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);",
    "  window.parent.postMessage({type:'iframeHeight',height:h},'*');",
    "}",
    "window.addEventListener('load',reportHeight);",
    "document.querySelectorAll('img').forEach(function(i){",
    "  i.addEventListener('load',reportHeight);",
    "  i.addEventListener('error',reportHeight);",
    "});",
    "setTimeout(reportHeight,400);",
    "setTimeout(reportHeight,1200);",
    "</" + "script>",
  ].join("\n");

  const previewerCSS = [
    "html,body{margin:0 !important;padding:0 !important;background:#ffffff;}",
    "body{padding:12px 0 !important;}",
    ".em_main_table > tbody > tr > td, .em_main_table > tr > td{overflow:hidden !important;}",
    ".em_wrapper > tbody > tr > td, .em_wrapper > tr > td{overflow:hidden !important;}",
    "div[style*='inline-block']{display:block !important;width:100% !important;box-sizing:border-box !important;text-align:center !important;}",
    "div[style*='text-align:left']{text-align:left !important;}",
    "div[style*='text-align: left']{text-align:left !important;}",
  ].join("\n");

  return (
    "<!DOCTYPE html>" +
    "<html><head><meta charset=\"utf-8\">" +
    "<style>" +
    previewerCSS +
    styles +
    "</style></head>" +
    "<body>" + body + heightScript + "</body>" +
    "</html>"
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  URL state helpers
// ═══════════════════════════════════════════════════════════════════════════════

function stateToParams(state, lang) {
  const p = new URLSearchParams();
  p.set("lang", lang);
  Object.entries(state).forEach(([k, v]) => p.set(k, v));
  return p.toString();
}

function paramsToState(search) {
  const p = new URLSearchParams(search);
  const s = { ...DEFAULTS };
  VARIABLE_DEFS.forEach(({ key }) => { if (p.has(key)) s[key] = p.get(key); });
  return s;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  UI components
// ═══════════════════════════════════════════════════════════════════════════════

function OptionBtn({ active, onClick, children, color = "#53D989" }) {
  return (
    <button onClick={onClick} style={{
      padding: "5px 13px", borderRadius: 20, cursor: "pointer",
      border: active ? `2px solid ${color}` : "2px solid rgba(255,255,255,0.15)",
      background: active ? color : "rgba(255,255,255,0.07)",
      color: active ? "#1d0533" : "rgba(255,255,255,0.8)",
      fontWeight: active ? 700 : 400, fontSize: 12.5, transition: "all 0.15s",
      whiteSpace: "nowrap", fontFamily: "inherit",
    }}>{children}</button>
  );
}

function Toast({ show, msg }) {
  return (
    <div style={{
      position: "fixed", bottom: 28, left: "50%",
      transform: `translateX(-50%) translateY(${show ? 0 : 70}px)`,
      background: "#1d0533", color: "#fff", padding: "10px 24px",
      borderRadius: 24, fontSize: 13, fontWeight: 600,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)", transition: "transform 0.25s",
      zIndex: 9999, pointerEvents: "none",
    }}>{msg}</div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [vars, setVars] = useState(() => paramsToState(window.location.search));
  const [lang, setLang] = useState(() => {
    const p = new URLSearchParams(window.location.search);
    return p.get("lang") || LANGUAGE_OPTIONS[0].value;
  });
  
  const [toast, setToast] = useState({ show: false, msg: "" });
  const [zoom, setZoom] = useState(1);
  const [iframeHeight, setIframeHeight] = useState(900);
  const iframeRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    window.history.replaceState(null, "", `${window.location.pathname}?${stateToParams(vars, lang)}`);
  }, [vars, lang]);

  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      setZoom(Math.min(1, w / 600));
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "iframeHeight" && e.data.height > 100) {
        setIframeHeight(e.data.height + 24);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const setVar = useCallback((key, value) => {
    setVars(prev => ({ ...prev, [key]: value }));
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2500);
  };

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?${stateToParams(vars, lang)}`;
    navigator.clipboard.writeText(url).then(() => showToast("✓ Link copiado al portapapeles"));
  };

  const iframeDoc = buildIframeDoc(vars, EMAIL_TEMPLATES[lang] || "");

  return (
    <div style={{ minHeight: "100vh", background: "#13102a", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sticky toolbar ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#1d0533", boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: 13, paddingBottom: 11,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>📧</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>AMPscript Previewer</span>
              <span style={{ background: "#53D989", color: "#1d0533", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>● LIVE</span>
            </div>
            <button onClick={copyLink} style={{
              padding: "7px 16px", borderRadius: 20, cursor: "pointer",
              background: "#53D989", color: "#1d0533", border: "none",
              fontSize: 12.5, fontWeight: 700,
            }}>🔗 Share Link</button>
          </div>

          <div style={{ padding: "11px 0 13px", display: "flex", flexDirection: "column", gap: 8 }}>
            
            {/* ── SELECTOR DE IDIOMA ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px", marginBottom: "5px" }}>
              <span style={{ color: "#53D989", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, minWidth: 145 }}>🌍 Country / Lang</span>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {LANGUAGE_OPTIONS.map(opt => (
                  <OptionBtn
                    key={opt.value}
                    active={lang === opt.value}
                    onClick={() => setLang(opt.value)}
                    color="#53D989"
                  >{opt.label}</OptionBtn>
                ))}
              </div>
            </div>

            {/* ── VARIABLES ── */}
            {VARIABLE_DEFS.map(({ key, label, options }) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, minWidth: 145 }}>{label}</span>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {options.map(opt => (
                    <OptionBtn
                      key={opt.value}
                      active={vars[key] === opt.value}
                      onClick={() => setVar(key, opt.value)}
                    >{opt.label}</OptionBtn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px 60px" }}>
        
        <div ref={wrapRef} style={{ width: "100%" }}>
          <div style={{
            borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 40px rgba(0,0,0,0.5)",
            width: "100%", height: Math.round(iframeHeight * zoom),
          }}>
            <div style={{
              width: 600, height: iframeHeight, transformOrigin: "top left", transform: `scale(${zoom})`,
            }}>
              <iframe
                ref={iframeRef}
                srcDoc={iframeDoc}
                style={{ width: "100%", height: iframeHeight, border: "none", display: "block", background: "#fff" }}
                title="Email Preview"
                sandbox="allow-scripts allow-same-origin"
                scrolling="no"
              />
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 14 }}>
          Visualizando: <strong>{lang.toUpperCase()}</strong> · Zoom: {Math.round(zoom * 100)}%
        </p>
      </div>

      <Toast show={toast.show} msg={toast.msg} />
    </div>
  );
}
