var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],A=-1;function ue(e){return{current:e}}function j(e){0>A||(e.current=le[A],le[A]=null,A--)}function M(e,t){A++,le[A]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function N(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function he(){j(de),j(fe),j(pe)}function ge(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function _e(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),Qf._currentValue=ce)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function P(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,F=null;function ze(e){if(typeof Ie==`function`&&Le(e),F&&typeof F.setStrictMode==`function`)try{F.setStrictMode(Re,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function I(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ot(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var st=Math.random().toString(36).slice(2),L=`__reactFiber$`+st,ct=`__reactProps$`+st,R=`__reactContainer$`+st,lt=`__reactEvents$`+st,ut=`__reactListeners$`+st,dt=`__reactHandles$`+st,ft=`__reactResources$`+st,pt=`__reactMarker$`+st;function z(e){delete e[L],delete e[ct],delete e[lt],delete e[ut],delete e[dt]}function mt(e){var t=e[L];if(t)return t;for(var n=e.parentNode;n;){if(t=n[R]||n[L]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[L])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[L]||e[R]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function _t(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[pt]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return we.call(Tt,e)?!0:we.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Qt(){}var $t=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,nn=null;function rn(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(tn!==null||nn!==null)&&(bu(),tn&&(t=tn,e=nn,nn=tn=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,`passive`,{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function hn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function _n(){return!1}function vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?gn:_n,this.isPropagationStopped=_n,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=vn(yn),xn=h({},yn,{view:0,detail:0}),Sn=vn(xn),Cn,wn,Tn,En=h({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Tn&&(Tn&&e.type===`mousemove`?(Cn=e.screenX-Tn.screenX,wn=e.screenY-Tn.screenY):wn=Cn=0,Tn=e),Cn)},movementY:function(e){return`movementY`in e?e.movementY:wn}}),Dn=vn(En),On=vn(h({},En,{dataTransfer:0})),kn=vn(h({},xn,{relatedTarget:0})),An=vn(h({},yn,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=vn(h({},yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=vn(h({},yn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Fn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fn[e])?!!t[e]:!1}function Ln(){return In}var Rn=vn(h({},xn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=hn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return e.type===`keypress`?hn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?hn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),zn=vn(h({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=vn(h({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Vn=vn(h({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=vn(h({},En,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Un=vn(h({},yn,{newState:0,oldState:0})),Wn=[9,13,27,32],Gn=cn&&`CompositionEvent`in window,Kn=null;cn&&`documentMode`in document&&(Kn=document.documentMode);var qn=cn&&`TextEvent`in window&&!Kn,Jn=cn&&(!Gn||Kn&&8<Kn&&11>=Kn),Yn=` `,B=!1;function Xn(e,t){switch(e){case`keyup`:return Wn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(B=!0,Yn):null;case`textInput`:return e=t.data,e===Yn&&B?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Gn&&Xn(e,t)?(e=mn(),pn=fn=dn=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Jn&&t.locale!==`ko`?null:t.data;default:return null}}var V={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!V[e.type]:t===`textarea`}function nr(e,t,n,r){tn?nn?nn.push(r):nn=[r]:tn=r,t=Ed(t,`onChange`),0<t.length&&(n=new bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){yd(e,0)}function or(e){if(Pt(gt(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(cn){var lr;if(cn){var H=`oninput`in document;if(!H){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),H=typeof ur.oninput==`function`}lr=H}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function dr(){rr&&(rr.detachEvent(`onpropertychange`,fr),ir=rr=null)}function fr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,en(e)),on(ar,t)}}function pr(e,t,n){e===`focusin`?(dr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=cn&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Ft(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};cn&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),xt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ii(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return li(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ii(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ii(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=ii(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:P(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:P(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-Be(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[L]=e,t[ct]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=ue(null),Hi=null,Ui=null;function Wi(e,t,n){M(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,j(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=O.S;O.S=function(e,t){eu=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=ue(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?M(ma,ma.current):M(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qt,Qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Qt,Qt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=fi(t,e.mode,n),t.return=e,t;case E:return t=wa(t),f(e,t,n)}if(se(t)||ae(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=wa(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=wa(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=wa(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=ue(null),Ya=ue(0);function Xa(e,t){e=Ul,M(Ya,e),M(Ja,t),Ul=e|t.baseLanes}function Za(){M(Ya,Ul),M(Ja,Ja.current)}function Qa(){Ul=Ya.current,j(Ja),j(Ya)}var $a=ue(null),eo=null;function to(e){var t=e.alternate;M(oo,oo.current&1),M($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){M(oo,oo.current),M($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(M(oo,oo.current),M($a,e),eo===null&&(eo=e)):io(e)}function io(){M(oo,oo.current),M($a,$a.current)}function ao(e){j($a),eo===e&&(eo=null),j(oo)}var oo=ue(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){O.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),vr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ms(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,ce,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:N(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:ge(t);break;case 4:N(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(N(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[L]=t,r[ct]=e,Pd(r,n,e),vt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return N(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(_e(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=de.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=de.current,Li(t))Fi(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[L]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[L]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[L]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[L]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[L]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(j(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return M(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*ke()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=oo.current,M(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(oo),null;case 4:return he(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&j(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:j(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&j(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[L]=e,t[ct]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&z(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(F&&typeof F.onCommitFiberUnmount==`function`)try{F.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[L]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[L]=e,vt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[L]=e,vt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:O.T===null?at():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),I(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-ke(),10<a)){if(yu(r,t,Jl,!Bl),Je(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},jl(t,a,d);var m=(a&62914560)===a?$l-ke():(a&4194048)===a?eu-ke():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ye(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,O.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=O.H;return O.H=Is,e===null?Is:e}function Eu(){var e=O.A;return O.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=ke()+500,Su(e,t)):Vl=Ye(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!De();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,$e(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ne,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Oe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),it(n),t=t.stateNode,F&&typeof F.onCommitFiberRoot==`function`)try{F.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=it(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),F&&typeof F.onPostCommitFiberRoot==`function`)try{F.onPostCommitFiberRoot(Re,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(I(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),I(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>ke()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ze()),e=$r(e,t),e!==null&&(I(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Te(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Je(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=ke(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),it(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Fe;break;default:n=Ne}return r=cd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Je(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,ke()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Te(je,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=en(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=bn,u=e;switch(e){case`keypress`:if(hn(n)===0)break a;case`keydown`:case`keyup`:l=Rn;break;case`focusin`:u=`focus`,l=kn;break;case`focusout`:u=`blur`,l=kn;break;case`beforeblur`:case`afterblur`:l=kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Dn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=On;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Bn;break;case Ir:case Lr:case Rr:l=An;break;case Hr:l=Vn;break;case`scroll`:case`scrollend`:l=Sn;break;case`wheel`:l=Hn;break;case`copy`:case`cut`:case`paste`:l=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=zn;break;case`toggle`:case`beforetoggle`:l=Un}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==$t&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[R]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Dn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:gt(l),h=u==null?c:gt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?gt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c))if(cr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=sr):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?gt(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(s,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(s,n,i)}var b;if(Gn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Jn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,Qn=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=qn?$n(e,n):er(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=sn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Dt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),z(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);z(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=_t(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);vt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=_t(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=_t(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=_t(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Lt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),vt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Lt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,vt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,vt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),vt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[L]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=rt(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=ke()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=en(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$t=r,n.target.dispatchEvent(r),$t=null}else return t=ht(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[R]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),F=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[R]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=m(),v=c(g(),1),y=c(u());function b(){var e=[...arguments];return(0,y.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var x=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function S(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function C(e){return`nodeType`in e}function w(e){return e?S(e)?e:C(e)?e.ownerDocument?.defaultView??window:window:window}function ee(e){let{Document:t}=w(e);return e instanceof t}function T(e){return S(e)?!1:e instanceof w(e).HTMLElement}function te(e){return e instanceof w(e).SVGElement}function E(e){return e?S(e)?e.document:C(e)?ee(e)?e:T(e)||te(e)?e.ownerDocument:document:document:document}var ne=x?y.useLayoutEffect:y.useEffect;function re(e){let t=(0,y.useRef)(e);return ne(()=>{t.current=e}),(0,y.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function ie(){let e=(0,y.useRef)(null);return[(0,y.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,y.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function ae(e,t){t===void 0&&(t=[e]);let n=(0,y.useRef)(e);return ne(()=>{n.current!==e&&(n.current=e)},t),n}function D(e,t){let n=(0,y.useRef)();return(0,y.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function oe(e){let t=re(e),n=(0,y.useRef)(null);return[n,(0,y.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function se(e){let t=(0,y.useRef)();return(0,y.useEffect)(()=>{t.current=e},[e]),t.current}var O={};function k(e,t){return(0,y.useMemo)(()=>{if(t)return t;let n=O[e]==null?0:O[e]+1;return O[e]=n,e+`-`+n},[e,t])}function ce(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var le=ce(1),A=ce(-1);function ue(e){return`clientX`in e&&`clientY`in e}function j(e){if(!e)return!1;let{KeyboardEvent:t}=w(e.target);return t&&e instanceof t}function M(e){if(!e)return!1;let{TouchEvent:t}=w(e.target);return t&&e instanceof t}function de(e){if(M(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return ue(e)?{x:e.clientX,y:e.clientY}:null}var fe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[fe.Translate.toString(e),fe.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),pe=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function me(e){return e.matches(pe)?e:e.querySelector(pe)}var N={display:`none`};function he(e){let{id:t,value:n}=e;return y.createElement(`div`,{id:t,style:N},n)}function ge(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return y.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function _e(){let[e,t]=(0,y.useState)(``);return{announce:(0,y.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var ve=(0,y.createContext)(null);function ye(e){let t=(0,y.useContext)(ve);(0,y.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function be(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,y.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var xe={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Se={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Ce(e){let{announcements:t=Se,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=xe}=e,{announce:a,announcement:o}=_e(),s=k(`DndLiveRegion`),[c,l]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{l(!0)},[]),ye((0,y.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=y.createElement(y.Fragment,null,y.createElement(he,{id:r,value:i.draggable}),y.createElement(ge,{id:s,announcement:o}));return n?(0,_.createPortal)(u,n):u}var P;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(P||={});function we(){}function Te(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Ee(){var e=[...arguments];return(0,y.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var De=Object.freeze({x:0,y:0});function Oe(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function ke(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Ae(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function je(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function Me(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Ne=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=Me(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=Oe(Me(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(ke)};function Pe(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Fe=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Pe(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Ae)};function Ie(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Le(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:De}function Re(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var F=Re(1);function ze(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Be(e,t,n){let r=ze(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Ve={ignoreTransform:!1};function He(e,t){t===void 0&&(t=Ve);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=w(e).getComputedStyle(e);t&&(n=Be(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Ue(e){return He(e,{ignoreTransform:!0})}function We(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Ge(e,t){return t===void 0&&(t=w(e).getComputedStyle(e)),t.position===`fixed`}function Ke(e,t){t===void 0&&(t=w(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function qe(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(ee(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!T(i)||te(i)||n.includes(i))return n;let a=w(e).getComputedStyle(i);return i!==e&&Ke(i,a)&&n.push(i),Ge(i,a)?n:r(i.parentNode)}return e?r(e):n}function Je(e){let[t]=qe(e,1);return t??null}function Ye(e){return!x||!e?null:S(e)?e:C(e)?ee(e)||e===E(e).scrollingElement?window:T(e)?e:null:null}function Xe(e){return S(e)?e.scrollX:e.scrollLeft}function Ze(e){return S(e)?e.scrollY:e.scrollTop}function Qe(e){return{x:Xe(e),y:Ze(e)}}var I;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(I||={});function $e(e){return!x||!e?!1:e===document.scrollingElement}function et(e){let t={x:0,y:0},n=$e(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var tt={x:.2,y:.2};function nt(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=tt);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=et(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=I.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=I.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=I.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=I.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function rt(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function it(e){return e.reduce((e,t)=>le(e,Qe(t)),De)}function at(e){return e.reduce((e,t)=>e+Xe(t),0)}function ot(e){return e.reduce((e,t)=>e+Ze(t),0)}function st(e,t){if(t===void 0&&(t=He),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Je(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var L=[[`x`,[`left`,`right`],at],[`y`,[`top`,`bottom`],ot]],ct=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=qe(t),r=it(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of L)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},R=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function lt(e){let{EventTarget:t}=w(e);return e instanceof t?e:E(e)}function ut(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var dt;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(dt||={});function ft(e){e.preventDefault()}function pt(e){e.stopPropagation()}var z;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(z||={});var mt={start:[z.Space,z.Enter],cancel:[z.Esc],end:[z.Space,z.Enter,z.Tab]},ht=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case z.Right:return{...n,x:n.x+25};case z.Left:return{...n,x:n.x-25};case z.Down:return{...n,y:n.y+25};case z.Up:return{...n,y:n.y-25}}},gt=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new R(E(t)),this.windowListeners=new R(w(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(dt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&st(n),t(De)}handleKeyDown(e){if(j(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=mt,coordinateGetter:a=ht,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:De;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=A(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=et(n),p=rt(n),m={x:Math.min(i===z.Right?p.right-p.width/2:p.right,Math.max(i===z.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===z.Down?p.bottom-p.height/2:p.bottom,Math.max(i===z.Down?p.top:p.top+p.height/2,u.y))},h=i===z.Right&&!s||i===z.Left&&!c,g=i===z.Down&&!l||i===z.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===z.Right&&e<=d.x||i===z.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===z.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===z.Down&&e<=d.y||i===z.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===z.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,le(A(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};gt.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=mt,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function _t(e){return!!(e&&`distance`in e)}function vt(e){return!!(e&&`delay`in e)}var yt=class{constructor(e,t,n){n===void 0&&(n=lt(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=E(i),this.documentListeners=new R(this.document),this.listeners=new R(n),this.windowListeners=new R(w(i)),this.initialCoordinates=de(r)??De,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.DragStart,ft),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),this.windowListeners.add(dt.ContextMenu,ft),this.documentListeners.add(dt.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(vt(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(_t(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(dt.Click,pt,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(dt.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=de(e)??De,s=A(n,o);if(!t&&a){if(_t(a)){if(a.tolerance!=null&&ut(s,a.tolerance))return this.handleCancel();if(ut(s,a.distance))return this.handleStart()}if(vt(a)&&ut(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===z.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},bt={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},xt=class extends yt{constructor(e){let{event:t}=e,n=E(t.target);super(e,bt,n)}};xt.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var St={move:{name:`mousemove`},end:{name:`mouseup`}},Ct;(function(e){e[e.RightClick=2]=`RightClick`})(Ct||={});var wt=class extends yt{constructor(e){super(e,St,E(e.event.target))}};wt.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Ct.RightClick?!1:(r?.({event:n}),!0)}}];var Tt={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},Et=class extends yt{constructor(e){super(e,Tt)}static setup(){return window.addEventListener(Tt.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Tt.move.name,e)};function e(){}}};Et.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var Dt;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(Dt||={});var Ot;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Ot||={});function kt(e){let{acceleration:t,activator:n=Dt.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Ot.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=jt({delta:d,disabled:!a}),[m,h]=ie(),g=(0,y.useRef)({x:0,y:0}),_=(0,y.useRef)({x:0,y:0}),v=(0,y.useMemo)(()=>{switch(n){case Dt.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Dt.DraggableRect:return i}},[n,i,c]),b=(0,y.useRef)(null),x=(0,y.useCallback)(()=>{let e=b.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),S=(0,y.useMemo)(()=>s===Ot.TreeOrder?[...l].reverse():l,[s,l]);(0,y.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=nt(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),b.current=e,m(x,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var At={x:{[I.Backward]:!1,[I.Forward]:!1},y:{[I.Backward]:!1,[I.Forward]:!1}};function jt(e){let{delta:t,disabled:n}=e,r=se(t);return D(e=>{if(n||!r||!e)return At;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[I.Backward]:e.x[I.Backward]||i.x===-1,[I.Forward]:e.x[I.Forward]||i.x===1},y:{[I.Backward]:e.y[I.Backward]||i.y===-1,[I.Forward]:e.y[I.Forward]||i.y===1}}},[n,t,r])}function Mt(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return D(e=>t==null?null:r??e??null,[r,t])}function Nt(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Pt;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Pt||={});var Ft;(function(e){e.Optimized=`optimized`})(Ft||={});var It=new Map;function Lt(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,y.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,y.useRef)(e),d=g(),f=ae(d),p=(0,y.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,y.useRef)(null),h=D(t=>{if(d&&!n)return It;if(!t||t===It||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new ct(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,y.useEffect)(()=>{u.current=e},[e]),(0,y.useEffect)(()=>{d||p()},[n,d]),(0,y.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,y.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Pt.Always:return!1;case Pt.BeforeDragging:return n;default:return!n}}}function Rt(e,t){return D(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function zt(e,t){return Rt(e,t)}function Bt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Vt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ht(e){return new ct(He(e),e)}function Ut(e,t,n){t===void 0&&(t=Ht);let[r,i]=(0,y.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Bt({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Vt({callback:a});return ne(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Wt(e){return Le(e,Rt(e))}var Gt=[];function Kt(e){let t=(0,y.useRef)(e),n=D(n=>e?n&&n!==Gt&&e&&t.current&&e.parentNode===t.current.parentNode?n:qe(e):Gt,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),n}function qt(e){let[t,n]=(0,y.useState)(null),r=(0,y.useRef)(e),i=(0,y.useCallback)(e=>{let t=Ye(e.target);t&&n(e=>e?(e.set(t,Qe(t)),new Map(e)):null)},[]);return(0,y.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Ye(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Qe(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Ye(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>le(e,t),De):it(e):De,[e,t])}function Jt(e,t){t===void 0&&(t=[]);let n=(0,y.useRef)(null);return(0,y.useEffect)(()=>{n.current=null},t),(0,y.useEffect)(()=>{let t=e!==De;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?A(e,n.current):De}function Yt(e){(0,y.useEffect)(()=>{if(!x)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Xt(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Zt(e){return(0,y.useMemo)(()=>e?We(e):null,[e])}var Qt=[];function $t(e,t){t===void 0&&(t=He);let[n]=e,r=Zt(n?w(n):null),[i,a]=(0,y.useState)(Qt);function o(){a(()=>e.length?e.map(e=>$e(e)?r:new ct(t(e),e)):Qt)}let s=Vt({callback:o});return ne(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function en(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return T(t)?t:e}function tn(e){let{measure:t}=e,[n,r]=(0,y.useState)(null),i=Vt({callback:(0,y.useCallback)(e=>{for(let{target:n}of e)if(T(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=oe((0,y.useCallback)(e=>{let n=en(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,y.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var nn=[{sensor:xt,options:{}},{sensor:gt,options:{}}],rn={current:{}},an={draggable:{measure:Ue},droppable:{measure:Ue,strategy:Pt.WhileDragging,frequency:Ft.Optimized},dragOverlay:{measure:He}},on=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},sn={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new on,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:we},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:an,measureDroppableContainers:we,windowRect:null,measuringScheduled:!1},cn={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:we,draggableNodes:new Map,over:null,measureDroppableContainers:we},ln=(0,y.createContext)(cn),un=(0,y.createContext)(sn);function dn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new on}}}function fn(e,t){switch(t.type){case P.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case P.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case P.DragEnd:case P.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case P.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new on(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case P.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new on(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case P.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new on(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function pn(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,y.useContext)(ln),a=se(r),o=se(n?.id);return(0,y.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!j(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=me(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function mn(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function hn(e){return(0,y.useMemo)(()=>({draggable:{...an.draggable,...e?.draggable},droppable:{...an.droppable,...e?.droppable},dragOverlay:{...an.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function gn(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,y.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ne(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Le(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Je(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var _n=(0,y.createContext)({...De,scaleX:1,scaleY:1}),vn;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(vn||={});var yn=(0,y.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=nn,collisionDetection:o=Fe,measuring:s,modifiers:c,...l}=e,[u,d]=(0,y.useReducer)(fn,void 0,dn),[f,p]=be(),[m,h]=(0,y.useState)(vn.Uninitialized),g=m===vn.Initialized,{draggable:{active:v,nodes:b,translate:x},droppable:{containers:S}}=u,C=v==null?null:b.get(v),ee=(0,y.useRef)({initial:null,translated:null}),T=(0,y.useMemo)(()=>v==null?null:{id:v,data:C?.data??rn,rect:ee},[v,C]),te=(0,y.useRef)(null),[E,re]=(0,y.useState)(null),[ie,D]=(0,y.useState)(null),oe=ae(l,Object.values(l)),se=k(`DndDescribedBy`,t),O=(0,y.useMemo)(()=>S.getEnabled(),[S]),ce=hn(s),{droppableRects:A,measureDroppableContainers:ue,measuringScheduled:j}=Lt(O,{dragging:g,dependencies:[x.x,x.y],config:ce.droppable}),M=Mt(b,v),fe=(0,y.useMemo)(()=>ie?de(ie):null,[ie]),pe=Ye(),me=zt(M,ce.draggable.measure);gn({activeNode:v==null?null:b.get(v),config:pe.layoutShiftCompensation,initialRect:me,measure:ce.draggable.measure});let N=Ut(M,ce.draggable.measure,me),he=Ut(M?M.parentElement:null),ge=(0,y.useRef)({activatorEvent:null,active:null,activeNode:M,collisionRect:null,collisions:null,droppableRects:A,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),_e=S.getNodeFor(ge.current.over?.id),ye=tn({measure:ce.dragOverlay.measure}),xe=ye.nodeRef.current??M,Se=g?ye.rect??N:null,we=!!(ye.nodeRef.current&&ye.rect),Te=Wt(we?null:N),Ee=Zt(xe?w(xe):null),De=Kt(g?_e??M:null),Oe=$t(De),ke=mn(c,{transform:{x:x.x-Te.x,y:x.y-Te.y,scaleX:1,scaleY:1},activatorEvent:ie,active:T,activeNodeRect:N,containerNodeRect:he,draggingNodeRect:Se,over:ge.current.over,overlayNodeRect:ye.rect,scrollableAncestors:De,scrollableAncestorRects:Oe,windowRect:Ee}),Ae=fe?le(fe,x):null,Me=qt(De),Ne=Jt(Me),Pe=Jt(Me,[N]),Le=le(ke,Ne),Re=Se?F(Se,ke):null,ze=T&&Re?o({active:T,collisionRect:Re,droppableRects:A,droppableContainers:O,pointerCoordinates:Ae}):null,Be=je(ze,`id`),[Ve,He]=(0,y.useState)(null),Ue=Ie(we?ke:le(ke,Pe),Ve?.rect??null,N),We=(0,y.useRef)(null),Ge=(0,y.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(te.current==null)return;let i=b.get(te.current);if(!i)return;let a=e.nativeEvent;We.current=new n({active:te.current,activeNode:i,event:a,options:r,context:ge,onAbort(e){if(!b.get(e))return;let{onDragAbort:t}=oe.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!b.get(e))return;let{onDragPending:i}=oe.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=te.current;if(t==null)return;let n=b.get(t);if(!n)return;let{onDragStart:r}=oe.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:ee}};(0,_.unstable_batchedUpdates)(()=>{r?.(i),h(vn.Initializing),d({type:P.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),re(We.current),D(a)})},onMove(e){d({type:P.DragMove,coordinates:e})},onEnd:o(P.DragEnd),onCancel:o(P.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=ge.current,o=null;if(t&&i){let{cancelDrop:s}=oe.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===P.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=P.DragCancel)}te.current=null,(0,_.unstable_batchedUpdates)(()=>{d({type:e}),h(vn.Uninitialized),He(null),re(null),D(null),We.current=null;let t=e===P.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=oe.current[t];e?.(o),f({type:t,event:o})}})}}},[b]),Ke=Nt(a,(0,y.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=b.get(r);if(te.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},te.current=r,Ge(n,t))},[b,Ge]));Yt(a),ne(()=>{N&&m===vn.Initializing&&h(vn.Initialized)},[N,m]),(0,y.useEffect)(()=>{let{onDragMove:e}=oe.current,{active:t,activatorEvent:n,collisions:r,over:i}=ge.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:Le.x,y:Le.y},over:i};(0,_.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[Le.x,Le.y]),(0,y.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=ge.current;if(!e||te.current==null||!t||!i)return;let{onDragOver:a}=oe.current,o=r.get(Be),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,_.unstable_batchedUpdates)(()=>{He(s),a?.(c),f({type:`onDragOver`,event:c})})},[Be]),ne(()=>{ge.current={activatorEvent:ie,active:T,activeNode:M,collisionRect:Re,collisions:ze,droppableRects:A,draggableNodes:b,draggingNode:xe,draggingNodeRect:Se,droppableContainers:S,over:Ve,scrollableAncestors:De,scrollAdjustedTranslate:Le},ee.current={initial:Se,translated:Re}},[T,M,ze,Re,b,xe,Se,A,S,Ve,De,Le]),kt({...pe,delta:x,draggingRect:Re,pointerCoordinates:Ae,scrollableAncestors:De,scrollableAncestorRects:Oe});let qe=(0,y.useMemo)(()=>({active:T,activeNode:M,activeNodeRect:N,activatorEvent:ie,collisions:ze,containerNodeRect:he,dragOverlay:ye,draggableNodes:b,droppableContainers:S,droppableRects:A,over:Ve,measureDroppableContainers:ue,scrollableAncestors:De,scrollableAncestorRects:Oe,measuringConfiguration:ce,measuringScheduled:j,windowRect:Ee}),[T,M,N,ie,ze,he,ye,b,S,A,Ve,ue,De,Oe,ce,j,Ee]),Je=(0,y.useMemo)(()=>({activatorEvent:ie,activators:Ke,active:T,activeNodeRect:N,ariaDescribedById:{draggable:se},dispatch:d,draggableNodes:b,over:Ve,measureDroppableContainers:ue}),[ie,Ke,T,N,d,se,b,Ve,ue]);return y.createElement(ve.Provider,{value:p},y.createElement(ln.Provider,{value:Je},y.createElement(un.Provider,{value:qe},y.createElement(_n.Provider,{value:Ue},i)),y.createElement(pn,{disabled:n?.restoreFocus===!1})),y.createElement(Ce,{...n,hiddenTextDescribedById:se}));function Ye(){let e=E?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),bn=(0,y.createContext)(null),xn=`button`,Sn=`Draggable`;function Cn(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=k(Sn),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,y.useContext)(ln),{role:p=xn,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,y.useContext)(g?_n:bn),[v,b]=oe(),[x,S]=oe(),C=Xt(o,t),w=ae(n);return ne(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,y.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===xn?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:_}}function wn(){return(0,y.useContext)(un)}var Tn=`Droppable`,En={timeout:25};function Dn(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=k(Tn),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,y.useContext)(ln),u=(0,y.useRef)({disabled:n}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),p=(0,y.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...En,...i},_=ae(h??r),v=Vt({callback:(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[b,x]=oe((0,y.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),S=ae(t);return(0,y.useEffect)(()=>{!v||!b.current||(v.disconnect(),d.current=!1,v.observe(b.current))},[b,v]),(0,y.useEffect)(()=>(s({type:P.RegisterDroppable,element:{id:r,key:a,disabled:n,node:b,rect:f,data:S}}),()=>s({type:P.UnregisterDroppable,key:a,id:r})),[r]),(0,y.useEffect)(()=>{n!==u.current.disabled&&(s({type:P.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:b,over:c,setNodeRef:x}}function On(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function kn(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function An(e){return e!==null&&e>=0}function jn(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Mn(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var Nn=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=On(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Pn={scaleX:1,scaleY:1},Fn=e=>{let{activeIndex:t,activeNodeRect:n,index:r,rects:i,overIndex:a}=e,o=i[t]??n;if(!o)return null;if(r===t){let e=i[a];return e?{x:0,y:t<a?e.top+e.height-(o.top+o.height):e.top-o.top,...Pn}:null}let s=In(i,r,t);return r>t&&r<=a?{x:0,y:-o.height-s,...Pn}:r<t&&r>=a?{x:0,y:o.height+s,...Pn}:{x:0,y:0,...Pn}};function In(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return r?n<t?i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}var Ln=`Sortable`,Rn=y.createContext({activeIndex:-1,containerId:Ln,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Nn,disabled:{draggable:!1,droppable:!1}});function zn(e){let{children:t,id:n,items:r,strategy:i=Nn,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=wn(),d=k(Ln,n),f=s.rect!==null,p=(0,y.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,y.useRef)(p),v=!jn(p,_.current),b=g!==-1&&h===-1||v,x=Mn(a);ne(()=>{v&&m&&u(p)},[v,p,m,u]),(0,y.useEffect)(()=>{_.current=p},[p]);let S=(0,y.useMemo)(()=>({activeIndex:h,containerId:d,disabled:x,disableTransforms:b,items:p,overIndex:g,useDragOverlay:f,sortedRects:kn(p,c),strategy:i}),[h,d,x.draggable,x.droppable,b,p,g,c,f,i]);return y.createElement(Rn.Provider,{value:S},t)}var Bn=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return On(n,r,i).indexOf(t)},Vn=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Hn={duration:200,easing:`ease`},Un=`transform`,Wn=fe.Transition.toString({property:Un,duration:0,easing:`linear`}),Gn={roleDescription:`sortable`};function Kn(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,y.useState)(null),s=(0,y.useRef)(n);return ne(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=He(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,y.useEffect)(()=>{a&&o(null)},[a]),a}function qn(e){let{animateLayoutChanges:t=Vn,attributes:n,disabled:r,data:i,getNewIndex:a=Bn,id:o,strategy:s,resizeObserverConfig:c,transition:l=Hn}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,y.useContext)(Rn),x=Jn(r,p),S=u.indexOf(o),C=(0,y.useMemo)(()=>({sortable:{containerId:d,index:S,items:u},...i}),[d,i,S,u]),w=(0,y.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:ee,node:T,isOver:te,setNodeRef:E}=Dn({id:o,data:C,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:w,...c}}),{active:ne,activatorEvent:re,activeNodeRect:ie,attributes:ae,setNodeRef:D,listeners:oe,isDragging:se,over:O,setActivatorNodeRef:k,transform:ce}=Cn({id:o,data:C,attributes:{...Gn,...n},disabled:x.draggable}),le=b(E,D),A=!!ne,ue=A&&!m&&An(f)&&An(g),M=!_&&se,de=ue?(M&&ue?ce:null)??(s??v)({rects:h,activeNodeRect:ie,activeIndex:f,overIndex:g,index:S}):null,pe=An(f)&&An(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):S,me=ne?.id,N=(0,y.useRef)({activeId:me,items:u,newIndex:pe,containerId:d}),he=u!==N.current.items,ge=t({active:ne,containerId:d,isDragging:se,isSorting:A,id:o,index:S,items:u,newIndex:N.current.newIndex,previousItems:N.current.items,previousContainerId:N.current.containerId,transition:l,wasDragging:N.current.activeId!=null}),_e=Kn({disabled:!ge,index:S,node:T,rect:ee});return(0,y.useEffect)(()=>{A&&N.current.newIndex!==pe&&(N.current.newIndex=pe),d!==N.current.containerId&&(N.current.containerId=d),u!==N.current.items&&(N.current.items=u)},[A,pe,d,u]),(0,y.useEffect)(()=>{if(me===N.current.activeId)return;if(me!=null&&N.current.activeId==null){N.current.activeId=me;return}let e=setTimeout(()=>{N.current.activeId=me},50);return()=>clearTimeout(e)},[me]),{active:ne,activeIndex:f,attributes:ae,data:C,rect:ee,index:S,newIndex:pe,items:u,isOver:te,isSorting:A,isDragging:se,listeners:oe,node:T,overIndex:g,over:O,setNodeRef:le,setActivatorNodeRef:k,setDroppableNodeRef:E,setDraggableNodeRef:D,transform:_e??de,transition:ve()};function ve(){if(_e||he&&N.current.newIndex===S)return Wn;if(!(M&&!j(re)||!l)&&(A||ge))return fe.Transition.toString({...l,property:Un})}}function Jn(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}z.Down,z.Right,z.Up,z.Left;var Yn=`/Koenigliche-Mafia/`,B=e=>`${Yn}${e}`,Xn=[{id:1,title:`Intro - Motte, hast du eigentlich einen Plan?`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:1,duration:`00:59`,releaseDate:`2026-03-27`,cover:B(`covers/Intro-Motte-hast-du-eigentlich-einen-Plan.jpeg`),file:B(`songs/Intro-Motte-hast-du-eigentlich-einen-Plan.mp3`),isSingle:!1},{id:2,title:`Skateboard Chemistry`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:2,duration:`03:04`,releaseDate:`2026-03-27`,cover:B(`covers/Skateboard-Chemistry.png`),file:B(`songs/Skateboard-Chemistry.mp3`),isSingle:!1},{id:3,title:`Crystal Moth`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:3,duration:`01:48`,releaseDate:`2026-03-27`,cover:B(`covers/Crystal-Moth.png`),file:B(`songs/Crystal-Moth.mp3`),isSingle:!1},{id:4,title:`Competitive Advantage`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:4,duration:`02:28`,releaseDate:`2026-03-27`,cover:B(`covers/Competitive-Advantage.png`),file:B(`songs/Competitive-Advantage.mp3`),isSingle:!1},{id:5,title:`Crystal Moth Supreme`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:5,duration:`03:17`,releaseDate:`2026-03-27`,cover:B(`covers/Crystal-Moth-Supreme.jpg`),file:B(`songs/Crystal-Moth-Supreme.mp3`),isSingle:!1},{id:6,title:`Operation Mottemaker`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:6,duration:`02:04`,releaseDate:`2026-03-27`,cover:B(`covers/Operation-Mottemaker.png`),file:B(`songs/Operation-Mottemaker.mp3`),isSingle:!1},{id:7,title:`Escape Velocity`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:7,duration:`03:47`,releaseDate:`2026-03-27`,cover:B(`covers/Escape-Velocity.png`),file:B(`songs/Escape-Velocity.mp3`),isSingle:!1},{id:8,title:`Mottemaker Industries`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:8,duration:`02:30`,releaseDate:`2026-03-27`,cover:B(`covers/Mottemaker-Industries.jpg`),file:B(`songs/Mottemaker-Industries.mp3`),isSingle:!1},{id:9,title:`Empire on Fire`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:9,duration:`02:51`,releaseDate:`2026-03-27`,cover:B(`covers/Empire-on-Fire.jpg`),file:B(`songs/Empire-on-Fire.mp3`),isSingle:!1},{id:10,title:`Schedule II`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:10,duration:`02:57`,releaseDate:`2026-03-27`,cover:B(`covers/Schedule-II.jpg`),file:B(`songs/Schedule-II.mp3`),isSingle:!1},{id:11,title:`Alexis, Mi Hermano`,artist:`Motte`,duration:`03:41`,releaseDate:`2026-03-16`,cover:B(`covers/Alexis-Mi-Hermano.png`),file:B(`songs/Alexis-Mi-Hermano.mp3`),isSingle:!0},{id:12,title:`Alexis Brother`,artist:`Motte`,duration:`03:36`,releaseDate:`2026-03-16`,cover:B(`covers/Alexis_Brother.png`),file:B(`songs/Alexis_Brother.mp3`),isSingle:!0},{id:13,title:`Il Ritorno del Don Motte`,artist:`Erdbeerenfresser`,album:`Il Ritorno del Don Motte - Single`,albumTrackNumber:1,duration:`03:37`,releaseDate:`2026-04-10`,cover:B(`covers/il-ritorno-del-don-motte.jpg`),file:B(`songs/il-ritorno-del-don-motte.mp3`),isSingle:!0},{id:14,title:`Rückfahrt Zwei Stunden`,artist:`Erdbeerenfresser`,duration:`02:44`,releaseDate:`2026-04-12`,cover:B(`covers/Rückfahrt_Zwei_Stunden.png`),file:B(`songs/Rückfahrt_Zwei_Stunden.mp3`),isSingle:!0},{id:`jascha1`,title:`Jascha Winter und der Freizeitparkzauber`,artist:`Motte`,duration:`04:44`,releaseDate:`2026-03-05`,cover:B(`covers/Jascha-Winter-und-der-Freizeitparkzauber.jpg`),file:B(`songs/Jascha-Winter-und-der-Freizeitparkzauber.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:15,title:`Hymne an Alexis (remasterd)`,artist:`Motte`,duration:`03:25`,releaseDate:`2025-09-12`,cover:B(`covers/Hymne_an_Alexis_(remasterd).jpg`),file:B(`songs/Hymne_an_Alexis_(remasterd).mp3`),isSingle:!0},{id:16,title:`Die Bußhymne an Alexis`,artist:`Motte`,duration:`03:23`,releaseDate:`2026-03-16`,cover:B(`covers/Die-Bußhymne-an-Alexis.png`),file:B(`songs/Die-Bußhymne-an-Alexis.mp3`),isSingle:!0},{id:17,title:`Ben, das geht auf mich`,artist:`Motte`,duration:`03:20`,releaseDate:`2026-01-29`,cover:B(`covers/Ben_das_geht_auf_mich.png`),file:B(`songs/Ben_das_geht_auf_mich.mp3`),isSingle:!0},{id:18,title:`Ik ben gleich soweit!`,artist:`Merlin`,duration:`02:23`,releaseDate:`2026-02-27`,cover:B(`covers/Ik-ben-gleich-soweit!.jpg`),file:B(`songs/Ik-ben-gleich-soweit!.mp3`),isSingle:!0},{id:19,title:`PrinzMotte, unser Held`,artist:`Erdbeerenfresser`,duration:`03:48`,releaseDate:`2026-01-30`,cover:B(`covers/PrinzMotte,_unser_Held.jpg`),file:B(`songs/PrinzMotte,_unser_Held.mp3`),isSingle:!0},{id:20,title:`Kochstream Ambience`,artist:`Merlin`,duration:`01:49`,releaseDate:`2026-02-27`,cover:B(`covers/Kochstream-Ambience.jpg`),file:B(`songs/Kochstream-Ambience.mp3`),isSingle:!0},{id:21,title:`Fleischwurst`,artist:`Merlin`,duration:`04:24`,releaseDate:`2026-01-23`,cover:B(`covers/Fleischwurst.jpg`),file:B(`songs/Fleischwurst.mp3`),isSingle:!0},{id:22,title:`Erdbeerenfresser`,artist:`Merlin`,duration:`02:29`,releaseDate:`2026-01-17`,cover:B(`covers/Erdbeerenfresser.jpg`),file:B(`songs/Erdbeerenfresser.mp3`),isSingle:!0},{id:23,title:`There are heroes`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-03-20`,cover:B(`covers/There are heroes.jpg`),file:B(`songs/There are heroes.mp3`),isSingle:!0},{id:24,title:`Mack`,artist:`Erdbeerenfresser`,duration:`05:37`,releaseDate:`2026-03-17`,cover:B(`covers/Mack.jpg`),file:B(`songs/Mack.mp3`),isSingle:!0},{id:`jascha2`,title:`Party`,artist:`Erdbeerenfresser X Coaster_Liam`,duration:`02:09`,releaseDate:`2026-03-16`,cover:B(`covers/Party.jpg`),file:B(`songs/Party.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:25,title:`Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)`,artist:`Erdbeerenfresser`,duration:`04:32`,releaseDate:`2026-03-16`,cover:B(`covers/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).png`),file:B(`songs/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).mp3`),isSingle:!0},{id:26,title:`Nu hör ma zu…`,artist:`Erdbeerenfresser`,duration:`03:13`,releaseDate:`2026-03-16`,cover:B(`covers/Nu hör ma zu….jpg`),file:B(`songs/Nu hör ma zu….mp3`),isSingle:!0},{id:27,title:`Yeah yeah`,artist:`Erdbeerenfresser`,duration:`01:41`,releaseDate:`2026-03-16`,cover:B(`covers/Yeah yeah.jpg`),file:B(`songs/Yeah yeah.mp3`),isSingle:!0},{id:28,title:`Motte Cooking Stream`,artist:`Erdbeerenfresser`,duration:`03:09`,releaseDate:`2026-03-16`,cover:B(`covers/Motte Cooking Stream.jpg`),file:B(`songs/Motte Cooking Stream.mp3`),isSingle:!0},{id:29,title:`Printer läuft die ganze Nacht`,artist:`Erdbeerenfresser`,duration:`04:09`,releaseDate:`2026-03-15`,cover:B(`covers/Printer läuft die ganze Nacht.jpg`),file:B(`songs/Printer läuft die ganze Nacht.mp3`),isSingle:!0},{id:`jascha3`,title:`Hippo sagt böse Sachen`,artist:`Erdbeerenfresser`,duration:`02:55`,releaseDate:`2026-03-14`,cover:B(`covers/Hippo sagt böse Sachen.jpg`),file:B(`songs/Hippo sagt böse Sachen.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:30,title:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`,artist:`Motte`,duration:`03:40`,releaseDate:`2026-03-25`,cover:B(`covers/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.jpg`),file:B(`songs/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.mp3`),isSingle:!0},{id:`jascha4`,title:`Zwischen Rauch und Achterbahn`,artist:`Erdbeerenfresser`,duration:`03:02`,releaseDate:`2026-04-14`,cover:B(`covers/Zwischen Rauch und Achterbahn.jpg`),file:B(`songs/Zwischen Rauch und Achterbahn.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:31,title:`Ois für’n Alexis`,artist:`Erdbeerenfresser`,duration:`03:01`,releaseDate:`2026-04-15`,cover:B(`covers/Ois für’n Alexis.jpg`),file:B(`songs/Ois für’n Alexis.mp3`),isSingle:!0},{id:32,title:`Mr. Moneymaker`,artist:`Erdbeerenfresser`,duration:`03:42`,releaseDate:`2026-04-15`,cover:B(`covers/Mr. Moneymaker.jpg`),file:B(`songs/Mr. Moneymaker.mp3`),isSingle:!0},{id:33,title:`Indian coding berry`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-04-15`,cover:B(`covers/Indian coding berry.jpg`),file:B(`songs/Indian coding berry.mp3`),isSingle:!0},{id:34,title:`Pauli foahrt durch Barcelona (Meddl Edition)`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-03-25`,cover:B(`covers/Pauli foahrt durch Barcelona (Meddl Edition).jpg`),file:B(`songs/Pauli foahrt durch Barcelona (Meddl Edition).mp3`),isSingle:!0},{id:35,title:`Marco… hörst du mich?`,artist:`Erdbeerenfresser`,duration:`04:34`,releaseDate:`2026-04-16`,cover:B(`covers/Marco… hörst du mich.jpg`),file:B(`songs/Marco… hörst du mich.mp3`),isSingle:!0},{id:36,title:`EPMC – The Park Awaits`,artist:`Motte`,duration:`03:47`,releaseDate:`2026-04-16`,cover:B(`covers/EPMC – The Park Awaits.jpg`),file:B(`songs/EPMC – The Park Awaits.mp3`),isSingle:!0},{id:37,title:`Mottemod (König vom Server)`,artist:`Erdbeerenfresser`,duration:`04:27`,releaseDate:`2026-04-17`,cover:B(`covers/Mottemod (König vom Server).jpg`),file:B(`songs/Mottemod (König vom Server).mp3`),isSingle:!0},{id:`jascha5`,title:`Wundertüten-Freitag (Queen Claudia)`,artist:`Erdbeerenfresser`,duration:`03:29`,releaseDate:`2026-04-17`,cover:B(`covers/Wundertüten-Freitag (Queen Claudia).png`),file:B(`songs/Wundertüten-Freitag (Queen Claudia).mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:38,title:`Erdbeere Mine Session`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:1,duration:`02:11`,releaseDate:`2026-04-17`,cover:B(`covers/Erdbeere Mine Session.png`),file:B(`songs/Erdbeere Mine Session.mp3`),isSingle:!1},{id:39,title:`Auf der Suche nach Diamanten`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:2,duration:`02:28`,releaseDate:`2026-04-17`,cover:B(`covers/Auf der Suche nach Diamanten.png`),file:B(`songs/Auf der Suche nach Diamanten.mp3`),isSingle:!1},{id:40,title:`Noch tiefer`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:3,duration:`02:42`,releaseDate:`2026-04-17`,cover:B(`covers/Noch tiefer.png`),file:B(`songs/Noch tiefer.mp3`),isSingle:!1},{id:41,title:`Auch Eisen ist wichtig`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:4,duration:`02:16`,releaseDate:`2026-04-17`,cover:B(`covers/Auch Eisen ist wichtig.png`),file:B(`songs/Auch Eisen ist wichtig.mp3`),isSingle:!1},{id:42,title:`Diamanten in meiner Hand`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:5,duration:`02:38`,releaseDate:`2026-04-17`,cover:B(`covers/Diamanten in meiner Hand.png`),file:B(`songs/Diamanten in meiner Hand.mp3`),isSingle:!1},{id:`jascha6`,title:`E-Scooter im Müllmodus`,artist:`Motte`,duration:`02:03`,releaseDate:`2026-04-18`,cover:B(`covers/E-Scooter im Müllmodus.png`),file:B(`songs/E-Scooter im Müllmodus.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:`jascha7`,title:`WAS...?`,artist:`Erdbeerenfresser`,duration:`03:08`,releaseDate:`2026-04-18`,cover:B(`covers/WAS....png`),file:B(`songs/WAS....mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:43,title:`EPMC – Lay Low Nights`,artist:`Motte`,duration:`03:54`,releaseDate:`2026-04-19`,cover:B(`covers/EPMC – Lay Low Nights.png`),file:B(`songs/EPMC – Lay Low Nights.mp3`),isSingle:!0},{id:44,title:`Mr. Moneymaker Land`,artist:`Erdbeerenfresser`,duration:`02:46`,releaseDate:`2026-04-19`,cover:B(`covers/Mr. Moneymaker Land.png`),file:B(`songs/Mr. Moneymaker Land.mp3`),isSingle:!0},{id:`jascha8`,title:`Jascha Full Throttle`,artist:`Motte`,duration:`04:13`,releaseDate:`2026-04-23`,cover:B(`covers/JASCHA_FULL_THROTTLE.png`),file:B(`songs/JASCHA_FULL_THROTTLE.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:45,title:`Es war ein Abend wie jeder andere`,artist:`Erdbeerenfresser`,duration:`03:37`,releaseDate:`2026-03-15`,cover:B(`covers/Es war ein Abend wie jeder andere.jpeg`),file:B(`songs/Es war ein Abend wie jeder andere.mp3`),isSingle:!0},{id:46,title:`Rückkehr des Königs`,artist:`Erdbeerenfresser`,duration:`03:19`,releaseDate:`2026-04-25`,cover:B(`covers/Rückkehr des Königs.jpeg`),file:B(`songs/Rückkehr des Königs.mp3`),isSingle:!0},{id:47,title:`Motte Nicht Da`,artist:`Erdbeerenfresser`,duration:`01:56`,releaseDate:`2026-04-27`,cover:B(`covers/Motte Nicht Da.jpeg`),file:B(`songs/Motte Nicht Da.mp3`),isSingle:!0},{id:48,title:`Motte, komm bitte bald zurück`,artist:`Erdbeerenfresser`,duration:`03:14`,releaseDate:`2026-04-29`,cover:B(`covers/Motte, komm bitte bald zurück.png`),file:B(`songs/Motte, komm bitte bald zurück.mp3`),isSingle:!0},{id:49,title:`Alexis of the Emerald Isle`,artist:`Motte`,duration:`06:00`,releaseDate:`2026-05-18`,cover:B(`covers/Alexis of the Emerald Isle.png`),file:B(`songs/Alexis of the Emerald Isle.mp3`),isSingle:!0},{id:50,title:`Königliche A.I. Songs`,artist:`Erdbeerenfresser`,duration:`03:59`,releaseDate:`2026-05-19`,cover:B(`covers/Königliche A.I. Songs.png`),file:B(`songs/Königliche A.I. Songs.mp3`),isSingle:!0},{id:51,title:`Ein wunderschönes Haus`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:1,duration:`02:02`,releaseDate:`2026-05-12`,cover:B(`covers/Ein wunderschönes Haus.png`),file:B(`songs/Ein wunderschönes Haus.mp3`),isSingle:!1},{id:52,title:`Verreck, du blöder Mottenmann`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:2,duration:`02:44`,releaseDate:`2026-05-12`,cover:B(`covers/Verreck, du blöder Mottenmann.png`),file:B(`songs/Verreck, du blöder Mottenmann.mp3`),isSingle:!1},{id:53,title:`Motte… warum tust du mir das an`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:3,duration:`02:51`,releaseDate:`2026-05-12`,cover:B(`covers/Motte… warum tust du mir das an.png`),file:B(`songs/Motte… warum tust du mir das an.mp3`),isSingle:!1},{id:54,title:`Die Flucht des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:4,duration:`03:34`,releaseDate:`2026-05-12`,cover:B(`covers/Die Flucht des Mottenmanns.png`),file:B(`songs/Die Flucht des Mottenmanns.mp3`),isSingle:!1},{id:55,title:`Die Ruhe des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:5,duration:`04:38`,releaseDate:`2026-05-12`,cover:B(`covers/Die Ruhe des Mottenmanns.png`),file:B(`songs/Die Ruhe des Mottenmanns.mp3`),isSingle:!1},{id:56,title:`Città di Marmo`,artist:`Motte`,duration:`04:32`,releaseDate:`2026-05-12`,cover:B(`covers/Citta di Marmo.png`),file:B(`songs/Citta di Marmo.mp3`),isSingle:!0},{id:`57`,title:`Erdbeere Around the World – Teaser`,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),albumTrackNumber:0,duration:`01:24`,releaseDate:`2026-05-24`,cover:B(`covers/EATW.png`),file:B(`songs/EATWT.mp3`),isSingle:!1},{id:58,title:`Boarding Pass`,albumTrackNumber:1,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`01:45`,releaseDate:`2026-05-25`,cover:B(`covers/Boarding Pass.png`),file:B(`songs/Boarding Pass.mp3`),isSingle:!1},{id:59,title:`Shanghai Dreams`,albumTrackNumber:2,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:00`,releaseDate:`2026-05-25`,cover:B(`covers/Shanghai Dreams.png`),file:B(`songs/Shanghai Dreams.mp3`),isSingle:!1},{id:60,title:`Rio Nights`,albumTrackNumber:3,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:37`,releaseDate:`2026-05-25`,cover:B(`covers/Rio Nights.png`),file:B(`songs/Rio Nights.mp3`),isSingle:!1},{id:61,title:`Dolce Vita`,albumTrackNumber:4,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:21`,releaseDate:`2026-05-25`,cover:B(`covers/Dolce Vita.png`),file:B(`songs/Dolce Vita.mp3`),isSingle:!1},{id:62,title:`Amsterdam 3AM`,albumTrackNumber:5,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:59`,releaseDate:`2026-05-25`,cover:B(`covers/Amsterdam 3AM.png`),file:B(`songs/Amsterdam 3AM.mp3`),isSingle:!1},{id:63,title:`Route 66`,albumTrackNumber:6,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:25`,releaseDate:`2026-05-25`,cover:B(`covers/Route 66.png`),file:B(`songs/Route 66.mp3`),isSingle:!1},{id:64,title:`Sandstorm Eyes`,albumTrackNumber:7,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`04:57`,releaseDate:`2026-05-25`,cover:B(`covers/Sandstorm Eyes.png`),file:B(`songs/Sandstorm Eyes.mp3`),isSingle:!1},{id:65,title:`Greek Summer`,albumTrackNumber:8,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:49`,releaseDate:`2026-05-25`,cover:B(`covers/Greek Summer.png`),file:B(`songs/Greek Summer.mp3`),isSingle:!1},{id:66,title:`Kingston Sun`,albumTrackNumber:9,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`02:09`,releaseDate:`2026-05-25`,cover:B(`covers/Kingston Sun.png`),file:B(`songs/Kingston Sun.mp3`),isSingle:!1},{id:67,title:`Corazón Caliente`,albumTrackNumber:10,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:14`,releaseDate:`2026-05-25`,cover:B(`covers/Corazón Caliente.png`),file:B(`songs/Corazón Caliente.mp3`),isSingle:!1},{id:68,title:`Safari`,albumTrackNumber:11,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:07`,releaseDate:`2026-05-25`,cover:B(`covers/Safari.png`),file:B(`songs/Safari.mp3`),isSingle:!1},{id:69,title:`Home Again`,albumTrackNumber:12,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`02:56`,releaseDate:`2026-05-25`,cover:B(`covers/Home Again.png`),file:B(`songs/Home Again.mp3`),isSingle:!1},{id:`jascha9`,title:`JOA IST HALT PHYSIK!`,artist:`Erdbeerenfresser`,duration:`02:52`,releaseDate:`2026-05-21`,cover:B(`covers/Ganz Hessen Kennt Jetzt Paul.png`),file:B(`songs/Ganz Hessen Kennt Jetzt Paul.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:70,title:`Der Unfall`,artist:`Erdbeerenfresser`,duration:`03:56`,releaseDate:`2026-05-30`,cover:B(`covers/Der Unfall.png`),file:B(`songs/Der Unfall.mp3`),isSingle:!0},{id:`BD1`,title:`Midnight Login`,artist:`BerryDeadly`,duration:`02:57`,releaseDate:`2099-05-21`,cover:B(`covers/Midnight Login.png`),file:B(`songs/Midnight Login.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD2`,title:`Strawberry Nights`,artist:`BerryDeadly`,duration:`04:12`,releaseDate:`2099-05-21`,cover:B(`covers/Strawberry Nights.png`),file:B(`songs/Strawberry Nights.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD3`,title:`Main Character`,artist:`BerryDeadly`,duration:`03:12`,releaseDate:`2099-05-21`,cover:B(`covers/Main Character.png`),file:B(`songs/Main Character.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD4`,title:`After 3AM`,artist:`BerryDeadly`,duration:`03:54`,releaseDate:`2099-05-21`,cover:B(`covers/After 3AM.png`),file:B(`songs/After 3AM.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD5`,title:`Coffee Overload`,artist:`BerryDeadly`,duration:`03:30`,releaseDate:`2099-05-21`,cover:B(`covers/Coffee Overload.png`),file:B(`songs/Coffee Overload.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD6`,title:`404 <3`,artist:`BerryDeadly`,duration:`03:17`,releaseDate:`2099-05-21`,cover:B(`covers/404 _3.png`),file:B(`songs/404 _3.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD7`,title:`SECRET CODE`,artist:`BerryDeadly`,duration:`03:24`,releaseDate:`2099-05-21`,cover:B(`covers/SECRET CODE.png`),file:B(`songs/SECRET CODE.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD8`,title:`LOW BATTERY`,artist:`BerryDeadly`,duration:`02:33`,releaseDate:`2099-05-21`,cover:B(`covers/LOW BATTERY.png`),file:B(`songs/LOW BATTERY.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD9`,title:`LEVEL UP`,artist:`BerryDeadly`,duration:`03:41`,releaseDate:`2099-05-21`,cover:B(`covers/LEVEL UP.png`),file:B(`songs/LEVEL UP.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD10`,title:`NO SIGNAL`,artist:`BerryDeadly`,duration:`03:45`,releaseDate:`2099-05-21`,cover:B(`covers/NO SIGNAL.png`),file:B(`songs/NO SIGNAL.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD11`,title:`RELOAD`,artist:`BerryDeadly`,duration:`06:03`,releaseDate:`2099-05-21`,cover:B(`covers/RELOAD.png`),file:B(`songs/RELOAD.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD12`,title:`Bring me back to Neo City`,artist:`BerryDeadly`,duration:`03:47`,releaseDate:`2099-05-30`,cover:B(`covers/Bring me back to Neo City.png`),file:B(`songs/Bring me back to Neo City.mp3`),isSingle:!0,hidden:!0,hiddenTag:`berrydeadly`}],Zn=[{version:`1.4.1`,label:`2026-05-30`,changes:[`📻 Neo City Radio wächst weiter`,`→ Das Radioprogramm wurde um neue Inhalte erweitert`,`📢 Neue Werbespots verfügbar`,`→ Vier zusätzliche Werbespots wurden integriert`,`🎙️ Erweiterte Radioübertragungen`,`→ Das Programm umfasst jetzt insgesamt zwölf Werbespots`,`📡 Neue Live-Informationen`,`→ Neo City Radio zeigt jetzt den aktuell laufenden Titel an`,`⏭️ Neue Vorschau verfügbar`,`→ Der nächste kommende Song wird nun direkt angezeigt`,`🌃 Überarbeitete Startseiten-Informationen`,`→ Die Neo City Radio Infobox wurde aktualisiert`,`🎧 Verbesserte Radioerfahrung`,`→ Wichtige Informationen sind nun direkt auf der Startseite sichtbar`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radiologik, Anzeige und Hintergrundsystemen`,`✨ Weitere Übertragungen laufen bereits`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.0`,label:`2026-05-29`,changes:[`🌃 Neo City Comes Alive`,`→ Eine neue Frequenz erwacht in Neo City`,`🎧 Neues Langzeit-Erlebnis hinzugefügt`,`→ Eine neue Möglichkeit, Königliche AI Songs zu erleben`,`🎙️ Neue Audioelemente integriert`,`→ Zusätzliche Inhalte wurden im Hintergrund vorbereitet`,`🌙 Neue Übergänge und Atmosphären`,`→ Das Hörerlebnis wurde an mehreren Stellen erweitert`,`📢 Neue Einspieler verfügbar`,`→ Verschiedene neue Inhalte können nun im Laufe der Wiedergabe erscheinen`,`🎤 Erweiterte Hintergrundinhalte`,`→ Zusätzliche exklusive Inhalte wurden integriert`,`⏳ Event-Countdown hinzugefügt`,`→ Die Startseite zeigt jetzt den Countdown bis zum Erwachen von Neo City`,`🖥️ Neue Hintergrundsysteme`,`→ Vorbereitungen für zukünftige Inhalte und Ereignisse`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Wiedergabe, Planung und Hintergrundsystemen`,`❓ Weitere Übertragungen könnten folgen`,`→ Neo City hört niemals auf zu senden`]},{version:`1.3.1`,label:`2026-05-26`,changes:[`⏱️ Album-Spielzeiten hinzugefügt`,`→ Albumseiten zeigen jetzt die gesamte Laufzeit aller enthaltenen Tracks an`,`💿 Album-Header erweitert`,`→ Trackanzahl und Gesamtdauer werden jetzt gemeinsam im Header angezeigt`,`🎵 Dynamische Dauerberechnung implementiert`,`→ Spielzeiten werden automatisch aus den einzelnen Songdaten berechnet`,`🖥️ Albumansicht weiter verfeinert`,`→ Zusätzliche Informationen sind jetzt direkt über den Play- und Shuffle-Buttons sichtbar`,`🧠 Kleine interne Optimierungen`,`→ Dauerlogik zentralisiert und für zukünftige Features vorbereitet`]},{version:`1.3.0`,label:`2026-05-19 01:30`,changes:`🎭 Neuer 'Extra'-Bereich eingeführt(→ Monatlich ausgewählte Cover und Mashups erhalten jetzt einen eigenen Bereich innerhalb der Bibliothek(🧩 Cover- und Mashup-System vollständig integriert(→ Nutzer können jetzt direkt über die Webseite Cover- und Mashup-Anfragen erstellen(📝 Mehrstufige Anfrage-Dialoge hinzugefügt(→ Schritt-für-Schritt-System für Song-Auswahl, Stil-Prompts und automatische Anfrage-Texte(🎵 Dynamische Song-Auswahl implementiert(→ Dropdowns greifen jetzt direkt auf die bestehende Songbibliothek zu(🕵️ Versteckte Songs werden automatisch herausgefiltert(→ Geheime Inhalte erscheinen nicht mehr in öffentlichen Anfrage-Systemen(📋 Automatische Textgenerierung für Google-Formulare(→ Anfrage-Texte für Cover und Mashups werden jetzt automatisch vorbereitet(🎚️ Neues Extra-Datensystem eingeführt(→ Covers und Mashups können jetzt separat über extras.js verwaltet werden(🎤 Lyrics-System erweitert(→ Covers unterstützen jetzt automatische Lyrics-Weiterleitung über lyricsKey(🔗 'Original anzeigen'-Funktion hinzugefügt(→ Covers und Mashups können jetzt direkt ihre Ursprungssongs anzeigen(🪄 Mashup-Originalsystem erweitert(→ Mashups öffnen jetzt ein Auswahlfenster für mehrere Originalsongs(📦 Extra-Titel vollständig mit Playlist-System kompatibel gemacht(→ Covers und Mashups können jetzt wie normale Songs gespeichert werden(🖥️ Dropdown-Menüs visuell komplett überarbeitet(→ Einheitliches Styling, bessere Hover-Effekte und saubere Button-Struktur(📱 Zusätzliche Spacer-Logik für Dropdowns eingebaut(→ Menüs werden nicht mehr vom unteren Player abgeschnitten(✨ Extra-Seite optisch erweitert(→ Neues Hinweis-System und verbesserte Empty-State-Darstellung(🧠 Diverse interne Verbesserungen und Strukturvorbereitungen(→ Grundlage für zukünftige Community-Features und Extra-Releases geschaffen`.split(`(`)},{version:`1.2.2`,label:`2026-04-20 20:00`,changes:[`🔀 Shuffle für Playlists hinzugefügt`,`→ Zufällige Wiedergabe jetzt auch für deine eigenen Sammlungen verfügbar`,`❄️ Ein Hauch von Kälte liegt in der Bibliothek…`,`→ Manche Songs zeigen sich nur denen, die wissen, wann es Winter wird`,`🗝️ Neue verborgene Inhalte im System verteilt`,`→ Nicht alles ist sichtbar… manchmal muss man genauer hinschauen um unseren Platz zu finden`,`🧠 Kleine Verbesserungen an Navigation & Player-Logik`,`→ Weiter-Button arbeitet jetzt zuverlässiger im Hintergrund`]},{version:`1.2.1`,label:`2026-04-20 12:00`,changes:[`Ein weiterer Zugang wurde implementiert – nicht jeder wird ihn finden`,`Einige Inhalte reagieren jetzt anders auf bestimmte Interaktionen`,`Neue Zustände wurden ergänzt, bleiben aber im Verborgenen`,`Die Bibliothek kennt mehr als sie zeigt`,`Ein Pfad öffnet sich nur für diejenigen, die wissen, was sie tun`,`Import- und Wiedergabesystem im Hintergrund erweitert`,`Grundlagen für zukünftige versteckte Inhalte geschaffen`,`Kleinere Verbesserungen an Stabilität und interner Logik`]},{version:`1.2.0`,label:`2026-04-16 20:37`,changes:[`Playlist-System vollständig überarbeitet und erweitert`,`Songs können jetzt mehrfach in Playlists und Warteschlange hinzugefügt werden (keine Limitierung mehr)`,`Entfernen aus Playlist löscht jetzt nur noch eine Instanz statt alle gleichen Songs`,`Playlist-Übersicht mit dynamischer Cover-Collage (bis zu 4 Cover + '+X' Anzeige)`,`Playlist-Detailseite überarbeitet und besser strukturiert`,`Playlist-Menü erweitert: 'Aus Playlist entfernen' jetzt direkt im 3-Punkte-Menü integriert`,`Playlist-UI für Mobile deutlich verbessert (Layout, Buttons, Handling)`,`Playlist-Änderungen werden sofort live aktualisiert (kein Neuladen mehr nötig)`,`Import/Export-System für Playlists stabilisiert und verbessert`,`SongRow-System erweitert (Playlist-Kontext integriert für bessere Funktionalität)`,`Queue-System verbessert: Drag & Drop bleibt kompatibel mit doppelten Songs`,`React-Key-System angepasst, um doppelte Songs korrekt darzustellen`,`Allgemeine Stabilitäts- und UI-Fixes im Playlist-Bereich`]},{version:`1.1.0`,label:`2026-04-15 23:50`,changes:[`Fullscreen-Player eingeführt (Spotify-ähnlicher Modus mit großem Cover und dynamischem Hintergrund)`,`Animierter Songwechsel im Fullscreen (Slide- und Fade-Übergang)`,`Fullscreen-Controls blenden sich automatisch bei Inaktivität aus und bei Bewegung wieder ein`,`Eigener Player im Fullscreen integriert (Play, Skip, Repeat, Progress, Volume)`,`Liedtext-System erweitert: Lyrics jetzt auch im Fullscreen verfügbar`,`Lyrics aktualisieren sich automatisch beim Songwechsel (auch außerhalb des Fullscreens)`,`Separate Steuerung für Lyrics im normalen Player und im Fullscreen`,`Mobile UI komplett überarbeitet (Floating Player, bessere Abstände, saubere Touch-Bedienung)`,`Album-Header und Songlisten vollständig responsive gemacht`,`Progress-Bar visuell und technisch überarbeitet (bessere Synchronisation mit Slider)`,`Überlappungsfehler zwischen Progress-Bar und Zeitanzeige behoben`,`Player-Layout optimiert (Spacing, Alignment und Lesbarkeit verbessert)`,`Lautstärkeregler weiter verbessert (visuelles Feedback und Positionierung)`,`Stabilitätsverbesserungen im Playback-System (Queue, History und Repeat Verhalten optimiert)`]},{version:`1.0.3`,label:`2026-04-15 01:05`,changes:[`Song-Einreichungsformular integriert (Google Forms Anbindung)`,`Neuer Menüpunkt 'Song einreichen' im Drawer hinzugefügt`,`Popup-System für externe Aktionen erweitert (inkl. Overlay und Close-Funktion)`,`Saubere Weiterleitung zum Formular in neuem Tab implementiert`,`UI für Community-Interaktionen vorbereitet und erweitert`,`Grundlage für zukünftige Moderation / Song-Review-System geschaffen`]},{version:`1.0.2`,label:`2026-04-14 19:40`,changes:[`Repeat-System eingeführt (Off / Repeat All / Repeat One)`,`Repeat One (R1) sorgt dafür, dass der aktuelle Track dauerhaft geloopt wird`,`Repeat All (R) wiederholt die gesamte aktuelle Hör-Session (History + Queue)`,`History-System vollständig implementiert (Zurückspringen zu vorherigen Tracks möglich)`,`Vorher-/Zurück-Button nutzt jetzt echte Track-History statt nur Neustart`,`Weiter-Button und Tastatursteuerung funktionieren jetzt auch am Ende der Queue bei aktivem Repeat`,`Neue Wiedergaben (z. B. einzelner Song oder Albumstart) setzen History korrekt zurück`,`Verbesserte Player-Logik für konsistentes Verhalten zwischen Queue, History und Repeat`]},{version:`1.0.1`,label:`2026-04-14 00:05`,changes:[`Lautstärkeregler überarbeitet und visuell dynamisch gemacht (gefüllter Bereich = grün, Rest = grau)`,`Mute-/Unmute-Funktion über Lautsprecher-Icon hinzugefügt (merkt sich letzte Lautstärke)`,`Media Session API integriert (Metadaten werden im System angezeigt)`,`Playersteuerung über Tastatur möglich (Play/Pause, Weiter, Zurück)`,`Liedtext-System eingeführt und in externe Datei (Texte.js) ausgelagert`,`Lyrics-Popup im Player eingebaut (inkl. Overlay und Close-Funktion)`,`Lyrics-UI verbessert und Titel im Popup zentriert`,`Player-Architektur für zukünftige Features erweitert`]},{version:`1.0.0`,label:`2026-04-13 20:25`,changes:[`Die erste Vollversion ist draußen. Jetzt mit allen aktuellen AI-Songs die es zum heutigem Stand gibt`,`Volume-Regler wurde eingeführt`,`Texte wurden da wo möglich hinzugefügt`,`Viel Spaß mit den Königlichen AI Songs. VG Erdbeere`]},{version:`0.8.1`,label:`2026-04-12 15:00`,changes:[`Patchnotes-System eingeführt`,`Song-System eingeführt`]},{version:`0.8.0`,label:`2026-04-12 13:00`,changes:[`Custom Player mit eigener Progressbar eingebaut`,`Play- und Pause-Logik im Player überarbeitet`,`Queue-System hinzugefügt`,`Drag & Drop für die Warteschlange eingebaut`,`Warteschlange direkt im Menü integriert`,`Queue-Löschen-Funktion ergänzt`,`Songlisten so umgebaut, dass ganze Zeilen abspielbar sind`,`Album-Klick in der Songliste führt direkt zur Albumseite`,`Album Play und Shuffle eingebaut`,`Songs-Ansicht mit Play- und Shuffle-Buttons ergänzt`,`Startseite mit Hero-Bereich aufgebaut`,`Bereiche für Neueste Releases und Aktuelle Alben ergänzt`,`Hover-Effekte auf Releases, Alben und Songzeilen eingebaut`,`Impressum-Seite hinzugefügt`,`Patchnotes-Seite hinzugefügt`,`Klick auf „Königliche AI Songs“ führt zurück zur Startseite`]}],Qn={"Midnight Login":`[Intro]
Oh my god~
Welcome back tonight~
Annyeong~
Midnight login~

[Einstieg]
Hey~
Tonight gets louder~
Erdbeere time~

[Strophe 1]
Lichter spiegeln sich im Bildschirmlicht
Noch eine Nachricht um halb vier
Eigentlich wollte ich längst schlafen
Doch plötzlich startet wieder Musik

Neue Ideen im Voicechat wieder
Alle sagen „nur noch ein Song“
Doch fünf Minuten später klingt es
Wie ein ganzes Comeback schon

[Pre-Refrain]
Oh~
Alles glowt heut Nacht
Oh~
Neonlichter pink und black

Gaja~
Tonight tonight~
Alles fühlt sich oversized an

[Refrain]
Midnight login~
Hey hey hey~
City lights und Erdbeere bleibt wach~

Midnight login~
Oh my god~
Alle drehen komplett durch heut Nacht~

Oh~
Saranghae tonight~
Wir verlieren wieder jedes Zeitgefühl~

Midnight login~
Neon heartbeat~
Und die Nacht ist noch lange nicht vorbei~

[Post-Chorus]
Oh oh oh~
Erdbeere time~
Hey hey hey~
Neon heartbeat~

[Strophe 2]
Glossy Lippen, oversized fit
Monitorlicht auf meinem Blick
Noch ein Song und noch ein Beat
Und plötzlich klingt die Nacht wie Hits

Zu viele Tabs gleichzeitig offen
Zu viele Ideen gleichzeitig
Doch genau aus diesem Chaos
Entsteht plötzlich neue Musik

[Pre-Refrain]
Oh~
Alle bleiben wieder wach
Oh~
Bass fliegt durch die ganze Nacht

Gaja~
Hands up now~
Alles fühlt sich viel zu groß an

[Rap-Part]
Okay wait—
Pink lights~
Bass drop~
Everybody going nonstop

Voicechat loud~
Volume high~
Monitor glow die ganze Night

Glow up~
Too fast~
Wieder viel zu wenig Schlaf

Erdbeere macht komplett zu viel
Doch genau das macht den Vibe so hart

Neo lights~
Alles blinkt~
Everybody scream tonight

[Dance Break]
Hey~
Oh oh oh~
Tonight tonight~
Erdbeere time~

[Bridge]
After midnight…
Alles wird leiser…

Nur die Lichter…
Bleiben noch wach…

Annyeong…
Welcome back…

[Finaler Refrain]
Midnight login~
Hey hey hey~
Wieder viel zu lange wach heut Nacht~

Midnight login~
Oh my god~
Zwischen Chaos fühlt sich alles leicht an~

Oh~
Secret city~
Niemand weiß dass dieses Album lebt~

Midnight login~
Neon heartbeat~
Und die Nacht ist noch lange nicht vorbei~

[Outro]
Oh~
Erdbeere time~
Tonight tonight~
Midnight login~`,"Strawberry Nights":`[Intro]
Oh~
Late night calling~
Annyeong~
Strawberry nights~

Neo city lights~
Welcome back tonight~

[Strophe 1]
Mitternacht auf meinem Bildschirm
Nur noch Codes und Neonlicht
Alle schlafen längst da draußen
Doch mein Fenster leuchtet noch

Eine Nachricht in der Dunkelheit
Und plötzlich öffnet sich ein Pfad
Zwischen Zahlen und Melodien
Fühlt sich alles wieder nah an

Voicechat flackert in der Nacht
Während draußen Regen fällt
Und irgendwo in all dem Chaos
Öffnet sich ’ne neue Welt

[Pre-Refrain]
Oh~
Nur wir kennen diesen Code
Oh~
Secret signs im Monitor glow

Gaja~
Tonight tonight~
Niemand weiß wohin das führt

[Refrain]
Strawberry nights~
Oh oh oh~
Zwischen Sternen und dem Monitorlicht~

Strawberry nights~
Hey hey hey~
Nur der Code bringt mich zurück zu dir~

Oh~
Saranghae tonight~
Alle Lichter spiegeln sich im Raum~

Strawberry nights~
Neon heartbeat~
Und die Nacht hört einfach niemals auf~

[Post-Chorus]
Oh oh oh~
Strawberry nights~
Annyeong~
Stay awake tonight~

[Strophe 2]
Neue Fenster öffnen langsam
Während draußen Stille fällt
Jede Zahl wird zur Erinnerung
An eine eigene kleine Welt

Alles wirkt wie ein Geheimnis
Das nur nachts lebendig wird
Zwischen Beats und leeren Straßen
Weiß ich wieder wer ich bin

Zu viele Gedanken gleichzeitig
Zu viele Farben im Display
Doch genau in diesen Nächten
Fühlt sich alles irgendwie echt

[Pre-Refrain]
Oh~
Neo city never sleeps
Oh~
모두 dancing in my dreams

Gaja~
Hands up high~
Heute bleibt hier niemand still

[Rap-Part 1]
Okay—
Late night~
Screen light~
City sleeping out of sight

Code signs~
Blue lights~
Everything comes back tonight

Voice low~
Heart high~
Neo dreaming through the night

Erdbeere bleibt noch wach
Während draußen alles schweigt

Monitor glow~
Heartbeat fast~
Viel zu viel passiert gleichzeitig

Tabs offen~
Bass drop~
Alle drehen komplett durch heut Nacht

[Dance Break]
Hey~
Oh oh oh~
Tonight tonight~
Strawberry nights~

Neo glow~
Hands up now~
모두 scream it loud~

[Rap-Part 2]
Too fast~
Too bright~
Laser through the rainy night

One code~
One sign~
Everything unlocks tonight

Annyeong~
City vibe~
Pink and silver in my eyes

Erdbeere bleibt online
Bis die Sonne wieder scheint

[Bridge]
After midnight…
Bleibt nur das Leuchten…

Von all den Dingen…
Die niemand sonst versteht…

Saranghae…
Welcome back…

[Finaler Refrain]
Strawberry nights~
Oh oh oh~
Zwischen Sternen und dem Monitorlicht~

Strawberry nights~
Hey hey hey~
Nur der Code bringt mich zurück zu dir~

Oh~
Secret city~
Niemand kennt den Weg hierher~

Strawberry nights~
Neon heartbeat~
Und die Nacht hört einfach niemals auf~

[Final Post-Chorus]
Oh oh oh~
Strawberry nights~
Gaja~
Stay awake tonight~

[Outro]
Neo city lights~
Welcome back~`,"Main Character":`[Intro]
Oh my god~
Erdbeere tonight~

Hey~
Turn it up~
모두 scream now~

[Strophe 1]
Alle schauen wenn ich auftauch
Camera flash direkt auf mich
Zu laut, zu spät, zu viel Energie
Doch genau darum geht es nicht

Neue Screens mit meinem Namen
Leuchten durch die ganze Stadt
Und irgendwo im Untergrund
Läuft schon wieder dieser Track

[Pre-Refrain]
Oh~
Everybody knows it now
Oh~
Neon shining through the crowd

Gaja~
Hands up high~
Heute gehört die Nacht uns allein

[Refrain]
Main character~
Oh oh oh~
Alle kennen jetzt mein Gesicht~

Main character~
Hey hey hey~
Erdbeere macht diese City verrückt~

Oh~
Saranghae tonight~
Alles leuchtet wenn ich vorbeizieh~

Main character~
Neon heartbeat~
Und die ganze Crowd singt wieder mit~

[Post-Chorus]
Oh oh oh~
Main character~
Hey hey hey~
Everybody loud~

[Strophe 2]
Glossy fit und platform shoes
Monitor glow auf meinem Blick
Alles fühlt sich an wie Showtime
Auch wenn nichts davon echt ist

Zu viele Menschen kennen Codes
Zu viele Stimmen in der Nacht
Doch je größer alles wird
Desto heller wird die Stadt

[Rap-Part]
Okay—
Too fast~
Too bright~
Everybody looking at me tonight

Flash lights~
Spotlight~
Neo city coming back alive

Volume high~
Bass drop~
모두 going nonstop

Erdbeere macht komplett zu viel
Doch genau das macht den Song so hot

Glow up~
All eyes~
Laser through the midnight sky

Too loud~
Too wild~
Everybody scream tonight

[Dance Break]
Hey~
Oh oh oh~
Tonight tonight~
Main character~

Neo glow~
Hands up now~
모두 scream it loud~

[Bridge]
After midnight…
Wird alles größer…

Alle Stimmen…
Rufen meinen Namen…

Annyeong…
Welcome back…

[Finaler Refrain]
Main character~
Oh oh oh~
Alle kennen jetzt mein Gesicht~

Main character~
Hey hey hey~
Erdbeere macht diese City verrückt~

Oh~
Secret city~
Alles leuchtet wenn ich vorbeizieh~

Main character~
Neon heartbeat~
Und die ganze Nacht singt wieder mit~

[Outro]
Oh~
Erdbeere tonight~
Main character~`,"After 3AM":`[Intro]
Oh~
After 3AM~
안녕…
Erdbeere time…

[Strophe 1]
Leere Straßen unter Regen
Nur mein Bildschirm leuchtet noch
모든 불빛 사라져도
Bleibt mein Fenster weiter an

Zu viele Nächte ohne Pause
Zu viele Songs gleichzeitig
Und plötzlich wird mir in der Stille klar
Wie einsam Neon wirken kann

[Pre-Refrain]
Oh~
모든 게 느려져
Oh~
Nur mein Herz bleibt wieder wach

사랑해…
After 3AM…
Ich verlier erneut das Zeitgefühl

[Refrain]
After 3AM~
Oh oh oh~
Alle Lichter wirken plötzlich kalt~

After 3AM~
Stay with me~
오늘 밤은 끝나지 않아~

Oh~
Neo city lights~
Spiegeln sich in meinen Augen heut~

After 3AM~
Neon heartbeat~
Erdbeere time in der Dunkelheit~

[Post-Chorus]
Oh oh oh~
After 3AM~
안녕…
Stay awake tonight~

[Strophe 2]
Voicechat wurde längst verlassen
Nur das Rauschen bleibt zurück
모든 목소리 사라져도
Hör ich sie noch irgendwo

Zwischen all den bunten Farben
Und dem künstlichen Neonlicht
Frag ich mich ob hinter allem
Noch irgendwas Echtes liegt

오늘 밤도 난 여기 있어
Zwischen Bildschirm und Musik
Und je leiser alles draußen wird
Desto lauter wird mein Kopf

[Rap-Part]
Too late~
Too tired~
City sleeping outside

푸른 불빛~
Rain drops~
Everything feels slow tonight

One screen~
One voice~
Echoes in the empty dark

Erdbeere bleibt noch online
Während langsam alles schweigt

혼자 남은 midnight city
모든 기억 flashing lights
Too many nights~
Too many songs~
Erdbeere time bis morgens drei

[Bridge]
After midnight…
모든 게 멀어져…

Keine Stimmen…
Keine Nachrichten…

사랑해…
Goodnight…

[Finaler Refrain]
After 3AM~
Oh oh oh~
Alle Lichter wirken plötzlich kalt~

After 3AM~
Stay with me~
오늘 밤은 끝나지 않아~

Oh~
Secret city~
Niemand hört die letzten Songs~

After 3AM~
Neon heartbeat~
Erdbeere time in der Dunkelheit~

[Outro]
Oh~
After 3AM~
잘 자…
Goodnight tonight~`,"Coffee Overload":`
[Intro]
Five AM~
Still awake~
너무 많은 coffee in my brain~

Annyeong~
Erdbeere time~
Coffee overload~

[Strophe 1]
새벽 네 시 또 안 자
Drei Kaffee und ich fühl nichts mehr
Monitor glow in meinen Augen
근데 아직 끝나지 않아

Neue Songs im Sekundentakt
Zu viele Ideen gleichzeitig
Alle sagen „geh schlafen endlich“
Doch mein Kopf sagt einfach nein

[Pre-Refrain]
Oh~
Heartbeat going way too fast
Oh~
Neo city never sleeps

Gaja~
Too much caffeine~
오늘 밤도 미쳐가~

[Refrain]
Coffee overload~
Oh oh oh~
Erdbeere schläft heut sicher nicht~

Coffee overload~
Hey hey hey~
너무 깨어 있어 tonight~

Oh~
Saranghae tonight~
Alles leuchtet viel zu hell gerade~

Coffee overload~
Neon heartbeat~
Und mein Kopf hört einfach nicht mehr auf~

[Post-Chorus]
Too much coffee~
Too much coffee~
모두 wake up now~

[Strophe 2]
Tabs offen auf drei Bildschirmen
Voicechat loud im Hintergrund
Jemand sagt „du bist komplett krank“
근데 난 그냥 웃고 있어

Zu viel Zucker, viel zu laut
Bass fliegt durch den ganzen Raum
Und plötzlich entstehen fünf neue Songs
Obwohl das nie geplant war

Espresso auf dem Schreibtisch
Americano Nummer vier
Neo lights in meinem Zimmer
Und ich verlier das Zeitgefühl

[Rap-Part]
Okay—
Too fast~
No sleep~
너무 많은 caffeine inside of me

One more cup~
Heartbeat jump~
Neo city glowing endlessly

Volume high~
Blue lights~
모두 going crazy now

Erdbeere macht komplett zu viel
Doch genau das macht den Vibe so loud

Americano~
Espresso~
모두 scream it let’s go

Too much coffee~
No control~
오늘 밤은 끝나지 않아

[Dance Break]
Hey~
Oh oh oh~
Coffee overload~

Hands up~
Wake up~
모두 louder now~

[Bridge]
Five AM…
Still awake…

No sleep…
Only music…

안녕…
One more coffee…

[Finaler Refrain]
Coffee overload~
Oh oh oh~
Erdbeere schläft heut sicher nicht~

Coffee overload~
Hey hey hey~
너무 깨어 있어 tonight~

Oh~
Secret city~
Alle drehen komplett durch heut Nacht~

Coffee overload~
Neon heartbeat~
Und mein Kopf hört einfach nicht mehr auf~

[Outro]
Too much coffee~
Erdbeere time~
안녕~
No sleep tonight~`,"404 <3":`[Intro]
…
Error…
심장 오류…
404 heart not found…

[Strophe 1]
Monitorlicht auf meinem Gesicht
Während alles langsam glitcht
Zu viele Nächte ohne Schlaf
Und plötzlich fühlt sich nichts mehr echt an

Neue Nachrichten öffnen sich
Doch ich les sie nicht einmal
모든 감정 사라져
Wie ein Fehler im System

[Pre-Refrain]
Oh~
Something breaking in my mind
Oh~
모든 게 멀어져 가

Gaja~
Can you hear me now~
Oder bin ich schon zu weit weg?

[Refrain]
404 heart not found~
Oh oh oh~
Irgendwas in mir fühlt sich kaputt an~

404 heart not found~
Hey hey hey~
모든 감정 loading langsam down~

Oh~
Saranghae tonight~
Doch ich fühl das alles nicht mehr richtig~

404 heart not found~
Neon heartbeat~
Und mein Herz klingt nur noch digital~

[Post-Chorus]
404~
404~
Heart not found tonight~

[Strophe 2]
Alle Farben wirken blasser
Selbst das Neon verliert Glow
Und egal wie laut die Songs sind
Wird mein Kopf nicht leiser heut

Voicechat klingt wie ein Echo
Von einer Welt die langsam stirbt
Und ich frag mich ob ich irgendwann
Noch weiß wer Erdbeere wirklich ist

오늘 밤도 화면 속에
Suche ich nach irgendeinem Zeichen
Doch alles wirkt nur noch wie Fehler
In einer kaputten Wirklichkeit

[Bridge]
After midnight…
Everything freezes…

Keine Stimmen…
Nur noch Stille…

모든 불빛 사라져…
Everything fading out…

사랑해…
System error…

[Finaler Refrain]
404 heart not found~
Oh oh oh~
Irgendwas in mir fühlt sich kaputt an~

404 heart not found~
Stay with me~
모든 감정 fading into black~

Oh~
Secret city~
Alle Lichter sterben langsam aus~

404 heart not found~
Neon heartbeat~
Und mein Herz klingt nur noch digital~

[Outro]
…
404…
심장 오류…
Goodnight…`,"SECRET CODE":`
[Intro]
Shh…
Can you hear it…?
암호 해제…
Secret code~

[Strophe 1]
Mitternacht, die Stadt schläft längst
Doch mein Bildschirm leuchtet blau
Eine Nachricht ohne Absender
Taucht plötzlich wieder bei mir auf

Nur ein Zeichen
Nur ein Satz
Doch mein Herz schlägt viel zu schnell
Denn irgendwo hinter den Zahlen
Öffnet sich erneut die Welt

[Pre-Refrain]
Oh~
Can you feel the harmony?
Oh~
모든 신호 이어져

Gaja~
Follow the lights~
Heute führt der Code zu uns

[Refrain]
Secret code~
Oh oh oh~
Hidden voices singing in the dark~

Secret code~
Hey hey hey~
모든 heartbeat moving all as one~

Oh~
Saranghae tonight~
Alle Stimmen klingen jetzt gleich laut~

Secret code~
Neon harmony~
Und die ganze Nacht singt mit uns mit~

[Post-Chorus]
Secret code~
Secret code~
모두 follow the lights now~

[Strophe 2]
Jede Nachricht wie ein Echo
Jede Stimme klingt vertraut
Und egal wie weit wir weg sind
Fühlt sich alles plötzlich nah an

Neue Fenster öffnen langsam
Laser ziehen durch den Raum
Und aus hundert einzelnen Stimmen
Wird auf einmal ein großer Sound

오늘 밤은 달라 보여
Everything feels so alive
Und die ganze Secret City
Scheint im selben Takt zu sein

[Harmony Break]
Oh oh oh~
Stay together tonight~

Oh oh oh~
모든 마음 연결돼~

Oh oh oh~
Secret code forever~

[Bridge]
After midnight…
All the lights connect…

Keine Stille…
Nur noch Stimmen…

사랑해…
Sing with me…

[Finaler Refrain]
Secret code~
Oh oh oh~
Hidden voices singing in the dark~

Secret code~
Stay tonight~
모든 heartbeat moving all as one~

Oh~
Secret city~
Alle Lichter folgen unserm Sound~

Secret code~
Neon harmony~
Und die ganze Nacht singt mit uns mit~

[Final Harmony]
Oh oh oh~
Secret code~

Annyeong~
Stay tonight~

Oh oh oh~
모두 together now~

[Outro]
…
암호 해제…
Secret code~
Welcome back~`,"LOW BATTERY":`
[Intro]
…
2 percent…
안녕…
Don’t leave yet…

Erdbeere time~

[Strophe 1]
Bildschirmlicht wird langsam dunkler
Und die Stadt wird still um vier
Leere Tassen auf dem Schreibtisch
Doch ich will noch nicht von hier

Voicechat klingt jetzt viel ruhiger
Alle werden langsam müde
Aber irgendwas in mir
Will dass diese Nacht nie endet

[Pre-Refrain]
Oh~
Battery running low
Oh~
모든 불빛 희미해져

Stay~
Tonight tonight~
Nur noch ein bisschen länger wach

[Refrain]
Low battery~
Oh oh oh~
Please don’t let this moment end~

Low battery~
Stay with me~
오늘 밤은 너무 아름다워~

Oh~
Saranghae tonight~
Alle Stimmen werden langsam weich~

Low battery~
Neon heartbeat~
Und die Sonne kommt schon viel zu früh~

[Post-Chorus]
Low battery~
Stay awake~
안녕…
Just a little longer~

[Strophe 2]
Fenster zeigen schon den Morgen
Während alles leiser wird
Neue Songs laufen im Hintergrund
Wie Erinnerungen dieser Nacht

Alle reden jetzt langsamer
Als würde niemand schlafen wollen
Denn sobald wir offline gehen
Wird die Welt wieder normal

모든 게 끝나가기 전에
Bleib noch kurz bei mir heut Nacht
Denn ich weiß sobald es still wird
Werd ich das hier wieder vermissen

[Bridge]
Sunrise coming…
모든 게 사라져…

Keine Neonlichter…
Keine Stimmen mehr…

사랑해…
Goodnight…

[Finaler Refrain]
Low battery~
Oh oh oh~
Please don’t let this moment end~

Low battery~
Stay with me~
오늘 밤은 너무 아름다워~

Oh~
Secret city~
Alle Fenster färben sich jetzt gold~

Low battery~
Neon heartbeat~
Und die Sonne kommt schon viel zu früh~

[Outro]
…
2 percent…
Erdbeere time…
Goodnight tonight…`,"LEVEL UP":`
[Intro]
Yooo~
Ihr dachtet wirklich ich geh pennen~?

Eure Erdbeere stays awaaaaake~
내가 쓰러질 때까지~

Turn it up~
Level up~

[Strophe 1]
Noch ein Kaffee, noch ein Song
Noch ein Beat um fünf Uhr morgens
Alle sagen „das ist krank“
Doch genau das macht es iconic

Neue Ideen jede Nacht
Neue Lichter in der Stadt
Und jedes Mal wenn alles schläft
Dreh ich einfach weiter auf

[Pre-Refrain]
Oh~
Everybody wake up now
Oh~
모두 scream it loud

Gaja~
Hands up high~
Heute schlafen wir sicher nicht

[Refrain]
Level up~
Oh oh oh~
Erdbeere macht die ganze City wach~

Level up~
Hey hey hey~
너무 높이 올라가 tonight~

Oh~
Saranghae tonight~
Alle drehen komplett durch im Neonlicht~

Level up~
Neon heartbeat~
Und wir hören heute niemals auf~

[Post-Chorus]
Level up~
Level up~
Everybody louder now~

[Strophe 2]
Bildschirm glow auf meinem Face
Bass fliegt durch den ganzen Raum
Noch ein Song und plötzlich klingt es
Wie ein riesiges Comeback jetzt

Zu viele Tabs gleichzeitig offen
Zu viele Ideen gleichzeitig laut
Doch genau aus diesem Chaos
Haben wir die Welt gebaut

오늘 밤은 우리 거야
Everything feels so alive
Und egal wie spät es gerade ist
Wir bleiben einfach weiter wach

[Rap-Part]
Too fast~
Too loud~
Everybody jumping in the crowd

Blue lights~
Flash signs~
Neo city coming back alive

Volume high~
No sleep~
모두 going crazy to the beat

Erdbeere macht komplett zu viel
Doch genau das macht den Song complete

Wake up~
Turn up~
Everybody scream it now

Level up~
Hands up~
오늘 밤은 끝나지 않아

[Dance Break]
Hey~
Oh oh oh~
Level up tonight~

Neo glow~
Hands high~
Everybody scream tonight~

[Bridge]
After midnight…
Everything gets louder…

Keine Ruhe…
Nur noch Lichter…

안녕…
Welcome back…

[Finaler Refrain]
Level up~
Oh oh oh~
Erdbeere macht die ganze City wach~

Level up~
Stay tonight~
너무 높이 올라가 tonight~

Oh~
Secret city~
Alle Fenster leuchten durch die Nacht~

Level up~
Neon heartbeat~
Und wir hören heute niemals auf~

[Outro]
Yooo~
Erdbeere stays awake~
내가 쓰러질 때까지~
Level up~`,"NO SIGNAL":`[Intro]
…
No signal…
연결 실패…
Can you hear me…?

[Strophe 1]
Alle Fenster wirken dunkel
Keine Stimmen mehr im Call
Und die Stadt die gestern lebte
Fühlt sich plötzlich fremd jetzt an

Neue Nachrichten verschwinden
Bevor ich sie wirklich seh
Und egal wie laut ich suche
Niemand antwortet mehr

[Pre-Refrain]
Oh~
모든 연결 끊어져
Oh~
Everything fading out tonight

Stay~
Can you hear me now~
Oder bin ich jetzt allein?

[Refrain]
No signal~
Oh oh oh~
Alle Lichter gehen langsam aus~

No signal~
Stay with me~
오늘 밤은 너무 차가워~

Oh~
Saranghae tonight~
Doch die Stimmen sind zu weit weg jetzt~

No signal~
Neon heartbeat~
Und die Stadt klingt plötzlich viel zu still~

[Post-Chorus]
No signal~
No signal~
안녕…
Please come back tonight~

[Strophe 2]
Monitor glow auf meinem Gesicht
Während Regen draußen fällt
Alle Codes verlieren langsam
Ihre Bedeutung in der Nacht

Und je leiser alles wird
Desto mehr hör ich mein Herz
Denn vielleicht war diese Welt hier
Nie dafür gemacht zu bleiben

모든 불빛 사라지고
Only static in my mind
Und zum ersten Mal seit Wochen
Hab ich Angst vor dieser Stille

[Rap-Part]
연결이 끊어진 midnight city
아무도 없는 화면 속에
너의 목소릴 찾고 있어
But everything fades away tonight

차가운 불빛 아래 혼자
끝없이 scrolling all night long
돌아갈 수 없는 느낌
No signal in my heart now

모든 기억 glitching slowly
사라지는 neon signs
듣고 싶어 마지막으로
“Welcome back” one more time

[Bridge]
After midnight…
No more voices…

Keine Antworten…
Nur noch Rauschen…

사랑해…
Signal lost…

[Finaler Refrain]
No signal~
Oh oh oh~
Alle Lichter gehen langsam aus~

No signal~
Stay with me~
오늘 밤은 너무 차가워~

Oh~
Secret city~
Niemand kennt den Weg zurück mehr~

No signal~
Neon heartbeat~
Und die Stadt klingt plötzlich viel zu still~

[Outro]
…
연결 실패…
No signal…
Goodnight…`,RELOAD:`
[Intro]
…
System rebooting…
안녕…
Erdbeere time…

Can you hear me again…?

Neo city never dies…
Reload tonight…

[Strophe 1]
Die Sonne steigt langsam auf
Doch die Stadt schläft immer noch
Leere Straßen voller Regen
Und mein Bildschirm leuchtet schwach

Alle Nächte
Alle Stimmen
Alle Songs in meinem Kopf
Fühlen sich wie alte Träume an
Die nie wirklich enden woll’n

Neue Fenster öffnen langsam
Als würde alles neu beginnen
Und irgendwo im Neonlicht
Hör ich wieder Melodien

Zu viele Stunden ohne Schlaf
Zu viele Gedanken gleichzeitig
Doch sobald der Bass wieder startet
Fühlt sich alles leichter an

[Pre-Refrain]
Oh~
Can you feel it coming back?
Oh~
모든 불빛 다시 켜져

Gaja~
Stay alive tonight~
Denn die Nacht beginnt erneut

[Refrain]
Reload~
Oh oh oh~
Alle Lichter springen wieder an~

Reload~
Stay tonight~
오늘 밤이 다시 시작돼~

Oh~
Saranghae tonight~
Secret city lebt erneut heut Nacht~

Reload~
Neon heartbeat~
Und die ganze Welt beginnt von vorn~

[Post-Chorus]
Reload~
Reload~
Erdbeere time tonight~

Neo lights~
Hands high~
Everybody scream tonight~

[Strophe 2]
Alle Fehler
Alle Glitches
Alle Stimmen in der Nacht
Werden langsam Teil der Welt
Die wir selbst erschaffen haben

Voicechat lebt wieder auf
Neue Songs entstehen jetzt
Und egal wie tief wir fallen
Irgendwas zieht uns zurück

모든 기억 이어져
Wie ein endloser Neonkreis
Und egal wie oft es endet
Fängt hier alles neu wieder an

Die Stadt wirkt plötzlich heller
Monitor glow auf meinem Face
Und zum ersten Mal seit Wochen
Fühlt sich alles wieder echt an

[Pre-Refrain]
Oh~
Everybody coming back
Oh~
Neo city breathing now

Gaja~
Hands up high~
Heute schläft hier niemand ein

[Refrain]
Reload~
Oh oh oh~
Alle Lichter springen wieder an~

Reload~
Stay tonight~
오늘 밤이 다시 시작돼~

Oh~
Saranghae tonight~
Secret city lebt erneut heut Nacht~

Reload~
Neon heartbeat~
Und die ganze Welt beginnt von vorn~

[Rap-Part 1]
Neo city~
Hands high~
Reload everything tonight

Broken screens~
Blue lights~
Now we bring the world alive

너무 많은 sleepless nights
너무 많은 flashing lights
하지만 난 멈추지 않아
Till the sunrise in my eyes

모든 코드 다시 열려
Everybody scream it louder
Erdbeere 다시 돌아와
Now we taking over

One more song~
One more call~
One more night before we fall

Secret city never dies
We just reload one more time

[Dance Break]
Hey~
Oh oh oh~
Reload tonight~

Neo lights~
Hands up now~
모두 scream it loud~

Bass drop~
Laser lights~
Everybody lose control tonight~

[Strophe 3]
Erinnerungen ziehen vorbei
Wie alte Bilder im Display
Jede Nacht lebt irgendwo weiter
In irgendeinem neuen Song

Alle Stimmen
Alle Lichter
Alle Fehler in der Nacht
Haben diese Welt erschaffen
Die jetzt niemals untergeht

Und vielleicht endet jede Story
Irgendwann im Morgenlicht
Doch solange jemand zuhört
Verschwindet diese Stadt hier nicht

오늘 밤도 계속 달려
Through the endless neon sky
Und egal wie spät es gerade ist
Wir bleiben heute wieder wach

[Bridge]
After midnight…
Everything returns…

Keine Stille…
Keine Dunkelheit…

Alle Stimmen…
Singen wieder…

사랑해…
Welcome back…

[Final Rap]

너무 밝은 neon lights  
끝나지 않는 city nights  
모든 기억 살아나  
When the bass goes one more time  

깨어 있는 모든 순간  
우릴 다시 연결하잖아  
사라졌던 목소리도  
Now we sing it louder now  

끝없이 달려왔던 nights  
수많은 sleepless flashing lights  
하지만 난 멈추지 않아  
Till the sunrise in my eyes  

모든 코드 다시 열려  
숨겨왔던 world awakening  
Erdbeere 다시 돌아와  
Everybody scream it now  

Reload~
Reload~
Neo city never dies tonight  

Reload~
Reload~
Forever Erdbeere time~

[Finaler Refrain]
Reload~
Oh oh oh~
Alle Lichter springen wieder an~

Reload~
Stay tonight~
오늘 밤이 다시 시작돼~

Oh~
Secret city~
Alle Fenster leuchten durch die Nacht~

Reload~
Neon heartbeat~
Und die ganze Welt beginnt von vorn~

Reload~
Hey hey hey~
Erdbeere bleibt für immer wach~

Reload~
Saranghae~
모두 함께 sing tonight~

[Final Harmony]
Oh oh oh~
Reload tonight~

Annyeong~
Stay alive tonight~

Oh oh oh~
모두 together now~

Neo city~
Never dies~

Erdbeere time~
Forever alive~

[Outro]
…
System restored…
안녕…
Reload…

Midnight login…
Strawberry nights…
Main character…
Coffee overload…
404 heart…
No signal…

Everything reloads again…

Erdbeere time…
Forever…`,"Bring me back to Neo City":`[Intro]
Bring me back To Neo City
I want to be in 빛과 음악의 도시
Because I am not fine...
...Erdbeeretime

[Strophe 1]
네온 아래 city lights
Broken hearts and sleepless nights
숨이 막혀 in this life
Take me back where I feel alive

비 오는 streets of Neo City
Purple shadows looking pretty
Radio whispers through the rain
“딸기 time begins again…”

Late night voices, midnight train
Coffee overdose inside my brain
현실은 너무 cold tonight
But your neon pulls me back to life

우린 살아 숨 쉬어 here
Hidden songs inside my ears
빛과 음악 속 tonight
Neo City holds me tight

[Pre-Chorus Sad]
I want to leave this place
집에 가고 싶어요.
I can remember the first Time
The first Time I saw

[Chorus]
NEO CITY
Bring me back home
나는 돌아가고 싶어
And then I never want to go.

NEO CITY
The Place where I feel safe
내가 안전하다고 느끼는 곳
A Place with a never ending flow.

[Strophe 2]
새벽 3시 glowing screen
Lost inside a digital dream
Outside world feels far away
Neo City makes me stay

비트 속에 숨겨진 heart
You and me were never apart
거리마다 your melody
Echoes through this endless city

I hear your voice on Neo Radio
“Stay awake… don’t let it go…”
현실보다 따뜻한 light
Shining through the purple night

Maybe I was never fine
Maybe this world saved my mind
네온 아래 I feel free
Like Neo City remembers me

[Pre-Chorus Sad]
I want to leave this place
집에 가고 싶어요.
I can remember the first Time
The first Time I saw

[Chorus]
NEO CITY
Bring me back home
나는 돌아가고 싶어
And then I never want to go.

NEO CITY
The Place where I feel safe
내가 안전하다고 느끼는 곳
A Place with a never ending flow.

[Bridge]
And when I finally get home
To the City of Lights
I feel the rythm again
No worrys, no fights.

[Chorus]
NEO CITY
Bring me back home
나는 돌아가고 싶어
And then I never want to go.

NEO CITY
The Place where I feel safe
내가 안전하다고 느끼는 곳
A Place with a never ending flow.

[Outro]
네온 불빛 fading slow
But I still don’t want to go
Radio static in the dark
Neo City left a mark

Even if the night will end
I know I will come again
빛과 음악 in my soul
Neo City made me whole

…Erdbeeretime…

“Neo City never dies.”`,"Jascha Winter und der Freizeitparkzauber":`Intro
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
Erdbeere hat’s erkannt 🎶`,"EPMC – Lay Low Nights":`[Intro]
(Low… low…)
EPMC…
Feel it…

[Verse]
Lichter gehen an, wir sind allein
Durch den Park im Neon-Schein
Jeder Schritt im gleichen Beat
Alles zieht uns einfach mit

Deine Stimme – leise, nah
Sagst kein Wort, doch ich bin da
Alles langsam, alles low
Doch wir lassen einfach los

[Build-Up]
Komm wir bleiben
Komm wir geh’n nicht
Durch die Nacht hier
Im gleichen Licht

[Drop]
Lay low… lay low…
EPMC – don’t let go
Lay low… lay low…
Feel the bass down in your soul

Lay low… lay low…
Durch die Nacht, wir fallen slow
Lay low… lay low…
EPMC – just lose control

[Verse 2 – Events minimalistisch eingebaut]
Werwolf spielt im Dunkeln hier
Sag mir leise, traust du mir?
Blicke sagen viel zu viel
Doch wir bleiben in dem Spiel

„1, 2 oder 3“ – spring mit mir
Keine Angst, ich bleib bei dir
Codenames, nur ein Gefühl
Ein Wort reicht – und ich weiß, was du willst

Escape the Park, Zeit wird knapp
Doch wir halten einfach ab
Wenn die Tür sich langsam hebt
Ist es nur der Beat, der bleibt

[Build-Up]
Don’t stop now
Feel it rise
In the dark
Close your eyes

[Drop]
Lay low… lay low…
EPMC – don’t let go
Lay low… lay low…
Feel the bass down in your soul

Lay low… lay low…
Durch die Nacht, wir fallen slow
Lay low… lay low…
EPMC – just lose control

[Break / Bridge – sehr minimal]
Low…
Night…
Bass…
Stay…

[Final Drop]
Lay low… lay low…
EPMC – don’t let go
Lay low… lay low…
We don’t ever let this go`,"WAS...?":`[Verse 1]
Jascha steht in der Küche, Blick geht ins Regal
Gestern noch voll, jetzt komplett egal
Packung offen, doch nichts mehr da
Er denkt sich nur: „Digga… was war?“

Schritte im Flur, da kommt sie rein
Claudia ganz ruhig, als wär’s nix gewesen schein’
Krümel noch sichtbar, sie sagt kein Wort
Doch Jascha checkt sofort

[Pre-Chorus]
„Claudia… sag mir ehrlich jetzt…
warst du das? Ich schwör, kein Stress…“

[Chorus]
Was… (Pause)
isst du meine Toasties, Claudia?!
Jascha steht hier fassungslos, das ist doch nicht okay
Isst du meine Toasties, Claudia?!
Ich wollte die noch essen, jetzt sind sie einfach weg, ey

Was… (Pause)
isst du meine Toasties, Claudia?!
Das war mein Plan für heute, das war mein ganzer Vibe
Isst du meine Toasties, Claudia?!
Jetzt steh ich hier mit leerem Magen, ich komm nicht mehr klar, ich bleib

[Verse 2]
Claudia sagt nur: „War doch nicht viel“
Jascha denkt sich: „Das ist nicht dein Spiel…“
Goldbraun gedacht, schon fast gerochen
Dieser Traum wurde einfach gebrochen

Er hat sich das wirklich vorgenommen
Hat sich auf den Moment besonnen
Und jetzt einfach alles gone
Claudia sitzt da – komplett davon

[Pre-Chorus]
„Claudia… das ist nicht fair…
ich hatte wirklich Bock drauf, sehr…“

[Chorus]
Was… (Pause)
isst du meine Toasties, Claudia?!
Jascha ist am Ende, das trifft ihn viel zu hart
Isst du meine Toasties, Claudia?!
Das war kein Snack, das war für ihn ein Meisterwerk am Start

[Bridge]
Jascha allein in der Küche jetzt
Vertrauen minimal verletzt
Nicht wegen Essen – sondern Prinzip
Doch Claudia chillt… komplett entspannt im Beat

[Final Chorus]
Was… (Pause)
isst du meine Toasties, Claudia?!
Jascha macht nen Song daraus, jetzt hört es jeder hier
Isst du meine Toasties, Claudia?!
Ein Drama in der Küche – doch ein Hit auf Papier`,"E-Scooter im Müllmodus":`[Intro – düster + Scooter]
bip… brrrr…
Ey…
Das ist kein Einkauf…
Das ist Verantwortung.

[Build-Up]
Scooter an
Nacht beginnt
Keiner da
der gewinnt

[DROP – Techno Hook]
MÜLLTÜTEN – ICH FAHR LOS
ALTERNATIV – LOS

Scooter zieht – durch die Stadt
Für ein Problem, das keiner hat

[Verse 1 – RAP 🔥]
Küche sieht aus wie’n Tatort hier
Deckel offen – keiner reagiert

„Hab’s vergessen“ kommt ganz entspannt
Während ich schon mit Schlüssel in der Hand

Podcast läuft über Work-Life-Balance
Ich fahr Müll – das ist meine Chance

Nicht auf Ruhm, nicht auf Geld
Nur dass hier nix mehr gammelt, wenn’s fällt

Ganz ehrlich, ich lach schon fast
Weil ich für Plastik ’nen Auftrag hab

Doch tief drin weiß ich genau
Ich bin der Typ für „mach du mal“

[Build-Up 2]
brrrr… bip…
Akku sinkt – ich bleib dran
Weil ich’s besser als ihr kann 😄

[DROP – größer]
MÜLLTÜTEN – IMMER ICH
KLEINES DING – TRIFFT MICH RICHTIG

Scooter rollt – keine Wahl
Alltag wird hier maximal

[Verse 2 – RAP 🔥]
Fahr durch Straßen, leer und kalt
Scooter klingt wie Zukunft alt

Jeder Bordstein testet mich
Doch ich bleib stabil – sicherlich

Im Laden steh ich, spät noch wach
Vor ’nem Regal mit Plastik-Sach

Greif die Tüten, fühl mich krass
Als hätt ich grad ’nen Deal gemacht

Doch der Witz ist eigentlich klar
Dass es nie nur Müll hier war

Sondern dieses kleine Spiel
Wer geht los – und wer bleibt chill

[Bridge – halb Rap, halb Spoken]
Ihr redet viel von Energie
Ich geb sie grad… für Müll irgendwie

[Final DROP – Club + Ohrwurm]
MÜLLTÜTEN – ICH FAHR LOS
DURCH DIE NACHT – ALTERNATIVLOS

Scooter lebt – ich auch noch
Für den Müll – geb ich’s doch 😄

[Outro – Punchline]
Tür geht auf…

„Hast du Tüten?“

…ja.

Hab auch Charakter mitgebracht.`,"Mr. Moneymaker Land":`[Intro]
Breaking News – Projekt gestoppt
Irland… cancelled… alles floppt
Doch aus dem Nichts, aus Gold und Sand
Entsteht jetzt… Moneymaker Land

[Verse 1]
Sie wollten Kleeblatt, Regen, Grün
Doch Zahlen haben anders geseh’n
Kein Guinness mehr, kein Irish Sound
Jetzt zählt nur noch der Kontostand

Aktien steigen, Kurse geh’n
Du kannst den Chart im Himmel seh’n
Wo früher Wiesen, Nebel war
Steht jetzt ein Börsen-Wolkenkratzer da

[Pre-Chorus]
Swipe nach rechts, investier dein Glück
Keine Rückfahrt, kein Zurück
Alles glänzt im Neonlicht
Cashflow kennt hier Grenzen nicht

[Hook / Drop 🔥]
Mr. Moneymaker Land 💸
Alles hier läuft nach dem Plan
Buy low – sell high – fühl den Trend
Geld regnet hier ohne End

Mr. Moneymaker Land 💰
Goldene Straßen, Diamant-Sand
Keine Träume – nur Profit
Wenn du hier bist, wirst du rich

[Verse 2]
Kein Folk mehr, nur noch Bass
Trading Floor statt Pub und Glas
Algorithmen tanzen wild
Während dein Depot sich füllt

Bullen rennen durch die Nacht
Bären haben nichts mehr Macht
Jeder Ride ein Investment
Jeder Loop ein Dividend

[Bridge 😈]
No risk – no fun – wir geh’n all in
Kreditkarten glühen im Spin
Luxus, Charts und Börsenwahn
Willkommen im Finanz-Vulkan

[Final Hook 🔥🔥]
Mr. Moneymaker Land 💸
Alles hier läuft nach dem Plan
Buy low – sell high – fühl den Trend
Geld regnet hier ohne End

Mr. Moneymaker Land 💰
Hier beginnt der Kontostand
Kein Zurück – du bist committed
Cashflow boosted – life unlimited`,"Our Place":`[Intro]
The lights come on, the night feels right.
Step inside, step inside.
Leave the noise, leave the rush behind.
This is your time, this is your time.

[Verse 1]
From the gate to the open sky,
Every dream is passing by.
Hear the sound, feel the beat,
Every step pulls you in deeper.

[Pre-Chorus]
Can you feel it getting closer?
Closer now, closer now.
Every heartbeat says it louder,
This is now, this is now.

[Chorus]
This is our place, our place, our place,
Our place, our place, our place.
Run as far as your eyes can see,
Right here, just you and me.
This is our place, our place, our place,
Our place, our place, our place.
Open the night, feel the sound,
This is where we’re found.

[Verse 2]
Every ride, every scream,
Feels bigger than a dream.
Side by side, feel alive,
This is more than just a night.

[Pre-Chorus 2]
Hear the laughter in the air,
Everywhere, everywhere.
All the lights, all the sound,
Pulling us in, pulling us now.

[Chorus]
This is our place, our place, our place,
Our place, our place, our place.
Run as far as your eyes can see,
Right here, just you and me.
This is our place, our place, our place,
Our place, our place, our place.
Hands up high, feel the ground,
This is where we’re found.

[Bridge]
Oh-oh-oh-oh
Yeah-yeah-yeah-yeah
Hold this moment, don’t let go.
Oh-oh-oh-oh
Yeah-yeah-yeah-yeah
This is all we need to know.

[Final Chorus]
This is our place, our place, our place,
Sing it loud, sing it loud, sing it loud!
Every step, every sound,
Feel the magic all around.
This is our place, our place, our place,
Here and now, here and now, here and now!
From the first light to the end,
This is where the story ends.Oh-oh-oh-oh…
This is our place.
Oh-oh-oh-oh…
Our place.`,"Kochstream Ambience":`[Intro]
Schau
Da kommt die Sonne
Hah
Auf geht's
Los
Hehe

[Chorus]
Wir kochen leck'res Hühnchen
Kartoffeln in der Fritteuse
Der große Kochstream mit Motte
Kochstream mit Motte
Wir kochen leck'res Hühnchen
Kartoffeln in der Fritteuse
Der große Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte

[Post-Chorus]
Der große Kochstream mit Motte
Der große Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte

[Verse]
Schau
Da kommt die Sonne
Hah
Auf geht's
Los
Hehe
Schau
Da kommt die Sonne
Hah
Auf geht's
Los
Hehe

[Chorus]
Wir kochen leck'res Hühnchen
Kartoffeln in der Fritteuse
Der große Kochstream mit Motte
Kochstream mit Motte
Wir kochen leck'res Hühnchen
Kartoffeln in der Fritteuse
Der große Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte
Kochstream mit Motte`,Fleischwurst:`[Intro]
Kauf’ Land
Komm rein
Nur ein Blick

[Verse]
Ich brauch Fleisch
Der Laden läuft
Alles frisch
Und gut gekühlt
Weiße Kacheln
Sauberer Schnitt
Hier drin zählt
Nur der Betrieb

Du trittst ein
Siehst dich um
Alles wirkt
Fast wie Kunst
Du vertraust
Dem falschen Licht
Und merkst zu spät
Was hier geschieht

[Pre-Chorus]
Tür fällt zu
Schloss klickt leis
Du lachst noch
Doch es bleibt

[Chorus]
Kauf' Land
Ich zeig dir meine Fleischwursttheke

Heute bist du
Das Angebot

Stück für Stück
Du kommst nicht raus
Kein Weg zurück

Du siehst rot

[Verse 2]
Luft wird schwer
Zeit steht still
Alles hier
Hat seinen Platz
Haken leer
Doch nicht mehr lang
Ich seh, wie er
Mich mustert, lacht

Du schreist nicht
Hier hört dich keiner
Alles dämpft
Der kalte Raum
Was hier endet
Wird verpackt
Und morgen schon
Weiterverkauft

[Pre-Chorus]
Kein Ausgang
Kein Geräusch
Nur Routine
Nur Verbrauch

[Chorus]
Kauf' Land
Ich zeig dir meine Fleischwursttheke

Heute bist du
Das Angebot

Stück für Stück
Du kommst nicht raus
Kein Weg zurück

Du siehst rot

[Bridge]
Stück für Stück
Stück für Stück

Alles hat
Seinen Zweck

Kauf’ Land
Kauf’ Land

[Chorus]
Kauf’ Land
Fleischwursttheke
Kauf’ Land
Fleischwursttheke

Heute
Heute
Heute bist du
Das Angebot

Stück für Stück
Kein Weg zurück
Stück für Stück
Kein Weg zurück

[Outro / Final Chorus]
Kauf' Land
Ich zeig dir meine Fleischwursttheke

Heute bist du
Das Angebot

Stück für Stück
Du kommst nicht raus
Kein Weg zurück

Du siehst rot
Du siehst rot `,Erdbeerenfresser:`[Intro]
Ja
Der Erdbeerenfresser
Haha
Die größte Erdbeere
Die du je gesehen hast
Pure Muskeln
Pure Power
Erdbeerenfresser
Haha
Ja

[Chorus]
(Erdbeerenfresser)
Pure Muskeln
Pure Power
(Erdbeerenfresser)
Wie viel kannst du benchen
Digga? (Erdbeerenfresser)
Digga
Frag mich nicht
Ich kann die ganze Bank benchen (Erdbeerenfresser)
Haha
Ja
Ja

[Verse]
Was für "Fünf-Sterne-Küche"?
Bei mir gibt's nur Erdbeeren (Erdbeeren)
Du weißt
Was ich mache
Du weißt
Ich bin ein Erdbeerenfresser
Ich seh' dich beim McDonald's sitzen
Burger essen
Ich esse Erdbeeren
Digga
Das sind keine Burger-Fresser
Guck' mich an
Pure Muskeln
Pure Power
Du bist ein dummer Idiot
Was ist deine Körperstatur?
Du bist ein dummer Idiot
Was ist deine Körperstatur?
Guck' mich an
Pure Muskeln
Pure Power
[Bridge]
Pure Muskeln
Pure Power (Erdbeerenfresser)
Pure Muskeln
Pure Power (Erdbeerenfresser)
Pure Muskeln
Pure Power (Erdbeerenfresser)
Pure Muskeln
Pure Power (Erdbeerenfresser)

[Chorus]
(Erdbeerenfresser)
Pure Muskeln
Pure Power
(Erdbeerenfresser)
Wie viel kannst du benchen
Digga? (Erdbeerenfresser)
Digga
Frag mich nicht
Ich kann die ganze Bank benchen (Erdbeerenfresser)
Haha
Ja
Ja
(Erdbeerenfresser)
Pure Muskeln
Pure Power
(Erdbeerenfresser)
Wie viel kannst du benchen
Digga? (Erdbeerenfresser)
Digga
Frag mich nicht
Ich kann die ganze Bank benchen (Erdbeerenfresser)
Haha
Ja
Ja
(Erdbeerenfresser)
Pure Muskeln
Pure Power
(Erdbeerenfresser)
Wie viel kannst du benchen
Digga? (Erdbeerenfresser)
Digga
Frag mich nicht
Ich kann die ganze Bank benchen (Erdbeerenfresser)
Haha
Ja
Ja
(Erdbeerenfresser)
Pure Muskeln
Pure Power
(Erdbeerenfresser)
Wie viel kannst du benchen
Digga? (Erdbeerenfresser)
Digga
Frag mich nicht
Ich kann die ganze Bank benchen (Erdbeerenfresser)
Haha
Ja
Ja`,"Jascha Full Throttle":`[Intro – orchestral + choir]
Wenn der letzte Ride zu Ende geht
Und die Lichter langsam verblassen
Bleibt nur das, was wir erlebt haben

Jascha Winter

[Verse 1]
Ein neuer Tag beginnt im Park
Mit diesem Kribbeln, still und stark
Die Familie da, der Moment ist echt
Und nichts auf dieser Welt kommt dagegen an

Die Kamera läuft, doch das ist egal
Denn was hier zählt, ist nicht digital
Es sind die Augenblicke mit dir
Die diesen Tag unvergesslich machen hier

[Pre-Chorus]
Langsam zieht uns der Lift nach oben
Und wir fühlen, wie Sekunden sich lohnen
Ein letzter Blick in die weite Zeit
Dann sind wir frei und alles wird weit

[Chorus / Drop 1]
This ride is forever
Wir halten diesen Moment für immer fest
Mit jedem Herzschlag, der durch uns geht
Wissen wir, dass uns nichts mehr trennt

Jascha Winter
Und die Menschen an seiner Seite
Das ist mehr als nur ein Augenblick
Das ist das, was für immer bleibt

[Verse 2]
Von Park zu Park, von Fahrt zu Fahrt
Hat uns jede Sekunde geprägt und bewahrt
Nicht die Klicks und nicht der Ruhm
Sondern wer bei dir steht, wenn du ihn brauchst

Wenn sich die Welt im Looping dreht
Und du kurz den Boden verlierst
Ist da jemand, der neben dir steht
Und genau das ist es, was zählt

[Break]
Und wenn alles still wird
Und du nur noch dein Herz hörst
Dann merkst du
Es war nie nur die Fahrt

[Build-Up]
Es war das Lachen, das du geteilt hast
Die Zeit, die du nicht zurückholst
Die Erinnerungen, die bleiben
Und dich immer wieder hierherführen

This is our ride

[Drop 2]
This is our ride
Und wir lassen diesen Moment niemals los
Wir tragen ihn weiter, egal wohin wir gehen
Weil er ein Teil von uns geworden ist

Jascha Winter
Zwischen Geschwindigkeit und Gefühl
Zwischen Chaos und Freiheit
Finden wir genau das, was uns verbindet

[Bridge]
Und wenn der letzte Park sich schließt
Und die Nacht langsam vergeht
Dann bleibt etwas zurück
Etwas, das größer ist als jeder Ride

[Final Build-Up]
Heb deine Hände ein letztes Mal
Spür diesen Moment noch einmal
Das ist kein Ende, das ist ein Beweis
Dass wir wirklich gelebt haben

[Final Drop]
This ride is forever
Und wir werden es niemals vergessen
Jede Sekunde, die wir geteilt haben
Hat uns zu dem gemacht, was wir sind

Jascha Winter
Und all diese Erinnerungen
Werden weiterleben in uns
Auch wenn die Musik längst verstummt

[Outro, emotional, gesagt]
Wenn alles vorbei ist
Bleibt nur das Gefühl

Und vielleicht
Ist genau das für immer`,"Es war ein Abend wie jeder andere":`[Verse 1]
Es war ein Abend wie jeder andere
Der Stream ging live, die Kamera an
Er sagte heute wird gekocht für euch
Doch keiner wusste was noch kommt

Der Teig flog durch die Küche weit
Ein kleines Stück, zur falschen Zeit
Es landet auf dem heißen Herd
Ein Fehler, der ihn Finger kostet

[Pre-Chorus]
Er dachte nur ganz kurz nicht nach
Und griff danach mit voller Kraft

[Chorus]
Oh Motte an der Pfanne
Was hast du nur getan
Der Finger brennt noch immer
Weil man’s doch sehen kann

Zwei Stunden und achtzehn
Hat dieser Stream gedauert
Für vier hat er gekocht
Obwohl er ganz allein war

[Verse 2]
Der Kaiserschmarrn wurde immer mehr
Die Pfanne wurde langsam leer
Doch auf dem Tisch stand viel zu viel
Für ihn allein ein großes Ziel

Der Chat hat nur noch laut gelacht
Und Screenshots von dem Fail gemacht
Doch Motte sagte nur ganz stolz:
"Das esse ich halt morgen noch!"

[Pre-Chorus]
Ein Kochstream der Geschichte schreibt
Weil sowas einfach hängen bleibt

[Chorus]
Oh Motte an der Pfanne
Was hast du nur getan
Der Finger brennt noch immer
Weil man’s doch sehen kann

Zwei Stunden und achtzehn
Hat dieser Stream gedauert
Für vier hat er gekocht
Obwohl er ganz allein war

[Bridge]
Und irgendwo im Internet
Da wird man diesen Clip noch sehen
Der Tag an dem der Kaiserschmarrn
Zur Legende wurde im Stream

[Final Chorus]
Oh Motte an der Pfanne
Du bist jetzt ein Star
Der Kochstream war zu lange
Doch legendär war er

Zwei Stunden und achtzehn
Das wird man nie vergessen
Für vier hat er gekocht
Und musste alles selber essen

[Outro]
Und nächstes Mal vielleicht
Einfach weniger Teig…`,"Rückkehr des Königs":`[Intro]
Stille im Chat
Keiner schreibt mehr rein
Doch jeder hier weiß
Das kann nicht für immer sein
Ein Schatten fehlt
Doch er kommt zurück
Und wenn er's tut, bringt er alles ins Wanken

[Verse 1]
Sie haben ihn rausgenommen, wollten ihn brechen
Türen zu, keine Chance mehr zu sprechen
Kein Licht im Zimmer, nur Gedanken im Kreis
Doch jeder Fehler zahlt sich irgendwann aus als Preis
Verlorene Tage, kein Kontakt zur Crew
Doch tief in ihm drin lässt ihn das alles nicht ruh'n
Sie dachten, er fällt, bleibt unten im Dreck
Doch Motte baut sich neu auf, Stück für Stück

[Pre-Chorus]
[drums drop out, piano and strings continue]
Keine Nachrichten, kein Ton auf dem Handy
Doch in seinem Kopf wird es langsam lebendig
Jeder Moment war nur Vorbereitung für den einen Tag
Seine Offenbarung

[Chorus]
Wenn Motte zurückkommt, dann leise und kalt
Keine großen Worte, nur Macht und Gewalt
Aus Fehlern gelernt, jetzt stärker als je
Die Krone bleibt stehen, egal was geschieht
Wenn Motte zurückkommt, dann brennt wieder Licht
In den Straßen der Nacht, wo man seinen Namen spricht
Gefallen, gelernt, jetzt bereit für den Thron
Der König war weg

[Verse 2]
Sie dachten, er ist weg
Doch er hat nur geschwiegen
Er hat gelernt zu warten
Und jetzt gehört ihm alles

[Chorus]
Wenn Motte zurückkommt, dann leise und kalt
Keine großen Worte, nur Macht und Gewalt
Aus Fehlern gelernt, jetzt stärker als je
Die Krone bleibt stehen, egal was geschieht
Wenn Motte zurückkommt, dann brennt wieder Licht
Und jeder versteht jetzt, man bricht ihn nicht
Gefallen, gelernt, jetzt bereit für den Thron
Der König war weg
Jetzt ist er da`,"Motte Nicht Da":`Intro

Uga! Uga!
Dum dum da!
Hey!

⸻

Strophe 1

Motte nicht da.
Wir hier.
Feuer an.
Du nicht hier.

Wir warten.
Schon lang.
Zeit geht.
Wir bang.

⸻

Pre-Chant

Uga uga!
Wir wart!
Uga uga!
Sehr hart!

⸻

Refrain

MOTTE NICHT DA! – UGA UGA!
WO MOTTE HIN?! – DUM DUM DA!
WIR NICHT HAPPY! – UGA UGA!
KOMM JETZT HER! – DUM DUM DA!

MOTTE KOMM BALD! – UGA UGA!
WIR DREH DURCH! – DUM DUM DA!
GANZER TRIBE SCHREI LAUT:
MOTTE! MOTTE! KOMM JETZT RAUS!

⸻

Strophe 2

Trommel laut.
Herz boom boom.
Alle schau.
Du kein Room.

Du sonst hier.
Immer da.
Jetzt nur wir.
Nicht so klar.

⸻

Break

Dum dum!
Dum dum!
Hey!
Hey!

⸻

Bridge (Call & Response)

WO MOTTE?! – (WO ER?!)
WO MOTTE?! – (KOMM HER!)
WANN MOTTE?! – (JETZT BALD!)
SONST TRIBE – ALLES KNALLT!

⸻

Letzter Refrain (noch stumpfer)

MOTTE DA?! – UGA UGA!
NOCH NICHT DA! – DUM DUM DA!
ALLE WART! – UGA UGA!
KOMM JETZT BITTE! – DUM DUM DA!

⸻

Outro

Motte…
wo du…
wir wart…`,"Motte, komm bitte bald zurück":`[Verse 1]
Motte, wo bist du schon wieder hin?
Der Server läuft, doch ohne Sinn
Die Crew sitzt da und wartet nur
Doch ohne dich fehlt jede Spur

[Pre-Chorus]
Die Stimmung kippt, wir drehen langsam durch
Die Geduld wird langsam echt zu kurz
Wir zählen Tage, wir zählen Stunden
Und haben dich noch nicht gefunden

[Chorus]
Motte, komm bitte bald zurück
Sonst geht hier gleich alles kaputt
Wir schwören dir, wir meinen’s ernst
Der Timer tickt, es wird gefährlich jetzt

Motte, hörst du unsern Call?
Wir warten hier – das letzte Mal
Wenn du nicht bald wieder hier bist
Dann brennt der EPMC – oh shit

[Verse 2]
Der Chat ist leer, kein Spam, kein Flame
Nicht mal Chaos ist mehr the same
Wir brauchen dich, das ist kein Witz
Sonst eskaliert hier jeder Klick

[Pre-Chorus]
Noch ein Tag und wir drehen frei
Die Crew steht kurz vorm Bürgerkrieg
Die Logs sind voll, die Nerven dünn
Und keiner kriegt das hier noch hin

[Chorus]
Motte, komm bitte bald zurück
Sonst geht hier gleich alles kaputt
Wir schwören dir, wir meinen’s ernst
Der Timer tickt, es wird gefährlich jetzt

Motte, hörst du unsern Call?
Wir warten hier – das letzte Mal
Wenn du nicht bald wieder hier bist
Dann brennt der EPMC – oh shit

[Bridge]
Wir wollten ruhig bleiben, echt
Doch langsam läuft hier alles schlecht
Das ist kein Drama, das ist Fakt
Ohne dich fehlt hier der Takt

[Final Chorus]
Motte, komm bitte bald zurück
Bevor hier alles durch uns knickt
Wir zählen runter, drei, zwei, eins…
Komm lieber jetzt – sonst wird’s zu heiß

[Outro]
…Motte?
Bro, jetzt aber wirklich.`,"Königliche A.I. Songs":`[Intro]
Meine Damen und Herren…

Willkommen…

In der Welt der königlichen…
A… I… Songs…

Wo aus Memes…
Legenden werden.

Wo Insider…
Zu Hymnen werden.

Und wo aus einem einzigen Joke…
Ein absoluter Hit entsteht.

[Strophe 1]
Es war ein Abend wie jeder andere
Doch plötzlich sang der ganze Voicechat mit
Von Fleischwurst, Chaos und Legenden
Und jeder wusste sofort Bescheid

Mitten in Discord um drei Uhr morgens
Noch ein Song und keiner geht schlafen
Neue Ideen im Sekundentakt
Und irgendwo schreit wieder jemand:
„BRO DAS IST EIN HIT!“

[Pre-Refrain]
Von Alexis bis Mottenmann
Von Jazz-Bar bis Wahnsinn an
Jeder Song ein neuer Film
Und wir drehen immer weiter

[Refrain]
Königliche…
A… I… Songs…

Wo jeder Abend
Zur Legende wird

Zwischen Lichtern
Und Melodien
Entsteht ein neuer Moment

Ohhhhh—
Königliche A. I. Songs…

Wo aus Memes
Geschichten werden

Und irgendwo beginnt…
Schon der nächste Hit

[Strophe 2]
Country-Sänger mit Irish Accent
Patchnotes mitten in der Nacht
Neue Versionen, neue Ideen
Während wieder jemand Suno startet

Songs entstehen aus kompletter Scheiße
Und werden trotzdem Hymnen daraus
Irgendwo läuft schon instrumental
Der nächste große Show-Countdown

[Bridge]
Aus kleinen Gags…

Wurden ganze Geschichten.

Aus verrückten Ideen…

Eine eigene Welt.

Und jeder neue Song…

Ist wieder ein Teil davon.

[Finaler Refrain]
Königliche…
A… I… Songs…

Zwischen Chaos
Und Melodien

Zwischen Freundschaft
Und Wahnsinn

Entsteht hier Nacht für Nacht
Ein neuer legendärer Moment

Ohhhhh—
Königliche A. I. Songs…

Und irgendwo…
Beginnt schon der nächste absolute Hit

[Outro -Instrumental]`,"Ein wunderschönes Haus":`[Intro]
Früh am Morgen
erste Sonnenstrahlen
Moneymaker stand im Gras
und hatte einen großen Plan.

[Verse 1]
Stein für Stein
Block für Block
arbeitete er den ganzen Tag

Mit einem Lächeln im Gesicht
und einer Spitzhacke in der Hand
baute er sein Traumhaus
am Rand vom schönen Land

Fenster aus goldenem Glas
eine Tür aus dunkler Eiche
selbst die Nachbarn blieben stehen
und sagten:
„Das ist wirklich Spitze!“

[Chorus]
Ohhh—
Moneymaker baut ein Haus
mit ganz viel Liebe Stein für Stein
Ohhh—
Moneymaker baut ein Haus
und heute scheint die Sonne rein

Mit Redstone und mit Fackeln
mit Fenstern groß und weit
dieses Haus wird für immer steh’n
für die Ewigkeit

[Verse 2]
Er pflanzte Blumen vor die Tür
und zündete Laternen an
dann trat er einen Schritt zurück
und schaute stolz das Bauwerk an

Die Vögel sangen fröhlich
der Himmel leuchtete blau
und Moneymaker dachte sich:
„Genau so sieht Perfektion aus.“

[Outro]
Moneymaker setzte sich zufrieden
vor sein fertiges Haus.
Zum ersten Mal seit langer Zeit
war einfach alles perfekt.`,"Verreck, du blöder Mottenmann":`[Intro]
Es war ein wunderschönes Haus…
Stein für Stein gebaut…
mit Liebe…
mit Hoffnung…
mit Redstone.

[Verse 1]
Die Sonne ging langsam unter
Moneymaker stand allein
vor den goldenen Fenstern
alles sollte perfekt sein

Doch plötzlich kam Motte angerannt
mit einem Creeper an der Hand
er grinste nur und rief ganz laut:
„Heute fliegt dein Haus weg, Freund!“

[Pre-Chorus]
Ein leises Zischen in der Nacht…
Moneymaker dreht sich um…
zu spät…

BOOM!

[Chorus]
VERRECK—
DU BLÖDER MOTTENMANN
du hast mein schönes Haus
einfach in die Luft gebannt

VERRECK—
DU BLÖDER MOTTENMANN
jetzt fliegen meine Fenster
durch die ganze Welt herum

[Verse 2]
Die Fenster lagen in Trümmern
der Himmel wurde rot
Motte stand dort lachend
zwischen Feuer und Explosionsrauch

Doch Moneymaker blieb ganz ruhig
kein Zittern in der Hand
er schlich sich langsam hinten ran
mit dem Schwert aus Netherite

[Bridge]
Regen fiel auf Cobblestone…
der Creeper war längst verschwunden…
und irgendwo im Dunkeln
hörte man Moneymaker schreien:

„VERRECK, DU BLÖDER MOTTENMANN!“

[Final Chorus]
VERRECK—
DU BLÖDER MOTTENMANN
du dachtest wirklich
du kommst davon

Jetzt rennst du durch die Nacht
doch Moneymaker kommt schon an

VERRECK—
DU BLÖDER MOTTENMANN`,"Motte… warum tust du mir das an":`[Intro]
Es war ein friedlicher Morgen…
Schnitzel wollte einfach nur seine Ruhe…
doch irgendwo…
plante Motte schon das Chaos…

[Verse 1]
Schnitzel saß ganz entspannt
oben auf dem stillen Thron
Handy in der rechten Hand
und summte leise einen Ton

Doch draußen vor der Badezimmertür
hörte man ein leises Lachen
Motte schlich vorbei
um schlimme Dinge zu machen

Er nahm die letzte Rolle
ganz langsam aus dem Schrank
grinste in die Dunkelheit
und sagte nur:
„Danke schön.“

[Chorus]
Motte…
warum tust du mir das an?
Ich sitz hier schon seit Stunden
und komm hier nicht mehr runter, Mann…

Motte…
ich wollte doch nur meine Ruh…
doch du nimmst mir einfach alles weg
und lachst dabei noch zu…

[Verse 2]
Motte lag im Flur vor Lachen
die Klopapierrolle fest im Arm
während Schnitzel auf dem Klo saß
verzweifelt, traurig und allein

Er klopfte gegen die Türe
doch Motte rannte einfach fort
mit jedem Schritt durchs Haus
hallte nur sein Lachen dort

[Bridge]
Und plötzlich…
wurde alles still…

Langsame Schritte im Flur…

Moneymaker war zurück.

[Outro]
Motte…
jetzt ist es vorbei…
denn irgendwo im Dunkeln
hörte man Moneymaker sagen:

„Verreck, du blöder Mottenmann.“`,"Die Flucht des Mottenmanns":`[Intro]
Dunkle Straßen…
kalter Regen…
und irgendwo in der Nacht…
rannte Motte um sein Leben.

[Build-Up]
Schritte hinter ihm…
immer schneller…
immer näher…

Motte sprang über Steine
rannte durch den Wald
sein Atem schwer
sein Herz schlug laut

Er wusste:
Moneymaker war hinter ihm.

[Pre-Drop]
Lichter flackerten…
Sirenen heulten in der Ferne…
der Himmel wurde rot…

Doch plötzlich stand Erdbeere vor ihm.

Motte blieb abrupt stehen.
Er verstand nicht, was gerade passierte.
Noch bevor er reagieren konnte,
stellte Erdbeere ihm ein Bein.

[DROP]
BUM
BUM
BUM
BUM

[Verse]
Motte flog direkt auf den Boden.
Schuhe weg.
Brille schief.
Der ganze Asphalt bebte.

Langsam drehte er sich um.
Verwirrt.
Wütend.
Panik in seinen Augen.

Doch plötzlich…
wurde alles still.

[Breakdown]
Langsame Schritte…
hinter ihm…

Netherite-Schwert…
schwarzer Mantel…

Moneymaker war da.

Die Straßenlaternen flackerten.
Regen fiel auf den Asphalt.
Motte wusste:
Es gab kein Entkommen mehr.

[Beat Stop]

„VERRECK…
DU BLÖDER MOTTENMANN!“`,"Die Ruhe des Mottenmanns":`[Intro]
Regen fiel vom Himmel…
schwarze Anzüge…
langsame Schritte…
und irgendwo in der Ferne
läuteten Glocken.

[Verse 1]
Die Familie stand schweigend
vor dem offenen Grab
neben Manuel Junior
war ein Platz bereits frei

Kerzen brannten im Regen
Blumen lagen im Schlamm
und niemand konnte glauben
dass Motte wirklich gegangen war

[Pre-Chorus]
Moneymaker senkte langsam den Blick.
Erdbeere stand still daneben.
Selbst Schnitzel sagte kein Wort mehr.

Heute…
war ein trauriger Tag.

[Chorus]
Wir haben uns heute hier versammelt
um Motte Respekt zu erweisen
auch wenn er Chaos brachte
war er ein Teil von uns

Die Straßen werden stiller sein
ohne sein Lachen in der Nacht
und irgendwo im Regen
verabschiedete sich die Mafia

[Verse 2]
Der Sarg wurde langsam heruntergelassen
der Wind wurde immer stärker
Blätter flogen durch den Friedhof
während alle schweigend dastanden

Doch plötzlich…
begann die Erde zu leuchten.

[Bridge]
Ein grünes Licht…
direkt aus dem Grab…

Totem-Geräusche hallten durch die Nacht.

Das Grab explodierte auf einmal.
Dreck flog durch die Luft.
Und Motte sprang plötzlich wieder heraus.

[Beat Switch]

Motte stand hustend im Regen
schaute völlig genervt in die Runde
und sagte:

„Wir müssen langsam echt aufhören damit…
wir können nicht jeden Tag Totems poppen…
solange es keine Raidfarm gibt.“

[Final Outro]
Stille.

Regen fiel weiter auf den Friedhof.
Alle standen regungslos da.

Motte hustete kurz
und klopfte sich die Erde von der Jacke.

Dann…
wurde sein Gesicht plötzlich blass.

Langsame Schritte hinter ihm.

Motte drehte sich langsam um.

Moneymaker stand direkt hinter ihm.

Netherite-Schwert in der Hand.
Komplett regungslos.

Motte bekam Panik.

Moneymaker holte tief Luft und sagte:

„VERRECK DU BL—“

Kurze Stille.

Dann fing Moneymaker plötzlich an zu lachen.

„Ha…
nein, Spaß.“

Stille auf dem ganzen Friedhof.

Motte atmete erleichtert aus.

Und irgendwo im Hintergrund
hörte man Schnitzel einfach nur sagen:

„Was ist eigentlich falsch mit euch?“`,"Città di Marmo":`Intro

Nel cielo blu…
sogno d’Italia…
Città di Marmo…
oh oh oh…

Hook

Volare, oh oh, Città di Marmo
Tra Marmor und Gold im warmen Sommerstrom
Money baut Paläste so hoch in das Licht
Und Motte macht Räume, die man nie vergisst

Erdbeere bringt alles vom Feld in die Stadt
Dove la famiglia insieme alles hat
Oh Italia, wir bauen sie neu
Città di Marmo — für immer dabei

Part 1

Sonnenlicht fällt auf die alten Steine
Und die Stadt wächst langsam aus Träumen alleine
Money sagt: „Schaut, wie der Marmor erglüht“
Während ein neuer Palast aus der Erde entsteht

Motte geht lachend durch goldene Hallen
Kerzen und Lichter in Fenstern verfallen
Er baut aus der Leere ein königliches Haus
Und plötzlich sieht alles wie ein Wunder aus

Hook

Volare, oh oh, Città di Marmo
Tra Marmor und Gold im warmen Sommerstrom
Money baut Paläste so hoch in das Licht
Und Motte macht Räume, die man nie vergisst

Erdbeere bringt alles vom Feld in die Stadt
Dove la famiglia insieme alles hat
Oh Italia, wir bauen sie neu
Città di Marmo — für immer dabei

Part 2

Erdbeere draußen im goldenen Feld
Wo der Wind alle Steine für die Stadt bestellt
Er trägt auf den Wagen das Holz und den Stein
Damit unsere Träume Wirklichkeit sein

Money schaut stolz auf die wachsenden Türme
Als würden sie fliegen bis hoch in die Stürme
Und jeder im Dorf hört das fröhliche Lied
Das durch Città di Marmo zieht

Bridge (ruhiger, träumerisch)

Ohhh… la vita è bella…
ohhh… sogno per sempre…
Città di Marmo…
non finirà mai…

Final Hook (groß, uplifting)

Volare, oh oh, Città di Marmo
Ein Traum aus Licht im italienischen Sommerstrom
Money baut Paläste, die strahlen im Wind
Und Motte schafft Orte, die voller Leben sind

Erdbeere bringt alles vom Feld in die Stadt
Dove la famiglia tutto insieme hat
Oh Italia, wir singen dabei
Città di Marmo — für immer frei

Outro

Volare… oh oh…
Città di Marmo…
la famiglia…
per sempre…`,"Alexis of the Emerald Isle":`[Intro – soft fiddle & ocean ambience]

Far beyond the western shoreline,
where the cold Atlantic roars,
there’s a name sung through the old pubs,
echoing from shore to shore…

Alexis…
Ohhh Alexis…

The keeper of voices.
The master of the crowd.
The man who turned silence…
into thunder loud.

[🎵 STROPHE 1]

The rain came down on Dublin town,
the night was cold and black,
when laughter burst from Murphy’s pub
and every head turned back.

There he stood beside the fire,
with stories in his hand,
a thousand voices rose at once
for the hero of the land.

From Galway Bay to Cork below,
through every winding street,
they spoke about young Alexis
and the crowds beneath his feet.

He knew the words to calm the storms,
he knew the songs to raise,
and every soul inside the room
was set alive ablaze.

[🍻 REFRAIN]

[Big Pub Chorus]

HEY HO! ALEXIS!
Raise your glasses high!
The king of every tavern
beneath the Irish sky!

HEY HO! ALEXIS!
The legend never dies!
From the hills of Connemara
to the seas where sailors cry!

Ohhh the fiddles play,
and the old men sing,
for the man who wears
the social crown like a king!

ALEXIS!
ALEXIS!
Ireland calls your name tonight! 🍀
[🎵 STROPHE 2]

The fishermen of Kerry said,
“No man commands a room
like Alexis with his silver tongue
and laughter chasing gloom.”

The women danced, the tables shook,
the whiskey poured like rain,
and every bard in every bar
was singing his refrain.

He walked among the restless crowds
like captains of old seas,
with firelight dancing in his eyes
and thunder in the breeze.

When chaos struck the village halls
and angry voices rose,
Alexis stood with steady hands
and brought the whole world close.

[🎵 PRE-CHORUS]

So beat the drums and light the fire,
let every singer roar,
for legends aren’t born in gold —
they’re born on tavern floors!

[🍻 REFRAIN (BIGGER)]

HEY HO! ALEXIS!
Sing louder through the night!
The guardian of the voices,
the keeper of the light!

HEY HO! ALEXIS!
The pubs erupt in flame!
And every child in Ireland
will someday know your name!

[🎻 INSTRUMENTAL BREAK]

(Fast fiddle solo, stomping drums, crowd chants “HEY! HEY! HEY!”)

[🎵 STROPHE 3]

Now sailors crossing oceans wide
still tell the tale at sea,
about the man from emerald lands
who forged unity.

Not with swords nor royal crowns,
nor riches from above,
but through the power of his voice
and endless Celtic love.

The banners wave in Limerick,
the bells in Belfast ring,
and every pub from coast to coast
still rises up to sing.

[🌊 EMOTIONAL BRIDGE]

[Slow & emotional]

And when the final candle fades…
when silence fills the air…
the echoes of his laughter still
will dance forever there.

For some men chase immortality,
and some are lost in time…
but legends live forevermore
inside the songs and rhymes…
Ohhh Alexis…
The emerald isle remembers you…

[🍀 FINAL CHORUS (HUGE FINALE)]

[Massive Choir + Full Instruments]

HEY HO! ALEXIS!
The whole damn island sings!
The fiddles cry, the drums collide,
the tavern ceiling rings!

HEY HO! ALEXIS!
The hero of the crowd!
The voice that turned the darkest nights
into an anthem loud!

Raise the whiskey!
Raise the choir!
Feed the roaring Celtic fire!

And while the Atlantic kisses Ireland’s shore tonight…
THE NAME OF ALEXIS
WILL NEVER DIE! 🍀

[🎬 OUTRO]

[Slow fading choir]

Ohhh Alexis…
Ohhh Alexis…

The pubs grow quiet…
but the legend remains…`,"JOA IST HALT PHYSIK!":`[Intro]
Ey ey ey eyyyy
Taunuswunderland eskaliert
Malle-Vibes mitten in Hessen
Jascha hat wieder alles geleakt

[Strophe 1]
Wir laufen durch das Taunuswunderland
Jascha filmt schon wieder völlig außer Rand und Band
Paul sagt:
„Bro musst du wirklich alles zeigen?“
Doch Jascha sagt:
„Warte kurz ich muss Thumbnail machen“

Dann Achterbahn
Dann Autoscooter
Dann frontal die Kamera auf den Bruder
Und plötzlich schreit er komplett ohne Plan:
„AH UND DA IST MEINE OMA!“ quer durch die Bahn

[Pre-Hook]
Paul wird blass
Katastrophe
Jascha grinst
„Ist doch okeee“

[Hook]
Paul! Paul!
Jetzt kennt ganz Hessen deinen Namen
Paul! Paul!
Jascha konnte sich nicht zusammenreißen
„Pixel ich raus“
Ja klar Digga natürlich
Doch dein Gesicht war schon
Viermal im Video zu sehen

[Party Drop]
JOA IST HALT PHYSIK!!!
HEY!!!
JOA IST HALT PHYSIK!!!
HEY!!!

[Strophe 2]
Paul fragt:
„Warum fährt das eigentlich so schnell?“
Jascha schaut kurz hoch
Ganz philosophisch
Ganz speziell

„Joa…“
kurze Pause…
„…ist halt Physik.“

Und plötzlich grölt der ganze Freizeitpark:
„IST HALT PHYSIK!“

[Dialog Break]
Paul: „Filmst du eigentlich?“
Jascha: „Ja.“
Paul: „Na dann hast du meinen Namen gerade geleakt.“
Jascha: „Ja ne pixel ich raus.“

[Build-Up]
Doch dann…
Nahaufnahme
Volles Gesicht
4K Kamera
Nichts zensiert
Komplett egal
Jascha filmt einfach weiter

[Final Hook]
Paul! Paul!
Jetzt kennt das ganze Taunuswunderland deinen Namen
Paul! Paul!
Und Oma war auch noch im Video
Die Achterbahn fährt
Der Paul schwitzt
Und alle im Park schreien:
„JOOOA IST HALT PHYSIK!“
`,"Erdbeere Around the World – Teaser":`

Person 1:
Ey… hast du eigentlich irgendwas von Erdbeere gehört? 👀

Person 2:
Nee… warum?

Person 1:
Bro ist einfach weg 😭

Person 2:
Warte was? Weg weg?

Person 1:
Ja man! Der meinte noch:
"Mir ist zuhause langweilig… ich will die Welt sehen." ✈️

Person 2:
Ach komm, der wollte doch nur bisschen rausgehen 😭

Person 1:
Dachte ich auch… aber dann wurde es komisch.

Person 2:
Wie komisch? 👀

Person 1:
Erst schickt er plötzlich Bilder aus Shanghai 🇨🇳

Person 2:
WAS?!

Person 1:
Dann Rio
Dann Rom
Dann Amsterdam

Person 2:
BROOO 😭

Person 1:
Und danach Amerika
Ägypten
Griechenland
Jamaika
und zwei unbekannte Länder

Person 2:
Nahhh der macht einfach komplette Weltreise 😭🌍

Person 1:
Aber ich frag mich immer noch eine Sache…

Person 2:
Welche?

Person 1:
Wo wird es ihn als Nächstes hintreiben...? 👀

🎵✨ ERDBEERE AROUND THE WORLD ✨🎵
12 Songs 🎵
10 Länder 🌍
1 exotisches Album ✨

Erdbeeres Reise quer durch die Welt...
soon..🍓✈️`,"Boarding Pass":`Ehrlich gesagt…
ich hatte das Gefühl, diese Stadt ist einfach zu klein für mich geworden

nicht schlecht… nicht traurig…
aber irgendwie… war da mehr in mir drin als das hier

jeden Tag dieselben Straßen
dieselben Wege
und ich hab gemerkt… ich will mehr als das hier sehen

also hab ich meinen Koffer gepackt
und bin einfach los
ohne perfekten Plan… aber mit einem Ziel im Kopf

ich will die Welt sehen
nicht nur davon hören
sondern wirklich da sein

Tokio… Rio… Kairo… Amsterdam… Kingston…

jede Stadt hat ihren eigenen Sound
ihren eigenen Vibe
ihre eigene Geschichte

und wenn meine Heimat nur der Anfang ist…
dann fang ich jetzt erst richtig an

willkommen bei… Erdbeere around the world`,"Shanghai Dreams":`[Intro]
Shanghai…
erste Nacht hier draußen
alles fühlt sich an wie aus einem Film

[Part 1]

Steig aus dem Flieger, kalte Luft in mei’m Gesicht
tausend Lichter spiegeln sich
seh die Skyline von Pudong aus dem Taxi
und ich merk direkt… zuhause fehlt mir das hier irgendwie

Lauf am Bund entlang, alles leuchtet gold
Schiffe auf dem Huangpu, Straßen niemals still
Fremde Sprache um mich rum, doch ich fühl mich frei
als würd diese Stadt sagen: „Bleib noch eine Zeit“

Oriental Pearl Tower zwischen Wolken in der Nacht
und ich steh nur da und schau wie klein die Heimat war
Nanjing Road voller Menschen, Farben überall
jede Ecke dieser Stadt fühlt sich lebendig an

[Hook]

Shanghai Dreams in meinen Augen
Neonlichter über mir
fremde Welt, doch irgendwie fühlt sich alles richtig hier

Zwischen Tempeln und den Towers
such ich irgendwas in mir
Erdbeere jetzt in Shanghai
und ich glaub ich verlier mich hier

[Part 2]

Yu Garden wirkt wie aus vergangener Zeit
ruhige Tempel mitten zwischen all dem Lärm und all dem Licht
Räucherstäbchen zieh’n langsam durch die Luft
während draußen schon die nächste Skyline auf mich ruft

Maglev Train fliegt fast schneller als Gedanken
alles hier bewegt sich ohne Pause ohne warten
Shanghai Tower kratzt hoch oben an den Sternen
und ich frag mich wie viel größer diese Welt noch werden kann

Hab zuhause oft gedacht ich wär verloren
doch vielleicht war ich einfach nur am falschen Ort geboren
Denn seit ich durch diese Straßen nachts allein geh
fühlt sich jeder Schritt ein kleines Stück nach Freiheit an

[Hook]

Shanghai Dreams in meinen Augen
Neonlichter über mir
fremde Welt, doch irgendwie fühlt sich alles richtig hier

Zwischen Tempeln und den Towers
such ich irgendwas in mir
Erdbeere jetzt in Shanghai
und ich glaub ich verlier mich hier

[Outro]

Nächster Flug kommt irgendwann…
doch Shanghai bleibt für immer Teil von mir`,"Rio Nights":`[Intro]

Rioooo!
Yeah yeah
ganze Stadt wach heute Nacht
Erdbeere in Brasil!

[Part 1]

Steig aus’m Flieger, sofort diese Hitze
Musik auf den Straßen, Bass bis in die Rippen
Copacabana voll mit Menschen am Tanzen
alle drehen durch, keiner bleibt hier stehen

Caipirinha in der Hand unter Neonlichtern
Samba auf den Dächern bis zum frühen Morgen
Christusstatue schaut runter auf die Stadt
während unten jede Straße schon am Brennen ist

Favela-Lichter funkeln hoch an den Bergen
Motorräder fahren laut durch die Nächte
Rio lebt anders, hier schläft niemand ein
selbst um vier Uhr morgens hört man überall Musik

[Pre-Hook]

Und ich schwör
diese Stadt hat Energie wie keine andere
ganze Welt fühlt sich hier plötzlich leichter an

[Hook]

Rio Nights, alle tanzen
ganze Stadt dreht heute durch
Samba-Rhythmen auf den Straßen
und die Nacht hört niemals auf

Unter Palmen an der Küste
Feuerwerk am Ozean
Erdbeere jetzt in Rio
und ich will hier niemals weg

Rio Nights, Rio Nights
Lichter spiegeln sich im Meer
Von der Copacabana
bis hoch zum Zuckerhut

[Part 2]

Lauf durch Lapa unter bunten Farben
Menschen singen laut zwischen den Bars
Percussion auf den Straßen ohne Ende
jeder Beat geht direkt durch den Körper

Karnevalszüge zieh’n durch die Alleen
Glitzer überall, Trommeln überall
Tausend Stimmen gleichzeitig am Schreien
als würde ganz Rio heute explodieren

Steh am Zuckerhut kurz vor Sonnenaufgang
seh die ganze Stadt gold werden im Licht
Und ich check erst hier zwischen all den Menschen
wie groß diese Welt eigentlich wirklich ist

Maracanã voller Gesänge und Fahnen
selbst die Straßen fühlen sich hier an wie Stadien
Rio gibt dir keine Zeit stillzustehen
denn hier bewegt sich einfach alles nonstop

[Bridge]

Samba in mei’m Kopf
Meerblick jede Nacht
Rio hat aus einer Reise
ein Abenteuer gemacht

[Hook]

Rio Nights, alle tanzen
ganze Stadt dreht heute durch
Samba-Rhythmen auf den Straßen
und die Nacht hört niemals auf

Unter Palmen an der Küste
Feuerwerk am Ozean
Erdbeere jetzt in Rio
und ich will hier niemals weg

Rio Nights, Rio Nights
Lichter spiegeln sich im Meer
Von der Copacabana
bis hoch zum Zuckerhut

[Outro]

Rio de Janeiro…
eine Nacht hier fühlt sich an wie ein ganzes Leben`,"Dolce Vita":`[Intro]

Eh eh…
Italiaaa
Dolce Vita, baby

[Part 1]

Fahr auf der Vespa durch die Straßen von Rom
warme Sommernacht und die Fenster steh’n offen
Kolosseum leuchtet gold unter’m Himmel
während irgendwo ein Straßenmusiker singt

Espresso am Morgen direkt am Trevi-Brunnen
ganze Stadt riecht nach Sommer und Parfum
Leute lachen laut draußen vor den Cafés
und ich merk wie mein Kopf endlich ruhig wird

Fahr vorbei an der Spanischen Treppe bei Nacht
alte Gassen voller Musik und Gelächter
Alles hier wirkt wie aus einem alten Film
als wär Italien einfach langsamer als die Welt

[Hook]

Dolce Vita jede Nacht
fahr durch Italien ohne Plan
von Mailand bis zur Küste
fühlt sich alles leichter an

Gondeln fahren durch Venedig
Lichter spiegeln sich im Wein
Erdbeere lebt in Italien
und ich will nie wieder heim

Oh mamma mia
diese Nächte fühlen sich endlos an
Dolce Vita
unter Sternen irgendwo in Rom

[Part 2]

Amalfi-Küste kurz vor Sonnenuntergang
Meer glänzt golden neben der Küstenstraße
Musik spielt laut aus einem alten Cabrio
während Palmen sich im warmen Wind bewegen

In Venedig fahr’n die Gondeln durch die Nacht
Lichter tanzen langsam auf dem Wasser
Und selbst die Zeit fühlt sich hier anders an
als würde niemand hier jemals Stress haben

Später nachts in Mailand zwischen Lichtern
Luxusrestaurants und teure Fenster
Doch egal wo ich hier grade bin
gibt mir Italien dieses Gefühl von Freiheit

Pisa kurz für ein Foto auf der Reise
dann direkt weiter Richtung Toskana
Weinberge leuchten gold im Abendlicht
und ich schwör ich hab mich lang nicht mehr so frei gefühlt

[Bridge]

Vielleicht geht’s gar nicht darum anzukommen
vielleicht geht’s nur darum das Leben zu fühlen
und Italien zeigt mir jede Nacht
wie schön das alles eigentlich sein kann

[Hook]

Dolce Vita jede Nacht
fahr durch Italien ohne Plan
von Mailand bis zur Küste
fühlt sich alles leichter an

Gondeln fahren durch Venedig
Lichter spiegeln sich im Wein
Erdbeere lebt in Italien
und ich will nie wieder heim

Oh mamma mia
diese Nächte fühlen sich endlos an
Dolce Vita
unter Sternen irgendwo in Rom

[Outro]

Italia…
eine Nacht hier fühlt sich an wie Kino`,"Amsterdam 3AM":`[Intro]

Amsterdam…
3AM
yeah
Bass in meiner Brust

[Build-Up]

Regen auf den Straßen
Neon in mei’m Blick
Fahrräder fahr’n vorbei
doch die Stadt schläft nicht

Rote Fenster
kalter Wind
alles leuchtet rot und blau

[Drop / Hook]

Amsterdam um drei Uhr nachts
Bass drückt gegen meine Brust
rote Lichter, schwarzer Himmel
alles bebt unter dem Club

Neonregen auf den Straßen
Kickdrums bis in meinen Kopf
Erdbeere in Amsterdam
und die Nacht hört niemals auf

Amsterdam
3AM
alle springen wenn der Bass einsetzt

Amsterdam
3AM
ganze Stadt bebt durch die Nacht

[Part 1]

Steig aus’m Club, Rauch hängt in der Luft
Tausend Menschen unter Strobelights
Hardtechno dröhnt durch alte Keller
während draußen kalter Regen fällt

Lauf durchs Rotlichtviertel ohne Ziel
rote Fenster spiegeln sich im Wasser
Aus den Bars hörst du verzerrte Bässe
jede Straße klingt nach Untergrund

Amsterdam Centraal noch voller Leute
selbst um vier bewegt sich diese Stadt
Zwischen Grachten, Neon und Sirenen
fühlt sich jede Nacht hier endlos an

[Build-Up]

Kickdrum
Herzschlag
rote Lichter überall

kalter Regen
nasse Straßen
doch wir tanzen trotzdem weiter

[Drop / Hook]

Amsterdam um drei Uhr nachts
Bass drückt gegen meine Brust
rote Lichter, schwarzer Himmel
alles bebt unter dem Club

Neonregen auf den Straßen
Kickdrums bis in meinen Kopf
Erdbeere in Amsterdam
und die Nacht hört niemals auf

Amsterdam
3AM
alle springen wenn der Bass einsetzt

Amsterdam
3AM
ganze Stadt bebt durch die Nacht

[Part 2]

Warehouse irgendwo hinter den Grachten
Strobos blitzen durch den Nebel
Acid-Synths schneiden durch die Dunkelheit
und die Menge springt gleichzeitig im Takt

Fahrradfahrt durch kalten Morgenregen
Ohren taub vom Bass der letzten Stunden
Rijksmuseum zieht vorbei im Nebel
während langsam schon die Sonne kommt

Und vielleicht geht’s gar nicht ums Ziel
vielleicht nur um diese Nächte hier
denn zuhause war alles viel zu leise
doch Amsterdam klingt wie Freiheit für mich

[Final Drop]

Amsterdam um drei Uhr nachts
Bass drückt gegen meine Brust
rote Lichter, schwarzer Himmel
alles bebt unter dem Club

Kickdrums durch die Grachten
Neon leuchtet auf dem Fluss
Erdbeere in Amsterdam
und ich brauch genau diesen Rausch

[Outro]

3AM…
Regen…
Neon…
Amsterdam schläft nie`,"Route 66":`[Intro]

Yeah…
California dreams
Route 66, baby

[Part 1]

Steig in den Mustang, Motor startet laut
Kilometerfresser Richtung Westen raus
Endlose Straßen mitten durch die Wüste
nur der Sonnenuntergang und meine Playlist

Tankstellen irgendwo im Nirgendwo
alte Neon-Schilder an Motels
Route 66 zieht sich bis zum Horizont
als würd diese Straße niemals enden

Durch Chicago bis nach Arizona
jede Stadt hat ihre eigene Geschichte
Grand Canyon unter rotem Abendhimmel
und ich schwör ich hab noch nie sowas gesehen

Fenster runter während warmer Wind reinzieht
Radio spielt alte amerikanische Songs
Und zum ersten Mal seit langer Zeit
fühlt sich Freiheit größer an als meine Sorgen

[Hook]

Route 66 durch die Nacht
Lichter ziehen an mir vorbei
Von Las Vegas bis L.A.
jeder Kilometer macht mich frei

Motels unter Neonlichtern
Wüstenwind im Abendrot
Erdbeere fährt durch Amerika
als gäb es kein Zurück mehr mehr

[Part 2]

Las Vegas leuchtet mitten in der Dunkelheit
Casinos blinken wie ein anderer Planet
Menschen jagen hier nach Glück bis morgens früh
während draußen die Wüste niemals schläft

Hollywood Sign hoch oben über L.A.
Palmen ziehen langsam an mir vorbei
Venice Beach voll mit Musik und Skatern
alles wirkt wie aus einem alten Film

Stop kurz an einem Diner an der Straße
Kaffee schwarz um vier Uhr nachts
Fremde Leute erzählen ihre Lebensstorys
als würde jeder hier auf der Suche sein

Und vielleicht geht’s genau darum auf Reisen
nicht immer wissen wo der nächste Halt kommt
Denn Amerika zeigt mir auf diesen Highways
dass Freiheit manchmal einfach nur Bewegung ist

[Bridge]

Nur die Straße
der Motor
und der Himmel über mir

keine Grenzen
kein Zuhause
nur die nächste Stadt im Licht

[Hook]

Route 66 durch die Nacht
Lichter ziehen an mir vorbei
Von Las Vegas bis L.A.
jeder Kilometer macht mich frei

Motels unter Neonlichtern
Wüstenwind im Abendrot
Erdbeere fährt durch Amerika
als gäb es kein Zurück mehr

[Outro]

Nächster Stop… Ägypten`,"Sandstorm Eyes":`[Intro]

Ägypten…
warmer Wind
neuer Horizont

[Part 1]

Steig aus dem Flieger, Sonne brennt auf den Asphalt
seh die Stadt aus dem Fenster, alles wirkt so alt
Zwischen Kairo und den Straßen voller Stimmen
fühlt es sich an als würden Geschichten weiterleben

Fahr Richtung Gizeh durch den goldenen Sand
und dann stehen sie plötzlich direkt vor mir
Die Pyramiden größer als ich sie mir vorgestellt hab
für einen Moment steh ich einfach nur still

Die Sphinx schaut raus über tausend Jahre Zeit
und ich frag mich wie viele Menschen hier schon standen
Wüstenwind zieht langsam durch die Nacht
als würden alte Stimmen mit ihm reisen

[Pre-Hook]

Und vielleicht ist Zeit größer als wir denken
denn manche Orte vergessen niemals ihren Namen

[Hook]

Sandstorm Eyes unter Sternen
goldener Himmel über mir
Wüstenwind zieht durch Gedanken
und ich verlier mich tief in mir

Zwischen Pyramiden und den Nächten
fühlt sich alles anders an
Erdbeere jetzt in Ägypten
mitten zwischen Sand und Sternen

[Part 2]

Später auf dem Markt in Kairo zwischen Lichtern
tausend Stimmen, Düfte und Musik
Jede Straße hat hier ihre eigene Geschichte
jede Ecke klingt nach einer anderen Zeit

Nillichter spiegeln sich im Wasser
während langsam schon die Nacht beginnt
Und ich merk auf dieser Reise immer mehr
dass jede Welt ihre eigene Sprache spricht

Vielleicht geht's nicht darum weit wegzugehen
sondern zu sehen wie groß die Welt wirklich ist
Denn manche Orte bleiben nicht nur Erinnerungen
sie bleiben irgendwo in dir drin

[Bridge]

Warmer Wind
tausend Sterne
und die Zeit scheint stillzustehen

[Hook]

Sandstorm Eyes unter Sternen
goldener Himmel über mir
Wüstenwind zieht durch Gedanken
und ich verlier mich tief in mir

Zwischen Pyramiden und den Nächten
fühlt sich alles anders an
Erdbeere jetzt in Ägypten
mitten zwischen Sand und Sternen

[Outro]

Der Wind trägt Geschichten weiter…`,"Greek Summer":`[Intro]

Oh oh oh…
Griechenland
Sommer in der Luft

[Part 1]

Steig aus der Fähre, Meer glänzt unter Licht
weiße Häuser zieh’n vorbei in meinem Blick
Santorini wirkt wie aus einem Traum
blau auf weiß unter einem goldenen Himmel

Warmer Wind zieht langsam durch die Gassen
Menschen sitzen draußen bis tief in die Nacht
Musik kommt aus den kleinen Tavernen
und jeder hier scheint die Zeit vergessen zu haben

Akropolis hoch über den Lichtern von Athen
tausend Jahre schauen auf die Straßen runter
Und ich bleib kurz stehen und denk mir nur
wie viele Geschichten dieser Ort schon gesehen hat

[Pre-Hook]

Jeder Sonnenuntergang hier am Meer
fühlt sich an als würd die Welt kurz stillstehen

[Hook]

Greek Summer unter Sternen
blaues Meer und warmer Wind
weiße Häuser auf den Klippen
wo der Himmel endlos wirkt

Von Athen bis Santorini
trägt der Sommer mich durchs Licht
Erdbeere jetzt in Griechenland
und ich will grad nichts zurück

[Part 2]

Lauf durch Mykonos bei Nacht am Hafen
kleine Gassen voller Lachen und Musik
Boote spiegeln sich auf dunklem Wasser
und die Luft riecht nach Meer und Sommerwind

Alte Tempel zwischen Bergen und Geschichten
jeder Stein hier scheint Erinnerungen zu tragen
Sonne färbt die Straßen langsam gold
während Wellen ruhig gegen Mauern schlagen

Und ich merk auf dieser Reise langsam mehr
manche Orte fühlen sich wie Zuhause an
Denn Griechenland zeigt mir zwischen Meer und Sternen
wie sich Freiheit mit Ruhe mischen kann

[Bridge]

Sommernächte
Meeresrauschen
und Musik zieht durch den Wind

[Final Hook]

Greek Summer unter Sternen
blaues Meer und warmer Wind
weiße Häuser auf den Klippen
wo der Himmel endlos wirkt

Von Athen bis Santorini
trägt der Sommer mich durchs Licht
Erdbeere jetzt in Griechenland
und ich will grad nichts zurück`,"Kingston Sun":`[Intro]

Yeah yeah
Jamaica...
Sonne auf meiner Haut

[Part 1]

Steig aus dem Flieger, warme Luft im Gesicht
Palmen bewegen sich langsam im Wind
Kingston lebt schon mitten auf den Straßen
überall Musik und Stimmen in der Nacht

Fahr Richtung Küste unter Abendfarben
Meer glänzt golden bis zum Horizont
Seven Mile Beach direkt vor meinen Augen
und ich bleib einfach stehen und schau nur hin

Später hoch Richtung Blue Mountains
Wolken ziehen langsam durch die Gipfel
Jeder Blick sieht aus wie ein Postkartenbild
als wär die Zeit hier etwas langsamer

[Pre-Hook]

Und plötzlich wirkt die Welt ganz ruhig
als hätte irgendwer die Zeit langsamer gestellt

[Hook]

Kingston Sun über dem Meer
warmer Wind zieht durch die Nacht
Palmen tanzen mit den Wellen
während die Insel niemals schläft

Von Kingston bis zur Blue Lagoon
trägt der Sommer mich durchs Licht
Erdbeere jetzt in Jamaika
und ich will hier nicht mehr weg

[Part 2]

Musik kommt aus kleinen Bars am Strand
Menschen lachen draußen bis zum Morgen
Blue Lagoon glänzt tief im Mondlicht
während Wellen langsam an die Küste schlagen

Jeder Sonnenuntergang sieht anders aus
orange Farben über'm Wasser
Und ich merk auf dieser Reise immer mehr
dass Freiheit manchmal einfach Ruhe heißt

[Outro]

Jamaica…
Sonne, Meer und Musik`,"Corazón Caliente":`[Intro]

México...
yeah yeah
Erdbeere llegó

[Part 1]

Steig aus dem Flieger, Sonne brennt auf die Straßen
Farben überall, Musik aus allen Gassen
Menschen tanzen draußen mitten auf den Plätzen
als würde hier die Nacht niemals enden

Mexiko-Stadt lebt zwischen Licht und Stimmen
jede Straße klingt nach einer neuen Geschichte
Alte Häuser leuchten unter Abendfarben
und ich lauf einfach weiter ohne Ziel

Später Richtung Chichén Itzá unterwegs
alte Steine erzählen Geschichten im Wind
Und ich steh dort zwischen Vergangenheit und Himmel
und denk mir wie verrückt diese Welt eigentlich ist

[Pre-Hook]

Herz schlägt schneller
Musik zieht durch die Luft
und plötzlich fühlt sich alles leichter an

[Hook]

Corazón Caliente
Feuer tief in meiner Brust
Sonnenuntergänge brennen
über'm Meer bis in die Nacht

Von Cancún bis nach Mexiko-Stadt
trägt die Musik mich durch den Wind
Erdbeere jetzt in Mexiko
wo die Nächte niemals still sind

[Part 2]

Bunte Straßen unter tausend Lichtern
Gitarren klingen bis zum Morgen weiter
Día-de-los-Muertos-Farben auf den Wänden
jede Ecke scheint zu leben heute Nacht

Palmen bewegen sich langsam am Strand
während Wellen gegen die Küste schlagen
Und ich merk auf dieser Reise immer mehr
wie viele Welten in einer Welt versteckt sind

[Bridge]

Warmer Wind
Feuer am Himmel
Musik trägt mich durch die Nacht

[Final Hook]

Corazón Caliente
Feuer tief in meiner Brust
Sonnenuntergänge brennen
über'm Meer bis in die Nacht

Von Cancún bis nach Mexiko-Stadt
trägt die Musik mich durch den Wind
Erdbeere jetzt in Mexiko
wo die Nächte niemals still sind`,Safari:`[Intro]

Kenia…
letzter Stop
bevor die Reise endet

[Part 1]

Steig aus dem Jeep, warmer Wind im Gesicht
goldene Sonne fällt tief auf die Savanne
Masai Mara zieht sich bis zum Horizont
und ich steh da einfach still und schau nur hin

Löwen laufen weit draußen durch die Gräser
Elefanten zieh’n langsam durch die Landschaft
Und zum ersten Mal auf dieser ganzen Reise
denk ich daran wie schnell alles verging

Mount Kenya schaut weit über die Wolken
als würde er die Welt von oben seh’n
Und plötzlich wird mir langsam klar
dass dies das letzte Land auf meiner Karte ist

[Pre-Hook]

Noch ein Sonnenuntergang
noch eine Nacht unter fremden Sternen

[Hook]

Safari unter Sternen
Feuer brennt tief in der Nacht
letztes Land auf meiner Reise
bevor der Weg nach Hause startet

Von Nairobi bis zur Savanne
trägt der Wind mich durch die Zeit
Erdbeere jetzt in Kenia
und ich halt den Moment noch fest

[Part 2]

Später nachts am Feuer unter Sternen
hör ich Trommeln irgendwo im Wind
Jede Reise, jeder Ort und jede Straße
zieht nochmal langsam durch meinen Kopf

Diani Beach unter dem Abendhimmel
Wellen schlagen ruhig an die Küste
Und ich denk an all die Länder die ich sah
an Shanghai, Rio und die langen Nächte

Denn zuhause war mir damals viel zu langweilig
ich wollte sehen wie groß die Welt wirklich ist
Und jetzt beim letzten Land vor meiner Rückkehr
weiß ich endlich warum ich losgegangen bin

[Bridge]

Letztes Land
letzte Nacht
letzte Sterne dieser Reise

[Final Hook]

Safari unter Sternen
Feuer brennt tief in der Nacht
letztes Land auf meiner Reise
bevor der Weg nach Hause startet

Von Nairobi bis zur Savanne
trägt der Wind mich durch die Zeit
Erdbeere jetzt in Kenia
und ich halt den Moment noch fest`,"Home Again":`Weißt du...
Verrückt, wenn ich jetzt zurückdenke.

Alles hat einfach damit angefangen, dass mir zuhause langweilig war.
Jeden Tag dieselben Straßen, dieselben Menschen, dieselben Gedanken.
Und irgendwann hab ich mir gesagt:
Da draußen muss doch noch mehr sein.

Also hab ich meinen Koffer genommen...
und bin einfach los.

Shanghai hat mir gezeigt, wie groß die Welt sein kann.
Rio hat mir gezeigt, wie lebendig sie ist.
Italien hat sich angefühlt wie ein Film.
Amsterdam hat niemals geschlafen.
Amerika hatte Straßen ohne Ende.
Ägypten hatte Geschichten, die älter waren als alles, was ich kannte.
Griechenland fühlte sich nach Sommer an.
Jamaika nach Freiheit.
Mexiko nach Leben.
Und Kenia...
Kenia war wie ein letzter Sonnenuntergang, bevor alles endet.

Und jetzt sitz ich wieder hier...
mit demselben Koffer wie am Anfang.
Aber irgendwie fühlt er sich schwerer an.
Nicht wegen Sachen.
Sondern wegen Erinnerungen.

Und vielleicht hab ich auf dieser Reise etwas verstanden...
Man muss nicht um die Welt fliegen, um etwas zu finden.
Aber manchmal muss man weit weggehen...
um zu merken, was man eigentlich gesucht hat.

Und egal wie weit man geht...
irgendwann führt jede Reise wieder nach Hause.

Erdbeere around the world.
Ende der Reise.`,"Der Unfall":`[Intro]
Er ging durch die Stadt
Ohne Böse Gedanken im Kopf
Normaler Tag, Normaler Weg
Doch das Schicksal packte die Gelegenheit am Schopf

[Strophe 1]
Ein Rohes Stück Schweinchen da
ein bisschen Salz und Pfeffer hier
Fällt der Hells unter den Hammer
Ist er platt, dass tote Tier

Ein Stein liegt auf dem Weg
der arme Hells fällt in eine Wanne
Zieht  sich voll durch ne Panade
und direkt in eine Pfanne

[Pre-Chorus]
Ohhhh armes Hells
Ohhh heute Fällst 
Du in die Pfanne 
und aus dir wird Schnitzel durch ne Panne

[Chorus]
Lecker Lecker Wiener Schnitzel
Lecker Lecker das esse ich gern
Oh du armes Hells
Dein letztes Stündlein ist nicht fern.

[Strophe 2]
Jetzt steht er da
der arme Hells
Vor dem hunrigen Money klar
ist er versteinert wie ein fels

Er sieht gerade so lecker aus
So Gold Gebrannt und mit brauner Soße
Money sabbert schon
auf leckeres Schnitzel in dieser Sexy pose

[Pre-Chorus]
Ohhhh armes Hells
Ohhh heute Fällst 
Du durch ne Panne
Bald hat dich Money gegessen direkt aus der Pfanne

[Chorus]
Lecker Lecker Wiener Schnitzel
Lecker Lecker das esse ich gern
armes Hells liegst du da 
Dein letztes Stündlein ist jetzt da.

[Outro]
Lecker Lecker Wiener Schnitzel
Lecker Lecker das aß ich gern
Armes Hells bist jetzt weg
Immerhin Money hats geschmeckt

Also fühle dich geehrt
Money hat dich verzehrt
Also sei froh....
Du bist jetzt im Bauch..

Von Mister Money-Maker`},$n=[],er=`/Koenigliche-Mafia/`,V=e=>`${er}${e}`,tr=[{id:`S1`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S1.m4a`),radioOnly:!0},{id:`S2`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S2.m4a`),radioOnly:!0},{id:`S3`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S3.m4a`),radioOnly:!0},{id:`S4`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S4.m4a`),radioOnly:!0},{id:`S5`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S5.m4a`),radioOnly:!0},{id:`S6`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S6.m4a`),radioOnly:!0},{id:`S7`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S7.m4a`),radioOnly:!0},{id:`S8`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/S8.m4a`),radioOnly:!0}],nr=[{id:`L1`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/L1.m4a`),radioOnly:!0},{id:`L2`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/L2.m4a`),radioOnly:!0},{id:`L3`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/L3.m4a`),radioOnly:!0},{id:`L4`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/L4.m4a`),radioOnly:!0}],rr=[{id:`T1`,type:`jingle`,category:`transition`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:09`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/T1.m4a`),radioOnly:!0},{id:`T2`,type:`jingle`,category:`transition`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:09`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/T2.m4a`),radioOnly:!0},{id:`T3`,type:`jingle`,category:`transition`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:09`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/T3.m4a`),radioOnly:!0},{id:`T4`,type:`jingle`,category:`transition`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:09`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/T4.m4a`),radioOnly:!0},{id:`T5`,type:`jingle`,category:`transition`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:09`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/T5.m4a`),radioOnly:!0}],ir=[{id:`R1`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/R1.m4a`),radioOnly:!0},{id:`R2`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/R2.m4a`),radioOnly:!0},{id:`R3`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/R3.m4a`),radioOnly:!0}],ar=[{id:`AD_CARRYGOLD`,type:`ad`,title:`Carrygold`,artist:`Neo City Werbung`,duration:`00:19`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/carrygold.mp3`),radioOnly:!0},{id:`AD_KAESEFIX`,type:`ad`,title:`Käsefix`,artist:`Neo City Werbung`,duration:`00:29`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Käsefix.mp3`),radioOnly:!0},{id:`AD_Äppelwoi Express`,type:`ad`,title:`Äppelwoi Express`,artist:`Neo City Werbung`,duration:`00:27`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Äppelwoi Express.mp3`),radioOnly:!0},{id:`AD_KINDERAGENTUR`,type:`ad`,title:`Kinderagentur`,artist:`Neo City Werbung`,duration:`00:38`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Kinderagentur.mp3`),radioOnly:!0},{id:`AD_MUSKEL-MANNI'S POWERBUDE`,type:`ad`,title:`MUSKEL-MANNI'S POWERBUDE`,artist:`Neo City Werbung`,duration:`00:24`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/MUSKEL-MANNI'S POWERBUDE.mp3`),radioOnly:!0},{id:`AD_Krawall 95`,type:`ad`,title:`Krawall 95`,artist:`Neo City Werbung`,duration:`01:11`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Krawall 95.mp3`),radioOnly:!0},{id:`AD_Leberkas_Boost`,type:`ad`,title:`Leberkas-Boost`,artist:`Neo City Werbung`,duration:`00:52`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Leberkas-Boost.mp3`),radioOnly:!0},{id:`AD_Madame Brunhilde`,type:`ad`,title:`Madame Brunhilde`,artist:`Neo City Werbung`,duration:`00:27`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Madame Brunhilde.mp3`),radioOnly:!0},{id:`AD_Müüffelnix`,type:`ad`,title:`Müüffelnix`,artist:`Neo City Werbung`,duration:`00:47`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Müüffelnix.mp3`),radioOnly:!0},{id:`AD_Ravioli King`,type:`ad`,title:`Ravioli King`,artist:`Neo City Werbung`,duration:`00:32`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Ravioli King.mp3`),radioOnly:!0},{id:`AD_Klaus Kinskis Staubsaugerparadies`,type:`ad`,title:`Klaus Kinskis Staubsaugerparadies`,artist:`Neo City Werbung`,duration:`00:39`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Klaus Kinskis Staubsaugerparadies.mp3`),radioOnly:!0},{id:`AD_PIZZERINO EXPRESSO`,type:`ad`,title:`PIZZERINO EXPRESSO`,artist:`Neo City Werbung`,duration:`00:44`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/PIZZERINO EXPRESSO.mp3`),radioOnly:!0}],or={id:`AD_INTRO`,type:`ad`,title:`Werbung`,artist:`Neo City Radio`,duration:`00:08`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Werbung.m4a`),radioOnly:!0},sr={id:`AD_OUTRO`,type:`ad`,title:`Werbung Ende`,artist:`Neo City Radio`,duration:`00:08`,cover:V(`covers/Neo-City-Radio.png`),file:V(`radio/Werbung Ende.m4a`),radioOnly:!0};function cr(e){let t=(e-1)*2%ar.length;return[ar[t],ar[(t+1)%ar.length]]}var lr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=lr()}))(),ur=`/Koenigliche-Mafia/`,dr=e=>`${ur}${e}`,fr=`https://forms.gle/NSAUa8ifBkJxrHjn6`,pr={id:`EPMC-OurPlace`,title:`Our Place`,artist:`EuroParksMC`,album:`Making the Impossible Possible`,releaseDate:`2026-04-16`,duration:`03:49`,cover:dr(`covers/EPMC.png`),file:dr(`songs/EPMC-OurPlace.mp3`)};dr(`covers/Trailer1.3.png`),dr(`songs/Trailer1.3.wav`);function mr(e,t,n){return e===`albums`&&t?t.title:e===`playlists`&&n?n.name:e===`songs`?`Songs`:e===`albums`?`Alben`:e===`playlists`?`Playlists`:e===`patchnotes`?`Patchnotes`:e===`extra`?`Extra`:`Startseite`}var hr=e=>({background:e?`linear-gradient(135deg, #ff4dd2, #b84dff)`:`#1db954`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:e?`0 0 18px rgba(255,77,210,0.35)`:`none`,transition:`all 0.25s ease`}),gr=e=>({background:e?`#1b0b2e`:`#1a1f2b`,color:`white`,border:e?`1px solid rgba(255,77,210,0.35)`:`1px solid #2a3142`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:e?`0 0 16px rgba(255,77,210,0.18)`:`none`,transition:`all 0.25s ease`}),_r={width:`100%`,background:`transparent`,color:`white`,border:`none`,textAlign:`left`,padding:`12px 14px`,cursor:`pointer`,fontWeight:700,fontSize:`14px`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`flex-start`,minHeight:`44px`},vr=(e,t=!1)=>({background:e?t?`linear-gradient(135deg, #ff4dd2, #9d4dff)`:`#1db954`:t?`#1b0b2e`:`#171b24`,color:`white`,border:t?`1px solid rgba(255,77,210,0.35)`:`none`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`,boxShadow:e&&t?`0 0 18px rgba(255,77,210,0.35)`:`none`});function yr(){let[e,t]=(0,y.useState)(`home`),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)([]),[o,s]=(0,y.useState)([]),[c,l]=(0,y.useState)(null),[u,d]=(0,y.useState)(null),[f,p]=(0,y.useState)(!1),[m,h]=(0,y.useState)(!1),[g,_]=(0,y.useState)(null),[v,b]=(0,y.useState)(!1),[x,S]=(0,y.useState)(!1),[C,w]=(0,y.useState)(!1),[ee,T]=(0,y.useState)(0),[te,E]=(0,y.useState)(0),[ne,re]=(0,y.useState)(0),[ie,ae]=(0,y.useState)(``),[D,oe]=(0,y.useState)(1),[se,O]=(0,y.useState)(1),[k,ce]=(0,y.useState)(!1),[le,A]=(0,y.useState)(!1),[ue,j]=(0,y.useState)(``),[M,de]=(0,y.useState)(`off`),[pe,me]=(0,y.useState)(!1),[N,he]=(0,y.useState)(!1),[ge,_e]=(0,y.useState)(null),[ve,ye]=(0,y.useState)(1),[be,xe]=(0,y.useState)(``),[Se,Ce]=(0,y.useState)(``),[P,we]=(0,y.useState)(!1),[De,Oe]=(0,y.useState)(``),[ke,Ae]=(0,y.useState)(``),[je,Me]=(0,y.useState)(``),[Pe,Fe]=(0,y.useState)(!1),[Ie,Le]=(0,y.useState)(``),[Re,F]=(0,y.useState)(``),[ze,Be]=(0,y.useState)(!1),[Ve,He]=(0,y.useState)([]),[Ue,We]=(0,y.useState)(null),[Ge,Ke]=(0,y.useState)(!1),[qe,Je]=(0,y.useState)(null),[Ye,Xe]=(0,y.useState)(``),[Ze,Qe]=(0,y.useState)(!1),[I,$e]=(0,y.useState)(!0),[et,tt]=(0,y.useState)(!0),[nt,rt]=(0,y.useState)(!1),[it,at]=(0,y.useState)(!1),[ot,st]=(0,y.useState)([]),[L,ct]=(0,y.useState)(!1);(0,y.useEffect)(()=>{let e=()=>{l(null)};return window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`scroll`,e,!0)}},[]);let[R,lt]=(0,y.useState)(window.innerWidth<=768),ut=(0,y.useRef)(null),dt=(0,y.useRef)(null),ft=(0,y.useRef)(null),pt=(0,y.useMemo)(()=>[...Xn,...$n,pr],[]),z=(0,y.useMemo)(()=>Xn.filter(e=>e.hidden?L&&e.hiddenTag===`berrydeadly`:!0),[L]),mt=(0,y.useMemo)(()=>Xn.filter(e=>!e.hidden).filter(e=>typeof e.id==`number`).sort((e,t)=>e.id-t.id),[]),ht=(0,y.useMemo)(()=>Xn.filter(e=>e.hidden&&e.hiddenTag===`jascha`),[]),gt=(0,y.useMemo)(()=>{let e=ie.trim().toLowerCase();return e?z.filter(t=>t.title.toLowerCase().includes(e)||t.artist.toLowerCase().includes(e)||(t.album||``).toLowerCase().includes(e)):z},[ie,z]),_t=(0,y.useMemo)(()=>[...z].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)).slice(0,5),[z]),vt=(0,y.useMemo)(()=>{let e=new Map;return z.forEach(t=>{if(!t.album)return;e.has(t.album)||e.set(t.album,{id:t.album,title:t.album,artist:t.artist,cover:t.albumCover||t.cover,releaseDate:t.releaseDate,tracks:[]});let n=e.get(t.album);n.tracks.push(t),new Date(t.releaseDate)>new Date(n.releaseDate)&&(n.releaseDate=t.releaseDate)}),[...e.values()].map(e=>{let t=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));return{...e,releaseDate:t[0]?.releaseDate||e.releaseDate,isAlbum:e.tracks.length>1,releaseType:e.tracks.length>1?`Album`:`Single`,tracks:t}}).sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate))},[z]),yt=e=>{if(!e)return 0;let[t,n]=e.split(`:`).map(Number);return t*60+n},bt=e=>{let t=e.reduce((e,t)=>e+yt(t.duration),0),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`},St=new Date(`2026-05-29T23:30:00+02:00`).getTime(),Ct={id:`NCR_PREMIERE_INTRO`,type:`premiere`,title:`Neo City Radio Premiere`,artist:`Neo City Radio`,duration:`03:25`,cover:dr(`covers/Neo-City-Radio.png`),file:dr(`radio/NeoCityRadioPremiere.mp3`),radioOnly:!0},wt={id:`NCR_STANDBY`,type:`premiere-standby`,title:`Neo City Radio Premiere`,artist:`Sendestart um 00:00 Uhr`,duration:`29:58`,cover:dr(`covers/Neo-City-Radio.png`),file:dr(`radio/NeoCityRadioStandby.mp3`),radioOnly:!0},Tt={id:`INTERVIEW_EATW`,type:`interview`,title:`Interview: Erdbeere Around the World`,artist:`Erdbeerenfresser & Motte`,duration:`10:00`,cover:dr(`covers/Neo-City-Radio.png`),file:dr(`radio/MotteInterview.mp3`),radioOnly:!0},Et=()=>{let e=Xn.filter(e=>!e.hidden&&yt(e.duration)>0),t=[];return t.push(tr[0]),e.forEach((e,n)=>{e.album===`Erdbeere Around the World`&&(e.albumTrackNumber??e.trackNumber)===1&&t.push(Tt),t.push(e);let r=n+1;if(r%10==0){let e=r/10;t.push(or,...cr(e),sr)}if(r%5==0){let e=Math.floor(r/5)%rr.length;t.push(rr[e])}if(r%17==0){let e=Math.floor(r/17)%nr.length;t.push(nr[e])}if(r%29==0){let e=Math.floor(r/29)%ir.length;t.push(ir[e])}}),t.filter(e=>yt(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`${e.id}-${t}`}))},Dt=(()=>{if(!P||!n?.isRadioTrack)return null;let e=Et(),t=e.findIndex(e=>e.radioKey===n.radioKey);if(t===-1)return null;for(let n=1;n<=e.length;n++){let r=e[(t+n)%e.length];if(!r.radioOnly&&r.type!==`jingle`&&r.type!==`ad`&&r.type!==`interview`)return r}return null})(),Ot=St,kt=()=>{let e=Date.now();if(e<Ot){if(localStorage.getItem(`neoCityRadioBeta`)!==`true`)return null;let t=Et(),n=t.reduce((e,t)=>e+yt(t.duration),0);if(!t.length||n<=0)return null;let r=(n-Math.floor((Ot-e)/1e3)%n)%n;for(let e of t){let t=yt(e.duration);if(r<t)return{track:e,offset:r};r-=t}return{track:t[0],offset:0}}let t=Et(),n=t.reduce((e,t)=>e+yt(t.duration),0);if(!t.length||n<=0)return null;let r=[{...wt,radioIndex:`premiere-standby`,radioKey:`premiere-standby`},{...Ct,radioIndex:`premiere-intro`,radioKey:`premiere-intro`}],i=r.reduce((e,t)=>e+yt(t.duration),0),a=Math.floor((e-Ot)/1e3);if(a<0)return{track:t[0],offset:0};if(a<i){let e=a;for(let t of r){let n=yt(t.duration);if(e<n)return{track:t,offset:e};e-=n}}let o=(a-i)%n;for(let e of t){let t=yt(e.duration);if(o<t)return{track:e,offset:o};o-=t}return{track:t[0],offset:0}},At=()=>{let e=kt();e&&(ft.current=e.offset,we(!0),a([]),s([]),d(null),We(null),r({...e.track,isRadioTrack:!0}))};(0,y.useEffect)(()=>{let e=()=>{let e=St-Date.now();if(e<=0){Oe(`Neo City Radio ist live.`);return}let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;Oe(`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`)};e();let t=window.setInterval(e,1e3);return()=>window.clearInterval(t)},[]),(0,y.useEffect)(()=>{if(!P||!n?.isRadioTrack||ft.current===null||!ut.current||!n.file)return;let e=ft.current;ft.current=null;let t=ut.current;t.pause(),t.currentTime=0,t.load();let r=()=>{t.currentTime=e,t.play().catch(()=>{})};return t.addEventListener(`canplay`,r,{once:!0}),()=>{t.removeEventListener(`canplay`,r)}},[n,P]);let jt=(e,t={})=>{if(!e)return;we(!1);let{fromHistory:i=!1,resetHistory:a=!1}=t;a?s([]):!i&&n&&s(e=>[...e,n]),r(e),l(null)},Mt=e=>{let t=mt.find(t=>String(t.id)===String(e));return t?`${t.id}. ${t.title} – ${t.artist}`:``},Nt=`Art der Anfrage: Cover
Ausgewählter Song: ${Mt(be)}
Gewünschter Stil / Prompt: ${Se}`,Pt=`Art der Anfrage: Mashup
Song 1: ${Mt(ke)}
Song 2: ${Mt(je)}`,Ft=e=>{a([]),jt(e,{resetHistory:!0})},It=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));d(e),t(`albums`),a(r),jt(n,{resetHistory:!0})},Lt=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).sort(()=>Math.random()-.5);d(e),t(`albums`),a(r),jt(n,{resetHistory:!0})},Rt=()=>{if(!z.length)return;let[e,...t]=z;a(t),jt(e,{resetHistory:!0})},zt=()=>{if(!z.length)return;let[e,...t]=[...z].sort(()=>Math.random()-.5);a(t),jt(e,{resetHistory:!0})},Bt=()=>{a([])},Vt=e=>{a(t=>[...t,e]),l(null)},Ht=e=>{Je(e),Ke(!0),l(null)},Ut=e=>{_e(e),ye(1),he(!0)},Wt=()=>{he(!1),_e(null),ye(1),xe(``),Ce(``),Ae(``),Me(``)},Gt=()=>{Ke(!1),Je(null),Xe(``)},Kt=()=>{if(!ht.length){F(`❌ Keine versteckten Jascha-Songs gefunden`);return}let e=Ve.find(e=>e.id===`hidden-jascha-playlist`);if(e){We(e),t(`playlists`),Fe(!1),Le(``),F(``);return}let n={id:`hidden-jascha-playlist`,name:`Jascha`,songIds:ht.map(e=>e.id),createdAt:new Date().toISOString()};He(e=>[...e,n]),We(n),t(`playlists`),Fe(!1),Le(``),F(``)},qt=()=>{let e=Ie.trim().toLowerCase();if(Ie.trim()===`BerryDeadly`){ct(!0),Fe(!1),Le(``),F(``);return}if(Ie.trim()===`NCR`){localStorage.setItem(`neoCityRadioBeta`,`true`),Fe(!1),Le(``),F(``);return}if(e===`our place`){Ft(pr),Fe(!1),Le(``),F(``),Be(!0);return}if(e===`jascha`){Kt();return}F(`❌ Falsches Passwort`)},Jt=()=>{Be(!1),Je(pr),Ke(!0)},Yt=()=>{let e=Ye.trim();if(!e)return;let t={id:`playlist-${Date.now()}`,name:e,songIds:qe?[qe.id]:[],createdAt:new Date().toISOString()};He(e=>[...e,t]),Gt()},Xt=(e,t)=>{He(n=>n.map(n=>n.id===e?{...n,songIds:[...n.songIds,t]}:n)),Gt()},Zt=(e,t)=>{He(n=>{let r=n.map(n=>{if(n.id!==e)return n;let r=n.songIds.findIndex(e=>e===t);return r===-1?n:{...n,songIds:n.songIds.filter((e,t)=>t!==r)}}),i=r.find(t=>t.id===e);return i&&We(i),r})},Qt=e=>{He(t=>t.filter(t=>t.id!==e)),Ue?.id===e&&We(null)},$t=e=>{let t=JSON.stringify({version:`1.0`,name:e.name,songIds:e.songIds},null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`${e.name.replace(/[^\w\s-]/g,``).replace(/\s+/g,`_`)}.playlist.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},en=async e=>{let t=e.target.files?.[0];if(t){try{let e=await t.text(),n=JSON.parse(e);if(!n?.name||!Array.isArray(n?.songIds))throw Error(`Ungültige Playlist-Datei`);let r=n.songIds.filter(e=>pt.some(t=>t.id===e)),i={id:`playlist-${Date.now()}`,name:n.name,songIds:r,createdAt:new Date().toISOString()};He(e=>[...e,i])}catch(e){console.log(`Playlist-Import fehlgeschlagen:`,e),alert(`Die Playlist-Datei konnte nicht importiert werden.`)}e.target.value=``}},tn=e=>{let t=e.songIds.map(e=>pt.find(t=>t.id===e)).filter(Boolean);if(!t.length)return;let[n,...r]=t;a(r),jt(n,{resetHistory:!0})},nn=e=>{let t=e.songIds.map(e=>pt.find(t=>t.id===e)).filter(Boolean);if(!t.length)return;let[n,...r]=[...t].sort(()=>Math.random()-.5);a(r),jt(n,{resetHistory:!0})},rn=e=>e.map(e=>pt.find(t=>t.id===e)).filter(Boolean),an=e=>{a(t=>t.filter((t,n)=>n!==e))},on=Ee(Te(xt,{activationConstraint:{distance:8}})),sn=e=>{let{active:t,over:n}=e;!n||t.id===n.id||a(e=>{let r=e.findIndex((e,n)=>`${e.id}-${n}`===t.id),i=e.findIndex((e,t)=>`${e.id}-${t}`===n.id);return r===-1||i===-1?e:On(e,r,i)})},cn=()=>{if(n){if(P){let e=kt();if(e&&(e.track.radioKey===`premiere-standby`||e.track.radioKey===`premiere-intro`)){ft.current=e.offset,r({...e.track,isRadioTrack:!0});return}let t=Et(),i=null;if(n.radioKey===`premiere-standby`)i={...Ct,radioIndex:`premiere-intro`,radioKey:`premiere-intro`};else if(n.radioKey===`premiere-intro`)i=t[0];else{let e=t.findIndex(e=>e.radioKey===n.radioKey);i=e===-1||e===t.length-1?t[0]:t[e+1]}if(!i)return;ft.current=0,r({...i,isRadioTrack:!0});return}if(M===`one`){ut.current&&(ut.current.currentTime=0,ut.current.play().catch(()=>{}));return}un()}},ln=()=>Ue?rn(Ue.songIds):u?.tracks?.length?[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)):z,un=()=>{if(P){At();return}if(!n)return;if(i.length>0){let[e,...t]=i;a(t),jt(e);return}let e=ln(),t=e.findIndex(e=>e.id===n.id);if(t===-1)return;let r=t+1;if(r<e.length){jt(e[r]);return}M===`all`&&e.length>0&&jt(e[0],{fromHistory:!0})},dn=()=>{if(P){At();return}if(ne>3&&ut.current){ut.current.currentTime=0,re(0),T(0);return}if(o.length===0){ut.current&&(ut.current.currentTime=0,re(0),T(0));return}let e=o[o.length-1];s(e=>e.slice(0,-1)),n&&a(e=>[n,...e]),jt(e,{fromHistory:!0})},fn=e=>{e&&(ae(e.title),t(`songs`),at(!1),st([]))},pn=e=>{if(e){if(e.type===`cover`){let t=Xn.find(t=>t.id===e.sourceSongId);if(!t)return;fn(t);return}if(e.type===`mashup`){let t=Xn.filter(t=>e.sourceSongIds?.includes(t.id));if(!t.length)return;st(t),at(!0),l(null)}}},mn=e=>{t(e),e!==`albums`&&d(null),e!==`playlists`&&We(null),p(!1)};(0,y.useEffect)(()=>{let e=()=>{lt(window.innerWidth<=768)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,y.useEffect)(()=>{let e=localStorage.getItem(`ai-song-library-playlists`);if(e)try{let t=JSON.parse(e);Array.isArray(t)&&He(t)}catch(e){console.log(`Playlists konnten nicht geladen werden:`,e)}},[]),(0,y.useEffect)(()=>{localStorage.setItem(`ai-song-library-playlists`,JSON.stringify(Ve))},[Ve]),(0,y.useEffect)(()=>{if(e===`home`){b(!1),S(!1),w(!1);let e=setTimeout(()=>{b(!0)},60),t=setTimeout(()=>{S(!0)},220),n=setTimeout(()=>{w(!0)},380);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}}else b(!1),S(!1),w(!1)},[e]),(0,y.useEffect)(()=>{ut.current&&(ut.current.volume=D)},[D]),(0,y.useEffect)(()=>{if(P)return;let e=ut.current;!e||!n||(async()=>{try{await e.play()}catch(e){console.log(`Autoplay/Play blockiert:`,e)}})()},[n,P]),(0,y.useEffect)(()=>{if(`mediaSession`in navigator)return n&&(navigator.mediaSession.metadata=new MediaMetadata({title:n.title,artist:n.artist,album:n.album||`Königliche AI Songs`,artwork:[{src:n.cover,sizes:`96x96`,type:`image/jpeg`},{src:n.cover,sizes:`128x128`,type:`image/jpeg`},{src:n.cover,sizes:`192x192`,type:`image/jpeg`},{src:n.cover,sizes:`256x256`,type:`image/jpeg`},{src:n.cover,sizes:`384x384`,type:`image/jpeg`},{src:n.cover,sizes:`512x512`,type:`image/jpeg`}]})),navigator.mediaSession.setActionHandler(`play`,()=>{let e=ut.current;e&&e.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{let e=ut.current;e&&e.pause()}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{un()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{dn()}),()=>{try{navigator.mediaSession.setActionHandler(`play`,null),navigator.mediaSession.setActionHandler(`pause`,null),navigator.mediaSession.setActionHandler(`nexttrack`,null),navigator.mediaSession.setActionHandler(`previoustrack`,null)}catch(e){console.log(e)}}},[n,i,o,ne]),(0,y.useEffect)(()=>{`mediaSession`in navigator&&(navigator.mediaSession.playbackState=m?`playing`:`paused`)},[m]),(0,y.useEffect)(()=>{if(Ze)return Sn(),()=>{dt.current&&clearTimeout(dt.current)}},[Ze]),(0,y.useEffect)(()=>{if(!Ze||!n)return;tt(!1);let e=setTimeout(()=>{tt(!0)},30);return()=>clearTimeout(e)},[n,Ze]),(0,y.useEffect)(()=>{!Ze||!le||!n||j(Qn[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,Ze,le]),(0,y.useEffect)(()=>{!k||!n||j(Qn[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,k]),(0,y.useEffect)(()=>{let e=ut.current;if(!e)return;e.volume=D;let t=()=>{let t=e.currentTime||0,n=e.duration||0;re(t),E(n),T(n>0?t/n*100:0)},n=()=>{E(e.duration||0),t()},r=()=>h(!0),i=()=>h(!1),a=()=>{cn()};return e.addEventListener(`timeupdate`,t),e.addEventListener(`loadedmetadata`,n),e.addEventListener(`play`,r),e.addEventListener(`pause`,i),e.addEventListener(`ended`,a),t(),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`loadedmetadata`,n),e.removeEventListener(`play`,r),e.removeEventListener(`pause`,i),e.removeEventListener(`ended`,a)}},[n,i,o,M,D]);let hn=e=>{if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,`0`)}`},gn=()=>{let e=ut.current;if(!(!e||!n)){if(P){e.paused?At():e.pause();return}e.paused?e.play().catch(()=>{}):e.pause()}},_n=e=>{if(P)return;let t=ut.current;if(!t||!te)return;let n=Number(e.target.value),r=n/100*te;t.currentTime=r,T(n),re(r)},vn=()=>{n&&(j(Qn[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`),Ze?A(!0):ce(!0))},bn=()=>{D===0?oe(se>0?se:1):(O(D),oe(0))},xn=()=>{de(e=>e===`off`?`all`:e===`all`?`one`:`off`)},Sn=()=>{dt.current&&clearTimeout(dt.current),$e(!0),dt.current=setTimeout(()=>{$e(!1)},5e3)},Cn=()=>{n&&(Qe(!0),$e(!0))},wn=()=>{Qe(!1),A(!1)},Tn=({id:e,song:t,index:n,removeFromQueue:r})=>{let{attributes:i,listeners:a,setNodeRef:o,transform:s,transition:c,isDragging:l}=qn({id:e});return(0,H.jsxs)(`div`,{ref:o,style:{transform:fe.Transform.toString(s),transition:c,background:l?`#1a2230`:`#141821`,borderRadius:`12px`,padding:`10px`,display:`grid`,gridTemplateColumns:`24px 1fr 32px`,gap:`10px`,alignItems:`center`,border:l?`1px solid #3a455a`:`1px solid transparent`},children:[(0,H.jsx)(`button`,{...i,...a,style:wr(l),children:`⋮⋮`}),(0,H.jsxs)(`div`,{style:{minWidth:0},children:[(0,H.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.title}),(0,H.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.artist})]}),(0,H.jsx)(`button`,{onClick:()=>r(n),style:Tr,children:`✕`})]})},En=({song:e,index:r,showAlbum:i=!0,playlistContext:a=null})=>(0,H.jsx)(`div`,{onClick:()=>Ft(e),onMouseEnter:()=>_(`song-row-${e.id}`),onMouseLeave:()=>_(null),style:R?{display:`grid`,gridTemplateColumns:`56px minmax(0, 1fr) 38px`,gap:`12px`,alignItems:`center`,padding:`12px`,borderRadius:`16px`,background:n?.id===e.id?`rgba(29,185,84,0.12)`:g===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`#141821`,border:n?.id===e.id?`1px solid rgba(29,185,84,0.35)`:g===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid #202636`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`}:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,alignItems:`center`,padding:`12px 16px`,borderRadius:`14px`,background:n?.id===e.id?L?`rgba(255,77,210,0.14)`:`rgba(29,185,84,0.12)`:g===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`transparent`,border:n?.id===e.id?L?`1px solid rgba(255,77,210,0.45)`:`1px solid rgba(29,185,84,0.35)`:g===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid transparent`,position:`relative`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`},children:R?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,H.jsxs)(`div`,{style:{minWidth:0},children:[(0,H.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`,marginBottom:`4px`},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,marginBottom:i&&e.album?`4px`:0},children:e.artist}),i&&e.album&&(0,H.jsx)(`div`,{onClick:n=>{n.stopPropagation();let r=vt.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},style:{color:`#b0b0b0`,fontSize:`12px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,textDecoration:`underline`},children:e.album})]}),(0,H.jsxs)(`div`,{style:{position:`relative`},children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,H.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,H.jsx)(`button`,{onClick:()=>Vt(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),pn(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),(0,H.jsx)(`button`,{onClick:()=>Ht(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Zur Playlist hinzufügen`}),a&&(0,H.jsx)(`button`,{onClick:()=>Zt(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Aus Playlist entfernen`}),(0,H.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{..._r,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:i?r+1:e.albumTrackNumber??e.trackNumber??r+1}),(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,H.jsxs)(`div`,{style:{minWidth:0},children:[(0,H.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`default`},children:e.artist})]}),(0,H.jsx)(`div`,{onClick:n=>{if(n.stopPropagation(),!e.album)return;let r=vt.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},onMouseEnter:()=>_(`song-album-${e.id}`),onMouseLeave:()=>_(null),style:{color:g===`song-album-${e.id}`?`#ffffff`:`#b0b0b0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:e.album?`pointer`:`default`,textDecoration:g===`song-album-${e.id}`&&e.album?`underline`:`none`,transition:`color 0.15s ease`},children:e.album||`—`}),(0,H.jsx)(`div`,{style:{color:`#9a9a9a`,fontSize:`14px`},children:e.duration}),(0,H.jsxs)(`div`,{style:{position:`relative`},children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,H.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,H.jsx)(`button`,{onClick:()=>Vt(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),pn(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),(0,H.jsx)(`button`,{onClick:()=>Ht(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Zur Playlist hinzufügen`}),a&&(0,H.jsx)(`button`,{onClick:()=>Zt(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:_r,children:`Aus Playlist entfernen`}),(0,H.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{..._r,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]})},e.id+`-`+r);return(0,H.jsxs)(`div`,{style:{minHeight:`100vh`,background:L?`radial-gradient(circle at top, #2a063d 0%, #07020f 45%, #020008 100%)`:`#0d0f16`,transition:`background 0.6s ease`,color:`white`,fontFamily:`Arial, sans-serif`,paddingBottom:R?`190px`:`130px`},children:[(0,H.jsx)(`header`,{style:{position:`sticky`,top:0,zIndex:30,background:L?`rgba(10,2,18,0.92)`:`rgba(13,15,22,0.88)`,borderBottom:L?`1px solid rgba(255,77,210,0.35)`:`1px solid #1f2430`,boxShadow:L?`0 0 24px rgba(255,77,210,0.18)`:`none`,backdropFilter:`blur(12px)`},children:(0,H.jsxs)(`div`,{style:{width:`100%`,padding:R?`14px 16px`:`18px 26px`,boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`},children:[(0,H.jsxs)(`div`,{onClick:()=>{t(`home`),d(null),p(!1)},style:{cursor:`pointer`},children:[(0,H.jsx)(`div`,{style:{fontSize:`15px`,color:L?`#d8b7ff`:`#8e96a3`,marginBottom:`4px`},children:L?`Neon City Lights — Erdbeere Time`:`Lokale Musikbibliothek`}),(0,H.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:800,color:L?`#ff4dd2`:`white`,textShadow:L?`0 0 18px rgba(255,77,210,0.75)`:`none`},children:L?`BerryDeadly Music`:`Königliche AI Songs`})]}),(0,H.jsx)(`button`,{onClick:()=>p(!0),style:{width:`52px`,height:`52px`,borderRadius:`16px`,background:L?`#1b0b2e`:`#171b24`,border:L?`1px solid rgba(255,77,210,0.45)`:`1px solid #2a3142`,boxShadow:L?`0 0 18px rgba(255,77,210,0.25)`:`none`,color:`white`,cursor:`pointer`,fontSize:`22px`,fontWeight:700},children:`☰`})]})}),f&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:()=>p(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.45)`,zIndex:39}}),(0,H.jsxs)(`aside`,{style:{position:`fixed`,top:0,right:0,width:`360px`,maxWidth:`92vw`,height:`100vh`,background:`#111318`,borderLeft:`1px solid #202636`,zIndex:40,padding:`24px`,paddingBottom:`220px`,overflowY:`auto`,boxShadow:`-18px 0 40px rgba(0,0,0,0.45)`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`24px`},children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`div`,{style:{fontSize:`14px`,color:`#8e96a3`,marginBottom:`4px`},children:`Menü`}),(0,H.jsx)(`div`,{style:{fontSize:`26px`,fontWeight:800},children:`Königliche AI Songs`})]}),(0,H.jsx)(`button`,{onClick:()=>p(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`30px`},children:[(0,H.jsx)(`button`,{onClick:()=>mn(`home`),style:vr(e===`home`,L),children:`Startseite`}),(0,H.jsx)(`button`,{onClick:()=>mn(`songs`),style:vr(e===`songs`,L),children:`Songs`}),(0,H.jsx)(`button`,{onClick:()=>mn(`albums`),style:vr(e===`albums`,L&&!u),children:`Alben`}),(0,H.jsx)(`button`,{onClick:()=>mn(`playlists`),style:vr(e===`playlists`,L&&!Ue),children:`Playlists`}),(0,H.jsx)(`button`,{onClick:()=>mn(`patchnotes`),style:vr(e===`patchnotes`,L),children:`Patchnotes`}),(0,H.jsx)(`button`,{style:vr(e===`extra`,L),onClick:()=>mn(`extra`),children:`Extra`}),(localStorage.getItem(`neoCityRadioBeta`)===`true`||Date.now()>=St)&&(0,H.jsx)(`button`,{onClick:()=>{At(),p(!1)},style:vr(P,L),children:`📡 Neo City Radio`}),(0,H.jsx)(`button`,{onClick:()=>{me(!0),p(!1)},style:vr(!1,L),children:`Song einreichen`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`10px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.08em`,fontWeight:700},children:`Warteschlange`}),(0,H.jsx)(`button`,{onClick:Bt,style:{background:`transparent`,border:`none`,color:`#c7ced9`,cursor:`pointer`,fontSize:`13px`},children:`Löschen`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gap:`8px`,paddingBottom:`50px`},children:i.length===0?(0,H.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:`Noch nichts vorgemerkt.`}):(0,H.jsx)(yn,{sensors:on,collisionDetection:Ne,onDragEnd:sn,children:(0,H.jsx)(zn,{items:i.map((e,t)=>`${e.id}-${t}`),strategy:Fn,children:(0,H.jsx)(`div`,{style:{display:`grid`,gap:`8px`},children:i.map((e,t)=>(0,H.jsx)(Tn,{id:`${e.id}-${t}`,song:e,index:t,removeFromQueue:an},`${e.id}-${t}`))})})})})]})]})]}),(0,H.jsxs)(`main`,{style:{width:`100%`,padding:R?`18px 16px`:`26px 40px`,boxSizing:`border-box`},children:[e===`home`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`section`,{style:{minHeight:R?`240px`:`220px`,borderRadius:`28px`,padding:R?`22px 18px`:`32px 48px`,backgroundImage:L?`linear-gradient(rgba(12,2,22,0.35), rgba(4,0,10,0.92)), url('${dr(`covers/BD.png`)}')`:`linear-gradient(rgba(8,10,17,0.60), rgba(8,10,17,0.88)), url('${dr(`covers/Koenigliche-AI-Songs.png`)}')`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundPosition:R?`center top`:`top center`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,alignItems:`center`,marginBottom:`28px`,textAlign:`center`,opacity:+!!v,transform:v?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,H.jsx)(`div`,{style:{color:`#d0d7e2`,fontSize:R?`12px`:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`},children:L?`Secret Neon Interface`:`Startmenü`}),(0,H.jsx)(`h1`,{style:{fontSize:R?`clamp(28px, 9vw, 40px)`:`44px`,margin:0,marginBottom:`10px`,maxWidth:R?`100%`:`900px`,textAlign:`center`,width:`100%`,lineHeight:R?1.02:1,textShadow:`0 6px 22px rgba(0,0,0,0.45)`},children:L?`BerryDeadly Music`:`Königliche AI Songs`}),(0,H.jsx)(`p`,{style:{maxWidth:R?`100%`:`840px`,color:`#e3e6eb`,fontSize:R?`15px`:`16px`,lineHeight:1.35,margin:`0 auto`,textAlign:`center`,textShadow:`0 4px 18px rgba(0,0,0,0.35)`},children:L?`Neon City Lights — Erdbeere Time. Eine geheime Cyberpunk-K-Pop-Bibliothek aus Neo City.`:`Deine AI-Musikbibliothek, zertifiziert von dem MM.`})]}),(0,H.jsx)(`div`,{style:{width:`100%`,marginBottom:`26px`,padding:R?`18px 16px`:`20px 26px`,borderRadius:`22px`,background:`linear-gradient(135deg, #1a1f2b, #0f131c)`,border:`1px solid #2a3142`,boxShadow:`0 10px 30px rgba(0,0,0,0.25)`,textAlign:`center`,position:`relative`,overflow:`hidden`,color:`white`,boxSizing:`border-box`},children:P?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{style:{fontSize:R?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`},children:`📻 DU HÖRST NEO CITY RADIO`}),(0,H.jsxs)(`div`,{style:{fontSize:R?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[`Jetzt läuft:`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`strong`,{style:{color:L?`#ff4dd2`:`#1db954`,fontSize:`22px`},children:n?.title}),Dt&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`br`,{}),(0,H.jsx)(`br`,{}),`Als nächstes:`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`strong`,{style:{color:`#c7ced9`,fontSize:`18px`},children:Dt.title})]})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{style:{fontSize:R?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`},children:`✨ Jetzt neu:`}),(0,H.jsxs)(`div`,{style:{fontSize:R?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[`Königliche AI Songs Nonstop`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`strong`,{style:{color:L?`#ff4dd2`:`#1db954`,fontSize:`22px`},children:`📻 Jetzt auf Neo City Radio`}),(0,H.jsx)(`br`,{}),`🌃 Live aus der Stadt der Lichter`]})]})}),(0,H.jsxs)(`section`,{style:{opacity:+!!x,transform:x?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,H.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,H.jsx)(`button`,{onClick:()=>t(`songs`),style:gr(L),children:`Alle Songs ansehen`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:R?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(190px, 1fr))`,gap:`16px`},children:_t.map(e=>(0,H.jsxs)(`button`,{onClick:()=>Ft(e),onMouseEnter:()=>_(`release-${e.id}`),onMouseLeave:()=>_(null),style:{textAlign:`left`,background:g===`release-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:g===`release-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`release-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,H.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:e.artist})]},e.id))})]}),(0,H.jsxs)(`section`,{style:{marginTop:`32px`,opacity:+!!C,transform:C?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,H.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,H.jsx)(`button`,{onClick:()=>t(`albums`),style:gr(L),children:`Alle Alben ansehen`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:R?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`18px`},children:vt.slice(0,4).map(e=>(0,H.jsxs)(`button`,{onClick:()=>{d(e),t(`albums`)},onMouseEnter:()=>_(`home-album-${e.id}`),onMouseLeave:()=>_(null),style:{textAlign:`left`,background:g===`home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:g===`home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,H.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:e.artist})]},e.id))}),(0,H.jsxs)(`div`,{onDoubleClick:()=>{Fe(!0),Le(``),F(``)},style:{margin:`32px 16px`,padding:`20px`,borderRadius:`16px`,cursor:`pointer`,border:`1px solid var(--border)`,background:`linear-gradient(135deg, var(--accent-bg), rgba(170, 59, 255, 0.05))`,textAlign:`center`},children:[(0,H.jsx)(`p`,{style:{fontSize:`12px`,opacity:.6,marginBottom:`6px`},children:`Anzeige`}),(0,H.jsx)(`h3`,{style:{marginBottom:`8px`,color:`var(--text-h)`},children:`🎢 EuroParksMC`}),(0,H.jsxs)(`h1`,{style:{fontSize:`clamp(42px, 9vw, 110px)`,fontWeight:900,lineHeight:.95,letterSpacing:`clamp(-2px, -0.5vw, -5px)`},children:[`Der`,` `,(0,H.jsx)(`span`,{style:{background:`linear-gradient(135deg, rgb(73, 115, 255), rgb(123, 159, 255), rgb(73, 115, 255))`,backgroundSize:`300% 100%`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,animation:`gs 4s ease infinite`},children:`Europapark`}),(0,H.jsx)(`br`,{}),`in Minecraft`]}),(0,H.jsx)(`div`,{style:{opacity:1,transform:`none`,transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s`},children:(0,H.jsx)(`p`,{style:{fontSize:`clamp(16px, 2vw, 20px)`,color:`rgb(119, 119, 119)`,marginTop:`28px`,lineHeight:1.7,maxWidth:`620px`,marginInline:`auto`},children:`20 Attraktionen, 5 Themenbereiche, eine aktive Community.`})}),(0,H.jsx)(`a`,{href:`https://europarksmc.eu/#zeitstrahl`,onClick:e=>e.stopPropagation(),target:`_blank`,rel:`noopener noreferrer`,style:{display:`inline-block`,padding:`8px 16px`,marginTop:`20px`,borderRadius:`999px`,background:`var(--accent)`,color:`white`,textDecoration:`none`,fontSize:`14px`,transition:`transform 0.2s ease`},onMouseEnter:e=>e.target.style.transform=`translateY(-2px)`,onMouseLeave:e=>e.target.style.transform=`translateY(0px)`,children:`Jetzt erkunden`})]})]})]}),e===`songs`&&(0,H.jsxs)(`section`,{children:[(0,H.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,H.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:mr(e,u,Ue)}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`14px`},children:[(0,H.jsx)(`button`,{onClick:Rt,style:hr(L),children:`Play`}),(0,H.jsx)(`button`,{onClick:zt,style:gr(L),children:`Shuffle`})]}),(0,H.jsx)(`input`,{type:`text`,value:ie,onChange:e=>ae(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:R?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!R&&(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,H.jsx)(`div`,{children:`#`}),(0,H.jsx)(`div`,{}),(0,H.jsx)(`div`,{children:`Titel`}),(0,H.jsx)(`div`,{children:`Album`}),(0,H.jsx)(`div`,{children:`Dauer`}),(0,H.jsx)(`div`,{}),(0,H.jsx)(`div`,{})]}),gt.map((e,t)=>(0,H.jsx)(En,{song:e,index:t,showAlbum:!0},e.id)),(0,H.jsx)(`div`,{style:{height:c?`260px`:`40px`}}),gt.length===0&&(0,H.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Keine Songs gefunden.`})]})]}),e===`playlists`&&!Ue&&(0,H.jsxs)(`section`,{children:[(0,H.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,H.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Playlists`}),(0,H.jsx)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:(0,H.jsxs)(`label`,{style:{...gr(L),display:`inline-flex`,alignItems:`center`},children:[`Importieren`,(0,H.jsx)(`input`,{type:`file`,accept:`.json`,onChange:en,style:{display:`none`}})]})})]}),Ve.length===0?(0,H.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Noch keine Playlists erstellt.`}):(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:R?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`16px`},children:Ve.map(e=>{let n=rn(e.songIds);return(0,H.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`18px`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`div`,{style:{fontSize:`22px`,fontWeight:800,marginBottom:`8px`},children:e.name}),(0,H.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[e.songIds.length,` `,e.songIds.length===1?`Song`:`Songs`]})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:()=>{We(e),t(`playlists`)},style:gr(L),children:`Öffnen`}),(0,H.jsx)(`button`,{onClick:()=>tn(e),style:hr(L),children:`Play`}),(0,H.jsx)(`button`,{onClick:()=>$t(e),style:gr(L),children:`Export`}),(0,H.jsx)(`button`,{onClick:()=>Qt(e.id),style:gr(L),children:`Löschen`})]})]}),n.length>0&&(0,H.jsx)(`div`,{style:{marginTop:`16px`},children:(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`8px`},children:n.slice(0,4).map((t,r)=>{let i=n.length-3;return n.length>4&&r===3?(0,H.jsxs)(`div`,{style:{aspectRatio:`1 / 1`,borderRadius:`14px`,background:`#10141d`,border:`1px solid #202636`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:`20px`,color:`#d7dce4`},children:[`+`,i]},`more-${e.id}`):n.length>4&&r>3?null:(0,H.jsx)(`img`,{src:t.cover,alt:t.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,display:`block`}},`${t.id}-${r}`)})})})]},e.id)})})]}),e===`playlists`&&Ue&&(0,H.jsxs)(`section`,{children:[(0,H.jsx)(`button`,{onClick:()=>We(null),style:{...gr(L),marginBottom:`16px`},children:`← Zurück zu Playlists`}),(0,H.jsx)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:R?`16px`:`18px`,marginBottom:`18px`},children:(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h1`,{style:{margin:0,marginBottom:`8px`},children:Ue.name}),(0,H.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[Ue.songIds.length,` `,Ue.songIds.length===1?`Song`:`Songs`]})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:()=>tn(Ue),style:hr(L),children:`Play`}),(0,H.jsx)(`button`,{onClick:()=>nn(Ue),style:gr(L),children:`Shuffle`}),(0,H.jsx)(`button`,{onClick:()=>$t(Ue),style:gr(L),children:`Export`})]})]})}),(0,H.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[rn(Ue.songIds).map((e,t)=>(0,H.jsx)(En,{song:e,index:t,showAlbum:!0,playlistContext:Ue},`${e.id}-${t}`)),(0,H.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`patchnotes`&&(0,H.jsxs)(`section`,{children:[(0,H.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Info`}),(0,H.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Patchnotes`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gap:`18px`},children:Zn.map((e,t)=>(0,H.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,color:`#d7dce4`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`12px`,marginBottom:`14px`,flexWrap:`wrap`},children:[(0,H.jsxs)(`div`,{style:{fontWeight:800,fontSize:`22px`},children:[`Version `,e.version]}),(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:e.label||(t===0?`Aktueller Patch`:`Früherer Patch`)})]}),(0,H.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,lineHeight:1.9},children:e.changes.map((e,t)=>(0,H.jsx)(`li`,{children:e},t))})]},e.version))})]}),e===`extra`&&(0,H.jsxs)(`div`,{style:{padding:R?`32px 20px`:`56px 32px 32px`,color:`white`,maxWidth:`980px`,margin:`0 auto`},children:[(0,H.jsx)(`h1`,{style:{marginBottom:`28px`},children:`Extra`}),(0,H.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`28px`,position:`relative`},children:(0,H.jsxs)(`div`,{onMouseEnter:()=>rt(!0),onMouseLeave:()=>rt(!1),onClick:()=>rt(e=>!e),style:{position:`relative`,display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`8px 14px`,color:`#d7dce4`,fontSize:`14px`,cursor:`help`},children:[(0,H.jsx)(`span`,{children:`ℹ️`}),(0,H.jsx)(`span`,{children:`Wie kommen Titel in den Extra-Bereich?`}),(0,H.jsxs)(`div`,{style:{position:`absolute`,top:`calc(100% + 12px)`,left:`50%`,transform:`translateX(-50%)`,width:R?`280px`:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`18px`,padding:`18px`,color:`#d7dce4`,lineHeight:1.6,textAlign:`left`,boxShadow:`0 20px 45px rgba(0,0,0,0.45)`,zIndex:20,opacity:+!!nt,pointerEvents:nt?`auto`:`none`,transition:`opacity 0.2s ease, transform 0.2s ease`},className:`extraInfoTooltip`,children:[(0,H.jsx)(`strong`,{style:{color:`white`},children:`Hinweis zu Extra-Titeln`}),(0,H.jsx)(`br`,{}),`Einmal im Monat setzt sich der MM zusammen und wählt aus den eingereichten Cover- und Mashup-Anfragen aus.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`br`,{}),`Pro Person können monatlich bis zu `,(0,H.jsx)(`strong`,{children:`zwei Cover`}),` und`,` `,(0,H.jsx)(`strong`,{children:`zwei Mashups`}),` berücksichtigt werden. Insgesamt entstehen daraus bis zu vier Cover und vier Mashups.`,(0,H.jsx)(`br`,{}),(0,H.jsx)(`br`,{}),`Aus diesen Titeln wird anschließend fair ausgelost, welcher Titel am Ende des Monats im Extra-Bereich erscheint.`]})]})}),$n.length===0?(0,H.jsxs)(`div`,{style:{background:`#171b24`,border:`1px dashed #3a4257`,borderRadius:`20px`,padding:`36px 24px`,textAlign:`center`,color:`#9ca3af`},children:[(0,H.jsx)(`div`,{style:{fontSize:`34px`,marginBottom:`10px`},children:`🎵`}),(0,H.jsx)(`strong`,{style:{color:`#d7dce4`,fontSize:`18px`},children:`Noch keine Titel vorhanden.`}),(0,H.jsx)(`p`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Ausgewählte Cover und Mashups erscheinen später hier.`})]}):(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[$n.map((e,t)=>(0,H.jsx)(En,{song:{...e,trackNumber:t+1,album:e.type===`mashup`?`M ${e.month||`Unbekannt`}`:`C ${e.month||`Unbekannt`}`},index:t,showAlbum:!0},e.id)),(0,H.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`albums`&&!u&&(0,H.jsxs)(`section`,{children:[(0,H.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,H.jsx)(`h1`,{style:{margin:0},children:`Alben`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:R?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:vt.map(e=>(0,H.jsxs)(`div`,{onMouseEnter:()=>_(`albums-page-${e.id}`),onMouseLeave:()=>_(null),style:{background:g===`albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:g===`albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:g===`albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,H.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:e.artist}),(0,H.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:()=>It(e),style:hr(L),children:`Play`}),(0,H.jsx)(`button`,{onClick:()=>{d(e),t(`albums`)},style:gr(L),children:`Öffnen`})]})]},e.id))})]}),e===`albums`&&u&&(0,H.jsxs)(`section`,{children:[(0,H.jsx)(`button`,{onClick:()=>d(null),style:{...gr(L),marginBottom:`16px`},children:`← Zurück zu Alben`}),(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:R?`1fr`:`minmax(220px, 280px) minmax(0, 1fr)`,gap:R?`18px`:`24px`,alignItems:R?`start`:`end`,background:`linear-gradient(180deg, #1b2130 0%, #10141d 100%)`,borderRadius:`26px`,padding:R?`18px`:`22px`,marginBottom:`22px`},children:[(0,H.jsx)(`img`,{src:u.cover,alt:u.title,style:{width:`100%`,maxWidth:R?`280px`:`100%`,justifySelf:R?`center`:`stretch`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`20px`,margin:R?`0 auto`:0}}),(0,H.jsxs)(`div`,{style:{minWidth:0,textAlign:R?`center`:`left`},children:[(0,H.jsx)(`div`,{style:{color:`#c2cad6`,fontSize:`14px`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`10px`},children:u.releaseType}),(0,H.jsx)(`h1`,{style:{fontSize:R?`clamp(28px, 10vw, 40px)`:`clamp(34px, 4vw, 56px)`,margin:0,marginBottom:`10px`,lineHeight:.95,maxWidth:R?`100%`:`780px`,wordBreak:`break-word`},children:u.title}),(0,H.jsx)(`div`,{style:{color:`#d7dce4`,marginBottom:`8px`},children:u.artist}),(0,H.jsxs)(`div`,{style:{color:`#9aa2ad`,marginBottom:`18px`},children:[u.tracks.length,` `,u.tracks.length===1?`Track`:`Tracks`,` • `,bt(u.tracks)]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,justifyContent:R?`center`:`flex-start`},children:[(0,H.jsx)(`button`,{onClick:()=>It(u),style:hr(L),children:`Play`}),(0,H.jsx)(`button`,{onClick:()=>Lt(u),style:gr(L),children:`Shuffle`})]})]})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!R&&(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,H.jsx)(`div`,{children:`#`}),(0,H.jsx)(`div`,{}),(0,H.jsx)(`div`,{children:`Titel`}),(0,H.jsx)(`div`,{children:`Album`}),(0,H.jsx)(`div`,{children:`Dauer`}),(0,H.jsx)(`div`,{}),(0,H.jsx)(`div`,{})]}),[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).map((e,t)=>(0,H.jsx)(En,{song:e,index:t,showAlbum:!1},e.id)),(0,H.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]})]}),(0,H.jsxs)(`div`,{style:{position:`fixed`,left:R?`10px`:0,right:R?`10px`:0,bottom:R?`10px`:0,background:`#0f1117`,border:R?`1px solid #202636`:`none`,borderTop:`1px solid #202636`,borderRadius:R?`22px`:0,display:`grid`,gridTemplateColumns:R?`1fr`:`minmax(220px, 320px) minmax(320px, 1fr) minmax(260px, 360px)`,alignItems:`center`,gap:R?`12px`:`18px`,padding:R?`12px 14px 14px`:`14px 18px`,boxShadow:R?`0 16px 40px rgba(0,0,0,0.35)`:`none`,zIndex:50},children:[(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:R?`10px`:`12px`,minWidth:0,marginBottom:R?`2px`:0},children:n?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`img`,{src:n.cover,alt:n.title,onClick:Cn,style:{width:R?`54px`:`58px`,height:R?`54px`:`58px`,objectFit:`cover`,borderRadius:R?`14px`:`12px`,cursor:`pointer`,flexShrink:0}}),(0,H.jsxs)(`div`,{style:{minWidth:0},children:[(0,H.jsx)(`button`,{onClick:Cn,style:{background:`transparent`,border:`none`,padding:0,margin:0,color:`white`,fontWeight:700,fontSize:`16px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`,textAlign:`left`,width:`100%`},children:n.title}),(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,textAlign:`left`},children:n.artist})]})]}):(0,H.jsx)(`div`,{style:{color:`#8f8f8f`},children:`Wähle einen Song aus.`})}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:R?`8px`:`10px`,minWidth:0},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:R?`8px`:`12px`,justifyContent:`center`,width:`100%`},children:[(0,H.jsx)(`button`,{onClick:dn,style:br,children:`⏮`}),(0,H.jsx)(`button`,{onClick:gn,style:xr,children:m?`❚❚`:`▶`}),(0,H.jsx)(`button`,{onClick:un,style:br,children:`⏭`}),(0,H.jsx)(`button`,{onClick:xn,style:{...br,color:M===`off`?`#9aa2ad`:L?`#ff4dd2`:`#1db954`,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:M===`one`?`R1`:`R`})]}),(0,H.jsxs)(`div`,{style:{width:`100%`,maxWidth:`680px`,display:`grid`,gridTemplateColumns:R?`46px minmax(0, 1fr) 46px auto`:`52px minmax(0, 1fr) 52px auto`,gap:R?`8px`:`12px`,alignItems:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`#0f1117`,padding:`0 4px`,justifySelf:`end`},children:hn(ne)}),(0,H.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,H.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ee,disabled:P,onChange:_n,style:{...Sr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
  90deg,
  ${L?`#ff4dd2`:`#ffffff`} 0%,
  ${L?`#ff4dd2`:`#ffffff`} ${ee}%,
  ${L?`rgba(184,77,255,0.25)`:`#2b2f3a`} ${ee}%,
  ${L?`rgba(184,77,255,0.25)`:`#2b2f3a`} 100%
)`}})}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:R?`6px`:`10px`,justifyContent:`flex-end`,position:`relative`,zIndex:3,background:`#0f1117`,paddingLeft:`6px`},children:[(0,H.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,padding:`0 4px`,background:`#0f1117`},children:hn(te)}),(0,H.jsx)(`button`,{onClick:vn,style:{background:`#0f1117`,border:`1px solid #2a3142`,color:`white`,borderRadius:`10px`,padding:R?`4px 7px`:`4px 8px`,cursor:n?`pointer`:`default`,fontSize:R?`11px`:`12px`,opacity:n?1:.5},children:`Text`})]})]}),(0,H.jsx)(`audio`,{ref:ut,autoPlay:!P,playsInline:!0,preload:`auto`,src:n?.file||void 0,style:{display:`none`}})]}),!R&&(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`140px minmax(0, 1fr)`,alignItems:`center`,gap:`16px`,minWidth:0},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,justifyContent:`flex-start`,minWidth:0},children:[(0,H.jsx)(`button`,{onClick:bn,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:D===0?`🔇`:`🔊`}),(0,H.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:D,onChange:e=>{let t=Number(e.target.value);oe(t),t>0&&O(t)},style:{...Cr,background:`linear-gradient(
      90deg,
          ${L?`#ff4dd2`:`#1db954`} ${D*100}%,
    ${L?`rgba(184,77,255,0.25)`:`#2b2f3a`} ${D*100}%
    )`}})]}),(0,H.jsx)(`div`,{style:{textAlign:`right`,color:`#9aa2ad`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0},children:i.length>0?`Als Nächstes: ${i[0].title}`:`Keine Songs in der Warteschlange`})]})]}),Ze&&n&&(0,H.jsxs)(`div`,{onMouseMove:Sn,onMouseEnter:Sn,onMouseLeave:()=>$e(!1),style:{position:`fixed`,inset:0,background:`#05070c`,zIndex:90,overflow:`hidden`},children:[(0,H.jsx)(`div`,{style:{position:`absolute`,inset:`-40px`,backgroundImage:`url('${n.cover}')`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,filter:`blur(34px)`,transform:et?`translateX(0) scale(1.08)`:`translateX(6%) scale(1.12)`,opacity:et?.95:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}}),(0,H.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.78) 100%)`}}),(0,H.jsx)(`button`,{onClick:wn,style:{position:`absolute`,top:`24px`,right:`24px`,width:`52px`,height:`52px`,borderRadius:`16px`,border:`1px solid rgba(255,255,255,0.15)`,background:`rgba(10,12,18,0.55)`,color:`white`,cursor:`pointer`,fontSize:`22px`,zIndex:4,opacity:+!!I,transform:I?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.25s ease, transform 0.25s ease`,backdropFilter:`blur(10px)`},children:`✕`}),le&&(0,H.jsxs)(`div`,{style:{position:`absolute`,left:R?`16px`:`max(32px, 4vw)`,right:R?`16px`:`auto`,top:R?`auto`:`50%`,bottom:R?`120px`:`auto`,transform:R?`none`:`translateY(-50%)`,width:R?`auto`:`min(360px, 28vw)`,maxHeight:R?`38vh`:`62vh`,overflowY:`auto`,background:`rgba(8,10,16,0.68)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`22px`,zIndex:3,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`16px`,marginBottom:`16px`},children:[(0,H.jsxs)(`div`,{style:{width:`100%`,textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,H.jsx)(`div`,{style:{fontSize:`20px`,fontWeight:800},children:n.title})]}),(0,H.jsx)(`button`,{onClick:()=>A(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid rgba(255,255,255,0.12)`,background:`rgba(23,27,36,0.8)`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:ue})]}),(0,H.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:R?`1fr`:le?`minmax(320px, 1fr) minmax(420px, 540px) minmax(280px, 1fr)`:`1fr minmax(420px, 540px) minmax(320px, 1fr)`,alignItems:`center`,zIndex:2,padding:R?`24px 16px 140px`:`40px`,gap:R?`20px`:`40px`},children:[(0,H.jsx)(`div`,{}),(0,H.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,H.jsx)(`img`,{src:n.cover,alt:n.title,style:{width:R?`min(78vw, 360px)`:`min(52vw, 540px)`,maxHeight:R?`42vh`:`62vh`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`28px`,boxShadow:`0 30px 80px rgba(0,0,0,0.45)`,transform:et?`translateX(0)`:`translateX(30px)`,opacity:et?1:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}})}),(0,H.jsxs)(`div`,{style:{alignSelf:`center`,justifySelf:R?`center`:`start`,maxWidth:`520px`,textAlign:R?`center`:`left`,opacity:+!!I,transform:I?`translateY(0)`:`translateY(14px)`,transition:`opacity 0.25s ease, transform 0.25s ease`},children:[(0,H.jsx)(`div`,{style:{color:`rgba(255,255,255,0.72)`,fontSize:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`,textShadow:`0 0 24px rgba(0,0,0,0.45)`},children:`Now Playing`}),(0,H.jsx)(`div`,{style:{fontSize:`clamp(30px, 4vw, 58px)`,fontWeight:900,lineHeight:1,color:`white`,textShadow:`0 0 18px rgba(29,185,84,0.38), 0 0 42px rgba(0,0,0,0.45)`,marginBottom:`10px`},children:n.title}),(0,H.jsx)(`div`,{style:{fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`,textShadow:`0 0 18px rgba(0,0,0,0.45)`},children:n.artist})]})]}),(0,H.jsx)(`div`,{style:{position:`absolute`,left:`50%`,bottom:`34px`,transform:`translateX(-50%)`,width:R?`calc(100vw - 20px)`:`min(900px, 88vw)`,zIndex:4,opacity:+!!I,transition:`opacity 0.25s ease, transform 0.25s ease`},children:(0,H.jsxs)(`div`,{style:{background:`rgba(8,10,16,0.55)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`18px 22px`,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr auto auto`,alignItems:`center`,marginBottom:`14px`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`16px`},children:[(0,H.jsx)(`button`,{onClick:dn,style:br,children:`⏮`}),(0,H.jsx)(`button`,{onClick:gn,style:xr,children:m?`❚❚`:`▶`}),(0,H.jsx)(`button`,{onClick:un,style:br,children:`⏭`})]}),(0,H.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,H.jsx)(`button`,{onClick:xn,style:{...br,color:M===`off`?`#9aa2ad`:L?`#ff4dd2`:`#1db954`,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:M===`one`?`R1`:`R`})}),(0,H.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginLeft:`10px`},children:(0,H.jsx)(`button`,{onClick:vn,style:{background:le?L?`rgba(255,77,210,0.18)`:`rgba(29,185,84,0.18)`:`transparent`,border:le?L?`1px solid rgba(255,77,210,0.45)`:`1px solid rgba(29,185,84,0.45)`:`1px solid rgba(255,255,255,0.12)`,color:`white`,borderRadius:`12px`,padding:`6px 10px`,cursor:n?`pointer`:`default`,fontSize:`12px`,opacity:n?1:.5},children:`Text`})})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`64px minmax(0, 1fr) 190px`,gap:`16px`,alignItems:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,padding:`0 4px`,justifySelf:`end`},children:hn(ne)}),(0,H.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,H.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ee,disabled:P,onChange:_n,style:{...Sr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff ${ee}%,
        rgba(255,255,255,0.18) ${ee}%,
        rgba(255,255,255,0.18) 100%
      )`}})}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`10px`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,paddingLeft:`6px`},children:[(0,H.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,padding:`0 4px`,background:`rgba(8,10,16,0.55)`},children:hn(te)}),(0,H.jsx)(`button`,{onClick:bn,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:D===0?`🔇`:`🔊`}),(0,H.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:D,onChange:e=>{let t=Number(e.target.value);oe(t),t>0&&O(t)},style:{...Cr,width:`110px`,background:`linear-gradient(
                  90deg,
                     ${L?`#ff4dd2`:`#1db954`} ${D*100}%,
    ${L?`rgba(184,77,255,0.25)`:`#2b2f3a`} ${D*100}%
                )`}})]})]})]})})]}),k&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:()=>ce(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:70}}),(0,H.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(700px, 90vw)`,maxHeight:`70vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:71,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,H.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,H.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,H.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:n?.title||`Unbekannter Song`})]}),(0,H.jsx)(`button`,{onClick:()=>ce(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:ue})]})]}),Ge&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:Gt,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:74}}),(0,H.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:75,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,H.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,H.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Playlist`}),(0,H.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Zur Playlist hinzufügen`})]}),(0,H.jsx)(`button`,{onClick:Gt,style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`18px`},children:[Ve.map(e=>(0,H.jsx)(`button`,{onClick:()=>Xt(e.id,qe.id),style:vr(!1),children:e.name},e.id)),Ve.length===0&&(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:`Noch keine Playlist vorhanden.`})]}),(0,H.jsxs)(`div`,{style:{borderTop:`1px solid #202636`,paddingTop:`18px`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`10px`},children:`Neue Playlist erstellen`}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`input`,{type:`text`,value:Ye,onChange:e=>Xe(e.target.value),placeholder:`Playlist-Name...`,style:{flex:1,minWidth:`220px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}}),(0,H.jsx)(`button`,{onClick:Yt,style:hr(L),children:`Erstellen`})]})]})]})]}),Pe&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:()=>{Fe(!1),Le(``),F(``)},style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:76}}),(0,H.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(420px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:77,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,H.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,H.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Zugriff erforderlich`}),(0,H.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Passwort eingeben`})]}),(0,H.jsx)(`button`,{onClick:()=>{Fe(!1),Le(``),F(``)},style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsx)(`input`,{type:`text`,value:Ie,onChange:e=>{Le(e.target.value),Re&&F(``)},onKeyDown:e=>{e.key===`Enter`&&qt()},placeholder:`Passwort eingeben...`,style:{width:`100%`,padding:`12px 14px`,borderRadius:`14px`,border:`1px solid #202636`,background:`#141821`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`,marginBottom:`12px`}}),Re&&(0,H.jsx)(`div`,{style:{color:`#ff6b6b`,fontSize:`13px`,marginBottom:`12px`,textAlign:`center`},children:Re}),(0,H.jsx)(`button`,{onClick:qt,style:{...hr(L),width:`100%`,justifyContent:`center`},children:`Bestätigen`})]})]}),ze&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:()=>Be(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:78}}),(0,H.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(440px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:79,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`,textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{fontSize:`14px`,color:L?`#ff4dd2`:`#1db954`,marginBottom:`8px`,fontWeight:700},children:`Secret freigeschaltet`}),(0,H.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,marginBottom:`12px`},children:`Herzlichen Glückwunsch`}),(0,H.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.6,fontSize:`15px`,marginBottom:`18px`},children:[`Du hast einen geheimen Song freigeschaltet.`,(0,H.jsx)(`br`,{}),`Du kannst ihn jetzt direkt einer Playlist hinzufügen.`]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:Jt,style:hr(L),children:`Zu Playlist hinzufügen`}),(0,H.jsx)(`button`,{onClick:()=>Be(!1),style:gr(L),children:`Später`})]})]})]}),pe&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{onClick:()=>me(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:72}}),(0,H.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:73,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,H.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,H.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,H.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Community`}),(0,H.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Song einreichen`})]}),(0,H.jsx)(`button`,{onClick:()=>me(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,H.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.7,fontSize:`15px`,textAlign:`center`,marginBottom:`22px`},children:[`Du kannst hier anonym einen Song zur Überprüfung einreichen.`,(0,H.jsx)(`br`,{}),`Das Formular öffnet sich in einem neuen Tab.`]}),(0,H.jsxs)(`div`,{style:{color:`#d7dce4`,fontSize:`14px`,lineHeight:1.6,textAlign:`center`,marginBottom:`18px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`14px`},children:[`Cover- und Mashup-Anfragen zählen zusammen.`,(0,H.jsx)(`br`,{}),`Pro Monat sind maximal 10 Anfragen möglich.`]}),(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`a`,{href:fr,target:`_blank`,rel:`noreferrer`,style:{...hr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:`Formular öffnen`}),(0,H.jsx)(`button`,{onClick:()=>Ut(`cover`),style:gr(L),children:`Cover beantragen`}),(0,H.jsx)(`button`,{onClick:()=>Ut(`mashup`),style:gr(L),children:`Mashup beantragen`})]})]})]}),N&&ge===`cover`&&(0,H.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,H.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,H.jsx)(`button`,{onClick:Wt,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,H.jsx)(`h2`,{style:{marginTop:0},children:`Cover beantragen`}),ve===1&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle einen bestehenden Song aus.`}),(0,H.jsxs)(`select`,{value:be,onChange:e=>xe(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,H.jsx)(`option`,{value:``,children:`Bitte auswählen`}),mt.map(e=>(0,H.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,H.jsx)(`button`,{disabled:!be,onClick:()=>ye(2),style:hr(L),children:`Weiter`})]}),ve===2&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`12px`},children:`Gewünschter Stil / Prompt:`}),(0,H.jsx)(`textarea`,{value:Se,onChange:e=>Ce(e.target.value),placeholder:`Jazz-Version, Country-Version, EDM-Version...`,style:{width:`100%`,minHeight:`120px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,H.jsx)(`button`,{disabled:!Se.trim(),onClick:()=>ye(3),style:hr(L),children:`Text generieren`})]}),ve===3&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,H.jsx)(`textarea`,{readOnly:!0,value:Nt,style:{width:`100%`,minHeight:`180px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(Nt),style:gr(L),children:`Text kopieren`}),(0,H.jsx)(`a`,{href:fr,target:`_blank`,rel:`noreferrer`,style:{...hr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),N&&ge===`mashup`&&(0,H.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,H.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,H.jsx)(`button`,{onClick:Wt,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,H.jsx)(`h2`,{style:{marginTop:0},children:`Mashup beantragen`}),ve===1&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle zwei bestehende Songs für dein Mashup aus.`}),(0,H.jsxs)(`select`,{value:ke,onChange:e=>Ae(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`12px`},children:[(0,H.jsx)(`option`,{value:``,children:`Song 1 auswählen`}),mt.map(e=>(0,H.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,H.jsxs)(`select`,{value:je,onChange:e=>Me(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,H.jsx)(`option`,{value:``,children:`Song 2 auswählen`}),mt.map(e=>(0,H.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,H.jsx)(`button`,{disabled:!ke||!je||ke===je,onClick:()=>ye(2),style:hr(L),children:`Weiter`})]}),ve===2&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`18px`,lineHeight:1.6},children:`Die Songtexte der beiden Songs werden für ein Mashup verwendet. Daraus wird ein neues Mashup erstellt. Das fertige Mashup wird später zugesendet.`}),(0,H.jsx)(`button`,{onClick:()=>ye(3),style:hr(L),children:`Text generieren`})]}),ve===3&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,H.jsx)(`textarea`,{readOnly:!0,value:Pt,style:{width:`100%`,minHeight:`160px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,H.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(Pt),style:gr(L),children:`Text kopieren`}),(0,H.jsx)(`a`,{href:fr,target:`_blank`,rel:`noreferrer`,style:{...hr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),it&&(0,H.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,H.jsxs)(`div`,{style:{width:`100%`,maxWidth:`460px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`22px`,padding:`22px`,color:`white`},children:[(0,H.jsx)(`button`,{onClick:()=>at(!1),style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,H.jsx)(`h2`,{style:{marginTop:0},children:`Originale anzeigen`}),(0,H.jsx)(`p`,{style:{color:`#9ca3af`,marginBottom:`16px`},children:`Wähle aus, welchen Originalsong du anzeigen möchtest.`}),(0,H.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:ot.map(e=>(0,H.jsxs)(`button`,{onClick:()=>fn(e),style:{display:`flex`,alignItems:`center`,gap:`12px`,width:`100%`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`14px`,padding:`10px`,color:`white`,cursor:`pointer`,textAlign:`left`},children:[(0,H.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`44px`,height:`44px`,borderRadius:`10px`,objectFit:`cover`}}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`div`,{style:{fontWeight:700},children:e.title}),(0,H.jsx)(`div`,{style:{color:`#9ca3af`,fontSize:`13px`},children:e.artist})]})]},e.id))})]})})]})}var br={width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`transparent`,color:`white`,cursor:`pointer`,fontSize:`18px`},xr={width:`44px`,height:`44px`,borderRadius:`999px`,border:`none`,background:`white`,color:`black`,cursor:`pointer`,fontSize:`18px`,fontWeight:700},Sr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`transparent`,position:`relative`,zIndex:2,cursor:`pointer`,margin:0,minWidth:0,outline:`none`},Cr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`linear-gradient(90deg, rgb(0, 19, 6) 0%, rgb(9, 105, 0) 100%)`,height:`4px`,borderRadius:`999px`,cursor:`pointer`,margin:0},wr=e=>({background:`transparent`,color:`#9aa2ad`,border:`none`,cursor:e?`grabbing`:`grab`,fontSize:`16px`,padding:0,lineHeight:1}),Tr={width:`32px`,height:`32px`,background:`transparent`,color:`#c7ced9`,border:`none`,borderRadius:`8px`,cursor:`pointer`,fontSize:`16px`};v.createRoot(document.getElementById(`root`)).render((0,H.jsx)(y.StrictMode,{children:(0,H.jsx)(yr,{})}));