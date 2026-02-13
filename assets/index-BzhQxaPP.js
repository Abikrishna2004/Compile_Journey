(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},Co={};var vg;function vS(){if(vg)return Co;vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var xg;function xS(){return xg||(xg=1,Zf.exports=vS()),Zf.exports}var A=xS(),Kf={exports:{}},at={};var Sg;function SS(){if(Sg)return at;Sg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=y,this.updater=_e||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=x.prototype;function P(U,ne,_e){this.props=U,this.context=ne,this.refs=y,this.updater=_e||R}var L=P.prototype=new z;L.constructor=P,C(L,x.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function H(){}var F={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function w(U,ne,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:ne,ref:Ae!==void 0?Ae:null,props:_e}}function N(U,ne){return w(U.type,ne,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function se(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var ae=/\/+/g;function pe(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?se(""+U.key):ne.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,ne,_e,Ae,Be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case o:case t:ue=!0;break;case v:return ue=U._init,O(ue(U._payload),ne,_e,Ae,Be)}}if(ue)return Be=Be(U),ue=Ae===""?"."+pe(U,0):Ae,B(Be)?(_e="",ue!=null&&(_e=ue.replace(ae,"$&/")+"/"),O(Be,ne,_e,"",function(He){return He})):Be!=null&&(X(Be)&&(Be=N(Be,_e+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(ae,"$&/")+"/")+ue)),ne.push(Be)),1;ue=0;var Ne=Ae===""?".":Ae+":";if(B(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],te=Ne+pe(Ae,ke),ue+=O(Ae,ne,_e,te,Be);else if(ke=b(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,te=Ne+pe(Ae,ke++),ue+=O(Ae,ne,_e,te,Be);else if(te==="object"){if(typeof U.then=="function")return O(fe(U),ne,_e,Ae,Be);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(U,ne,_e){if(U==null)return U;var Ae=[],Be=0;return O(U,Ae,"","",function(te){return ne.call(_e,te,Be++)}),Ae}function ie(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:G,forEach:function(U,ne,_e){G(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return G(U,function(){ne++}),ne},toArray:function(U){return G(U,function(ne){return ne})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=_,at.Children=Se,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=C({},U.props),Be=U.key;if(ne!=null)for(te in ne.key!==void 0&&(Be=""+ne.key),ne)!J.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Ae[te]=ne[te]);var te=arguments.length-2;if(te===1)Ae.children=_e;else if(1<te){for(var ue=Array(te),Ne=0;Ne<te;Ne++)ue[Ne]=arguments[Ne+2];Ae.children=ue}return w(U.type,Be,Ae)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},at.createElement=function(U,ne,_e){var Ae,Be={},te=null;if(ne!=null)for(Ae in ne.key!==void 0&&(te=""+ne.key),ne)J.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ne[Ae]);var ue=arguments.length-2;if(ue===1)Be.children=_e;else if(1<ue){for(var Ne=Array(ue),ke=0;ke<ue;ke++)Ne[ke]=arguments[ke+2];Be.children=Ne}if(U&&U.defaultProps)for(Ae in ue=U.defaultProps,ue)Be[Ae]===void 0&&(Be[Ae]=ue[Ae]);return w(U,te,Be)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:h,render:U}},at.isValidElement=X,at.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},at.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},at.startTransition=function(U){var ne=F.T,_e={};F.T=_e;try{var Ae=U(),Be=F.S;Be!==null&&Be(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(H,Me)}catch(te){Me(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),F.T=ne}},at.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},at.use=function(U){return F.H.use(U)},at.useActionState=function(U,ne,_e){return F.H.useActionState(U,ne,_e)},at.useCallback=function(U,ne){return F.H.useCallback(U,ne)},at.useContext=function(U){return F.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,ne){return F.H.useDeferredValue(U,ne)},at.useEffect=function(U,ne){return F.H.useEffect(U,ne)},at.useEffectEvent=function(U){return F.H.useEffectEvent(U)},at.useId=function(){return F.H.useId()},at.useImperativeHandle=function(U,ne,_e){return F.H.useImperativeHandle(U,ne,_e)},at.useInsertionEffect=function(U,ne){return F.H.useInsertionEffect(U,ne)},at.useLayoutEffect=function(U,ne){return F.H.useLayoutEffect(U,ne)},at.useMemo=function(U,ne){return F.H.useMemo(U,ne)},at.useOptimistic=function(U,ne){return F.H.useOptimistic(U,ne)},at.useReducer=function(U,ne,_e){return F.H.useReducer(U,ne,_e)},at.useRef=function(U){return F.H.useRef(U)},at.useState=function(U){return F.H.useState(U)},at.useSyncExternalStore=function(U,ne,_e){return F.H.useSyncExternalStore(U,ne,_e)},at.useTransition=function(){return F.H.useTransition()},at.version="19.2.4",at}var yg;function Ch(){return yg||(yg=1,Kf.exports=SS()),Kf.exports}var pn=Ch(),Qf={exports:{}},No={},Jf={exports:{}},$f={};var Mg;function yS(){return Mg||(Mg=1,(function(o){function t(O,G){var ie=O.length;O.push(G);e:for(;0<ie;){var Me=ie-1>>>1,Se=O[Me];if(0<l(Se,G))O[Me]=G,O[ie]=Se,ie=Me;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],ie=O.pop();if(ie!==G){O[0]=ie;e:for(var Me=0,Se=O.length,U=Se>>>1;Me<U;){var ne=2*(Me+1)-1,_e=O[ne],Ae=ne+1,Be=O[Ae];if(0>l(_e,ie))Ae<Se&&0>l(Be,_e)?(O[Me]=Be,O[Ae]=ie,Me=Ae):(O[Me]=_e,O[ne]=ie,Me=ne);else if(Ae<Se&&0>l(Be,ie))O[Me]=Be,O[Ae]=ie,Me=Ae;else break e}}return G}function l(O,G){var ie=O.sortIndex-G.sortIndex;return ie!==0?ie:O.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,b=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=O)r(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function B(O){if(C=!1,L(O),!R)if(i(m)!==null)R=!0,H||(H=!0,se());else{var G=i(p);G!==null&&fe(B,G.startTime-O)}}var H=!1,F=-1,J=5,w=-1;function N(){return y?!0:!(o.unstable_now()-w<J)}function X(){if(y=!1,H){var O=o.unstable_now();w=O;var G=!0;try{e:{R=!1,C&&(C=!1,z(F),F=-1),b=!0;var ie=S;try{t:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&N());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,S=_.priorityLevel;var Se=Me(_.expirationTime<=O);if(O=o.unstable_now(),typeof Se=="function"){_.callback=Se,L(O),G=!0;break t}_===i(m)&&r(m),L(O)}else r(m);_=i(m)}if(_!==null)G=!0;else{var U=i(p);U!==null&&fe(B,U.startTime-O),G=!1}}break e}finally{_=null,S=ie,b=!1}G=void 0}}finally{G?se():H=!1}}}var se;if(typeof P=="function")se=function(){P(X)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=X,se=function(){pe.postMessage(null)}}else se=function(){x(X,0)};function fe(O,G){F=x(function(){O(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var ie=S;S=G;try{return O()}finally{S=ie}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ie=S;S=O;try{return G()}finally{S=ie}},o.unstable_scheduleCallback=function(O,G,ie){var Me=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Me+ie:Me):ie=Me,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ie+Se,O={id:v++,callback:G,priorityLevel:O,startTime:ie,expirationTime:Se,sortIndex:-1},ie>Me?(O.sortIndex=ie,t(p,O),i(m)===null&&O===i(p)&&(C?(z(F),F=-1):C=!0,fe(B,ie-Me))):(O.sortIndex=Se,t(m,O),R||b||(R=!0,H||(H=!0,se()))),O},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(O){var G=S;return function(){var ie=S;S=G;try{return O.apply(this,arguments)}finally{S=ie}}}})($f)),$f}var bg;function MS(){return bg||(bg=1,Jf.exports=yS()),Jf.exports}var ed={exports:{}},Dn={};var Eg;function bS(){if(Eg)return Dn;Eg=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:b}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var Tg;function ES(){if(Tg)return ed.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=bS(),ed.exports}var Ag;function TS(){if(Ag)return No;Ag=1;var o=MS(),t=Ch(),i=ES();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case P:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(e){return{current:e}}function ne(e){0>Se||(e.current=Me[Se],Me[Se]=null,Se--)}function _e(e,n){Se++,Me[Se]=e.current,e.current=n}var Ae=U(null),Be=U(null),te=U(null),ue=U(null);function Ne(e,n){switch(_e(te,n),_e(Be,e),_e(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=G0(n),e=V0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ae),_e(Ae,e)}function ke(){ne(Ae),ne(Be),ne(te)}function He(e){e.memoizedState!==null&&_e(ue,e);var n=Ae.current,a=V0(n,e.type);n!==a&&(_e(Be,e),_e(Ae,a))}function dt(e){Be.current===e&&(ne(Ae),ne(Be)),ue.current===e&&(ne(ue),To._currentValue=ie)}var Qt,gt;function ht(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+gt}var Rt=!1;function st(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ee=le}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(le){ee=le}e.call(ge.prototype)}}else{try{throw Error()}catch(le){ee=le}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var I=g.split(`
`),Q=E.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Q.length)for(s=I.length-1,c=Q.length-1;1<=s&&0<=c&&I[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Q[c]){var de=`
`+I[s].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=s&&0<=c);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return st(e.type,!1);case 11:return st(e.type.render,!1);case 1:return st(e.type,!0);case 31:return ht("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Yt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Dt=o.unstable_cancelCallback,We=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,we=o.unstable_IdlePriority,Xe=o.log,tt=o.unstable_setDisableYieldValue,be=null,Ee=null;function Fe(e){if(typeof Xe=="function"&&tt(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Pe=Math.clz32?Math.clz32:j,Ce=Math.log,lt=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Ce(e)/lt|0)|0}var Ue=256,Te=262144,ze=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=ye(s):(g&=E,g!==0?c=ye(g):a||(a=E&~e,a!==0&&(c=ye(a))))):(E=s&~f,E!==0?c=ye(E):g!==0?c=ye(g):a||(a=s&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=g&~a;0<a;){var de=31-Pe(a),ge=1<<de;E[de]=0,I[de]=-1;var ee=Q[de];if(ee!==null)for(Q[de]=null,de=0;de<ee.length;de++){var le=ee[de];le!==null&&(le.lane&=-536870913)}a&=~ge}s!==0&&Ko(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Dr(e,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:fg(e.type))}function Ci(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,xn="__reactProps$"+ni,_i="__reactContainer$"+ni,Lr="__reactEvents$"+ni,Or="__reactListeners$"+ni,Qo="__reactHandles$"+ni,Bs="__reactResources$"+ni,tr="__reactMarker$"+ni;function Hs(e){delete e[sn],delete e[xn],delete e[Lr],delete e[Or],delete e[Qo]}function Sa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Z0(e);e!==null;){if(a=e[sn])return a;e=Z0(e)}return n}e=a,a=e.parentNode}return null}function ya(e){if(e=e[sn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function nr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ma(e){var n=e[Bs];return n||(n=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[tr]=!0}var W=new Set,oe={};function $(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(oe[e]=n,e=0;e<n.length;e++)W.add(n[e])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Le={};function Ge(e){return Yt.call(Le,e)?!0:Yt.call(Ie,e)?!1:De.test(e)?Le[e]=!0:(Ie[e]=!0,!1)}function je(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jt(e){if(!e._valueTracker){var n=wt(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function Ut(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=wt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ct=/[\n"\\]/g;function it(e){return e.replace(Ct,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,s,c,f,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?yn(e,g,$e(n)):a!=null?yn(e,g,$e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+$e(E):e.removeAttribute("name")}function Vi(e,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),jt(e)}function yn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ot(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function Mn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),jt(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&En(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var jc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Fr=null;function Hh(e){var n=ya(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Sn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ut(s)}break e;case"textarea":Ot(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var Wc=!1;function Gh(e,n,a){if(Wc)return e(n,a);Wc=!0;try{var s=e(n);return s}finally{if(Wc=!1,(zr!==null||Fr!==null)&&(Bl(),zr&&(n=zr,e=Fr,Fr=zr=null,Hh(n),e)))for(n=0;n<e.length;n++)Hh(e[n])}}function Gs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Xi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Yc=!1}var ba=null,Zc=null,$o=null;function Vh(){if($o)return $o;var e,n=Zc,a=n.length,s,c="value"in ba?ba.value:ba.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return $o=c.slice(e,1<s?1-s:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function kh(){return!1}function In(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:kh,this.isPropagationStopped=kh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=In(ir),ks=_({},ir,{view:0,detail:0}),gv=In(ks),Kc,Qc,Xs,il=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(Kc=e.screenX-Xs.screenX,Qc=e.screenY-Xs.screenY):Qc=Kc=0,Xs=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),Xh=In(il),_v=_({},il,{dataTransfer:0}),vv=In(_v),xv=_({},ks,{relatedTarget:0}),Jc=In(xv),Sv=_({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=In(Sv),Mv=_({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bv=In(Mv),Ev=_({},ir,{data:0}),jh=In(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rv[e])?!!n[e]:!1}function $c(){return wv}var Cv=_({},ks,{key:function(e){if(e.key){var n=Tv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nv=In(Cv),Dv=_({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=In(Dv),Uv=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Lv=In(Uv),Ov=_({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=In(Ov),zv=_({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=In(zv),Iv=_({},ir,{newState:0,oldState:0}),Bv=In(Iv),Hv=[9,13,27,32],eu=Xi&&"CompositionEvent"in window,js=null;Xi&&"documentMode"in document&&(js=document.documentMode);var Gv=Xi&&"TextEvent"in window&&!js,Wh=Xi&&(!eu||js&&8<js&&11>=js),Yh=" ",Zh=!1;function Kh(e,n){switch(e){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function Vv(e,n){switch(e){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,Yh);case"textInput":return e=n.data,e===Yh&&Zh?null:e;default:return null}}function kv(e,n){if(Ir)return e==="compositionend"||!eu&&Kh(e,n)?(e=Vh(),$o=Zc=ba=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xv[e.type]:n==="textarea"}function $h(e,n,a,s){zr?Fr?Fr.push(s):Fr=[s]:zr=s,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var qs=null,Ws=null;function jv(e){P0(e,0)}function al(e){var n=nr(e);if(Ut(n))return e}function ep(e,n){if(e==="change")return n}var tp=!1;if(Xi){var tu;if(Xi){var nu="oninput"in document;if(!nu){var np=document.createElement("div");np.setAttribute("oninput","return;"),nu=typeof np.oninput=="function"}tu=nu}else tu=!1;tp=tu&&(!document.documentMode||9<document.documentMode)}function ip(){qs&&(qs.detachEvent("onpropertychange",ap),Ws=qs=null)}function ap(e){if(e.propertyName==="value"&&al(Ws)){var n=[];$h(n,Ws,e,qc(e)),Gh(jv,n)}}function qv(e,n,a){e==="focusin"?(ip(),qs=n,Ws=a,qs.attachEvent("onpropertychange",ap)):e==="focusout"&&ip()}function Wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Ws)}function Yv(e,n){if(e==="click")return al(n)}function Zv(e,n){if(e==="input"||e==="change")return al(n)}function Kv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Kv;function Ys(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Yt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,n){var a=rp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qv=Xi&&"documentMode"in document&&11>=document.documentMode,Br=null,au=null,Zs=null,ru=!1;function cp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Br==null||Br!==Ke(s)||(s=Br,"selectionStart"in s&&iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zs&&Ys(Zs,s)||(Zs=s,s=ql(au,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Br)))}function ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},su={},up={};Xi&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function rr(e){if(su[e])return su[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return su[e]=n[a];return e}var fp=rr("animationend"),dp=rr("animationiteration"),hp=rr("animationstart"),Jv=rr("transitionrun"),$v=rr("transitionstart"),ex=rr("transitioncancel"),pp=rr("transitionend"),mp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function xi(e,n){mp.set(e,n),$(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Gr=0,lu=0;function sl(){for(var e=Gr,n=lu=Gr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&gp(a,c,f)}}function ol(e,n,a,s){ai[Gr++]=e,ai[Gr++]=n,ai[Gr++]=a,ai[Gr++]=s,lu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function cu(e,n,a,s){return ol(e,n,a,s),ll(e)}function sr(e,n){return ol(e,null,null,n),ll(e)}function gp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<vo)throw vo=0,xf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function tx(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,s){return new tx(e,n,a,s)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")uu(e)&&(g=1);else if(typeof e=="string")g=sS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Yn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return or(a.children,c,f,n);case y:g=8,c|=24;break;case x:return e=Yn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case B:return e=Yn(13,a,n,c),e.elementType=B,e.lanes=f,e;case H:return e=Yn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break e;case z:g=9;break e;case L:g=11;break e;case F:g=14;break e;case J:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Yn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function or(e,n,a,s){return e=Yn(7,e,s,n),e.lanes=a,e}function fu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function vp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},xp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var kr=[],Xr=0,ul=null,Ks=0,si=[],oi=0,Ea=null,Ni=1,Di="";function qi(e,n){kr[Xr++]=Ks,kr[Xr++]=ul,ul=e,Ks=n}function Sp(e,n,a){si[oi++]=Ni,si[oi++]=Di,si[oi++]=Ea,Ea=e;var s=Ni;e=Di;var c=32-Pe(s)-1;s&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ni=1<<32-Pe(n)+c|a<<c|s,Di=f+e}else Ni=1<<f|a<<c|s,Di=e}function hu(e){e.return!==null&&(qi(e,1),Sp(e,1,0))}function pu(e){for(;e===ul;)ul=kr[--Xr],kr[Xr]=null,Ks=kr[--Xr],kr[Xr]=null;for(;e===Ea;)Ea=si[--oi],si[oi]=null,Di=si[--oi],si[oi]=null,Ni=si[--oi],si[oi]=null}function yp(e,n){si[oi++]=Ni,si[oi++]=Di,si[oi++]=Ea,Ni=n.id,Di=n.overflow,Ea=e}var Tn=null,qt=null,xt=!1,Ta=null,li=!1,mu=Error(r(519));function Aa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ri(n,e)),mu}function Mp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[xn]=s,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)mt(So[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Vi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||B0(n.textContent,a)?(s.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),s.onScroll!=null&&mt("scroll",n),s.onScrollEnd!=null&&mt("scrollend",n),s.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Aa(e,!0)}function bp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function jr(e){if(e!==Tn)return!1;if(!xt)return bp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&qt&&Aa(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=Y0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=Y0(e)}else n===27?(n=qt,Ha(e.type)?(e=Bf,Bf=null,qt=e):qt=n):qt=Tn?ui(e.stateNode.nextSibling):null;return!0}function lr(){qt=Tn=null,xt=!1}function gu(){var e=Ta;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ta=null),e}function Qs(e){Ta===null?Ta=[e]:Ta.push(e)}var _u=U(null),cr=null,Wi=null;function Ra(e,n,a){_e(_u,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=_u.current,ne(_u)}function vu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function xu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),vu(f.return,a,e),s||(g=null);break e}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(c===ue.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&xu(n,e,a,s),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){cr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Ep(cr,e)}function dl(e,n){return cr===null&&ur(e),Ep(e,n)}function Ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ix=o.unstable_scheduleCallback,ax=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new nx,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&ix(ax,function(){e.controller.abort()})}var $s=null,yu=0,Wr=0,Yr=null;function rx(e,n){if($s===null){var a=$s=[];yu=0,Wr=Tf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yu++,n.then(Tp,Tp),n}function Tp(){if(--yu===0&&$s!==null){Yr!==null&&(Yr.status="fulfilled");var e=$s;$s=null,Wr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ap=O.S;O.S=function(e,n){c0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rx(e,n),Ap!==null&&Ap(e,n)};var fr=U(null);function Mu(){var e=fr.current;return e!==null?e:Xt.pooledCache}function hl(e,n){n===null?_e(fr,fr.current):_e(fr,n.pool)}function Rp(){var e=Mu();return e===null?null:{parent:on._currentValue,pool:e}}var Zr=Error(r(460)),bu=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e}throw hr=n,Zr}}function dr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Zr):a}}var hr=null;function Np(){if(hr===null)throw Error(r(459));var e=hr;return hr=null,e}function Dp(e){if(e===Zr||e===pl)throw Error(r(483))}var Kr=null,eo=0;function gl(e){var n=eo;return eo+=1,Kr===null&&(Kr=[]),Cp(Kr,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Up(e){function n(Y,k){if(e){var K=Y.deletions;K===null?(Y.deletions=[k],Y.flags|=16):K.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=ji(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<k?(Y.flags|=67108866,k):K):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,k,K,me){return k===null||k.tag!==6?(k=fu(K,Y.mode,me),k.return=Y,k):(k=c(k,K),k.return=Y,k)}function I(Y,k,K,me){var Qe=K.type;return Qe===C?de(Y,k,K.props.children,me,K.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&dr(Qe)===k.type)?(k=c(k,K.props),to(k,K),k.return=Y,k):(k=cl(K.type,K.key,K.props,null,Y.mode,me),to(k,K),k.return=Y,k)}function Q(Y,k,K,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=du(K,Y.mode,me),k.return=Y,k):(k=c(k,K.children||[]),k.return=Y,k)}function de(Y,k,K,me,Qe){return k===null||k.tag!==7?(k=or(K,Y.mode,me,Qe),k.return=Y,k):(k=c(k,K),k.return=Y,k)}function ge(Y,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=fu(""+k,Y.mode,K),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return K=cl(k.type,k.key,k.props,null,Y.mode,K),to(K,k),K.return=Y,K;case R:return k=du(k,Y.mode,K),k.return=Y,k;case J:return k=dr(k),ge(Y,k,K)}if(fe(k)||se(k))return k=or(k,Y.mode,K,null),k.return=Y,k;if(typeof k.then=="function")return ge(Y,gl(k),K);if(k.$$typeof===P)return ge(Y,dl(Y,k),K);_l(Y,k)}return null}function ee(Y,k,K,me){var Qe=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qe!==null?null:E(Y,k,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return K.key===Qe?I(Y,k,K,me):null;case R:return K.key===Qe?Q(Y,k,K,me):null;case J:return K=dr(K),ee(Y,k,K,me)}if(fe(K)||se(K))return Qe!==null?null:de(Y,k,K,me,null);if(typeof K.then=="function")return ee(Y,k,gl(K),me);if(K.$$typeof===P)return ee(Y,k,dl(Y,K),me);_l(Y,K)}return null}function le(Y,k,K,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(K)||null,E(k,Y,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case b:return Y=Y.get(me.key===null?K:me.key)||null,I(k,Y,me,Qe);case R:return Y=Y.get(me.key===null?K:me.key)||null,Q(k,Y,me,Qe);case J:return me=dr(me),le(Y,k,K,me,Qe)}if(fe(me)||se(me))return Y=Y.get(K)||null,de(k,Y,me,Qe,null);if(typeof me.then=="function")return le(Y,k,K,gl(me),Qe);if(me.$$typeof===P)return le(Y,k,K,dl(k,me),Qe);_l(k,me)}return null}function Ve(Y,k,K,me){for(var Qe=null,Et=null,Ye=k,ct=k=0,vt=null;Ye!==null&&ct<K.length;ct++){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var Tt=ee(Y,Ye,K[ct],me);if(Tt===null){Ye===null&&(Ye=vt);break}e&&Ye&&Tt.alternate===null&&n(Y,Ye),k=f(Tt,k,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt,Ye=vt}if(ct===K.length)return a(Y,Ye),xt&&qi(Y,ct),Qe;if(Ye===null){for(;ct<K.length;ct++)Ye=ge(Y,K[ct],me),Ye!==null&&(k=f(Ye,k,ct),Et===null?Qe=Ye:Et.sibling=Ye,Et=Ye);return xt&&qi(Y,ct),Qe}for(Ye=s(Ye);ct<K.length;ct++)vt=le(Ye,Y,ct,K[ct],me),vt!==null&&(e&&vt.alternate!==null&&Ye.delete(vt.key===null?ct:vt.key),k=f(vt,k,ct),Et===null?Qe=vt:Et.sibling=vt,Et=vt);return e&&Ye.forEach(function(ja){return n(Y,ja)}),xt&&qi(Y,ct),Qe}function et(Y,k,K,me){if(K==null)throw Error(r(151));for(var Qe=null,Et=null,Ye=k,ct=k=0,vt=null,Tt=K.next();Ye!==null&&!Tt.done;ct++,Tt=K.next()){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var ja=ee(Y,Ye,Tt.value,me);if(ja===null){Ye===null&&(Ye=vt);break}e&&Ye&&ja.alternate===null&&n(Y,Ye),k=f(ja,k,ct),Et===null?Qe=ja:Et.sibling=ja,Et=ja,Ye=vt}if(Tt.done)return a(Y,Ye),xt&&qi(Y,ct),Qe;if(Ye===null){for(;!Tt.done;ct++,Tt=K.next())Tt=ge(Y,Tt.value,me),Tt!==null&&(k=f(Tt,k,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return xt&&qi(Y,ct),Qe}for(Ye=s(Ye);!Tt.done;ct++,Tt=K.next())Tt=le(Ye,Y,ct,Tt.value,me),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?ct:Tt.key),k=f(Tt,k,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return e&&Ye.forEach(function(_S){return n(Y,_S)}),xt&&qi(Y,ct),Qe}function Vt(Y,k,K,me){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case b:e:{for(var Qe=K.key;k!==null;){if(k.key===Qe){if(Qe=K.type,Qe===C){if(k.tag===7){a(Y,k.sibling),me=c(k,K.props.children),me.return=Y,Y=me;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&dr(Qe)===k.type){a(Y,k.sibling),me=c(k,K.props),to(me,K),me.return=Y,Y=me;break e}a(Y,k);break}else n(Y,k);k=k.sibling}K.type===C?(me=or(K.props.children,Y.mode,me,K.key),me.return=Y,Y=me):(me=cl(K.type,K.key,K.props,null,Y.mode,me),to(me,K),me.return=Y,Y=me)}return g(Y);case R:e:{for(Qe=K.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(Y,k.sibling),me=c(k,K.children||[]),me.return=Y,Y=me;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}me=du(K,Y.mode,me),me.return=Y,Y=me}return g(Y);case J:return K=dr(K),Vt(Y,k,K,me)}if(fe(K))return Ve(Y,k,K,me);if(se(K)){if(Qe=se(K),typeof Qe!="function")throw Error(r(150));return K=Qe.call(K),et(Y,k,K,me)}if(typeof K.then=="function")return Vt(Y,k,gl(K),me);if(K.$$typeof===P)return Vt(Y,k,dl(Y,K),me);_l(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(Y,k.sibling),me=c(k,K),me.return=Y,Y=me):(a(Y,k),me=fu(K,Y.mode,me),me.return=Y,Y=me),g(Y)):a(Y,k)}return function(Y,k,K,me){try{eo=0;var Qe=Vt(Y,k,K,me);return Kr=null,Qe}catch(Ye){if(Ye===Zr||Ye===pl)throw Ye;var Et=Yn(29,Ye,null,Y.mode);return Et.lanes=me,Et.return=Y,Et}}}var pr=Up(!0),Lp=Up(!1),wa=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ll(e),gp(e,null,a),n}return ol(e,s,n,a),ll(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,zs(e,a)}}function Au(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function io(){if(Ru){var e=Yr;if(e!==null)throw e}}function ao(e,n,a,s){Ru=!1;var c=e.updateQueue;wa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var de=e.alternate;de!==null&&(de=de.updateQueue,E=de.lastBaseUpdate,E!==g&&(E===null?de.firstBaseUpdate=Q:E.next=Q,de.lastBaseUpdate=I))}if(f!==null){var ge=c.baseState;g=0,de=Q=I=null,E=f;do{var ee=E.lane&-536870913,le=ee!==E.lane;if(le?(_t&ee)===ee:(s&ee)===ee){ee!==0&&ee===Wr&&(Ru=!0),de!==null&&(de=de.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ve=e,et=E;ee=n;var Vt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){ge=Ve.call(Vt,ge,ee);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,ee=typeof Ve=="function"?Ve.call(Vt,ge,ee):Ve,ee==null)break e;ge=_({},ge,ee);break e;case 2:wa=!0}}ee=E.callback,ee!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},de===null?(Q=de=le,I=ge):de=de.next=le,g|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;le=E,E=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(I=ge),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Pa|=g,e.lanes=g,e.memoizedState=ge}}function Op(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Qr=U(null),vl=U(0);function zp(e,n){e=ia,_e(vl,e),_e(Qr,n),ia=e|n.baseLanes}function wu(){_e(vl,ia),_e(Qr,Qr.current)}function Cu(){ia=vl.current,ne(Qr),ne(vl)}var Zn=U(null),ci=null;function Da(e){var n=e.alternate;_e(tn,tn.current&1),_e(Zn,e),ci===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(ci=e)}function Nu(e){_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)}function Fp(e){e.tag===22?(_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)):Ua()}function Ua(){_e(tn,tn.current),_e(Zn,Zn.current)}function Kn(e){ne(Zn),ci===e&&(ci=null),ne(tn)}var tn=U(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ot=null,Ht=null,ln=null,Sl=!1,Jr=!1,mr=!1,yl=0,ro=0,$r=null,ox=0;function $t(){throw Error(r(321))}function Du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,s,c,f){return Zi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Sm:Wu,mr=!1,f=a(s,c),mr=!1,Jr&&(f=Bp(n,a,s,c)),Ip(e),f}function Ip(e){O.H=lo;var n=Ht!==null&&Ht.next!==null;if(Zi=0,ln=Ht=ot=null,Sl=!1,ro=0,$r=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&fl(e)&&(cn=!0))}function Bp(e,n,a,s){ot=e;var c=0;do{if(Jr&&($r=null),ro=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=ym,f=n(a,s)}while(Jr);return f}function lx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Lu(){var e=yl!==0;return yl=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}Zi=0,ln=Ht=ot=null,Jr=!1,ro=yl=0,$r=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ot.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=ln===null?ot.memoizedState:ln.next;if(n!==null)ln=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ln===null?ot.memoizedState=ln=e:ln=ln.next=e}return ln}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,$r===null&&($r=[]),e=Cp($r,e,n),n=ot,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Sm:Wu),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===P)return An(e)}throw Error(r(438,String(e)))}function zu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=N;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function El(e){var n=nn();return Fu(n,Ht,e)}function Fu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=g=null,I=null,Q=n,de=!1;do{var ge=Q.lane&-536870913;if(ge!==Q.lane?(_t&ge)===ge:(Zi&ge)===ge){var ee=Q.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ge===Wr&&(de=!0);else if((Zi&ee)===ee){Q=Q.next,ee===Wr&&(de=!0);continue}else ge={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(E=I=ge,g=f):I=I.next=ge,ot.lanes|=ee,Pa|=ee;ge=Q.action,mr&&a(f,ge),f=Q.hasEagerState?Q.eagerState:a(f,ge)}else ee={lane:ge,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(E=I=ee,g=f):I=I.next=ee,ot.lanes|=ge,Pa|=ge;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=E,!Wn(f,e.memoizedState)&&(cn=!0,de&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Iu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=ot,c=nn(),f=xt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Ht||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Gu(kp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,es(9,{destroy:void 0},Vp.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(Zi&127)!==0||Gp(s,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Ml(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,s){n.value=a,n.getSnapshot=s,Xp(n)&&jp(e)}function kp(e,n,a){return a(function(){Xp(n)&&jp(e)})}function Xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function jp(e){var n=sr(e,2);n!==null&&kn(n,e,2)}function Bu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),mr){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function qp(e,n,a,s){return e.baseState=a,Fu(e,Ht,typeof s=="function"?s:Ki)}function cx(e,n,a,s,c){if(Rl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(c,s),I=O.S;I!==null&&I(g,E),Yp(e,n,E)}catch(Q){Hu(e,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Yp(e,n,f)}catch(Q){Hu(e,n,Q)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Hu(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Hu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(xt){var a=Xt.formState;if(a!==null){e:{var s=ot;if(xt){if(qt){t:{for(var c=qt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=ui(c.nextSibling),s=c.data==="F!";break e}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=_m.bind(null,ot,s),s.dispatch=a,s=Bu(!1),f=qu.bind(null,ot,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=cx.bind(null,ot,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=nn();return em(n,Ht,e)}function em(e,n,a){if(n=Fu(e,n,Qp)[0],e=El(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=so(n)}catch(g){throw g===Zr?pl:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,es(9,{destroy:void 0},ux.bind(null,c,a),null)),[s,f,e]}function ux(e,n){e.action=n}function tm(e){var n=nn(),a=Ht;if(a!==null)return em(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function es(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Ml(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function nm(){return nn().memoizedState}function Tl(e,n,a,s){var c=Pn();ot.flags|=e,c.memoizedState=es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ht!==null&&s!==null&&Du(s,Ht.memoizedState.deps)?c.memoizedState=es(n,f,a,s):(ot.flags|=e,c.memoizedState=es(1|n,f,a,s))}function im(e,n){Tl(8390656,8,e,n)}function Gu(e,n){Al(2048,8,e,n)}function fx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Ml(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function am(e){var n=nn().memoizedState;return fx({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function rm(e,n){return Al(4,2,e,n)}function sm(e,n){return Al(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,om.bind(null,n,e),a)}function Vu(){}function cm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Du(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Du(n,s[1]))return s[0];if(s=e(),mr){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[s,n],s}function ku(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=f0(),ot.lanes|=e,Pa|=e,a)}function fm(e,n,a,s){return Wn(a,n)?a:Qr.current!==null?(e=ku(e,a,s),Wn(e,n)||(cn=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(_t&261930)===0?(cn=!0,e.memoizedState=a):(e=f0(),ot.lanes|=e,Pa|=e,n)}function dm(e,n,a,s,c){var f=G.p;G.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,qu(e,!1,n,a);try{var I=c(),Q=O.S;if(Q!==null&&Q(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=sx(I,s);oo(e,n,de,$n(e))}else oo(e,n,s,$n(e))}catch(ge){oo(e,n,{then:function(){},status:"rejected",reason:ge},$n())}finally{G.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function dx(){}function Xu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;dm(e,c,n,ie,a===null?dx:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},$n())}function ju(){return An(To)}function mm(){return nn().memoizedState}function gm(){return nn().memoizedState}function hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ca(a);var s=Na(n,e,a);s!==null&&(kn(s,n,a),no(s,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function px(e,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?vm(n,a):(a=cu(e,n,a,s),a!==null&&(kn(a,e,s),xm(a,n,s)))}function _m(e,n,a){var s=$n();oo(e,n,a,s)}function oo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,g))return ol(e,n,c,0),Xt===null&&sl(),!1}catch{}if(a=cu(e,n,c,s),a!==null)return kn(a,e,s),xm(a,n,s),!0}return!1}function qu(e,n,a,s){if(s={lane:2,revertLane:Tf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(r(479))}else n=cu(e,a,s,2),n!==null&&kn(n,e,2)}function Rl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function vm(e,n){Jr=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,zs(e,a)}}var lo={readContext:An,use:bl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};lo.useEffectEvent=$t;var Sm={readContext:An,use:bl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(mr){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(mr){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=px.bind(null,ot,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=_m.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Pn();return ku(a,e,n)},useTransition:function(){var e=Bu(!1);return e=dm.bind(null,ot,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ot,c=Pn();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(_t&127)!==0||Gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,s,f,e),[e]),s.flags|=2048,es(9,{destroy:void 0},Vp.bind(null,s,f,a,n),null),a},useId:function(){var e=Pn(),n=Xt.identifierPrefix;if(xt){var a=Di,s=Ni;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ox++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return Pn().memoizedState=hx.bind(null,ot)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:An,use:bl,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:El,useRef:nm,useState:function(){return El(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=nn();return fm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=El(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:ju,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=nn();return qp(a,Ht,e,n)},useMemoCache:zu,useCacheRefresh:gm};Wu.useEffectEvent=am;var ym={readContext:An,use:bl,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:Iu,useRef:nm,useState:function(){return Iu(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=nn();return Ht===null?ku(a,e,n):fm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Iu(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:ju,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=nn();return Ht!==null?qp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:gm};ym.useEffectEvent=am;function Yu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,s),n!==null&&(kn(n,e,s),no(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,s),n!==null&&(kn(n,e,s),no(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=Na(e,s,a),n!==null&&(kn(n,e,a),no(n,e,a))}};function Mm(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function bm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Em(e){rl(e)}function Tm(e){console.error(e)}function Am(e){rl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Rm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function wm(e){return e=Ca(e),e.tag=3,e}function Cm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Rm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Rm(n,a,s),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function mx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Hl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(e,s,c)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(e,s,c)),!1}throw Error(r(435,a.tag))}return Mf(e,s,c),Hl(),!1}if(xt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==mu&&(e=Error(r(422),{cause:s}),Qs(ri(e,a)))):(s!==mu&&(n=Error(r(423),{cause:s}),Qs(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=Ku(e.stateNode,s,c),Au(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),_o===null?_o=[f]:_o.push(f),en!==4&&(en=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ku(a.stateNode,s,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wm(c),Cm(c,e,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(r(461)),cn=!1;function Rn(e,n,a,s){n.child=e===null?Lp(n,null,a,s):pr(n,e.child,a,s)}function Nm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return ur(n),s=Uu(e,n,a,g,f,c),E=Lu(),e!==null&&!cn?(Ou(e,n,c),Qi(e,n,c)):(xt&&E&&hu(n),n.flags|=1,Rn(e,n,s,c),n.child)}function Dm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(e,n,f,s,c)):(e=cl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=ji(f,s),e.ref=n.ref,e.return=n,n.child=e}function Um(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ys(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,sf(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return Ju(e,n,a,s,c)}function Lm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Om(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):wu(),Fp(n);else return s=n.lanes=536870912,Om(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(hl(n,f.cachePool),zp(n,f),Ua(),n.memoizedState=null):(e!==null&&hl(n,null),wu(),Ua());return Rn(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Om(e,n,a,s,c){var f=Mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),wu(),Fp(n),e!==null&&qr(e,n,s,!0),n.childLanes=c,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pm(e,n,a){return pr(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function gx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(s.mode==="hidden")return e=Cl(n,s),n.lanes=536870912,co(null,e);if(Nu(n),(e=qt)?(e=W0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return Cl(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Pm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||qr(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(s=Xt,s!==null&&(g=Dr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,sr(e,g),kn(s,e,g),Qu;Hl(),n=Pm(e,n,a)}else e=f.treeContext,qt=ui(g.nextSibling),Tn=n,xt=!0,Ta=null,li=!1,e!==null&&yp(n,e),n=Cl(n,s),n.flags|=4096;return n}return e=ji(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,s,c){return ur(n),a=Uu(e,n,a,s,void 0,c),s=Lu(),e!==null&&!cn?(Ou(e,n,c),Qi(e,n,c)):(xt&&s&&hu(n),n.flags|=1,Rn(e,n,a,c),n.child)}function zm(e,n,a,s,c,f){return ur(n),n.updateQueue=null,a=Bp(n,s,a,c),Ip(e),s=Lu(),e!==null&&!cn?(Ou(e,n,f),Qi(e,n,f)):(xt&&s&&hu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Fm(e,n,a,s,c){if(ur(n),n.stateNode===null){var f=Vr,g=a.contextType;typeof g=="object"&&g!==null&&(f=An(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Eu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?An(g):Vr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zu.enqueueReplaceState(f,f.state,null),ao(n,s,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,I=gr(a,E);f.props=I;var Q=f.context,de=a.contextType;g=Vr,typeof de=="object"&&de!==null&&(g=An(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&bm(n,f,s,g),wa=!1;var ee=n.memoizedState;f.state=ee,ao(n,s,f,c),io(),Q=n.memoizedState,E||ee!==Q||wa?(typeof ge=="function"&&(Yu(n,a,ge,s),Q=n.memoizedState),(I=wa||Mm(n,a,I,s,ee,Q,g))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Tu(e,n),g=n.memoizedProps,de=gr(a,g),f.props=de,ge=n.pendingProps,ee=f.context,Q=a.contextType,I=Vr,typeof Q=="object"&&Q!==null&&(I=An(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||ee!==I)&&bm(n,f,s,I),wa=!1,ee=n.memoizedState,f.state=ee,ao(n,s,f,c),io();var le=n.memoizedState;g!==ge||ee!==le||wa||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof E=="function"&&(Yu(n,a,E,s),le=n.memoizedState),(de=wa||Mm(n,a,de,s,ee,le,I)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=I,s=de):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Nl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=pr(n,e.child,null,c),n.child=pr(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function Im(e,n,a,s){return lr(),n.flags|=256,Rn(e,n,a,s),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Rp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Bm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Da(n):Ua(),(e=qt)?(e=W0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Aa(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ua(),c=n.mode,E=Dl({mode:"hidden",children:E},c),s=or(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=ef(a),s.childLanes=tf(e,g,a),n.memoizedState=$u,co(null,s)):(Da(n),nf(n,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),E=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),E=or(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,pr(n,e.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=tf(e,g,a),n.memoizedState=$u,n=co(null,s));else if(Da(n),If(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Qs({value:s,source:null,stack:null}),n=af(e,n,a)}else if(cn||qr(e,n,a,!1),g=(a&e.childLanes)!==0,cn||g){if(g=Xt,g!==null&&(s=Dr(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,sr(e,s),kn(g,e,s),Qu;Ff(E)||Hl(),n=af(e,n,a)}else Ff(E)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,qt=ui(E.nextSibling),Tn=n,xt=!0,Ta=null,li=!1,e!==null&&yp(n,e),n=nf(n,s.children),n.flags|=4096);return n}return c?(Ua(),E=s.fallback,c=n.mode,I=e.child,Q=I.sibling,s=ji(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Q!==null?E=ji(Q,E):(E=or(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,co(null,s),s=n.child,E=e.child.memoizedState,E===null?E=ef(a):(c=E.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Rp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=tf(e,g,a),n.memoizedState=$u,co(e.child,s)):(Da(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function af(e,n,a){return pr(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),vu(e.return,n,a)}function rf(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Gm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,_e(tn,g),Rn(e,n,s,a),s=xt?Ks:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,a,n);else if(e.tag===19)Hm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}rf(n,!0,a,null,f,s);break;case"together":rf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function _x(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ra(n,on,e.memoizedState.cache),lr();break;case 27:case 5:He(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bm(e,n,a):(Da(n),e=Qi(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Gm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Lm(e,n,a,n.pendingProps);case 24:Ra(n,on,e.memoizedState.cache)}return Qi(e,n,a)}function Vm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return cn=!1,_x(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,xt&&(n.flags&1048576)!==0&&Sp(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=dr(n.elementType),n.type=e,typeof e=="function")uu(e)?(s=gr(e,s),n.tag=1,n=Fm(null,n,e,s,a)):(n.tag=0,n=Ju(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Nm(null,n,e,s,a);break e}else if(c===F){n.tag=14,n=Dm(null,n,e,s,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=gr(s,n.pendingProps),Fm(e,n,s,c,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(e,n),ao(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ra(n,on,s),s!==f.cache&&xu(n,[on],a,!0),io(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(e,n,s,a);break e}else if(s!==c){c=ri(Error(r(424)),n),Qs(c),n=Im(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=ui(e.firstChild),Tn=n,xt=!0,Ta=null,li=!0,a=Lp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lr(),s===c){n=Qi(e,n,a);break e}Rn(e,n,s,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=$0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,s=Wl(te.current).createElement(a),s[sn]=n,s[xn]=e,wn(s,a,e),T(s),n.stateNode=s):n.memoizedState=$0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(s=n.stateNode=K0(n.type,n.pendingProps,te.current),Tn=n,li=!0,c=qt,Ha(n.type)?(Bf=c,qt=ui(s.firstChild)):qt=c),Rn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=s=qt)&&(s=Wx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,Tn=n,qt=ui(s.firstChild),li=!1,c=!0):c=!1),c||Aa(n)),He(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Of(c,f)?s=null:g!==null&&Of(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(e,n,lx,null,null,a),To._currentValue=c),Nl(e,n),Rn(e,n,s,a),n.child;case 6:return e===null&&xt&&((e=a=qt)&&(a=Yx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,qt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return Bm(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=pr(n,null,s,a):Rn(e,n,s,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),Rn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ur(n),c=An(c),s=s(c),n.flags|=1,Rn(e,n,s,a),n.child;case 14:return Dm(e,n,n.type,n.pendingProps,a);case 15:return Um(e,n,n.type,n.pendingProps,a);case 19:return Gm(e,n,a);case 31:return gx(e,n,a);case 22:return Lm(e,n,a,n.pendingProps);case 24:return ur(n),s=An(on),e===null?(c=Mu(),c===null&&(c=Xt,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Eu(n),Ra(n,on,c)):((e.lanes&a)!==0&&(Tu(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,on,s)):(s=f.cache,Ra(n,on,s),s!==c.cache&&xu(n,[on],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(e){e.flags|=4}function of(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(m0())e.flags|=8192;else throw hr=ml,bu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ag(n))if(m0())e.flags|=8192;else throw hr=ml,bu}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,as|=n)}function uo(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function vx(e,n,a){var s=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Yi(on),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(Wt(n),km(n,f)):(Wt(n),of(n,c,null,s,a))):f?f!==e.memoizedState?(Ji(n),Wt(n),km(n,f)):(Wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ji(n),Wt(n),of(n,c,e,s,a)),null;case 27:if(dt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}e=Ae.current,jr(n)?Mp(n):(e=K0(c,s,a),n.stateNode=e,Ji(n))}return Wt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(f=Ae.current,jr(n))Mp(n);else{var g=Wl(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[sn]=n,f[xn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(wn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ji(n)}}return Wt(n),of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=te.current,jr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||B0(e.nodeValue,a)),e||Aa(n,!0)}else e=Wl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=jr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=jr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Wt(n),null);case 4:return ke(),e===null&&Cf(n.stateNode.containerInfo),Wt(n),null;case 10:return Yi(n.type),Wt(n),null;case 19:if(ne(tn),s=n.memoizedState,s===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)uo(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,uo(s,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)_p(a,e),a=a.sibling;return _e(tn,tn.current&1|2),xt&&qi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>Fl&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304)}else{if(!c)if(e=xl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xt)return Wt(n),null}else 2*M()-s.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=tn.current,_e(tn,c?a&1|2:a&1),xt&&qi(n,s.treeForkCount),e):(Wt(n),null);case 22:case 23:return Kn(n),Cu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ne(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(on),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function xx(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(on),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(tn),null;case 4:return ke(),null;case 10:return Yi(n.type),null;case 22:case 23:return Kn(n),Cu(),e!==null&&ne(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(on),null;case 25:return null;default:return null}}function Xm(e,n){switch(pu(n),n.tag){case 3:Yi(on),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ne(tn);break;case 10:Yi(n.type);break;case 22:case 23:Kn(n),Cu(),e!==null&&ne(fr);break;case 24:Yi(on)}}function fo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){zt(n,n.return,E)}}function La(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var I=a,Q=E;try{Q()}catch(de){zt(c,I,de)}}}s=s.next}while(s!==f)}}catch(de){zt(n,n.return,de)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(s){zt(e,e.return,s)}}}function qm(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function Ui(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function lf(e,n,a){try{var s=e.stateNode;Gx(s,e.type,a,n),s[xn]=n}catch(c){zt(e,e.return,c)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(s!==4&&(s===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Ll(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function Zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,s,a),n[sn]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var $i=!1,un=!1,ff=!1,Km=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Sx(e,n){if(e=e.containerInfo,Uf=ec,e=lp(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,I=-1,Q=0,de=0,ge=e,ee=null;t:for(;;){for(var le;ge!==a||c!==0&&ge.nodeType!==3||(E=g+c),ge!==f||s!==0&&ge.nodeType!==3||(I=g+s),ge.nodeType===3&&(g+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ee=ge,ge=le;for(;;){if(ge===e)break t;if(ee===a&&++Q===c&&(E=g),ee===f&&++de===s&&(I=g),(le=ge.nextSibling)!==null)break;ge=ee,ee=ge.parentNode}ge=le}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},ec=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ve=gr(a.type,c);e=s.getSnapshotBeforeUpdate(Ve,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){zt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Qm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),s&4&&fo(5,a);break;case 1:if(ta(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){zt(a,a.return,g)}else{var c=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(a,a.return,g)}}s&64&&jm(a),s&512&&ho(a,a.return);break;case 3:if(ta(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(g){zt(a,a.return,g)}}break;case 27:n===null&&s&4&&Zm(a);case 26:case 5:ta(e,a),n===null&&s&4&&Wm(a),s&512&&ho(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),s&4&&e0(e,a);break;case 13:ta(e,a),s&4&&t0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cx.bind(null,a),Zx(e,a))));break;case 22:if(s=a.memoizedState!==null||$i,!s){n=n!==null&&n.memoizedState!==null||un,c=$i;var f=un;$i=s,(un=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,un=f}break;case 30:break;default:ta(e,a)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,Bn=!1;function ea(e,n,a){for(a=a.child;a!==null;)$m(e,n,a),a=a.sibling}function $m(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var s=Kt,c=Bn;Ha(a.type)&&(Kt=a.stateNode,Bn=!1),ea(e,n,a),Mo(a.stateNode),Kt=s,Bn=c;break;case 5:un||Ui(a,n);case 6:if(s=Kt,c=Bn,Kt=null,ea(e,n,a),Kt=s,Bn=c,Kt!==null)if(Bn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Kt!==null&&(Bn?(e=Kt,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):j0(Kt,a.stateNode));break;case 4:s=Kt,c=Bn,Kt=a.stateNode.containerInfo,Bn=!0,ea(e,n,a),Kt=s,Bn=c;break;case 0:case 11:case 14:case 15:La(2,a,n),un||La(4,a,n),ea(e,n,a);break;case 1:un||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&qm(a,n,s)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ea(e,n,a),un=s;break;default:ea(e,n,a)}}function e0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){zt(n,n.return,a)}}}function t0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){zt(n,n.return,a)}}function yx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Km),n;default:throw Error(r(435,e.tag))}}function Ol(e,n){var a=yx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Nx.bind(null,e,s);s.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(Ha(E.type)){Kt=E.stateNode,Bn=!1;break e}break;case 5:Kt=E.stateNode,Bn=!1;break e;case 3:case 4:Kt=E.stateNode.containerInfo,Bn=!0;break e}E=E.return}if(Kt===null)throw Error(r(160));$m(f,g,c),Kt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)n0(n,e),n=n.sibling}var Si=null;function n0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),s&4&&(La(3,e,e.return),fo(3,e),La(5,e,e.return));break;case 1:Hn(n,e),Gn(e),s&512&&(un||a===null||Ui(a,a.return)),s&64&&$i&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Hn(n,e),Gn(e),s&512&&(un||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[tr]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,s,a),f[sn]=e,T(f),s=f;break e;case"link":var g=ng("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}f=c.createElement(s),wn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=ng("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}f=c.createElement(s),wn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,T(f),s=f}e.stateNode=s}else ig(c,e.type,e.stateNode);else e.stateNode=tg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?ig(c,e.type,e.stateNode):tg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),s&512&&(un||a===null||Ui(a,a.return)),a!==null&&s&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),s&512&&(un||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{dn(c,"")}catch(Ve){zt(e,e.return,Ve)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(ff=!0);break;case 6:if(Hn(n,e),Gn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ve){zt(e,e.return,Ve)}}break;case 3:if(Kl=null,c=Si,Si=Yl(n.containerInfo),Hn(n,e),Si=c,Gn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Ve){zt(e,e.return,Ve)}ff&&(ff=!1,i0(e));break;case 4:s=Si,Si=Yl(e.stateNode.containerInfo),Hn(n,e),Gn(e),Si=s;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=$i,de=un;if($i=Q||c,un=de||I,Hn(n,e),un=de,$i=Q,Gn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||$i||un||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=I.stateNode;var ge=I.memoizedProps.style,ee=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){zt(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ve){zt(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;c?q0(le,!0):q0(I.stateNode,!1)}catch(Ve){zt(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ol(e,a))));break;case 19:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Ym(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Ll(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(dn(g,""),a.flags&=-33);var E=cf(e);Ll(e,E,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=cf(e);uf(e,Q,I);break;default:throw Error(r(161))}}catch(de){zt(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function i0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;i0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_r(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),_r(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),fo(4,f);break;case 1:if(na(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){zt(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Op(I[c],E)}catch(Q){zt(s,s.return,Q)}}a&&g&64&&jm(f),ho(f,f.return);break;case 27:Zm(f);case 26:case 5:na(c,f,a),a&&s===null&&g&4&&Wm(f),ho(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&e0(c,f);break;case 13:na(c,f,a),a&&g&4&&t0(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),ho(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function yi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(e,n,a,s),n=n.sibling}function a0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,s),c&2048&&fo(9,n);break;case 1:yi(e,n,a,s);break;case 3:yi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(c&2048){yi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else yi(e,n,a,s);break;case 31:yi(e,n,a,s);break;case 13:yi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,s):po(e,n):f._visibility&2?yi(e,n,a,s):(f._visibility|=2,ts(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:yi(e,n,a,s),c&2048&&hf(n.alternate,n);break;default:yi(e,n,a,s)}}function ts(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,E=a,I=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,E,I,c),fo(8,g);break;case 23:break;case 22:var de=g.stateNode;g.memoizedState!==null?de._visibility&2?ts(f,g,E,I,c):po(f,g):(de._visibility|=2,ts(f,g,E,I,c)),c&&Q&2048&&df(g.alternate,g);break;case 24:ts(f,g,E,I,c),c&&Q&2048&&hf(g.alternate,g);break;default:ts(f,g,E,I,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&df(s.alternate,s);break;case 24:po(a,s),c&2048&&hf(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function ns(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)r0(e,n,a),e=e.sibling}function r0(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&mo&&e.memoizedState!==null&&oS(a,Si,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var s=Si;Si=Yl(e.stateNode.containerInfo),ns(e,n,a),Si=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=mo,mo=16777216,ns(e,n,a),mo=s):ns(e,n,a));break;default:ns(e,n,a)}}function s0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,l0(s,e)}s0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o0(e),e=e.sibling}function o0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&La(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):go(e);break;default:go(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,l0(s,e)}s0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function l0(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=e;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Jm(s),s===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var Mx={getCacheForType:function(e){var n=An(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(on).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,pt=null,_t=0,Pt=0,Qn=null,Oa=!1,is=!1,pf=!1,ia=0,en=0,Pa=0,vr=0,mf=0,Jn=0,as=0,_o=null,Vn=null,gf=!1,zl=0,c0=0,Fl=1/0,Il=null,za=null,hn=0,Fa=null,rs=null,aa=0,_f=0,vf=null,u0=null,vo=0,xf=null;function $n(){return(Nt&2)!==0&&_t!==0?_t&-_t:O.T!==null?Tf():Is()}function f0(){if(Jn===0)if((_t&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===Xt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Ia(e,_t,Jn,!1)),Nn(e,a),((Nt&2)===0||e!==Xt)&&(e===Xt&&((Nt&2)===0&&(vr|=a),en===4&&Ia(e,_t,Jn,!1)),Li(e))}function d0(e,n,a){if((Nt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=s?Ax(e,n):yf(e,n,!0),f=s;do{if(c===0){is&&!s&&Ia(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){c=yf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var E=e;c=_o;var I=E.current.memoizedState.isDehydrated;if(I&&(ss(E,g).flags|=256),g=yf(E,g,!1),g!==2){if(pf&&!I){E.errorRecoveryDisabledLanes|=f,vr|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ss(e,0),Ia(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,Jn,!Oa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=zl+300-M(),10<c)){if(Ia(s,n,Jn,!Oa),ve(s,0,!0)!==0)break e;aa=n,s.timeoutHandle=k0(h0.bind(null,s,a,Vn,Il,gf,n,Jn,vr,as,Oa,f,"Throttled",-0,0),c);break e}h0(s,a,Vn,Il,gf,n,Jn,vr,as,Oa,f,null,-0,0)}}break}while(!0);Li(e)}function h0(e,n,a,s,c,f,g,E,I,Q,de,ge,ee,le){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},r0(n,f,ge);var Ve=(f&62914560)===f?zl-M():(f&4194048)===f?c0-M():0;if(Ve=lS(ge,Ve),Ve!==null){aa=f,e.cancelPendingCommit=Ve(y0.bind(null,e,n,f,a,s,c,g,E,I,de,ge,null,ee,le)),Ia(e,f,g,!Q);return}}y0(e,n,f,a,s,c,g,E,I)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,a,s){n&=~mf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Ko(e,a,n)}function Bl(){return(Nt&6)===0?(xo(0),!1):!0}function Sf(){if(pt!==null){if(Pt===0)var e=pt.return;else e=pt,Wi=cr=null,Pu(e),Kr=null,eo=0,e=pt;for(;e!==null;)Xm(e.alternate,e),e=e.return;pt=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Sf(),Xt=e,pt=a=ji(e.current,null),_t=n,Pt=0,Qn=null,Oa=!1,is=Re(e,n),pf=!1,as=Jn=mf=vr=Pa=en=0,Vn=_o=null,gf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pe(s),f=1<<c;n|=e[c],s&=~f}return ia=n,sl(),a}function p0(e,n){ot=null,O.H=lo,n===Zr||n===pl?(n=Np(),Pt=3):n===bu?(n=Np(),Pt=4):Pt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,pt===null&&(en=1,wl(e,ri(n,e.current)))}function m0(){var e=Zn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function g0(){var e=O.H;return O.H=lo,e===null?lo:e}function _0(){var e=O.A;return O.A=Mx,e}function Hl(){en=4,Oa||(_t&4194048)!==_t&&Zn.current!==null||(is=!0),(Pa&134217727)===0&&(vr&134217727)===0||Xt===null||Ia(Xt,_t,Jn,!1)}function yf(e,n,a){var s=Nt;Nt|=2;var c=g0(),f=_0();(Xt!==e||_t!==n)&&(Il=null,ss(e,n)),n=!1;var g=en;e:do try{if(Pt!==0&&pt!==null){var E=pt,I=Qn;switch(Pt){case 8:Sf(),g=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Pt;if(Pt=0,Qn=null,os(e,E,I,Q),a&&is){g=0;break e}break;default:Q=Pt,Pt=0,Qn=null,os(e,E,I,Q)}}Tx(),g=en;break}catch(de){p0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Wi=cr=null,Nt=s,O.H=c,O.A=f,pt===null&&(Xt=null,_t=0,sl()),g}function Tx(){for(;pt!==null;)v0(pt)}function Ax(e,n){var a=Nt;Nt|=2;var s=g0(),c=_0();Xt!==e||_t!==n?(Il=null,Fl=M()+500,ss(e,n)):is=Re(e,n);e:do try{if(Pt!==0&&pt!==null){n=pt;var f=Qn;t:switch(Pt){case 1:Pt=0,Qn=null,os(e,n,f,1);break;case 2:case 9:if(wp(f)){Pt=0,Qn=null,x0(n);break}n=function(){Pt!==2&&Pt!==9||Xt!==e||(Pt=7),Li(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:wp(f)?(Pt=0,Qn=null,x0(n)):(Pt=0,Qn=null,os(e,n,f,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var E=pt;if(g?ag(g):E.stateNode.complete){Pt=0,Qn=null;var I=E.sibling;if(I!==null)pt=I;else{var Q=E.return;Q!==null?(pt=Q,Gl(Q)):pt=null}break t}}Pt=0,Qn=null,os(e,n,f,5);break;case 6:Pt=0,Qn=null,os(e,n,f,6);break;case 8:Sf(),en=6;break e;default:throw Error(r(462))}}Rx();break}catch(de){p0(e,de)}while(!0);return Wi=cr=null,O.H=s,O.A=c,Nt=a,pt!==null?0:(Xt=null,_t=0,sl(),en)}function Rx(){for(;pt!==null&&!We();)v0(pt)}function v0(e){var n=Vm(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?Gl(e):pt=n}function x0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Pu(n);default:Xm(a,n),n=pt=_p(n,ia),n=Vm(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?Gl(e):pt=n}function os(e,n,a,s){Wi=cr=null,Pu(n),Kr=null,eo=0;var c=n.return;try{if(mx(e,c,n,a,_t)){en=1,wl(e,ri(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;en=1,wl(e,ri(a,e.current)),pt=null;return}n.flags&32768?(xt||s===1?e=!0:is||(_t&536870912)!==0?e=!1:(Oa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),S0(n,e)):Gl(n)}function Gl(e){var n=e;do{if((n.flags&32768)!==0){S0(n,Oa);return}e=n.return;var a=vx(n.alternate,n,ia);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);en===0&&(en=5)}function S0(e,n){do{var a=xx(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);en=6,pt=null}function y0(e,n,a,s,c,f,g,E,I){e.cancelPendingCommit=null;do Vl();while(hn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lu,gi(e,a,f,g,E,I),e===Xt&&(pt=Xt=null,_t=0),rs=n,Fa=e,aa=a,_f=f,vf=c,u0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(ce,function(){return A0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=G.p,G.p=2,g=Nt,Nt|=4;try{Sx(e,n,a)}finally{Nt=g,G.p=c,O.T=s}}hn=1,M0(),b0(),E0()}}function M0(){if(hn===1){hn=0;var e=Fa,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=G.p;G.p=2;var c=Nt;Nt|=4;try{n0(n,e);var f=Lf,g=lp(e.containerInfo),E=f.focusedElem,I=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&op(E.ownerDocument.documentElement,E)){if(I!==null&&iu(E)){var Q=I.start,de=I.end;if(de===void 0&&(de=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(de,E.value.length);else{var ge=E.ownerDocument||document,ee=ge&&ge.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),Ve=E.textContent.length,et=Math.min(I.start,Ve),Vt=I.end===void 0?et:Math.min(I.end,Ve);!le.extend&&et>Vt&&(g=Vt,Vt=et,et=g);var Y=sp(E,et),k=sp(E,Vt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var K=ge.createRange();K.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Vt?(le.addRange(K),le.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),le.addRange(K))}}}}for(ge=[],le=E;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ge.length;E++){var me=ge[E];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}ec=!!Uf,Lf=Uf=null}finally{Nt=c,G.p=s,O.T=a}}e.current=n,hn=2}}function b0(){if(hn===2){hn=0;var e=Fa,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=G.p;G.p=2;var c=Nt;Nt|=4;try{Qm(e,n.alternate,n)}finally{Nt=c,G.p=s,O.T=a}}hn=3}}function E0(){if(hn===4||hn===3){hn=0,D();var e=Fa,n=rs,a=aa,s=u0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,rs=Fa=null,T0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(za=null),Ur(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=G.p,G.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,G.p=c}}(aa&3)!==0&&Vl(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===xf?vo++:(vo=0,xf=e):vo=0,xo(0)}}function T0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Vl(){return M0(),b0(),E0(),A0()}function A0(){if(hn!==5)return!1;var e=Fa,n=_f;_f=0;var a=Ur(aa),s=O.T,c=G.p;try{G.p=32>a?32:a,O.T=null,a=vf,vf=null;var f=Fa,g=aa;if(hn=0,rs=Fa=null,aa=0,(Nt&6)!==0)throw Error(r(331));var E=Nt;if(Nt|=4,o0(f.current),a0(f,f.current,g,a),Nt=E,xo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{G.p=c,O.T=s,T0(e,n)}}function R0(e,n,a){n=ri(a,n),n=Ku(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Nn(e,2),Li(e))}function zt(e,n,a){if(e.tag===3)R0(e,e,a);else for(;n!==null;){if(n.tag===3){R0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){e=ri(a,e),a=wm(2),s=Na(n,a,2),s!==null&&(Cm(a,s,n,e),Nn(s,2),Li(s));break}}n=n.return}}function Mf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new bx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(pf=!0,c.add(a),e=wx.bind(null,e,n,a),n.then(e,e))}function wx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(_t&a)===a&&(en===4||en===3&&(_t&62914560)===_t&&300>M()-zl?(Nt&2)===0&&ss(e,0):mf|=a,as===_t&&(as=0)),Li(e)}function w0(e,n){n===0&&(n=Lt()),e=sr(e,n),e!==null&&(Nn(e,n),Li(e))}function Cx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(e,a)}function Nx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),w0(e,a)}function Dx(e,n){return yt(e,n)}var kl=null,ls=null,bf=!1,Xl=!1,Ef=!1,Ba=0;function Li(e){e!==ls&&e.next===null&&(ls===null?kl=ls=e:ls=ls.next=e),Xl=!0,bf||(bf=!0,Lx())}function xo(e,n){if(!Ef&&Xl){Ef=!0;do for(var a=!1,s=kl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,U0(s,f))}else f=_t,f=ve(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,U0(s,f));s=s.next}while(a);Ef=!1}}function Ux(){C0()}function C0(){Xl=bf=!1;var e=0;Ba!==0&&kx()&&(e=Ba);for(var n=M(),a=null,s=kl;s!==null;){var c=s.next,f=N0(s,n);f===0?(s.next=null,a===null?kl=c:a.next=c,c===null&&(ls=a)):(a=s,(e!==0||(f&3)!==0)&&(Xl=!0)),s=c}hn!==0&&hn!==5||xo(e),Ba!==0&&(Ba=0)}function N0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Pe(f),E=1<<g,I=c[g];I===-1?((E&a)===0||(E&s)!==0)&&(c[g]=nt(E,n)):I<=n&&(e.expiredLanes|=E),f&=~E}if(n=Xt,a=_t,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Dt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Dt(s),Ur(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=we;break;default:a=ce}return s=D0.bind(null,e),a=yt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Dt(s),e.callbackPriority=2,e.callbackNode=null,2}function D0(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var s=_t;return s=ve(e,e===Xt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(d0(e,s,n),N0(e,M()),e.callbackNode!=null&&e.callbackNode===a?D0.bind(null,e):null)}function U0(e,n){if(Vl())return null;d0(e,n,!0)}function Lx(){jx(function(){(Nt&6)!==0?yt(he,Ux):C0()})}function Tf(){if(Ba===0){var e=Wr;e===0&&(e=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ba=e}return Ba}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function O0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ox(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=L0((c[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?L0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new nl("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var I=g?O0(c,g):new FormData(c);Xu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=g?O0(c,g):new FormData(c),Xu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Px=Rf.toLowerCase(),zx=Rf[0].toUpperCase()+Rf.slice(1);xi(Px,"on"+zx)}xi(fp,"onAnimationEnd"),xi(dp,"onAnimationIteration"),xi(hp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Jv,"onTransitionRun"),xi($v,"onTransitionStart"),xi(ex,"onTransitionCancel"),xi(pp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function P0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],I=E.instance,Q=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(E=s[g],I=E.instance,Q=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=I}}}}function mt(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=e+"__bubble";a.has(s)||(z0(n,e,2,!1),a.add(s))}function wf(e,n,a){var s=0;n&&(s|=4),z0(a,e,s,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[jl]){e[jl]=!0,W.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,wf("selectionchange",!1,n))}}function z0(e,n,a,s){switch(fg(n)){case 2:var c=fS;break;case 8:c=dS;break;default:c=Xf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=Sa(E),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue e}E=E.parentNode}}s=s.return}Gh(function(){var Q=f,de=qc(a),ge=[];e:{var ee=mp.get(e);if(ee!==void 0){var le=nl,Ve=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":le=Nv;break;case"focusin":Ve="focus",le=Jc;break;case"focusout":Ve="blur",le=Jc;break;case"beforeblur":case"afterblur":le=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Lv;break;case fp:case dp:case hp:le=yv;break;case pp:le=Pv;break;case"scroll":case"scrollend":le=gv;break;case"wheel":le=Fv;break;case"copy":case"cut":case"paste":le=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=qh;break;case"toggle":case"beforetoggle":le=Bv}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),Y=et?ee!==null?ee+"Capture":null:ee;et=[];for(var k=Q,K;k!==null;){var me=k;if(K=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||K===null||Y===null||(me=Gs(k,Y),me!=null&&et.push(yo(k,me,K))),Vt)break;k=k.return}0<et.length&&(ee=new le(ee,Ve,null,a,de),ge.push({event:ee,listeners:et}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ee&&a!==jc&&(Ve=a.relatedTarget||a.fromElement)&&(Sa(Ve)||Ve[_i]))break e;if((le||ee)&&(ee=de.window===de?de:(ee=de.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=Q,Ve=Ve?Sa(Ve):null,Ve!==null&&(Vt=u(Ve),et=Ve.tag,Ve!==Vt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=Q),le!==Ve)){if(et=Xh,me="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(et=qh,me="onPointerLeave",Y="onPointerEnter",k="pointer"),Vt=le==null?ee:nr(le),K=Ve==null?ee:nr(Ve),ee=new et(me,k+"leave",le,a,de),ee.target=Vt,ee.relatedTarget=K,me=null,Sa(de)===Q&&(et=new et(Y,k+"enter",Ve,a,de),et.target=K,et.relatedTarget=Vt,me=et),Vt=me,le&&Ve)t:{for(et=Ix,Y=le,k=Ve,K=0,me=Y;me;me=et(me))K++;me=0;for(var Qe=k;Qe;Qe=et(Qe))me++;for(;0<K-me;)Y=et(Y),K--;for(;0<me-K;)k=et(k),me--;for(;K--;){if(Y===k||k!==null&&Y===k.alternate){et=Y;break t}Y=et(Y),k=et(k)}et=null}else et=null;le!==null&&F0(ge,ee,le,et,!1),Ve!==null&&Vt!==null&&F0(ge,Vt,Ve,et,!0)}}e:{if(ee=Q?nr(Q):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var Et=ep;else if(Jh(ee))if(tp)Et=Zv;else{Et=Wv;var Ye=qv}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Q&&vi(Q.elementType)&&(Et=ep):Et=Yv;if(Et&&(Et=Et(e,Q))){$h(ge,Et,a,de);break e}Ye&&Ye(e,ee,Q),e==="focusout"&&Q&&ee.type==="number"&&Q.memoizedProps.value!=null&&yn(ee,"number",ee.value)}switch(Ye=Q?nr(Q):window,e){case"focusin":(Jh(Ye)||Ye.contentEditable==="true")&&(Br=Ye,au=Q,Zs=null);break;case"focusout":Zs=au=Br=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,cp(ge,a,de);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":cp(ge,a,de)}var ct;if(eu)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ir?Kh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Wh&&a.locale!=="ko"&&(Ir||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ir&&(ct=Vh()):(ba=de,Zc="value"in ba?ba.value:ba.textContent,Ir=!0)),Ye=ql(Q,vt),0<Ye.length&&(vt=new jh(vt,e,null,a,de),ge.push({event:vt,listeners:Ye}),ct?vt.data=ct:(ct=Qh(a),ct!==null&&(vt.data=ct)))),(ct=Gv?Vv(e,a):kv(e,a))&&(vt=ql(Q,"onBeforeInput"),0<vt.length&&(Ye=new jh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ye,listeners:vt}),Ye.data=ct)),Ox(ge,e,Q,a,de)}P0(ge,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ql(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gs(e,a),c!=null&&s.unshift(yo(e,c,f)),c=Gs(e,n),c!=null&&s.push(yo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Ix(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,I=E.alternate,Q=E.stateNode;if(E=E.tag,I!==null&&I===s)break;E!==5&&E!==26&&E!==27||Q===null||(I=Q,c?(Q=Gs(a,f),Q!=null&&g.unshift(yo(a,Q,I))):c||(Q=Gs(a,f),Q!=null&&g.push(yo(a,Q,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Bx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Hx,"")}function B0(e,n){return n=I0(n),I0(e)===n}function Gt(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||dn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&dn(e,""+s);break;case"className":Je(e,"class",s);break;case"tabIndex":Je(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,s);break;case"style":Pr(e,s,f);break;case"data":if(n!=="object"){Je(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ki);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":mt("beforetoggle",e),mt("toggle",e),je(e,"popover",s);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pv.get(a)||a,je(e,a,s))}}function Df(e,n,a,s,c,f){switch(a){case"style":Pr(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?dn(e,s):(typeof s=="number"||typeof s=="bigint")&&dn(e,""+s);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):je(e,a,s)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,g,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),s&&Gt(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var E=f=g=c=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var de=a[s];if(de!=null)switch(s){case"name":c=de;break;case"type":g=de;break;case"checked":I=de;break;case"defaultChecked":Q=de;break;case"value":f=de;break;case"defaultValue":E=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(e,n,s,de,a,null)}}Vi(e,f,E,I,Q,g,c,!1);return;case"select":mt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Gt(e,n,c,E,a,null)}n=f,a=g,e.multiple=!!s,n!=null?ii(e,!!s,n,!1):a!=null&&ii(e,!!s,a,!0);return;case"textarea":mt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Gt(e,n,g,E,a,null)}Mn(e,s,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Gt(e,n,I,s,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(s=0;s<So.length;s++)mt(So[s],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,Q,s,a,null)}return;default:if(vi(n)){for(de in a)a.hasOwnProperty(de)&&(s=a[de],s!==void 0&&Df(e,n,de,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Gt(e,n,E,s,a,null))}function Gx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,I=null,Q=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=ge;default:s.hasOwnProperty(le)||Gt(e,n,le,null,s,ge)}}for(var ee in s){var le=s[ee];if(ge=a[ee],s.hasOwnProperty(ee)&&(le!=null||ge!=null))switch(ee){case"type":f=le;break;case"name":c=le;break;case"checked":Q=le;break;case"defaultChecked":de=le;break;case"value":g=le;break;case"defaultValue":E=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ge&&Gt(e,n,ee,le,s,ge)}}Sn(e,g,E,I,Q,de,f,c);return;case"select":le=g=E=ee=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:s.hasOwnProperty(f)||Gt(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ee=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==I&&Gt(e,n,c,f,s,I)}n=E,a=g,s=le,ee!=null?ii(e,!!a,ee,!1):!!s!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Gt(e,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ee=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(e,n,g,c,s,f)}Ot(e,ee,le);return;case"option":for(var Ve in a)ee=a[Ve],a.hasOwnProperty(Ve)&&ee!=null&&!s.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Gt(e,n,Ve,null,s,ee));for(I in s)ee=s[I],le=a[I],s.hasOwnProperty(I)&&ee!==le&&(ee!=null||le!=null)&&(I==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Gt(e,n,I,ee,s,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ee=a[et],a.hasOwnProperty(et)&&ee!=null&&!s.hasOwnProperty(et)&&Gt(e,n,et,null,s,ee);for(Q in s)if(ee=s[Q],le=a[Q],s.hasOwnProperty(Q)&&ee!==le&&(ee!=null||le!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:Gt(e,n,Q,ee,s,le)}return;default:if(vi(n)){for(var Vt in a)ee=a[Vt],a.hasOwnProperty(Vt)&&ee!==void 0&&!s.hasOwnProperty(Vt)&&Df(e,n,Vt,void 0,s,ee);for(de in s)ee=s[de],le=a[de],!s.hasOwnProperty(de)||ee===le||ee===void 0&&le===void 0||Df(e,n,de,ee,s,le);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!s.hasOwnProperty(Y)&&Gt(e,n,Y,null,s,ee);for(ge in s)ee=s[ge],le=a[ge],!s.hasOwnProperty(ge)||ee===le||ee==null&&le==null||Gt(e,n,ge,ee,s,le)}function H0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&H0(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>E)break;var de=I.transferSize,ge=I.initiatorType;de&&H0(ge)&&(I=I.responseEnd,g+=de*(I<E?1:(E-Q)/(I-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Lf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function kx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(e){return X0.resolve(null).then(e).catch(qx)}:k0;function qx(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function j0(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ds(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[tr]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(e.ownerDocument.body);a=c}while(a);ds(n)}function q0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[tr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Yx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bf=null;function Y0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function K0(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hs(e)}var fi=new Map,Q0=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=G.d;G.d={f:Kx,r:Qx,D:Jx,C:$x,L:eS,m:tS,X:iS,S:nS,M:aS};function Kx(){var e=ra.f(),n=Bl();return e||n}function Qx(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):ra.r(e)}var cs=typeof document>"u"?null:document;function J0(e,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Q0.has(c)||(Q0.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),wn(n,"link",e),T(n),s.head.appendChild(n)))}}function Jx(e){ra.D(e),J0("dns-prefetch",e,null)}function $x(e,n){ra.C(e,n),J0("preconnect",e,n)}function eS(e,n,a){ra.L(e,n,a);var s=cs;if(s&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=us(e);break;case"script":f=fs(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(bo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),wn(n,"link",e),T(n),s.head.appendChild(n)))}}function tS(e,n){ra.m(e,n);var a=cs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(s)+'"][href="'+it(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),wn(s,"link",e),T(s),a.head.appendChild(s)}}}function nS(e,n,a){ra.S(e,n,a);var s=cs;if(s&&e){var c=Ma(s).hoistableStyles,f=us(e);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(bo(f)))E.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Hf(e,a);var I=g=s.createElement("link");T(I),wn(I,"link",e),I._p=new Promise(function(Q,de){I.onload=Q,I.onerror=de}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Zl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function iS(e,n){ra.X(e,n);var a=cs;if(a&&e){var s=Ma(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function aS(e,n){ra.M(e,n);var a=cs;if(a&&e){var s=Ma(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function $0(e,n,a,s){var c=(c=te.current)?Yl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Ma(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=Ma(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(bo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||rS(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=Ma(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+it(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function eg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function rS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),wn(n,"link",a),T(n),e.head.appendChild(n))}function fs(e){return'[src="'+it(e)+'"]'}function Eo(e){return"script[async]"+e}function tg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(s)return n.instance=s,T(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),T(s),wn(s,"style",c),Zl(s,a.precedence,e),n.instance=s;case"stylesheet":c=us(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=eg(a),(c=fi.get(c))&&Hf(s,c),f=(e.ownerDocument||e).createElement("link"),T(f);var g=f;return g._p=new Promise(function(E,I){g.onload=E,g.onerror=I}),wn(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=fs(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,T(c),c):(s=a,(c=fi.get(f))&&(s=_({},a),Gf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),T(c),wn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,e));return n.instance}function Zl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function ng(e,n,a){if(Kl===null){var s=new Map,c=Kl=new Map;c.set(a,s)}else c=Kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[tr]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=eg(s),(c=fi.get(c))&&Hf(s,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(E,I){g.onload=E,g.onerror=I}),wn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function lS(e,n){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*Vx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function $l(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(cS,e),Jl=null,Ql.call(e))}function cS(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var s=a.get(null);else{a=new Map,Jl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Ql.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function uS(e,n,a,s,c,f,g,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function rg(e,n,a,s,c,f,g,E,I,Q,de,ge){return e=new uS(e,n,a,g,I,Q,de,ge,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Eu(f),e}function sg(e){return e?(e=Vr,e):Vr}function og(e,n,a,s,c,f){c=sg(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Na(e,s,n),a!==null&&(kn(a,e,n),no(a,e,n))}function lg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){lg(e,n),(e=e.alternate)&&lg(e,n)}function cg(e){if(e.tag===13||e.tag===31){var n=sr(e,67108864);n!==null&&kn(n,e,67108864),kf(e,67108864)}}function ug(e){if(e.tag===13||e.tag===31){var n=$n();n=Fs(n);var a=sr(e,n);a!==null&&kn(a,e,n),kf(e,n)}}var ec=!0;function fS(e,n,a,s){var c=O.T;O.T=null;var f=G.p;try{G.p=2,Xf(e,n,a,s)}finally{G.p=f,O.T=c}}function dS(e,n,a,s){var c=O.T;O.T=null;var f=G.p;try{G.p=8,Xf(e,n,a,s)}finally{G.p=f,O.T=c}}function Xf(e,n,a,s){if(ec){var c=jf(s);if(c===null)Nf(e,n,s,tc,a),dg(e,s);else if(pS(c,e,n,a,s))s.stopPropagation();else if(dg(e,s),n&4&&-1<hS.indexOf(e)){for(;c!==null;){var f=ya(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var I=1<<31-Pe(g);E.entanglements[1]|=I,g&=~I}Li(f),(Nt&6)===0&&(Fl=M()+500,xo(0))}}break;case 31:case 13:E=sr(f,2),E!==null&&kn(E,f,2),Bl(),kf(f,2)}if(f=jf(s),f===null&&Nf(e,n,s,tc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Nf(e,n,s,null,a)}}function jf(e){return e=qc(e),qf(e)}var tc=null;function qf(e){if(tc=null,e=Sa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case he:return 2;case xe:return 8;case ce:case Ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ga=null,Va=null,ka=null,Ao=new Map,Ro=new Map,Xa=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function wo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ya(n),n!==null&&cg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function pS(e,n,a,s,c){switch(n){case"focusin":return Ga=wo(Ga,e,n,a,s,c),!0;case"dragenter":return Va=wo(Va,e,n,a,s,c),!0;case"mouseover":return ka=wo(ka,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,wo(Ao.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,wo(Ro.get(f)||null,e,n,a,s,c)),!0}return!1}function hg(e){var n=Sa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){ug(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);jc=s,a.target.dispatchEvent(s),jc=null}else return n=ya(a),n!==null&&cg(n),e.blockedOn=a,!1;n.shift()}return!0}function pg(e,n,a){nc(e)&&a.delete(n)}function mS(){Wf=!1,Ga!==null&&nc(Ga)&&(Ga=null),Va!==null&&nc(Va)&&(Va=null),ka!==null&&nc(ka)&&(ka=null),Ao.forEach(pg),Ro.forEach(pg)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mS)))}var ac=null;function mg(e){ac!==e&&(ac=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=ya(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ds(e){function n(I){return ic(I,e)}Ga!==null&&ic(Ga,e),Va!==null&&ic(Va,e),ka!==null&&ic(ka,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[xn]||null;if(typeof f=="function")g||mg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[xn]||null)E=g.formAction;else if(qf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),mg(a)}}}function gg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(e){this._internalRoot=e}rc.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();og(a,s,e,n,null,null)},rc.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;og(e.current,2,null,e,null,null),Bl(),n[_i]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Is();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&hg(e)}};var _g=t.version;if(_g!=="19.2.4")throw Error(r(527,_g,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var gS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{be=sc.inject(gS),Ee=sc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Em,f=Tm,g=Am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=rg(e,1,!1,null,null,a,s,null,c,f,g,gg),e[_i]=n.current,Cf(e),new Yf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Em,g=Tm,E=Am,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=rg(e,1,!0,n,a??null,s,c,I,f,g,E,gg),n.context=sg(null),a=n.current,s=$n(),s=Fs(s),c=Ca(s),c.callback=null,Na(a,c,s),a=s,n.current.lanes=a,Nn(n,a),Li(n),e[_i]=n.current,Cf(e),new rc(n)},No.version="19.2.4",No}var Rg;function AS(){if(Rg)return Qf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=TS(),Qf.exports}var RS=AS();const R_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();const wS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const CS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase());const wg=o=>{const t=CS(o);return t.charAt(0).toUpperCase()+t.slice(1)};var NS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const DS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const US=pn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},m)=>pn.createElement("svg",{ref:m,...NS,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:R_("lucide",l),...!u&&!DS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>pn.createElement(p,v)),...Array.isArray(u)?u:[u]]));const Bt=(o,t)=>{const i=pn.forwardRef(({className:r,...l},u)=>pn.createElement(US,{ref:u,iconNode:t,className:R_(`lucide-${wS(wg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=wg(o),i};const LS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ud=Bt("arrow-right",LS);const OS=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Cg=Bt("bot",OS);const PS=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],zS=Bt("brain-circuit",PS);const FS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],IS=Bt("brain",FS);const BS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],HS=Bt("chart-column",BS);const GS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ho=Bt("chevron-down",GS);const VS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kS=Bt("chevron-left",VS);const XS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jS=Bt("chevron-right",XS);const qS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],w_=Bt("chevron-up",qS);const WS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],C_=Bt("code-xml",WS);const YS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ZS=Bt("cpu",YS);const KS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],QS=Bt("database",KS);const JS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ng=Bt("external-link",JS);const $S=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],ey=Bt("flask-conical",$S);const ty=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ny=Bt("github",ty);const iy=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],ay=Bt("hammer",iy);const ry=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],sy=Bt("instagram",ry);const oy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ly=Bt("lightbulb",oy);const cy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],uy=Bt("linkedin",cy);const fy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],dy=Bt("menu",fy);const hy=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],py=Bt("rocket",hy);const my=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],gy=Bt("share-2",my);const _y=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],N_=Bt("sparkles",_y);const vy=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],xy=Bt("square-terminal",vy);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],yy=Bt("target",Sy);const My=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],by=Bt("type",My);const Ey=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ty=Bt("user",Ey);const Ay=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ry=Bt("x",Ay);const wy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Cy=Bt("zap",wy),zc="/Compile_Journey/assets/logo-CDwa-24X.png",Ny=()=>{const[o,t]=pn.useState(!1),[i,r]=pn.useState(!1),l=()=>t(!o);return A.jsxs("header",{id:"header",className:"glass-effect fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-xl",children:[A.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-50"}),A.jsxs("a",{href:"#home",className:"bg-gradient-to-r from-slate-900/90 via-black/80 to-slate-900/90 text-center py-2.5 text-[10px] sm:text-xs font-medium text-sky-200/90 flex items-center justify-center gap-3 cursor-pointer interactive-element tracking-normal sm:tracking-widest uppercase border-b border-white/5 px-4 whitespace-normal leading-tight relative",children:[A.jsx("img",{src:zc,alt:"icon",className:"w-5 h-5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] object-cover shrink-0"}),A.jsx("span",{className:"min-w-0 break-words",children:"Where Curiosity Compiles Creativity"})]}),A.jsxs("div",{className:"container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative",children:[A.jsxs("a",{href:"#home",className:"flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold tracking-wider interactive-element group min-w-0",children:[A.jsxs("div",{className:"relative shrink-0",children:[A.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"}),A.jsx("img",{src:zc,alt:"logo",className:"relative w-8 h-8 rounded-full border border-white/10 object-cover"})]}),A.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 truncate",children:["Compile",A.jsx("span",{className:"text-sky-400",children:" "}),"JOURNEY"]})]}),A.jsxs("nav",{className:"hidden lg:flex items-center gap-1",children:[A.jsx("a",{href:"#home",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Home"}),A.jsx("a",{href:"#about",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"About"}),A.jsx("a",{href:"#journey",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Journey"}),A.jsxs("div",{className:"relative group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[A.jsxs("button",{className:"nav-link flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:["Projects ",A.jsx(Ho,{className:`w-3.5 h-3.5 transition-transform duration-300 ${i?"rotate-180":""}`})]}),A.jsx("div",{className:`dropdown-menu absolute top-full right-0 w-64 pt-4 transition-all duration-300 transform origin-top-right ${i?"opacity-100 visible scale-100":"opacity-0 invisible scale-95"}`,children:A.jsxs("div",{className:"glass-effect rounded-2xl overflow-hidden border border-white/10 p-2 flex flex-col gap-1 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl",children:[A.jsxs("a",{href:"#avira",className:"group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all",children:[A.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors",children:A.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-400 group-hover:animate-pulse"})}),A.jsxs("div",{children:[A.jsx("div",{className:"font-semibold",children:"Avira"}),A.jsx("div",{className:"text-[10px] text-slate-500",children:"AI Assistant"})]})]}),A.jsxs("a",{href:"#curiodata",className:"group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all",children:[A.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors",children:A.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse"})}),A.jsxs("div",{children:[A.jsx("div",{className:"font-semibold",children:"CurioData"}),A.jsx("div",{className:"text-[10px] text-slate-500",children:"Data Analytics"})]})]})]})})]}),A.jsx("a",{href:"#portfolio",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Portfolio"}),A.jsx("div",{className:"w-px h-5 bg-white/10 mx-2"}),A.jsxs("a",{href:"#contact",className:"relative ml-2 overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 interactive-element group",children:[A.jsx("span",{className:"relative z-10",children:"Get in Touch"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]}),A.jsx("button",{onClick:l,className:"lg:hidden interactive-element text-white hover:text-sky-400 transition-colors relative z-50",children:o?A.jsx(Ry,{className:"w-6 h-6"}):A.jsx(dy,{className:"w-6 h-6"})})]}),A.jsx("div",{id:"mobile-menu",className:`lg:hidden fixed inset-0 bg-[#020010] transition-all duration-300 z-40 ${o?"opacity-100 visible":"opacity-0 invisible pointer-events-none"}`,children:A.jsxs("div",{className:"flex flex-col items-center justify-start h-full pt-32 pb-10 space-y-6 overflow-y-auto",children:[A.jsx("a",{href:"#home",onClick:l,className:"text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element",children:"Home"}),A.jsx("a",{href:"#about",onClick:l,className:"text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element",children:"About"}),A.jsx("a",{href:"#journey",onClick:l,className:"text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element",children:"Journey"}),A.jsxs("div",{className:"flex flex-col items-center w-full",children:[A.jsxs("button",{onClick:()=>r(!i),className:"text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element flex items-center gap-2",children:["Projects ",A.jsx(Ho,{className:`w-5 h-5 transition-transform duration-300 ${i?"rotate-180":""}`})]}),A.jsxs("div",{className:`overflow-hidden transition-all duration-300 flex flex-col items-center gap-4 ${i?"max-h-40 opacity-100 mt-4":"max-h-0 opacity-0"}`,children:[A.jsx("a",{href:"#avira",onClick:l,className:"text-lg text-slate-300 hover:text-white transition-colors",children:"Avira AI"}),A.jsx("a",{href:"#curiodata",onClick:l,className:"text-lg text-slate-300 hover:text-white transition-colors",children:"CurioData"})]})]}),A.jsx("a",{href:"#portfolio",onClick:l,className:"text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element",children:"Portfolio"}),A.jsx("a",{href:"#contact",onClick:l,className:"mt-8 px-8 py-3 bg-sky-500 text-white rounded-full font-bold text-lg hover:bg-sky-400 transition-colors interactive-element shadow-lg shadow-sky-500/20",children:"Contact Me"})]})})]})},Dy="/Compile_Journey/assets/founder-riu7yR5i.png",Uy=()=>{const[o,t]=pn.useState(0),i=4,r=()=>t(d=>d+1),l=()=>t(d=>d-1);pn.useEffect(()=>{const d=setInterval(r,5e3);return()=>clearInterval(d)},[]);const u=(o%i+i)%i;return A.jsxs("section",{id:"home",className:"relative pt-32 lg:pt-24 flex items-center min-h-screen overflow-hidden perspective-container",children:[A.jsxs("div",{className:"w-full h-full absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] preserve-3d scale-[0.85] md:scale-100",style:{transform:`translateZ(-50vw) rotateY(${-o*90}deg)`},children:[A.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(0deg) translateZ(50vw)"},children:A.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[A.jsx("img",{src:zc,alt:"logo",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-sky-500/20 object-cover"}),A.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold hero-gradient-text mb-4 leading-tight",children:"Where Curiosity Compiles Creativity"}),A.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto",children:"— exploring AI, LLMs, and Data Science to build innovative tools and solutions."})]})}),A.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(90deg) translateZ(50vw)"},children:A.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[A.jsx("img",{src:zc,alt:"Avira",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-purple-500/20 object-cover"}),A.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-4 leading-tight",children:"Meet Avira — Your AI Assistant"}),A.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto",children:"Avira helps you explore AI, generate smart solutions, and experiment with prompt engineering seamlessly."}),A.jsxs("div",{className:"flex justify-center space-x-6 mb-6",children:[A.jsx(zS,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"}),A.jsx(ly,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"}),A.jsx(by,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"})]}),A.jsxs("a",{href:"https://avira-64d03.web.app/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300 group",children:[A.jsx("span",{children:"Try Avira Now"}),A.jsx(Ud,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})}),A.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(180deg) translateZ(50vw)"},children:A.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[A.jsx("img",{src:Dy,alt:"Abikrishna",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto border-2 border-sky-500 object-cover"}),A.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4 leading-tight",children:"Hi, I’m Abikrishna"}),A.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto",children:"I am a software developer and AI enthusiast, creating innovative tools and projects in LLMs, FastAPI, and Data Science."}),A.jsxs("div",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-lg text-slate-200",children:[A.jsx("span",{children:"🐍 Python"}),A.jsx("span",{children:"⚙️ FastAPI"}),A.jsx("span",{children:"🤖 AI/ML"}),A.jsx("span",{children:"📊 Data Science"})]})]})}),A.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(270deg) translateZ(50vw)"},children:A.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[A.jsx("div",{className:"inline-flex p-4 rounded-full bg-emerald-500/10 mb-4 border border-emerald-500/20",children:A.jsx(yy,{className:"w-10 h-10 sm:w-12 sm:h-12 text-emerald-400"})}),A.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-6 leading-tight",children:"Our Mission & Vision"}),A.jsxs("div",{className:"text-sm sm:text-lg md:text-xl text-slate-300 space-y-4 px-4",children:[A.jsxs("p",{children:[A.jsx("span",{className:"font-semibold text-white",children:"Mission:"})," To simplify AI learning and build intelligent solutions."]}),A.jsxs("p",{children:[A.jsx("span",{className:"font-semibold text-white",children:"Vision:"})," To create a community where curiosity compiles creativity."]})]})]})})]}),A.jsxs("div",{className:"carousel-controls absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-full border border-white/10",children:[A.jsx("button",{className:"carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all",onClick:l,children:A.jsx(kS,{className:"w-6 h-6"})}),A.jsx("div",{className:"carousel-dots flex gap-2",children:[...Array(i)].map((d,h)=>A.jsx("div",{className:`carousel-dot w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${h===u?"bg-white scale-125":"bg-white/30 hover:bg-white/50"}`,onClick:()=>t(o+(h-u))},h))}),A.jsx("button",{className:"carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all",onClick:r,children:A.jsx(jS,{className:"w-6 h-6"})})]})]})},Ly="/Compile_Journey/assets/founder_about-Dn073U3z.jpg",Oy=()=>{const[o,t]=pn.useState(!1),i=[{icon:A.jsx(C_,{className:"w-5 h-5"}),label:"Full Stack Dev"},{icon:A.jsx(IS,{className:"w-5 h-5"}),label:"AI Enthusiast"},{icon:A.jsx(py,{className:"w-5 h-5"}),label:"Problem Solver"}];return A.jsxs("section",{id:"about",className:"relative w-full py-16 overflow-hidden",children:[A.jsx("div",{className:"absolute inset-0 bg-slate-900/20 backdrop-blur-sm -z-10"}),A.jsx("div",{className:"absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent blur-3xl pointer-events-none"}),A.jsx("div",{className:"absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-900/10 to-transparent blur-3xl pointer-events-none"}),A.jsx("div",{className:"w-full px-4 md:px-8 lg:px-12 relative z-10",children:A.jsxs("div",{className:"glass-effect rounded-2xl border border-white/10 p-8 lg:p-10 w-full shadow-2xl relative overflow-hidden reveal",children:[A.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-500 opacity-50"}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[A.jsxs("div",{className:"lg:col-span-3 flex flex-col items-center lg:items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8",children:[A.jsxs("div",{className:"relative group mb-4",children:[A.jsx("div",{className:"absolute -inset-1 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"}),A.jsx("div",{className:"relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-slate-900 shadow-2xl",children:A.jsx("img",{src:Ly,alt:"Abikrishna - Founder",className:"w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"})}),A.jsx("div",{className:"absolute bottom-2 right-2 w-8 h-8 bg-[#0a0a0f] rounded-full flex items-center justify-center border border-white/20 text-sky-400 shadow-lg",children:A.jsx(Ty,{className:"w-4 h-4"})})]}),A.jsx("h3",{className:"text-3xl font-space font-bold text-white tracking-tight mb-1",children:"Abikrishna"}),A.jsx("p",{className:"text-sky-400 font-inter font-medium text-sm w-full uppercase tracking-wider",children:"Founder & Developer"})]}),A.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-xs font-space font-bold tracking-[0.2em] text-sky-500 uppercase mb-3",children:"Behind the Code"}),A.jsxs("h3",{className:"text-3xl md:text-5xl font-space font-bold text-white leading-tight",children:["The Story of"," ",A.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-purple-500",children:"Compile Journey"})]})]}),A.jsxs("div",{className:"text-slate-300 font-inter text-base md:text-lg leading-relaxed space-y-4 font-light tracking-wide",children:[A.jsx("p",{children:"My journey began with a simple fascination: how can lines of text on a screen change the world? That curiosity led me down the rabbit hole of coding, AI, and problem-solving."}),A.jsxs("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${o?"max-h-[500px] opacity-100":"max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}`,children:[A.jsxs("p",{className:"mb-4",children:["Through dedication and countless hours of experimentation, I've honed my skills in"," ",A.jsx("strong",{className:"text-white font-semibold",children:"Python, FastAPI, and LLMs"}),". I built ",A.jsx("em",{children:"Compile Journey"})," not just as a portfolio, but as a platform to share knowledge, showcase innovation, and demonstrate the power of modern web technologies."]}),A.jsxs("p",{children:["Today, I focus on bridging the gap between complex data science concepts and intuitive user experiences, creating tools like"," ",A.jsx("strong",{className:"text-white font-semibold",children:"Avira"})," ","that make AI accessible to everyone."]})]}),A.jsx("button",{onClick:()=>t(!o),className:"md:hidden flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wide hover:text-sky-300 transition-colors py-1",children:o?A.jsxs(A.Fragment,{children:["Show Less ",A.jsx(w_,{className:"w-3 h-3"})]}):A.jsxs(A.Fragment,{children:["Read Full Story ",A.jsx(Ho,{className:"w-3 h-3"})]})})]})]}),A.jsx("div",{className:"lg:col-span-3 flex flex-row lg:flex-col gap-4 flex-wrap lg:border-l border-white/10 lg:pl-8",children:i.map((r,l)=>A.jsxs("div",{className:"flex-1 lg:flex-none flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-sky-500/30 hover:translate-x-1 transition-all duration-300 group",children:[A.jsx("div",{className:"p-2.5 bg-gradient-to-br from-gray-800 to-black rounded-lg text-sky-400 group-hover:text-purple-400 transition-colors shadow-inner",children:r.icon}),A.jsxs("div",{className:"flex flex-col",children:[A.jsx("span",{className:"text-xs text-slate-400 uppercase tracking-wider",children:"Skill"}),A.jsx("span",{className:"text-sm font-bold text-white group-hover:text-sky-200 transition-colors",children:r.label})]})]},l))})]})]})})]})},Py=()=>{const[o,t]=pn.useState(!1);return A.jsxs("section",{id:"journey",className:"py-20 relative overflow-hidden",children:[A.jsx("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"}),A.jsx("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"}),A.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[A.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 reveal",children:[A.jsx("h2",{className:"text-sm font-bold text-sky-500 tracking-widest uppercase mb-2",children:"Milestones"}),A.jsxs("h3",{className:"text-3xl md:text-5xl font-space font-bold text-white mb-4",children:["Our ",A.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500",children:"Journey"})]}),A.jsx("p",{className:"text-slate-400 text-base md:text-lg",children:"From a spark of curiosity to a mission of creation."})]}),A.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[A.jsx("div",{className:"absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/0 via-sky-500/50 to-purple-500/0 md:-translate-x-1/2"}),A.jsxs("div",{className:"space-y-12",children:[A.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[A.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-sky-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"}),A.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1",children:A.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-sky-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[A.jsx("div",{className:"inline-flex p-3 bg-sky-500/10 rounded-xl mb-4 text-sky-400 md:ml-auto md:mr-0",children:A.jsx(N_,{className:"w-6 h-6"})}),A.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Curiosity Sparked"}),A.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"It all began with a passion for AI, coding, and problem-solving. Endless hours of learning and exploring new technologies laid the foundation."})]})}),A.jsx("div",{className:"hidden md:block md:w-[45%] order-2"})]}),A.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[A.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-purple-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300"}),A.jsx("div",{className:"hidden md:block md:w-[45%] order-1"}),A.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2",children:A.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[A.jsx("div",{className:"inline-flex p-3 bg-purple-500/10 rounded-xl mb-4 text-purple-400",children:A.jsx(ey,{className:"w-6 h-6"})}),A.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Experimentation"}),A.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Explored LLMs, FastAPI, Python, and Data Science. Small projects and prototypes became my classroom for hands-on learning."})]})})]}),A.jsxs("div",{className:`space-y-12 transition-all duration-700 overflow-hidden ${o?"max-h-[2000px] opacity-100":"max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"}`,children:[A.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[A.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-emerald-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:scale-125 transition-transform duration-300"}),A.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1",children:A.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[A.jsx("div",{className:"inline-flex p-3 bg-emerald-500/10 rounded-xl mb-4 text-emerald-400 md:ml-auto md:mr-0",children:A.jsx(ay,{className:"w-6 h-6"})}),A.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Building Tools"}),A.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Transformed experiments into real tools like Avira, AI experiments, and web apps, testing and refining each for practical use."})]})}),A.jsx("div",{className:"hidden md:block md:w-[45%] order-2"})]}),A.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[A.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-pink-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)] group-hover:scale-125 transition-transform duration-300"}),A.jsx("div",{className:"hidden md:block md:w-[45%] order-1"}),A.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2",children:A.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-pink-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[A.jsx("div",{className:"inline-flex p-3 bg-pink-500/10 rounded-xl mb-4 text-pink-400",children:A.jsx(gy,{className:"w-6 h-6"})}),A.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Sharing & Inspiring"}),A.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Through tutorials, guides, and resources, I shared my work with the community, encouraging others to learn and innovate."})]})})]})]})]}),A.jsx("div",{className:"text-center mt-12 md:hidden relative z-20",children:A.jsx("button",{onClick:()=>t(!o),className:"inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:border-sky-500/50 transition-all active:scale-95",children:o?A.jsxs(A.Fragment,{children:["Show Less ",A.jsx(w_,{className:"w-4 h-4"})]}):A.jsxs(A.Fragment,{children:["View Full Journey ",A.jsx(Ho,{className:"w-4 h-4"})]})})})]})]})]})},zy="/Compile_Journey/assets/portfolio_preview-CMTROOhy.png",Fy=()=>A.jsxs("section",{id:"portfolio",className:"py-32 relative overflow-hidden",children:[A.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-sky-500/5 blur-[80px] rounded-full pointer-events-none"}),A.jsxs("div",{className:"container mx-auto px-6 text-center relative z-10",children:[A.jsx("h2",{className:"text-4xl md:text-6xl font-bold mb-8 reveal",children:"My Portfolio"}),A.jsx("p",{className:"text-lg text-slate-400 mb-16 max-w-xl mx-auto reveal",children:"A curated collection of my projects, skills, and professional journey."}),A.jsxs("div",{className:"portfolio-orbit-wrapper relative max-w-3xl mx-auto perspective-container reveal",style:{perspective:"1000px"},children:[A.jsx("div",{className:"orbit-ring ring-1",children:A.jsx("div",{className:"orbit-icon icon-1 bg-[#0a0a0a] border border-sky-500/50 text-sky-400",children:A.jsx(C_,{className:"w-4 h-4"})})}),A.jsx("div",{className:"orbit-ring ring-2",children:A.jsx("div",{className:"orbit-icon icon-2 bg-[#0a0a0a] border border-purple-500/50 text-purple-400",children:A.jsx(ZS,{className:"w-4 h-4"})})}),A.jsx("div",{className:"group relative transform-style-3d transition-all duration-500 portfolio-holo-card hover:scale-105",children:A.jsxs("div",{className:"relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] bg-[#030014]",children:[A.jsx("div",{className:"scan-line"}),A.jsx("img",{src:zy,alt:"Portfolio Preview",className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"}),A.jsxs("div",{className:"absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm",children:[A.jsx("h3",{className:"text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500",children:"Explore My Work"}),A.jsx("p",{className:"text-sky-300 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-sm",children:"Full Stack • AI • Data Science"}),A.jsx("a",{href:"https://creation-hub.abikrishna04edu.workers.dev/",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-colors interactive-element shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transform scale-90 group-hover:scale-100 duration-300",children:"Open Portfolio"})]}),A.jsxs("div",{className:"absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-green-400 flex items-center gap-2",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"})," ONLINE"]}),A.jsx("div",{className:"absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-slate-400",children:"SYS.VER.2.5"})]})})]})]})]}),Iy=()=>A.jsxs("section",{id:"projects",className:"py-20 md:py-32 relative overflow-hidden",children:[A.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0",children:[A.jsx("div",{className:"absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full"}),A.jsx("div",{className:"absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full"})]}),A.jsxs("div",{className:"container mx-auto px-4 sm:px-6 relative z-10",children:[A.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 reveal",children:[A.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm",children:[A.jsx(N_,{className:"w-4 h-4 text-sky-400"}),A.jsx("span",{children:"Featured Innovations"})]}),A.jsxs("h2",{className:"text-4xl sm:text-6xl font-bold mb-6 tracking-tight",children:["Built for the ",A.jsx("span",{className:"bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent",children:"Future"})]}),A.jsx("p",{className:"text-slate-400 text-lg leading-relaxed",children:"Exploring the boundaries of Artificial Intelligence and Data Science through practical, high-impact applications."})]}),A.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12",children:[A.jsxs("div",{id:"avira",className:"group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden reveal",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),A.jsxs("div",{className:"p-6 sm:p-8 md:p-10 relative z-10",children:[A.jsxs("div",{className:"flex justify-between items-start mb-8",children:[A.jsx("div",{className:"p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors",children:A.jsx(Cg,{className:"w-8 h-8 text-purple-400"})}),A.jsx("a",{href:"https://avira-64d03.web.app",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link",children:A.jsx(Ng,{className:"w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors"})})]}),A.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Avira AI"}),A.jsxs("p",{className:"text-purple-400 font-medium mb-6 flex items-center gap-2",children:[A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"}),"Intelligent Assistant"]}),A.jsx("p",{className:"text-slate-400 text-lg mb-8 leading-relaxed",children:"An advanced AI assistant designed to bridge the gap between complex LLM capabilities and daily productivity. Features intelligent prompt engineering and context-aware responses."}),A.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[A.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[A.jsx(xy,{className:"w-4 h-4 text-purple-400"}),A.jsx("span",{children:"Smart Prompts"})]}),A.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[A.jsx(Cy,{className:"w-4 h-4 text-purple-400"}),A.jsx("span",{children:"Fast Response"})]})]}),A.jsx("div",{className:"flex items-center gap-4 pt-6 border-t border-white/5",children:A.jsxs("a",{href:"https://avira-64d03.web.app/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all",children:["Chat with Avira ",A.jsx(Ud,{className:"w-4 h-4"})]})})]})]}),A.jsxs("div",{id:"curiodata",className:"group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden reveal",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),A.jsxs("div",{className:"p-6 sm:p-8 md:p-10 relative z-10",children:[A.jsxs("div",{className:"flex justify-between items-start mb-8",children:[A.jsx("div",{className:"p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors",children:A.jsx(QS,{className:"w-8 h-8 text-blue-400"})}),A.jsx("a",{href:"https://curiodata.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link",children:A.jsx(Ng,{className:"w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors"})})]}),A.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"CurioData"}),A.jsxs("p",{className:"text-blue-400 font-medium mb-6 flex items-center gap-2",children:[A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"}),"Data Analytics Platform"]}),A.jsx("p",{className:"text-slate-400 text-lg mb-8 leading-relaxed",children:"Upload your datasets and let AI uncover hidden patterns. CurioData provides instant visualization, statistical analysis, and predictive insights from raw CSV/Excel files."}),A.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[A.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[A.jsx(HS,{className:"w-4 h-4 text-blue-400"}),A.jsx("span",{children:"Auto Visualization"})]}),A.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[A.jsx(Cg,{className:"w-4 h-4 text-blue-400"}),A.jsx("span",{children:"AI Insights"})]})]}),A.jsx("div",{className:"flex items-center gap-4 pt-6 border-t border-white/5",children:A.jsxs("a",{href:"https://curiodata.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all",children:["Analyze Your Data ",A.jsx(Ud,{className:"w-4 h-4"})]})})]})]})]})]})]}),By=({question:o,answer:t})=>{const[i,r]=pn.useState(!1);return A.jsxs("div",{className:`accordion-item glass-effect rounded-xl overflow-hidden interactive-element ${i?"active":""}`,children:[A.jsxs("button",{className:"accordion-header w-full flex justify-between items-center p-6 text-left focus:outline-none",onClick:()=>r(!i),children:[A.jsx("span",{className:"text-lg font-semibold text-white",children:o}),A.jsx(Ho,{className:`accordion-icon w-5 h-5 text-sky-400 transition-transform duration-300 ${i?"rotate-180":""}`})]}),A.jsx("div",{className:"accordion-content transition-all duration-300 ease-out",style:{maxHeight:i?"500px":"0"},children:A.jsx("div",{className:"px-6 pb-6 text-slate-300",dangerouslySetInnerHTML:{__html:t}})})]})},Hy=()=>{const o=[{question:"What technologies do you specialize in?",answer:"I specialize in a modern tech stack focusing on <strong>Python, FastAPI, and React</strong>. My expertise extends to Data Science using Pandas and NumPy, as well as integrating Large Language Models (LLMs) for advanced AI solutions."},{question:"How can I collaborate on a project?",answer:"Collaboration starts with a conversation! You can reach out via the <strong>Contact</strong> form below or connect with me on LinkedIn. I am open to open-source contributions, freelance projects, and long-term partnerships."},{question:"Is Avira available for public use?",answer:"Yes! Avira is live and accessible via the web. You can try the demo version directly from the project link above. I am constantly updating it with new features for better prompt engineering and AI assistance."},{question:"Do you offer data analysis services?",answer:"Absolutely. Through my <strong>CurioData</strong> platform, I provide automated insights. For more bespoke enterprise needs, I offer custom data analysis solutions tailored to your specific datasets and business goals."}];return A.jsx("section",{id:"faq",className:"py-16 sm:py-20 md:py-24",children:A.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[A.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 reveal",children:[A.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-4",children:"Common Queries"}),A.jsx("p",{className:"text-slate-300 text-lg",children:"Frequently asked questions about my work and services."})]}),A.jsx("div",{className:"max-w-3xl mx-auto space-y-4 reveal",children:o.map((t,i)=>A.jsx(By,{question:t.question,answer:t.answer},i))})]})})},Gy=()=>A.jsx("section",{id:"contact",className:"py-16 sm:py-20 md:py-24 lg:py-32",children:A.jsxs("div",{className:"container mx-auto px-4 sm:px-6 reveal",children:[A.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-12 sm:mb-16",children:[A.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-4",children:"Get in Touch"}),A.jsx("p",{className:"text-slate-300 text-lg",children:"Have a project in mind? Drop me a message."})]}),A.jsx("div",{className:"max-w-2xl mx-auto glass-effect p-6 sm:p-8 md:p-12 rounded-2xl",children:A.jsxs("form",{action:"https://formspree.io/f/mwprgyqv",method:"POST",className:"space-y-6",children:[A.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),A.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),A.jsx("textarea",{name:"message",rows:"5",placeholder:"Your Message",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),A.jsx("div",{className:"text-center",children:A.jsx("button",{type:"submit",className:"bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 interactive-element",children:"Send Message"})})]})})]})}),Vy=()=>A.jsx("footer",{className:"bg-black/30",children:A.jsx("div",{className:"container mx-auto px-6 py-8",children:A.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[A.jsx("p",{className:"text-slate-400 mb-4 md:mb-0",children:"© 2025 compile.journey. All Rights Reserved."}),A.jsxs("div",{className:"flex space-x-6",children:[A.jsx("a",{href:"https://www.linkedin.com/company/compilejourneyspace/",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:A.jsx(uy,{className:"w-6 h-6"})}),A.jsx("a",{href:"https://www.instagram.com/compile.journey",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:A.jsx(sy,{className:"w-6 h-6"})}),A.jsx("a",{href:"https://github.com/Abikrishna2004",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:A.jsx(ny,{className:"w-6 h-6"})})]})]})})});const Nh="182",ky=0,Dg=1,Xy=2,Nc=1,jy=2,Io=3,er=0,jn=1,fa=2,ha=0,Rs=1,Ld=2,Ug=3,Lg=4,qy=5,Ar=100,Wy=101,Yy=102,Zy=103,Ky=104,Qy=200,Jy=201,$y=202,eM=203,Od=204,Pd=205,tM=206,nM=207,iM=208,aM=209,rM=210,sM=211,oM=212,lM=213,cM=214,zd=0,Fd=1,Id=2,Cs=3,Bd=4,Hd=5,Gd=6,Vd=7,D_=0,uM=1,fM=2,Ii=0,U_=1,L_=2,O_=3,P_=4,z_=5,F_=6,I_=7,B_=300,Nr=301,Ns=302,kd=303,Xd=304,Hc=306,jd=1e3,da=1001,qd=1002,Cn=1003,dM=1004,oc=1005,On=1006,td=1007,wr=1008,mi=1009,H_=1010,G_=1011,Go=1012,Dh=1013,Hi=1014,zi=1015,ga=1016,Uh=1017,Lh=1018,Vo=1020,V_=35902,k_=35899,X_=1021,j_=1022,Ai=1023,_a=1026,Cr=1027,q_=1028,Oh=1029,Ds=1030,Ph=1031,zh=1033,Dc=33776,Uc=33777,Lc=33778,Oc=33779,Wd=35840,Yd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,eh=37488,th=37489,nh=37490,ih=37491,ah=37808,rh=37809,sh=37810,oh=37811,lh=37812,ch=37813,uh=37814,fh=37815,dh=37816,hh=37817,ph=37818,mh=37819,gh=37820,_h=37821,vh=36492,xh=36494,Sh=36495,yh=36283,Mh=36284,bh=36285,Eh=36286,hM=3200,pM=0,mM=1,Ja="",hi="srgb",Us="srgb-linear",Fc="linear",Ft="srgb",hs=7680,Og=519,gM=512,_M=513,vM=514,Fh=515,xM=516,SM=517,Ih=518,yM=519,Pg=35044,zg="300 es",Fi=2e3,Ic=2001;function W_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MM(){const o=Bc("canvas");return o.style.display="block",o}const Fg={};function Ig(...o){const t="THREE."+o.shift();console.log(t,...o)}function rt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function At(...o){const t="THREE."+o.shift();console.error(t,...o)}function ko(...o){const t=o.join(" ");t in Fg||(Fg[t]=!0,rt(...o))}function bM(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Th=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function EM(o,t){return(o%t+t)%t}function id(o,t,i){return(1-i)*o+i*t}function Do(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=u[d+0],b=u[d+1],R=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(h>=1){t[i+0]=S,t[i+1]=b,t[i+2]=R,t[i+3]=C;return}if(_!==C||m!==S||p!==b||v!==R){let y=m*S+p*b+v*R+_*C;y<0&&(S=-S,b=-b,R=-R,C=-C,y=-y);let x=1-h;if(y<.9995){const z=Math.acos(y),P=Math.sin(z);x=Math.sin(x*z)/P,h=Math.sin(h*z)/P,m=m*x+S*h,p=p*x+b*h,v=v*x+R*h,_=_*x+C*h}else{m=m*x+S*h,p=p*x+b*h,v=v*x+R*h,_=_*x+C*h;const z=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=z,p*=z,v*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],S=u[d+1],b=u[d+2],R=u[d+3];return t[i]=h*R+v*_+m*b-p*S,t[i+1]=m*R+v*S+p*_-h*b,t[i+2]=p*R+v*b+h*S-m*_,t[i+3]=v*R-h*_-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),S=m(r/2),b=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*v*_+p*b*R,this._y=p*b*_-S*v*R,this._z=p*v*R+S*b*_,this._w=p*v*_-S*b*R;break;case"YXZ":this._x=S*v*_+p*b*R,this._y=p*b*_-S*v*R,this._z=p*v*R-S*b*_,this._w=p*v*_+S*b*R;break;case"ZXY":this._x=S*v*_-p*b*R,this._y=p*b*_+S*v*R,this._z=p*v*R+S*b*_,this._w=p*v*_-S*b*R;break;case"ZYX":this._x=S*v*_-p*b*R,this._y=p*b*_+S*v*R,this._z=p*v*R-S*b*_,this._w=p*v*_+S*b*R;break;case"YZX":this._x=S*v*_+p*b*R,this._y=p*b*_+S*v*R,this._z=p*v*R-S*b*_,this._w=p*v*_-S*b*R;break;case"XZY":this._x=S*v*_-p*b*R,this._y=p*b*_-S*v*R,this._z=p*v*R+S*b*_,this._w=p*v*_+S*b*R;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(v-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>_){const b=2*Math.sqrt(1+r-h-_);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>_){const b=2*Math.sqrt(1+h-r-_);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+_-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Bg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Bg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new re,Bg=new qo;class ut{constructor(t,i,r,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],b=r[5],R=r[8],C=l[0],y=l[3],x=l[6],z=l[1],P=l[4],L=l[7],B=l[2],H=l[5],F=l[8];return u[0]=d*C+h*z+m*B,u[3]=d*y+h*P+m*H,u[6]=d*x+h*L+m*F,u[1]=p*C+v*z+_*B,u[4]=p*y+v*P+_*H,u[7]=p*x+v*L+_*F,u[2]=S*C+b*z+R*B,u[5]=S*y+b*P+R*H,u[8]=S*x+b*L+R*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=v*d-h*p,S=h*m-v*u,b=p*u-d*m,R=i*_+r*S+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=_*C,t[1]=(l*p-v*r)*C,t[2]=(h*r-l*d)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=b*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(rd.makeScale(t,i)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new ut,Hg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TM(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ft&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:t,whitePoint:r,transfer:Fc,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Ft,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const bt=TM();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class AM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=Bc("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RM=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(sd(l[d].image)):u.push(sd(l[d]))}else u=sd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?AM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let wM=0;const od=new re;class Fn extends Os{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=da,l=da,u=On,d=wr,h=Ai,m=mi,p=Fn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=jo(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==B_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=B_;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],b=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(b+1)/2,B=(x+1)/2,H=(v+S)/4,F=(_+C)/4,J=(R+y)/4;return P>L&&P>B?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=H/r,u=F/r):L>B?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=H/l,u=J/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=F/u,l=J/u),this.set(r,l,u,i),this}let z=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(z)<.001&&(z=1),this.x=(y-R)/z,this.y=(_-C)/z,this.z=(S-v)/z,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Os{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends CM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Y_ extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),cc.subVectors(this.max,Uo),ms.subVectors(t.a,Uo),gs.subVectors(t.b,Uo),_s.subVectors(t.c,Uo),qa.subVectors(gs,ms),Wa.subVectors(_s,gs),xr.subVectors(ms,_s);let i=[0,-qa.z,qa.y,0,-Wa.z,Wa.y,0,-xr.z,xr.y,qa.z,0,-qa.x,Wa.z,0,-Wa.x,xr.z,0,-xr.x,-qa.y,qa.x,0,-Wa.y,Wa.x,0,-xr.y,xr.x,0];return!ld(i,ms,gs,_s,cc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,ms,gs,_s,cc))?!1:(uc.crossVectors(qa,Wa),i=[uc.x,uc.y,uc.z],ld(i,ms,gs,_s,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new re,new re,new re,new re,new re,new re,new re,new re],Mi=new re,lc=new Wo,ms=new re,gs=new re,_s=new re,qa=new re,Wa=new re,xr=new re,Uo=new re,cc=new re,uc=new re,Sr=new re;function ld(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Sr.fromArray(o,u);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=t.dot(Sr),p=i.dot(Sr),v=r.dot(Sr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const DM=new Wo,Lo=new re,cd=new re;class Gc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):DM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(cd)),this.expandByPoint(Lo.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new re,ud=new re,fc=new re,Ya=new re,fd=new re,dc=new re,dd=new re;class Z_{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ud.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(ud);const u=t.distanceTo(i)*.5,d=-this.direction.dot(fc),h=Ya.dot(this.direction),m=-Ya.dot(fc),p=Ya.lengthSq(),v=Math.abs(1-d*d);let _,S,b,R;if(v>0)if(_=d*m-h,S=d*h-m,R=u*v,_>=0)if(S>=-R)if(S<=R){const C=1/v;_*=C,S*=C,b=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ud).addScaledVector(fc,S),b}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,d=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,d=(t.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(h=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,r,l,u){fd.subVectors(i,t),dc.subVectors(r,t),dd.crossVectors(fd,dc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(dc.crossVectors(Ya,dc));if(m<0)return null;const p=h*this.direction.dot(fd.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(dd);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,u,d,h,m,p,v,_,S,b,R,C,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,v,_,S,b,R,C,y)}set(t,i,r,l,u,d,h,m,p,v,_,S,b,R,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=b,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),u=1/vs.setFromMatrixColumn(t,1).length(),d=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=d*v,b=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=b+R*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=R+b*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*v,b=m*_,R=p*v,C=p*_;i[0]=S+C*h,i[4]=R*h-b,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=b*h-R,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*v,b=m*_,R=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=R+b*h,i[1]=b+R*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*v,b=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=R*p-b,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=b*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,b=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=R*_+b,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*_+R,i[10]=S-C*_}else if(t.order==="XZY"){const S=d*m,b=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=b*_-R,i[2]=R*_-b,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UM,t,LM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(r,ei),Za.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(r,ei)),Za.normalize(),hc.crossVectors(ei,Za),l[0]=Za.x,l[4]=hc.x,l[8]=ei.x,l[1]=Za.y,l[5]=hc.y,l[9]=ei.y,l[2]=Za.z,l[6]=hc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],b=r[13],R=r[2],C=r[6],y=r[10],x=r[14],z=r[3],P=r[7],L=r[11],B=r[15],H=l[0],F=l[4],J=l[8],w=l[12],N=l[1],X=l[5],se=l[9],ae=l[13],pe=l[2],fe=l[6],O=l[10],G=l[14],ie=l[3],Me=l[7],Se=l[11],U=l[15];return u[0]=d*H+h*N+m*pe+p*ie,u[4]=d*F+h*X+m*fe+p*Me,u[8]=d*J+h*se+m*O+p*Se,u[12]=d*w+h*ae+m*G+p*U,u[1]=v*H+_*N+S*pe+b*ie,u[5]=v*F+_*X+S*fe+b*Me,u[9]=v*J+_*se+S*O+b*Se,u[13]=v*w+_*ae+S*G+b*U,u[2]=R*H+C*N+y*pe+x*ie,u[6]=R*F+C*X+y*fe+x*Me,u[10]=R*J+C*se+y*O+x*Se,u[14]=R*w+C*ae+y*G+x*U,u[3]=z*H+P*N+L*pe+B*ie,u[7]=z*F+P*X+L*fe+B*Me,u[11]=z*J+P*se+L*O+B*Se,u[15]=z*w+P*ae+L*G+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],b=t[14],R=t[3],C=t[7],y=t[11],x=t[15],z=m*b-p*S,P=h*b-p*_,L=h*S-m*_,B=d*b-p*v,H=d*S-m*v,F=d*_-h*v;return i*(C*z-y*P+x*L)-r*(R*z-y*B+x*H)+l*(R*P-C*B+x*F)-u*(R*L-C*H+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],b=t[11],R=t[12],C=t[13],y=t[14],x=t[15],z=_*y*p-C*S*p+C*m*b-h*y*b-_*m*x+h*S*x,P=R*S*p-v*y*p-R*m*b+d*y*b+v*m*x-d*S*x,L=v*C*p-R*_*p+R*h*b-d*C*b-v*h*x+d*_*x,B=R*_*m-v*C*m-R*h*S+d*C*S+v*h*y-d*_*y,H=i*z+r*P+l*L+u*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=z*F,t[1]=(C*S*u-_*y*u-C*l*b+r*y*b+_*l*x-r*S*x)*F,t[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*x+r*m*x)*F,t[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*b-r*m*b)*F,t[4]=P*F,t[5]=(v*y*u-R*S*u+R*l*b-i*y*b-v*l*x+i*S*x)*F,t[6]=(R*m*u-d*y*u-R*l*p+i*y*p+d*l*x-i*m*x)*F,t[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*b+i*m*b)*F,t[8]=L*F,t[9]=(R*_*u-v*C*u-R*r*b+i*C*b+v*r*x-i*_*x)*F,t[10]=(d*C*u-R*h*u+R*r*p-i*C*p-d*r*x+i*h*x)*F,t[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*b-i*h*b)*F,t[12]=B*F,t[13]=(v*C*l-R*_*l+R*r*S-i*C*S-v*r*y+i*_*y)*F,t[14]=(R*h*l-d*C*l-R*r*m+i*C*m+d*r*y-i*h*y)*F,t[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*S+i*h*S)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,S=u*p,b=u*v,R=u*_,C=d*v,y=d*_,x=h*_,z=m*p,P=m*v,L=m*_,B=r.x,H=r.y,F=r.z;return l[0]=(1-(C+x))*B,l[1]=(b+L)*B,l[2]=(R-P)*B,l[3]=0,l[4]=(b-L)*H,l[5]=(1-(S+x))*H,l[6]=(y+z)*H,l[7]=0,l[8]=(R+P)*F,l[9]=(y-z)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=vs.set(l[0],l[1],l[2]).length();const d=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),bi.copy(this);const p=1/u,v=1/d,_=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,i.setFromRotationMatrix(bi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Fi,m=!1){const p=this.elements,v=2*u/(i-t),_=2*u/(r-l),S=(i+t)/(i-t),b=(r+l)/(r-l);let R,C;if(m)R=u/(d-u),C=d*u/(d-u);else if(h===Fi)R=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Ic)R=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Fi,m=!1){const p=this.elements,v=2/(i-t),_=2/(r-l),S=-(i+t)/(i-t),b=-(r+l)/(r-l);let R,C;if(m)R=1/(d-u),C=d/(d-u);else if(h===Fi)R=-2/(d-u),C=-(d+u)/(d-u);else if(h===Ic)R=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new re,bi=new rn,UM=new re(0,0,0),LM=new re(1,1,1),Za=new re,hc=new re,ei=new re,Vg=new rn,kg=new qo;class va{constructor(t=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,b),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Vg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return kg.setFromEuler(this),this.setFromQuaternion(kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OM=0;const Xg=new re,xs=new qo,la=new rn,pc=new re,Oo=new re,PM=new re,zM=new qo,jg=new re(1,0,0),qg=new re(0,1,0),Wg=new re(0,0,1),Yg={type:"added"},FM={type:"removed"},Ss={type:"childadded",child:null},hd={type:"childremoved",child:null};class qn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new re,i=new va,r=new qo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ut}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(qg,t)}rotateZ(t){return this.rotateOnAxis(Wg,t)}translateOnAxis(t,i){return Xg.copy(t).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(qg,t)}translateZ(t){return this.translateOnAxis(Wg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pc.copy(t):pc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,pc,this.up):la.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(la),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FM),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,zM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),_=d(t.shapes),S=d(t.skeletons),b=d(t.animations),R=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new re(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new re,ca=new re,pd=new re,ua=new re,ys=new re,Ms=new re,Zg=new re,md=new re,gd=new re,_d=new re,vd=new an,xd=new an,Sd=new an;class Ti{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),ca.subVectors(r,i),pd.subVectors(t,i);const d=Ei.dot(Ei),h=Ei.dot(ca),m=Ei.dot(pd),p=ca.dot(ca),v=ca.dot(pd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,b=(p*m-h*v)*S,R=(d*v-h*m)*S;return u.set(1-b-R,R,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,r),Sd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),ca.subVectors(t,i),Ei.cross(ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ei.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ys.subVectors(l,r),Ms.subVectors(u,r),md.subVectors(t,r);const m=ys.dot(md),p=Ms.dot(md);if(m<=0&&p<=0)return i.copy(r);gd.subVectors(t,l);const v=ys.dot(gd),_=Ms.dot(gd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ys,d);_d.subVectors(t,u);const b=ys.dot(_d),R=Ms.dot(_d);if(R>=0&&b<=R)return i.copy(u);const C=b*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(Ms,h);const y=v*R-b*_;if(y<=0&&_-v>=0&&b-R>=0)return Zg.subVectors(u,l),h=(_-v)/(_-v+(b-R)),i.copy(l).addScaledVector(Zg,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(r).addScaledVector(ys,d).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},mc={h:0,s:0,l:0};function yd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class It{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=bt.workingColorSpace){if(t=EM(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=yd(d,u,t+1/3),this.g=yd(d,u,t),this.b=yd(d,u,t-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=Q_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return bt.workingToColorSpace(Ln.copy(this),t),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){bt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(mc);const r=id(Ka.h,mc.h,i),l=id(Ka.s,mc.s,i),u=id(Ka.l,mc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new It;It.NAMES=Q_;let IM=0;class Yo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Rs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class J_ extends Yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new re,gc=new kt;let BM=0;class Ri{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pg&&(t.usage=this.usage),t}}class $_ extends Ri{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class ev extends Ri{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ma extends Ri{constructor(t,i,r){super(new Float32Array(t),i,r)}}let HM=0;const di=new rn,Md=new qn,bs=new re,ti=new Wo,Po=new Wo,vn=new re;class wi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W_(t)?ev:$_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ma(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Po.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Po.max),ti.expandByPoint(vn)):(ti.expandByPoint(Po.min),ti.expandByPoint(Po.max))}ti.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)vn.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(t,p),vn.add(bs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<r.count;J++)h[J]=new re,m[J]=new re;const p=new re,v=new re,_=new re,S=new kt,b=new kt,R=new kt,C=new re,y=new re;function x(J,w,N){p.fromBufferAttribute(r,J),v.fromBufferAttribute(r,w),_.fromBufferAttribute(r,N),S.fromBufferAttribute(u,J),b.fromBufferAttribute(u,w),R.fromBufferAttribute(u,N),v.sub(p),_.sub(p),b.sub(S),R.sub(S);const X=1/(b.x*R.y-R.x*b.y);isFinite(X)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(_,-b.y).multiplyScalar(X),y.copy(_).multiplyScalar(b.x).addScaledVector(v,-R.x).multiplyScalar(X),h[J].add(C),h[w].add(C),h[N].add(C),m[J].add(y),m[w].add(y),m[N].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let J=0,w=z.length;J<w;++J){const N=z[J],X=N.start,se=N.count;for(let ae=X,pe=X+se;ae<pe;ae+=3)x(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const P=new re,L=new re,B=new re,H=new re;function F(J){B.fromBufferAttribute(l,J),H.copy(B);const w=h[J];P.copy(w),P.sub(B.multiplyScalar(B.dot(w))).normalize(),L.crossVectors(H,w);const X=L.dot(m[J])<0?-1:1;d.setXYZW(J,P.x,P.y,P.z,X)}for(let J=0,w=z.length;J<w;++J){const N=z[J],X=N.start,se=N.count;for(let ae=X,pe=X+se;ae<pe;ae+=3)F(t.getX(ae+0)),F(t.getX(ae+1)),F(t.getX(ae+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,v=new re,_=new re;if(t)for(let S=0,b=t.count;S<b;S+=3){const R=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let b=0,R=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*v;for(let x=0;x<v;x++)S[R++]=p[b++]}return new Ri(S,v,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],b=t(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const b=p[_];v.push(b.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,b=_.length;S<b;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new rn,yr=new Z_,_c=new Gc,Qg=new re,vc=new re,xc=new re,Sc=new re,bd=new re,yc=new re,Jg=new re,Mc=new re;class xa extends qn{constructor(t=new wi,i=new J_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){yc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(bd.fromBufferAttribute(_,t),d?yc.addScaledVector(bd,v):yc.addScaledVector(bd.sub(i),v))}i.add(yc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(u),yr.copy(t.ray).recast(t.near),!(_c.containsPoint(yr.origin)===!1&&(yr.intersectSphere(_c,Qg)===null||yr.origin.distanceToSquared(Qg)>(t.far-t.near)**2))&&(Kg.copy(u).invert(),yr.copy(t.ray).applyMatrix4(Kg),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],z=Math.max(y.start,b.start),P=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let L=z,B=P;L<B;L+=3){const H=h.getX(L),F=h.getX(L+1),J=h.getX(L+2);l=bc(this,x,t,r,p,v,_,H,F,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let y=R,x=C;y<x;y+=3){const z=h.getX(y),P=h.getX(y+1),L=h.getX(y+2);l=bc(this,d,t,r,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],z=Math.max(y.start,b.start),P=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let L=z,B=P;L<B;L+=3){const H=L,F=L+1,J=L+2;l=bc(this,x,t,r,p,v,_,H,F,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=R,x=C;y<x;y+=3){const z=y,P=y+1,L=y+2;l=bc(this,d,t,r,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function GM(o,t,i,r,l,u,d,h){let m;if(t.side===jn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===er,h),m===null)return null;Mc.copy(h),Mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:o}}function bc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,vc),o.getVertexPosition(m,xc),o.getVertexPosition(p,Sc);const v=GM(o,t,i,r,vc,xc,Sc,Jg);if(v){const _=new re;Ti.getBarycoord(Jg,vc,xc,Sc,_),l&&(v.uv=Ti.getInterpolatedAttribute(l,h,m,p,_,new kt)),u&&(v.uv1=Ti.getInterpolatedAttribute(u,h,m,p,_,new kt)),d&&(v.normal=Ti.getInterpolatedAttribute(d,h,m,p,_,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Ti.getNormal(vc,xc,Sc,S.normal),v.face=S,v.barycoord=_}return v}class Zo extends wi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,b=0;R("z","y","x",-1,-1,r,i,t,d,u,0),R("z","y","x",1,-1,r,i,-t,d,u,1),R("x","z","y",1,1,t,r,i,l,d,2),R("x","z","y",1,-1,t,r,-i,l,d,3),R("x","y","z",1,-1,t,i,r,l,u,4),R("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ma(p,3)),this.setAttribute("normal",new ma(v,3)),this.setAttribute("uv",new ma(_,2));function R(C,y,x,z,P,L,B,H,F,J,w){const N=L/F,X=B/J,se=L/2,ae=B/2,pe=H/2,fe=F+1,O=J+1;let G=0,ie=0;const Me=new re;for(let Se=0;Se<O;Se++){const U=Se*X-ae;for(let ne=0;ne<fe;ne++){const _e=ne*N-se;Me[C]=_e*z,Me[y]=U*P,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[y]=0,Me[x]=H>0?1:-1,v.push(Me.x,Me.y,Me.z),_.push(ne/F),_.push(1-Se/J),G+=1}}for(let Se=0;Se<J;Se++)for(let U=0;U<F;U++){const ne=S+U+fe*Se,_e=S+U+fe*(Se+1),Ae=S+(U+1)+fe*(Se+1),Be=S+(U+1)+fe*Se;m.push(ne,_e,Be),m.push(_e,Ae,Be),ie+=6}h.addGroup(b,ie,w),b+=ie,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)t[l]=r[l]}return t}function VM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function tv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const kM={clone:Ls,merge:zn};var XM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=VM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class nv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new re,$g=new kt,e_=new kt;class pi extends nv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,$g,e_),i.subVectors(e_,$g)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class qM extends qn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Es,Ts,t,i);l.layers=this.layers,this.add(l);const u=new pi(Es,Ts,t,i);u.layers=this.layers,this.add(u);const d=new pi(Es,Ts,t,i);d.layers=this.layers,this.add(d);const h=new pi(Es,Ts,t,i);h.layers=this.layers,this.add(h);const m=new pi(Es,Ts,t,i);m.layers=this.layers,this.add(m);const p=new pi(Es,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(_,S,b),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class iv extends Fn{constructor(t=[],i=Nr,r,l,u,d,h,m,p,v){super(t,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class av extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zo(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ha});u.uniforms.tEquirect.value=i;const d=new xa(l,u),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=On),new qM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Ec extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),b=.02,R=.005;p.inputState.pinching&&S>b+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ec;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class YM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ZM extends Fn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=Cn,v=Cn,_,S){super(null,d,h,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new re,KM=new re,QM=new ut;class Tr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Td.subVectors(r,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Td),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||QM.getNormalMatrix(t),l=this.coplanarPoint(Td).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Gc,JM=new kt(.5,.5),Tc=new re;class rv{constructor(t=new Tr,i=new Tr,r=new Tr,l=new Tr,u=new Tr,d=new Tr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Fi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],b=u[7],R=u[8],C=u[9],y=u[10],x=u[11],z=u[12],P=u[13],L=u[14],B=u[15];if(l[0].setComponents(p-d,b-v,x-R,B-z).normalize(),l[1].setComponents(p+d,b+v,x+R,B+z).normalize(),l[2].setComponents(p+h,b+_,x+C,B+P).normalize(),l[3].setComponents(p-h,b-_,x-C,B-P).normalize(),r)l[4].setComponents(m,S,y,L).normalize(),l[5].setComponents(p-m,b-S,x-y,B-L).normalize();else if(l[4].setComponents(p-m,b-S,x-y,B-L).normalize(),i===Fi)l[5].setComponents(p+m,b+S,x+y,B+L).normalize();else if(i===Ic)l[5].setComponents(m,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const i=JM.distanceTo(t.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sv extends Yo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const t_=new rn,Ah=new Z_,Ac=new Gc,Rc=new re;class $M extends qn{constructor(t=new wi,i=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,t.ray.intersectsSphere(Ac)===!1)return;t_.copy(l).invert(),Ah.copy(t.ray).applyMatrix4(t_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let R=S,C=b;R<C;R++){const y=p.getX(R);Rc.fromBufferAttribute(_,y),n_(Rc,y,m,l,t,i,this)}}else{const S=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let R=S,C=b;R<C;R++)Rc.fromBufferAttribute(_,R),n_(Rc,R,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function n_(o,t,i,r,l,u,d){const h=Ah.distanceSqToPoint(o);if(h<i){const m=new re;Ah.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Xo extends Fn{constructor(t,i,r=Hi,l,u,d,h=Cn,m=Cn,p,v=_a,_=1){if(v!==_a&&v!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eb extends Xo{constructor(t,i=Hi,r=Nr,l,u,d=Cn,h=Cn,m,p=_a){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,r,l,u,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ov extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vc extends wi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=t/h,S=i/m,b=[],R=[],C=[],y=[];for(let x=0;x<v;x++){const z=x*S-d;for(let P=0;P<p;P++){const L=P*_-u;R.push(L,-z,0),C.push(0,0,1),y.push(P/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<h;z++){const P=z+p*x,L=z+p*(x+1),B=z+1+p*(x+1),H=z+1+p*x;b.push(P,L,H),b.push(L,B,H)}this.setIndex(b),this.setAttribute("position",new ma(R,3)),this.setAttribute("normal",new ma(C,3)),this.setAttribute("uv",new ma(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class tb extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nb extends Yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ib extends Yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lv extends nv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ab extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function i_(o,t,i,r){const l=rb(r);switch(i){case X_:return o*t;case q_:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case Ds:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case j_:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case zh:return o*t*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Kd:return Math.max(o,16)*Math.max(t,8)/4;case Wd:case Zd:return Math.max(o,8)*Math.max(t,8)/2;case Qd:case Jd:case eh:case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case $d:case nh:case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case vh:case xh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case bh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rb(o){switch(o){case mi:case H_:return{byteLength:1,components:1};case Go:case G_:case ga:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Hi:case Dh:case zi:return{byteLength:4,components:1};case V_:case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function cv(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function sb(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((b,R)=>b.start-R.start);let S=0;for(let b=1;b<_.length;b++){const R=_[S],C=_[b];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let b=0,R=_.length;b<R;b++){const C=_[b];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:db,aomap_fragment:hb,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:Sb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:wb,color_vertex:Cb,common:Nb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ob,emissivemap_fragment:Pb,emissivemap_pars_fragment:zb,colorspace_fragment:Fb,colorspace_pars_fragment:Ib,envmap_fragment:Bb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:Xb,fog_pars_vertex:jb,fog_fragment:qb,fog_pars_fragment:Wb,gradientmap_pars_fragment:Yb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:e1,lights_toon_pars_fragment:t1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:r1,lights_fragment_begin:s1,lights_fragment_maps:o1,lights_fragment_end:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:d1,map_fragment:h1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:S1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:b1,normal_fragment_begin:E1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:w1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:L1,opaque_fragment:O1,packing:P1,premultiplied_alpha_fragment:z1,project_vertex:F1,dithering_fragment:I1,dithering_pars_fragment:B1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:k1,shadowmap_vertex:X1,shadowmask_pars_fragment:j1,skinbase_vertex:q1,skinning_pars_vertex:W1,skinning_vertex:Y1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:$1,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:aE,worldpos_vertex:rE,background_vert:sE,background_frag:oE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:fE,depth_vert:dE,depth_frag:hE,distance_vert:pE,distance_frag:mE,equirect_vert:gE,equirect_frag:_E,linedashed_vert:vE,linedashed_frag:xE,meshbasic_vert:SE,meshbasic_frag:yE,meshlambert_vert:ME,meshlambert_frag:bE,meshmatcap_vert:EE,meshmatcap_frag:TE,meshnormal_vert:AE,meshnormal_frag:RE,meshphong_vert:wE,meshphong_frag:CE,meshphysical_vert:NE,meshphysical_frag:DE,meshtoon_vert:UE,meshtoon_frag:LE,points_vert:OE,points_frag:PE,shadow_vert:zE,shadow_frag:FE,sprite_vert:IE,sprite_frag:BE},Oe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Pi={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pi.physical={uniforms:zn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wc={r:0,b:0,g:0},br=new va,HE=new rn;function GE(o,t,i,r,l,u,d){const h=new It(0);let m=u===!0?0:1,p,v,_=null,S=0,b=null;function R(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function C(P){let L=!1;const B=R(P);B===null?x(h,m):B&&B.isColor&&(x(B,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,L){const B=R(L);B&&(B.isCubeTexture||B.mapping===Hc)?(v===void 0&&(v=new xa(new Zo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Ls(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),br.copy(L.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(br)),v.material.toneMapped=bt.getTransfer(B.colorSpace)!==Ft,(_!==B||S!==B.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,_=B,S=B.version,b=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new xa(new Vc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Ls(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=bt.getTransfer(B.colorSpace)!==Ft,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,b=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,L){P.getRGB(wc,tv(o)),r.buffers.color.setClear(wc.r,wc.g,wc.b,L,d)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,L=1){h.set(P),m=L,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(h,m)},render:C,addToRenderList:y,dispose:z}}function VE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(N,X,se,ae,pe){let fe=!1;const O=_(ae,se,X);u!==O&&(u=O,p(u.object)),fe=b(N,ae,se,pe),fe&&R(N,ae,se,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,L(N,X,se,ae),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(N){return o.bindVertexArray(N)}function v(N){return o.deleteVertexArray(N)}function _(N,X,se){const ae=se.wireframe===!0;let pe=r[N.id];pe===void 0&&(pe={},r[N.id]=pe);let fe=pe[X.id];fe===void 0&&(fe={},pe[X.id]=fe);let O=fe[ae];return O===void 0&&(O=S(m()),fe[ae]=O),O}function S(N){const X=[],se=[],ae=[];for(let pe=0;pe<i;pe++)X[pe]=0,se[pe]=0,ae[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:se,attributeDivisors:ae,object:N,attributes:{},index:null}}function b(N,X,se,ae){const pe=u.attributes,fe=X.attributes;let O=0;const G=se.getAttributes();for(const ie in G)if(G[ie].location>=0){const Se=pe[ie];let U=fe[ie];if(U===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;O++}return u.attributesNum!==O||u.index!==ae}function R(N,X,se,ae){const pe={},fe=X.attributes;let O=0;const G=se.getAttributes();for(const ie in G)if(G[ie].location>=0){let Se=fe[ie];Se===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),pe[ie]=U,O++}u.attributes=pe,u.attributesNum=O,u.index=ae}function C(){const N=u.newAttributes;for(let X=0,se=N.length;X<se;X++)N[X]=0}function y(N){x(N,0)}function x(N,X){const se=u.newAttributes,ae=u.enabledAttributes,pe=u.attributeDivisors;se[N]=1,ae[N]===0&&(o.enableVertexAttribArray(N),ae[N]=1),pe[N]!==X&&(o.vertexAttribDivisor(N,X),pe[N]=X)}function z(){const N=u.newAttributes,X=u.enabledAttributes;for(let se=0,ae=X.length;se<ae;se++)X[se]!==N[se]&&(o.disableVertexAttribArray(se),X[se]=0)}function P(N,X,se,ae,pe,fe,O){O===!0?o.vertexAttribIPointer(N,X,se,pe,fe):o.vertexAttribPointer(N,X,se,ae,pe,fe)}function L(N,X,se,ae){C();const pe=ae.attributes,fe=se.getAttributes(),O=X.defaultAttributeValues;for(const G in fe){const ie=fe[G];if(ie.location>=0){let Me=pe[G];if(Me===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ae=ne.type,Be=ne.bytesPerElement,te=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Dh;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ne=ue.stride,ke=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<ie.locationSize;He++)x(ie.location+He,ue.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<ie.locationSize;He++)y(ie.location+He);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let He=0;He<ie.locationSize;He++)P(ie.location+He,U/ie.locationSize,Ae,Se,Ne*Be,(ke+U/ie.locationSize*He)*Be,te)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)x(ie.location+ue,Me.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ie.locationSize;ue++)y(ie.location+ue);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ue=0;ue<ie.locationSize;ue++)P(ie.location+ue,U/ie.locationSize,Ae,Se,U*Be,U/ie.locationSize*ue*Be,te)}}else if(O!==void 0){const Se=O[G];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ie.location,Se);break;case 3:o.vertexAttrib3fv(ie.location,Se);break;case 4:o.vertexAttrib4fv(ie.location,Se);break;default:o.vertexAttrib1fv(ie.location,Se)}}}}z()}function B(){J();for(const N in r){const X=r[N];for(const se in X){const ae=X[se];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete X[se]}delete r[N]}}function H(N){if(r[N.id]===void 0)return;const X=r[N.id];for(const se in X){const ae=X[se];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete X[se]}delete r[N.id]}function F(N){for(const X in r){const se=r[X];if(se[N.id]===void 0)continue;const ae=se[N.id];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete se[N.id]}}function J(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function kE(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let b=0;for(let R=0;R<_;R++)b+=v[R];i.update(b,r,1)}function m(p,v,_,S){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<p.length;R++)d(p[R],v[R],S[R]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=v[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function XE(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ai&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const J=F===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!J)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:z,maxVaryings:P,maxFragmentUniforms:L,maxSamples:B,samples:H}}function jE(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Tr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const b=_.length!==0||S||r!==0||l;return l=S,r=_.length,b},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,b){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||u&&!y)u?v(null):p();else{const z=u?0:r,P=z*4;let L=x.clippingState||null;m.value=L,L=v(R,S,P,b);for(let B=0;B!==P;++B)L[B]=i[B];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,S,b,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=b+C*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,L=b;P!==C;++P,L+=4)d.copy(_[P]).applyMatrix4(z,h),d.normal.toArray(y,L),y[L+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function qE(o){let t=new WeakMap;function i(d,h){return h===kd?d.mapping=Nr:h===Xd&&(d.mapping=Ns),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===kd||h===Xd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new av(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const $a=4,a_=[.125,.215,.35,.446,.526,.582],Rr=20,WE=256,zo=new lv,r_=new It;let Ad=null,Rd=0,wd=0,Cd=!1;const YE=new re;class s_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=YE}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,wd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:ga,format:Ai,colorSpace:Us,depthBuffer:!1},l=o_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZE(u)),this._blurMaterial=QE(u,t,i),this._ggxMaterial=KE(u,t,i)}return l}_compileMaterial(t){const i=new xa(new wi,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,r,l,u){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,b=_.toneMapping;_.getClearColor(r_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xa(new Zo,new J_({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const z=t.background;z?z.isColor&&(y.color.copy(z),t.background=null,x=!0):(y.color.copy(r_),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const B=this._cubeSize;As(l,L*B,P>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=b,_.autoClear=S,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Nr||t.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,zo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,b=_*S,{_lodMax:R}=this,C=this._sizeLods[r],y=3*C*(r>R-$a?r-R+$a:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=R-i,As(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(h,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-r,As(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(h,zo)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Rr-1),C=u/R,y=isFinite(u)?1+Math.floor(v*C):Rr;y>Rr&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const x=[];let z=0;for(let F=0;F<Rr;++F){const J=F/C,w=Math.exp(-J*J/2);x.push(w),F===0?z+=w:F<y&&(z+=2*w)}for(let F=0;F<x.length;F++)x[F]=x[F]/z;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=R,S.mipInt.value=P-r;const L=this._sizeLods[l],B=3*L*(l>P-$a?l-P+$a:0),H=4*(this._cubeSize-L);As(i,B,H,3*L,2*L),m.setRenderTarget(i),m.render(_,zo)}}function ZE(o){const t=[],i=[],r=[];let l=o;const u=o-$a+1+a_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-$a?m=a_[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],b=6,R=6,C=3,y=2,x=1,z=new Float32Array(C*R*b),P=new Float32Array(y*R*b),L=new Float32Array(x*R*b);for(let H=0;H<b;H++){const F=H%3*2/3-1,J=H>2?0:-1,w=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];z.set(w,C*R*H),P.set(S,y*R*H);const N=[H,H,H,H,H,H];L.set(N,x*R*H)}const B=new wi;B.setAttribute("position",new Ri(z,C)),B.setAttribute("uv",new Ri(P,y)),B.setAttribute("faceIndex",new Ri(L,x)),r.push(new xa(B,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function o_(o,t,i){const r=new Bi(o,t,i);return r.texture.mapping=Hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function KE(o,t,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function QE(o,t,i){const r=new Float32Array(Rr),l=new re(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function l_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function c_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JE(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===kd||m===Xd,v=m===Nr||m===Ns;if(p||v){let _=t.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new s_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new s_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function $E(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ko("WebGLRenderer: "+r+" extension not supported."),l}}}function eT(o,t,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(_){const S=[],b=_.index,R=_.attributes.position;let C=0;if(b!==null){const z=b.array;C=b.version;for(let P=0,L=z.length;P<L;P+=3){const B=z[P+0],H=z[P+1],F=z[P+2];S.push(B,H,H,F,F,B)}}else if(R!==void 0){const z=R.array;C=R.version;for(let P=0,L=z.length/3-1;P<L;P+=3){const B=P+0,H=P+1,F=P+2;S.push(B,H,H,F,F,B)}}else return;const y=new(W_(S)?ev:$_)(S,1);y.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const b=_.index;b!==null&&S.version<b.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function tT(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(r,b,u,S*d),i.update(b,r,1)}function p(S,b,R){R!==0&&(o.drawElementsInstanced(r,b,u,S*d,R),i.update(b,r,R))}function v(S,b,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,S,0,R);let y=0;for(let x=0;x<R;x++)y+=b[x];i.update(y,r,1)}function _(S,b,R,C){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,b[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,u,S,0,C,0,R);let x=0;for(let z=0;z<R;z++)x+=b[z]*C[z];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function nT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iT(o,t,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let N=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var b=N;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let B=h.attributes.position.count*L,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*H*4*_),J=new Y_(F,B,H,_);J.type=zi,J.needsUpdate=!0;const w=L*4;for(let X=0;X<_;X++){const se=x[X],ae=z[X],pe=P[X],fe=B*H*4*X;for(let O=0;O<se.count;O++){const G=O*w;R===!0&&(l.fromBufferAttribute(se,O),F[fe+G+0]=l.x,F[fe+G+1]=l.y,F[fe+G+2]=l.z,F[fe+G+3]=0),C===!0&&(l.fromBufferAttribute(ae,O),F[fe+G+4]=l.x,F[fe+G+5]=l.y,F[fe+G+6]=l.z,F[fe+G+7]=0),y===!0&&(l.fromBufferAttribute(pe,O),F[fe+G+8]=l.x,F[fe+G+9]=l.y,F[fe+G+10]=l.z,F[fe+G+11]=pe.itemSize===4?l.w:1)}}S={count:_,texture:J,size:new kt(B,H)},r.set(h,S),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function aT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const rT={[U_]:"LINEAR_TONE_MAPPING",[L_]:"REINHARD_TONE_MAPPING",[O_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[F_]:"AGX_TONE_MAPPING",[I_]:"NEUTRAL_TONE_MAPPING",[z_]:"CUSTOM_TONE_MAPPING"};function sT(o,t,i,r,l){const u=new Bi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Bi(t,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),h=new wi;h.setAttribute("position",new ma([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ma([0,2,0,0,2,0],2));const m=new tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xa(h,m),v=new lv(-1,1,1,-1,0,1);let _=null,S=null,b=!1,R,C=null,y=[],x=!1;this.setSize=function(z,P){u.setSize(z,P),d.setSize(z,P);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(z,P)}},this.setEffects=function(z){y=z,x=y.length>0&&y[0].isRenderPass===!0;const P=u.width,L=u.height;for(let B=0;B<y.length;B++){const H=y[B];H.setSize&&H.setSize(P,L)}},this.begin=function(z,P){if(b||z.toneMapping===Ii&&y.length===0)return!1;if(C=P,P!==null){const L=P.width,B=P.height;(u.width!==L||u.height!==B)&&this.setSize(L,B)}return x===!1&&z.setRenderTarget(u),R=z.toneMapping,z.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(z,P){z.toneMapping=R,b=!0;let L=u,B=d;for(let H=0;H<y.length;H++){const F=y[H];if(F.enabled!==!1&&(F.render(z,B,L,P),F.needsSwap!==!1)){const J=L;L=B,B=J}}if(_!==z.outputColorSpace||S!==z.toneMapping){_=z.outputColorSpace,S=z.toneMapping,m.defines={},bt.getTransfer(_)===Ft&&(m.defines.SRGB_TRANSFER="");const H=rT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(C),z.render(p,v),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const uv=new Fn,Rh=new Xo(1,1),fv=new Y_,dv=new NM,hv=new iv,u_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=u_[l];if(u===void 0&&(u=new Float32Array(l),u_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Xc(o,t){let i=f_[t];i===void 0&&(i=new Int32Array(t),f_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function fT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;p_.set(r),o.uniformMatrix2fv(this.addr,!1,p_),gn(i,r)}}function dT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;h_.set(r),o.uniformMatrix3fv(this.addr,!1,h_),gn(i,r)}}function hT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;d_.set(r),o.uniformMatrix4fv(this.addr,!1,d_),gn(i,r)}}function pT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function vT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function MT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Ih:Fh,u=Rh):u=uv,i.setTexture2D(t||u,l)}function bT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||dv,l)}function ET(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||hv,l)}function TT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||fv,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return ST;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(o,t){o.uniform1fv(this.addr,t)}function wT(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function CT(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function NT(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function DT(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function UT(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function LT(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,t){o.uniform1iv(this.addr,t)}function PT(o,t){o.uniform2iv(this.addr,t)}function zT(o,t){o.uniform3iv(this.addr,t)}function FT(o,t){o.uniform4iv(this.addr,t)}function IT(o,t){o.uniform1uiv(this.addr,t)}function BT(o,t){o.uniform2uiv(this.addr,t)}function HT(o,t){o.uniform3uiv(this.addr,t)}function GT(o,t){o.uniform4uiv(this.addr,t)}function VT(o,t,i){const r=this.cache,l=t.length,u=Xc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Rh:d=uv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function kT(o,t,i){const r=this.cache,l=t.length,u=Xc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||dv,u[d])}function XT(o,t,i){const r=this.cache,l=t.length,u=Xc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||hv,u[d])}function jT(o,t,i){const r=this.cache,l=t.length,u=Xc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||fv,u[d])}function qT(o){switch(o){case 5126:return RT;case 35664:return wT;case 35665:return CT;case 35666:return NT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return FT;case 5125:return IT;case 36294:return BT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return jT}}class WT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class YT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function m_(o,t){o.seq.push(t),o.map[t.id]=t}function KT(o,t,i){const r=o.name,l=r.length;for(Nd.lastIndex=0;;){const u=Nd.exec(r),d=Nd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){m_(i,p===void 0?new WT(h,o,t):new YT(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new ZT(h),m_(i,_)),i=_}}}class Pc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);KT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function g_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const QT=37297;let JT=0;function $T(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const __=new ut;function eA(o){bt._getMatrix(__,bt.workingColorSpace,o);const t=`mat3( ${__.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case Fc:return[t,"LinearTransferOETF"];case Ft:return[t,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function v_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+$T(o.getShaderSource(t),h)}else return u}function tA(o,t){const i=eA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nA={[U_]:"Linear",[L_]:"Reinhard",[O_]:"Cineon",[P_]:"ACESFilmic",[F_]:"AgX",[I_]:"Neutral",[z_]:"Custom"};function iA(o,t){const i=nA[t];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new re;function aA(){bt.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function sA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function oA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Bo(o){return o!==""}function x_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(o){return o.replace(lA,uA)}const cA=new Map;function uA(o,t){let i=ft[t];if(i===void 0){const r=cA.get(t);if(r!==void 0)i=ft[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wh(i)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(o){return o.replace(fA,dA)}function dA(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const hA={[Nc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function pA(o){return hA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mA={[Nr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function gA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":mA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _A={[Ns]:"ENVMAP_MODE_REFRACTION"};function vA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_A[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xA={[D_]:"ENVMAP_BLENDING_MULTIPLY",[uM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function SA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":xA[o.combine]||"ENVMAP_BLENDING_NONE"}function yA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function MA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=pA(i),p=gA(i),v=vA(i),_=SA(i),S=yA(i),b=rA(i),R=sA(u),C=l.createProgram();let y,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ii?iA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),aA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=wh(d),d=x_(d,i),d=S_(d,i),h=wh(h),h=x_(h,i),h=S_(h,i),d=y_(d),h=y_(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=z+y+d,L=z+x+h,B=g_(l,l.VERTEX_SHADER,P),H=g_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(X){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(H)||"",fe=se.trim(),O=ae.trim(),G=pe.trim();let ie=!0,Me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,H);else{const Se=v_(l,B,"vertex"),U=v_(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?rt("WebGLProgram: Program Info Log:",fe):(O===""||G==="")&&(Me=!1);Me&&(X.diagnostics={runnable:ie,programLog:fe,vertexShader:{log:O,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(H),J=new Pc(l,C),w=oA(l,C)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(C,QT)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=H,this}let bA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new TA(t),i.set(t,r)),r}}class TA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function AA(o,t,i,r,l,u,d){const h=new K_,m=new EA,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,N,X,se,ae){const pe=se.fog,fe=ae.geometry,O=w.isMeshStandardMaterial?se.environment:null,G=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),ie=G&&G.mapping===Hc?G.image.height:null,Me=R[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&rt("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let _e,Ae,Be,te;if(Me){const Mt=Pi[Me];_e=Mt.vertexShader,Ae=Mt.fragmentShader}else _e=w.vertexShader,Ae=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const ue=o.getRenderTarget(),Ne=o.state.buffers.depth.getReversed(),ke=ae.isInstancedMesh===!0,He=ae.isBatchedMesh===!0,dt=!!w.map,Qt=!!w.matcap,gt=!!G,ht=!!w.aoMap,Rt=!!w.lightMap,st=!!w.bumpMap,Jt=!!w.normalMap,V=!!w.displacementMap,Yt=!!w.emissiveMap,yt=!!w.metalnessMap,Dt=!!w.roughnessMap,We=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,q=w.iridescence>0,he=w.sheen>0,xe=w.transmission>0,ce=We&&!!w.anisotropyMap,Ze=D&&!!w.clearcoatMap,we=D&&!!w.clearcoatNormalMap,Xe=D&&!!w.clearcoatRoughnessMap,tt=q&&!!w.iridescenceMap,be=q&&!!w.iridescenceThicknessMap,Ee=he&&!!w.sheenColorMap,Fe=he&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ce=!!w.specularColorMap,lt=!!w.specularIntensityMap,j=xe&&!!w.transmissionMap,Ue=xe&&!!w.thicknessMap,Te=!!w.gradientMap,ze=!!w.alphaMap,ye=w.alphaTest>0,ve=!!w.alphaHash,Re=!!w.extensions;let nt=Ii;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Lt={shaderID:Me,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:He,batchingColor:He&&ae._colorsTexture!==null,instancing:ke,instancingColor:ke&&ae.instanceColor!==null,instancingMorph:ke&&ae.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:Qt,envMap:gt,envMapMode:gt&&G.mapping,envMapCubeUVHeight:ie,aoMap:ht,lightMap:Rt,bumpMap:st,normalMap:Jt,displacementMap:V,emissiveMap:Yt,normalMapObjectSpace:Jt&&w.normalMapType===mM,normalMapTangentSpace:Jt&&w.normalMapType===pM,metalnessMap:yt,roughnessMap:Dt,anisotropy:We,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:lt,transmission:xe,transmissionMap:j,thicknessMap:Ue,gradientMap:Te,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:ve,combine:w.combine,mapUv:dt&&C(w.map.channel),aoMapUv:ht&&C(w.aoMap.channel),lightMapUv:Rt&&C(w.lightMap.channel),bumpMapUv:st&&C(w.bumpMap.channel),normalMapUv:Jt&&C(w.normalMap.channel),displacementMapUv:V&&C(w.displacementMap.channel),emissiveMapUv:Yt&&C(w.emissiveMap.channel),metalnessMapUv:yt&&C(w.metalnessMap.channel),roughnessMapUv:Dt&&C(w.roughnessMap.channel),anisotropyMapUv:ce&&C(w.anisotropyMap.channel),clearcoatMapUv:Ze&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(w.sheenRoughnessMap.channel),specularMapUv:Pe&&C(w.specularMap.channel),specularColorMapUv:Ce&&C(w.specularColorMap.channel),specularIntensityMapUv:lt&&C(w.specularIntensityMap.channel),transmissionMapUv:j&&C(w.transmissionMap.channel),thicknessMapUv:Ue&&C(w.thicknessMap.channel),alphaMapUv:ze&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Jt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(dt||ze),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ne,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fa,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)N.push(X),N.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(z(N,w),P(N,w),N.push(o.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function z(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function L(w){const N=R[w.type];let X;if(N){const se=Pi[N];X=kM.clone(se.uniforms)}else X=w.uniforms;return X}function B(w,N){let X=_.get(N);return X!==void 0?++X.usedTimes:(X=new MA(o,N,w,u),v.push(X),_.set(N,X)),X}function H(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function F(w){m.remove(w)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:B,releaseProgram:H,releaseShaderCache:F,programs:v,dispose:J}}function RA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function wA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function b_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function E_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(_,S,b,R,C,y){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:b,groupOrder:R,renderOrder:_.renderOrder,z:C,group:y},o[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=b,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=C,x.group=y),t++,x}function h(_,S,b,R,C,y){const x=d(_,S,b,R,C,y);b.transmission>0?r.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(_,S,b,R,C,y){const x=d(_,S,b,R,C,y);b.transmission>0?r.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||wA),r.length>1&&r.sort(S||b_),l.length>1&&l.sort(S||b_)}function v(){for(let _=t,S=o.length;_<S;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function CA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new E_,o.set(r,[d])):l>=u.length?(d=new E_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function NA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new It};break;case"SpotLight":i={position:new re,direction:new re,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new It,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new It,groundColor:new It};break;case"RectAreaLight":i={color:new It,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function DA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let UA=0;function LA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function OA(o){const t=new NA,i=DA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new rn,d=new rn;function h(p){let v=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,R=0,C=0,y=0,x=0,z=0,P=0,L=0,B=0,H=0,F=0;p.sort(LA);for(let w=0,N=p.length;w<N;w++){const X=p[w],se=X.color,ae=X.intensity,pe=X.distance;let fe=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ds?fe=X.shadow.map.texture:fe=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=se.r*ae,_+=se.g*ae,S+=se.b*ae;else if(X.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(X.sh.coefficients[O],ae);F++}else if(X.isDirectionalLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.directionalShadow[b]=ie,r.directionalShadowMap[b]=fe,r.directionalShadowMatrix[b]=X.shadow.matrix,z++}r.directional[b]=O,b++}else if(X.isSpotLight){const O=t.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(se).multiplyScalar(ae),O.distance=pe,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,r.spot[C]=O;const G=X.shadow;if(X.map&&(r.spotLightMap[B]=X.map,B++,G.updateMatrices(X),X.castShadow&&H++),r.spotLightMatrix[C]=G.matrix,X.castShadow){const ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,r.spotShadow[C]=ie,r.spotShadowMap[C]=fe,L++}C++}else if(X.isRectAreaLight){const O=t.get(X);O.color.copy(se).multiplyScalar(ae),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=O,y++}else if(X.isPointLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const G=X.shadow,ie=i.get(X);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,ie.shadowCameraNear=G.camera.near,ie.shadowCameraFar=G.camera.far,r.pointShadow[R]=ie,r.pointShadowMap[R]=fe,r.pointShadowMatrix[R]=X.shadow.matrix,P++}r.point[R]=O,R++}else if(X.isHemisphereLight){const O=t.get(X);O.skyColor.copy(X.color).multiplyScalar(ae),O.groundColor.copy(X.groundColor).multiplyScalar(ae),r.hemi[x]=O,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==b||J.pointLength!==R||J.spotLength!==C||J.rectAreaLength!==y||J.hemiLength!==x||J.numDirectionalShadows!==z||J.numPointShadows!==P||J.numSpotShadows!==L||J.numSpotMaps!==B||J.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+B-H,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,J.directionalLength=b,J.pointLength=R,J.spotLength=C,J.rectAreaLength=y,J.hemiLength=x,J.numDirectionalShadows=z,J.numPointShadows=P,J.numSpotShadows=L,J.numSpotMaps=B,J.numLightProbes=F,r.version=UA++)}function m(p,v){let _=0,S=0,b=0,R=0,C=0;const y=v.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const P=p[x];if(P.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),_++}else if(P.isSpotLight){const L=r.spot[b];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),b++}else if(P.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),d.identity(),u.copy(P.matrixWorld),u.premultiply(y),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function T_(o){const t=new OA(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function PA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new T_(o),t.set(l,[h])):u>=d.length?(h=new T_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],BA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],A_=new rn,Fo=new re,Dd=new re;function HA(o,t,i){let r=new rv;const l=new kt,u=new kt,d=new an,h=new nb,m=new ib,p={},v=i.maxTextureSize,_={[er]:jn,[jn]:er,[fa]:fa},S=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:zA,fragmentShader:FA}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const R=new wi;R.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xa(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let x=this.type;this.render=function(H,F,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===jy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Nc);const w=o.getRenderTarget(),N=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),se=o.state;se.setBlending(ha),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=x!==this.type;ae&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=H.length;pe<fe;pe++){const O=H[pe],G=O.shadow;if(G===void 0){rt("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ie=G.getFrameExtents();if(l.multiply(ie),u.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ie.x),l.x=u.x*ie.x,G.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ie.y),l.y=u.y*ie.y,G.mapSize.y=u.y)),G.map===null||ae===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Io){if(O.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bi(l.x,l.y,{format:Ds,type:ga,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new Xo(l.x,l.y,zi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=_a,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{O.isPointLight?(G.map=new av(l.x),G.map.depthTexture=new eb(l.x,Hi)):(G.map=new Bi(l.x,l.y),G.map.depthTexture=new Xo(l.x,l.y,Hi)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=_a;const Se=o.state.buffers.depth.getReversed();this.type===Nc?(G.map.depthTexture.compareFunction=Se?Ih:Fh,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(Se);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),se.viewport(d)}if(O.isPointLight){const U=G.camera,ne=G.matrix,_e=O.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Fo.setFromMatrixPosition(O.matrixWorld),U.position.copy(Fo),Dd.copy(U.position),Dd.add(IA[Se]),U.up.copy(BA[Se]),U.lookAt(Dd),U.updateMatrixWorld(),ne.makeTranslation(-Fo.x,-Fo.y,-Fo.z),A_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(A_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(O);r=G.getFrustum(),L(F,J,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Io&&z(G,J),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(w,N,X)};function z(H,F){const J=t.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Bi(l.x,l.y,{format:Ds,type:ga})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,J,S,C,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,J,b,C,null)}function P(H,F,J,w){let N=null;const X=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)N=X;else if(N=J.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=N.uuid,ae=F.uuid;let pe=p[se];pe===void 0&&(pe={},p[se]=pe);let fe=pe[ae];fe===void 0&&(fe=N.clone(),pe[ae]=fe,F.addEventListener("dispose",B)),N=fe}if(N.visible=F.visible,N.wireframe=F.wireframe,w===Io?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:_[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,J.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const se=o.properties.get(N);se.light=J}return N}function L(H,F,J,w,N){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===Io)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const ae=t.update(H),pe=H.material;if(Array.isArray(pe)){const fe=ae.groups;for(let O=0,G=fe.length;O<G;O++){const ie=fe[O],Me=pe[ie.materialIndex];if(Me&&Me.visible){const Se=P(H,Me,w,N);H.onBeforeShadow(o,H,F,J,ae,Se,ie),o.renderBufferDirect(J,null,ae,Se,H,ie),H.onAfterShadow(o,H,F,J,ae,Se,ie)}}}else if(pe.visible){const fe=P(H,pe,w,N);H.onBeforeShadow(o,H,F,J,ae,fe,null),o.renderBufferDirect(J,null,ae,fe,H,null),H.onAfterShadow(o,H,F,J,ae,fe,null)}}const se=H.children;for(let ae=0,pe=se.length;ae<pe;ae++)L(se[ae],F,J,w,N)}function B(H){H.target.removeEventListener("dispose",B);for(const J in p){const w=p[J],N=H.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const GA={[zd]:Fd,[Id]:Gd,[Bd]:Vd,[Cs]:Hd,[Fd]:zd,[Gd]:Id,[Vd]:Bd,[Hd]:Cs};function VA(o,t){function i(){let j=!1;const Ue=new an;let Te=null;const ze=new an(0,0,0,0);return{setMask:function(ye){Te!==ye&&!j&&(o.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){j=ye},setClear:function(ye,ve,Re,nt,Lt){Lt===!0&&(ye*=nt,ve*=nt,Re*=nt),Ue.set(ye,ve,Re,nt),ze.equals(Ue)===!1&&(o.clearColor(ye,ve,Re,nt),ze.copy(Ue))},reset:function(){j=!1,Te=null,ze.set(-1,0,0,0)}}}function r(){let j=!1,Ue=!1,Te=null,ze=null,ye=null;return{setReversed:function(ve){if(Ue!==ve){const Re=t.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ue=ve;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Ue},setTest:function(ve){ve?ue(o.DEPTH_TEST):Ne(o.DEPTH_TEST)},setMask:function(ve){Te!==ve&&!j&&(o.depthMask(ve),Te=ve)},setFunc:function(ve){if(Ue&&(ve=GA[ve]),ze!==ve){switch(ve){case zd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Id:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case Gd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ve}},setLocked:function(ve){j=ve},setClear:function(ve){ye!==ve&&(Ue&&(ve=1-ve),o.clearDepth(ve),ye=ve)},reset:function(){j=!1,Te=null,ze=null,ye=null,Ue=!1}}}function l(){let j=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Lt=null;return{setTest:function(Mt){j||(Mt?ue(o.STENCIL_TEST):Ne(o.STENCIL_TEST))},setMask:function(Mt){Ue!==Mt&&!j&&(o.stencilMask(Mt),Ue=Mt)},setFunc:function(Mt,Nn,gi){(Te!==Mt||ze!==Nn||ye!==gi)&&(o.stencilFunc(Mt,Nn,gi),Te=Mt,ze=Nn,ye=gi)},setOp:function(Mt,Nn,gi){(ve!==Mt||Re!==Nn||nt!==gi)&&(o.stencilOp(Mt,Nn,gi),ve=Mt,Re=Nn,nt=gi)},setLocked:function(Mt){j=Mt},setClear:function(Mt){Lt!==Mt&&(o.clearStencil(Mt),Lt=Mt)},reset:function(){j=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Lt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,b=[],R=null,C=!1,y=null,x=null,z=null,P=null,L=null,B=null,H=null,F=new It(0,0,0),J=0,w=!1,N=null,X=null,se=null,ae=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ie)[1]),O=G>=1):ie.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),O=G>=2);let Me=null,Se={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),_e=new an().fromArray(U),Ae=new an().fromArray(ne);function Be(j,Ue,Te,ze){const ye=new Uint8Array(4),ve=o.createTexture();o.bindTexture(j,ve),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Ue+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return ve}const te={};te[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(Cs),st(!1),Jt(Dg),ue(o.CULL_FACE),ht(ha);function ue(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function Ne(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function ke(j,Ue){return _[j]!==Ue?(o.bindFramebuffer(j,Ue),_[j]=Ue,j===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ue),j===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function He(j,Ue){let Te=b,ze=!1;if(j){Te=S.get(Ue),Te===void 0&&(Te=[],S.set(Ue,Te));const ye=j.textures;if(Te.length!==ye.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Re=ye.length;ve<Re;ve++)Te[ve]=o.COLOR_ATTACHMENT0+ve;Te.length=ye.length,ze=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Te)}function dt(j){return R!==j?(o.useProgram(j),R=j,!0):!1}const Qt={[Ar]:o.FUNC_ADD,[Wy]:o.FUNC_SUBTRACT,[Yy]:o.FUNC_REVERSE_SUBTRACT};Qt[Zy]=o.MIN,Qt[Ky]=o.MAX;const gt={[Qy]:o.ZERO,[Jy]:o.ONE,[$y]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[rM]:o.SRC_ALPHA_SATURATE,[iM]:o.DST_COLOR,[tM]:o.DST_ALPHA,[eM]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[aM]:o.ONE_MINUS_DST_COLOR,[nM]:o.ONE_MINUS_DST_ALPHA,[sM]:o.CONSTANT_COLOR,[oM]:o.ONE_MINUS_CONSTANT_COLOR,[lM]:o.CONSTANT_ALPHA,[cM]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(j,Ue,Te,ze,ye,ve,Re,nt,Lt,Mt){if(j===ha){C===!0&&(Ne(o.BLEND),C=!1);return}if(C===!1&&(ue(o.BLEND),C=!0),j!==qy){if(j!==y||Mt!==w){if((x!==Ar||L!==Ar)&&(o.blendEquation(o.FUNC_ADD),x=Ar,L=Ar),Mt)switch(j){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ld:o.blendFunc(o.ONE,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",j);break}else switch(j){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ld:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ug:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",j);break}z=null,P=null,B=null,H=null,F.set(0,0,0),J=0,y=j,w=Mt}return}ye=ye||Ue,ve=ve||Te,Re=Re||ze,(Ue!==x||ye!==L)&&(o.blendEquationSeparate(Qt[Ue],Qt[ye]),x=Ue,L=ye),(Te!==z||ze!==P||ve!==B||Re!==H)&&(o.blendFuncSeparate(gt[Te],gt[ze],gt[ve],gt[Re]),z=Te,P=ze,B=ve,H=Re),(nt.equals(F)===!1||Lt!==J)&&(o.blendColor(nt.r,nt.g,nt.b,Lt),F.copy(nt),J=Lt),y=j,w=!1}function Rt(j,Ue){j.side===fa?Ne(o.CULL_FACE):ue(o.CULL_FACE);let Te=j.side===jn;Ue&&(Te=!Te),st(Te),j.blending===Rs&&j.transparent===!1?ht(ha):ht(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const ze=j.stencilWrite;h.setTest(ze),ze&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Yt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(j){N!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),N=j)}function Jt(j){j!==ky?(ue(o.CULL_FACE),j!==X&&(j===Dg?o.cullFace(o.BACK):j===Xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ne(o.CULL_FACE),X=j}function V(j){j!==se&&(O&&o.lineWidth(j),se=j)}function Yt(j,Ue,Te){j?(ue(o.POLYGON_OFFSET_FILL),(ae!==Ue||pe!==Te)&&(o.polygonOffset(Ue,Te),ae=Ue,pe=Te)):Ne(o.POLYGON_OFFSET_FILL)}function yt(j){j?ue(o.SCISSOR_TEST):Ne(o.SCISSOR_TEST)}function Dt(j){j===void 0&&(j=o.TEXTURE0+fe-1),Me!==j&&(o.activeTexture(j),Me=j)}function We(j,Ue,Te){Te===void 0&&(Me===null?Te=o.TEXTURE0+fe-1:Te=Me);let ze=Se[Te];ze===void 0&&(ze={type:void 0,texture:void 0},Se[Te]=ze),(ze.type!==j||ze.texture!==Ue)&&(Me!==Te&&(o.activeTexture(Te),Me=Te),o.bindTexture(j,Ue||te[j]),ze.type=j,ze.texture=Ue)}function D(){const j=Se[Me];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(j){At("WebGLState:",j)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(j){At("WebGLState:",j)}}function he(){try{o.texSubImage2D(...arguments)}catch(j){At("WebGLState:",j)}}function xe(){try{o.texSubImage3D(...arguments)}catch(j){At("WebGLState:",j)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(j){At("WebGLState:",j)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(j){At("WebGLState:",j)}}function we(){try{o.texStorage2D(...arguments)}catch(j){At("WebGLState:",j)}}function Xe(){try{o.texStorage3D(...arguments)}catch(j){At("WebGLState:",j)}}function tt(){try{o.texImage2D(...arguments)}catch(j){At("WebGLState:",j)}}function be(){try{o.texImage3D(...arguments)}catch(j){At("WebGLState:",j)}}function Ee(j){_e.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function Fe(j){Ae.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Ae.copy(j))}function Pe(j,Ue){let Te=p.get(Ue);Te===void 0&&(Te=new WeakMap,p.set(Ue,Te));let ze=Te.get(j);ze===void 0&&(ze=o.getUniformBlockIndex(Ue,j.name),Te.set(j,ze))}function Ce(j,Ue){const ze=p.get(Ue).get(j);m.get(Ue)!==ze&&(o.uniformBlockBinding(Ue,ze,j.__bindingPointIndex),m.set(Ue,ze))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Me=null,Se={},_={},S=new WeakMap,b=[],R=null,C=!1,y=null,x=null,z=null,P=null,L=null,B=null,H=null,F=new It(0,0,0),J=0,w=!1,N=null,X=null,se=null,ae=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Ne,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:Rt,setFlipSided:st,setCullFace:Jt,setLineWidth:V,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:Dt,bindTexture:We,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Pe,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:Xe,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ee,viewport:Fe,reset:lt}}function kA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,v=new WeakMap;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return b?new OffscreenCanvas(D,M):Bc("canvas")}function C(D,M,q){let he=1;const xe=We(D);if((xe.width>q||xe.height>q)&&(he=q/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ze=Math.floor(he*xe.height);_===void 0&&(_=R(ce,Ze));const we=M?R(ce,Ze):_;return we.width=ce,we.height=Ze,we.getContext("2d").drawImage(D,0,0,ce,Ze),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ze+")."),we}else return"data"in D&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,M,q,he,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(q===o.FLOAT&&(ce=o.R32F),q===o.HALF_FLOAT&&(ce=o.R16F),q===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.R8UI),q===o.UNSIGNED_SHORT&&(ce=o.R16UI),q===o.UNSIGNED_INT&&(ce=o.R32UI),q===o.BYTE&&(ce=o.R8I),q===o.SHORT&&(ce=o.R16I),q===o.INT&&(ce=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ce=o.RG32F),q===o.HALF_FLOAT&&(ce=o.RG16F),q===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),q===o.UNSIGNED_INT&&(ce=o.RG32UI),q===o.BYTE&&(ce=o.RG8I),q===o.SHORT&&(ce=o.RG16I),q===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),q===o.UNSIGNED_INT&&(ce=o.RGB32UI),q===o.BYTE&&(ce=o.RGB8I),q===o.SHORT&&(ce=o.RGB16I),q===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),q===o.BYTE&&(ce=o.RGBA8I),q===o.SHORT&&(ce=o.RGBA16I),q===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ze=xe?Fc:bt.getTransfer(he);q===o.FLOAT&&(ce=o.RGBA32F),q===o.HALF_FLOAT&&(ce=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ce=Ze===Ft?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function L(D,M){let q;return D?M===null||M===Hi||M===Vo?q=o.DEPTH24_STENCIL8:M===zi?q=o.DEPTH32F_STENCIL8:M===Go&&(q=o.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===Vo?q=o.DEPTH_COMPONENT24:M===zi?q=o.DEPTH_COMPONENT32F:M===Go&&(q=o.DEPTH_COMPONENT16),q}function B(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function H(D){const M=D.target;M.removeEventListener("dispose",H),J(M),M.isVideoTexture&&v.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),N(M)}function J(D){const M=r.get(D);if(M.__webglInit===void 0)return;const q=D.source,he=S.get(q);if(he){const xe=he[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(D),Object.keys(he).length===0&&S.delete(q)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const q=D.source,he=S.get(q);delete he[M.__cacheKey],d.memory.textures--}function N(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let xe=0;xe<M.__webglFramebuffer[he].length;xe++)o.deleteFramebuffer(M.__webglFramebuffer[he][xe]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let he=0,xe=q.length;he<xe;he++){const ce=r.get(q[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(q[he])}r.remove(D)}let X=0;function se(){X=0}function ae(){const D=X;return D>=l.maxTextures&&rt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const q=r.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const he=D.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,D,M);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function O(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function G(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function ie(D,M){const q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ue(q,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const Me={[jd]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},Se={[Cn]:o.NEAREST,[dM]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},U={[gM]:o.NEVER,[yM]:o.ALWAYS,[_M]:o.LESS,[Fh]:o.LEQUAL,[vM]:o.EQUAL,[Ih]:o.GEQUAL,[xM]:o.GREATER,[SM]:o.NOTEQUAL};function ne(D,M){if(M.type===zi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===td||M.magFilter===oc||M.magFilter===wr||M.minFilter===On||M.minFilter===td||M.minFilter===oc||M.minFilter===wr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==oc&&M.minFilter!==wr||M.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function _e(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",H));const he=M.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(M);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xe[ce].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&w(M)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return q}function Ae(D,M,q){return Math.floor(Math.floor(D/q)/M)}function Be(D,M,q,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,he,M.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ze=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ze],Fe=ce[be],Pe=Ee.start+Ee.count,Ce=Ae(Fe.start,M.width,4),lt=Ae(Ee.start,M.width,4);Fe.start<=Pe+1&&Ce===lt&&Ae(Fe.start+Fe.count-1,M.width,4)===Ce?Ee.count=Math.max(Ee.count,Fe.start+Fe.count-Ee.start):(++Ze,ce[Ze]=Fe)}ce.length=Ze+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Fe=ce[be],Pe=Math.floor(Fe.start/4),Ce=Math.ceil(Fe.count/4),lt=Pe%M.width,j=Math.floor(Pe/M.width),Ue=Ce,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,lt,j,Ue,Te,q,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function te(D,M,q){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const xe=_e(D,M),ce=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+q);const Ze=r.get(ce);if(ce.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+q);const we=bt.getPrimaries(bt.workingColorSpace),Xe=M.colorSpace===Ja?null:bt.getPrimaries(M.colorSpace),tt=M.colorSpace===Ja||we===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=C(M.image,!1,l.maxTextureSize);be=Dt(M,be);const Ee=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type);let Pe=P(M.internalFormat,Ee,Fe,M.colorSpace,M.isVideoTexture);ne(he,M);let Ce;const lt=M.mipmaps,j=M.isVideoTexture!==!0,Ue=Ze.__version===void 0||xe===!0,Te=ce.dataReady,ze=B(M,be);if(M.isDepthTexture)Pe=L(M.format===Cr,M.type),Ue&&(j?i.texStorage2D(o.TEXTURE_2D,1,Pe,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,null));else if(M.isDataTexture)if(lt.length>0){j&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)Ce=lt[ye],j?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ee,Fe,Ce.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,Ce.width,Ce.height,0,Ee,Fe,Ce.data);M.generateMipmaps=!1}else j?(Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height),Te&&Be(M,be,Ee,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,lt[0].width,lt[0].height,be.depth);for(let ye=0,ve=lt.length;ye<ve;ye++)if(Ce=lt[ye],M.format!==Ai)if(Ee!==null)if(j){if(Te)if(M.layerUpdates.size>0){const Re=i_(Ce.width,Ce.height,M.format,M.type);for(const nt of M.layerUpdates){const Lt=Ce.data.subarray(nt*Re/Ce.data.BYTES_PER_ELEMENT,(nt+1)*Re/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,nt,Ce.width,Ce.height,1,Ee,Lt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,be.depth,Ee,Ce.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,Ce.width,Ce.height,be.depth,0,Ce.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,be.depth,Ee,Fe,Ce.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,Ce.width,Ce.height,be.depth,0,Ee,Fe,Ce.data)}else{j&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)Ce=lt[ye],M.format!==Ai?Ee!==null?j?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ee,Ce.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Pe,Ce.width,Ce.height,0,Ce.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ee,Fe,Ce.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,Ce.width,Ce.height,0,Ee,Fe,Ce.data)}else if(M.isDataArrayTexture)if(j){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,be.width,be.height,be.depth),Te)if(M.layerUpdates.size>0){const ye=i_(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Re=be.data.subarray(ve*ye/be.data.BYTES_PER_ELEMENT,(ve+1)*ye/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Ee,Fe,Re)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isData3DTexture)j?(Ue&&i.texStorage3D(o.TEXTURE_3D,ze,Pe,be.width,be.height,be.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isFramebufferTexture){if(Ue)if(j)i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height);else{let ye=be.width,ve=be.height;for(let Re=0;Re<ze;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,ye,ve,0,Ee,Fe,null),ye>>=1,ve>>=1}}else if(lt.length>0){if(j&&Ue){const ye=We(lt[0]);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}for(let ye=0,ve=lt.length;ye<ve;ye++)Ce=lt[ye],j?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ee,Fe,Ce):i.texImage2D(o.TEXTURE_2D,ye,Pe,Ee,Fe,Ce);M.generateMipmaps=!1}else if(j){if(Ue){const ye=We(be);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Fe,be)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Ee,Fe,be);y(M)&&x(he),Ze.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,q){if(M.image.length!==6)return;const he=_e(D,M),xe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+q);const ce=r.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(o.TEXTURE0+q);const Ze=bt.getPrimaries(bt.workingColorSpace),we=M.colorSpace===Ja?null:bt.getPrimaries(M.colorSpace),Xe=M.colorSpace===Ja||Ze===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ve=0;ve<6;ve++)!tt&&!be?Ee[ve]=C(M.image[ve],!0,l.maxCubemapSize):Ee[ve]=be?M.image[ve].image:M.image[ve],Ee[ve]=Dt(M,Ee[ve]);const Fe=Ee[0],Pe=u.convert(M.format,M.colorSpace),Ce=u.convert(M.type),lt=P(M.internalFormat,Pe,Ce,M.colorSpace),j=M.isVideoTexture!==!0,Ue=ce.__version===void 0||he===!0,Te=xe.dataReady;let ze=B(M,Fe);ne(o.TEXTURE_CUBE_MAP,M);let ye;if(tt){j&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,Fe.width,Fe.height);for(let ve=0;ve<6;ve++){ye=Ee[ve].mipmaps;for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];M.format!==Ai?Pe!==null?j?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,nt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,Ce,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,Pe,Ce,nt.data)}}}else{if(ye=M.mipmaps,j&&Ue){ye.length>0&&ze++;const ve=We(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){j?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ee[ve].width,Ee[ve].height,Pe,Ce,Ee[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Ee[ve].width,Ee[ve].height,0,Pe,Ce,Ee[ve].data);for(let Re=0;Re<ye.length;Re++){const Lt=ye[Re].image[ve].image;j?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Lt.width,Lt.height,Pe,Ce,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Lt.width,Lt.height,0,Pe,Ce,Lt.data)}}else{j?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe,Ce,Ee[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Pe,Ce,Ee[ve]);for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];j?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Pe,Ce,nt.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Pe,Ce,nt.image[ve])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ne(D,M,q,he,xe,ce){const Ze=u.convert(q.format,q.colorSpace),we=u.convert(q.type),Xe=P(q.internalFormat,Ze,we,q.colorSpace),tt=r.get(M),be=r.get(q);if(be.__renderTarget=M,!tt.__hasExternalTextures){const Ee=Math.max(1,M.width>>ce),Fe=Math.max(1,M.height>>ce);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,Xe,Ee,Fe,M.depth,0,Ze,we,null):i.texImage2D(xe,ce,Xe,Ee,Fe,0,Ze,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,xe,be.__webglTexture,0,V(M)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=L(M.stencilBuffer,xe),Ze=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),ce,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const he=M.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ze=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Xe=P(ce.internalFormat,Ze,we,ce.colorSpace);Yt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),Xe,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),Xe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,q){const he=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M.depthTexture);const tt=u.convert(M.depthTexture.format),be=u.convert(M.depthTexture.type);let Ee;M.depthTexture.format===_a?Ee=o.DEPTH_COMPONENT24:M.depthTexture.format===Cr&&(Ee=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,M.width,M.height,0,tt,be,null)}}else fe(M.depthTexture,0);const ce=xe.__webglTexture,Ze=V(M),we=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xe=M.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===_a)Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,we,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,we,ce,0);else if(M.depthTexture.format===Cr)Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,we,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,we,ce,0);else throw new Error("Unknown depthTexture format")}function dt(D){const M=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(q){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(D,M,q){const he=r.get(D);M!==void 0&&Ne(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&dt(D)}function gt(D){const M=D.texture,q=r.get(D),he=r.get(M);D.addEventListener("dispose",F);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),ce){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)q.__webglFramebuffer[we][Xe]=o.createFramebuffer()}else q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)q.__webglFramebuffer[we]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let we=0,Xe=xe.length;we<Xe;we++){const tt=r.get(xe[we]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Yt(D)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const Xe=xe[we];q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const tt=u.convert(Xe.format,Xe.colorSpace),be=u.convert(Xe.type),Ee=P(Xe.internalFormat,tt,be,Xe.colorSpace,D.isXRRenderTarget===!0),Fe=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ne(q.__webglFramebuffer[we][Xe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe);else Ne(q.__webglFramebuffer[we],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let we=0,Xe=xe.length;we<Xe;we++){const tt=xe[we],be=r.get(tt);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ne(Ee,tt),Ne(q.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+we,Ee,0),y(tt)&&x(Ee)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),ne(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ne(q.__webglFramebuffer[Xe],D,M,o.COLOR_ATTACHMENT0,we,Xe);else Ne(q.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,we,0);y(M)&&x(we),i.unbindTexture()}D.depthBuffer&&dt(D)}function ht(D){const M=D.textures;for(let q=0,he=M.length;q<he;q++){const xe=M[q];if(y(xe)){const ce=z(D),Ze=r.get(xe).__webglTexture;i.bindTexture(ce,Ze),x(ce),i.unbindTexture()}}}const Rt=[],st=[];function Jt(D){if(D.samples>0){if(Yt(D)===!1){const M=D.textures,q=D.width,he=D.height;let xe=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=r.get(D),we=M.length>1;if(we)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=r.get(M[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,q,he,0,0,q,he,xe,o.NEAREST),m===!0&&(Rt.length=0,st.length=0,Rt.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ce),st.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,st)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=r.get(M[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Yt(D){const M=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function Dt(D,M){const q=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Us&&q!==Ja&&(bt.getTransfer(q)===Ft?(he!==Ai||xe!==mi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",q)),M}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=ie,this.rebindTextures=Qt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XA(o,t){function i(r,l=Ja){let u;const d=bt.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===k_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===H_)return o.BYTE;if(r===G_)return o.SHORT;if(r===Go)return o.UNSIGNED_SHORT;if(r===Dh)return o.INT;if(r===Hi)return o.UNSIGNED_INT;if(r===zi)return o.FLOAT;if(r===ga)return o.HALF_FLOAT;if(r===X_)return o.ALPHA;if(r===j_)return o.RGB;if(r===Ai)return o.RGBA;if(r===_a)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===q_)return o.RED;if(r===Oh)return o.RED_INTEGER;if(r===Ds)return o.RG;if(r===Ph)return o.RG_INTEGER;if(r===zh)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Lc||r===Oc)if(d===Ft)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wd||r===Yd||r===Zd||r===Kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh||r===ih)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return d===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===eh)return u.COMPRESSED_R11_EAC;if(r===th)return u.COMPRESSED_SIGNED_R11_EAC;if(r===nh)return u.COMPRESSED_RG11_EAC;if(r===ih)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ah)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ch)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ph)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_h)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vh||r===xh||r===Sh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===vh)return d===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yh||r===Mh||r===bh||r===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new ov(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Gi({vertexShader:jA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xa(new Vc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Os{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,b=null,R=null;const C=typeof XRWebGLBinding<"u",y=new WA,x={},z=i.getContextAttributes();let P=null,L=null;const B=[],H=[],F=new kt;let J=null;const w=new pi;w.viewport=new an;const N=new pi;N.viewport=new an;const X=[w,N],se=new ab;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getHandSpace()};function fe(te){const ue=H.indexOf(te.inputSource);if(ue===-1)return;const Ne=B[ue];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,p||d),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let te=0;te<B.length;te++){const ue=H[te];ue!==null&&(H[te]=null,B[te].disconnect(ue))}ae=null,pe=null,y.reset();for(const te in x)delete x[te];t.setRenderTarget(P),b=null,S=null,_=null,l=null,L=null,Be.stop(),r.isPresenting=!1,t.setPixelRatio(J),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),z.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,ke=null,He=null;z.depth&&(He=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=z.stencil?Cr:_a,ke=z.stencil?Vo:Hi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new Bi(S.textureWidth,S.textureHeight,{format:Ai,type:mi,depthTexture:new Xo(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ne={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Bi(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(te){for(let ue=0;ue<te.removed.length;ue++){const Ne=te.removed[ue],ke=H.indexOf(Ne);ke>=0&&(H[ke]=null,B[ke].disconnect(Ne))}for(let ue=0;ue<te.added.length;ue++){const Ne=te.added[ue];let ke=H.indexOf(Ne);if(ke===-1){for(let dt=0;dt<B.length;dt++)if(dt>=H.length){H.push(Ne),ke=dt;break}else if(H[dt]===null){H[dt]=Ne,ke=dt;break}if(ke===-1)break}const He=B[ke];He&&He.connect(Ne)}}const ie=new re,Me=new re;function Se(te,ue,Ne){ie.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ne.matrixWorld);const ke=ie.distanceTo(Me),He=ue.projectionMatrix.elements,dt=Ne.projectionMatrix.elements,Qt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Rt=(He[9]-1)/He[5],st=(He[8]-1)/He[0],Jt=(dt[8]+1)/dt[0],V=Qt*st,Yt=Qt*Jt,yt=ke/(-st+Jt),Dt=yt*-st;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Dt),te.translateZ(yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),He[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Qt+yt,D=gt+yt,M=V-Dt,q=Yt+(ke-Dt),he=ht*gt/D*We,xe=Rt*gt/D*We;te.projectionMatrix.makePerspective(M,q,he,xe,We,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,Ne=te.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),se.near=N.near=w.near=ue,se.far=N.far=w.far=Ne,(ae!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),ae=se.near,pe=se.far),se.layers.mask=te.layers.mask|6,w.layers.mask=se.layers.mask&3,N.layers.mask=se.layers.mask&5;const ke=te.parent,He=se.cameras;U(se,ke);for(let dt=0;dt<He.length;dt++)U(He[dt],ke);He.length===2?Se(se,w,N):se.projectionMatrix.copy(w.projectionMatrix),ne(te,se,ke)};function ne(te,ue,Ne){Ne===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Th*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let _e=null;function Ae(te,ue){if(v=ue.getViewerPose(p||d),R=ue,v!==null){const Ne=v.views;b!==null&&(t.setRenderTargetFramebuffer(L,b.framebuffer),t.setRenderTarget(L));let ke=!1;Ne.length!==se.cameras.length&&(se.cameras.length=0,ke=!0);for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt];let Rt=null;if(b!==null)Rt=b.getViewport(ht);else{const Jt=_.getViewSubImage(S,ht);Rt=Jt.viewport,gt===0&&(t.setRenderTargetTextures(L,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(L))}let st=X[gt];st===void 0&&(st=new pi,st.layers.enable(gt),st.viewport=new an,X[gt]=st),st.matrix.fromArray(ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),gt===0&&(se.matrix.copy(st.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),ke===!0&&se.cameras.push(st)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const gt=_.getDepthInformation(Ne[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&C){t.state.unbindTexture(),_=r.getBinding();for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt].camera;if(ht){let Rt=x[ht];Rt||(Rt=new ov,x[ht]=Rt);const st=_.getCameraImage(ht);Rt.sourceTexture=st}}}}for(let Ne=0;Ne<B.length;Ne++){const ke=H[Ne],He=B[Ne];ke!==null&&He!==void 0&&He.update(ke,ue,p||d)}_e&&_e(te,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),R=null}const Be=new cv;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Er=new va,ZA=new rn;function KA(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,tv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,z,P,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&b(y,x,L)):x.isMeshMatcapMaterial?(u(y,x),R(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,z,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const z=t.get(x),P=z.envMap,L=z.envMapRotation;P&&(y.envMap.value=P,Er.copy(L),Er.x*=-1,Er.y*=-1,Er.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Er)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,z,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*z,y.scale.value=P*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function b(y,x,z){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const z=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function QA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,P){const L=P.program;r.uniformBlockBinding(z,L)}function p(z,P){let L=l[z.id];L===void 0&&(R(z),L=v(z),l[z.id]=L,z.addEventListener("dispose",y));const B=P.program;r.updateUBOMapping(z,B);const H=t.render.frame;u[z.id]!==H&&(S(z),u[z.id]=H)}function v(z){const P=_();z.__bindingPointIndex=P;const L=o.createBuffer(),B=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function _(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const P=l[z.id],L=z.uniforms,B=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,F=L.length;H<F;H++){const J=Array.isArray(L[H])?L[H]:[L[H]];for(let w=0,N=J.length;w<N;w++){const X=J[w];if(b(X,H,w,B)===!0){const se=X.__offset,ae=Array.isArray(X.value)?X.value:[X.value];let pe=0;for(let fe=0;fe<ae.length;fe++){const O=ae[fe],G=C(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,se+pe,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,pe),pe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(z,P,L,B){const H=z.value,F=P+"_"+L;if(B[F]===void 0)return typeof H=="number"||typeof H=="boolean"?B[F]=H:B[F]=H.clone(),!0;{const J=B[F];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return B[F]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function R(z){const P=z.uniforms;let L=0;const B=16;for(let F=0,J=P.length;F<J;F++){const w=Array.isArray(P[F])?P[F]:[P[F]];for(let N=0,X=w.length;N<X;N++){const se=w[N],ae=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,fe=ae.length;pe<fe;pe++){const O=ae[pe],G=C(O),ie=L%B,Me=ie%G.boundary,Se=ie+Me;L+=Me,Se!==0&&B-Se<G.storage&&(L+=B-Se),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=G.storage}}}const H=L%B;return H>0&&(L+=B-H),z.__size=L,z.__cache={},this}function C(z){const P={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(P.boundary=4,P.storage=4):z.isVector2?(P.boundary=8,P.storage=8):z.isVector3||z.isColor?(P.boundary=16,P.storage=12):z.isVector4?(P.boundary=16,P.storage=16):z.isMatrix3?(P.boundary=48,P.storage=48):z.isMatrix4?(P.boundary=64,P.storage=64):z.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",z),P}function y(z){const P=z.target;P.removeEventListener("dispose",y);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function $A(){return Oi===null&&(Oi=new ZM(JA,16,16,Ds,ga),Oi.name="DFG_LUT",Oi.minFilter=On,Oi.magFilter=On,Oi.wrapS=da,Oi.wrapT=da,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class e2{constructor(t={}){const{canvas:i=MM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:b=mi}=t;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const C=b,y=new Set([zh,Ph,Oh]),x=new Set([mi,Hi,Go,Vo,Uh,Lh]),z=new Uint32Array(4),P=new Int32Array(4);let L=null,B=null;const H=[],F=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=hi;let X=0,se=0,ae=null,pe=-1,fe=null;const O=new an,G=new an;let ie=null;const Me=new It(0);let Se=0,U=i.width,ne=i.height,_e=1,Ae=null,Be=null;const te=new an(0,0,U,ne),ue=new an(0,0,U,ne);let Ne=!1;const ke=new rv;let He=!1,dt=!1;const Qt=new rn,gt=new re,ht=new an,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Jt(){return ae===null?_e:1}let V=r;function Yt(T,W){return i.getContext(T,W)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const W="webgl2";if(V=Yt(W,T),V===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw At("WebGLRenderer: "+T.message),T}let yt,Dt,We,D,M,q,he,xe,ce,Ze,we,Xe,tt,be,Ee,Fe,Pe,Ce,lt,j,Ue,Te,ze,ye;function ve(){yt=new $E(V),yt.init(),Te=new XA(V,yt),Dt=new XE(V,yt,t,Te),We=new VA(V,yt),Dt.reversedDepthBuffer&&S&&We.buffers.depth.setReversed(!0),D=new nT(V),M=new RA,q=new kA(V,yt,We,M,Dt,Te,D),he=new qE(w),xe=new JE(w),ce=new sb(V),ze=new VE(V,ce),Ze=new eT(V,ce,D,ze),we=new aT(V,Ze,ce,D),lt=new iT(V,Dt,q),Fe=new jE(M),Xe=new AA(w,he,xe,yt,Dt,ze,Fe),tt=new KA(w,M),be=new CA,Ee=new PA(yt),Ce=new GE(w,he,xe,We,we,R,m),Pe=new HA(w,we,Dt),ye=new QA(V,D,Dt,We),j=new kE(V,yt,D),Ue=new tT(V,yt,D),D.programs=Xe.programs,w.capabilities=Dt,w.extensions=yt,w.properties=M,w.renderLists=be,w.shadowMap=Pe,w.state=We,w.info=D}ve(),C!==mi&&(J=new sT(C,i.width,i.height,l,u));const Re=new YA(w,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(U,ne,!1))},this.getSize=function(T){return T.set(U,ne)},this.setSize=function(T,W,oe=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,ne=W,i.width=Math.floor(T*_e),i.height=Math.floor(W*_e),oe===!0&&(i.style.width=T+"px",i.style.height=W+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(U*_e,ne*_e).floor()},this.setDrawingBufferSize=function(T,W,oe){U=T,ne=W,_e=oe,i.width=Math.floor(T*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,W,oe,$){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,W,oe,$),We.viewport(O.copy(te).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,W,oe,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,W,oe,$),We.scissor(G.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(T){We.setScissorTest(Ne=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,oe=!0){let $=0;if(T){let Z=!1;if(ae!==null){const De=ae.texture.format;Z=y.has(De)}if(Z){const De=ae.texture.type,Ie=x.has(De),Le=Ce.getClearColor(),Ge=Ce.getClearAlpha(),je=Le.r,Je=Le.g,qe=Le.b;Ie?(z[0]=je,z[1]=Je,z[2]=qe,z[3]=Ge,V.clearBufferuiv(V.COLOR,0,z)):(P[0]=je,P[1]=Je,P[2]=qe,P[3]=Ge,V.clearBufferiv(V.COLOR,0,P))}else $|=V.COLOR_BUFFER_BIT}W&&($|=V.DEPTH_BUFFER_BIT),oe&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Ce.dispose(),be.dispose(),Ee.dispose(),M.dispose(),he.dispose(),xe.dispose(),we.dispose(),ze.dispose(),ye.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ur),Re.removeEventListener("sessionend",Is),Ci.stop()};function nt(T){T.preventDefault(),Ig("WebGLRenderer: Context Lost."),N=!0}function Lt(){Ig("WebGLRenderer: Context Restored."),N=!1;const T=D.autoReset,W=Pe.enabled,oe=Pe.autoUpdate,$=Pe.needsUpdate,Z=Pe.type;ve(),D.autoReset=T,Pe.enabled=W,Pe.autoUpdate=oe,Pe.needsUpdate=$,Pe.type=Z}function Mt(T){At("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nn(T){const W=T.target;W.removeEventListener("dispose",Nn),gi(W)}function gi(T){Ko(T),M.remove(T)}function Ko(T){const W=M.get(T).programs;W!==void 0&&(W.forEach(function(oe){Xe.releaseProgram(oe)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,oe,$,Z,De){W===null&&(W=Rt);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=tr(T,W,oe,$,Z);We.setMaterial($,Ie);let Ge=oe.index,je=1;if($.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;je=2}const Je=oe.drawRange,qe=oe.attributes.position;let $e=Je.start*je,wt=(Je.start+Je.count)*je;De!==null&&($e=Math.max($e,De.start*je),wt=Math.min(wt,(De.start+De.count)*je)),Ge!==null?($e=Math.max($e,0),wt=Math.min(wt,Ge.count)):qe!=null&&($e=Math.max($e,0),wt=Math.min(wt,qe.count));const Zt=wt-$e;if(Zt<0||Zt===1/0)return;ze.setup(Z,$,Le,oe,Ge);let jt,Ut=j;if(Ge!==null&&(jt=ce.get(Ge),Ut=Ue,Ut.setIndex(jt)),Z.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*Jt()),Ut.setMode(V.LINES)):Ut.setMode(V.TRIANGLES);else if(Z.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Jt()),Z.isLineSegments?Ut.setMode(V.LINES):Z.isLineLoop?Ut.setMode(V.LINE_LOOP):Ut.setMode(V.LINE_STRIP)}else Z.isPoints?Ut.setMode(V.POINTS):Z.isSprite&&Ut.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Ct=Z._multiDrawCounts,it=Z._multiDrawCount,Sn=Ge?ce.get(Ge).bytesPerElement:1,Vi=M.get($).currentProgram.getUniforms();for(let yn=0;yn<it;yn++)Vi.setValue(V,"_gl_DrawID",yn),Ut.render(Ke[yn]/Sn,Ct[yn])}else if(Z.isInstancedMesh)Ut.renderInstances($e,Zt,Z.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ct=Math.min(oe.instanceCount,Ke);Ut.renderInstances($e,Zt,Ct)}else Ut.render($e,Zt)};function zs(T,W,oe){T.transparent===!0&&T.side===fa&&T.forceSinglePass===!1?(T.side=jn,T.needsUpdate=!0,Or(T,W,oe),T.side=er,T.needsUpdate=!0,Or(T,W,oe),T.side=fa):Or(T,W,oe)}this.compile=function(T,W,oe=null){oe===null&&(oe=T),B=Ee.get(oe),B.init(W),F.push(B),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),T!==oe&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),B.setupLights();const $=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const De=Z.material;if(De)if(Array.isArray(De))for(let Ie=0;Ie<De.length;Ie++){const Le=De[Ie];zs(Le,oe,Z),$.add(Le)}else zs(De,oe,Z),$.add(De)}),B=F.pop(),$},this.compileAsync=function(T,W,oe=null){const $=this.compile(T,W,oe);return new Promise(Z=>{function De(){if($.forEach(function(Ie){M.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){Z(T);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Dr=null;function Fs(T){Dr&&Dr(T)}function Ur(){Ci.stop()}function Is(){Ci.start()}const Ci=new cv;Ci.setAnimationLoop(Fs),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Dr=T,Re.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},Re.addEventListener("sessionstart",Ur),Re.addEventListener("sessionend",Is),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,$=J!==null&&(ae===null||oe)&&J.begin(w,ae);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,W,ae),B=Ee.get(T,F.length),B.init(W),F.push(B),Qt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(Qt,Fi,W.reversedDepth),dt=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,dt),L=be.get(T,H.length),L.init(),H.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Ie=w.xr.getDepthSensingMesh();Ie!==null&&ni(Ie,W,-1/0,w.sortObjects)}ni(T,W,0,w.sortObjects),L.finish(),w.sortObjects===!0&&L.sort(Ae,Be),st=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,st&&Ce.addToRenderList(L,T),this.info.render.frame++,He===!0&&Fe.beginShadows();const Z=B.state.shadowsArray;if(Pe.render(Z,T,W),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&J.hasRenderPass())===!1){const Ie=L.opaque,Le=L.transmissive;if(B.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Le.length>0)for(let je=0,Je=Ge.length;je<Je;je++){const qe=Ge[je];xn(Ie,Le,T,qe)}st&&Ce.render(T);for(let je=0,Je=Ge.length;je<Je;je++){const qe=Ge[je];sn(L,T,qe,qe.viewport)}}else Le.length>0&&xn(Ie,Le,T,W),st&&Ce.render(T),sn(L,T,W)}ae!==null&&se===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),$&&J.end(w),T.isScene===!0&&T.onAfterRender(w,T,W),ze.resetDefaultState(),pe=-1,fe=null,F.pop(),F.length>0?(B=F[F.length-1],He===!0&&Fe.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function ni(T,W,oe,$){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)B.pushLight(T),T.castShadow&&B.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){$&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qt);const Ie=we.update(T),Le=T.material;Le.visible&&L.push(T,Ie,Le,oe,ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const Ie=we.update(T),Le=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ht.copy(Ie.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(Qt)),Array.isArray(Le)){const Ge=Ie.groups;for(let je=0,Je=Ge.length;je<Je;je++){const qe=Ge[je],$e=Le[qe.materialIndex];$e&&$e.visible&&L.push(T,Ie,$e,oe,ht.z,qe)}}else Le.visible&&L.push(T,Ie,Le,oe,ht.z,null)}}const De=T.children;for(let Ie=0,Le=De.length;Ie<Le;Ie++)ni(De[Ie],W,oe,$)}function sn(T,W,oe,$){const{opaque:Z,transmissive:De,transparent:Ie}=T;B.setupLightsView(oe),He===!0&&Fe.setGlobalState(w.clippingPlanes,oe),$&&We.viewport(O.copy($)),Z.length>0&&_i(Z,W,oe),De.length>0&&_i(De,W,oe),Ie.length>0&&_i(Ie,W,oe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function xn(T,W,oe,$){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[$.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[$.id]=new Bi(1,1,{generateMipmaps:!0,type:$e?ga:mi,minFilter:wr,samples:Dt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const De=B.state.transmissionRenderTarget[$.id],Ie=$.viewport||O;De.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const Le=w.getRenderTarget(),Ge=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(De),w.getClearColor(Me),Se=w.getClearAlpha(),Se<1&&w.setClearColor(16777215,.5),w.clear(),st&&Ce.render(oe);const Je=w.toneMapping;w.toneMapping=Ii;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),B.setupLightsView($),He===!0&&Fe.setGlobalState(w.clippingPlanes,$),_i(T,oe,$),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let wt=0,Zt=W.length;wt<Zt;wt++){const jt=W[wt],{object:Ut,geometry:Ke,material:Ct,group:it}=jt;if(Ct.side===fa&&Ut.layers.test($.layers)){const Sn=Ct.side;Ct.side=jn,Ct.needsUpdate=!0,Lr(Ut,oe,$,Ke,Ct,it),Ct.side=Sn,Ct.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}w.setRenderTarget(Le,Ge,je),w.setClearColor(Me,Se),qe!==void 0&&($.viewport=qe),w.toneMapping=Je}function _i(T,W,oe){const $=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,De=T.length;Z<De;Z++){const Ie=T[Z],{object:Le,geometry:Ge,group:je}=Ie;let Je=Ie.material;Je.allowOverride===!0&&$!==null&&(Je=$),Le.layers.test(oe.layers)&&Lr(Le,W,oe,Ge,Je,je)}}function Lr(T,W,oe,$,Z,De){T.onBeforeRender(w,W,oe,$,Z,De),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(w,W,oe,$,T,De),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,w.renderBufferDirect(oe,W,$,Z,T,De),Z.side=er,Z.needsUpdate=!0,w.renderBufferDirect(oe,W,$,Z,T,De),Z.side=fa):w.renderBufferDirect(oe,W,$,Z,T,De),T.onAfterRender(w,W,oe,$,Z,De)}function Or(T,W,oe){W.isScene!==!0&&(W=Rt);const $=M.get(T),Z=B.state.lights,De=B.state.shadowsArray,Ie=Z.state.version,Le=Xe.getParameters(T,Z.state,De,W,oe),Ge=Xe.getProgramCacheKey(Le);let je=$.programs;$.environment=T.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(T.isMeshStandardMaterial?xe:he).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",Nn),je=new Map,$.programs=je);let Je=je.get(Ge);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ie)return Bs(T,Le),Je}else Le.uniforms=Xe.getUniforms(T),T.onBeforeCompile(Le,w),Je=Xe.acquireProgram(Le,Ge),je.set(Ge,Je),$.uniforms=Le.uniforms;const qe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),Bs(T,Le),$.needsLights=Sa(T),$.lightsStateVersion=Ie,$.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Qo(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Pc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Bs(T,W){const oe=M.get(T);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function tr(T,W,oe,$,Z){W.isScene!==!0&&(W=Rt),q.resetTextureUnits();const De=W.fog,Ie=$.isMeshStandardMaterial?W.environment:null,Le=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Us,Ge=($.isMeshStandardMaterial?xe:he).get($.envMap||Ie),je=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Zt=Ii;$.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Zt=w.toneMapping);const jt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=jt!==void 0?jt.length:0,Ke=M.get($),Ct=B.state.lights;if(He===!0&&(dt===!0||T!==fe)){const bn=T===fe&&$.id===pe;Fe.setState($,T,bn)}let it=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ct.state.version||Ke.outputColorSpace!==Le||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ge||$.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==wt||Ke.toneMapping!==Zt||Ke.morphTargetsCount!==Ut)&&(it=!0):(it=!0,Ke.__version=$.version);let Sn=Ke.currentProgram;it===!0&&(Sn=Or($,W,Z));let Vi=!1,yn=!1,ii=!1;const Ot=Sn.getUniforms(),Mn=Ke.uniforms;if(We.useProgram(Sn.program)&&(Vi=!0,yn=!0,ii=!0),$.id!==pe&&(pe=$.id,yn=!0),Vi||fe!==T){We.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(V,"projectionMatrix",T.projectionMatrix),Ot.setValue(V,"viewMatrix",T.matrixWorldInverse);const En=Ot.map.cameraPosition;En!==void 0&&En.setValue(V,gt.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,yn=!0,ii=!0)}if(Ke.needsLights&&(Ct.state.directionalShadowMap.length>0&&Ot.setValue(V,"directionalShadowMap",Ct.state.directionalShadowMap,q),Ct.state.spotShadowMap.length>0&&Ot.setValue(V,"spotShadowMap",Ct.state.spotShadowMap,q),Ct.state.pointShadowMap.length>0&&Ot.setValue(V,"pointShadowMap",Ct.state.pointShadowMap,q)),Z.isSkinnedMesh){Ot.setOptional(V,Z,"bindMatrix"),Ot.setOptional(V,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ot.setValue(V,"boneTexture",bn.boneTexture,q))}Z.isBatchedMesh&&(Ot.setOptional(V,Z,"batchingTexture"),Ot.setValue(V,"batchingTexture",Z._matricesTexture,q),Ot.setOptional(V,Z,"batchingIdTexture"),Ot.setValue(V,"batchingIdTexture",Z._indirectTexture,q),Ot.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",Z._colorsTexture,q));const dn=oe.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&lt.update(Z,oe,Sn),(yn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Ot.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Mn.envMap.value=Ge,Mn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=$A()),yn&&(Ot.setValue(V,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&Hs(Mn,ii),De&&$.fog===!0&&tt.refreshFogUniforms(Mn,De),tt.refreshMaterialUniforms(Mn,$,_e,ne,B.state.transmissionRenderTarget[T.id]),Pc.upload(V,Qo(Ke),Mn,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pc.upload(V,Qo(Ke),Mn,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(V,"center",Z.center),Ot.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ot.setValue(V,"normalMatrix",Z.normalMatrix),Ot.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let En=0,Pr=bn.length;En<Pr;En++){const vi=bn[En];ye.update(vi,Sn),ye.bind(vi,Sn)}}return Sn}function Hs(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Sa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(T,W,oe){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=W,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:oe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const oe=M.get(T);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const ya=V.createFramebuffer();this.setRenderTarget=function(T,W=0,oe=0){ae=T,X=W,se=oe;let $=null,Z=!1,De=!1;if(T){const Le=M.get(T);if(Le.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(T.viewport),G.copy(T.scissor),ie=T.scissorTest,We.viewport(O),We.scissor(G),We.setScissorTest(ie),pe=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(Le.__hasExternalTextures)q.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const je=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[W])?$=je[W][oe]:$=je[W],Z=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[oe]:$=je,O.copy(T.viewport),G.copy(T.scissor),ie=T.scissorTest}else O.copy(te).multiplyScalar(_e).floor(),G.copy(ue).multiplyScalar(_e).floor(),ie=Ne;if(oe!==0&&($=ya),We.bindFramebuffer(V.FRAMEBUFFER,$)&&We.drawBuffers(T,$),We.viewport(O),We.scissor(G),We.setScissorTest(ie),Z){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,oe)}else if(De){const Le=W;for(let Ge=0;Ge<T.textures.length;Ge++){const je=M.get(T.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,je.__webglTexture,oe,Le)}}else if(T!==null&&oe!==0){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(T,W,oe,$,Z,De,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){We.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const je=T.textures[Le],Je=je.format,qe=je.type;if(!Dt.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-$&&oe>=0&&oe<=T.height-Z&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,Z,Te.convert(Je),Te.convert(qe),De))}finally{const je=ae!==null?M.get(ae).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(T,W,oe,$,Z,De,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(W>=0&&W<=T.width-$&&oe>=0&&oe<=T.height-Z){We.bindFramebuffer(V.FRAMEBUFFER,Ge);const je=T.textures[Le],Je=je.format,qe=je.type;if(!Dt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,Z,Te.convert(Je),Te.convert(qe),0);const wt=ae!==null?M.get(ae).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,wt);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await bM(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer($e),V.deleteSync(Zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,oe=0){const $=Math.pow(2,-oe),Z=Math.floor(T.image.width*$),De=Math.floor(T.image.height*$),Ie=W!==null?W.x:0,Le=W!==null?W.y:0;q.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Ie,Le,Z,De),We.unbindTexture()};const nr=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(T,W,oe=null,$=null,Z=0,De=null){De===null&&(Z!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Z,Z=0):De=0);let Ie,Le,Ge,je,Je,qe,$e,wt,Zt;const jt=T.isCompressedTexture?T.mipmaps[De]:T.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,Je=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const dn=Math.pow(2,-Z);Ie=Math.floor(jt.width*dn),Le=Math.floor(jt.height*dn),T.isDataArrayTexture?Ge=jt.depth:T.isData3DTexture?Ge=Math.floor(jt.depth*dn):Ge=1,je=0,Je=0,qe=0}$!==null?($e=$.x,wt=$.y,Zt=$.z):($e=0,wt=0,Zt=0);const Ut=Te.convert(W.format),Ke=Te.convert(W.type);let Ct;W.isData3DTexture?(q.setTexture3D(W,0),Ct=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),Ct=V.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),Ct=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const it=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Vi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,je),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const Ot=T.isDataArrayTexture||T.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const dn=M.get(T),bn=M.get(W),En=M.get(dn.__renderTarget),Pr=M.get(bn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let vi=0;vi<Ge;vi++)Ot&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Z,qe+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(W).__webglTexture,De,Zt+vi)),V.blitFramebuffer(je,Je,Ie,Le,$e,wt,Ie,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||M.has(T)){const dn=M.get(T),bn=M.get(W);We.bindFramebuffer(V.READ_FRAMEBUFFER,nr),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Ge;En++)Ot?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Z,qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Z),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,De,Zt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,De),Z!==0?V.blitFramebuffer(je,Je,Ie,Le,$e,wt,Ie,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Ct,De,$e,wt,Zt+En,je,Je,Ie,Le):V.copyTexSubImage2D(Ct,De,$e,wt,je,Je,Ie,Le);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ct,De,$e,wt,Zt,Ie,Le,Ge,Ut,Ke,jt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Ct,De,$e,wt,Zt,Ie,Le,Ge,Ut,jt.data):V.texSubImage3D(Ct,De,$e,wt,Zt,Ie,Le,Ge,Ut,Ke,jt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,$e,wt,Ie,Le,Ut,Ke,jt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,$e,wt,jt.width,jt.height,Ut,jt.data):V.texSubImage2D(V.TEXTURE_2D,De,$e,wt,Ie,Le,Ut,Ke,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,it),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Vi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),De===0&&W.generateMipmaps&&V.generateMipmap(Ct),We.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){X=0,se=0,ae=null,We.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(t),i.unpackColorSpace=bt._getUnpackColorSpace()}}const t2=()=>{const o=pn.useRef(null);return pn.useEffect(()=>{let t,i,r,l,u=[];try{let d=function(S,b,R,C){const y=new wi,x=new Float32Array(S*3);for(let L=0;L<S*3;L++)x[L]=(Math.random()-.5)*200;y.setAttribute("position",new Ri(x,3));const z=new sv({size:R,color:b,blending:Ld,transparent:!0,opacity:.7}),P=new $M(y,z);return P.userData={speed:C},i.add(P),P};if(i=new YM,r=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),t=new e2({alpha:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.domElement.id="bg-canvas",t.domElement.style.position="fixed",t.domElement.style.top="0",t.domElement.style.left="0",t.domElement.style.zIndex="-1",o.current){for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);o.current.appendChild(t.domElement)}r.position.setZ(50);const h=d(1e4,3718648,.2,2e-4),m=d(5e3,10980346,.3,4e-4),p=d(2e3,16020150,.4,6e-4);u.push(h,m,p);const v=()=>{l=requestAnimationFrame(v),u.forEach(S=>{S.rotation.x+=S.userData.speed,S.rotation.y+=S.userData.speed}),t.render(i,r)};v();const _=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(l),u.forEach(S=>{S.geometry&&S.geometry.dispose(),S.material&&S.material.dispose()}),t&&(t.dispose(),o.current&&o.current.contains(t.domElement)&&o.current.removeChild(t.domElement))}}catch(d){console.error("Three.js initialization failed:",d)}},[]),A.jsx("div",{ref:o,className:"fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"})},n2=()=>{const o=pn.useRef(null),t=pn.useRef(null);return pn.useEffect(()=>{const i=o.current,r=t.current;let l=0,u=0,d=0,h=0;const m=S=>{l=S.clientX,u=S.clientY};window.addEventListener("mousemove",m);const p=()=>{!i||!r||(i.style.left=`${l}px`,i.style.top=`${u}px`,i.style.transform="translate(-50%, -50%)",d+=(l-d)*.1,h+=(u-h)*.1,r.style.left=`${d}px`,r.style.top=`${h}px`,r.style.transform="translate(-50%, -50%)",requestAnimationFrame(p))},v=requestAnimationFrame(p),_=S=>{S.target.closest("a, button, input, textarea, .interactive-element")?r?.classList.add("hover"):r?.classList.remove("hover")};return document.addEventListener("mouseover",_),()=>{window.removeEventListener("mousemove",m),document.removeEventListener("mouseover",_),cancelAnimationFrame(v)}},[]),A.jsxs(A.Fragment,{children:[A.jsx("div",{id:"cursor-dot",ref:o,className:"fixed top-0 left-0 w-2 h-2 bg-sky-400 rounded-full z-[9999] pointer-events-none"}),A.jsx("div",{id:"cursor-outline",ref:t,className:"fixed top-0 left-0 w-40 h-40 border-2 border-primary-glow rounded-full z-[9999] pointer-events-none transition-all duration-300"})]})};function i2(){return pn.useEffect(()=>{const o=document.querySelectorAll(".reveal"),t=()=>{const i=window.innerHeight;o.forEach(r=>{r.getBoundingClientRect().top<i-100&&r.classList.add("visible")})};return t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),A.jsxs("div",{className:"antialiased text-slate-200",children:[A.jsx(t2,{}),A.jsx(n2,{}),A.jsx(Ny,{}),A.jsxs("main",{className:"relative z-10",children:[A.jsx(Uy,{}),A.jsx(Oy,{}),A.jsx(Py,{}),A.jsx(Iy,{}),A.jsx(Fy,{}),A.jsx(Hy,{}),A.jsx(Gy,{})]}),A.jsx(Vy,{})]})}RS.createRoot(document.getElementById("root")).render(A.jsx(pn.StrictMode,{children:A.jsx(i2,{})}));
