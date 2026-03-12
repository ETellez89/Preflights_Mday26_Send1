(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))u(R);new MutationObserver(R=>{for(const U of R)if(U.type==="childList")for(const $ of U.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&u($)}).observe(document,{childList:!0,subtree:!0});function T(R){const U={};return R.integrity&&(U.integrity=R.integrity),R.referrerPolicy&&(U.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?U.credentials="include":R.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function u(R){if(R.ep)return;R.ep=!0;const U=T(R);fetch(R.href,U)}})();var nd={exports:{}},xi={};var hu;function P0(){if(hu)return xi;hu=1;var E=Symbol.for("react.transitional.element"),H=Symbol.for("react.fragment");function T(u,R,U){var $=null;if(U!==void 0&&($=""+U),R.key!==void 0&&($=""+R.key),"key"in R){U={};for(var be in R)be!=="key"&&(U[be]=R[be])}else U=R;return R=U.ref,{$$typeof:E,type:u,key:$,ref:R!==void 0?R:null,props:U}}return xi.Fragment=H,xi.jsx=T,xi.jsxs=T,xi}var bu;function em(){return bu||(bu=1,nd.exports=P0()),nd.exports}var ie=em(),od={exports:{}},L={};var yu;function tm(){if(yu)return L;yu=1;var E=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),$=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),te=Symbol.iterator;function ze(s){return s===null||typeof s!="object"?null:(s=te&&s[te]||s["@@iterator"],typeof s=="function"?s:null)}var ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ge=Object.assign,Q={};function F(s,w,M){this.props=s,this.context=w,this.refs=Q,this.updater=M||ve}F.prototype.isReactComponent={},F.prototype.setState=function(s,w){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,w,"setState")},F.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function we(){}we.prototype=F.prototype;function Ae(s,w,M){this.props=s,this.context=w,this.refs=Q,this.updater=M||ve}var dt=Ae.prototype=new we;dt.constructor=Ae,ge(dt,F.prototype),dt.isPureReactComponent=!0;var Tt=Array.isArray;function qe(){}var J={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function _t(s,w,M){var D=M.ref;return{$$typeof:E,type:s,key:w,ref:D!==void 0?D:null,props:M}}function Yl(s,w){return _t(s.type,w,s.props)}function St(s){return typeof s=="object"&&s!==null&&s.$$typeof===E}function Ke(s){var w={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(M){return w[M]})}var wl=/\/+/g;function Ct(s,w){return typeof s=="object"&&s!==null&&s.key!=null?Ke(""+s.key):w.toString(36)}function vt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(qe,qe):(s.status="pending",s.then(function(w){s.status==="pending"&&(s.status="fulfilled",s.value=w)},function(w){s.status==="pending"&&(s.status="rejected",s.reason=w)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function y(s,w,M,D,j){var V=typeof s;(V==="undefined"||V==="boolean")&&(s=null);var ae=!1;if(s===null)ae=!0;else switch(V){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(s.$$typeof){case E:case H:ae=!0;break;case B:return ae=s._init,y(ae(s._payload),w,M,D,j)}}if(ae)return j=j(s),ae=D===""?"."+Ct(s,0):D,Tt(j)?(M="",ae!=null&&(M=ae.replace(wl,"$&/")+"/"),y(j,w,M,"",function(Sa){return Sa})):j!=null&&(St(j)&&(j=Yl(j,M+(j.key==null||s&&s.key===j.key?"":(""+j.key).replace(wl,"$&/")+"/")+ae)),w.push(j)),1;ae=0;var je=D===""?".":D+":";if(Tt(s))for(var Ee=0;Ee<s.length;Ee++)D=s[Ee],V=je+Ct(D,Ee),ae+=y(D,w,M,V,j);else if(Ee=ze(s),typeof Ee=="function")for(s=Ee.call(s),Ee=0;!(D=s.next()).done;)D=D.value,V=je+Ct(D,Ee++),ae+=y(D,w,M,V,j);else if(V==="object"){if(typeof s.then=="function")return y(vt(s),w,M,D,j);throw w=String(s),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return ae}function S(s,w,M){if(s==null)return s;var D=[],j=0;return y(s,D,"","",function(V){return w.call(M,V,j++)}),D}function k(s){if(s._status===-1){var w=s._result;w=w(),w.then(function(M){(s._status===0||s._status===-1)&&(s._status=1,s._result=M)},function(M){(s._status===0||s._status===-1)&&(s._status=2,s._result=M)}),s._status===-1&&(s._status=0,s._result=w)}if(s._status===1)return s._result.default;throw s._result}var re=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},fe={map:S,forEach:function(s,w,M){S(s,function(){w.apply(this,arguments)},M)},count:function(s){var w=0;return S(s,function(){w++}),w},toArray:function(s){return S(s,function(w){return w})||[]},only:function(s){if(!St(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return L.Activity=C,L.Children=fe,L.Component=F,L.Fragment=T,L.Profiler=R,L.PureComponent=Ae,L.StrictMode=u,L.Suspense=_,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,L.__COMPILER_RUNTIME={__proto__:null,c:function(s){return J.H.useMemoCache(s)}},L.cache=function(s){return function(){return s.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(s,w,M){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=ge({},s.props),j=s.key;if(w!=null)for(V in w.key!==void 0&&(j=""+w.key),w)!Ve.call(w,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&w.ref===void 0||(D[V]=w[V]);var V=arguments.length-2;if(V===1)D.children=M;else if(1<V){for(var ae=Array(V),je=0;je<V;je++)ae[je]=arguments[je+2];D.children=ae}return _t(s.type,j,D)},L.createContext=function(s){return s={$$typeof:$,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:U,_context:s},s},L.createElement=function(s,w,M){var D,j={},V=null;if(w!=null)for(D in w.key!==void 0&&(V=""+w.key),w)Ve.call(w,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(j[D]=w[D]);var ae=arguments.length-2;if(ae===1)j.children=M;else if(1<ae){for(var je=Array(ae),Ee=0;Ee<ae;Ee++)je[Ee]=arguments[Ee+2];j.children=je}if(s&&s.defaultProps)for(D in ae=s.defaultProps,ae)j[D]===void 0&&(j[D]=ae[D]);return _t(s,V,j)},L.createRef=function(){return{current:null}},L.forwardRef=function(s){return{$$typeof:be,render:s}},L.isValidElement=St,L.lazy=function(s){return{$$typeof:B,_payload:{_status:-1,_result:s},_init:k}},L.memo=function(s,w){return{$$typeof:A,type:s,compare:w===void 0?null:w}},L.startTransition=function(s){var w=J.T,M={};J.T=M;try{var D=s(),j=J.S;j!==null&&j(M,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(qe,re)}catch(V){re(V)}finally{w!==null&&M.types!==null&&(w.types=M.types),J.T=w}},L.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},L.use=function(s){return J.H.use(s)},L.useActionState=function(s,w,M){return J.H.useActionState(s,w,M)},L.useCallback=function(s,w){return J.H.useCallback(s,w)},L.useContext=function(s){return J.H.useContext(s)},L.useDebugValue=function(){},L.useDeferredValue=function(s,w){return J.H.useDeferredValue(s,w)},L.useEffect=function(s,w){return J.H.useEffect(s,w)},L.useEffectEvent=function(s){return J.H.useEffectEvent(s)},L.useId=function(){return J.H.useId()},L.useImperativeHandle=function(s,w,M){return J.H.useImperativeHandle(s,w,M)},L.useInsertionEffect=function(s,w){return J.H.useInsertionEffect(s,w)},L.useLayoutEffect=function(s,w){return J.H.useLayoutEffect(s,w)},L.useMemo=function(s,w){return J.H.useMemo(s,w)},L.useOptimistic=function(s,w){return J.H.useOptimistic(s,w)},L.useReducer=function(s,w,M){return J.H.useReducer(s,w,M)},L.useRef=function(s){return J.H.useRef(s)},L.useState=function(s){return J.H.useState(s)},L.useSyncExternalStore=function(s,w,M){return J.H.useSyncExternalStore(s,w,M)},L.useTransition=function(){return J.H.useTransition()},L.version="19.2.4",L}var xu;function ud(){return xu||(xu=1,od.exports=tm()),od.exports}var xt=ud(),rd={exports:{}},vi={},dd={exports:{}},cd={};var vu;function lm(){return vu||(vu=1,(function(E){function H(y,S){var k=y.length;y.push(S);e:for(;0<k;){var re=k-1>>>1,fe=y[re];if(0<R(fe,S))y[re]=S,y[k]=fe,k=re;else break e}}function T(y){return y.length===0?null:y[0]}function u(y){if(y.length===0)return null;var S=y[0],k=y.pop();if(k!==S){y[0]=k;e:for(var re=0,fe=y.length,s=fe>>>1;re<s;){var w=2*(re+1)-1,M=y[w],D=w+1,j=y[D];if(0>R(M,k))D<fe&&0>R(j,M)?(y[re]=j,y[D]=k,re=D):(y[re]=M,y[w]=k,re=w);else if(D<fe&&0>R(j,k))y[re]=j,y[D]=k,re=D;else break e}}return S}function R(y,S){var k=y.sortIndex-S.sortIndex;return k!==0?k:y.id-S.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;E.unstable_now=function(){return U.now()}}else{var $=Date,be=$.now();E.unstable_now=function(){return $.now()-be}}var _=[],A=[],B=1,C=null,te=3,ze=!1,ve=!1,ge=!1,Q=!1,F=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;function dt(y){for(var S=T(A);S!==null;){if(S.callback===null)u(A);else if(S.startTime<=y)u(A),S.sortIndex=S.expirationTime,H(_,S);else break;S=T(A)}}function Tt(y){if(ge=!1,dt(y),!ve)if(T(_)!==null)ve=!0,qe||(qe=!0,Ke());else{var S=T(A);S!==null&&vt(Tt,S.startTime-y)}}var qe=!1,J=-1,Ve=5,_t=-1;function Yl(){return Q?!0:!(E.unstable_now()-_t<Ve)}function St(){if(Q=!1,qe){var y=E.unstable_now();_t=y;var S=!0;try{e:{ve=!1,ge&&(ge=!1,we(J),J=-1),ze=!0;var k=te;try{t:{for(dt(y),C=T(_);C!==null&&!(C.expirationTime>y&&Yl());){var re=C.callback;if(typeof re=="function"){C.callback=null,te=C.priorityLevel;var fe=re(C.expirationTime<=y);if(y=E.unstable_now(),typeof fe=="function"){C.callback=fe,dt(y),S=!0;break t}C===T(_)&&u(_),dt(y)}else u(_);C=T(_)}if(C!==null)S=!0;else{var s=T(A);s!==null&&vt(Tt,s.startTime-y),S=!1}}break e}finally{C=null,te=k,ze=!1}S=void 0}}finally{S?Ke():qe=!1}}}var Ke;if(typeof Ae=="function")Ke=function(){Ae(St)};else if(typeof MessageChannel<"u"){var wl=new MessageChannel,Ct=wl.port2;wl.port1.onmessage=St,Ke=function(){Ct.postMessage(null)}}else Ke=function(){F(St,0)};function vt(y,S){J=F(function(){y(E.unstable_now())},S)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(y){y.callback=null},E.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<y?Math.floor(1e3/y):5},E.unstable_getCurrentPriorityLevel=function(){return te},E.unstable_next=function(y){switch(te){case 1:case 2:case 3:var S=3;break;default:S=te}var k=te;te=S;try{return y()}finally{te=k}},E.unstable_requestPaint=function(){Q=!0},E.unstable_runWithPriority=function(y,S){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var k=te;te=y;try{return S()}finally{te=k}},E.unstable_scheduleCallback=function(y,S,k){var re=E.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?re+k:re):k=re,y){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=k+fe,y={id:B++,callback:S,priorityLevel:y,startTime:k,expirationTime:fe,sortIndex:-1},k>re?(y.sortIndex=k,H(A,y),T(_)===null&&y===T(A)&&(ge?(we(J),J=-1):ge=!0,vt(Tt,k-re))):(y.sortIndex=fe,H(_,y),ve||ze||(ve=!0,qe||(qe=!0,Ke()))),y},E.unstable_shouldYield=Yl,E.unstable_wrapCallback=function(y){var S=te;return function(){var k=te;te=S;try{return y.apply(this,arguments)}finally{te=k}}}})(cd)),cd}var wu;function am(){return wu||(wu=1,dd.exports=lm()),dd.exports}var sd={exports:{}},Be={};var Au;function im(){if(Au)return Be;Au=1;var E=ud();function H(_){var A="https://react.dev/errors/"+_;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)A+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+_+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(){}var u={d:{f:T,r:function(){throw Error(H(522))},D:T,C:T,L:T,m:T,X:T,S:T,M:T},p:0,findDOMNode:null},R=Symbol.for("react.portal");function U(_,A,B){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:C==null?null:""+C,children:_,containerInfo:A,implementation:B}}var $=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function be(_,A){if(_==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Be.createPortal=function(_,A){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(H(299));return U(_,A,null,B)},Be.flushSync=function(_){var A=$.T,B=u.p;try{if($.T=null,u.p=2,_)return _()}finally{$.T=A,u.p=B,u.d.f()}},Be.preconnect=function(_,A){typeof _=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,u.d.C(_,A))},Be.prefetchDNS=function(_){typeof _=="string"&&u.d.D(_)},Be.preinit=function(_,A){if(typeof _=="string"&&A&&typeof A.as=="string"){var B=A.as,C=be(B,A.crossOrigin),te=typeof A.integrity=="string"?A.integrity:void 0,ze=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;B==="style"?u.d.S(_,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:C,integrity:te,fetchPriority:ze}):B==="script"&&u.d.X(_,{crossOrigin:C,integrity:te,fetchPriority:ze,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Be.preinitModule=function(_,A){if(typeof _=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var B=be(A.as,A.crossOrigin);u.d.M(_,{crossOrigin:B,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&u.d.M(_)},Be.preload=function(_,A){if(typeof _=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var B=A.as,C=be(B,A.crossOrigin);u.d.L(_,B,{crossOrigin:C,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Be.preloadModule=function(_,A){if(typeof _=="string")if(A){var B=be(A.as,A.crossOrigin);u.d.m(_,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:B,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else u.d.m(_)},Be.requestFormReset=function(_){u.d.r(_)},Be.unstable_batchedUpdates=function(_,A){return _(A)},Be.useFormState=function(_,A,B){return $.H.useFormState(_,A,B)},Be.useFormStatus=function(){return $.H.useHostTransitionStatus()},Be.version="19.2.4",Be}var Eu;function nm(){if(Eu)return sd.exports;Eu=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(H){console.error(H)}}return E(),sd.exports=im(),sd.exports}var Tu;function om(){if(Tu)return vi;Tu=1;var E=am(),H=ud(),T=nm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function $(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function be(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(U(e)!==e)throw Error(u(188))}function A(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return _(i),e;if(n===a)return _(i),t;n=n.sibling}throw Error(u(188))}if(l.return!==a.return)l=i,a=n;else{for(var o=!1,r=i.child;r;){if(r===l){o=!0,l=i,a=n;break}if(r===a){o=!0,a=i,l=n;break}r=r.sibling}if(!o){for(r=n.child;r;){if(r===l){o=!0,l=n,a=i;break}if(r===a){o=!0,a=n,l=i;break}r=r.sibling}if(!o)throw Error(u(189))}}if(l.alternate!==a)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,te=Symbol.for("react.element"),ze=Symbol.for("react.transitional.element"),ve=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),we=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),_t=Symbol.for("react.activity"),Yl=Symbol.for("react.memo_cache_sentinel"),St=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=St&&e[St]||e["@@iterator"],typeof e=="function"?e:null)}var wl=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ge:return"Fragment";case F:return"Profiler";case Q:return"StrictMode";case Tt:return"Suspense";case qe:return"SuspenseList";case _t:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ve:return"Portal";case Ae:return e.displayName||"Context";case we:return(e._context.displayName||"Context")+".Consumer";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var vt=Array.isArray,y=H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},re=[],fe=-1;function s(e){return{current:e}}function w(e){0>fe||(e.current=re[fe],re[fe]=null,fe--)}function M(e,t){fe++,re[fe]=e.current,e.current=t}var D=s(null),j=s(null),V=s(null),ae=s(null);function je(e,t){switch(M(V,t),M(j,e),M(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bf(t),e=jf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(D),M(D,e)}function Ee(){w(D),w(j),w(V)}function Sa(e){e.memoizedState!==null&&M(ae,e);var t=D.current,l=jf(t,e.type);t!==l&&(M(j,e),M(D,l))}function wi(e){j.current===e&&(w(D),w(j)),ae.current===e&&(w(ae),gi._currentValue=k)}var jn,md;function Al(e){if(jn===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);jn=t&&t[1]||"",md=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jn+e+md}var Yn=!1;function qn(e,t){if(!e||Yn)return"";Yn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(h){var g=h}Reflect.construct(e,[],v)}else{try{v.call()}catch(h){g=h}e.call(v.prototype)}}else{try{throw Error()}catch(h){g=h}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(h){if(h&&g&&typeof h.stack=="string")return[h.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),o=n[0],r=n[1];if(o&&r){var d=o.split(`
`),m=r.split(`
`);for(i=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(a===d.length||i===m.length)for(a=d.length-1,i=m.length-1;1<=a&&0<=i&&d[a]!==m[i];)i--;for(;1<=a&&0<=i;a--,i--)if(d[a]!==m[i]){if(a!==1||i!==1)do if(a--,i--,0>i||d[a]!==m[i]){var b=`
`+d[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=i);break}}}finally{Yn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Al(l):""}function zu(e,t){switch(e.tag){case 26:case 27:case 5:return Al(e.type);case 16:return Al("Lazy");case 13:return e.child!==t&&t!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return qn(e.type,!1);case 11:return qn(e.type.render,!1);case 1:return qn(e.type,!0);case 31:return Al("Activity");default:return""}}function gd(e){try{var t="",l=null;do t+=zu(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vn=Object.prototype.hasOwnProperty,Kn=E.unstable_scheduleCallback,Xn=E.unstable_cancelCallback,Cu=E.unstable_shouldYield,Nu=E.unstable_requestPaint,$e=E.unstable_now,Ru=E.unstable_getCurrentPriorityLevel,hd=E.unstable_ImmediatePriority,bd=E.unstable_UserBlockingPriority,Ai=E.unstable_NormalPriority,Hu=E.unstable_LowPriority,yd=E.unstable_IdlePriority,Gu=E.log,ku=E.unstable_setDisableYieldValue,Ma=null,Pe=null;function Wt(e){if(typeof Gu=="function"&&ku(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Ma,e)}catch{}}var et=Math.clz32?Math.clz32:Bu,Lu=Math.log,Uu=Math.LN2;function Bu(e){return e>>>=0,e===0?32:31-(Lu(e)/Uu|0)|0}var Ei=256,Ti=262144,_i=4194304;function El(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Si(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,n=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~n,a!==0?i=El(a):(o&=r,o!==0?i=El(o):l||(l=r&~e,l!==0&&(i=El(l))))):(r=a&~n,r!==0?i=El(r):o!==0?i=El(o):l||(l=a&~e,l!==0&&(i=El(l)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,l=t&-t,n>=l||n===32&&(l&4194048)!==0)?t:i}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ju(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(){var e=_i;return _i<<=1,(_i&62914560)===0&&(_i=4194304),e}function Qn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yu(e,t,l,a,i,n){var o=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var r=e.entanglements,d=e.expirationTimes,m=e.hiddenUpdates;for(l=o&~l;0<l;){var b=31-et(l),v=1<<b;r[b]=0,d[b]=-1;var g=m[b];if(g!==null)for(m[b]=null,b=0;b<g.length;b++){var h=g[b];h!==null&&(h.lane&=-536870913)}l&=~v}a!==0&&vd(e,a,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(o&~t))}function vd(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function wd(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-et(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function Ad(e,t){var l=t&-t;return l=(l&42)!==0?1:Zn(l),(l&(e.suspendedLanes|t))!==0?0:l}function Zn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ed(){var e=S.p;return e!==0?e:(e=window.event,e===void 0?32:cu(e.type))}function Td(e,t){var l=S.p;try{return S.p=e,t()}finally{S.p=l}}var Ft=Math.random().toString(36).slice(2),He="__reactFiber$"+Ft,Xe="__reactProps$"+Ft,ql="__reactContainer$"+Ft,Jn="__reactEvents$"+Ft,qu="__reactListeners$"+Ft,Vu="__reactHandles$"+Ft,_d="__reactResources$"+Ft,za="__reactMarker$"+Ft;function Wn(e){delete e[He],delete e[Xe],delete e[Jn],delete e[qu],delete e[Vu]}function Vl(e){var t=e[He];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ql]||l[He]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Zf(e);e!==null;){if(l=e[He])return l;e=Zf(e)}return t}e=l,l=e.parentNode}return null}function Kl(e){if(e=e[He]||e[ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ca(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Xl(e){var t=e[_d];return t||(t=e[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ne(e){e[za]=!0}var Sd=new Set,Md={};function Tl(e,t){Ql(e,t),Ql(e+"Capture",t)}function Ql(e,t){for(Md[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var Ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Od={},Dd={};function Xu(e){return Vn.call(Dd,e)?!0:Vn.call(Od,e)?!1:Ku.test(e)?Dd[e]=!0:(Od[e]=!0,!1)}function Mi(e,t,l){if(Xu(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Oi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Nt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qu(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){l=""+o,n.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){if(!e._valueTracker){var t=zd(e)?"checked":"value";e._valueTracker=Qu(e,t,""+e[t])}}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=zd(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zu=/[\n"\\]/g;function st(e){return e.replace(Zu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $n(e,t,l,a,i,n,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Pn(e,o,ct(t)):l!=null?Pn(e,o,ct(l)):a!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+ct(r):e.removeAttribute("name")}function Nd(e,t,l,a,i,n,o,r){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Fn(e);return}l=l!=null?""+ct(l):"",t=t!=null?""+ct(t):l,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Fn(e)}function Pn(e,t,l){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Zl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ct(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rd(e,t,l){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ct(l):""}function Hd(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(u(92));if(vt(a)){if(1<a.length)throw Error(u(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ct(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Fn(e)}function Il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Iu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gd(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Iu.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function kd(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&Gd(e,i,a)}else for(var n in t)t.hasOwnProperty(n)&&Gd(e,n,t[n])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(e){return Wu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var to=null;function lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Wl=null;function Ld(e){var t=Kl(e);if(t&&(e=t.stateNode)){var l=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if($n(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[Xe]||null;if(!i)throw Error(u(90));$n(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Cd(a)}break e;case"textarea":Rd(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Zl(e,!!l.multiple,t,!1)}}}var ao=!1;function Ud(e,t,l){if(ao)return e(t,l);ao=!0;try{var a=e(t);return a}finally{if(ao=!1,(Jl!==null||Wl!==null)&&(yn(),Jl&&(t=Jl,e=Wl,Wl=Jl=null,Ld(t),e)))for(t=0;t<e.length;t++)Ld(e[t])}}function Na(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Xe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(Ht)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){io=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{io=!1}var $t=null,no=null,Ci=null;function Bd(){if(Ci)return Ci;var e,t=no,l=t.length,a,i="value"in $t?$t.value:$t.textContent,n=i.length;for(e=0;e<l&&t[e]===i[e];e++);var o=l-e;for(a=1;a<=o&&t[l-a]===i[n-a];a++);return Ci=i.slice(e,1<a?1-a:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function jd(){return!1}function Qe(e){function t(l,a,i,n,o){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(l=e[r],this[r]=l?l(n):n[r]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ri:jd,this.isPropagationStopped=jd,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Qe(_l),Ha=C({},_l,{view:0,detail:0}),Fu=Qe(Ha),oo,ro,Ga,Gi=C({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(oo=e.screenX-Ga.screenX,ro=e.screenY-Ga.screenY):ro=oo=0,Ga=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),Yd=Qe(Gi),$u=C({},Gi,{dataTransfer:0}),Pu=Qe($u),ep=C({},Ha,{relatedTarget:0}),co=Qe(ep),tp=C({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=Qe(tp),ap=C({},_l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=Qe(ap),np=C({},_l,{data:0}),qd=Qe(np),op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function so(){return cp}var sp=C({},Ha,{key:function(e){if(e.key){var t=op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fp=Qe(sp),up=C({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Qe(up),pp=C({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),mp=Qe(pp),gp=C({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),hp=Qe(gp),bp=C({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=Qe(bp),xp=C({},_l,{newState:0,oldState:0}),vp=Qe(xp),wp=[9,13,27,32],fo=Ht&&"CompositionEvent"in window,ka=null;Ht&&"documentMode"in document&&(ka=document.documentMode);var Ap=Ht&&"TextEvent"in window&&!ka,Kd=Ht&&(!fo||ka&&8<ka&&11>=ka),Xd=" ",Qd=!1;function Zd(e,t){switch(e){case"keyup":return wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fl=!1;function Ep(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(Qd=!0,Xd);case"textInput":return e=t.data,e===Xd&&Qd?null:e;default:return null}}function Tp(e,t){if(Fl)return e==="compositionend"||!fo&&Zd(e,t)?(e=Bd(),Ci=no=$t=null,Fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_p[e.type]:t==="textarea"}function Wd(e,t,l,a){Jl?Wl?Wl.push(a):Wl=[a]:Jl=a,t=_n(t,"onChange"),0<t.length&&(l=new Hi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var La=null,Ua=null;function Sp(e){Rf(e,0)}function ki(e){var t=Ca(e);if(Cd(t))return e}function Fd(e,t){if(e==="change")return t}var $d=!1;if(Ht){var uo;if(Ht){var po="oninput"in document;if(!po){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),po=typeof Pd.oninput=="function"}uo=po}else uo=!1;$d=uo&&(!document.documentMode||9<document.documentMode)}function ec(){La&&(La.detachEvent("onpropertychange",tc),Ua=La=null)}function tc(e){if(e.propertyName==="value"&&ki(Ua)){var t=[];Wd(t,Ua,e,lo(e)),Ud(Sp,t)}}function Mp(e,t,l){e==="focusin"?(ec(),La=t,Ua=l,La.attachEvent("onpropertychange",tc)):e==="focusout"&&ec()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Ua)}function Dp(e,t){if(e==="click")return ki(t)}function zp(e,t){if(e==="input"||e==="change")return ki(t)}function Cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Cp;function Ba(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Vn.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var l=lc(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=lc(l)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Di(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Np=Ht&&"documentMode"in document&&11>=document.documentMode,$l=null,go=null,ja=null,ho=!1;function oc(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ho||$l==null||$l!==Di(a)||(a=$l,"selectionStart"in a&&mo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ja&&Ba(ja,a)||(ja=a,a=_n(go,"onSelect"),0<a.length&&(t=new Hi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=$l)))}function Sl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionrun:Sl("Transition","TransitionRun"),transitionstart:Sl("Transition","TransitionStart"),transitioncancel:Sl("Transition","TransitionCancel"),transitionend:Sl("Transition","TransitionEnd")},bo={},rc={};Ht&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Ml(e){if(bo[e])return bo[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in rc)return bo[e]=t[l];return e}var dc=Ml("animationend"),cc=Ml("animationiteration"),sc=Ml("animationstart"),Rp=Ml("transitionrun"),Hp=Ml("transitionstart"),Gp=Ml("transitioncancel"),fc=Ml("transitionend"),uc=new Map,yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yo.push("scrollEnd");function wt(e,t){uc.set(e,t),Tl(t,[e])}var Li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],ea=0,xo=0;function Ui(){for(var e=ea,t=xo=ea=0;t<e;){var l=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var n=ft[t];if(ft[t++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}n!==0&&pc(l,i,n)}}function Bi(e,t,l,a){ft[ea++]=e,ft[ea++]=t,ft[ea++]=l,ft[ea++]=a,xo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function vo(e,t,l,a){return Bi(e,t,l,a),ji(e)}function Ol(e,t){return Bi(e,null,null,t),ji(e)}function pc(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=e.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-et(l),e=n.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),n):null}function ji(e){if(50<di)throw di=0,Dr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ta={};function kp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,l,a){return new kp(e,t,l,a)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var l=e.alternate;return l===null?(l=lt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function mc(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,l,a,i,n){var o=0;if(a=e,typeof e=="function")wo(e)&&(o=1);else if(typeof e=="string")o=Y0(e,l,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _t:return e=lt(31,l,t,i),e.elementType=_t,e.lanes=n,e;case ge:return Dl(l.children,i,n,t);case Q:o=8,i|=24;break;case F:return e=lt(12,l,t,i|2),e.elementType=F,e.lanes=n,e;case Tt:return e=lt(13,l,t,i),e.elementType=Tt,e.lanes=n,e;case qe:return e=lt(19,l,t,i),e.elementType=qe,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:o=10;break e;case we:o=9;break e;case dt:o=11;break e;case J:o=14;break e;case Ve:o=16,a=null;break e}o=29,l=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=lt(o,l,t,i),t.elementType=e,t.type=a,t.lanes=n,t}function Dl(e,t,l,a){return e=lt(7,e,a,t),e.lanes=l,e}function Ao(e,t,l){return e=lt(6,e,null,t),e.lanes=l,e}function gc(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function Eo(e,t,l){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hc=new WeakMap;function ut(e,t){if(typeof e=="object"&&e!==null){var l=hc.get(e);return l!==void 0?l:(t={value:e,source:t,stack:gd(t)},hc.set(e,t),t)}return{value:e,source:t,stack:gd(t)}}var la=[],aa=0,qi=null,Ya=0,pt=[],mt=0,Pt=null,Mt=1,Ot="";function kt(e,t){la[aa++]=Ya,la[aa++]=qi,qi=e,Ya=t}function bc(e,t,l){pt[mt++]=Mt,pt[mt++]=Ot,pt[mt++]=Pt,Pt=e;var a=Mt;e=Ot;var i=32-et(a)-1;a&=~(1<<i),l+=1;var n=32-et(t)+i;if(30<n){var o=i-i%5;n=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Mt=1<<32-et(t)+i|l<<i|a,Ot=n+e}else Mt=1<<n|l<<i|a,Ot=e}function To(e){e.return!==null&&(kt(e,1),bc(e,1,0))}function _o(e){for(;e===qi;)qi=la[--aa],la[aa]=null,Ya=la[--aa],la[aa]=null;for(;e===Pt;)Pt=pt[--mt],pt[mt]=null,Ot=pt[--mt],pt[mt]=null,Mt=pt[--mt],pt[mt]=null}function yc(e,t){pt[mt++]=Mt,pt[mt++]=Ot,pt[mt++]=Pt,Mt=t.id,Ot=t.overflow,Pt=e}var Ge=null,pe=null,W=!1,el=null,gt=!1,So=Error(u(519));function tl(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(ut(t,e)),So}function xc(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[He]=e,t[Xe]=a,l){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(l=0;l<si.length;l++)X(si[l],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Nd(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Hd(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Lf(t.textContent,l)?(a.popover!=null&&(X("beforetoggle",t),X("toggle",t)),a.onScroll!=null&&X("scroll",t),a.onScrollEnd!=null&&X("scrollend",t),a.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||tl(e,!0)}function vc(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:Ge=Ge.return}}function ia(e){if(e!==Ge)return!1;if(!W)return vc(e),W=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Kr(e.type,e.memoizedProps)),l=!l),l&&pe&&tl(e),vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));pe=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));pe=Qf(e)}else t===27?(t=pe,gl(e.type)?(e=Jr,Jr=null,pe=e):pe=t):pe=Ge?bt(e.stateNode.nextSibling):null;return!0}function zl(){pe=Ge=null,W=!1}function Mo(){var e=el;return e!==null&&(We===null?We=e:We.push.apply(We,e),el=null),e}function qa(e){el===null?el=[e]:el.push(e)}var Oo=s(null),Cl=null,Lt=null;function ll(e,t,l){M(Oo,t._currentValue),t._currentValue=l}function Ut(e){e._currentValue=Oo.current,w(Oo)}function Do(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function zo(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;e:for(;n!==null;){var r=n;n=i;for(var d=0;d<t.length;d++)if(r.context===t[d]){n.lanes|=l,r=n.alternate,r!==null&&(r.lanes|=l),Do(n.return,l,e),a||(o=null);break e}n=r.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=l,n=o.alternate,n!==null&&(n.lanes|=l),Do(o,l,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function na(e,t,l,a){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var r=i.type;tt(i.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(i===ae.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}i=i.return}e!==null&&zo(t,e,l,a),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nl(e){Cl=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return wc(Cl,e)}function Ki(e,t){return Cl===null&&Nl(e),wc(e,t)}function wc(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Lt===null){if(e===null)throw Error(u(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return l}var Lp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Up=E.unstable_scheduleCallback,Bp=E.unstable_NormalPriority,Se={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Lp,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Up(Bp,function(){e.controller.abort()})}var Ka=null,No=0,oa=0,ra=null;function jp(e,t){if(Ka===null){var l=Ka=[];No=0,oa=Gr(),ra={status:"pending",value:void 0,then:function(a){l.push(a)}}}return No++,t.then(Ac,Ac),t}function Ac(){if(--No===0&&Ka!==null){ra!==null&&(ra.status="fulfilled");var e=Ka;Ka=null,oa=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ec=y.S;y.S=function(e,t){rf=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&jp(e,t),Ec!==null&&Ec(e,t)};var Rl=s(null);function Ro(){var e=Rl.current;return e!==null?e:ue.pooledCache}function Xi(e,t){t===null?M(Rl,Rl.current):M(Rl,t.pool)}function Tc(){var e=Ro();return e===null?null:{parent:Se._currentValue,pool:e}}var da=Error(u(460)),Ho=Error(u(474)),Qi=Error(u(542)),Zi={then:function(){}};function _c(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sc(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Rt,Rt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Oc(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Oc(e),e}throw Gl=t,da}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Gl=l,da):l}}var Gl=null;function Mc(){if(Gl===null)throw Error(u(459));var e=Gl;return Gl=null,e}function Oc(e){if(e===da||e===Qi)throw Error(u(483))}var ca=null,Xa=0;function Ii(e){var t=Xa;return Xa+=1,ca===null&&(ca=[]),Sc(ca,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ji(e,t){throw t.$$typeof===te?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dc(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function l(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function a(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(f,c){return f=Gt(f,c),f.index=0,f.sibling=null,f}function n(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=67108866,c):p):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function r(f,c,p,x){return c===null||c.tag!==6?(c=Ao(p,f.mode,x),c.return=f,c):(c=i(c,p),c.return=f,c)}function d(f,c,p,x){var N=p.type;return N===ge?b(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ve&&Hl(N)===c.type)?(c=i(c,p.props),Qa(c,p),c.return=f,c):(c=Yi(p.type,p.key,p.props,null,f.mode,x),Qa(c,p),c.return=f,c)}function m(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Eo(p,f.mode,x),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function b(f,c,p,x,N){return c===null||c.tag!==7?(c=Dl(p,f.mode,x,N),c.return=f,c):(c=i(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ao(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ze:return p=Yi(c.type,c.key,c.props,null,f.mode,p),Qa(p,c),p.return=f,p;case ve:return c=Eo(c,f.mode,p),c.return=f,c;case Ve:return c=Hl(c),v(f,c,p)}if(vt(c)||Ke(c))return c=Dl(c,f.mode,p,null),c.return=f,c;if(typeof c.then=="function")return v(f,Ii(c),p);if(c.$$typeof===Ae)return v(f,Ki(f,c),p);Ji(f,c)}return null}function g(f,c,p,x){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return N!==null?null:r(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ze:return p.key===N?d(f,c,p,x):null;case ve:return p.key===N?m(f,c,p,x):null;case Ve:return p=Hl(p),g(f,c,p,x)}if(vt(p)||Ke(p))return N!==null?null:b(f,c,p,x,null);if(typeof p.then=="function")return g(f,c,Ii(p),x);if(p.$$typeof===Ae)return g(f,c,Ki(f,p),x);Ji(f,p)}return null}function h(f,c,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(p)||null,r(c,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ze:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,N);case ve:return f=f.get(x.key===null?p:x.key)||null,m(c,f,x,N);case Ve:return x=Hl(x),h(f,c,p,x,N)}if(vt(x)||Ke(x))return f=f.get(p)||null,b(c,f,x,N,null);if(typeof x.then=="function")return h(f,c,p,Ii(x),N);if(x.$$typeof===Ae)return h(f,c,p,Ki(c,x),N);Ji(c,x)}return null}function O(f,c,p,x){for(var N=null,P=null,z=c,q=c=0,I=null;z!==null&&q<p.length;q++){z.index>q?(I=z,z=null):I=z.sibling;var ee=g(f,z,p[q],x);if(ee===null){z===null&&(z=I);break}e&&z&&ee.alternate===null&&t(f,z),c=n(ee,c,q),P===null?N=ee:P.sibling=ee,P=ee,z=I}if(q===p.length)return l(f,z),W&&kt(f,q),N;if(z===null){for(;q<p.length;q++)z=v(f,p[q],x),z!==null&&(c=n(z,c,q),P===null?N=z:P.sibling=z,P=z);return W&&kt(f,q),N}for(z=a(z);q<p.length;q++)I=h(z,f,q,p[q],x),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?q:I.key),c=n(I,c,q),P===null?N=I:P.sibling=I,P=I);return e&&z.forEach(function(vl){return t(f,vl)}),W&&kt(f,q),N}function G(f,c,p,x){if(p==null)throw Error(u(151));for(var N=null,P=null,z=c,q=c=0,I=null,ee=p.next();z!==null&&!ee.done;q++,ee=p.next()){z.index>q?(I=z,z=null):I=z.sibling;var vl=g(f,z,ee.value,x);if(vl===null){z===null&&(z=I);break}e&&z&&vl.alternate===null&&t(f,z),c=n(vl,c,q),P===null?N=vl:P.sibling=vl,P=vl,z=I}if(ee.done)return l(f,z),W&&kt(f,q),N;if(z===null){for(;!ee.done;q++,ee=p.next())ee=v(f,ee.value,x),ee!==null&&(c=n(ee,c,q),P===null?N=ee:P.sibling=ee,P=ee);return W&&kt(f,q),N}for(z=a(z);!ee.done;q++,ee=p.next())ee=h(z,f,q,ee.value,x),ee!==null&&(e&&ee.alternate!==null&&z.delete(ee.key===null?q:ee.key),c=n(ee,c,q),P===null?N=ee:P.sibling=ee,P=ee);return e&&z.forEach(function($0){return t(f,$0)}),W&&kt(f,q),N}function se(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===ge&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ze:e:{for(var N=p.key;c!==null;){if(c.key===N){if(N=p.type,N===ge){if(c.tag===7){l(f,c.sibling),x=i(c,p.props.children),x.return=f,f=x;break e}}else if(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ve&&Hl(N)===c.type){l(f,c.sibling),x=i(c,p.props),Qa(x,p),x.return=f,f=x;break e}l(f,c);break}else t(f,c);c=c.sibling}p.type===ge?(x=Dl(p.props.children,f.mode,x,p.key),x.return=f,f=x):(x=Yi(p.type,p.key,p.props,null,f.mode,x),Qa(x,p),x.return=f,f=x)}return o(f);case ve:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){l(f,c.sibling),x=i(c,p.children||[]),x.return=f,f=x;break e}else{l(f,c);break}else t(f,c);c=c.sibling}x=Eo(p,f.mode,x),x.return=f,f=x}return o(f);case Ve:return p=Hl(p),se(f,c,p,x)}if(vt(p))return O(f,c,p,x);if(Ke(p)){if(N=Ke(p),typeof N!="function")throw Error(u(150));return p=N.call(p),G(f,c,p,x)}if(typeof p.then=="function")return se(f,c,Ii(p),x);if(p.$$typeof===Ae)return se(f,c,Ki(f,p),x);Ji(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(l(f,c.sibling),x=i(c,p),x.return=f,f=x):(l(f,c),x=Ao(p,f.mode,x),x.return=f,f=x),o(f)):l(f,c)}return function(f,c,p,x){try{Xa=0;var N=se(f,c,p,x);return ca=null,N}catch(z){if(z===da||z===Qi)throw z;var P=lt(29,z,null,f.mode);return P.lanes=x,P.return=f,P}}}var kl=Dc(!0),zc=Dc(!1),al=!1;function Go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ji(e),pc(e,null,l),t}return Bi(e,a,t,l),ji(e)}function Za(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wd(e,l)}}function Lo(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,l=l.next}while(l!==null);n===null?i=n=t:n=n.next=t}else i=n=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Uo=!1;function Ia(){if(Uo){var e=ra;if(e!==null)throw e}}function Ja(e,t,l,a){Uo=!1;var i=e.updateQueue;al=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var d=r,m=d.next;d.next=null,o===null?n=m:o.next=m,o=d;var b=e.alternate;b!==null&&(b=b.updateQueue,r=b.lastBaseUpdate,r!==o&&(r===null?b.firstBaseUpdate=m:r.next=m,b.lastBaseUpdate=d))}if(n!==null){var v=i.baseState;o=0,b=m=d=null,r=n;do{var g=r.lane&-536870913,h=g!==r.lane;if(h?(Z&g)===g:(a&g)===g){g!==0&&g===oa&&(Uo=!0),b!==null&&(b=b.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var O=e,G=r;g=t;var se=l;switch(G.tag){case 1:if(O=G.payload,typeof O=="function"){v=O.call(se,v,g);break e}v=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=G.payload,g=typeof O=="function"?O.call(se,v,g):O,g==null)break e;v=C({},v,g);break e;case 2:al=!0}}g=r.callback,g!==null&&(e.flags|=64,h&&(e.flags|=8192),h=i.callbacks,h===null?i.callbacks=[g]:h.push(g))}else h={lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},b===null?(m=b=h,d=v):b=b.next=h,o|=g;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;h=r,r=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);b===null&&(d=v),i.baseState=d,i.firstBaseUpdate=m,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),sl|=o,e.lanes=o,e.memoizedState=v}}function Cc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Nc(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Cc(l[e],t)}var sa=s(null),Wi=s(0);function Rc(e,t){e=Zt,M(Wi,e),M(sa,t),Zt=e|t.baseLanes}function Bo(){M(Wi,Zt),M(sa,sa.current)}function jo(){Zt=Wi.current,w(sa),w(Wi)}var at=s(null),ht=null;function ol(e){var t=e.alternate;M(Te,Te.current&1),M(at,e),ht===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(ht=e)}function Yo(e){M(Te,Te.current),M(at,e),ht===null&&(ht=e)}function Hc(e){e.tag===22?(M(Te,Te.current),M(at,e),ht===null&&(ht=e)):rl()}function rl(){M(Te,Te.current),M(at,at.current)}function it(e){w(at),ht===e&&(ht=null),w(Te)}var Te=s(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Zr(l)||Ir(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,Y=null,de=null,Me=null,$i=!1,fa=!1,Ll=!1,Pi=0,Wa=0,ua=null,qp=0;function ye(){throw Error(u(321))}function qo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!tt(e[l],t[l]))return!1;return!0}function Vo(e,t,l,a,i,n){return Bt=n,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?bs:ir,Ll=!1,n=l(a,i),Ll=!1,fa&&(n=kc(t,l,a,i)),Gc(e),n}function Gc(e){y.H=Pa;var t=de!==null&&de.next!==null;if(Bt=0,Me=de=Y=null,$i=!1,Wa=0,ua=null,t)throw Error(u(300));e===null||Oe||(e=e.dependencies,e!==null&&Vi(e)&&(Oe=!0))}function kc(e,t,l,a){Y=e;var i=0;do{if(fa&&(ua=null),Wa=0,fa=!1,25<=i)throw Error(u(301));if(i+=1,Me=de=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}y.H=ys,n=t(l,a)}while(fa);return n}function Vp(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Fa(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Y.flags|=1024),t}function Ko(){var e=Pi!==0;return Pi=0,e}function Xo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Qo(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}Bt=0,Me=de=Y=null,fa=!1,Wa=Pi=0,ua=null}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Y.memoizedState=Me=e:Me=Me.next=e,Me}function _e(){if(de===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Me===null?Y.memoizedState:Me.next;if(t!==null)Me=t,de=e;else{if(e===null)throw Y.alternate===null?Error(u(467)):Error(u(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Me===null?Y.memoizedState=Me=e:Me=Me.next=e}return Me}function en(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(e){var t=Wa;return Wa+=1,ua===null&&(ua=[]),e=Sc(ua,e,t),t=Y,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?bs:ir),e}function tn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fa(e);if(e.$$typeof===Ae)return ke(e)}throw Error(u(438,String(e)))}function Zo(e){var t=null,l=Y.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Y.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=en(),Y.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Yl;return t.index++,l}function jt(e,t){return typeof t=="function"?t(e):t}function ln(e){var t=_e();return Io(t,de,e)}function Io(e,t,l){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=l;var i=e.baseQueue,n=a.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}t.baseQueue=i=n,a.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var r=o=null,d=null,m=t,b=!1;do{var v=m.lane&-536870913;if(v!==m.lane?(Z&v)===v:(Bt&v)===v){var g=m.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),v===oa&&(b=!0);else if((Bt&g)===g){m=m.next,g===oa&&(b=!0);continue}else v={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},d===null?(r=d=v,o=n):d=d.next=v,Y.lanes|=g,sl|=g;v=m.action,Ll&&l(n,v),n=m.hasEagerState?m.eagerState:l(n,v)}else g={lane:v,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},d===null?(r=d=g,o=n):d=d.next=g,Y.lanes|=v,sl|=v;m=m.next}while(m!==null&&m!==t);if(d===null?o=n:d.next=r,!tt(n,e.memoizedState)&&(Oe=!0,b&&(l=ra,l!==null)))throw l;e.memoizedState=n,e.baseState=o,e.baseQueue=d,a.lastRenderedState=n}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Jo(e){var t=_e(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,n=t.memoizedState;if(i!==null){l.pending=null;var o=i=i.next;do n=e(n,o.action),o=o.next;while(o!==i);tt(n,t.memoizedState)||(Oe=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),l.lastRenderedState=n}return[n,a]}function Lc(e,t,l){var a=Y,i=_e(),n=W;if(n){if(l===void 0)throw Error(u(407));l=l()}else l=t();var o=!tt((de||i).memoizedState,l);if(o&&(i.memoizedState=l,Oe=!0),i=i.queue,$o(jc.bind(null,a,i,e),[e]),i.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Bc.bind(null,a,i,l,t),null),ue===null)throw Error(u(349));n||(Bt&127)!==0||Uc(a,t,l)}return l}function Uc(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Y.updateQueue,t===null?(t=en(),Y.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Bc(e,t,l,a){t.value=l,t.getSnapshot=a,Yc(t)&&qc(e)}function jc(e,t,l){return l(function(){Yc(t)&&qc(e)})}function Yc(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!tt(e,l)}catch{return!0}}function qc(e){var t=Ol(e,2);t!==null&&Fe(t,e,2)}function Wo(e){var t=Ye();if(typeof e=="function"){var l=e;if(e=l(),Ll){Wt(!0);try{l()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},t}function Vc(e,t,l,a){return e.baseState=l,Io(e,de,typeof a=="function"?a:jt)}function Kp(e,t,l,a,i){if(on(e))throw Error(u(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};y.T!==null?l(!0):n.isTransition=!1,a(n),l=t.pending,l===null?(n.next=t.pending=n,Kc(t,n)):(n.next=l.next,t.pending=l.next=n)}}function Kc(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var n=y.T,o={};y.T=o;try{var r=l(i,a),d=y.S;d!==null&&d(o,r),Xc(e,t,r)}catch(m){Fo(e,t,m)}finally{n!==null&&o.types!==null&&(n.types=o.types),y.T=n}}else try{n=l(i,a),Xc(e,t,n)}catch(m){Fo(e,t,m)}}function Xc(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Qc(e,t,a)},function(a){return Fo(e,t,a)}):Qc(e,t,l)}function Qc(e,t,l){t.status="fulfilled",t.value=l,Zc(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Kc(e,l)))}function Fo(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Zc(t),t=t.next;while(t!==a)}e.action=null}function Zc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ic(e,t){return t}function Jc(e,t){if(W){var l=ue.formState;if(l!==null){e:{var a=Y;if(W){if(pe){t:{for(var i=pe,n=gt;i.nodeType!==8;){if(!n){i=null;break t}if(i=bt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){pe=bt(i.nextSibling),a=i.data==="F!";break e}}tl(a)}a=!1}a&&(t=l[0])}}return l=Ye(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ic,lastRenderedState:t},l.queue=a,l=ms.bind(null,Y,a),a.dispatch=l,a=Wo(!1),n=ar.bind(null,Y,!1,a.queue),a=Ye(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=Kp.bind(null,Y,i,n,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function Wc(e){var t=_e();return Fc(t,de,e)}function Fc(e,t,l){if(t=Io(e,t,Ic)[0],e=ln(jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(o){throw o===da?Qi:o}else a=t;t=_e();var i=t.queue,n=i.dispatch;return l!==t.memoizedState&&(Y.flags|=2048,pa(9,{destroy:void 0},Xp.bind(null,i,l),null)),[a,n,e]}function Xp(e,t){e.action=t}function $c(e){var t=_e(),l=de;if(l!==null)return Fc(t,l,e);_e(),t=t.memoizedState,l=_e();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function pa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Y.updateQueue,t===null&&(t=en(),Y.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Pc(){return _e().memoizedState}function an(e,t,l,a){var i=Ye();Y.flags|=e,i.memoizedState=pa(1|t,{destroy:void 0},l,a===void 0?null:a)}function nn(e,t,l,a){var i=_e();a=a===void 0?null:a;var n=i.memoizedState.inst;de!==null&&a!==null&&qo(a,de.memoizedState.deps)?i.memoizedState=pa(t,n,l,a):(Y.flags|=e,i.memoizedState=pa(1|t,n,l,a))}function es(e,t){an(8390656,8,e,t)}function $o(e,t){nn(2048,8,e,t)}function Qp(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=en(),Y.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ts(e){var t=_e().memoizedState;return Qp({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ls(e,t){return nn(4,2,e,t)}function as(e,t){return nn(4,4,e,t)}function is(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,l){l=l!=null?l.concat([e]):null,nn(4,4,is.bind(null,t,e),l)}function Po(){}function os(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&qo(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function rs(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&qo(t,a[1]))return a[0];if(a=e(),Ll){Wt(!0);try{e()}finally{Wt(!1)}}return l.memoizedState=[a,t],a}function er(e,t,l){return l===void 0||(Bt&1073741824)!==0&&(Z&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=cf(),Y.lanes|=e,sl|=e,l)}function ds(e,t,l,a){return tt(l,t)?l:sa.current!==null?(e=er(e,l,a),tt(e,t)||(Oe=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(Z&261930)===0?(Oe=!0,e.memoizedState=l):(e=cf(),Y.lanes|=e,sl|=e,t)}function cs(e,t,l,a,i){var n=S.p;S.p=n!==0&&8>n?n:8;var o=y.T,r={};y.T=r,ar(e,!1,t,l);try{var d=i(),m=y.S;if(m!==null&&m(r,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var b=Yp(d,a);$a(e,t,b,rt(e))}else $a(e,t,a,rt(e))}catch(v){$a(e,t,{then:function(){},status:"rejected",reason:v},rt())}finally{S.p=n,o!==null&&r.types!==null&&(o.types=r.types),y.T=o}}function Zp(){}function tr(e,t,l,a){if(e.tag!==5)throw Error(u(476));var i=ss(e).queue;cs(e,i,t,k,l===null?Zp:function(){return fs(e),l(a)})}function ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:k},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fs(e){var t=ss(e);t.next===null&&(t=e.alternate.memoizedState),$a(e,t.next.queue,{},rt())}function lr(){return ke(gi)}function us(){return _e().memoizedState}function ps(){return _e().memoizedState}function Ip(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=rt();e=il(l);var a=nl(t,e,l);a!==null&&(Fe(a,t,l),Za(a,t,l)),t={cache:Co()},e.payload=t;return}t=t.return}}function Jp(e,t,l){var a=rt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},on(e)?gs(t,l):(l=vo(e,t,l,a),l!==null&&(Fe(l,e,a),hs(l,t,a)))}function ms(e,t,l){var a=rt();$a(e,t,l,a)}function $a(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(on(e))gs(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var o=t.lastRenderedState,r=n(o,l);if(i.hasEagerState=!0,i.eagerState=r,tt(r,o))return Bi(e,t,i,0),ue===null&&Ui(),!1}catch{}if(l=vo(e,t,i,a),l!==null)return Fe(l,e,a),hs(l,t,a),!0}return!1}function ar(e,t,l,a){if(a={lane:2,revertLane:Gr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},on(e)){if(t)throw Error(u(479))}else t=vo(e,l,a,2),t!==null&&Fe(t,e,2)}function on(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function gs(e,t){fa=$i=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function hs(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wd(e,l)}}var Pa={readContext:ke,use:tn,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};Pa.useEffectEvent=ye;var bs={readContext:ke,use:tn,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:es,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,an(4194308,4,is.bind(null,t,e),l)},useLayoutEffect:function(e,t){return an(4194308,4,e,t)},useInsertionEffect:function(e,t){an(4,2,e,t)},useMemo:function(e,t){var l=Ye();t=t===void 0?null:t;var a=e();if(Ll){Wt(!0);try{e()}finally{Wt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ye();if(l!==void 0){var i=l(t);if(Ll){Wt(!0);try{l(t)}finally{Wt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Jp.bind(null,Y,e),[a.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,l=ms.bind(null,Y,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Po,useDeferredValue:function(e,t){var l=Ye();return er(l,e,t)},useTransition:function(){var e=Wo(!1);return e=cs.bind(null,Y,e.queue,!0,!1),Ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Y,i=Ye();if(W){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),ue===null)throw Error(u(349));(Z&127)!==0||Uc(a,t,l)}i.memoizedState=l;var n={value:l,getSnapshot:t};return i.queue=n,es(jc.bind(null,a,n,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},Bc.bind(null,a,n,l,t),null),l},useId:function(){var e=Ye(),t=ue.identifierPrefix;if(W){var l=Ot,a=Mt;l=(a&~(1<<32-et(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Pi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=qp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lr,useFormState:Jc,useActionState:Jc,useOptimistic:function(e){var t=Ye();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ar.bind(null,Y,!0,l),l.dispatch=t,[e,t]},useMemoCache:Zo,useCacheRefresh:function(){return Ye().memoizedState=Ip.bind(null,Y)},useEffectEvent:function(e){var t=Ye(),l={impl:e};return t.memoizedState=l,function(){if((le&2)!==0)throw Error(u(440));return l.impl.apply(void 0,arguments)}}},ir={readContext:ke,use:tn,useCallback:os,useContext:ke,useEffect:$o,useImperativeHandle:ns,useInsertionEffect:ls,useLayoutEffect:as,useMemo:rs,useReducer:ln,useRef:Pc,useState:function(){return ln(jt)},useDebugValue:Po,useDeferredValue:function(e,t){var l=_e();return ds(l,de.memoizedState,e,t)},useTransition:function(){var e=ln(jt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Lc,useId:us,useHostTransitionStatus:lr,useFormState:Wc,useActionState:Wc,useOptimistic:function(e,t){var l=_e();return Vc(l,de,e,t)},useMemoCache:Zo,useCacheRefresh:ps};ir.useEffectEvent=ts;var ys={readContext:ke,use:tn,useCallback:os,useContext:ke,useEffect:$o,useImperativeHandle:ns,useInsertionEffect:ls,useLayoutEffect:as,useMemo:rs,useReducer:Jo,useRef:Pc,useState:function(){return Jo(jt)},useDebugValue:Po,useDeferredValue:function(e,t){var l=_e();return de===null?er(l,e,t):ds(l,de.memoizedState,e,t)},useTransition:function(){var e=Jo(jt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Lc,useId:us,useHostTransitionStatus:lr,useFormState:$c,useActionState:$c,useOptimistic:function(e,t){var l=_e();return de!==null?Vc(l,de,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Zo,useCacheRefresh:ps};ys.useEffectEvent=ts;function nr(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:C({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var or={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=rt(),i=il(a);i.payload=t,l!=null&&(i.callback=l),t=nl(e,i,a),t!==null&&(Fe(t,e,a),Za(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=rt(),i=il(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=nl(e,i,a),t!==null&&(Fe(t,e,a),Za(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=rt(),a=il(l);a.tag=2,t!=null&&(a.callback=t),t=nl(e,a,l),t!==null&&(Fe(t,e,l),Za(t,e,l))}};function xs(e,t,l,a,i,n,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,o):t.prototype&&t.prototype.isPureReactComponent?!Ba(l,a)||!Ba(i,n):!0}function vs(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&or.enqueueReplaceState(t,t.state,null)}function Ul(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=C({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function ws(e){Li(e)}function As(e){console.error(e)}function Es(e){Li(e)}function rn(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ts(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rr(e,t,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){rn(e,t)},l}function _s(e){return e=il(e),e.tag=3,e}function Ss(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;e.payload=function(){return i(n)},e.callback=function(){Ts(t,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ts(t,l,a),typeof i!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function Wp(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&na(t,l,i,!0),l=at.current,l!==null){switch(l.tag){case 31:case 13:return ht===null?xn():l.alternate===null&&xe===0&&(xe=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Zi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Nr(e,a,i)),!1;case 22:return l.flags|=65536,a===Zi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Nr(e,a,i)),!1}throw Error(u(435,l.tag))}return Nr(e,a,i),xn(),!1}if(W)return t=at.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==So&&(e=Error(u(422),{cause:a}),qa(ut(e,l)))):(a!==So&&(t=Error(u(423),{cause:a}),qa(ut(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=ut(a,l),i=rr(e.stateNode,a,i),Lo(e,i),xe!==4&&(xe=2)),!1;var n=Error(u(520),{cause:a});if(n=ut(n,l),ri===null?ri=[n]:ri.push(n),xe!==4&&(xe=2),t===null)return!0;a=ut(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=rr(l.stateNode,a,e),Lo(l,e),!1;case 1:if(t=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(fl===null||!fl.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=_s(i),Ss(i,e,l,a),Lo(l,i),!1}l=l.return}while(l!==null);return!1}var dr=Error(u(461)),Oe=!1;function Le(e,t,l,a){t.child=e===null?zc(t,null,l,a):kl(t,e.child,l,a)}function Ms(e,t,l,a,i){l=l.render;var n=t.ref;if("ref"in a){var o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}else o=a;return Nl(t),a=Vo(e,t,l,o,n,i),r=Ko(),e!==null&&!Oe?(Xo(e,t,i),Yt(e,t,i)):(W&&r&&To(t),t.flags|=1,Le(e,t,a,i),t.child)}function Os(e,t,l,a,i){if(e===null){var n=l.type;return typeof n=="function"&&!wo(n)&&n.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=n,Ds(e,t,n,a,i)):(e=Yi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!hr(e,i)){var o=n.memoizedProps;if(l=l.compare,l=l!==null?l:Ba,l(o,a)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=Gt(n,a),e.ref=t.ref,e.return=t,t.child=e}function Ds(e,t,l,a,i){if(e!==null){var n=e.memoizedProps;if(Ba(n,a)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=a=n,hr(e,i))(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return cr(e,t,l,a,i)}function zs(e,t,l,a){var i=a.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,t.child=null;return Cs(e,t,n,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xi(t,n!==null?n.cachePool:null),n!==null?Rc(t,n):Bo(),Hc(t);else return a=t.lanes=536870912,Cs(e,t,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Xi(t,n.cachePool),Rc(t,n),rl(),t.memoizedState=null):(e!==null&&Xi(t,null),Bo(),rl());return Le(e,t,i,l),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cs(e,t,l,a,i){var n=Ro();return n=n===null?null:{parent:Se._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&Xi(t,null),Bo(),Hc(t),e!==null&&na(e,t,a,!0),t.childLanes=i,null}function dn(e,t){return t=sn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ns(e,t,l){return kl(t,e.child,null,l),e=dn(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function Fp(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(W){if(a.mode==="hidden")return e=dn(t,a),t.lanes=536870912,ei(null,e);if(Yo(t),(e=pe)?(e=Xf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=gc(e),l.return=t,t.child=l,Ge=t,pe=null)):e=null,e===null)throw tl(t);return t.lanes=536870912,null}return dn(t,a)}var n=e.memoizedState;if(n!==null){var o=n.dehydrated;if(Yo(t),i)if(t.flags&256)t.flags&=-257,t=Ns(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Oe||na(e,t,l,!1),i=(l&e.childLanes)!==0,Oe||i){if(a=ue,a!==null&&(o=Ad(a,l),o!==0&&o!==n.retryLane))throw n.retryLane=o,Ol(e,o),Fe(a,e,o),dr;xn(),t=Ns(e,t,l)}else e=n.treeContext,pe=bt(o.nextSibling),Ge=t,W=!0,el=null,gt=!1,e!==null&&yc(t,e),t=dn(t,a),t.flags|=4096;return t}return e=Gt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function cr(e,t,l,a,i){return Nl(t),l=Vo(e,t,l,a,void 0,i),a=Ko(),e!==null&&!Oe?(Xo(e,t,i),Yt(e,t,i)):(W&&a&&To(t),t.flags|=1,Le(e,t,l,i),t.child)}function Rs(e,t,l,a,i,n){return Nl(t),t.updateQueue=null,l=kc(t,a,l,i),Gc(e),a=Ko(),e!==null&&!Oe?(Xo(e,t,n),Yt(e,t,n)):(W&&a&&To(t),t.flags|=1,Le(e,t,l,n),t.child)}function Hs(e,t,l,a,i){if(Nl(t),t.stateNode===null){var n=ta,o=l.contextType;typeof o=="object"&&o!==null&&(n=ke(o)),n=new l(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=or,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Go(t),o=l.contextType,n.context=typeof o=="object"&&o!==null?ke(o):ta,n.state=t.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(nr(t,l,o,a),n.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&or.enqueueReplaceState(n,n.state,null),Ja(t,a,n,i),Ia(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){n=t.stateNode;var r=t.memoizedProps,d=Ul(l,r);n.props=d;var m=n.context,b=l.contextType;o=ta,typeof b=="object"&&b!==null&&(o=ke(b));var v=l.getDerivedStateFromProps;b=typeof v=="function"||typeof n.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(r||m!==o)&&vs(t,n,a,o),al=!1;var g=t.memoizedState;n.state=g,Ja(t,a,n,i),Ia(),m=t.memoizedState,r||g!==m||al?(typeof v=="function"&&(nr(t,l,v,a),m=t.memoizedState),(d=al||xs(t,l,d,a,g,m,o))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),n.props=a,n.state=m,n.context=o,a=d):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,ko(e,t),o=t.memoizedProps,b=Ul(l,o),n.props=b,v=t.pendingProps,g=n.context,m=l.contextType,d=ta,typeof m=="object"&&m!==null&&(d=ke(m)),r=l.getDerivedStateFromProps,(m=typeof r=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==v||g!==d)&&vs(t,n,a,d),al=!1,g=t.memoizedState,n.state=g,Ja(t,a,n,i),Ia();var h=t.memoizedState;o!==v||g!==h||al||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof r=="function"&&(nr(t,l,r,a),h=t.memoizedState),(b=al||xs(t,l,b,a,g,h,d)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,h,d),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,h,d)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),n.props=a,n.state=h,n.context=d,a=b):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return n=a,cn(e,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&a?(t.child=kl(t,e.child,null,i),t.child=kl(t,null,l,i)):Le(e,t,l,i),t.memoizedState=n.state,e=t.child):e=Yt(e,t,i),e}function Gs(e,t,l,a){return zl(),t.flags|=256,Le(e,t,l,a),t.child}var sr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fr(e){return{baseLanes:e,cachePool:Tc()}}function ur(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ot),e}function ks(e,t,l){var a=t.pendingProps,i=!1,n=(t.flags&128)!==0,o;if((o=n)||(o=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(i?ol(t):rl(),(e=pe)?(e=Xf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=gc(e),l.return=t,t.child=l,Ge=t,pe=null)):e=null,e===null)throw tl(t);return Ir(e)?t.lanes=32:t.lanes=536870912,null}var r=a.children;return a=a.fallback,i?(rl(),i=t.mode,r=sn({mode:"hidden",children:r},i),a=Dl(a,i,l,null),r.return=t,a.return=t,r.sibling=a,t.child=r,a=t.child,a.memoizedState=fr(l),a.childLanes=ur(e,o,l),t.memoizedState=sr,ei(null,a)):(ol(t),pr(t,r))}var d=e.memoizedState;if(d!==null&&(r=d.dehydrated,r!==null)){if(n)t.flags&256?(ol(t),t.flags&=-257,t=mr(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),r=a.fallback,i=t.mode,a=sn({mode:"visible",children:a.children},i),r=Dl(r,i,l,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,kl(t,e.child,null,l),a=t.child,a.memoizedState=fr(l),a.childLanes=ur(e,o,l),t.memoizedState=sr,t=ei(null,a));else if(ol(t),Ir(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var m=o.dgst;o=m,a=Error(u(419)),a.stack="",a.digest=o,qa({value:a,source:null,stack:null}),t=mr(e,t,l)}else if(Oe||na(e,t,l,!1),o=(l&e.childLanes)!==0,Oe||o){if(o=ue,o!==null&&(a=Ad(o,l),a!==0&&a!==d.retryLane))throw d.retryLane=a,Ol(e,a),Fe(o,e,a),dr;Zr(r)||xn(),t=mr(e,t,l)}else Zr(r)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,pe=bt(r.nextSibling),Ge=t,W=!0,el=null,gt=!1,e!==null&&yc(t,e),t=pr(t,a.children),t.flags|=4096);return t}return i?(rl(),r=a.fallback,i=t.mode,d=e.child,m=d.sibling,a=Gt(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,m!==null?r=Gt(m,r):(r=Dl(r,i,l,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,ei(null,a),a=t.child,r=e.child.memoizedState,r===null?r=fr(l):(i=r.cachePool,i!==null?(d=Se._currentValue,i=i.parent!==d?{parent:d,pool:d}:i):i=Tc(),r={baseLanes:r.baseLanes|l,cachePool:i}),a.memoizedState=r,a.childLanes=ur(e,o,l),t.memoizedState=sr,ei(e.child,a)):(ol(t),l=e.child,e=l.sibling,l=Gt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l)}function pr(e,t){return t=sn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sn(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function mr(e,t,l){return kl(t,e.child,null,l),e=pr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Do(e.return,t,l)}function gr(e,t,l,a,i,n){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=i,o.treeForkCount=n)}function Us(e,t,l){var a=t.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var o=Te.current,r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,M(Te,o),Le(e,t,a,l),a=W?Ya:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,l,t);else if(e.tag===19)Ls(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&Fi(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),gr(t,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}gr(t,!0,l,null,n,a);break;case"together":gr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Yt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),sl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(na(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=Gt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Gt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function hr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function $p(e,t,l){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),ll(t,Se,e.memoizedState.cache),zl();break;case 27:case 5:Sa(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?ks(e,t,l):(ol(t),e=Yt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(na(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return Us(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(Te,Te.current),a)break;return null;case 22:return t.lanes=0,zs(e,t,l,t.pendingProps);case 24:ll(t,Se,e.memoizedState.cache)}return Yt(e,t,l)}function Bs(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!hr(e,l)&&(t.flags&128)===0)return Oe=!1,$p(e,t,l);Oe=(e.flags&131072)!==0}else Oe=!1,W&&(t.flags&1048576)!==0&&bc(t,Ya,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")wo(e)?(a=Ul(e,a),t.tag=1,t=Hs(null,t,e,a,l)):(t.tag=0,t=cr(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===dt){t.tag=11,t=Ms(null,t,e,a,l);break e}else if(i===J){t.tag=14,t=Os(null,t,e,a,l);break e}}throw t=Ct(e)||e,Error(u(306,t,""))}}return t;case 0:return cr(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Ul(a,t.pendingProps),Hs(e,t,a,i,l);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var n=t.memoizedState;i=n.element,ko(e,t),Ja(t,a,null,l);var o=t.memoizedState;if(a=o.cache,ll(t,Se,a),a!==n.cache&&zo(t,[Se],l,!0),Ia(),a=o.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Gs(e,t,a,l);break e}else if(a!==i){i=ut(Error(u(424)),t),qa(i),t=Gs(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pe=bt(e.firstChild),Ge=t,W=!0,el=null,gt=!0,l=zc(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(zl(),a===i){t=Yt(e,t,l);break e}Le(e,t,a,l)}t=t.child}return t;case 26:return cn(e,t),e===null?(l=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=l:W||(l=t.type,e=t.pendingProps,a=Sn(V.current).createElement(l),a[He]=t,a[Xe]=e,Ue(a,l,e),Ne(a),t.stateNode=a):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sa(t),e===null&&W&&(a=t.stateNode=If(t.type,t.pendingProps,V.current),Ge=t,gt=!0,i=pe,gl(t.type)?(Jr=i,pe=bt(a.firstChild)):pe=i),Le(e,t,t.pendingProps.children,l),cn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((i=a=pe)&&(a=O0(a,t.type,t.pendingProps,gt),a!==null?(t.stateNode=a,Ge=t,pe=bt(a.firstChild),gt=!1,i=!0):i=!1),i||tl(t)),Sa(t),i=t.type,n=t.pendingProps,o=e!==null?e.memoizedProps:null,a=n.children,Kr(i,n)?a=null:o!==null&&Kr(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Vo(e,t,Vp,null,null,l),gi._currentValue=i),cn(e,t),Le(e,t,a,l),t.child;case 6:return e===null&&W&&((e=l=pe)&&(l=D0(l,t.pendingProps,gt),l!==null?(t.stateNode=l,Ge=t,pe=null,e=!0):e=!1),e||tl(t)),null;case 13:return ks(e,t,l);case 4:return je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kl(t,null,a,l):Le(e,t,a,l),t.child;case 11:return Ms(e,t,t.type,t.pendingProps,l);case 7:return Le(e,t,t.pendingProps,l),t.child;case 8:return Le(e,t,t.pendingProps.children,l),t.child;case 12:return Le(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ll(t,t.type,a.value),Le(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Nl(t),i=ke(i),a=a(i),t.flags|=1,Le(e,t,a,l),t.child;case 14:return Os(e,t,t.type,t.pendingProps,l);case 15:return Ds(e,t,t.type,t.pendingProps,l);case 19:return Us(e,t,l);case 31:return Fp(e,t,l);case 22:return zs(e,t,l,t.pendingProps);case 24:return Nl(t),a=ke(Se),e===null?(i=Ro(),i===null&&(i=ue,n=Co(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),t.memoizedState={parent:a,cache:i},Go(t),ll(t,Se,i)):((e.lanes&l)!==0&&(ko(e,t),Ja(t,null,null,l),Ia()),i=e.memoizedState,n=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ll(t,Se,a)):(a=n.cache,ll(t,Se,a),a!==i.cache&&zo(t,[Se],l,!0))),Le(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function qt(e){e.flags|=4}function br(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(pf())e.flags|=8192;else throw Gl=Zi,Ho}else e.flags&=-16777217}function js(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lu(t))if(pf())e.flags|=8192;else throw Gl=Zi,Ho}function fn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xd():536870912,e.lanes|=t,ba|=t)}function ti(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Pp(e,t,l){var a=t.pendingProps;switch(_o(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(Se),Ee(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mo())),me(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(qt(t),n!==null?(me(t),js(t,n)):(me(t),br(t,i,null,a,l))):n?n!==e.memoizedState?(qt(t),me(t),js(t,n)):(me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&qt(t),me(t),br(t,i,e,a,l)),null;case 27:if(wi(t),l=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return me(t),null}e=D.current,ia(t)?xc(t):(e=If(i,a,l),t.stateNode=e,qt(t))}return me(t),null;case 5:if(wi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return me(t),null}if(n=D.current,ia(t))xc(t);else{var o=Sn(V.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}n[He]=t,n[Xe]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=n;e:switch(Ue(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&qt(t)}}return me(t),br(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=V.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=Ge,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[He]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Lf(e.nodeValue,l)),e||tl(t,!0)}else e=Sn(e).createTextNode(a),e[He]=t,t.stateNode=e}return me(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[He]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),e=!1}else l=Mo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(u(558))}return me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[He]=t}else zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else i=Mo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),fn(t,t.updateQueue),me(t),null);case 4:return Ee(),e===null&&Br(t.stateNode.containerInfo),me(t),null;case 10:return Ut(t.type),me(t),null;case 19:if(w(Te),a=t.memoizedState,a===null)return me(t),null;if(i=(t.flags&128)!==0,n=a.rendering,n===null)if(i)ti(a,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Fi(e),n!==null){for(t.flags|=128,ti(a,!1),e=n.updateQueue,t.updateQueue=e,fn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)mc(l,e),l=l.sibling;return M(Te,Te.current&1|2),W&&kt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&$e()>hn&&(t.flags|=128,i=!0,ti(a,!1),t.lanes=4194304)}else{if(!i)if(e=Fi(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fn(t,e),ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!W)return me(t),null}else 2*$e()-a.renderingStartTime>hn&&l!==536870912&&(t.flags|=128,i=!0,ti(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(e=a.last,e!==null?e.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,l=Te.current,M(Te,i?l&1|2:l&1),W&&kt(t,a.treeForkCount),e):(me(t),null);case 22:case 23:return it(t),jo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),l=t.updateQueue,l!==null&&fn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&w(Rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(Se),me(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function e0(e,t){switch(_o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(Se),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wi(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(u(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Te),null;case 4:return Ee(),null;case 10:return Ut(t.type),null;case 22:case 23:return it(t),jo(),e!==null&&w(Rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(Se),null;case 25:return null;default:return null}}function Ys(e,t){switch(_o(t),t.tag){case 3:Ut(Se),Ee();break;case 26:case 27:case 5:wi(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:w(Te);break;case 10:Ut(t.type);break;case 22:case 23:it(t),jo(),e!==null&&w(Rl);break;case 24:Ut(Se)}}function li(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var n=l.create,o=l.inst;a=n(),o.destroy=a}l=l.next}while(l!==i)}}catch(r){oe(t,t.return,r)}}function dl(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){var o=a.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,i=t;var d=l,m=r;try{m()}catch(b){oe(i,d,b)}}}a=a.next}while(a!==n)}}catch(b){oe(t,t.return,b)}}function qs(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Nc(t,l)}catch(a){oe(e,e.return,a)}}}function Vs(e,t,l){l.props=Ul(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){oe(e,t,a)}}function ai(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){oe(e,t,i)}}function Dt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){oe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){oe(e,t,i)}else l.current=null}function Ks(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){oe(e,e.return,i)}}function yr(e,t,l){try{var a=e.stateNode;A0(a,e.type,l,t),a[Xe]=t}catch(i){oe(e,e.return,i)}}function Xs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gl(e.type)||e.tag===4}function xr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Rt));else if(a!==4&&(a===27&&gl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(vr(e,t,l),e=e.sibling;e!==null;)vr(e,t,l),e=e.sibling}function un(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&gl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(un(e,t,l),e=e.sibling;e!==null;)un(e,t,l),e=e.sibling}function Qs(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ue(t,a,l),t[He]=e,t[Xe]=l}catch(n){oe(e,e.return,n)}}var Vt=!1,De=!1,wr=!1,Zs=typeof WeakSet=="function"?WeakSet:Set,Re=null;function t0(e,t){if(e=e.containerInfo,qr=Rn,e=nc(e),mo(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break e}var o=0,r=-1,d=-1,m=0,b=0,v=e,g=null;t:for(;;){for(var h;v!==l||i!==0&&v.nodeType!==3||(r=o+i),v!==n||a!==0&&v.nodeType!==3||(d=o+a),v.nodeType===3&&(o+=v.nodeValue.length),(h=v.firstChild)!==null;)g=v,v=h;for(;;){if(v===e)break t;if(g===l&&++m===i&&(r=o),g===n&&++b===a&&(d=o),(h=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=h}l=r===-1||d===-1?null:{start:r,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vr={focusedElem:e,selectionRange:l},Rn=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){switch(t=Re,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,l=t,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var O=Ul(l.type,i);e=a.getSnapshotBeforeUpdate(O,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(G){oe(l,l.return,G)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Qr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}}function Is(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(e,l),a&4&&li(5,l);break;case 1:if(Xt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(o){oe(l,l.return,o)}else{var i=Ul(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){oe(l,l.return,o)}}a&64&&qs(l),a&512&&ai(l,l.return);break;case 3:if(Xt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Nc(e,t)}catch(o){oe(l,l.return,o)}}break;case 27:t===null&&a&4&&Qs(l);case 26:case 5:Xt(e,l),t===null&&a&4&&Ks(l),a&512&&ai(l,l.return);break;case 12:Xt(e,l);break;case 31:Xt(e,l),a&4&&Fs(e,l);break;case 13:Xt(e,l),a&4&&$s(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=s0.bind(null,l),z0(e,l))));break;case 22:if(a=l.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||De,i=Vt;var n=De;Vt=a,(De=t)&&!n?Qt(e,l,(l.subtreeFlags&8772)!==0):Xt(e,l),Vt=i,De=n}break;case 30:break;default:Xt(e,l)}}function Js(e){var t=e.alternate;t!==null&&(e.alternate=null,Js(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Ze=!1;function Kt(e,t,l){for(l=l.child;l!==null;)Ws(e,t,l),l=l.sibling}function Ws(e,t,l){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:De||Dt(l,t),Kt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:De||Dt(l,t);var a=he,i=Ze;gl(l.type)&&(he=l.stateNode,Ze=!1),Kt(e,t,l),ui(l.stateNode),he=a,Ze=i;break;case 5:De||Dt(l,t);case 6:if(a=he,i=Ze,he=null,Kt(e,t,l),he=a,Ze=i,he!==null)if(Ze)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(l.stateNode)}catch(n){oe(l,t,n)}else try{he.removeChild(l.stateNode)}catch(n){oe(l,t,n)}break;case 18:he!==null&&(Ze?(e=he,Vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),_a(e)):Vf(he,l.stateNode));break;case 4:a=he,i=Ze,he=l.stateNode.containerInfo,Ze=!0,Kt(e,t,l),he=a,Ze=i;break;case 0:case 11:case 14:case 15:dl(2,l,t),De||dl(4,l,t),Kt(e,t,l);break;case 1:De||(Dt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vs(l,t,a)),Kt(e,t,l);break;case 21:Kt(e,t,l);break;case 22:De=(a=De)||l.memoizedState!==null,Kt(e,t,l),De=a;break;default:Kt(e,t,l)}}function Fs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_a(e)}catch(l){oe(t,t.return,l)}}}function $s(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_a(e)}catch(l){oe(t,t.return,l)}}function l0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zs),t;default:throw Error(u(435,e.tag))}}function pn(e,t){var l=l0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=f0.bind(null,e,a);a.then(i,i)}})}function Ie(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(gl(r.type)){he=r.stateNode,Ze=!1;break e}break;case 5:he=r.stateNode,Ze=!1;break e;case 3:case 4:he=r.stateNode.containerInfo,Ze=!0;break e}r=r.return}if(he===null)throw Error(u(160));Ws(n,o,i),he=null,Ze=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ps(t,e),t=t.sibling}var At=null;function Ps(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),Je(e),a&4&&(dl(3,e,e.return),li(3,e),dl(5,e,e.return));break;case 1:Ie(t,e),Je(e),a&512&&(De||l===null||Dt(l,l.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=At;if(Ie(t,e),Je(e),a&512&&(De||l===null||Dt(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[za]||n[He]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),Ue(n,a,l),n[He]=e,Ne(n),a=n;break e;case"link":var o=eu("link","href",i).get(a+(l.href||""));if(o){for(var r=0;r<o.length;r++)if(n=o[r],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(r,1);break t}}n=i.createElement(a),Ue(n,a,l),i.head.appendChild(n);break;case"meta":if(o=eu("meta","content",i).get(a+(l.content||""))){for(r=0;r<o.length;r++)if(n=o[r],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(r,1);break t}}n=i.createElement(a),Ue(n,a,l),i.head.appendChild(n);break;default:throw Error(u(468,a))}n[He]=e,Ne(n),a=n}e.stateNode=a}else tu(i,e.type,e.stateNode);else e.stateNode=Pf(i,a,e.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?tu(i,e.type,e.stateNode):Pf(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&yr(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ie(t,e),Je(e),a&512&&(De||l===null||Dt(l,l.return)),l!==null&&a&4&&yr(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ie(t,e),Je(e),a&512&&(De||l===null||Dt(l,l.return)),e.flags&32){i=e.stateNode;try{Il(i,"")}catch(O){oe(e,e.return,O)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,yr(e,i,l!==null?l.memoizedProps:i)),a&1024&&(wr=!0);break;case 6:if(Ie(t,e),Je(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(O){oe(e,e.return,O)}}break;case 3:if(Dn=null,i=At,At=Mn(t.containerInfo),Ie(t,e),At=i,Je(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{_a(t.containerInfo)}catch(O){oe(e,e.return,O)}wr&&(wr=!1,ef(e));break;case 4:a=At,At=Mn(e.stateNode.containerInfo),Ie(t,e),Je(e),At=a;break;case 12:Ie(t,e),Je(e);break;case 31:Ie(t,e),Je(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pn(e,a)));break;case 13:Ie(t,e),Je(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gn=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pn(e,a)));break;case 22:i=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,m=Vt,b=De;if(Vt=m||i,De=b||d,Ie(t,e),De=b,Vt=m,Je(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||d||Vt||De||Bl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){d=l=t;try{if(n=d.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=d.stateNode;var v=d.memoizedProps.style,g=v!=null&&v.hasOwnProperty("display")?v.display:null;r.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){oe(d,d.return,O)}}}else if(t.tag===6){if(l===null){d=t;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(O){oe(d,d.return,O)}}}else if(t.tag===18){if(l===null){d=t;try{var h=d.stateNode;i?Kf(h,!0):Kf(d.stateNode,!1)}catch(O){oe(d,d.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,pn(e,l))));break;case 19:Ie(t,e),Je(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,pn(e,a)));break;case 30:break;case 21:break;default:Ie(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Xs(a)){l=a;break}a=a.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var i=l.stateNode,n=xr(e);un(e,n,i);break;case 5:var o=l.stateNode;l.flags&32&&(Il(o,""),l.flags&=-33);var r=xr(e);un(e,r,o);break;case 3:case 4:var d=l.stateNode.containerInfo,m=xr(e);vr(e,m,d);break;default:throw Error(u(161))}}catch(b){oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Is(e,t.alternate,t),t=t.sibling}function Bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dl(4,t,t.return),Bl(t);break;case 1:Dt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Vs(t,t.return,l),Bl(t);break;case 27:ui(t.stateNode);case 26:case 5:Dt(t,t.return),Bl(t);break;case 22:t.memoizedState===null&&Bl(t);break;case 30:Bl(t);break;default:Bl(t)}e=e.sibling}}function Qt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,n=t,o=n.flags;switch(n.tag){case 0:case 11:case 15:Qt(i,n,l),li(4,n);break;case 1:if(Qt(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){oe(a,a.return,m)}if(a=n,i=a.updateQueue,i!==null){var r=a.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)Cc(d[i],r)}catch(m){oe(a,a.return,m)}}l&&o&64&&qs(n),ai(n,n.return);break;case 27:Qs(n);case 26:case 5:Qt(i,n,l),l&&a===null&&o&4&&Ks(n),ai(n,n.return);break;case 12:Qt(i,n,l);break;case 31:Qt(i,n,l),l&&o&4&&Fs(i,n);break;case 13:Qt(i,n,l),l&&o&4&&$s(i,n);break;case 22:n.memoizedState===null&&Qt(i,n,l),ai(n,n.return);break;case 30:break;default:Qt(i,n,l)}t=t.sibling}}function Ar(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Va(l))}function Er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Et(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tf(e,t,l,a),t=t.sibling}function tf(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,l,a),i&2048&&li(9,t);break;case 1:Et(e,t,l,a);break;case 3:Et(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e)));break;case 12:if(i&2048){Et(e,t,l,a),e=t.stateNode;try{var n=t.memoizedProps,o=n.id,r=n.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){oe(t,t.return,d)}}else Et(e,t,l,a);break;case 31:Et(e,t,l,a);break;case 13:Et(e,t,l,a);break;case 23:break;case 22:n=t.stateNode,o=t.alternate,t.memoizedState!==null?n._visibility&2?Et(e,t,l,a):ii(e,t):n._visibility&2?Et(e,t,l,a):(n._visibility|=2,ma(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ar(o,t);break;case 24:Et(e,t,l,a),i&2048&&Er(t.alternate,t);break;default:Et(e,t,l,a)}}function ma(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,o=t,r=l,d=a,m=o.flags;switch(o.tag){case 0:case 11:case 15:ma(n,o,r,d,i),li(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?ma(n,o,r,d,i):ii(n,o):(b._visibility|=2,ma(n,o,r,d,i)),i&&m&2048&&Ar(o.alternate,o);break;case 24:ma(n,o,r,d,i),i&&m&2048&&Er(o.alternate,o);break;default:ma(n,o,r,d,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:ii(l,a),i&2048&&Ar(a.alternate,a);break;case 24:ii(l,a),i&2048&&Er(a.alternate,a);break;default:ii(l,a)}t=t.sibling}}var ni=8192;function ga(e,t,l){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)lf(e,t,l),e=e.sibling}function lf(e,t,l){switch(e.tag){case 26:ga(e,t,l),e.flags&ni&&e.memoizedState!==null&&q0(l,At,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,l);break;case 3:case 4:var a=At;At=Mn(e.stateNode.containerInfo),ga(e,t,l),At=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ni,ni=16777216,ga(e,t,l),ni=a):ga(e,t,l));break;default:ga(e,t,l)}}function af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,of(a,e)}af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nf(e),e=e.sibling}function nf(e){switch(e.tag){case 0:case 11:case 15:oi(e),e.flags&2048&&dl(9,e,e.return);break;case 3:oi(e);break;case 12:oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mn(e)):oi(e);break;default:oi(e)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,of(a,e)}af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dl(8,t,t.return),mn(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,mn(t));break;default:mn(t)}e=e.sibling}}function of(e,t){for(;Re!==null;){var l=Re;switch(l.tag){case 0:case 11:case 15:dl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Re=a;else e:for(l=e;Re!==null;){a=Re;var i=a.sibling,n=a.return;if(Js(a),a===l){Re=null;break e}if(i!==null){i.return=n,Re=i;break e}Re=n}}}var a0={getCacheForType:function(e){var t=ke(Se),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ke(Se).controller.signal}},i0=typeof WeakMap=="function"?WeakMap:Map,le=0,ue=null,K=null,Z=0,ne=0,nt=null,cl=!1,ha=!1,Tr=!1,Zt=0,xe=0,sl=0,jl=0,_r=0,ot=0,ba=0,ri=null,We=null,Sr=!1,gn=0,rf=0,hn=1/0,bn=null,fl=null,Ce=0,ul=null,ya=null,It=0,Mr=0,Or=null,df=null,di=0,Dr=null;function rt(){return(le&2)!==0&&Z!==0?Z&-Z:y.T!==null?Gr():Ed()}function cf(){if(ot===0)if((Z&536870912)===0||W){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),ot=e}else ot=536870912;return e=at.current,e!==null&&(e.flags|=32),ot}function Fe(e,t,l){(e===ue&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(xa(e,0),pl(e,Z,ot,!1)),Da(e,l),((le&2)===0||e!==ue)&&(e===ue&&((le&2)===0&&(jl|=l),xe===4&&pl(e,Z,ot,!1)),zt(e))}function sf(e,t,l){if((le&6)!==0)throw Error(u(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),i=a?r0(e,t):Cr(e,t,!0),n=a;do{if(i===0){ha&&!a&&pl(e,t,0,!1);break}else{if(l=e.current.alternate,n&&!n0(l)){i=Cr(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;i=ri;var d=r.current.memoizedState.isDehydrated;if(d&&(xa(r,o).flags|=256),o=Cr(r,o,!1),o!==2){if(Tr&&!d){r.errorRecoveryDisabledLanes|=n,jl|=n,i=4;break e}n=We,We=i,n!==null&&(We===null?We=n:We.push.apply(We,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){xa(e,0),pl(e,t,0,!0);break}e:{switch(a=e,n=i,n){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:pl(a,t,ot,!cl);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=gn+300-$e(),10<i)){if(pl(a,t,ot,!cl),Si(a,0,!0)!==0)break e;It=t,a.timeoutHandle=Yf(ff.bind(null,a,l,We,bn,Sr,t,ot,jl,ba,cl,n,"Throttled",-0,0),i);break e}ff(a,l,We,bn,Sr,t,ot,jl,ba,cl,n,null,-0,0)}}break}while(!0);zt(e)}function ff(e,t,l,a,i,n,o,r,d,m,b,v,g,h){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},lf(t,n,v);var O=(n&62914560)===n?gn-$e():(n&4194048)===n?rf-$e():0;if(O=V0(v,O),O!==null){It=n,e.cancelPendingCommit=O(xf.bind(null,e,t,n,l,a,i,o,r,d,b,v,null,g,h)),pl(e,n,o,!m);return}}xf(e,t,n,l,a,i,o,r,d)}function n0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!tt(n(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pl(e,t,l,a){t&=~_r,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var n=31-et(i),o=1<<n;a[n]=-1,i&=~o}l!==0&&vd(e,l,t)}function yn(){return(le&6)===0?(ci(0),!1):!0}function zr(){if(K!==null){if(ne===0)var e=K.return;else e=K,Lt=Cl=null,Qo(e),ca=null,Xa=0,e=K;for(;e!==null;)Ys(e.alternate,e),e=e.return;K=null}}function xa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,_0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),It=0,zr(),ue=e,K=l=Gt(e.current,null),Z=t,ne=0,nt=null,cl=!1,ha=Oa(e,t),Tr=!1,ba=ot=_r=jl=sl=xe=0,We=ri=null,Sr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-et(a),n=1<<i;t|=e[i],a&=~n}return Zt=t,Ui(),l}function uf(e,t){Y=null,y.H=Pa,t===da||t===Qi?(t=Mc(),ne=3):t===Ho?(t=Mc(),ne=4):ne=t===dr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,K===null&&(xe=1,rn(e,ut(t,e.current)))}function pf(){var e=at.current;return e===null?!0:(Z&4194048)===Z?ht===null:(Z&62914560)===Z||(Z&536870912)!==0?e===ht:!1}function mf(){var e=y.H;return y.H=Pa,e===null?Pa:e}function gf(){var e=y.A;return y.A=a0,e}function xn(){xe=4,cl||(Z&4194048)!==Z&&at.current!==null||(ha=!0),(sl&134217727)===0&&(jl&134217727)===0||ue===null||pl(ue,Z,ot,!1)}function Cr(e,t,l){var a=le;le|=2;var i=mf(),n=gf();(ue!==e||Z!==t)&&(bn=null,xa(e,t)),t=!1;var o=xe;e:do try{if(ne!==0&&K!==null){var r=K,d=nt;switch(ne){case 8:zr(),o=6;break e;case 3:case 2:case 9:case 6:at.current===null&&(t=!0);var m=ne;if(ne=0,nt=null,va(e,r,d,m),l&&ha){o=0;break e}break;default:m=ne,ne=0,nt=null,va(e,r,d,m)}}o0(),o=xe;break}catch(b){uf(e,b)}while(!0);return t&&e.shellSuspendCounter++,Lt=Cl=null,le=a,y.H=i,y.A=n,K===null&&(ue=null,Z=0,Ui()),o}function o0(){for(;K!==null;)hf(K)}function r0(e,t){var l=le;le|=2;var a=mf(),i=gf();ue!==e||Z!==t?(bn=null,hn=$e()+500,xa(e,t)):ha=Oa(e,t);e:do try{if(ne!==0&&K!==null){t=K;var n=nt;t:switch(ne){case 1:ne=0,nt=null,va(e,t,n,1);break;case 2:case 9:if(_c(n)){ne=0,nt=null,bf(t);break}t=function(){ne!==2&&ne!==9||ue!==e||(ne=7),zt(e)},n.then(t,t);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:_c(n)?(ne=0,nt=null,bf(t)):(ne=0,nt=null,va(e,t,n,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var r=K;if(o?lu(o):r.stateNode.complete){ne=0,nt=null;var d=r.sibling;if(d!==null)K=d;else{var m=r.return;m!==null?(K=m,vn(m)):K=null}break t}}ne=0,nt=null,va(e,t,n,5);break;case 6:ne=0,nt=null,va(e,t,n,6);break;case 8:zr(),xe=6;break e;default:throw Error(u(462))}}d0();break}catch(b){uf(e,b)}while(!0);return Lt=Cl=null,y.H=a,y.A=i,le=l,K!==null?0:(ue=null,Z=0,Ui(),xe)}function d0(){for(;K!==null&&!Cu();)hf(K)}function hf(e){var t=Bs(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?vn(e):K=t}function bf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Rs(l,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=Rs(l,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:Qo(t);default:Ys(l,t),t=K=mc(t,Zt),t=Bs(l,t,Zt)}e.memoizedProps=e.pendingProps,t===null?vn(e):K=t}function va(e,t,l,a){Lt=Cl=null,Qo(t),ca=null,Xa=0;var i=t.return;try{if(Wp(e,i,t,l,Z)){xe=1,rn(e,ut(l,e.current)),K=null;return}}catch(n){if(i!==null)throw K=i,n;xe=1,rn(e,ut(l,e.current)),K=null;return}t.flags&32768?(W||a===1?e=!0:ha||(Z&536870912)!==0?e=!1:(cl=e=!0,(a===2||a===9||a===3||a===6)&&(a=at.current,a!==null&&a.tag===13&&(a.flags|=16384))),yf(t,e)):vn(t)}function vn(e){var t=e;do{if((t.flags&32768)!==0){yf(t,cl);return}e=t.return;var l=Pp(t.alternate,t,Zt);if(l!==null){K=l;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);xe===0&&(xe=5)}function yf(e,t){do{var l=e0(e.alternate,e);if(l!==null){l.flags&=32767,K=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=l}while(e!==null);xe=6,K=null}function xf(e,t,l,a,i,n,o,r,d){e.cancelPendingCommit=null;do wn();while(Ce!==0);if((le&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(n=t.lanes|t.childLanes,n|=xo,Yu(e,l,n,o,r,d),e===ue&&(K=ue=null,Z=0),ya=t,ul=e,It=l,Mr=n,Or=i,df=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u0(Ai,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,i=S.p,S.p=2,o=le,le|=4;try{t0(e,t,l)}finally{le=o,S.p=i,y.T=a}}Ce=1,vf(),wf(),Af()}}function vf(){if(Ce===1){Ce=0;var e=ul,t=ya,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=S.p;S.p=2;var i=le;le|=4;try{Ps(t,e);var n=Vr,o=nc(e.containerInfo),r=n.focusedElem,d=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&ic(r.ownerDocument.documentElement,r)){if(d!==null&&mo(r)){var m=d.start,b=d.end;if(b===void 0&&(b=m),"selectionStart"in r)r.selectionStart=m,r.selectionEnd=Math.min(b,r.value.length);else{var v=r.ownerDocument||document,g=v&&v.defaultView||window;if(g.getSelection){var h=g.getSelection(),O=r.textContent.length,G=Math.min(d.start,O),se=d.end===void 0?G:Math.min(d.end,O);!h.extend&&G>se&&(o=se,se=G,G=o);var f=ac(r,G),c=ac(r,se);if(f&&c&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==c.node||h.focusOffset!==c.offset)){var p=v.createRange();p.setStart(f.node,f.offset),h.removeAllRanges(),G>se?(h.addRange(p),h.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),h.addRange(p))}}}}for(v=[],h=r;h=h.parentNode;)h.nodeType===1&&v.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<v.length;r++){var x=v[r];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Rn=!!qr,Vr=qr=null}finally{le=i,S.p=a,y.T=l}}e.current=t,Ce=2}}function wf(){if(Ce===2){Ce=0;var e=ul,t=ya,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=S.p;S.p=2;var i=le;le|=4;try{Is(e,t.alternate,t)}finally{le=i,S.p=a,y.T=l}}Ce=3}}function Af(){if(Ce===4||Ce===3){Ce=0,Nu();var e=ul,t=ya,l=It,a=df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ce=5:(Ce=0,ya=ul=null,Ef(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(fl=null),In(l),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,i=S.p,S.p=2,y.T=null;try{for(var n=e.onRecoverableError,o=0;o<a.length;o++){var r=a[o];n(r.value,{componentStack:r.stack})}}finally{y.T=t,S.p=i}}(It&3)!==0&&wn(),zt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===Dr?di++:(di=0,Dr=e):di=0,ci(0)}}function Ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function wn(){return vf(),wf(),Af(),Tf()}function Tf(){if(Ce!==5)return!1;var e=ul,t=Mr;Mr=0;var l=In(It),a=y.T,i=S.p;try{S.p=32>l?32:l,y.T=null,l=Or,Or=null;var n=ul,o=It;if(Ce=0,ya=ul=null,It=0,(le&6)!==0)throw Error(u(331));var r=le;if(le|=4,nf(n.current),tf(n,n.current,o,l),le=r,ci(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Ma,n)}catch{}return!0}finally{S.p=i,y.T=a,Ef(e,t)}}function _f(e,t,l){t=ut(l,t),t=rr(e.stateNode,t,2),e=nl(e,t,2),e!==null&&(Da(e,2),zt(e))}function oe(e,t,l){if(e.tag===3)_f(e,e,l);else for(;t!==null;){if(t.tag===3){_f(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fl===null||!fl.has(a))){e=ut(l,e),l=_s(2),a=nl(t,l,2),a!==null&&(Ss(l,a,t,e),Da(a,2),zt(a));break}}t=t.return}}function Nr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new i0;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Tr=!0,i.add(l),e=c0.bind(null,e,t,l),t.then(e,e))}function c0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ue===e&&(Z&l)===l&&(xe===4||xe===3&&(Z&62914560)===Z&&300>$e()-gn?(le&2)===0&&xa(e,0):_r|=l,ba===Z&&(ba=0)),zt(e)}function Sf(e,t){t===0&&(t=xd()),e=Ol(e,t),e!==null&&(Da(e,t),zt(e))}function s0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Sf(e,l)}function f0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Sf(e,l)}function u0(e,t){return Kn(e,t)}var An=null,wa=null,Rr=!1,En=!1,Hr=!1,ml=0;function zt(e){e!==wa&&e.next===null&&(wa===null?An=wa=e:wa=wa.next=e),En=!0,Rr||(Rr=!0,m0())}function ci(e,t){if(!Hr&&En){Hr=!0;do for(var l=!1,a=An;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var o=a.suspendedLanes,r=a.pingedLanes;n=(1<<31-et(42|e)+1)-1,n&=i&~(o&~r),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,zf(a,n))}else n=Z,n=Si(a,a===ue?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Oa(a,n)||(l=!0,zf(a,n));a=a.next}while(l);Hr=!1}}function p0(){Mf()}function Mf(){En=Rr=!1;var e=0;ml!==0&&T0()&&(e=ml);for(var t=$e(),l=null,a=An;a!==null;){var i=a.next,n=Of(a,t);n===0?(a.next=null,l===null?An=i:l.next=i,i===null&&(wa=l)):(l=a,(e!==0||(n&3)!==0)&&(En=!0)),a=i}Ce!==0&&Ce!==5||ci(e),ml!==0&&(ml=0)}function Of(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var o=31-et(n),r=1<<o,d=i[o];d===-1?((r&l)===0||(r&a)!==0)&&(i[o]=ju(r,t)):d<=t&&(e.expiredLanes|=r),n&=~r}if(t=ue,l=Z,l=Si(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xn(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Oa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Xn(a),In(l)){case 2:case 8:l=bd;break;case 32:l=Ai;break;case 268435456:l=yd;break;default:l=Ai}return a=Df.bind(null,e),l=Kn(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Xn(a),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(wn()&&e.callbackNode!==l)return null;var a=Z;return a=Si(e,e===ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(sf(e,a,t),Of(e,$e()),e.callbackNode!=null&&e.callbackNode===l?Df.bind(null,e):null)}function zf(e,t){if(wn())return null;sf(e,t,!0)}function m0(){S0(function(){(le&6)!==0?Kn(hd,p0):Mf()})}function Gr(){if(ml===0){var e=oa;e===0&&(e=Ei,Ei<<=1,(Ei&261888)===0&&(Ei=256)),ml=e}return ml}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zi(""+e)}function Nf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function g0(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var n=Cf((i[Xe]||null).action),o=a.submitter;o&&(t=(t=o[Xe]||null)?Cf(t.formAction):o.getAttribute("formAction"),t!==null&&(n=t,o=null));var r=new Hi("action","action",null,a,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var d=o?Nf(i,o):new FormData(i);tr(l,{pending:!0,data:d,method:i.method,action:n},null,d)}}else typeof n=="function"&&(r.preventDefault(),d=o?Nf(i,o):new FormData(i),tr(l,{pending:!0,data:d,method:i.method,action:n},n,d))},currentTarget:i}]})}}for(var kr=0;kr<yo.length;kr++){var Lr=yo[kr],h0=Lr.toLowerCase(),b0=Lr[0].toUpperCase()+Lr.slice(1);wt(h0,"on"+b0)}wt(dc,"onAnimationEnd"),wt(cc,"onAnimationIteration"),wt(sc,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Rp,"onTransitionRun"),wt(Hp,"onTransitionStart"),wt(Gp,"onTransitionCancel"),wt(fc,"onTransitionEnd"),Ql("onMouseEnter",["mouseout","mouseover"]),Ql("onMouseLeave",["mouseout","mouseover"]),Ql("onPointerEnter",["pointerout","pointerover"]),Ql("onPointerLeave",["pointerout","pointerover"]),Tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Rf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var o=a.length-1;0<=o;o--){var r=a[o],d=r.instance,m=r.currentTarget;if(r=r.listener,d!==n&&i.isPropagationStopped())break e;n=r,i.currentTarget=m;try{n(i)}catch(b){Li(b)}i.currentTarget=null,n=d}else for(o=0;o<a.length;o++){if(r=a[o],d=r.instance,m=r.currentTarget,r=r.listener,d!==n&&i.isPropagationStopped())break e;n=r,i.currentTarget=m;try{n(i)}catch(b){Li(b)}i.currentTarget=null,n=d}}}}function X(e,t){var l=t[Jn];l===void 0&&(l=t[Jn]=new Set);var a=e+"__bubble";l.has(a)||(Hf(t,e,2,!1),l.add(a))}function Ur(e,t,l){var a=0;t&&(a|=4),Hf(l,e,a,t)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Tn]){e[Tn]=!0,Sd.forEach(function(l){l!=="selectionchange"&&(y0.has(l)||Ur(l,!1,e),Ur(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tn]||(t[Tn]=!0,Ur("selectionchange",!1,t))}}function Hf(e,t,l,a){switch(cu(t)){case 2:var i=Q0;break;case 8:i=Z0;break;default:i=ed}l=i.bind(null,t,l,e),i=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function jr(e,t,l,a,i){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===i)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;r!==null;){if(o=Vl(r),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){a=n=o;continue e}r=r.parentNode}}a=a.return}Ud(function(){var m=n,b=lo(l),v=[];e:{var g=uc.get(e);if(g!==void 0){var h=Hi,O=e;switch(e){case"keypress":if(Ni(l)===0)break e;case"keydown":case"keyup":h=fp;break;case"focusin":O="focus",h=co;break;case"focusout":O="blur",h=co;break;case"beforeblur":case"afterblur":h=co;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=mp;break;case dc:case cc:case sc:h=lp;break;case fc:h=hp;break;case"scroll":case"scrollend":h=Fu;break;case"wheel":h=yp;break;case"copy":case"cut":case"paste":h=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vd;break;case"toggle":case"beforetoggle":h=vp}var G=(t&4)!==0,se=!G&&(e==="scroll"||e==="scrollend"),f=G?g!==null?g+"Capture":null:g;G=[];for(var c=m,p;c!==null;){var x=c;if(p=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||p===null||f===null||(x=Na(c,f),x!=null&&G.push(fi(c,x,p))),se)break;c=c.return}0<G.length&&(g=new h(g,O,null,l,b),v.push({event:g,listeners:G}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&l!==to&&(O=l.relatedTarget||l.fromElement)&&(Vl(O)||O[ql]))break e;if((h||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,h?(O=l.relatedTarget||l.toElement,h=m,O=O?Vl(O):null,O!==null&&(se=U(O),G=O.tag,O!==se||G!==5&&G!==27&&G!==6)&&(O=null)):(h=null,O=m),h!==O)){if(G=Yd,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(G=Vd,x="onPointerLeave",f="onPointerEnter",c="pointer"),se=h==null?g:Ca(h),p=O==null?g:Ca(O),g=new G(x,c+"leave",h,l,b),g.target=se,g.relatedTarget=p,x=null,Vl(b)===m&&(G=new G(f,c+"enter",O,l,b),G.target=p,G.relatedTarget=se,x=G),se=x,h&&O)t:{for(G=x0,f=h,c=O,p=0,x=f;x;x=G(x))p++;x=0;for(var N=c;N;N=G(N))x++;for(;0<p-x;)f=G(f),p--;for(;0<x-p;)c=G(c),x--;for(;p--;){if(f===c||c!==null&&f===c.alternate){G=f;break t}f=G(f),c=G(c)}G=null}else G=null;h!==null&&Gf(v,g,h,G,!1),O!==null&&se!==null&&Gf(v,se,O,G,!0)}}e:{if(g=m?Ca(m):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var P=Fd;else if(Jd(g))if($d)P=zp;else{P=Op;var z=Mp}else h=g.nodeName,!h||h.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&eo(m.elementType)&&(P=Fd):P=Dp;if(P&&(P=P(e,m))){Wd(v,P,l,b);break e}z&&z(e,g,m),e==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&Pn(g,"number",g.value)}switch(z=m?Ca(m):window,e){case"focusin":(Jd(z)||z.contentEditable==="true")&&($l=z,go=m,ja=null);break;case"focusout":ja=go=$l=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,oc(v,l,b);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":oc(v,l,b)}var q;if(fo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Fl?Zd(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Kd&&l.locale!=="ko"&&(Fl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Fl&&(q=Bd()):($t=b,no="value"in $t?$t.value:$t.textContent,Fl=!0)),z=_n(m,I),0<z.length&&(I=new qd(I,e,null,l,b),v.push({event:I,listeners:z}),q?I.data=q:(q=Id(l),q!==null&&(I.data=q)))),(q=Ap?Ep(e,l):Tp(e,l))&&(I=_n(m,"onBeforeInput"),0<I.length&&(z=new qd("onBeforeInput","beforeinput",null,l,b),v.push({event:z,listeners:I}),z.data=q)),g0(v,e,m,l,b)}Rf(v,t)})}function fi(e,t,l){return{instance:e,listener:t,currentTarget:l}}function _n(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Na(e,l),i!=null&&a.unshift(fi(e,i,n)),i=Na(e,t),i!=null&&a.push(fi(e,i,n))),e.tag===3)return a;e=e.return}return[]}function x0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gf(e,t,l,a,i){for(var n=t._reactName,o=[];l!==null&&l!==a;){var r=l,d=r.alternate,m=r.stateNode;if(r=r.tag,d!==null&&d===a)break;r!==5&&r!==26&&r!==27||m===null||(d=m,i?(m=Na(l,n),m!=null&&o.unshift(fi(l,m,d))):i||(m=Na(l,n),m!=null&&o.push(fi(l,m,d)))),l=l.return}o.length!==0&&e.push({event:t,listeners:o})}var v0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(v0,`
`).replace(w0,"")}function Lf(e,t){return t=kf(t),kf(e)===t}function ce(e,t,l,a,i,n){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Il(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Il(e,""+a);break;case"className":Oi(e,"class",a);break;case"tabIndex":Oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,l,a);break;case"style":kd(e,a,n);break;case"data":if(t!=="object"){Oi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zi(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(t!=="input"&&ce(e,t,"name",i.name,i,null),ce(e,t,"formEncType",i.formEncType,i,null),ce(e,t,"formMethod",i.formMethod,i,null),ce(e,t,"formTarget",i.formTarget,i,null)):(ce(e,t,"encType",i.encType,i,null),ce(e,t,"method",i.method,i,null),ce(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zi(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"onScroll":a!=null&&X("scroll",e);break;case"onScrollEnd":a!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=zi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":X("beforetoggle",e),X("toggle",e),Mi(e,"popover",a);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ju.get(l)||l,Mi(e,l,a))}}function Yr(e,t,l,a,i,n){switch(l){case"style":kd(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Il(e,a):(typeof a=="number"||typeof a=="bigint")&&Il(e,""+a);break;case"onScroll":a!=null&&X("scroll",e);break;case"onScrollEnd":a!=null&&X("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Md.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),n=e[Xe]||null,n=n!=null?n[l]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Mi(e,l,a)}}}function Ue(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var o=l[n];if(o!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ce(e,t,n,o,l,null)}}i&&ce(e,t,"srcSet",l.srcSet,l,null),a&&ce(e,t,"src",l.src,l,null);return;case"input":X("invalid",e);var r=n=o=i=null,d=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":i=b;break;case"type":o=b;break;case"checked":d=b;break;case"defaultChecked":m=b;break;case"value":n=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(137,t));break;default:ce(e,t,a,b,l,null)}}Nd(e,n,r,d,m,o,i,!1);return;case"select":X("invalid",e),a=o=n=null;for(i in l)if(l.hasOwnProperty(i)&&(r=l[i],r!=null))switch(i){case"value":n=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:ce(e,t,i,r,l,null)}t=n,l=o,e.multiple=!!a,t!=null?Zl(e,!!a,t,!1):l!=null&&Zl(e,!!a,l,!0);return;case"textarea":X("invalid",e),n=i=a=null;for(o in l)if(l.hasOwnProperty(o)&&(r=l[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":i=r;break;case"children":n=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:ce(e,t,o,r,l,null)}Hd(e,a,i,n);return;case"option":for(d in l)l.hasOwnProperty(d)&&(a=l[d],a!=null)&&(d==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ce(e,t,d,a,l,null));return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)X(si[a],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ce(e,t,m,a,l,null)}return;default:if(eo(t)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Yr(e,t,b,a,l,void 0));return}}for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null&&ce(e,t,r,a,l,null))}function A0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,r=null,d=null,m=null,b=null;for(h in l){var v=l[h];if(l.hasOwnProperty(h)&&v!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":d=v;default:a.hasOwnProperty(h)||ce(e,t,h,null,a,v)}}for(var g in a){var h=a[g];if(v=l[g],a.hasOwnProperty(g)&&(h!=null||v!=null))switch(g){case"type":n=h;break;case"name":i=h;break;case"checked":m=h;break;case"defaultChecked":b=h;break;case"value":o=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(137,t));break;default:h!==v&&ce(e,t,g,h,a,v)}}$n(e,o,r,d,m,b,n,i);return;case"select":h=o=r=g=null;for(n in l)if(d=l[n],l.hasOwnProperty(n)&&d!=null)switch(n){case"value":break;case"multiple":h=d;default:a.hasOwnProperty(n)||ce(e,t,n,null,a,d)}for(i in a)if(n=a[i],d=l[i],a.hasOwnProperty(i)&&(n!=null||d!=null))switch(i){case"value":g=n;break;case"defaultValue":r=n;break;case"multiple":o=n;default:n!==d&&ce(e,t,i,n,a,d)}t=r,l=o,a=h,g!=null?Zl(e,!!l,g,!1):!!a!=!!l&&(t!=null?Zl(e,!!l,t,!0):Zl(e,!!l,l?[]:"",!1));return;case"textarea":h=g=null;for(r in l)if(i=l[r],l.hasOwnProperty(r)&&i!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ce(e,t,r,null,a,i)}for(o in a)if(i=a[o],n=l[o],a.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":g=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==n&&ce(e,t,o,i,a,n)}Rd(e,g,h);return;case"option":for(var O in l)g=l[O],l.hasOwnProperty(O)&&g!=null&&!a.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:ce(e,t,O,null,a,g));for(d in a)g=a[d],h=l[d],a.hasOwnProperty(d)&&g!==h&&(g!=null||h!=null)&&(d==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":ce(e,t,d,g,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in l)g=l[G],l.hasOwnProperty(G)&&g!=null&&!a.hasOwnProperty(G)&&ce(e,t,G,null,a,g);for(m in a)if(g=a[m],h=l[m],a.hasOwnProperty(m)&&g!==h&&(g!=null||h!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(137,t));break;default:ce(e,t,m,g,a,h)}return;default:if(eo(t)){for(var se in l)g=l[se],l.hasOwnProperty(se)&&g!==void 0&&!a.hasOwnProperty(se)&&Yr(e,t,se,void 0,a,g);for(b in a)g=a[b],h=l[b],!a.hasOwnProperty(b)||g===h||g===void 0&&h===void 0||Yr(e,t,b,g,a,h);return}}for(var f in l)g=l[f],l.hasOwnProperty(f)&&g!=null&&!a.hasOwnProperty(f)&&ce(e,t,f,null,a,g);for(v in a)g=a[v],h=l[v],!a.hasOwnProperty(v)||g===h||g==null&&h==null||ce(e,t,v,g,a,h)}function Uf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function E0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,o=i.initiatorType,r=i.duration;if(n&&r&&Uf(o)){for(o=0,r=i.responseEnd,a+=1;a<l.length;a++){var d=l[a],m=d.startTime;if(m>r)break;var b=d.transferSize,v=d.initiatorType;b&&Uf(v)&&(d=d.responseEnd,o+=b*(d<r?1:(r-m)/(d-m)))}if(--a,t+=8*(n+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qr=null,Vr=null;function Sn(e){return e.nodeType===9?e:e.ownerDocument}function Bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Kr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xr=null;function T0(){var e=window.event;return e&&e.type==="popstate"?e===Xr?!1:(Xr=e,!0):(Xr=null,!1)}var Yf=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(M0)}:Yf;function M0(e){setTimeout(function(){throw e})}function gl(e){return e==="head"}function Vf(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),_a(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ui(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,ui(l);for(var n=l.firstChild;n;){var o=n.nextSibling,r=n.nodeName;n[za]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=o}}else l==="body"&&ui(e.ownerDocument.body);l=i}while(l);_a(t)}function Kf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Qr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Qr(l),Wn(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function O0(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[za])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function D0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=bt(e.nextSibling),e===null))return null;return e}function Xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Zr(e){return e.data==="$?"||e.data==="$~"}function Ir(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function z0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jr=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return bt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function If(e,t,l){switch(t=Sn(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wn(e)}var yt=new Map,Jf=new Set;function Mn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=S.d;S.d={f:C0,r:N0,D:R0,C:H0,L:G0,m:k0,X:U0,S:L0,M:B0};function C0(){var e=Jt.f(),t=yn();return e||t}function N0(e){var t=Kl(e);t!==null&&t.tag===5&&t.type==="form"?fs(t):Jt.r(e)}var Aa=typeof document>"u"?null:document;function Wf(e,t,l){var a=Aa;if(a&&typeof t=="string"&&t){var i=st(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Jf.has(i)||(Jf.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ue(t,"link",e),Ne(t),a.head.appendChild(t)))}}function R0(e){Jt.D(e),Wf("dns-prefetch",e,null)}function H0(e,t){Jt.C(e,t),Wf("preconnect",e,t)}function G0(e,t,l){Jt.L(e,t,l);var a=Aa;if(a&&e&&t){var i='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+st(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+st(l.imageSizes)+'"]')):i+='[href="'+st(e)+'"]';var n=i;switch(t){case"style":n=Ea(e);break;case"script":n=Ta(e)}yt.has(n)||(e=C({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),yt.set(n,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(pi(n))||t==="script"&&a.querySelector(mi(n))||(t=a.createElement("link"),Ue(t,"link",e),Ne(t),a.head.appendChild(t)))}}function k0(e,t){Jt.m(e,t);var l=Aa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(e)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ta(e)}if(!yt.has(n)&&(e=C({rel:"modulepreload",href:e},t),yt.set(n,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(mi(n)))return}a=l.createElement("link"),Ue(a,"link",e),Ne(a),l.head.appendChild(a)}}}function L0(e,t,l){Jt.S(e,t,l);var a=Aa;if(a&&e){var i=Xl(a).hoistableStyles,n=Ea(e);t=t||"default";var o=i.get(n);if(!o){var r={loading:0,preload:null};if(o=a.querySelector(pi(n)))r.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},l),(l=yt.get(n))&&Wr(e,l);var d=o=a.createElement("link");Ne(d),Ue(d,"link",e),d._p=new Promise(function(m,b){d.onload=m,d.onerror=b}),d.addEventListener("load",function(){r.loading|=1}),d.addEventListener("error",function(){r.loading|=2}),r.loading|=4,On(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:r},i.set(n,o)}}}function U0(e,t){Jt.X(e,t);var l=Aa;if(l&&e){var a=Xl(l).hoistableScripts,i=Ta(e),n=a.get(i);n||(n=l.querySelector(mi(i)),n||(e=C({src:e,async:!0},t),(t=yt.get(i))&&Fr(e,t),n=l.createElement("script"),Ne(n),Ue(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function B0(e,t){Jt.M(e,t);var l=Aa;if(l&&e){var a=Xl(l).hoistableScripts,i=Ta(e),n=a.get(i);n||(n=l.querySelector(mi(i)),n||(e=C({src:e,async:!0,type:"module"},t),(t=yt.get(i))&&Fr(e,t),n=l.createElement("script"),Ne(n),Ue(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Ff(e,t,l,a){var i=(i=V.current)?Mn(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ea(l.href),l=Xl(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ea(l.href);var n=Xl(i).hoistableStyles,o=n.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,o),(n=i.querySelector(pi(e)))&&!n._p&&(o.instance=n,o.state.loading=5),yt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},yt.set(e,l),n||j0(i,e,l,o.state))),t&&a===null)throw Error(u(528,""));return o}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(l),l=Xl(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ea(e){return'href="'+st(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function $f(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function j0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ue(t,"link",l),Ne(t),e.head.appendChild(t))}function Ta(e){return'[src="'+st(e)+'"]'}function mi(e){return"script[async]"+e}function Pf(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+st(l.href)+'"]');if(a)return t.instance=a,Ne(a),a;var i=C({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ne(a),Ue(a,"style",i),On(a,l.precedence,e),t.instance=a;case"stylesheet":i=Ea(l.href);var n=e.querySelector(pi(i));if(n)return t.state.loading|=4,t.instance=n,Ne(n),n;a=$f(l),(i=yt.get(i))&&Wr(a,i),n=(e.ownerDocument||e).createElement("link"),Ne(n);var o=n;return o._p=new Promise(function(r,d){o.onload=r,o.onerror=d}),Ue(n,"link",a),t.state.loading|=4,On(n,l.precedence,e),t.instance=n;case"script":return n=Ta(l.src),(i=e.querySelector(mi(n)))?(t.instance=i,Ne(i),i):(a=l,(i=yt.get(n))&&(a=C({},l),Fr(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ne(i),Ue(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,On(a,l.precedence,e));return t.instance}function On(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,o=0;o<a.length;o++){var r=a[o];if(r.dataset.precedence===t)n=r;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Wr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dn=null;function eu(e,t,l){if(Dn===null){var a=new Map,i=Dn=new Map;i.set(l,a)}else i=Dn,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var n=l[i];if(!(n[za]||n[He]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(t)||"";o=e+o;var r=a.get(o);r?r.push(n):a.set(o,[n])}}return a}function tu(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Y0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=Ea(a.href),n=t.querySelector(pi(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zn.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=n,Ne(n);return}n=t.ownerDocument||t,a=$f(a),(i=yt.get(i))&&Wr(a,i),n=n.createElement("link"),Ne(n);var o=n;o._p=new Promise(function(r,d){o.onload=r,o.onerror=d}),Ue(n,"link",a),l.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=zn.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var $r=0;function V0(e,t){return e.stylesheets&&e.count===0&&Nn(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Nn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&$r===0&&($r=62500*E0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>$r?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function zn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cn=null;function Nn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cn=new Map,t.forEach(K0,e),Cn=null,zn.call(e))}function K0(e,t){if(!(t.state.loading&4)){var l=Cn.get(e);if(l)var a=l.get(null);else{l=new Map,Cn.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}i=t.instance,o=i.getAttribute("data-precedence"),n=l.get(o)||a,n===a&&l.set(null,i),l.set(o,i),this.count++,a=zn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function X0(e,t,l,a,i,n,o,r,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qn(0),this.hiddenUpdates=Qn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function au(e,t,l,a,i,n,o,r,d,m,b,v){return e=new X0(e,t,l,o,d,m,b,v,r),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),e.current=n,n.stateNode=e,t=Co(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:t},Go(n),e}function iu(e){return e?(e=ta,e):ta}function nu(e,t,l,a,i,n){i=iu(i),a.context===null?a.context=i:a.pendingContext=i,a=il(t),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=nl(e,a,t),l!==null&&(Fe(l,e,t),Za(l,e,t))}function ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Pr(e,t){ou(e,t),(e=e.alternate)&&ou(e,t)}function ru(e){if(e.tag===13||e.tag===31){var t=Ol(e,67108864);t!==null&&Fe(t,e,67108864),Pr(e,67108864)}}function du(e){if(e.tag===13||e.tag===31){var t=rt();t=Zn(t);var l=Ol(e,t);l!==null&&Fe(l,e,t),Pr(e,t)}}var Rn=!0;function Q0(e,t,l,a){var i=y.T;y.T=null;var n=S.p;try{S.p=2,ed(e,t,l,a)}finally{S.p=n,y.T=i}}function Z0(e,t,l,a){var i=y.T;y.T=null;var n=S.p;try{S.p=8,ed(e,t,l,a)}finally{S.p=n,y.T=i}}function ed(e,t,l,a){if(Rn){var i=td(a);if(i===null)jr(e,t,a,Hn,l),su(e,a);else if(J0(i,e,t,l,a))a.stopPropagation();else if(su(e,a),t&4&&-1<I0.indexOf(e)){for(;i!==null;){var n=Kl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=El(n.pendingLanes);if(o!==0){var r=n;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var d=1<<31-et(o);r.entanglements[1]|=d,o&=~d}zt(n),(le&6)===0&&(hn=$e()+500,ci(0))}}break;case 31:case 13:r=Ol(n,2),r!==null&&Fe(r,n,2),yn(),Pr(n,2)}if(n=td(a),n===null&&jr(e,t,a,Hn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else jr(e,t,a,null,l)}}function td(e){return e=lo(e),ld(e)}var Hn=null;function ld(e){if(Hn=null,e=Vl(e),e!==null){var t=U(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=$(t),e!==null)return e;e=null}else if(l===31){if(e=be(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hn=e,null}function cu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ru()){case hd:return 2;case bd:return 8;case Ai:case Hu:return 32;case yd:return 268435456;default:return 32}default:return 32}}var ad=!1,hl=null,bl=null,yl=null,hi=new Map,bi=new Map,xl=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function su(e,t){switch(e){case"focusin":case"focusout":hl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function yi(e,t,l,a,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Kl(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J0(e,t,l,a,i){switch(t){case"focusin":return hl=yi(hl,e,t,l,a,i),!0;case"dragenter":return bl=yi(bl,e,t,l,a,i),!0;case"mouseover":return yl=yi(yl,e,t,l,a,i),!0;case"pointerover":var n=i.pointerId;return hi.set(n,yi(hi.get(n)||null,e,t,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,bi.set(n,yi(bi.get(n)||null,e,t,l,a,i)),!0}return!1}function fu(e){var t=Vl(e.target);if(t!==null){var l=U(t);if(l!==null){if(t=l.tag,t===13){if(t=$(l),t!==null){e.blockedOn=t,Td(e.priority,function(){du(l)});return}}else if(t===31){if(t=be(l),t!==null){e.blockedOn=t,Td(e.priority,function(){du(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=td(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);to=a,l.target.dispatchEvent(a),to=null}else return t=Kl(l),t!==null&&ru(t),e.blockedOn=l,!1;t.shift()}return!0}function uu(e,t,l){Gn(e)&&l.delete(t)}function W0(){ad=!1,hl!==null&&Gn(hl)&&(hl=null),bl!==null&&Gn(bl)&&(bl=null),yl!==null&&Gn(yl)&&(yl=null),hi.forEach(uu),bi.forEach(uu)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ad||(ad=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,W0)))}var Ln=null;function pu(e){Ln!==e&&(Ln=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Ln===e&&(Ln=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(ld(a||l)===null)continue;break}var n=Kl(l);n!==null&&(e.splice(t,3),t-=3,tr(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function _a(e){function t(d){return kn(d,e)}hl!==null&&kn(hl,e),bl!==null&&kn(bl,e),yl!==null&&kn(yl,e),hi.forEach(t),bi.forEach(t);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)fu(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],o=i[Xe]||null;if(typeof n=="function")o||pu(l);else if(o){var r=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Xe]||null)r=o.formAction;else if(ld(i)!==null)continue}else r=o.action;typeof r=="function"?l[a+1]=r:(l.splice(a,3),a-=3),pu(l)}}}function mu(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function id(e){this._internalRoot=e}Un.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,a=rt();nu(l,a,e,t,null,null)},Un.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nu(e.current,2,null,e,null,null),yn(),t[ql]=null}};function Un(e){this._internalRoot=e}Un.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ed();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&fu(e)}};var gu=H.version;if(gu!=="19.2.4")throw Error(u(527,gu,"19.2.4"));S.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=A(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var F0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bn.isDisabled&&Bn.supportsFiber)try{Ma=Bn.inject(F0),Pe=Bn}catch{}}return vi.createRoot=function(e,t){if(!R(e))throw Error(u(299));var l=!1,a="",i=ws,n=As,o=Es;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=au(e,1,!1,null,null,l,a,null,i,n,o,mu),e[ql]=t.current,Br(e),new id(t)},vi.hydrateRoot=function(e,t,l){if(!R(e))throw Error(u(299));var a=!1,i="",n=ws,o=As,r=Es,d=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError),l.formState!==void 0&&(d=l.formState)),t=au(e,1,!0,t,l??null,a,i,d,n,o,r,mu),t.context=iu(null),l=t.current,a=rt(),a=Zn(a),i=il(a),i.callback=null,nl(l,i,a),l=a,t.current.lanes=l,Da(t,l),zt(t),e[ql]=t.current,Br(e),new Un(t)},vi.version="19.2.4",vi}var _u;function rm(){if(_u)return rd.exports;_u=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(H){console.error(H)}}return E(),rd.exports=om(),rd.exports}var dm=rm();const Du={AE_en:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Mother’s Day is coming on May 10 — and shoppers start browsing early. Create a giftable Groupon now so customers can send an instant gift, and you can unlock added exposure during Mother’s Day promotions.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Launch your first Groupon with a gift-ready offer so you’re eligible for seasonal gifting visibility as demand builds. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Rejoin with a giftable offer—Mother’s Day is a high-intent moment to restart sales and visibility on Groupon. 
  
  %%[ else ]%% 
  
 You’re already live — add a premium option or a giftable add-on to boost clicks and revenue per voucher. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Book time with your Account Manager

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Review and optimise your live deal

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Here are some top-performing examples from a similar businesses on Groupon, to help inspire your own Mother's Day offer:  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - Sold %%=v(@UNITS_SOLD)=%% vouchers.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+FD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+wins+banner+FD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x275-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contact your Account Manager


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimize your Mother’s Day deal 

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch your Mother’s Day deal 

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch your Mother’s Day deal 

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Launch early so you’re ready when Mother’s Day gifting searches spike in your market.

<br><br>  
  Best,
  <br>Your Groupon Team  
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,AU_en:"",BE_fr:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-FR.png" alt="Fête des Mères : Offrez le cadeau parfait avec Groupon !" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


La fête des Mères approche à grands pas (le 10 mai) et les clients commencent déjà leurs recherches. Créez dès maintenant une offre Groupon dédiée pour permettre à vos clients d'offrir instantannément un cadeau et bénéficiez d'une visibilité maximale sur notre plateforme pendant cette période clé.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Lancez votre première offre Groupon avec une offre prête à offrir pour bénéficier d'une visibilité saisonnière à mesure que la demande augmente. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Relancez-vous avec une offre cadeau&nbsp;sur Groupon: la fête des mères est une période propice pour relancer les ventes et la visibilité sur Groupon.
  
  %%[ else ]%% 
  
 Votre offre est déjà en ligne&nbsp;! C’est parfait ! Maximisez votre panier moyen en ajoutant une option Premium ou un module complémentaire pour séduire les clients en quête d’exceptionnel. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">


 Prenez rendez-vous avec votre gestionnaire de compte
  
  
</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Examinez et optimisez votre offre actuelle
  
  
</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Créez ou modifiez votre campagne pour la fête des mères

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Créez ou modifiez votre campagne pour la fête des mères

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Voici des exemples performants d'entreprises similaires sur Groupon, pour vous inspirer dans votre propre offre pour la Fête des Mères :
  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - %%=v(@UNITS_SOLD)=%% coupons vendus.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-FR+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-FR+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-FR+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-FR+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-FR+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-FR+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-FR+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-FR+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="CONSEILS POUR VOS OFFRES
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contactez votre gestionnaire de compte


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimisez votre offre pour la fête des mères

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Lancez votre offre pour la fête des mères

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Lancez votre offre pour la fête des mères

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Lancez votre campagne tôt pour être prêt(e) lorsque les recherches de cadeaux pour la fête des mères connaîtront un pic sur votre marché.

<br><br>  
  Cordialement,

  <br>Votre équipe Groupon
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,BE_nl:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Moederdag komt eraan op 10 mei – en shoppers beginnen al vroeg met online winkelen. Maak je Groupon 'cadeau-klaar', zodat klanten direct een cadeau kunnen versturen en jij extra exposure krijgt tijdens Moederdagacties.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Lanceer je eerste Groupon met een kant-en-klaar cadeau-aanbod, zo geniet je van extra visibiliteit als de vraag toeneemt. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Pak opnieuw uit met een aantrekkelijk cadeau: Moederdag is hét moment om je verkoop en visibiliteit op Groupon een boost te geven.
  
  %%[ else ]%% 
  
  Sta je al live met een Groupon? Haal meer uit je campagne. Voeg een premium optie of een cadeaubare extra toe om het aantal klikken en de omzet per groupon te verhogen. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Maak een afspraak met je accountmanager

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Bekijk en optimaliseer je live deal
  
  
</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Maak of bewerk je Moederdagcampagne

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Maak of bewerk je Moederdagcampagne

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Hier zijn voorbeelden van succesvolle aanbiedingen van vergelijkbare bedrijven op Groupon, ter inspiratie voor je eigen Moederdag-aanbieding:

  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - %%=v(@UNITS_SOLD)=%% verkochte vouchers.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-MD2026-quick+win+tips+banner+Else+NL.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-MD2026-quick+win+tips+banner+Else+NL.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Neem contact op met je accountmanager
  

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimaliseer je Moederdag-aanbieding
  
  
</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Start je Moederdag-aanbieding 

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Start je Moederdag-aanbieding
  
  
</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Start vroeg genoeg, zodat je klaar bent wanneer de zoekopdrachten naar Moederdagcadeaus in jouw markt pieken.

<br><br>  

  Met vriendelijke groet, 
   <br>Je Groupon-team
  
  
  
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,DE_de:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-DE.png" alt="Das perfekte Geschenk: Ein Groupon zum Muttertag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Der Muttertag steht vor der Tür, am 10. Mai – und die Käufer beginnen schon früh mit der Suche. Erstellen Sie jetzt ein Groupon-Geschenkangebot, damit Kunden sofort ein Geschenk verschicken können und Sie während der Muttertagsaktionen zusätzliche Sichtbarkeit erzielen.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Starten Sie Ihre erste Groupon-Kampagne mit einem attraktiven Geschenk-Angebot. Damit sind Sie im wichtigen Geschenk-Segment präsent, noch bevor die Nachfrage ihren Höhepunkt erreicht.
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Steigen Sie mit einem attraktiven Geschenkangebot wieder ein – der Muttertag ist ein idealer Zeitpunkt, um den Umsatz und die Sichtbarkeit über Groupon wieder anzukurbeln. 
  
  %%[ else ]%% 
  
  Sie sind bereits online – fügen Sie eine Premium-Option oder ein Geschenkgutschein-Add-on hinzu, um Klicks und Umsatz pro Gutschein zu steigern.
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Vereinbaren Sie einen Termin mit Ihrem Ansprechpartner
  
  
</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Überprüfen und optimieren Sie Ihr Live-Angebot

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Erstellen oder bearbeiten Sie Ihre Muttertagskampagne

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Erstellen oder bearbeiten Sie Ihre Muttertagskampagne

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Hier sind besonders erfolgreiche Beispiele ähnlicher Unternehmen auf Groupon, die Ihnen als Inspiration für Ihr eigenes Muttertagsangebot dienen können:

  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> %%=v(@UNITS_SOLD)=%% verkaufter Gutscheine.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-DE+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-DE+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-DE+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-DE+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-DE+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-DE+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-DE+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-DE+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="Tipps zum schnellen Erfolg
" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Wenden Sie sich an Ihren Ansprechpartner


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimieren Sie Ihr Muttertagsangebot

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Starten Sie Ihr Muttertagsangebot
  
</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Starten Sie Ihr Muttertagsangebot

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Starten Sie rechtzeitig, damit Ihr Angebot genau dann sichtbar ist, wenn die Suche nach Muttertagsgeschenken in Ihrem Markt beginnt

<br><br>  
  Beste Grüße,
  <br>Ihr Groupon-Team
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,ES_es:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-ES.png" alt="Ofrece el regalo perfecto: ¡un Groupon para el Día de la Madre!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


El Día de la Madre se acerca (3 de mayo) y los compradores empiezan a explorar posibilidades. Crea un Groupon para regalar ahora para que tus clientes puedan enviar un regalo al instante y así conseguirás mayor visibilidad durante las promociones del Día de la Madre.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Lanza tu primer Groupon con una oferta lista para regalar, de modo que seas elegible para obtener visibilidad de regalos de temporada a medida que aumenta la demanda. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Vuelve a unirte con una oferta que se pueda regalar: el Día de la Madre es un momento de gran interés para reiniciar las ventas y la visibilidad en Groupon.
  
  %%[ else ]%% 
  
  Si ya tienes una oferta activa: añade una opción premium o un complemento de regalo para aumentar los clics y los ingresos por cupón.
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contacta con tu asesor de Groupon

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Revisa y optimiza tu oferta activa

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Crea o edita tu campaña del Día de la Madre

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Crea o edita tu campaña del Día de la Madre

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Aquí tienes ejemplos de negocios similares con un gran rendimiento en Groupon, para inspirar tu propia oferta del Día de la Madre:


<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> -  %%=v(@UNITS_SOLD)=%% cupones vendidos.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-ES+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-ES+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-ES+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-ES+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-ES+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-ES+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-ES+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-ES+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="CONSEJOS RÁPIDOS PARA GANAR" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contacta con tu asesor de Groupon

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimiza tu oferta del Día de la Madre

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Lanza tu oferta del Día de la Madre
  
  
</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Lanza tu oferta del Día de la Madre

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Realiza el lanzamiento con anticipación para estar preparado cuando las búsquedas de regalos para el Día de la Madre aumenten en tu mercado.
  
  
<br><br>  
  Atentamente,
  <br>Tu equipo de Groupon   
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,FR_fr:"",IE_en:"",IT_it:"",NA_en:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Mother’s Day is coming on May 10 — and shoppers start browsing early. Create a giftable Groupon now so customers can send an instant gift, and you can unlock added exposure during Mother’s Day promotions.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Launch your first Groupon with a gift-ready offer so you’re eligible for seasonal gifting visibility as demand builds. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Rejoin with a giftable offer—Mother’s Day is a high-intent moment to restart sales and visibility on Groupon. 
  
  %%[ else ]%% 
  
 You’re already live — add a premium option or a giftable add-on to boost clicks and revenue per voucher. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Book time with your Account Manager

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Review and optimise your live deal

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Here are some top-performing examples from a similar businesses on Groupon, to help inspire your own Mother's Day offer:  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - Sold %%=v(@UNITS_SOLD)=%% vouchers.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+FD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+wins+banner+FD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x275-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contact Your Account Manager


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimize Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Launch early so you’re ready when Mother’s Day gifting searches spike in your market.

<br><br>  
  Best,
  <br>Your Groupon Team  
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,NL_nl:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-NL.png" alt="Geef het perfecte cadeau: een Groupon voor Moederdag!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Moederdag komt eraan op 10 mei – en shoppers beginnen al vroeg met online winkelen. Maak je Groupon 'cadeau-klaar', zodat klanten direct een cadeau kunnen versturen en jij extra exposure krijgt tijdens Moederdagacties.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Lanceer je eerste Groupon met een kant-en-klaar cadeau-aanbod, zo geniet je van extra visibiliteit als de vraag toeneemt. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Pak opnieuw uit met een aantrekkelijk cadeau: Moederdag is hét moment om je verkoop en visibiliteit op Groupon een boost te geven.
  
  %%[ else ]%% 
  
  Sta je al live met een Groupon? Haal meer uit je campagne. Voeg een premium optie of een cadeaubare extra toe om het aantal klikken en de omzet per groupon te verhogen. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Maak een afspraak met je accountmanager

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Bekijk en optimaliseer je live deal
  
  
</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Maak of bewerk je Moederdagcampagne

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Maak of bewerk je Moederdagcampagne

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Hier zijn voorbeelden van succesvolle aanbiedingen van vergelijkbare bedrijven op Groupon, ter inspiratie voor je eigen Moederdag-aanbieding:

  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - %%=v(@UNITS_SOLD)=%% verkochte vouchers.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-NL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-NL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-MD2026-quick+win+tips+banner+Else+NL.jpg" alt="SNELLE WINSTTIPS" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-MD2026-quick+win+tips+banner+Else+NL.jpg" alt="SNELLE WINSTTIPS" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Neem contact op met je accountmanager  

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimaliseer je Moederdag-aanbieding
  
  
</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Start je Moederdag-aanbieding 

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Start je Moederdag-aanbieding
  
  
</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Start vroeg genoeg, zodat je klaar bent wanneer de zoekopdrachten naar Moederdagcadeaus in jouw markt pieken.

<br><br>  

  Met vriendelijke groet, 
   <br>Je Groupon-team
  
  
  
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,PL_pl:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
<\/script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-PL.png" alt="Podaruj idealny prezent: Groupon z okazji Dnia Matki!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

  Dzień Matki zbliża się wielkimi krokami. To już 26 maja — a klienci zaczynają szukać okazji o wiele wcześniej. Uruchom ofertę z możliwością podarunku, aby klienci mogli od razu wysłać prezent, a Ty zyskasz dodatkową widoczność podczas promocji z okazji Dnia Matki.

  
<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Uruchom swój pierwszy Groupon z ofertą gotową na prezent, aby móc skorzystać z sezonowej promocji prezentów, gdy popyt wzrośnie.
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Skorzystaj z oferty prezentowej — Dzień Matki to okazja, aby wznowić sprzedaż i zwiększyć widoczność na Grouponie. 
  
  %%[ else ]%% 
  
  Jesteś już aktywny — dodaj opcję premium lub dodatek w formie prezentu, aby zwiększyć liczbę kliknięć i przychody z kuponu. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Zarezerwuj czas na rozmowę z Menadżerem Konta

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Przejrzyj i zoptymalizuj swoją ofertę na żywo

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Zbuduj lub edytuj swoją kampanię na Dzień Matki

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Zbuduj lub edytuj swoją kampanię na Dzień Matki

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%


<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Oto kilka przykładów najlepszych deali podobnych firm na Grouponie, które mogą zainspirować Cię do stworzenia własnej oferty na Dzień Matki:


 
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - sprzedano %%=v(@UNITS_SOLD)=%% vouchery/-ów.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-PL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-PL+MDay+Campaign+2026+Send+1+Tips+bannerHBW.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-PL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-PL+MDay+Campaign+2026+Send+1+Tips+bannerFD.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-PL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-PL+MDay+Campaign+2026+Send+1+Tips+bannerTTD.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x300px-PL+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x200px-PL+MDay+Campaign+2026+Send+1+Tips+bannerElse.jpg" alt="SZYBKIE WSKAZÓWKI" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;"><a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Zarezerwuj czas na rozmowę z Menadżerem Konta


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Zoptymalizuj swoją ofertę na Dzień Matki

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Uruchom swoją ofertę z okazji Dnia Matki

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Uruchom swoją ofertę z okazji Dnia Matki

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Zacznij działać wcześniej, aby być gotowym, gdy liczba wyszukiwań prezentów na Dzień Matki wzrośnie na Twoim rynku.

<br><br>  
  Pozdrawiamy,
  <br>Twój Zespół Groupon 
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`,UK_en:""},Su=Object.keys(Du).map(E=>({value:E,label:E.replace("_"," ").toUpperCase()})),pd=[{key:"CATEGORY_V3",label:"Category",options:[{value:"Beauty / Wellness / Healthcare",label:"💆 Beauty / Wellness"},{value:"Food & Drink",label:"🍽 Food & Drink"},{value:"Leisure Offers / Activities",label:"🎭 Leisure / Activities"},{value:"Services",label:"🔧 Services (else)"}]},{key:"MERCHANT_TYPE",label:"Merchant Type",options:[{value:"New",label:"🆕 New"},{value:"Inactive",label:"😴 Inactive"},{value:"Existing",label:"✅ Existing (else)"}]},{key:"ACCOUNT_OWNER_NAME",label:"Account Manager",options:[{value:"Jane Smith",label:"👤 Has AM"},{value:"House Account",label:"🏠 House Account"},{value:"Merchant Support",label:"🚫 No AM (else)"}]},{key:"HAS_LIVE_DEAL",label:"Live Deal",options:[{value:"True",label:"🟢 Has Live Deal"},{value:"False",label:"🔴 No Live Deal"}]},{key:"MERCHANT_PERMALINK",label:"Permalink",options:[{value:"my-deal-url",label:"🔗 Has Permalink"},{value:"",label:"❌ No Permalink"}]}],cm=Object.fromEntries(pd.map(E=>[E.key,E.options[0].value]));function fd(E,H){if(E=E.trim(),/\s+and\s+/i.test(E))return E.split(/\s+and\s+/i).every(u=>fd(u.trim(),H));if(/\s+or\s+/i.test(E))return E.split(/\s+or\s+/i).some(u=>fd(u.trim(),H));let T;return T=E.match(/^not\s+empty\((\w+)\)$/i),T?!!H[T[1]]&&H[T[1]]!=="":(T=E.match(/^empty\((\w+)\)$/i),T?!H[T[1]]||H[T[1]]==="":(T=E.match(/IndexOf\((\w+),\s*"([^"]*)"\)\s*==\s*0/i),T?!String(H[T[1]]??"").includes(T[2]):(T=E.match(/^(\w+)\s*==\s*"([^"]*)"$/i),T?String(H[T[1]]??"")===T[2]:(T=E.match(/^(\w+)\s*!=\s*"([^"]*)"$/i),T?String(H[T[1]]??"")!==T[2]:(T=E.match(/^(\w+)\s*==\s*(?:''|"")$/i),T?String(H[T[1]]??"")==="":(T=E.match(/^(\w+)\s*!=\s*(?:''|"")$/i),T?String(H[T[1]]??"")!=="":!1))))))}function sm(E,H){let T=E.replace(/%%\[(?:\s*endif\s*)+\]%%/gi,_=>{const A=(_.match(/endif/gi)||[]).length;return`%%[ endif ]%%
`.repeat(A)});const u=/%%\[\s*(if\s+[\s\S]+?|elseif\s+[\s\S]+?|else|endif)\s*\]%%/gi;let R=[],U=0,$;for(;($=u.exec(T))!==null;){$.index>U&&R.push({type:"text",val:T.slice(U,$.index)});let _=$[1].trim();/^if\s+/i.test(_)?R.push({type:"if",cond:_.replace(/^if\s+/i,"").replace(/\s+then$/i,"").trim()}):/^elseif\s+/i.test(_)?R.push({type:"elseif",cond:_.replace(/^elseif\s+/i,"").replace(/\s+then$/i,"").trim()}):/^else$/i.test(_)?R.push({type:"else"}):/^endif$/i.test(_)&&R.push({type:"endif"}),U=u.lastIndex}U<T.length&&R.push({type:"text",val:T.slice(U)});function be(_){let A="",B=0;for(;B<_.length;){let C=_[B];if(C.type==="text")A+=C.val,B++;else if(C.type==="if"){let te=1,ze=[];for(B++;B<_.length&&te>0;)_[B].type==="if"?te++:_[B].type==="endif"&&te--,te>0&&ze.push(_[B]),B++;let ve=[],ge={cond:C.cond,tokens:[]},Q=0;for(let F=0;F<ze.length;F++){let we=ze[F];we.type==="if"?Q++:we.type==="endif"&&Q--,Q===0&&we.type==="elseif"?(ve.push(ge),ge={cond:we.cond,tokens:[]}):Q===0&&we.type==="else"?(ve.push(ge),ge={cond:"__else__",tokens:[]}):ge.tokens.push(we)}ve.push(ge);for(let F of ve)if(F.cond==="__else__"||fd(F.cond,H)){A+=be(F.tokens);break}}else B++}return A}return be(R)}function fm(E,H){if(!E)return"";let T=E;return T=T.replace(/<script runat="server"[\s\S]*?<\/script>/gi,""),T=T.replace(/%%=ContentBlockByID\([^)]*\)=%%/g,""),T=T.replace(/%%=RedirectTo\([^)]*\)=%%/g,"#"),T=T.replace(/%%=v\(@\w+\)=%%/gi,"#"),T=T.replace(/%%=CloudPagesURL\([^)]*\)=%%/gi,"#"),T=sm(T,H),T=T.replace(/%%\[[\s\S]*?\]%%/g,""),T=T.replace(/%%=[^%]*=%%/g,""),T}function um(E,H){const T=fm(H,E),R=[...H.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(A=>A[1]).join(`
`),U=T.match(/<body[^>]*>([\s\S]*?)<\/body>/i),$=U?U[1]:T,be=["<script>","function reportHeight(){","  var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);","  window.parent.postMessage({type:'iframeHeight',height:h},'*');","}","window.addEventListener('load',reportHeight);","document.querySelectorAll('img').forEach(function(i){","  i.addEventListener('load',reportHeight);","  i.addEventListener('error',reportHeight);","});","setTimeout(reportHeight,400);","setTimeout(reportHeight,1200);","<\/script>"].join(`
`);return'<!DOCTYPE html><html><head><meta charset="utf-8"><style>'+["html,body{margin:0 !important;padding:0 !important;background:#ffffff;}","body{padding:12px 0 !important;}",".em_main_table > tbody > tr > td, .em_main_table > tr > td{overflow:hidden !important;}",".em_wrapper > tbody > tr > td, .em_wrapper > tr > td{overflow:hidden !important;}","div[style*='inline-block']{display:block !important;width:100% !important;box-sizing:border-box !important;text-align:center !important;}","div[style*='text-align:left']{text-align:left !important;}","div[style*='text-align: left']{text-align:left !important;}"].join(`
`)+R+"</style></head><body>"+$+be+"</body></html>"}function Mu(E,H){const T=new URLSearchParams;return T.set("lang",H),Object.entries(E).forEach(([u,R])=>T.set(u,R)),T.toString()}function pm(E){const H=new URLSearchParams(E),T={...cm};return pd.forEach(({key:u})=>{H.has(u)&&(T[u]=H.get(u))}),T}function Ou({active:E,onClick:H,children:T,color:u="#53D989"}){return ie.jsx("button",{onClick:H,style:{padding:"5px 13px",borderRadius:20,cursor:"pointer",border:E?`2px solid ${u}`:"2px solid rgba(255,255,255,0.15)",background:E?u:"rgba(255,255,255,0.07)",color:E?"#1d0533":"rgba(255,255,255,0.8)",fontWeight:E?700:400,fontSize:12.5,transition:"all 0.15s",whiteSpace:"nowrap",fontFamily:"inherit"},children:T})}function mm({show:E,msg:H}){return ie.jsx("div",{style:{position:"fixed",bottom:28,left:"50%",transform:`translateX(-50%) translateY(${E?0:70}px)`,background:"#1d0533",color:"#fff",padding:"10px 24px",borderRadius:24,fontSize:13,fontWeight:600,boxShadow:"0 4px 20px rgba(0,0,0,0.3)",transition:"transform 0.25s",zIndex:9999,pointerEvents:"none"},children:H})}function gm(){const[E,H]=xt.useState(()=>pm(window.location.search)),[T,u]=xt.useState(()=>new URLSearchParams(window.location.search).get("lang")||Su[0].value),[R,U]=xt.useState({show:!1,msg:""}),[$,be]=xt.useState(1),[_,A]=xt.useState(900),B=xt.useRef(null),C=xt.useRef(null);xt.useEffect(()=>{window.history.replaceState(null,"",`${window.location.pathname}?${Mu(E,T)}`)},[E,T]),xt.useEffect(()=>{const Q=()=>{if(!C.current)return;const we=C.current.clientWidth;be(Math.min(1,we/600))};Q();const F=new ResizeObserver(Q);return C.current&&F.observe(C.current),()=>F.disconnect()},[]),xt.useEffect(()=>{const Q=F=>{F.data?.type==="iframeHeight"&&F.data.height>100&&A(F.data.height+24)};return window.addEventListener("message",Q),()=>window.removeEventListener("message",Q)},[]);const te=xt.useCallback((Q,F)=>{H(we=>({...we,[Q]:F}))},[]),ze=Q=>{U({show:!0,msg:Q}),setTimeout(()=>U(F=>({...F,show:!1})),2500)},ve=()=>{const Q=`${window.location.origin}${window.location.pathname}?${Mu(E,T)}`;navigator.clipboard.writeText(Q).then(()=>ze("✓ Link copiado al portapapeles"))},ge=um(E,Du[T]||"");return ie.jsxs("div",{style:{minHeight:"100vh",background:"#13102a",fontFamily:"'Segoe UI', sans-serif"},children:[ie.jsx("div",{style:{position:"sticky",top:0,zIndex:100,background:"#1d0533",boxShadow:"0 2px 20px rgba(0,0,0,0.5)"},children:ie.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"0 20px"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:13,paddingBottom:11,borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[ie.jsx("span",{style:{fontSize:18},children:"📧"}),ie.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"AMPscript Previewer"}),ie.jsx("span",{style:{background:"#53D989",color:"#1d0533",fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:10},children:"● LIVE"})]}),ie.jsx("button",{onClick:ve,style:{padding:"7px 16px",borderRadius:20,cursor:"pointer",background:"#53D989",color:"#1d0533",border:"none",fontSize:12.5,fontWeight:700},children:"🔗 Share Link"})]}),ie.jsxs("div",{style:{padding:"11px 0 13px",display:"flex",flexDirection:"column",gap:8},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",borderBottom:"1px solid rgba(255,255,255,0.05)",paddingBottom:"10px",marginBottom:"5px"},children:[ie.jsx("span",{style:{color:"#53D989",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,minWidth:145},children:"🌍 Country / Lang"}),ie.jsx("div",{style:{display:"flex",gap:5,flexWrap:"wrap"},children:Su.map(Q=>ie.jsx(Ou,{active:T===Q.value,onClick:()=>u(Q.value),color:"#53D989",children:Q.label},Q.value))})]}),pd.map(({key:Q,label:F,options:we})=>ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[ie.jsx("span",{style:{color:"rgba(255,255,255,0.45)",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,minWidth:145},children:F}),ie.jsx("div",{style:{display:"flex",gap:5,flexWrap:"wrap"},children:we.map(Ae=>ie.jsx(Ou,{active:E[Q]===Ae.value,onClick:()=>te(Q,Ae.value),children:Ae.label},Ae.value))})]},Q))]})]})}),ie.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"24px 20px 60px"},children:[ie.jsx("div",{ref:C,style:{width:"100%"},children:ie.jsx("div",{style:{borderRadius:12,overflow:"hidden",boxShadow:"0 6px 40px rgba(0,0,0,0.5)",width:"100%",height:Math.round(_*$)},children:ie.jsx("div",{style:{width:600,height:_,transformOrigin:"top left",transform:`scale(${$})`},children:ie.jsx("iframe",{ref:B,srcDoc:ge,style:{width:"100%",height:_,border:"none",display:"block",background:"#fff"},title:"Email Preview",sandbox:"allow-scripts allow-same-origin",scrolling:"no"})})})}),ie.jsxs("p",{style:{textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:12,marginTop:14},children:["Visualizando: ",ie.jsx("strong",{children:T.toUpperCase()})," · Zoom: ",Math.round($*100),"%"]})]}),ie.jsx(mm,{show:R.show,msg:R.msg})]})}dm.createRoot(document.getElementById("root")).render(ie.jsx(xt.StrictMode,{children:ie.jsx(gm,{})}));
