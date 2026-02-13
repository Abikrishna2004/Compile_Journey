(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},Co={};var vg;function yy(){if(vg)return Co;vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var xg;function Sy(){return xg||(xg=1,Zf.exports=yy()),Zf.exports}var E=Sy(),Kf={exports:{}},at={};var yg;function My(){if(yg)return at;yg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=S,this.updater=_e||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=x.prototype;function P(U,ne,_e){this.props=U,this.context=ne,this.refs=S,this.updater=_e||R}var L=P.prototype=new z;L.constructor=P,C(L,x.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function H(){}var F={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function w(U,ne,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:ne,ref:Ae!==void 0?Ae:null,props:_e}}function N(U,ne){return w(U.type,ne,U.props)}function j(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function re(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var ae=/\/+/g;function pe(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?re(""+U.key):ne.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,ne,_e,Ae,Be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case o:case t:ue=!0;break;case v:return ue=U._init,O(ue(U._payload),ne,_e,Ae,Be)}}if(ue)return Be=Be(U),ue=Ae===""?"."+pe(U,0):Ae,B(Be)?(_e="",ue!=null&&(_e=ue.replace(ae,"$&/")+"/"),O(Be,ne,_e,"",function(He){return He})):Be!=null&&(j(Be)&&(Be=N(Be,_e+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(ae,"$&/")+"/")+ue)),ne.push(Be)),1;ue=0;var Ne=Ae===""?".":Ae+":";if(B(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],te=Ne+pe(Ae,ke),ue+=O(Ae,ne,_e,te,Be);else if(ke=b(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,te=Ne+pe(Ae,ke++),ue+=O(Ae,ne,_e,te,Be);else if(te==="object"){if(typeof U.then=="function")return O(fe(U),ne,_e,Ae,Be);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(U,ne,_e){if(U==null)return U;var Ae=[],Be=0;return O(U,Ae,"","",function(te){return ne.call(_e,te,Be++)}),Ae}function ie(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ye={map:G,forEach:function(U,ne,_e){G(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return G(U,function(){ne++}),ne},toArray:function(U){return G(U,function(ne){return ne})||[]},only:function(U){if(!j(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=_,at.Children=ye,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=C({},U.props),Be=U.key;if(ne!=null)for(te in ne.key!==void 0&&(Be=""+ne.key),ne)!J.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Ae[te]=ne[te]);var te=arguments.length-2;if(te===1)Ae.children=_e;else if(1<te){for(var ue=Array(te),Ne=0;Ne<te;Ne++)ue[Ne]=arguments[Ne+2];Ae.children=ue}return w(U.type,Be,Ae)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},at.createElement=function(U,ne,_e){var Ae,Be={},te=null;if(ne!=null)for(Ae in ne.key!==void 0&&(te=""+ne.key),ne)J.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ne[Ae]);var ue=arguments.length-2;if(ue===1)Be.children=_e;else if(1<ue){for(var Ne=Array(ue),ke=0;ke<ue;ke++)Ne[ke]=arguments[ke+2];Be.children=Ne}if(U&&U.defaultProps)for(Ae in ue=U.defaultProps,ue)Be[Ae]===void 0&&(Be[Ae]=ue[Ae]);return w(U,te,Be)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:h,render:U}},at.isValidElement=j,at.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},at.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},at.startTransition=function(U){var ne=F.T,_e={};F.T=_e;try{var Ae=U(),Be=F.S;Be!==null&&Be(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(H,Me)}catch(te){Me(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),F.T=ne}},at.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},at.use=function(U){return F.H.use(U)},at.useActionState=function(U,ne,_e){return F.H.useActionState(U,ne,_e)},at.useCallback=function(U,ne){return F.H.useCallback(U,ne)},at.useContext=function(U){return F.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,ne){return F.H.useDeferredValue(U,ne)},at.useEffect=function(U,ne){return F.H.useEffect(U,ne)},at.useEffectEvent=function(U){return F.H.useEffectEvent(U)},at.useId=function(){return F.H.useId()},at.useImperativeHandle=function(U,ne,_e){return F.H.useImperativeHandle(U,ne,_e)},at.useInsertionEffect=function(U,ne){return F.H.useInsertionEffect(U,ne)},at.useLayoutEffect=function(U,ne){return F.H.useLayoutEffect(U,ne)},at.useMemo=function(U,ne){return F.H.useMemo(U,ne)},at.useOptimistic=function(U,ne){return F.H.useOptimistic(U,ne)},at.useReducer=function(U,ne,_e){return F.H.useReducer(U,ne,_e)},at.useRef=function(U){return F.H.useRef(U)},at.useState=function(U){return F.H.useState(U)},at.useSyncExternalStore=function(U,ne,_e){return F.H.useSyncExternalStore(U,ne,_e)},at.useTransition=function(){return F.H.useTransition()},at.version="19.2.4",at}var Sg;function Ch(){return Sg||(Sg=1,Kf.exports=My()),Kf.exports}var pn=Ch(),Qf={exports:{}},No={},Jf={exports:{}},$f={};var Mg;function by(){return Mg||(Mg=1,(function(o){function t(O,G){var ie=O.length;O.push(G);e:for(;0<ie;){var Me=ie-1>>>1,ye=O[Me];if(0<l(ye,G))O[Me]=G,O[ie]=ye,ie=Me;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var G=O[0],ie=O.pop();if(ie!==G){O[0]=ie;e:for(var Me=0,ye=O.length,U=ye>>>1;Me<U;){var ne=2*(Me+1)-1,_e=O[ne],Ae=ne+1,Be=O[Ae];if(0>l(_e,ie))Ae<ye&&0>l(Be,_e)?(O[Me]=Be,O[Ae]=ie,Me=Ae):(O[Me]=_e,O[ne]=ie,Me=ne);else if(Ae<ye&&0>l(Be,ie))O[Me]=Be,O[Ae]=ie,Me=Ae;else break e}}return G}function l(O,G){var ie=O.sortIndex-G.sortIndex;return ie!==0?ie:O.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,y=3,b=!1,R=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=O)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function B(O){if(C=!1,L(O),!R)if(i(m)!==null)R=!0,H||(H=!0,re());else{var G=i(p);G!==null&&fe(B,G.startTime-O)}}var H=!1,F=-1,J=5,w=-1;function N(){return S?!0:!(o.unstable_now()-w<J)}function j(){if(S=!1,H){var O=o.unstable_now();w=O;var G=!0;try{e:{R=!1,C&&(C=!1,z(F),F=-1),b=!0;var ie=y;try{t:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&N());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,y=_.priorityLevel;var ye=Me(_.expirationTime<=O);if(O=o.unstable_now(),typeof ye=="function"){_.callback=ye,L(O),G=!0;break t}_===i(m)&&s(m),L(O)}else s(m);_=i(m)}if(_!==null)G=!0;else{var U=i(p);U!==null&&fe(B,U.startTime-O),G=!1}}break e}finally{_=null,y=ie,b=!1}G=void 0}}finally{G?re():H=!1}}}var re;if(typeof P=="function")re=function(){P(j)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=j,re=function(){pe.postMessage(null)}}else re=function(){x(j,0)};function fe(O,G){F=x(function(){O(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ie=y;y=G;try{return O()}finally{y=ie}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ie=y;y=O;try{return G()}finally{y=ie}},o.unstable_scheduleCallback=function(O,G,ie){var Me=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Me+ie:Me):ie=Me,O){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ie+ye,O={id:v++,callback:G,priorityLevel:O,startTime:ie,expirationTime:ye,sortIndex:-1},ie>Me?(O.sortIndex=ie,t(p,O),i(m)===null&&O===i(p)&&(C?(z(F),F=-1):C=!0,fe(B,ie-Me))):(O.sortIndex=ye,t(m,O),R||b||(R=!0,H||(H=!0,re()))),O},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(O){var G=y;return function(){var ie=y;y=G;try{return O.apply(this,arguments)}finally{y=ie}}}})($f)),$f}var bg;function Ey(){return bg||(bg=1,Jf.exports=by()),Jf.exports}var ed={exports:{}},Dn={};var Eg;function Ty(){if(Eg)return Dn;Eg=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:b}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var Tg;function Ay(){if(Tg)return ed.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=Ty(),ed.exports}var Ag;function Ry(){if(Ag)return No;Ag=1;var o=Ey(),t=Ch(),i=Ay();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,r=f;break}if(T===r){g=!0,r=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=c;break}if(T===r){g=!0,r=f,a=c;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case P:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Me=[],ye=-1;function U(e){return{current:e}}function ne(e){0>ye||(e.current=Me[ye],Me[ye]=null,ye--)}function _e(e,n){ye++,Me[ye]=e.current,e.current=n}var Ae=U(null),Be=U(null),te=U(null),ue=U(null);function Ne(e,n){switch(_e(te,n),_e(Be,e),_e(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=G0(n),e=V0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ae),_e(Ae,e)}function ke(){ne(Ae),ne(Be),ne(te)}function He(e){e.memoizedState!==null&&_e(ue,e);var n=Ae.current,a=V0(n,e.type);n!==a&&(_e(Be,e),_e(Ae,a))}function dt(e){Be.current===e&&(ne(Ae),ne(Be)),ue.current===e&&(ne(ue),To._currentValue=ie)}var Qt,gt;function ht(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+gt}var wt=!1;function rt(e,n){if(!e||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ee=le}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(le){ee=le}e.call(ge.prototype)}}else{try{throw Error()}catch(le){ee=le}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var I=g.split(`
`),Q=T.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Q.length)for(r=I.length-1,c=Q.length-1;1<=r&&0<=c&&I[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Q[c]){var de=`
`+I[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=c);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return rt(e.type,!1);case 11:return rt(e.type.render,!1);case 1:return rt(e.type,!0);case 31:return ht("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Yt=Object.prototype.hasOwnProperty,St=o.unstable_scheduleCallback,Ut=o.unstable_cancelCallback,We=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,we=o.unstable_IdlePriority,je=o.log,tt=o.unstable_setDisableYieldValue,be=null,Ee=null;function Fe(e){if(typeof je=="function"&&tt(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Pe=Math.clz32?Math.clz32:X,Ce=Math.log,lt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ce(e)/lt|0)|0}var Ue=256,Te=262144,ze=4194304;function Se(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Se(r):(g&=T,g!==0?c=Se(g):a||(a=T&~e,a!==0&&(c=Se(a))))):(T=r&~f,T!==0?c=Se(T):g!==0?c=Se(g):a||(a=r&~e,a!==0&&(c=Se(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,r,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=g&~a;0<a;){var de=31-Pe(a),ge=1<<de;T[de]=0,I[de]=-1;var ee=Q[de];if(ee!==null)for(Q[de]=null,de=0;de<ee.length;de++){var le=ee[de];le!==null&&(le.lane&=-536870913)}a&=~ge}r!==0&&Qo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Qo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function zr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pe(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ds(e,n){var a=n&-n;return a=(a&42)!==0?1:Fr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:fg(e.type))}function Ci(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ni=Math.random().toString(36).slice(2),rn="__reactFiber$"+ni,xn="__reactProps$"+ni,_i="__reactContainer$"+ni,Ls="__reactEvents$"+ni,Os="__reactListeners$"+ni,Jo="__reactHandles$"+ni,Br="__reactResources$"+ni,ts="__reactMarker$"+ni;function Hr(e){delete e[rn],delete e[xn],delete e[Ls],delete e[Os],delete e[Jo]}function ya(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Z0(e);e!==null;){if(a=e[rn])return a;e=Z0(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[rn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ns(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[Br];return n||(n=e[Br]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[ts]=!0}var W=new Set,oe={};function $(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(oe[e]=n,e=0;e<n.length;e++)W.add(n[e])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Le={};function Ge(e){return Yt.call(Le,e)?!0:Yt.call(Ie,e)?!1:De.test(e)?Le[e]=!0:(Ie[e]=!0,!1)}function Xe(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Ct(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function Lt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ct(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nt=/[\n"\\]/g;function it(e){return e.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,r,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,g,$e(n)):a!=null?Sn(e,g,$e(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function Vi(e,n,a,r,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function Sn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(fe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ps(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&En(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return _v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Xc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Fs=null;function Hh(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[xn]||null;if(!c)throw Error(s(90));yn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Lt(r)}break e;case"textarea":Pt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var Wc=!1;function Gh(e,n,a){if(Wc)return e(n,a);Wc=!0;try{var r=e(n);return r}finally{if(Wc=!1,(zs!==null||Fs!==null)&&(Hl(),zs&&(n=zs,e=Fs,Fs=zs=null,Hh(n),e)))for(n=0;n<e.length;n++)Hh(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(ji)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Yc=!1}var ba=null,Zc=null,el=null;function Vh(){if(el)return el;var e,n=Zc,a=n.length,r,c="value"in ba?ba.value:ba.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return el=c.slice(e,1<r?1-r:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function kh(){return!1}function In(e){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:kh,this.isPropagationStopped=kh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=In(is),kr=_({},is,{view:0,detail:0}),vv=In(kr),Kc,Qc,jr,al=_({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Kc=e.screenX-jr.screenX,Qc=e.screenY-jr.screenY):Qc=Kc=0,jr=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),jh=In(al),xv=_({},al,{dataTransfer:0}),yv=In(xv),Sv=_({},kr,{relatedTarget:0}),Jc=In(Sv),Mv=_({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=In(Mv),Ev=_({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tv=In(Ev),Av=_({},is,{data:0}),Xh=In(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cv[e])?!!n[e]:!1}function $c(){return Nv}var Dv=_({},kr,{key:function(e){if(e.key){var n=Rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uv=In(Dv),Lv=_({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=In(Lv),Ov=_({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Pv=In(Ov),zv=_({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=In(zv),Iv=_({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=In(Iv),Hv=_({},is,{newState:0,oldState:0}),Gv=In(Hv),Vv=[9,13,27,32],eu=ji&&"CompositionEvent"in window,Xr=null;ji&&"documentMode"in document&&(Xr=document.documentMode);var kv=ji&&"TextEvent"in window&&!Xr,Wh=ji&&(!eu||Xr&&8<Xr&&11>=Xr),Yh=" ",Zh=!1;function Kh(e,n){switch(e){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function jv(e,n){switch(e){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,Yh);case"textInput":return e=n.data,e===Yh&&Zh?null:e;default:return null}}function Xv(e,n){if(Is)return e==="compositionend"||!eu&&Kh(e,n)?(e=Vh(),el=Zc=ba=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qv[e.type]:n==="textarea"}function $h(e,n,a,r){zs?Fs?Fs.push(r):Fs=[r]:zs=r,n=Wl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var qr=null,Wr=null;function Wv(e){P0(e,0)}function sl(e){var n=ns(e);if(Lt(n))return e}function ep(e,n){if(e==="change")return n}var tp=!1;if(ji){var tu;if(ji){var nu="oninput"in document;if(!nu){var np=document.createElement("div");np.setAttribute("oninput","return;"),nu=typeof np.oninput=="function"}tu=nu}else tu=!1;tp=tu&&(!document.documentMode||9<document.documentMode)}function ip(){qr&&(qr.detachEvent("onpropertychange",ap),Wr=qr=null)}function ap(e){if(e.propertyName==="value"&&sl(Wr)){var n=[];$h(n,Wr,e,qc(e)),Gh(Wv,n)}}function Yv(e,n,a){e==="focusin"?(ip(),qr=n,Wr=a,qr.attachEvent("onpropertychange",ap)):e==="focusout"&&ip()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Wr)}function Kv(e,n){if(e==="click")return sl(n)}function Qv(e,n){if(e==="input"||e==="change")return sl(n)}function Jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Jv;function Yr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Yt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,n){var a=sp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $v=ji&&"documentMode"in document&&11>=document.documentMode,Bs=null,au=null,Zr=null,su=!1;function cp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Bs==null||Bs!==Ke(r)||(r=Bs,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Yr(Zr,r)||(Zr=r,r=Wl(au,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Bs)))}function as(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},ru={},up={};ji&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function ss(e){if(ru[e])return ru[e];if(!Hs[e])return e;var n=Hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return ru[e]=n[a];return e}var fp=ss("animationend"),dp=ss("animationiteration"),hp=ss("animationstart"),ex=ss("transitionrun"),tx=ss("transitionstart"),nx=ss("transitioncancel"),pp=ss("transitionend"),mp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function xi(e,n){mp.set(e,n),$(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Gs=0,lu=0;function ol(){for(var e=Gs,n=lu=Gs=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&gp(a,c,f)}}function ll(e,n,a,r){ai[Gs++]=e,ai[Gs++]=n,ai[Gs++]=a,ai[Gs++]=r,lu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function cu(e,n,a,r){return ll(e,n,a,r),cl(e)}function rs(e,n){return ll(e,null,null,n),cl(e)}function gp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<vo)throw vo=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vs={};function ix(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new ix(e,n,a,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,r,c,f){var g=0;if(r=e,typeof e=="function")uu(e)&&(g=1);else if(typeof e=="string")g=ly(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Yn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return os(a.children,c,f,n);case S:g=8,c|=24;break;case x:return e=Yn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case B:return e=Yn(13,a,n,c),e.elementType=B,e.lanes=f,e;case H:return e=Yn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break e;case z:g=9;break e;case L:g=11;break e;case F:g=14;break e;case J:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(g,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function os(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function fu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function vp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},xp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var ks=[],js=0,fl=null,Kr=0,ri=[],oi=0,Ea=null,Ni=1,Di="";function qi(e,n){ks[js++]=Kr,ks[js++]=fl,fl=e,Kr=n}function yp(e,n,a){ri[oi++]=Ni,ri[oi++]=Di,ri[oi++]=Ea,Ea=e;var r=Ni;e=Di;var c=32-Pe(r)-1;r&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ni=1<<32-Pe(n)+c|a<<c|r,Di=f+e}else Ni=1<<f|a<<c|r,Di=e}function hu(e){e.return!==null&&(qi(e,1),yp(e,1,0))}function pu(e){for(;e===fl;)fl=ks[--js],ks[js]=null,Kr=ks[--js],ks[js]=null;for(;e===Ea;)Ea=ri[--oi],ri[oi]=null,Di=ri[--oi],ri[oi]=null,Ni=ri[--oi],ri[oi]=null}function Sp(e,n){ri[oi++]=Ni,ri[oi++]=Di,ri[oi++]=Ea,Ni=n.id,Di=n.overflow,Ea=e}var Tn=null,qt=null,xt=!1,Ta=null,li=!1,mu=Error(s(519));function Aa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(si(n,e)),mu}function Mp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[xn]=r,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)mt(yo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Vi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||B0(n.textContent,a)?(r.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),r.onScroll!=null&&mt("scroll",n),r.onScrollEnd!=null&&mt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Aa(e,!0)}function bp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Xs(e){if(e!==Tn)return!1;if(!xt)return bp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&qt&&Aa(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Y0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Y0(e)}else n===27?(n=qt,Ha(e.type)?(e=Bf,Bf=null,qt=e):qt=n):qt=Tn?ui(e.stateNode.nextSibling):null;return!0}function ls(){qt=Tn=null,xt=!1}function gu(){var e=Ta;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ta=null),e}function Qr(e){Ta===null?Ta=[e]:Ta.push(e)}var _u=U(null),cs=null,Wi=null;function Ra(e,n,a){_e(_u,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=_u.current,ne(_u)}function vu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function xu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),vu(f.return,a,e),r||(g=null);break e}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===ue.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&xu(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Ep(cs,e)}function hl(e,n){return cs===null&&us(e),Ep(e,n)}function Ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,rx=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new ax,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&sx(rx,function(){e.controller.abort()})}var $r=null,Su=0,Ws=0,Ys=null;function ox(e,n){if($r===null){var a=$r=[];Su=0,Ws=Tf(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Su++,n.then(Tp,Tp),n}function Tp(){if(--Su===0&&$r!==null){Ys!==null&&(Ys.status="fulfilled");var e=$r;$r=null,Ws=0,Ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function lx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Ap=O.S;O.S=function(e,n){c0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(e,n),Ap!==null&&Ap(e,n)};var fs=U(null);function Mu(){var e=fs.current;return e!==null?e:jt.pooledCache}function pl(e,n){n===null?_e(fs,fs.current):_e(fs,n.pool)}function Rp(){var e=Mu();return e===null?null:{parent:on._currentValue,pool:e}}var Zs=Error(s(460)),bu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e}throw hs=n,Zs}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Zs):a}}var hs=null;function Np(){if(hs===null)throw Error(s(459));var e=hs;return hs=null,e}function Dp(e){if(e===Zs||e===ml)throw Error(s(483))}var Ks=null,eo=0;function _l(e){var n=eo;return eo+=1,Ks===null&&(Ks=[]),Cp(Ks,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Up(e){function n(Y,k){if(e){var K=Y.deletions;K===null?(Y.deletions=[k],Y.flags|=16):K.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Xi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<k?(Y.flags|=67108866,k):K):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,K,me){return k===null||k.tag!==6?(k=fu(K,Y.mode,me),k.return=Y,k):(k=c(k,K),k.return=Y,k)}function I(Y,k,K,me){var Qe=K.type;return Qe===C?de(Y,k,K.props.children,me,K.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&ds(Qe)===k.type)?(k=c(k,K.props),to(k,K),k.return=Y,k):(k=ul(K.type,K.key,K.props,null,Y.mode,me),to(k,K),k.return=Y,k)}function Q(Y,k,K,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=du(K,Y.mode,me),k.return=Y,k):(k=c(k,K.children||[]),k.return=Y,k)}function de(Y,k,K,me,Qe){return k===null||k.tag!==7?(k=os(K,Y.mode,me,Qe),k.return=Y,k):(k=c(k,K),k.return=Y,k)}function ge(Y,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=fu(""+k,Y.mode,K),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return K=ul(k.type,k.key,k.props,null,Y.mode,K),to(K,k),K.return=Y,K;case R:return k=du(k,Y.mode,K),k.return=Y,k;case J:return k=ds(k),ge(Y,k,K)}if(fe(k)||re(k))return k=os(k,Y.mode,K,null),k.return=Y,k;if(typeof k.then=="function")return ge(Y,_l(k),K);if(k.$$typeof===P)return ge(Y,hl(Y,k),K);vl(Y,k)}return null}function ee(Y,k,K,me){var Qe=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qe!==null?null:T(Y,k,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return K.key===Qe?I(Y,k,K,me):null;case R:return K.key===Qe?Q(Y,k,K,me):null;case J:return K=ds(K),ee(Y,k,K,me)}if(fe(K)||re(K))return Qe!==null?null:de(Y,k,K,me,null);if(typeof K.then=="function")return ee(Y,k,_l(K),me);if(K.$$typeof===P)return ee(Y,k,hl(Y,K),me);vl(Y,K)}return null}function le(Y,k,K,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(K)||null,T(k,Y,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case b:return Y=Y.get(me.key===null?K:me.key)||null,I(k,Y,me,Qe);case R:return Y=Y.get(me.key===null?K:me.key)||null,Q(k,Y,me,Qe);case J:return me=ds(me),le(Y,k,K,me,Qe)}if(fe(me)||re(me))return Y=Y.get(K)||null,de(k,Y,me,Qe,null);if(typeof me.then=="function")return le(Y,k,K,_l(me),Qe);if(me.$$typeof===P)return le(Y,k,K,hl(k,me),Qe);vl(k,me)}return null}function Ve(Y,k,K,me){for(var Qe=null,Tt=null,Ye=k,ct=k=0,vt=null;Ye!==null&&ct<K.length;ct++){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var At=ee(Y,Ye,K[ct],me);if(At===null){Ye===null&&(Ye=vt);break}e&&Ye&&At.alternate===null&&n(Y,Ye),k=f(At,k,ct),Tt===null?Qe=At:Tt.sibling=At,Tt=At,Ye=vt}if(ct===K.length)return a(Y,Ye),xt&&qi(Y,ct),Qe;if(Ye===null){for(;ct<K.length;ct++)Ye=ge(Y,K[ct],me),Ye!==null&&(k=f(Ye,k,ct),Tt===null?Qe=Ye:Tt.sibling=Ye,Tt=Ye);return xt&&qi(Y,ct),Qe}for(Ye=r(Ye);ct<K.length;ct++)vt=le(Ye,Y,ct,K[ct],me),vt!==null&&(e&&vt.alternate!==null&&Ye.delete(vt.key===null?ct:vt.key),k=f(vt,k,ct),Tt===null?Qe=vt:Tt.sibling=vt,Tt=vt);return e&&Ye.forEach(function(Xa){return n(Y,Xa)}),xt&&qi(Y,ct),Qe}function et(Y,k,K,me){if(K==null)throw Error(s(151));for(var Qe=null,Tt=null,Ye=k,ct=k=0,vt=null,At=K.next();Ye!==null&&!At.done;ct++,At=K.next()){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var Xa=ee(Y,Ye,At.value,me);if(Xa===null){Ye===null&&(Ye=vt);break}e&&Ye&&Xa.alternate===null&&n(Y,Ye),k=f(Xa,k,ct),Tt===null?Qe=Xa:Tt.sibling=Xa,Tt=Xa,Ye=vt}if(At.done)return a(Y,Ye),xt&&qi(Y,ct),Qe;if(Ye===null){for(;!At.done;ct++,At=K.next())At=ge(Y,At.value,me),At!==null&&(k=f(At,k,ct),Tt===null?Qe=At:Tt.sibling=At,Tt=At);return xt&&qi(Y,ct),Qe}for(Ye=r(Ye);!At.done;ct++,At=K.next())At=le(Ye,Y,ct,At.value,me),At!==null&&(e&&At.alternate!==null&&Ye.delete(At.key===null?ct:At.key),k=f(At,k,ct),Tt===null?Qe=At:Tt.sibling=At,Tt=At);return e&&Ye.forEach(function(xy){return n(Y,xy)}),xt&&qi(Y,ct),Qe}function Vt(Y,k,K,me){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case b:e:{for(var Qe=K.key;k!==null;){if(k.key===Qe){if(Qe=K.type,Qe===C){if(k.tag===7){a(Y,k.sibling),me=c(k,K.props.children),me.return=Y,Y=me;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&ds(Qe)===k.type){a(Y,k.sibling),me=c(k,K.props),to(me,K),me.return=Y,Y=me;break e}a(Y,k);break}else n(Y,k);k=k.sibling}K.type===C?(me=os(K.props.children,Y.mode,me,K.key),me.return=Y,Y=me):(me=ul(K.type,K.key,K.props,null,Y.mode,me),to(me,K),me.return=Y,Y=me)}return g(Y);case R:e:{for(Qe=K.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(Y,k.sibling),me=c(k,K.children||[]),me.return=Y,Y=me;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}me=du(K,Y.mode,me),me.return=Y,Y=me}return g(Y);case J:return K=ds(K),Vt(Y,k,K,me)}if(fe(K))return Ve(Y,k,K,me);if(re(K)){if(Qe=re(K),typeof Qe!="function")throw Error(s(150));return K=Qe.call(K),et(Y,k,K,me)}if(typeof K.then=="function")return Vt(Y,k,_l(K),me);if(K.$$typeof===P)return Vt(Y,k,hl(Y,K),me);vl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(Y,k.sibling),me=c(k,K),me.return=Y,Y=me):(a(Y,k),me=fu(K,Y.mode,me),me.return=Y,Y=me),g(Y)):a(Y,k)}return function(Y,k,K,me){try{eo=0;var Qe=Vt(Y,k,K,me);return Ks=null,Qe}catch(Ye){if(Ye===Zs||Ye===ml)throw Ye;var Tt=Yn(29,Ye,null,Y.mode);return Tt.lanes=me,Tt.return=Y,Tt}}}var ps=Up(!0),Lp=Up(!1),wa=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cl(e),gp(e,null,a),n}return ll(e,r,n,a),cl(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zr(e,a)}}function Au(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function io(){if(Ru){var e=Ys;if(e!==null)throw e}}function ao(e,n,a,r){Ru=!1;var c=e.updateQueue;wa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var de=e.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==g&&(T===null?de.firstBaseUpdate=Q:T.next=Q,de.lastBaseUpdate=I))}if(f!==null){var ge=c.baseState;g=0,de=Q=I=null,T=f;do{var ee=T.lane&-536870913,le=ee!==T.lane;if(le?(_t&ee)===ee:(r&ee)===ee){ee!==0&&ee===Ws&&(Ru=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ve=e,et=T;ee=n;var Vt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){ge=Ve.call(Vt,ge,ee);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,ee=typeof Ve=="function"?Ve.call(Vt,ge,ee):Ve,ee==null)break e;ge=_({},ge,ee);break e;case 2:wa=!0}}ee=T.callback,ee!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(Q=de=le,I=ge):de=de.next=le,g|=ee;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;le=T,T=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(I=ge),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Pa|=g,e.lanes=g,e.memoizedState=ge}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Qs=U(null),xl=U(0);function zp(e,n){e=ia,_e(xl,e),_e(Qs,n),ia=e|n.baseLanes}function wu(){_e(xl,ia),_e(Qs,Qs.current)}function Cu(){ia=xl.current,ne(Qs),ne(xl)}var Zn=U(null),ci=null;function Da(e){var n=e.alternate;_e(tn,tn.current&1),_e(Zn,e),ci===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(ci=e)}function Nu(e){_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)}function Fp(e){e.tag===22?(_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)):Ua()}function Ua(){_e(tn,tn.current),_e(Zn,Zn.current)}function Kn(e){ne(Zn),ci===e&&(ci=null),ne(tn)}var tn=U(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ot=null,Ht=null,ln=null,Sl=!1,Js=!1,ms=!1,Ml=0,so=0,$s=null,cx=0;function $t(){throw Error(s(321))}function Du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,r,c,f){return Zi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?ym:Wu,ms=!1,f=a(r,c),ms=!1,Js&&(f=Bp(n,a,r,c)),Ip(e),f}function Ip(e){O.H=lo;var n=Ht!==null&&Ht.next!==null;if(Zi=0,ln=Ht=ot=null,Sl=!1,so=0,$s=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&dl(e)&&(cn=!0))}function Bp(e,n,a,r){ot=e;var c=0;do{if(Js&&($s=null),so=0,Js=!1,25<=c)throw Error(s(301));if(c+=1,ln=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Sm,f=n(a,r)}while(Js);return f}function ux(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Lu(){var e=Ml!==0;return Ml=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}Zi=0,ln=Ht=ot=null,Js=!1,so=Ml=0,$s=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ot.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=ln===null?ot.memoizedState:ln.next;if(n!==null)ln=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ln===null?ot.memoizedState=ln=e:ln=ln.next=e}return ln}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,$s===null&&($s=[]),e=Cp($s,e,n),n=ot,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?ym:Wu),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===P)return An(e)}throw Error(s(438,String(e)))}function zu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=N;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=nn();return Fu(n,Ht,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,I=null,Q=n,de=!1;do{var ge=Q.lane&-536870913;if(ge!==Q.lane?(_t&ge)===ge:(Zi&ge)===ge){var ee=Q.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ge===Ws&&(de=!0);else if((Zi&ee)===ee){Q=Q.next,ee===Ws&&(de=!0);continue}else ge={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=ge,g=f):I=I.next=ge,ot.lanes|=ee,Pa|=ee;ge=Q.action,ms&&a(f,ge),f=Q.hasEagerState?Q.eagerState:a(f,ge)}else ee={lane:ge,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=ee,g=f):I=I.next=ee,ot.lanes|=ge,Pa|=ge;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=T,!Wn(f,e.memoizedState)&&(cn=!0,de&&(a=Ys,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Iu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Hp(e,n,a){var r=ot,c=nn(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Wn((Ht||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Gu(kp.bind(null,r,c,e),[e]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},Vp.bind(null,r,c,a,n),null),jt===null)throw Error(s(349));f||(Zi&127)!==0||Gp(r,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=bl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,r){n.value=a,n.getSnapshot=r,jp(n)&&Xp(e)}function kp(e,n,a){return a(function(){jp(n)&&Xp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Xp(e){var n=rs(e,2);n!==null&&kn(n,e,2)}function Bu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ms){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function qp(e,n,a,r){return e.baseState=a,Fu(e,Ht,typeof r=="function"?r:Ki)}function fx(e,n,a,r,c){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var T=a(c,r),I=O.S;I!==null&&I(g,T),Yp(e,n,T)}catch(Q){Hu(e,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,r),Yp(e,n,f)}catch(Q){Hu(e,n,Q)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Zp(e,n,r)},function(r){return Hu(e,n,r)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Hu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==r)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(xt){var a=jt.formState;if(a!==null){e:{var r=ot;if(xt){if(qt){t:{for(var c=qt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=ui(c.nextSibling),r=c.data==="F!";break e}}Aa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=r,a=_m.bind(null,ot,r),r.dispatch=a,r=Bu(!1),f=qu.bind(null,ot,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=fx.bind(null,ot,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function $p(e){var n=nn();return em(n,Ht,e)}function em(e,n,a){if(n=Fu(e,n,Qp)[0],e=Tl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(g){throw g===Zs?ml:g}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,er(9,{destroy:void 0},dx.bind(null,c,a),null)),[r,f,e]}function dx(e,n){e.action=n}function tm(e){var n=nn(),a=Ht;if(a!==null)return em(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function er(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=bl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function nm(){return nn().memoizedState}function Al(e,n,a,r){var c=Pn();ot.flags|=e,c.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ht!==null&&r!==null&&Du(r,Ht.memoizedState.deps)?c.memoizedState=er(n,f,a,r):(ot.flags|=e,c.memoizedState=er(1|n,f,a,r))}function im(e,n){Al(8390656,8,e,n)}function Gu(e,n){Rl(2048,8,e,n)}function hx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=bl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function am(e){var n=nn().memoizedState;return hx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function sm(e,n){return Rl(4,2,e,n)}function rm(e,n){return Rl(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,om.bind(null,n,e),a)}function Vu(){}function cm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Du(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Du(n,r[1]))return r[0];if(r=e(),ms){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r}function ku(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=f0(),ot.lanes|=e,Pa|=e,a)}function fm(e,n,a,r){return Wn(a,n)?a:Qs.current!==null?(e=ku(e,a,r),Wn(e,n)||(cn=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(_t&261930)===0?(cn=!0,e.memoizedState=a):(e=f0(),ot.lanes|=e,Pa|=e,n)}function dm(e,n,a,r,c){var f=G.p;G.p=f!==0&&8>f?f:8;var g=O.T,T={};O.T=T,qu(e,!1,n,a);try{var I=c(),Q=O.S;if(Q!==null&&Q(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=lx(I,r);oo(e,n,de,$n(e))}else oo(e,n,r,$n(e))}catch(ge){oo(e,n,{then:function(){},status:"rejected",reason:ge},$n())}finally{G.p=f,g!==null&&T.types!==null&&(g.types=T.types),O.T=g}}function px(){}function ju(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=hm(e).queue;dm(e,c,n,ie,a===null?px:function(){return pm(e),a(r)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},$n())}function Xu(){return An(To)}function mm(){return nn().memoizedState}function gm(){return nn().memoizedState}function mx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ca(a);var r=Na(n,e,a);r!==null&&(kn(r,n,a),no(r,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function gx(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?vm(n,a):(a=cu(e,n,a,r),a!==null&&(kn(a,e,r),xm(a,n,r)))}function _m(e,n,a){var r=$n();oo(e,n,a,r)}function oo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,g))return ll(e,n,c,0),jt===null&&ol(),!1}catch{}if(a=cu(e,n,c,r),a!==null)return kn(a,e,r),xm(a,n,r),!0}return!1}function qu(e,n,a,r){if(r={lane:2,revertLane:Tf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=cu(e,a,r,2),n!==null&&kn(n,e,2)}function wl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function vm(e,n){Js=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zr(e,a)}}var lo={readContext:An,use:El,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};lo.useEffectEvent=$t;var ym={readContext:An,use:El,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ms){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(ms){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=gx.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=_m.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Pn();return ku(a,e,n)},useTransition:function(){var e=Bu(!1);return e=dm.bind(null,ot,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ot,c=Pn();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(_t&127)!==0||Gp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,r,f,e),[e]),r.flags|=2048,er(9,{destroy:void 0},Vp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=jt.identifierPrefix;if(xt){var a=Di,r=Ni;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return Pn().memoizedState=mx.bind(null,ot)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:An,use:El,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:Tl,useRef:nm,useState:function(){return Tl(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=nn();return fm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Tl(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Xu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=nn();return qp(a,Ht,e,n)},useMemoCache:zu,useCacheRefresh:gm};Wu.useEffectEvent=am;var Sm={readContext:An,use:El,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:Iu,useRef:nm,useState:function(){return Iu(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=nn();return Ht===null?ku(a,e,n):fm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Iu(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Xu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=nn();return Ht!==null?qp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:gm};Sm.useEffectEvent=am;function Yu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Ca(r);c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,r),n!==null&&(kn(n,e,r),no(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Ca(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,r),n!==null&&(kn(n,e,r),no(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=Ca(a);r.tag=2,n!=null&&(r.callback=n),n=Na(e,r,a),n!==null&&(kn(n,e,a),no(n,e,a))}};function Mm(e,n,a,r,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function bm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Em(e){rl(e)}function Tm(e){console.error(e)}function Am(e){rl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Rm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function wm(e){return e=Ca(e),e.tag=3,e}function Cm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Rm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Rm(n,a,r),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function _x(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Gl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mf(e,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mf(e,r,c)),!1}throw Error(s(435,a.tag))}return Mf(e,r,c),Gl(),!1}if(xt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==mu&&(e=Error(s(422),{cause:r}),Qr(si(e,a)))):(r!==mu&&(n=Error(s(423),{cause:r}),Qr(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=Ku(e.stateNode,r,c),Au(e,c),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),_o===null?_o=[f]:_o.push(f),en!==4&&(en=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ku(a.stateNode,r,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wm(c),Cm(c,e,a,r),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(s(461)),cn=!1;function Rn(e,n,a,r){n.child=e===null?Lp(n,null,a,r):ps(n,e.child,a,r)}function Nm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return us(n),r=Uu(e,n,a,g,f,c),T=Lu(),e!==null&&!cn?(Ou(e,n,c),Qi(e,n,c)):(xt&&T&&hu(n),n.flags|=1,Rn(e,n,r,c),n.child)}function Dm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(e,n,f,r,c)):(e=ul(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!rf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(g,r)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=Xi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Um(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Yr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,rf(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return Ju(e,n,a,r,c)}function Lm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Om(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):wu(),Fp(n);else return r=n.lanes=536870912,Om(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),zp(n,f),Ua(),n.memoizedState=null):(e!==null&&pl(n,null),wu(),Ua());return Rn(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Om(e,n,a,r,c){var f=Mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pl(n,null),wu(),Fp(n),e!==null&&qs(e,n,r,!0),n.childLanes=c,null}function Nl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pm(e,n,a){return ps(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function vx(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(r.mode==="hidden")return e=Nl(n,r),n.lanes=536870912,co(null,e);if(Nu(n),(e=qt)?(e=W0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return Nl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Pm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||qs(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(r=jt,r!==null&&(g=Ds(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rs(e,g),kn(r,e,g),Qu;Gl(),n=Pm(e,n,a)}else e=f.treeContext,qt=ui(g.nextSibling),Tn=n,xt=!0,Ta=null,li=!1,e!==null&&Sp(n,e),n=Nl(n,r),n.flags|=4096;return n}return e=Xi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,r,c){return us(n),a=Uu(e,n,a,r,void 0,c),r=Lu(),e!==null&&!cn?(Ou(e,n,c),Qi(e,n,c)):(xt&&r&&hu(n),n.flags|=1,Rn(e,n,a,c),n.child)}function zm(e,n,a,r,c,f){return us(n),n.updateQueue=null,a=Bp(n,r,a,c),Ip(e),r=Lu(),e!==null&&!cn?(Ou(e,n,f),Qi(e,n,f)):(xt&&r&&hu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Fm(e,n,a,r,c){if(us(n),n.stateNode===null){var f=Vs,g=a.contextType;typeof g=="object"&&g!==null&&(f=An(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Eu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?An(g):Vs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=gs(a,T);f.props=I;var Q=f.context,de=a.contextType;g=Vs,typeof de=="object"&&de!==null&&(g=An(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&bm(n,f,r,g),wa=!1;var ee=n.memoizedState;f.state=ee,ao(n,r,f,c),io(),Q=n.memoizedState,T||ee!==Q||wa?(typeof ge=="function"&&(Yu(n,a,ge,r),Q=n.memoizedState),(I=wa||Mm(n,a,I,r,ee,Q,g))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tu(e,n),g=n.memoizedProps,de=gs(a,g),f.props=de,ge=n.pendingProps,ee=f.context,Q=a.contextType,I=Vs,typeof Q=="object"&&Q!==null&&(I=An(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||ee!==I)&&bm(n,f,r,I),wa=!1,ee=n.memoizedState,f.state=ee,ao(n,r,f,c),io();var le=n.memoizedState;g!==ge||ee!==le||wa||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof T=="function"&&(Yu(n,a,T,r),le=n.memoizedState),(de=wa||Mm(n,a,de,r,ee,le,I)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=I,r=de):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ps(n,e.child,null,c),n.child=ps(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function Im(e,n,a,r){return ls(),n.flags|=256,Rn(e,n,a,r),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Rp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Bm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Da(n):Ua(),(e=qt)?(e=W0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Aa(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Ua(),c=n.mode,T=Ul({mode:"hidden",children:T},c),r=os(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,g,a),n.memoizedState=$u,co(null,r)):(Da(n),nf(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=r.fallback,c=n.mode,r=Ul({mode:"visible",children:r.children},c),T=os(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,ps(n,e.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,g,a),n.memoizedState=$u,n=co(null,r));else if(Da(n),If(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,Qr({value:r,source:null,stack:null}),n=af(e,n,a)}else if(cn||qs(e,n,a,!1),g=(a&e.childLanes)!==0,cn||g){if(g=jt,g!==null&&(r=Ds(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,rs(e,r),kn(g,e,r),Qu;Ff(T)||Gl(),n=af(e,n,a)}else Ff(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,qt=ui(T.nextSibling),Tn=n,xt=!0,Ta=null,li=!1,e!==null&&Sp(n,e),n=nf(n,r.children),n.flags|=4096);return n}return c?(Ua(),T=r.fallback,c=n.mode,I=e.child,Q=I.sibling,r=Xi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?T=Xi(Q,T):(T=os(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,co(null,r),r=n.child,T=e.child.memoizedState,T===null?T=ef(a):(c=T.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Rp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=tf(e,g,a),n.memoizedState=$u,co(e.child,r)):(Da(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function af(e,n,a){return ps(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),vu(e.return,n,a)}function sf(e,n,a,r,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Gm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,_e(tn,g),Rn(e,n,r,a),r=xt?Kr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,a,n);else if(e.tag===19)Hm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&yl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,f,r);break;case"together":sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function xx(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ra(n,on,e.memoizedState.cache),ls();break;case 27:case 5:He(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bm(e,n,a):(Da(n),e=Qi(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(qs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Gm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Lm(e,n,a,n.pendingProps);case 24:Ra(n,on,e.memoizedState.cache)}return Qi(e,n,a)}function Vm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!rf(e,a)&&(n.flags&128)===0)return cn=!1,xx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,xt&&(n.flags&1048576)!==0&&yp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")uu(e)?(r=gs(e,r),n.tag=1,n=Fm(null,n,e,r,a)):(n.tag=0,n=Ju(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Nm(null,n,e,r,a);break e}else if(c===F){n.tag=14,n=Dm(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=gs(r,n.pendingProps),Fm(e,n,r,c,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(e,n),ao(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ra(n,on,r),r!==f.cache&&xu(n,[on],a,!0),io(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),Qr(c),n=Im(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=ui(e.firstChild),Tn=n,xt=!0,Ta=null,li=!0,a=Lp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ls(),r===c){n=Qi(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=$0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,r=Yl(te.current).createElement(a),r[rn]=n,r[xn]=e,wn(r,a,e),A(r),n.stateNode=r):n.memoizedState=$0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(r=n.stateNode=K0(n.type,n.pendingProps,te.current),Tn=n,li=!0,c=qt,Ha(n.type)?(Bf=c,qt=ui(r.firstChild)):qt=c),Rn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=r=qt)&&(r=Zx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Tn=n,qt=ui(r.firstChild),li=!1,c=!0):c=!1),c||Aa(n)),He(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Of(c,f)?r=null:g!==null&&Of(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(e,n,ux,null,null,a),To._currentValue=c),Dl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&xt&&((e=a=qt)&&(a=Kx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,qt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return Bm(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ps(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ra(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,us(n),c=An(c),r=r(c),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return Dm(e,n,n.type,n.pendingProps,a);case 15:return Um(e,n,n.type,n.pendingProps,a);case 19:return Gm(e,n,a);case 31:return vx(e,n,a);case 22:return Lm(e,n,a,n.pendingProps);case 24:return us(n),r=An(on),e===null?(c=Mu(),c===null&&(c=jt,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Eu(n),Ra(n,on,c)):((e.lanes&a)!==0&&(Tu(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,on,r)):(r=f.cache,Ra(n,on,r),r!==c.cache&&xu(n,[on],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(e){e.flags|=4}function of(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(m0())e.flags|=8192;else throw hs=gl,bu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ag(n))if(m0())e.flags|=8192;else throw hs=gl,bu}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,ar|=n)}function uo(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function yx(e,n,a){var r=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Yi(on),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(Wt(n),km(n,f)):(Wt(n),of(n,c,null,r,a))):f?f!==e.memoizedState?(Ji(n),Wt(n),km(n,f)):(Wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ji(n),Wt(n),of(n,c,e,r,a)),null;case 27:if(dt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}e=Ae.current,Xs(n)?Mp(n):(e=K0(c,r,a),n.stateNode=e,Ji(n))}return Wt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}if(f=Ae.current,Xs(n))Mp(n);else{var g=Yl(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[rn]=n,f[xn]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(wn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ji(n)}}return Wt(n),of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,Xs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||B0(e.nodeValue,a)),e||Aa(n,!0)}else e=Yl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Xs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Wt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Wt(n),null);case 4:return ke(),e===null&&Cf(n.stateNode.containerInfo),Wt(n),null;case 10:return Yi(n.type),Wt(n),null;case 19:if(ne(tn),r=n.memoizedState,r===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,uo(r,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)_p(a,e),a=a.sibling;return _e(tn,tn.current&1|2),xt&&qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Il&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(e=yl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xt)return Wt(n),null}else 2*M()-r.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=tn.current,_e(tn,c?a&1|2:a&1),xt&&qi(n,r.treeForkCount),e):(Wt(n),null);case 22:case 23:return Kn(n),Cu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(on),Wt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Sx(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(on),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(tn),null;case 4:return ke(),null;case 10:return Yi(n.type),null;case 22:case 23:return Kn(n),Cu(),e!==null&&ne(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(on),null;case 25:return null;default:return null}}function jm(e,n){switch(pu(n),n.tag){case 3:Yi(on),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ne(tn);break;case 10:Yi(n.type);break;case 22:case 23:Kn(n),Cu(),e!==null&&ne(fs);break;case 24:Yi(on)}}function fo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(T){Ft(n,n.return,T)}}function La(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var I=a,Q=T;try{Q()}catch(de){Ft(c,I,de)}}}r=r.next}while(r!==f)}}catch(de){Ft(n,n.return,de)}}function Xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(r){Ft(e,e.return,r)}}}function qm(e,n,a){a.props=gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ft(e,n,c)}}function Ui(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function lf(e,n,a){try{var r=e.stateNode;kx(r,e.type,a,n),r[xn]=n}catch(c){Ft(e,e.return,c)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Ol(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function Zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,r,a),n[rn]=e,n[xn]=a}catch(f){Ft(e,e.return,f)}}var $i=!1,un=!1,ff=!1,Km=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Mx(e,n){if(e=e.containerInfo,Uf=tc,e=lp(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,T=-1,I=-1,Q=0,de=0,ge=e,ee=null;t:for(;;){for(var le;ge!==a||c!==0&&ge.nodeType!==3||(T=g+c),ge!==f||r!==0&&ge.nodeType!==3||(I=g+r),ge.nodeType===3&&(g+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ee=ge,ge=le;for(;;){if(ge===e)break t;if(ee===a&&++Q===c&&(T=g),ee===f&&++de===r&&(I=g),(le=ge.nextSibling)!==null)break;ge=ee,ee=ge.parentNode}ge=le}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},tc=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ve=gs(a.type,c);e=r.getSnapshotBeforeUpdate(Ve,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Qm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&fo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ft(a,a.return,g)}else{var c=gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ft(a,a.return,g)}}r&64&&Xm(a),r&512&&ho(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(g){Ft(a,a.return,g)}}break;case 27:n===null&&r&4&&Zm(a);case 26:case 5:ta(e,a),n===null&&r&4&&Wm(a),r&512&&ho(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&e0(e,a);break;case 13:ta(e,a),r&4&&t0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dx.bind(null,a),Qx(e,a))));break;case 22:if(r=a.memoizedState!==null||$i,!r){n=n!==null&&n.memoizedState!==null||un,c=$i;var f=un;$i=r,(un=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,un=f}break;case 30:break;default:ta(e,a)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,Bn=!1;function ea(e,n,a){for(a=a.child;a!==null;)$m(e,n,a),a=a.sibling}function $m(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var r=Kt,c=Bn;Ha(a.type)&&(Kt=a.stateNode,Bn=!1),ea(e,n,a),Mo(a.stateNode),Kt=r,Bn=c;break;case 5:un||Ui(a,n);case 6:if(r=Kt,c=Bn,Kt=null,ea(e,n,a),Kt=r,Bn=c,Kt!==null)if(Bn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Kt!==null&&(Bn?(e=Kt,X0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dr(e)):X0(Kt,a.stateNode));break;case 4:r=Kt,c=Bn,Kt=a.stateNode.containerInfo,Bn=!0,ea(e,n,a),Kt=r,Bn=c;break;case 0:case 11:case 14:case 15:La(2,a,n),un||La(4,a,n),ea(e,n,a);break;case 1:un||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&qm(a,n,r)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,ea(e,n,a),un=r;break;default:ea(e,n,a)}}function e0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dr(e)}catch(a){Ft(n,n.return,a)}}}function t0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(a){Ft(n,n.return,a)}}function bx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Km),n;default:throw Error(s(435,e.tag))}}function Pl(e,n){var a=bx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Ux.bind(null,e,r);r.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,g=n,T=g;e:for(;T!==null;){switch(T.tag){case 27:if(Ha(T.type)){Kt=T.stateNode,Bn=!1;break e}break;case 5:Kt=T.stateNode,Bn=!1;break e;case 3:case 4:Kt=T.stateNode.containerInfo,Bn=!0;break e}T=T.return}if(Kt===null)throw Error(s(160));$m(f,g,c),Kt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)n0(n,e),n=n.sibling}var yi=null;function n0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(La(3,e,e.return),fo(3,e),La(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(un||a===null||Ui(a,a.return)),r&64&&$i&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=yi;if(Hn(n,e),Gn(e),r&512&&(un||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ts]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,r,a),f[rn]=e,A(f),r=f;break e;case"link":var g=ng("link","href",c).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break t}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=ng("meta","content",c).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break t}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,A(f),r=f}e.stateNode=r}else ig(c,e.type,e.stateNode);else e.stateNode=tg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ig(c,e.type,e.stateNode):tg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(un||a===null||Ui(a,a.return)),a!==null&&r&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(un||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{dn(c,"")}catch(Ve){Ft(e,e.return,Ve)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(ff=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ve){Ft(e,e.return,Ve)}}break;case 3:if(Ql=null,c=yi,yi=Zl(n.containerInfo),Hn(n,e),yi=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Ve){Ft(e,e.return,Ve)}ff&&(ff=!1,i0(e));break;case 4:r=yi,yi=Zl(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=$i,de=un;if($i=Q||c,un=de||I,Hn(n,e),un=de,$i=Q,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||$i||un||_s(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=I.stateNode;var ge=I.memoizedProps.style,ee=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;c?q0(le,!0):q0(I.stateNode,!1)}catch(Ve){Ft(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Ym(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Ol(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(dn(g,""),a.flags&=-33);var T=cf(e);Ol(e,T,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=cf(e);uf(e,Q,I);break;default:throw Error(s(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function i0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;i0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(e,n.alternate,n),n=n.sibling}function _s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_s(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),_s(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),_s(n);break;case 22:n.memoizedState===null&&_s(n);break;case 30:_s(n);break;default:_s(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),fo(4,f);break;case 1:if(na(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ft(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Op(I[c],T)}catch(Q){Ft(r,r.return,Q)}}a&&g&64&&Xm(f),ho(f,f.return);break;case 27:Zm(f);case 26:case 5:na(c,f,a),a&&r===null&&g&4&&Wm(f),ho(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&e0(c,f);break;case 13:na(c,f,a),a&&g&4&&t0(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),ho(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function Si(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(e,n,a,r),n=n.sibling}function a0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,r),c&2048&&fo(9,n);break;case 1:Si(e,n,a,r);break;case 3:Si(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(c&2048){Si(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else Si(e,n,a,r);break;case 31:Si(e,n,a,r);break;case 13:Si(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,r):po(e,n):f._visibility&2?Si(e,n,a,r):(f._visibility|=2,tr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:Si(e,n,a,r),c&2048&&hf(n.alternate,n);break;default:Si(e,n,a,r)}}function tr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,I=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:tr(f,g,T,I,c),fo(8,g);break;case 23:break;case 22:var de=g.stateNode;g.memoizedState!==null?de._visibility&2?tr(f,g,T,I,c):po(f,g):(de._visibility|=2,tr(f,g,T,I,c)),c&&Q&2048&&df(g.alternate,g);break;case 24:tr(f,g,T,I,c),c&&Q&2048&&hf(g.alternate,g);break;default:tr(f,g,T,I,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&df(r.alternate,r);break;case 24:po(a,r),c&2048&&hf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function nr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)s0(e,n,a),e=e.sibling}function s0(e,n,a){switch(e.tag){case 26:nr(e,n,a),e.flags&mo&&e.memoizedState!==null&&cy(a,yi,e.memoizedState,e.memoizedProps);break;case 5:nr(e,n,a);break;case 3:case 4:var r=yi;yi=Zl(e.stateNode.containerInfo),nr(e,n,a),yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,nr(e,n,a),mo=r):nr(e,n,a));break;default:nr(e,n,a)}}function r0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,l0(r,e)}r0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o0(e),e=e.sibling}function o0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&La(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):go(e);break;default:go(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,l0(r,e)}r0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function l0(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else e:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Jm(r),r===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var Ex={getCacheForType:function(e){var n=An(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(on).controller.signal}},Tx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,pt=null,_t=0,zt=0,Qn=null,Oa=!1,ir=!1,pf=!1,ia=0,en=0,Pa=0,vs=0,mf=0,Jn=0,ar=0,_o=null,Vn=null,gf=!1,Fl=0,c0=0,Il=1/0,Bl=null,za=null,hn=0,Fa=null,sr=null,aa=0,_f=0,vf=null,u0=null,vo=0,xf=null;function $n(){return(Dt&2)!==0&&_t!==0?_t&-_t:O.T!==null?Tf():Ir()}function f0(){if(Jn===0)if((_t&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===jt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Ia(e,_t,Jn,!1)),Nn(e,a),((Dt&2)===0||e!==jt)&&(e===jt&&((Dt&2)===0&&(vs|=a),en===4&&Ia(e,_t,Jn,!1)),Li(e))}function d0(e,n,a){if((Dt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=r?wx(e,n):Sf(e,n,!0),f=r;do{if(c===0){ir&&!r&&Ia(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ax(a)){c=Sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var T=e;c=_o;var I=T.current.memoizedState.isDehydrated;if(I&&(rr(T,g).flags|=256),g=Sf(T,g,!1),g!==2){if(pf&&!I){T.errorRecoveryDisabledLanes|=f,vs|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){rr(e,0),Ia(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(r,n,Jn,!Oa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-M(),10<c)){if(Ia(r,n,Jn,!Oa),ve(r,0,!0)!==0)break e;aa=n,r.timeoutHandle=k0(h0.bind(null,r,a,Vn,Bl,gf,n,Jn,vs,ar,Oa,f,"Throttled",-0,0),c);break e}h0(r,a,Vn,Bl,gf,n,Jn,vs,ar,Oa,f,null,-0,0)}}break}while(!0);Li(e)}function h0(e,n,a,r,c,f,g,T,I,Q,de,ge,ee,le){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},s0(n,f,ge);var Ve=(f&62914560)===f?Fl-M():(f&4194048)===f?c0-M():0;if(Ve=uy(ge,Ve),Ve!==null){aa=f,e.cancelPendingCommit=Ve(S0.bind(null,e,n,f,a,r,c,g,T,I,de,ge,null,ee,le)),Ia(e,f,g,!Q);return}}S0(e,n,f,a,r,c,g,T,I)}function Ax(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,a,r){n&=~mf,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Qo(e,a,n)}function Hl(){return(Dt&6)===0?(xo(0),!1):!0}function yf(){if(pt!==null){if(zt===0)var e=pt.return;else e=pt,Wi=cs=null,Pu(e),Ks=null,eo=0,e=pt;for(;e!==null;)jm(e.alternate,e),e=e.return;pt=null}}function rr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,yf(),jt=e,pt=a=Xi(e.current,null),_t=n,zt=0,Qn=null,Oa=!1,ir=Re(e,n),pf=!1,ar=Jn=mf=vs=Pa=en=0,Vn=_o=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Pe(r),f=1<<c;n|=e[c],r&=~f}return ia=n,ol(),a}function p0(e,n){ot=null,O.H=lo,n===Zs||n===ml?(n=Np(),zt=3):n===bu?(n=Np(),zt=4):zt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,pt===null&&(en=1,Cl(e,si(n,e.current)))}function m0(){var e=Zn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function g0(){var e=O.H;return O.H=lo,e===null?lo:e}function _0(){var e=O.A;return O.A=Ex,e}function Gl(){en=4,Oa||(_t&4194048)!==_t&&Zn.current!==null||(ir=!0),(Pa&134217727)===0&&(vs&134217727)===0||jt===null||Ia(jt,_t,Jn,!1)}function Sf(e,n,a){var r=Dt;Dt|=2;var c=g0(),f=_0();(jt!==e||_t!==n)&&(Bl=null,rr(e,n)),n=!1;var g=en;e:do try{if(zt!==0&&pt!==null){var T=pt,I=Qn;switch(zt){case 8:yf(),g=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=zt;if(zt=0,Qn=null,or(e,T,I,Q),a&&ir){g=0;break e}break;default:Q=zt,zt=0,Qn=null,or(e,T,I,Q)}}Rx(),g=en;break}catch(de){p0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Wi=cs=null,Dt=r,O.H=c,O.A=f,pt===null&&(jt=null,_t=0,ol()),g}function Rx(){for(;pt!==null;)v0(pt)}function wx(e,n){var a=Dt;Dt|=2;var r=g0(),c=_0();jt!==e||_t!==n?(Bl=null,Il=M()+500,rr(e,n)):ir=Re(e,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=Qn;t:switch(zt){case 1:zt=0,Qn=null,or(e,n,f,1);break;case 2:case 9:if(wp(f)){zt=0,Qn=null,x0(n);break}n=function(){zt!==2&&zt!==9||jt!==e||(zt=7),Li(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:wp(f)?(zt=0,Qn=null,x0(n)):(zt=0,Qn=null,or(e,n,f,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var T=pt;if(g?ag(g):T.stateNode.complete){zt=0,Qn=null;var I=T.sibling;if(I!==null)pt=I;else{var Q=T.return;Q!==null?(pt=Q,Vl(Q)):pt=null}break t}}zt=0,Qn=null,or(e,n,f,5);break;case 6:zt=0,Qn=null,or(e,n,f,6);break;case 8:yf(),en=6;break e;default:throw Error(s(462))}}Cx();break}catch(de){p0(e,de)}while(!0);return Wi=cs=null,O.H=r,O.A=c,Dt=a,pt!==null?0:(jt=null,_t=0,ol(),en)}function Cx(){for(;pt!==null&&!We();)v0(pt)}function v0(e){var n=Vm(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?Vl(e):pt=n}function x0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Pu(n);default:jm(a,n),n=pt=_p(n,ia),n=Vm(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?Vl(e):pt=n}function or(e,n,a,r){Wi=cs=null,Pu(n),Ks=null,eo=0;var c=n.return;try{if(_x(e,c,n,a,_t)){en=1,Cl(e,si(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;en=1,Cl(e,si(a,e.current)),pt=null;return}n.flags&32768?(xt||r===1?e=!0:ir||(_t&536870912)!==0?e=!1:(Oa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),y0(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){y0(n,Oa);return}e=n.return;var a=yx(n.alternate,n,ia);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);en===0&&(en=5)}function y0(e,n){do{var a=Sx(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);en=6,pt=null}function S0(e,n,a,r,c,f,g,T,I){e.cancelPendingCommit=null;do kl();while(hn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=lu,gi(e,a,f,g,T,I),e===jt&&(pt=jt=null,_t=0),sr=n,Fa=e,aa=a,_f=f,vf=c,u0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lx(ce,function(){return A0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=G.p,G.p=2,g=Dt,Dt|=4;try{Mx(e,n,a)}finally{Dt=g,G.p=c,O.T=r}}hn=1,M0(),b0(),E0()}}function M0(){if(hn===1){hn=0;var e=Fa,n=sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=G.p;G.p=2;var c=Dt;Dt|=4;try{n0(n,e);var f=Lf,g=lp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&op(T.ownerDocument.documentElement,T)){if(I!==null&&iu(T)){var Q=I.start,de=I.end;if(de===void 0&&(de=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,ee=ge&&ge.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),Ve=T.textContent.length,et=Math.min(I.start,Ve),Vt=I.end===void 0?et:Math.min(I.end,Ve);!le.extend&&et>Vt&&(g=Vt,Vt=et,et=g);var Y=rp(T,et),k=rp(T,Vt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var K=ge.createRange();K.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Vt?(le.addRange(K),le.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),le.addRange(K))}}}}for(ge=[],le=T;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}tc=!!Uf,Lf=Uf=null}finally{Dt=c,G.p=r,O.T=a}}e.current=n,hn=2}}function b0(){if(hn===2){hn=0;var e=Fa,n=sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=G.p;G.p=2;var c=Dt;Dt|=4;try{Qm(e,n.alternate,n)}finally{Dt=c,G.p=r,O.T=a}}hn=3}}function E0(){if(hn===4||hn===3){hn=0,D();var e=Fa,n=sr,a=aa,r=u0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,sr=Fa=null,T0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(za=null),Us(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=G.p,G.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{O.T=n,G.p=c}}(aa&3)!==0&&kl(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===xf?vo++:(vo=0,xf=e):vo=0,xo(0)}}function T0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function kl(){return M0(),b0(),E0(),A0()}function A0(){if(hn!==5)return!1;var e=Fa,n=_f;_f=0;var a=Us(aa),r=O.T,c=G.p;try{G.p=32>a?32:a,O.T=null,a=vf,vf=null;var f=Fa,g=aa;if(hn=0,sr=Fa=null,aa=0,(Dt&6)!==0)throw Error(s(331));var T=Dt;if(Dt|=4,o0(f.current),a0(f,f.current,g,a),Dt=T,xo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{G.p=c,O.T=r,T0(e,n)}}function R0(e,n,a){n=si(a,n),n=Ku(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Nn(e,2),Li(e))}function Ft(e,n,a){if(e.tag===3)R0(e,e,a);else for(;n!==null;){if(n.tag===3){R0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){e=si(a,e),a=wm(2),r=Na(n,a,2),r!==null&&(Cm(a,r,n,e),Nn(r,2),Li(r));break}}n=n.return}}function Mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(pf=!0,c.add(a),e=Nx.bind(null,e,n,a),n.then(e,e))}function Nx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(_t&a)===a&&(en===4||en===3&&(_t&62914560)===_t&&300>M()-Fl?(Dt&2)===0&&rr(e,0):mf|=a,ar===_t&&(ar=0)),Li(e)}function w0(e,n){n===0&&(n=Ot()),e=rs(e,n),e!==null&&(Nn(e,n),Li(e))}function Dx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(e,a)}function Ux(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),w0(e,a)}function Lx(e,n){return St(e,n)}var jl=null,lr=null,bf=!1,Xl=!1,Ef=!1,Ba=0;function Li(e){e!==lr&&e.next===null&&(lr===null?jl=lr=e:lr=lr.next=e),Xl=!0,bf||(bf=!0,Px())}function xo(e,n){if(!Ef&&Xl){Ef=!0;do for(var a=!1,r=jl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,U0(r,f))}else f=_t,f=ve(r,r===jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Re(r,f)||(a=!0,U0(r,f));r=r.next}while(a);Ef=!1}}function Ox(){C0()}function C0(){Xl=bf=!1;var e=0;Ba!==0&&Xx()&&(e=Ba);for(var n=M(),a=null,r=jl;r!==null;){var c=r.next,f=N0(r,n);f===0?(r.next=null,a===null?jl=c:a.next=c,c===null&&(lr=a)):(a=r,(e!==0||(f&3)!==0)&&(Xl=!0)),r=c}hn!==0&&hn!==5||xo(e),Ba!==0&&(Ba=0)}function N0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Pe(f),T=1<<g,I=c[g];I===-1?((T&a)===0||(T&r)!==0)&&(c[g]=nt(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=jt,a=_t,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ut(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ut(r),Us(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=we;break;default:a=ce}return r=D0.bind(null,e),a=St(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ut(r),e.callbackPriority=2,e.callbackNode=null,2}function D0(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kl()&&e.callbackNode!==a)return null;var r=_t;return r=ve(e,e===jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(d0(e,r,n),N0(e,M()),e.callbackNode!=null&&e.callbackNode===a?D0.bind(null,e):null)}function U0(e,n){if(kl())return null;d0(e,n,!0)}function Px(){Wx(function(){(Dt&6)!==0?St(he,Ox):C0()})}function Tf(){if(Ba===0){var e=Ws;e===0&&(e=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ba=e}return Ba}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function O0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=L0((c[xn]||null).action),g=r.submitter;g&&(n=(n=g[xn]||null)?L0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new il("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ba!==0){var I=g?O0(c,g):new FormData(c);ju(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=g?O0(c,g):new FormData(c),ju(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Fx=Rf.toLowerCase(),Ix=Rf[0].toUpperCase()+Rf.slice(1);xi(Fx,"on"+Ix)}xi(fp,"onAnimationEnd"),xi(dp,"onAnimationIteration"),xi(hp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(ex,"onTransitionRun"),xi(tx,"onTransitionStart"),xi(nx,"onTransitionCancel"),xi(pp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function P0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],I=T.instance,Q=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(T=r[g],I=T.instance,Q=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=I}}}}function mt(e,n){var a=n[Ls];a===void 0&&(a=n[Ls]=new Set);var r=e+"__bubble";a.has(r)||(z0(n,e,2,!1),a.add(r))}function wf(e,n,a){var r=0;n&&(r|=4),z0(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[ql]){e[ql]=!0,W.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,wf("selectionchange",!1,n))}}function z0(e,n,a,r){switch(fg(n)){case 2:var c=hy;break;case 8:c=py;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=ya(T),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue e}T=T.parentNode}}r=r.return}Gh(function(){var Q=f,de=qc(a),ge=[];e:{var ee=mp.get(e);if(ee!==void 0){var le=il,Ve=e;switch(e){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":le=Uv;break;case"focusin":Ve="focus",le=Jc;break;case"focusout":Ve="blur",le=Jc;break;case"beforeblur":case"afterblur":le=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Pv;break;case fp:case dp:case hp:le=bv;break;case pp:le=Fv;break;case"scroll":case"scrollend":le=vv;break;case"wheel":le=Bv;break;case"copy":case"cut":case"paste":le=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=qh;break;case"toggle":case"beforetoggle":le=Gv}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),Y=et?ee!==null?ee+"Capture":null:ee;et=[];for(var k=Q,K;k!==null;){var me=k;if(K=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||K===null||Y===null||(me=Gr(k,Y),me!=null&&et.push(So(k,me,K))),Vt)break;k=k.return}0<et.length&&(ee=new le(ee,Ve,null,a,de),ge.push({event:ee,listeners:et}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ee&&a!==Xc&&(Ve=a.relatedTarget||a.fromElement)&&(ya(Ve)||Ve[_i]))break e;if((le||ee)&&(ee=de.window===de?de:(ee=de.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=Q,Ve=Ve?ya(Ve):null,Ve!==null&&(Vt=u(Ve),et=Ve.tag,Ve!==Vt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=Q),le!==Ve)){if(et=jh,me="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(et=qh,me="onPointerLeave",Y="onPointerEnter",k="pointer"),Vt=le==null?ee:ns(le),K=Ve==null?ee:ns(Ve),ee=new et(me,k+"leave",le,a,de),ee.target=Vt,ee.relatedTarget=K,me=null,ya(de)===Q&&(et=new et(Y,k+"enter",Ve,a,de),et.target=K,et.relatedTarget=Vt,me=et),Vt=me,le&&Ve)t:{for(et=Hx,Y=le,k=Ve,K=0,me=Y;me;me=et(me))K++;me=0;for(var Qe=k;Qe;Qe=et(Qe))me++;for(;0<K-me;)Y=et(Y),K--;for(;0<me-K;)k=et(k),me--;for(;K--;){if(Y===k||k!==null&&Y===k.alternate){et=Y;break t}Y=et(Y),k=et(k)}et=null}else et=null;le!==null&&F0(ge,ee,le,et,!1),Ve!==null&&Vt!==null&&F0(ge,Vt,Ve,et,!0)}}e:{if(ee=Q?ns(Q):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var Tt=ep;else if(Jh(ee))if(tp)Tt=Qv;else{Tt=Zv;var Ye=Yv}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Q&&vi(Q.elementType)&&(Tt=ep):Tt=Kv;if(Tt&&(Tt=Tt(e,Q))){$h(ge,Tt,a,de);break e}Ye&&Ye(e,ee,Q),e==="focusout"&&Q&&ee.type==="number"&&Q.memoizedProps.value!=null&&Sn(ee,"number",ee.value)}switch(Ye=Q?ns(Q):window,e){case"focusin":(Jh(Ye)||Ye.contentEditable==="true")&&(Bs=Ye,au=Q,Zr=null);break;case"focusout":Zr=au=Bs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,cp(ge,a,de);break;case"selectionchange":if($v)break;case"keydown":case"keyup":cp(ge,a,de)}var ct;if(eu)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Is?Kh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Wh&&a.locale!=="ko"&&(Is||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Is&&(ct=Vh()):(ba=de,Zc="value"in ba?ba.value:ba.textContent,Is=!0)),Ye=Wl(Q,vt),0<Ye.length&&(vt=new Xh(vt,e,null,a,de),ge.push({event:vt,listeners:Ye}),ct?vt.data=ct:(ct=Qh(a),ct!==null&&(vt.data=ct)))),(ct=kv?jv(e,a):Xv(e,a))&&(vt=Wl(Q,"onBeforeInput"),0<vt.length&&(Ye=new Xh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ye,listeners:vt}),Ye.data=ct)),zx(ge,e,Q,a,de)}P0(ge,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(e,a),c!=null&&r.unshift(So(e,c,f)),c=Gr(e,n),c!=null&&r.push(So(e,c,f))),e.tag===3)return r;e=e.return}return[]}function Hx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,I=T.alternate,Q=T.stateNode;if(T=T.tag,I!==null&&I===r)break;T!==5&&T!==26&&T!==27||Q===null||(I=Q,c?(Q=Gr(a,f),Q!=null&&g.unshift(So(a,Q,I))):c||(Q=Gr(a,f),Q!=null&&g.push(So(a,Q,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Gx,`
`).replace(Vx,"")}function B0(e,n){return n=I0(n),I0(e)===n}function Gt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||dn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&dn(e,""+r);break;case"className":Je(e,"class",r);break;case"tabIndex":Je(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,r);break;case"style":Ps(e,r,f);break;case"data":if(n!=="object"){Je(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":mt("beforetoggle",e),mt("toggle",e),Xe(e,"popover",r);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,Xe(e,a,r))}}function Df(e,n,a,r,c,f){switch(a){case"style":Ps(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?dn(e,r):(typeof r=="number"||typeof r=="bigint")&&dn(e,""+r);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xe(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,g,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),r&&Gt(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var T=f=g=c=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":c=de;break;case"type":g=de;break;case"checked":I=de;break;case"defaultChecked":Q=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Gt(e,n,r,de,a,null)}}Vi(e,f,T,I,Q,g,c,!1);return;case"select":mt("invalid",e),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Gt(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!r,n!=null?ii(e,!!r,n,!1):a!=null&&ii(e,!!r,a,!0);return;case"textarea":mt("invalid",e),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Gt(e,n,g,T,a,null)}Mn(e,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Gt(e,n,I,r,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(r=0;r<yo.length;r++)mt(yo[r],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,Q,r,a,null)}return;default:if(vi(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Df(e,n,de,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Gt(e,n,T,r,a,null))}function kx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,I=null,Q=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=ge;default:r.hasOwnProperty(le)||Gt(e,n,le,null,r,ge)}}for(var ee in r){var le=r[ee];if(ge=a[ee],r.hasOwnProperty(ee)&&(le!=null||ge!=null))switch(ee){case"type":f=le;break;case"name":c=le;break;case"checked":Q=le;break;case"defaultChecked":de=le;break;case"value":g=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ge&&Gt(e,n,ee,le,r,ge)}}yn(e,g,T,I,Q,de,f,c);return;case"select":le=g=T=ee=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:r.hasOwnProperty(f)||Gt(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ee=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==I&&Gt(e,n,c,f,r,I)}n=T,a=g,r=le,ee!=null?ii(e,!!a,ee,!1):!!r!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(e,n,T,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ee=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Gt(e,n,g,c,r,f)}Pt(e,ee,le);return;case"option":for(var Ve in a)ee=a[Ve],a.hasOwnProperty(Ve)&&ee!=null&&!r.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Gt(e,n,Ve,null,r,ee));for(I in r)ee=r[I],le=a[I],r.hasOwnProperty(I)&&ee!==le&&(ee!=null||le!=null)&&(I==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Gt(e,n,I,ee,r,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ee=a[et],a.hasOwnProperty(et)&&ee!=null&&!r.hasOwnProperty(et)&&Gt(e,n,et,null,r,ee);for(Q in r)if(ee=r[Q],le=a[Q],r.hasOwnProperty(Q)&&ee!==le&&(ee!=null||le!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Gt(e,n,Q,ee,r,le)}return;default:if(vi(n)){for(var Vt in a)ee=a[Vt],a.hasOwnProperty(Vt)&&ee!==void 0&&!r.hasOwnProperty(Vt)&&Df(e,n,Vt,void 0,r,ee);for(de in r)ee=r[de],le=a[de],!r.hasOwnProperty(de)||ee===le||ee===void 0&&le===void 0||Df(e,n,de,ee,r,le);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!r.hasOwnProperty(Y)&&Gt(e,n,Y,null,r,ee);for(ge in r)ee=r[ge],le=a[ge],!r.hasOwnProperty(ge)||ee===le||ee==null&&le==null||Gt(e,n,ge,ee,r,le)}function H0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&H0(g)){for(g=0,T=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>T)break;var de=I.transferSize,ge=I.initiatorType;de&&H0(ge)&&(I=I.responseEnd,g+=de*(I<T?1:(T-Q)/(I-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Lf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Xx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(Yx)}:k0;function Yx(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function X0(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[ts]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(e.ownerDocument.body);a=c}while(a);dr(n)}function q0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ts])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Kx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bf=null;function Y0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function K0(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hr(e)}var fi=new Map,Q0=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=G.d;G.d={f:Jx,r:$x,D:ey,C:ty,L:ny,m:iy,X:sy,S:ay,M:ry};function Jx(){var e=sa.f(),n=Hl();return e||n}function $x(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):sa.r(e)}var cr=typeof document>"u"?null:document;function J0(e,n,a){var r=cr;if(r&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Q0.has(c)||(Q0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),wn(n,"link",e),A(n),r.head.appendChild(n)))}}function ey(e){sa.D(e),J0("dns-prefetch",e,null)}function ty(e,n){sa.C(e,n),J0("preconnect",e,n)}function ny(e,n,a){sa.L(e,n,a);var r=cr;if(r&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=ur(e);break;case"script":f=fr(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(Eo(f))||(n=r.createElement("link"),wn(n,"link",e),A(n),r.head.appendChild(n)))}}function iy(e,n){sa.m(e,n);var a=cr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(r)+'"][href="'+it(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fr(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}r=a.createElement("link"),wn(r,"link",e),A(r),a.head.appendChild(r)}}}function ay(e,n,a){sa.S(e,n,a);var r=cr;if(r&&e){var c=Ma(r).hoistableStyles,f=ur(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(bo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Hf(e,a);var I=g=r.createElement("link");A(I),wn(I,"link",e),I._p=new Promise(function(Q,de){I.onload=Q,I.onerror=de}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Kl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function sy(e,n){sa.X(e,n);var a=cr;if(a&&e){var r=Ma(a).hoistableScripts,c=fr(e),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ry(e,n){sa.M(e,n);var a=cr;if(a&&e){var r=Ma(a).hoistableScripts,c=fr(e),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $0(e,n,a,r){var c=(c=te.current)?Zl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ur(a.href),a=Ma(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ur(a.href);var f=Ma(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(bo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||oy(c,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fr(a),a=Ma(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ur(e){return'href="'+it(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function eg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function oy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),A(n),e.head.appendChild(n))}function fr(e){return'[src="'+it(e)+'"]'}function Eo(e){return"script[async]"+e}function tg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(r)return n.instance=r,A(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),A(r),wn(r,"style",c),Kl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ur(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;r=eg(a),(c=fi.get(c))&&Hf(r,c),f=(e.ownerDocument||e).createElement("link"),A(f);var g=f;return g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),wn(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,e),n.instance=f;case"script":return f=fr(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,A(c),c):(r=a,(c=fi.get(f))&&(r=_({},a),Gf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),wn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,e));return n.instance}function Kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function ng(e,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ts]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ly(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ur(r.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,r=eg(r),(c=fi.get(c))&&Hf(r,c),f=f.createElement("link"),A(f);var g=f;g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function uy(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*jx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(fy,e),$l=null,Jl.call(e))}function fy(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var r=a.get(null);else{a=new Map,$l.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function dy(e,n,a,r,c,f,g,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function sg(e,n,a,r,c,f,g,T,I,Q,de,ge){return e=new dy(e,n,a,g,I,Q,de,ge,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Eu(f),e}function rg(e){return e?(e=Vs,e):Vs}function og(e,n,a,r,c,f){c=rg(c),r.context===null?r.context=c:r.pendingContext=c,r=Ca(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Na(e,r,n),a!==null&&(kn(a,e,n),no(a,e,n))}function lg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){lg(e,n),(e=e.alternate)&&lg(e,n)}function cg(e){if(e.tag===13||e.tag===31){var n=rs(e,67108864);n!==null&&kn(n,e,67108864),kf(e,67108864)}}function ug(e){if(e.tag===13||e.tag===31){var n=$n();n=Fr(n);var a=rs(e,n);a!==null&&kn(a,e,n),kf(e,n)}}var tc=!0;function hy(e,n,a,r){var c=O.T;O.T=null;var f=G.p;try{G.p=2,jf(e,n,a,r)}finally{G.p=f,O.T=c}}function py(e,n,a,r){var c=O.T;O.T=null;var f=G.p;try{G.p=8,jf(e,n,a,r)}finally{G.p=f,O.T=c}}function jf(e,n,a,r){if(tc){var c=Xf(r);if(c===null)Nf(e,n,r,nc,a),dg(e,r);else if(gy(c,e,n,a,r))r.stopPropagation();else if(dg(e,r),n&4&&-1<my.indexOf(e)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Se(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var I=1<<31-Pe(g);T.entanglements[1]|=I,g&=~I}Li(f),(Dt&6)===0&&(Il=M()+500,xo(0))}}break;case 31:case 13:T=rs(f,2),T!==null&&kn(T,f,2),Hl(),kf(f,2)}if(f=Xf(r),f===null&&Nf(e,n,r,nc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function Xf(e){return e=qc(e),qf(e)}var nc=null;function qf(e){if(nc=null,e=ya(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nc=e,null}function fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case he:return 2;case xe:return 8;case ce:case Ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ga=null,Va=null,ka=null,Ao=new Map,Ro=new Map,ja=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function wo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&cg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function gy(e,n,a,r,c){switch(n){case"focusin":return Ga=wo(Ga,e,n,a,r,c),!0;case"dragenter":return Va=wo(Va,e,n,a,r,c),!0;case"mouseover":return ka=wo(ka,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,wo(Ao.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,c)),!0}return!1}function hg(e){var n=ya(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){ug(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Xc=r,a.target.dispatchEvent(r),Xc=null}else return n=Sa(a),n!==null&&cg(n),e.blockedOn=a,!1;n.shift()}return!0}function pg(e,n,a){ic(e)&&a.delete(n)}function _y(){Wf=!1,Ga!==null&&ic(Ga)&&(Ga=null),Va!==null&&ic(Va)&&(Va=null),ka!==null&&ic(ka)&&(ka=null),Ao.forEach(pg),Ro.forEach(pg)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_y)))}var sc=null;function mg(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function dr(e){function n(I){return ac(I,e)}Ga!==null&&ac(Ga,e),Va!==null&&ac(Va,e),ka!==null&&ac(ka,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<ja.length;a++){var r=ja[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[xn]||null;if(typeof f=="function")g||mg(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[xn]||null)T=g.formAction;else if(qf(c)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),mg(a)}}}function gg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(e){this._internalRoot=e}rc.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();og(a,r,e,n,null,null)},rc.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;og(e.current,2,null,e,null,null),Hl(),n[_i]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&hg(e)}};var _g=t.version;if(_g!=="19.2.4")throw Error(s(527,_g,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var vy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{be=oc.inject(vy),Ee=oc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Em,f=Tm,g=Am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=sg(e,1,!1,null,null,a,r,null,c,f,g,gg),e[_i]=n.current,Cf(e),new Yf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Em,g=Tm,T=Am,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=sg(e,1,!0,n,a??null,r,c,I,f,g,T,gg),n.context=rg(null),a=n.current,r=$n(),r=Fr(r),c=Ca(r),c.callback=null,Na(a,c,r),a=r,n.current.lanes=a,Nn(n,a),Li(n),e[_i]=n.current,Cf(e),new rc(n)},No.version="19.2.4",No}var Rg;function wy(){if(Rg)return Qf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=Ry(),Qf.exports}var Cy=wy();const w_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();const Ny=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Dy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase());const wg=o=>{const t=Dy(o);return t.charAt(0).toUpperCase()+t.slice(1)};var Uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ly=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const Oy=pn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>pn.createElement("svg",{ref:m,...Uy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:w_("lucide",l),...!u&&!Ly(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>pn.createElement(p,v)),...Array.isArray(u)?u:[u]]));const Mt=(o,t)=>{const i=pn.forwardRef(({className:s,...l},u)=>pn.createElement(Oy,{ref:u,iconNode:t,className:w_(`lucide-${Ny(wg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=wg(o),i};const Py=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ud=Mt("arrow-right",Py);const zy=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Cg=Mt("bot",zy);const Fy=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Iy=Mt("brain-circuit",Fy);const By=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Hy=Mt("brain",By);const Gy=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Vy=Mt("briefcase",Gy);const ky=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],jy=Mt("chart-column",ky);const Xy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Go=Mt("chevron-down",Xy);const qy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Wy=Mt("chevron-left",qy);const Yy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Zy=Mt("chevron-right",Yy);const Ky=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],C_=Mt("chevron-up",Ky);const Qy=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],N_=Mt("code-xml",Qy);const Jy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],$y=Mt("cpu",Jy);const eS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],tS=Mt("database",eS);const nS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ng=Mt("external-link",nS);const iS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],aS=Mt("flask-conical",iS);const sS=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],rS=Mt("folder-git-2",sS);const oS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],lS=Mt("github",oS);const cS=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],uS=Mt("hammer",cS);const fS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],dS=Mt("house",fS);const hS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],pS=Mt("instagram",hS);const mS=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gS=Mt("lightbulb",mS);const _S=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],vS=Mt("linkedin",_S);const xS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yS=Mt("mail",xS);const SS=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],MS=Mt("map",SS);const bS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ES=Mt("menu",bS);const TS=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],AS=Mt("rocket",TS);const RS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],wS=Mt("share-2",RS);const CS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],D_=Mt("sparkles",CS);const NS=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],DS=Mt("square-terminal",NS);const US=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],LS=Mt("target",US);const OS=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],PS=Mt("type",OS);const zS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],U_=Mt("user",zS);const FS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dg=Mt("x",FS);const IS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],BS=Mt("zap",IS),Ho="/Compile_Journey/assets/logo-CDwa-24X.png",HS=({isMenuOpen:o,setIsMenuOpen:t})=>{const[i,s]=pn.useState(!1),l=()=>t(!o);return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[90] transition-opacity duration-300 ${o?"opacity-100 visible":"opacity-0 invisible pointer-events-none"}`,onClick:l}),E.jsxs("div",{id:"mobile-menu",className:`lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-[#020010] z-[120] shadow-[10px_0_30px_-10px_rgba(0,0,0,0.5)] border-r border-white/10 transition-transform duration-300 ease-out transform ${o?"translate-x-0":"-translate-x-full"}`,children:[E.jsxs("div",{className:"flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/5",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:Ho,alt:"logo",className:"w-8 h-8 rounded-full shadow-lg shadow-sky-500/20"}),E.jsx("span",{className:"font-space font-bold text-white tracking-widest text-lg",children:"JOURNEY"})]}),E.jsx("button",{onClick:l,className:"p-2 -mr-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10",children:E.jsx(Dg,{className:"w-5 h-5"})})]}),E.jsxs("div",{className:"flex flex-col items-start px-4 py-6 space-y-2 overflow-y-auto h-[calc(100%-80px)]",children:[E.jsxs("a",{href:"#home",onClick:l,className:"w-full flex items-center gap-4 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all interactive-element group",children:[E.jsx(dS,{className:"w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"font-medium",children:"Home"})]}),E.jsxs("a",{href:"#about",onClick:l,className:"w-full flex items-center gap-4 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all interactive-element group",children:[E.jsx(U_,{className:"w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"font-medium",children:"About"})]}),E.jsxs("a",{href:"#journey",onClick:l,className:"w-full flex items-center gap-4 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all interactive-element group",children:[E.jsx(MS,{className:"w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"font-medium",children:"Journey"})]}),E.jsxs("div",{className:"w-full",children:[E.jsxs("button",{onClick:()=>s(!i),className:"w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all interactive-element group",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx(rS,{className:"w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"font-medium",children:"Projects"})]}),E.jsx(Go,{className:`w-4 h-4 transition-transform duration-300 ${i?"rotate-180":""}`})]}),E.jsxs("div",{className:`overflow-hidden transition-all duration-300 flex flex-col gap-1 pl-12 pr-2 ${i?"max-h-40 opacity-100 mt-1 mb-2":"max-h-0 opacity-0"}`,children:[E.jsxs("a",{href:"#avira",onClick:l,className:"flex items-center gap-3 py-2 text-sm text-slate-400 hover:text-white transition-colors",children:[E.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-purple-500"}),"Avira AI"]}),E.jsxs("a",{href:"#curiodata",onClick:l,className:"flex items-center gap-3 py-2 text-sm text-slate-400 hover:text-white transition-colors",children:[E.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"CurioData"]})]})]}),E.jsxs("a",{href:"#portfolio",onClick:l,className:"w-full flex items-center gap-4 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all interactive-element group",children:[E.jsx(Vy,{className:"w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"font-medium",children:"Portfolio"})]}),E.jsx("div",{className:"flex-1 w-full flex items-end justify-center pb-8 pt-4",children:E.jsxs("a",{href:"#contact",onClick:l,className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 active:scale-95 transition-all interactive-element",children:[E.jsx(yS,{className:"w-4 h-4"}),E.jsx("span",{children:"Contact Me"})]})})]})]}),E.jsxs("header",{id:"header",className:`glass-effect fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-xl ${o?"translate-x-64":""}`,children:[E.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-50"}),E.jsxs("a",{href:"#home",className:"bg-gradient-to-r from-slate-900/90 via-black/80 to-slate-900/90 text-center py-2.5 text-[10px] sm:text-xs font-medium text-sky-200/90 flex items-center justify-center gap-3 cursor-pointer interactive-element tracking-normal sm:tracking-widest uppercase border-b border-white/5 px-4 whitespace-normal leading-tight relative",children:[E.jsx("img",{src:Ho,alt:"icon",className:"w-5 h-5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] object-cover shrink-0"}),E.jsx("span",{className:"min-w-0 break-words",children:"Where Curiosity Compiles Creativity"})]}),E.jsxs("div",{className:"container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative",children:[E.jsxs("a",{href:"#home",className:"flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold tracking-wider interactive-element group min-w-0",children:[E.jsxs("div",{className:"relative shrink-0",children:[E.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"}),E.jsx("img",{src:Ho,alt:"logo",className:"relative w-8 h-8 rounded-full border border-white/10 object-cover"})]}),E.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 truncate",children:["Compile",E.jsx("span",{className:"text-sky-400",children:" "}),"JOURNEY"]})]}),E.jsxs("nav",{className:"hidden lg:flex items-center gap-1",children:[E.jsx("a",{href:"#home",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Home"}),E.jsx("a",{href:"#about",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"About"}),E.jsx("a",{href:"#journey",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Journey"}),E.jsxs("div",{className:"relative group",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[E.jsxs("button",{className:"nav-link flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:["Projects ",E.jsx(Go,{className:`w-3.5 h-3.5 transition-transform duration-300 ${i?"rotate-180":""}`})]}),E.jsx("div",{className:`dropdown-menu absolute top-full right-0 w-64 pt-4 transition-all duration-300 transform origin-top-right ${i?"opacity-100 visible scale-100":"opacity-0 invisible scale-95"}`,children:E.jsxs("div",{className:"glass-effect rounded-2xl overflow-hidden border border-white/10 p-2 flex flex-col gap-1 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl",children:[E.jsxs("a",{href:"#avira",className:"group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all",children:[E.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors",children:E.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-400 group-hover:animate-pulse"})}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold",children:"Avira"}),E.jsx("div",{className:"text-[10px] text-slate-500",children:"AI Assistant"})]})]}),E.jsxs("a",{href:"#curiodata",className:"group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all",children:[E.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors",children:E.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse"})}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold",children:"CurioData"}),E.jsx("div",{className:"text-[10px] text-slate-500",children:"Data Analytics"})]})]})]})})]}),E.jsx("a",{href:"#portfolio",className:"nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element",children:"Portfolio"}),E.jsx("div",{className:"w-px h-5 bg-white/10 mx-2"}),E.jsxs("a",{href:"#contact",className:"relative ml-2 overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 interactive-element group",children:[E.jsx("span",{className:"relative z-10",children:"Get in Touch"}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]}),E.jsx("button",{onClick:l,className:"lg:hidden interactive-element text-white hover:text-sky-400 transition-colors relative z-[110]",children:o?E.jsx(Dg,{className:"w-6 h-6"}):E.jsx(ES,{className:"w-6 h-6"})})]})]})]})},GS="/Compile_Journey/assets/founder-riu7yR5i.png",VS=()=>{const[o,t]=pn.useState(0),i=4,s=()=>t(d=>d+1),l=()=>t(d=>d-1);pn.useEffect(()=>{const d=setInterval(s,5e3);return()=>clearInterval(d)},[]);const u=(o%i+i)%i;return E.jsxs("section",{id:"home",className:"relative pt-32 lg:pt-24 flex items-center min-h-screen overflow-hidden perspective-container",children:[E.jsxs("div",{className:"w-full h-full absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] preserve-3d scale-[0.85] md:scale-100",style:{transform:`translateZ(-50vw) rotateY(${-o*90}deg)`},children:[E.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(0deg) translateZ(50vw)"},children:E.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[E.jsx("img",{src:Ho,alt:"logo",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-sky-500/20 object-cover"}),E.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold hero-gradient-text mb-4 leading-tight",children:"Where Curiosity Compiles Creativity"}),E.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto",children:"— exploring AI, LLMs, and Data Science to build innovative tools and solutions."})]})}),E.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(90deg) translateZ(50vw)"},children:E.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[E.jsx("img",{src:Ho,alt:"Avira",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-purple-500/20 object-cover"}),E.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-4 leading-tight",children:"Meet Avira — Your AI Assistant"}),E.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto",children:"Avira helps you explore AI, generate smart solutions, and experiment with prompt engineering seamlessly."}),E.jsxs("div",{className:"flex justify-center space-x-6 mb-6",children:[E.jsx(Iy,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"}),E.jsx(gS,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"}),E.jsx(PS,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-400"})]}),E.jsxs("a",{href:"https://avira-64d03.web.app/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300 group",children:[E.jsx("span",{children:"Try Avira Now"}),E.jsx(Ud,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})}),E.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(180deg) translateZ(50vw)"},children:E.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[E.jsx("img",{src:GS,alt:"Abikrishna",className:"w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto border-2 border-sky-500 object-cover"}),E.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4 leading-tight",children:"Hi, I’m Abikrishna"}),E.jsx("p",{className:"text-sm sm:text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto",children:"I am a software developer and AI enthusiast, creating innovative tools and projects in LLMs, FastAPI, and Data Science."}),E.jsxs("div",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-lg text-slate-200",children:[E.jsx("span",{children:"🐍 Python"}),E.jsx("span",{children:"⚙️ FastAPI"}),E.jsx("span",{children:"🤖 AI/ML"}),E.jsx("span",{children:"📊 Data Science"})]})]})}),E.jsx("div",{className:"absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12",style:{transform:"rotateY(270deg) translateZ(50vw)"},children:E.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[E.jsx("div",{className:"inline-flex p-4 rounded-full bg-emerald-500/10 mb-4 border border-emerald-500/20",children:E.jsx(LS,{className:"w-10 h-10 sm:w-12 sm:h-12 text-emerald-400"})}),E.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-6 leading-tight",children:"Our Mission & Vision"}),E.jsxs("div",{className:"text-sm sm:text-lg md:text-xl text-slate-300 space-y-4 px-4",children:[E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold text-white",children:"Mission:"})," To simplify AI learning and build intelligent solutions."]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold text-white",children:"Vision:"})," To create a community where curiosity compiles creativity."]})]})]})})]}),E.jsxs("div",{className:"carousel-controls absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-full border border-white/10",children:[E.jsx("button",{className:"carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all",onClick:l,children:E.jsx(Wy,{className:"w-6 h-6"})}),E.jsx("div",{className:"carousel-dots flex gap-2",children:[...Array(i)].map((d,h)=>E.jsx("div",{className:`carousel-dot w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${h===u?"bg-white scale-125":"bg-white/30 hover:bg-white/50"}`,onClick:()=>t(o+(h-u))},h))}),E.jsx("button",{className:"carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all",onClick:s,children:E.jsx(Zy,{className:"w-6 h-6"})})]})]})},kS="/Compile_Journey/assets/founder_about-Dn073U3z.jpg",jS=()=>{const[o,t]=pn.useState(!1),i=[{icon:E.jsx(N_,{className:"w-5 h-5"}),label:"Full Stack Dev"},{icon:E.jsx(Hy,{className:"w-5 h-5"}),label:"AI Enthusiast"},{icon:E.jsx(AS,{className:"w-5 h-5"}),label:"Problem Solver"}];return E.jsxs("section",{id:"about",className:"relative w-full py-16 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-slate-900/20 backdrop-blur-sm -z-10"}),E.jsx("div",{className:"absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent blur-3xl pointer-events-none"}),E.jsx("div",{className:"absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-900/10 to-transparent blur-3xl pointer-events-none"}),E.jsx("div",{className:"w-full px-4 md:px-8 lg:px-12 relative z-10",children:E.jsxs("div",{className:"glass-effect rounded-2xl border border-white/10 p-8 lg:p-10 w-full shadow-2xl relative overflow-hidden reveal",children:[E.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-500 opacity-50"}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[E.jsxs("div",{className:"lg:col-span-3 flex flex-col items-center lg:items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8",children:[E.jsxs("div",{className:"relative group mb-4",children:[E.jsx("div",{className:"absolute -inset-1 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"}),E.jsx("div",{className:"relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-slate-900 shadow-2xl",children:E.jsx("img",{src:kS,alt:"Abikrishna - Founder",className:"w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"})}),E.jsx("div",{className:"absolute bottom-2 right-2 w-8 h-8 bg-[#0a0a0f] rounded-full flex items-center justify-center border border-white/20 text-sky-400 shadow-lg",children:E.jsx(U_,{className:"w-4 h-4"})})]}),E.jsx("h3",{className:"text-3xl font-space font-bold text-white tracking-tight mb-1",children:"Abikrishna"}),E.jsx("p",{className:"text-sky-400 font-inter font-medium text-sm w-full uppercase tracking-wider",children:"Founder & Developer"})]}),E.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"text-xs font-space font-bold tracking-[0.2em] text-sky-500 uppercase mb-3",children:"Behind the Code"}),E.jsxs("h3",{className:"text-3xl md:text-5xl font-space font-bold text-white leading-tight",children:["The Story of"," ",E.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-purple-500",children:"Compile Journey"})]})]}),E.jsxs("div",{className:"text-slate-300 font-inter text-base md:text-lg leading-relaxed space-y-4 font-light tracking-wide",children:[E.jsx("p",{children:"My journey began with a simple fascination: how can lines of text on a screen change the world? That curiosity led me down the rabbit hole of coding, AI, and problem-solving."}),E.jsxs("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${o?"max-h-[500px] opacity-100":"max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}`,children:[E.jsxs("p",{className:"mb-4",children:["Through dedication and countless hours of experimentation, I've honed my skills in"," ",E.jsx("strong",{className:"text-white font-semibold",children:"Python, FastAPI, and LLMs"}),". I built ",E.jsx("em",{children:"Compile Journey"})," not just as a portfolio, but as a platform to share knowledge, showcase innovation, and demonstrate the power of modern web technologies."]}),E.jsxs("p",{children:["Today, I focus on bridging the gap between complex data science concepts and intuitive user experiences, creating tools like"," ",E.jsx("strong",{className:"text-white font-semibold",children:"Avira"})," ","that make AI accessible to everyone."]})]}),E.jsx("button",{onClick:()=>t(!o),className:"md:hidden flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wide hover:text-sky-300 transition-colors py-1",children:o?E.jsxs(E.Fragment,{children:["Show Less ",E.jsx(C_,{className:"w-3 h-3"})]}):E.jsxs(E.Fragment,{children:["Read Full Story ",E.jsx(Go,{className:"w-3 h-3"})]})})]})]}),E.jsx("div",{className:"lg:col-span-3 flex flex-row lg:flex-col gap-4 flex-wrap lg:border-l border-white/10 lg:pl-8",children:i.map((s,l)=>E.jsxs("div",{className:"flex-1 lg:flex-none flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-sky-500/30 hover:translate-x-1 transition-all duration-300 group",children:[E.jsx("div",{className:"p-2.5 bg-gradient-to-br from-gray-800 to-black rounded-lg text-sky-400 group-hover:text-purple-400 transition-colors shadow-inner",children:s.icon}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("span",{className:"text-xs text-slate-400 uppercase tracking-wider",children:"Skill"}),E.jsx("span",{className:"text-sm font-bold text-white group-hover:text-sky-200 transition-colors",children:s.label})]})]},l))})]})]})})]})},XS=()=>{const[o,t]=pn.useState(!1);return E.jsxs("section",{id:"journey",className:"py-20 relative overflow-hidden",children:[E.jsx("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"}),E.jsx("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"}),E.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 reveal",children:[E.jsx("h2",{className:"text-sm font-bold text-sky-500 tracking-widest uppercase mb-2",children:"Milestones"}),E.jsxs("h3",{className:"text-3xl md:text-5xl font-space font-bold text-white mb-4",children:["Our ",E.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500",children:"Journey"})]}),E.jsx("p",{className:"text-slate-400 text-base md:text-lg",children:"From a spark of curiosity to a mission of creation."})]}),E.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[E.jsx("div",{className:"absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/0 via-sky-500/50 to-purple-500/0 md:-translate-x-1/2"}),E.jsxs("div",{className:"space-y-12",children:[E.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[E.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-sky-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"}),E.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1",children:E.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-sky-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[E.jsx("div",{className:"inline-flex p-3 bg-sky-500/10 rounded-xl mb-4 text-sky-400 md:ml-auto md:mr-0",children:E.jsx(D_,{className:"w-6 h-6"})}),E.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Curiosity Sparked"}),E.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"It all began with a passion for AI, coding, and problem-solving. Endless hours of learning and exploring new technologies laid the foundation."})]})}),E.jsx("div",{className:"hidden md:block md:w-[45%] order-2"})]}),E.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[E.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-purple-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300"}),E.jsx("div",{className:"hidden md:block md:w-[45%] order-1"}),E.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2",children:E.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[E.jsx("div",{className:"inline-flex p-3 bg-purple-500/10 rounded-xl mb-4 text-purple-400",children:E.jsx(aS,{className:"w-6 h-6"})}),E.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Experimentation"}),E.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Explored LLMs, FastAPI, Python, and Data Science. Small projects and prototypes became my classroom for hands-on learning."})]})})]}),E.jsxs("div",{className:`space-y-12 transition-all duration-700 overflow-hidden ${o?"max-h-[2000px] opacity-100":"max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"}`,children:[E.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[E.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-emerald-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:scale-125 transition-transform duration-300"}),E.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1",children:E.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[E.jsx("div",{className:"inline-flex p-3 bg-emerald-500/10 rounded-xl mb-4 text-emerald-400 md:ml-auto md:mr-0",children:E.jsx(uS,{className:"w-6 h-6"})}),E.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Building Tools"}),E.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Transformed experiments into real tools like Avira, AI experiments, and web apps, testing and refining each for practical use."})]})}),E.jsx("div",{className:"hidden md:block md:w-[45%] order-2"})]}),E.jsxs("div",{className:"relative flex flex-col md:flex-row items-center justify-between group reveal",children:[E.jsx("div",{className:"absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-pink-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)] group-hover:scale-125 transition-transform duration-300"}),E.jsx("div",{className:"hidden md:block md:w-[45%] order-1"}),E.jsx("div",{className:"ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2",children:E.jsxs("div",{className:"p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-pink-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm",children:[E.jsx("div",{className:"inline-flex p-3 bg-pink-500/10 rounded-xl mb-4 text-pink-400",children:E.jsx(wS,{className:"w-6 h-6"})}),E.jsx("h4",{className:"text-xl font-bold text-white mb-2",children:"Sharing & Inspiring"}),E.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Through tutorials, guides, and resources, I shared my work with the community, encouraging others to learn and innovate."})]})})]})]})]}),E.jsx("div",{className:"text-center mt-12 md:hidden relative z-20",children:E.jsx("button",{onClick:()=>t(!o),className:"inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:border-sky-500/50 transition-all active:scale-95",children:o?E.jsxs(E.Fragment,{children:["Show Less ",E.jsx(C_,{className:"w-4 h-4"})]}):E.jsxs(E.Fragment,{children:["View Full Journey ",E.jsx(Go,{className:"w-4 h-4"})]})})})]})]})]})},qS="/Compile_Journey/assets/portfolio_preview-CMTROOhy.png",WS=()=>E.jsxs("section",{id:"portfolio",className:"py-16 md:py-32 relative overflow-hidden",children:[E.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-sky-500/5 blur-[80px] rounded-full pointer-events-none"}),E.jsxs("div",{className:"container mx-auto px-6 text-center relative z-10",children:[E.jsx("h2",{className:"text-4xl md:text-6xl font-bold mb-8 reveal",children:"My Portfolio"}),E.jsx("p",{className:"text-lg text-slate-400 mb-16 max-w-xl mx-auto reveal",children:"A curated collection of my projects, skills, and professional journey."}),E.jsxs("div",{className:"portfolio-orbit-wrapper relative w-full max-w-3xl mx-auto perspective-container reveal",style:{perspective:"1000px"},children:[E.jsx("div",{className:"orbit-ring ring-1",children:E.jsx("div",{className:"orbit-icon icon-1 bg-[#0a0a0a] border border-sky-500/50 text-sky-400",children:E.jsx(N_,{className:"w-4 h-4"})})}),E.jsx("div",{className:"orbit-ring ring-2",children:E.jsx("div",{className:"orbit-icon icon-2 bg-[#0a0a0a] border border-purple-500/50 text-purple-400",children:E.jsx($y,{className:"w-4 h-4"})})}),E.jsx("div",{className:"group relative transform-style-3d transition-all duration-500 portfolio-holo-card hover:scale-105",children:E.jsxs("div",{className:"relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] bg-[#030014]",children:[E.jsx("div",{className:"scan-line"}),E.jsx("img",{src:qS,alt:"Portfolio Preview",className:"w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm",children:[E.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500",children:"Explore My Work"}),E.jsx("p",{className:"text-sky-300 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-xs md:text-sm",children:"Full Stack • AI • Data Science"}),E.jsx("a",{href:"https://creation-hub.abikrishna04edu.workers.dev/",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-colors interactive-element shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transform scale-90 group-hover:scale-100 duration-300",children:"Open Portfolio"})]}),E.jsxs("div",{className:"absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-green-400 flex items-center gap-2",children:[E.jsx("span",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"})," ONLINE"]}),E.jsx("div",{className:"absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-slate-400",children:"SYS.VER.2.5"})]})})]})]})]}),YS=()=>E.jsxs("section",{id:"projects",className:"py-20 md:py-32 relative overflow-hidden",children:[E.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0",children:[E.jsx("div",{className:"absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full"}),E.jsx("div",{className:"absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full"})]}),E.jsxs("div",{className:"container mx-auto px-4 sm:px-6 relative z-10",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 reveal",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm",children:[E.jsx(D_,{className:"w-4 h-4 text-sky-400"}),E.jsx("span",{children:"Featured Innovations"})]}),E.jsxs("h2",{className:"text-4xl sm:text-6xl font-bold mb-6 tracking-tight",children:["Built for the ",E.jsx("span",{className:"bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent",children:"Future"})]}),E.jsx("p",{className:"text-slate-400 text-lg leading-relaxed",children:"Exploring the boundaries of Artificial Intelligence and Data Science through practical, high-impact applications."})]}),E.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12",children:[E.jsxs("div",{id:"avira",className:"group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden reveal",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"p-6 sm:p-8 md:p-10 relative z-10",children:[E.jsxs("div",{className:"flex justify-between items-start mb-8",children:[E.jsx("div",{className:"p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors",children:E.jsx(Cg,{className:"w-8 h-8 text-purple-400"})}),E.jsx("a",{href:"https://avira-64d03.web.app",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link",children:E.jsx(Ng,{className:"w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors"})})]}),E.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Avira AI"}),E.jsxs("p",{className:"text-purple-400 font-medium mb-6 flex items-center gap-2",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"}),"Intelligent Assistant"]}),E.jsx("p",{className:"text-slate-400 text-lg mb-8 leading-relaxed",children:"An advanced AI assistant designed to bridge the gap between complex LLM capabilities and daily productivity. Features intelligent prompt engineering and context-aware responses."}),E.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[E.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[E.jsx(DS,{className:"w-4 h-4 text-purple-400"}),E.jsx("span",{children:"Smart Prompts"})]}),E.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[E.jsx(BS,{className:"w-4 h-4 text-purple-400"}),E.jsx("span",{children:"Fast Response"})]})]}),E.jsx("div",{className:"flex items-center gap-4 pt-6 border-t border-white/5",children:E.jsxs("a",{href:"https://avira-64d03.web.app/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all",children:["Chat with Avira ",E.jsx(Ud,{className:"w-4 h-4"})]})})]})]}),E.jsxs("div",{id:"curiodata",className:"group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden reveal",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"p-6 sm:p-8 md:p-10 relative z-10",children:[E.jsxs("div",{className:"flex justify-between items-start mb-8",children:[E.jsx("div",{className:"p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors",children:E.jsx(tS,{className:"w-8 h-8 text-blue-400"})}),E.jsx("a",{href:"https://curiodata.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link",children:E.jsx(Ng,{className:"w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors"})})]}),E.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"CurioData"}),E.jsxs("p",{className:"text-blue-400 font-medium mb-6 flex items-center gap-2",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"}),"Data Analytics Platform"]}),E.jsx("p",{className:"text-slate-400 text-lg mb-8 leading-relaxed",children:"Upload your datasets and let AI uncover hidden patterns. CurioData provides instant visualization, statistical analysis, and predictive insights from raw CSV/Excel files."}),E.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[E.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[E.jsx(jy,{className:"w-4 h-4 text-blue-400"}),E.jsx("span",{children:"Auto Visualization"})]}),E.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5",children:[E.jsx(Cg,{className:"w-4 h-4 text-blue-400"}),E.jsx("span",{children:"AI Insights"})]})]}),E.jsx("div",{className:"flex items-center gap-4 pt-6 border-t border-white/5",children:E.jsxs("a",{href:"https://curiodata.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all",children:["Analyze Your Data ",E.jsx(Ud,{className:"w-4 h-4"})]})})]})]})]})]})]}),ZS=({question:o,answer:t})=>{const[i,s]=pn.useState(!1);return E.jsxs("div",{className:`accordion-item glass-effect rounded-xl overflow-hidden interactive-element ${i?"active":""}`,children:[E.jsxs("button",{className:"accordion-header w-full flex justify-between items-center p-6 text-left focus:outline-none",onClick:()=>s(!i),children:[E.jsx("span",{className:"text-lg font-semibold text-white",children:o}),E.jsx(Go,{className:`accordion-icon w-5 h-5 text-sky-400 transition-transform duration-300 ${i?"rotate-180":""}`})]}),E.jsx("div",{className:"accordion-content transition-all duration-300 ease-out",style:{maxHeight:i?"500px":"0"},children:E.jsx("div",{className:"px-6 pb-6 text-slate-300",dangerouslySetInnerHTML:{__html:t}})})]})},KS=()=>{const o=[{question:"What technologies do you specialize in?",answer:"I specialize in a modern tech stack focusing on <strong>Python, FastAPI, and React</strong>. My expertise extends to Data Science using Pandas and NumPy, as well as integrating Large Language Models (LLMs) for advanced AI solutions."},{question:"How can I collaborate on a project?",answer:"Collaboration starts with a conversation! You can reach out via the <strong>Contact</strong> form below or connect with me on LinkedIn. I am open to open-source contributions, freelance projects, and long-term partnerships."},{question:"Is Avira available for public use?",answer:"Yes! Avira is live and accessible via the web. You can try the demo version directly from the project link above. I am constantly updating it with new features for better prompt engineering and AI assistance."},{question:"Do you offer data analysis services?",answer:"Absolutely. Through my <strong>CurioData</strong> platform, I provide automated insights. For more bespoke enterprise needs, I offer custom data analysis solutions tailored to your specific datasets and business goals."}];return E.jsx("section",{id:"faq",className:"py-16 sm:py-20 md:py-24",children:E.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 reveal",children:[E.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-4",children:"Common Queries"}),E.jsx("p",{className:"text-slate-300 text-lg",children:"Frequently asked questions about my work and services."})]}),E.jsx("div",{className:"max-w-3xl mx-auto space-y-4 reveal",children:o.map((t,i)=>E.jsx(ZS,{question:t.question,answer:t.answer},i))})]})})},QS=()=>E.jsx("section",{id:"contact",className:"py-16 sm:py-20 md:py-24 lg:py-32",children:E.jsxs("div",{className:"container mx-auto px-4 sm:px-6 reveal",children:[E.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-12 sm:mb-16",children:[E.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-4",children:"Get in Touch"}),E.jsx("p",{className:"text-slate-300 text-lg",children:"Have a project in mind? Drop me a message."})]}),E.jsx("div",{className:"max-w-2xl mx-auto glass-effect p-6 sm:p-8 md:p-12 rounded-2xl",children:E.jsxs("form",{action:"https://formspree.io/f/mwprgyqv",method:"POST",className:"space-y-6",children:[E.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),E.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),E.jsx("textarea",{name:"message",rows:"5",placeholder:"Your Message",required:!0,className:"w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"}),E.jsx("div",{className:"text-center",children:E.jsx("button",{type:"submit",className:"bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 interactive-element",children:"Send Message"})})]})})]})}),JS=()=>E.jsx("footer",{className:"bg-black/30",children:E.jsx("div",{className:"container mx-auto px-6 py-8",children:E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[E.jsx("p",{className:"text-slate-400 mb-4 md:mb-0",children:"© 2025 compile.journey. All Rights Reserved."}),E.jsxs("div",{className:"flex space-x-6",children:[E.jsx("a",{href:"https://www.linkedin.com/company/compilejourneyspace/",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:E.jsx(vS,{className:"w-6 h-6"})}),E.jsx("a",{href:"https://www.instagram.com/compile.journey",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:E.jsx(pS,{className:"w-6 h-6"})}),E.jsx("a",{href:"https://github.com/Abikrishna2004",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-sky-400 transition-colors interactive-element",children:E.jsx(lS,{className:"w-6 h-6"})})]})]})})});const Nh="182",$S=0,Ug=1,eM=2,Dc=1,tM=2,Io=3,es=0,Xn=1,fa=2,ha=0,Rr=1,Ld=2,Lg=3,Og=4,nM=5,As=100,iM=101,aM=102,sM=103,rM=104,oM=200,lM=201,cM=202,uM=203,Od=204,Pd=205,fM=206,dM=207,hM=208,pM=209,mM=210,gM=211,_M=212,vM=213,xM=214,zd=0,Fd=1,Id=2,Cr=3,Bd=4,Hd=5,Gd=6,Vd=7,L_=0,yM=1,SM=2,Ii=0,O_=1,P_=2,z_=3,F_=4,I_=5,B_=6,H_=7,G_=300,Ns=301,Nr=302,kd=303,jd=304,Hc=306,Xd=1e3,da=1001,qd=1002,Cn=1003,MM=1004,lc=1005,On=1006,td=1007,ws=1008,mi=1009,V_=1010,k_=1011,Vo=1012,Dh=1013,Hi=1014,zi=1015,ga=1016,Uh=1017,Lh=1018,ko=1020,j_=35902,X_=35899,q_=1021,W_=1022,Ai=1023,_a=1026,Cs=1027,Y_=1028,Oh=1029,Dr=1030,Ph=1031,zh=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,Wd=35840,Yd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,eh=37488,th=37489,nh=37490,ih=37491,ah=37808,sh=37809,rh=37810,oh=37811,lh=37812,ch=37813,uh=37814,fh=37815,dh=37816,hh=37817,ph=37818,mh=37819,gh=37820,_h=37821,vh=36492,xh=36494,yh=36495,Sh=36283,Mh=36284,bh=36285,Eh=36286,bM=3200,EM=0,TM=1,Ja="",hi="srgb",Ur="srgb-linear",Fc="linear",It="srgb",hr=7680,Pg=519,AM=512,RM=513,wM=514,Fh=515,CM=516,NM=517,Ih=518,DM=519,zg=35044,Fg="300 es",Fi=2e3,Ic=2001;function Z_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function UM(){const o=Bc("canvas");return o.style.display="block",o}const Ig={};function Bg(...o){const t="THREE."+o.shift();console.log(t,...o)}function st(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Rt(...o){const t="THREE."+o.shift();console.error(t,...o)}function jo(...o){const t=o.join(" ");t in Ig||(Ig[t]=!0,st(...o))}function LM(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Th=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function OM(o,t){return(o%t+t)%t}function id(o,t,i){return(1-i)*o+i*t}function Do(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],y=u[d+0],b=u[d+1],R=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(h>=1){t[i+0]=y,t[i+1]=b,t[i+2]=R,t[i+3]=C;return}if(_!==C||m!==y||p!==b||v!==R){let S=m*y+p*b+v*R+_*C;S<0&&(y=-y,b=-b,R=-R,C=-C,S=-S);let x=1-h;if(S<.9995){const z=Math.acos(S),P=Math.sin(z);x=Math.sin(x*z)/P,h=Math.sin(h*z)/P,m=m*x+y*h,p=p*x+b*h,v=v*x+R*h,_=_*x+C*h}else{m=m*x+y*h,p=p*x+b*h,v=v*x+R*h,_=_*x+C*h;const z=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=z,p*=z,v*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=u[d],y=u[d+1],b=u[d+2],R=u[d+3];return t[i]=h*R+v*_+m*b-p*y,t[i+1]=m*R+v*y+p*_-h*b,t[i+2]=p*R+v*b+h*y-m*_,t[i+3]=v*R-h*_-m*y-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),_=h(u/2),y=m(s/2),b=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=y*v*_+p*b*R,this._y=p*b*_-y*v*R,this._z=p*v*R+y*b*_,this._w=p*v*_-y*b*R;break;case"YXZ":this._x=y*v*_+p*b*R,this._y=p*b*_-y*v*R,this._z=p*v*R-y*b*_,this._w=p*v*_+y*b*R;break;case"ZXY":this._x=y*v*_-p*b*R,this._y=p*b*_+y*v*R,this._z=p*v*R+y*b*_,this._w=p*v*_-y*b*R;break;case"ZYX":this._x=y*v*_-p*b*R,this._y=p*b*_+y*v*R,this._z=p*v*R-y*b*_,this._w=p*v*_+y*b*R;break;case"YZX":this._x=y*v*_+p*b*R,this._y=p*b*_+y*v*R,this._z=p*v*R-y*b*_,this._w=p*v*_-y*b*R;break;case"XZY":this._x=y*v*_-p*b*R,this._y=p*b*_-y*v*R,this._z=p*v*R+y*b*_,this._w=p*v*_+y*b*R;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],y=s+h+_;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(v-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(s>h&&s>_){const b=2*Math.sqrt(1+s-h-_);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>_){const b=2*Math.sqrt(1+h-s-_);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+_-s-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-s*p,this._z=u*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(t=0,i=0,s=0){se.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Hg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Hg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-u*l),_=2*(u*s-d*i);return this.x=i+m*p+d*_-h*v,this.y=s+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new se,Hg=new Wo;class ut{constructor(t,i,s,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],_=s[7],y=s[2],b=s[5],R=s[8],C=l[0],S=l[3],x=l[6],z=l[1],P=l[4],L=l[7],B=l[2],H=l[5],F=l[8];return u[0]=d*C+h*z+m*B,u[3]=d*S+h*P+m*H,u[6]=d*x+h*L+m*F,u[1]=p*C+v*z+_*B,u[4]=p*S+v*P+_*H,u[7]=p*x+v*L+_*F,u[2]=y*C+b*z+R*B,u[5]=y*S+b*P+R*H,u[8]=y*x+b*L+R*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*u*v+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=v*d-h*p,y=h*m-v*u,b=p*u-d*m,R=i*_+s*y+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=_*C,t[1]=(l*p-v*s)*C,t[2]=(h*s-l*d)*C,t[3]=y*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=b*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(sd.makeScale(t,i)),this}rotate(t){return this.premultiply(sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new ut,Gg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const o={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ur]:{primaries:t,whitePoint:s,transfer:Fc,toXYZ:Gg,fromXYZ:Vg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:It,toXYZ:Gg,fromXYZ:Vg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Et=PM();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let pr;class zM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{pr===void 0&&(pr=Bc("canvas")),pr.width=t.width,pr.height=t.height;const l=pr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=pr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FM=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let IM=0;const od=new se;class Fn extends Or{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=da,l=da,u=On,d=ws,h=Ai,m=mi,p=Fn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=qo(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=G_;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],_=m[8],y=m[1],b=m[5],R=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(v-y)<.01&&Math.abs(_-C)<.01&&Math.abs(R-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+C)<.1&&Math.abs(R+S)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(b+1)/2,B=(x+1)/2,H=(v+y)/4,F=(_+C)/4,J=(R+S)/4;return P>L&&P>B?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=H/s,u=F/s):L>B?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=H/l,u=J/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=F/u,l=J/u),this.set(s,l,u,i),this}let z=Math.sqrt((S-R)*(S-R)+(_-C)*(_-C)+(y-v)*(y-v));return Math.abs(z)<.001&&(z=1),this.x=(S-R)/z,this.y=(_-C)/z,this.z=(y-v)/z,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends Or{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Fn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends BM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class K_ extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),uc.subVectors(this.max,Uo),mr.subVectors(t.a,Uo),gr.subVectors(t.b,Uo),_r.subVectors(t.c,Uo),qa.subVectors(gr,mr),Wa.subVectors(_r,gr),xs.subVectors(mr,_r);let i=[0,-qa.z,qa.y,0,-Wa.z,Wa.y,0,-xs.z,xs.y,qa.z,0,-qa.x,Wa.z,0,-Wa.x,xs.z,0,-xs.x,-qa.y,qa.x,0,-Wa.y,Wa.x,0,-xs.y,xs.x,0];return!ld(i,mr,gr,_r,uc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,mr,gr,_r,uc))?!1:(fc.crossVectors(qa,Wa),i=[fc.x,fc.y,fc.z],ld(i,mr,gr,_r,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new se,new se,new se,new se,new se,new se,new se,new se],Mi=new se,cc=new Yo,mr=new se,gr=new se,_r=new se,qa=new se,Wa=new se,xs=new se,Uo=new se,uc=new se,fc=new se,ys=new se;function ld(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ys.fromArray(o,u);const h=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=t.dot(ys),p=i.dot(ys),v=s.dot(ys);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const GM=new Yo,Lo=new se,cd=new se;class Gc{constructor(t=new se,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):GM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(cd)),this.expandByPoint(Lo.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new se,ud=new se,dc=new se,Ya=new se,fd=new se,hc=new se,dd=new se;class Q_{constructor(t=new se,i=new se(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ud.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(ud);const u=t.distanceTo(i)*.5,d=-this.direction.dot(dc),h=Ya.dot(this.direction),m=-Ya.dot(dc),p=Ya.lengthSq(),v=Math.abs(1-d*d);let _,y,b,R;if(v>0)if(_=d*m-h,y=d*h-m,R=u*v,_>=0)if(y>=-R)if(y<=R){const C=1/v;_*=C,y*=C,b=_*(_+d*y+2*h)+y*(d*_+y+2*m)+p}else y=u,_=Math.max(0,-(d*y+h)),b=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(d*y+h)),b=-_*_+y*(y+2*m)+p;else y<=-R?(_=Math.max(0,-(-d*u+h)),y=_>0?-u:Math.min(Math.max(-u,-m),u),b=-_*_+y*(y+2*m)+p):y<=R?(_=0,y=Math.min(Math.max(-u,-m),u),b=y*(y+2*m)+p):(_=Math.max(0,-(d*u+h)),y=_>0?u:Math.min(Math.max(-u,-m),u),b=-_*_+y*(y+2*m)+p);else y=d>0?-u:u,_=Math.max(0,-(d*y+h)),b=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ud).addScaledVector(dc,y),b}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(u=(t.min.y-y.y)*v,d=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,d=(t.min.y-y.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,s,l,u){fd.subVectors(i,t),hc.subVectors(s,t),dd.crossVectors(fd,hc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(hc.crossVectors(Ya,hc));if(m<0)return null;const p=h*this.direction.dot(fd.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(dd);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,s,l,u,d,h,m,p,v,_,y,b,R,C,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,v,_,y,b,R,C,S)}set(t,i,s,l,u,d,h,m,p,v,_,y,b,R,C,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=y,x[3]=b,x[7]=R,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),u=1/vr.setFromMatrixColumn(t,1).length(),d=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=d*v,b=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=b+R*p,i[5]=y-C*p,i[9]=-h*m,i[2]=C-y*p,i[6]=R+b*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*v,b=m*_,R=p*v,C=p*_;i[0]=y+C*h,i[4]=R*h-b,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=b*h-R,i[6]=C+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*v,b=m*_,R=p*v,C=p*_;i[0]=y-C*h,i[4]=-d*_,i[8]=R+b*h,i[1]=b+R*h,i[5]=d*v,i[9]=C-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*v,b=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=R*p-b,i[8]=y*p+C,i[1]=m*_,i[5]=C*p+y,i[9]=b*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,b=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=C-y*_,i[8]=R*_+b,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*_+R,i[10]=y-C*_}else if(t.order==="XZY"){const y=d*m,b=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=y*_+C,i[5]=d*v,i[9]=b*_-R,i[2]=R*_-b,i[6]=h*v,i[10]=C*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VM,t,kM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(s,ei),Za.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(s,ei)),Za.normalize(),pc.crossVectors(ei,Za),l[0]=Za.x,l[4]=pc.x,l[8]=ei.x,l[1]=Za.y,l[5]=pc.y,l[9]=ei.y,l[2]=Za.z,l[6]=pc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],_=s[5],y=s[9],b=s[13],R=s[2],C=s[6],S=s[10],x=s[14],z=s[3],P=s[7],L=s[11],B=s[15],H=l[0],F=l[4],J=l[8],w=l[12],N=l[1],j=l[5],re=l[9],ae=l[13],pe=l[2],fe=l[6],O=l[10],G=l[14],ie=l[3],Me=l[7],ye=l[11],U=l[15];return u[0]=d*H+h*N+m*pe+p*ie,u[4]=d*F+h*j+m*fe+p*Me,u[8]=d*J+h*re+m*O+p*ye,u[12]=d*w+h*ae+m*G+p*U,u[1]=v*H+_*N+y*pe+b*ie,u[5]=v*F+_*j+y*fe+b*Me,u[9]=v*J+_*re+y*O+b*ye,u[13]=v*w+_*ae+y*G+b*U,u[2]=R*H+C*N+S*pe+x*ie,u[6]=R*F+C*j+S*fe+x*Me,u[10]=R*J+C*re+S*O+x*ye,u[14]=R*w+C*ae+S*G+x*U,u[3]=z*H+P*N+L*pe+B*ie,u[7]=z*F+P*j+L*fe+B*Me,u[11]=z*J+P*re+L*O+B*ye,u[15]=z*w+P*ae+L*G+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],_=t[6],y=t[10],b=t[14],R=t[3],C=t[7],S=t[11],x=t[15],z=m*b-p*y,P=h*b-p*_,L=h*y-m*_,B=d*b-p*v,H=d*y-m*v,F=d*_-h*v;return i*(C*z-S*P+x*L)-s*(R*z-S*B+x*H)+l*(R*P-C*B+x*F)-u*(R*L-C*H+S*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=t[9],y=t[10],b=t[11],R=t[12],C=t[13],S=t[14],x=t[15],z=_*S*p-C*y*p+C*m*b-h*S*b-_*m*x+h*y*x,P=R*y*p-v*S*p-R*m*b+d*S*b+v*m*x-d*y*x,L=v*C*p-R*_*p+R*h*b-d*C*b-v*h*x+d*_*x,B=R*_*m-v*C*m-R*h*y+d*C*y+v*h*S-d*_*S,H=i*z+s*P+l*L+u*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=z*F,t[1]=(C*y*u-_*S*u-C*l*b+s*S*b+_*l*x-s*y*x)*F,t[2]=(h*S*u-C*m*u+C*l*p-s*S*p-h*l*x+s*m*x)*F,t[3]=(_*m*u-h*y*u-_*l*p+s*y*p+h*l*b-s*m*b)*F,t[4]=P*F,t[5]=(v*S*u-R*y*u+R*l*b-i*S*b-v*l*x+i*y*x)*F,t[6]=(R*m*u-d*S*u-R*l*p+i*S*p+d*l*x-i*m*x)*F,t[7]=(d*y*u-v*m*u+v*l*p-i*y*p-d*l*b+i*m*b)*F,t[8]=L*F,t[9]=(R*_*u-v*C*u-R*s*b+i*C*b+v*s*x-i*_*x)*F,t[10]=(d*C*u-R*h*u+R*s*p-i*C*p-d*s*x+i*h*x)*F,t[11]=(v*h*u-d*_*u-v*s*p+i*_*p+d*s*b-i*h*b)*F,t[12]=B*F,t[13]=(v*C*l-R*_*l+R*s*y-i*C*y-v*s*S+i*_*S)*F,t[14]=(R*h*l-d*C*l-R*s*m+i*C*m+d*s*S-i*h*S)*F,t[15]=(d*_*l-v*h*l+v*s*m-i*_*m-d*s*y+i*h*y)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,y=u*p,b=u*v,R=u*_,C=d*v,S=d*_,x=h*_,z=m*p,P=m*v,L=m*_,B=s.x,H=s.y,F=s.z;return l[0]=(1-(C+x))*B,l[1]=(b+L)*B,l[2]=(R-P)*B,l[3]=0,l[4]=(b-L)*H,l[5]=(1-(y+x))*H,l[6]=(S+z)*H,l[7]=0,l[8]=(R+P)*F,l[9]=(S-z)*F,l[10]=(1-(y+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=vr.set(l[0],l[1],l[2]).length();const d=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),bi.copy(this);const p=1/u,v=1/d,_=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,i.setFromRotationMatrix(bi),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Fi,m=!1){const p=this.elements,v=2*u/(i-t),_=2*u/(s-l),y=(i+t)/(i-t),b=(s+l)/(s-l);let R,C;if(m)R=u/(d-u),C=d*u/(d-u);else if(h===Fi)R=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Ic)R=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Fi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),b=-(s+l)/(s-l);let R,C;if(m)R=1/(d-u),C=d/(d-u);else if(h===Fi)R=-2/(d-u),C=-(d+u)/(d-u);else if(h===Ic)R=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new se,bi=new sn,VM=new se(0,0,0),kM=new se(1,1,1),Za=new se,pc=new se,ei=new se,kg=new sn,jg=new Wo;class va{constructor(t=0,i=0,s=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,b),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return kg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jg.setFromEuler(this),this.setFromQuaternion(jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const Xg=new se,xr=new Wo,la=new sn,mc=new se,Oo=new se,XM=new se,qM=new Wo,qg=new se(1,0,0),Wg=new se(0,1,0),Yg=new se(0,0,1),Zg={type:"added"},WM={type:"removed"},yr={type:"childadded",child:null},hd={type:"childremoved",child:null};class qn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new se,i=new va,s=new Wo,l=new se(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ut}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(qg,t)}rotateY(t){return this.rotateOnAxis(Wg,t)}rotateZ(t){return this.rotateOnAxis(Yg,t)}translateOnAxis(t,i){return Xg.copy(t).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(qg,t)}translateY(t){return this.translateOnAxis(Wg,t)}translateZ(t){return this.translateOnAxis(Yg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,mc,this.up):la.lookAt(mc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),xr.setFromRotationMatrix(la),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zg),yr.child=t,this.dispatchEvent(yr),yr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WM),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zg),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,XM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,qM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),_=d(t.shapes),y=d(t.skeletons),b=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),R.length>0&&(s.nodes=R)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new se(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new se,ca=new se,pd=new se,ua=new se,Sr=new se,Mr=new se,Kg=new se,md=new se,gd=new se,_d=new se,vd=new an,xd=new an,yd=new an;class Ti{constructor(t=new se,i=new se,s=new se){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ei.subVectors(l,i),ca.subVectors(s,i),pd.subVectors(t,i);const d=Ei.dot(Ei),h=Ei.dot(ca),m=Ei.dot(pd),p=ca.dot(ca),v=ca.dot(pd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const y=1/_,b=(p*m-h*v)*y,R=(d*v-h*m)*y;return u.set(1-b-R,R,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return vd.setScalar(0),xd.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,s),yd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(yd,u.z),d}static isFrontFacing(t,i,s,l){return Ei.subVectors(s,i),ca.subVectors(t,i),Ei.cross(ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ei.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;Sr.subVectors(l,s),Mr.subVectors(u,s),md.subVectors(t,s);const m=Sr.dot(md),p=Mr.dot(md);if(m<=0&&p<=0)return i.copy(s);gd.subVectors(t,l);const v=Sr.dot(gd),_=Mr.dot(gd);if(v>=0&&_<=v)return i.copy(l);const y=m*_-v*p;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Sr,d);_d.subVectors(t,u);const b=Sr.dot(_d),R=Mr.dot(_d);if(R>=0&&b<=R)return i.copy(u);const C=b*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Mr,h);const S=v*R-b*_;if(S<=0&&_-v>=0&&b-R>=0)return Kg.subVectors(u,l),h=(_-v)/(_-v+(b-R)),i.copy(l).addScaledVector(Kg,h);const x=1/(S+C+y);return d=C*x,h=y*x,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Sd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Et.workingColorSpace){return this.r=t,this.g=i,this.b=s,Et.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Et.workingColorSpace){if(t=OM(t,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Sd(d,u,t+1/3),this.g=Sd(d,u,t),this.b=Sd(d,u,t-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=$_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Et.workingToColorSpace(Ln.copy(this),t),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Et.workingColorSpace){Et.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Et.workingColorSpace){return Et.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Et.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(gc);const s=id(Ka.h,gc.h,i),l=id(Ka.s,gc.s,i),u=id(Ka.l,gc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Bt;Bt.NAMES=$_;let YM=0;class Zo extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Rr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Od&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ev extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new se,_c=new kt;let ZM=0;class Ri{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=zg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),u=jn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zg&&(t.usage=this.usage),t}}class tv extends Ri{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class nv extends Ri{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ma extends Ri{constructor(t,i,s){super(new Float32Array(t),i,s)}}let KM=0;const di=new sn,Md=new qn,br=new se,ti=new Yo,Po=new Yo,vn=new se;class wi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Z_(t)?nv:tv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ut().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ma(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Po.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Po.max),ti.expandByPoint(vn)):(ti.expandByPoint(Po.min),ti.expandByPoint(Po.max))}ti.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)vn.fromBufferAttribute(h,p),m&&(br.fromBufferAttribute(t,p),vn.add(br)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<s.count;J++)h[J]=new se,m[J]=new se;const p=new se,v=new se,_=new se,y=new kt,b=new kt,R=new kt,C=new se,S=new se;function x(J,w,N){p.fromBufferAttribute(s,J),v.fromBufferAttribute(s,w),_.fromBufferAttribute(s,N),y.fromBufferAttribute(u,J),b.fromBufferAttribute(u,w),R.fromBufferAttribute(u,N),v.sub(p),_.sub(p),b.sub(y),R.sub(y);const j=1/(b.x*R.y-R.x*b.y);isFinite(j)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(_,-b.y).multiplyScalar(j),S.copy(_).multiplyScalar(b.x).addScaledVector(v,-R.x).multiplyScalar(j),h[J].add(C),h[w].add(C),h[N].add(C),m[J].add(S),m[w].add(S),m[N].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let J=0,w=z.length;J<w;++J){const N=z[J],j=N.start,re=N.count;for(let ae=j,pe=j+re;ae<pe;ae+=3)x(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const P=new se,L=new se,B=new se,H=new se;function F(J){B.fromBufferAttribute(l,J),H.copy(B);const w=h[J];P.copy(w),P.sub(B.multiplyScalar(B.dot(w))).normalize(),L.crossVectors(H,w);const j=L.dot(m[J])<0?-1:1;d.setXYZW(J,P.x,P.y,P.z,j)}for(let J=0,w=z.length;J<w;++J){const N=z[J],j=N.start,re=N.count;for(let ae=j,pe=j+re;ae<pe;ae+=3)F(t.getX(ae+0)),F(t.getX(ae+1)),F(t.getX(ae+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new se,u=new se,d=new se,h=new se,m=new se,p=new se,v=new se,_=new se;if(t)for(let y=0,b=t.count;y<b;y+=3){const R=t.getX(y+0),C=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),h.add(v),m.add(v),p.add(v),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,_=h.normalized,y=new p.constructor(m.length*v);let b=0,R=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*v;for(let x=0;x<v;x++)y[R++]=p[b++]}return new Ri(y,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const y=p[v],b=t(y,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,y=p.length;_<y;_++){const b=p[_];v.push(b.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],_=u[p];for(let y=0,b=_.length;y<b;y++)v.push(_[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new sn,Ss=new Q_,vc=new Gc,Jg=new se,xc=new se,yc=new se,Sc=new se,bd=new se,Mc=new se,$g=new se,bc=new se;class xa extends qn{constructor(t=new wi,i=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(bd.fromBufferAttribute(_,t),d?Mc.addScaledVector(bd,v):Mc.addScaledVector(bd.sub(i),v))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),Ss.copy(t.ray).recast(t.near),!(vc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(vc,Jg)===null||Ss.origin.distanceToSquared(Jg)>(t.far-t.near)**2))&&(Qg.copy(u).invert(),Ss.copy(t.ray).applyMatrix4(Qg),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,y=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=y.length;R<C;R++){const S=y[R],x=d[S.materialIndex],z=Math.max(S.start,b.start),P=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let L=z,B=P;L<B;L+=3){const H=h.getX(L),F=h.getX(L+1),J=h.getX(L+2);l=Ec(this,x,t,s,p,v,_,H,F,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let S=R,x=C;S<x;S+=3){const z=h.getX(S),P=h.getX(S+1),L=h.getX(S+2);l=Ec(this,d,t,s,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=y.length;R<C;R++){const S=y[R],x=d[S.materialIndex],z=Math.max(S.start,b.start),P=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let L=z,B=P;L<B;L+=3){const H=L,F=L+1,J=L+2;l=Ec(this,x,t,s,p,v,_,H,F,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=R,x=C;S<x;S+=3){const z=S,P=S+1,L=S+2;l=Ec(this,d,t,s,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function QM(o,t,i,s,l,u,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===es,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Ec(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,yc),o.getVertexPosition(p,Sc);const v=QM(o,t,i,s,xc,yc,Sc,$g);if(v){const _=new se;Ti.getBarycoord($g,xc,yc,Sc,_),l&&(v.uv=Ti.getInterpolatedAttribute(l,h,m,p,_,new kt)),u&&(v.uv1=Ti.getInterpolatedAttribute(u,h,m,p,_,new kt)),d&&(v.normal=Ti.getInterpolatedAttribute(d,h,m,p,_,new se),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new se,materialIndex:0};Ti.getNormal(xc,yc,Sc,y.normal),v.face=y,v.barycoord=_}return v}class Ko extends wi{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let y=0,b=0;R("z","y","x",-1,-1,s,i,t,d,u,0),R("z","y","x",1,-1,s,i,-t,d,u,1),R("x","z","y",1,1,t,s,i,l,d,2),R("x","z","y",1,-1,t,s,-i,l,d,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ma(p,3)),this.setAttribute("normal",new ma(v,3)),this.setAttribute("uv",new ma(_,2));function R(C,S,x,z,P,L,B,H,F,J,w){const N=L/F,j=B/J,re=L/2,ae=B/2,pe=H/2,fe=F+1,O=J+1;let G=0,ie=0;const Me=new se;for(let ye=0;ye<O;ye++){const U=ye*j-ae;for(let ne=0;ne<fe;ne++){const _e=ne*N-re;Me[C]=_e*z,Me[S]=U*P,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[S]=0,Me[x]=H>0?1:-1,v.push(Me.x,Me.y,Me.z),_.push(ne/F),_.push(1-ye/J),G+=1}}for(let ye=0;ye<J;ye++)for(let U=0;U<F;U++){const ne=y+U+fe*ye,_e=y+U+fe*(ye+1),Ae=y+(U+1)+fe*(ye+1),Be=y+(U+1)+fe*ye;m.push(ne,_e,Be),m.push(_e,Ae,Be),ie+=6}h.addGroup(b,ie,w),b+=ie,y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Lr(o[i]);for(const l in s)t[l]=s[l]}return t}function JM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function iv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Et.workingColorSpace}const $M={clone:Lr,merge:zn};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=JM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class av extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new se,e_=new kt,t_=new kt;class pi extends av{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Th*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,e_,t_),i.subVectors(t_,e_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,Tr=1;class nb extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Er,Tr,t,i);l.layers=this.layers,this.add(l);const u=new pi(Er,Tr,t,i);u.layers=this.layers,this.add(u);const d=new pi(Er,Tr,t,i);d.layers=this.layers,this.add(d);const h=new pi(Er,Tr,t,i);h.layers=this.layers,this.add(h);const m=new pi(Er,Tr,t,i);m.layers=this.layers,this.add(m);const p=new pi(Er,Tr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,y,b),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class sv extends Fn{constructor(t=[],i=Ns,s,l,u,d,h,m,p,v){super(t,i,s,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rv extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Lr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ha});u.uniforms.tEquirect.value=i;const d=new xa(l,u),h=i.minFilter;return i.minFilter===ws&&(i.minFilter=On),new nb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class Tc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,s),x=this._getHandJoint(p,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=v.position.distanceTo(_.position),b=.02,R=.005;p.inputState.pinching&&y>b+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=b-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ab extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class sb extends Fn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=Cn,v=Cn,_,y){super(null,d,h,m,p,v,l,u,_,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new se,rb=new se,ob=new ut;class Ts{constructor(t=new se(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Td.subVectors(s,i).cross(rb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ob.getNormalMatrix(t),l=this.coplanarPoint(Td).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Gc,lb=new kt(.5,.5),Ac=new se;class ov{constructor(t=new Ts,i=new Ts,s=new Ts,l=new Ts,u=new Ts,d=new Ts){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Fi,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],y=u[6],b=u[7],R=u[8],C=u[9],S=u[10],x=u[11],z=u[12],P=u[13],L=u[14],B=u[15];if(l[0].setComponents(p-d,b-v,x-R,B-z).normalize(),l[1].setComponents(p+d,b+v,x+R,B+z).normalize(),l[2].setComponents(p+h,b+_,x+C,B+P).normalize(),l[3].setComponents(p-h,b-_,x-C,B-P).normalize(),s)l[4].setComponents(m,y,S,L).normalize(),l[5].setComponents(p-m,b-y,x-S,B-L).normalize();else if(l[4].setComponents(p-m,b-y,x-S,B-L).normalize(),i===Fi)l[5].setComponents(p+m,b+y,x+S,B+L).normalize();else if(i===Ic)l[5].setComponents(m,y,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const i=lb.distanceTo(t.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends Zo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const n_=new sn,Ah=new Q_,Rc=new Gc,wc=new se;class cb extends qn{constructor(t=new wi,i=new lv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,t.ray.intersectsSphere(Rc)===!1)return;n_.copy(l).invert(),Ah.copy(t.ray).applyMatrix4(n_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const y=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let R=y,C=b;R<C;R++){const S=p.getX(R);wc.fromBufferAttribute(_,S),i_(wc,S,m,l,t,i,this)}}else{const y=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let R=y,C=b;R<C;R++)wc.fromBufferAttribute(_,R),i_(wc,R,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function i_(o,t,i,s,l,u,d){const h=Ah.distanceSqToPoint(o);if(h<i){const m=new se;Ah.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Xo extends Fn{constructor(t,i,s=Hi,l,u,d,h=Cn,m=Cn,p,v=_a,_=1){if(v!==_a&&v!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,u,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ub extends Xo{constructor(t,i=Hi,s=Ns,l,u,d=Cn,h=Cn,m,p=_a){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,u,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vc extends wi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,_=t/h,y=i/m,b=[],R=[],C=[],S=[];for(let x=0;x<v;x++){const z=x*y-d;for(let P=0;P<p;P++){const L=P*_-u;R.push(L,-z,0),C.push(0,0,1),S.push(P/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<h;z++){const P=z+p*x,L=z+p*(x+1),B=z+1+p*(x+1),H=z+1+p*x;b.push(P,L,H),b.push(L,B,H)}this.setIndex(b),this.setAttribute("position",new ma(R,3)),this.setAttribute("normal",new ma(C,3)),this.setAttribute("uv",new ma(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class fb extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class db extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hb extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uv extends av{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pb extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function a_(o,t,i,s){const l=mb(s);switch(i){case q_:return o*t;case Y_:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case Dr:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case W_:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case zh:return o*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Kd:return Math.max(o,16)*Math.max(t,8)/4;case Wd:case Zd:return Math.max(o,8)*Math.max(t,8)/2;case Qd:case Jd:case eh:case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case $d:case nh:case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case vh:case xh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case bh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mb(o){switch(o){case mi:case V_:return{byteLength:1,components:1};case Vo:case k_:case ga:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Hi:case Dh:case zi:return{byteLength:4,components:1};case j_:case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function fv(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function gb(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((b,R)=>b.start-R.start);let y=0;for(let b=1;b<_.length;b++){const R=_[y],C=_[b];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++y,_[y]=C)}_.length=y+1;for(let b=0,R=_.length;b<R;b++){const C=_[b];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var _b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vb=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
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
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`uniform sampler2D dfgLUT;
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
}`,g1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tE=`float getShadowMask() {
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
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
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
}`,bE=`#if DEPTH_PACKING == 3200
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
}`,EE=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
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
}`,CE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,DE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,LE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,PE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,FE=`#define NORMAL
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
}`,IE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,VE=`#define TOON
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
}`,kE=`#define TOON
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
}`,jE=`uniform float size;
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
}`,XE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,WE=`uniform vec3 color;
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
}`,YE=`uniform float rotation;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:_b,alphahash_pars_fragment:vb,alphamap_fragment:xb,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:bb,aomap_pars_fragment:Eb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Rb,beginnormal_vertex:wb,bsdfs:Cb,iridescence_fragment:Nb,bumpmap_pars_fragment:Db,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Pb,color_fragment:zb,color_pars_fragment:Fb,color_pars_vertex:Ib,color_vertex:Bb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:kb,displacementmap_vertex:jb,emissivemap_fragment:Xb,emissivemap_pars_fragment:qb,colorspace_fragment:Wb,colorspace_pars_fragment:Yb,envmap_fragment:Zb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Qb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:c1,envmap_vertex:$b,fog_vertex:e1,fog_pars_vertex:t1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:u1,lights_toon_pars_fragment:f1,lights_phong_fragment:d1,lights_phong_pars_fragment:h1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:M1,map_fragment:b1,map_pars_fragment:E1,map_particle_fragment:T1,map_particle_pars_fragment:A1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:w1,morphinstance_vertex:C1,morphcolor_vertex:N1,morphnormal_vertex:D1,morphtarget_pars_vertex:U1,morphtarget_vertex:L1,normal_fragment_begin:O1,normal_fragment_maps:P1,normal_pars_fragment:z1,normal_pars_vertex:F1,normal_vertex:I1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:k1,opaque_fragment:j1,packing:X1,premultiplied_alpha_fragment:q1,project_vertex:W1,dithering_fragment:Y1,dithering_pars_fragment:Z1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:$1,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:aE,skinnormal_vertex:sE,specularmap_fragment:rE,specularmap_pars_fragment:oE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:bE,distance_vert:EE,distance_frag:TE,equirect_vert:AE,equirect_frag:RE,linedashed_vert:wE,linedashed_frag:CE,meshbasic_vert:NE,meshbasic_frag:DE,meshlambert_vert:UE,meshlambert_frag:LE,meshmatcap_vert:OE,meshmatcap_frag:PE,meshnormal_vert:zE,meshnormal_frag:FE,meshphong_vert:IE,meshphong_frag:BE,meshphysical_vert:HE,meshphysical_frag:GE,meshtoon_vert:VE,meshtoon_frag:kE,points_vert:jE,points_frag:XE,shadow_vert:qE,shadow_frag:WE,sprite_vert:YE,sprite_frag:ZE},Oe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Pi={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pi.physical={uniforms:zn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Cc={r:0,b:0,g:0},bs=new va,KE=new sn;function QE(o,t,i,s,l,u,d){const h=new Bt(0);let m=u===!0?0:1,p,v,_=null,y=0,b=null;function R(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function C(P){let L=!1;const B=R(P);B===null?x(h,m):B&&B.isColor&&(x(B,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,L){const B=R(L);B&&(B.isCubeTexture||B.mapping===Hc)?(v===void 0&&(v=new xa(new Ko(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Lr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),bs.copy(L.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(bs)),v.material.toneMapped=Et.getTransfer(B.colorSpace)!==It,(_!==B||y!==B.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,_=B,y=B.version,b=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new xa(new Vc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Lr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Et.getTransfer(B.colorSpace)!==It,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||y!==B.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,y=B.version,b=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,L){P.getRGB(Cc,iv(o)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,L,d)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,L=1){h.set(P),m=L,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(h,m)},render:C,addToRenderList:S,dispose:z}}function JE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,d=!1;function h(N,j,re,ae,pe){let fe=!1;const O=_(ae,re,j);u!==O&&(u=O,p(u.object)),fe=b(N,ae,re,pe),fe&&R(N,ae,re,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,L(N,j,re,ae),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(N){return o.bindVertexArray(N)}function v(N){return o.deleteVertexArray(N)}function _(N,j,re){const ae=re.wireframe===!0;let pe=s[N.id];pe===void 0&&(pe={},s[N.id]=pe);let fe=pe[j.id];fe===void 0&&(fe={},pe[j.id]=fe);let O=fe[ae];return O===void 0&&(O=y(m()),fe[ae]=O),O}function y(N){const j=[],re=[],ae=[];for(let pe=0;pe<i;pe++)j[pe]=0,re[pe]=0,ae[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:re,attributeDivisors:ae,object:N,attributes:{},index:null}}function b(N,j,re,ae){const pe=u.attributes,fe=j.attributes;let O=0;const G=re.getAttributes();for(const ie in G)if(G[ie].location>=0){const ye=pe[ie];let U=fe[ie];if(U===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),ye===void 0||ye.attribute!==U||U&&ye.data!==U.data)return!0;O++}return u.attributesNum!==O||u.index!==ae}function R(N,j,re,ae){const pe={},fe=j.attributes;let O=0;const G=re.getAttributes();for(const ie in G)if(G[ie].location>=0){let ye=fe[ie];ye===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));const U={};U.attribute=ye,ye&&ye.data&&(U.data=ye.data),pe[ie]=U,O++}u.attributes=pe,u.attributesNum=O,u.index=ae}function C(){const N=u.newAttributes;for(let j=0,re=N.length;j<re;j++)N[j]=0}function S(N){x(N,0)}function x(N,j){const re=u.newAttributes,ae=u.enabledAttributes,pe=u.attributeDivisors;re[N]=1,ae[N]===0&&(o.enableVertexAttribArray(N),ae[N]=1),pe[N]!==j&&(o.vertexAttribDivisor(N,j),pe[N]=j)}function z(){const N=u.newAttributes,j=u.enabledAttributes;for(let re=0,ae=j.length;re<ae;re++)j[re]!==N[re]&&(o.disableVertexAttribArray(re),j[re]=0)}function P(N,j,re,ae,pe,fe,O){O===!0?o.vertexAttribIPointer(N,j,re,pe,fe):o.vertexAttribPointer(N,j,re,ae,pe,fe)}function L(N,j,re,ae){C();const pe=ae.attributes,fe=re.getAttributes(),O=j.defaultAttributeValues;for(const G in fe){const ie=fe[G];if(ie.location>=0){let Me=pe[G];if(Me===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),Me!==void 0){const ye=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ae=ne.type,Be=ne.bytesPerElement,te=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Dh;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ne=ue.stride,ke=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<ie.locationSize;He++)x(ie.location+He,ue.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<ie.locationSize;He++)S(ie.location+He);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let He=0;He<ie.locationSize;He++)P(ie.location+He,U/ie.locationSize,Ae,ye,Ne*Be,(ke+U/ie.locationSize*He)*Be,te)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)x(ie.location+ue,Me.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ie.locationSize;ue++)S(ie.location+ue);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ue=0;ue<ie.locationSize;ue++)P(ie.location+ue,U/ie.locationSize,Ae,ye,U*Be,U/ie.locationSize*ue*Be,te)}}else if(O!==void 0){const ye=O[G];if(ye!==void 0)switch(ye.length){case 2:o.vertexAttrib2fv(ie.location,ye);break;case 3:o.vertexAttrib3fv(ie.location,ye);break;case 4:o.vertexAttrib4fv(ie.location,ye);break;default:o.vertexAttrib1fv(ie.location,ye)}}}}z()}function B(){J();for(const N in s){const j=s[N];for(const re in j){const ae=j[re];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete j[re]}delete s[N]}}function H(N){if(s[N.id]===void 0)return;const j=s[N.id];for(const re in j){const ae=j[re];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete j[re]}delete s[N.id]}function F(N){for(const j in s){const re=s[j];if(re[N.id]===void 0)continue;const ae=re[N.id];for(const pe in ae)v(ae[pe].object),delete ae[pe];delete re[N.id]}}function J(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:z}}function $E(o,t,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function h(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let b=0;for(let R=0;R<_;R++)b+=v[R];i.update(b,s,1)}function m(p,v,_,y){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<p.length;R++)d(p[R],v[R],y[R]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,_);let R=0;for(let C=0;C<_;C++)R+=v[C]*y[C];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function eT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ai&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const J=F===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==mi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!J)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:z,maxVaryings:P,maxFragmentUniforms:L,maxSamples:B,samples:H}}function tT(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Ts,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const b=_.length!==0||y||s!==0||l;return l=y,s=_.length,b},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,b){const R=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||u&&!S)u?v(null):p();else{const z=u?0:s,P=z*4;let L=x.clippingState||null;m.value=L,L=v(R,y,P,b);for(let B=0;B!==P;++B)L[B]=i[B];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,y,b,R){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,R!==!0||S===null){const x=b+C*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,L=b;P!==C;++P,L+=4)d.copy(_[P]).applyMatrix4(z,h),d.normal.toArray(S,L),S[L+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function nT(o){let t=new WeakMap;function i(d,h){return h===kd?d.mapping=Ns:h===jd&&(d.mapping=Nr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===kd||h===jd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new rv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const $a=4,s_=[.125,.215,.35,.446,.526,.582],Rs=20,iT=256,zo=new uv,r_=new Bt;let Ad=null,Rd=0,wd=0,Cd=!1;const aT=new se;class o_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=aT}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,wd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:ga,format:Ai,colorSpace:Ur,depthBuffer:!1},l=l_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sT(u)),this._blurMaterial=oT(u,t,i),this._ggxMaterial=rT(u,t,i)}return l}_compileMaterial(t){const i=new xa(new wi,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,b=_.toneMapping;_.getClearColor(r_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xa(new Ko,new ev({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const z=t.background;z?z.isColor&&(S.color.copy(z),t.background=null,x=!0):(S.color.copy(r_),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const B=this._cubeSize;Ar(l,L*B,P>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=b,_.autoClear=y,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ns||t.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ar(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),y=0+p*1.25,b=_*y,{_lodMax:R}=this,C=this._sizeLods[s],S=3*C*(s>R-$a?s-R+$a:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=R-i,Ar(u,S,x,3*C,2*C),l.setRenderTarget(u),l.render(h,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-s,Ar(t,S,x,3*C,2*C),l.setRenderTarget(t),l.render(h,zo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const y=p.uniforms,b=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Rs-1),C=u/R,S=isFinite(u)?1+Math.floor(v*C):Rs;S>Rs&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rs}`);const x=[];let z=0;for(let F=0;F<Rs;++F){const J=F/C,w=Math.exp(-J*J/2);x.push(w),F===0?z+=w:F<S&&(z+=2*w)}for(let F=0;F<x.length;F++)x[F]=x[F]/z;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:P}=this;y.dTheta.value=R,y.mipInt.value=P-s;const L=this._sizeLods[l],B=3*L*(l>P-$a?l-P+$a:0),H=4*(this._cubeSize-L);Ar(i,B,H,3*L,2*L),m.setRenderTarget(i),m.render(_,zo)}}function sT(o){const t=[],i=[],s=[];let l=o;const u=o-$a+1+s_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-$a?m=s_[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,y=[v,v,_,v,_,_,v,v,_,_,v,_],b=6,R=6,C=3,S=2,x=1,z=new Float32Array(C*R*b),P=new Float32Array(S*R*b),L=new Float32Array(x*R*b);for(let H=0;H<b;H++){const F=H%3*2/3-1,J=H>2?0:-1,w=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];z.set(w,C*R*H),P.set(y,S*R*H);const N=[H,H,H,H,H,H];L.set(N,x*R*H)}const B=new wi;B.setAttribute("position",new Ri(z,C)),B.setAttribute("uv",new Ri(P,S)),B.setAttribute("faceIndex",new Ri(L,x)),s.push(new xa(B,null)),l>$a&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function l_(o,t,i){const s=new Bi(o,t,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ar(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function rT(o,t,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function oT(o,t,i){const s=new Float32Array(Rs),l=new se(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function c_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function u_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

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
	`}function lT(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===kd||m===jd,v=m===Ns||m===Nr;if(p||v){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new o_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new o_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function cT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("WebGLRenderer: "+s+" extension not supported."),l}}}function uT(o,t,i,s){const l={},u=new WeakMap;function d(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const R in y.attributes)t.remove(y.attributes[R]);y.removeEventListener("dispose",d),delete l[y.id];const b=u.get(y);b&&(t.remove(b),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const b in y)t.update(y[b],o.ARRAY_BUFFER)}function p(_){const y=[],b=_.index,R=_.attributes.position;let C=0;if(b!==null){const z=b.array;C=b.version;for(let P=0,L=z.length;P<L;P+=3){const B=z[P+0],H=z[P+1],F=z[P+2];y.push(B,H,H,F,F,B)}}else if(R!==void 0){const z=R.array;C=R.version;for(let P=0,L=z.length/3-1;P<L;P+=3){const B=P+0,H=P+1,F=P+2;y.push(B,H,H,F,F,B)}}else return;const S=new(Z_(y)?nv:tv)(y,1);S.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,S)}function v(_){const y=u.get(_);if(y){const b=_.index;b!==null&&y.version<b.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function fT(o,t,i){let s;function l(y){s=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,b){o.drawElements(s,b,u,y*d),i.update(b,s,1)}function p(y,b,R){R!==0&&(o.drawElementsInstanced(s,b,u,y*d,R),i.update(b,s,R))}function v(y,b,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,y,0,R);let S=0;for(let x=0;x<R;x++)S+=b[x];i.update(S,s,1)}function _(y,b,R,C){if(R===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)p(y[x]/d,b[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,u,y,0,C,0,R);let x=0;for(let z=0;z<R;z++)x+=b[z]*C[z];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function dT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function hT(o,t,i){const s=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let y=s.get(h);if(y===void 0||y.count!==_){let N=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var b=N;y!==void 0&&y.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),S===!0&&(L=3);let B=h.attributes.position.count*L,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*H*4*_),J=new K_(F,B,H,_);J.type=zi,J.needsUpdate=!0;const w=L*4;for(let j=0;j<_;j++){const re=x[j],ae=z[j],pe=P[j],fe=B*H*4*j;for(let O=0;O<re.count;O++){const G=O*w;R===!0&&(l.fromBufferAttribute(re,O),F[fe+G+0]=l.x,F[fe+G+1]=l.y,F[fe+G+2]=l.z,F[fe+G+3]=0),C===!0&&(l.fromBufferAttribute(ae,O),F[fe+G+4]=l.x,F[fe+G+5]=l.y,F[fe+G+6]=l.z,F[fe+G+7]=0),S===!0&&(l.fromBufferAttribute(pe,O),F[fe+G+8]=l.x,F[fe+G+9]=l.y,F[fe+G+10]=l.z,F[fe+G+11]=pe.itemSize===4?l.w:1)}}y={count:_,texture:J,size:new kt(B,H)},s.set(h,y),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let S=0;S<p.length;S++)R+=p[S];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function pT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const mT={[O_]:"LINEAR_TONE_MAPPING",[P_]:"REINHARD_TONE_MAPPING",[z_]:"CINEON_TONE_MAPPING",[F_]:"ACES_FILMIC_TONE_MAPPING",[B_]:"AGX_TONE_MAPPING",[H_]:"NEUTRAL_TONE_MAPPING",[I_]:"CUSTOM_TONE_MAPPING"};function gT(o,t,i,s,l){const u=new Bi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Bi(t,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),h=new wi;h.setAttribute("position",new ma([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ma([0,2,0,0,2,0],2));const m=new fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new xa(h,m),v=new uv(-1,1,1,-1,0,1);let _=null,y=null,b=!1,R,C=null,S=[],x=!1;this.setSize=function(z,P){u.setSize(z,P),d.setSize(z,P);for(let L=0;L<S.length;L++){const B=S[L];B.setSize&&B.setSize(z,P)}},this.setEffects=function(z){S=z,x=S.length>0&&S[0].isRenderPass===!0;const P=u.width,L=u.height;for(let B=0;B<S.length;B++){const H=S[B];H.setSize&&H.setSize(P,L)}},this.begin=function(z,P){if(b||z.toneMapping===Ii&&S.length===0)return!1;if(C=P,P!==null){const L=P.width,B=P.height;(u.width!==L||u.height!==B)&&this.setSize(L,B)}return x===!1&&z.setRenderTarget(u),R=z.toneMapping,z.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(z,P){z.toneMapping=R,b=!0;let L=u,B=d;for(let H=0;H<S.length;H++){const F=S[H];if(F.enabled!==!1&&(F.render(z,B,L,P),F.needsSwap!==!1)){const J=L;L=B,B=J}}if(_!==z.outputColorSpace||y!==z.toneMapping){_=z.outputColorSpace,y=z.toneMapping,m.defines={},Et.getTransfer(_)===It&&(m.defines.SRGB_TRANSFER="");const H=mT[y];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(C),z.render(p,v),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const dv=new Fn,Rh=new Xo(1,1),hv=new K_,pv=new HM,mv=new sv,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Pr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=f_[l];if(u===void 0&&(u=new Float32Array(l),f_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function jc(o,t){let i=d_[t];i===void 0&&(i=new Int32Array(t),d_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function _T(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function ST(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;m_.set(s),o.uniformMatrix2fv(this.addr,!1,m_),gn(i,s)}}function MT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;p_.set(s),o.uniformMatrix3fv(this.addr,!1,p_),gn(i,s)}}function bT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;h_.set(s),o.uniformMatrix4fv(this.addr,!1,h_),gn(i,s)}}function ET(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function wT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function UT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Ih:Fh,u=Rh):u=dv,i.setTexture2D(t||u,l)}function LT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||pv,l)}function OT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mv,l)}function PT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hv,l)}function zT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return bT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return wT;case 36294:return CT;case 36295:return NT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function FT(o,t){o.uniform1fv(this.addr,t)}function IT(o,t){const i=Pr(t,this.size,2);o.uniform2fv(this.addr,i)}function BT(o,t){const i=Pr(t,this.size,3);o.uniform3fv(this.addr,i)}function HT(o,t){const i=Pr(t,this.size,4);o.uniform4fv(this.addr,i)}function GT(o,t){const i=Pr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VT(o,t){const i=Pr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kT(o,t){const i=Pr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function jT(o,t){o.uniform1iv(this.addr,t)}function XT(o,t){o.uniform2iv(this.addr,t)}function qT(o,t){o.uniform3iv(this.addr,t)}function WT(o,t){o.uniform4iv(this.addr,t)}function YT(o,t){o.uniform1uiv(this.addr,t)}function ZT(o,t){o.uniform2uiv(this.addr,t)}function KT(o,t){o.uniform3uiv(this.addr,t)}function QT(o,t){o.uniform4uiv(this.addr,t)}function JT(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Rh:d=dv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function $T(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||pv,u[d])}function eA(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||mv,u[d])}function tA(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||hv,u[d])}function nA(o){switch(o){case 5126:return FT;case 35664:return IT;case 35665:return BT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return jT;case 35667:case 35671:return XT;case 35668:case 35672:return qT;case 35669:case 35673:return WT;case 5125:return YT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class aA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function g_(o,t){o.seq.push(t),o.map[t.id]=t}function rA(o,t,i){const s=o.name,l=s.length;for(Nd.lastIndex=0;;){const u=Nd.exec(s),d=Nd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){g_(i,p===void 0?new iA(h,o,t):new aA(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new sA(h),g_(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);rA(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function __(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const oA=37297;let lA=0;function cA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const v_=new ut;function uA(o){Et._getMatrix(v_,Et.workingColorSpace,o);const t=`mat3( ${v_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(o)){case Fc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function x_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+cA(o.getShaderSource(t),h)}else return u}function fA(o,t){const i=uA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const dA={[O_]:"Linear",[P_]:"Reinhard",[z_]:"Cineon",[F_]:"ACESFilmic",[B_]:"AgX",[H_]:"Neutral",[I_]:"Custom"};function hA(o,t){const i=dA[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new se;function pA(){Et.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function gA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function _A(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Bo(o){return o!==""}function y_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(o){return o.replace(vA,yA)}const xA=new Map;function yA(o,t){let i=ft[t];if(i===void 0){const s=xA.get(t);if(s!==void 0)i=ft[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return wh(i)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(o){return o.replace(SA,MA)}function MA(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const bA={[Dc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function EA(o){return bA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TA={[Ns]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function AA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":TA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const RA={[Nr]:"ENVMAP_MODE_REFRACTION"};function wA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":RA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CA={[L_]:"ENVMAP_BLENDING_MULTIPLY",[yM]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function NA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":CA[o.combine]||"ENVMAP_BLENDING_NONE"}function DA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UA(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=EA(i),p=AA(i),v=wA(i),_=NA(i),y=DA(i),b=mA(i),R=gA(u),C=l.createProgram();let S,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(S=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ii?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),pA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=wh(d),d=y_(d,i),d=S_(d,i),h=wh(h),h=y_(h,i),h=S_(h,i),d=M_(d),h=M_(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=z+S+d,L=z+x+h,B=__(l,l.VERTEX_SHADER,P),H=__(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(j){if(o.debug.checkShaderErrors){const re=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(H)||"",fe=re.trim(),O=ae.trim(),G=pe.trim();let ie=!0,Me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,H);else{const ye=x_(l,B,"vertex"),U=x_(l,H,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+fe+`
`+ye+`
`+U)}else fe!==""?st("WebGLProgram: Program Info Log:",fe):(O===""||G==="")&&(Me=!1);Me&&(j.diagnostics={runnable:ie,programLog:fe,vertexShader:{log:O,prefix:S},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(H),J=new zc(l,C),w=_A(l,C)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(C,oA)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=H,this}let LA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new PA(t),i.set(t,s)),s}}class PA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function zA(o,t,i,s,l,u,d){const h=new J_,m=new OA,p=new Set,v=[],_=new Map,y=l.logarithmicDepthBuffer;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,N,j,re,ae){const pe=re.fog,fe=ae.geometry,O=w.isMeshStandardMaterial?re.environment:null,G=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),ie=G&&G.mapping===Hc?G.image.height:null,Me=R[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&st("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const ye=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ye!==void 0?ye.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let _e,Ae,Be,te;if(Me){const bt=Pi[Me];_e=bt.vertexShader,Ae=bt.fragmentShader}else _e=w.vertexShader,Ae=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const ue=o.getRenderTarget(),Ne=o.state.buffers.depth.getReversed(),ke=ae.isInstancedMesh===!0,He=ae.isBatchedMesh===!0,dt=!!w.map,Qt=!!w.matcap,gt=!!G,ht=!!w.aoMap,wt=!!w.lightMap,rt=!!w.bumpMap,Jt=!!w.normalMap,V=!!w.displacementMap,Yt=!!w.emissiveMap,St=!!w.metalnessMap,Ut=!!w.roughnessMap,We=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,q=w.iridescence>0,he=w.sheen>0,xe=w.transmission>0,ce=We&&!!w.anisotropyMap,Ze=D&&!!w.clearcoatMap,we=D&&!!w.clearcoatNormalMap,je=D&&!!w.clearcoatRoughnessMap,tt=q&&!!w.iridescenceMap,be=q&&!!w.iridescenceThicknessMap,Ee=he&&!!w.sheenColorMap,Fe=he&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ce=!!w.specularColorMap,lt=!!w.specularIntensityMap,X=xe&&!!w.transmissionMap,Ue=xe&&!!w.thicknessMap,Te=!!w.gradientMap,ze=!!w.alphaMap,Se=w.alphaTest>0,ve=!!w.alphaHash,Re=!!w.extensions;let nt=Ii;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Ot={shaderID:Me,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:He,batchingColor:He&&ae._colorsTexture!==null,instancing:ke,instancingColor:ke&&ae.instanceColor!==null,instancingMorph:ke&&ae.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ur,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:Qt,envMap:gt,envMapMode:gt&&G.mapping,envMapCubeUVHeight:ie,aoMap:ht,lightMap:wt,bumpMap:rt,normalMap:Jt,displacementMap:V,emissiveMap:Yt,normalMapObjectSpace:Jt&&w.normalMapType===TM,normalMapTangentSpace:Jt&&w.normalMapType===EM,metalnessMap:St,roughnessMap:Ut,anisotropy:We,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:je,dispersion:M,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:lt,transmission:xe,transmissionMap:X,thicknessMap:Ue,gradientMap:Te,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:ze,alphaTest:Se,alphaHash:ve,combine:w.combine,mapUv:dt&&C(w.map.channel),aoMapUv:ht&&C(w.aoMap.channel),lightMapUv:wt&&C(w.lightMap.channel),bumpMapUv:rt&&C(w.bumpMap.channel),normalMapUv:Jt&&C(w.normalMap.channel),displacementMapUv:V&&C(w.displacementMap.channel),emissiveMapUv:Yt&&C(w.emissiveMap.channel),metalnessMapUv:St&&C(w.metalnessMap.channel),roughnessMapUv:Ut&&C(w.roughnessMap.channel),anisotropyMapUv:ce&&C(w.anisotropyMap.channel),clearcoatMapUv:Ze&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(w.sheenRoughnessMap.channel),specularMapUv:Pe&&C(w.specularMap.channel),specularColorMapUv:Ce&&C(w.specularColorMap.channel),specularIntensityMapUv:lt&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Ue&&C(w.thicknessMap.channel),alphaMapUv:ze&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Jt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(dt||ze),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ne,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fa,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)N.push(j),N.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(z(N,w),P(N,w),N.push(o.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function z(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function L(w){const N=R[w.type];let j;if(N){const re=Pi[N];j=$M.clone(re.uniforms)}else j=w.uniforms;return j}function B(w,N){let j=_.get(N);return j!==void 0?++j.usedTimes:(j=new UA(o,N,w,u),v.push(j),_.set(N,j)),j}function H(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function F(w){m.remove(w)}function J(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:L,acquireProgram:B,releaseProgram:H,releaseShaderCache:F,programs:v,dispose:J}}function FA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function IA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function E_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function T_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(_,y,b,R,C,S){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:y,material:b,groupOrder:R,renderOrder:_.renderOrder,z:C,group:S},o[t]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=b,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=C,x.group=S),t++,x}function h(_,y,b,R,C,S){const x=d(_,y,b,R,C,S);b.transmission>0?s.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(_,y,b,R,C,S){const x=d(_,y,b,R,C,S);b.transmission>0?s.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,y){i.length>1&&i.sort(_||IA),s.length>1&&s.sort(y||E_),l.length>1&&l.sort(y||E_)}function v(){for(let _=t,y=o.length;_<y;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function BA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new T_,o.set(s,[d])):l>=u.length?(d=new T_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function HA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new se,color:new Bt};break;case"SpotLight":i={position:new se,direction:new se,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new se,halfWidth:new se,halfHeight:new se};break}return o[t.id]=i,i}}}function GA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let VA=0;function kA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function jA(o){const t=new HA,i=GA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const l=new se,u=new sn,d=new sn;function h(p){let v=0,_=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let b=0,R=0,C=0,S=0,x=0,z=0,P=0,L=0,B=0,H=0,F=0;p.sort(kA);for(let w=0,N=p.length;w<N;w++){const j=p[w],re=j.color,ae=j.intensity,pe=j.distance;let fe=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===Dr?fe=j.shadow.map.texture:fe=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=re.r*ae,_+=re.g*ae,y+=re.b*ae;else if(j.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(j.sh.coefficients[O],ae);F++}else if(j.isDirectionalLight){const O=t.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const G=j.shadow,ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,s.directionalShadow[b]=ie,s.directionalShadowMap[b]=fe,s.directionalShadowMatrix[b]=j.shadow.matrix,z++}s.directional[b]=O,b++}else if(j.isSpotLight){const O=t.get(j);O.position.setFromMatrixPosition(j.matrixWorld),O.color.copy(re).multiplyScalar(ae),O.distance=pe,O.coneCos=Math.cos(j.angle),O.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),O.decay=j.decay,s.spot[C]=O;const G=j.shadow;if(j.map&&(s.spotLightMap[B]=j.map,B++,G.updateMatrices(j),j.castShadow&&H++),s.spotLightMatrix[C]=G.matrix,j.castShadow){const ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,s.spotShadow[C]=ie,s.spotShadowMap[C]=fe,L++}C++}else if(j.isRectAreaLight){const O=t.get(j);O.color.copy(re).multiplyScalar(ae),O.halfWidth.set(j.width*.5,0,0),O.halfHeight.set(0,j.height*.5,0),s.rectArea[S]=O,S++}else if(j.isPointLight){const O=t.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),O.distance=j.distance,O.decay=j.decay,j.castShadow){const G=j.shadow,ie=i.get(j);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,ie.shadowCameraNear=G.camera.near,ie.shadowCameraFar=G.camera.far,s.pointShadow[R]=ie,s.pointShadowMap[R]=fe,s.pointShadowMatrix[R]=j.shadow.matrix,P++}s.point[R]=O,R++}else if(j.isHemisphereLight){const O=t.get(j);O.skyColor.copy(j.color).multiplyScalar(ae),O.groundColor.copy(j.groundColor).multiplyScalar(ae),s.hemi[x]=O,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=y;const J=s.hash;(J.directionalLength!==b||J.pointLength!==R||J.spotLength!==C||J.rectAreaLength!==S||J.hemiLength!==x||J.numDirectionalShadows!==z||J.numPointShadows!==P||J.numSpotShadows!==L||J.numSpotMaps!==B||J.numLightProbes!==F)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=S,s.point.length=R,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=F,J.directionalLength=b,J.pointLength=R,J.spotLength=C,J.rectAreaLength=S,J.hemiLength=x,J.numDirectionalShadows=z,J.numPointShadows=P,J.numSpotShadows=L,J.numSpotMaps=B,J.numLightProbes=F,s.version=VA++)}function m(p,v){let _=0,y=0,b=0,R=0,C=0;const S=v.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const P=p[x];if(P.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),_++}else if(P.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),b++}else if(P.isRectAreaLight){const L=s.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(S),d.identity(),u.copy(P.matrixWorld),u.premultiply(S),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:s}}function A_(o){const t=new jA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function XA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new A_(o),t.set(l,[h])):u>=d.length?(h=new A_(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
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
}`,YA=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],ZA=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],R_=new sn,Fo=new se,Dd=new se;function KA(o,t,i){let s=new ov;const l=new kt,u=new kt,d=new an,h=new db,m=new hb,p={},v=i.maxTextureSize,_={[es]:Xn,[Xn]:es,[fa]:fa},y=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:qA,fragmentShader:WA}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const R=new wi;R.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xa(R,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let x=this.type;this.render=function(H,F,J){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;H.type===tM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Dc);const w=o.getRenderTarget(),N=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),re=o.state;re.setBlending(ha),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=x!==this.type;ae&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=H.length;pe<fe;pe++){const O=H[pe],G=O.shadow;if(G===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ie=G.getFrameExtents();if(l.multiply(ie),u.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ie.x),l.x=u.x*ie.x,G.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ie.y),l.y=u.y*ie.y,G.mapSize.y=u.y)),G.map===null||ae===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Io){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bi(l.x,l.y,{format:Dr,type:ga,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new Xo(l.x,l.y,zi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=_a,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{O.isPointLight?(G.map=new rv(l.x),G.map.depthTexture=new ub(l.x,Hi)):(G.map=new Bi(l.x,l.y),G.map.depthTexture=new Xo(l.x,l.y,Hi)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=_a;const ye=o.state.buffers.depth.getReversed();this.type===Dc?(G.map.depthTexture.compareFunction=ye?Ih:Fh,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Me;ye++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,ye),o.clear();else{ye===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(ye);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),re.viewport(d)}if(O.isPointLight){const U=G.camera,ne=G.matrix,_e=O.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Fo.setFromMatrixPosition(O.matrixWorld),U.position.copy(Fo),Dd.copy(U.position),Dd.add(YA[ye]),U.up.copy(ZA[ye]),U.lookAt(Dd),U.updateMatrixWorld(),ne.makeTranslation(-Fo.x,-Fo.y,-Fo.z),R_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(R_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(O);s=G.getFrustum(),L(F,J,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Io&&z(G,J),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(w,N,j)};function z(H,F){const J=t.update(C);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Bi(l.x,l.y,{format:Dr,type:ga})),y.uniforms.shadow_pass.value=H.map.depthTexture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,J,y,C,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,J,b,C,null)}function P(H,F,J,w){let N=null;const j=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(j!==void 0)N=j;else if(N=J.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const re=N.uuid,ae=F.uuid;let pe=p[re];pe===void 0&&(pe={},p[re]=pe);let fe=pe[ae];fe===void 0&&(fe=N.clone(),pe[ae]=fe,F.addEventListener("dispose",B)),N=fe}if(N.visible=F.visible,N.wireframe=F.wireframe,w===Io?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:_[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,J.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const re=o.properties.get(N);re.light=J}return N}function L(H,F,J,w,N){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===Io)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const ae=t.update(H),pe=H.material;if(Array.isArray(pe)){const fe=ae.groups;for(let O=0,G=fe.length;O<G;O++){const ie=fe[O],Me=pe[ie.materialIndex];if(Me&&Me.visible){const ye=P(H,Me,w,N);H.onBeforeShadow(o,H,F,J,ae,ye,ie),o.renderBufferDirect(J,null,ae,ye,H,ie),H.onAfterShadow(o,H,F,J,ae,ye,ie)}}}else if(pe.visible){const fe=P(H,pe,w,N);H.onBeforeShadow(o,H,F,J,ae,fe,null),o.renderBufferDirect(J,null,ae,fe,H,null),H.onAfterShadow(o,H,F,J,ae,fe,null)}}const re=H.children;for(let ae=0,pe=re.length;ae<pe;ae++)L(re[ae],F,J,w,N)}function B(H){H.target.removeEventListener("dispose",B);for(const J in p){const w=p[J],N=H.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const QA={[zd]:Fd,[Id]:Gd,[Bd]:Vd,[Cr]:Hd,[Fd]:zd,[Gd]:Id,[Vd]:Bd,[Hd]:Cr};function JA(o,t){function i(){let X=!1;const Ue=new an;let Te=null;const ze=new an(0,0,0,0);return{setMask:function(Se){Te!==Se&&!X&&(o.colorMask(Se,Se,Se,Se),Te=Se)},setLocked:function(Se){X=Se},setClear:function(Se,ve,Re,nt,Ot){Ot===!0&&(Se*=nt,ve*=nt,Re*=nt),Ue.set(Se,ve,Re,nt),ze.equals(Ue)===!1&&(o.clearColor(Se,ve,Re,nt),ze.copy(Ue))},reset:function(){X=!1,Te=null,ze.set(-1,0,0,0)}}}function s(){let X=!1,Ue=!1,Te=null,ze=null,Se=null;return{setReversed:function(ve){if(Ue!==ve){const Re=t.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ue=ve;const nt=Se;Se=null,this.setClear(nt)}},getReversed:function(){return Ue},setTest:function(ve){ve?ue(o.DEPTH_TEST):Ne(o.DEPTH_TEST)},setMask:function(ve){Te!==ve&&!X&&(o.depthMask(ve),Te=ve)},setFunc:function(ve){if(Ue&&(ve=QA[ve]),ze!==ve){switch(ve){case zd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Id:o.depthFunc(o.LESS);break;case Cr:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case Gd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ve}},setLocked:function(ve){X=ve},setClear:function(ve){Se!==ve&&(Ue&&(ve=1-ve),o.clearDepth(ve),Se=ve)},reset:function(){X=!1,Te=null,ze=null,Se=null,Ue=!1}}}function l(){let X=!1,Ue=null,Te=null,ze=null,Se=null,ve=null,Re=null,nt=null,Ot=null;return{setTest:function(bt){X||(bt?ue(o.STENCIL_TEST):Ne(o.STENCIL_TEST))},setMask:function(bt){Ue!==bt&&!X&&(o.stencilMask(bt),Ue=bt)},setFunc:function(bt,Nn,gi){(Te!==bt||ze!==Nn||Se!==gi)&&(o.stencilFunc(bt,Nn,gi),Te=bt,ze=Nn,Se=gi)},setOp:function(bt,Nn,gi){(ve!==bt||Re!==Nn||nt!==gi)&&(o.stencilOp(bt,Nn,gi),ve=bt,Re=Nn,nt=gi)},setLocked:function(bt){X=bt},setClear:function(bt){Ot!==bt&&(o.clearStencil(bt),Ot=bt)},reset:function(){X=!1,Ue=null,Te=null,ze=null,Se=null,ve=null,Re=null,nt=null,Ot=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},y=new WeakMap,b=[],R=null,C=!1,S=null,x=null,z=null,P=null,L=null,B=null,H=null,F=new Bt(0,0,0),J=0,w=!1,N=null,j=null,re=null,ae=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ie)[1]),O=G>=1):ie.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),O=G>=2);let Me=null,ye={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),_e=new an().fromArray(U),Ae=new an().fromArray(ne);function Be(X,Ue,Te,ze){const Se=new Uint8Array(4),ve=o.createTexture();o.bindTexture(X,ve),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Ue+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return ve}const te={};te[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(Cr),rt(!1),Jt(Ug),ue(o.CULL_FACE),ht(ha);function ue(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ne(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function ke(X,Ue){return _[X]!==Ue?(o.bindFramebuffer(X,Ue),_[X]=Ue,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ue),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function He(X,Ue){let Te=b,ze=!1;if(X){Te=y.get(Ue),Te===void 0&&(Te=[],y.set(Ue,Te));const Se=X.textures;if(Te.length!==Se.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Re=Se.length;ve<Re;ve++)Te[ve]=o.COLOR_ATTACHMENT0+ve;Te.length=Se.length,ze=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Te)}function dt(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const Qt={[As]:o.FUNC_ADD,[iM]:o.FUNC_SUBTRACT,[aM]:o.FUNC_REVERSE_SUBTRACT};Qt[sM]=o.MIN,Qt[rM]=o.MAX;const gt={[oM]:o.ZERO,[lM]:o.ONE,[cM]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[mM]:o.SRC_ALPHA_SATURATE,[hM]:o.DST_COLOR,[fM]:o.DST_ALPHA,[uM]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[pM]:o.ONE_MINUS_DST_COLOR,[dM]:o.ONE_MINUS_DST_ALPHA,[gM]:o.CONSTANT_COLOR,[_M]:o.ONE_MINUS_CONSTANT_COLOR,[vM]:o.CONSTANT_ALPHA,[xM]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(X,Ue,Te,ze,Se,ve,Re,nt,Ot,bt){if(X===ha){C===!0&&(Ne(o.BLEND),C=!1);return}if(C===!1&&(ue(o.BLEND),C=!0),X!==nM){if(X!==S||bt!==w){if((x!==As||L!==As)&&(o.blendEquation(o.FUNC_ADD),x=As,L=As),bt)switch(X){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ld:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Og:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ld:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Lg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Og:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}z=null,P=null,B=null,H=null,F.set(0,0,0),J=0,S=X,w=bt}return}Se=Se||Ue,ve=ve||Te,Re=Re||ze,(Ue!==x||Se!==L)&&(o.blendEquationSeparate(Qt[Ue],Qt[Se]),x=Ue,L=Se),(Te!==z||ze!==P||ve!==B||Re!==H)&&(o.blendFuncSeparate(gt[Te],gt[ze],gt[ve],gt[Re]),z=Te,P=ze,B=ve,H=Re),(nt.equals(F)===!1||Ot!==J)&&(o.blendColor(nt.r,nt.g,nt.b,Ot),F.copy(nt),J=Ot),S=X,w=!1}function wt(X,Ue){X.side===fa?Ne(o.CULL_FACE):ue(o.CULL_FACE);let Te=X.side===Xn;Ue&&(Te=!Te),rt(Te),X.blending===Rr&&X.transparent===!1?ht(ha):ht(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function Jt(X){X!==$S?(ue(o.CULL_FACE),X!==j&&(X===Ug?o.cullFace(o.BACK):X===eM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ne(o.CULL_FACE),j=X}function V(X){X!==re&&(O&&o.lineWidth(X),re=X)}function Yt(X,Ue,Te){X?(ue(o.POLYGON_OFFSET_FILL),(ae!==Ue||pe!==Te)&&(o.polygonOffset(Ue,Te),ae=Ue,pe=Te)):Ne(o.POLYGON_OFFSET_FILL)}function St(X){X?ue(o.SCISSOR_TEST):Ne(o.SCISSOR_TEST)}function Ut(X){X===void 0&&(X=o.TEXTURE0+fe-1),Me!==X&&(o.activeTexture(X),Me=X)}function We(X,Ue,Te){Te===void 0&&(Me===null?Te=o.TEXTURE0+fe-1:Te=Me);let ze=ye[Te];ze===void 0&&(ze={type:void 0,texture:void 0},ye[Te]=ze),(ze.type!==X||ze.texture!==Ue)&&(Me!==Te&&(o.activeTexture(Te),Me=Te),o.bindTexture(X,Ue||te[X]),ze.type=X,ze.texture=Ue)}function D(){const X=ye[Me];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function he(){try{o.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function xe(){try{o.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function we(){try{o.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function je(){try{o.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function tt(){try{o.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function be(){try{o.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ee(X){_e.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function Fe(X){Ae.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Pe(X,Ue){let Te=p.get(Ue);Te===void 0&&(Te=new WeakMap,p.set(Ue,Te));let ze=Te.get(X);ze===void 0&&(ze=o.getUniformBlockIndex(Ue,X.name),Te.set(X,ze))}function Ce(X,Ue){const ze=p.get(Ue).get(X);m.get(Ue)!==ze&&(o.uniformBlockBinding(Ue,ze,X.__bindingPointIndex),m.set(Ue,ze))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Me=null,ye={},_={},y=new WeakMap,b=[],R=null,C=!1,S=null,x=null,z=null,P=null,L=null,B=null,H=null,F=new Bt(0,0,0),J=0,w=!1,N=null,j=null,re=null,ae=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Ne,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:wt,setFlipSided:rt,setCullFace:Jt,setLineWidth:V,setPolygonOffset:Yt,setScissorTest:St,activeTexture:Ut,bindTexture:We,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Pe,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:je,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ee,viewport:Fe,reset:lt}}function $A(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,v=new WeakMap;let _;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return b?new OffscreenCanvas(D,M):Bc("canvas")}function C(D,M,q){let he=1;const xe=We(D);if((xe.width>q||xe.height>q)&&(he=q/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ze=Math.floor(he*xe.height);_===void 0&&(_=R(ce,Ze));const we=M?R(ce,Ze):_;return we.width=ce,we.height=Ze,we.getContext("2d").drawImage(D,0,0,ce,Ze),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ze+")."),we}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,M,q,he,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(q===o.FLOAT&&(ce=o.R32F),q===o.HALF_FLOAT&&(ce=o.R16F),q===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.R8UI),q===o.UNSIGNED_SHORT&&(ce=o.R16UI),q===o.UNSIGNED_INT&&(ce=o.R32UI),q===o.BYTE&&(ce=o.R8I),q===o.SHORT&&(ce=o.R16I),q===o.INT&&(ce=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ce=o.RG32F),q===o.HALF_FLOAT&&(ce=o.RG16F),q===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),q===o.UNSIGNED_INT&&(ce=o.RG32UI),q===o.BYTE&&(ce=o.RG8I),q===o.SHORT&&(ce=o.RG16I),q===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),q===o.UNSIGNED_INT&&(ce=o.RGB32UI),q===o.BYTE&&(ce=o.RGB8I),q===o.SHORT&&(ce=o.RGB16I),q===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),q===o.BYTE&&(ce=o.RGBA8I),q===o.SHORT&&(ce=o.RGBA16I),q===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ze=xe?Fc:Et.getTransfer(he);q===o.FLOAT&&(ce=o.RGBA32F),q===o.HALF_FLOAT&&(ce=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ce=Ze===It?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function L(D,M){let q;return D?M===null||M===Hi||M===ko?q=o.DEPTH24_STENCIL8:M===zi?q=o.DEPTH32F_STENCIL8:M===Vo&&(q=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===ko?q=o.DEPTH_COMPONENT24:M===zi?q=o.DEPTH_COMPONENT32F:M===Vo&&(q=o.DEPTH_COMPONENT16),q}function B(D,M){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function H(D){const M=D.target;M.removeEventListener("dispose",H),J(M),M.isVideoTexture&&v.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),N(M)}function J(D){const M=s.get(D);if(M.__webglInit===void 0)return;const q=D.source,he=y.get(q);if(he){const xe=he[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(D),Object.keys(he).length===0&&y.delete(q)}s.remove(D)}function w(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const q=D.source,he=y.get(q);delete he[M.__cacheKey],d.memory.textures--}function N(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let xe=0;xe<M.__webglFramebuffer[he].length;xe++)o.deleteFramebuffer(M.__webglFramebuffer[he][xe]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let he=0,xe=q.length;he<xe;he++){const ce=s.get(q[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),s.remove(q[he])}s.remove(D)}let j=0;function re(){j=0}function ae(){const D=j;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const q=s.get(D);if(D.isVideoTexture&&St(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,D,M);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function O(D,M){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function G(D,M){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function ie(D,M){const q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ue(q,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const Me={[Xd]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},ye={[Cn]:o.NEAREST,[MM]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},U={[AM]:o.NEVER,[DM]:o.ALWAYS,[RM]:o.LESS,[Fh]:o.LEQUAL,[wM]:o.EQUAL,[Ih]:o.GEQUAL,[CM]:o.GREATER,[NM]:o.NOTEQUAL};function ne(D,M){if(M.type===zi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===td||M.magFilter===lc||M.magFilter===ws||M.minFilter===On||M.minFilter===td||M.minFilter===lc||M.minFilter===ws)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,ye[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==lc&&M.minFilter!==ws||M.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _e(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",H));const he=M.source;let xe=y.get(he);xe===void 0&&(xe={},y.set(he,xe));const ce=pe(M);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xe[ce].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&w(M)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return q}function Ae(D,M,q){return Math.floor(Math.floor(D/q)/M)}function Be(D,M,q,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,he,M.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ze=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ze],Fe=ce[be],Pe=Ee.start+Ee.count,Ce=Ae(Fe.start,M.width,4),lt=Ae(Ee.start,M.width,4);Fe.start<=Pe+1&&Ce===lt&&Ae(Fe.start+Fe.count-1,M.width,4)===Ce?Ee.count=Math.max(Ee.count,Fe.start+Fe.count-Ee.start):(++Ze,ce[Ze]=Fe)}ce.length=Ze+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),je=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Fe=ce[be],Pe=Math.floor(Fe.start/4),Ce=Math.ceil(Fe.count/4),lt=Pe%M.width,X=Math.floor(Pe/M.width),Ue=Ce,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,lt,X,Ue,Te,q,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function te(D,M,q){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const xe=_e(D,M),ce=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+q);const Ze=s.get(ce);if(ce.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+q);const we=Et.getPrimaries(Et.workingColorSpace),je=M.colorSpace===Ja?null:Et.getPrimaries(M.colorSpace),tt=M.colorSpace===Ja||we===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=C(M.image,!1,l.maxTextureSize);be=Ut(M,be);const Ee=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type);let Pe=P(M.internalFormat,Ee,Fe,M.colorSpace,M.isVideoTexture);ne(he,M);let Ce;const lt=M.mipmaps,X=M.isVideoTexture!==!0,Ue=Ze.__version===void 0||xe===!0,Te=ce.dataReady,ze=B(M,be);if(M.isDepthTexture)Pe=L(M.format===Cs,M.type),Ue&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pe,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,null));else if(M.isDataTexture)if(lt.length>0){X&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let Se=0,ve=lt.length;Se<ve;Se++)Ce=lt[Se],X?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Fe,Ce.data):i.texImage2D(o.TEXTURE_2D,Se,Pe,Ce.width,Ce.height,0,Ee,Fe,Ce.data);M.generateMipmaps=!1}else X?(Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height),Te&&Be(M,be,Ee,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,lt[0].width,lt[0].height,be.depth);for(let Se=0,ve=lt.length;Se<ve;Se++)if(Ce=lt[Se],M.format!==Ai)if(Ee!==null)if(X){if(Te)if(M.layerUpdates.size>0){const Re=a_(Ce.width,Ce.height,M.format,M.type);for(const nt of M.layerUpdates){const Ot=Ce.data.subarray(nt*Re/Ce.data.BYTES_PER_ELEMENT,(nt+1)*Re/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,nt,Ce.width,Ce.height,1,Ee,Ot)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,be.depth,Ee,Ce.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Pe,Ce.width,Ce.height,be.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,be.depth,Ee,Fe,Ce.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Se,Pe,Ce.width,Ce.height,be.depth,0,Ee,Fe,Ce.data)}else{X&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let Se=0,ve=lt.length;Se<ve;Se++)Ce=lt[Se],M.format!==Ai?Ee!==null?X?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Ce.data):i.compressedTexImage2D(o.TEXTURE_2D,Se,Pe,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Fe,Ce.data):i.texImage2D(o.TEXTURE_2D,Se,Pe,Ce.width,Ce.height,0,Ee,Fe,Ce.data)}else if(M.isDataArrayTexture)if(X){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,be.width,be.height,be.depth),Te)if(M.layerUpdates.size>0){const Se=a_(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Re=be.data.subarray(ve*Se/be.data.BYTES_PER_ELEMENT,(ve+1)*Se/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Ee,Fe,Re)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isData3DTexture)X?(Ue&&i.texStorage3D(o.TEXTURE_3D,ze,Pe,be.width,be.height,be.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isFramebufferTexture){if(Ue)if(X)i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height);else{let Se=be.width,ve=be.height;for(let Re=0;Re<ze;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,Se,ve,0,Ee,Fe,null),Se>>=1,ve>>=1}}else if(lt.length>0){if(X&&Ue){const Se=We(lt[0]);i.texStorage2D(o.TEXTURE_2D,ze,Pe,Se.width,Se.height)}for(let Se=0,ve=lt.length;Se<ve;Se++)Ce=lt[Se],X?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ee,Fe,Ce):i.texImage2D(o.TEXTURE_2D,Se,Pe,Ee,Fe,Ce);M.generateMipmaps=!1}else if(X){if(Ue){const Se=We(be);i.texStorage2D(o.TEXTURE_2D,ze,Pe,Se.width,Se.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Fe,be)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Ee,Fe,be);S(M)&&x(he),Ze.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,q){if(M.image.length!==6)return;const he=_e(D,M),xe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+q);const ce=s.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(o.TEXTURE0+q);const Ze=Et.getPrimaries(Et.workingColorSpace),we=M.colorSpace===Ja?null:Et.getPrimaries(M.colorSpace),je=M.colorSpace===Ja||Ze===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ve=0;ve<6;ve++)!tt&&!be?Ee[ve]=C(M.image[ve],!0,l.maxCubemapSize):Ee[ve]=be?M.image[ve].image:M.image[ve],Ee[ve]=Ut(M,Ee[ve]);const Fe=Ee[0],Pe=u.convert(M.format,M.colorSpace),Ce=u.convert(M.type),lt=P(M.internalFormat,Pe,Ce,M.colorSpace),X=M.isVideoTexture!==!0,Ue=ce.__version===void 0||he===!0,Te=xe.dataReady;let ze=B(M,Fe);ne(o.TEXTURE_CUBE_MAP,M);let Se;if(tt){X&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,Fe.width,Fe.height);for(let ve=0;ve<6;ve++){Se=Ee[ve].mipmaps;for(let Re=0;Re<Se.length;Re++){const nt=Se[Re];M.format!==Ai?Pe!==null?X?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,nt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,Ce,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,Pe,Ce,nt.data)}}}else{if(Se=M.mipmaps,X&&Ue){Se.length>0&&ze++;const ve=We(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ee[ve].width,Ee[ve].height,Pe,Ce,Ee[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Ee[ve].width,Ee[ve].height,0,Pe,Ce,Ee[ve].data);for(let Re=0;Re<Se.length;Re++){const Ot=Se[Re].image[ve].image;X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Ot.width,Ot.height,Pe,Ce,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Ot.width,Ot.height,0,Pe,Ce,Ot.data)}}else{X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe,Ce,Ee[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Pe,Ce,Ee[ve]);for(let Re=0;Re<Se.length;Re++){const nt=Se[Re];X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Pe,Ce,nt.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Pe,Ce,nt.image[ve])}}}S(M)&&x(o.TEXTURE_CUBE_MAP),ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ne(D,M,q,he,xe,ce){const Ze=u.convert(q.format,q.colorSpace),we=u.convert(q.type),je=P(q.internalFormat,Ze,we,q.colorSpace),tt=s.get(M),be=s.get(q);if(be.__renderTarget=M,!tt.__hasExternalTextures){const Ee=Math.max(1,M.width>>ce),Fe=Math.max(1,M.height>>ce);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,je,Ee,Fe,M.depth,0,Ze,we,null):i.texImage2D(xe,ce,je,Ee,Fe,0,Ze,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,xe,be.__webglTexture,0,V(M)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=L(M.stencilBuffer,xe),Ze=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),ce,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const he=M.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ze=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),je=P(ce.internalFormat,Ze,we,ce.colorSpace);Yt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),je,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),je,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,je,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,q){const he=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M.depthTexture);const tt=u.convert(M.depthTexture.format),be=u.convert(M.depthTexture.type);let Ee;M.depthTexture.format===_a?Ee=o.DEPTH_COMPONENT24:M.depthTexture.format===Cs&&(Ee=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,M.width,M.height,0,tt,be,null)}}else fe(M.depthTexture,0);const ce=xe.__webglTexture,Ze=V(M),we=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,je=M.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===_a)Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,we,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,je,we,ce,0);else if(M.depthTexture.format===Cs)Yt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,we,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,je,we,ce,0);else throw new Error("Unknown depthTexture format")}function dt(D){const M=s.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(q){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(D,M,q){const he=s.get(D);M!==void 0&&Ne(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&dt(D)}function gt(D){const M=D.texture,q=s.get(D),he=s.get(M);D.addEventListener("dispose",F);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),ce){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let je=0;je<M.mipmaps.length;je++)q.__webglFramebuffer[we][je]=o.createFramebuffer()}else q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)q.__webglFramebuffer[we]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let we=0,je=xe.length;we<je;we++){const tt=s.get(xe[we]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Yt(D)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const je=xe[we];q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const tt=u.convert(je.format,je.colorSpace),be=u.convert(je.type),Ee=P(je.internalFormat,tt,be,je.colorSpace,D.isXRRenderTarget===!0),Fe=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)Ne(q.__webglFramebuffer[we][je],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else Ne(q.__webglFramebuffer[we],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let we=0,je=xe.length;we<je;we++){const tt=xe[we],be=s.get(tt);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ne(Ee,tt),Ne(q.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+we,Ee,0),S(tt)&&x(Ee)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),ne(we,M),M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)Ne(q.__webglFramebuffer[je],D,M,o.COLOR_ATTACHMENT0,we,je);else Ne(q.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,we,0);S(M)&&x(we),i.unbindTexture()}D.depthBuffer&&dt(D)}function ht(D){const M=D.textures;for(let q=0,he=M.length;q<he;q++){const xe=M[q];if(S(xe)){const ce=z(D),Ze=s.get(xe).__webglTexture;i.bindTexture(ce,Ze),x(ce),i.unbindTexture()}}}const wt=[],rt=[];function Jt(D){if(D.samples>0){if(Yt(D)===!1){const M=D.textures,q=D.width,he=D.height;let xe=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=s.get(D),we=M.length>1;if(we)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const je=D.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=s.get(M[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,q,he,0,0,q,he,xe,o.NEAREST),m===!0&&(wt.length=0,rt.length=0,wt.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(wt.push(ce),rt.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,rt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=s.get(M[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Yt(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function Ut(D,M){const q=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ur&&q!==Ja&&(Et.getTransfer(q)===It?(he!==Ai||xe!==mi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),M}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=ie,this.rebindTextures=Qt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function e2(o,t){function i(s,l=Ja){let u;const d=Et.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===j_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===X_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===V_)return o.BYTE;if(s===k_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Dh)return o.INT;if(s===Hi)return o.UNSIGNED_INT;if(s===zi)return o.FLOAT;if(s===ga)return o.HALF_FLOAT;if(s===q_)return o.ALPHA;if(s===W_)return o.RGB;if(s===Ai)return o.RGBA;if(s===_a)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===Y_)return o.RED;if(s===Oh)return o.RED_INTEGER;if(s===Dr)return o.RG;if(s===Ph)return o.RG_INTEGER;if(s===zh)return o.RGBA_INTEGER;if(s===Uc||s===Lc||s===Oc||s===Pc)if(d===It)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===Yd||s===Zd||s===Kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Qd||s===Jd)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===$d)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===eh)return u.COMPRESSED_R11_EAC;if(s===th)return u.COMPRESSED_SIGNED_R11_EAC;if(s===nh)return u.COMPRESSED_RG11_EAC;if(s===ih)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ah)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ch)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ph)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_h)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vh||s===xh||s===yh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===vh)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===Mh||s===bh||s===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
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

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new cv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Gi({vertexShader:t2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xa(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a2 extends Or{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,y=null,b=null,R=null;const C=typeof XRWebGLBinding<"u",S=new i2,x={},z=i.getContextAttributes();let P=null,L=null;const B=[],H=[],F=new kt;let J=null;const w=new pi;w.viewport=new an;const N=new pi;N.viewport=new an;const j=[w,N],re=new pb;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=B[te];return ue===void 0&&(ue=new Ed,B[te]=ue),ue.getHandSpace()};function fe(te){const ue=H.indexOf(te.inputSource);if(ue===-1)return;const Ne=B[ue];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,p||d),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let te=0;te<B.length;te++){const ue=H[te];ue!==null&&(H[te]=null,B[te].disconnect(ue))}ae=null,pe=null,S.reset();for(const te in x)delete x[te];t.setRenderTarget(P),b=null,y=null,_=null,l=null,L=null,Be.stop(),s.isPresenting=!1,t.setPixelRatio(J),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),z.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,ke=null,He=null;z.depth&&(He=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=z.stencil?Cs:_a,ke=z.stencil?ko:Hi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};_=this.getBinding(),y=_.createProjectionLayer(dt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),L=new Bi(y.textureWidth,y.textureHeight,{format:Ai,type:mi,depthTexture:new Xo(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ne={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Bi(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(te){for(let ue=0;ue<te.removed.length;ue++){const Ne=te.removed[ue],ke=H.indexOf(Ne);ke>=0&&(H[ke]=null,B[ke].disconnect(Ne))}for(let ue=0;ue<te.added.length;ue++){const Ne=te.added[ue];let ke=H.indexOf(Ne);if(ke===-1){for(let dt=0;dt<B.length;dt++)if(dt>=H.length){H.push(Ne),ke=dt;break}else if(H[dt]===null){H[dt]=Ne,ke=dt;break}if(ke===-1)break}const He=B[ke];He&&He.connect(Ne)}}const ie=new se,Me=new se;function ye(te,ue,Ne){ie.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ne.matrixWorld);const ke=ie.distanceTo(Me),He=ue.projectionMatrix.elements,dt=Ne.projectionMatrix.elements,Qt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],wt=(He[9]-1)/He[5],rt=(He[8]-1)/He[0],Jt=(dt[8]+1)/dt[0],V=Qt*rt,Yt=Qt*Jt,St=ke/(-rt+Jt),Ut=St*-rt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ut),te.translateZ(St),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),He[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Qt+St,D=gt+St,M=V-Ut,q=Yt+(ke-Ut),he=ht*gt/D*We,xe=wt*gt/D*We;te.projectionMatrix.makePerspective(M,q,he,xe,We,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,Ne=te.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),re.near=N.near=w.near=ue,re.far=N.far=w.far=Ne,(ae!==re.near||pe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),ae=re.near,pe=re.far),re.layers.mask=te.layers.mask|6,w.layers.mask=re.layers.mask&3,N.layers.mask=re.layers.mask&5;const ke=te.parent,He=re.cameras;U(re,ke);for(let dt=0;dt<He.length;dt++)U(He[dt],ke);He.length===2?ye(re,w,N):re.projectionMatrix.copy(w.projectionMatrix),ne(te,re,ke)};function ne(te,ue,Ne){Ne===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Th*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(re)},this.getCameraTexture=function(te){return x[te]};let _e=null;function Ae(te,ue){if(v=ue.getViewerPose(p||d),R=ue,v!==null){const Ne=v.views;b!==null&&(t.setRenderTargetFramebuffer(L,b.framebuffer),t.setRenderTarget(L));let ke=!1;Ne.length!==re.cameras.length&&(re.cameras.length=0,ke=!0);for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt];let wt=null;if(b!==null)wt=b.getViewport(ht);else{const Jt=_.getViewSubImage(y,ht);wt=Jt.viewport,gt===0&&(t.setRenderTargetTextures(L,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(L))}let rt=j[gt];rt===void 0&&(rt=new pi,rt.layers.enable(gt),rt.viewport=new an,j[gt]=rt),rt.matrix.fromArray(ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(wt.x,wt.y,wt.width,wt.height),gt===0&&(re.matrix.copy(rt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),ke===!0&&re.cameras.push(rt)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const gt=_.getDepthInformation(Ne[0]);gt&&gt.isValid&&gt.texture&&S.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt].camera;if(ht){let wt=x[ht];wt||(wt=new cv,x[ht]=wt);const rt=_.getCameraImage(ht);wt.sourceTexture=rt}}}}for(let Ne=0;Ne<B.length;Ne++){const ke=H[Ne],He=B[Ne];ke!==null&&He!==void 0&&He.update(ke,ue,p||d)}_e&&_e(te,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),R=null}const Be=new fv;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Es=new va,s2=new sn;function r2(o,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,iv(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,z,P,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(S,x):x.isMeshToonMaterial?(u(S,x),_(S,x)):x.isMeshPhongMaterial?(u(S,x),v(S,x)):x.isMeshStandardMaterial?(u(S,x),y(S,x),x.isMeshPhysicalMaterial&&b(S,x,L)):x.isMeshMatcapMaterial?(u(S,x),R(S,x)):x.isMeshDepthMaterial?u(S,x):x.isMeshDistanceMaterial?(u(S,x),C(S,x)):x.isMeshNormalMaterial?u(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,z,P):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Xn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Xn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const z=t.get(x),P=z.envMap,L=z.envMapRotation;P&&(S.envMap.value=P,Es.copy(L),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),S.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Es)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,z,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*z,S.scale.value=P*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function b(S,x,z){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function R(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const z=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function o2(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,P){const L=P.program;s.uniformBlockBinding(z,L)}function p(z,P){let L=l[z.id];L===void 0&&(R(z),L=v(z),l[z.id]=L,z.addEventListener("dispose",S));const B=P.program;s.updateUBOMapping(z,B);const H=t.render.frame;u[z.id]!==H&&(y(z),u[z.id]=H)}function v(z){const P=_();z.__bindingPointIndex=P;const L=o.createBuffer(),B=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function _(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const P=l[z.id],L=z.uniforms,B=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,F=L.length;H<F;H++){const J=Array.isArray(L[H])?L[H]:[L[H]];for(let w=0,N=J.length;w<N;w++){const j=J[w];if(b(j,H,w,B)===!0){const re=j.__offset,ae=Array.isArray(j.value)?j.value:[j.value];let pe=0;for(let fe=0;fe<ae.length;fe++){const O=ae[fe],G=C(O);typeof O=="number"||typeof O=="boolean"?(j.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,re+pe,j.__data)):O.isMatrix3?(j.__data[0]=O.elements[0],j.__data[1]=O.elements[1],j.__data[2]=O.elements[2],j.__data[3]=0,j.__data[4]=O.elements[3],j.__data[5]=O.elements[4],j.__data[6]=O.elements[5],j.__data[7]=0,j.__data[8]=O.elements[6],j.__data[9]=O.elements[7],j.__data[10]=O.elements[8],j.__data[11]=0):(O.toArray(j.__data,pe),pe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(z,P,L,B){const H=z.value,F=P+"_"+L;if(B[F]===void 0)return typeof H=="number"||typeof H=="boolean"?B[F]=H:B[F]=H.clone(),!0;{const J=B[F];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return B[F]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function R(z){const P=z.uniforms;let L=0;const B=16;for(let F=0,J=P.length;F<J;F++){const w=Array.isArray(P[F])?P[F]:[P[F]];for(let N=0,j=w.length;N<j;N++){const re=w[N],ae=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,fe=ae.length;pe<fe;pe++){const O=ae[pe],G=C(O),ie=L%B,Me=ie%G.boundary,ye=ie+Me;L+=Me,ye!==0&&B-ye<G.storage&&(L+=B-ye),re.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=G.storage}}}const H=L%B;return H>0&&(L+=B-H),z.__size=L,z.__cache={},this}function C(z){const P={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(P.boundary=4,P.storage=4):z.isVector2?(P.boundary=8,P.storage=8):z.isVector3||z.isColor?(P.boundary=16,P.storage=12):z.isVector4?(P.boundary=16,P.storage=16):z.isMatrix3?(P.boundary=48,P.storage=48):z.isMatrix4?(P.boundary=64,P.storage=64):z.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",z),P}function S(z){const P=z.target;P.removeEventListener("dispose",S);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const l2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function c2(){return Oi===null&&(Oi=new sb(l2,16,16,Dr,ga),Oi.name="DFG_LUT",Oi.minFilter=On,Oi.magFilter=On,Oi.wrapS=da,Oi.wrapT=da,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class u2{constructor(t={}){const{canvas:i=UM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:b=mi}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const C=b,S=new Set([zh,Ph,Oh]),x=new Set([mi,Hi,Vo,ko,Uh,Lh]),z=new Uint32Array(4),P=new Int32Array(4);let L=null,B=null;const H=[],F=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=hi;let j=0,re=0,ae=null,pe=-1,fe=null;const O=new an,G=new an;let ie=null;const Me=new Bt(0);let ye=0,U=i.width,ne=i.height,_e=1,Ae=null,Be=null;const te=new an(0,0,U,ne),ue=new an(0,0,U,ne);let Ne=!1;const ke=new ov;let He=!1,dt=!1;const Qt=new sn,gt=new se,ht=new an,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Jt(){return ae===null?_e:1}let V=s;function Yt(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",bt,!1),V===null){const W="webgl2";if(V=Yt(W,A),V===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let St,Ut,We,D,M,q,he,xe,ce,Ze,we,je,tt,be,Ee,Fe,Pe,Ce,lt,X,Ue,Te,ze,Se;function ve(){St=new cT(V),St.init(),Te=new e2(V,St),Ut=new eT(V,St,t,Te),We=new JA(V,St),Ut.reversedDepthBuffer&&y&&We.buffers.depth.setReversed(!0),D=new dT(V),M=new FA,q=new $A(V,St,We,M,Ut,Te,D),he=new nT(w),xe=new lT(w),ce=new gb(V),ze=new JE(V,ce),Ze=new uT(V,ce,D,ze),we=new pT(V,Ze,ce,D),lt=new hT(V,Ut,q),Fe=new tT(M),je=new zA(w,he,xe,St,Ut,ze,Fe),tt=new r2(w,M),be=new BA,Ee=new XA(St),Ce=new QE(w,he,xe,We,we,R,m),Pe=new KA(w,we,Ut),Se=new o2(V,D,Ut,We),X=new $E(V,St,D),Ue=new fT(V,St,D),D.programs=je.programs,w.capabilities=Ut,w.extensions=St,w.properties=M,w.renderLists=be,w.shadowMap=Pe,w.state=We,w.info=D}ve(),C!==mi&&(J=new gT(C,i.width,i.height,l,u));const Re=new a2(w,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(U,ne,!1))},this.getSize=function(A){return A.set(U,ne)},this.setSize=function(A,W,oe=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ne=W,i.width=Math.floor(A*_e),i.height=Math.floor(W*_e),oe===!0&&(i.style.width=A+"px",i.style.height=W+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(U*_e,ne*_e).floor()},this.setDrawingBufferSize=function(A,W,oe){U=A,ne=W,_e=oe,i.width=Math.floor(A*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,W,oe,$){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,W,oe,$),We.viewport(O.copy(te).multiplyScalar(_e).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,W,oe,$){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,W,oe,$),We.scissor(G.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){We.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,oe=!0){let $=0;if(A){let Z=!1;if(ae!==null){const De=ae.texture.format;Z=S.has(De)}if(Z){const De=ae.texture.type,Ie=x.has(De),Le=Ce.getClearColor(),Ge=Ce.getClearAlpha(),Xe=Le.r,Je=Le.g,qe=Le.b;Ie?(z[0]=Xe,z[1]=Je,z[2]=qe,z[3]=Ge,V.clearBufferuiv(V.COLOR,0,z)):(P[0]=Xe,P[1]=Je,P[2]=qe,P[3]=Ge,V.clearBufferiv(V.COLOR,0,P))}else $|=V.COLOR_BUFFER_BIT}W&&($|=V.DEPTH_BUFFER_BIT),oe&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Ce.dispose(),be.dispose(),Ee.dispose(),M.dispose(),he.dispose(),xe.dispose(),we.dispose(),ze.dispose(),Se.dispose(),je.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Us),Re.removeEventListener("sessionend",Ir),Ci.stop()};function nt(A){A.preventDefault(),Bg("WebGLRenderer: Context Lost."),N=!0}function Ot(){Bg("WebGLRenderer: Context Restored."),N=!1;const A=D.autoReset,W=Pe.enabled,oe=Pe.autoUpdate,$=Pe.needsUpdate,Z=Pe.type;ve(),D.autoReset=A,Pe.enabled=W,Pe.autoUpdate=oe,Pe.needsUpdate=$,Pe.type=Z}function bt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const W=A.target;W.removeEventListener("dispose",Nn),gi(W)}function gi(A){Qo(A),M.remove(A)}function Qo(A){const W=M.get(A).programs;W!==void 0&&(W.forEach(function(oe){je.releaseProgram(oe)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,oe,$,Z,De){W===null&&(W=wt);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=ts(A,W,oe,$,Z);We.setMaterial($,Ie);let Ge=oe.index,Xe=1;if($.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;Xe=2}const Je=oe.drawRange,qe=oe.attributes.position;let $e=Je.start*Xe,Ct=(Je.start+Je.count)*Xe;De!==null&&($e=Math.max($e,De.start*Xe),Ct=Math.min(Ct,(De.start+De.count)*Xe)),Ge!==null?($e=Math.max($e,0),Ct=Math.min(Ct,Ge.count)):qe!=null&&($e=Math.max($e,0),Ct=Math.min(Ct,qe.count));const Zt=Ct-$e;if(Zt<0||Zt===1/0)return;ze.setup(Z,$,Le,oe,Ge);let Xt,Lt=X;if(Ge!==null&&(Xt=ce.get(Ge),Lt=Ue,Lt.setIndex(Xt)),Z.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*Jt()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(Z.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Jt()),Z.isLineSegments?Lt.setMode(V.LINES):Z.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else Z.isPoints?Lt.setMode(V.POINTS):Z.isSprite&&Lt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Nt=Z._multiDrawCounts,it=Z._multiDrawCount,yn=Ge?ce.get(Ge).bytesPerElement:1,Vi=M.get($).currentProgram.getUniforms();for(let Sn=0;Sn<it;Sn++)Vi.setValue(V,"_gl_DrawID",Sn),Lt.render(Ke[Sn]/yn,Nt[Sn])}else if(Z.isInstancedMesh)Lt.renderInstances($e,Zt,Z.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Nt=Math.min(oe.instanceCount,Ke);Lt.renderInstances($e,Zt,Nt)}else Lt.render($e,Zt)};function zr(A,W,oe){A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Os(A,W,oe),A.side=es,A.needsUpdate=!0,Os(A,W,oe),A.side=fa):Os(A,W,oe)}this.compile=function(A,W,oe=null){oe===null&&(oe=A),B=Ee.get(oe),B.init(W),F.push(B),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),A!==oe&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),B.setupLights();const $=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const De=Z.material;if(De)if(Array.isArray(De))for(let Ie=0;Ie<De.length;Ie++){const Le=De[Ie];zr(Le,oe,Z),$.add(Le)}else zr(De,oe,Z),$.add(De)}),B=F.pop(),$},this.compileAsync=function(A,W,oe=null){const $=this.compile(A,W,oe);return new Promise(Z=>{function De(){if($.forEach(function(Ie){M.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){Z(A);return}setTimeout(De,10)}St.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ds=null;function Fr(A){Ds&&Ds(A)}function Us(){Ci.stop()}function Ir(){Ci.start()}const Ci=new fv;Ci.setAnimationLoop(Fr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Ds=A,Re.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Re.addEventListener("sessionstart",Us),Re.addEventListener("sessionend",Ir),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,$=J!==null&&(ae===null||oe)&&J.begin(w,ae);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,ae),B=Ee.get(A,F.length),B.init(W),F.push(B),Qt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(Qt,Fi,W.reversedDepth),dt=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,dt),L=be.get(A,H.length),L.init(),H.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Ie=w.xr.getDepthSensingMesh();Ie!==null&&ni(Ie,W,-1/0,w.sortObjects)}ni(A,W,0,w.sortObjects),L.finish(),w.sortObjects===!0&&L.sort(Ae,Be),rt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,rt&&Ce.addToRenderList(L,A),this.info.render.frame++,He===!0&&Fe.beginShadows();const Z=B.state.shadowsArray;if(Pe.render(Z,A,W),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&J.hasRenderPass())===!1){const Ie=L.opaque,Le=L.transmissive;if(B.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Le.length>0)for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe];xn(Ie,Le,A,qe)}rt&&Ce.render(A);for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe];rn(L,A,qe,qe.viewport)}}else Le.length>0&&xn(Ie,Le,A,W),rt&&Ce.render(A),rn(L,A,W)}ae!==null&&re===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),$&&J.end(w),A.isScene===!0&&A.onAfterRender(w,A,W),ze.resetDefaultState(),pe=-1,fe=null,F.pop(),F.length>0?(B=F[F.length-1],He===!0&&Fe.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function ni(A,W,oe,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){$&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qt);const Ie=we.update(A),Le=A.material;Le.visible&&L.push(A,Ie,Le,oe,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Ie=we.update(A),Le=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ht.copy(Ie.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Qt)),Array.isArray(Le)){const Ge=Ie.groups;for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe],$e=Le[qe.materialIndex];$e&&$e.visible&&L.push(A,Ie,$e,oe,ht.z,qe)}}else Le.visible&&L.push(A,Ie,Le,oe,ht.z,null)}}const De=A.children;for(let Ie=0,Le=De.length;Ie<Le;Ie++)ni(De[Ie],W,oe,$)}function rn(A,W,oe,$){const{opaque:Z,transmissive:De,transparent:Ie}=A;B.setupLightsView(oe),He===!0&&Fe.setGlobalState(w.clippingPlanes,oe),$&&We.viewport(O.copy($)),Z.length>0&&_i(Z,W,oe),De.length>0&&_i(De,W,oe),Ie.length>0&&_i(Ie,W,oe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function xn(A,W,oe,$){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[$.id]===void 0){const $e=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[$.id]=new Bi(1,1,{generateMipmaps:!0,type:$e?ga:mi,minFilter:ws,samples:Ut.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const De=B.state.transmissionRenderTarget[$.id],Ie=$.viewport||O;De.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const Le=w.getRenderTarget(),Ge=w.getActiveCubeFace(),Xe=w.getActiveMipmapLevel();w.setRenderTarget(De),w.getClearColor(Me),ye=w.getClearAlpha(),ye<1&&w.setClearColor(16777215,.5),w.clear(),rt&&Ce.render(oe);const Je=w.toneMapping;w.toneMapping=Ii;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),B.setupLightsView($),He===!0&&Fe.setGlobalState(w.clippingPlanes,$),_i(A,oe,$),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),St.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ct=0,Zt=W.length;Ct<Zt;Ct++){const Xt=W[Ct],{object:Lt,geometry:Ke,material:Nt,group:it}=Xt;if(Nt.side===fa&&Lt.layers.test($.layers)){const yn=Nt.side;Nt.side=Xn,Nt.needsUpdate=!0,Ls(Lt,oe,$,Ke,Nt,it),Nt.side=yn,Nt.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}w.setRenderTarget(Le,Ge,Xe),w.setClearColor(Me,ye),qe!==void 0&&($.viewport=qe),w.toneMapping=Je}function _i(A,W,oe){const $=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,De=A.length;Z<De;Z++){const Ie=A[Z],{object:Le,geometry:Ge,group:Xe}=Ie;let Je=Ie.material;Je.allowOverride===!0&&$!==null&&(Je=$),Le.layers.test(oe.layers)&&Ls(Le,W,oe,Ge,Je,Xe)}}function Ls(A,W,oe,$,Z,De){A.onBeforeRender(w,W,oe,$,Z,De),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(w,W,oe,$,A,De),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,w.renderBufferDirect(oe,W,$,Z,A,De),Z.side=es,Z.needsUpdate=!0,w.renderBufferDirect(oe,W,$,Z,A,De),Z.side=fa):w.renderBufferDirect(oe,W,$,Z,A,De),A.onAfterRender(w,W,oe,$,Z,De)}function Os(A,W,oe){W.isScene!==!0&&(W=wt);const $=M.get(A),Z=B.state.lights,De=B.state.shadowsArray,Ie=Z.state.version,Le=je.getParameters(A,Z.state,De,W,oe),Ge=je.getProgramCacheKey(Le);let Xe=$.programs;$.environment=A.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(A.isMeshStandardMaterial?xe:he).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Nn),Xe=new Map,$.programs=Xe);let Je=Xe.get(Ge);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ie)return Br(A,Le),Je}else Le.uniforms=je.getUniforms(A),A.onBeforeCompile(Le,w),Je=je.acquireProgram(Le,Ge),Xe.set(Ge,Je),$.uniforms=Le.uniforms;const qe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),Br(A,Le),$.needsLights=ya(A),$.lightsStateVersion=Ie,$.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Jo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=zc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Br(A,W){const oe=M.get(A);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ts(A,W,oe,$,Z){W.isScene!==!0&&(W=wt),q.resetTextureUnits();const De=W.fog,Ie=$.isMeshStandardMaterial?W.environment:null,Le=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ur,Ge=($.isMeshStandardMaterial?xe:he).get($.envMap||Ie),Xe=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,Ct=!!oe.morphAttributes.color;let Zt=Ii;$.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Zt=w.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Lt=Xt!==void 0?Xt.length:0,Ke=M.get($),Nt=B.state.lights;if(He===!0&&(dt===!0||A!==fe)){const bn=A===fe&&$.id===pe;Fe.setState($,A,bn)}let it=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Nt.state.version||Ke.outputColorSpace!==Le||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ge||$.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==Xe||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==Ct||Ke.toneMapping!==Zt||Ke.morphTargetsCount!==Lt)&&(it=!0):(it=!0,Ke.__version=$.version);let yn=Ke.currentProgram;it===!0&&(yn=Os($,W,Z));let Vi=!1,Sn=!1,ii=!1;const Pt=yn.getUniforms(),Mn=Ke.uniforms;if(We.useProgram(yn.program)&&(Vi=!0,Sn=!0,ii=!0),$.id!==pe&&(pe=$.id,Sn=!0),Vi||fe!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",A.projectionMatrix),Pt.setValue(V,"viewMatrix",A.matrixWorldInverse);const En=Pt.map.cameraPosition;En!==void 0&&En.setValue(V,gt.setFromMatrixPosition(A.matrixWorld)),Ut.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,Sn=!0,ii=!0)}if(Ke.needsLights&&(Nt.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",Nt.state.directionalShadowMap,q),Nt.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",Nt.state.spotShadowMap,q),Nt.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",Nt.state.pointShadowMap,q)),Z.isSkinnedMesh){Pt.setOptional(V,Z,"bindMatrix"),Pt.setOptional(V,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Pt.setValue(V,"boneTexture",bn.boneTexture,q))}Z.isBatchedMesh&&(Pt.setOptional(V,Z,"batchingTexture"),Pt.setValue(V,"batchingTexture",Z._matricesTexture,q),Pt.setOptional(V,Z,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",Z._indirectTexture,q),Pt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",Z._colorsTexture,q));const dn=oe.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&lt.update(Z,oe,yn),(Sn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Pt.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Mn.envMap.value=Ge,Mn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=c2()),Sn&&(Pt.setValue(V,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&Hr(Mn,ii),De&&$.fog===!0&&tt.refreshFogUniforms(Mn,De),tt.refreshMaterialUniforms(Mn,$,_e,ne,B.state.transmissionRenderTarget[A.id]),zc.upload(V,Jo(Ke),Mn,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zc.upload(V,Jo(Ke),Mn,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(V,"center",Z.center),Pt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(V,"normalMatrix",Z.normalMatrix),Pt.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let En=0,Ps=bn.length;En<Ps;En++){const vi=bn[En];Se.update(vi,yn),Se.bind(vi,yn)}}return yn}function Hr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ya(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(A,W,oe){const $=M.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=W,M.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:oe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const oe=M.get(A);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const Sa=V.createFramebuffer();this.setRenderTarget=function(A,W=0,oe=0){ae=A,j=W,re=oe;let $=null,Z=!1,De=!1;if(A){const Le=M.get(A);if(Le.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(A.viewport),G.copy(A.scissor),ie=A.scissorTest,We.viewport(O),We.scissor(G),We.setScissorTest(ie),pe=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Le.__hasExternalTextures)q.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const Xe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?$=Xe[W][oe]:$=Xe[W],Z=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?$=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[oe]:$=Xe,O.copy(A.viewport),G.copy(A.scissor),ie=A.scissorTest}else O.copy(te).multiplyScalar(_e).floor(),G.copy(ue).multiplyScalar(_e).floor(),ie=Ne;if(oe!==0&&($=Sa),We.bindFramebuffer(V.FRAMEBUFFER,$)&&We.drawBuffers(A,$),We.viewport(O),We.scissor(G),We.setScissorTest(ie),Z){const Le=M.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,oe)}else if(De){const Le=W;for(let Ge=0;Ge<A.textures.length;Ge++){const Xe=M.get(A.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,oe,Le)}}else if(A!==null&&oe!==0){const Le=M.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,W,oe,$,Z,De,Ie,Le=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){We.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const Xe=A.textures[Le],Je=Xe.format,qe=Xe.type;if(!Ut.textureFormatReadable(Je)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&oe>=0&&oe<=A.height-Z&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,Z,Te.convert(Je),Te.convert(qe),De))}finally{const Xe=ae!==null?M.get(ae).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,W,oe,$,Z,De,Ie,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(W>=0&&W<=A.width-$&&oe>=0&&oe<=A.height-Z){We.bindFramebuffer(V.FRAMEBUFFER,Ge);const Xe=A.textures[Le],Je=Xe.format,qe=Xe.type;if(!Ut.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,Z,Te.convert(Je),Te.convert(qe),0);const Ct=ae!==null?M.get(ae).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Ct);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await LM(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer($e),V.deleteSync(Zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,oe=0){const $=Math.pow(2,-oe),Z=Math.floor(A.image.width*$),De=Math.floor(A.image.height*$),Ie=W!==null?W.x:0,Le=W!==null?W.y:0;q.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Ie,Le,Z,De),We.unbindTexture()};const ns=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(A,W,oe=null,$=null,Z=0,De=null){De===null&&(Z!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Z,Z=0):De=0);let Ie,Le,Ge,Xe,Je,qe,$e,Ct,Zt;const Xt=A.isCompressedTexture?A.mipmaps[De]:A.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,Je=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const dn=Math.pow(2,-Z);Ie=Math.floor(Xt.width*dn),Le=Math.floor(Xt.height*dn),A.isDataArrayTexture?Ge=Xt.depth:A.isData3DTexture?Ge=Math.floor(Xt.depth*dn):Ge=1,Xe=0,Je=0,qe=0}$!==null?($e=$.x,Ct=$.y,Zt=$.z):($e=0,Ct=0,Zt=0);const Lt=Te.convert(W.format),Ke=Te.convert(W.type);let Nt;W.isData3DTexture?(q.setTexture3D(W,0),Nt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),Nt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),Nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const it=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Vi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const Pt=A.isDataArrayTexture||A.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const dn=M.get(A),bn=M.get(W),En=M.get(dn.__renderTarget),Ps=M.get(bn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let vi=0;vi<Ge;vi++)Pt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Z,qe+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(W).__webglTexture,De,Zt+vi)),V.blitFramebuffer(Xe,Je,Ie,Le,$e,Ct,Ie,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||M.has(A)){const dn=M.get(A),bn=M.get(W);We.bindFramebuffer(V.READ_FRAMEBUFFER,ns),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Ge;En++)Pt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Z,qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Z),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,De,Zt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,De),Z!==0?V.blitFramebuffer(Xe,Je,Ie,Le,$e,Ct,Ie,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Nt,De,$e,Ct,Zt+En,Xe,Je,Ie,Le):V.copyTexSubImage2D(Nt,De,$e,Ct,Xe,Je,Ie,Le);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Nt,De,$e,Ct,Zt,Ie,Le,Ge,Lt,Ke,Xt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Nt,De,$e,Ct,Zt,Ie,Le,Ge,Lt,Xt.data):V.texSubImage3D(Nt,De,$e,Ct,Zt,Ie,Le,Ge,Lt,Ke,Xt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,$e,Ct,Ie,Le,Lt,Ke,Xt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,$e,Ct,Xt.width,Xt.height,Lt,Xt.data):V.texSubImage2D(V.TEXTURE_2D,De,$e,Ct,Ie,Le,Lt,Ke,Xt);V.pixelStorei(V.UNPACK_ROW_LENGTH,it),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Vi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),De===0&&W.generateMipmaps&&V.generateMipmap(Nt),We.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){j=0,re=0,ae=null,We.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(t),i.unpackColorSpace=Et._getUnpackColorSpace()}}const f2=()=>{const o=pn.useRef(null);return pn.useEffect(()=>{let t,i,s,l,u=[];try{let d=function(y,b,R,C){const S=new wi,x=new Float32Array(y*3);for(let L=0;L<y*3;L++)x[L]=(Math.random()-.5)*200;S.setAttribute("position",new Ri(x,3));const z=new lv({size:R,color:b,blending:Ld,transparent:!0,opacity:.7}),P=new cb(S,z);return P.userData={speed:C},i.add(P),P};if(i=new ab,s=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),t=new u2({alpha:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.domElement.id="bg-canvas",t.domElement.style.position="fixed",t.domElement.style.top="0",t.domElement.style.left="0",t.domElement.style.zIndex="-1",o.current){for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);o.current.appendChild(t.domElement)}s.position.setZ(50);const h=d(1e4,3718648,.2,2e-4),m=d(5e3,10980346,.3,4e-4),p=d(2e3,16020150,.4,6e-4);u.push(h,m,p);const v=()=>{l=requestAnimationFrame(v),u.forEach(y=>{y.rotation.x+=y.userData.speed,y.rotation.y+=y.userData.speed}),t.render(i,s)};v();const _=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(l),u.forEach(y=>{y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),t&&(t.dispose(),o.current&&o.current.contains(t.domElement)&&o.current.removeChild(t.domElement))}}catch(d){console.error("Three.js initialization failed:",d)}},[]),E.jsx("div",{ref:o,className:"fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"})},d2=()=>{const o=pn.useRef(null),t=pn.useRef(null);return pn.useEffect(()=>{const i=o.current,s=t.current;let l=0,u=0,d=0,h=0;const m=y=>{l=y.clientX,u=y.clientY};window.addEventListener("mousemove",m);const p=()=>{!i||!s||(i.style.left=`${l}px`,i.style.top=`${u}px`,i.style.transform="translate(-50%, -50%)",d+=(l-d)*.1,h+=(u-h)*.1,s.style.left=`${d}px`,s.style.top=`${h}px`,s.style.transform="translate(-50%, -50%)",requestAnimationFrame(p))},v=requestAnimationFrame(p),_=y=>{y.target.closest("a, button, input, textarea, .interactive-element")?s?.classList.add("hover"):s?.classList.remove("hover")};return document.addEventListener("mouseover",_),()=>{window.removeEventListener("mousemove",m),document.removeEventListener("mouseover",_),cancelAnimationFrame(v)}},[]),E.jsxs(E.Fragment,{children:[E.jsx("div",{id:"cursor-dot",ref:o,className:"fixed top-0 left-0 w-2 h-2 bg-sky-400 rounded-full z-[9999] pointer-events-none"}),E.jsx("div",{id:"cursor-outline",ref:t,className:"fixed top-0 left-0 w-40 h-40 border-2 border-primary-glow rounded-full z-[9999] pointer-events-none transition-all duration-300"})]})};function h2(){const[o,t]=pn.useState(!1);return pn.useEffect(()=>{const i=document.querySelectorAll(".reveal"),s=()=>{const l=window.innerHeight;i.forEach(u=>{u.getBoundingClientRect().top<l-100&&u.classList.add("visible")})};return s(),window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),E.jsxs("div",{className:"antialiased text-slate-200",children:[E.jsx(f2,{}),E.jsx(d2,{}),E.jsx(HS,{isMenuOpen:o,setIsMenuOpen:t}),E.jsxs("div",{className:`transition-transform duration-300 ease-out ${o?"translate-x-64":""}`,children:[E.jsxs("main",{className:"relative z-10",children:[E.jsx(VS,{}),E.jsx(jS,{}),E.jsx(XS,{}),E.jsx(YS,{}),E.jsx(WS,{}),E.jsx(KS,{}),E.jsx(QS,{})]}),E.jsx(JS,{})]})]})}Cy.createRoot(document.getElementById("root")).render(E.jsx(pn.StrictMode,{children:E.jsx(h2,{})}));
