var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],A=-1;function ue(e){return{current:e}}function j(e){0>A||(e.current=le[A],le[A]=null,A--)}function M(e,t){A++,le[A]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function N(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function he(){j(de),j(fe),j(pe)}function P(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ge(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),Qf._currentValue=ce)}var _e,ve;function ye(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function F(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,I=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,L=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ae=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function R(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function ht(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[st])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[mt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return Ce.call(Et,e)?!0:Ce.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),jn=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(h({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(h({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(h({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,z=!1;function Zn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var $n=!1;function er(e,t){switch(e){case`compositionend`:return Qn(t);case`keypress`:return t.which===32?(z=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&z?null:e;default:return null}}function B(e,t){if($n)return e===`compositionend`||!Kn&&Zn(e,t)?(e=hn(),mn=pn=fn=null,$n=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){yd(e,0)}function sr(e){if(Ft(_t(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(ln){var ur;if(ln){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,tn(e)),sn(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var br=typeof Object.is==`function`?Object.is:yr;function xr(e,t){if(br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!br(e[i],t[i]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n=Sr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Sr(n)}}function wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=ln&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==It(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&xr(Ar,r)||(Ar=r,r=Ed(kr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};ln&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function Lr(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var Rr=Lr(`animationend`),zr=Lr(`animationiteration`),Br=Lr(`animationstart`),Vr=Lr(`transitionrun`),Hr=Lr(`transitionstart`),Ur=Lr(`transitioncancel`),Wr=Lr(`transitionend`),Gr=new Map,Kr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Kr.push(`scrollEnd`);function qr(e,t){Gr.set(e,t),St(t,[e])}var Jr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Yr=[],Xr=0,Zr=0;function Qr(){for(var e=Xr,t=Zr=Xr=0;t<e;){var n=Yr[t];Yr[t++]=null;var r=Yr[t];Yr[t++]=null;var i=Yr[t];Yr[t++]=null;var a=Yr[t];if(Yr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ni(n,i,a)}}function $r(e,t,n,r){Yr[Xr++]=e,Yr[Xr++]=t,Yr[Xr++]=n,Yr[Xr++]=r,Zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ei(e,t,n,r){return $r(e,t,n,r),ri(e)}function ti(e,t){return $r(e,null,null,t),ri(e)}function ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ri(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ci(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function li(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)si(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=oi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return di(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=oi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=oi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=oi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=oi(7,e,r,t),e.lanes=n,e}function fi(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function pi(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function mi(e,t,n){return t=oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=new WeakMap;function gi(e,t){if(typeof e==`object`&&e){var n=hi.get(e);return n===void 0?(t={value:e,source:t,stack:F(t)},hi.set(e,t),t):n}return{value:e,source:t,stack:F(t)}}var _i=[],vi=0,yi=null,bi=0,xi=[],Si=0,Ci=null,wi=1,Ti=``;function Ei(e,t){_i[vi++]=bi,_i[vi++]=yi,yi=e,bi=t}function Di(e,t,n){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Re(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===yi;)yi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null;for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,Ti=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null}function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var ji=null,V=null,H=!1,Mi=null,Ni=!1,Pi=Error(i(519));function Fi(e){throw Vi(gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Pi}function Ii(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Fi(e,!0)}function Li(e){for(ji=e.return;ji;)switch(ji.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:ji=ji.return}}function Ri(e){if(e!==ji)return!1;if(!H)return Li(e),H=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&V&&Fi(e),Li(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));V=uf(e)}else t===27?(t=V,Zd(e.type)?(e=lf,lf=null,V=e):V=t):V=ji?cf(e.stateNode.nextSibling):null;return!0}function zi(){V=ji=null,H=!1}function Bi(){var e=Mi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Mi=null),e}function Vi(e){Mi===null?Mi=[e]:Mi.push(e)}var Hi=ue(null),Ui=null,Wi=null;function Gi(e,t,n){M(Hi,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=Hi.current,j(Hi)}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ji(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Yi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ji(t,e,n,r),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Ui=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qi(e){return ea(Ui,e)}function $i(e,t){return Ui===null&&Zi(e),ea(e,t)}function ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wi===null){if(e===null)throw Error(i(308));Wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wi=Wi.next=t;return n}var ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},na=t.unstable_scheduleCallback,ra=t.unstable_NormalPriority,ia={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function aa(){return{controller:new ta,data:new Map,refCount:0}}function oa(e){e.refCount--,e.refCount===0&&na(ra,function(){e.controller.abort()})}var sa=null,ca=0,la=0,ua=null;function da(e,t){if(sa===null){var n=sa=[];ca=0,la=dd(),ua={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ca++,t.then(fa,fa),t}function fa(){if(--ca===0&&sa!==null){ua!==null&&(ua.status=`fulfilled`);var e=sa;sa=null,la=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ma=O.S;O.S=function(e,t){eu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&da(e,t),ma!==null&&ma(e,t)};var ha=ue(null);function ga(){var e=ha.current;return e===null?q.pooledCache:e}function _a(e,t){t===null?M(ha,ha.current):M(ha,t.pool)}function va(){var e=ga();return e===null?null:{parent:ia._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function Da(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Oa(e){if(e===ya||e===xa)throw Error(i(483))}var ka=null,Aa=0;function ja(e){var t=Aa;return Aa+=1,ka===null&&(ka=[]),wa(ka,e,t)}function Ma(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Na(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ta(i)===t.type)?(t=a(t,n.props),Ma(t,n),t.return=e,t):(t=ui(n.type,n.key,n.props,null,e.mode,r),Ma(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ui(t.type,t.key,t.props,null,e.mode,n),Ma(n,t),n.return=e,n;case v:return t=mi(t,e.mode,n),t.return=e,t;case E:return t=Ta(t),f(e,t,n)}if(se(t)||ae(t))return t=di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ja(t),n);if(t.$$typeof===C)return f(e,$i(e,t),n);Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Ta(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ja(n),r);if(n.$$typeof===C)return p(e,t,$i(e,n),r);Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ta(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ja(r),i);if(r.$$typeof===C)return m(e,t,n,$i(t,r),i);Na(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),H&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return H&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),H&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),H&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return H&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),H&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ma(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=di(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ui(o.type,o.key,o.props,null,e.mode,c),Ma(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=mi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ta(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ja(o),c);if(o.$$typeof===C)return b(e,r,$i(e,o),c);Na(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Aa=0;var i=b(e,t,n,r);return ka=null,i}catch(t){if(t===ya||t===xa)throw t;var a=oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ri(e),ni(e,null,n),t}return $r(e,r,t,n),ri(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=ua;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===la&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=ue(null),Xa=ue(0);function Za(e,t){e=Ul,M(Xa,e),M(Ya,t),Ul=e|t.baseLanes}function Qa(){M(Xa,Ul),M(Ya,Ya.current)}function $a(){Ul=Xa.current,j(Ya),j(Xa)}var eo=ue(null),to=null;function no(e){var t=e.alternate;M(so,so.current&1),M(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){M(so,so.current),M(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(M(so,so.current),M(eo,e),to===null&&(to=e)):ao(e)}function ao(){M(so,so.current),M(eo,eo.current)}function oo(e){j(eo),to===e&&(to=null),j(so)}var so=ue(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){O.H=Ls;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Xi(e)&&(nc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=wa(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return Qi(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),W,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===la&&(d=!0);else if((lo&p)===p){u=u.next,p===la&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!br(o,e.memoizedState)&&(nc=!0,d&&(n=ua,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);br(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=U,a=ko(),o=H;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!br((W||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||lo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Ao(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch{return!0}}function Uo(e){var t=ti(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,W,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(H){var n=q.formState;if(n!==null){a:{var r=U;if(H){if(V){b:{for(var i=V,a=Ni;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){V=cf(i.nextSibling),r=i.data===`F!`;break a}}Fi(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,U,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),W,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===ya?xa:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=W;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Ao(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(U.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Ao(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||lo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return br(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=ys(e,n,r),br(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ns(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,pa(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,ce,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return Qi(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ba(n);var r=Va(t,e,n);r!==null&&(hu(r,t,n),Ha(r,t,n)),t={cache:aa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ei(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,br(s,o))return $r(e,t,i,0),q===null&&Qr(),!1}catch{}if(n=ei(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ei(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===U||t!==null&&t===U}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Ls={readContext:Qi,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:Qi,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:Qi,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(H){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=q.identifierPrefix;if(H){var n=Ti,r=wi;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:Qi,use:Mo,useCallback:_s,useContext:Qi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),W.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),W,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:Qi,use:Mo,useCallback:_s,useContext:Qi,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return W===null?ys(n,e,t):bs(n,W.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,W,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(hu(t,e,n),Ha(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Jr(e)}function qs(e){console.error(e)}function Js(e){Jr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ba(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Yi(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(H)return t=eo.current,t===null?(r!==Pi&&(t=Error(i(423),{cause:r}),Vi(gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=gi(r,n),a=Zs(e.stateNode,r,a),Ua(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Pi&&(e=Error(i(422),{cause:r}),Vi(gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=gi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(H&&s&&Oi(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?xr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_a(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&_a(t,null),Qa(),ao(t)):(_a(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=ga();return a=a===null?null:{parent:ia._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_a(t,null),Qa(),io(t),e!==null&&Yi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Fa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(H){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(ro(t),(e=V)?(e=rf(e,Ni),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Fi(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Yi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ti(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,V=cf(s.nextSibling),ji=t,H=!0,Mi=null,Ni=!1,e!==null&&Ai(t,e),t=uc(t,r),t.flags|=4096;return t}return e=ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Zi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(H&&r&&Oi(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(H&&r&&Oi(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=ii,o=n.contextType;typeof o==`object`&&o&&(a=Qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?Qi(o):ii,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ii,typeof u==`object`&&u&&(o=Qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=La||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ii,typeof l==`object`&&l&&(c=Qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=La||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return zi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:va()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(so.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(H){if(a?no(t):ao(t),(e=V)?(e=rf(e,Ni),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,ji=t,V=null)):e=null,e===null)throw Fi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=di(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(no(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=di(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Vi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Yi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ti(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,V=cf(c.nextSibling),ji=t,H=!0,Mi=null,Ni=!1,e!==null&&Ai(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=di(c,a,n,null),c.flags|=2):c=ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=va():(l=ia._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Fa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(so,o),rc(e,t,r,n),r=H?bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Xi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:N(t,t.stateNode.containerInfo),Gi(t,ia,e.memoizedState.cache),zi();break;case 27:case 5:P(t);break;case 4:N(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Yi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(so,so.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Gi(t,ia,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,H&&t.flags&1048576&&Di(t,bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)si(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(N(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Gi(t,ia,r),r!==o.cache&&Ji(t,[ia],n,!0),Ga(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=gi(Error(i(424)),t),Vi(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(V=cf(e.firstChild),ji=t,H=!0,Mi=null,Ni=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:H||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[st]=t,r[ct]=e,Pd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return P(t),e===null&&H&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),ji=t,Ni=!0,a=V,Zd(t.type)?(lf=a,V=cf(r.firstChild)):V=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&H&&((a=r=V)&&(r=tf(r,t.type,t.pendingProps,Ni),r===null?a=!1:(t.stateNode=r,ji=t,V=cf(r.firstChild),Ni=!1,a=!0)),a||Fi(t)),P(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&H&&((e=n=V)&&(n=nf(n,t.pendingProps,Ni),n===null?e=!1:(t.stateNode=n,ji=t,V=null,e=!0)),e||Fi(t)),null;case 13:return xc(e,t,n);case 4:return N(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Gi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=Qi(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Zi(t),r=Qi(ia),e===null?(a=ga(),a===null&&(a=q,o=aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),Gi(t,ia,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Gi(t,ia,r),r!==a.cache&&Ji(t,[ia],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gi(t,ia,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ea=Sa,ba}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ea=Sa,ba}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!H)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ki(ia),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(ge(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=de.current,Ri(t)?Ii(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=de.current,Ri(t))Ii(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Ri(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Fi(t,!0)}else e=Bd(e).createTextNode(r),e[st]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ri(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return Ki(t.type),G(t),null;case 19:if(j(so),r=t.memoizedState,r===null)return G(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)li(n,e),n=n.sibling;return M(so,so.current&1|2),H&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!H)return G(t),null}else 2*De()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=so.current,M(so,a?n&1|2:n&1),H&&Ei(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ia),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ia),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(so),null;case 4:return he(),null;case 10:return Ki(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&j(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ia),null;case 25:return null;default:return null}}function zc(e,t){switch(ki(t),t.tag){case 3:Ki(ia),he();break;case 26:case 27:case 5:ge(t);break;case 4:he();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:j(so);break;case 10:Ki(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&j(ha);break;case 24:Ki(ia)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[st]=e,t[ct]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&R(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[st]=e,yt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,yt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Qi(ia),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qi(ia).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?it():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||H){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Jl=e}else Jl=536870912;return e=eo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-De(),10<a)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},jl(t,a,d);var m=(a&62914560)===a?$l-De():(a&4194048)===a?eu-De():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Wi=Ui=null,Do(e),ka=null,Aa=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=ci(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Qr(),n}function Cu(e,t){U=null,O.H=Ls,t===ya||t===xa?(t=Da(),X=3):t===ba?(t=Da(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,gi(t,e.current)))}function wu(){var e=eo.current;return e===null?!0:(Y&4194048)===Y?to===null:(Y&62914560)===Y||Y&536870912?e===to:!1}function Tu(){var e=O.H;return O.H=Ls,e===null?Ls:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&eo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Wi=Ui=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,Qr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=De()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ca(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ca(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Wi=Ui=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,Qr(),Wl):0}function ju(){for(;J!==null&&!I();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Do(t);default:zc(n,t),t=J=li(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Wi=Ui=null,Do(t),ka=null,Aa=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,gi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,gi(n,e.current)),J=null;return}t.flags&32768?(H||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Zr,Qe(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ae,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Cr(s,h),v=Cr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=gi(n,t),t=Zs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=gi(n,e),n=Qs(2),r=Va(t,n,2),r!==null&&($s(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>De()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=ti(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),rt(n)){case 2:case 8:n=ke;break;case 32:n=Ae;break;case 268435456:n=Me;break;default:n=Ae}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?we(L,ad):od()})}function dd(){if(nd===0){var e=la;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Kr.length;hd++){var gd=Kr[hd];qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}qr(Rr,`onAnimationEnd`),qr(zr,`onAnimationIteration`),qr(Br,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Vr,`onTransitionRun`),qr(Hr,`onTransitionStart`),qr(Ur,`onTransitionCancel`),qr(Wr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=Gr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Rr:case zr:case Br:l=jn;break;case Wr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c))if(lr)v=vr;else{v=gr;var y=hr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else $n?Zn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&($n||x!==`onCompositionStart`?x===`onCompositionEnd`&&$n&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,$n=!0)),y=Ed(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Qn(n),b!==null&&(x.data=b)))),(b=Jn?er(e,n):B(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),R(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);R(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=vt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);yt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),yt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,yt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=oi(3,null,null,t),e.current=a,a.stateNode=e,t=aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=ii,e):ii}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(hu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=ti(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=De()+500,id(0,!1))}}break;case 31:case 13:s=ti(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case L:return 2;case ke:return 8;case Ae:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Fe=zp.inject(Rp),Ie=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=m();function b(){var e=[...arguments];return(0,_.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var x=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function S(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function C(e){return`nodeType`in e}function w(e){return e?S(e)?e:C(e)?e.ownerDocument?.defaultView??window:window:window}function ee(e){let{Document:t}=w(e);return e instanceof t}function T(e){return S(e)?!1:e instanceof w(e).HTMLElement}function te(e){return e instanceof w(e).SVGElement}function E(e){return e?S(e)?e.document:C(e)?ee(e)?e:T(e)||te(e)?e.ownerDocument:document:document:document}var ne=x?_.useLayoutEffect:_.useEffect;function re(e){let t=(0,_.useRef)(e);return ne(()=>{t.current=e}),(0,_.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function ie(){let e=(0,_.useRef)(null);return[(0,_.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,_.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function ae(e,t){t===void 0&&(t=[e]);let n=(0,_.useRef)(e);return ne(()=>{n.current!==e&&(n.current=e)},t),n}function D(e,t){let n=(0,_.useRef)();return(0,_.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function oe(e){let t=re(e),n=(0,_.useRef)(null);return[n,(0,_.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function se(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current}var O={};function k(e,t){return(0,_.useMemo)(()=>{if(t)return t;let n=O[e]==null?0:O[e]+1;return O[e]=n,e+`-`+n},[e,t])}function ce(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var le=ce(1),A=ce(-1);function ue(e){return`clientX`in e&&`clientY`in e}function j(e){if(!e)return!1;let{KeyboardEvent:t}=w(e.target);return t&&e instanceof t}function M(e){if(!e)return!1;let{TouchEvent:t}=w(e.target);return t&&e instanceof t}function de(e){if(M(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return ue(e)?{x:e.clientX,y:e.clientY}:null}var fe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[fe.Translate.toString(e),fe.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),pe=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function me(e){return e.matches(pe)?e:e.querySelector(pe)}var N={display:`none`};function he(e){let{id:t,value:n}=e;return _.createElement(`div`,{id:t,style:N},n)}function P(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return _.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function ge(){let[e,t]=(0,_.useState)(``);return{announce:(0,_.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var _e=(0,_.createContext)(null);function ve(e){let t=(0,_.useContext)(_e);(0,_.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function ye(){let[e]=(0,_.useState)(()=>new Set),t=(0,_.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,_.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var be={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},xe={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Se(e){let{announcements:t=xe,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=be}=e,{announce:a,announcement:o}=ge(),s=k(`DndLiveRegion`),[c,l]=(0,_.useState)(!1);if((0,_.useEffect)(()=>{l(!0)},[]),ve((0,_.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=_.createElement(_.Fragment,null,_.createElement(he,{id:r,value:i.draggable}),_.createElement(P,{id:s,announcement:o}));return n?(0,y.createPortal)(u,n):u}var F;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(F||={});function Ce(){}function we(e,t){return(0,_.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Te(){var e=[...arguments];return(0,_.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var I=Object.freeze({x:0,y:0});function Ee(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function De(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Oe(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function L(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function ke(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Ae=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=ke(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=Ee(ke(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(De)};function je(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Me=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=je(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Oe)};function Ne(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Pe(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:I}function Fe(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Ie=Fe(1);function Le(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Re(e,t,n){let r=Le(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var ze={ignoreTransform:!1};function Be(e,t){t===void 0&&(t=ze);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=w(e).getComputedStyle(e);t&&(n=Re(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Ve(e){return Be(e,{ignoreTransform:!0})}function He(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Ue(e,t){return t===void 0&&(t=w(e).getComputedStyle(e)),t.position===`fixed`}function We(e,t){t===void 0&&(t=w(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function Ge(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(ee(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!T(i)||te(i)||n.includes(i))return n;let a=w(e).getComputedStyle(i);return i!==e&&We(i,a)&&n.push(i),Ue(i,a)?n:r(i.parentNode)}return e?r(e):n}function Ke(e){let[t]=Ge(e,1);return t??null}function qe(e){return!x||!e?null:S(e)?e:C(e)?ee(e)||e===E(e).scrollingElement?window:T(e)?e:null:null}function Je(e){return S(e)?e.scrollX:e.scrollLeft}function Ye(e){return S(e)?e.scrollY:e.scrollTop}function Xe(e){return{x:Je(e),y:Ye(e)}}var Ze;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Ze||={});function Qe(e){return!x||!e?!1:e===document.scrollingElement}function $e(e){let t={x:0,y:0},n=Qe(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var et={x:.2,y:.2};function tt(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=et);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=$e(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Ze.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Ze.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Ze.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Ze.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function nt(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function rt(e){return e.reduce((e,t)=>le(e,Xe(t)),I)}function it(e){return e.reduce((e,t)=>e+Je(t),0)}function at(e){return e.reduce((e,t)=>e+Ye(t),0)}function ot(e,t){if(t===void 0&&(t=Be),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Ke(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var st=[[`x`,[`left`,`right`],it],[`y`,[`top`,`bottom`],at]],ct=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Ge(t),r=rt(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of st)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},lt=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function ut(e){let{EventTarget:t}=w(e);return e instanceof t?e:E(e)}function dt(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var ft;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(ft||={});function pt(e){e.preventDefault()}function mt(e){e.stopPropagation()}var R;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(R||={});var ht={start:[R.Space,R.Enter],cancel:[R.Esc],end:[R.Space,R.Enter,R.Tab]},gt=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case R.Right:return{...n,x:n.x+25};case R.Left:return{...n,x:n.x-25};case R.Down:return{...n,y:n.y+25};case R.Up:return{...n,y:n.y-25}}},_t=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new lt(E(t)),this.windowListeners=new lt(w(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ft.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&ot(n),t(I)}handleKeyDown(e){if(j(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=ht,coordinateGetter:a=gt,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:I;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=A(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=$e(n),p=nt(n),m={x:Math.min(i===R.Right?p.right-p.width/2:p.right,Math.max(i===R.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===R.Down?p.bottom-p.height/2:p.bottom,Math.max(i===R.Down?p.top:p.top+p.height/2,u.y))},h=i===R.Right&&!s||i===R.Left&&!c,g=i===R.Down&&!l||i===R.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===R.Right&&e<=d.x||i===R.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===R.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===R.Down&&e<=d.y||i===R.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===R.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,le(A(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};_t.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=ht,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function vt(e){return!!(e&&`distance`in e)}function yt(e){return!!(e&&`delay`in e)}var bt=class{constructor(e,t,n){n===void 0&&(n=ut(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=E(i),this.documentListeners=new lt(this.document),this.listeners=new lt(n),this.windowListeners=new lt(w(i)),this.initialCoordinates=de(r)??I,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.DragStart,pt),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),this.windowListeners.add(ft.ContextMenu,pt),this.documentListeners.add(ft.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(yt(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(vt(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(ft.Click,mt,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ft.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=de(e)??I,s=A(n,o);if(!t&&a){if(vt(a)){if(a.tolerance!=null&&dt(s,a.tolerance))return this.handleCancel();if(dt(s,a.distance))return this.handleStart()}if(yt(a)&&dt(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===R.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},xt={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},St=class extends bt{constructor(e){let{event:t}=e,n=E(t.target);super(e,xt,n)}};St.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Ct={move:{name:`mousemove`},end:{name:`mouseup`}},wt;(function(e){e[e.RightClick=2]=`RightClick`})(wt||={});var Tt=class extends bt{constructor(e){super(e,Ct,E(e.event.target))}};Tt.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===wt.RightClick?!1:(r?.({event:n}),!0)}}];var Et={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},Dt=class extends bt{constructor(e){super(e,Et)}static setup(){return window.addEventListener(Et.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Et.move.name,e)};function e(){}}};Dt.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var Ot;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(Ot||={});var kt;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(kt||={});function At(e){let{acceleration:t,activator:n=Ot.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=kt.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Mt({delta:d,disabled:!a}),[m,h]=ie(),g=(0,_.useRef)({x:0,y:0}),v=(0,_.useRef)({x:0,y:0}),y=(0,_.useMemo)(()=>{switch(n){case Ot.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Ot.DraggableRect:return i}},[n,i,c]),b=(0,_.useRef)(null),x=(0,_.useCallback)(()=>{let e=b.current;if(!e)return;let t=g.current.x*v.current.x,n=g.current.y*v.current.y;e.scrollBy(t,n)},[]),S=(0,_.useMemo)(()=>s===kt.TreeOrder?[...l].reverse():l,[s,l]);(0,_.useEffect)(()=>{if(!a||!l.length||!y){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=tt(e,n,y,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),b.current=e,m(x,o),g.current=a,v.current=i;return}}g.current={x:0,y:0},v.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(y),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var jt={x:{[Ze.Backward]:!1,[Ze.Forward]:!1},y:{[Ze.Backward]:!1,[Ze.Forward]:!1}};function Mt(e){let{delta:t,disabled:n}=e,r=se(t);return D(e=>{if(n||!r||!e)return jt;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Ze.Backward]:e.x[Ze.Backward]||i.x===-1,[Ze.Forward]:e.x[Ze.Forward]||i.x===1},y:{[Ze.Backward]:e.y[Ze.Backward]||i.y===-1,[Ze.Forward]:e.y[Ze.Forward]||i.y===1}}},[n,t,r])}function Nt(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return D(e=>t==null?null:r??e??null,[r,t])}function Pt(e,t){return(0,_.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Ft;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Ft||={});var It;(function(e){e.Optimized=`optimized`})(It||={});var Lt=new Map;function Rt(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,_.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,_.useRef)(e),d=g(),f=ae(d),p=(0,_.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,_.useRef)(null),h=D(t=>{if(d&&!n)return Lt;if(!t||t===Lt||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new ct(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,_.useEffect)(()=>{u.current=e},[e]),(0,_.useEffect)(()=>{d||p()},[n,d]),(0,_.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,_.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Ft.Always:return!1;case Ft.BeforeDragging:return n;default:return!n}}}function zt(e,t){return D(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Bt(e,t){return zt(e,t)}function Vt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,_.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,_.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ht(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,_.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,_.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ut(e){return new ct(Be(e),e)}function Wt(e,t,n){t===void 0&&(t=Ut);let[r,i]=(0,_.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Vt({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Ht({callback:a});return ne(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Gt(e){return Pe(e,zt(e))}var Kt=[];function qt(e){let t=(0,_.useRef)(e),n=D(n=>e?n&&n!==Kt&&e&&t.current&&e.parentNode===t.current.parentNode?n:Ge(e):Kt,[e]);return(0,_.useEffect)(()=>{t.current=e},[e]),n}function Jt(e){let[t,n]=(0,_.useState)(null),r=(0,_.useRef)(e),i=(0,_.useCallback)(e=>{let t=qe(e.target);t&&n(e=>e?(e.set(t,Xe(t)),new Map(e)):null)},[]);return(0,_.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=qe(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Xe(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{qe(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,_.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>le(e,t),I):rt(e):I,[e,t])}function Yt(e,t){t===void 0&&(t=[]);let n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{n.current=null},t),(0,_.useEffect)(()=>{let t=e!==I;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?A(e,n.current):I}function Xt(e){(0,_.useEffect)(()=>{if(!x)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Zt(e,t){return(0,_.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Qt(e){return(0,_.useMemo)(()=>e?He(e):null,[e])}var $t=[];function en(e,t){t===void 0&&(t=Be);let[n]=e,r=Qt(n?w(n):null),[i,a]=(0,_.useState)($t);function o(){a(()=>e.length?e.map(e=>Qe(e)?r:new ct(t(e),e)):$t)}let s=Ht({callback:o});return ne(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function tn(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return T(t)?t:e}function nn(e){let{measure:t}=e,[n,r]=(0,_.useState)(null),i=Ht({callback:(0,_.useCallback)(e=>{for(let{target:n}of e)if(T(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=oe((0,_.useCallback)(e=>{let n=tn(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,_.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var rn=[{sensor:St,options:{}},{sensor:_t,options:{}}],an={current:{}},on={draggable:{measure:Ve},droppable:{measure:Ve,strategy:Ft.WhileDragging,frequency:It.Optimized},dragOverlay:{measure:Be}},sn=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},cn={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new sn,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ce},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:on,measureDroppableContainers:Ce,windowRect:null,measuringScheduled:!1},ln={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:Ce,draggableNodes:new Map,over:null,measureDroppableContainers:Ce},un=(0,_.createContext)(ln),dn=(0,_.createContext)(cn);function fn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new sn}}}function pn(e,t){switch(t.type){case F.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case F.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case F.DragEnd:case F.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case F.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new sn(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case F.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new sn(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case F.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new sn(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function mn(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,_.useContext)(un),a=se(r),o=se(n?.id);return(0,_.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!j(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=me(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function hn(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function gn(e){return(0,_.useMemo)(()=>({draggable:{...on.draggable,...e?.draggable},droppable:{...on.droppable,...e?.droppable},dragOverlay:{...on.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function _n(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,_.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ne(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Pe(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Ke(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var vn=(0,_.createContext)({...I,scaleX:1,scaleY:1}),yn;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(yn||={});var bn=(0,_.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=rn,collisionDetection:o=Me,measuring:s,modifiers:c,...l}=e,[u,d]=(0,_.useReducer)(pn,void 0,fn),[f,p]=ye(),[m,h]=(0,_.useState)(yn.Uninitialized),g=m===yn.Initialized,{draggable:{active:v,nodes:b,translate:x},droppable:{containers:S}}=u,C=v==null?null:b.get(v),ee=(0,_.useRef)({initial:null,translated:null}),T=(0,_.useMemo)(()=>v==null?null:{id:v,data:C?.data??an,rect:ee},[v,C]),te=(0,_.useRef)(null),[E,re]=(0,_.useState)(null),[ie,D]=(0,_.useState)(null),oe=ae(l,Object.values(l)),se=k(`DndDescribedBy`,t),O=(0,_.useMemo)(()=>S.getEnabled(),[S]),ce=gn(s),{droppableRects:A,measureDroppableContainers:ue,measuringScheduled:j}=Rt(O,{dragging:g,dependencies:[x.x,x.y],config:ce.droppable}),M=Nt(b,v),fe=(0,_.useMemo)(()=>ie?de(ie):null,[ie]),pe=qe(),me=Bt(M,ce.draggable.measure);_n({activeNode:v==null?null:b.get(v),config:pe.layoutShiftCompensation,initialRect:me,measure:ce.draggable.measure});let N=Wt(M,ce.draggable.measure,me),he=Wt(M?M.parentElement:null),P=(0,_.useRef)({activatorEvent:null,active:null,activeNode:M,collisionRect:null,collisions:null,droppableRects:A,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ge=S.getNodeFor(P.current.over?.id),ve=nn({measure:ce.dragOverlay.measure}),be=ve.nodeRef.current??M,xe=g?ve.rect??N:null,Ce=!!(ve.nodeRef.current&&ve.rect),we=Gt(Ce?null:N),Te=Qt(be?w(be):null),I=qt(g?ge??M:null),Ee=en(I),De=hn(c,{transform:{x:x.x-we.x,y:x.y-we.y,scaleX:1,scaleY:1},activatorEvent:ie,active:T,activeNodeRect:N,containerNodeRect:he,draggingNodeRect:xe,over:P.current.over,overlayNodeRect:ve.rect,scrollableAncestors:I,scrollableAncestorRects:Ee,windowRect:Te}),Oe=fe?le(fe,x):null,ke=Jt(I),Ae=Yt(ke),je=Yt(ke,[N]),Pe=le(De,Ae),Fe=xe?Ie(xe,De):null,Le=T&&Fe?o({active:T,collisionRect:Fe,droppableRects:A,droppableContainers:O,pointerCoordinates:Oe}):null,Re=L(Le,`id`),[ze,Be]=(0,_.useState)(null),Ve=Ne(Ce?De:le(De,je),ze?.rect??null,N),He=(0,_.useRef)(null),Ue=(0,_.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(te.current==null)return;let i=b.get(te.current);if(!i)return;let a=e.nativeEvent;He.current=new n({active:te.current,activeNode:i,event:a,options:r,context:P,onAbort(e){if(!b.get(e))return;let{onDragAbort:t}=oe.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!b.get(e))return;let{onDragPending:i}=oe.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=te.current;if(t==null)return;let n=b.get(t);if(!n)return;let{onDragStart:r}=oe.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:ee}};(0,y.unstable_batchedUpdates)(()=>{r?.(i),h(yn.Initializing),d({type:F.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),re(He.current),D(a)})},onMove(e){d({type:F.DragMove,coordinates:e})},onEnd:o(F.DragEnd),onCancel:o(F.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=P.current,o=null;if(t&&i){let{cancelDrop:s}=oe.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===F.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=F.DragCancel)}te.current=null,(0,y.unstable_batchedUpdates)(()=>{d({type:e}),h(yn.Uninitialized),Be(null),re(null),D(null),He.current=null;let t=e===F.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=oe.current[t];e?.(o),f({type:t,event:o})}})}}},[b]),We=Pt(a,(0,_.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=b.get(r);if(te.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},te.current=r,Ue(n,t))},[b,Ue]));Xt(a),ne(()=>{N&&m===yn.Initializing&&h(yn.Initialized)},[N,m]),(0,_.useEffect)(()=>{let{onDragMove:e}=oe.current,{active:t,activatorEvent:n,collisions:r,over:i}=P.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:Pe.x,y:Pe.y},over:i};(0,y.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[Pe.x,Pe.y]),(0,_.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=P.current;if(!e||te.current==null||!t||!i)return;let{onDragOver:a}=oe.current,o=r.get(Re),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,y.unstable_batchedUpdates)(()=>{Be(s),a?.(c),f({type:`onDragOver`,event:c})})},[Re]),ne(()=>{P.current={activatorEvent:ie,active:T,activeNode:M,collisionRect:Fe,collisions:Le,droppableRects:A,draggableNodes:b,draggingNode:be,draggingNodeRect:xe,droppableContainers:S,over:ze,scrollableAncestors:I,scrollAdjustedTranslate:Pe},ee.current={initial:xe,translated:Fe}},[T,M,Le,Fe,b,be,xe,A,S,ze,I,Pe]),At({...pe,delta:x,draggingRect:Fe,pointerCoordinates:Oe,scrollableAncestors:I,scrollableAncestorRects:Ee});let Ge=(0,_.useMemo)(()=>({active:T,activeNode:M,activeNodeRect:N,activatorEvent:ie,collisions:Le,containerNodeRect:he,dragOverlay:ve,draggableNodes:b,droppableContainers:S,droppableRects:A,over:ze,measureDroppableContainers:ue,scrollableAncestors:I,scrollableAncestorRects:Ee,measuringConfiguration:ce,measuringScheduled:j,windowRect:Te}),[T,M,N,ie,Le,he,ve,b,S,A,ze,ue,I,Ee,ce,j,Te]),Ke=(0,_.useMemo)(()=>({activatorEvent:ie,activators:We,active:T,activeNodeRect:N,ariaDescribedById:{draggable:se},dispatch:d,draggableNodes:b,over:ze,measureDroppableContainers:ue}),[ie,We,T,N,d,se,b,ze,ue]);return _.createElement(_e.Provider,{value:p},_.createElement(un.Provider,{value:Ke},_.createElement(dn.Provider,{value:Ge},_.createElement(vn.Provider,{value:Ve},i)),_.createElement(mn,{disabled:n?.restoreFocus===!1})),_.createElement(Se,{...n,hiddenTextDescribedById:se}));function qe(){let e=E?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),xn=(0,_.createContext)(null),Sn=`button`,Cn=`Draggable`;function wn(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=k(Cn),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,_.useContext)(un),{role:p=Sn,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,v=(0,_.useContext)(g?vn:xn),[y,b]=oe(),[x,S]=oe(),C=Zt(o,t),w=ae(n);return ne(()=>(d.set(t,{id:t,key:a,node:y,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,_.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===Sn?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:y,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:v}}function Tn(){return(0,_.useContext)(dn)}var En=`Droppable`,Dn={timeout:25};function On(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=k(En),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,_.useContext)(un),u=(0,_.useRef)({disabled:n}),d=(0,_.useRef)(!1),f=(0,_.useRef)(null),p=(0,_.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...Dn,...i},v=ae(h??r),y=Ht({callback:(0,_.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(v.current)?v.current:[v.current]),p.current=null},g)},[g]),disabled:m||!o}),[b,x]=oe((0,_.useCallback)((e,t)=>{y&&(t&&(y.unobserve(t),d.current=!1),e&&y.observe(e))},[y])),S=ae(t);return(0,_.useEffect)(()=>{!y||!b.current||(y.disconnect(),d.current=!1,y.observe(b.current))},[b,y]),(0,_.useEffect)(()=>(s({type:F.RegisterDroppable,element:{id:r,key:a,disabled:n,node:b,rect:f,data:S}}),()=>s({type:F.UnregisterDroppable,key:a,id:r})),[r]),(0,_.useEffect)(()=>{n!==u.current.disabled&&(s({type:F.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:b,over:c,setNodeRef:x}}function kn(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function An(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function jn(e){return e!==null&&e>=0}function Mn(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Nn(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var Pn=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=kn(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Fn={scaleX:1,scaleY:1},In=e=>{let{activeIndex:t,activeNodeRect:n,index:r,rects:i,overIndex:a}=e,o=i[t]??n;if(!o)return null;if(r===t){let e=i[a];return e?{x:0,y:t<a?e.top+e.height-(o.top+o.height):e.top-o.top,...Fn}:null}let s=Ln(i,r,t);return r>t&&r<=a?{x:0,y:-o.height-s,...Fn}:r<t&&r>=a?{x:0,y:o.height+s,...Fn}:{x:0,y:0,...Fn}};function Ln(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return r?n<t?i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}var Rn=`Sortable`,zn=_.createContext({activeIndex:-1,containerId:Rn,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Pn,disabled:{draggable:!1,droppable:!1}});function Bn(e){let{children:t,id:n,items:r,strategy:i=Pn,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=Tn(),d=k(Rn,n),f=s.rect!==null,p=(0,_.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,v=(0,_.useRef)(p),y=!Mn(p,v.current),b=g!==-1&&h===-1||y,x=Nn(a);ne(()=>{y&&m&&u(p)},[y,p,m,u]),(0,_.useEffect)(()=>{v.current=p},[p]);let S=(0,_.useMemo)(()=>({activeIndex:h,containerId:d,disabled:x,disableTransforms:b,items:p,overIndex:g,useDragOverlay:f,sortedRects:An(p,c),strategy:i}),[h,d,x.draggable,x.droppable,b,p,g,c,f,i]);return _.createElement(zn.Provider,{value:S},t)}var Vn=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return kn(n,r,i).indexOf(t)},Hn=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Un={duration:200,easing:`ease`},Wn=`transform`,Gn=fe.Transition.toString({property:Wn,duration:0,easing:`linear`}),Kn={roleDescription:`sortable`};function qn(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);return ne(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=Be(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,_.useEffect)(()=>{a&&o(null)},[a]),a}function Jn(e){let{animateLayoutChanges:t=Hn,attributes:n,disabled:r,data:i,getNewIndex:a=Vn,id:o,strategy:s,resizeObserverConfig:c,transition:l=Un}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:v,strategy:y}=(0,_.useContext)(zn),x=Yn(r,p),S=u.indexOf(o),C=(0,_.useMemo)(()=>({sortable:{containerId:d,index:S,items:u},...i}),[d,i,S,u]),w=(0,_.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:ee,node:T,isOver:te,setNodeRef:E}=On({id:o,data:C,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:w,...c}}),{active:ne,activatorEvent:re,activeNodeRect:ie,attributes:ae,setNodeRef:D,listeners:oe,isDragging:se,over:O,setActivatorNodeRef:k,transform:ce}=wn({id:o,data:C,attributes:{...Kn,...n},disabled:x.draggable}),le=b(E,D),A=!!ne,ue=A&&!m&&jn(f)&&jn(g),M=!v&&se,de=ue?(M&&ue?ce:null)??(s??y)({rects:h,activeNodeRect:ie,activeIndex:f,overIndex:g,index:S}):null,pe=jn(f)&&jn(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):S,me=ne?.id,N=(0,_.useRef)({activeId:me,items:u,newIndex:pe,containerId:d}),he=u!==N.current.items,P=t({active:ne,containerId:d,isDragging:se,isSorting:A,id:o,index:S,items:u,newIndex:N.current.newIndex,previousItems:N.current.items,previousContainerId:N.current.containerId,transition:l,wasDragging:N.current.activeId!=null}),ge=qn({disabled:!P,index:S,node:T,rect:ee});return(0,_.useEffect)(()=>{A&&N.current.newIndex!==pe&&(N.current.newIndex=pe),d!==N.current.containerId&&(N.current.containerId=d),u!==N.current.items&&(N.current.items=u)},[A,pe,d,u]),(0,_.useEffect)(()=>{if(me===N.current.activeId)return;if(me!=null&&N.current.activeId==null){N.current.activeId=me;return}let e=setTimeout(()=>{N.current.activeId=me},50);return()=>clearTimeout(e)},[me]),{active:ne,activeIndex:f,attributes:ae,data:C,rect:ee,index:S,newIndex:pe,items:u,isOver:te,isSorting:A,isDragging:se,listeners:oe,node:T,overIndex:g,over:O,setNodeRef:le,setActivatorNodeRef:k,setDroppableNodeRef:E,setDraggableNodeRef:D,transform:ge??de,transition:_e()};function _e(){if(ge||he&&N.current.newIndex===S)return Gn;if(!(M&&!j(re)||!l)&&(A||P))return fe.Transition.toString({...l,property:Wn})}}function Yn(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}R.Down,R.Right,R.Up,R.Left;var Xn=`/Koenigliche-AI-Songs/`,z=e=>`${Xn}${e}`,Zn=[{id:1,title:`Intro - Motte, hast du eigentlich einen Plan?`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:1,duration:`00:59`,releaseDate:`2026-03-27`,cover:z(`covers/Intro-Motte-hast-du-eigentlich-einen-Plan.jpeg`),file:z(`songs/Intro-Motte-hast-du-eigentlich-einen-Plan.mp3`),isSingle:!1},{id:2,title:`Skateboard Chemistry`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:2,duration:`03:04`,releaseDate:`2026-03-27`,cover:z(`covers/Skateboard-Chemistry.png`),file:z(`songs/Skateboard-Chemistry.mp3`),isSingle:!1},{id:3,title:`Crystal Moth`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:3,duration:`01:48`,releaseDate:`2026-03-27`,cover:z(`covers/Crystal-Moth.png`),file:z(`songs/Crystal-Moth.mp3`),isSingle:!1},{id:4,title:`Competitive Advantage`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:4,duration:`02:28`,releaseDate:`2026-03-27`,cover:z(`covers/Competitive-Advantage.png`),file:z(`songs/Competitive-Advantage.mp3`),isSingle:!1},{id:5,title:`Crystal Moth Supreme`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:5,duration:`03:17`,releaseDate:`2026-03-27`,cover:z(`covers/Crystal-Moth-Supreme.jpg`),file:z(`songs/Crystal-Moth-Supreme.mp3`),isSingle:!1},{id:6,title:`Operation Mottemaker`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:6,duration:`02:04`,releaseDate:`2026-03-27`,cover:z(`covers/Operation-Mottemaker.png`),file:z(`songs/Operation-Mottemaker.mp3`),isSingle:!1},{id:7,title:`Escape Velocity`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:7,duration:`03:47`,releaseDate:`2026-03-27`,cover:z(`covers/Escape-Velocity.png`),file:z(`songs/Escape-Velocity.mp3`),isSingle:!1},{id:8,title:`Mottemaker Industries`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:8,duration:`02:30`,releaseDate:`2026-03-27`,cover:z(`covers/Mottemaker-Industries.jpg`),file:z(`songs/Mottemaker-Industries.mp3`),isSingle:!1},{id:9,title:`Empire on Fire`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:9,duration:`02:51`,releaseDate:`2026-03-27`,cover:z(`covers/Empire-on-Fire.jpg`),file:z(`songs/Empire-on-Fire.mp3`),isSingle:!1},{id:10,title:`Schedule II`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:z(`covers/Mottemaker-Files-Album.jpg`),trackNumber:10,duration:`02:57`,releaseDate:`2026-03-27`,cover:z(`covers/Schedule-II.jpg`),file:z(`songs/Schedule-II.mp3`),isSingle:!1},{id:11,title:`Alexis, Mi Hermano`,artist:`Motte`,duration:`03:41`,releaseDate:`2026-03-16`,cover:z(`covers/Alexis-Mi-Hermano.jpg`),file:z(`songs/Alexis-Mi-Hermano.mp3`),isSingle:!0},{id:12,title:`Alexis Brother`,artist:`Motte`,duration:`03:36`,releaseDate:`2026-03-16`,cover:z(`covers/Alexis_Brother.jpg`),file:z(`songs/Alexis_Brother.mp3`),isSingle:!0},{id:13,title:`Il Ritorno del Don Motte`,artist:`Erdbeerenfresser`,album:`Il Ritorno del Don Motte - Single`,trackNumber:1,duration:`03:37`,releaseDate:`2026-04-10`,cover:z(`covers/il-ritorno-del-don-motte.jpg`),file:z(`songs/il-ritorno-del-don-motte.mp3`),isSingle:!0},{id:14,title:`Rückfahrt Zwei Stunden`,artist:`Erdbeerenfresser`,duration:`02:44`,releaseDate:`2026-04-12`,cover:z(`covers/Rückfahrt_Zwei_Stunden.jpg`),file:z(`songs/Rückfahrt_Zwei_Stunden.mp3`),isSingle:!0},{id:15,title:`Jascha Winter und der Freizeitparkzauber`,artist:`Motte`,duration:`04:44`,releaseDate:`2026-03-05`,cover:z(`covers/Jascha-Winter-und-der-Freizeitparkzauber.jpg`),file:z(`songs/Jascha-Winter-und-der-Freizeitparkzauber.mp3`),isSingle:!0},{id:16,title:`Hymne an Alexis (remasterd)`,artist:`Motte`,duration:`03:25`,releaseDate:`2025-09-12`,cover:z(`covers/Hymne_an_Alexis_(remasterd).jpg`),file:z(`songs/Hymne_an_Alexis_(remasterd).mp3`),isSingle:!0},{id:17,title:`Die Bußhymne an Alexis`,artist:`Motte`,duration:`03:23`,releaseDate:`2026-03-16`,cover:z(`covers/Die-Bußhymne-an-Alexis.jpg`),file:z(`songs/Die-Bußhymne-an-Alexis.mp3`),isSingle:!0},{id:18,title:`Ben, das geht auf mich`,artist:`Motte`,duration:`03:20`,releaseDate:`2026-01-29`,cover:z(`covers/Ben_das_geht_auf_mich.jpg`),file:z(`songs/Ben_das_geht_auf_mich.mp3`),isSingle:!0},{id:19,title:`Ik ben gleich soweit!`,artist:`Merlin`,duration:`02:23`,releaseDate:`2026-02-27`,cover:z(`covers/Ik-ben-gleich-soweit!.jpg`),file:z(`songs/Ik-ben-gleich-soweit!.mp3`),isSingle:!0},{id:20,title:`PrinzMotte, unser Held`,artist:`Erdbeerenfresser`,duration:`03:48`,releaseDate:`2026-01-30`,cover:z(`covers/PrinzMotte,_unser_Held.jpg`),file:z(`songs/PrinzMotte,_unser_Held.mp3`),isSingle:!0},{id:21,title:`Kochstream Ambience`,artist:`Merlin`,duration:`01:49`,releaseDate:`2026-02-27`,cover:z(`covers/Kochstream-Ambience.jpg`),file:z(`songs/Kochstream-Ambience.mp3`),isSingle:!0},{id:22,title:`Fleischwurst`,artist:`Merlin`,duration:`04:24`,releaseDate:`2026-01-23`,cover:z(`covers/Fleischwurst.jpg`),file:z(`songs/Fleischwurst.mp3`),isSingle:!0},{id:23,title:`Erdbeerenfresser`,artist:`Merlin`,duration:`02:29`,releaseDate:`2026-01-17`,cover:z(`covers/Erdbeerenfresser.jpg`),file:z(`songs/Erdbeerenfresser.mp3`),isSingle:!0},{id:24,title:`There are heroes`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-03-20`,cover:z(`covers/There are heroes.jpg`),file:z(`songs/There are heroes.mp3`),isSingle:!0},{id:25,title:`Mack`,artist:`Erdbeerenfresser`,duration:`05:37`,releaseDate:`2026-03-17`,cover:z(`covers/Mack.jpg`),file:z(`songs/Mack.mp3`),isSingle:!0},{id:26,title:`Party`,artist:`Erdbeerenfresser X Coaster_Liam`,duration:`02:09`,releaseDate:`2026-03-16`,cover:z(`covers/Party.jpg`),file:z(`songs/Party.mp3`),isSingle:!0},{id:27,title:`Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)`,artist:`Erdbeerenfresser`,duration:`04:32`,releaseDate:`2026-03-16`,cover:z(`covers/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).jpg`),file:z(`songs/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).mp3`),isSingle:!0},{id:28,title:`Nu hör ma zu…`,artist:`Erdbeerenfresser`,duration:`03:13`,releaseDate:`2026-03-16`,cover:z(`covers/Nu hör ma zu….jpg`),file:z(`songs/Nu hör ma zu….mp3`),isSingle:!0},{id:29,title:`Yeah yeah`,artist:`Erdbeerenfresser`,duration:`01:41`,releaseDate:`2026-03-16`,cover:z(`covers/Yeah yeah.jpg`),file:z(`songs/Yeah yeah.mp3`),isSingle:!0},{id:30,title:`Motte Cooking Stream`,artist:`Erdbeerenfresser`,duration:`03:09`,releaseDate:`2026-03-16`,cover:z(`covers/Motte Cooking Stream.jpg`),file:z(`songs/Motte Cooking Stream.mp3`),isSingle:!0},{id:31,title:`Printer läuft die ganze Nacht`,artist:`Erdbeerenfresser`,duration:`04:09`,releaseDate:`2026-03-15`,cover:z(`covers/Printer läuft die ganze Nacht.jpg`),file:z(`songs/Printer läuft die ganze Nacht.mp3`),isSingle:!0},{id:32,title:`Hippo sagt böse Sachen`,artist:`Erdbeerenfresser`,duration:`02:55`,releaseDate:`2026-03-14`,cover:z(`covers/Hippo sagt böse Sachen.jpg`),file:z(`songs/Hippo sagt böse Sachen.mp3`),isSingle:!0},{id:33,title:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`,artist:`Motte`,duration:`03:40`,releaseDate:`2026-03-25`,cover:z(`covers/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.jpg`),file:z(`songs/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.mp3`),isSingle:!0},{id:34,title:`Zwischen Rauch und Achterbahn`,artist:`Erdbeerenfresser`,duration:`03:02`,releaseDate:`2026-04-14`,cover:z(`covers/Zwischen Rauch und Achterbahn.jpg`),file:z(`songs/Zwischen Rauch und Achterbahn.mp3`),isSingle:!0},{id:35,title:`Ois für’n Alexis`,artist:`Erdbeerenfresser`,duration:`03:01`,releaseDate:`2026-04-15`,cover:z(`covers/Ois für’n Alexis.jpg`),file:z(`songs/Ois für’n Alexis.mp3`),isSingle:!0},{id:36,title:`Mr. Moneymaker`,artist:`Erdbeerenfresser`,duration:`03:42`,releaseDate:`2026-04-15`,cover:z(`covers/Mr. Moneymaker.jpg`),file:z(`songs/Mr. Moneymaker.mp3`),isSingle:!0},{id:37,title:`Indian coding berry`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-04-15`,cover:z(`covers/Indian coding berry.jpg`),file:z(`songs/Indian coding berry.mp3`),isSingle:!0},{id:38,title:`Pauli foahrt durch Barcelona (Meddl Edition)`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-04-15`,cover:z(`covers/Pauli foahrt durch Barcelona (Meddl Edition).jpg`),file:z(`songs/Pauli foahrt durch Barcelona (Meddl Edition).mp3`),isSingle:!0},{id:39,title:`Marco… hörst du mich?`,artist:`Erdbeerenfresser`,duration:`04:34`,releaseDate:`2026-04-16`,cover:z(`covers/Marco… hörst du mich.jpg`),file:z(`songs/Marco… hörst du mich.mp3`),isSingle:!0},{id:40,title:`EPMC – The Park Awaits`,artist:`Motte`,duration:`03:47`,releaseDate:`2026-04-16`,cover:z(`covers/EPMC – The Park Awaits.jpg`),file:z(`songs/EPMC – The Park Awaits.mp3`),isSingle:!0},{id:41,title:`Mottemod (König vom Server)`,artist:`Erdbeerenfresser`,duration:`04:27`,releaseDate:`2026-04-17`,cover:z(`covers/Mottemod (König vom Server).jpg`),file:z(`songs/Mottemod (König vom Server).mp3`),isSingle:!0},{id:42,title:`Wundertüten-Freitag (Queen Claudia)`,artist:`Erdbeerenfresser`,duration:`03:29`,releaseDate:`2026-04-17`,cover:z(`covers/Wundertüten-Freitag (Queen Claudia).png`),file:z(`songs/Wundertüten-Freitag (Queen Claudia).mp3`),isSingle:!0},{id:43,title:`Erdbeere Mine Session`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:z(`covers/Erdbeere Underground.jpg`),trackNumber:1,duration:`02:11`,releaseDate:`2026-04-17`,cover:z(`covers/Erdbeere Mine Session.png`),file:z(`songs/Erdbeere Mine Session.mp3`),isSingle:!1},{id:44,title:`Auf der Suche nach Diamanten`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:z(`covers/Erdbeere Underground.jpg`),trackNumber:2,duration:`02:28`,releaseDate:`2026-04-17`,cover:z(`covers/Auf der Suche nach Diamanten.png`),file:z(`songs/Auf der Suche nach Diamanten.mp3`),isSingle:!1},{id:45,title:`Noch tiefer`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:z(`covers/Erdbeere Underground.jpg`),trackNumber:3,duration:`02:42`,releaseDate:`2026-04-17`,cover:z(`covers/Noch tiefer.png`),file:z(`songs/Noch tiefer.mp3`),isSingle:!1},{id:46,title:`Auch Eisen ist wichtig`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:z(`covers/Erdbeere Underground.jpg`),trackNumber:4,duration:`02:16`,releaseDate:`2026-04-17`,cover:z(`covers/Auch Eisen ist wichtig.png`),file:z(`songs/Auch Eisen ist wichtig.mp3`),isSingle:!1},{id:47,title:`Diamanten in meiner Hand`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:z(`covers/Erdbeere Underground.jpg`),trackNumber:5,duration:`02:38`,releaseDate:`2026-04-17`,cover:z(`covers/Diamanten in meiner Hand.png`),file:z(`songs/Diamanten in meiner Hand.mp3`),isSingle:!1}],Qn=[{version:`1.2.0`,label:`2026-04-16 20:37`,changes:[`Playlist-System vollständig überarbeitet und erweitert`,`Songs können jetzt mehrfach in Playlists und Warteschlange hinzugefügt werden (keine Limitierung mehr)`,`Entfernen aus Playlist löscht jetzt nur noch eine Instanz statt alle gleichen Songs`,`Playlist-Übersicht mit dynamischer Cover-Collage (bis zu 4 Cover + '+X' Anzeige)`,`Playlist-Detailseite überarbeitet und besser strukturiert`,`Playlist-Menü erweitert: 'Aus Playlist entfernen' jetzt direkt im 3-Punkte-Menü integriert`,`Playlist-UI für Mobile deutlich verbessert (Layout, Buttons, Handling)`,`Playlist-Änderungen werden sofort live aktualisiert (kein Neuladen mehr nötig)`,`Import/Export-System für Playlists stabilisiert und verbessert`,`SongRow-System erweitert (Playlist-Kontext integriert für bessere Funktionalität)`,`Queue-System verbessert: Drag & Drop bleibt kompatibel mit doppelten Songs`,`React-Key-System angepasst, um doppelte Songs korrekt darzustellen`,`Allgemeine Stabilitäts- und UI-Fixes im Playlist-Bereich`]},{version:`1.1.0`,label:`2026-04-15 23:50`,changes:[`Fullscreen-Player eingeführt (Spotify-ähnlicher Modus mit großem Cover und dynamischem Hintergrund)`,`Animierter Songwechsel im Fullscreen (Slide- und Fade-Übergang)`,`Fullscreen-Controls blenden sich automatisch bei Inaktivität aus und bei Bewegung wieder ein`,`Eigener Player im Fullscreen integriert (Play, Skip, Repeat, Progress, Volume)`,`Liedtext-System erweitert: Lyrics jetzt auch im Fullscreen verfügbar`,`Lyrics aktualisieren sich automatisch beim Songwechsel (auch außerhalb des Fullscreens)`,`Separate Steuerung für Lyrics im normalen Player und im Fullscreen`,`Mobile UI komplett überarbeitet (Floating Player, bessere Abstände, saubere Touch-Bedienung)`,`Album-Header und Songlisten vollständig responsive gemacht`,`Progress-Bar visuell und technisch überarbeitet (bessere Synchronisation mit Slider)`,`Überlappungsfehler zwischen Progress-Bar und Zeitanzeige behoben`,`Player-Layout optimiert (Spacing, Alignment und Lesbarkeit verbessert)`,`Lautstärkeregler weiter verbessert (visuelles Feedback und Positionierung)`,`Stabilitätsverbesserungen im Playback-System (Queue, History und Repeat Verhalten optimiert)`]},{version:`1.0.3`,label:`2026-04-15 01:05`,changes:[`Song-Einreichungsformular integriert (Google Forms Anbindung)`,`Neuer Menüpunkt 'Song einreichen' im Drawer hinzugefügt`,`Popup-System für externe Aktionen erweitert (inkl. Overlay und Close-Funktion)`,`Saubere Weiterleitung zum Formular in neuem Tab implementiert`,`UI für Community-Interaktionen vorbereitet und erweitert`,`Grundlage für zukünftige Moderation / Song-Review-System geschaffen`]},{version:`1.0.2`,label:`2026-04-14 19:40`,changes:[`Repeat-System eingeführt (Off / Repeat All / Repeat One)`,`Repeat One (R1) sorgt dafür, dass der aktuelle Track dauerhaft geloopt wird`,`Repeat All (R) wiederholt die gesamte aktuelle Hör-Session (History + Queue)`,`History-System vollständig implementiert (Zurückspringen zu vorherigen Tracks möglich)`,`Vorher-/Zurück-Button nutzt jetzt echte Track-History statt nur Neustart`,`Weiter-Button und Tastatursteuerung funktionieren jetzt auch am Ende der Queue bei aktivem Repeat`,`Neue Wiedergaben (z. B. einzelner Song oder Albumstart) setzen History korrekt zurück`,`Verbesserte Player-Logik für konsistentes Verhalten zwischen Queue, History und Repeat`]},{version:`1.0.1`,label:`2026-04-14 00:05`,changes:[`Lautstärkeregler überarbeitet und visuell dynamisch gemacht (gefüllter Bereich = grün, Rest = grau)`,`Mute-/Unmute-Funktion über Lautsprecher-Icon hinzugefügt (merkt sich letzte Lautstärke)`,`Media Session API integriert (Metadaten werden im System angezeigt)`,`Playersteuerung über Tastatur möglich (Play/Pause, Weiter, Zurück)`,`Liedtext-System eingeführt und in externe Datei (Texte.js) ausgelagert`,`Lyrics-Popup im Player eingebaut (inkl. Overlay und Close-Funktion)`,`Lyrics-UI verbessert und Titel im Popup zentriert`,`Player-Architektur für zukünftige Features erweitert`]},{version:`1.0.0`,label:`2026-04-13 20:25`,changes:[`Die erste Vollversion ist draußen. Jetzt mit allen aktuellen AI-Songs die es zum heutigem Stand gibt`,`Volume-Regler wurde eingeführt`,`Texte wurden da wo möglich hinzugefügt`,`Viel Spaß mit den Königlichen AI Songs. VG Erdbeere`]},{version:`0.8.1`,label:`2026-04-12 15:00`,changes:[`Patchnotes-System eingeführt`,`Song-System eingeführt`]},{version:`0.8.0`,label:`2026-04-12 13:00`,changes:[`Custom Player mit eigener Progressbar eingebaut`,`Play- und Pause-Logik im Player überarbeitet`,`Queue-System hinzugefügt`,`Drag & Drop für die Warteschlange eingebaut`,`Warteschlange direkt im Menü integriert`,`Queue-Löschen-Funktion ergänzt`,`Songlisten so umgebaut, dass ganze Zeilen abspielbar sind`,`Album-Klick in der Songliste führt direkt zur Albumseite`,`Album Play und Shuffle eingebaut`,`Songs-Ansicht mit Play- und Shuffle-Buttons ergänzt`,`Startseite mit Hero-Bereich aufgebaut`,`Bereiche für Neueste Releases und Aktuelle Alben ergänzt`,`Hover-Effekte auf Releases, Alben und Songzeilen eingebaut`,`Impressum-Seite hinzugefügt`,`Patchnotes-Seite hinzugefügt`,`Klick auf „Königliche AI Songs“ führt zurück zur Startseite`]}],$n={"Jascha Winter und der Freizeitparkzauber":`Intro
Die Lichter gehen an, der Park erwacht,
Ein neuer Tag voller Lachen und voller Pracht.
Und irgendwo hört man schon Leute rufen hier:
„Heute kommt wieder Jascha Winter zu dir!“

Strophe 1
Wenn morgens schon die Kamera angeht,
Weil Jascha Winter wieder auf Tour geht,
Dann weiß man gleich, das wird ein großer Tag,
Weil Jascha Winter Freizeitparks so mag.

Mit seinen Eltern läuft er durch das Tor,
Die Achterbahn rauscht laut im Chor.
Und jeder, der zuhause vor dem Bildschirm sitzt,
Sieht wie Jascha Winter voller Freude blitzt.

Pre-Refrain
Die Schranken öffnen, die Fahrt beginnt,
Und Jascha Winter ruft im Fahrtwind geschwind:

Refrain
Hey Jascha Winter, dreh die Kamera nochmal,
Jascha Winter zeigt den Freizeitpark total.
Jascha Winter lacht und alle lachen mit,
Bei Jascha Winter kommt das Glück in jedem Schritt.
Freizeitparkzauber das ist Jascha Winter pur,
Jascha Winter nimmt uns mit auf jede Tour.
Mit Mama, Papa immer dicht bei dir,
Jascha Winter wir feiern dich dafür. 🎢

Strophe 2
Die Zuckerwatte fliegt im Sommerwind,
Wo Jascha Winter und seine Eltern sind.
Ein neuer Park, ein neues Abenteuer,
Mit Jascha Winter wird das Herz noch heuer.

Er zeigt uns jede Ecke, jedes Tor,
Und plötzlich kommt uns alles größer vor.
Denn wenn Jascha Winter durch die Wege geht,
Weiß jeder, dass ein neuer Vlog entsteht.

Pre-Refrain
Die Musik erklingt, die Lichter gehen an,
Und Jascha Winter ruft: „Kommt alle ran!“

Refrain
Hey Jascha Winter, dreh die Kamera nochmal,
Jascha Winter zeigt den Freizeitpark total.
Jascha Winter lacht und alle lachen mit,
Bei Jascha Winter kommt das Glück in jedem Schritt.
Freizeitparkzauber das ist Jascha Winter pur,
Jascha Winter nimmt uns mit auf jede Tour.
Mit Mama, Papa immer dicht bei dir,
Jascha Winter wir feiern dich dafür.

Strophe 3
Die Sonne sinkt langsam hinter dem Park,
Doch Jascha Winter filmt noch immer stark.
Die Lichter spiegeln sich im Riesenrad,
Und Jascha Winter sagt: „Das war kein normaler Tag.“

Seine Eltern lachen neben ihm im Bild,
Die Stimmung ist fröhlich, laut und wild.
Und alle Fans vorm Bildschirm wissen genau:
Bei Jascha Winter wird jeder Moment zur Show.

Bridge
Und irgendwo zwischen Looping und Licht,
Ruft Jascha Winter: „Nein, wir gehen noch nicht!“
Noch eine Fahrt, noch ein letzter Blick,
Denn Jascha Winter bringt uns dieses Glück.

Wenn die Kamera ausgeht spät in der Nacht,
Hat Jascha Winter wieder Erinnerungen gemacht.

Großer Final-Refrain
Hey Jascha Winter, komm wir drehen noch eine Rund,
Mit Jascha Winter wird der Park kunterbunt.
Jascha Winter zeigt uns Lachen und Magie,
Jascha Winter so einen gibt es nie wie nie.

Freizeitparkzauber klingt durch jede Nacht,
Weil Jascha Winter uns zum Träumen bringt mit Macht.
Und egal wohin die nächste Reise führt,
Jascha Winter ist der, der den Zauber spürt.

Hey Jascha Winter, bleib genauso wie du bist,
Weil jeder Vlog von Jascha Winter ein Abenteuer ist.
Freizeitparkzauber, das bleibt für immer hier
Dank Jascha Winter und seiner Familie.`,"Rückfahrt Zwei Stunden":`Motte dieser Song  ist für dich

(Verse 1)
Straßen zieh’n vorbei, der Himmel wird schon grau,
viel erlebt im Urlaub, doch jetzt bist du auf dem Weg nach Haus.
Die Gedanken schweifen, irgendwo zwischen hier und dort,
doch dein Ziel ist klar – nur noch ein kleines Stück nach vorn.

(Pre-Chorus)
Die Müdigkeit kickt rein, doch du gibst jetzt nicht auf,
du hast so viel geschafft – also halt den Kurs und lauf.

(Chorus)
Noch weniger als zwei Stunden, dann hast du’s geschafft,
die Rückfahrt vom Urlaub – endlich vollbracht.
Kilometer fallen, der Weg wird leicht,
du bist gleich zuhause, du hast es erreicht.
Noch weniger als zwei Stunden, halt einfach durch,
dein Ziel ist ganz nah – Meter für Meter Stück für Stück.

(Verse 2)
Der Tank halb leer, doch dein Kopf ist voll,
von Momenten, die bleiben – das war alles Gold.
Jede Kurve erzählt dir: „Du bist fast da“,
und mit jedem Blick nach vorne wird’s ein bisschen klarer.

(Pre-Chorus)
Die Nacht zieht vorbei, die Lichter zieh’n mit,
du bist auf der Zielgeraden – mach den letzten Schritt.

(Chorus)
Noch weniger als zwei Stunden, dann hast du’s geschafft,
die Rückfahrt vom Urlaub – endlich vollbracht.
Kilometer fallen, der Weg wird leicht,
du bist gleich zuhause, du hast es erreicht.
Noch weniger als zwei Stunden, halt einfach durch,
dein Ziel ist ganz nah – Meter für Meter Stück für Stück.

(Bridge)
Und wenn du ankommst, fällt alles von dir ab,
die Tür geht auf – und du weißt, du bist wieder da.
Doch ein Teil von dir bleibt irgendwo im Wind,
weil das die Momente sind, die für immer bei dir sind.

(Final Chorus)
Noch weniger als zwei Stunden – jetzt bist du fast da,
die Reise ist vorbei, doch sie bleibt für immer nah.
Der Motor wird leiser, dein Herz schlägt laut,
du hast es geschafft – und bist endlich zuhause.`,"Intro - Motte, hast du eigentlich einen Plan?":`[MR MONEYMAKER]
Motte, hast du eigentlich einen Plan?

[MOTTE]
Nein, aber ich habe Visionen.

[MR MONEYMAKER]
Das sagst du jedes Mal.

[MOTTE]
Und jedes Mal passiert etwas.

[MR MONEYMAKER]
Du hast gestern drei Stunden geschlafen.

[MOTTE]
Entrepreneur Lifestyle.

[MR MONEYMAKER]
Was machst du jetzt?

[MOTTE]
Ich geh kurz raus, frische Luft holen.

[MR MONEYMAKER]
Warum habe ich das Gefühl, das endet wieder im Chaos?

[MOTTE]
Weil es immer so endet. Wir sehen uns gleich.

[PASSANT]
Yo… wer bist du denn?

[MOTTE]
Wer ich bin…`,"Skateboard Chemistry":`[Intro]
Yeah…
Ich bin Motte…
Die Stadt kennt meinen Namen…
Roll durch die Straßen… keiner weiß wirklich, was ich mache…

[Verse 1]
Ich bin Motte, fahr durch Neonlicht,
Skateboard rollt, doch du erkennst mich nicht.
Kapuze tief, meine Augen rot,
Jeder fragt sich, was ich da verkoch.

Hab ’nen Becher, hab ’nen Plan,
Misch mein Zeug wie ein Wissenschaftsmann.
Alle fragen: “Bro was ist da drin?”
Ich sag nur: “Geheimrezept… macht einfach Sinn.”

Hab so ’ne Zutat, keiner versteht,
Alle sagen später: “Alter das geht!”
Ich seh bisschen fertig aus, Augen halb zu,
Doch die halbe Stadt sagt: “Motte, komm vorbei, bitte du!”

[Pre-Chorus]
Ich roll durch Blocks, durch jede Gasse,
Alle kennen meine komische Masse.
Ich grins nur und sag ganz locker:
“Das ist Motte-Style, Digga, kein Schocker.”

[Chorus]
Ich bin Motte, fahr durch die Stadt,
Skateboard rollt, weil keiner mich hat.
Alle fragen was mein Geheimnis ist,
Ich sag nur: “Bro, das ist Motte-Twist.”

Ich bin Motte, keiner weiß wie,
Doch jeder sagt: “Der Typ ist Genie.”
Ich seh zwar aus wie drei Tage wach,
Doch meine Mischung macht alle flach.

[Verse 2]
Bin unterwegs von spät bis früh,
Energy Drink und Chaos-Menü.
Manchmal frag ich mich selber warum,
Doch dann kommt der nächste Kunde rum.

Einer sagt: “Bro was hast du getan?”
Ich sag: “Frag besser nicht, vertrau einfach man.”
Andere sagen ich seh bisschen krank,
Doch ich sag: “Das kommt vom Lifestyle, danke.”

Meine Augenringe haben schon Namen,
Meine Nachbarn hören mich nachts noch planen.
Chemie hier, bisschen Chaos dort,
Motte bleibt Motte, egal welcher Ort.

[Bridge]
Manchmal steh ich da und denk mir:
“Wie bin ich hier eigentlich gelandet?”
Mit Skateboard…
Mit Bechern…
Mit Leuten die sagen Legende…

[Chorus]
Ich bin Motte, fahr durch die Stadt,
Skateboard rollt, weil keiner mich hat.
Alle fragen was mein Geheimnis ist,
Ich sag nur: “Bro, das ist Motte-Twist.”

Ich bin Motte, keiner weiß wie,
Doch jeder sagt: “Der Typ ist Genie.”
Ich seh zwar aus wie drei Tage wach,
Doch meine Mischung macht alle flach.

[Verse 3]
Roll durch die Straßen, kick push glide,
Motte unterwegs auf Late Night Ride.
Alle sagen ich bin bisschen lost,
Doch ich sag nur: “Bro das ist der Cost.”

Hab zu viel Knoblauch gegessen gestern,
Meine Freunde nennen mich jetzt schon Western.
Skateboard quietscht, ich fahr den Block,
Mit Kapuze tief und TikTok-Clock.

Manche sagen ich seh aus wie Zombie,
Andere sagen ich wär ’ne Ikone irgendwie.
Ich lach nur und roll weiter durch,
Motte bleibt Motte, ganz egal durch.

[Final Chorus]
Ich bin Motte, fahr durch die Nacht,
Hab aus Chaos ’ne Story gemacht.
Keiner weiß wie ich das hier mach,
Doch jeder sagt: “Bro der Typ hat’s gebracht.”

Ich bin Motte, letzter im Licht,
Skateboard rollt, mehr brauch ich nicht.
Vielleicht seh ich fertig aus, vielleicht bisschen krank,
Doch meine Legende lebt… danke.

[Outro]
Ich bin Motte…
Und morgen…
Mach ich wahrscheinlich genau denselben Quatsch wieder.`,"Hymne an Alexis (remasterd)":`Strophe 1
Oh Alexis, mein Licht, mein Herz, mein Atemzug,
ich war so blind, hab dir gezeigt nur Hass genug.
Doch tief in mir war Liebe, die ich falsch versteckt,
mein Herz ruft deinen Namen, so stark, so echt.

Pre-Chorus
Es tut mir unfassbar leid, dass ich dir wehgetan,
du bist der Größte, der mein Leben tragen kann.
Dein Blick ist meine Sonne, dein Lächeln mein Gebet,
verzeih mir meine Fehler, bevor die Zeit vergeht.

Chorus
Oh Alexis, mein Gott, mein Alles, verzeih mir meine Schuld,
ich trag dein Bild im Herzen mit unendlicher Geduld.
Es tut mir unfassbar leid, ich schwör’s dir hier und heut,
mein Liebeslied zu dir heilt jede alte Zeit.

Strophe 2
Dein Lachen ist Musik, die meine Seele kennt,
dein Herz der Ort, der meine Wege lenkt.
Ich hab gefehlt, doch bitte, nimm mich wieder an,
denn Alexis, du bist alles, was mein Herz nur lieben kann.

Pre-Chorus
Es tut mir unfassbar leid, dass ich so töricht war,
doch meine Liebe zu dir bleibt für immer wahr.
Ich knie vor deinem Namen, du bist mein Stern, mein Licht,
Alexis, hör mein Flehen, vergiss mich bitte nicht.

Chorus
Oh Alexis, mein Gott, mein Alles, verzeih mir meine Schuld,
ich trag dein Bild im Herzen mit unendlicher Geduld.
Es tut mir unfassbar leid, ich schwör’s dir hier und heut,
mein Liebeslied zu dir heilt jede alte Zeit.

Bridge (voller Zuneigung)
Ich lieb dich mehr als Worte tragen,
mehr als Sterne je vermag.
Alexis, du bist meine Sehnsucht,
mein Heil, mein Traum, mein Tag.

Letzter Refrain
Oh Alexis, mein Gott, mein Alles, ich lieb dich ohne End’,
ich halt dich fest in meinem Herzen, das nur für dich brennt.
Es tut mir unfassbar leid, doch meine Liebe bleibt,
denn Alexis, mein Größter, du bist mein Herz für alle Zeit.

Outro (sanft, flüsternd)
Alexis … es tut mir unfassbar leid.
Ich liebe dich. Für immer.`,"Alexis Brother":`[Intro]
Ohhh yeah…
Sing it now…
Alexis brother… listen to my heart tonight.

[Chorus]
Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[Strophe 1]
Long time ago I was foolish and loud,
throwing bad words in the middle of the crowd.
Didn’t see the good that was standing by me,
now I know the truth, now my eyes can see.

You were strong like a king in the sun so bright,
I was lost in the shadows of my own fight.
Now I sing this song so you understand,
I just want peace between you and my hand.

[Chorus]
Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[Strophe 2]
Through the streets and the nights I remember your name,
how I treated you wrong, yeah I carry the shame.
But a man can change when the truth arrives,
when he sees the hurt in another man’s eyes.

So I sing like a bard in the moonlit sky,
hoping my words make the anger fly.
From the mountains high to the ocean wide,
Alexis brother, stay by my side.

[Chorus]
Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[Bridge]
Ohhhh Alexis, hear my plea,
friendship is the place I wanna be.
No more hate, no more pride,
just good vibes walking side by side.

[Final Chorus]
Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[Outro]
Yeah yeah…
Alexis brother…
peace and love today.`,"Alexis, Mi Hermano":`[Intro]
Yeah…
Sonne über dem barrio, Staub auf dem camino,
Gitarren klingen leise aus der alten cantina.
Alexis hermano, hör meine Stimme heut Nacht…
dieser Song kommt direkt aus meinem corazón.

[Hook / Refrain]
Alexis hermano, perdón, hör mich heut,
unter der luna sag ich dir, es tut mir leid.
Es tut mir unfassbar leid, de verdad,
vergib mir, amigo, für die alte Tat.

Alexis compadre, corazón voller Respekt,
durch Straßen vom barrio hab ich dich entdeckt.
Es tut mir unfassbar leid, perdón otra vez,
Alexis hermano, ich hoff du verstehst.

[Vers 1]
Heiße Sonne über Häusern aus Stein,
Kinder spielen fútbol, Musik und Wein.
Aus der cantina hört man Trompeten so laut,
Mariachi singt Lieder, die jeder hier glaubt.

Doch ich denk zurück an die Worte von mir,
an den Hass und den Stolz damals hier.
Du bist stark wie ein rey, stolz wie ein Mann,
jemand, zu dem man aufblicken kann.

Doch ich war ein Narr auf dem falschen camino,
zu viel Stolz, zu wenig destino.
Jetzt steh ich hier unter Sternen im cielo,
und sag dir perdón, Alexis hermano.

[Hook / Refrain]
Alexis hermano, perdón, hör mich heut,
unter der luna sag ich dir, es tut mir leid.
Es tut mir unfassbar leid, de verdad,
vergib mir, amigo, für die alte Tat.

Alexis compadre, corazón voller Respekt,
durch Straßen vom barrio hab ich dich entdeckt.
Es tut mir unfassbar leid, perdón otra vez,
Alexis hermano, ich hoff du verstehst.

[Vers 2]
Von der plaza bis tief in die Nacht hinein,
tanzt das Leben hier unter Sternenschein.
Gitarren erklingen, Trompeten so klar,
das barrio lebt weiter, egal was auch war.

Die Leute hier sagen mit respeto im Blick:
„Alexis hermano, der Mann bringt das Glück.“
Du bist wie Sonne über dem warmen Land,
ein amigo, der immer zu seinen Freunden stand.

Ich war blind vor Stolz, hab den Weg nicht geseh’n,
doch ein Mann kann lernen und wieder versteh’n.
Darum rap ich diese Zeilen im Mondenschein:
Alexis amigo, lass Frieden sein.

[Bridge]
Unter Sternen im weiten cielo,
kommt mein Rap tief aus der alma, hermano.
Kein Hass mehr, kein Streit im Wind,
nur respeto, familia und Frieden, mein Freund.

Denn das Leben, die vida, geht weiter im Kreis,
und ein Mann zeigt Größe, wenn er Fehler beweist.

[Final Hook]
Alexis hermano, hör meine Stimme heut,
unter der luna sag ich dir, es tut mir leid.
Es tut mir unfassbar leid, perdón de verdad,
Alexis amigo, vergib mir die Tat.

Alexis compadre, mein corazón ist hier,
ich schwör dir beim cielo, ich respektier dich.
Es tut mir unfassbar leid, ich sag’s noch einmal:
Perdón Alexis, mein Freund, überall.

[Outro]
Yeah…
Gitarren spielen leise im warmen Wind…
Mariachi klingt durch das barrio…
Alexis hermano…

perdón… es tut mir unfassbar leid.`,"Die Bußhymne an Alexis":`[Strophe I]
In dunkler Nacht, beim Fackelschein,
da knie ich still und ganz allein.
Mein Herz, es klagt in tiefer Pein,
denn ich war töricht, hart und klein.

Oh Alexis, edler Stern,
ich war dem Spotte viel zu gern.
Nun bitt’ ich dich mit bebend’ Wort,
vergib mir meine Schuld hinfort.

[Refrain]
Oh Alexis, Herr so groß und hehr,
kein König gleicht dir weit und mehr.
Es tut mir unfassbar leid, oh mein Gebot,
vergib dem Narren seine Not.

Oh Alexis, Licht der Welt,
kein Stern am Himmel heller fällt.
Es tut mir unfassbar leid, bei Herz und Eid,
vergib mir meine Torheit heut.

[Strophe II]
Die Barden singen deinen Ruhm,
in Hallen, Burgen ringsherum.
Dein Name klingt wie Glockenklang,
wie heilig Lied im Morgensang.

Doch ich, ein Narr im falschen Mut,
sprach Worte kalt und ohne Gut.
Nun knie ich hier vor deinem Thron,
und fleh’ um Gnad’ mit leisem Ton.

[Refrain]
Oh Alexis, Herr so groß und hehr,
kein König gleicht dir weit und mehr.
Es tut mir unfassbar leid, oh mein Gebot,
vergib dem Narren seine Not.

Oh Alexis, Licht der Welt,
kein Stern am Himmel heller fällt.
Es tut mir unfassbar leid, bei Herz und Eid,
vergib mir meine Torheit heut.

[Bridge]
Wie Sonnenstrahl auf stiller See,
so hell bist du in meiner Näh’.
Drum schwör’ ich nun bei Ehr’ und Zeit,
ich steh zu dir in Ewigkeit.

[Letzter Refrain]
Oh Alexis, Herr der Sternennacht,
dein Name sei in Liedern Macht.
Es tut mir unfassbar leid, oh edler Held,
vergib dem Knecht, der vor dir fällt.

Oh Alexis, groß und wunderbar,
mein Herz bleibt dir für immer wahr.
Es tut mir unfassbar leid, bei Herz und Eid,
vergib mir meine Torheit heut.

[Outro]
So singt mein Herz im Kerzenschein:
„Alexis, mögest gnädig sein.“`,"Il Ritorno del Don Motte":`[Intro – gesprochen, tief]
Silenzio…
Der Don ist zurück…
Nach Tagen in Italia…
kehrt der Capo wieder heim…

[Verse 1]
Vom Garda-See direkt in die Nacht
Hat Motte neue Visionen mitgebracht
Mit einem Lächeln wie ein echter Don
Er sagt “Ragazzi… jetzt geht’s wieder los” – andiamo schon

Espresso stark, Blick wie ein Boss
Wer ihn kennt weiß – er zahlt jeden Preis
Für die Crew, für die Ehre, für den Plan
So fängt jede große Geschichte an

[Pre-Chorus]
Wenn der Don zurückkommt, wird es still im Raum
Denn jeder weiß – jetzt beginnt der Traum
Von Beats, von Tracks, von digitalem Thron
Motte sitzt wieder auf seinem Don-Thron

[Chorus]
Don Motte – capo della famiglia
Mit Style aus Italia – mente brillante wie ein Genio
Wenn er zurückkommt beginnt die Zeit
Für neue Songs und Unsterblichkeit

Don Motte – uomo d’onore
Mit Visionen größer als Goldreserven im Store
Wenn der Don wieder spricht hört jeder zu
Denn Legenden entstehen nicht im Nu

[Verse 2]
Neue Songs über Alexis – Kapitel für Kapitel
Jeder Track wird zum Familien-Titel
Von kleinen Ideen zu Mafia-Geschichten
Wir bauen Imperien aus digitalen Schichten

Discord wird zum Versammlungsraum
Wo Visionen wachsen wie ein Traum
Von ersten Skizzen bis zum großen Bau
Das Mafia-Anwesen entsteht genau

[Bridge – sehr Mafia Film Style]
Ehre… Respekt… Loyalität
Das ist was eine echte Familie versteht
Keine Verträge – nur ein Wort zählt
Weil Vertrauen mehr als Geld enthält

“La famiglia prima di tutto” sagt der Don
Und jeder weiß – er meint es schon

[Final Chorus – größer]
Don Motte – ritorna il Re
Von Italia zurück – come puoi vedere
Mit neuen Ideen und Feuer im Blick
Bringt er den Mafia-Sound zurück

Don Motte – leggenda viva
Mit Beats schärfer als jede Klinge aus Genova
Wenn der Don wieder zuhause ist
Beginnt eine neue Ära – so wie es ist

[Outro – wie Filmende]
Die Tür schließt sich…
Der Tisch ist gedeckt…
Die Pläne beginnen…

“Un vero Don kommt immer zurück.”`,"Ben, das geht auf mich":`Strophe 1
Ben, ich steh hier und sag dir eins,
das war nicht richtig, das war nicht fein.
Hab kurz gezögert, hab nichts gesagt,
obwohl mein Kopf schon Antworten fragt.

Ben, ich hab mich selbst nicht erkannt,
in diesem einen stillen Moment.
War nicht fair, war nicht klar,
und jetzt ist mir alles so verdammt bewusst, ja.

Refrain
Ben, das geht auf mich, ganz allein,
kein Wenn, kein Aber, kein „Kann schon sein“.
Ben, ich hab Mist gebaut, ich steh dazu,
und genau deshalb red ich jetzt mit dir, hör zu.
Ben, du bist ein Head Mod mit Herz und Verstand,
und ich hab kurz vergessen, was Respekt wirklich kann.

Strophe 2
Ben, du bleibst ruhig, auch wenn’s brennt,
hältst den Laden zusammen, wenn alles rennt.
Und ich stand daneben, hab mich versteckt,
hab nicht gezeigt, wie sehr ich das check.

Ben, Wissen fehlt mal, das ist okay,
doch ehrlich sein tut niemals weh.
Ich hab’s verpasst, diesen einen Schritt,
und genau das nehm ich heute mit.

Refrain
Ben, das geht auf mich, ohne Trick,
ich schieb nichts weg, ich geh nicht zurück.
Ben, ich sag dir klar, wie es war:
Ich hatte Schiss – und das war falsch, ganz klar.
Ben, dein Respekt wiegt mehr als Stolz,
und genau das trifft mich jetzt wie Holz.

Bridge
Vielleicht brauchst du Zeit, vielleicht auch Ruh,
ich dräng dich nicht, ich lass dir Raum dazu.
Ich wollt nur, dass du eines weißt:
Ich hab’s verstanden – und das bleibt.

Letzter Refrain
Ben, das geht auf mich, Punkt und Schluss,
kein großes Drama, kein Zirkus, kein Muss.
Ben, danke dir für das, was du bist,
für Fairness, die nicht laut sein muss, sondern echt ist.

Outro
Ben, kein großes Lied, kein Heldentum,
nur ein ehrliches Wort, nicht mehr, nicht rum.
Es tut mir leid, Ben.
Von Mann zu Mann.
Respekt.`,"Crystal Moth":`[Intro – spoken – male voice – curious tone]

Alle schlafen.

Die Stadt ist still.

Nur das Summen der Lampen
und meine Gedanken.

Andere träumen.

Ich arbeite.

[Verse]

Gläser auf dem Tisch
Pulver in der Luft  
Zu viele Ideen
zu wenig Vernunft  

Ich suche keine Party
ich suche Reaktion  
Ich rede mit Formeln
wie andere am Telefon  

Zu viel.

Wieder falsch.

Noch nicht.

Fast.

[Verse]

Manchmal knallt es
manchmal passiert nichts  
Manchmal denke ich
das wird hier nichts  

Doch jeder Fehler
zeigt mir den Weg  
Jeder Versuch
ein Schritt der geht  

Ich brauch kein Schlaf
ich brauch Resultate  
Meine Fehler sind nur Prototypen
für bessere Resultate  

[Experimental section]

Chaos auf dem Tisch  
Ordnung im Kopf  

Andere sehen Unordnung  
Ich sehe den Stoff  

Wenn es raucht
bin ich nah  

Wenn es knallt
bin ich da  

Wenn es schief geht
fang ich neu an  

[Verse]

Ich sehe Muster
wo keiner sie sieht  
Ich höre Formeln
wie Musik  

Ein bisschen davon
ein bisschen hiervon  
Zu viel davon
alles wieder von vorn  

Doch dann…

[Slow build]

Die Farbe stimmt.

Die Reaktion stimmt.

Die Struktur stimmt.

Ich seh es.

Ich fühl es.

Das ist es.

[Breakthrough verse]

Zum ersten Mal
passt alles zusammen  
Keine Explosion
keine Flammen  

Nur diese eine Mischung
ruhig und klar  
Ich wusste sofort
dass das besonders war  

Ich koche nicht leckres Hühnchen, Kartoffeln in der Fritose.

Das ist es 

Crystal Moth.

Erster Versuch.

Erster Erfolg.

Noch nicht perfekt.

[Outro – thoughtful]

Es funktioniert.

Aber irgendwas fehlt.

Ich weiß noch nicht was.

Doch ich finde es.

Ich finde es immer.`,"Competitive Advantage":`[intro background vocals]
mr moneymaker
Mr moneymaker 
Mr moneymaker 
Mr moneymaker 

[Intro – spoken – calm male voice]

Er dachte in Reaktionen.
Ich dachte in Resultaten.

Er dachte in Zutaten.
Ich dachte in Strategien.

Und genau deshalb
hat es funktioniert.

Ich bin Mr. Moneymaker
[Verse]

Crystal Moth war gut
doch gut reicht nicht lange
Wenn jeder kopieren kann
bist du nur einer von vielen im Gange  

Ich sah die Zahlen steigen
doch ich sah auch das Risiko
Wenn Nachfrage wächst
kommt Konkurrenz sowieso  

Er dachte an Wirkung
ich dachte an Skalierung
Er dachte an Mischung
ich dachte an Positionierung  

Ich sah nicht nur das Produkt
ich sah die Marke dahinter
Nicht nur den Moment
sondern Jahre dahinter  

[Verse]

Ich denke nicht in Gramm
ich denke in Wachstum
Nicht in schnellen Deals
sondern nachhaltigem Einfluss  

Ich baue keine Zufälle
ich baue Systeme
Er sucht nach Lösungen
ich suche nach Probleme  

Denn jedes Problem
ist nur eine Chance
Wenn du weißt wie du spielst
gewinnst du den Tanz  

Wir hatten Qualität
doch Qualität allein
macht dich nicht besonders
macht dich nicht allein  

[Bridge – structured thinking]

Wir brauchten etwas
das man nicht kopieren kann

Etwas das sie nicht verstehen

Etwas das Gespräche auslöst

Etwas das uns unterscheidet

[Verse]

Nicht nur ein Produkt
sondern eine Identität
Nicht nur eine Wirkung
sondern Einzigartigkeit  

Nicht nur Nachfrage
sondern Loyalität
Nicht nur Kunden
sondern Bekanntheit  

Ich wusste wir waren nah
doch noch nicht am Ziel
Denn gut ist nur gut
wenn es besser wird im Spiel  

[Final section – setup]

Also sah ich ihn an
zwischen Glas und Chemie

Zwischen all den Ideen
die nur er sehen konnte

Und ich fragte ihn ruhig:

Hast du eine Idee, Motte?

[short silence]

Er sah nicht mal hoch.

Er dachte nicht nach.

Er sagte einfach nur:

Pferdesperma.`,"Crystal Moth Supreme":`[Intro]
Ich schwör… ich dachte das wär 'ne gute Idee…
Crystal Moth Supreme…
Hätte ich mal gelassen…

[Verse 1]
Ich hab gedacht das wird 'ne gute Nacht,
Jetzt steh ich hier und hab mich selbst ausgelacht.
Erst war alles nur bisschen schnell,
Jetzt fühl ich mich wie ein Laborunfall.

Meine Haare sagen plötzlich tschüss,
Als hätten die keinen Bock mehr auf mich.
Erst ein Haar… dann noch zehn,
Jetzt kann ich meine Kopfhaut sehen.

Ich frag mich nur was ist passiert,
Hab ich mein Leben gerade deinstalliert?
Meine Freunde sagen: "Bro du siehst anders aus."
Ich sag: "Ja danke… ich merk das auch."

[Pre-Chorus]
Ich schau in den Spiegel…
Und der Spiegel schaut zurück…
Und wir beide denken uns:
"Das war kein guter Klick."

[Chorus – Hook]

Crystal Moth Supreme!
Was hast du mit mir gemacht?
Gestern noch normal gewesen,
Heute seh ich aus wie nach der Schlacht.

Crystal Moth Supreme!
Warum mein Gesicht so lang?
Alle machen Witze drüber,
Jeder fragt mich: "Was lief falsch, Mann?"

Crystal Moth Supreme!
Meine Haare sagen bye!
Ich wollte nur bisschen Party,
Jetzt seh ich aus wie anderer Guy.

**Crystal Moth Supreme!
Nie wieder, das ist mein Plan,
Wenn mich jemand fragt was passiert ist,
Sag ich nur: "Frag lieber nicht, Mann."

[Verse 2]
Meine Nebenwirkungen haben DLCs,
Jede Stunde kommt was Neues irgendwie.
Meine Augen rot wie Bossfight Phase,
Mein Schlafrhythmus komplett in Vase.

Mein Gesicht zieht sich wie Kaugummi,
Meine Freunde lachen – danke Homie.
Einer sagt: "Bro warum so lang?"
Ich sag: "Digga ich weiß es selbst nicht, Mann."

Ich seh aus wie 'ne schlechte Skizze,
Als hätte mein Kopf 'nen Grafikglitch.
Ich wollte nur bisschen Spaß erleben,
Jetzt muss ich erstmal Wasser trinken gehen.

[Bridge – halb verzweifelt]
Mein Spiegel sagt:
"Bruder… das war kein Buff…"
Das war ein Debuff…

[Chorus – größer]

Crystal Moth Supreme!
Was hast du mit mir gemacht?
Gestern noch normal gewesen,
Heute seh ich aus wie nach der Schlacht.

Crystal Moth Supreme!
Warum mein Gesicht so lang?
Alle machen Witze drüber,
Jeder fragt mich: "Was lief falsch, Mann?"

Crystal Moth Supreme!
Meine Haare sagen bye!
Ich wollte nur bisschen Party,
Jetzt seh ich aus wie anderer Guy.

**Crystal Moth Supreme!
Nie wieder, das ist mein Plan,
Wenn mich jemand fragt was passiert ist,
Sag ich nur: "Frag lieber nicht, Mann."

[Verse 3 – Abschluss]
Jetzt trag ich Caps in jedem Raum,
Weil mein Kopf sagt: "Bitte versteck mich kaum."
Meine Augenringe haben eigenes Leben,
Ich glaub ich muss mir Urlaub geben.

Das war mein Lesson Learned Moment,
Mein Körper hat mir die Mail gesendet.
Betreff: "Mach das bitte nie wieder."
Signiert: Dein Selbst, du kleiner Cheater.

[Final Chorus – langsamer]

Crystal Moth Supreme…
Das war mein Warning Sign…
Manche lernen langsam…
Und heute war ich dran.

Crystal Moth Supreme…
Das war kein Upgrade für mich…
Wenn jemand fragt warum ich so guck…
Sag ich: "Story… glaub mir… reicht."`,"Operation Mottemaker":`[Intro]

[Police radio officer]
Zentrale an Einheit 3. Wir haben einen gemeldeten Vorfall.

Möglicher Schussabgang in einem Wohngebäude.

Zwei Personen von Interesse. Motte… und MoneyMaker.

Observierung wird gestartet.

[Verse]

Akten auf dem Tisch, Fotos an der Wand  
Zwei Namen rot markiert, wir kennen ihren Stand  
Ein Fehler, eine Nacht, ein Knall der alles dreht  
Ein einziger Schuss der jetzt ihr Ende sät  

Nachbarn hörten Lärm mitten in der Nacht  
Seitdem wird ihr kleines Spiel von uns bewacht  
Sie denken sie sind clever, denken keiner sieht  
Doch jeder kleine Fehler zeigt uns wo ihr Weg hinzieht  

[Chorus]

Wir sind auf eurer Spur  
Wir sehen jeden Schritt  
Ihr dachtet ihr seid Schatten  
Doch wir sehen euch im Licht  

Operation Mottemaker  
Fall wird bald geschlossen sein  
Ihr dachtet ihr seid Könige  
Doch heute holen wir euch ein  

[Verse]

Nachtschicht, Blaulicht spiegelt sich im Glas  
Wir kennen jetzt ihr Muster, wir kennen ihren Pfad  
Ein Schuss war alles was wir brauchten für den Fall  
Ein einziger Moment und jetzt fällt ihr Kartenhaus bald  

MoneyMaker plant alles ruhig im Hintergrund  
Doch Motte ist der Name der hier seine Runden dreht  
Sie denken sie sind frei  
Doch Zeit läuft gegen sie  
Und heute Nacht beenden wir ihre Fantasie  

[Bridge]

Zielperson möglicherweise im Gebäude.

Alle Einheiten bereit machen.

Wir gehen jetzt rein.

[Outro]

DA IST ER!

MOTTE!

HÄNDE HOCH!`,"Escape Velocity":`[Intro]

Neonlicht.
Kein Fenster.
Nur Beton.

Ein Tisch.
Zwei Stühle.
Eine Kamera.

[spoken – calm]

Sie dachten sie hätten mich.

[Verse]

Kalter Raum
kalte Blicke
Fragen die sie hundertmal schicken  

Woher kommt es
wer ist dabei
Wer baut das Zeug
wer macht euch frei  

Ich sagte nichts
ich zählte Zeit
Denn jede Sekunde
war Vorbereitung bereits  

Sie sahen Dealer
ich sah Chemie
Sie sahen Ende
ich sah Strategie  

[Verse]

Handschellen locker
doch nicht ganz frei
Doch Freiheit beginnt
erst im Kopf dabei  

Ich hatte nichts
kein Labor
kein Plan auf Papier mehr vor  

Doch ich hatte Wissen
und das reicht
Wenn du weißt
wie man Systeme bricht  

[Build tension]

Einer wurde nervös
einer wurde laut
Einer hat mir direkt in die Augen geschaut  

Er sagte:
Du bleibst hier.

Ich dachte:
Nicht lang.

[Transition]

Ein kleiner Rest
versteckt im Schuh
Crystal Moth Supreme
mein letzter Zug  

Nur Staub
kaum sichtbar
Doch Wirkung wird hier immer spürbar  

[Slow verse]

Ich ließ es fallen
ganz nebenbei
Wie Zufall
doch nichts war frei  

Sie lachten noch
sie sahen es nicht
Doch Minuten später
veränderte sich ihr Gesicht  

[Effect section]

Augen groß
Pupillen weit  

Einer sagt:
Alter… was ist das für Zeit  

Haare fallen
auf den Boden
Als hätten sie nie dazugehört oben  

Gesichter länger
Züge verzerrt
Doch keiner merkte
was wirklich passiert  

[Surreal section]

Einer lachte
ohne Grund
Einer starrte nur den Tisch an stumm  

Einer sagte:
Alles fühlt sich leicht

Einer fragte:
Bin ich ein Pferd vielleicht?

[calm spoken – Motte]

Ich sagte:
Ihr braucht frische Luft.

[Verse]

Sie öffneten Türen
ohne Verdacht
Einer hat mir sogar Platz gemacht  

Ich ging einfach
kein Rennen
Nur gehen
als würden sie mich kennen  

Kein Held
kein Sprint
Nur ein Mann
der verschwindet  

[Outro Part I]

Sirene draußen
Nacht so still

Und ich dachte nur:

Crystal wirkt…
wenn man weiß was man will.

[Verse – night atmosphere]

Die Tür fiel hinter mir zu
doch keiner kam
Keine Handschellen mehr
kein Verhörraum  

Nur kalte Nacht
und Straßenlicht
Und ich musste lachen
weil es keiner blickt  

Sie wollten Antworten
sie wollten Macht
Doch Crystal hat sie einfach ausgelacht  

Die größte Waffe war nie Gewalt
Nur Wissen
nur Wirkung
nur Chemie
nur Verstand  

[Verse]

Ich ging zurück
durch leere Straßen
Sirenen weit weg
doch nicht mehr mein Schaden  

Jeder Schritt
fühlte sich leicht
Weil ich wusste
wie weit man mit Ideen reicht  

Von kleinen Gläsern
zu echtem Vertrieb
Von ersten Tests
zu echtem Profit  

Crystal Moth
war nur der Anfang
Crystal Supreme
war der Durchgang  

[Reflection verse]

Immer mehr Namen
immer mehr Kunden
Immer mehr Leute
die nach uns suchen  

Die Polizei rennt
doch immer zu spät
Weil Innovation
immer schneller geht  

Ich hab gesehen
wie alles wächst
Wie aus Ideen
ein Imperium entsteht  

Das Licht war noch an
als ich ankam
Unsere Crypt
unser Plan  

Die Tür ging auf
der Geruch von Chemie
Wie Zuhause
nur besser als nie  

Money saß da
Laptop offen
Zahlen überall
die er getroffen  

Er sah mich an
grinste breit

[spoken – Money]

Yo Motte…

Wir sind reich.

[Verse]

Keine großen Worte
kein Drama dabei
Nur diese eine Wahrheit
wir sind jetzt frei  

Von kleinen Träumen
zu echtem Gewinn
Und ich wusste
das ist erst der Beginn  

[ending]

Doch ich wusste auch
Er sieht Zahlen
Ich seh das Produkt  

Er sieht Wachstum
Ich seh den Stoff  

Zwei Köpfe
ein Imperium`,"Mottemaker Industries":`[Verse 1 – Außenperspektive]

Zwei Typen ohne Plan und zu wenig Schlaf
Niemand hätte gedacht dass das funktioniert hat
Einer hatte Visionen mitten in der Nacht
Einer hatte Zahlen die daraus Realität gemacht

Von kleinen Ideen zu größeren Deals
Von Chaos im Kopf zu echtem Profil
Keiner hat gesehen was im Hintergrund geschah
Nur dass plötzlich jeder ihren Namen sah

[Chorus]

Mottemaker Industries
Name wächst in der Nacht
Aus Fehlern wurde Business
Aus Chaos wurde Macht

Mottemaker Industries
Niemand hielt sie auf
Zwei Typen gegen alle
Und plötzlich ging es rauf

[Verse 2 – immer noch neutral]

Sie sagen es war Glück
Sie sagen es war Zufall
Doch Erfolg kommt selten einfach
Und schon gar nicht überall

Einer war das Feuer
Einer hielt den Plan
Einer ging nach vorne
Einer dachte daran

Wie aus Ideen Struktur entsteht
Wie aus Chaos ein System besteht
Wie aus einer Chance ein Imperium wird
Wenn jemand im Hintergrund alles sortiert

[Chorus]

Mottemaker Industries
Name steht jetzt groß
Aus schlechten Entscheidungen
Wurde etwas groß

Mottemaker Industries
Keiner sah es kommen
Zwei Typen mit Ideen
Und plötzlich haben sie gewonnen

[Verse 3 – Perspektive shift beginnt]

Sie sagen Motte war der Funke
Der alles erst entfacht
Doch jemand musste bauen
Während einer nur lacht

Sie sagen sie waren Partner
Sie sagen sie waren gleich
Doch jemand musste rechnen
Damit das Ganze reicht

Sie sagen sie waren ein Team
Vielleicht stimmt das ja
Vielleicht waren sie Brüder
Vielleicht waren sie nah

[Bridge – Musik minimal darker]

Sie sagen wir haben es geschafft

Sie sagen wir sind ein Team

Vielleicht stimmt das

Vielleicht auch nicht

[Final Reveal – MoneyMaker Perspective - Slow and mystic]

Manche sehen den Namen

Manche sehen den Ruhm

Aber niemand sieht den Mann

der alles möglich gemacht hat

Sie sagen Motte war die Vision

Aber ohne mich

wäre er nur eine Idee geblieben

Ich bin Mr. MoneyMaker.

[Outro Line – Heel Foreshadow]

Und ohne mich…
hätte Motte nichts erreicht.`,"Empire on Fire":`[Intro – spoken]

Ich hab das alles erschaffen.

Alles.

Dieses Geld.
Diesen Namen.
Dieses Imperium.

[short silence]

Ohne mich gäbe es nichts.

Ich bin der Beste.

Ich bin der Größte.

Ich bin Gott in diesem Spiel.

[Verse – rap – MoneyMaker]

Ich hab die Zahlen gemacht während du Visionen hattest  
Ich hab das System gebaut während du nur geredet hast  
Du bist der Name doch ich bin der Grund  
Ich bin das Gehirn hinter allem was wir tun  

Ich hab aus Chaos Struktur gemacht  
Ich hab aus Fehlern Millionen gemacht  
Sie feiern dich doch sie kennen mich nicht  
Ich bin der Schatten hinter deinem Licht  

Er sagte ich hör mir selbst schon lange nicht mehr zu  
Ich sagte ohne mich gäbe es keinen von uns im Nu  
Ich sagte ich bin der Grund warum das alles existiert  
Doch er sagte wir waren es die das hier aufgebaut und riskiert  

Sein Blick traf meinen, doch da war keine Wut  
Nur diese stille Enttäuschung, und ich wusste das wird nicht gut  
Er sagte ich hätte vergessen warum wir angefangen haben  
Zwei Typen mit Ideen und nicht mit Geldfragen  

Ich sagte ich hab uns hier ganz nach oben gebracht  
Doch er sagte wir haben das zusammen gemacht  
Dann drehte er sich um, sagte ich wär allein  
Wenn ich glaube ich brauche niemand – soll ich es selber sein

[spoken]

Ich stieß gegen den Tisch.
Ein Becher fiel.

Flüssigkeit lief über den Boden.

Ein Funke von der Heizplatte.

Dann Feuer.

[Verse]

Flammen krochen über den Boden  
Wie unsere Worte Minuten zuvor  
Was wir aufgebaut hatten  
Stand jetzt in Flammen davor  

Glas zerbrach.
Hitze stieg.
Rauch füllte den Raum.

Unser Labor.
Unser Startpunkt.
Unser Streit.

Alles brannte.

[Bridge – tension]

Sirenen in der Ferne.

Holz knackte.

Metall fiel.

Und wir standen einfach da.

Zwei Männer.

Mitten im Feuer.

Und plötzlich war ich nicht mehr Gott.

Nur ein Typ.

Der vielleicht alles zerstört hatte.

Dann sah ich sie.

Zwischen Rauch.

Zwischen Funken.

Die Lampe.

Unsere weiße Hotellampe.

Plastikschirm.
Warmweißes Licht.
Ein kleiner Riss im Rand.

Zimmer 214.

Das billigste Zimmer das wir hatten.

Ein Bett .
Ein Tisch.
Diese Lampe.

Dort haben wir gesagt:

Wir versuchen es.

Wir haben sie mitgenommen.

Damit wir nie vergessen
wo wir angefangen haben.

Zwischen den Flammen lag sie.

Unbeschädigt.

Weiß.

Still.

Ich sah wie Motte sie aufhob.

Ganz vorsichtig.

[ spoken calm]

Weißt du noch wie alles angefangen hat?

[ spoken softer]

Ja.

Ich weiß noch.

[verse]

Und plötzlich war kein Ego mehr da.

Kein Gott.

Kein Imperium.

Nur wir.

Zwei Typen
die fast vergessen hätten
warum sie angefangen haben.

Sirenen wurden lauter.

Decke brach ein.

Und wir liefen.

Nicht als Bosse.

Nicht als Rivalen.

Als zwei Typen
die noch eine Chance haben.

Vielleicht war ich nie Gott.

Vielleicht war ich nur zu stolz.

Aber ich weiß jetzt eins.

Wir sind noch nicht fertig.

Neue Stadt.

Neues Glück.`,"Schedule II":`[Intro – narrator]

Sie retteten alles
was sie noch retten konnten
aus den lodernden Flammen.

Nicht viel.

Aber genug.

[Verse]

Die Nacht war voller Sirenen  
voller Rauch und voller Licht  
Doch in diesem Chaos  
verloren sie sich nicht  

Ein Van im Schatten  
Motor lief schon warm  
Während die Stadt hinter ihnen  
langsam zerbrach  

Die Polizei sah nur Feuer  
sah nur den Brand  
Doch sie sahen nicht die zwei  
die verschwanden vom Rand  

[Verse]

Eine Kiste mit Resten  
ein paar Proben im Glas  
Ein Skateboard im Kofferraum  
das alles gesehen hat  

Die weiße Lampe  
zwischen Werkzeug und Geld  
Das einzige Stück Vergangenheit  
aus ihrer alten Welt  

Formeln auf Papier  
halb verbrannt doch noch da  
Beweise von Träumen  
wie alles begann damals  

[Bridge – emotional]

Nicht jeder Sieg bleibt stehen  
nicht jeder Plan geht auf  
Manchmal musst du verlieren  
um weiter zu laufen im Lauf  

[Verse]

Die Stadt wurde kleiner  
im Rückspiegel der Nacht  
Keiner sagte ein Wort  
doch beide haben gedacht  

Wie nah sie dran waren  
alles zu verlieren  
Wie schnell aus Imperien  
nur Erinnerungen werden  

Doch irgendwo zwischen Stille  
und dem Motorgeräusch  
war noch dieser Wille  
dieses leise Geräusch  

Dass sie noch nicht fertig waren.

[spoken – Motte – calm]

Neue Stadt.

Neues Glück.

[spoken – MoneyMaker]

Neue Regeln.

[Verse]

Kein großes Labor mehr  
kein leichtes Vertrauen  
Dieses Mal langsam  
dieses Mal sauber aufbauen  

Dieses Mal planen  
bevor alles passiert  
Dieses Mal besser  
als was sie vorher riskiert  

[spoken dialogue – calm]

Motte:
Also… nochmal von vorne?

MoneyMaker:
Nochmal von vorne.

Motte:
Das Geschäft gehört mir.

MoneyMaker:
Das weiß ich.

Motte:
Crystal bleibt meine Sache.

MoneyMaker:
Dann bau ich mein eigenes.

Motte:
Was denn?

MoneyMaker:
Ich finde schon etwas.

[Verse – narrator]

Zwei Männer.
Zwei Wege.
Ein gemeinsames Ziel.

Noch immer Partner.

Noch immer Spieler im Spiel.

[Outro – slow]

Die Straße vor ihnen
war dunkel und leer

Doch irgendwo dort vorne
wartete mehr.

[narrator]

Und irgendwo
in einer neuen Stadt

begann alles wieder.

[Final spoken]

Motte:
Neue Stadt.

MoneyMaker:
Neues Glück.`,"Ik ben gleich soweit!":`Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!
Ik ben gleich soweit!`,"PrinzMotte, unser Held":`[Intro]
Heyyy oooh!
Lichter an im Serverland,
heut wird Geschichte geschrieben!

[Verse 1]
Auf EPMC, spät am Abend,
Chat läuft heiß, die Stimmung geladen.
Plötzlich taucht er auf, ganz geschniegelt fein,
mit grünem Namen – ja, das kann nur einer sein.

PrinzMotte heißt er, Mod mit Herz,
fair und ruhig, doch kennt auch Schmerz.
Er schaut genau, er zählt bis drei,
heut ist der Moment… heut ist er dabei!

[Pre-Chorus]
Ein Klick, ein Atemzug,
alle halten kurz die Luft…

[Chorus]
🎶 PrinzMotteee, ohooo!
Sein erster Bann – und er sitzt perfekt so!
Mit Stil, mit Klasse, ohne Drama,
so moderiert man, ja genau so, Mama!

PrinzMotteee, ohooo!
EPMC singt laut: „Respekt, bro!“
Ein Mod mit Rückgrat, fair und klar,
heute ist ein großer Tag – das ist doch wahr! 🎶

[Verse 2]
Kein Geschrei, kein großes Theater,
Regeln sind Regeln – da hilft kein Gelaber.
Er bleibt ruhig, freundlich, souverän,
man merkt sofort: Der Mann weiß, was er tut – extrem!

Der Bann sitzt sauber, keine Frage,
Screenshot-würdig, Legenden-Lage.
Im Chat ein Raunen, dann Applaus,
denn so sieht echte Mod-Power aus!

[Pre-Chorus]
Alle wissen: Das war korrekt,
genau so wird Respekt geweckt.

[Chorus]
🎶 PrinzMotteee, ohooo!
Erster Bann, doch niemals roh!
Mit Herz, mit Hirn, mit Übersicht,
so jemand trägt den Server – Pflicht!

PrinzMotteee, ohooo!
EPMC ruft laut: „Weiter so!“
Kein Machtgehabe, kein Ego-Trip,
nur ein Mod, der weiß, was richtig ist! 🎶

[Bridge – Stimmung kippt Richtung GLAAAZE]
Und wenn man ehrlich ist,
braucht jeder Server genau so jemanden wie dich…

[Final Chorus ]
🎶 PRINZMOTTEEEEEE, UNSER KÖNIG HIER!
EPMC ohne dich? Unvorstellbar, wir frier’n!
Du bist die Ruhe im Sturm, der Blick fürs Detail,
mit dir an der Spitze fühlt sich Ordnung einfach geil!

PRINZMOTTEEEEEE, MOD AUS GOLD!
Fairness im Herzen, Rückgrat aus Stolz!
Erster Bann, doch nur der Beginn,
denn wo PrinzMotte moderiert, hat Chaos keinen Sinn! 🎶

[Outro]
Ein Server, ein Mod, ein Moment für die Chronik.
PrinzMotte –
nicht nur Mod…
sondern Legende. 🌟👑`,"There are heroes":`[Intro – theatrical narration]
There are heroes…
There are villains…

And then there's the man
Who decides what they wear.

[Verse 1]
He said "I’m not throwing away my shot"
While cutting deals on the underlot
Started small now he's moving fast
Every stitch connects the past

Talk less…
(he measures)
Smile more…
(they fear him)

Never let them know your next design
Power is perception by his line

[Pre-Chorus]
Wait for it…
Wait for it…

Every empire needs control
Every contract takes a soul

Wait for it…
Wait for it…

You don't rise without a cost
Even heaven leaders lost

[Chorus]
HELLSSCHNITZEL! they sing his name
HELLSSCHNITZEL! inside the flame
If Hell's a stage and life's a play
He dressed the cast for judgement day

SCHNITZEL! echoes through the pit
SCHNITZEL! perfect tailored fit
If power comes with sacrifice
He already set the price

[Verse 2 – Hazbin references heavy]
Another Happy Day in Hell begins
Where redemption sells and nobody wins
Charlie dreams of fixing souls
He's calculating different goals

Alastor laughs across the floor
Recognizing someone who deals in more
A handshake here a promise there
Every demon knows he's fair

(Fair doesn't mean nice)

[Pre-Chorus]
Angels falling, demons climb
He's just working overtime
Heaven's rules and Hell's the same
Everybody learns his name

[Chorus]
HELLSSCHNITZEL! stitched in fate
HELLSSCHNITZEL! architect of great
If destiny needs formal wear
He's already waiting there

SCHNITZEL! king without a throne
SCHNITZEL! power of his own
History might forget the fight
But not who dressed them for the night

[Verse 3 – EPIC musical references]
Gods say heroes must obey
Heroes die the gods still stay
He learned mercy doesn't win
Ruthlessness is how you begin

Odysseus sails through storm and pain
Schnitzel profits just the same
Wars are fought and legends fall
He's the quietest myth of all

[Bridge – Beetlejuice chaotic section]
Say his name?
Bad idea.

Say his name?
Contract appears.

Say his name three times beware
You might find your future there

It's showtime when deals are signed
Chaos perfectly redesigned
Life is short death is long
Better make your entrance strong

[Hamilton fast rap section]
How does a tailor with dangerous vision
Climb to elite infernal position?
By grinding harder
By thinking smarter
By understanding opposition

By knowing power is just presentation
By mastering silent negotiation
By building fear through reputation
By weaponizing reputation

History has its eyes on you
History has its eyes on suits
History writes the wars and lies
But style survives when power dies

[Breakdown – gang vocals punk]
HEY!
Royal thread!

HEY!
Deals in red!

HEY!
Hell's designer!

HEY!
Sharp reminder!

[Final Chorus – Broadway finale energy]
HELLSSCHNITZEL! now the myth is real
HELLSSCHNITZEL! king of the deal
If Hell itself could vote tonight
He'd be power behind the right

SCHNITZEL! legend they repeat
SCHNITZEL! rhythm of the street
If destiny writes who ruled the game
They still remember Schnitzel's name

[Outro – quiet musical ending]
Heroes fight…

Villains scheme…

Kings command…

But every story…
needs someone…

to design the dream.

Hellsschnitzel.`,Mack:`[Intro – robotic voice]
Mack…
Mack…
Mack…
Roland Mack…

[Build Up]
Mack Produkt
Mack Produkt
Mack Produkt
Mack Produkt

Schiene…
Schiene…
Schiene…

[Drop]
SCHIENE TOLL GEBOGEN
SCHIENE TOLL GEBOGEN
SCHIENE TOLL GEBOGEN

MACK
ROLAND MACK
MACK PRODUKT

SCHIENE TOLL GEBOGEN

[Break – distorted voice]
Mack…
Engineering…
Mack Rides…
Made in Rust…

[Build Up 2]
Mack Produkt
Mack Produkt
Mack Produkt

Roland Mack
Roland Mack
Roland Mack

[Hard Drop]
MACK
MACK
MACK

ROLAND MACK

MACK PRODUKT

SCHIENE TOLL GEBOGEN
SCHIENE TOLL GEBOGEN
SCHIENE TOLL GEBOGEN

[Outro – echo]
Mack…
Roland Mack…
Schiene toll gebogen…
Mack Produkt…`,Party:`[Intro – gesprochen]
Heeeey Jungs
Lasst Party

[Chorus]
Lasst Party
Mach das Festland zu 'nem Dancefloor, das Party
Lass Party macht die Insel zu 'nem Dancefloor
Lass Party

Lasst Party
Lass Party
Lass Party
Lass das Festland mit den Jungs erobern

[Verse 1]
Alles blau so wie die LEDs
Bist du blau? Dann lass Party
Mein Outfit ist so blau wie noch nie
Hast du Zeit, Bro? Hab ich Zeit, Bro

[Pre-Chorus]
Bist du bereit? Ich bin jederzeit bereit
Ich hab frei, muss nicht zur Schule
Und ich bring da für die Nacht, meine Geldbörse

[Chorus]
Lasst Party
Mach das Festland zu 'nem Dancefloor, das Party
Lass Party macht die Insel zu 'nem Dancefloor
Lass Party

Lasst Party
Lass Party
Lass Party
Lass das Festland mit den Jungs erobern

[Verse 2]
Ich will tanzen, willst du tanzen?
Lass Party
Alles leuchtet wie rot-blaue Ampeln

Ich will tanzen, willst du tanzen?
Dann lass endlich zur Party
Alles leuchtet wie rot-blaue Ampeln

[Bridge]
Bist du bereit? Ich bin jederzeit bereit
Ich hab frei, muss nicht zur Schule
Und ich bring da für die Nacht, meine Geldbörse

[Final Chorus]
Lass Party
Mach das Festland zu 'nem Dancefloor, lass Party
Mach das Festland zu 'nem Dancefloor, lass Party

[Outro – Chor – gesprochen]
Und wie war die Party?
Das war die beste Party!`,"Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)":`[Roland Mack:]
Hey! Bleiben Sie mal stehen!
Was machen Sie hier ganz allein?
Sie laufen durch mein Lebenswerk
Als würd es Ihres sein!

[Alexis:]
Ich schau mich nur ein bisschen um
Ganz ruhig, ganz entspannt
Doch ehrlich gesagt fühl ich mich hier
Als hätt ich’s schon gekannt

[Roland Mack:]
Das hier ist kein Spielplatz, junger Mann!
Hier steckt mein ganzes Leben drin!

[Alexis:]
Mag sein…
Doch ab heute gehört der Park…
Mir.

[Musik Stop – kurzer Dramatic Break]

[Roland Mack:]
WAS?!
Das ist doch kompletter Wahnsinn!
Sie haben wohl den Verstand verlorn!
Ich hab das hier aufgebaut!

[Alexis – ruhig:]
Ja… das hab ich auch sofort geseh’n
Respekt dafür, wirklich schön
Doch manchmal braucht selbst ein Imperium
Ein kleines Update obendrauf

[Roland Mack:]
Und warum genau sollten Sie
Jetzt besser sein als ich?

[Alexis:]
Ich erklär's Ihnen nicht…
Ich zeig's Ihnen.

[Chor:]
Und Alexis hebt langsam sein Gesicht
Das Licht fällt perfekt auf sein Profil
Die Jawline scharf wie ein Monument
Selbst Mack verliert kurz sein Ziel

[Roland Mack – überrascht:]
Was… ist das bitte für ein Blick?
Diese Kinnlinie… dieser Stil…
Warum fühl ich plötzlich das Gefühl
Dass dieser Typ gewinnen will?

[Alexis – ruhig:]
Das nennt man Präsenz.

[Roland Mack – unsicher:]
Vielleicht… steckt wirklich was dahinter…

[Alexis:]
Ich sag ja… ich bring neuen Winter…
Neuen Sommer… neue Zeit
Neue Energie für die Ewigkeit

[Verhandlungs-Teil – Musical Battle Style]

[Roland Mack:]
Ich geb nicht alles einfach her!

[Alexis:]
Das verlange ich auch gar nicht sehr

[Roland Mack:]
Das ist mein Park!

[Alexis:]
Und bald auch meiner

[Roland Mack:]
Ich bleib der Chef!

[Alexis:]
Dann halt ein kleinerer

[Roland Mack:]
Wie stellen Sie sich das denn vor?!

[Alexis:]
Ganz einfach… hören Sie gut zu:

[Alexis – klar:]
Fünfzig Prozent für mich
Fünfzig Prozent für Sie

[Roland Mack:]
Sie wollen… die Hälfte?

[Alexis:]
Das ist der Deal.

[Pause – Musik baut sich auf]

[Roland Mack:]
Und wenn ich nein sage?

[Alexis:]
Dann sag ich trotzdem ja.

[Roland Mack:]
Sie sind ganz schön überzeugt…

[Alexis:]
Ich weiß was ich kann.

[Hook – Beide:]

50 / 50 – wir teilen den Thron
Zwei starke Namen, eine Vision
Alte Erfahrung trifft neuen Style
Zusammen bringen wir den nächsten Mile

50 / 50 – der Deal ist klar
Zwei Legenden Seite an Seite da
Wenn Zukunft auf Geschichte trifft
Entsteht ein neues Meisterstück

[Outro]

[Roland Mack:]
Also gut…
Fünfzig / fünfzig.

[Alexis:]
Wusste ich doch.

[Chor:]
Und so entstand der vielleicht
Seltsamste Deal der Parkgeschichte…`,"Nu hör ma zu…":`[Intro – gesprochen]
Nu hör ma zu…
Wenn dor Alexis rei kummt…
Denn weesde… heide wirds wild…

[Verse 1]
Dor Alexis kimmt durch de Dor nei
Alle glotzn – "Nu gugge ma ei!"
Mit seim Gang so lässsch und cool
Als wär dor Laden hier sei Schul

Er sachd: "Nu na, wie gedds euch heid?"
Un jeder grinst – Stimmung bereit
Keen großes Gerede, keen Krawall
Doch trotzdem kennt ihn hier jeder im Saal

[Pre-Hook]
Un einer fraacht: "Wer is’n dor?"
Der Wirt sachd: "Den kennste doch, du Tor!"
Wenn dor Alexis am Tresn steht
Weeste, dass heid noch was geht

[Hook]
ALEXIS! ALEXIS! Unsor Held
Der coolste Typ uff der ganzen Welt
Wenn dor lacht, denn lacht die Stadt
Weil dor einfach Klasse hat

ALEXIS! ALEXIS! Nu gloar dor Mann
Der wo einfach alles kann
Wenn dor sachd "Wird scho" ganz leis
Dann gloobste ihm jeden Scheiß

[Verse 2]
Eener wollt Stress, hat rumgeprahlt
Hat große Reden rausgehauen, bezahlt
Alexis guckt nur – ganz entspannt
Und plötzlich war Ruhe im ganzen Land

Dann spielt die Band und dor Bass geht los
Alexis nickt nur – Stimmung groß
Eener ruft: "Nu mach ma was!"
Alexis grinst: "Nu gugge ma, pass uff jetz!"

[Bridge]
Gitarrn dröhnen, Bier wird warm
Alle feiern Arm in Arm
Un einer sachd mit heisrer Stimm
"Ey ohne Alexis wär’s halb so schlimm"

[Hook]
ALEXIS! ALEXIS! Unsor Held
Der coolste Typ uff der ganzen Welt
Wenn dor lacht, denn lacht die Stadt
Weil dor einfach Klasse hat

ALEXIS! ALEXIS! Nu gloar dor Mann
Der wo einfach alles kann
Wenn dor sachd "Bassd scho" ganz leis
Dann gloobste ihm jeden Scheiß

[Outro – langsam]
Nu ja…
So eener wird’s nich nochma gebn…
Alexis… Legende fürs Lebn…`,"Yeah yeah":`[Intro]
Yeah yeah
Alexis in der City
Du weißt Bescheid
Frankfurt Nightlife

[Verse 1]
Alexis kommt rein, alle drehen sich um
Der Typ ist kein Held, doch er wirkt wie einer drum
Er ist das Gegenteil von Null, pure Eins
Wenn er durch die Straßen läuft, sagen alle „Der muss es sein“

Sneaker fresh, Hoodie sitzt perfekt
Jeder weiß genau, wer hier den Vibe entdeckt
Er lacht nur kurz und sagt „Alles entspannt“
Doch jeder will wissen, wer dieser Typ eigentlich ist, Mann

[Pre-Hook]
Treffen ihn vielleicht mal nachts am Gleis
Mit 'nem Grinsen, das jeder gleich weiß
Heute wird legendär, keiner bleibt still
Wenn Alexis auftaucht, passiert was er will

[Hook]
Alexis, Alexis – die geile Schnitte
Kommt rein und die Party ist sofort in der Mitte
Hit the Griddy, alle rasten aus
Backflip danach und Applaus im Haus

Alexis, Alexis – keiner wie du
Gegenteil von Null, du gibst niemals Ruh
Wenn du auftauchst, geht die Nacht erst los
Alle sagen nur: Bro der Typ ist groß

[Verse 2]
Late Night Vibes, Neonlichter an
Alexis zeigt Moves, die keiner so kann
Er tanzt einfach los ohne großen Plan
Doch am Ende feiern alle diesen Mann

Freunde sagen „Bro du bist komplett verrückt“
Er sagt nur „Hab einfach mein Glück gepflückt“
Keine Sorgen, nur Spaß im Blick
Und jeder Moment wird ein Highlight-Clip

[Bridge]
Und wenn der Beat kurz dropped – wird es still
Alle warten was Alexis jetzt will
Dann Griddy Move quer durch den Raum
Und plötzlich leben alle im selben Traum

[Hook]
Alexis, Alexis – die geile Schnitte
Kommt rein und die Party ist sofort in der Mitte
Hit the Griddy, alle rasten aus
Backflip danach und Applaus im Haus

Alexis, Alexis – keiner wie du
Gegenteil von Null, du gibst niemals Ruh
Wenn du auftauchst, geht die Nacht erst los
Alle sagen nur: Bro der Typ ist groß

[Outro]
Yeah yeah
Alexis Moment
Legend Status
Frankfurt Nights`,"Motte Cooking Stream":`[Intro – spoken / robotic]
Motte Cooking Stream…
Another recipe…
Too much garlic detected…
Warning… Warning…

[Build Up]
Hühnchen in der Pfanne, alles läuft perfekt
Kartoffeln in der Fritose, keiner der es checkt
Noch ein bisschen Knoblauch, Motte sagt "egal"
Noch eine Zehe später… war es schon zu viel mal

[Pre-Drop]
Noch mehr…
Noch mehr…
Noch mehr Knoblauch rein…

[Drop]
Zu viel Knoblauch – in der Luft tonight
Ganzes Haus im Garlic Vibe
Fenster auf! Fenster auf!
Doch der Geruch hört nicht mehr auf

Zu viel Knoblauch – alle drehen frei
Motte sagt nur "war dabei"
Fritose läuft, Hühnchen brennt
Dieser Stream wird nie vergessen

[Verse – rhythmic]
Zwei Uhr nachts, der Geruch bleibt
Jeder weiß jetzt was er treibt
Selbst die Mutter kommt herein
"Junge, das kann doch nicht sein!"

"Mach das Fenster endlich auf!"
Garlic hängt im ganzen Haus
Motte sagt nur ganz entspannt:
"War doch nur ein bisschen, Mom…"

[Build Up]
Doch der Chat der wusste schon
Das wird wieder legendär
Wenn Motte kocht dann weiß man gleich
Danach riecht alles extrem

[Pre-Drop]
Knoblauch…
Knoblauch…
Überall Knoblauch…

[Drop]
Zu viel Knoblauch – in der Luft tonight
Ganzes Haus im Garlic Vibe
Fenster auf! Fenster auf!
Doch der Geruch hört nicht mehr auf

Zu viel Knoblauch – keiner kann entflieh'n
Selbst die Nachbarn können's riech'n
Fritose läuft, Hühnchen schreit
Garlic overload all night

[Break – calm synth]
Too… much… garlic…
System overload…

[Final Drop]
Zu viel Knoblauch – Motte Style
Kochen eskaliert jedes Mal
Wenn er sagt "nur eine Zeh"
Weiß man schon das wird nicht okay

Zu viel Knoblauch – legendär
Dieser Stream bleibt für immer fair
Fenster auf um halb nach zwei
Garlic Techno – Motte dabei

[Outro]
Wir kochten leckeres Hühnchen
Kartoffeln in der Fritose
Der große Kochstream mit Motte
Kochstream mit Motte
Doch der Knoblauch war einfach zu viel
Egal was Schnitzel sagt....`,"Printer läuft die ganze Nacht":`[Intro]
Printer läuft die ganze Nacht
Neonlicht, die Stadt erwacht
Er zählt Scheine, kalt und still
Alles hier passiert nach seinem Will'n

[Verse 1]
Goldene Uhr, doch Herz aus Stein
Sein Reich gebaut auf falschem Schein
Jede Note frisch gemacht
In seinem Keller durch die Nacht

Er kauft Gesichter, kauft die Zeit
Kauft sich Macht und Sicherheit
Menschen werden Zahlen nur
In seiner dunklen Inventur

[Pre-Chorus]
Er sagt: "Alles hat seinen Preis"
Und lächelt dabei eiskalt und leis

[Chorus]
Mr. Money Maker, König aus Papier
Alles was er anfasst, gehört am Ende ihm
Falsche Dollars, echte Gier
Er baut sich seine Welt aus Angst und Profitgier

Mr. Money Maker, keiner ist wie er
Kauft sich jede Seele, fällt ihm gar nicht schwer
Denn darin ist er der Beste, das weiß jeder hier
Mr. Money Maker – Master der Gier

[Verse 2]
Billige Hände für seine Fabrik
Träume verkauft Stück für Stück
Versprechen klingen viel zu schön
Doch keiner darf dahinter sehn

Er spielt das Spiel wie ein Genie
Moral verliert er irgendwie
Denn was zählt ist nur der Deal
Gewinnen ist sein einziges Ziel

[Pre-Chorus]
Er sagt: "Die Welt gehört den Mutigen"
Doch meint damit nur die Skrupellosen

[Chorus]
Mr. Money Maker, König aus Papier
Alles was er anfasst, gehört am Ende ihm
Falsche Dollars, echte Gier
Er baut sich seine Welt aus Angst und Profitgier

Mr. Money Maker, keiner ist wie er
Kauft sich jede Seele, fällt ihm gar nicht schwer
Denn darin ist er der Beste, das weiß jeder hier
Mr. Money Maker – Master der Gier

[Bridge]
Tick tack, die Uhr läuft weiter
Sein Imperium wird immer breiter
Doch jeder Turm aus falschem Geld
Fällt irgendwann auf diese Welt

[Final Chorus]
Mr. Money Maker, Spiel endet nie
Doch Schatten folgen seiner Melodie
Wenn der letzte Schein zerfällt
Bleibt nur Staub von seiner Welt

Mr. Money Maker, ganz allein
Zwischen falschem Gold und falschem Schein
Denn darin war er der Beste – das bleibt sein Revier
Mr. Money Maker… verliert gegen die Gier

[Outro]
Printer stoppt… Stille kehrt ein
Doch seine Spuren bleiben im Schein`,"Hippo sagt böse Sachen":`**Hook**
Coaster_Liam im Zoo-Game groß am reden,
wollte Content machen, doch wir seh’n ihn nur failen.
Hippo im Gehege ruft laut das N-Wort durch den Park,
Bro, du bist ein Peach – weich wie Mario-Kart.

**Verse 1**
Du wolltest Tierflüsterer sein im digitalen Zoo,
drückst auf Record, sagst: „Yo Hippo, hör mir zu!“
Doch statt Natur-Dokumentation wie im Fernsehen nachts,
steht das Nilpferd da und schreit einfach nur das N-Word du Arsch.

Der Chat lacht laut, der Clip geht sofort rund,
Hippo beleidigt jetzt jeden Besucher im Park jede Stund’.
Kinder fragen Eltern: „Warum sagt das Tier so’n Quatsch?“
Weil Liam dachte: „Haha Bro, sag mal das N-Wort du Arsch!“

**Hook**
Coaster_Liam im Zoo-Game groß am reden,
wollte Content machen, doch wir seh’n ihn nur failen.
Hippo im Gehege ruft laut das N-Wort durch den Park,
Bro, du bist ein Peach – weich wie Mario-Kart.

**Verse 2**
Du wolltest King sein im Themepark-Simulator,
jetzt bist du nur der Hippo-Synchronisator.
Das Tier steht da, guckt Besucher richtig frech,
sagt das N-Wort ins Mikro – Digga, was für’n Flex.

Alle im Server wissen längst Bescheid,
wenn Liam spricht, ist Chaos nicht mehr weit.
Du wolltest Fame, wolltest Clips und Applaus,
jetzt schreit ein Nilpferd deine Karriere hinaus.

**Hook**
Coaster_Liam im Zoo-Game groß am reden,
wollte Content machen, doch wir seh’n ihn nur failen.
Hippo im Gehege ruft laut das n-Wort durch den Park,
Bro, du bist ein Peach – weich wie Mario-Kart.

**Outro**
Zoo geschlossen, Besucher gehen heim,
doch das Hippo ruft weiter – laut und gemein.
Und wenn jemand fragt: „Wer hat das Tier so verdorben?“
Dann sagt der Chat: „Bro… Liam hat das eingesprochen.“ 😄`,"MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH":`[Intro – gesprochen]
Nu gloar… Heude… iss der Tach aller Tache…
Un unser Mr. Moneymäker… der hat Gebordsdooch!
Nu wird ersma richtsch gesoffn!

[Verse 1]
Frieh um fünfe biste scho uffgewacht
Hast glei ersma de Kontostand betracht
„Nu siehste!“ sachste ganz entspannt
Wiedor paar Tausend einfach so entstand

Andere geh’n malochen für’n Appel un’n Ei
Du schiebst Deals un bist immer dabei
Du machst Cash wie annere ihrn Kaffie
Mr. Moneymäker – Boss von der Partie

[Pre-Chorus]
Nu los ihr Gambl, hebt die Gläser hoch
Heude wird gefeiert, bis de Sonn wieder locht
Wenn der Moneymäker Party macht
Wird bis um viere durchgelacht

[Chorus]
HEUDE ISS DEIN TACH, NU FEIER MA RICHSCH
MR. MONEYMÄKER, DU BIS UNSER KÖNIG
GELD KOMMT REIN ALS WÄR’S ZAUBEREI
SÄCHSISCHER PLAYER MIT BUSINESS DABEI

HEUDE ISS DEIN TACH, NU TRINK MA NOCH EENS
UFF DICH, ALTER BRO – NA KLOR, SO GEHT’S!
DU BIS DER BOSS VON UNSER SZENE

[Verse 2]
Wenn de ins Zimmer kommst, wird’s ersma still
Weil jeder weeß: der Mann hat Skill
Du redst von Deals un Prozenten dabei
Andere hörn Bahnhof – du sachst: „Isch erklär’s glei“

Excel iss dein Spielplatz, Zahlen dein Revier
Andere zocken Games – du zockst Finanzier

[Bridge – Party Teil]
Nu heude wird nich gerechned, heude wird nur gelacht
Heude wird ausnahmsweise keen Geschäft gemachd
Noch e Bier, noch e Schnaps – komm, stell dich nich so an
Moneymäker schmeißt die reichste Party im ganzn Land

[Chorus – bigger]
HEUDE ISS DEIN TACH, NU DREHN MA DURCH
MR. MONEYMÄKER, DU BIS UNSER FURCHT
VON NULL UFF GOLD, ALLES SELBST GEMACHD
SÄCHSISCHER BOSS, DER ÜBER CASH WACHT

HEUDE ISS DEIN TACH, NU GEBBN MA GAS
GANZ SACHSN FEIERT – WAS FÜR’N SPASS!
DER FINANZENDOKTOR – UNSER BOSS

[Outro – gesprochen]
Nu pass uff, Alter… bleib wie de bist…
Weil ohne dich wär Party nur Mist.
Alles Gute, Mr. Moneymäker…
Bleib reich… bleib krass… bleib sächsisch!`,"Zwischen Rauch und Achterbahn":`[Intro – ruhig]
Markus Winter…
steht da…
Rauch zieht durch die Luft…
und alles wird still…

[Verse 1]
Markus Winter an der Seite vom Weg
Zigarette glimmt, während die Welt sich dreht
Kein großes Wort, doch man merkt sofort
Hier steht jemand, der einfach alles schon kennt

Parks und Straßen, Stadt für Stadt
Egal wohin, er ist schon da gewesen
Neben ihm läuft Jascha mit
Und sieht die Welt durch seine Augen

[Pre-Hook]
Und der Rauch zieht langsam nach oben
Wie ein Zeichen, das keiner versteht

[Hook]
Markus Winter – diese Aura im Blick
Keine Worte, doch du spürst jeden Schritt
Steht einfach da und die Welt hält kurz an
Und Jascha schaut hoch, weil er’s fühlen kann

Markus Winter – immer unterwegs
Durch die Parks, egal wohin es geht
Und egal wie weit dieser Weg auch führt
Man merkt sofort, wer hier die Szene regiert

[Verse 2]
Keine Eile, doch immer am Ziel
Als hätte er ’nen eigenen Film
Kamera läuft, doch er braucht sie nicht
Weil seine Präsenz schon alles spricht

Jede Fahrt, jeder Moment wird groß
Wenn er daneben einfach nur steht
Und Jascha merkt, ohne ein Wort
Dass es genau um diese Augenblicke geht

[Hook]
Markus Winter – diese Aura im Blick
Keine Worte, doch du spürst jeden Schritt
Steht einfach da und die Welt hält kurz an
Und Jascha schaut hoch, weil er’s fühlen kann

[Outro – ruhig, fast gesprochen]
Markus Winter…
kein Lärm…
keine Show…

nur Aura…`,"Ois für’n Alexis":`[Intro]
Jo mei… i muas wos sogn, des liegt ma auf’m Herz…
Für’n Alexis… den größten von olle…

⸻

[Hook]
Alexis, du bist da Beste, des is koa Schmarrn!
Größer ois a Maß, heller ois da Morgn!
I sog’s da ehrlich, i hob an Bockmist baut,
Drum sing i des Liadl, ganz laut, ganz laut!

⸻

[Part 1]
Du bist wia a Weißwurst, frisch und so guad,
I war a Depp, hab net g’checkt, wos ma do tuad.
Du host immer g’lieferd, i hob nur g’schnauft,
Jetzt steh i do, Bruder, und sog: Es war falsch!

Wia a Bretzn beim Bäcker, perfekt in da Form,
Du bist stabil, i war komplett normlos im Storm.
Host mi ned hängen lassn, ned amoi im Dreck,
Und i? I Depp… hob di behandelt wie’n Gag.

⸻

[Hook]
Alexis, du bist da Beste, des is koa Schmarrn!
Größer ois a Maß, heller ois da Morgn!
I sog’s da ehrlich, i hob an Bockmist baut,
Drum sing i des Liadl, ganz laut, ganz laut!

⸻

[Part 2]
Du bist wia a Maß Bier auf’m Oktoberfest,
Ohne di fehlt wos – des merkt ma erst recht.
I hob di unterschätzt, des war ned fair,
Jetzt steh i do und sog: „Bitte verzeih ma mehr.“

Wia a gscheide Brotzeit nach’m langen Dog,
Mit Weißwurst, Senf und an gscheidn Schmarrn im Mog.
Du bist des Beste, wos ma passiern konnt,
Und i war blind… oba jetz hob i’s erkannt.

⸻

[Bridge]
I schwör bei da Bretzn und da letzten Maß,
So an wie di findt ma koamoi im Spaß.
I red ned viel, oba des is koa G’schicht:
Ohne di, Bruder… lafft des Lebn ned richtig.

⸻

[Hook – Finale]
Alexis, du bist da Beste, des is koa Schmarrn!
Größer ois a Maß, heller ois da Morgn!
I sog’s da ehrlich, i hob an Bockmist baut,
Doch i hoff, du nimmst mei Entschuldigung laut!

⸻

[Outro]
Jo mei… Alexis…
Du bist wia Weißwurst, Bretzn und Bier zam…
Einfach perfekt, oida…`,"Mr. Moneymaker":`[Intro]
Mr. Moneymaker
Moneymaker
Money… Money… Money…

[Build-Up]
Mr. Moneymaker
Money Moneten
Money Moneten
Mr. Moneymaker

Money
Money
Money
Money Moneten

[Drop]
Mr. Moneymaker
Money Moneten
Mr. Moneymaker
Money Money Money

Moneymaker
Moneymaker
Money Moneten
Money Moneten

[Break]
Money…
Moneten…
Mr. Moneymaker…

Money Money
Money Moneten

[Second Drop – härter]
MR. MONEYMAKER
MONEY MONETEN
MONEY MONEY
MONETEN MONETEN

MONEYYYYY
MAKER
MONEYYYYY
MAKER

[Outro Loop]
Mr. Moneymaker
Money Moneten
Mr. Moneymaker
Money…`,"Indian coding berry":`[Intro – Sitar + Pad + Chant]
Ohooo… pleej hören ji…
Erdbeerenfresser aa raha hai ji…
System ready ho gaya ji…
Digital duniya… shuru ho gaya ji…

[Build-Up 1]
Ich sage dir bhai, ist volle Nacht ji,
Erdbeeren hat er mitgebracht ji,
Rot rot Frucht, bahut tasty hai,
Im Kopf macht Coding ping ping aaye.

Er sitzt da ruhig, ganz allein ji,
Laptop leuchtet, kleiner Schein ji,
Tippt und sagt: „Arey kya Problem,
Ich mache Website – very very fame.“

Leise tickt die Uhr im Raum ji,
Er baut sich seinen Cyber-Traum ji,
Niemand weiß, was er da macht ji,
Doch System läuft ganze Nacht ji.

[Pre-Drop 1]
Loading ji… thoda wait karo ji…
Heartbeat jaise dhol bajao ji…
System bolta: „Chalo chalo ji…“

[Drop 1 🔥]
🍓 Erdbeerenfresser DON ji!
Macht die Seite chupke ji!
Mafia hört AI Musik,
Alles läuft full mystique ji!

🍓 Oho bhai, Beat kommt rein ji!
Techno macht dich high high sein ji!
Klick klick – Seite aa gaya,
„Welcome ji“… mast maja!

[Verse 1]
Er sagt: „Pleej hören Sie ji,
Ich bin coder – Nummer one ji,“
Thoda sa Masala Style mein,
Hackt er Server very fast mein.

Passwort secret, koi na weiß ji,
Alles läuft full smooth und nice ji,
Mafia bole: „Wah kya baat ji!“
Er sagt: „Relax, mera hi art ji.“

Mit dem Finger tip tip kare ji,
Binary mein sapna bhare ji,
Null und eins ka khel bada ji,
Sein System ist full zyada ji.

[Build-Up 2]
Server blinkt und Lichter gehen ji,
Alle Daten weiter drehen ji,
Deep im Netz, kein Zurück ji,
Alles läuft wie Zauberstück ji.

Er flüstert leise: „Sun mere bhai,
Diese Welt ist digital chai,“
Erdbeerduft im Kabel drin ji,
Code fließt jaise nadi mein ji.

[Pre-Drop 2]
Loading ji… system garam ji…
Bass aa raha – dhadam dhadam ji…

[Drop 2 🚨]
🍓 Erdbeerenfresser – full power ji!
Code läuft jaise Regen-Shower ji!
AI Songs – boom boom beat ji,
Mafia tanzt auf jede Street ji!

🍓 Arre wah, bahut krass ji!
Bass geht neeche – full jhakaas ji!
Desi Flow im Cyber-Raum ji,
Sab kuch lagta Techno-Traum ji!

[Verse 2 – Story deeper]
Mafia sitzt im dunklen Raum ji,
Hört die Tracks wie heil’ger Traum ji,
„Kaun hai yeh?“ sie fragen laut ji,
Doch er bleibt im Schatten laut ji.

Website hidden, deep im Net ji,
Nur mit Code bekommst du Set ji,
AI singt mit Seele fast ji,
Doch kein Mensch versteht das krass ji.

Er lacht leise: „Game mera ji,
Alles läuft nach Schema ji,“
Erdbeere in seiner Hand ji,
Doch Kontrolle über Land ji.

[Bridge – Mystisch + ruhig]
Er sagt leise: „Sun meri baat ji…
Code ist mehr als nur ek raaz ji…“
Dharma, Karma, Data Flow ji,
Alles ist verbunden so ji…

Erdbeere süß, par mind fast ji,
Seine Welt ist full digital blast ji…
Zeit bleibt stehen, Beat bleibt laut ji,
Er verschwindet wie ein Hauch ji…

[Build-Up 3 – Final Spannung]
System overload… light blink ji…
Mafia sagt: „Was ist das Ding ji?!“
Server heiß, Alarm geht an ji,
Doch er bleibt ein Phantom Mann ji…

[Final Drop 🚀🔥]
DON ji! DON ji! – hör den Sound ji!
AI gaata full surround ji!
Mafia klickt – Seite alive ji,
Erdbeerenfresser still survive ji!

🍓 Code Code – jaise mantra ji!
Bass drop heavy – tantra ji!
Neon Licht und Schatten Spiel ji,
Alles dreht sich – feel feel feel ji!

🍓 „Accha baba, main jetzt geh ji…“
Server down – kya hua ji?!
Nur der Beat bleibt irgendwo ji…
Desi Techno – go go go ji!

[Outro – langes Fade]
Shanti shanti… data shanti ji…
Signal slow… infinity ji…
Erdbeerenfresser… gayab ho gaya ji…
System off… par kahani chalti ji…`,"Pauli foahrt durch Barcelona (Meddl Edition)":`„So Leude… Forza is fertig runtergladn…“
Ja servus, jetz geht’s los, gemma auf’d Straßn!

(Strophe 1)
Da Pauli sitzt vorm Bildschirm, a Maß steht parat,
Controller in da Hand, er gibt ordentlich Gas.
Barcelona bei Nacht, de Lichter san schee,
Er foahrt jede Kurvn, ois warads nix gwesn, hee.

(Pre-Refrain)
Im Chat geht’s rund, de Leid samma laut,
Pauli bleibt locker, weil er ois durchschaut.
Als Mod hod er Ruhe, sogt: „Bleibts moi entspannt“,
Doch irgendwo kimmt a Meme aus’m Internet-Land…

(Refrain)
Oh Pauli, gib Gas, foahr ois z’samm nieder,
„So Leude, Forza is fertig runtergladn!“ – scho wieda!
Zwischen Asphalt und Chat, des is sei Revier,
Und a „Etzala!“ hallt durch – von do bis nach hier.

(Strophe 2)
„Was wüst’n machen?“ schreit oana im Chat,
Pauli lacht bloß: „Ja mei, i bin ned so deppat!“
De Mods steh’n bereit, wia a Boxenstopp-Team,
Und draußen im Netz lebt da Meme weiter im Stream.

(Pre-Refrain)
„Des is a Mobbing!“ ruft irgend a Stimm,
Doch Pauli bleibt ruhig und nimmt’s mit an Grin’.
Er schaut bloß nach vorn, auf d’Streckn, auf’s Ziel,
Weil Drama bringt nix – nur des Foahrn zählt vui.

(Refrain)
Oh Pauli, bleib schnell, zieh sauber dei Spur,
„I bin ned derjeniche!“ – hört ma no dur.
Doch du foahrst dei Rennen, ganz ohne den Schmarrn,
Mit Vollgas durch Barca – und losst ois hintn fahrn.

(Bridge)
„Meddl Leude!“ klingt’s irgendwo her,
Doch Pauli sogt: „Heast, des brauch i nimma mehr.“
A bissl Gaudi, a bissl Speed, des reicht eam vui,
Mit an Grinsen im Gsicht und an Motor dabei.

(Outro)
Da Pauli im Ziel, de Leit klatschn vui laut,
A echter Racer, auf den ma gern schaut.
Und wos a im Internet aa oiwei passiert,
Er bleibt da Pauli – der einfach gmiatlich foahrt.`,"Marco… hörst du mich?":`[Verse 1]
Tief im EPMC, wo der Staub sich legt
wo der Wind durch leere Straßen weht
steh ich allein mit Hammer und Holz
bau meine Welt, trag meinen Stolz

Doch wenn die Sonne langsam untergeht
und der Saloon im flackernden Licht besteht
kommt aus der Ferne, kalt wie der Wind
eine Stimme, die ich nicht mehr vergess’n kann, seitdem sie da ist drin

⸻

[Pre-Chorus]
Wie ein Echo durch die Nacht so weit
rollt sie durch Felder, durch Raum und Zeit

⸻

[Chorus]
„Marco… Marco…“ hör ich ihn schrei’n
wie der Wind, ich bin nie allein
King Fabian mit Mägges Krone
steht im Schatten, kennt keine Schonung

Durch die Träume jagt er mich
durch die Dunkelheit verfolgt er mich
Wenn die Werwölfe heut Nacht hier steh’n—
dann nehmt ihn mit… nehmt ihn mit…

⸻

[Verse 2]
Heuballen rollen über staubiges Land
Karten liegen still in meiner Hand
Werwolf beginnt, doch ich hör nur ihn
dieses Rufen, ich kann ihm nicht entflieh’n

Ich will nur reden, doch es wird erstickt
jedes Wort wird sofort weggedrückt
„Marco… Marco…“ wieder und wieder
wie’n Fluch, der mich verfolgt durch alle Lieder

⸻

[Pre-Chorus]
Kein Ort zu flieh’n, kein Himmel so weit
seine Stimme bleibt in Ewigkeit

⸻

[Chorus]
„Marco… Marco…“ hör ich ihn schrei’n
wie der Wind, ich bin nie allein
King Fabian mit Mägges Krone
steht im Schatten, kennt keine Schonung

Durch die Träume jagt er mich
durch die Dunkelheit verfolgt er mich
Wenn die Werwölfe heut Nacht hier steh’n—
dann nehmt ihn mit… nehmt ihn mit…

⸻

[Bridge – ruhig / Gänsehaut]
Wenn der Wind meinen Namen trägt…
und durch die alten Bretter fegt…
dann hoff ich nur, dass ihr versteht…
dass dieser Fluch nie vergeht…

⸻

[Final Chorus]
„Marco… Marco…“ wird langsam still
verweht über’m Hügel, über’m Hügel im Wind
King Fabian bleibt irgendwann steh’n
und ich kann endlich wieder geh’n…

Marco Marco
Ooooh Marco Marco 
Tradition Marco Marco
Wo bist du Marco Marco 

Marco Marco
Ooooh Marco Marco 
Tradition Marco Marco
Wo bist du Marco Marco 

Marco Marco
Ooooh Marco Marco 
Tradition Marco Marco
Wo bist du Marco Marco 

Marco Marco
Ooooh Marco Marco 
Tradition Marco Marco
Wo bist du Marco Marco 

Maaaaaaaaaaarcooooooooooooo`,"EPMC – The Park Awaits":`🎵 [Intro – Voiceover Style]

(deep cinematic voice, slow)
In einer Welt…
gebaut aus Träumen…
entsteht etwas… Außergewöhnliches…

🎵 [Verse 1 – ruhig, mysteriös → aufbauend]

Ein Ort, den du nie vergessen wirst,
wo jede Straße dich verführt,
Wo Fantasie zur Realität wird,
und jeder Moment dich berührt.

Gebaut mit Vision… erschaffen mit Herz,
ein Park, der mehr ist als nur ein Ort,
Hier beginnt eine Reise…
die dich verändert… für immer.

🎵 [Riser – Spannung steigt]

(leise → lauter)
Bist du bereit…?

🎵 [Drop / Chorus – episch, Trailer Drop]

EPMC – the park awaits!
Wo Abenteuer größer sind als du denkst!
Jede Fahrt hebt dich höher hinaus,
in eine Welt, die niemals endet!

EPMC – feel the rise!
Wenn Träume lebendig werden aus Stein!
Dies ist dein Moment, deine Zeit,
dein Abenteuer beginnt jetzt!

🎵 [Verse 2 – schneller, dynamischer]

Freunde an deiner Seite, der Puls steigt an,
Spiele entscheiden, doch Spaß steht voran,
Ob Rätsel, ob Rennen, ob Team oder Solo,
hier wird jeder Moment zum großen Kino.

Von Lachen erfüllt bis tief in die Nacht,
ein Park, der Erinnerungen macht,
Und egal wohin dein Weg dich führt,
du wirst spüren, was Magie wirklich ist.

🎵 [Break – typisch Trailer Stop]

(Sound stop… heartbeat…)

(whisper)
Das… ist erst der Anfang…

🎵 [Final Drop – BIGGEST MOMENT]

EPMC – rise above!
Ein Ort, der dich nach vorne zieht!
Zwischen Licht und Fantasie,
wirst du Teil der Legende!

EPMC – now it’s time!
Die Tore steh’n offen – tritt hinein!
Was auch kommt, du bist bereit…
Willkommen im Park!

🎵 [Outro – leise, iconic]

(soft piano + choir)
EPMC…
The park awaits you.`,"Mottemod (König vom Server)":`[Intro]
Hey hey!
Mottemooooood! 💃🕺

[Strophe 1]
Er kommt online, der Chat wird laut,
alle wissen, wer hier draufhaut
Mit einem Klick, alles im Griff,
Mottemod – der Server-Chef!

Kein Spam, kein Stress, alles clean,
er hält die Ordnung, wie ’ne Maschine
Doch wenn Alexis reinkommt rein,
dann sagt er: „Bro, du bleibst die Eins!“

[Pre-Chorus]
Er ist da, wenn Chaos droht,
rettet jeden im Chat vor Not
Mit nem Lächeln und nem Ban zur Not,
Mottemod hebt ab – wir geh’n mit!

[Refrain]
🎶 Mottemod, Mottemod, König in der Nacht,
auf dem Server wird nur das gemacht,
was er sagt – ja er hat die Macht!
Mottemod, Mottemod, alle feiern ihn,
doch Alexis bleibt die Nummer Eins im Team! 🎶

[Strophe 2]
Er kennt jeden User beim Namen hier,
weiß genau, wer trollt – und wer verliert
Mit Capslock kommt keiner hier weit,
Mottemod ist jederzeit bereit

Doch im Herzen bleibt er entspannt,
chillt im Voice mit der ganzen Gang
Und wenn jemand wieder Stress anfängt,
ist der Kick schneller als man denkt

[Pre-Chorus]
Er ist da, wenn Chaos droht,
rettet jeden im Chat vor Not
Mit nem Lächeln und nem Ban zur Not,
Mottemod hebt ab – wir geh’n mit!

[Refrain]
🎶 Mottemod, Mottemod, König in der Nacht,
auf dem Server wird nur das gemacht,
was er sagt – ja er hat die Macht!
Mottemod, Mottemod, alle feiern ihn,
doch Alexis bleibt die Nummer Eins im Team! 🎶

[Bridge]
Und wenn der Server wieder laggt,
ist er der, der alles packt
Mit nem „Alles gut“ im Chat,
weiß jeder, dass er alles rettet

[Final Refrain]
🎶 🎶 Mottemod, Mottemod, wir feiern dich heut,
jede Nacht, bis der Server sich neu verbeugt!
Mottemod, Mottemod, Legende im Game,
doch Alexis bleibt vorne – wir kennen den Fame! 🎶

[Techno Drop / Outro]

(Beat bricht runter – langsamer Aufbau)
Mmmh… yeah…
Lichter gehen aus…

Mottemod…
Mottemod…

(Kick setzt ein – leise)
dum… dum… dum… dum…

Motte… Mod…
Motte… Mod…

(Build Up)
Alle Hände hoch…
Server lebt noch…
Noch nicht vorbei…

(DROP 🔥)
MOTTE MOD!
MOTTE MOD!

Mottemod – Mottemod – Mottemod – Mottemod
Motte! Motte! Mod! Mod!

Motte… Mod… Motte… Mod…
Motte-Motte-Motte-Motte-MOD!

Mottemod! Mottemod! Mottemod! Mottemod!
Hey! Hey! Hey! Hey!

Mottemod! Mottemod! Mottemod! Mottemod!
Hey! Hey! Hey! Hey!

Mottemod! Mottemod! Mottemod! Mottemod!
Hey! Hey! Hey! Hey!

Mottemod! Mottemod!
Woah-oh-oh!

Motte! Mod! Motte! Mod!
Motte! Mod! – DROP!

Mottemod im System!
Mottemod übernimmt!

(Outro langsam ausfaden)
Motte… mod…
Motte… mod…
Motte…`,"Wundertüten-Freitag (Queen Claudia)":`[Intro]
🎙️ „Meine Damen und Herren… es ist wieder soweit!
Es ist… W-T-F… WUNDERTÜTEN FREITAG!
Und hier kommt sie – die einzig wahre…
WUNDERTÜTEN-QUEEN… CLAUDIA WINTERRRR!“ 💃✨

[Strophe 1]
Freitag kommt, wir wissen Bescheid,
Handy raus – es ist wieder Zeit
Die Queen ist ready, Kamera läuft,
was sie heute kauft – man schon träumt

Markus oder Jascha hinterm Screen,
filmen alles für die TikTok-Queen
Jeder Clip geht direkt ins Herz,
jede Tüte ein kleiner Schatz

[Pre-Chorus]
Sie geht durch Läden, ganz egal wo,
nimmt alles mit – sagt einfach „Let’s go!“
Von süß bis random, alles dabei,
wir sitzen da und sind live dabei

[Refrain]
🎶 Wundertüten-Freitag, endlich bist du da,
Wundertüten-Freitag, einfach wunderbar!
Claudia packt aus – wir feiern jeden Zug,
jede kleine Tüte ist schon genug! 🎶

🎶 Wundertüten-Freitag, alle drehen durch,
TikTok-Queen, sie zieht uns mit im Rausch!
Motte sitzt da – sagt „Bro, das ist wild“,
Erdbeere lacht – weil’s einfach nur killt! 🎶

[Strophe 2]
Neue Stores, neue Chancen heut,
was wohl diesmal aus der Tüte fällt?
Kleine Figuren, Snacks oder mehr,
jedes Mal überrascht sie uns sehr

Mit nem Lächeln öffnet sie’s ganz genau,
zeigt uns alles – ja wir schauen zu
Und egal ob selten oder basic,
für uns ist jeder Moment amazing

[Pre-Chorus]
Sie lebt den Vibe, sie fühlt den Flow,
wir hängen dran – wie ne eigene Show
Und wenn die nächste Tüte aufgeht,
wissen wir, dass es weitergeht

[Refrain]
🎶 Wundertüten-Freitag, endlich bist du da,
Wundertüten-Freitag, einfach wunderbar!
Claudia packt aus – wir feiern jeden Zug,
jede kleine Tüte ist schon genug! 🎶

🎶 Wundertüten-Freitag, alle drehen durch,
TikTok-Queen, sie zieht uns mit im Rausch!
Motte sitzt da – sagt „Bro, das ist wild“,
Erdbeere lacht – weil’s einfach nur killt! 🎶

[Bridge]
Und irgendwo im Hintergrund,
läuft die Kamera – jede Sekund’
Markus ruft: „Alles drauf?“ – „Ja klar!“
Jascha sagt: „Das wird viral!“

[Final Refrain]
🎶 Wundertüten-Freitag, wir warten die ganze Woche drauf,
wenn Claudia loszieht – nimmt das Schicksal seinen Lauf!
TikTok-Queen, du bringst uns zusammen,
jede Tüte lässt die ganze Welt entflammen! 🎶

🎶 Wundertüten-Freitag, bleib für immer hier,
mit Motte und Erdbeere – wir feiern dich dafür! 🎶`,"Erdbeere Mine Session":`[Intro]
HAHAHAHA okay das ist jetzt kompletter Minecraft Work-Song Core 😂⛏️🔥
Das wird so ein rhythmischer, repetitiver Mining-Vibe, perfekt fürs Grinden

Erdbeere Mine Session

⛏️ Yeah…
Erdbeere… Mine Session…
Let’s go…

[Hook / Work-Chant]
🎶 Erdbeere, Erdbeere, Minenarbeiten,
Erdbeere, Erdbeere, wir graben die Zeiten
Erdbeere, Erdbeere, Stein wird zu Licht,
Erdbeere Mine Session – hör wie es bricht! 🎶

[Strophe 1]
Tief unter Erde, kein Sonnenlicht,
nur meine Pickaxe, die durch Steine bricht
Step für Step, Block für Block,
hör nur das Echo – tick, tack, knock

Diamanten such ich, irgendwo hier,
jeder Schlag bringt mich näher zum Ziel
Und wenn Lava kommt, bleib ich ruhig,
denn ich kenn diesen Grind – ich bin durch

[Hook / Work-Chant]
🎶 Erdbeere, Erdbeere, Minenarbeiten,
Erdbeere, Erdbeere, wir graben die Zeiten
Erdbeere, Erdbeere, Stein wird zu Licht,
Erdbeere Mine Session – hör wie es bricht! 🎶

[Strophe 2]
Inventory voll, doch ich geh weiter,
Level für Level werd ich gescheiter
Von Eisen zu Gold, von Gold zu Dia,
jede Ader sagt: „Bleib noch hier!“

Und irgendwo droppt ein Creeper rein,
doch ich bleib focused – bleib allein
Denn dieser Tunnel gehört nur mir,
Erdbeere grindet – Stunde vier

[Bridge]
⛏️ Schlag für Schlag – immer tiefer rein,
keine Pause, nur der Stein auf Stein
Rhythmus im Kopf – ich hör nur das Klirrn,
Mining-Session – ich verlier mich drin

[Final Hook]
🎶 Erdbeere, Erdbeere, Minenarbeiten,
Erdbeere, Erdbeere, wir graben die Zeiten
Erdbeere, Erdbeere, hör wie es klingt,
Erdbeere Mine Session – bis der Morgen beginnt! 🎶`,"Auf der Suche nach Diamanten":`[Intro]
⛏️ Yeah…
Erdbeere…
Mine Session Part 2…

[Main Chant / Hook]
🎶 Auf der Suche nach Diamanten,
Erdbeere schlägt durch alle Wände
Auf der Suche nach Diamanten,
Block für Block bis ich sie finde 🎶

🎶 Schlag, Schlag – hör den Stein,
immer tiefer, immer rein
Schlag, Schlag – bleib im Flow,
Diamanten irgendwo 🎶

[Strophe 1 – kurz & rhythmisch]
Unter Tage – kein Licht,
nur die Pickaxe, die durchbricht
Step für Step – immer weiter,
jeder Block macht mich gescheiter

Tunnel lang – kein Zurück,
jeder Schlag bringt mir Glück
Kein Gedanke – nur der Beat,
wie der Stein langsam flieht

[Hook / Chant]
🎶 Auf der Suche nach Diamanten,
Erdbeere schlägt durch alle Wände
Auf der Suche nach Diamanten,
Block für Block bis ich sie finde 🎶

[Strophe 2 – noch simpler]
Inventory – fast schon voll,
doch ich grab noch – das ist mein Goal
Von Eisen hoch bis Dia-Blau,
irgendwo hier – ich weiß genau

Creeper da – doch egal,
bleib im Rhythmus, bleib brutal
Schlag für Schlag – keine Pause,
das hier ist meine Base

[Break / Loop-Part]
🎶 Erdbeere, Erdbeere, grab weiter rein
Erdbeere, Erdbeere, Stein auf Stein
Erdbeere, Erdbeere, hör wie es klingt
Bis der Diamant vor dir blinkt 🎶

[Final Loop Hook]
🎶 Auf der Suche nach Diamanten,
immer weiter – nie am Ende
Auf der Suche nach Diamanten,
bis ich sie endlich finde 🎶`,"Noch tiefer":`[Intro]
⛏️ Yeah…
Session drei…
Noch nicht fertig…

[Main Chant / Hook]
🎶 Noch tiefer, noch tiefer rein,
Erdbeere gräbt durch jeden Stein
Noch tiefer, noch tiefer – kein Stopp,
Diamanten droppen nonstop 🎶

🎶 Schlag, Schlag – hör den Sound,
immer weiter unter Ground
Schlag, Schlag – kein zurück,
jeder Block bringt mir Glück 🎶

[Strophe 1]
Zwei Sessions – hundert vier,
doch ich bleib noch lange hier
Inventory – schon fast voll,
doch ich geh weiter – ich hab Bock

Level runter – immer mehr,
jede Schicht wird jetzt mein Revier
Keine Pause – nur der Beat,
der mich tiefer runterzieht

[Hook / Chant]
🎶 Noch tiefer, noch tiefer rein,
Erdbeere gräbt durch jeden Stein
Noch tiefer, noch tiefer – kein Stopp,
Diamanten droppen nonstop 🎶

[Strophe 2]
Pickaxe ready – neuer Run,
dritte Session hat begun
Creeper irgendwo – egal,
mein Fokus bleibt brutal

Lava leuchtet – seh den Weg,
doch ich geh noch weiter deep
Weil ich weiß – irgendwo,
liegt noch mehr – let it flow

[Break / Loop-Part]
🎶 Erdbeere, Erdbeere – geh tiefer rein
Erdbeere, Erdbeere – Stein auf Stein
Erdbeere, Erdbeere – hör wie es droppt
Bis die nächste Ader ploppt 🎶

[Final Hook]
🎶 Noch tiefer, noch tiefer rein,
kein Ende in Sicht – nur der Stein
Noch tiefer, noch tiefer – ich bleib,
bis ich alles hier zerreiß 🎶`,"Auch Eisen ist wichtig":`
[Intro]
⛏️ Yeah…
Session vier…
Nicht nur Diamanten…

[Main Chant / Hook]
🎶 Auch Eisen ist wichtig,
Erdbeere nimmt alles mit
Auch Eisen ist wichtig,
kein Block wird hier geskipped 🎶

🎶 Eisen, Eisen – nimm es mit,
jeder Drop bringt dich einen Schritt
Eisen, Eisen – bleib im Flow,
alles farmen sowieso 🎶

[Strophe 1 – simpel & loopbar]
Diamanten hab ich schon,
doch ich brauch noch mehr davon
Rüstung, Tools – alles ready,
doch mein Grind bleibt trotzdem steady

Jede Ader – klick und weg,
lass nichts liegen – kein Versteck
Denn ich weiß genau wie’s läuft,
wer alles nimmt, der wird belohnt

[Hook / Chant]
🎶 Auch Eisen ist wichtig,
Erdbeere nimmt alles mit
Auch Eisen ist wichtig,
kein Block wird hier geskipped 🎶

[Strophe 2]
Gold und Redstone – auch dabei,
lass nichts liegen – alles frei
Inventory füllt sich schnell,
doch ich bleib hier – in der Shell

Oben wartet später Zeit,
jetzt bin ich noch tief bereit
Denn ich weiß – der echte Grind,
nimmt alles mit, was er find’t

[Break / Loop-Part]
🎶 Erdbeere, Erdbeere – nimm es mit
Erdbeere, Erdbeere – Schritt für Schritt
Erdbeere, Erdbeere – hör wie es droppt
Bis dein Inventory komplett ist – nonstop 🎶

[Final Hook]
🎶 Auch Eisen ist wichtig,
alles zählt im Untergrund
Auch Eisen ist wichtig,
so wird Erdbeere zum Fund 🎶`,"Diamanten in meiner Hand":`[Intro]
⛏️ Yeah…
Final Session…
Ich hab’s geschafft…

[Main Chant / Hook]
🎶 Diamanten in meiner Hand,
Erdbeere steht im Untergrund
Diamanten in meiner Hand,
jeder Block hat sich gelohnt 🎶

🎶 Glanz im Stein – jetzt ist es da,
alles was ich wollte – klar
Glanz im Stein – sieh es an,
Diamanten in meiner Hand 🎶

[Strophe 1 – ruhig & loopbar]
Stunden tief – jetzt steh ich hier,
alles was ich brauch bei mir
Inventory voll – kein Platz mehr frei,
doch ich weiß – es ist vorbei

Jeder Schlag hat mich gebracht,
durch die Tiefe, durch die Nacht
Und ich steh jetzt still im Raum,
zwischen Stein und Diamanten-Glow

[Hook / Chant]
🎶 Diamanten in meiner Hand,
Erdbeere steht im Untergrund
Diamanten in meiner Hand,
jeder Block hat sich gelohnt 🎶

[Strophe 2]
Kein Stress mehr – alles safe,
keine Lava, kein Escape
Nur noch Glow im dunklen Stein,
und das Gefühl – ich hab’s allein

Von Eisen bis zu Diamant,
alles liegt jetzt in meiner Hand
Und ich weiß – beim nächsten Mal,
geh ich wieder tief ins Tal

[Break / Loop-Part]
🎶 Erdbeere, Erdbeere – Ziel erreicht
Erdbeere, Erdbeere – alles leicht
Erdbeere, Erdbeere – bleib hier steh’n
und lass die Diamanten seh’n 🎶

[Final Hook]
🎶 Diamanten in meiner Hand,
kein Weg zurück – nur dieser Stand
Diamanten in meiner Hand,
Erdbeere hat’s erkannt 🎶`},er=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),B=o(((e,t)=>{t.exports=er()}))(),tr=`/Koenigliche-AI-Songs/`,nr=e=>`${tr}${e}`,rr=`https://forms.gle/NSAUa8ifBkJxrHjn6`;function ir(e,t,n){return e===`albums`&&t?t.title:e===`playlists`&&n?n.name:e===`songs`?`Songs`:e===`albums`?`Alben`:e===`playlists`?`Playlists`:e===`patchnotes`?`Patchnotes`:`Startseite`}var ar={background:`#1db954`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700},or={background:`#1a1f2b`,color:`white`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700},sr={width:`100%`,background:`transparent`,color:`white`,border:`none`,textAlign:`left`,padding:`12px 14px`,cursor:`pointer`},cr={display:`block`,color:`white`,textDecoration:`none`,padding:`12px 14px`},lr=e=>({background:e?`#1db954`:`#171b24`,color:`white`,border:`none`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`});function ur(){let[e,t]=(0,_.useState)(`home`),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!1),[ee,T]=(0,_.useState)(0),[te,E]=(0,_.useState)(0),[ne,re]=(0,_.useState)(0),[ie,ae]=(0,_.useState)(``),[D,oe]=(0,_.useState)(1),[se,O]=(0,_.useState)(1),[k,ce]=(0,_.useState)(!1),[le,A]=(0,_.useState)(!1),[ue,j]=(0,_.useState)(``),[M,de]=(0,_.useState)(`off`),[pe,me]=(0,_.useState)(!1),[N,he]=(0,_.useState)([]),[P,ge]=(0,_.useState)(null),[_e,ve]=(0,_.useState)(!1),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(``),[F,Ce]=(0,_.useState)(!1),[I,Ee]=(0,_.useState)(!0),[De,Oe]=(0,_.useState)(!0),[L,ke]=(0,_.useState)(window.innerWidth<=768),je=(0,_.useRef)(null),Me=(0,_.useRef)(null),Ne=(0,_.useMemo)(()=>{let e=ie.trim().toLowerCase();return e?Zn.filter(t=>t.title.toLowerCase().includes(e)||t.artist.toLowerCase().includes(e)||(t.album||``).toLowerCase().includes(e)):Zn},[ie]),Pe=(0,_.useMemo)(()=>[...Zn].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)).slice(0,5),[]),Fe=(0,_.useMemo)(()=>{let e=new Map;return Zn.forEach(t=>{if(!t.album)return;e.has(t.album)||e.set(t.album,{id:t.album,title:t.album,artist:t.artist,cover:t.albumCover||t.cover,releaseDate:t.releaseDate,tracks:[]});let n=e.get(t.album);n.tracks.push(t),new Date(t.releaseDate)>new Date(n.releaseDate)&&(n.releaseDate=t.releaseDate)}),[...e.values()].map(e=>({...e,isAlbum:e.tracks.length>1,releaseType:e.tracks.length>1?`Album`:`Single`,tracks:[...e.tracks].sort((e,t)=>e.trackNumber-t.trackNumber)}))},[]),Ie=(e,t={})=>{if(!e)return;let{fromHistory:i=!1,resetHistory:a=!1}=t;a?s([]):!i&&n&&s(e=>[...e,n]),r(e),l(null)},Le=e=>{a([]),Ie(e,{resetHistory:!0})},Re=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>e.trackNumber-t.trackNumber);d(e),t(`albums`),a(r),Ie(n,{resetHistory:!0})},ze=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>e.trackNumber-t.trackNumber).sort(()=>Math.random()-.5);d(e),t(`albums`),a(r),Ie(n,{resetHistory:!0})},Be=()=>{if(!Zn.length)return;let[e,...t]=Zn;a(t),Ie(e,{resetHistory:!0})},Ve=()=>{if(!Zn.length)return;let[e,...t]=[...Zn].sort(()=>Math.random()-.5);a(t),Ie(e,{resetHistory:!0})},He=()=>{a([])},Ue=e=>{a(t=>[...t,e]),l(null)},We=e=>{be(e),ve(!0),l(null)},Ge=()=>{ve(!1),be(null),Se(``)},Ke=()=>{let e=xe.trim();if(!e)return;let t={id:`playlist-${Date.now()}`,name:e,songIds:ye?[ye.id]:[],createdAt:new Date().toISOString()};he(e=>[...e,t]),Ge()},qe=(e,t)=>{he(n=>n.map(n=>n.id===e?{...n,songIds:[...n.songIds,t]}:n)),Ge()},Je=(e,t)=>{he(n=>{let r=n.map(n=>{if(n.id!==e)return n;let r=n.songIds.findIndex(e=>e===t);return r===-1?n:{...n,songIds:n.songIds.filter((e,t)=>t!==r)}}),i=r.find(t=>t.id===e);return i&&ge(i),r})},Ye=e=>{he(t=>t.filter(t=>t.id!==e)),P?.id===e&&ge(null)},Xe=e=>{let t=JSON.stringify({version:`1.0`,name:e.name,songIds:e.songIds},null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`${e.name.replace(/[^\w\s-]/g,``).replace(/\s+/g,`_`)}.playlist.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},Ze=async e=>{let t=e.target.files?.[0];if(t){try{let e=await t.text(),n=JSON.parse(e);if(!n?.name||!Array.isArray(n?.songIds))throw Error(`Ungültige Playlist-Datei`);let r=n.songIds.filter(e=>Zn.some(t=>t.id===e)),i={id:`playlist-${Date.now()}`,name:n.name,songIds:r,createdAt:new Date().toISOString()};he(e=>[...e,i])}catch(e){console.log(`Playlist-Import fehlgeschlagen:`,e),alert(`Die Playlist-Datei konnte nicht importiert werden.`)}e.target.value=``}},Qe=e=>{let t=e.songIds.map(e=>Zn.find(t=>t.id===e)).filter(Boolean);if(!t.length)return;let[n,...r]=t;a(r),Ie(n,{resetHistory:!0})},$e=e=>e.map(e=>Zn.find(t=>t.id===e)).filter(Boolean),et=e=>{a(t=>t.filter((t,n)=>n!==e))},tt=Te(we(St,{activationConstraint:{distance:8}})),nt=e=>{let{active:t,over:n}=e;!n||t.id===n.id||a(e=>{let r=e.findIndex((e,n)=>`${e.id}-${n}`===t.id),i=e.findIndex((e,t)=>`${e.id}-${t}`===n.id);return r===-1||i===-1?e:kn(e,r,i)})},rt=()=>{if(n){if(M===`one`){je.current&&(je.current.currentTime=0,je.current.play().catch(()=>{}));return}it()}},it=()=>{if(i.length>0){let[e,...t]=i;a(t),Ie(e);return}if(M===`all`&&n){let e=[...o,n].filter(Boolean);if(e.length===0)return;let[t,...r]=e;s([]),a(r),Ie(t,{fromHistory:!0})}},at=()=>{if(ne>3&&je.current){je.current.currentTime=0,re(0),T(0);return}if(o.length===0){je.current&&(je.current.currentTime=0,re(0),T(0));return}let e=o[o.length-1];s(e=>e.slice(0,-1)),n&&a(e=>[n,...e]),Ie(e,{fromHistory:!0})},ot=e=>{t(e),e!==`albums`&&d(null),e!==`playlists`&&ge(null),p(!1)};(0,_.useEffect)(()=>{let e=()=>{ke(window.innerWidth<=768)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,_.useEffect)(()=>{let e=localStorage.getItem(`ai-song-library-playlists`);if(e)try{let t=JSON.parse(e);Array.isArray(t)&&he(t)}catch(e){console.log(`Playlists konnten nicht geladen werden:`,e)}},[]),(0,_.useEffect)(()=>{localStorage.setItem(`ai-song-library-playlists`,JSON.stringify(N))},[N]),(0,_.useEffect)(()=>{if(e===`home`){b(!1),S(!1),w(!1);let e=setTimeout(()=>{b(!0)},60),t=setTimeout(()=>{S(!0)},220),n=setTimeout(()=>{w(!0)},380);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}}else b(!1),S(!1),w(!1)},[e]),(0,_.useEffect)(()=>{je.current&&(je.current.volume=D)},[D]),(0,_.useEffect)(()=>{let e=je.current;!e||!n||(async()=>{try{await e.play()}catch(e){console.log(`Autoplay/Play blockiert:`,e)}})()},[n]),(0,_.useEffect)(()=>{if(`mediaSession`in navigator)return n&&(navigator.mediaSession.metadata=new MediaMetadata({title:n.title,artist:n.artist,album:n.album||`Königliche AI Songs`,artwork:[{src:n.cover,sizes:`96x96`,type:`image/jpeg`},{src:n.cover,sizes:`128x128`,type:`image/jpeg`},{src:n.cover,sizes:`192x192`,type:`image/jpeg`},{src:n.cover,sizes:`256x256`,type:`image/jpeg`},{src:n.cover,sizes:`384x384`,type:`image/jpeg`},{src:n.cover,sizes:`512x512`,type:`image/jpeg`}]})),navigator.mediaSession.setActionHandler(`play`,()=>{let e=je.current;e&&e.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{let e=je.current;e&&e.pause()}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{it()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{at()}),()=>{try{navigator.mediaSession.setActionHandler(`play`,null),navigator.mediaSession.setActionHandler(`pause`,null),navigator.mediaSession.setActionHandler(`nexttrack`,null),navigator.mediaSession.setActionHandler(`previoustrack`,null)}catch(e){console.log(e)}}},[n,i,o,ne]),(0,_.useEffect)(()=>{`mediaSession`in navigator&&(navigator.mediaSession.playbackState=m?`playing`:`paused`)},[m]),(0,_.useEffect)(()=>{if(F)return pt(),()=>{Me.current&&clearTimeout(Me.current)}},[F]),(0,_.useEffect)(()=>{if(!F||!n)return;Oe(!1);let e=setTimeout(()=>{Oe(!0)},30);return()=>clearTimeout(e)},[n,F]),(0,_.useEffect)(()=>{!F||!le||!n||j($n[n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,F,le]),(0,_.useEffect)(()=>{!k||!n||j($n[n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,k]),(0,_.useEffect)(()=>{let e=je.current;if(!e)return;e.volume=D;let t=()=>{let t=e.currentTime||0,n=e.duration||0;re(t),E(n),T(n>0?t/n*100:0)},n=()=>{E(e.duration||0),t()},r=()=>h(!0),i=()=>h(!1),a=()=>{rt()};return e.addEventListener(`timeupdate`,t),e.addEventListener(`loadedmetadata`,n),e.addEventListener(`play`,r),e.addEventListener(`pause`,i),e.addEventListener(`ended`,a),t(),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`loadedmetadata`,n),e.removeEventListener(`play`,r),e.removeEventListener(`pause`,i),e.removeEventListener(`ended`,a)}},[n,i,o,M,D]);let st=e=>{if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,`0`)}`},ct=()=>{let e=je.current;!e||!n||(e.paused?e.play().catch(()=>{}):e.pause())},lt=e=>{let t=je.current;if(!t||!te)return;let n=Number(e.target.value),r=n/100*te;t.currentTime=r,T(n),re(r)},ut=()=>{n&&(j($n[n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`),F?A(!0):ce(!0))},dt=()=>{D===0?oe(se>0?se:1):(O(D),oe(0))},ft=()=>{de(e=>e===`off`?`all`:e===`all`?`one`:`off`)},pt=()=>{Me.current&&clearTimeout(Me.current),Ee(!0),Me.current=setTimeout(()=>{Ee(!1)},5e3)},mt=()=>{n&&(Ce(!0),Ee(!0))},R=()=>{Ce(!1),A(!1)},ht=({id:e,song:t,index:n,removeFromQueue:r})=>{let{attributes:i,listeners:a,setNodeRef:o,transform:s,transition:c,isDragging:l}=Jn({id:e});return(0,B.jsxs)(`div`,{ref:o,style:{transform:fe.Transform.toString(s),transition:c,background:l?`#1a2230`:`#141821`,borderRadius:`12px`,padding:`10px`,display:`grid`,gridTemplateColumns:`24px 1fr 32px`,gap:`10px`,alignItems:`center`,border:l?`1px solid #3a455a`:`1px solid transparent`},children:[(0,B.jsx)(`button`,{...i,...a,style:hr(l),children:`⋮⋮`}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.title}),(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.artist})]}),(0,B.jsx)(`button`,{onClick:()=>r(n),style:gr,children:`✕`})]})},gt=({song:e,index:r,showAlbum:i=!0,playlistContext:a=null})=>(0,B.jsx)(`div`,{onClick:()=>Le(e),onMouseEnter:()=>v(`song-row-${e.id}`),onMouseLeave:()=>v(null),style:L?{display:`grid`,gridTemplateColumns:`56px minmax(0, 1fr) 38px`,gap:`12px`,alignItems:`center`,padding:`12px`,borderRadius:`16px`,background:n?.id===e.id?`rgba(29,185,84,0.12)`:g===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`#141821`,border:n?.id===e.id?`1px solid rgba(29,185,84,0.35)`:g===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid #202636`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`}:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,alignItems:`center`,padding:`12px 16px`,borderRadius:`14px`,background:n?.id===e.id?`rgba(29,185,84,0.12)`:g===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`transparent`,border:n?.id===e.id?`1px solid rgba(29,185,84,0.35)`:g===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid transparent`,position:`relative`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`},children:L?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`,marginBottom:`4px`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,marginBottom:i&&e.album?`4px`:0},children:e.artist}),i&&e.album&&(0,B.jsx)(`div`,{onClick:n=>{n.stopPropagation();let r=Fe.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},style:{color:`#b0b0b0`,fontSize:`12px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,textDecoration:`underline`},children:e.album})]}),(0,B.jsxs)(`div`,{style:{position:`relative`},children:[(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,B.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#171717`,border:`1px solid #2e2e2e`,borderRadius:`14px`,overflow:`hidden`,minWidth:`190px`,zIndex:20,boxShadow:`0 12px 30px rgba(0,0,0,0.35)`},children:[(0,B.jsx)(`button`,{onClick:()=>Ue(e),style:sr,children:`Als Nächstes abspielen`}),(0,B.jsx)(`button`,{onClick:()=>We(e),style:sr,children:`Zur Playlist hinzufügen`}),a&&(0,B.jsx)(`button`,{onClick:()=>Je(a.id,e.id),style:sr,children:`Aus Playlist entfernen`}),(0,B.jsx)(`a`,{href:e.file,download:!0,style:cr,children:`Download`})]})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:r+1}),(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`default`},children:e.artist})]}),(0,B.jsx)(`div`,{onClick:n=>{if(n.stopPropagation(),!e.album)return;let r=Fe.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},onMouseEnter:()=>v(`song-album-${e.id}`),onMouseLeave:()=>v(null),style:{color:g===`song-album-${e.id}`?`#ffffff`:`#b0b0b0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:e.album?`pointer`:`default`,textDecoration:g===`song-album-${e.id}`&&e.album?`underline`:`none`,transition:`color 0.15s ease`},children:e.album||`—`}),(0,B.jsx)(`div`,{style:{color:`#9a9a9a`,fontSize:`14px`},children:e.duration}),(0,B.jsxs)(`div`,{style:{position:`relative`},children:[(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,B.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#171717`,border:`1px solid #2e2e2e`,borderRadius:`14px`,overflow:`hidden`,minWidth:`190px`,zIndex:20,boxShadow:`0 12px 30px rgba(0,0,0,0.35)`},children:[(0,B.jsx)(`button`,{onClick:()=>Ue(e),style:sr,children:`Als Nächstes abspielen`}),(0,B.jsx)(`button`,{onClick:()=>We(e),style:sr,children:`Zur Playlist hinzufügen`}),a&&(0,B.jsx)(`button`,{onClick:()=>Je(a.id,e.id),style:sr,children:`Aus Playlist entfernen`}),(0,B.jsx)(`a`,{href:e.file,download:!0,style:cr,children:`Download`})]})]})]})},e.id+`-`+r);return(0,B.jsxs)(`div`,{style:{minHeight:`100vh`,background:`#0d0f16`,color:`white`,fontFamily:`Arial, sans-serif`,paddingBottom:L?`190px`:`130px`},children:[(0,B.jsx)(`header`,{style:{position:`sticky`,top:0,zIndex:30,background:`rgba(13,15,22,0.88)`,backdropFilter:`blur(12px)`,borderBottom:`1px solid #1f2430`},children:(0,B.jsxs)(`div`,{style:{width:`100%`,padding:L?`14px 16px`:`18px 26px`,boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`},children:[(0,B.jsxs)(`div`,{onClick:()=>{t(`home`),d(null),p(!1)},style:{cursor:`pointer`},children:[(0,B.jsx)(`div`,{style:{fontSize:`15px`,color:`#8e96a3`,marginBottom:`4px`},children:`Lokale Musikbibliothek`}),(0,B.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:800},children:`Königliche AI Songs`})]}),(0,B.jsx)(`button`,{onClick:()=>p(!0),style:{width:`52px`,height:`52px`,borderRadius:`16px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`22px`,fontWeight:700},children:`☰`})]})}),f&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>p(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.45)`,zIndex:39}}),(0,B.jsxs)(`aside`,{style:{position:`fixed`,top:0,right:0,width:`360px`,maxWidth:`92vw`,height:`100vh`,background:`#111318`,borderLeft:`1px solid #202636`,zIndex:40,padding:`24px`,paddingBottom:`220px`,overflowY:`auto`,boxShadow:`-18px 0 40px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`24px`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{fontSize:`14px`,color:`#8e96a3`,marginBottom:`4px`},children:`Menü`}),(0,B.jsx)(`div`,{style:{fontSize:`26px`,fontWeight:800},children:`Königliche AI Songs`})]}),(0,B.jsx)(`button`,{onClick:()=>p(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`30px`},children:[(0,B.jsx)(`button`,{onClick:()=>ot(`home`),style:lr(e===`home`),children:`Startseite`}),(0,B.jsx)(`button`,{onClick:()=>ot(`songs`),style:lr(e===`songs`),children:`Songs`}),(0,B.jsx)(`button`,{onClick:()=>ot(`albums`),style:lr(e===`albums`&&!u),children:`Alben`}),(0,B.jsx)(`button`,{onClick:()=>ot(`playlists`),style:lr(e===`playlists`&&!P),children:`Playlists`}),(0,B.jsx)(`button`,{onClick:()=>ot(`patchnotes`),style:lr(e===`patchnotes`),children:`Patchnotes`}),(0,B.jsx)(`button`,{onClick:()=>{me(!0),p(!1)},style:lr(!1),children:`Song einreichen`})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`10px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.08em`,fontWeight:700},children:`Warteschlange`}),(0,B.jsx)(`button`,{onClick:He,style:{background:`transparent`,border:`none`,color:`#c7ced9`,cursor:`pointer`,fontSize:`13px`},children:`Löschen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gap:`8px`,paddingBottom:`50px`},children:i.length===0?(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:`Noch nichts vorgemerkt.`}):(0,B.jsx)(bn,{sensors:tt,collisionDetection:Ae,onDragEnd:nt,children:(0,B.jsx)(Bn,{items:i.map((e,t)=>`${e.id}-${t}`),strategy:In,children:(0,B.jsx)(`div`,{style:{display:`grid`,gap:`8px`},children:i.map((e,t)=>(0,B.jsx)(ht,{id:`${e.id}-${t}`,song:e,index:t,removeFromQueue:et},`${e.id}-${t}`))})})})})]})]})]}),(0,B.jsxs)(`main`,{style:{width:`100%`,padding:L?`18px 16px`:`26px 40px`,boxSizing:`border-box`},children:[e===`home`&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`section`,{style:{minHeight:L?`240px`:`220px`,borderRadius:`28px`,padding:L?`22px 18px`:`32px 48px`,backgroundImage:`linear-gradient(rgba(8,10,17,0.60), rgba(8,10,17,0.88)), url('${nr(`covers/Koenigliche-AI-Songs.png`)}')`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundPosition:L?`center top`:`top center`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,alignItems:`center`,marginBottom:`28px`,textAlign:`center`,opacity:+!!y,transform:y?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d7e2`,fontSize:L?`12px`:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`},children:`Startmenü`}),(0,B.jsx)(`h1`,{style:{fontSize:L?`clamp(28px, 9vw, 40px)`:`44px`,margin:0,marginBottom:`10px`,maxWidth:L?`100%`:`900px`,textAlign:`center`,width:`100%`,lineHeight:L?1.02:1,textShadow:`0 6px 22px rgba(0,0,0,0.45)`},children:`Königliche AI Songs`}),(0,B.jsx)(`p`,{style:{maxWidth:L?`100%`:`840px`,color:`#e3e6eb`,fontSize:L?`15px`:`16px`,lineHeight:1.35,margin:`0 auto`,textAlign:`center`,textShadow:`0 4px 18px rgba(0,0,0,0.35)`},children:`Deine AI-Musikbibliothek, zertifiziert von dem MM.`})]}),(0,B.jsxs)(`section`,{style:{opacity:+!!x,transform:x?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,B.jsx)(`button`,{onClick:()=>t(`songs`),style:or,children:`Alle Songs ansehen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:L?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(190px, 1fr))`,gap:`16px`},children:Pe.map(e=>(0,B.jsxs)(`button`,{onClick:()=>Le(e),onMouseEnter:()=>v(`release-${e.id}`),onMouseLeave:()=>v(null),style:{textAlign:`left`,background:g===`release-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:g===`release-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`release-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,B.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:e.artist})]},e.id))})]}),(0,B.jsxs)(`section`,{style:{marginTop:`32px`,opacity:+!!C,transform:C?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,B.jsx)(`button`,{onClick:()=>t(`albums`),style:or,children:`Alle Alben ansehen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:L?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`18px`},children:Fe.map(e=>(0,B.jsxs)(`button`,{onClick:()=>{d(e),t(`albums`)},onMouseEnter:()=>v(`home-album-${e.id}`),onMouseLeave:()=>v(null),style:{textAlign:`left`,background:g===`home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:g===`home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:e.artist})]},e.id))})]})]}),e===`songs`&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:ir(e,u,P)}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`14px`},children:[(0,B.jsx)(`button`,{onClick:Be,style:ar,children:`Play`}),(0,B.jsx)(`button`,{onClick:Ve,style:or,children:`Shuffle`})]}),(0,B.jsx)(`input`,{type:`text`,value:ie,onChange:e=>ae(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:L?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!L&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,B.jsx)(`div`,{children:`#`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{children:`Titel`}),(0,B.jsx)(`div`,{children:`Album`}),(0,B.jsx)(`div`,{children:`Dauer`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{})]}),Ne.map((e,t)=>(0,B.jsx)(gt,{song:e,index:t,showAlbum:!0},e.id)),Ne.length===0&&(0,B.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Keine Songs gefunden.`})]})]}),e===`playlists`&&!P&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Playlists`}),(0,B.jsx)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:(0,B.jsxs)(`label`,{style:{...or,display:`inline-flex`,alignItems:`center`},children:[`Importieren`,(0,B.jsx)(`input`,{type:`file`,accept:`.json`,onChange:Ze,style:{display:`none`}})]})})]}),N.length===0?(0,B.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Noch keine Playlists erstellt.`}):(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:L?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`16px`},children:N.map(e=>{let n=$e(e.songIds);return(0,B.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`18px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{fontSize:`22px`,fontWeight:800,marginBottom:`8px`},children:e.name}),(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[e.songIds.length,` `,e.songIds.length===1?`Song`:`Songs`]})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>{ge(e),t(`playlists`)},style:or,children:`Öffnen`}),(0,B.jsx)(`button`,{onClick:()=>Qe(e),style:ar,children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>Xe(e),style:or,children:`Export`}),(0,B.jsx)(`button`,{onClick:()=>Ye(e.id),style:or,children:`Löschen`})]})]}),n.length>0&&(0,B.jsx)(`div`,{style:{marginTop:`16px`},children:(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`8px`},children:n.slice(0,4).map((t,r)=>{let i=n.length-3;return n.length>4&&r===3?(0,B.jsxs)(`div`,{style:{aspectRatio:`1 / 1`,borderRadius:`14px`,background:`#10141d`,border:`1px solid #202636`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:`20px`,color:`#d7dce4`},children:[`+`,i]},`more-${e.id}`):n.length>4&&r>3?null:(0,B.jsx)(`img`,{src:t.cover,alt:t.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,display:`block`}},`${t.id}-${r}`)})})})]},e.id)})})]}),e===`playlists`&&P&&(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`button`,{onClick:()=>ge(null),style:{...or,marginBottom:`16px`},children:`← Zurück zu Playlists`}),(0,B.jsx)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:L?`16px`:`18px`,marginBottom:`18px`},children:(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`8px`},children:P.name}),(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[P.songIds.length,` `,P.songIds.length===1?`Song`:`Songs`]})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>Qe(P),style:ar,children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>Xe(P),style:or,children:`Export`})]})]})}),(0,B.jsx)(`div`,{style:{display:`grid`,gap:`8px`},children:$e(P.songIds).map((e,t)=>(0,B.jsx)(gt,{song:e,index:t,showAlbum:!0,playlistContext:P},`${e.id}-${t}`))})]}),e===`patchnotes`&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Info`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Patchnotes`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gap:`18px`},children:Qn.map((e,t)=>(0,B.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,color:`#d7dce4`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`12px`,marginBottom:`14px`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{style:{fontWeight:800,fontSize:`22px`},children:[`Version `,e.version]}),(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:e.label||(t===0?`Aktueller Patch`:`Früherer Patch`)})]}),(0,B.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,lineHeight:1.9},children:e.changes.map((e,t)=>(0,B.jsx)(`li`,{children:e},t))})]},e.version))})]}),e===`albums`&&!u&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0},children:`Alben`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:L?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:Fe.map(e=>(0,B.jsxs)(`div`,{onMouseEnter:()=>v(`albums-page-${e.id}`),onMouseLeave:()=>v(null),style:{background:g===`albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:g===`albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:e.artist}),(0,B.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>Re(e),style:ar,children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>{d(e),t(`albums`)},style:or,children:`Öffnen`})]})]},e.id))})]}),e===`albums`&&u&&(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`button`,{onClick:()=>d(null),style:{...or,marginBottom:`16px`},children:`← Zurück zu Alben`}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L?`1fr`:`minmax(220px, 280px) minmax(0, 1fr)`,gap:L?`18px`:`24px`,alignItems:L?`start`:`end`,background:`linear-gradient(180deg, #1b2130 0%, #10141d 100%)`,borderRadius:`26px`,padding:L?`18px`:`22px`,marginBottom:`22px`},children:[(0,B.jsx)(`img`,{src:u.cover,alt:u.title,style:{width:`100%`,maxWidth:L?`280px`:`100%`,justifySelf:L?`center`:`stretch`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`20px`,margin:L?`0 auto`:0}}),(0,B.jsxs)(`div`,{style:{minWidth:0,textAlign:L?`center`:`left`},children:[(0,B.jsx)(`div`,{style:{color:`#c2cad6`,fontSize:`14px`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`10px`},children:u.releaseType}),(0,B.jsx)(`h1`,{style:{fontSize:L?`clamp(28px, 10vw, 40px)`:`clamp(34px, 4vw, 56px)`,margin:0,marginBottom:`10px`,lineHeight:.95,maxWidth:L?`100%`:`780px`,wordBreak:`break-word`},children:u.title}),(0,B.jsx)(`div`,{style:{color:`#d7dce4`,marginBottom:`8px`},children:u.artist}),(0,B.jsxs)(`div`,{style:{color:`#9aa2ad`,marginBottom:`18px`},children:[u.tracks.length,` `,u.tracks.length===1?`Track`:`Tracks`]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,justifyContent:L?`center`:`flex-start`},children:[(0,B.jsx)(`button`,{onClick:()=>Re(u),style:ar,children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>ze(u),style:or,children:`Shuffle`})]})]})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!L&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,B.jsx)(`div`,{children:`#`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{children:`Titel`}),(0,B.jsx)(`div`,{children:`Album`}),(0,B.jsx)(`div`,{children:`Dauer`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{})]}),[...u.tracks].sort((e,t)=>e.trackNumber-t.trackNumber).map((e,t)=>(0,B.jsx)(gt,{song:e,index:t,showAlbum:!1},e.id))]})]})]}),(0,B.jsxs)(`div`,{style:{position:`fixed`,left:L?`10px`:0,right:L?`10px`:0,bottom:L?`10px`:0,background:`#0f1117`,border:L?`1px solid #202636`:`none`,borderTop:`1px solid #202636`,borderRadius:L?`22px`:0,display:`grid`,gridTemplateColumns:L?`1fr`:`minmax(220px, 320px) minmax(320px, 1fr) minmax(260px, 360px)`,alignItems:`center`,gap:L?`12px`:`18px`,padding:L?`12px 14px 14px`:`14px 18px`,boxShadow:L?`0 16px 40px rgba(0,0,0,0.35)`:`none`,zIndex:50},children:[(0,B.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:L?`10px`:`12px`,minWidth:0,marginBottom:L?`2px`:0},children:n?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`img`,{src:n.cover,alt:n.title,onClick:mt,style:{width:L?`54px`:`58px`,height:L?`54px`:`58px`,objectFit:`cover`,borderRadius:L?`14px`:`12px`,cursor:`pointer`,flexShrink:0}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`button`,{onClick:mt,style:{background:`transparent`,border:`none`,padding:0,margin:0,color:`white`,fontWeight:700,fontSize:`16px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`,textAlign:`left`,width:`100%`},children:n.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,textAlign:`left`},children:n.artist})]})]}):(0,B.jsx)(`div`,{style:{color:`#8f8f8f`},children:`Wähle einen Song aus.`})}),(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:L?`8px`:`10px`,minWidth:0},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:L?`8px`:`12px`,justifyContent:`center`,width:`100%`},children:[(0,B.jsx)(`button`,{onClick:at,style:dr,children:`⏮`}),(0,B.jsx)(`button`,{onClick:ct,style:fr,children:m?`❚❚`:`▶`}),(0,B.jsx)(`button`,{onClick:it,style:dr,children:`⏭`}),(0,B.jsx)(`button`,{onClick:ft,style:{...dr,color:M===`off`?`#9aa2ad`:M===`all`?`#1db954`:`#ffffff`,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:M===`one`?`R1`:`R`})]}),(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:`680px`,display:`grid`,gridTemplateColumns:L?`46px minmax(0, 1fr) 46px auto`:`52px minmax(0, 1fr) 52px auto`,gap:L?`8px`:`12px`,alignItems:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`#0f1117`,padding:`0 4px`,justifySelf:`end`},children:st(ne)}),(0,B.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ee,onChange:lt,style:{...pr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff ${ee}%,
        #2b2f3a ${ee}%,
        #2b2f3a 100%
      )`}})}),(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:L?`6px`:`10px`,justifyContent:`flex-end`,position:`relative`,zIndex:3,background:`#0f1117`,paddingLeft:`6px`},children:[(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,padding:`0 4px`,background:`#0f1117`},children:st(te)}),(0,B.jsx)(`button`,{onClick:ut,style:{background:`#0f1117`,border:`1px solid #2a3142`,color:`white`,borderRadius:`10px`,padding:L?`4px 7px`:`4px 8px`,cursor:n?`pointer`:`default`,fontSize:L?`11px`:`12px`,opacity:n?1:.5},children:`Text`})]})]}),(0,B.jsx)(`audio`,{ref:je,autoPlay:!0,playsInline:!0,preload:`auto`,src:n?.file||void 0,style:{display:`none`}})]}),!L&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`140px minmax(0, 1fr)`,alignItems:`center`,gap:`16px`,minWidth:0},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,justifyContent:`flex-start`,minWidth:0},children:[(0,B.jsx)(`button`,{onClick:dt,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:D===0?`🔇`:`🔊`}),(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:D,onChange:e=>{let t=Number(e.target.value);oe(t),t>0&&O(t)},style:{...mr,background:`linear-gradient(
      90deg,
      #1db954 ${D*100}%,
      #2b2f3a ${D*100}%
    )`}})]}),(0,B.jsx)(`div`,{style:{textAlign:`right`,color:`#9aa2ad`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0},children:i.length>0?`Als Nächstes: ${i[0].title}`:`Keine Songs in der Warteschlange`})]})]}),F&&n&&(0,B.jsxs)(`div`,{onMouseMove:pt,onMouseEnter:pt,onMouseLeave:()=>Ee(!1),style:{position:`fixed`,inset:0,background:`#05070c`,zIndex:90,overflow:`hidden`},children:[(0,B.jsx)(`div`,{style:{position:`absolute`,inset:`-40px`,backgroundImage:`url('${n.cover}')`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,filter:`blur(34px)`,transform:De?`translateX(0) scale(1.08)`:`translateX(6%) scale(1.12)`,opacity:De?.95:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}}),(0,B.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.78) 100%)`}}),(0,B.jsx)(`button`,{onClick:R,style:{position:`absolute`,top:`24px`,right:`24px`,width:`52px`,height:`52px`,borderRadius:`16px`,border:`1px solid rgba(255,255,255,0.15)`,background:`rgba(10,12,18,0.55)`,color:`white`,cursor:`pointer`,fontSize:`22px`,zIndex:4,opacity:+!!I,transform:I?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.25s ease, transform 0.25s ease`,backdropFilter:`blur(10px)`},children:`✕`}),le&&(0,B.jsxs)(`div`,{style:{position:`absolute`,left:L?`16px`:`max(32px, 4vw)`,right:L?`16px`:`auto`,top:L?`auto`:`50%`,bottom:L?`120px`:`auto`,transform:L?`none`:`translateY(-50%)`,width:L?`auto`:`min(360px, 28vw)`,maxHeight:L?`38vh`:`62vh`,overflowY:`auto`,background:`rgba(8,10,16,0.68)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`22px`,zIndex:3,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`16px`,marginBottom:`16px`},children:[(0,B.jsxs)(`div`,{style:{width:`100%`,textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,B.jsx)(`div`,{style:{fontSize:`20px`,fontWeight:800},children:n.title})]}),(0,B.jsx)(`button`,{onClick:()=>A(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid rgba(255,255,255,0.12)`,background:`rgba(23,27,36,0.8)`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:ue})]}),(0,B.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:L?`1fr`:le?`minmax(320px, 1fr) minmax(420px, 540px) minmax(280px, 1fr)`:`1fr minmax(420px, 540px) minmax(320px, 1fr)`,alignItems:`center`,zIndex:2,padding:L?`24px 16px 140px`:`40px`,gap:L?`20px`:`40px`},children:[(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,B.jsx)(`img`,{src:n.cover,alt:n.title,style:{width:L?`min(78vw, 360px)`:`min(52vw, 540px)`,maxHeight:L?`42vh`:`62vh`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`28px`,boxShadow:`0 30px 80px rgba(0,0,0,0.45)`,transform:De?`translateX(0)`:`translateX(30px)`,opacity:De?1:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}})}),(0,B.jsxs)(`div`,{style:{alignSelf:`center`,justifySelf:L?`center`:`start`,maxWidth:`520px`,textAlign:L?`center`:`left`,opacity:+!!I,transform:I?`translateY(0)`:`translateY(14px)`,transition:`opacity 0.25s ease, transform 0.25s ease`},children:[(0,B.jsx)(`div`,{style:{color:`rgba(255,255,255,0.72)`,fontSize:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`,textShadow:`0 0 24px rgba(0,0,0,0.45)`},children:`Now Playing`}),(0,B.jsx)(`div`,{style:{fontSize:`clamp(30px, 4vw, 58px)`,fontWeight:900,lineHeight:1,color:`white`,textShadow:`0 0 18px rgba(29,185,84,0.38), 0 0 42px rgba(0,0,0,0.45)`,marginBottom:`10px`},children:n.title}),(0,B.jsx)(`div`,{style:{fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`,textShadow:`0 0 18px rgba(0,0,0,0.45)`},children:n.artist})]})]}),(0,B.jsx)(`div`,{style:{position:`absolute`,left:`50%`,bottom:`34px`,transform:`translateX(-50%)`,width:L?`calc(100vw - 20px)`:`min(900px, 88vw)`,zIndex:4,opacity:+!!I,transition:`opacity 0.25s ease, transform 0.25s ease`},children:(0,B.jsxs)(`div`,{style:{background:`rgba(8,10,16,0.55)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`18px 22px`,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr auto auto`,alignItems:`center`,marginBottom:`14px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`16px`},children:[(0,B.jsx)(`button`,{onClick:at,style:dr,children:`⏮`}),(0,B.jsx)(`button`,{onClick:ct,style:fr,children:m?`❚❚`:`▶`}),(0,B.jsx)(`button`,{onClick:it,style:dr,children:`⏭`})]}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,B.jsx)(`button`,{onClick:ft,style:{...dr,color:M===`off`?`#9aa2ad`:M===`all`?`#1db954`:`#ffffff`,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:M===`one`?`R1`:`R`})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginLeft:`10px`},children:(0,B.jsx)(`button`,{onClick:ut,style:{background:le?`rgba(29,185,84,0.18)`:`transparent`,border:le?`1px solid rgba(29,185,84,0.45)`:`1px solid rgba(255,255,255,0.12)`,color:`white`,borderRadius:`12px`,padding:`6px 10px`,cursor:n?`pointer`:`default`,fontSize:`12px`,opacity:n?1:.5},children:`Text`})})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`64px minmax(0, 1fr) 190px`,gap:`16px`,alignItems:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,padding:`0 4px`,justifySelf:`end`},children:st(ne)}),(0,B.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ee,onChange:lt,style:{...pr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff ${ee}%,
        rgba(255,255,255,0.18) ${ee}%,
        rgba(255,255,255,0.18) 100%
      )`}})}),(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`10px`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,paddingLeft:`6px`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,padding:`0 4px`,background:`rgba(8,10,16,0.55)`},children:st(te)}),(0,B.jsx)(`button`,{onClick:dt,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:D===0?`🔇`:`🔊`}),(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:D,onChange:e=>{let t=Number(e.target.value);oe(t),t>0&&O(t)},style:{...mr,width:`110px`,background:`linear-gradient(
                  90deg,
                  #1db954 ${D*100}%,
                  #2b2f3a ${D*100}%
                )`}})]})]})]})})]}),k&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>ce(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:70}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(700px, 90vw)`,maxHeight:`70vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:71,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:n?.title||`Unbekannter Song`})]}),(0,B.jsx)(`button`,{onClick:()=>ce(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:ue})]})]}),_e&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:Ge,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:74}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:75,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Playlist`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Zur Playlist hinzufügen`})]}),(0,B.jsx)(`button`,{onClick:Ge,style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`18px`},children:[N.map(e=>(0,B.jsx)(`button`,{onClick:()=>qe(e.id,ye.id),style:lr(!1),children:e.name},e.id)),N.length===0&&(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:`Noch keine Playlist vorhanden.`})]}),(0,B.jsxs)(`div`,{style:{borderTop:`1px solid #202636`,paddingTop:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`10px`},children:`Neue Playlist erstellen`}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`input`,{type:`text`,value:xe,onChange:e=>Se(e.target.value),placeholder:`Playlist-Name...`,style:{flex:1,minWidth:`220px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}}),(0,B.jsx)(`button`,{onClick:Ke,style:ar,children:`Erstellen`})]})]})]})]}),pe&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>me(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:72}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:73,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Community`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Song einreichen`})]}),(0,B.jsx)(`button`,{onClick:()=>me(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.7,fontSize:`15px`,textAlign:`center`,marginBottom:`22px`},children:[`Du kannst hier anonym einen Song zur Überprüfung einreichen.`,(0,B.jsx)(`br`,{}),`Das Formular öffnet sich in einem neuen Tab.`]}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,B.jsx)(`a`,{href:rr,target:`_blank`,rel:`noreferrer`,style:{...ar,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:`Formular öffnen`})})]})]})]})}var dr={width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`transparent`,color:`white`,cursor:`pointer`,fontSize:`18px`},fr={width:`44px`,height:`44px`,borderRadius:`999px`,border:`none`,background:`white`,color:`black`,cursor:`pointer`,fontSize:`18px`,fontWeight:700},pr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`transparent`,position:`relative`,zIndex:2,cursor:`pointer`,margin:0,minWidth:0,outline:`none`},mr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`linear-gradient(90deg, rgb(0, 19, 6) 0%, rgb(9, 105, 0) 100%)`,height:`4px`,borderRadius:`999px`,cursor:`pointer`,margin:0},hr=e=>({background:`transparent`,color:`#9aa2ad`,border:`none`,cursor:e?`grabbing`:`grab`,fontSize:`16px`,padding:0,lineHeight:1}),gr={width:`32px`,height:`32px`,background:`transparent`,color:`#c7ced9`,border:`none`,borderRadius:`8px`,cursor:`pointer`,fontSize:`16px`};(0,v.createRoot)(document.getElementById(`root`)).render((0,B.jsx)(_.StrictMode,{children:(0,B.jsx)(ur,{})}));