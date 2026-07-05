var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function A(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ve(){pe(me),pe(he),pe(ge)}function ye(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function be(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function j(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function M(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function N(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function bt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[yt]=!0}var P=new Set,F={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(F[e]=t,e=0;e<t.length;e++)P.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return De.call(kt,e)?!0:De.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function I(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+I(t)):e.value!==``+I(t)&&(e.value=``+I(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,I(n)):Ut(e,o,I(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+I(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+I(n),t=t==null?n:``+I(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+I(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+I(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+I(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=I(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(bu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,`passive`,{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=h({},Sn,{view:0,detail:0}),Tn=xn(wn),En,Dn,On,kn=h({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==On&&(On&&e.type===`mousemove`?(En=e.screenX-On.screenX,Dn=e.screenY-On.screenY):Dn=En=0,On=e),En)},movementY:function(e){return`movementY`in e?e.movementY:Dn}}),An=xn(kn),jn=xn(h({},kn,{dataTransfer:0})),Mn=xn(h({},wn,{relatedTarget:0})),Nn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Fn=xn(h({},Sn,{data:0})),In={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Ln={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Rn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rn[e])?!!t[e]:!1}function Bn(){return zn}var Vn=xn(h({},wn,{key:function(e){if(e.key){var t=In[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Ln[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Hn=xn(h({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=xn(h({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn})),Wn=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Gn=xn(h({},kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Kn=xn(h({},Sn,{newState:0,oldState:0})),qn=[9,13,27,32],Jn=dn&&`CompositionEvent`in window,Yn=null;dn&&`documentMode`in document&&(Yn=document.documentMode);var Xn=dn&&`TextEvent`in window&&!Yn,Zn=dn&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,L=!1;function $n(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function R(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return R(t);case`keypress`:return t.which===32?(L=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&L?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Jn&&$n(e,t)?(e=_n(),gn=hn=mn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Ed(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){yd(e,0)}function lr(e){if(Lt(St(e)))return e}function z(e,t){if(e===`change`)return t}var ur=!1;if(dn){var dr;if(dn){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){or&&(or.detachEvent(`onpropertychange`,hr),sr=or=null)}function hr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,rn(e)),ln(cr,t)}}function gr(e,t,n){e===`focusin`?(mr(),or=t,sr=n,or.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function vr(e,t){if(e===`click`)return lr(t)}function yr(e,t){if(e===`input`||e===`change`)return lr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function B(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=dn&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==Rt(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Sr(Ar,r)||(Ar=r,r=Ed(kr,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};dn&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function V(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var H=V(`animationend`),Lr=V(`animationiteration`),Rr=V(`animationstart`),zr=V(`transitionrun`),Br=V(`transitionstart`),Vr=V(`transitioncancel`),Hr=V(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),Tt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ai(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ii(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return li(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ii(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ii(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=ii(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:j(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:j(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-We(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=fe(null),Hi=null,Ui=null;function Wi(e,t,n){k(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,pe(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;xr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=D.S;D.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=fe(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?k(ma,ma.current):k(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=fi(t,e.mode,n),t.return=e,t;case E:return t=wa(t),f(e,t,n)}if(ce(t)||ae(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=wa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=wa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=li(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ci(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=wa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ui(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=fe(null),Ya=fe(0);function Xa(e,t){e=Ul,k(Ya,e),k(Ja,t),Ul=e|t.baseLanes}function Za(){k(Ya,Ul),k(Ja,Ja.current)}function Qa(){Ul=Ya.current,pe(Ja),pe(Ya)}var $a=fe(null),eo=null;function to(e){var t=e.alternate;k(oo,oo.current&1),k($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){k(oo,oo.current),k($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(k(oo,oo.current),k($a,e),eo===null&&(eo=e)):io(e)}function io(){k(oo,oo.current),k($a,$a.current)}function ao(e){pe($a),eo===e&&(eo=null),pe(oo)}var oo=fe(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){D.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!xr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!xr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return xr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),xr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ms(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,le,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=mi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=mi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,$r(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ai=cf(s.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=li(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=li(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,a,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:A(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:ye(t);break;case 4:A(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(A(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=mi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),ki=t,Mi=!0,a=Ai,Zd(t.type)?(lf=a,Ai=cf(r.firstChild)):Ai=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return A(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(be(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=me.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=me.current,Li(t))Fi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(pe(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return k(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=oo.current,k(oo,a?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(oo),null;case 4:return ve(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&pe(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:pe(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&pe(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&N(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(qt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?lt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),M(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},jl(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,D.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=D.H;return D.H=Is,e===null?Is:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Me()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,rt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&B(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(M(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),M(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Me()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=$r(e,t),e!==null&&(M(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),ct(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(H,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,P.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),s=[];a:{var c=Ur.get(e);if(c!==void 0){var l=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=Vn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Un;break;case H:case Lr:case Rr:l=Nn;break;case Hr:l=Wn;break;case`scroll`:case`scrollend`:l=Tn;break;case`wheel`:l=Gn;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Hn;break;case`toggle`:case`beforetoggle`:l=Kn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Hn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=z;else if(ir(c))if(ur)v=yr;else{v=_r;var y=gr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=z):v=vr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Jn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Zn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,er=!0)),y=Ed(r,x),0<y.length&&(x=new Fn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=R(n),b!==null&&(x.data=b)))),(b=Xn?tr(e,n):nr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Fn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,jt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!F.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Kt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),N(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);N(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Bt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Bt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=rn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=m(),v=c(g(),1),y=c(u());function b(){var e=[...arguments];return(0,y.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var x=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function S(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function C(e){return`nodeType`in e}function w(e){return e?S(e)?e:C(e)?e.ownerDocument?.defaultView??window:window:window}function ee(e){let{Document:t}=w(e);return e instanceof t}function T(e){return S(e)?!1:e instanceof w(e).HTMLElement}function te(e){return e instanceof w(e).SVGElement}function E(e){return e?S(e)?e.document:C(e)?ee(e)?e:T(e)||te(e)?e.ownerDocument:document:document:document}var ne=x?y.useLayoutEffect:y.useEffect;function re(e){let t=(0,y.useRef)(e);return ne(()=>{t.current=e}),(0,y.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function ie(){let e=(0,y.useRef)(null);return[(0,y.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,y.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function ae(e,t){t===void 0&&(t=[e]);let n=(0,y.useRef)(e);return ne(()=>{n.current!==e&&(n.current=e)},t),n}function oe(e,t){let n=(0,y.useRef)();return(0,y.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function se(e){let t=re(e),n=(0,y.useRef)(null);return[n,(0,y.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function ce(e){let t=(0,y.useRef)();return(0,y.useEffect)(()=>{t.current=e},[e]),t.current}var D={};function O(e,t){return(0,y.useMemo)(()=>{if(t)return t;let n=D[e]==null?0:D[e]+1;return D[e]=n,e+`-`+n},[e,t])}function le(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var ue=le(1),de=le(-1);function fe(e){return`clientX`in e&&`clientY`in e}function pe(e){if(!e)return!1;let{KeyboardEvent:t}=w(e.target);return t&&e instanceof t}function k(e){if(!e)return!1;let{TouchEvent:t}=w(e.target);return t&&e instanceof t}function me(e){if(k(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return fe(e)?{x:e.clientX,y:e.clientY}:null}var he=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[he.Translate.toString(e),he.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),ge=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function _e(e){return e.matches(ge)?e:e.querySelector(ge)}var A={display:`none`};function ve(e){let{id:t,value:n}=e;return y.createElement(`div`,{id:t,style:A},n)}function ye(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return y.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function be(){let[e,t]=(0,y.useState)(``);return{announce:(0,y.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var xe=(0,y.createContext)(null);function Se(e){let t=(0,y.useContext)(xe);(0,y.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function Ce(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,y.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var we={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Te={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Ee(e){let{announcements:t=Te,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=we}=e,{announce:a,announcement:o}=be(),s=O(`DndLiveRegion`),[c,l]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{l(!0)},[]),Se((0,y.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=y.createElement(y.Fragment,null,y.createElement(ve,{id:r,value:i.draggable}),y.createElement(ye,{id:s,announcement:o}));return n?(0,_.createPortal)(u,n):u}var j;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(j||={});function De(){}function Oe(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function ke(){var e=[...arguments];return(0,y.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var Ae=Object.freeze({x:0,y:0});function je(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Me(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Ne(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Pe(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function Fe(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Ie=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=Fe(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=je(Fe(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(Me)};function Le(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Re=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Le(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Ne)};function ze(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Be(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ae}function Ve(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var He=Ve(1);function Ue(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function We(e,t,n){let r=Ue(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Ge={ignoreTransform:!1};function Ke(e,t){t===void 0&&(t=Ge);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=w(e).getComputedStyle(e);t&&(n=We(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function qe(e){return Ke(e,{ignoreTransform:!0})}function Je(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Ye(e,t){return t===void 0&&(t=w(e).getComputedStyle(e)),t.position===`fixed`}function Xe(e,t){t===void 0&&(t=w(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function Ze(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(ee(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!T(i)||te(i)||n.includes(i))return n;let a=w(e).getComputedStyle(i);return i!==e&&Xe(i,a)&&n.push(i),Ye(i,a)?n:r(i.parentNode)}return e?r(e):n}function Qe(e){let[t]=Ze(e,1);return t??null}function $e(e){return!x||!e?null:S(e)?e:C(e)?ee(e)||e===E(e).scrollingElement?window:T(e)?e:null:null}function et(e){return S(e)?e.scrollX:e.scrollLeft}function tt(e){return S(e)?e.scrollY:e.scrollTop}function nt(e){return{x:et(e),y:tt(e)}}var M;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(M||={});function rt(e){return!x||!e?!1:e===document.scrollingElement}function it(e){let t={x:0,y:0},n=rt(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var at={x:.2,y:.2};function ot(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=at);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=it(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=M.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=M.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=M.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=M.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function st(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function ct(e){return e.reduce((e,t)=>ue(e,nt(t)),Ae)}function lt(e){return e.reduce((e,t)=>e+et(t),0)}function ut(e){return e.reduce((e,t)=>e+tt(t),0)}function dt(e,t){if(t===void 0&&(t=Ke),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Qe(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var ft=[[`x`,[`left`,`right`],lt],[`y`,[`top`,`bottom`],ut]],pt=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Ze(t),r=ct(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of ft)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},mt=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function ht(e){let{EventTarget:t}=w(e);return e instanceof t?e:E(e)}function gt(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var _t;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(_t||={});function vt(e){e.preventDefault()}function yt(e){e.stopPropagation()}var N;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(N||={});var bt={start:[N.Space,N.Enter],cancel:[N.Esc],end:[N.Space,N.Enter,N.Tab]},xt=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case N.Right:return{...n,x:n.x+25};case N.Left:return{...n,x:n.x-25};case N.Down:return{...n,y:n.y+25};case N.Up:return{...n,y:n.y-25}}},St=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new mt(E(t)),this.windowListeners=new mt(w(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(_t.Resize,this.handleCancel),this.windowListeners.add(_t.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(_t.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&dt(n),t(Ae)}handleKeyDown(e){if(pe(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=bt,coordinateGetter:a=xt,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:Ae;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=de(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=it(n),p=st(n),m={x:Math.min(i===N.Right?p.right-p.width/2:p.right,Math.max(i===N.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===N.Down?p.bottom-p.height/2:p.bottom,Math.max(i===N.Down?p.top:p.top+p.height/2,u.y))},h=i===N.Right&&!s||i===N.Left&&!c,g=i===N.Down&&!l||i===N.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===N.Right&&e<=d.x||i===N.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===N.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===N.Down&&e<=d.y||i===N.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===N.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,ue(de(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};St.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=bt,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Ct(e){return!!(e&&`distance`in e)}function wt(e){return!!(e&&`delay`in e)}var P=class{constructor(e,t,n){n===void 0&&(n=ht(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=E(i),this.documentListeners=new mt(this.document),this.listeners=new mt(n),this.windowListeners=new mt(w(i)),this.initialCoordinates=me(r)??Ae,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(_t.Resize,this.handleCancel),this.windowListeners.add(_t.DragStart,vt),this.windowListeners.add(_t.VisibilityChange,this.handleCancel),this.windowListeners.add(_t.ContextMenu,vt),this.documentListeners.add(_t.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(wt(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(Ct(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(_t.Click,yt,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(_t.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=me(e)??Ae,s=de(n,o);if(!t&&a){if(Ct(a)){if(a.tolerance!=null&&gt(s,a.tolerance))return this.handleCancel();if(gt(s,a.distance))return this.handleStart()}if(wt(a)&&gt(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===N.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},F={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},Tt=class extends P{constructor(e){let{event:t}=e,n=E(t.target);super(e,F,n)}};Tt.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Et={move:{name:`mousemove`},end:{name:`mouseup`}},Dt;(function(e){e[e.RightClick=2]=`RightClick`})(Dt||={});var Ot=class extends P{constructor(e){super(e,Et,E(e.event.target))}};Ot.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Dt.RightClick?!1:(r?.({event:n}),!0)}}];var kt={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},At=class extends P{constructor(e){super(e,kt)}static setup(){return window.addEventListener(kt.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(kt.move.name,e)};function e(){}}};At.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var jt;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(jt||={});var Mt;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Mt||={});function Nt(e){let{acceleration:t,activator:n=jt.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Mt.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Pt({delta:d,disabled:!a}),[m,h]=ie(),g=(0,y.useRef)({x:0,y:0}),_=(0,y.useRef)({x:0,y:0}),v=(0,y.useMemo)(()=>{switch(n){case jt.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case jt.DraggableRect:return i}},[n,i,c]),b=(0,y.useRef)(null),x=(0,y.useCallback)(()=>{let e=b.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),S=(0,y.useMemo)(()=>s===Mt.TreeOrder?[...l].reverse():l,[s,l]);(0,y.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=ot(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),b.current=e,m(x,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var I={x:{[M.Backward]:!1,[M.Forward]:!1},y:{[M.Backward]:!1,[M.Forward]:!1}};function Pt(e){let{delta:t,disabled:n}=e,r=ce(t);return oe(e=>{if(n||!r||!e)return I;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[M.Backward]:e.x[M.Backward]||i.x===-1,[M.Forward]:e.x[M.Forward]||i.x===1},y:{[M.Backward]:e.y[M.Backward]||i.y===-1,[M.Forward]:e.y[M.Forward]||i.y===1}}},[n,t,r])}function Ft(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return oe(e=>t==null?null:r??e??null,[r,t])}function It(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Lt;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Lt||={});var Rt;(function(e){e.Optimized=`optimized`})(Rt||={});var zt=new Map;function Bt(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,y.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,y.useRef)(e),d=g(),f=ae(d),p=(0,y.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,y.useRef)(null),h=oe(t=>{if(d&&!n)return zt;if(!t||t===zt||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new pt(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,y.useEffect)(()=>{u.current=e},[e]),(0,y.useEffect)(()=>{d||p()},[n,d]),(0,y.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,y.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Lt.Always:return!1;case Lt.BeforeDragging:return n;default:return!n}}}function Vt(e,t){return oe(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Ht(e,t){return Vt(e,t)}function Ut(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Wt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Gt(e){return new pt(Ke(e),e)}function Kt(e,t,n){t===void 0&&(t=Gt);let[r,i]=(0,y.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Ut({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Wt({callback:a});return ne(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function qt(e){return Be(e,Vt(e))}var Jt=[];function Yt(e){let t=(0,y.useRef)(e),n=oe(n=>e?n&&n!==Jt&&e&&t.current&&e.parentNode===t.current.parentNode?n:Ze(e):Jt,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),n}function Xt(e){let[t,n]=(0,y.useState)(null),r=(0,y.useRef)(e),i=(0,y.useCallback)(e=>{let t=$e(e.target);t&&n(e=>e?(e.set(t,nt(t)),new Map(e)):null)},[]);return(0,y.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=$e(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,nt(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{$e(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>ue(e,t),Ae):ct(e):Ae,[e,t])}function Zt(e,t){t===void 0&&(t=[]);let n=(0,y.useRef)(null);return(0,y.useEffect)(()=>{n.current=null},t),(0,y.useEffect)(()=>{let t=e!==Ae;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?de(e,n.current):Ae}function Qt(e){(0,y.useEffect)(()=>{if(!x)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function $t(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function en(e){return(0,y.useMemo)(()=>e?Je(e):null,[e])}var tn=[];function nn(e,t){t===void 0&&(t=Ke);let[n]=e,r=en(n?w(n):null),[i,a]=(0,y.useState)(tn);function o(){a(()=>e.length?e.map(e=>rt(e)?r:new pt(t(e),e)):tn)}let s=Wt({callback:o});return ne(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function rn(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return T(t)?t:e}function an(e){let{measure:t}=e,[n,r]=(0,y.useState)(null),i=Wt({callback:(0,y.useCallback)(e=>{for(let{target:n}of e)if(T(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=se((0,y.useCallback)(e=>{let n=rn(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,y.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var on=[{sensor:Tt,options:{}},{sensor:St,options:{}}],sn={current:{}},cn={draggable:{measure:qe},droppable:{measure:qe,strategy:Lt.WhileDragging,frequency:Rt.Optimized},dragOverlay:{measure:Ke}},ln=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},un={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ln,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:De},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:cn,measureDroppableContainers:De,windowRect:null,measuringScheduled:!1},dn={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:De,draggableNodes:new Map,over:null,measureDroppableContainers:De},fn=(0,y.createContext)(dn),pn=(0,y.createContext)(un);function mn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ln}}}function hn(e,t){switch(t.type){case j.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case j.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case j.DragEnd:case j.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case j.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new ln(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case j.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new ln(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case j.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new ln(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function gn(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,y.useContext)(fn),a=ce(r),o=ce(n?.id);return(0,y.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!pe(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=_e(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function _n(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function vn(e){return(0,y.useMemo)(()=>({draggable:{...cn.draggable,...e?.draggable},droppable:{...cn.droppable,...e?.droppable},dragOverlay:{...cn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function yn(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,y.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ne(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Be(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Qe(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var bn=(0,y.createContext)({...Ae,scaleX:1,scaleY:1}),xn;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(xn||={});var Sn=(0,y.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=on,collisionDetection:o=Re,measuring:s,modifiers:c,...l}=e,[u,d]=(0,y.useReducer)(hn,void 0,mn),[f,p]=Ce(),[m,h]=(0,y.useState)(xn.Uninitialized),g=m===xn.Initialized,{draggable:{active:v,nodes:b,translate:x},droppable:{containers:S}}=u,C=v==null?null:b.get(v),ee=(0,y.useRef)({initial:null,translated:null}),T=(0,y.useMemo)(()=>v==null?null:{id:v,data:C?.data??sn,rect:ee},[v,C]),te=(0,y.useRef)(null),[E,re]=(0,y.useState)(null),[ie,oe]=(0,y.useState)(null),se=ae(l,Object.values(l)),ce=O(`DndDescribedBy`,t),D=(0,y.useMemo)(()=>S.getEnabled(),[S]),le=vn(s),{droppableRects:de,measureDroppableContainers:fe,measuringScheduled:pe}=Bt(D,{dragging:g,dependencies:[x.x,x.y],config:le.droppable}),k=Ft(b,v),he=(0,y.useMemo)(()=>ie?me(ie):null,[ie]),ge=$e(),_e=Ht(k,le.draggable.measure);yn({activeNode:v==null?null:b.get(v),config:ge.layoutShiftCompensation,initialRect:_e,measure:le.draggable.measure});let A=Kt(k,le.draggable.measure,_e),ve=Kt(k?k.parentElement:null),ye=(0,y.useRef)({activatorEvent:null,active:null,activeNode:k,collisionRect:null,collisions:null,droppableRects:de,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),be=S.getNodeFor(ye.current.over?.id),Se=an({measure:le.dragOverlay.measure}),we=Se.nodeRef.current??k,Te=g?Se.rect??A:null,De=!!(Se.nodeRef.current&&Se.rect),Oe=qt(De?null:A),ke=en(we?w(we):null),Ae=Yt(g?be??k:null),je=nn(Ae),Me=_n(c,{transform:{x:x.x-Oe.x,y:x.y-Oe.y,scaleX:1,scaleY:1},activatorEvent:ie,active:T,activeNodeRect:A,containerNodeRect:ve,draggingNodeRect:Te,over:ye.current.over,overlayNodeRect:Se.rect,scrollableAncestors:Ae,scrollableAncestorRects:je,windowRect:ke}),Ne=he?ue(he,x):null,Fe=Xt(Ae),Ie=Zt(Fe),Le=Zt(Fe,[A]),Be=ue(Me,Ie),Ve=Te?He(Te,Me):null,Ue=T&&Ve?o({active:T,collisionRect:Ve,droppableRects:de,droppableContainers:D,pointerCoordinates:Ne}):null,We=Pe(Ue,`id`),[Ge,Ke]=(0,y.useState)(null),qe=ze(De?Me:ue(Me,Le),Ge?.rect??null,A),Je=(0,y.useRef)(null),Ye=(0,y.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(te.current==null)return;let i=b.get(te.current);if(!i)return;let a=e.nativeEvent;Je.current=new n({active:te.current,activeNode:i,event:a,options:r,context:ye,onAbort(e){if(!b.get(e))return;let{onDragAbort:t}=se.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!b.get(e))return;let{onDragPending:i}=se.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=te.current;if(t==null)return;let n=b.get(t);if(!n)return;let{onDragStart:r}=se.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:ee}};(0,_.unstable_batchedUpdates)(()=>{r?.(i),h(xn.Initializing),d({type:j.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),re(Je.current),oe(a)})},onMove(e){d({type:j.DragMove,coordinates:e})},onEnd:o(j.DragEnd),onCancel:o(j.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=ye.current,o=null;if(t&&i){let{cancelDrop:s}=se.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===j.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=j.DragCancel)}te.current=null,(0,_.unstable_batchedUpdates)(()=>{d({type:e}),h(xn.Uninitialized),Ke(null),re(null),oe(null),Je.current=null;let t=e===j.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=se.current[t];e?.(o),f({type:t,event:o})}})}}},[b]),Xe=It(a,(0,y.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=b.get(r);if(te.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},te.current=r,Ye(n,t))},[b,Ye]));Qt(a),ne(()=>{A&&m===xn.Initializing&&h(xn.Initialized)},[A,m]),(0,y.useEffect)(()=>{let{onDragMove:e}=se.current,{active:t,activatorEvent:n,collisions:r,over:i}=ye.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:Be.x,y:Be.y},over:i};(0,_.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[Be.x,Be.y]),(0,y.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=ye.current;if(!e||te.current==null||!t||!i)return;let{onDragOver:a}=se.current,o=r.get(We),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,_.unstable_batchedUpdates)(()=>{Ke(s),a?.(c),f({type:`onDragOver`,event:c})})},[We]),ne(()=>{ye.current={activatorEvent:ie,active:T,activeNode:k,collisionRect:Ve,collisions:Ue,droppableRects:de,draggableNodes:b,draggingNode:we,draggingNodeRect:Te,droppableContainers:S,over:Ge,scrollableAncestors:Ae,scrollAdjustedTranslate:Be},ee.current={initial:Te,translated:Ve}},[T,k,Ue,Ve,b,we,Te,de,S,Ge,Ae,Be]),Nt({...ge,delta:x,draggingRect:Ve,pointerCoordinates:Ne,scrollableAncestors:Ae,scrollableAncestorRects:je});let Ze=(0,y.useMemo)(()=>({active:T,activeNode:k,activeNodeRect:A,activatorEvent:ie,collisions:Ue,containerNodeRect:ve,dragOverlay:Se,draggableNodes:b,droppableContainers:S,droppableRects:de,over:Ge,measureDroppableContainers:fe,scrollableAncestors:Ae,scrollableAncestorRects:je,measuringConfiguration:le,measuringScheduled:pe,windowRect:ke}),[T,k,A,ie,Ue,ve,Se,b,S,de,Ge,fe,Ae,je,le,pe,ke]),Qe=(0,y.useMemo)(()=>({activatorEvent:ie,activators:Xe,active:T,activeNodeRect:A,ariaDescribedById:{draggable:ce},dispatch:d,draggableNodes:b,over:Ge,measureDroppableContainers:fe}),[ie,Xe,T,A,d,ce,b,Ge,fe]);return y.createElement(xe.Provider,{value:p},y.createElement(fn.Provider,{value:Qe},y.createElement(pn.Provider,{value:Ze},y.createElement(bn.Provider,{value:qe},i)),y.createElement(gn,{disabled:n?.restoreFocus===!1})),y.createElement(Ee,{...n,hiddenTextDescribedById:ce}));function $e(){let e=E?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),Cn=(0,y.createContext)(null),wn=`button`,Tn=`Draggable`;function En(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=O(Tn),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,y.useContext)(fn),{role:p=wn,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,y.useContext)(g?bn:Cn),[v,b]=se(),[x,S]=se(),C=$t(o,t),w=ae(n);return ne(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,y.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===wn?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:_}}function Dn(){return(0,y.useContext)(pn)}var On=`Droppable`,kn={timeout:25};function An(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=O(On),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,y.useContext)(fn),u=(0,y.useRef)({disabled:n}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),p=(0,y.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...kn,...i},_=ae(h??r),v=Wt({callback:(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[b,x]=se((0,y.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),S=ae(t);return(0,y.useEffect)(()=>{!v||!b.current||(v.disconnect(),d.current=!1,v.observe(b.current))},[b,v]),(0,y.useEffect)(()=>(s({type:j.RegisterDroppable,element:{id:r,key:a,disabled:n,node:b,rect:f,data:S}}),()=>s({type:j.UnregisterDroppable,key:a,id:r})),[r]),(0,y.useEffect)(()=>{n!==u.current.disabled&&(s({type:j.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:b,over:c,setNodeRef:x}}function jn(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Mn(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function Nn(e){return e!==null&&e>=0}function Pn(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Fn(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var In=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=jn(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Ln={scaleX:1,scaleY:1},Rn=e=>{let{activeIndex:t,activeNodeRect:n,index:r,rects:i,overIndex:a}=e,o=i[t]??n;if(!o)return null;if(r===t){let e=i[a];return e?{x:0,y:t<a?e.top+e.height-(o.top+o.height):e.top-o.top,...Ln}:null}let s=zn(i,r,t);return r>t&&r<=a?{x:0,y:-o.height-s,...Ln}:r<t&&r>=a?{x:0,y:o.height+s,...Ln}:{x:0,y:0,...Ln}};function zn(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return r?n<t?i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}var Bn=`Sortable`,Vn=y.createContext({activeIndex:-1,containerId:Bn,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:In,disabled:{draggable:!1,droppable:!1}});function Hn(e){let{children:t,id:n,items:r,strategy:i=In,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=Dn(),d=O(Bn,n),f=s.rect!==null,p=(0,y.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,y.useRef)(p),v=!Pn(p,_.current),b=g!==-1&&h===-1||v,x=Fn(a);ne(()=>{v&&m&&u(p)},[v,p,m,u]),(0,y.useEffect)(()=>{_.current=p},[p]);let S=(0,y.useMemo)(()=>({activeIndex:h,containerId:d,disabled:x,disableTransforms:b,items:p,overIndex:g,useDragOverlay:f,sortedRects:Mn(p,c),strategy:i}),[h,d,x.draggable,x.droppable,b,p,g,c,f,i]);return y.createElement(Vn.Provider,{value:S},t)}var Un=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return jn(n,r,i).indexOf(t)},Wn=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Gn={duration:200,easing:`ease`},Kn=`transform`,qn=he.Transition.toString({property:Kn,duration:0,easing:`linear`}),Jn={roleDescription:`sortable`};function Yn(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,y.useState)(null),s=(0,y.useRef)(n);return ne(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=Ke(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,y.useEffect)(()=>{a&&o(null)},[a]),a}function Xn(e){let{animateLayoutChanges:t=Wn,attributes:n,disabled:r,data:i,getNewIndex:a=Un,id:o,strategy:s,resizeObserverConfig:c,transition:l=Gn}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,y.useContext)(Vn),x=Zn(r,p),S=u.indexOf(o),C=(0,y.useMemo)(()=>({sortable:{containerId:d,index:S,items:u},...i}),[d,i,S,u]),w=(0,y.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:ee,node:T,isOver:te,setNodeRef:E}=An({id:o,data:C,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:w,...c}}),{active:ne,activatorEvent:re,activeNodeRect:ie,attributes:ae,setNodeRef:oe,listeners:se,isDragging:ce,over:D,setActivatorNodeRef:O,transform:le}=En({id:o,data:C,attributes:{...Jn,...n},disabled:x.draggable}),ue=b(E,oe),de=!!ne,fe=de&&!m&&Nn(f)&&Nn(g),k=!_&&ce,me=fe?(k&&fe?le:null)??(s??v)({rects:h,activeNodeRect:ie,activeIndex:f,overIndex:g,index:S}):null,ge=Nn(f)&&Nn(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):S,_e=ne?.id,A=(0,y.useRef)({activeId:_e,items:u,newIndex:ge,containerId:d}),ve=u!==A.current.items,ye=t({active:ne,containerId:d,isDragging:ce,isSorting:de,id:o,index:S,items:u,newIndex:A.current.newIndex,previousItems:A.current.items,previousContainerId:A.current.containerId,transition:l,wasDragging:A.current.activeId!=null}),be=Yn({disabled:!ye,index:S,node:T,rect:ee});return(0,y.useEffect)(()=>{de&&A.current.newIndex!==ge&&(A.current.newIndex=ge),d!==A.current.containerId&&(A.current.containerId=d),u!==A.current.items&&(A.current.items=u)},[de,ge,d,u]),(0,y.useEffect)(()=>{if(_e===A.current.activeId)return;if(_e!=null&&A.current.activeId==null){A.current.activeId=_e;return}let e=setTimeout(()=>{A.current.activeId=_e},50);return()=>clearTimeout(e)},[_e]),{active:ne,activeIndex:f,attributes:ae,data:C,rect:ee,index:S,newIndex:ge,items:u,isOver:te,isSorting:de,isDragging:ce,listeners:se,node:T,overIndex:g,over:D,setNodeRef:ue,setActivatorNodeRef:O,setDroppableNodeRef:E,setDraggableNodeRef:oe,transform:be??me,transition:xe()};function xe(){if(be||ve&&A.current.newIndex===S)return qn;if(!(k&&!pe(re)||!l)&&(de||ye))return he.Transition.toString({...l,property:Kn})}}function Zn(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}N.Down,N.Right,N.Up,N.Left;var Qn=`/Koenigliche-Mafia/`,L=e=>`${Qn}${e}`,$n=`https://github.com/Erdbeerenfresser/Koenigliche-Mafia/releases/download/v.001.s`,R=e=>`${$n}/${encodeURIComponent(e)}`,er=[{id:1,title:`Intro - Motte, hast du eigentlich einen Plan?`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:1,duration:`00:59`,releaseDate:`2026-03-27`,cover:L(`covers/Intro-Motte-hast-du-eigentlich-einen-Plan.jpeg`),file:R(`Intro-Motte-hast-du-eigentlich-einen-Plan.mp3`),isSingle:!1},{id:2,title:`Skateboard Chemistry`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:2,duration:`03:04`,releaseDate:`2026-03-27`,cover:L(`covers/Skateboard-Chemistry.png`),file:R(`Skateboard-Chemistry.mp3`),isSingle:!1},{id:3,title:`Crystal Moth`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:3,duration:`01:48`,releaseDate:`2026-03-27`,cover:L(`covers/Crystal-Moth.png`),file:R(`Crystal-Moth.mp3`),isSingle:!1},{id:4,title:`Competitive Advantage`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:4,duration:`02:28`,releaseDate:`2026-03-27`,cover:L(`covers/Competitive-Advantage.png`),file:R(`Competitive-Advantage.mp3`),isSingle:!1},{id:5,title:`Crystal Moth Supreme`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:5,duration:`03:17`,releaseDate:`2026-03-27`,cover:L(`covers/Crystal-Moth-Supreme.jpg`),file:R(`Crystal-Moth-Supreme.mp3`),isSingle:!1},{id:6,title:`Operation Mottemaker`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:6,duration:`02:04`,releaseDate:`2026-03-27`,cover:L(`covers/Operation-Mottemaker.png`),file:R(`Operation-Mottemaker.mp3`),isSingle:!1},{id:7,title:`Escape Velocity`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:7,duration:`03:47`,releaseDate:`2026-03-27`,cover:L(`covers/Escape-Velocity.png`),file:R(`Escape-Velocity.mp3`),isSingle:!1},{id:8,title:`Mottemaker Industries`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:8,duration:`02:30`,releaseDate:`2026-03-27`,cover:L(`covers/Mottemaker-Industries.jpg`),file:R(`Mottemaker-Industries.mp3`),isSingle:!1},{id:9,title:`Empire on Fire`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:9,duration:`02:51`,releaseDate:`2026-03-27`,cover:L(`covers/Empire-on-Fire.jpg`),file:R(`Empire-on-Fire.mp3`),isSingle:!1},{id:10,title:`Schedule II`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:L(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:10,duration:`02:57`,releaseDate:`2026-03-27`,cover:L(`covers/Schedule-II.jpg`),file:R(`Schedule-II.mp3`),isSingle:!1},{id:11,title:`Alexis, Mi Hermano`,artist:`Motte`,duration:`03:41`,releaseDate:`2026-03-16`,cover:L(`covers/Alexis-Mi-Hermano.png`),file:R(`Alexis-Mi-Hermano.mp3`),isSingle:!0},{id:12,title:`Alexis Brother`,artist:`Motte`,duration:`03:36`,releaseDate:`2026-03-16`,cover:L(`covers/Alexis_Brother.png`),file:R(`Alexis_Brother.mp3`),isSingle:!0},{id:13,title:`Il Ritorno del Don Motte`,artist:`Erdbeerenfresser`,album:`Il Ritorno del Don Motte - Single`,albumTrackNumber:1,duration:`03:37`,releaseDate:`2026-04-10`,cover:L(`covers/il-ritorno-del-don-motte.jpg`),file:R(`il-ritorno-del-don-motte.mp3`),isSingle:!0},{id:14,title:`Rückfahrt Zwei Stunden`,artist:`Erdbeerenfresser`,duration:`02:44`,releaseDate:`2026-04-12`,cover:L(`covers/Rückfahrt_Zwei_Stunden.png`),file:R(`Ruckfahrt_Zwei_Stunden.mp3`),isSingle:!0},{id:`jascha1`,title:`Jascha Winter und der Freizeitparkzauber`,artist:`Motte`,duration:`04:44`,releaseDate:`2026-03-05`,cover:L(`covers/Jascha-Winter-und-der-Freizeitparkzauber.jpg`),file:R(`Jascha-Winter-und-der-Freizeitparkzauber.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:15,title:`Hymne an Alexis (remasterd)`,artist:`Motte`,duration:`03:25`,releaseDate:`2025-09-12`,cover:L(`covers/Hymne_an_Alexis_(remasterd).jpg`),file:R(`Hymne_an_Alexis_.remasterd.mp3`),isSingle:!0},{id:16,title:`Die Bußhymne an Alexis`,artist:`Motte`,duration:`03:23`,releaseDate:`2026-03-16`,cover:L(`covers/Die-Bußhymne-an-Alexis.png`),file:R(`Die-Busshymne-an-Alexis.mp3`),isSingle:!0},{id:17,title:`Ben, das geht auf mich`,artist:`Motte`,duration:`03:20`,releaseDate:`2026-01-29`,cover:L(`covers/Ben_das_geht_auf_mich.png`),file:R(`Ben_das_geht_auf_mich.mp3`),isSingle:!0},{id:18,title:`Ik ben gleich soweit!`,artist:`Merlin`,duration:`02:23`,releaseDate:`2026-02-27`,cover:L(`covers/Ik-ben-gleich-soweit!.jpg`),file:R(`Ik-ben-gleich-soweit.mp3`),isSingle:!0},{id:19,title:`PrinzMotte, unser Held`,artist:`Erdbeerenfresser`,duration:`03:48`,releaseDate:`2026-01-30`,cover:L(`covers/PrinzMotte,_unser_Held.jpg`),file:R(`PrinzMotte._unser_Held.mp3`),isSingle:!0},{id:20,title:`Kochstream Ambience`,artist:`Merlin`,duration:`01:49`,releaseDate:`2026-02-27`,cover:L(`covers/Kochstream-Ambience.jpg`),file:R(`Kochstream-Ambience.mp3`),isSingle:!0},{id:21,title:`Fleischwurst`,artist:`Merlin`,duration:`04:24`,releaseDate:`2026-01-23`,cover:L(`covers/Fleischwurst.jpg`),file:R(`Fleischwurst.mp3`),isSingle:!0},{id:22,title:`Erdbeerenfresser`,artist:`Merlin`,duration:`02:29`,releaseDate:`2026-01-17`,cover:L(`covers/Erdbeerenfresser.jpg`),file:R(`Erdbeerenfresser.mp3`),isSingle:!0},{id:23,title:`There are heroes`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-03-20`,cover:L(`covers/There are heroes.jpg`),file:R(`There.are.heroes.mp3`),isSingle:!0},{id:24,title:`Mack`,artist:`Erdbeerenfresser`,duration:`05:37`,releaseDate:`2026-03-17`,cover:L(`covers/Mack.jpg`),file:R(`Mack.mp3`),isSingle:!0},{id:`jascha2`,title:`Party`,artist:`Erdbeerenfresser;Coaster_Liam`,duration:`02:09`,releaseDate:`2026-03-16`,cover:L(`covers/Party.jpg`),file:R(`Party.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:25,title:`Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)`,artist:`Erdbeerenfresser`,duration:`04:32`,releaseDate:`2026-03-16`,cover:L(`covers/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).png`),file:R(`Der.Deal.Europa-Park.Musical.Duett.-.Alexis.X.Roland.Mack.mp3`),isSingle:!0},{id:26,title:`Nu hör ma zu…`,artist:`Erdbeerenfresser`,duration:`03:13`,releaseDate:`2026-03-16`,cover:L(`covers/Nu hör ma zu….jpg`),file:R(`Nu.hor.ma.zu.mp3`),isSingle:!0},{id:27,title:`Yeah yeah`,artist:`Erdbeerenfresser`,duration:`01:41`,releaseDate:`2026-03-16`,cover:L(`covers/Yeah yeah.jpg`),file:R(`Yeah.yeah.mp3`),isSingle:!0},{id:28,title:`Motte Cooking Stream`,artist:`Erdbeerenfresser`,duration:`03:09`,releaseDate:`2026-03-16`,cover:L(`covers/Motte Cooking Stream.jpg`),file:R(`Motte.Cooking.Stream.mp3`),isSingle:!0},{id:29,title:`Printer läuft die ganze Nacht`,artist:`Erdbeerenfresser`,duration:`04:09`,releaseDate:`2026-03-15`,cover:L(`covers/Printer läuft die ganze Nacht.jpg`),file:R(`Printer.lauft.die.ganze.Nacht.mp3`),isSingle:!0},{id:`jascha3`,title:`Hippo sagt böse Sachen`,artist:`Erdbeerenfresser`,duration:`02:55`,releaseDate:`2026-03-14`,cover:L(`covers/Hippo sagt böse Sachen.jpg`),file:R(`Hippo.sagt.bose.Sachen.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:30,title:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`,artist:`Motte`,duration:`03:40`,releaseDate:`2026-03-25`,cover:L(`covers/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.jpg`),file:R(`MR.MONEYMAKER.HEUDE.ISS.DEIN.GEBORDSDOOCH.mp3`),isSingle:!0},{id:`jascha4`,title:`Zwischen Rauch und Achterbahn`,artist:`Erdbeerenfresser`,duration:`03:02`,releaseDate:`2026-04-14`,cover:L(`covers/Zwischen Rauch und Achterbahn.jpg`),file:R(`Zwischen.Rauch.und.Achterbahn.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:31,title:`Ois für’n Alexis`,artist:`Erdbeerenfresser`,duration:`03:01`,releaseDate:`2026-04-15`,cover:L(`covers/Ois für’n Alexis.jpg`),file:R(`Ois.fur.n.Alexis.mp3`),isSingle:!0},{id:32,title:`Mr. Moneymaker`,artist:`Erdbeerenfresser`,duration:`03:42`,releaseDate:`2026-04-15`,cover:L(`covers/Mr. Moneymaker.jpg`),file:R(`Mr.Moneymaker.mp3`),isSingle:!0},{id:33,title:`Indian coding berry`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-04-15`,cover:L(`covers/Indian coding berry.jpg`),file:R(`Indian.coding.berry.mp3`),isSingle:!0},{id:34,title:`Pauli foahrt durch Barcelona (Meddl Edition)`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-03-25`,cover:L(`covers/Pauli foahrt durch Barcelona (Meddl Edition).jpg`),file:R(`Pauli.foahrt.durch.Barcelona.Meddl.Edition.mp3`),isSingle:!0},{id:35,title:`Marco… hörst du mich?`,artist:`Erdbeerenfresser`,duration:`04:34`,releaseDate:`2026-04-16`,cover:L(`covers/Marco… hörst du mich.jpg`),file:R(`Marco.horst.du.mich.mp3`),isSingle:!0},{id:36,title:`EPMC – The Park Awaits`,artist:`Motte`,duration:`03:47`,releaseDate:`2026-04-16`,cover:L(`covers/EPMC – The Park Awaits.jpg`),file:R(`EPMC.The.Park.Awaits.mp3`),isSingle:!0},{id:37,title:`Mottemod (König vom Server)`,artist:`Erdbeerenfresser`,duration:`04:27`,releaseDate:`2026-04-17`,cover:L(`covers/Mottemod (König vom Server).jpg`),file:R(`Mottemod.Konig.vom.Server.mp3`),isSingle:!0},{id:`jascha5`,title:`Wundertüten-Freitag (Queen Claudia)`,artist:`Erdbeerenfresser`,duration:`03:29`,releaseDate:`2026-04-17`,cover:L(`covers/Wundertüten-Freitag (Queen Claudia).png`),file:R(`Wundertuten-Freitag.Queen.Claudia.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:38,title:`Erdbeere Mine Session`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:L(`covers/Erdbeere Underground.jpg`),albumTrackNumber:1,duration:`02:11`,releaseDate:`2026-04-17`,cover:L(`covers/Erdbeere Mine Session.png`),file:R(`Erdbeere.Mine.Session.mp3`),isSingle:!1},{id:39,title:`Auf der Suche nach Diamanten`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:L(`covers/Erdbeere Underground.jpg`),albumTrackNumber:2,duration:`02:28`,releaseDate:`2026-04-17`,cover:L(`covers/Auf der Suche nach Diamanten.png`),file:R(`Auf.der.Suche.nach.Diamanten.mp3`),isSingle:!1},{id:40,title:`Noch tiefer`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:L(`covers/Erdbeere Underground.jpg`),albumTrackNumber:3,duration:`02:42`,releaseDate:`2026-04-17`,cover:L(`covers/Noch tiefer.png`),file:R(`Noch.tiefer.mp3`),isSingle:!1},{id:41,title:`Auch Eisen ist wichtig`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:L(`covers/Erdbeere Underground.jpg`),albumTrackNumber:4,duration:`02:16`,releaseDate:`2026-04-17`,cover:L(`covers/Auch Eisen ist wichtig.png`),file:R(`Auch.Eisen.ist.wichtig.mp3`),isSingle:!1},{id:42,title:`Diamanten in meiner Hand`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:L(`covers/Erdbeere Underground.jpg`),albumTrackNumber:5,duration:`02:38`,releaseDate:`2026-04-17`,cover:L(`covers/Diamanten in meiner Hand.png`),file:R(`Diamanten.in.meiner.Hand.mp3`),isSingle:!1},{id:`jascha6`,title:`E-Scooter im Müllmodus`,artist:`Motte`,duration:`02:03`,releaseDate:`2026-04-18`,cover:L(`covers/E-Scooter im Müllmodus.png`),file:R(`E-Scooter.im.Mullmodus.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:`jascha7`,title:`WAS...?`,artist:`Erdbeerenfresser`,duration:`03:08`,releaseDate:`2026-04-18`,cover:L(`covers/WAS....png`),file:R(`WAS.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:43,title:`EPMC – Lay Low Nights`,artist:`Motte`,duration:`03:54`,releaseDate:`2026-04-19`,cover:L(`covers/EPMC – Lay Low Nights.png`),file:R(`EPMC.Lay.Low.Nights.mp3`),isSingle:!0},{id:44,title:`Mr. Moneymaker Land`,artist:`Erdbeerenfresser`,duration:`02:46`,releaseDate:`2026-04-19`,cover:L(`covers/Mr. Moneymaker Land.png`),file:R(`Mr.Moneymaker.Land.mp3`),isSingle:!0},{id:`jascha8`,title:`Jascha Full Throttle`,artist:`Motte`,duration:`04:13`,releaseDate:`2026-04-23`,cover:L(`covers/JASCHA_FULL_THROTTLE.png`),file:R(`JASCHA_FULL_THROTTLE.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:45,title:`Es war ein Abend wie jeder andere`,artist:`Erdbeerenfresser`,duration:`03:37`,releaseDate:`2026-03-15`,cover:L(`covers/Es war ein Abend wie jeder andere.jpeg`),file:R(`Es.war.ein.Abend.wie.jeder.andere.mp3`),isSingle:!0},{id:46,title:`Rückkehr des Königs`,artist:`Erdbeerenfresser`,duration:`03:19`,releaseDate:`2026-04-25`,cover:L(`covers/Rückkehr des Königs.jpeg`),file:R(`Ruckkehr.des.Konigs.mp3`),isSingle:!0},{id:47,title:`Motte Nicht Da`,artist:`Erdbeerenfresser`,duration:`01:56`,releaseDate:`2026-04-27`,cover:L(`covers/Motte Nicht Da.jpeg`),file:R(`Motte.Nicht.Da.mp3`),isSingle:!0},{id:48,title:`Motte, komm bitte bald zurück`,artist:`Erdbeerenfresser`,duration:`03:14`,releaseDate:`2026-04-29`,cover:L(`covers/Motte, komm bitte bald zurück.png`),file:R(`Motte.komm.bitte.bald.zuruck.mp3`),isSingle:!0},{id:49,title:`Alexis of the Emerald Isle`,artist:`Motte`,duration:`06:00`,releaseDate:`2026-05-18`,cover:L(`covers/Alexis of the Emerald Isle.png`),file:R(`Alexis.of.the.Emerald.Isle.mp3`),isSingle:!0},{id:50,title:`Königliche A.I. Songs`,artist:`Erdbeerenfresser`,duration:`03:59`,releaseDate:`2026-05-19`,cover:L(`covers/Königliche A.I. Songs.png`),file:R(`Konigliche.A.I.Songs.mp3`),isSingle:!0},{id:51,title:`Ein wunderschönes Haus`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:L(`covers/Mottenmann.png`),albumTrackNumber:1,duration:`02:02`,releaseDate:`2026-05-12`,cover:L(`covers/Ein wunderschönes Haus.png`),file:R(`Ein.wunderschones.Haus.mp3`),isSingle:!1},{id:52,title:`Verreck, du blöder Mottenmann`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:L(`covers/Mottenmann.png`),albumTrackNumber:2,duration:`02:44`,releaseDate:`2026-05-12`,cover:L(`covers/Verreck, du blöder Mottenmann.png`),file:R(`Verreck.du.bloder.Mottenmann.mp3`),isSingle:!1},{id:53,title:`Motte… warum tust du mir das an`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:L(`covers/Mottenmann.png`),albumTrackNumber:3,duration:`02:51`,releaseDate:`2026-05-12`,cover:L(`covers/Motte… warum tust du mir das an.png`),file:R(`Motte.warum.tust.du.mir.das.an.mp3`),isSingle:!1},{id:54,title:`Die Flucht des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:L(`covers/Mottenmann.png`),albumTrackNumber:4,duration:`03:34`,releaseDate:`2026-05-12`,cover:L(`covers/Die Flucht des Mottenmanns.png`),file:R(`Die.Flucht.des.Mottenmanns.mp3`),isSingle:!1},{id:55,title:`Die Ruhe des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:L(`covers/Mottenmann.png`),albumTrackNumber:5,duration:`04:38`,releaseDate:`2026-05-12`,cover:L(`covers/Die Ruhe des Mottenmanns.png`),file:R(`Die.Ruhe.des.Mottenmanns.mp3`),isSingle:!1},{id:56,title:`Città di Marmo`,artist:`Motte`,duration:`04:32`,releaseDate:`2026-05-12`,cover:L(`covers/Citta di Marmo.png`),file:R(`Citta.di.Marmo.mp3`),isSingle:!0},{id:`57`,title:`Erdbeere Around the World – Teaser`,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),albumTrackNumber:0,duration:`01:24`,releaseDate:`2026-05-24`,cover:L(`covers/EATW.png`),file:R(`EATWT.mp3`),isSingle:!1},{id:58,title:`Boarding Pass`,albumTrackNumber:1,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`01:45`,releaseDate:`2026-05-25`,cover:L(`covers/Boarding Pass.png`),file:R(`Boarding.Pass.mp3`),isSingle:!1},{id:59,title:`Shanghai Dreams`,albumTrackNumber:2,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:00`,releaseDate:`2026-05-25`,cover:L(`covers/Shanghai Dreams.png`),file:R(`Shanghai.Dreams.mp3`),isSingle:!1},{id:60,title:`Rio Nights`,albumTrackNumber:3,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:37`,releaseDate:`2026-05-25`,cover:L(`covers/Rio Nights.png`),file:R(`Rio.Nights.mp3`),isSingle:!1},{id:61,title:`Dolce Vita`,albumTrackNumber:4,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:21`,releaseDate:`2026-05-25`,cover:L(`covers/Dolce Vita.png`),file:R(`Dolce.Vita.mp3`),isSingle:!1},{id:62,title:`Amsterdam 3AM`,albumTrackNumber:5,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:59`,releaseDate:`2026-05-25`,cover:L(`covers/Amsterdam 3AM.png`),file:R(`Amsterdam.3AM.mp3`),isSingle:!1},{id:63,title:`Route 66`,albumTrackNumber:6,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:25`,releaseDate:`2026-05-25`,cover:L(`covers/Route 66.png`),file:R(`Route.66.mp3`),isSingle:!1},{id:64,title:`Sandstorm Eyes`,albumTrackNumber:7,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`04:57`,releaseDate:`2026-05-25`,cover:L(`covers/Sandstorm Eyes.png`),file:R(`Sandstorm.Eyes.mp3`),isSingle:!1},{id:65,title:`Greek Summer`,albumTrackNumber:8,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:49`,releaseDate:`2026-05-25`,cover:L(`covers/Greek Summer.png`),file:R(`Greek.Summer.mp3`),isSingle:!1},{id:66,title:`Kingston Sun`,albumTrackNumber:9,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`02:09`,releaseDate:`2026-05-25`,cover:L(`covers/Kingston Sun.png`),file:R(`Kingston.Sun.mp3`),isSingle:!1},{id:67,title:`Corazón Caliente`,albumTrackNumber:10,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:14`,releaseDate:`2026-05-25`,cover:L(`covers/Corazón Caliente.png`),file:R(`Corazon.Caliente.mp3`),isSingle:!1},{id:68,title:`Safari`,albumTrackNumber:11,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`03:07`,releaseDate:`2026-05-25`,cover:L(`covers/Safari.png`),file:R(`Safari.mp3`),isSingle:!1},{id:69,title:`Home Again`,albumTrackNumber:12,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:L(`covers/Erdbeere Around The World (Cover).png`),duration:`02:56`,releaseDate:`2026-05-25`,cover:L(`covers/Home Again.png`),file:R(`Home.Again.mp3`),isSingle:!1},{id:`jascha9`,title:`JOA IST HALT PHYSIK!`,artist:`Erdbeerenfresser`,duration:`02:52`,releaseDate:`2026-05-21`,cover:L(`covers/Ganz Hessen Kennt Jetzt Paul.png`),file:R(`Ganz.Hessen.Kennt.Jetzt.Paul.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:70,title:`Der Unfall`,artist:`Erdbeerenfresser`,duration:`03:56`,releaseDate:`2026-05-30`,cover:L(`covers/Der Unfall.png`),file:R(`Der.Unfall.mp3`),isSingle:!0},{id:71,title:`The Beginning`,albumTrackNumber:1,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`04:07`,releaseDate:`2026-06-13`,cover:L(`covers/The Beginning.png`),file:R(`The.Beginning.mp3`),isSingle:!1},{id:72,title:`The One Ahead`,albumTrackNumber:2,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`03:47`,releaseDate:`2026-06-13`,cover:L(`covers/The One Ahead.png`),file:R(`The.One.Ahead.mp3`),isSingle:!1},{id:73,title:`Count Till Dawn`,albumTrackNumber:3,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`04:13`,releaseDate:`2026-06-13`,cover:L(`covers/Count Till Dawn.png`),file:R(`Count.Till.Dawn.mp3`),isSingle:!1},{id:74,title:`Motte & The Death Drop`,albumTrackNumber:4,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`04:54`,releaseDate:`2026-06-13`,cover:L(`covers/Motte & The Death Drop.png`),file:R(`Motte.The.Death.Drop.mp3`),isSingle:!1},{id:75,title:`Erdbeere und die wilde Maus`,albumTrackNumber:5,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`04:37`,releaseDate:`2026-06-13`,cover:L(`covers/Erdbeere und die wilde Maus.png`),file:R(`Erdbeere.und.die.wilde.Maus.mp3`),isSingle:!1},{id:76,title:`After Midnight Queue`,albumTrackNumber:6,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`05:09`,releaseDate:`2026-06-13`,cover:L(`covers/After Midnight Queue.png`),file:R(`After.Midnight.Queue.mp3`),isSingle:!1},{id:77,title:`Clown House #1`,albumTrackNumber:7,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`05:21`,releaseDate:`2026-06-13`,cover:L(`covers/Clown House 1.png`),file:R(`Clown.House.1.mp3`),isSingle:!1},{id:78,title:`Last Guests`,albumTrackNumber:8,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`05:25`,releaseDate:`2026-06-13`,cover:L(`covers/Last Guests.png`),file:R(`Last.Guests.mp3`),isSingle:!1},{id:79,title:`Sondervorstellung`,albumTrackNumber:9,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`05:00`,releaseDate:`2026-06-13`,cover:L(`covers/Sondervorstellung.png`),file:R(`Sondervorstellung.mp3`),isSingle:!1},{id:80,title:`Waiting for Reopening`,albumTrackNumber:10,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:L(`covers/Traumatica Nights.png`),duration:`06:03`,releaseDate:`2026-06-13`,cover:L(`covers/Waiting for Reopening.png`),file:R(`Waiting.for.Reopening.mp3`),isSingle:!1},{id:81,title:`Coins`,artist:`Erdbeerenfresser`,duration:`04:21`,releaseDate:`2026-06-17`,cover:L(`covers/Coins.png`),file:R(`Coins.mp3`),isSingle:!0},{id:82,title:`Palast der Krone`,artist:`Motte`,duration:`04:27`,releaseDate:`2026-06-17`,cover:L(`covers/Palast der Krone.png`),file:R(`Palast.der.Krone.mp3`),isSingle:!0},{id:83,title:`Uf de Bärge wird gfiiret`,artist:`Motte`,duration:`03:05`,releaseDate:`2026-06-17`,cover:L(`covers/Uf de Bärge wird gfiiret.png`),file:R(`Uf.de.Barge.wird.gfiiret.mp3`),isSingle:!0},{id:84,title:`Wir drehen uns nicht allein`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:L(`covers/Körnchenkreis.png`),albumTrackNumber:1,duration:`03:34`,releaseDate:`2026-06-21`,cover:L(`covers/Wir drehen uns nicht allein.png`),file:R(`Wir.drehen.uns.nicht.allein.mp3`),isSingle:!1},{id:85,title:`Dein Platz bleibt leer im warmen Licht`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:L(`covers/Körnchenkreis.png`),albumTrackNumber:2,duration:`04:19`,releaseDate:`2026-06-21`,cover:L(`covers/Dein Platz bleibt leer im warmen Licht.png`),file:R(`Dein.Platz.bleibt.leer.im.warmen.Licht.mp3`),isSingle:!1},{id:86,title:`Das Laufrad des Grauens`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:L(`covers/Körnchenkreis.png`),albumTrackNumber:3,duration:`04:27`,releaseDate:`2026-06-21`,cover:L(`covers/Das Laufrad des Grauens.png`),file:R(`Das.Laufrad.des.Grauens.mp3`),isSingle:!1},{id:87,title:`Körnchenkreis Finale`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:L(`covers/Körnchenkreis.png`),albumTrackNumber:4,duration:`04:13`,releaseDate:`2026-06-21`,cover:L(`covers/Körnchenkreis Finale.png`),file:R(`Kornchenkreis.Finale.mp3`),isSingle:!1},{id:88,title:`Brüggetag mit Parkfan95`,artist:`Erdbeerenfresser;Motte`,duration:`04:30`,releaseDate:`2026-06-22`,cover:L(`covers/Brüggetag mit Parkfan95.png`),file:R(`Bruggetag.mit.Parkfan95.mp3`),isSingle:!0},{id:89,title:`Motte Sell Out Stream`,artist:`Erdbeerenfresser`,duration:`06:14`,releaseDate:`2026-06-26`,cover:L(`covers/Motte Sell Out Stream.PNG`),file:R(`Motte.Sell.Out.Stream.mp3`),isSingle:!0},{id:90,title:`Neo City Radio – Royal Frequencies`,artist:`Motte`,duration:`04:08`,releaseDate:`2026-06-28`,cover:L(`covers/Neo City Radio – Royal Frequencies.png`),file:R(`Neo.City.Radio.Royal.Frequencies.mp3`),isSingle:!0},{id:91,title:`BAN.exe`,artist:`Motte`,duration:`03:24`,releaseDate:`2026-06-23`,cover:L(`covers/BAN.exe.png`),file:R(`BAN.exe.mp3`),isSingle:!0},{id:92,title:`Die große Knoblauchexplosion`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-06-27`,cover:L(`covers/Die große Knoblauchexplosion.png`),file:R(`Die.grosse.Knoblauchexplosion.mp3`),isSingle:!0},{id:93,title:`VIP TRIP`,artist:`Motte`,duration:`03:43`,releaseDate:`2026-06-30`,cover:L(`covers/VIP TRIP.png`),file:R(`VIP.TRIP.mp3`),isSingle:!0},{id:`phonk1`,type:`cover`,sourceSongId:2,title:`Skateboard Chemistry Phonk`,artist:`Neo City Phonk`,duration:`03:16`,releaseDate:`2026-06-30`,cover:L(`covers/Skateboard Chemistry Phonk.png`),file:R(`Skateboard.Chemistry.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Skateboard Chemistry`},{id:`phonk2`,type:`cover`,sourceSongId:70,title:`Der Unfall Phonk`,artist:`Neo City Phonk`,duration:`03:54`,releaseDate:`2026-06-30`,cover:L(`covers/Der Unfall Phonk.png`),file:R(`Der.Unfall.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Der Unfall`},{id:`phonk3`,type:`cover`,sourceSongId:4,title:`Competitive Phonk`,artist:`Neo City Phonk`,duration:`02:24`,releaseDate:`2026-06-30`,cover:L(`covers/Competitive Phonk.png`),file:R(`Competitive.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Competitive Advantage`},{id:`phonk4`,type:`cover`,sourceSongId:44,title:`Mr. Phonkmaker Land`,artist:`Neo City Phonk`,duration:`03:09`,releaseDate:`2026-06-30`,cover:L(`covers/Mr. Phonkmaker Land.png`),file:R(`Mr.Phonkmaker.Land.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Mr. Moneymaker Land`},{id:`phonk5`,type:`cover`,sourceSongId:14,title:`Phonk Zwei Stunden`,artist:`Neo City Phonk`,duration:`03:24`,releaseDate:`2026-06-30`,cover:L(`covers/Phonk Zwei Stunden.png`),file:R(`Phonk.Zwei.Stunden.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Rückfahrt Zwei Stunden`},{id:`phonk6`,type:`cover`,sourceSongId:30,title:`MR MONEYMÄKER – HEUDE ISS DEIN PHONK`,artist:`Neo City Phonk`,duration:`03:57`,releaseDate:`2026-06-30`,cover:L(`covers/MR MONEYMÄKER – HEUDE ISS DEIN PHONK.png`),file:R(`MR.MONEYMAKER.HEUDE.ISS.DEIN.PHONK.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`},{id:`phonk7`,type:`cover`,sourceSongId:83,title:`Uf de Bärge wird gphonkd`,artist:`Neo City Phonk`,duration:`03:17`,releaseDate:`2026-06-30`,cover:L(`covers/Uf de Bärge wird gphonkd.png`),file:R(`Uf.de.Barge.wird.gphonkd.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Uf de Bärge wird gfiiret`},{id:`phonk8`,type:`cover`,sourceSongId:22,title:`Erdbeerenphonker`,artist:`Neo City Phonk`,duration:`02:14`,releaseDate:`2026-06-30`,cover:L(`covers/Erdbeerenphonker.png`),file:R(`Erdbeerenphonker.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Erdbeerenfresser`},{id:94,title:`Mr. Gyrosmaker`,artist:`Erdbeerenfresser;Motte`,duration:`03:59`,releaseDate:`2026-07-02`,cover:L(`covers/Mr. Gyrosmaker.png`),file:R(`Mr.Gyrosmaker.mp3`),isSingle:!0},{id:`phonk9`,type:`cover`,sourceSongId:94,title:`Mr. Gyrosphonker`,artist:`Neo City Phonk`,duration:`04:09`,releaseDate:`2026-07-02`,cover:L(`covers/Mr Gyrosphonker.png`),file:R(`Mr.Gyrosphonker.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Mr. Gyrosmaker`},{id:`BD1`,title:`Midnight Login`,artist:`BerryDeadly`,duration:`02:57`,releaseDate:`2099-05-21`,cover:L(`covers/Midnight Login.png`),file:R(`Midnight.Login.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD2`,title:`Strawberry Nights`,artist:`BerryDeadly`,duration:`04:12`,releaseDate:`2099-05-21`,cover:L(`covers/Strawberry Nights.png`),file:R(`Strawberry.Nights.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD3`,title:`Main Character`,artist:`BerryDeadly`,duration:`03:12`,releaseDate:`2099-05-21`,cover:L(`covers/Main Character.png`),file:R(`Main.Character.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD4`,title:`After 3AM`,artist:`BerryDeadly`,duration:`03:54`,releaseDate:`2099-05-21`,cover:L(`covers/After 3AM.png`),file:R(`After.3AM.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD5`,title:`Coffee Overload`,artist:`BerryDeadly`,duration:`03:30`,releaseDate:`2099-05-21`,cover:L(`covers/Coffee Overload.png`),file:R(`Coffee.Overload.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD6`,title:`404 <3`,artist:`BerryDeadly`,duration:`03:17`,releaseDate:`2099-05-21`,cover:L(`covers/404 _3.png`),file:R(`404._3.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD7`,title:`SECRET CODE`,artist:`BerryDeadly`,duration:`03:24`,releaseDate:`2099-05-21`,cover:L(`covers/SECRET CODE.png`),file:R(`SECRET.CODE.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD8`,title:`LOW BATTERY`,artist:`BerryDeadly`,duration:`02:33`,releaseDate:`2099-05-21`,cover:L(`covers/LOW BATTERY.png`),file:R(`LOW.BATTERY.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD9`,title:`LEVEL UP`,artist:`BerryDeadly`,duration:`03:41`,releaseDate:`2099-05-21`,cover:L(`covers/LEVEL UP.png`),file:R(`LEVEL.UP.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD10`,title:`NO SIGNAL`,artist:`BerryDeadly`,duration:`03:45`,releaseDate:`2099-05-21`,cover:L(`covers/NO SIGNAL.png`),file:R(`NO.SIGNAL.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD11`,title:`RELOAD`,artist:`BerryDeadly`,duration:`06:03`,releaseDate:`2099-05-21`,cover:L(`covers/RELOAD.png`),file:R(`RELOAD.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:L(`covers/BD.png`)},{id:`BD12`,title:`Bring me back to Neo City`,artist:`BerryDeadly`,duration:`03:47`,releaseDate:`2099-05-30`,cover:L(`covers/Bring me back to Neo City.png`),file:R(`Bring.me.back.to.Neo.City.mp3`),isSingle:!0,hidden:!0,hiddenTag:`berrydeadly`},{id:`BD0`,title:`Erdbeere-Lied Platzhalter`,artist:`Erdbeerenfresser`,duration:`02:29`,releaseDate:`2026-05-18`,cover:L(`covers/Erdbeere-Lied Platzhalter.png`),file:R(`Erdbeere-Lied.Platzhalter.mp3`),isSingle:!0,hidden:!0,hiddenTag:`berrydeadly`},{id:`MCB1`,title:`Unter Neo City`,artist:`MC BERRY`,duration:`03:38`,releaseDate:`2099-06-30`,cover:L(`covers/Unter Neo City.png`),file:R(`Unter.Neo.City.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB2`,title:`Schwarze Maske`,artist:`MC BERRY`,duration:`02:51`,releaseDate:`2099-06-30`,cover:L(`covers/Schwarze Maske.png`),file:R(`Schwarze.Maske.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB3`,title:`Berry macht Ansagen`,artist:`MC BERRY`,duration:`03:28`,releaseDate:`2099-06-30`,cover:L(`covers/Berry macht Ansagen.png`),file:R(`Berry.macht.Ansagen.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB4`,title:`808 Unterwelt`,artist:`MC BERRY`,duration:`03:04`,releaseDate:`2099-06-30`,cover:L(`covers/808 Unterwelt.png`),file:R(`808.Unterwelt.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB5`,title:`Neon-Gold`,artist:`MC BERRY`,duration:`03:24`,releaseDate:`2099-06-30`,cover:L(`covers/Neon-Gold.png`),file:R(`Neon-Gold.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB6`,title:`Kein Licht ohne Schatten`,artist:`MC BERRY`,duration:`03:59`,releaseDate:`2099-06-30`,cover:L(`covers/Kein Licht ohne Schatten.png`),file:R(`Kein.Licht.ohne.Schatten.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB7`,title:`Straßen zahlen Miete`,artist:`MC BERRY`,duration:`03:42`,releaseDate:`2099-06-30`,cover:L(`covers/Straßen zahlen Miete.png`),file:R(`Strassen.zahlen.Miete.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB8`,title:`Kein Zauber im Block`,artist:`MC BERRY`,duration:`03:45`,releaseDate:`2099-06-30`,cover:L(`covers/Kein Zauber im Block.png`),file:R(`Kein.Zauber.im.Block.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB9`,title:`Nachtclub 03:00`,artist:`MC BERRY`,duration:`04:02`,releaseDate:`2099-06-30`,cover:L(`covers/Nachtclub 03_00.png`),file:R(`Nachtclub.03_00.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB10`,title:`Rote Krone`,artist:`MC BERRY`,duration:`04:12`,releaseDate:`2099-06-30`,cover:L(`covers/Rote Krone.png`),file:R(`Rote.Krone.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB11`,title:`König der Unterwelt`,artist:`MC BERRY`,duration:`02:39`,releaseDate:`2099-06-30`,cover:L(`covers/König der Unterwelt.png`),file:R(`Konig.der.Unterwelt.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:L(`covers/MC Berry - König der Unterwelt.png`)}],tr=[{version:`1.5.1`,label:`2026-07-01`,changes:[`🎧 Empfohlene Playlists eingeführt`,`→ Neo City kann jetzt eigene Playlists bereitstellen, die automatisch für alle Nutzer verfügbar sind`,`🌃 Neue Playlist-Kategorie vorbereitet`,`→ Bestimmte Playlists erscheinen direkt in der Bibliothek, ohne dass sie manuell erstellt oder importiert werden müssen`,`📌 Feste System-Playlists ergänzt`,`→ Ausgewählte Playlists bleiben dauerhaft verfügbar und können nicht versehentlich gelöscht werden`,`🎵 Besondere Songauswahl pro Playlist möglich`,`→ Playlists können jetzt auch Titel enthalten, die nicht in der normalen Songs-Übersicht auftauchen`,`🕵️ Versteckte Playlist-Inhalte vorbereitet`,`→ Nicht jeder Song muss direkt sichtbar sein, um Teil einer besonderen Sammlung zu werden`,`🖼️ Eigene Playlist-Cover hinzugefügt`,`→ Empfohlene Playlists können jetzt eigene Cover verwenden, statt nur aus Songcovern zusammengesetzt zu werden`,`🔗 Playlist-System erweitert`,`→ Automatische Playlists werden mit bestehenden Nutzer-Playlists zusammengeführt, ohne persönliche Sammlungen zu überschreiben`,`📻 Radio-Trennung beibehalten`,`→ Spezielle Playlist-Titel bleiben vom normalen Radioprogramm getrennt und sind für zukünftige eigene Formate vorbereitet`,`✨ Neo City empfiehlt jetzt selbst`,`→ Manche Playlists könnten mehr enthalten, als man auf den ersten Blick erwartet`]},{version:`1.5.0`,label:`2026-06-17`,changes:`🎤 Artist Pages eingeführt(→ Künstlernamen sind jetzt anklickbar und öffnen eigene Artist-Seiten mit Bio, Profilbild, Songs und Releases(👤 Neue Artist-Übersichten(→ Artist Pages zeigen jetzt Songanzahl, Releaseanzahl, erste Songs, neueste Songs und eine vollständige Songliste des jeweiligen Artists(🔗 Artist-Verlinkungen verbessert(→ Artist-Links wurden optisch und technisch überarbeitet und lassen sich jetzt deutlich angenehmer anklicken(🖱️ Größere Artist-Hitboxen(→ Klickbereiche und Hover-Effekte der Artist-Namen wurden stabilisiert, damit Artist Pages zuverlässiger erreichbar sind(🎵 Extra-Songs in Artist Pages integriert(→ Extra-Songs erscheinen nicht mehr in der normalen Songs-Übersicht, können aber weiterhin passenden Artist Pages zugeordnet werden(💸 Mr. Moneymaker Artist Page repariert(→ Artists mit reinen Extra-Songs werden jetzt korrekt im Artist-System angezeigt(📻 Neo City Radio 2 vorbereitet(→ Zweiter Radio-Kanal für Stream-Nutzung mit eigener Songauswahl und eigener Senderlogik eingeführt(📡 Mehrsender-Radio-Logik eingeführt(→ Radio-Position, Live-Sync, Next-Song-Anzeige und Steuerung funktionieren jetzt abhängig vom aktiven Sender(🎧 Stream-sichere Radio-Version(→ Neo City Radio 2 verzichtet vorerst bewusst auf Extra-Songs, Interviews und Album-Premieren(📢 Eigene Werbelogik für Neo City Radio 2(→ Der zweite Sender kann eigene Werbeblöcke verwenden und später unabhängig erweitert werden(🌙 Timed Jingles erweitert(→ Jingles können jetzt senderabhängige Titel und Artist-Anzeigen übernehmen(🛠️ Songs-Übersicht bereinigt(→ Extra-Songs wurden aus der normalen Songs-Seite entfernt, damit dort nur reguläre Songs angezeigt werden(🔧 Interne Datenquellen getrennt(→ Normale Songs, Extra-Songs, Artist Pages und Radio-Sender werden jetzt sauberer voneinander getrennt(✨ Version 1.5 ist live(→ Königliche AI Songs wächst weiter: mehr Artists, mehr Radio, mehr System im Chaos`.split(`(`)},{version:`1.4.3`,label:`2026-06-11`,changes:[`🌙 Late Night Radio vollständig überarbeitet`,`→ Jingles werden nicht mehr beim Erstellen des Radioplans festgelegt, sondern erst anhand der tatsächlichen Startzeit aufgelöst`,`📻 Neue zeitbasierte Jingle-Logik`,`→ Late-Night- und Standard-Jingles wechseln jetzt automatisch abhängig von der echten Uhrzeit`,`🛠️ Radioplanung stabilisiert`,`→ Nachtjingles können nicht mehr versehentlich tagsüber ausgestrahlt werden`,`🎙️ Album-Premieren eingeführt`,`→ Neo City Radio kann jetzt vollständige Album-Premieren zu festgelegten Zeitpunkten ausstrahlen`,`⏰ Zeitgesteuerte Sonderübertragungen`,`→ Premieren starten automatisch zum festgelegten Veröffentlichungszeitpunkt`,`🎧 Live-Premieren vollständig integriert`,`→ Album-Premieren laufen als eigenes Radioprogramm und kehren anschließend automatisch ins reguläre Programm zurück`,`📡 Erweiterte Radio-Timeline`,`→ Das Radioprogramm kann jetzt zeitlich begrenzte Spezialsendungen verarbeiten`,`💿 Album Generator eingeführt`,`→ Verstecktes Tool zur Erstellung neuer Alben direkt innerhalb der Website`,`📝 Automatische Code-Generierung`,`→ Songs.js- und Texte.js-Einträge können jetzt automatisch erzeugt werden`,`🎵 Dynamische Track-Erstellung`,`→ Alben mit frei wählbarer Trackanzahl können direkt vorbereitet werden`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radiologik, Premieren-Systemen und Entwicklungswerkzeugen`,`✨ Weitere Frequenzen werden bereits vorbereitet`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.2`,label:`2026-05-31`,changes:[`🌙 Late Night Radio eingeführt`,`→ Neo City Radio nutzt nachts ein eigenes Atmosphärenprogramm`,`📻 Dynamische Radioatmosphäre`,`→ Bestimmte Radioeinspieler werden nun abhängig von der Sendezeit automatisch ausgetauscht`,`🎤 Neue Sonderübertragungen verfügbar`,`→ Das Radioprogramm wurde um zusätzliche Moderations- und Informationssegmente erweitert`,`🎧 Extra Songs vollständig integriert`,`→ Ausgewählte Cover und Mashups werden nun direkt im Radioprogramm ausgestrahlt`,`📡 Radio Exclusives hinzugefügt`,`→ Eingereichte Titel können jetzt exklusiv über Neo City Radio ausgestrahlt werden`,`🎙️ Neue Programmansagen verfügbar`,`→ Eigene Einspieler begleiten Sonderprogramme und die Rückkehr zum regulären Sendebetrieb`,`⏭️ Erweiterte Radiologik`,`→ Sonderblöcke werden automatisch in den laufenden Sendeplan integriert`,`🌃 Neo City wird lebendiger`,`→ Das Radioprogramm verändert sich nun stärker abhängig von Inhalt und Tageszeit`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radioplanung, Sonderinhalten und Hintergrundsystemen`,`✨ Weitere Frequenzen werden bereits vorbereitet`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.1`,label:`2026-05-30`,changes:[`📻 Neo City Radio wächst weiter`,`→ Das Radioprogramm wurde um neue Inhalte erweitert`,`📢 Neue Werbespots verfügbar`,`→ Vier zusätzliche Werbespots wurden integriert`,`🎙️ Erweiterte Radioübertragungen`,`→ Das Programm umfasst jetzt insgesamt zwölf Werbespots`,`📡 Neue Live-Informationen`,`→ Neo City Radio zeigt jetzt den aktuell laufenden Titel an`,`⏭️ Neue Vorschau verfügbar`,`→ Der nächste kommende Song wird nun direkt angezeigt`,`🌃 Überarbeitete Startseiten-Informationen`,`→ Die Neo City Radio Infobox wurde aktualisiert`,`🎧 Verbesserte Radioerfahrung`,`→ Wichtige Informationen sind nun direkt auf der Startseite sichtbar`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radiologik, Anzeige und Hintergrundsystemen`,`✨ Weitere Übertragungen laufen bereits`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.0`,label:`2026-05-29`,changes:[`🌃 Neo City Comes Alive`,`→ Eine neue Frequenz erwacht in Neo City`,`🎧 Neues Langzeit-Erlebnis hinzugefügt`,`→ Eine neue Möglichkeit, Königliche AI Songs zu erleben`,`🎙️ Neue Audioelemente integriert`,`→ Zusätzliche Inhalte wurden im Hintergrund vorbereitet`,`🌙 Neue Übergänge und Atmosphären`,`→ Das Hörerlebnis wurde an mehreren Stellen erweitert`,`📢 Neue Einspieler verfügbar`,`→ Verschiedene neue Inhalte können nun im Laufe der Wiedergabe erscheinen`,`🎤 Erweiterte Hintergrundinhalte`,`→ Zusätzliche exklusive Inhalte wurden integriert`,`⏳ Event-Countdown hinzugefügt`,`→ Die Startseite zeigt jetzt den Countdown bis zum Erwachen von Neo City`,`🖥️ Neue Hintergrundsysteme`,`→ Vorbereitungen für zukünftige Inhalte und Ereignisse`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Wiedergabe, Planung und Hintergrundsystemen`,`❓ Weitere Übertragungen könnten folgen`,`→ Neo City hört niemals auf zu senden`]},{version:`1.3.1`,label:`2026-05-26`,changes:[`⏱️ Album-Spielzeiten hinzugefügt`,`→ Albumseiten zeigen jetzt die gesamte Laufzeit aller enthaltenen Tracks an`,`💿 Album-Header erweitert`,`→ Trackanzahl und Gesamtdauer werden jetzt gemeinsam im Header angezeigt`,`🎵 Dynamische Dauerberechnung implementiert`,`→ Spielzeiten werden automatisch aus den einzelnen Songdaten berechnet`,`🖥️ Albumansicht weiter verfeinert`,`→ Zusätzliche Informationen sind jetzt direkt über den Play- und Shuffle-Buttons sichtbar`,`🧠 Kleine interne Optimierungen`,`→ Dauerlogik zentralisiert und für zukünftige Features vorbereitet`]},{version:`1.3.0`,label:`2026-05-19 01:30`,changes:`🎭 Neuer 'Extra'-Bereich eingeführt(→ Monatlich ausgewählte Cover und Mashups erhalten jetzt einen eigenen Bereich innerhalb der Bibliothek(🧩 Cover- und Mashup-System vollständig integriert(→ Nutzer können jetzt direkt über die Webseite Cover- und Mashup-Anfragen erstellen(📝 Mehrstufige Anfrage-Dialoge hinzugefügt(→ Schritt-für-Schritt-System für Song-Auswahl, Stil-Prompts und automatische Anfrage-Texte(🎵 Dynamische Song-Auswahl implementiert(→ Dropdowns greifen jetzt direkt auf die bestehende Songbibliothek zu(🕵️ Versteckte Songs werden automatisch herausgefiltert(→ Geheime Inhalte erscheinen nicht mehr in öffentlichen Anfrage-Systemen(📋 Automatische Textgenerierung für Google-Formulare(→ Anfrage-Texte für Cover und Mashups werden jetzt automatisch vorbereitet(🎚️ Neues Extra-Datensystem eingeführt(→ Covers und Mashups können jetzt separat über extras.js verwaltet werden(🎤 Lyrics-System erweitert(→ Covers unterstützen jetzt automatische Lyrics-Weiterleitung über lyricsKey(🔗 'Original anzeigen'-Funktion hinzugefügt(→ Covers und Mashups können jetzt direkt ihre Ursprungssongs anzeigen(🪄 Mashup-Originalsystem erweitert(→ Mashups öffnen jetzt ein Auswahlfenster für mehrere Originalsongs(📦 Extra-Titel vollständig mit Playlist-System kompatibel gemacht(→ Covers und Mashups können jetzt wie normale Songs gespeichert werden(🖥️ Dropdown-Menüs visuell komplett überarbeitet(→ Einheitliches Styling, bessere Hover-Effekte und saubere Button-Struktur(📱 Zusätzliche Spacer-Logik für Dropdowns eingebaut(→ Menüs werden nicht mehr vom unteren Player abgeschnitten(✨ Extra-Seite optisch erweitert(→ Neues Hinweis-System und verbesserte Empty-State-Darstellung(🧠 Diverse interne Verbesserungen und Strukturvorbereitungen(→ Grundlage für zukünftige Community-Features und Extra-Releases geschaffen`.split(`(`)},{version:`1.2.2`,label:`2026-04-20 20:00`,changes:[`🔀 Shuffle für Playlists hinzugefügt`,`→ Zufällige Wiedergabe jetzt auch für deine eigenen Sammlungen verfügbar`,`❄️ Ein Hauch von Kälte liegt in der Bibliothek…`,`→ Manche Songs zeigen sich nur denen, die wissen, wann es Winter wird`,`🗝️ Neue verborgene Inhalte im System verteilt`,`→ Nicht alles ist sichtbar… manchmal muss man genauer hinschauen um unseren Platz zu finden`,`🧠 Kleine Verbesserungen an Navigation & Player-Logik`,`→ Weiter-Button arbeitet jetzt zuverlässiger im Hintergrund`]},{version:`1.2.1`,label:`2026-04-20 12:00`,changes:[`Ein weiterer Zugang wurde implementiert – nicht jeder wird ihn finden`,`Einige Inhalte reagieren jetzt anders auf bestimmte Interaktionen`,`Neue Zustände wurden ergänzt, bleiben aber im Verborgenen`,`Die Bibliothek kennt mehr als sie zeigt`,`Ein Pfad öffnet sich nur für diejenigen, die wissen, was sie tun`,`Import- und Wiedergabesystem im Hintergrund erweitert`,`Grundlagen für zukünftige versteckte Inhalte geschaffen`,`Kleinere Verbesserungen an Stabilität und interner Logik`]},{version:`1.2.0`,label:`2026-04-16 20:37`,changes:[`Playlist-System vollständig überarbeitet und erweitert`,`Songs können jetzt mehrfach in Playlists und Warteschlange hinzugefügt werden (keine Limitierung mehr)`,`Entfernen aus Playlist löscht jetzt nur noch eine Instanz statt alle gleichen Songs`,`Playlist-Übersicht mit dynamischer Cover-Collage (bis zu 4 Cover + '+X' Anzeige)`,`Playlist-Detailseite überarbeitet und besser strukturiert`,`Playlist-Menü erweitert: 'Aus Playlist entfernen' jetzt direkt im 3-Punkte-Menü integriert`,`Playlist-UI für Mobile deutlich verbessert (Layout, Buttons, Handling)`,`Playlist-Änderungen werden sofort live aktualisiert (kein Neuladen mehr nötig)`,`Import/Export-System für Playlists stabilisiert und verbessert`,`SongRow-System erweitert (Playlist-Kontext integriert für bessere Funktionalität)`,`Queue-System verbessert: Drag & Drop bleibt kompatibel mit doppelten Songs`,`React-Key-System angepasst, um doppelte Songs korrekt darzustellen`,`Allgemeine Stabilitäts- und UI-Fixes im Playlist-Bereich`]},{version:`1.1.0`,label:`2026-04-15 23:50`,changes:[`Fullscreen-Player eingeführt (Spotify-ähnlicher Modus mit großem Cover und dynamischem Hintergrund)`,`Animierter Songwechsel im Fullscreen (Slide- und Fade-Übergang)`,`Fullscreen-Controls blenden sich automatisch bei Inaktivität aus und bei Bewegung wieder ein`,`Eigener Player im Fullscreen integriert (Play, Skip, Repeat, Progress, Volume)`,`Liedtext-System erweitert: Lyrics jetzt auch im Fullscreen verfügbar`,`Lyrics aktualisieren sich automatisch beim Songwechsel (auch außerhalb des Fullscreens)`,`Separate Steuerung für Lyrics im normalen Player und im Fullscreen`,`Mobile UI komplett überarbeitet (Floating Player, bessere Abstände, saubere Touch-Bedienung)`,`Album-Header und Songlisten vollständig responsive gemacht`,`Progress-Bar visuell und technisch überarbeitet (bessere Synchronisation mit Slider)`,`Überlappungsfehler zwischen Progress-Bar und Zeitanzeige behoben`,`Player-Layout optimiert (Spacing, Alignment und Lesbarkeit verbessert)`,`Lautstärkeregler weiter verbessert (visuelles Feedback und Positionierung)`,`Stabilitätsverbesserungen im Playback-System (Queue, History und Repeat Verhalten optimiert)`]},{version:`1.0.3`,label:`2026-04-15 01:05`,changes:[`Song-Einreichungsformular integriert (Google Forms Anbindung)`,`Neuer Menüpunkt 'Song einreichen' im Drawer hinzugefügt`,`Popup-System für externe Aktionen erweitert (inkl. Overlay und Close-Funktion)`,`Saubere Weiterleitung zum Formular in neuem Tab implementiert`,`UI für Community-Interaktionen vorbereitet und erweitert`,`Grundlage für zukünftige Moderation / Song-Review-System geschaffen`]},{version:`1.0.2`,label:`2026-04-14 19:40`,changes:[`Repeat-System eingeführt (Off / Repeat All / Repeat One)`,`Repeat One (R1) sorgt dafür, dass der aktuelle Track dauerhaft geloopt wird`,`Repeat All (R) wiederholt die gesamte aktuelle Hör-Session (History + Queue)`,`History-System vollständig implementiert (Zurückspringen zu vorherigen Tracks möglich)`,`Vorher-/Zurück-Button nutzt jetzt echte Track-History statt nur Neustart`,`Weiter-Button und Tastatursteuerung funktionieren jetzt auch am Ende der Queue bei aktivem Repeat`,`Neue Wiedergaben (z. B. einzelner Song oder Albumstart) setzen History korrekt zurück`,`Verbesserte Player-Logik für konsistentes Verhalten zwischen Queue, History und Repeat`]},{version:`1.0.1`,label:`2026-04-14 00:05`,changes:[`Lautstärkeregler überarbeitet und visuell dynamisch gemacht (gefüllter Bereich = grün, Rest = grau)`,`Mute-/Unmute-Funktion über Lautsprecher-Icon hinzugefügt (merkt sich letzte Lautstärke)`,`Media Session API integriert (Metadaten werden im System angezeigt)`,`Playersteuerung über Tastatur möglich (Play/Pause, Weiter, Zurück)`,`Liedtext-System eingeführt und in externe Datei (Texte.js) ausgelagert`,`Lyrics-Popup im Player eingebaut (inkl. Overlay und Close-Funktion)`,`Lyrics-UI verbessert und Titel im Popup zentriert`,`Player-Architektur für zukünftige Features erweitert`]},{version:`1.0.0`,label:`2026-04-13 20:25`,changes:[`Die erste Vollversion ist draußen. Jetzt mit allen aktuellen AI-Songs die es zum heutigem Stand gibt`,`Volume-Regler wurde eingeführt`,`Texte wurden da wo möglich hinzugefügt`,`Viel Spaß mit den Königlichen AI Songs. VG Erdbeere`]},{version:`0.8.1`,label:`2026-04-12 15:00`,changes:[`Patchnotes-System eingeführt`,`Song-System eingeführt`]},{version:`0.8.0`,label:`2026-04-12 13:00`,changes:[`Custom Player mit eigener Progressbar eingebaut`,`Play- und Pause-Logik im Player überarbeitet`,`Queue-System hinzugefügt`,`Drag & Drop für die Warteschlange eingebaut`,`Warteschlange direkt im Menü integriert`,`Queue-Löschen-Funktion ergänzt`,`Songlisten so umgebaut, dass ganze Zeilen abspielbar sind`,`Album-Klick in der Songliste führt direkt zur Albumseite`,`Album Play und Shuffle eingebaut`,`Songs-Ansicht mit Play- und Shuffle-Buttons ergänzt`,`Startseite mit Hero-Bereich aufgebaut`,`Bereiche für Neueste Releases und Aktuelle Alben ergänzt`,`Hover-Effekte auf Releases, Alben und Songzeilen eingebaut`,`Impressum-Seite hinzugefügt`,`Patchnotes-Seite hinzugefügt`,`Klick auf „Königliche AI Songs“ führt zurück zur Startseite`]}],nr={"Erdbeere-Lied Platzhalter":`[Intro]
Hey~
Annyeong~
Erdbeere time~

[Strophe 1]
Dieses Lied hat keinen Inhalt
Trotzdem klingt es viel zu groß
Eigentlich war das nur ein Platzhalter
Doch jetzt tanzt plötzlich jeder dazu

Irgendwer macht schon Choreografie
Obwohl niemand den Song versteht
Und mitten in der Nacht heißt es:
„Okay… das ist irgendwie fire.“

[Pre-Refrain]
Vielleicht macht das keinen Sinn
Doch vielleicht muss es das auch gar nicht
Saranghae~
Keine Ahnung warum

[Refrain]
Erdbeere-Lied Platzhalter~
Oh oh oh~
Komplett unnötig
Aber irgendwie iconic~

Erdbeere-Lied Platzhalter~
Gaja gaja hey~
Niemand weiß worum es geht
Doch alle singen trotzdem mit

[Strophe 2]
Glitzer überall im Studio
Irgendwer schreit „one more take“
Und aus einem komplett dummen Joke
Wird plötzlich ein großes Comeback

Vielleicht fehlt hier noch Bedeutung
Vielleicht fehlt hier auch Verstand
Doch dafür gibt es Laserlichter
Und random koreanische Words~

[Rap-Part]
Okay wait—
왜 이렇게 serious?
Dieses Lied war nie der Plan
Jetzt hat es plötzlich Lasershows
Und ein unnötig großes Intro dran

Erdbeere sitzt im Studio
Um drei Uhr nachts mit Energy Drink
Sagt:
„Bro das wird nur ein Platzhalter“
Fünf Minuten später klingt’s nach Hit

Alle machen viel zu viel daraus
Doch genau das ist der ganze Punkt
Null Bedeutung—
Aber maximaler Sound
Und irgendeiner ruft:
„Das muss sofort auf die Website, Jungs!“

Gaja—
Bass wird laut
Lichter blinken durch den Raum
Niemand weiß warum wir hier sind
Doch alle drehen komplett auf


[Bridge]
Dieses Lied…
Existiert nur…

Damit hier…
Ein Lied existiert.

Annyeong~
Placeholder energy~

[Finaler Refrain]
Erdbeere-Lied Platzhalter~
Oh oh oh~
Viel zu emotional
Für absolut gar keinen Grund~

Erdbeere-Lied Platzhalter~
Hey hey hey~
Und irgendwo entsteht bestimmt
Schon der nächste dumme Song~`,"Midnight Login":`[Intro]
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

“Neo City never dies.”`,"Unter Neo City":`[Intro – Spoken / Cinematic]
Regen fällt auf Neonlicht
Neo City schläft nicht
Unter jeder Straße
liegt noch eine Stadt

Und wenn die Lichter flackern
weiß jeder, wer kommt

MC Berry

[Verse 1]
Ich komm von unten, da wo keiner Namen nennt
wo man nicht fragt, sondern schweigt, wenn man Stimmen kennt
schwarze Maske, schwarze Jacke, roter Stein am Chain
jeder Schritt von mir klingt wie ein Urteil im Rain

Neo City glänzt, doch der Boden bleibt kalt
oben tanzen sie im Licht, unten zählt Gewalt
ich hab nie laut gebrüllt, doch sie hören mein Wort
denn mein Schatten hängt schon längst an jedem Ort

Gold an der Brust, Erdbeer-Rot in der Nacht
keine Krone gekauft, Bro, die wurde gemacht
jeder Beat zahlt Miete, jede Straße kennt Flow
wenn ich durch die Gassen lauf, wird die Skyline slow

[Pre-Hook]
Keine Sirene warnt dich
kein Schild zeigt den Weg
doch jeder weiß, wo mein Thron steht
tief unter dem Asphalt, wo die Wahrheit lebt

[Hook]
Unter Neo City, da regiert mein Name
schwarze Maske, rote Krone, goldene Kette
Unter Neo City, wo der Bass mich trägt
wenn die Welt oben tanzt, wird hier unten gezählt

Unter Neo City, ja, der Schatten ist wach
ich kam nicht für Applaus, ich kam nur für die Macht
Unter Neo City, hör die 808 zieh’n
MC Berry im Rauch, König tief im Neon-Grün

[Verse 2]
Sie reden von Charts, ich rede von Revier
sie wollen den Glanz, doch der Glanz kommt von mir
jeder Club in der Stadt spielt meinen Namen im Code
und der DJ senkt den Blick, wenn mein Signal rot

Berry am Hals, aber Herz bleibt Stein
zu viele wollten groß sein, jetzt sind sie klein
ich muss nicht drohen, ich muss nur da sein
ein Blick durch die Shades und der Raum friert ein

Limousine schwarz, Reifen nass vom Beton
Bodyguards schweigen, doch sie kennen den Ton
ich bin kein Märchen, keine Show, kein Trick
ich bin der Grund, warum Neo City nickt

[Bridge – Slower / Dark]
Unter den Straßen
unter dem Licht
unter den Lügen
wartet mein Gericht

Sie nennen es Schatten
ich nenn es mein Reich
wenn der Bass einmal fällt
wird die ganze Stadt weich

[Final Hook]
Unter Neo City, da regiert mein Name
schwarze Maske, rote Krone, goldene Kette
Unter Neo City, wo der Bass mich trägt
wenn die Welt oben tanzt, wird hier unten gezählt

Unter Neo City, ja, der Schatten ist wach
ich kam nicht für Applaus, ich kam nur für die Macht
Unter Neo City, hör die 808 zieh’n
MC Berry im Rauch, König tief im Neon-Grün

[Outro – Spoken]
Oben gehört euch das Licht
unten gehört mir die Stadt

MC Berry
König der Unterwelt`,"Schwarze Maske":`[Intro]
Yeah
MC Berry
Neo City
Maske sitzt

[Hook]
Schwarze Maske, rote Steine an der Chain
ich komm aus dem Schatten, doch sie kennen meinen Name
Schwarze Maske, Krone tief im Neonlicht
wenn ich durch die Straßen geh, dann reden sie nicht

Schwarze Maske, Berry hängt in Gold
alle wollen den Thron, doch der Thron bleibt cold
Schwarze Maske, 808 im Block
Neo City bebt, wenn mein Bass wieder droppt

[Verse 1]
Ich lauf nachts durch die Gassen, Regen tropft auf Leder
kein Gesicht in den Akten, doch sie kennen jeden Fehler
meine Schritte sind leise, aber schwer wie Beton
wenn ich einmal auftauch, geht der Club in Position

Erdbeer-Anhänger glänzt, doch der Blick bleibt leer
zu viel Gold auf der Brust, doch mein Herz wiegt mehr
ich hab nie viel gesagt, doch mein Schweigen war laut
und wer meinen Namen flüstert, schaut dabei auf den Boden drauf

Neo City schläft nie, doch sie träumt von mir
oben flackern Reklamen, unten regiert mein Revier
kein Vertrag, kein Gesetz, nur ein Handschlag im Rauch
und der DJ spielt leiser, wenn ich die Treppe runterlauf

[Pre-Hook]
Maske vor dem Mund, doch mein Name bleibt klar
alle wollen wissen, wer ich wirklich war
doch die Nacht hält dicht und der Asphalt erzählt
dass hier unten nur zählt, wer die Krone noch hält

[Hook]
Schwarze Maske, rote Steine an der Chain
ich komm aus dem Schatten, doch sie kennen meinen Name
Schwarze Maske, Krone tief im Neonlicht
wenn ich durch die Straßen geh, dann reden sie nicht

Schwarze Maske, Berry hängt in Gold
alle wollen den Thron, doch der Thron bleibt cold
Schwarze Maske, 808 im Block
Neo City bebt, wenn mein Bass wieder droppt

[Verse 2]
Sie fragen: „Wer ist Berry?“
Ich sag: „Frag lieber nicht.“
denn wer zu viel sucht, findet Schatten im Licht
schwarzer Mantel, rote Krone, meine Crew bleibt still
ich beweg keine Finger, doch die ganze Stadt chillt

Nein, ich brauch keine Drohung, keine laute Gefahr
mein Ruf fährt voraus in ’nem schwarzen Jaguar
Fenster tief getönt, Innenraum wie ein Grab
doch aus jedem Speaker kommt mein Name in der Nacht

Ich bin kein Popstar, ich bin Druck auf der Brust
ich bin Neon im Nebel und ein Blick voll Verlust
sie wollen Hits für die Masse, ich will Kontrolle im Raum
und wenn der Beat einmal fällt, wacht die Unterwelt auf

[Bridge]
Kein Gesicht
nur ein Zeichen
keine Spur
nur mein Revier

Rote Frucht
schwarzes Leder
goldene Krone
alles gehört mir

[Final Hook]
Schwarze Maske, rote Steine an der Chain
ich komm aus dem Schatten, doch sie kennen meinen Name
Schwarze Maske, Krone tief im Neonlicht
wenn ich durch die Straßen geh, dann reden sie nicht

Schwarze Maske, Berry hängt in Gold
alle wollen den Thron, doch der Thron bleibt cold
Schwarze Maske, 808 im Block
Neo City bebt, wenn mein Bass wieder droppt

[Outro]
Maske bleibt oben
Blick bleibt kalt
MC Berry
Unterwelt zahlt`,"Berry macht Ansagen":`[Intro]
Yeah
MC Berry
Neo City hört zu
Maske oben
Krone sitzt

[Hook]
Berry macht Ansagen, alle werden still
wenn der Boss in den Raum kommt, fragt keiner mehr, was er will
Berry macht Ansagen, Unterwelt im Takt
808 auf den Straßen, bis der Asphalt kracht

Berry macht Ansagen, Gold hängt schwer am Hals
rote Steine an der Chain, schwarze Nacht wird kalt
Berry macht Ansagen, Neo City bebt
wenn mein Name durch die Gassen wie ein Warnsignal geht

[Verse 1]
Ich komm rein, keine Worte, nur der Bass sagt genug
dein Team macht auf König, doch mein Schatten ist Fluch
meine Maske bleibt schwarz, meine Krone bleibt echt
ich hab Straßen gebaut, wo ihr nur über sie sprecht

Erdbeer-Gold auf der Brust, roter Glanz in der Nacht
jeder Blick auf die Chain sagt, wer hier Regeln macht
ich hab nie um Respekt gebeten, ich hab ihn genommen
und seitdem sind die Lichter in den Blocks anders gekommen

Neo City mein Revier, jede Ecke mein Code
wenn ich einmal nicke, wird die ganze Straße rot
keine Bühne zu klein, keine Skyline zu groß
ich bin nicht nur auf Beats, ich bin Druck in deinem Schoß

[Pre-Hook]
Alle reden viel
doch keiner sagt es laut
wer hier wirklich herrscht
wenn der Nebel sich staut

Keine Show, kein Theater
kein gekaufter Applaus
ich mach eine Ansage
und der Club geht aus

[Hook]
Berry macht Ansagen, alle werden still
wenn der Boss in den Raum kommt, fragt keiner mehr, was er will
Berry macht Ansagen, Unterwelt im Takt
808 auf den Straßen, bis der Asphalt kracht

Berry macht Ansagen, Gold hängt schwer am Hals
rote Steine an der Chain, schwarze Nacht wird kalt
Berry macht Ansagen, Neo City bebt
wenn mein Name durch die Gassen wie ein Warnsignal geht

[Verse 2]
Sie wollen reden von Macht, doch sie kennen nur Glanz
ich hab Deals ohne Licht, ohne Namen, ohne Tanz
du hörst Schritte im Regen und weißt, es ist spät
wenn die Krone im Schatten durch den Nebel geht

Ich bin kein Held, Bro, ich bin Konsequenz
jeder falsche Blick kostet hier Präsenz
meine Jungs sagen nichts, doch der Raum versteht
dass man besser nicht fragt, wenn MC Berry geht

Deine Crew macht Lärm, meine Crew macht Druck
deine Lines sind bunt, meine Lines sind Schmuck
ich trag Erdbeeren aus Gold, doch mein Herz bleibt Eis
du willst wissen, wer regiert? Bro, du kennst den Preis

[Bridge – Dark / Spoken Flow]
Keine Magie
keine Tricks
keine Lichtershow

Nur Maske
Krone
Bass
und Kontrolle

Wenn Berry spricht
dann schweigt Neo City

[Final Hook]
Berry macht Ansagen, alle werden still
wenn der Boss in den Raum kommt, fragt keiner mehr, was er will
Berry macht Ansagen, Unterwelt im Takt
808 auf den Straßen, bis der Asphalt kracht

Berry macht Ansagen, Gold hängt schwer am Hals
rote Steine an der Chain, schwarze Nacht wird kalt
Berry macht Ansagen, Neo City bebt
wenn mein Name durch die Gassen wie ein Warnsignal geht

[Outro]
Ihr wolltet einen König
jetzt habt ihr ein Problem

MC Berry
Ansage Ende`,"808 Unterwelt":`[Intro]
Yeah
MC Berry
808
Unterwelt

Bass runter
Licht aus
Neo City
macht Platz

[Hook]
808 Unterwelt, Bass geht tief
keiner bleibt stehen, wenn der Boden sich biegt
keine Schwäche, kein Schmerz, keine Wunde, kein Fall
MC Berry im Club und die Nacht wird Metall

808 Unterwelt, Druck in der Wand
schwarze Maske, roter Stein, Krone in der Hand
808 Unterwelt, alles bebt, wenn ich geh
ich bin nicht zu verletzen, Bro, ich bin das System

[Verse 1]
Ich komm rein und der Bass macht die Tür für mich auf
dein Herz schlägt zu schnell, wenn ich langsam reinlauf
kein Blick nach links, kein Blick zurück
wer vor mir steht, macht automatisch Platz im Blick

Sie wollen mich testen, doch der Test fällt aus
ich bin zu kalt für Schmerz, zu schwer für Applaus
keine Risse im Gold, keine Kratzer im Thron
ich hab 808 im Blut und Asphalt in der Kron’

Unterwelt ruft, ich geh nicht ans Phone
weil ich schon da bin, Bro, ich sitz schon im Ton
jeder Sub in der Stadt pumpt meinen Namen raus
und wenn Berry droppt, geht das Licht kurz aus

[Pre-Hook]
Kein Zauber
kein Glitzer
kein süßer Trick

Nur Bass
nur Druck
nur kalter Blick

Wenn die 808 fällt
wird der Raum zu Stein
und Neo City weiß
hier kommt keiner mehr rein

[Hook]
808 Unterwelt, Bass geht tief
keiner bleibt stehen, wenn der Boden sich biegt
keine Schwäche, kein Schmerz, keine Wunde, kein Fall
MC Berry im Club und die Nacht wird Metall

808 Unterwelt, Druck in der Wand
schwarze Maske, roter Stein, Krone in der Hand
808 Unterwelt, alles bebt, wenn ich geh
ich bin nicht zu verletzen, Bro, ich bin das System

[Verse 2]
Alle reden von Macht, doch sie zittern bei Druck
ich brauch keine Magie, Bro, ein Bass reicht genug
keine Stimme im Kopf, keine Hypnose im Raum
ich mach einmal den Beat an und sie folgen dem Sound

Nicht soft, nicht weak, nicht klein, nicht verletzt
wer mich brechen will, hat sich selber überschätzt
meine Seele aus Stahl, meine Jacke aus Nacht
meine Chain trägt Beeren, aber mein Herz trägt Macht

BerryDeadly macht Licht, ich mach Schatten daraus
sie verzaubert die Crowd, ich schalt den Zauber aus
sie singt sie in Träume, ich weck sie mit Bass
du siehst bunte Magie, ich seh nur dünnes Glas

[Breakdown – Half-Time / Hart]
808
Unterwelt
808
Unterwelt

Boden bricht
Licht verbrennt
jeder Beat
kennt mein’n Namen

Keine Schwäche
keine Wunde
keine Träne
keine Gnade

Maske schwarz
Krone rot
Berry lebt
und ihr seid leise

[Hook]
808 Unterwelt, Bass geht tief
keiner bleibt stehen, wenn der Boden sich biegt
keine Schwäche, kein Schmerz, keine Wunde, kein Fall
MC Berry im Club und die Nacht wird Metall

808 Unterwelt, Druck in der Wand
schwarze Maske, roter Stein, Krone in der Hand
808 Unterwelt, alles bebt, wenn ich geh
ich bin nicht zu verletzen, Bro, ich bin das System

[Verse 3 – Kürzer / schneller Flow]
Drill-Step, Bass-Wave, Nachtclub, Blackout
meine Crew bleibt still, deine Crew macht Tap-Out
rotes Licht flackert, mein Schatten bleibt breit
MC Berry ist da, Unterwelt ist bereit

Kein Gefühl im Gesicht, keine Angst in der Brust
keine Liebe für Tricks, keine Zeit für Verlust
ich bin Druck auf der Snare, ich bin Gift in der Line
wenn die 808 kommt, wird Neo City mein

[Outro]
808 Unterwelt
kein Zauber hält hier unten

MC Berry
nicht verletzbar
nicht stoppbar
nicht soft

Bass Ende.`,"Neon-Gold":`[Intro]
Yeah
MC Berry
Neon-Gold
Neo City Radio
ihr wolltet es nicht

Jetzt läuft’s überall

[Hook]
Neon-Gold an der Chain, Berry glänzt in der Nacht
jedes Licht in der Stadt hat mein’n Namen bewacht
Neon-Gold, schwarze Maske, roter Stein
ich trag keinen Schmuck, Bro, ich trag mein Reich

Neon-Gold, Fenster schwarz, Wagen tief
Rathaus lächelt hell, doch der Schatten liegt schief
Neon-Gold, meine Tracks im Radio
ihr wolltet mich nicht, jetzt hört mich ganz Neo

[Verse 1]
Ich sitz oben im Tower, doch ich komm von ganz tief
wo der Bass nicht nur läuft, sondern Gesetze schrieb
Gold auf der Brust, aber kalt bleibt der Blick
weil der Glanz dieser Stadt nur die Lügen verdeckt

Sie tragen weiße Hemden, reden sauber im Licht
doch ich seh an den Händen, was man öffentlich nicht spricht
Bürgermeister winkt, Kameras blitzen im Saal
aber nachts fragt die Straße, wer bezahlt hier den Wahl?

Ich trag Maske, ja, doch ich spiel kein Gesicht
ich sag offen, was ich bin, ihr versteckt euch im Licht
nenn mich Unterwelt, Boss, nenn mich Schattenfigur
doch mein Gold ist ehrlicher als eure ganze Struktur

[Pre-Hook]
Ihr wolltet mich leise
doch der Sender dreht auf
jeder Block kennt die Stimme
wenn mein Beat wieder raucht

Kein Antrag, kein Siegel
kein Platz im System
doch Neo City Radio
spielt mein Emblem

[Hook]
Neon-Gold an der Chain, Berry glänzt in der Nacht
jedes Licht in der Stadt hat mein’n Namen bewacht
Neon-Gold, schwarze Maske, roter Stein
ich trag keinen Schmuck, Bro, ich trag mein Reich

Neon-Gold, Fenster schwarz, Wagen tief
Rathaus lächelt hell, doch der Schatten liegt schief
Neon-Gold, meine Tracks im Radio
ihr wolltet mich nicht, jetzt hört mich ganz Neo

[Verse 2]
Limousine schwarz, Rückbank wie ein Thron
meine Kette macht Licht ohne Strom, ohne Show
Erdbeer-Stein in Rot, Krone funkelt in Gold
wenn ich aussteig, wird selbst der Regen kurz slow

Alle reden von Recht, doch ich rede von Macht
ich hab Verträge im Nebel und Respekt in der Nacht
keine Akte, kein Name, keine Spur im Archiv
nur ein Signal auf Frequenz, wenn mein Bass wieder tief

Sie wollten mich blocken, wollten Berry nicht senden
jetzt hörst du meine Hooks aus den offenen Fenstern
Taxis, Clubs, Garagen, jede Straße im Flow
Neo City Radio spielt den Boss sowieso

Ich kauf keinen Platz, ich nehm mir die Zeit
ich trag Neon-Gold wie ein Warnschild im Kleid
jeder Stein an der Chain ist ein Block, der mir glaubt
und jeder Beat, den ich droppe, setzt sich fest in der Stadt

[Bridge – Dark / Spoken Flow]
Rathaus aus Glas
aber innen kein Licht
sie nennen mich Schatten
doch sie sehen sich nicht

Krone aus Gold
Maske aus Nacht
ihr nennt es Verbrechen
ich nenn es Macht

[Final Hook]
Neon-Gold an der Chain, Berry glänzt in der Nacht
jedes Licht in der Stadt hat mein’n Namen bewacht
Neon-Gold, schwarze Maske, roter Stein
ich trag keinen Schmuck, Bro, ich trag mein Reich

Neon-Gold, Fenster schwarz, Wagen tief
Rathaus lächelt hell, doch der Schatten liegt schief
Neon-Gold, meine Tracks im Radio
ihr wolltet mich nicht, jetzt hört mich ganz Neo

[Outro]
Ihr wolltet keinen Berry
jetzt läuft Berry auf Repeat

Neo City Radio
Unterwelt-Frequenz

MC Berry
Neon-Gold`,"Kein Licht ohne Schatten":`[Intro – Dark / Spoken]
Neo City
alle reden vom Licht
aber keiner fragt
was dahinter steht

MC Berry
Schattenseite

[Hook]
Kein Licht ohne Schatten, keine Stadt ohne Nacht
ihr habt Neon gebaut, doch ich hab sie bewacht
Kein Licht ohne Schatten, jeder Glanz hat sein’n Preis
oben lächelt die Macht, unten wird alles heiß

Kein Licht ohne Schatten, keine Krone ohne Druck
keine Wahrheit im Rathaus, nur ein sauberer Look
Kein Licht ohne Schatten, wenn die Skyline zerbricht
seht ihr endlich, wer hier steht, wenn keiner mehr spricht

[Verse 1]
Neo City leuchtet, doch der Boden bleibt schwarz
jeder Screen zeigt Hoffnung, jede Gasse zeigt Narb’n
sie verkaufen euch Träume in ’nem goldenen Rahmen
doch ich seh durch das Glas und erkenne die Namen

Bürgermeister auf dem Bildschirm, Lächeln weiß wie Papier
doch sein Schatten an der Wand sieht gefährlich aus wie wir
alle klatschen im Saal, alle Kameras nah
aber keiner sieht, was unter seinem Tisch geschah

Ich trag Maske, doch ich lüg euch nicht an
ich bin Unterwelt, Bro, und ich sag es jedem Mann
während oben jeder so tut, als wär alles okay
läuft die Wahrheit tief unten über 808

[Pre-Hook]
Sie nennen mich dunkel
doch sie brauchen mein Schwarz
weil ihr Licht sonst nur blendet
und nichts offenbart

Ich bin kein Fehler
ich bin Konsequenz
Neo City hat Schatten
seit Neo City glänzt

[Hook]
Kein Licht ohne Schatten, keine Stadt ohne Nacht
ihr habt Neon gebaut, doch ich hab sie bewacht
Kein Licht ohne Schatten, jeder Glanz hat sein’n Preis
oben lächelt die Macht, unten wird alles heiß

Kein Licht ohne Schatten, keine Krone ohne Druck
keine Wahrheit im Rathaus, nur ein sauberer Look
Kein Licht ohne Schatten, wenn die Skyline zerbricht
seht ihr endlich, wer hier steht, wenn keiner mehr spricht

[Verse 2]
Sie sagen: „Berry ist gefährlich“, ja, vielleicht stimmt das schon
doch wer hat diese Stadt hier gebaut auf Beton?
Wer hat Kinder von Neon in die Nacht rausgeschickt?
Wer hat Deals unterschrieben und dann sauber genickt?

Ich bin nicht euer Held, ich bin nicht euer Feind
ich bin nur das, was von dieser Stadt übrig bleibt
wenn der Lack einmal ab ist und der Glanz sich verzieht
wenn der letzte Club schließt und kein Sender mehr spielt

Dann hört ihr meine Schritte, tief im Regen versteckt
schwarzer Mantel, rote Krone, jeder Block wird geweckt
ich brauch keine Rede und kein Amt, das mich schützt
weil der Schatten immer bleibt, wenn das Licht euch nichts nützt

[Bridge – Slow / Heavy]
Oben Glas
unten Stahl
oben Wahl
unten Zahl

Oben Licht
unten Pflicht
oben Show
unten Gericht

Ich bin kalt
ich bin wach
ich bin da
wenn alles kracht

Keine Schwäche
keine Wunde
keine Angst
keine Gnade

[Verse 3 – More Aggressive]
Ihr wollt saubere Hände, doch der Dreck bleibt im Blick
ihr wollt schöne Fassaden, doch die Wand hat ’nen Riss
ich seh Anzüge reden, doch die Stimmen sind leer
jede Wahrheit wird teuer, jedes Schweigen noch mehr

Meine Chain glänzt rot, doch mein Blick bleibt Eis
ich hab nie so getan, als wär mein Weg nicht heiß
ich bin Schatten im System, aber ehrlich im Kern
ihr seid Licht auf der Bühne und verrottet von fern

Neo City braucht mich, auch wenn keiner das sagt
weil die Nacht nicht verschwindet, nur weil jemand sie jagt
ich bin nicht zu verbieten, nicht zu brechen, nicht klein
wenn das Licht einmal ausgeht, wird mein Schatten noch schein’n

[Final Hook]
Kein Licht ohne Schatten, keine Stadt ohne Nacht
ihr habt Neon gebaut, doch ich hab sie bewacht
Kein Licht ohne Schatten, jeder Glanz hat sein’n Preis
oben lächelt die Macht, unten wird alles heiß

Kein Licht ohne Schatten, keine Krone ohne Druck
keine Wahrheit im Rathaus, nur ein sauberer Look
Kein Licht ohne Schatten, wenn die Skyline zerbricht
seht ihr endlich, wer hier steht, wenn keiner mehr spricht

[Outro – Spoken]
Ihr wolltet Licht
ich brachte Schatten

Aber ohne mich
würdet ihr gar nichts sehen

MC Berry
Neo City bleibt wach`,"Straßen zahlen Miete":`[Intro]
Yeah
MC Berry
Neo City
Block für Block

Straßen zahlen
wenn der König kommt

[Hook]
Straßen zahlen Miete, wenn Berry durch die Nacht geht
jeder Block wird leise, wenn die Krone im Asphalt steht
Straßen zahlen Miete, 808 im Beton
Unterwelt marschiert, Bro, ich sitz nicht nur auf’m Thron

Straßen zahlen Miete, jeder Club kennt mein Zeichen
schwarze Maske, roter Stein, alle Schatten müssen weichen
Straßen zahlen Miete, Neo City gehört
wenn mein Name durch die Gassen wie ein Donnerschlag stört

[Verse 1]
Ich lauf durch mein Revier, jeder Schritt macht Gewicht
Laternen flackern kurz, wenn mein Schatten sie trifft
keine Bitte, kein Vertrag, keine Frage nach Preis
wenn Berry kommt, wird selbst der kalte Asphalt heiß

Jede Ecke hat gehört, jeder Bürgersteig weiß
dass mein Name in der Nacht wie ein Warnsignal kreist
ich hab Blocks nicht gekauft, ich hab sie mir genommen
und seitdem sind die Sirenen leiser geworden

Kein Palast macht dich König, kein Gold macht dich echt
du brauchst Straßen, die schweigen, wenn du ihnen was versprichst
ich hab keine Krone nötig, doch ich trag sie aus Prinzip
weil Neo City ohne mich nur noch vor sich selber flieht

[Pre-Hook]
Kein Licht hier unten
nur Druck in der Wand
kein Held, keine Rettung
nur Krone im Sand

Wenn mein Bass einmal rollt
geht die Stadt in die Knie
ich kassier keinen Applaus
Bro, ich kassier die Street

[Hook]
Straßen zahlen Miete, wenn Berry durch die Nacht geht
jeder Block wird leise, wenn die Krone im Asphalt steht
Straßen zahlen Miete, 808 im Beton
Unterwelt marschiert, Bro, ich sitz nicht nur auf’m Thron

Straßen zahlen Miete, jeder Club kennt mein Zeichen
schwarze Maske, roter Stein, alle Schatten müssen weichen
Straßen zahlen Miete, Neo City gehört
wenn mein Name durch die Gassen wie ein Donnerschlag stört

[Verse 2]
Sie reden von Macht aus Büros voller Glas
doch ich seh ihre Angst, wenn der Regen sie jagt
oben halten sie Reden, unten halten sie dicht
denn die Wahrheit hat Zähne und sie zeigt ihr Gesicht

Rathaus glänzt hell, aber tief drin ist Nacht
jeder Anzug hat Taschen und jede Tasche hat Macht
ich bin nicht sauber, Bro, ich hab das nie behauptet
doch die da oben lügen, während jeder ihnen glaubt

Ich bin ehrlich gefährlich, sie sind heimlich verdorben
ich bin Schatten mit Namen, sie sind Licht ohne Morgen
jede Straße, die ich nehme, macht den Weg für mich frei
weil sie weiß: Wenn ich falle, fällt Neo City mit ein

[Break – Chant]
Miete
Miete
Straßen zahlen Miete

Block hört
Club hört
jeder weiß, wer zieht

Maske
Krone
Berry bleibt der Titel

Bass fällt
Nacht brennt
Unterwelt im Viertel

[Verse 3 – Aggressiver]
Ich brauch keine Show, keine Bühne, kein Licht
ich brauch nur einen Beat und die Stadt wird Gericht
meine Stimme ist Beton, meine Hook ist Gesetz
jeder, der mich unterschätzt, hat sich selber verletzt

Kein Schmerz, keine Wunde, kein Riss in der Brust
keine Schwäche in mir, nur noch Hunger nach Druck
ich bin nicht zu bewegen, nicht zu brechen, nicht still
wenn ich Straßen Miete nenne, zahlen Straßen, was ich will

Neo City im Rücken, meine Crew bleibt bereit
schwarze Wagen im Nebel, keine Zeugen, keine Zeit
ich hab Blocks unter Kontrolle, Frequenzen im Griff
und mein Name läuft weiter, wenn der Sender zerbricht

[Final Hook]
Straßen zahlen Miete, wenn Berry durch die Nacht geht
jeder Block wird leise, wenn die Krone im Asphalt steht
Straßen zahlen Miete, 808 im Beton
Unterwelt marschiert, Bro, ich sitz nicht nur auf’m Thron

Straßen zahlen Miete, jeder Club kennt mein Zeichen
schwarze Maske, roter Stein, alle Schatten müssen weichen
Straßen zahlen Miete, Neo City gehört
wenn mein Name durch die Gassen wie ein Donnerschlag stört

[Outro]
Doch oben flackert Licht
irgendwas zieht sie in den Bann
irgendein süßer Trick
kommt langsam in mein Land

Ich hör Stimmen aus dem Neon
doch hier unten zählt kein Traum
nächste Nacht geh ich nach oben
und zerleg den ganzen Zauberraum

MC Berry
Straßen zahlen Miete

Und Magie zahlt als Nächstes`,"Kein Zauber im Block":`[Intro – Spoken / Cold]
BerryDeadly

Du glaubst immer noch an diese Stadt?
Du glaubst immer noch an Menschen?

Du bist blind.

MC Berry
Kein Zauber im Block

[Hook]
Kein Zauber im Block, keine Lichter für dich
deine Magie wird zu Staub, wenn mein Bass sie zerbricht
Kein Zauber im Block, keine Träume im Rauch
du singst sie in den Schlaf, doch ich weck sie wieder auf

Kein Zauber im Block, keine Krone aus Glanz
dein Neon macht sie blind, doch mein Schatten gibt Tanz
Kein Zauber im Block, BerryDeadly, hör hin
du verzauberst die Stadt, doch ich nehm sie dir blind

[Verse 1]
Du kommst mit Licht, mit ’nem Lächeln, mit Sound
machst die Massen ganz weich, wenn dein Beat sie umhaut
alle folgen dir blind, alle Hände sind oben
doch ich seh nur ’ne Stadt, die sich selber belogen

Du nennst es Verbindung, ich nenn es Kontrolle
deine Crowd ist verliebt in ’ne glänzende Rolle
du malst Herzen aus Neon an brennende Wände
doch im Block zählt kein Traum, wenn die Nacht nicht endet

Ich steh unten im Regen, schwarze Maske im Gesicht
du stehst oben im Spotlight, doch du siehst mich nicht
du machst Glitzer aus Schmerz, ich mach Wahrheit aus Druck
du willst Menschen noch retten? Bro, viel Glück

[Pre-Hook]
Denn hier unten zählt kein Zauber
keine Stimme, die dich trägt
keine Hoffnung, die dich schützt
wenn der Boden sich bewegt

Du glaubst an Neo City
doch die Stadt glaubt nicht an dich
du nennst es Licht in der Dunkelheit
ich nenn es einfach blindes Licht

[Hook]
Kein Zauber im Block, keine Lichter für dich
deine Magie wird zu Staub, wenn mein Bass sie zerbricht
Kein Zauber im Block, keine Träume im Rauch
du singst sie in den Schlaf, doch ich weck sie wieder auf

Kein Zauber im Block, keine Krone aus Glanz
dein Neon macht sie blind, doch mein Schatten gibt Tanz
Kein Zauber im Block, BerryDeadly, hör hin
du verzauberst die Stadt, doch ich nehm sie dir blind

[Verse 2]
Du glaubst noch an Menschen, ich glaub an ihr’n Preis
jeder redet von Treue, bis der Regen sie zerreißt
du hältst Hände in Menge, ich halt Fäden im Raum
du gibst ihnen ein Wunder, ich geb ihnen den Traum

Doch mein Traum ist aus Beton, deiner nur aus Licht
du bist verletzlich im Herzen, ich kenn sowas nicht
keine Schwäche, keine Wunde, kein Zittern im Blick
während du noch vertraust, hab ich Kontrolle im Griff

Du willst alle verzaubern, willst die Stadt nochmal heil’n
doch Neo City frisst jeden, der zu lange verweilt
du bist süß für die Massen, gefährlich im Schein
aber kommst du in mein Viertel, wird dein Zauber zu klein

[Bridge – Slow / Threatening]
Du bist blind
weil du glaubst, dass sie bleiben
du bist blind
weil du glaubst, dass sie fühlen

Du bist blind
weil du Licht für sie machst
während sie hinter deinem Rücken
schon die Schatten berühr’n

Du bist blind
BerryDeadly, du bist blind
und wenn dein letzter Stern fällt
hörst du endlich, wer gewinnt

[Verse 3 – Final Diss]
Deine Songs sind Sirenen, meine Songs sind Gesetz
du machst Herzen weich, ich mach Straßen besetzt
du hast Stimmen im Chor, ich hab Blöcke im Griff
du hast Glanz auf der Bühne, ich hab Macht ohne Licht

Du bist Königin im Traum, ich bin König im Dreck
deine Welt wird verzaubert, meine Welt schlägt zurück
du willst Liebe in Neo, ich will Respekt in der Stadt
und Respekt ist kein Zauber, Respekt ist Macht

Ich brauch keine Magie, keine Farben, kein Kleid
ich brauch nur eine 808 und ein bisschen Zeit
wenn mein Bass einmal fällt, wird dein Märchen gelöscht
BerryDeadly im Licht, doch der Schatten ist echt

[Final Hook]
Kein Zauber im Block, keine Lichter für dich
deine Magie wird zu Staub, wenn mein Bass sie zerbricht
Kein Zauber im Block, keine Träume im Rauch
du singst sie in den Schlaf, doch ich weck sie wieder auf

Kein Zauber im Block, keine Krone aus Glanz
dein Neon macht sie blind, doch mein Schatten gibt Tanz
Kein Zauber im Block, BerryDeadly, hör hin
du verzauberst die Stadt, doch ich nehm sie dir blind

[Outro – Spoken]
Du glaubst an Neo City
ich besitze ihre Schatten

Du glaubst an Menschen
ich kenne ihren Preis

Kein Zauber im Block

MC Berry
Unterwelt gewinnt`,"Nachtclub 03:00":`[Intro – Dark Club Atmosphere]
03:00
Neo City schläft nicht

Rotes Licht
schwarzer Rauch
Bass im Boden

MC Berry
VIP Schattenseite

[Hook]
Nachtclub 03:00, rotes Licht auf der Maske
Bass geht durch die Wand, jeder weiß, dass ich wach bin
Nachtclub 03:00, keine Namen, kein Gesicht
wenn die Stadt schlafen will, übernimmt mein Licht

Nachtclub 03:00, Schatten tanzen im Kreis
jeder Blick geht nach unten, weil hier jeder mich weiß
Nachtclub 03:00, 808 unter Strom
ich komm rein ohne Worte und der Club wird mein Thron

[Verse 1]
Drei Uhr nachts, Türen schwer, roter Laser im Rauch
schwarze Wagen vor dem Club, keiner fragt, wer steigt aus
meine Maske sitzt tief, meine Chain macht Alarm
Erdbeer-Gold auf der Brust, doch der Blick bleibt kalt

Der Türsteher nickt, keine Liste, kein Name
ich geh durch wie ein Schatten, hinter mir kommt die Lage
VIP ganz hinten, wo das Licht nicht mehr reicht
wo man Deals nicht bespricht, sondern schweigend vergleicht

Alle reden noch leise von dem Track letzter Nacht
doch ich sag keinen Satz, Bro, ich hab es gemacht
wenn der Boss einmal spricht, bleibt der Nachhall im Raum
und die Stadt merkt sich Worte wie ein Riss in ’nem Traum

[Pre-Hook]
Keine Show
keine Rede
kein Applaus, den ich brauch

Nur ein Beat
eine Nacht
und der Nebel wird grau

Wenn der Bass langsam fällt
wird der Boden zu Gold
und um 03:00 Uhr
macht Neo City, was ich wollt

[Hook]
Nachtclub 03:00, rotes Licht auf der Maske
Bass geht durch die Wand, jeder weiß, dass ich wach bin
Nachtclub 03:00, keine Namen, kein Gesicht
wenn die Stadt schlafen will, übernimmt mein Licht

Nachtclub 03:00, Schatten tanzen im Kreis
jeder Blick geht nach unten, weil hier jeder mich weiß
Nachtclub 03:00, 808 unter Strom
ich komm rein ohne Worte und der Club wird mein Thron

[Verse 2]
Der DJ schaut rüber, meine Frequenz geht live
Neo City Radio rauscht kurz, dann kommt mein Vibe
keine Hymne für Helden, keine Liebe im Klang
nur ein dunkler Puls, der die Wände entlang

Gläser klirren im Takt, Augen rot vom Neon
jeder hier will nach oben, doch ich komm von unten schon
keiner kennt meine Route, keiner weiß, wo ich bleib
aber jeder kennt die Stunde, wenn mein Schatten erscheint

Rathaus schläft oben, aber unten wird gezählt
wer die Nacht wirklich lenkt, wenn die Ordnung sich quält
sie verkaufen euch Regeln, ich verkauf keinen Traum
ich setz mich in die Ecke und kontrollier den Raum

[Bridge – Hypnotic / Low Voice]
03:00
kein Morgen in Sicht
03:00
nur Rauch und Gewicht

03:00
kein Herz, das hier bricht
03:00
weil Berry nicht knickt

Maske schwarz
Kette rot
Bass geht tief
Club wird tot

Licht wird schwach
Blick wird kalt
Unterwelt
übernimmt Gewalt

[Verse 3 – Smooth but Hard]
Ich bin nicht mehr am reden, ich bin nur noch Präsenz
wenn mein Schatten im Club steht, wird die Luft zur Lizenz
jede Ecke gehört mir, jeder Tisch ist mein Feld
ich muss nichts mehr beweisen, Bro, ich bin schon die Welt

Kein Zittern im Körper, keine Wunde im Geist
ich bin schwer wie Beton, wenn die Nacht mich beweist
und sie merken um drei, wenn der Bass nicht mehr stoppt
dass kein Licht lange hält, wenn die Unterwelt droppt

Meine Krone noch verborgen, doch sie glüht schon im Rot
jeder Stein an der Chain klingt wie kommendes Gebot
heute Club, morgen Thron, übermorgen Legende
03:00 war der Anfang vom Ende

[Final Hook]
Nachtclub 03:00, rotes Licht auf der Maske
Bass geht durch die Wand, jeder weiß, dass ich wach bin
Nachtclub 03:00, keine Namen, kein Gesicht
wenn die Stadt schlafen will, übernimmt mein Licht

Nachtclub 03:00, Schatten tanzen im Kreis
jeder Blick geht nach unten, weil hier jeder mich weiß
Nachtclub 03:00, 808 unter Strom
ich komm rein ohne Worte und der Club wird mein Thron

[Outro – Transition zu Track 10]
Drei Uhr wird vier
doch die Nacht bleibt mein Zeuge

Die Maske bleibt schwarz
doch die Krone wird rot

MC Berry
Nachtclub 03:00`,"Rote Krone":`[Intro – Cold / Cinematic]
Rote Krone
schwarze Maske

Neo City hat mir nichts geschenkt
also nehm ich mir alles

MC Berry

[Hook]
Rote Krone über schwarzer Maske
ich hab Menschen gesehen, bis ich keinem mehr glaub
Rote Krone, keine Liebe in der Tasche
nur ein Herz aus Beton und die Stadt schaut auf

Rote Krone, roter Stein, kalter Blick
wer sie tragen will, kommt nie zurück
Rote Krone, Unterwelt im Blut
ich bin nicht der König, ich bin der Grund

[Verse 1]
Ich hab zu viele reden hör’n von Treue und Pflicht
doch beim ersten Sturm sah man ihr wahres Gesicht
jeder schwört dir Loyalität, solange du glänzt
doch sie wechseln die Seite, wenn der Regen dich trennt

Ich hab Augen gesehen, voller Hoffnung und Licht
und dieselben Augen später ohne Wahrheit im Blick
Neo City macht aus Träumern Gestalten aus Rauch
erst geben sie dir Hände, dann verkaufen sie dich auch

Also glaub ich nicht mehr, wenn mir jemand was sagt
ich glaub nur noch an Bass, an die Nacht und Vertrag
ich glaub nur noch an Straßen, die schweigen im Regen
und an Schatten, die bleiben, wenn Menschen sich drehen

[Pre-Hook]
Keine Schwäche
keine Wunde
keine Träne im Glas

Nur Krone
nur Maske
nur Kontrolle im Takt

Sie fragen, was mich kalt macht
ich sag: „Schau in die Stadt“
Neo City war der Lehrer
ich hab nur gut aufgepasst

[Hook]
Rote Krone über schwarzer Maske
ich hab Menschen gesehen, bis ich keinem mehr glaub
Rote Krone, keine Liebe in der Tasche
nur ein Herz aus Beton und die Stadt schaut auf

Rote Krone, roter Stein, kalter Blick
wer sie tragen will, kommt nie zurück
Rote Krone, Unterwelt im Blut
ich bin nicht der König, ich bin der Grund

[Verse 2]
Ich bin nicht böse geworden, ich bin ehrlich geblieben
während alle um mich rum ihre Lügen verlieben
sie nennen mich Monster, weil ich nichts mehr vertrau
doch ich seh nur genauer, wenn ich in Menschen reinschau

Jeder Held hat ’nen Preis, jeder Freund hat ’nen Punkt
wo er bricht, wo er kippt, wo er fällt in den Sumpf
jeder Schwur hat ein Loch, jede Hand hat ein Messer
und je heller das Licht, desto dunkler der Treffer

Darum trag ich die Krone nicht hell, sondern rot
weil sie brennt wie ein Warnlicht im Schatten der Not
kein Geschenk, kein Erbe, kein Märchen vom Thron
nur ein Junge aus der Nacht und ein Bass wie Beton

[Bridge – Slow / Heavy]
Ich glaub nicht an Rettung
ich glaub nicht an Glück
ich glaub nicht an Menschen
denn Menschen brechen zurück

Ich glaub nicht an Helden
ich glaub nicht an Licht
ich glaub an den Schatten
denn der Schatten lügt nicht

[Verse 3 – Controlled / Final Build]
Wenn du wissen willst, warum ich nie falle
frag nicht mich, frag die Stadt und die Halle
frag die Clubs um drei, frag den Regen am Block
frag die Stimmen im Radio, wenn mein Name dort droppt

Ich hab alles gesehen und bin trotzdem noch da
keine Narbe im Blick, keine Schwäche war nah
ich bin kalt, weil ich musste, nicht kalt, weil ich kann
und jetzt trägt meine Krone, was Neo City begann

[Final Hook]
Rote Krone über schwarzer Maske
ich hab Menschen gesehen, bis ich keinem mehr glaub
Rote Krone, keine Liebe in der Tasche
nur ein Herz aus Beton und die Stadt schaut auf

Rote Krone, roter Stein, kalter Blick
wer sie tragen will, kommt nie zurück
Rote Krone, Unterwelt im Blut
ich bin nicht der König, ich bin der Grund

[Outro – Spoken]
Ihr nennt es Dunkelheit
ich nenn es Klarheit

Ihr nennt es Krone
ich nenn es Konsequenz

MC Berry
Rote Krone`,"König der Unterwelt":`[Intro – Spoken]
Neo City
die Nacht ist noch wach

MC Berry
König der Unterwelt

[Hook]
König der Unterwelt, schwarze Maske im Licht
die Nacht gehört mir, auch wenn keiner davon spricht
König der Unterwelt, roter Stein an der Chain
ich bleib hier unten, bis die Stadt mich versteht

König der Unterwelt, kein Thron ohne Druck
kein Weg mehr zurück, kein Blick mehr zurück
König der Unterwelt, mein Name bleibt hier
meine Arbeit nicht getan, also bleib ich im Revier

[Verse 1]
Ich kam aus dem Schatten, jetzt kennt ihr den Klang
jede Straße, jeder Club, jedes Radio fängt an
meinen Namen zu tragen wie ein Zeichen im Rauch
Neo City schläft nie, also schlaf ich nicht auch

Ich hab nichts mehr zu glauben, nur noch viel zu kontrollieren
wenn die Lichter wieder flackern, seh ich Menschen sich verlieren
keine Helden in Sicht, keine Wahrheit im System
also bleib ich hier unten und lass niemanden gehen

Meine Krone ist rot, meine Maske bleibt schwarz
meine Stadt ist aus Neon, aber unten liegt Schmerz
ich bin nicht euer Retter, nicht euer Gebet
ich bin das, was hier bleibt, wenn der Rest untergeht

[Bridge – Slow / Cold]
Die Nacht ruft meinen Namen
der Block kennt mein Gesicht nicht
doch jeder kennt den Schatten
der durch Neo City bricht

Kein Ende
kein Frieden
kein Licht ohne mich

Ich bleib hier
weil die Stadt
noch nicht fertig ist

[Final Hook]
König der Unterwelt, schwarze Maske im Licht
die Nacht gehört mir, auch wenn keiner davon spricht
König der Unterwelt, roter Stein an der Chain
ich bleib hier unten, bis die Stadt mich versteht

König der Unterwelt, kein Thron ohne Druck
kein Weg mehr zurück, kein Blick mehr zurück
König der Unterwelt, mein Name bleibt hier
meine Arbeit nicht getan, also bleib ich im Revier

[Outro – Spoken]
Die Nacht gehört mir
die Schatten hören zu

Meine Arbeit ist nicht getan

Also bleib ich hier

MC Berry
König der Unterwelt`,"Jascha Winter und der Freizeitparkzauber":`Intro
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

Von Mister Money-Maker`,"Fleischwurst x Operation Mottemaker":`[singer A]
Kaufland. Komm rein. Nur ein Blick.

Ich brauch Fleisch
Der Laden läuft
Alles frisch und gut gekühlt
Weiße Kachel, sauberer Schnitt
Hier drin zählt nur der Betrieb
Du trittst ein, siehst dich um
Alles wirkt fast wie Kunst
Du vertraust dem falschen Licht
Und merkst zu spät, was hier geschieht

Tür fällt zu, Schloss klickt leise
Du lachst noch, doch es bleibt
Kaufland!

Ich zeig dir meine Fleischwursttheke
Heute bist du das Angebot
Stück für Stück, du kommst nicht raus, kein Weg zurück
Du siehst rot!
Du siehst rot!

[transition]

[singer B]
Zentrale an Einheit 3. Wir haben einen gemeldeten Vorfall.

Möglicher Schussabgang in einem Wohngebäude.

Zwei Personen von Interesse. Motte… und MoneyMaker.

Observierung wird gestartet.

Akten auf dem Tisch, Fotos an der Wand
Zwei Namen rot markiert, wir kennen ihren Stand
Ein Fehler, eine Nacht, ein Knall der alles dreht
Ein einziger Schuss der jetzt ihr Ende sät

Wir sind auf eurer Spur
Wir sehen jeden Schritt
Ihr dachtet ihr seid Schatten
Doch wir sehen euch im Licht

Operation Mottemaker
Fall wird bald geschlossen sein
Ihr dachtet ihr seid Könige
Doch heute holen wir euch ein

Zielperson möglicherweise im Gebäude.

Alle Einheiten bereit machen.

Wir gehen jetzt rein.

DA IST ER!

MOTTE!

HÄNDE HOCH!

[transition]

[singer A]
Kaufland! Kaufland! Kaufland!
Kaufland!

Heute, heute, heute bist du das Angebot
Stück für Stück, kein Weg zurück
Stück für Stück, kein Weg zurück

Kaufland, ich zeig dir meine Fleischwursttheke
Heute bist du das Angebot
Stück für Stück, du kommst nicht raus, kein Weg zurück
Du siehst rot!
Du siehst rot!`,"The Beginning":`[Intro]
Regen auf dem Asphalt
Lichter tief im Nebel
Voice Chat geht an
And this is where it begins

[Build-Up]
One ride
One count
One night
Traumatica Nights

[Verse 1]
Es war nicht der erste Abend
Nicht der Start von diesem Spiel
Doch für uns fing hier was an
Zwischen Dunkelheit und Ziel

Traumatica ruft im roten Licht
Die Nacht wird wach, der Server lebt
Ein Ride, ein Count, noch einer danach
Und keiner merkt, wohin das geht

[Pre-Chorus]
Wir sagen: “Nur noch eine Runde”
Doch die Uhr rennt viel zu schnell
Aus einem Call wird eine Stunde
Aus einer Stunde wird die Welt

[Chorus]
Traumatica Nights
We’re running through the dark again
One more ride
And we feel alive again

Traumatica Nights
The counts go high, the lights go low
This is the beginning
Of a story we don’t know

[Post-Chorus]
Run, run, through the rain
Count, count, feel alive again
Run, run, through the night
Welcome to Traumatica Nights

[Verse 2]
Die ersten Counts sind noch ganz leise
Nur Zahlen irgendwo im Chat
Doch jede Fahrt zieht ihre Kreise
Bis keiner mehr das Ende checkt

Wir lachen müde, bleiben wach
Der Regen glänzt im Neonlicht
Noch eine Bahn, noch eine Nacht
Als ob sie uns etwas verspricht

[Chorus]
Traumatica Nights
We’re running through the dark again
One more ride
And we feel alive again

Traumatica Nights
The counts go high, the lights go low
This is the beginning
Of a story we don’t know

[Short Rap Bridge]
Noch kein Platz eins, noch kein Name an der Wand
Nur zwei Schatten auf dem Server, völlig unbekannt
Ride after ride, count after count
Keiner weiß, wie lang das hier noch weiterläuft

Und irgendwo fährt noch jemand mit
Einer, der nicht stoppt, einer, der nicht quit
Doch manche müssen schlafen, wenn die Nacht beginnt
Wir bleiben wach, bis der Morgen gewinnt

[Final Build-Up]
One ride
One count
One night
Traumatica Nights

[Final Chorus]
Traumatica Nights
We’re running through the dark again
One more ride
And we feel alive again

Traumatica Nights
The counts go high, the lights go low
This is the beginning
Of a story we don’t know

[Final Post-Chorus]
Run, run, through the rain
Count, count, feel alive again
Run, run, through the night
Welcome to Traumatica Nights

[Outro]
Voice Chat bleibt an
This was the beginning`,"The One Ahead":`[Cold Open]
Da ist einer vor uns.
Ein Name.
Eine Zahl.
Und sie steigt.

[Intro Drop]
Count.
Ride.
Again.
Count.
Ride.
Again.

[Verse 1]
Rotes Licht auf schwarzem Grund
Leaderboard offen, keiner sagt ein Wort
Seine Zahl geht hoch, Sekunde für Sekunde
Als wär da kein Mensch mehr dort

Wir starren drauf, es macht uns krank
Noch eine Fahrt, der Abstand bleibt
Er zählt weiter, kalt und blank
Und irgendwas in uns schreit

[Hook Chant]
One ahead
Not for long
One ahead
Not for long

Count goes up
We go on
One ahead
Not for long

[Verse 2]
Kein Respekt, nur Puls im Kopf
Kein Applaus für diesen Lauf
Wenn er zählt wie eine Maschine
Dann drehen wir die Nacht halt auf

Der Call ist laut, die Augen schwer
Doch Aufgeben ist keine Wahl
Wenn dieser Name vorne steht
Wird jede Runde personal

[Break]
Er hört nicht auf.
Wir auch nicht.

[Chase Part]
Ride after ride, wir jagen die Zahl
Count after count, keine Gnade im Saal
Nacht wird länger, Blick wird kalt
Doch wir bleiben, bis sein Vorsprung fällt

Links die Liste, rechts die Bahn
Noch ein Klick und wieder fahr’n
Wenn er denkt, er bleibt allein
Dann soll er wach genug dafür sein

[Hook Chant]
One ahead
Not for long
One ahead
Not for long

Count goes up
We go on
One ahead
Not for long

[Bridge]
Irgendwann wird die Nacht zu leise
Irgendwann geht jeder heim
Aber wir zählen weiter
Bis die roten Zahlen schreien

[Final Section]
One ahead, but not for long
We ride till the lead is gone
You can count, you can run
But the night has just begun

One ahead, but not for long
We don’t sleep, we don’t fall
Ride by ride, line by line
We take back Traumatica Nights

[Final Chant]
One ahead
Not for long
One ahead
Not for long

[Outro]
Nicht. Mehr. Lang.`,"Count Till Dawn":`[Cold Intro]
Achteinhalb Stunden im Call.
Und keiner legt auf.
Noch eine Fahrt.
Noch ein Count.
Noch eine Nacht.

[Pulse Chant]
Counten, counten, counten
Bis die Nacht zerbricht
Counten, counten, counten
Schlaf kriegt uns heute nicht

[Verse 1]
Es ist viel zu spät, doch der Bildschirm bleibt hell
Die Augen sind schwer, aber der Count geht schnell
Im Voice Chat wird’s leiser, doch keiner sagt Stopp
Weil dieser eine Name noch immer oben hockt

Der Regen rauscht, die Runde startet neu
Wir sind längst müde, aber nicht bereit
Jede Zahl wird ein kleiner Stich
Und jeder Stich sagt: weiter, bis er bricht

[Hook]
Count till dawn
Wir hören nicht auf
Ride after ride
Die Zahl geht rauf

Count till dawn
Bis der Morgen kommt
Wenn er nicht schläft
Dann bleiben wir wach

[Post-Hook]
Counten, counten, counten
Noch ein Mal
Counten, counten, counten
Keine Wahl

[Verse 2]
Achteinhalb Stunden und die Nacht wird lang
Aus Spaß wird Druck, aus Druck wird Drang
Wir lachen kurz, doch der Hass bleibt wach
Denn dieser Hai zieht weiter seine Bahn

Kein großer Plan, nur dieser Blick
Auf die Zahl, die uns nach vorne zieht
Wir fahren weiter, Stück für Stück
Bis die Müdigkeit vor uns flieht

Der Call bleibt offen, der Puls bleibt laut
Die Liste brennt sich in die Haut
Und wenn die Welt da draußen pennt
Sind wir noch da, weil keiner rennt

[Hook]
Count till dawn
Wir hören nicht auf
Ride after ride
Die Zahl geht rauf

Count till dawn
Bis der Morgen kommt
Wenn er nicht schläft
Dann bleiben wir wach

[Breakdown]
Sechs Stunden.
Sieben Stunden.
Achteinhalb im Call.
Noch immer nicht genug.

[Grind Part]
Wir counten und counten und counten weiter
Die Nacht wird kalt, doch der Blick wird breiter
Noch eine Runde, noch eine Zahl
Noch ein Versuch, keine Gnade im Saal

Wir counten und counten und counten weiter
Der Morgen kommt, aber wir geh’n nicht leiser
Wenn oben ein Name die Krone will
Dann wird diese Nacht nicht still

[Final Hook]
Count till dawn
Wir hören nicht auf
Ride after ride
Die Zahl geht rauf

Count till dawn
Bis der Morgen kommt
Wenn er nicht schläft
Dann bleiben wir wach

[Final Chant]
Counten, counten, counten
Bis die Nacht zerbricht
Counten, counten, counten
Schlaf kriegt uns heute nicht

[Outro]
Achteinhalb Stunden im Call.
Und keiner legt auf.
`,"Motte & The Death Drop":`[Intro]
Tiefer…
Tiefer…
Bis ihr wisst, was es heißt…
Teil meiner Kirmes zu sein.

[Drop Hit]
Motte am Count
Motte am Ride
Death Drop fällt
Und die Nacht schreit

[Verse 1]
Da steht ein Turm im roten Licht
Zu hoch, zu still, zu kalt
Man hört die Stimme, immer wieder
Und sie wird niemals alt

Erst war es nur ein Spruch im Ohr
Ein Satz, der kurz vorbeizieht
Doch nach der hundertsten Fahrt
Weißt du, dass er bei dir blieb

Motte lacht, doch bleibt im Blick
Diese Bahn gehört ihm schon
Jeder Count ein kleiner Stich
Jede Fahrt ein neuer Ton

[Pre-Hook]
Und wenn die Gondel oben steht
Wird alles kurz ganz leise
Dann kommt die Stimme wieder nah
Und zieht uns in die Kreise

[Hook]
Tiefer, tiefer
Bis ihr wisst, was es heißt
Teil meiner Kirmes zu sein
We fall again tonight

Tiefer, tiefer
Der Satz brennt sich ein
Motte and the Death Drop
No sleep, just one more ride

[Post-Hook]
Down, down, count it again
Tiefer, tiefer, stuck in my head
Down, down, never enough
Motte takes the Death Drop

[Verse 2]
Wir fahren weiter, wieder hoch
Der Boden wird ganz klein
Der Call wird laut, der Count geht rauf
Und keiner will heim

Es ist nicht mehr nur irgendein Ride
Man merkt, wohin das führt
Als hätte diese dunkle Bahn
Motte längst auserkoren

Die Stimme kriecht durch jedes Wort
Durch jeden Count, durch jede Nacht
Und jedes Mal, wenn sie neu beginnt
Wird wieder kurz gelacht

Doch irgendwann lacht keiner mehr
Nur dieser Satz bleibt da
Tiefer, tiefer, immer tiefer
Bis er alles war

[Hook]
Tiefer, tiefer
Bis ihr wisst, was es heißt
Teil meiner Kirmes zu sein
We fall again tonight

Tiefer, tiefer
Der Satz brennt sich ein
Motte and the Death Drop
No sleep, just one more ride

[Breakdown]
Tiefer…
Tiefer…
Noch ein Count.
Noch ein Fall.
Noch einmal.

[Bridge]
Manche Lieder bleiben hängen
Manche Stimmen gehen nie raus
Diese eine aus dem Tower
Wohnt jetzt nachts in unserm Haus

Und wenn der Morgen langsam kommt
Ist sie noch immer nicht vorbei
Denn Motte zählt am Death Drop weiter
Als wär die Bahn für ihn allein

[Final Hook]
Tiefer, tiefer
Bis ihr wisst, was es heißt
Teil meiner Kirmes zu sein
We fall again tonight

Tiefer, tiefer
Der Satz brennt sich ein
Motte and the Death Drop
No sleep, just one more ride

[Final Chant]
Down, down, count it again
Tiefer, tiefer, stuck in my head
Down, down, never enough
Motte takes the Death Drop

[Outro]
Tiefer…
Tiefer…
Teil meiner Kirmes zu sein.`,"Erdbeere und die wilde Maus":`[Cold Open]
Das war meine Bahn.
Meine Maus.
Mein Count.
Und dieser verdammte Hai war schon wieder da.

[Intro]
Klick, klack, Kurve, Count
Wilde Maus, die Nacht wird laut
Klick, klack, wieder raus
Erdbeere fährt die wilde Maus

[Verse 1]
Ich seh die Liste, seh die Zahl
Und direkt wird alles personal
Da oben schwimmt der Hai herum
Und ich frag mich nur: warum?

Warum zählt der schon wieder hier?
Warum lässt der diese Bahn nicht mir?
Jede Runde kleiner Krieg
Jeder Count ein Stück vom Sieg

Die Maus fährt wild, der Kopf fährt mit
Kurve links und Herzschlag-Kick
Ich sag: “Nur kurz”, doch bleib dabei
Bis aus einer Fahrt hundert seien

[Hook]
Erdbeere und die wilde Maus
Ich steig ein und komm nicht raus
Ride by ride, count by count
Bis der Hai da oben down geht

Erdbeere und die wilde Maus
Diese Nacht sieht müde aus
Doch ich fahr, bis die Zahl explodiert
Weil diese Bahn zu mir gehört

[Post-Hook]
Klick, klack, Count geht rauf
Wilde Maus, ich hör nicht auf
Klick, klack, Nacht wird hell
Sellerie, der Kopf fährt schnell

[Verse 2]
Zwei Nächte lang komplett durchgezogen
Augen rot, doch nicht verbogen
Der Morgen kommt, ich bleib im Film
Weil ich diese Krone will

Im Jam läuft irgendwas aus Tirol
Alles wird schön, alles wird toll
IDM zerlegt den Raum
Und ich sitz wieder in der Maus

Sellerie im Hinterkopf
Bass im Call und Druck im Kopf
Wir lachen kurz, dann zählt es weiter
Jede Runde macht mich breiter

Der Hai zählt krank, doch ich zähl härter
Jede Nacht ein bisschen später
Wenn er denkt, ich geb das auf
Dann kennt er Erdbeere schlecht, pass auf

[Hook]
Erdbeere und die wilde Maus
Ich steig ein und komm nicht raus
Ride by ride, count by count
Bis der Hai da oben down geht

Erdbeere und die wilde Maus
Diese Nacht sieht müde aus
Doch ich fahr, bis die Zahl explodiert
Weil diese Bahn zu mir gehört

[Weird Party Break]
Ich bin so schön, ich bin so toll
Irgendwas mit Tirol
Sellerie, Sellerie
Die Maus fährt in Endlosschleife

Ich bin so wach, ich bin so lost
Noch ein Count um jeden Preis
Sellerie, Sellerie
Und der Hai wird langsam leise

[Bridge]
Doch hinter jedem dummen Lied
Hinter jedem kurzen Lachen
War dieser eine Blick nach oben
Und der Wille weiterzumachen

Es war nicht nur irgendein Ride
Nicht nur Kurve, Count und Licht
Diese wilde kleine Maus
Wurde irgendwann zu Pflicht

[Final Hook]
Erdbeere und die wilde Maus
Ich steig ein und komm nicht raus
Ride by ride, count by count
Bis der Hai da oben down geht

Erdbeere und die wilde Maus
Diese Nacht sieht müde aus
Doch ich fahr, bis die Zahl explodiert
Weil diese Bahn zu mir gehört

[Final Chant]
Klick, klack, Count geht rauf
Wilde Maus, ich hör nicht auf
Klick, klack, Nacht wird hell
Sellerie, der Kopf fährt schnell

[Outro]
Das war meine Bahn.
Und ich bin noch nicht fertig.`,"After Midnight Queue":`[Cold Open]
Die Tore schließen.
Der Bereich ist leer.
Bitte verlassen Sie das Gelände.
Bitte verlassen Sie das Gelände.

[Intro]
Doch wir waren noch drin.
Irgendwo zwischen Licht und Nebel.
One more Ride.
One more Count.

[Verse 1]
Mitternacht hängt schwer im roten Licht
Kein Lachen mehr, kein Schritt im Gang
Die Wege leer, der Himmel dicht
Und trotzdem fängt die Runde an

Die Nacht sagt: Schluss, der Park wird still
Doch unser Bildschirm bleibt noch wach
Wenn keiner mehr hier fahren will
Dann fahren wir für diese Nacht

Ein letzter Klick, ein letzter Port
Zurück ins dunkle rote Tor
Als hätte uns die Welt vergessen
Und Traumatica macht nochmal auf

[Hook]
After midnight queue
We’re still here, still alive
One more ride in the dark
One more count for the night

After midnight queue
Wenn die Tore längst zu sind
Bleiben wir im roten Licht
Bis der Morgen uns findet

[Verse 2]
Man sagt uns raus, doch wir sind nah
Noch nicht fertig, noch nicht frei
Ein Teamruf irgendwo im Chat
Und plötzlich sind wir wieder dabei

Die Musik klingt nur noch von fern
Der Regen malt die Wege schwarz
Wir zählen weiter, müde, leer
Aber mit Feuer unter’m Herz

Kein Publikum, kein großer Plan
Nur zwei Stimmen in der Nacht
Und jede Runde fühlt sich an
Als hätten wir sie uns bewacht

[Midnight Break]
Schlange ist leer.
Licht ist rot.
Ride fährt los.
Keiner geht.

Schlange ist leer.
Licht ist rot.
Noch ein Count.
Keiner geht.

[Hook]
After midnight queue
We’re still here, still alive
One more ride in the dark
One more count for the night

After midnight queue
Wenn die Tore längst zu sind
Bleiben wir im roten Licht
Bis der Morgen uns findet

[Bridge]
Vielleicht war es nicht so geplant
Vielleicht war es nicht normal
Doch manche Nächte enden nicht
Nur weil der Park sie schließen will

Und wenn man uns zurück ins Dunkel setzt
Dann nehmen wir das als Signal
Noch eine Fahrt, noch eine Zahl
Noch einmal durch das rote Tal

[Final Section]
After midnight queue
No one left but we ride through
After midnight queue
Die Nacht gehört den letzten Zwei

After midnight queue
No one left but we ride through
After midnight queue
Bis alles wieder still wird

[Outro]
Die Tore schließen.
Der Bereich ist leer.
Doch irgendwo im roten Licht
Fährt noch eine Bahn.`,"Clown House #1":`[Cold Open]
Das war keine Bahn.
Das war ein Haus.
Ein Weg hinein.
Und irgendwann…
kam man nicht mehr richtig raus.

[Intro]
Clown House.
Licht flackert.
Tore auf.
Wir gehen wieder rein.

[Verse 1]
Kein Wagen wartet, kein Sitz klappt zu
Nur ein rotes Tor und keine Ruh
Ein Schritt hinein, der Raum wird klein
Und irgendwo fängt Lachen an

Die Clowns steh’n näher als zuvor
Sie schreien durch das Licht
Ballons im Weg, der Boden schwankt
Und jeder Count zerkratzt den Blick

Die Röhre dreht, der Kopf dreht mit
Das Spiegelglas verzieht mein Gesicht
Ich seh mich einmal, zweimal, zehnmal
Und keiner davon glaubt mir nicht

[Pre-Hook]
Wieder rein
Wieder raus
Wieder warten
Clown House

Wieder rein
Wieder raus
Noch ein Count
Clown House

[Hook]
Clown House number one
Die Clowns kommen näher
Clown House number one
Und das Licht wird schwerer

Clown House number one
We walk until we own the night
Noch ein Gang, noch ein Schrei
Diese Krone bleibt bei uns

[Verse 2]
Durch den Raum, der Kopf steht falsch
Die Wände lachen schief
Eine Leiter hoch, ein letzter Blick
Dann rutsch ich wieder tief

Und draußen warten, bis es öffnet
Nur um wieder reinzugehen
Das ist kein Ride, das ist ein Kreis
Und irgendwann bleibt man darin steh’n

Motte zählt, Erdbeere zählt
Die Nacht hängt kalt im Clownsgesicht
Doch dieses Haus hat mich gewählt
Und ich verlass es heute nicht

Die Mafia steht im roten Licht
Fast alles schon in unserer Hand
Doch wenn das Clown House noch nicht fällt
Dann wird hier weiter durchgerannt

[Hook]
Clown House number one
Die Clowns kommen näher
Clown House number one
Und das Licht wird schwerer

Clown House number one
We walk until we own the night
Noch ein Gang, noch ein Schrei
Diese Krone bleibt bei uns

[Breakdown]
Ballons.
Röhre.
Spiegel.
Leiter.
Rutsche.
Tor zu.
Warten.
Tor auf.

Ballons.
Röhre.
Spiegel.
Leiter.
Rutsche.
Tor zu.
Noch mal.

[Dark Bridge]
Irgendwann wird jedes Lachen
Zu einer Stimme in der Wand
Irgendwann kennt jeder Spiegel
Meinen Namen, meine Hand

Und die Clowns kommen näher
Mit jedem Count, mit jedem Lauf
Doch wenn sie denken, ich dreh um
Dann dreh ich nur noch mehr auf

[Final Section]
Wir hatten die Nacht
Wir hatten den Count
Wir hatten die Rides
Und jetzt fällt dieses Haus

Kein Ausgang mehr
Kein Zurück im Licht
Clown House Number One
Und Traumatica gehört uns

[Final Hook]
Clown House number one
Die Clowns kommen näher
Clown House number one
Doch wir bleiben stärker

Clown House number one
We walk until we own the night
Noch ein Gang, noch ein Schrei
Diese Krone bleibt bei uns

[Final Chant]
Wieder rein
Wieder raus
Wieder warten
Clown House

Wieder rein
Wieder raus
Number One
Clown House

[Outro]
Das war keine Bahn.
Das war ein Haus.
Und jetzt gehört es uns.`,"Last Guests":`[Cold Open - distant rain, quiet footsteps, low male spoken vocal]
Keiner mehr da.
Keine Stimmen im Chat.
Nur rotes Licht.
Und wir.

[Verse 1 - calm, tired male vocal]
Die Wege sind leer, die Lichter noch an
Der letzte Abend fühlt sich anders an
Kein Rennen mehr durch das Clown House
Kein Hai, der uns noch hält

Die Counts sind geschrieben
Die Nacht ist besiegt
Und irgendwo im roten Nebel
Hört man, wie Traumatica atmet

Wir steh’n noch hier, obwohl keiner mehr fährt
Als hätte der Park uns nie wirklich gehört
Doch jeder Gang, jede Bahn, jeder Count
Hat diesen Ort zu uns gemacht

[Pre-Chorus - slow build, emotional]
Und wenn die Tore bald schließen
Bleibt etwas von uns hier
Zwischen Regen und Musik
Zwischen Wahnsinn und Papier

[Chorus - emotional, catchy, English/German mix]
We are the last guests
Standing in the red light
No one left but us tonight
We held the dark, we held the line

We are the last guests
Wenn die Welt schon weiterzieht
Warten wir auf das letzte Zeichen
Bis die Show für uns beginnt

[Verse 2 - more rhythm, nostalgic but proud]
Die Saison war verlängert
Doch auch das geht vorbei
Ein letzter Abend, ein letzter Blick
Und alles fühlt sich schwerer an

Die königliche Mafia
Steht still im roten Schein
Nicht laut, nicht wild, nicht auf der Jagd
Nur müde, wach und frei

Traumatica gehört uns
Nicht, weil es jemand sagt
Sondern weil wir blieben
Als niemand mehr gefragt hat

[Chorus - bigger, wider guitars]
We are the last guests
Standing in the red light
No one left but us tonight
We held the dark, we held the line

We are the last guests
Wenn die Welt schon weiterzieht
Warten wir auf das letzte Zeichen
Bis die Show für uns beginnt

[Quiet Break - almost whispered, distant carnival music]
Kein Count mehr im Kopf
Für einen kurzen Moment
Nur Stille im Park
Und das Gefühl:
Wir waren wirklich hier.

[Bridge - emotional lift, slow drums building]
Vielleicht war es nur ein Server
Vielleicht war es nur ein Event
Doch manche Orte bleiben
Wenn man ihren Namen kennt

Vielleicht war es nur ein Herbst
Vielleicht nur eine Nacht
Doch wir haben aus diesen Counts
Unsere Legende gemacht

[Final Chorus - powerful, full band, nostalgic victory]
We are the last guests
Standing in the red light
No one left but us tonight
We held the dark, we held the line

We are the last guests
Wenn die Tore langsam schließen
Bleiben wir noch einen Augenblick
Bevor die letzten Lichter fließen

[Outro - rain ambience, soft spoken vocal]
Keiner mehr da.
Nur wir im roten Licht.
Die Nacht ist fast vorbei.
Aber die Show beginnt gleich.`,Sondervorstellung:`[Cold Open - distant circus music, empty applause, low male spoken vocal]
Keine Menge mehr.
Keine Schlange mehr.
Nur rotes Licht.
Und eine Show,
die eigentlich nicht mehr laufen sollte.

[Intro - creepy music box, slow circus rhythm]
Ladies and gentlemen…
Die letzte Runde ist vorbei.
Doch für die letzten Gäste
beginnt die Sondervorstellung.

[Verse 1 - German male vocal, slow and cinematic]
Der Platz ist leer, die Luft wird kalt
Die Lichter zittern über’m Sand
Wir stehen da, als wär die Nacht
Noch nicht bereit für ihren Rand

Kein Count mehr, der uns weiterzieht
Kein Hai, der irgendwo noch rennt
Nur dieses leise Zirkuslied
Das man im roten Nebel kennt

Und plötzlich öffnet sich ein Weg
Wo eben keiner offen war
Ein Schritt nach hinten, halb Backstage
Und alles fühlt sich seltsam wahr

[Chorus - emotional, German/English mix, big but controlled]
Sondervorstellung
Nur für uns im roten Licht
One last show before the gates close
Ein letzter Blick, bevor es bricht

Sondervorstellung
Wenn die Nacht den Atem hält
We were the last ones standing
In einer fast vergessenen Welt

[Verse 2 - more movement, theatrical]
Ben tanzt oben auf dem Seil
Als wär die Schwerkraft nicht mehr da
Ein blauer Schatten steht daneben
Fast zu absurd, doch wirklich wahr

Wir laufen Kreise durch den Rand
Nicht ganz verboten, nicht ganz frei
Ein falscher Backstage, echter Moment
Und keiner von uns will vorbei

Die Show ist klein, doch fühlt sich groß an
Weil niemand sonst sie mit uns sieht
Ein letzter Spaß, ein letztes Staunen
Bevor die ganze Welt verzieht

[Chorus - bigger, guitars enter wider]
Sondervorstellung
Nur für uns im roten Licht
One last show before the gates close
Ein letzter Blick, bevor es bricht

Sondervorstellung
Wenn die Nacht den Atem hält
We were the last ones standing
In einer fast vergessenen Welt

[Bridge - surreal, quiet, music box and heartbeat bass]
Ein Selfie vor dem letzten Tor
Ein Lachen, müde, viel zu spät
Der Zirkus flüstert noch einmal
Bevor er in den Schatten geht

Tiefer, tiefer, irgendwo
Klingt noch im Kopf ein alter Satz
Sellerie im Hinterraum
Und Regen auf dem leeren Platz

[Final Build - drums rising, emotional tension]
Noch ein Blick
Noch ein Bild
Noch ein Schritt
Dann wird es still

[Final Chorus - powerful, bittersweet, full band]
Sondervorstellung
Nur für uns im roten Licht
One last show before the gates close
Ein letzter Blick, bevor es bricht

Sondervorstellung
Wenn die Nacht den Atem hält
We were the last ones standing
In einer fast vergessenen Welt

[Outro - gate closing, rain ambience, soft spoken vocal]
Dann gingen die Tore zu.
Und für einen Moment
war alles still.
Doch wir waren da.
Wir haben es gesehen.`,"Waiting for Reopening":`[Cold Open - rain ambience, distant closed gate, low male spoken vocal]
Die Tore sind zu.
Der Regen bleibt.
Und irgendwo im Kopf
läuft die Nacht noch weiter.

[Intro - soft dark piano, distant synth, emotional male vocal]
Wir stehen vor dem Eingang
Doch das Licht ist aus
Kein roter Nebel zieht uns rein
Kein Lachen aus dem Clown House

Die Wege liegen still
Als hätte nie jemand gezählt
Doch wir wissen noch genau
Wie sich diese Nacht anfühlt

[Verse 1 - German male vocal, nostalgic and serious]
Wir kamen nur zum Fahren
Und gingen anders raus
Aus einem Call wurden Wochen
Aus einem Ride ein Zuhause

Wir haben Nächte durchgezählt
Bis der Morgen uns fand
Haben Namen gejagt
Und die Krone verbrannt

Wir wurden müde, wurden ernster
Doch wir blieben immer hier
Zwischen Regen, Licht und Wahnsinn
Wurde Traumatica zu uns

[Pre-Chorus - rising emotion, drums slowly entering]
Und vielleicht kommt es wieder
Vielleicht öffnet sich das Tor
Doch es wird nie mehr ganz dasselbe
Wie in diesen Nächten zuvor

[Chorus - big emotional anthem, male vocals, full band enters]
Open the gates again
We’re waiting in the rain
One more night, one more ride
Take us back where we felt alive

Open the gates again
Let the red lights call our name
We know it won’t be the same
But we’re waiting for reopening

[Verse 2 - more drive, proud but bittersweet]
Tiefer, tiefer klingt noch leise
Wie ein Fluch in unserm Kopf
Und irgendwo lacht noch ein Clown
Wenn die letzte Lampe tropft

Sellerie im Hinterraum
Ein dummer Witz, der niemals geht
Und plötzlich merkt man, dass ein Meme
Auch wie Erinnerung weiterlebt

Die wilde Maus, der Death Drop fällt
Das Clown House schaut uns an
Last Guests im roten Licht
Bis die letzte Show begann

Wir haben alles dort gelassen
Jeden Count und jeden Schrei
Und jetzt stehen wir vor verschlossenen Toren
Doch ein Teil von uns bleibt frei

[Chorus - bigger, more powerful guitars]
Open the gates again
We’re waiting in the rain
One more night, one more ride
Take us back where we felt alive

Open the gates again
Let the red lights call our name
We know it won’t be the same
But we’re waiting for reopening

[Emotional Breakdown - music drops, soft piano, rain, vulnerable male vocal]
Und ja, es tut weh
Dass diese Nacht nicht mehr da ist
Dass man nicht einfach zurück kann
Wenn der Kopf noch nicht fertig war

Wir hoffen, dass es wiederkommt
Wir hoffen es so sehr
Doch selbst wenn sich die Tore öffnen
Wird es nicht mehr wie damals werden

Denn damals war der Anfang
Damals war das erste Mal
Damals wurden aus ein paar Counts
Eine Legende aus rotem Stahl

[Build-Up - heartbeat kick, guitars swelling, spoken into shouted vocal]
Aber wenn das Licht wieder brennt
Wenn der Regen wieder fällt
Wenn irgendwo ein Tor aufgeht
Dann sind wir wieder da

Noch ein Count
Noch ein Call
Noch ein Ride
Noch einmal

[Final Chorus - explosive, huge drums, wide guitars, layered male vocals]
Open the gates again
We’re waiting in the rain
One more night, one more ride
Take us back where we felt alive

Open the gates again
Let the red lights call our name
We know it won’t be the same
But we’re waiting for reopening

[Final Chorus Extension - maximum energy, album finale]
Traumatica Nights
We carried them through fire and rain
Traumatica Nights
We would do it all again

Traumatica Nights
The gates are closed, but not the flame
This was the beginning
And we’re waiting for reopening

[Outro - emotional, rain ambience, distant carnival music returns]
Die Tore sind zu.
Doch wir bleiben davor.
Nicht weil wir nicht loslassen können.
Sondern weil wir wissen:
Das war Traumatica Nights.`,Coins:`
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins

[Verse 1]
Mein Resortpass läuft bald aus
Bald flieg ich aus dem Discord status raus
Bald bin ich nicht Teil von Team Spezial
Denn bald endet mein Resort Pass Trial

Gestern noch  Rechte gehabt
Gestern noch im channel gelacht
Gestern noch den Ride-Op genutzt
Doch wenn ich mich nicht beeile behandelt mich der Staff wie Schmutz

[Chorus]
Ich brauche Coins
Geisterbahn, Can Can Coaster Alles wird gefahren
Ich brauche Coins
Sogar vor Irland mache ich keinen Stop

Ich brauch Coins
Elfenfahrt und Märchenbahn
den sonst
Steh ich ganz hinten an 

[Dance Break]
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Goldene, runde, tolle Coins 
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Über die würde ich mich jetzt gern freun

[Verse 2]
Irland wird komplett auseinander genommen
hundertfünfundsiebzig mal in  Dancing Dingie rein
Viele Rides ich zähl Sie alle
So schwer kann das doch nicht sein

Euro Tower, Freudenreich
Ich schaffe das noch 
Und da stellt sich mir die eine Frage
Wann Motte wieder kocht.

[Chorus]
Ich brauche Coins
Geisterbahn, Can Can Coaster Alles wird gefahren
Ich brauche Coins
Sogar vor Irland mache ich keinen Stop

Ich brauch Coins
Elfenfahrt und Märchenbahn
den sonst
Steh ich ganz hinten an 

[Dance Break]
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Goldene, runde, tolle Coins 
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Über die würde ich mich jetzt gern freun

[Chorus]
Ich brauche Coins
Geisterbahn, Can Can Coaster Alles wird gefahren
Ich brauche Coins
Sogar vor Irland mache ich keinen Stop

Ich brauch Coins
Elfenfahrt und Märchenbahn
den sonst
Steh ich ganz hinten an 

[Bridge]
Ab und zu auch mal eine Pause. 
schau mir rulantica an
Frage mich ob ich auch ein Held
auf dem großen Meer sein kann

Doch dann frage ich mich selber
während ich da enspannt bin.
Warum das schauen einer ein Stunden Show 
Mir keine Coins einbringt.

[Dance Break]
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Goldene, runde, tolle Coins 
Ich brauche Coins
Ich brauch Coins
Ich brauch Coins
Ich brauch Coins
Über die würde ich mich jetzt gern freun

[Chorus]
Ich brauche Coins
Geisterbahn, Can Can Coaster Alles wird gefahren
Ich brauche Coins
Sogar vor Irland mache ich keinen Stop

[Outro]
Doch ich hoffe 
ich schaffe es noch
das sollte ja nicht so schwer sein

Also starte ich mein Minecraft 
und joine wieder
auf EPMC rein `,"Palast der Krone":`[Intro]

Erdbeerenfresser...
Königliche Mafia...
Der Palast der Krone...
Erhebt sich...

[Verse 1]

Mitten in der Nacht wird der Bauplatz markiert,
jeder in der Crew ist hoch motiviert.
Stein und Quarz, die Kisten voll,
heute entsteht etwas wirklich gewaltvoll.

Doch ein Creeper kommt und sprengt eine Wand,
für einen Moment herrscht Chaos im Land.
Doch Erdbeerenfresser sagt: „Weiter, nicht steh'n!“
Und wir fangen sofort wieder an zu erhöh'n.

[Build-Up]

Block für Block,
immer höher.
Stock für Stock,
immer größer.

Die Lichter geh'n an,
man sieht es schon:
Es entsteht der Palast der Krone!

[Drop]

Palast der Krone!

Hey!
Hey!
Hey!

Palast der Krone!

Für die Königliche Mafia!

Hey!
Hey!
Hey!

Palast der Krone!

[Verse 2]

Redstone versagt und die Tore steh'n still,
doch keiner von uns verliert seinen Willen.
Diamanten verbaut in den großen Saal,
die Türme ragen über jedes Tal.

Material wird knapp,
die Lager fast leer.
Doch die Crew zieht los
und beschafft immer mehr.

Tag für Tag,
Nacht für Nacht.
Die Königliche Mafia
zeigt ihre Macht.

[Build-Up]

Immer weiter,
immer mehr.
Kein Rückschlag
fällt uns schwer.

Durch Regen und Sturm,
durch Schatten und Drohnen.
Wir bauen den Palast der Krone.

[Drop]

Palast der Krone!

Hey!
Hey!
Hey!

Palast der Krone!

Für die Königliche Mafia!

Goldene Hallen!
Diamanten thronen!

Willkommen im Palast der Krone!

[Bridge]

Blitze am Himmel,
Monster im Feld.
Doch diese Villa
beherrscht die Welt.

Kein Gegner zu stark,
kein Weg zu weit.
Die Krone erhebt sich
für alle Zeit.

[Final Drop]

Palast der Krone!

Palast der Krone!

Erdbeerenfresser!
Erdbeerenfresser!

Königliche Mafia!

Palast der Krone!

Hey!
Hey!
Hey!

[Outro]

Der Bau ist vollendet...
Die Krone steht...
Der Palast der Krone...
Für die Ewigkeit...`,"Uf de Bärge wird gfiiret":`[Intro]
Juhuiii!
Hüt isch dr Tag, mir sind parat,
uf em Bärg wird richtig g’fiiret grad!

[Vers 1]
Uf de Bärge, d’Luft isch klar,
Erdbeerenfresser, du bisch dr Star.
D’Sunne lacht über Schnee und Stei,
mir sind all für dich debii.

Mit Rucksack voll vo guetem Wille,
und d’Freud wird immer no chli stiler.
Freunde singed, d’Stimm isch hoch,
hüt wird g’lebt, mir falled no uf’s Loch!

[Pre-Chorus]
Und jedes Echo vo de Wand,
ruuft din Name i jedes Land:

[Chorus]
Uf de Bärge wird gfiiret,
alles Gueti, mir gratuliere!
Erdbeerenfresser, hüt isch dis Fest,
mir mache Lärm, mir sind dr Best!

Uf de Bärge wird gfiiret,
d’Freud im Herz isch multipliziert!
Happy Birthday, stoss mit aa,
mir bliibed hüt no länger da!

[Vers 2]
Es git Chueche uf em Gipfel dra,
mit Kerzli, die im Wind verbla.
Doch d’Stimmung brennt viel heller grad,
jede Moment wird zum Paradiespfad.

Du bisch wie d'Sunne am Berg so warm,
bringst jede Mensch i dis Charm.
Drum singed mir so laut wie mir chönd,
bis jede Stern am Himmel brennt.

[Bridge]
Und wenn dr Abig langsam chunnt,
und dr Himmel wird so wundersund,
bliibt dis Lache i de Luft,
wie e ewige Bergparfüm-Duft.

[Chorus]
Uf de Bärge wird gfiiret,
alles Gueti, mir gratuliere!
Erdbeerenfresser, hüt isch dis Fest,
mir mache Lärm, mir sind dr Best!

Uf de Bärge wird gfiiret,
d’Freud im Herz isch multipliziert!
Happy Birthday, stoss mit aa,
mir bliibed hüt no länger da!

[Outro]
Uf de Bärge, wo d’Ziit still stoht,
bliibt dis Tag, wo nie vergoht.
Erdbeerenfresser – alles Gueti,
mir singed no lang für dich hüt i`,"Wir drehen uns nicht allein":`[Intro]
Wenn das Laufrad sich dreht
doch du kommst nicht mehr voran
wenn dein Körnchenvorrat voll ist
aber nichts dich freuen kann

[Verse 1]
Du sitzt allein im Häuschen
mit der Backe voller Korn
doch irgendwo tief innen
fühlt sich alles falsch geformt

Der Wasserspender tropft
wie ein trauriger Applaus
und du schaust aus deinem Käfig
in die große Welt hinaus

[Pre-Chorus]
Doch hör mal kleines Fellgesicht
du musst da nicht alleine durch
wir sitzen alle mit im Streu
und machen heute keinen Fluchtversuch

[Chorus]
Komm in den Körnchenkreis
wir drehen uns nicht allein
wenn dein Herz zu schwer geworden ist
dann darfst du bei uns sein

Komm in den Körnchenkreis
wir reichen Sonnenblumenkerne rum
manchmal ist das Leben hart
doch heute bleiben wir noch hier, darum

[Verse 2]
Da ist Günther aus dem Laufrad
der rennt seit Dienstag schief
und Hilde sagt seit Wochen
dass sie niemand wirklich lieb

Horst hat seinen Brokkoli
aus Wut ins Heu gelegt
doch als jemand leise piepste
hat er ihn zurückbewegt

[Pre-Chorus]
Und jeder kleine Hamster
hat mal Sägespäne im Gefühl
doch wenn wir uns zusammensetzen
wird selbst der Käfig wieder kühl

[Chorus]
Komm in den Körnchenkreis
wir drehen uns nicht allein
wenn dein Herz zu schwer geworden ist
dann darfst du bei uns sein

Komm in den Körnchenkreis
wir reichen Sonnenblumenkerne rum
manchmal ist das Leben hart
doch heute bleiben wir noch hier, darum

[Bridge]
Kein Hamster muss perfekt sein
kein Fell muss immer glänzen
auch wer nur noch leise piepst
darf seine Sorgen hier ergänzen

Und wenn die Nacht am Käfig nagt
und alles viel zu dunkel scheint
dann sitzt da irgendwo ein Freund
der mit dir zusammen Körner weint

[Final Chorus]
Komm in den Körnchenkreis
wir drehen uns nicht allein
wenn dein kleines Herz noch schlägt
dann soll es nicht alleine sein

Komm in den Körnchenkreis
bis der Morgen wieder lacht
wir bleiben hier, wir halten durch
ein Korn noch für die Nacht

[Outro]
Körnchenkreis
jeden Mittwoch um halb acht
neben dem Wasserspender
wo ein Hamster wieder Hoffnung macht
`,"Dein Platz bleibt leer im warmen Licht":`[Intro]
Das Laufrad steht still
seit gestern Nacht
der Körnchenkreis schweigt
es hat nichts gebracht

[Verse 1]
Günther sitzt am Wasserspender
und sagt kein einziges Wort
Hilde hält den Brokkoli
doch keiner nimmt ihn fort

Der Käfig wirkt heut größer
als er gestern Abend war
und irgendwo im Sägemehl
liegt noch ein Sonnenblumenkern da

[Pre-Chorus]
Wir hatten Tee aus kleinen Deckeln
und Hoffnung auf Papier
doch manchmal reicht ein Kreis aus Körnern
nicht gegen das Gewitter hier

[Chorus]
Körnchenkreis, Körnchenkreis
wir wollten doch zusammen sein
doch einer hat den Weg verloren
und wir drehen uns jetzt allein

Körnchenkreis, Körnchenkreis
dein Platz bleibt leer im warmen Licht
wir lachen leise durch die Tränen
doch vergessen werden wir dich nicht

[Verse 2]
Horst hat heute nicht geschimpft
nicht mal über altes Heu
und selbst der kleine Wasserspender
tropft heut irgendwie nicht neu

An der Wand hängt noch der Zettel
„Mittwoch, halb acht, bitte komm“
doch der Stuhl aus halbem Korken
bleibt für immer jetzt unbesetzt und stumm

[Pre-Chorus]
Vielleicht war unser Kreis zu klein
vielleicht kam Hilfe viel zu spät
doch wenn ein Hamster leise fällt
ist es die ganze Gruppe, die sich dreht

[Chorus]
Körnchenkreis, Körnchenkreis
wir wollten doch zusammen sein
doch einer hat den Weg verloren
und wir drehen uns jetzt allein

Körnchenkreis, Körnchenkreis
dein Platz bleibt leer im warmen Licht
wir lachen leise durch die Tränen
doch vergessen werden wir dich nicht

[Bridge]
Und wenn ein neuer Hamster fragt
warum der Platz dort leer bleibt steh’n
dann sagen wir: Setz dich zu uns
wir wollen dich früher sehen

Nicht jeder Witz heilt jede Nacht
nicht jeder Kreis gewinnt den Streit
doch heute legen wir ein Korn hin
für Liebe, Trauer und für Zeit

[Final Chorus]
Körnchenkreis, Körnchenkreis
wir drehen langsamer als sonst
weil du in jedem leisen Quietschen
noch ein kleines bisschen wohnst

Körnchenkreis, Körnchenkreis
es hat für dich nicht ganz gereicht
doch für den nächsten bleiben wir sitzen
bis der Morgen wieder weicht

[Outro]
Das Laufrad steht still
doch das Licht bleibt an
Körnchenkreis, jeden Mittwoch
für jeden, der noch kommen kann
`,"Das Laufrad des Grauens":`[Intro]
Das Laufrad dreht sich wieder
doch niemand hat es angeschubst
im Käfig riecht es seltsam
und Günther sagt: „Ich glaub, es spukt“

[Verse 1]
Der Platz war leer seit Mittwoch
doch heute sitzt dort wer
mit kalten kleinen Pfötchen
und einem Blick, ganz dunkel schwer

Hilde lässt den Brokkoli fallen
Horst versteckt sich tief im Streu
denn aus dem Schatten piepst es leise:
„Der Körnchenkreis beginnt aufs Neu“

[Pre-Chorus]
Wir wollten Trauer, Tee und Frieden
doch irgendwas ist aufgewacht
und dieses kleine tote Fellgesicht
hat Hunger mitgebracht

[Chorus]
Zombie-Hamster, Zombie-Hamster
er kommt zurück im Mondenschein
erst war er traurig, dann war er weg
jetzt lädt er alle zum Sterben ein

Zombie-Hamster, Zombie-Hamster
das Laufrad wird zum Höllentor
Körnchenkreis, wir rennen los
doch er ist immer schon davor

[Verse 2]
Günther schreit: „Zum Wasserspender!“
doch der Tropfen fällt zu spät
Hilde betet zu den Körnern
während Horst im Häuschen fleht

Die Sonnenblumenkerne klappern
wie Applaus aus einer Gruft
und von draußen ruft der Käfig:
„Niemand kommt hier heute raus“

[Pre-Chorus]
Wir hatten Regeln, Mut und Hoffnung
einen Stuhl aus halbem Kork
doch gegen einen Untot-Hamster
hilft kein Brokkoli-Support

[Chorus]
Zombie-Hamster, Zombie-Hamster
er kommt zurück im Mondenschein
erst war er traurig, dann war er weg
jetzt lädt er alle zum Sterben ein

Zombie-Hamster, Zombie-Hamster
das Laufrad wird zum Höllentor
Körnchenkreis, wir rennen los
doch er ist immer schon davor

[Bridge]
Und als die Nacht am Käfig nagt
steht nur noch einer still
der Zombie schaut zum Futternapf
weil er noch ein Körnchen will

Vielleicht war alles nur ein Fluch
vielleicht nur schlechter Salat
doch wer den Körnchenkreis betritt
kommt selten unverändert raus

[Final Chorus]
Zombie-Hamster, Zombie-Hamster
jetzt dreht der Käfig durch die Nacht
aus Selbsthilfe wurde Endzeit
und keiner hat’s nach Haus geschafft

Zombie-Hamster, Zombie-Hamster
sein kleines Herz schlägt nicht mehr mit
doch wenn das Laufrad wieder knarrt
dann weißt du: Er ist nicht mehr quitt

[Outro]
Das Licht geht aus
das Streu wird kalt
ein Quietschen bleibt im Raum

Körnchenkreis Teil Drei
jeden Mittwoch um halb acht
nur diesmal kommt keiner mehr raus
`,"Körnchenkreis Finale":`[Intro]
Das Laufrad dreht sich schneller
als die Erde sich bewegt
ein Zombie-Hamster lacht im Käfig
während draußen Feuer regnet

[Verse 1]
Der Körnchenkreis liegt in Trümmern
doch der Untote steht bereit
mit kalten Pfoten auf dem Futternapf
ruft er: „Jetzt beginnt die Zeit“

Hilde rennt zum Wasserspender
Horst schreit: „Nicht schon wieder heut!“
Günther sieht zum Himmel hoch
und flüstert: „Leute… das ist neu“

[Pre-Chorus]
Denn überm Dach, da glüht ein Punkt
erst klein, dann viel zu groß
und selbst der Zombie-Hamster merkt
jetzt geht hier keiner mehr los

[Chorus]
Meteor, Meteor
du kommst direkt aus dunkler Nacht
Körnchenkreis und Zombie-Hamster
werden heut zu Sternenstaub gemacht

Meteor, Meteor
kein Käfig hält dich diesmal auf
das Laufrad singt sein letztes Lied
und dann nimmt das Schicksal seinen Lauf

[Verse 2]
Der Zombie wollte alle holen
doch der Himmel kam zuvor
sein dramatischer Endzeit-Monolog
ging im Donner einfach verlor’n

Die Sonnenblumenkerne fliegen
wie Konfetti durch den Raum
und für einen kurzen Augenblick
wirkt alles wie ein schlechter Traum

[Pre-Chorus]
Kein Brokkoli kann jetzt noch retten
kein Kreis, kein Korn, kein Mut
wenn ein kosmischer Fels entscheidet
dann macht selbst Untod nicht mehr gut

[Chorus]
Meteor, Meteor
du kommst direkt aus dunkler Nacht
Körnchenkreis und Zombie-Hamster
werden heut zu Sternenstaub gemacht

Meteor, Meteor
kein Käfig hält dich diesmal auf
das Laufrad singt sein letztes Lied
und dann nimmt das Schicksal seinen Lauf

[Bridge]
Und irgendwo im großen Nichts
dreht sich ein Rad aus Licht
ein kleiner Chor aus Hamsterstimmen
singt: „Vergesst den Körnchenkreis nicht“

Der Zombie schaut ein letztes Mal
zum Futternapf zurück
und sagt mit brüchig-kaltem Piepsen
„Okay… das war nicht mein Stück“

[Final Chorus]
Meteor, Meteor
das Finale ist zu groß
kein Hamster bleibt, kein Zombie lacht
nur Staub im All, bedeutungslos

Meteor, Meteor
du machst den Käfig sternenklar
aus Körnchenkreis und Untot-Liebe
wird ein Lied, das niemals war

[Outro]
Das Laufrad schweigt
der Napf ist leer
kein Quietschen in der Nacht

Körnchenkreis Finale
jeden Mittwoch um halb acht
fällt jetzt leider aus
wegen Einschlag aus dem All
`,"Brüggetag mit Parkfan95":`[Intro – gesprochen]
Sodele.
Heut isch Brügggggggetag.
De Silas hot d’Kamera dabei.
Parkfan95 isch im Park.
Des kann nur eskaliere.

[Verse 1]
Morgens um achte, mir fahr’n Richtung Rust,
Kaffee im Becher un Hoffnung in de Brust.
„Heut wird’s bestimmt leer“, sagt einer ganz smart,
doch am Kreisverkehr merk ich: des wird hart.

Parkplatz ganz hinne, fast scho in Frankreich,
de Shuttlebus schaut uns mitleidig gleich.
Kinder am renne, Väter am schwitze,
un jeder hot Tickets un Brezle in de Tüte.

[Pre-Chorus]
Dann seh ich en Mann mit Kamera stehn,
ich sag: „Moment, den hab ich doch schon gesehn!“
Silas grinst und sagt: „Leit, des wird brutal,
Brüggetag im Park, des isch wieder normal!“

[Chorus]
Brüggetag, Brüggetag,
alle hen frei un keiner hot’s g’sagt.
Brüggetag, Brüggetag,
Parkfan95 filmt, weil’s jeder mag.

Brüggetag, Brüggetag,
Wartezeit hoch, doch Stimmung am Start.
Brüggetag, Brüggetag,
mir wollte nur kurz rein — jetzt wird’s legendär hart.

[Verse 2]
Voltron sagt hundert, Silver Star mehr,
Arthur bis Island, Blue Fire isch schwer.
Voletarium voll, Euro-Mir singt,
während irgendwo einer vor Verzweiflung winkt.

De Silas steht vorne, ganz ruhig wie ein Profi,
sagt: „Des isch heut voll, aber irgendwie cozy.“
Im Hintergrund schreit einer: „Wo isch de Plan?“
Ich sag: „Bruder, am Brüggetag fangsch du net damit an.“

[Pre-Chorus 2]
Dann kommt Alexis aus de Menge raus,
mit Sonnenbrill’ un sehr wichtigem Applaus.
Er sagt: „Ich wollt nur kurz zur Geisterbahn geh’n.“
Drei Stunden später kann man ihn noch steh’n seh’n.

[Chorus]
Brüggetag, Brüggetag,
alle hen frei un keiner hot’s g’sagt.
Brüggetag, Brüggetag,
Parkfan95 filmt, weil’s jeder mag.

Brüggetag, Brüggetag,
Alexis ruft: „Des war so net geplant!“
Brüggetag, Brüggetag,
doch genau deshalb wird de Tag bekannt.

[Bridge – gesprochen]
Sodele, Lagebericht.
Parkplatz: voll.
App: rot.
Wartezeiten: frech.
Silas: filmt.
Alexis: irgendwo verschwunde.
Und mir?
Mir gönne trotzdem.

[Bridge 2 – Crowd Chant]
Wer isch im Park?
Parkfan95!
Was isch heut?
Brüggetag!
Wo isch Alexis?
In de Queue!
Fahre mir trotzdem?
Irgendwann, juhu!

[Verse 3]
Beim Flammkuchenstand steht einer seit halb drei,
sagt: „Ich wollt nur esse, jetzt bin ich Teil dabei.“
Silas zoomt rein, die Lage wird wild,
Brüggetag schreibt heut sein eigenes Bild.

Alexis kommt zurück mit nem leeren Blick,
sagt: „Ich war kurz Pommes hol’n und fand net zurück.“
De Park isch voll, doch alle lache sich schlapp,
weil so en Brüggetag halt niemand planen kann.

[Final Chorus]
Brüggetag, Brüggetag,
alle hen frei un keiner hot’s g’sagt.
Brüggetag, Brüggetag,
Parkfan95 filmt, weil’s jeder mag.

Brüggetag, Brüggetag,
Alexis winkt aus de Warteschlang’.
Brüggetag, Brüggetag,
des Chaos bleibt uns noch e Leben lang.

[Outro – gesprochen]
Sodele.
Nächstes Jahr fahre mir an nem ruhige Tag.
Also wahrscheinlich wieder Brüggetag.
Silas bringt d’Kamera mit.
Alexis bringt Snacks.
Un mir bringe gar kei Erwartunge mehr mit.
`,"Motte Sell Out Stream":`Motte Sell Out Stream

[Intro – spoken / dark]
Freitagabend.
Der Stream geht online.
Motte denkt, er hat die Kontrolle.
Doch im Chat warten schon zwei Namen.

Yannis, der Koala.
Erdbeere.

Und der Timer…
beginnt zu steigen.

[Verse 1]
Motte sitzt da, Licht geht an
TikTok live, der Wahnsinn fängt an
Er sagt noch: „Heute wird entspannt“
doch der erste Coin ist schon gesandt

Yannis grinst im Koala-Modus
Erdbeere tippt und bleibt gnadenlos
Der Timer springt, die Nacht wird lang
Motte merkt, jetzt geht es an

[Pre-Chorus]
Es ist noch lange nicht aus
schau dir den Timer an
streamst du Tag ein und Tag aus
und fragst dich, wie das sein kann

Du hast es selbst so gewollt
jetzt wird die Zeit nach oben geholt
Keiner kann was dafür
Motte, das war dein Revier

[Chorus]
Motte-te-te-te-te
du bleibst bis Sonntag im Stream
Oh Motte-te-te-te-te
du darfst dich bloß nicht verlieren

Motte-te-te-te-te
der Timer lässt dich nicht gehen
Oh Motte-te-te-te-te
Sell Out Stream, wir bleiben stehen

[Build-up – escalating]
Ein Coin für die Nacht
ein Coin für den Schmerz
Yannis ist der Koala
Erdbeere hat kein Herz

Noch ein Coin auf die Uhr
noch ein Coin in den Lauf
Motte schaut auf den Timer
und der Timer geht rauf

Die Kicks werden härter
die Luft wird zu Staub
der Chat zählt runter
und keiner hört auf

Drei
Zwei
Eins

Mottes
Sell Out
Stream

[DROP – extreme rawstyle hardcore, clean male chant, enormous distorted bass, earth-shaking sub bass, brutal zaagkicks, massive punchy kick rolls, no metal scream vocals]

Motte-te-te-te-te
SELL OUT STREAM

Motte-te-te-te-te
TIMER GEHT RAUF

Motte-te-te-te-te
BIS SONNTAG LIVE

Motte-te-te-te-te
DU HÖRST NICHT AUF

KICK KICK KICK
Timer explodiert

BASS BASS BASS
Motte eskaliert

Yannis der Koala
Erdbeere dabei

Coins auf die Uhr
und der Stream geht nicht vorbei

[Verse 2]
Samstagmorgen, Augen schwer
Motte sagt: „Ich kann nicht mehr“
Doch der Chat ist längst bereit
für noch mehr geschenkte Zeit

Yannis bleibt im Koala-Film
Erdbeere macht den Timer wild
Motte schaut nur fassungslos
doch der nächste Drop geht los

[Pre-Chorus 2]
Es ist noch immer nicht aus
Sonntag ist noch weit
du wolltest diesen Sellout
jetzt bezahlst du mit der Zeit

Keiner hat dich gezwungen
doch du hast es akzeptiert
Jetzt wird durchgestreamt
bis der Sonntag explodiert

[Chorus]
Motte-te-te-te-te
du bleibst bis Sonntag im Stream
Oh Motte-te-te-te-te
du darfst dich bloß nicht verlieren

Motte-te-te-te-te
der Timer lässt dich nicht gehen
Oh Motte-te-te-te-te
Sell Out Stream, wir bleiben stehen

[Breakdown – spoken / threatening]
Yannis ist der Koala.
Erdbeere ist im Chat.
Der Timer steigt.
Der Schlaf verliert.

Du wolltest Coins.
Du wolltest Sellout.
Du wolltest den Stream.

Jetzt bekommst du Sonntag.

[Final Build-up – harder]
Noch ein Coin
noch ein Kick
noch ein Blick
auf den Timer zurück

Motte rennt nicht weg
Motte bleibt hier drin
weil der Sellout gewinnt
und der Bass neu beginnt

Drei
Zwei
Eins

Mottes
Sell Out
Stream

[FINAL DROP – extreme rawstyle hardcore, clean male chant, enormous distorted bass, earth-shaking sub bass, brutal zaagkicks, massive punchy kick rolls, no metal scream vocals]
Motte-te-te-te-te
SELL OUT STREAM

Motte-te-te-te-te
BIS SONNTAG LIVE

Motte-te-te-te-te
TIMER GEHT RAUF

Motte-te-te-te-te
DU KOMMST NICHT RAUS

Yannis der Koala
Erdbeere am Start

Keiner kann was dafür
du hast es selbst gesagt

KICK KICK KICK
bis der Bildschirm bebt

BASS BASS BASS
bis der Chat abhebt

Motte-te-te-te-te
Sell Out Stream

Motte-te-te-te-te
Sell Out Stream

[Outro – spoken]
Der Timer läuft.
Die Coins sind gefallen.
Yannis und Erdbeere bleiben wach.
Und Motte?

Motte streamt.

Bis Sonntag.`,"Motte Nicht Da x Der Unfall (Mashup)":`[singer A]
Uga! Uga!
Dum dum da!
Hey!

Motte nicht da.
Wir hier.
Feuer an.
Du nicht hier.

Wir warten.
Schon lang.
Zeit geht.
Wir bang.

Uga uga!
Wir wart!
Uga uga!
Sehr hart!

MOTTE NICHT DA! – UGA UGA!
WO MOTTE HIN?! – DUM DUM DA!
WIR NICHT HAPPY! – UGA UGA!
KOMM JETZT HER! – DUM DUM DA!

MOTTE KOMM BALD! – UGA UGA!
WIR DREH DURCH! – DUM DUM DA!
GANZER TRIBE SCHREI LAUT:
MOTTE! MOTTE! KOMM JETZT RAUS!

[transition]

[singer B]
Er ging durch die Stadt
Ohne Böse Gedanken im Kopf
Normaler Tag, Normaler Weg
Doch das Schicksal packte die Gelegenheit am Schopf

Ein Rohes Stück Schweinchen da
ein bisschen Salz und Pfeffer hier
Fällt der Hells unter den Hammer
Ist er platt, dass tote Tier

Ohhhh armes Hells
Ohhh heute Fällst 
Du in die Pfanne 
und aus dir wird Schnitzel durch ne Panne

Lecker Lecker Wiener Schnitzel
Lecker Lecker das esse ich gern
Oh du armes Hells
Dein letztes Stündlein ist nicht fern.

[singer A]
Trommel laut.
Herz boom boom.
Alle schau.
Du kein Room.

Du sonst hier.
Immer da.
Jetzt nur wir.
Nicht so klar.

Dum dum!
Dum dum!
Hey!
Hey!

WO MOTTE?! – (WO ER?!)
WO MOTTE?! – (KOMM HER!)
WANN MOTTE?! – (JETZT BALD!)
SONST TRIBE – ALLES KNALLT!

MOTTE DA?! – UGA UGA!
NOCH NICHT DA! – DUM DUM DA!
ALLE WART! – UGA UGA!
KOMM JETZT BITTE! – DUM DUM DA!

Motte…
wo du…
wir wart…

[transition]

[singer B]
Jetzt steht er da
der arme Hells
Vor dem hunrigen Money klar
ist er versteinert wie ein fels

Er sieht gerade so lecker aus
So Gold Gebrannt und mit brauner Soße
Money sabbert schon
auf leckeres Schnitzel in dieser Sexy pose

Lecker Lecker Wiener Schnitzel
Lecker Lecker das esse ich gern
armes Hells liegst du da 
Dein letztes Stündlein ist jetzt da.

Lecker Lecker Wiener Schnitzel
Lecker Lecker das aß ich gern
Armes Hells bist jetzt weg
Immerhin Money hats geschmeckt

Also fühle dich geehrt
Money hat dich verzehrt
Also sei froh....
Du bist jetzt im Bauch..

Von Mister Money-Maker`,"Alexis Brother x Kingston Sun (Mashup)":`[singer A]
Ohhh yeah…
Sing it now…
Alexis brother… listen to my heart tonight.

Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[singer B]
Yeah yeah
Jamaica...
Sonne auf meiner Haut

Steig aus dem Flieger, warme Luft im Gesicht
Palmen bewegen sich langsam im Wind
Kingston lebt schon mitten auf den Straßen
überall Musik und Stimmen in der Nacht

[transition]

[singer B]
Kingston Sun über dem Meer
warmer Wind zieht durch die Nacht
Palmen tanzen mit den Wellen
während die Insel niemals schläft

Von Kingston bis zur Blue Lagoon
trägt der Sommer mich durchs Licht
Erdbeere jetzt in Jamaika
und ich will hier nicht mehr weg

[instrumental]

[singer A]
Through the streets and the nights I remember your name,
how I treated you wrong, yeah I carry the shame.
But a man can change when the truth arrives,
when he sees the hurt in another man’s eyes.

Ohhhh Alexis, hear my plea,
friendship is the place I wanna be.
No more hate, no more pride,
just good vibes walking side by side.

Alexis brother, hear my song tonight,
walking through the dark, searching for the light.
Alexis brother, don’t turn away,
es tut mir unfassbar leid, I just gotta say.

[singer B]
Jamaica…
Sonne, Meer und Musik`,"Neo City Radio – Royal Frequencies":`[Intro]
(radio host)
(Spoken)
Willkommen bei Neo City Radio.
Die Frequenz der Königlichen A. - I. Songs.
Von der ersten Melodie
bis zum neuesten Kapitel.
Jeder Song lebt weiter.

[Verse 1]

Alles begann mit einem Plan.
Dann rollte das Skateboard durch die Nacht.
Kristalle leuchten heller als zuvor,
Vorteile wurden zu Legenden gemacht.

Supreme, 
Velocity, 
Industries.
Empire brennt im Neonlicht.
Schedule, 
Hermano, 
Don Motte.
Zwei Stunden vergehen wie nichts.

[Pre-Chorus]

Jede Erinnerung ein neuer Takt.
Jeder Titel ein neues Kapitel.

[Chorus]

Neo City Radio.
Hier schläft die Musik niemals ein.
Die Königlichen AI Songs
werden für immer bei uns sein.

Ob gestern oder morgen,
jede Frequenz erzählt Geschichte.
Dreh das Radio lauter.
Die Reise endet niemals wirklich.

[Verse 2]

Prinz. 
Ambience. 
Fleischwurst.
Erdbeeren zwischen Helden und Mack.

Der Deal wird geschlossen.
"Nu hör ma zu..."
Yeah Yeah.

Cooking Stream.
Der Printer läuft.
Moneymaker feiert Geburtstag.
Alexis. 
Berry. 
Barcelona.
"Marco... hörst du mich?"

[Verse 3]

Der Park erwacht.
Mottemod übernimmt.
Diamanten. 
Eisen. 
Tiefer.
Lay Low bis zum Morgen.

Der König kehrt zurück.
Doch manchmal ist Motte nicht da.
Wir warten gemeinsam.
Bis Emerald wieder erklingt.

[Bridge]

Ein Haus.
Ein Mottenmann.
Flucht. 
Ruhe.
Marmor.

Boarding Pass.
Shanghai. 
Rio.
Amsterdam. 
Route 66.
Greek Summer. 
Safari.
Home Again.

[Final Chorus]

Anfang.
Der Unfall.
Count Till Dawn.

Death Drop.
Wilde Maus.
After Midnight.
Clown House.
Coins.

Palast der Krone.

Wir drehen uns nicht allein.

Dein Platz bleibt.

Neo City Radio.

[Outro]

Körnchenkreis.
Brüggetag.
Sell Out.
(radio host)
Bis zum nächsten Song...

Neo City Radio.`,"BAN.exe":`[Intro]
[Robot voice]
„BAN Punkt exe initialized...
Moderator protocol activated...
Target detected...“

[Geflüstert]
Ich muss mir viel anhören,
doch vieles lass ich mir nicht gefallen.
Sie fragen mich, weshalb, warum,
ich sage nichts, bleib einfach stumm.

[Part 1]
Szenario: ein Hacker hier,
viele fragen: „Was tun wir?“
Das ist doch gar nicht so schwer.

[Build Up]
Ich bin es, ich helf den Usern,
Tag und Nacht auf allen Routern.
Was ich hier tu, ist nicht geheim,
doch ab und zu muss Ordnung sein.
Dann klick ich kurz, ganz unscheinbar,
und ein Perma-Bann ist plötzlich da.

[Drop]
Ban
Ban
Ban
Motte Mod, was jetzt?
Ban
Ban
Ban
Viele denken: „Was ein Mist!“
Ban
Ban
Ban
Es ist nie zu spät.
Ban
Ban
Ban
Jetzt wirst du weggefegt.

[Part 2]
Sie nennen mich 'nen Mottensohn,
und schon fliegt der Bann herum.
Was ich hier tu, nenn ich Gerechtigkeit,
und viele denken: „Was ein Scheiß!“

[Build Up]
Sie fliegen einfach so herum,
ich denk mir so: „Das ist echt dumm.“
Er weiß noch nicht, was jetzt passiert.
Ich denk mir laut:

DAS IST MEIN MOMENT

[Drop]
Ban
Ban
Ban
Motte, nutz den Ban.
Ban
Ban
Ban
Weil er's kann.
Ban
Ban
Ban
Es ist nie zu spät.
Ban
Ban
Ban
Jetzt wirst du weggefegt.

[Part 3]
Viele denken, das ist nicht fair.
Ich denk mir dann: „Flieg halt nicht umher.“
Halt dich einfach an die Regeln,
dann wird es keine Banns mehr regnen.

[Build Up]
[Music stop]
[Gesprochen]
Eigentlich will ich nur Frieden,
den werd ich hier wohl nie mehr kriegen.
Der Bann fliegt hier, der nächste dort,
und schon sind alle Hacker fort.

[Drop]
Ban
Ban
Ban
Jetzt ist es vorbei.
Ban
Ban
Ban
Ich hab's geschafft.
Ban
Ban
Ban
Für ihn war's zu spät.
Ban
Ban
Ban
Er wurde weggefegt.

[Outro]
(Geflüstert)
Ich hab es geschafft,
alle Hacker sind weg.
Nun ist endlich Ruhe,
und keiner baut mehr Mist.
`,"Die große Knoblauchexplosion":`[Intro]
Motte steht am Herd, es riecht schon gut,
Hühnchen brutzelt, Kartoffeln in der Glut.
Fritteuse singt so: pssshhht, pssshhht,
doch dieser Kochstream bleibt nicht ganz schlicht.

[Strophe 1]
Er sagt: „Nur eine Zehe, ganz normal,
Knoblauch ist gesund, das ist genial.“
Doch aus einer werden zwei, dann drei, dann acht,
und plötzlich hat die Küche kurz gewackelt und gelacht.

Hühnchen goldbraun, Kartoffeln perfekt,
eigentlich wär alles komplett korrekt.
Doch Motte greift nochmal ganz leise rein,
„Ein bisschen Knoblauch muss noch sein.“

[Pre-Chorus]
Dann kommt das Messer, viel zu schnell,
Motte guckt kurz: „Oh, okay, nicht hell.“
Finger erwischt, der Chat schreit: „Nein!“
Motte sagt: „Passt schon, Pflaster rein!“

[Chorus]
Das ist die große Knoblauchexplosion,
Aroma-Level: Endstation.
Hühnchen lecker, Kartoffeln heiß,
doch der Atem wird zum Endboss-Fight.

Die große Knoblauchexplosion,
kein Vampir betritt mehr diese Zone.
Motte kocht und denkt sich nur:
„Zu viel Knoblauch? Nein, Kultur!“

[Strophe 2]
Die Fritteuse blubbert, der Chat rast aus,
„Motte, nimm die Knoblauchpresse raus!“
Doch er hört nicht hin, er ist im Flow,
streut nochmal nach wie in ’ner Kochshow.

Finger verbunden, weiter geht’s,
weil Motte niemals einfach steht.
Ein Hähnchen wartet, die Kartoffel auch,
und über allem schwebt Knoblauchrauch.

[Pre-Chorus 2]
Der Rauchmelder denkt sich: „Was passiert?“
Der Kühlschrank hat sich distanziert.
Der Chat schreibt nur noch: „Digga, stopp!“
Motte sagt: „Erst noch ein Knoblauch-Drop!“

[Chorus]
Das ist die große Knoblauchexplosion,
Aroma-Level: Endstation.
Hühnchen lecker, Kartoffeln heiß,
doch der Atem wird zum Endboss-Fight.

Die große Knoblauchexplosion,
kein Vampir betritt mehr diese Zone.
Motte kocht und denkt sich nur:
„Zu viel Knoblauch? Nein, Kultur!“

[Bridge]
Und wenn die Küche morgen noch riecht,
wenn selbst der Kühlschrank leise flieht,
dann wissen alle ganz genau:
Motte kochte — und Knoblauch war die Show.

Mit Pflasterfinger, stolz und breit,
kämpft er sich durch die Kochstream-Zeit.
Ein bisschen Schmerz, ein bisschen Rauch,
doch Hauptsache: Hähnchen mit Knoblauch.

[Drop / Part]
Knob-knob-knoblauch rein,
Motte sagt: „Das muss so sein!“
Finger cut, doch Stream bleibt an,
weil Motte einfach liefern kann.

Knob-knob-knoblauch-Schock,
Fenster auf, doch bringt kein’ Bock.
Chat ist laut, die Küche bebt,
aber Hauptsache, Motte lebt!

[Final Chorus]
Das ist die große Knoblauchexplosion,
Aroma-Level: Endstation.
Hühnchen lecker, Kartoffeln heiß,
doch der Atem wird zum Endboss-Fight.

Die große Knoblauchexplosion,
die Küche riecht noch nächste Saison.
Motte lacht und sagt am Schluss:
„Knoblauch ist kein Fehler — Knoblauch ist Genuss!“`,"VIP TRIP":`[Intro]
(Ha-ha)
Yeah...
Fünf Tage... drei Parks... und kein "Wir" mehr.
(Stay here)
Yeah, yeah.
Five days alone, no cap.

[Hook]
Fünf Tage Urlaub, doch ohne dich (ohne dich)
Lichter im Park, doch sie wärmen mich nicht (wärmen mich nicht)
Erst Europa, dann Movie, Walibi
Ich jag' Phantome, es tut so weh
Fahr' Attraktion'n bis tief in die Night (in die Night)
Such' dein Gesicht, doch hier ist nur Einsamkeit
Fünf Tage Urlaub, alles zieht vorbei
Ich bin verloren – sag, bist du frei? (bist du frei?)

[Verse 1]
Check' ins Hotel, Suite mit der View (ah, ah)
Red' mit den Schatten, ich finde kein' Ruh (ah, ah)
Europa-Park, erste Runde direkt (ah, ah)
Silver Star hoch, doch mein Herz ist defekt (ah)
Nächster Tag – Movie Park steht im Regen (ah, ah)
Loopings und Speed, doch ich spür' kein Leben (ah, ah)
Mach' ein Foto, Bruder, Blitz, Flash (ah, ah)
Doch auf dem Bild fehlt der beste Part, kein Cash (ah)

Dann nach Belgien, Walibi Ride (ah, ah)
Achterbahn kickt, doch ich fühle nur Neid (ah, ah)
Drei verschied'ne Parks in einer Tour (ah, ah)
Und jeder fragt: "Bro, wie machst du das nur?" (ah)
Die Stacks werden größer, das Konto wird fett
Doch ohne dich fühlt sich alles so leer an im Bett
Luxus im Alltag, kein Zufall, kein Glück
Ich schau' nach vorne – und will dich zurück.

[Hook]
Fünf Tage Urlaub, doch ohne dich (ohne dich)
Lichter im Park, doch sie wärmen mich nicht (wärmen mich nicht)
Erst Europa, dann Movie, Walibi
Ich jag' Phantome, es tut so weh
Fahr' Attraktion'n bis tief in die Night (in die Night)
Such' dein Gesicht, doch hier ist nur Einsamkeit
Fünf Tage Urlaub, alles zieht vorbei
Ich bin verloren – sag, bist du frei? (bist du frei?)

[Verse 2]
Deine Jacke hängt noch an der Tür (ah, ah)
Zähle die Risse, ich sterbe dafür (ah, ah)
Jedes "Wir reden" verflog in der Luft (ah, ah)
Du warst noch hier, jetzt riech' ich nur deinen Duft (ah)
All unsere Pläne sind Pappkarton-Träume (ah, ah)
Eingepackt, vergessen, einsame Räume (ah, ah)
Ich spiele die Nächte Frame für Frame ab im Kopf (ah, ah)
Such' den Moment, wo ich dich verlor, du Schopf (ah)

Der Kaffee wird kalt, dein Name schmeckt bitter (ah, ah)
Jedes alte Liebeslied wird zum Gewitter (ah, ah)
Checke mein Phone, doch es kommt keine Nachricht (ah, ah)
Wie wurde aus "für immer" dieses "gar nichts"? (ah)
Wenn du mich nicht liebst, dann sags mir direkt (ah, ah)
Weil dieser Schmerz mich im Loopings zerquetscht (ah)

Bitte bleib bei mir...
(Bleib bei mir, mir, mir, mir, mir)

[Bridge]
(Der Beat filtert sich leicht heraus, nur die Melodie und Phonk-Kowbells bleiben)
Fünf Tage... (fünf Tage)
Drei Parks... (drei Parks)
Ich sitze im Riesenrad ganz oben, schaue runter auf die Crowd.
Alle lachen, alle sind glücklich.
Und ich? Ich bin taub.
(Der Drop baut sich wieder auf: Hardcore-Kick setzt ein)
1, 2, 3, GO!

[Hook]
Fünf Tage Urlaub, doch ohne dich (ohne dich)
Lichter im Park, doch sie wärmen mich nicht (wärmen mich nicht)
Erst Europa, dann Movie, Walibi
Ich jag' Phantome, es tut so weh
Fahr' Attraktion'n bis tief in die Night (in die Night)
Such' dein Gesicht, doch hier ist nur Einsamkeit
Fünf Tage Urlaub, alles zieht vorbei
Ich bin verloren – sag, bist du frei? (bist du frei?)

[Outro]
(Ganz allein...)
Ganz allein in der Night.
Europa... (Europa)
Movie... (Movie)
Walibi... (Walibi)
Drei Parks, fünf Tage – und du fehlst mir.
(Allein, allein)
(Allein, allein)
Lichter gehen aus.
Yeah.
(Fade Out)`,"Mr. Gyrosmaker":`[Intro]

καλημέρα meine Freunde
Kommt herein in mein Haus
γύρος richt hier lecker
und du willst niemals heraus

[Strophe 1]

Eines Morgens hatte er genug
von all dem Moneymaker kram
er dachte sich irgendwas fehlt
nichts begeisterte ihn daran

Doch dann ging er durch die Vorstadt
der Magen knurrte ganz imposant
er lief an einem Stand vorbei
mit einem Schild auf dem γύρος stand.

[Bridge]

Dann kam ihm eine Idee
Money war vorbei
jetzt wollte er γύρος machen
und sang ganz laut dabei

[Refrain]

Ich bin Mister Gyrosmaker
Jeder hier kennt mich
Mein γύρος ist lecker
keine Hungersnot in sicht

Ich bin Mr. Gyrosmaker
alle merken sich meinen Namen
du erkennst mein Restaurant von weit
von den ganzen γύρος-Fahnen

[Strophe 2]

Er zog aus Deutschland aus
in das ferne Griechenland
Übte dort die Kunst des γύρος
mit viel Geld in der Hand

Mr. Moneymaker ging zum Amt
und ließ sich seinen Namen ändern
Von nun an sah man Mr. Gyrosmaker
durch die Straßen schlendern.

[Bridge]

Er zog zurück nach Deutschland
direkt nach Berlin
er machte ein γύρος Laden auf 
und man sah die Anzeigen im Magazin 

[Refrain]

Ich bin Mister Gyrosmaker
Jeder hier kennt mich
Mein γύρος ist lecker
keine Hungersnot in sicht

Ich bin Mr. Gyrosmaker
alle merken sich meinen Namen
du erkennst mein Restaurant von weit
von den ganzen γύρος-Fahnen

[Bridge/Aufbau zum grande Finale]

In seinem Kopf gab es nur eines
jeder wusste da Bescheid
γύρος,γύρος,γύρος
jetzt war seine Zeit.


[Refrain]

Ich bin Mister Gyrosmaker
Jeder hier kennt mich
Mein γύρος ist lecker
keine Hungersnot in sicht

Ich bin Mr. Gyrosmaker
alle merken sich meinen Namen
du erkennst mein Restaurant von weit
von den ganzen γύρος-Fahnen

[Outro]

Ich bin Mr. Gyrosmaker
und ohne mich 
wäre γύρος nur Scheiß
wäre γύρος nuuuuuur Scheiß.`},rr=`/Koenigliche-Mafia/`,ir=e=>`${rr}${e}`,ar=[{id:`cover-1`,type:`cover`,sourceSongId:51,title:`Ein wunderschönes Haus - Hardstyle Techno Version`,artist:`Erdbeerenfresser;Mr. Moneymaker`,duration:`03:09`,month:`05/2026`,cover:ir(`covers/Ein wunderschönes Haus - Hardstyle Techno Version.png`),file:ir(`songs/Ein wunderschönes Haus - Hardstyle Techno Version.mp3`),lyricsKey:`Ein wunderschönes Haus`},{id:`mashup-1`,type:`mashup`,sourceSongIds:[32,44],title:`Mr. Moneymaker x Mr. Moneymaker Land`,artist:`Erdbeerenfresser;Motte`,duration:`03:37`,month:`05/2026`,cover:ir(`covers/Mr. Moneymaker x Mr. Moneymaker Land (Mashup).png`),file:ir(`songs/Mr. Moneymaker x Mr. Moneymaker Land (Mashup).mp3`)},{id:`cover-2`,type:`cover`,sourceSongId:39,title:`Auf der Suche nach Diamanten – Campfire Version`,artist:`Erdbeerenfresser`,duration:`02:21`,month:`06/2026`,cover:ir(`covers/Auf der Suche nach Diamanten – Campfire Version.png`),file:ir(`songs/Auf der Suche nach Diamanten – Campfire Version.mp3`),lyricsKey:`Auf der Suche nach Diamanten`},{id:`mashup-2`,type:`mashup`,sourceSongIds:[32,44],title:`Motte Nicht Da x Der Unfall (Mashup)`,artist:`Motte;Erdbeerenfresser`,duration:`03:52`,month:`05/2026`,cover:ir(`covers/Motte Nicht Da x Der Unfall (Mashup).png`),file:ir(`songs/Motte Nicht Da x Der Unfall (Mashup).mp3`)}],or=`/Koenigliche-Mafia/`,sr=e=>`${or}${e}`,cr=[{id:`extra2-1`,type:`radio-exclusive`,title:`Fleischwurst x Operation Mottemaker`,artist:`Neo City Radio Exclusive`,duration:`03:09`,month:`05/2026`,cover:sr(`covers/Fleischwurst x Operation Mottemaker.png`),file:sr(`songs/Fleischwurst x Operation Mottemaker.mp3`),radioOnly:!0},{id:`extra2-2`,type:`radio-exclusive`,title:`Motte Nicht Da - Jazz Version`,artist:`Neo City Radio Exclusive`,duration:`02:58`,month:`05/2026`,cover:sr(`covers/Motte Nicht Da - Jazz Version.png`),file:sr(`songs/Motte Nicht Da - Jazz Version.mp3`),radioOnly:!0,lyricsKey:`Motte Nicht Da`},{id:`extra2-3`,type:`radio-exclusive`,title:`Mr. Moneymaker – Villain’s Fortune Mix`,artist:`Neo City Radio Exclusive`,duration:`02:53`,month:`06/2026`,cover:sr(`covers/Mr. Moneymaker – Villain’s Fortune Mix.png`),file:sr(`songs/Mr. Moneymaker – Villain’s Fortune Mix.mp3`),radioOnly:!0,lyricsKey:`Mr. Moneymaker`},{id:`extra2-4`,type:`radio-exclusive`,title:`Route 66 - Heavy Metal Version`,artist:`Neo City Radio Exclusive`,duration:`04:44`,month:`06/2026`,cover:sr(`covers/Route 66 - Heavy Metal Version.png`),file:sr(`songs/Route 66 - Heavy Metal Version.mp3`),radioOnly:!0,lyricsKey:`Route 66`},{id:`extra2-5`,type:`radio-exclusive`,title:`Alexis Brother x Kingston Sun (Mashup)`,artist:`Neo City Radio Exclusive`,duration:`03:14`,month:`06/2026`,cover:sr(`covers/Alexis Brother x Kingston Sun (Mashup).png`),file:sr(`songs/Alexis Brother x Kingston Sun (Mashup).mp3`),radioOnly:!0}],lr=`/Koenigliche-Mafia/`,z=e=>`${lr}${e}`,ur=[{id:`S1`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S1.m4a`),radioOnly:!0},{id:`S2`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S2.m4a`),radioOnly:!0},{id:`S3`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S3.m4a`),radioOnly:!0},{id:`S4`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S4.m4a`),radioOnly:!0},{id:`S5`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S5.m4a`),radioOnly:!0},{id:`S6`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S6.m4a`),radioOnly:!0},{id:`S7`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S7.m4a`),radioOnly:!0},{id:`S8`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/S8.m4a`),radioOnly:!0}],dr=[{id:`L1`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/L1.m4a`),radioOnly:!0},{id:`L2`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/L2.m4a`),radioOnly:!0},{id:`L3`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/L3.m4a`),radioOnly:!0},{id:`L4`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/L4.m4a`),radioOnly:!0}];z(`covers/Neo-City-Radio.png`),z(`radio/T1.m4a`),z(`covers/Neo-City-Radio.png`),z(`radio/T2.m4a`),z(`covers/Neo-City-Radio.png`),z(`radio/T3.m4a`),z(`covers/Neo-City-Radio.png`),z(`radio/T4.m4a`),z(`covers/Neo-City-Radio.png`),z(`radio/T5.m4a`);var fr=[{id:`R1`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/R1.m4a`),radioOnly:!0},{id:`R2`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/R2.m4a`),radioOnly:!0},{id:`R3`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/R3.m4a`),radioOnly:!0}],pr=[{id:`AD_CARRYGOLD`,type:`ad`,title:`Carrygold`,artist:`Neo City Werbung`,duration:`00:19`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/carrygold.mp3`),radioOnly:!0},{id:`AD_KAESEFIX`,type:`ad`,title:`Käsefix`,artist:`Neo City Werbung`,duration:`00:29`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Käsefix.mp3`),radioOnly:!0},{id:`AD_Äppelwoi Express`,type:`ad`,title:`Äppelwoi Express`,artist:`Neo City Werbung`,duration:`00:27`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Äppelwoi Express.mp3`),radioOnly:!0},{id:`AD_KINDERAGENTUR`,type:`ad`,title:`Kinderagentur`,artist:`Neo City Werbung`,duration:`00:38`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Kinderagentur.mp3`),radioOnly:!0},{id:`AD_Aldi Ost`,type:`ad`,title:`Aldi Ost`,artist:`Neo City Werbung`,duration:`01:16`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Aldi Ost.mp3`),radioOnly:!0},{id:`AD_BlechBombe GmbH`,type:`ad`,title:`BlechBombe GmbH`,artist:`Neo City Werbung`,duration:`00:48`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/BlechBombe GmbH.mp3`),radioOnly:!0},{id:`AD_MUSKEL-MANNI'S POWERBUDE`,type:`ad`,title:`MUSKEL-MANNI'S POWERBUDE`,artist:`Neo City Werbung`,duration:`00:24`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/MUSKEL-MANNI'S POWERBUDE.mp3`),radioOnly:!0},{id:`AD_Krawall 95`,type:`ad`,title:`Krawall 95`,artist:`Neo City Werbung`,duration:`01:11`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Krawall 95.mp3`),radioOnly:!0},{id:`AD_Leberkas_Boost`,type:`ad`,title:`Leberkas-Boost`,artist:`Neo City Werbung`,duration:`00:52`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Leberkas-Boost.mp3`),radioOnly:!0},{id:`AD_Madame Brunhilde`,type:`ad`,title:`Madame Brunhilde`,artist:`Neo City Werbung`,duration:`00:27`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Madame Brunhilde.mp3`),radioOnly:!0},{id:`AD_Müüffelnix`,type:`ad`,title:`Müüffelnix`,artist:`Neo City Werbung`,duration:`00:47`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Müüffelnix.mp3`),radioOnly:!0},{id:`AD_Ravioli King`,type:`ad`,title:`Ravioli King`,artist:`Neo City Werbung`,duration:`00:32`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Ravioli King.mp3`),radioOnly:!0},{id:`AD_Klaus Kinskis Staubsaugerparadies`,type:`ad`,title:`Klaus Kinskis Staubsaugerparadies`,artist:`Neo City Werbung`,duration:`00:39`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Klaus Kinskis Staubsaugerparadies.mp3`),radioOnly:!0},{id:`AD_PIZZERINO EXPRESSO`,type:`ad`,title:`PIZZERINO EXPRESSO`,artist:`Neo City Werbung`,duration:`00:44`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/PIZZERINO EXPRESSO.mp3`),radioOnly:!0}],mr={id:`AD_INTRO`,type:`ad`,title:`Werbung`,artist:`Neo City Radio`,duration:`00:08`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Werbung.m4a`),radioOnly:!0},hr={id:`AD_OUTRO`,type:`ad`,title:`Werbung Ende`,artist:`Neo City Radio`,duration:`00:08`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Werbung Ende.m4a`),radioOnly:!0};function gr(e){let t=(e-1)*2%pr.length;return[pr[t],pr[(t+1)%pr.length]]}var _r=[{id:`AD_Aldi Ost`,type:`ad`,title:`Aldi Ost`,artist:`Neo City 2 Werbung`,duration:`01:16`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Aldi Ost.mp3`),radioOnly:!0},{id:`AD_BlechBombe GmbH`,type:`ad`,title:`BlechBombe GmbH`,artist:`Neo City 2 Werbung`,duration:`00:48`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/BlechBombe GmbH.mp3`),radioOnly:!0},{id:`AD_MUSKEL-MANNI'S POWERBUDE`,type:`ad`,title:`MUSKEL-MANNI'S POWERBUDE`,artist:`Neo City 2 Werbung`,duration:`00:24`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/MUSKEL-MANNI'S POWERBUDE.mp3`),radioOnly:!0},{id:`AD_Leberkas_Boost`,type:`ad`,title:`Leberkas-Boost`,artist:`Neo City 2 Werbung`,duration:`00:52`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Leberkas-Boost.mp3`),radioOnly:!0},{id:`AD_Madame Brunhilde`,type:`ad`,title:`Madame Brunhilde`,artist:`Neo City 2 Werbung`,duration:`00:27`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Madame Brunhilde.mp3`),radioOnly:!0},{id:`AD_Müüffelnix`,type:`ad`,title:`Müüffelnix`,artist:`Neo City 2 Werbung`,duration:`00:47`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Müüffelnix.mp3`),radioOnly:!0},{id:`AD_PIZZERINO EXPRESSO`,type:`ad`,title:`PIZZERINO EXPRESSO`,artist:`Neo City 2 Werbung`,duration:`00:44`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/PIZZERINO EXPRESSO.mp3`),radioOnly:!0},{id:`AD_Ravioli King`,type:`ad`,title:`Ravioli King`,artist:`Neo City 2 Werbung`,duration:`00:32`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Ravioli King.mp3`),radioOnly:!0}],vr={id:`MOTTE_AD_INTRO`,type:`ad`,title:`Werbung`,artist:`Neo City Radio 2`,duration:`00:08`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Werbung.m4a`),radioOnly:!0},yr={id:`MOTTE_AD_OUTRO`,type:`ad`,title:`Werbung Ende`,artist:`Neo City Radio 2`,duration:`00:08`,cover:z(`covers/Neo-City-Radio.png`),file:z(`radio/Werbung Ende.m4a`),radioOnly:!0};function br(e){let t=(e-1)*2%_r.length;return[_r[t],_r[(t+1)%_r.length]]}var xr=(e=new Date)=>{let t=e.getHours();return t>=0&&t<5},Sr=(e,t)=>{let n=xr(new Date(t))?dr:ur,r=n[e.jingleIndex%n.length];return{...r,title:e.title||r.title,artist:e.artist||r.artist,cover:e.cover||r.cover,radioIndex:e.radioIndex,radioKey:e.radioKey,radioStation:e.radioStation,isRadioTrack:!0}},Cr=(e,t)=>e?.type===`timed-jingle`?Sr(e,t):{...e,isRadioTrack:!0},wr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),B=o(((e,t)=>{t.exports=wr()}))(),Tr=`/Koenigliche-Mafia/`,Er=e=>`${Tr}${e}`,Dr=`https://forms.gle/NSAUa8ifBkJxrHjn6`,Or=(e=``)=>e.split(`;`).map(e=>e.trim()).filter(Boolean),kr=(e=``)=>e.trim().toLowerCase().replace(/[ä]/g,`ae`).replace(/[ö]/g,`oe`).replace(/[ü]/g,`ue`).replace(/[ß]/g,`ss`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),Ar={erdbeerenfresser:{name:`Erdbeerenfresser`,bio:`Erdbeerenfresser ist der Coder und Visionär hinter Königliche AI Songs und verbindet persönliche Storys, Insider und große Konzeptalben.

Von Schedule I: The Mottemaker Files über Erdbeere Underground und Mottenmann bis hin zu Traumatica Nights entsteht ein Mix aus Lore, Chaos, Freizeitpark-Vibes und echten Erinnerungen. Zu den prägenden Songs gehören Königliche A.I. Songs, Rückkehr des Königs und Motte, komm bitte bald zurück.`,image:`artists/Erdbeere.png`},motte:{name:`Motte`,bio:`Motte verbindet Insider-Singles wie Alexis Brother, Die Bußhymne an Alexis und EPMC – The Park Awaits mit großen Konzeptideen.

Mit seinem Album Erdbeere Around the World beschreibt er musikalisch Erdbeeres Reise, einmal um die Welt — von Boarding Pass über Rio Nights bis Home Again.`,image:`artists/Motte.png`},merlin:{name:`Merlin`,bio:`Merlin steht für kurze, direkte Insider-Singles mit eigenem Humor und persönlichem Chaos-Faktor.

Mit Songs wie Ik ben gleich soweit!, Kochstream Ambience und Fleischwurst bringt Merlin kleine Momente aus dem Königliche AI Songs-Universum auf den Punkt.`,image:`artists/Merlin.png`},"coaster-liam":{name:`Coaster_Liam`,bio:`Coaster_Liam, auch bekannt als Jascha W oder Lamaliam, ist ein Artist aus dem versteckten Insider-Kosmos von Königliche AI Songs.

Mit Party taucht er als Feature an der Seite von Erdbeerenfresser auf und bringt Freizeitpark-Chaos, Freundschafts-Vibes und diese typische Jascha-Energie in die Artist-Lore.`,image:`artists/liam.png`},"mr-moneymaker":{name:`Mr. Moneymaker`,bio:`Mr. Moneymaker steht für Luxus, Chaos und die komplett übertriebene Money-Lore im Königliche AI Songs-Universum.

Mit Ein wunderschönes Haus - Hardstyle Techno Version tritt er selbst als Artist auf, während Songs wie Mr. Moneymaker und Mr. Moneymaker Land seine Legende weiter ausbauen.`,image:`artists/Money.png`},berrydeadly:{name:`BerryDeadly`,bio:`딸기 ist die Main Artist hinter BerryDeadly und die Stimme aus Neo City.

Mit dem geheimen Album Neon City Lights — Erdbeere Time und Songs wie Midnight Login, After 3AM, NO SIGNAL und RELOAD verbindet sie Cyberpunk, Late-Night-Vibes und digitale Einsamkeit. Ihr neuester Song Bring me back to Neo City führt diese versteckte Welt weiter.`,image:`artists/Berry.png`},"mc-berry":{name:`MC BERRY`,bio:`MC BERRY ist der Boss der Unterwelt von Neo City und selbsternannter König des Raps. Mit schwarzer Maske, Krone, Sonnenbrille und erdbeerrotem Goldschmuck steht er für dunkle 808s, kalte Ansagen und kompromisslose Kontrolle.

Während andere Figuren in Neo City an Licht, Hoffnung oder Menschen glauben, sieht MC BERRY vor allem die Schatten der Stadt. Seine Musik klingt nach nassem Asphalt, Neonregen, schweren Bässen und einer Unterwelt, die nie schläft.

Sein Debütalbum „König der Unterwelt“ zeigt MC BERRY als unantastbaren Herrscher der Nacht: arrogant, gefährlich, misstrauisch und doch fest mit Neo City verbunden. Er ist kein Held und kein Retter — er ist das, was bleibt, wenn das Licht ausgeht.`,image:`artists/MC_BERRY.png`},"neo-city-radio":{name:`Neo City Radio`,bio:`No Bio found.`,image:`artists/lol.jpeg`}},jr={id:`EPMC-OurPlace`,title:`Our Place`,artist:`EuroParksMC`,album:`Making the Impossible Possible`,releaseDate:`2026-04-16`,duration:`03:49`,cover:Er(`covers/EPMC.png`),file:Er(`songs/EPMC-OurPlace.mp3`)};Er(`covers/Trailer1.3.png`),Er(`songs/Trailer1.3.wav`);var Mr=[{id:`default-neo-city-phonk`,name:`Neo City Phonk`,cover:Er(`covers/Neo City Phonk.png`),songIds:[93,`phonk1`,`phonk2`,`phonk3`,`phonk4`,`phonk5`,`phonk6`,`phonk7`,`phonk8`,`phonk9`],createdAt:`2026-07-01T00:00:00.000Z`,locked:!0}],Nr=Mr.map(e=>e.id),Pr=(e=[])=>[...Mr,...e.filter(e=>!Nr.includes(e.id))];function Fr(e,t,n){return e===`albums`&&t?t.title:e===`playlists`&&n?n.name:e===`songs`?`Songs`:e===`albums`?`Alben`:e===`artists`?`Artists`:e===`playlists`?`Playlists`:e===`patchnotes`?`Patchnotes`:e===`extra`?`Extra`:`Startseite`}var Ir=e=>e===!0||e===`berrydeadly`?`berrydeadly`:e===`mcberry`?`mcberry`:`default`,V=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{background:`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`,color:`white`,border:`1px solid rgba(212,175,55,0.35)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 22px rgba(255,23,56,0.42), inset 0 0 18px rgba(212,175,55,0.10)`,transition:`all 0.25s ease`}:t===`berrydeadly`?{background:`linear-gradient(135deg, #ff4dd2, #b84dff)`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`0 0 18px rgba(255,77,210,0.35)`,transition:`all 0.25s ease`}:{background:`#1db954`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`none`,transition:`all 0.25s ease`}},H=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{background:`linear-gradient(135deg, rgba(58,0,8,0.92), rgba(5,5,7,0.96))`,color:`white`,border:`1px solid rgba(255,23,56,0.42)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 18px rgba(255,23,56,0.20)`,transition:`all 0.25s ease`}:t===`berrydeadly`?{background:`#1b0b2e`,color:`white`,border:`1px solid rgba(255,77,210,0.35)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`0 0 16px rgba(255,77,210,0.18)`,transition:`all 0.25s ease`}:{background:`#1a1f2b`,color:`white`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`none`,transition:`all 0.25s ease`}},Lr=(e,t=`default`)=>{let n=Ir(t);return n===`mcberry`?{background:e?`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`:`linear-gradient(135deg, rgba(38,0,6,0.96), rgba(10,8,10,0.96))`,color:`white`,border:`1px solid rgba(255,23,56,0.35)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:800,width:`100%`,boxShadow:e?`0 0 20px rgba(255,23,56,0.35)`:`none`}:n===`berrydeadly`?{background:e?`linear-gradient(135deg, #ff4dd2, #9d4dff)`:`#1b0b2e`,color:`white`,border:`1px solid rgba(255,77,210,0.35)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`,boxShadow:e?`0 0 18px rgba(255,77,210,0.35)`:`none`}:{background:e?`#1db954`:`#171b24`,color:`white`,border:`none`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`,boxShadow:`none`}},Rr={width:`100%`,background:`transparent`,color:`white`,border:`none`,textAlign:`left`,padding:`12px 14px`,cursor:`pointer`,fontWeight:700,fontSize:`14px`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`flex-start`,minHeight:`44px`},zr={width:`100%`,boxSizing:`border-box`,background:`#171b24`,color:`white`,border:`1px solid #2a3142`,borderRadius:`14px`,padding:`13px 14px`,fontSize:`14px`,outline:`none`},Br={background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`8px 12px`,color:`#d0d0d0`,fontSize:`13px`,fontWeight:700},Vr=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{accent:`#ff1738`,accent2:`#6b0010`,gold:`#d4af37`,softBg:`rgba(255,23,56,0.18)`,borderColor:`rgba(255,23,56,0.45)`,progressFill:`#ff1738`,volumeFill:`#ff1738`,progressRest:`rgba(255,23,56,0.20)`,cardBg:`linear-gradient(135deg, rgba(255,23,56,0.16), rgba(58,0,8,0.20)), #141821`,cardBorder:`1px solid rgba(255,23,56,0.35)`,avatarBg:`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`,titleShadow:`0 0 18px rgba(255,23,56,0.55), 0 0 34px rgba(120,0,16,0.45)`}:t===`berrydeadly`?{accent:`#ff4dd2`,accent2:`#b84dff`,gold:`#ff9be8`,softBg:`rgba(255,77,210,0.18)`,borderColor:`rgba(255,77,210,0.45)`,progressFill:`#ff4dd2`,volumeFill:`#ff4dd2`,progressRest:`rgba(184,77,255,0.25)`,cardBg:`linear-gradient(135deg, rgba(255,77,210,0.18), rgba(157,77,255,0.10)), #141821`,cardBorder:`1px solid rgba(255,77,210,0.35)`,avatarBg:`linear-gradient(135deg, #ff4dd2, #9d4dff)`,titleShadow:`0 0 18px rgba(255,77,210,0.45)`}:{accent:`#1db954`,accent2:`#136f38`,gold:`#8e96a3`,softBg:`rgba(29,185,84,0.18)`,borderColor:`rgba(29,185,84,0.45)`,progressFill:`#ffffff`,volumeFill:`#1db954`,progressRest:`#2b2f3a`,cardBg:`#141821`,cardBorder:`1px solid #202636`,avatarBg:`linear-gradient(135deg, #1db954, #136f38)`,titleShadow:`0 0 18px rgba(29,185,84,0.38), 0 0 42px rgba(0,0,0,0.45)`}},Hr=({artist:e,fontSize:t=`14px`,color:n=`#a0a0a0`,berryMode:r=!1,openArtist:i})=>{let a=Ir(r),o=a===`mcberry`?`#ff1738`:a===`berrydeadly`?`#ff4dd2`:`#ffffff`,s=a===`mcberry`?`rgba(255,23,56,0.13)`:a===`berrydeadly`?`rgba(255,77,210,0.12)`:`rgba(255,255,255,0.08)`,c=a===`mcberry`?`rgba(212,175,55,0.35)`:a===`berrydeadly`?`rgba(255,77,210,0.28)`:`rgba(255,255,255,0.12)`,l=Or(e);return l.length?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`style`,{children:`
          .artist-link-pill:hover,
          .artist-link-pill:focus-visible {
            color: var(--artist-link-hover-color) !important;
            background: var(--artist-link-hover-bg) !important;
            border-color: var(--artist-link-hover-border) !important;
            text-decoration: underline !important;
          }
        `}),l.map((e,r)=>(0,B.jsxs)(y.Fragment,{children:[(0,B.jsx)(`button`,{type:`button`,className:`artist-link-pill`,onClick:t=>{t.stopPropagation(),i(e)},onMouseDown:e=>e.stopPropagation(),style:{"--artist-link-hover-color":o,"--artist-link-hover-bg":s,"--artist-link-hover-border":c,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,boxSizing:`border-box`,minHeight:`28px`,background:`transparent`,border:`1px solid transparent`,borderRadius:`999px`,padding:`4px 9px`,margin:`0`,color:n,fontSize:t,fontWeight:700,fontFamily:`inherit`,cursor:`pointer`,textDecoration:`none`,transition:`color 0.15s ease, background 0.15s ease, border-color 0.15s ease`,position:`relative`,zIndex:2,pointerEvents:`auto`},children:e}),r<l.length-1&&(0,B.jsx)(`span`,{style:{color:n,fontSize:t},children:`, `})]},`${e}-${r}`))]}):(0,B.jsx)(`span`,{style:{color:n,fontSize:t},children:`Unknown Artist`})};function Ur(){let[e,t]=(0,y.useState)(`home`),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)([]),[o,s]=(0,y.useState)([]),[c,l]=(0,y.useState)(null),[u,d]=(0,y.useState)(null),[f,p]=(0,y.useState)(null),[m,h]=(0,y.useState)(`overview`),[g,_]=(0,y.useState)(``),[v,b]=(0,y.useState)(!1),[x,S]=(0,y.useState)(!1),[C,w]=(0,y.useState)(null),[ee,T]=(0,y.useState)(!1),[te,E]=(0,y.useState)(!1),[ne,re]=(0,y.useState)(!1),[ie,ae]=(0,y.useState)(0),[oe,se]=(0,y.useState)(0),[ce,D]=(0,y.useState)(0),[O,le]=(0,y.useState)(``),[ue,de]=(0,y.useState)(1),[fe,pe]=(0,y.useState)(1),[k,me]=(0,y.useState)(!1),[ge,_e]=(0,y.useState)(!1),[A,ve]=(0,y.useState)(``),[ye,be]=(0,y.useState)(`off`),[xe,Se]=(0,y.useState)(!1),[Ce,we]=(0,y.useState)(!1),[Te,Ee]=(0,y.useState)(null),[j,De]=(0,y.useState)(1),[Ae,je]=(0,y.useState)(``),[Me,Ne]=(0,y.useState)(``),[Pe,Fe]=(0,y.useState)(!1),[Le,Re]=(0,y.useState)(`neoCity`),[ze,Be]=(0,y.useState)(!1),[Ve,He]=(0,y.useState)(Date.now()),[Ue,We]=(0,y.useState)(``),[Ge,Ke]=(0,y.useState)(``),[qe,Je]=(0,y.useState)(!1),[Ye,Xe]=(0,y.useState)(``),[Ze,Qe]=(0,y.useState)(``),[$e,et]=(0,y.useState)(!1),[tt,nt]=(0,y.useState)(Mr),[M,rt]=(0,y.useState)(null),[it,at]=(0,y.useState)(!1),[ot,st]=(0,y.useState)(null),[ct,lt]=(0,y.useState)(``),[ut,dt]=(0,y.useState)(!1),[ft,pt]=(0,y.useState)(!0),[mt,ht]=(0,y.useState)(!0),[gt,_t]=(0,y.useState)(!1),[vt,yt]=(0,y.useState)(!1),[N,bt]=(0,y.useState)([]),[xt,St]=(0,y.useState)(!1),[Ct,wt]=(0,y.useState)(!1),P=Ct?`mcberry`:xt?`berrydeadly`:`default`,F=Vr(P),[Et,Dt]=(0,y.useState)(!1),[Ot,kt]=(0,y.useState)(1),[At,jt]=(0,y.useState)({albumTitle:``,artist:``,releaseDate:``,trackCount:10,albumCoverFile:``}),[Mt,Nt]=(0,y.useState)([]);(0,y.useEffect)(()=>{let e=()=>{l(null)};return window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`scroll`,e,!0)}},[]);let[I,Pt]=(0,y.useState)(window.innerWidth<=768),Ft=(0,y.useRef)(null),It=(0,y.useRef)(null),Lt=(0,y.useRef)(null),Rt=(0,y.useMemo)(()=>[...er,...ar,jr],[]),zt=[{id:`Hamster-premiere`,albumTitle:`Körnchenkreis`,artist:`Erdbeerenfresser`,releaseAt:`2026-06-21T17:00:00+02:00`,trackCount:4,cover:Er(`covers/Körnchenkreis.png`)}],Bt=(e,t=Date.now())=>t>=new Date(e.releaseAt).getTime(),Vt=(e=Date.now())=>zt.filter(t=>Bt(t,e)).map(e=>e.albumTitle),Ht=(0,y.useMemo)(()=>{let e=Vt();return er.filter(t=>zt.some(e=>e.albumTitle===t.album)&&!e.includes(t.album)?!1:t.hidden?P===`berrydeadly`?t.hiddenTag===`berrydeadly`:P===`mcberry`?t.hiddenTag===`mcberry`:!1:!0)},[P]),Ut=(0,y.useMemo)(()=>ar.map(e=>({...e,releaseDate:e.releaseDate||(e.month?`${e.month.split(`/`)[1]}-${e.month.split(`/`)[0]}-01`:`1970-01-01`),isExtra:!0})),[]),Wt=(0,y.useMemo)(()=>Ht,[Ht]),Gt=(0,y.useMemo)(()=>er.filter(e=>!e.hidden).filter(e=>typeof e.id==`number`).sort((e,t)=>e.id-t.id),[]),Kt=(0,y.useMemo)(()=>er.filter(e=>e.hidden&&e.hiddenTag===`jascha`),[]),qt=tt.some(e=>e.id===`hidden-jascha-playlist`),Jt=(0,y.useMemo)(()=>[...Ht,...Ut,...qt?Kt:[]],[Ht,Ut,qt,Kt]),Yt=(0,y.useMemo)(()=>{let e=O.trim().toLowerCase();return e?Wt.filter(t=>t.title.toLowerCase().includes(e)||t.artist.toLowerCase().includes(e)||(t.album||``).toLowerCase().includes(e)||(t.type||``).toLowerCase().includes(e)):Wt},[O,Wt]),Xt=(0,y.useMemo)(()=>[...Ht].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)).slice(0,5),[Ht]),Zt=(0,y.useMemo)(()=>{let e=new Map;return Ht.forEach(t=>{if(!t.album)return;e.has(t.album)||e.set(t.album,{id:t.album,title:t.album,artist:t.artist,cover:t.albumCover||t.cover,releaseDate:t.releaseDate,tracks:[]});let n=e.get(t.album);n.tracks.push(t),new Date(t.releaseDate)>new Date(n.releaseDate)&&(n.releaseDate=t.releaseDate)}),[...e.values()].map(e=>{let t=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));return{...e,releaseDate:t[0]?.releaseDate||e.releaseDate,isAlbum:e.tracks.length>1,releaseType:e.tracks.length>1?`Album`:`Single`,tracks:t}}).sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate))},[Ht]),Qt=(0,y.useMemo)(()=>{let e=new Map;return Jt.forEach(t=>{Or(t.artist).forEach(n=>{let r=kr(n),i=Ar[r];e.has(r)||e.set(r,{id:r,name:i?.name||n,bio:i?.bio||`No Bio found.`,image:i?.image||null,songs:[],releases:[],missingProfile:!i}),e.get(r).songs.push(t)})}),[...e.values()].map(e=>{let t=Zt.filter(t=>t.tracks.some(t=>Or(t.artist).some(t=>kr(t)===e.id)));return{...e,songs:[...e.songs].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)),releases:t}}).sort((e,t)=>e.name.localeCompare(t.name))},[Jt,Zt]),$t=e=>{if(!e)return 0;let[t,n]=e.split(`:`).map(Number);return t*60+n},en=e=>{let t=e.reduce((e,t)=>e+$t(t.duration),0),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`},tn={id:`NCR_EXTRA_INTRO`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Extra Songs Special`,duration:`00:34`,cover:Er(`covers/Neo-City-Radio.png`),file:Er(`radio/NCR_EXTRA_INTRO.m4a`),radioOnly:!0},nn={id:`NCR_EXTRA2_INTRO`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Radio Exclusive Special`,duration:`00:34`,cover:Er(`covers/Neo-City-Radio.png`),file:Er(`radio/NCR_EXTRA2_INTRO.m4a`),radioOnly:!0},rn={id:`NCR_BACK_TO_PROGRAM`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Zurück zum normalen Programm`,duration:`00:26`,cover:Er(`covers/Neo-City-Radio.png`),file:Er(`radio/ncrBackToProgram.m4a`),radioOnly:!0},an={id:`INTERVIEW_EATW`,type:`interview`,title:`Interview: Erdbeere Around the World`,artist:`Erdbeerenfresser & Motte`,duration:`10:00`,cover:Er(`covers/Neo-City-Radio.png`),file:Er(`radio/MotteInterview.mp3`),radioOnly:!0},on=(e=0)=>({id:`TIMED_JINGLE_${e}`,type:`timed-jingle`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,jingleIndex:e,radioOnly:!0,cover:Er(`covers/Neo-City-Radio.png`)}),sn=[11,12,15,16,17,25,26,27,31,33,34,35,49,50,84,85,86,87,88],cn=()=>Ht.filter(e=>!(e.hidden||$t(e.duration)<=0||sn.includes(e.id))),ln=()=>{let e=Ht.filter(e=>e.hidden||$t(e.duration)<=0?!1:sn.includes(e.id)),t=Kt.filter(e=>$t(e.duration)>0),n=new Map;return[...e,...t].forEach(e=>{n.set(e.id,e)}),[...n.values()]},un=()=>{let e=Ht.filter(e=>!e.hidden&&$t(e.duration)>0),t=ar.filter(e=>$t(e.duration)>0),n=cr.filter(e=>$t(e.duration)>0),r=[],i=0,a=e=>{r.push(e),i+=$t(e.duration)};a(on(0));let o=()=>{e.forEach((e,t)=>{e.album===`Erdbeere Around the World`&&(e.albumTrackNumber??e.trackNumber)===1&&r.push(an),a(e);let n=t+1;if(n%10==0&&[mr,...gr(n/10),hr].forEach(a),n%5==0&&a(on(Math.floor(n/5))),n%29==0){let e=Math.floor(n/29)%fr.length;r.push(fr[e])}})};return o(),o(),t.length>0&&(r.push(tn),r.push(...t.map(e=>({...e,radioOnly:!1,radioBlock:`extra`}))),r.push(rn)),o(),o(),n.length>0&&(r.push(nn),r.push(...n.map(e=>({...e,radioOnly:!1,radioBlock:`extra2`}))),r.push(rn)),r.filter(e=>$t(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`${e.id}-${t}`}))},dn=()=>{let e=cn(),t=[],n=e=>{e&&t.push(e)};return n({...on(0),title:`Neo City Radio 2`,artist:`Du hörst Neo City Radio 2`,radioStation:`neoCity2`}),e.forEach((e,t)=>{n(e);let r=t+1;if(r%10==0){let e=br(r/10);e.length>0&&[vr,...e,yr].forEach(n)}r%5==0&&n({...on(Math.floor(r/5)),title:`Neo City Radio 2`,artist:`Du hörst Neo City Radio 2`,radioStation:`neoCity2`})}),t.filter(e=>$t(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-2-${e.id}-${t}`,radioStation:`neoCity2`}))},fn=()=>{let e=ln(),t=[],n=e=>{e&&t.push(e)};return n({...on(0),title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`}),e.forEach((e,t)=>{n(e);let r=t+1;if(r%10==0){let e=br(r/10);e.length>0&&[{...vr,title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`},...e.map(e=>({...e,radioStation:`neoCity3`})),{...yr,title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`}].forEach(n)}r%5==0&&n({...on(Math.floor(r/5)),title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`})}),t.filter(e=>$t(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-3-${e.id}-${t}`,radioStation:`neoCity3`}))},pn=()=>{let e=Mr.find(e=>e.id===`default-neo-city-phonk`);return e?e.songIds.map(e=>Rt.find(t=>t.id===e)).filter(e=>e&&$t(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-4-${e.id}-${t}`,radioStation:`neoCity4`})):[]},mn=(e=Le)=>e===`neoCity2`?dn():e===`neoCity3`?fn():e===`neoCity4`?pn():un(),hn=e=>er.filter(t=>t.album===e.albumTitle).sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).map(e=>({...e,radioOnly:!1,radioBlock:`album-premiere`})),gn=()=>{let e=zt[0];if(!e)return null;let t=hn(e);if(!t.length)return null;let n=[{...e.introTrack,radioIndex:`album-premiere-intro`,radioKey:`album-premiere-intro`},...t.map((e,t)=>({...e,radioIndex:`album-premiere-track-${t}`,radioKey:`album-premiere-track-${t}`})),{...e.outroTrack,radioIndex:`album-premiere-outro`,radioKey:`album-premiere-outro`},{...rn,radioIndex:`album-premiere-back`,radioKey:`album-premiere-back`}];return{startsAtMs:new Date(e.releaseAt).getTime(),durationSeconds:n.reduce((e,t)=>e+$t(t.duration),0),tracks:n}},_n=(e,t,n)=>{let r=t;for(let t of e){let e=$t(t.duration);if(r<e)return{track:t,offset:r,trackStartTimeMs:n-r*1e3};r-=e}return{track:e[0],offset:0,trackStartTimeMs:n}},vn=(e,t,n,r)=>{let i=t;for(let t of e){let e=$t(t.duration);if(i<e){let a=n-i*1e3;return a+e*1e3>r?null:{track:t,offset:i,trackStartTimeMs:a}}i-=e}return null},yn=(()=>{if(!Pe||!n?.isRadioTrack)return null;let e=mn(Le),t=e.findIndex(e=>e.radioKey===n.radioKey);if(t===-1)return null;let r=[`jingle`,`timed-jingle`,`ad`,`interview`,`ncr-announcement`,`premiere`,`premiere-standby`,`album-premiere-intro`,`album-premiere-outro`];for(let n=1;n<=e.length;n++){let i=e[(t+n)%e.length];if(!r.includes(i.type))return i}return null})(),bn=e=>{if(e==null)return`--:--:--`;let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`},xn=(e,t=Date.now())=>{let n=un(),r=n.reduce((e,t)=>e+$t(t.duration),0);if(!n.length||r<=0)return null;let i=(Math.floor(t/1e3)%r+r)%r,a=0,o=[];return n.forEach(t=>{e.includes(t.id)&&o.push(a),a+=$t(t.duration)}),o.length?(o.find(e=>e>i)??o[0]+r)-i:null},Cn=()=>({nextExtra:xn([`NCR_EXTRA_INTRO`],Ve),nextExtra2:xn([`NCR_EXTRA2_INTRO`],Ve)}),wn=(e=Le)=>{let t=Date.now(),n=mn(e),r=n.reduce((e,t)=>e+$t(t.duration),0);if(!n.length||r<=0)return null;if(e===`neoCity2`||e===`neoCity3`||e===`neoCity4`)return _n(n,(Math.floor(t/1e3)%r+r)%r,t);let i=gn();if(!i)return _n(n,(Math.floor(t/1e3)%r+r)%r,t);let a=i.startsAtMs,o=a+i.durationSeconds*1e3;if(t<a)return vn(n,(r-Math.floor((a-t)/1e3)%r)%r,t,a)||_n(i.tracks,0,a);if(t>=a&&t<o){let e=Math.floor((t-a)/1e3);return _n(i.tracks,e,t)}return _n(n,(Math.floor((t-o)/1e3)%r+r)%r,t)},Tn=(e=`neoCity`)=>{let t=wn(e);t&&(Re(e),Lt.current=t.offset,Fe(!0),a([]),s([]),d(null),rt(null),r(Cr(t.track,t.trackStartTimeMs)))},En=()=>{Tn(`neoCity`)},Dn=()=>{Tn(`neoCity2`)},On=()=>{Tn(`neoCity3`)},kn=()=>{Tn(`neoCity4`)};(0,y.useEffect)(()=>{if(!Pe||!n?.isRadioTrack||Lt.current===null||!Ft.current||!n.file)return;let e=Lt.current;Lt.current=null;let t=Ft.current;t.pause(),t.currentTime=0,t.load();let r=()=>{t.currentTime=e<1.25?0:e,t.play().catch(()=>{})};return t.addEventListener(`canplay`,r,{once:!0}),()=>{t.removeEventListener(`canplay`,r)}},[n,Pe]);let An=(e,t={})=>{if(!e)return;Fe(!1);let{fromHistory:i=!1,resetHistory:a=!1}=t;a?s([]):!i&&n&&s(e=>[...e,n]),r(e),l(null)},Mn=e=>{let t=Gt.find(t=>String(t.id)===String(e));return t?`${t.id}. ${t.title} – ${t.artist}`:``},Nn=`Art der Anfrage: Cover
Ausgewählter Song: ${Mn(Ae)}
Gewünschter Stil / Prompt: ${Me}`,Pn=`Art der Anfrage: Mashup
Song 1: ${Mn(Ue)}
Song 2: ${Mn(Ge)}`,Fn=e=>{a([]),An(e,{resetHistory:!0})},In=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));d(e),t(`albums`),a(r),An(n,{resetHistory:!0})},Ln=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).sort(()=>Math.random()-.5);d(e),t(`albums`),a(r),An(n,{resetHistory:!0})},zn=()=>{if(!Wt.length)return;let[e,...t]=Wt;a(t),An(e,{resetHistory:!0})},Bn=()=>{if(!Wt.length)return;let[e,...t]=[...Wt].sort(()=>Math.random()-.5);a(t),An(e,{resetHistory:!0})},Vn=()=>{a([])},Un=e=>{a(t=>[...t,e]),l(null)},Wn=e=>{st(e),at(!0),l(null)},Gn=e=>{Ee(e),De(1),we(!0)},Kn=()=>{we(!1),Ee(null),De(1),je(``),Ne(``),We(``),Ke(``)},qn=()=>{at(!1),st(null),lt(``)},Jn=()=>{if(!Kt.length){Qe(`❌ Keine versteckten Jascha-Songs gefunden`);return}let e=tt.find(e=>e.id===`hidden-jascha-playlist`);if(e){rt(e),t(`playlists`),Je(!1),Xe(``),Qe(``);return}let n={id:`hidden-jascha-playlist`,name:`Jascha`,songIds:Kt.map(e=>e.id),createdAt:new Date().toISOString()};nt(e=>[...e,n]),rt(n),t(`playlists`),Je(!1),Xe(``),Qe(``)},Yn=()=>{Nt(Array.from({length:At.trackCount},(e,t)=>({trackNumber:t+1,title:``,duration:``,lyrics:``,coverFile:``,songFile:``}))),kt(2)},Zn=(e,t)=>{if(!e||!t)return``;let[n,r,i]=e.split(`-`);return`${`${i}${r}${n.slice(-2)}`}-${t.trim().toLowerCase().replace(/[ä]/g,`ae`).replace(/[ö]/g,`oe`).replace(/[ü]/g,`ue`).replace(/[ß]/g,`ss`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}`},Qn=(e=``)=>e.replace(/\\/g,`\\\\`).replace(/`/g,"\\`").replace(/\$\{/g,"\\${"),L=()=>{let e=At.albumCoverFile.trim()||`${At.albumTitle.trim()}.png`;return Mt.map(t=>{let n=t.title.trim(),r=t.coverFile.trim()||`${n}.png`,i=t.songFile.trim()||`${n}.mp3`;return`{
  id: ${JSON.stringify(Zn(At.releaseDate,n))},
  title: ${JSON.stringify(n)},
  artist: ${JSON.stringify(At.artist.trim())},
  album: ${JSON.stringify(At.albumTitle.trim())},
  albumCover: asset(${JSON.stringify(`covers/${e}`)}),
  albumTrackNumber: ${t.trackNumber},
  duration: ${JSON.stringify(t.duration.trim())},
  releaseDate: ${JSON.stringify(At.releaseDate)},
  cover: asset(${JSON.stringify(`covers/${r}`)}),
  file: asset(${JSON.stringify(`songs/${i}`)}),
  isSingle: false,
},`}).join(`
`)},$n=()=>Mt.map(e=>{let t=e.title.trim();return`${JSON.stringify(t)}: \`${Qn(e.lyrics)}\`,`}).join(`

`),R=()=>{let e=Ye.trim().toLowerCase();if(Ye.trim()===`BerryDeadly`){St(!0),wt(!1),d(null),p(null),rt(null),le(``),t(`home`),Je(!1),Xe(``),Qe(``);return}if(Ye.trim()===`MC BERRY`){wt(!0),St(!1),d(null),p(null),rt(null),le(``),t(`home`),Je(!1),Xe(``),Qe(``);return}if(Ye.trim()===`NCR`){localStorage.setItem(`neoCityRadioBeta`,`true`),Je(!1),Xe(``),Qe(``);return}if(e===`frequency`){Be(!0),Je(!1),Xe(``),Qe(``);return}if(e===`our place`){Fn(jr),Je(!1),Xe(``),Qe(``),et(!0);return}if(e===`jascha`){Jn();return}if(Ye.trim()===`Album`){Dt(!0),kt(1),Je(!1),Xe(``),Qe(``);return}if(e===`motte`){Dn(),Je(!1),Xe(``),Qe(``);return}if(e===`ncr3`){On(),Je(!1),Xe(``),Qe(``);return}if(e===`ncr4`){kn(),Je(!1),Xe(``),Qe(``);return}Qe(`❌ Falsches Passwort`)},rr=()=>{et(!1),st(jr),at(!0)},ir=()=>{let e=ct.trim();if(!e)return;let t={id:`playlist-${Date.now()}`,name:e,songIds:ot?[ot.id]:[],createdAt:new Date().toISOString()};nt(e=>[...e,t]),qn()},or=(e,t)=>{nt(n=>n.map(n=>n.id===e?{...n,songIds:[...n.songIds,t]}:n)),qn()},sr=(e,t)=>{nt(n=>{let r=n.map(n=>{if(n.id!==e)return n;let r=n.songIds.findIndex(e=>e===t);return r===-1?n:{...n,songIds:n.songIds.filter((e,t)=>t!==r)}}),i=r.find(t=>t.id===e);return i&&rt(i),r})},lr=e=>{nt(t=>t.filter(t=>t.id!==e)),M?.id===e&&rt(null)},z=e=>{let t=JSON.stringify({version:`1.0`,name:e.name,songIds:e.songIds},null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`${e.name.replace(/[^\w\s-]/g,``).replace(/\s+/g,`_`)}.playlist.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},ur=async e=>{let t=e.target.files?.[0];if(t){try{let e=await t.text(),n=JSON.parse(e);if(!n?.name||!Array.isArray(n?.songIds))throw Error(`Ungültige Playlist-Datei`);let r=n.songIds.filter(e=>Rt.some(t=>t.id===e)),i={id:`playlist-${Date.now()}`,name:n.name,songIds:r,createdAt:new Date().toISOString()};nt(e=>[...e,i])}catch(e){console.log(`Playlist-Import fehlgeschlagen:`,e),alert(`Die Playlist-Datei konnte nicht importiert werden.`)}e.target.value=``}},dr=e=>{let t=e.songIds.map(e=>Rt.find(t=>t.id===e)).filter(Boolean);if(!t.length)return;let[n,...r]=t;a(r),An(n,{resetHistory:!0})},pr=e=>{let t=e.songIds.map(e=>Rt.find(t=>t.id===e)).filter(Boolean);if(!t.length)return;let[n,...r]=[...t].sort(()=>Math.random()-.5);a(r),An(n,{resetHistory:!0})},_r=e=>e.map(e=>Rt.find(t=>t.id===e)).filter(Boolean),xr=e=>{a(t=>t.filter((t,n)=>n!==e))},Sr=ke(Oe(Tt,{activationConstraint:{distance:8}})),wr=e=>{let{active:t,over:n}=e;!n||t.id===n.id||a(e=>{let r=e.findIndex((e,n)=>`${e.id}-${n}`===t.id),i=e.findIndex((e,t)=>`${e.id}-${t}`===n.id);return r===-1||i===-1?e:jn(e,r,i)})},Tr=()=>{if(n){if(Pe){let e=wn(Le);if(!e)return;Lt.current=e.offset,r(Cr(e.track,e.trackStartTimeMs));return}if(ye===`one`){Ft.current&&(Ft.current.currentTime=0,Ft.current.play().catch(()=>{}));return}Ir()}},Nr=()=>M?_r(M.songIds):u?.tracks?.length?[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)):Ht,Ir=()=>{if(Pe){Tn(Le);return}if(!n)return;if(i.length>0){let[e,...t]=i;a(t),An(e);return}let e=Nr(),t=e.findIndex(e=>e.id===n.id);if(t===-1)return;let r=t+1;if(r<e.length){An(e[r]);return}ye===`all`&&e.length>0&&An(e[0],{fromHistory:!0})},Ur=()=>{if(Pe){Tn(Le);return}if(ce>3&&Ft.current){Ft.current.currentTime=0,D(0),ae(0);return}if(o.length===0){Ft.current&&(Ft.current.currentTime=0,D(0),ae(0));return}let e=o[o.length-1];s(e=>e.slice(0,-1)),n&&a(e=>[n,...e]),An(e,{fromHistory:!0})},Xr=e=>{e&&(le(e.title),t(`songs`),yt(!1),bt([]))},Zr=e=>{if(e){if(e.type===`cover`){let t=er.find(t=>t.id===e.sourceSongId);if(!t)return;Xr(t);return}if(e.type===`mashup`){let t=er.filter(t=>e.sourceSongIds?.includes(t.id));if(!t.length)return;bt(t),yt(!0),l(null)}}},Qr=e=>{let n=e?.trim()||`Unknown Artist`,r=kr(n);p(Qt.find(e=>e.id===r)||{id:r||`unknown-artist`,name:n,bio:`No Artist Page found.`,image:null,songs:[],releases:[],missingProfile:!0}),h(`overview`),_(``),d(null),rt(null),l(null),b(!1),dt(!1),_e(!1),t(`artists`)},$r=e=>{t(e),e!==`albums`&&d(null),e!==`playlists`&&rt(null),e!==`artists`&&p(null),b(!1)};(0,y.useEffect)(()=>{let e=()=>{Pt(window.innerWidth<=768)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,y.useEffect)(()=>{let e=localStorage.getItem(`ai-song-library-playlists`);if(!e){nt(Mr);return}try{let t=JSON.parse(e);Array.isArray(t)&&nt(Pr(t))}catch(e){console.log(`Playlists konnten nicht geladen werden:`,e),nt(Mr)}},[]),(0,y.useEffect)(()=>{localStorage.setItem(`ai-song-library-playlists`,JSON.stringify(tt))},[tt]),(0,y.useEffect)(()=>{if(!ze)return;He(Date.now());let e=window.setInterval(()=>{He(Date.now())},1e3);return()=>window.clearInterval(e)},[ze]),(0,y.useEffect)(()=>{if(e===`home`){T(!1),E(!1),re(!1);let e=setTimeout(()=>{T(!0)},60),t=setTimeout(()=>{E(!0)},220),n=setTimeout(()=>{re(!0)},380);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}}else T(!1),E(!1),re(!1)},[e]),(0,y.useEffect)(()=>{Ft.current&&(Ft.current.volume=ue)},[ue]),(0,y.useEffect)(()=>{if(Pe)return;let e=Ft.current;!e||!n||(async()=>{try{await e.play()}catch(e){console.log(`Autoplay/Play blockiert:`,e)}})()},[n,Pe]),(0,y.useEffect)(()=>{if(`mediaSession`in navigator)return n&&(navigator.mediaSession.metadata=new MediaMetadata({title:n.title,artist:n.artist,album:n.album||`Königliche AI Songs`,artwork:[{src:n.cover,sizes:`96x96`,type:`image/jpeg`},{src:n.cover,sizes:`128x128`,type:`image/jpeg`},{src:n.cover,sizes:`192x192`,type:`image/jpeg`},{src:n.cover,sizes:`256x256`,type:`image/jpeg`},{src:n.cover,sizes:`384x384`,type:`image/jpeg`},{src:n.cover,sizes:`512x512`,type:`image/jpeg`}]})),navigator.mediaSession.setActionHandler(`play`,()=>{let e=Ft.current;e&&e.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{let e=Ft.current;e&&e.pause()}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{Ir()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{Ur()}),()=>{try{navigator.mediaSession.setActionHandler(`play`,null),navigator.mediaSession.setActionHandler(`pause`,null),navigator.mediaSession.setActionHandler(`nexttrack`,null),navigator.mediaSession.setActionHandler(`previoustrack`,null)}catch(e){console.log(e)}}},[n,i,o,ce]),(0,y.useEffect)(()=>{`mediaSession`in navigator&&(navigator.mediaSession.playbackState=x?`playing`:`paused`)},[x]),(0,y.useEffect)(()=>{if(ut)return oi(),()=>{It.current&&clearTimeout(It.current)}},[ut]),(0,y.useEffect)(()=>{if(!ut||!n)return;ht(!1);let e=setTimeout(()=>{ht(!0)},30);return()=>clearTimeout(e)},[n,ut]),(0,y.useEffect)(()=>{!ut||!ge||!n||ve(nr[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,ut,ge]),(0,y.useEffect)(()=>{!k||!n||ve(nr[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,k]),(0,y.useEffect)(()=>{let e=Ft.current;if(!e)return;e.volume=ue;let t=()=>{let t=e.currentTime||0,n=e.duration||0;D(t),se(n),ae(n>0?t/n*100:0)},n=()=>{se(e.duration||0),t()},r=()=>S(!0),i=()=>S(!1),a=()=>{Tr()};return e.addEventListener(`timeupdate`,t),e.addEventListener(`loadedmetadata`,n),e.addEventListener(`play`,r),e.addEventListener(`pause`,i),e.addEventListener(`ended`,a),t(),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`loadedmetadata`,n),e.removeEventListener(`play`,r),e.removeEventListener(`pause`,i),e.removeEventListener(`ended`,a)}},[n,i,o,ye,ue]);let ei=e=>{if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,`0`)}`},ti=()=>{let e=Ft.current;if(!(!e||!n)){if(Pe){e.paused?Tn(Le):e.pause();return}e.paused?e.play().catch(()=>{}):e.pause()}},ni=e=>{if(Pe)return;let t=Ft.current;if(!t||!oe)return;let n=Number(e.target.value),r=n/100*oe;t.currentTime=r,ae(n),D(r)},ri=()=>{n&&(ve(nr[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`),ut?_e(!0):me(!0))},ii=()=>{ue===0?de(fe>0?fe:1):(pe(ue),de(0))},ai=()=>{be(e=>e===`off`?`all`:e===`all`?`one`:`off`)},oi=()=>{It.current&&clearTimeout(It.current),pt(!0),It.current=setTimeout(()=>{pt(!1)},5e3)},si=()=>{n&&(dt(!0),pt(!0))},ci=()=>{dt(!1),_e(!1)},li=({id:e,song:t,index:n,removeFromQueue:r})=>{let{attributes:i,listeners:a,setNodeRef:o,transform:s,transition:c,isDragging:l}=Xn({id:e});return(0,B.jsxs)(`div`,{ref:o,style:{transform:he.Transform.toString(s),transition:c,background:l?`#1a2230`:`#141821`,borderRadius:`12px`,padding:`10px`,display:`grid`,gridTemplateColumns:`24px 1fr 32px`,gap:`10px`,alignItems:`center`,border:l?`1px solid #3a455a`:`1px solid transparent`},children:[(0,B.jsx)(`button`,{...i,...a,style:Jr(l),children:`⋮⋮`}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.title}),(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.artist})]}),(0,B.jsx)(`button`,{onClick:()=>r(n),style:Yr,children:`✕`})]})},ui=({song:e,index:r,showAlbum:i=!0,playlistContext:a=null})=>(0,B.jsx)(`div`,{onClick:()=>Fn(e),onMouseEnter:()=>w(`song-row-${e.id}`),onMouseLeave:()=>w(null),style:I?{display:`grid`,gridTemplateColumns:`56px minmax(0, 1fr) 38px`,gap:`12px`,alignItems:`center`,padding:`12px`,borderRadius:`16px`,background:n?.id===e.id?`rgba(29,185,84,0.12)`:C===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`#141821`,border:n?.id===e.id?`1px solid rgba(29,185,84,0.35)`:C===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid #202636`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`}:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,alignItems:`center`,padding:`12px 16px`,borderRadius:`14px`,background:n?.id===e.id?F.softBg:C===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`transparent`,border:n?.id===e.id?`1px solid ${F.borderColor}`:C===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid transparent`,position:`relative`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`},children:I?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`,marginBottom:`4px`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,marginBottom:i&&e.album?`4px`:0},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`13px`,color:`#a0a0a0`})}),i&&e.album&&(0,B.jsx)(`div`,{onClick:n=>{n.stopPropagation();let r=Zt.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},style:{color:`#b0b0b0`,fontSize:`12px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,textDecoration:`underline`},children:e.album})]}),(0,B.jsxs)(`div`,{style:{position:`relative`},children:[(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,B.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,B.jsx)(`button`,{onClick:()=>Un(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),Zr(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),(0,B.jsx)(`button`,{onClick:()=>Wn(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Zur Playlist hinzufügen`}),a&&(0,B.jsx)(`button`,{onClick:()=>sr(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Aus Playlist entfernen`}),(0,B.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{...Rr,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:i?r+1:e.albumTrackNumber??e.trackNumber??r+1}),(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`default`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#a0a0a0`})})]}),(0,B.jsx)(`div`,{onClick:n=>{if(n.stopPropagation(),!e.album)return;let r=Zt.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},onMouseEnter:()=>w(`song-album-${e.id}`),onMouseLeave:()=>w(null),style:{color:C===`song-album-${e.id}`?`#ffffff`:`#b0b0b0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:e.album?`pointer`:`default`,textDecoration:C===`song-album-${e.id}`&&e.album?`underline`:`none`,transition:`color 0.15s ease`},children:e.album||`—`}),(0,B.jsx)(`div`,{style:{color:`#9a9a9a`,fontSize:`14px`},children:e.duration}),(0,B.jsxs)(`div`,{style:{position:`relative`},children:[(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,B.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,B.jsx)(`button`,{onClick:()=>Un(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),Zr(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),(0,B.jsx)(`button`,{onClick:()=>Wn(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Zur Playlist hinzufügen`}),a&&(0,B.jsx)(`button`,{onClick:()=>sr(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:Rr,children:`Aus Playlist entfernen`}),(0,B.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{...Rr,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]})},e.id+`-`+r),di=Cn();return(0,B.jsxs)(`div`,{style:{minHeight:`100vh`,background:xt?`radial-gradient(circle at top, #2a063d 0%, #07020f 45%, #020008 100%)`:`#0d0f16`,transition:`background 0.6s ease`,color:`white`,fontFamily:`Arial, sans-serif`,paddingBottom:I?`190px`:`130px`},children:[(0,B.jsx)(`header`,{style:{position:`sticky`,top:0,zIndex:30,background:xt?`rgba(10,2,18,0.92)`:`rgba(13,15,22,0.88)`,borderBottom:xt?`1px solid rgba(255,77,210,0.35)`:`1px solid #1f2430`,boxShadow:xt?`0 0 24px rgba(255,77,210,0.18)`:`none`,backdropFilter:`blur(12px)`},children:(0,B.jsxs)(`div`,{style:{width:`100%`,padding:I?`14px 16px`:`18px 26px`,boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`},children:[(0,B.jsxs)(`div`,{onClick:()=>{t(`home`),d(null),b(!1)},style:{cursor:`pointer`},children:[(0,B.jsx)(`div`,{style:{fontSize:`15px`,color:xt?`#d8b7ff`:`#8e96a3`,marginBottom:`4px`},children:xt?`Neon City Lights — Erdbeere Time`:`Lokale Musikbibliothek`}),(0,B.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:800,color:Ct?`#ff1738bf`:xt?`#ff9be8`:`#d0d7e2`,textShadow:Ct?`0 0 14px rgba(255,23,56,0.65)`:`none`},children:Ct?`MC Berry`:xt?`BerryDeadly Music`:`Königliche AI Songs`})]}),(0,B.jsx)(`button`,{onClick:()=>b(!0),style:{width:`52px`,height:`52px`,borderRadius:`16px`,background:xt?`#1b0b2e`:`#171b24`,border:xt?`1px solid rgba(255,77,210,0.45)`:`1px solid #2a3142`,boxShadow:xt?`0 0 18px rgba(255,77,210,0.25)`:`none`,color:`white`,cursor:`pointer`,fontSize:`22px`,fontWeight:700},children:`☰`})]})}),Et&&(0,B.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.65)`,zIndex:100,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`},children:(0,B.jsxs)(`div`,{style:{width:`720px`,maxWidth:`96vw`,maxHeight:`90vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #2a3142`,borderRadius:`22px`,padding:`24px`,boxShadow:`0 24px 70px rgba(0,0,0,0.6)`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,marginBottom:`22px`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,fontWeight:700,textTransform:`uppercase`},children:`Album Creator Access`}),(0,B.jsx)(`h2`,{style:{margin:`6px 0 0`},children:`Album Generator`})]}),(0,B.jsx)(`button`,{onClick:()=>Dt(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),Ot===1&&(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`14px`},children:[(0,B.jsx)(`input`,{placeholder:`Albumname`,value:At.albumTitle,onChange:e=>jt({...At,albumTitle:e.target.value}),style:zr}),(0,B.jsx)(`input`,{placeholder:`Artist`,value:At.artist,onChange:e=>jt({...At,artist:e.target.value}),style:zr}),(0,B.jsx)(`input`,{type:`date`,value:At.releaseDate,onChange:e=>jt({...At,releaseDate:e.target.value}),style:zr}),(0,B.jsx)(`select`,{value:At.trackCount,onChange:e=>jt({...At,trackCount:Number(e.target.value)}),style:zr,children:Array.from({length:30},(e,t)=>(0,B.jsxs)(`option`,{value:t+1,children:[t+1,` Track`,t+1===1?``:`s`]},t+1))}),(0,B.jsx)(`input`,{placeholder:`Albumcover-Datei, z. B. Traumatica Nights.png`,value:At.albumCoverFile,onChange:e=>jt({...At,albumCoverFile:e.target.value}),style:zr}),(0,B.jsx)(`button`,{onClick:Yn,style:V(P),children:`Weiter zu Track 1`})]}),Ot===2&&(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`16px`},children:[(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[At.albumTitle,` – `,At.artist]}),Mt.map((e,t)=>(0,B.jsxs)(`div`,{style:{background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`18px`,padding:`16px`,display:`grid`,gap:`12px`},children:[(0,B.jsxs)(`h3`,{style:{margin:0},children:[`Track `,e.trackNumber]}),(0,B.jsx)(`input`,{placeholder:`Titel`,value:e.title,onChange:e=>{let n=[...Mt];n[t].title=e.target.value,Nt(n)},style:zr}),(0,B.jsx)(`input`,{placeholder:`Dauer, z. B. 03:21`,value:e.duration,onChange:e=>{let n=[...Mt];n[t].duration=e.target.value,Nt(n)},style:zr}),(0,B.jsx)(`textarea`,{placeholder:`Lyrics`,value:e.lyrics,onChange:e=>{let n=[...Mt];n[t].lyrics=e.target.value,Nt(n)},style:{...zr,minHeight:`180px`,resize:`vertical`,fontFamily:`monospace`}})]},e.trackNumber)),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,justifyContent:`space-between`},children:[(0,B.jsx)(`button`,{onClick:()=>kt(1),style:H(P),children:`Zurück`}),(0,B.jsx)(`button`,{onClick:()=>kt(3),style:V(P),children:`Code generieren`})]})]}),Ot===3&&(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`16px`},children:[(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[`Ausgabe für `,At.albumTitle]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`1fr`:`1fr 1fr`,gap:`14px`},children:[(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,B.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(L()),style:V(P),children:`songs.js-Code kopieren`}),(0,B.jsx)(`textarea`,{readOnly:!0,value:L(),style:{...zr,minHeight:`420px`,resize:`vertical`,fontFamily:`monospace`,fontSize:`12px`}})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,B.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText($n()),style:V(P),children:`texte.js-Code kopieren`}),(0,B.jsx)(`textarea`,{readOnly:!0,value:$n(),style:{...zr,minHeight:`420px`,resize:`vertical`,fontFamily:`monospace`,fontSize:`12px`}})]})]}),(0,B.jsx)(`button`,{onClick:()=>kt(2),style:H(P),children:`Zurück zu Tracks`})]})]})}),v&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>b(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.45)`,zIndex:39}}),(0,B.jsxs)(`aside`,{style:{position:`fixed`,top:0,right:0,width:`360px`,maxWidth:`92vw`,height:`100vh`,background:`#111318`,borderLeft:`1px solid #202636`,zIndex:40,padding:`24px`,paddingBottom:`220px`,overflowY:`auto`,boxShadow:`-18px 0 40px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`24px`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{fontSize:`14px`,color:`#8e96a3`,marginBottom:`4px`},children:`Menü`}),(0,B.jsx)(`div`,{style:{fontSize:`26px`,fontWeight:800},children:`Königliche AI Songs`})]}),(0,B.jsx)(`button`,{onClick:()=>b(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`30px`},children:[(0,B.jsx)(`button`,{onClick:()=>$r(`home`),style:Lr(e===`home`,P),children:`Startseite`}),(0,B.jsx)(`button`,{onClick:()=>$r(`songs`),style:Lr(e===`songs`,P),children:`Songs`}),(0,B.jsx)(`button`,{onClick:()=>$r(`albums`),style:Lr(e===`albums`&&!u,P),children:`Alben`}),(0,B.jsx)(`button`,{onClick:()=>$r(`playlists`),style:Lr(e===`playlists`&&!M,P),children:`Playlists`}),(0,B.jsx)(`button`,{onClick:()=>$r(`patchnotes`),style:Lr(e===`patchnotes`,P),children:`Patchnotes`}),(0,B.jsx)(`button`,{style:Lr(e===`extra`,P),onClick:()=>$r(`extra`),children:`Extra`}),(0,B.jsx)(`button`,{onClick:()=>{En(),b(!1)},style:Lr(Pe,P),children:`📡 Neo City Radio`}),(0,B.jsx)(`button`,{onClick:()=>{Se(!0),b(!1)},style:Lr(!1,P),children:`Song einreichen`})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`10px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.08em`,fontWeight:700},children:`Warteschlange`}),(0,B.jsx)(`button`,{onClick:Vn,style:{background:`transparent`,border:`none`,color:`#c7ced9`,cursor:`pointer`,fontSize:`13px`},children:`Löschen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gap:`8px`,paddingBottom:`50px`},children:i.length===0?(0,B.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:`Noch nichts vorgemerkt.`}):(0,B.jsx)(Sn,{sensors:Sr,collisionDetection:Ie,onDragEnd:wr,children:(0,B.jsx)(Hn,{items:i.map((e,t)=>`${e.id}-${t}`),strategy:Rn,children:(0,B.jsx)(`div`,{style:{display:`grid`,gap:`8px`},children:i.map((e,t)=>(0,B.jsx)(li,{id:`${e.id}-${t}`,song:e,index:t,removeFromQueue:xr},`${e.id}-${t}`))})})})})]})]})]}),(0,B.jsxs)(`main`,{style:{width:`100%`,padding:I?`18px 16px`:`26px 40px`,boxSizing:`border-box`},children:[e===`home`&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`section`,{style:{minHeight:I?`240px`:`220px`,borderRadius:`28px`,padding:I?`22px 18px`:`32px 48px`,backgroundImage:Ct?`linear-gradient(135deg, rgba(5,0,0,0.42), rgba(58,0,8,0.82) 48%, rgba(0,0,0,0.96)), url('${Er(`artists/MC_BERRY.png`)}')`:xt?`linear-gradient(rgba(12,2,22,0.35), rgba(4,0,10,0.92)), url('${Er(`covers/BD.png`)}')`:`linear-gradient(rgba(8,10,17,0.60), rgba(8,10,17,0.88)), url('${Er(`covers/Koenigliche-AI-Songs.png`)}')`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundPosition:I?`center top`:`top center`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,alignItems:`center`,marginBottom:`28px`,textAlign:`center`,opacity:+!!ee,transform:ee?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d7e2`,fontSize:I?`12px`:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`},children:Ct?`Unterwelt Interface`:xt?`Secret Neon Interface`:`Startmenü`}),(0,B.jsx)(`h1`,{style:{fontSize:I?`clamp(28px, 9vw, 40px)`:`44px`,margin:0,marginBottom:`10px`,maxWidth:I?`100%`:`900px`,textAlign:`center`,width:`100%`,lineHeight:I?1.02:1,color:Ct?`#ff1738`:xt?`#ff4dd2`:`white`,textShadow:Ct?`0 0 18px rgba(255, 23, 56, 0.75), 0 0 34px rgba(120,0,16,0.65)`:xt?`0 0 18px rgba(255,77,210,0.75)`:`0 6px 22px rgba(0,0,0,0.45)`},children:Ct?`MC Berry`:xt?`BerryDeadly Music`:`Königliche AI Songs`}),(0,B.jsx)(`p`,{style:{maxWidth:I?`100%`:`840px`,color:`#e3e6eb`,fontSize:I?`15px`:`16px`,lineHeight:1.35,margin:`0 auto`,textAlign:`center`,textShadow:`0 4px 18px rgba(0,0,0,0.35)`},children:Ct?`König der Unterwelt. Schwarze Maske, rote Krone und 808s aus den Schatten von Neo City.`:xt?`Neon City Lights — Erdbeere Time. Eine geheime Cyberpunk-K-Pop-Bibliothek aus Neo City.`:`Deine AI-Musikbibliothek, zertifiziert von dem MM.`})]}),(0,B.jsx)(`div`,{style:{width:`100%`,marginBottom:`26px`,padding:I?`18px 16px`:`20px 26px`,borderRadius:`22px`,background:`linear-gradient(135deg, #1a1f2b, #0f131c)`,border:`1px solid #2a3142`,boxShadow:`0 10px 30px rgba(0,0,0,0.25)`,textAlign:`center`,position:`relative`,overflow:`hidden`,color:`white`,boxSizing:`border-box`},children:Pe?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{style:{fontSize:I?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`,color:P===`mcberry`?F.gold:`white`,textShadow:P===`default`?`none`:F.titleShadow},children:Le===`neoCity2`?`📻 DU HÖRST NEO CITY RADIO 2`:Le===`neoCity3`?`📻 DU HÖRST NEO CITY RADIO 3`:Le===`neoCity4`?`Neo City Phonk Radio`:`📻 DU HÖRST NEO CITY RADIO`}),(0,B.jsxs)(`div`,{style:{fontSize:I?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[`Jetzt läuft:`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`strong`,{style:{color:F.accent,fontSize:`22px`,textShadow:P===`default`?`none`:F.titleShadow},children:n?.title}),yn&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`br`,{}),(0,B.jsx)(`br`,{}),`Als nächstes:`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`strong`,{style:{color:P===`mcberry`?F.gold:P===`berrydeadly`?`#ff9be8`:`#c7ced9`,fontSize:`18px`},children:yn.title})]})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{style:{fontSize:I?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`,color:P===`mcberry`?F.gold:P===`berrydeadly`?`#ff9be8`:`white`,textShadow:P===`default`?`none`:F.titleShadow},children:P===`mcberry`?`👑 Unterwelt-Frequenz:`:P===`berrydeadly`?`💜 Secret Neon Signal:`:`✨ Jetzt neu:`}),(0,B.jsxs)(`div`,{style:{fontSize:I?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[P===`mcberry`?`MC Berry aus den Schatten von Neo City`:P===`berrydeadly`?`BerryDeadly live aus dem Neon von Neo City`:`Königliche AI Songs Nonstop`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`strong`,{style:{color:F.accent,fontSize:`22px`,textShadow:P===`default`?`none`:F.titleShadow},children:P===`mcberry`?`👑 König der Unterwelt`:P===`berrydeadly`?`🌃 Neon City Lights — Erdbeere Time`:`📻 Jetzt auf Neo City Radio`}),(0,B.jsx)(`br`,{}),P===`mcberry`?`🌑 Live aus der Unterwelt`:P===`berrydeadly`?`💫 Secret City, Neon Heartbeat, After 3AM`:`🌃 Live aus der Stadt der Lichter`]})]})}),(0,B.jsxs)(`section`,{style:{opacity:+!!te,transform:te?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,B.jsx)(`button`,{onClick:()=>t(`songs`),style:H(P),children:`Alle Songs ansehen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(190px, 1fr))`,gap:`16px`},children:Xt.map(e=>(0,B.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>Fn(e),onMouseEnter:()=>w(`release-${e.id}`),onMouseLeave:()=>w(null),style:{textAlign:`left`,background:C===`release-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:C===`release-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`release-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,B.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]}),(0,B.jsxs)(`section`,{style:{marginTop:`32px`,opacity:+!!ne,transform:ne?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,B.jsx)(`button`,{onClick:()=>t(`albums`),style:H(P),children:`Alle Alben ansehen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`18px`},children:Zt.slice(0,4).map(e=>(0,B.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>{d(e),t(`albums`)},onMouseEnter:()=>w(`home-album-${e.id}`),onMouseLeave:()=>w(null),style:{textAlign:`left`,background:C===`home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:C===`home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))}),(0,B.jsxs)(`div`,{onDoubleClick:()=>{Je(!0),Xe(``),Qe(``)},style:{margin:`32px 16px`,padding:`20px`,borderRadius:`16px`,cursor:`pointer`,border:`1px solid var(--border)`,background:`linear-gradient(135deg, var(--accent-bg), rgba(170, 59, 255, 0.05))`,textAlign:`center`},children:[(0,B.jsx)(`p`,{style:{fontSize:`12px`,opacity:.6,marginBottom:`6px`},children:`Anzeige`}),(0,B.jsx)(`h3`,{style:{marginBottom:`8px`,color:`var(--text-h)`},children:`🎢 EuroParksMC`}),(0,B.jsxs)(`h1`,{style:{fontSize:`clamp(42px, 9vw, 110px)`,fontWeight:900,lineHeight:.95,letterSpacing:`clamp(-2px, -0.5vw, -5px)`},children:[`Der`,` `,(0,B.jsx)(`span`,{style:{background:`linear-gradient(135deg, rgb(73, 115, 255), rgb(123, 159, 255), rgb(73, 115, 255))`,backgroundSize:`300% 100%`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,animation:`gs 4s ease infinite`},children:`Europapark`}),(0,B.jsx)(`br`,{}),`in Minecraft`]}),(0,B.jsx)(`div`,{style:{opacity:1,transform:`none`,transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s`},children:(0,B.jsx)(`p`,{style:{fontSize:`clamp(16px, 2vw, 20px)`,color:`rgb(119, 119, 119)`,marginTop:`28px`,lineHeight:1.7,maxWidth:`620px`,marginInline:`auto`},children:`20 Attraktionen, 5 Themenbereiche, eine aktive Community.`})}),(0,B.jsx)(`a`,{href:`https://europarksmc.eu/#zeitstrahl`,onClick:e=>e.stopPropagation(),target:`_blank`,rel:`noopener noreferrer`,style:{display:`inline-block`,padding:`8px 16px`,marginTop:`20px`,borderRadius:`999px`,background:`var(--accent)`,color:`white`,textDecoration:`none`,fontSize:`14px`,transition:`transform 0.2s ease`},onMouseEnter:e=>e.target.style.transform=`translateY(-2px)`,onMouseLeave:e=>e.target.style.transform=`translateY(0px)`,children:`Jetzt erkunden`})]})]})]}),e===`artists`&&f&&(()=>{let e=f.songs.slice(0,5),n=f.releases.slice(0,4),r=[...f.songs].sort((e,t)=>new Date(e.releaseDate)-new Date(t.releaseDate)),i=r[0],o=r[r.length-1],s=r.filter(e=>{let t=g.trim().toLowerCase();return t?e.title.toLowerCase().includes(t)||Or(e.artist).join(`, `).toLowerCase().includes(t)||(e.album||``).toLowerCase().includes(t):!0}),l=(e=f.songs)=>{if(!e.length)return;let[t,...n]=e;a(n),An(t,{resetHistory:!0})},u=(e=f.songs)=>{if(!e.length)return;let[t,...n]=[...e].sort(()=>Math.random()-.5);a(n),An(t,{resetHistory:!0})},v=e=>{d(e),p(null),h(`overview`),t(`albums`)};return(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`button`,{onClick:()=>{if(m!==`overview`){h(`overview`),_(``);return}p(null),t(`songs`)},style:{...H(P),marginBottom:`18px`},children:m===`overview`?`← Zurück zu Songs`:`← Zurück zur Artist Page`}),(0,B.jsxs)(`div`,{style:{borderRadius:`28px`,padding:I?`22px 18px`:`32px`,background:F.cardBg,border:F.cardBorder,marginBottom:`32px`,display:`grid`,gridTemplateColumns:I?`1fr`:`140px 1fr`,gap:`22px`,alignItems:`center`},children:[f.image?(0,B.jsx)(`img`,{src:Er(f.image),alt:f.name,style:{width:I?`110px`:`140px`,height:I?`110px`:`140px`,objectFit:`cover`,borderRadius:`24px`}}):(0,B.jsx)(`div`,{style:{width:I?`110px`:`140px`,height:I?`110px`:`140px`,borderRadius:`24px`,background:F.avatarBg,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`42px`,fontWeight:900,color:`white`,boxShadow:P===`default`?`none`:`0 0 22px ${F.borderColor}`},children:f.name.slice(0,1).toUpperCase()}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{color:P===`mcberry`?F.gold:P===`berrydeadly`?`#ff9be8`:`#8e96a3`,fontSize:`13px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`8px`},children:`Artist Page`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`22px`,fontSize:I?`34px`:`48px`,color:P===`default`?`white`:F.accent,textShadow:P===`default`?`none`:F.titleShadow},children:f.name}),(0,B.jsx)(`div`,{style:{color:`#c7ced9`,fontSize:`15px`,lineHeight:1.6,maxWidth:`780px`,marginBottom:`18px`,whiteSpace:`pre-line`},children:f.bio||`No Bio found.`}),(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[f.songs.length,` `,f.songs.length===1?`Song`:`Songs`,` •`,` `,f.releases.length,` `,f.releases.length===1?`Album`:`Alben`]})]})]}),i&&o&&(0,B.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,marginTop:`14px`,marginBottom:`20px`},children:[(0,B.jsxs)(`div`,{style:Br,children:[`Erster Song: `,i.title]}),(0,B.jsxs)(`div`,{style:Br,children:[`Neuester Song: `,o.title]})]}),m===`overview`&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`section`,{style:{marginBottom:`34px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,B.jsx)(`button`,{onClick:()=>{h(`songs`),_(``)},style:H(P),children:`Alle Songs ansehen`})]}),f.songs.length===0?(0,B.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`No Artist Page found.`}):(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fill, minmax(190px, 190px))`,gap:`16px`},children:e.map(e=>(0,B.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>Fn(e),onMouseEnter:()=>w(`artist-release-song-${e.id}`),onMouseLeave:()=>w(null),style:{textAlign:`left`,background:C===`artist-release-song-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:C===`artist-release-song-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`artist-release-song-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,B.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]}),f.releases.length>0&&(0,B.jsxs)(`section`,{style:{marginTop:`32px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,B.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,B.jsx)(`button`,{onClick:()=>h(`albums`),style:H(P),children:`Alle Alben ansehen`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fill, minmax(220px, 220px))`,gap:`18px`},children:n.map(e=>(0,B.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>v(e),onMouseEnter:()=>w(`artist-home-album-${e.id}`),onMouseLeave:()=>w(null),style:{textAlign:`left`,background:C===`artist-home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:C===`artist-home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`artist-home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]})]}),m===`songs`&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`24px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`12px`},children:`Artist Songs`}),(0,B.jsxs)(`h1`,{style:{margin:0,marginBottom:`16px`},children:[`Songs von `,f.name]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`22px`},children:[(0,B.jsx)(`button`,{onClick:()=>l(s),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>u(s),style:H(P),children:`Shuffle`})]}),(0,B.jsx)(`input`,{type:`text`,value:g,onChange:e=>_(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:I?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[s.map((e,t)=>(0,B.jsx)(ui,{song:e,index:t,showAlbum:!0},e.id)),(0,B.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),m===`albums`&&f.releases.length>0&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`30px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`12px`},children:`Artist Alben`}),(0,B.jsxs)(`h1`,{style:{margin:0},children:[`Alben von `,f.name]})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:f.releases.map(e=>(0,B.jsxs)(`div`,{onMouseEnter:()=>w(`artist-albums-page-${e.id}`),onMouseLeave:()=>w(null),style:{background:C===`artist-albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:C===`artist-albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`artist-albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})}),(0,B.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>In(e),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>v(e),style:H(P),children:`Öffnen`})]})]},e.id))})]})]})})(),e===`songs`&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:Fr(e,u,M)}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`14px`},children:[(0,B.jsx)(`button`,{onClick:zn,style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:Bn,style:H(P),children:`Shuffle`})]}),(0,B.jsx)(`input`,{type:`text`,value:O,onChange:e=>le(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:I?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!I&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,B.jsx)(`div`,{children:`#`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{children:`Titel`}),(0,B.jsx)(`div`,{children:`Album`}),(0,B.jsx)(`div`,{children:`Dauer`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{})]}),Yt.map((e,t)=>(0,B.jsx)(ui,{song:e,index:t,showAlbum:!0},e.id)),(0,B.jsx)(`div`,{style:{height:c?`260px`:`40px`}}),Yt.length===0&&(0,B.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Keine Songs gefunden.`})]})]}),e===`playlists`&&!M&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Playlists`}),(0,B.jsx)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:(0,B.jsxs)(`label`,{style:{...H(P),display:`inline-flex`,alignItems:`center`},children:[`Importieren`,(0,B.jsx)(`input`,{type:`file`,accept:`.json`,onChange:ur,style:{display:`none`}})]})})]}),tt.length===0?(0,B.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Noch keine Playlists erstellt.`}):(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`16px`},children:tt.map(e=>{let n=_r(e.songIds);return(0,B.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`18px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{fontSize:`22px`,fontWeight:800,marginBottom:`8px`},children:e.name}),(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[e.songIds.length,` `,e.songIds.length===1?`Song`:`Songs`]})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>{rt(e),t(`playlists`)},style:H(P),children:`Öffnen`}),(0,B.jsx)(`button`,{onClick:()=>dr(e),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>z(e),style:H(P),children:`Export`}),(0,B.jsx)(`button`,{onClick:()=>lr(e.id),style:H(P),children:`Löschen`})]})]}),ze&&(0,B.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.75)`,zIndex:9999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`},children:(0,B.jsxs)(`div`,{style:{width:`min(420px, 100%)`,background:`#10131c`,border:`1px solid rgba(255,255,255,0.12)`,borderRadius:`24px`,padding:`24px`,color:`white`,boxShadow:`0 0 40px rgba(0,0,0,0.45)`},children:[(0,B.jsx)(`h2`,{style:{marginTop:0},children:`📡 Neo City Radio Debug`}),(0,B.jsx)(`p`,{style:{opacity:.75,marginBottom:`20px`},children:`Versteckte Frequenz geöffnet.`}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`14px`},children:[(0,B.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,B.jsx)(`div`,{style:{opacity:.7,fontSize:`13px`},children:`Nächster Extra Songs Block`}),(0,B.jsx)(`strong`,{style:{fontSize:`28px`},children:bn(di.nextExtra)})]}),(0,B.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,B.jsx)(`div`,{style:{opacity:.7,fontSize:`13px`},children:`Nächster Radio Exclusive Block`}),(0,B.jsx)(`strong`,{style:{fontSize:`28px`},children:bn(di.nextExtra2)})]})]}),(0,B.jsx)(`button`,{onClick:()=>Be(!1),style:{marginTop:`22px`,width:`100%`,border:`none`,borderRadius:`999px`,padding:`12px 16px`,fontWeight:800,cursor:`pointer`},children:`Schließen`})]})}),e.cover&&(0,B.jsx)(`img`,{src:e.cover,alt:e.name,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`18px`,marginTop:`16px`,display:`block`}}),!e.cover&&n.length>0&&(0,B.jsx)(`div`,{style:{marginTop:`16px`},children:(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`8px`},children:n.slice(0,4).map((t,r)=>{let i=n.length-3;return n.length>4&&r===3?(0,B.jsxs)(`div`,{style:{aspectRatio:`1 / 1`,borderRadius:`14px`,background:`#10141d`,border:`1px solid #202636`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:`20px`,color:`#d7dce4`},children:[`+`,i]},`more-${e.id}`):n.length>4&&r>3?null:(0,B.jsx)(`img`,{src:t.cover,alt:t.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,display:`block`}},`${t.id}-${r}`)})})})]},e.id)})})]}),e===`playlists`&&M&&(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`button`,{onClick:()=>rt(null),style:{...H(P),marginBottom:`16px`},children:`← Zurück zu Playlists`}),(0,B.jsx)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:I?`16px`:`18px`,marginBottom:`18px`},children:(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`8px`},children:M.name}),(0,B.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[M.songIds.length,` `,M.songIds.length===1?`Song`:`Songs`]})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>dr(M),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>pr(M),style:H(P),children:`Shuffle`}),(0,B.jsx)(`button`,{onClick:()=>z(M),style:H(P),children:`Export`})]})]})}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[_r(M.songIds).map((e,t)=>(0,B.jsx)(ui,{song:e,index:t,showAlbum:!0,playlistContext:M},`${e.id}-${t}`)),(0,B.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`patchnotes`&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Info`}),(0,B.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:`Patchnotes`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gap:`18px`},children:tr.map((e,t)=>(0,B.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,color:`#d7dce4`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`12px`,marginBottom:`14px`,flexWrap:`wrap`},children:[(0,B.jsxs)(`div`,{style:{fontWeight:800,fontSize:`22px`},children:[`Version `,e.version]}),(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:e.label||(t===0?`Aktueller Patch`:`Früherer Patch`)})]}),(0,B.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,lineHeight:1.9},children:e.changes.map((e,t)=>(0,B.jsx)(`li`,{children:e},t))})]},e.version))})]}),e===`extra`&&(0,B.jsxs)(`div`,{style:{padding:I?`32px 20px`:`56px 32px 32px`,color:`white`,maxWidth:`980px`,margin:`0 auto`},children:[(0,B.jsx)(`h1`,{style:{marginBottom:`28px`},children:`Extra`}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`28px`,position:`relative`},children:(0,B.jsxs)(`div`,{onMouseEnter:()=>_t(!0),onMouseLeave:()=>_t(!1),onClick:()=>_t(e=>!e),style:{position:`relative`,display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`8px 14px`,color:`#d7dce4`,fontSize:`14px`,cursor:`help`},children:[(0,B.jsx)(`span`,{children:`ℹ️`}),(0,B.jsx)(`span`,{children:`Wie kommen Titel in den Extra-Bereich?`}),(0,B.jsxs)(`div`,{style:{position:`absolute`,top:`calc(100% + 12px)`,left:`50%`,transform:`translateX(-50%)`,width:I?`280px`:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`18px`,padding:`18px`,color:`#d7dce4`,lineHeight:1.6,textAlign:`left`,boxShadow:`0 20px 45px rgba(0,0,0,0.45)`,zIndex:20,opacity:+!!gt,pointerEvents:gt?`auto`:`none`,transition:`opacity 0.2s ease, transform 0.2s ease`},className:`extraInfoTooltip`,children:[(0,B.jsx)(`strong`,{style:{color:`white`},children:`Hinweis zu Extra-Titeln`}),(0,B.jsx)(`br`,{}),`Einmal im Monat setzt sich der MM zusammen und wählt aus den eingereichten Cover- und Mashup-Anfragen aus.`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`br`,{}),`Pro Person können monatlich bis zu `,(0,B.jsx)(`strong`,{children:`zwei Cover`}),` und`,` `,(0,B.jsx)(`strong`,{children:`zwei Mashups`}),` berücksichtigt werden. Insgesamt entstehen daraus bis zu vier Cover und vier Mashups.`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`br`,{}),`Aus diesen Titeln wird anschließend fair ausgelost, welcher Titel am Ende des Monats im Extra-Bereich erscheint.`]})]})}),ar.length===0?(0,B.jsxs)(`div`,{style:{background:`#171b24`,border:`1px dashed #3a4257`,borderRadius:`20px`,padding:`36px 24px`,textAlign:`center`,color:`#9ca3af`},children:[(0,B.jsx)(`div`,{style:{fontSize:`34px`,marginBottom:`10px`},children:`🎵`}),(0,B.jsx)(`strong`,{style:{color:`#d7dce4`,fontSize:`18px`},children:`Noch keine Titel vorhanden.`}),(0,B.jsx)(`p`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Ausgewählte Cover und Mashups erscheinen später hier.`})]}):(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[ar.map((e,t)=>(0,B.jsx)(ui,{song:{...e,trackNumber:t+1,album:e.type===`mashup`?`M ${e.month||`Unbekannt`}`:`C ${e.month||`Unbekannt`}`},index:t,showAlbum:!0},e.id)),(0,B.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`albums`&&!u&&(0,B.jsxs)(`section`,{children:[(0,B.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,B.jsx)(`h1`,{style:{margin:0},children:`Alben`})]}),(0,B.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:Zt.map(e=>(0,B.jsxs)(`div`,{onMouseEnter:()=>w(`albums-page-${e.id}`),onMouseLeave:()=>w(null),style:{background:C===`albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:C===`albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:C===`albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,B.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})}),(0,B.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>In(e),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>{d(e),t(`albums`)},style:H(P),children:`Öffnen`})]})]},e.id))})]}),e===`albums`&&u&&(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`button`,{onClick:()=>d(null),style:{...H(P),marginBottom:`16px`},children:`← Zurück zu Alben`}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I?`1fr`:`minmax(220px, 280px) minmax(0, 1fr)`,gap:I?`18px`:`24px`,alignItems:I?`start`:`end`,background:`linear-gradient(180deg, #1b2130 0%, #10141d 100%)`,borderRadius:`26px`,padding:I?`18px`:`22px`,marginBottom:`22px`},children:[(0,B.jsx)(`img`,{src:u.cover,alt:u.title,style:{width:`100%`,maxWidth:I?`280px`:`100%`,justifySelf:I?`center`:`stretch`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`20px`,margin:I?`0 auto`:0}}),(0,B.jsxs)(`div`,{style:{minWidth:0,textAlign:I?`center`:`left`},children:[(0,B.jsx)(`div`,{style:{color:`#c2cad6`,fontSize:`14px`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`10px`},children:u.releaseType}),(0,B.jsx)(`h1`,{style:{fontSize:I?`clamp(28px, 10vw, 40px)`:`clamp(34px, 4vw, 56px)`,margin:0,marginBottom:`10px`,lineHeight:.95,maxWidth:I?`100%`:`780px`,wordBreak:`break-word`},children:u.title}),(0,B.jsx)(`div`,{style:{color:`#d7dce4`,marginBottom:`8px`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:u.artist,fontSize:`15px`,color:`#d7dce4`})}),(0,B.jsxs)(`div`,{style:{color:`#9aa2ad`,marginBottom:`18px`},children:[u.tracks.length,` `,u.tracks.length===1?`Track`:`Tracks`,` • `,en(u.tracks)]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,justifyContent:I?`center`:`flex-start`},children:[(0,B.jsx)(`button`,{onClick:()=>In(u),style:V(P),children:`Play`}),(0,B.jsx)(`button`,{onClick:()=>Ln(u),style:H(P),children:`Shuffle`})]})]})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!I&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,B.jsx)(`div`,{children:`#`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{children:`Titel`}),(0,B.jsx)(`div`,{children:`Album`}),(0,B.jsx)(`div`,{children:`Dauer`}),(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{})]}),[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).map((e,t)=>(0,B.jsx)(ui,{song:e,index:t,showAlbum:!1},e.id)),(0,B.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]})]}),(0,B.jsxs)(`div`,{style:{position:`fixed`,left:I?`10px`:0,right:I?`10px`:0,bottom:I?`10px`:0,background:`#0f1117`,border:I?`1px solid #202636`:`none`,borderTop:`1px solid #202636`,borderRadius:I?`22px`:0,display:`grid`,gridTemplateColumns:I?`1fr`:`minmax(220px, 320px) minmax(320px, 1fr) minmax(260px, 360px)`,alignItems:`center`,gap:I?`12px`:`18px`,padding:I?`12px 14px 14px`:`14px 18px`,boxShadow:I?`0 16px 40px rgba(0,0,0,0.35)`:`none`,zIndex:50},children:[(0,B.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:I?`10px`:`12px`,minWidth:0,marginBottom:I?`2px`:0},children:n?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`img`,{src:n.cover,alt:n.title,onClick:si,style:{width:I?`54px`:`58px`,height:I?`54px`:`58px`,objectFit:`cover`,borderRadius:I?`14px`:`12px`,cursor:`pointer`,flexShrink:0}}),(0,B.jsxs)(`div`,{style:{minWidth:0},children:[(0,B.jsx)(`button`,{onClick:si,style:{background:`transparent`,border:`none`,padding:0,margin:0,color:`white`,fontWeight:700,fontSize:`16px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`,textAlign:`left`,width:`100%`},children:n.title}),(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,textAlign:`left`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:n.artist,fontSize:`14px`,color:`#9aa2ad`})})]})]}):(0,B.jsx)(`div`,{style:{color:`#8f8f8f`},children:`Wähle einen Song aus.`})}),(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:I?`8px`:`10px`,minWidth:0},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:I?`8px`:`12px`,justifyContent:`center`,width:`100%`},children:[(0,B.jsx)(`button`,{onClick:Ur,style:Wr,children:`⏮`}),(0,B.jsx)(`button`,{onClick:ti,style:Gr,children:x?`❚❚`:`▶`}),(0,B.jsx)(`button`,{onClick:Ir,style:Wr,children:`⏭`}),(0,B.jsx)(`button`,{onClick:ai,style:{...Wr,color:ye===`off`?`#9aa2ad`:F.accent,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:ye===`one`?`R1`:`R`})]}),(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:`680px`,display:`grid`,gridTemplateColumns:I?`46px minmax(0, 1fr) 46px auto`:`52px minmax(0, 1fr) 52px auto`,gap:I?`8px`:`12px`,alignItems:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`#0f1117`,padding:`0 4px`,justifySelf:`end`},children:ei(ce)}),(0,B.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ie,disabled:Pe,onChange:ni,style:{...Kr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
  90deg,
  ${F.progressFill} 0%,
  ${F.progressFill} ${ie}%,
  ${F.progressRest} ${ie}%,
  ${F.progressRest} 100%
)`}})}),(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:I?`6px`:`10px`,justifyContent:`flex-end`,position:`relative`,zIndex:3,background:`#0f1117`,paddingLeft:`6px`},children:[(0,B.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,padding:`0 4px`,background:`#0f1117`},children:ei(oe)}),(0,B.jsx)(`button`,{onClick:ri,style:{background:`#0f1117`,border:`1px solid #2a3142`,color:`white`,borderRadius:`10px`,padding:I?`4px 7px`:`4px 8px`,cursor:n?`pointer`:`default`,fontSize:I?`11px`:`12px`,opacity:n?1:.5},children:`Text`})]})]}),(0,B.jsx)(`audio`,{ref:Ft,autoPlay:!Pe,playsInline:!0,preload:`auto`,src:n?.file||void 0,style:{display:`none`}})]}),!I&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`140px minmax(0, 1fr)`,alignItems:`center`,gap:`16px`,minWidth:0},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,justifyContent:`flex-start`,minWidth:0},children:[(0,B.jsx)(`button`,{onClick:ii,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:ue===0?`🔇`:`🔊`}),(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:ue,onChange:e=>{let t=Number(e.target.value);de(t),t>0&&pe(t)},style:{...qr,background:`linear-gradient(
  90deg,
  ${F.volumeFill} ${ue*100}%,
  ${F.progressRest} ${ue*100}%
)`}})]}),(0,B.jsx)(`div`,{style:{textAlign:`right`,color:`#9aa2ad`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0},children:i.length>0?`Als Nächstes: ${i[0].title}`:`Keine Songs in der Warteschlange`})]})]}),ut&&n&&(0,B.jsxs)(`div`,{onMouseMove:oi,onMouseEnter:oi,onMouseLeave:()=>pt(!1),style:{position:`fixed`,inset:0,background:`#05070c`,zIndex:90,overflow:`hidden`},children:[(0,B.jsx)(`div`,{style:{position:`absolute`,inset:`-40px`,backgroundImage:`url('${n.cover}')`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,filter:`blur(34px)`,transform:mt?`translateX(0) scale(1.08)`:`translateX(6%) scale(1.12)`,opacity:mt?.95:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}}),(0,B.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.78) 100%)`}}),(0,B.jsx)(`button`,{onClick:ci,style:{position:`absolute`,top:`24px`,right:`24px`,width:`52px`,height:`52px`,borderRadius:`16px`,border:`1px solid rgba(255,255,255,0.15)`,background:`rgba(10,12,18,0.55)`,color:`white`,cursor:`pointer`,fontSize:`22px`,zIndex:4,opacity:+!!ft,transform:ft?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.25s ease, transform 0.25s ease`,backdropFilter:`blur(10px)`},children:`✕`}),ge&&(0,B.jsxs)(`div`,{style:{position:`absolute`,left:I?`16px`:`max(32px, 4vw)`,right:I?`16px`:`auto`,top:I?`auto`:`50%`,bottom:I?`120px`:`auto`,transform:I?`none`:`translateY(-50%)`,width:I?`auto`:`min(360px, 28vw)`,maxHeight:I?`38vh`:`62vh`,overflowY:`auto`,background:`rgba(8,10,16,0.68)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`22px`,zIndex:3,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`16px`,marginBottom:`16px`},children:[(0,B.jsxs)(`div`,{style:{width:`100%`,textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,B.jsx)(`div`,{style:{fontSize:`20px`,fontWeight:800},children:n.title})]}),(0,B.jsx)(`button`,{onClick:()=>_e(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid rgba(255,255,255,0.12)`,background:`rgba(23,27,36,0.8)`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:A})]}),(0,B.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:I?`1fr`:ge?`minmax(320px, 1fr) minmax(420px, 540px) minmax(280px, 1fr)`:`1fr minmax(420px, 540px) minmax(320px, 1fr)`,alignItems:`center`,zIndex:2,padding:I?`24px 16px 140px`:`40px`,gap:I?`20px`:`40px`},children:[(0,B.jsx)(`div`,{}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,B.jsx)(`img`,{src:n.cover,alt:n.title,style:{width:I?`min(78vw, 360px)`:`min(52vw, 540px)`,maxHeight:I?`42vh`:`62vh`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`28px`,boxShadow:`0 30px 80px rgba(0,0,0,0.45)`,transform:mt?`translateX(0)`:`translateX(30px)`,opacity:mt?1:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}})}),(0,B.jsxs)(`div`,{style:{alignSelf:`center`,justifySelf:I?`center`:`start`,maxWidth:`520px`,textAlign:I?`center`:`left`,opacity:+!!ft,transform:ft?`translateY(0)`:`translateY(14px)`,transition:`opacity 0.25s ease, transform 0.25s ease`},children:[(0,B.jsx)(`div`,{style:{color:`rgba(255,255,255,0.72)`,fontSize:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`,textShadow:`0 0 24px rgba(0,0,0,0.45)`},children:`Now Playing`}),(0,B.jsx)(`div`,{style:{fontSize:`clamp(30px, 4vw, 58px)`,fontWeight:900,lineHeight:1,color:`white`,textShadow:F.titleShadow,marginBottom:`10px`},children:n.title}),(0,B.jsx)(`div`,{style:{fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`,textShadow:`0 0 18px rgba(0,0,0,0.45)`},children:(0,B.jsx)(Hr,{berryMode:P,openArtist:Qr,artist:n.artist,fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`})})]})]}),(0,B.jsx)(`div`,{style:{position:`absolute`,left:`50%`,bottom:`34px`,transform:`translateX(-50%)`,width:I?`calc(100vw - 20px)`:`min(900px, 88vw)`,zIndex:4,opacity:+!!ft,transition:`opacity 0.25s ease, transform 0.25s ease`},children:(0,B.jsxs)(`div`,{style:{background:`rgba(8,10,16,0.55)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`18px 22px`,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr auto auto`,alignItems:`center`,marginBottom:`14px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`16px`},children:[(0,B.jsx)(`button`,{onClick:Ur,style:Wr,children:`⏮`}),(0,B.jsx)(`button`,{onClick:ti,style:Gr,children:x?`❚❚`:`▶`}),(0,B.jsx)(`button`,{onClick:Ir,style:Wr,children:`⏭`})]}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,B.jsx)(`button`,{onClick:ai,style:{...Wr,color:ye===`off`?`#9aa2ad`:F.accent,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:ye===`one`?`R1`:`R`})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginLeft:`10px`},children:(0,B.jsx)(`button`,{onClick:ri,style:{background:ge?F.softBg:`transparent`,border:ge?`1px solid ${F.borderColor}`:`1px solid rgba(255,255,255,0.12)`,color:`white`,borderRadius:`12px`,padding:`6px 10px`,cursor:n?`pointer`:`default`,fontSize:`12px`,opacity:n?1:.5},children:`Text`})})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`64px minmax(0, 1fr) 190px`,gap:`16px`,alignItems:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,textAlign:`right`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,padding:`0 4px`,justifySelf:`end`},children:ei(ce)}),(0,B.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:ie,disabled:Pe,onChange:ni,style:{...Kr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
  90deg,
  ${F.progressFill} 0%,
  ${F.progressFill} ${ie}%,
  ${F.progressRest} ${ie}%,
  ${F.progressRest} 100%
)`}})}),(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`10px`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,paddingLeft:`6px`},children:[(0,B.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,padding:`0 4px`,background:`rgba(8,10,16,0.55)`},children:ei(oe)}),(0,B.jsx)(`button`,{onClick:ii,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:ue===0?`🔇`:`🔊`}),(0,B.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:ue,onChange:e=>{let t=Number(e.target.value);de(t),t>0&&pe(t)},style:{...qr,width:`110px`,background:`linear-gradient(
  90deg,
  ${F.volumeFill} ${ue*100}%,
  ${F.progressRest} ${ue*100}%
)`}})]})]})]})})]}),k&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>me(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:70}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(700px, 90vw)`,maxHeight:`70vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:71,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:n?.title||`Unbekannter Song`})]}),(0,B.jsx)(`button`,{onClick:()=>me(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:A})]})]}),it&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:qn,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:74}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:75,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Playlist`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Zur Playlist hinzufügen`})]}),(0,B.jsx)(`button`,{onClick:qn,style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`18px`},children:[tt.map(e=>(0,B.jsx)(`button`,{onClick:()=>or(e.id,ot.id),style:Lr(!1),children:e.name},e.id)),tt.length===0&&(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:`Noch keine Playlist vorhanden.`})]}),(0,B.jsxs)(`div`,{style:{borderTop:`1px solid #202636`,paddingTop:`18px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`10px`},children:`Neue Playlist erstellen`}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`input`,{type:`text`,value:ct,onChange:e=>lt(e.target.value),placeholder:`Playlist-Name...`,style:{flex:1,minWidth:`220px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}}),(0,B.jsx)(`button`,{onClick:ir,style:V(P),children:`Erstellen`})]})]})]})]}),qe&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>{Je(!1),Xe(``),Qe(``)},style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:76}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(420px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:77,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Zugriff erforderlich`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Passwort eingeben`})]}),(0,B.jsx)(`button`,{onClick:()=>{Je(!1),Xe(``),Qe(``)},style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsx)(`input`,{type:`text`,value:Ye,onChange:e=>{Xe(e.target.value),Ze&&Qe(``)},onKeyDown:e=>{e.key===`Enter`&&R()},placeholder:`Passwort eingeben...`,style:{width:`100%`,padding:`12px 14px`,borderRadius:`14px`,border:`1px solid #202636`,background:`#141821`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`,marginBottom:`12px`}}),Ze&&(0,B.jsx)(`div`,{style:{color:`#ff6b6b`,fontSize:`13px`,marginBottom:`12px`,textAlign:`center`},children:Ze}),(0,B.jsx)(`button`,{onClick:R,style:{...V(P),width:`100%`,justifyContent:`center`},children:`Bestätigen`})]})]}),ze&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>Be(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.65)`,zIndex:88}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(440px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:89,color:`white`,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsx)(`div`,{style:{fontSize:`13px`,color:`#8e96a3`,marginBottom:`6px`},children:`Versteckte Frequenz`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,marginBottom:`18px`},children:`📡 Neo City Radio Debug`}),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`12px`},children:[(0,B.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Nächster Extra Songs Block`}),(0,B.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:900},children:bn(di.nextExtra)})]}),(0,B.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Nächster Radio Exclusive Block`}),(0,B.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:900},children:bn(di.nextExtra2)})]})]}),(0,B.jsx)(`button`,{onClick:()=>Be(!1),style:{...V(P),width:`100%`,marginTop:`20px`,justifyContent:`center`},children:`Schließen`})]})]}),$e&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>et(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:78}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(440px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:79,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`,textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{fontSize:`14px`,color:F.accent,marginBottom:`8px`,fontWeight:700},children:`Secret freigeschaltet`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,marginBottom:`12px`},children:`Herzlichen Glückwunsch`}),(0,B.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.6,fontSize:`15px`,marginBottom:`18px`},children:[`Du hast einen geheimen Song freigeschaltet.`,(0,B.jsx)(`br`,{}),`Du kannst ihn jetzt direkt einer Playlist hinzufügen.`]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:rr,style:V(P),children:`Zu Playlist hinzufügen`}),(0,B.jsx)(`button`,{onClick:()=>et(!1),style:H(P),children:`Später`})]})]})]}),xe&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{onClick:()=>Se(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:72}}),(0,B.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:73,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,B.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Community`}),(0,B.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Song einreichen`})]}),(0,B.jsx)(`button`,{onClick:()=>Se(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,B.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.7,fontSize:`15px`,textAlign:`center`,marginBottom:`22px`},children:[`Du kannst hier anonym einen Song zur Überprüfung einreichen.`,(0,B.jsx)(`br`,{}),`Das Formular öffnet sich in einem neuen Tab.`]}),(0,B.jsxs)(`div`,{style:{color:`#d7dce4`,fontSize:`14px`,lineHeight:1.6,textAlign:`center`,marginBottom:`18px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`14px`},children:[`Cover- und Mashup-Anfragen zählen zusammen.`,(0,B.jsx)(`br`,{}),`Pro Monat sind maximal 5 Anfragen möglich.`]}),(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`a`,{href:Dr,target:`_blank`,rel:`noreferrer`,style:{...V(P),textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:`Formular öffnen`}),(0,B.jsx)(`button`,{onClick:()=>Gn(`cover`),style:H(P),children:`Cover beantragen`}),(0,B.jsx)(`button`,{onClick:()=>Gn(`mashup`),style:H(P),children:`Mashup beantragen`})]})]})]}),Ce&&Te===`cover`&&(0,B.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,B.jsx)(`button`,{onClick:Kn,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,B.jsx)(`h2`,{style:{marginTop:0},children:`Cover beantragen`}),j===1&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle einen bestehenden Song aus.`}),(0,B.jsxs)(`select`,{value:Ae,onChange:e=>je(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,B.jsx)(`option`,{value:``,children:`Bitte auswählen`}),Gt.map(e=>(0,B.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,B.jsx)(`button`,{disabled:!Ae,onClick:()=>De(2),style:V(P),children:`Weiter`})]}),j===2&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`12px`},children:`Gewünschter Stil / Prompt:`}),(0,B.jsx)(`textarea`,{value:Me,onChange:e=>Ne(e.target.value),placeholder:`Jazz-Version, Country-Version, EDM-Version...`,style:{width:`100%`,minHeight:`120px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,B.jsx)(`button`,{disabled:!Me.trim(),onClick:()=>De(3),style:V(P),children:`Text generieren`})]}),j===3&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,B.jsx)(`textarea`,{readOnly:!0,value:Nn,style:{width:`100%`,minHeight:`180px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(Nn),style:H(P),children:`Text kopieren`}),(0,B.jsx)(`a`,{href:Dr,target:`_blank`,rel:`noreferrer`,style:{...V(P),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),Ce&&Te===`mashup`&&(0,B.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,B.jsx)(`button`,{onClick:Kn,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,B.jsx)(`h2`,{style:{marginTop:0},children:`Mashup beantragen`}),j===1&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle zwei bestehende Songs für dein Mashup aus.`}),(0,B.jsxs)(`select`,{value:Ue,onChange:e=>We(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`12px`},children:[(0,B.jsx)(`option`,{value:``,children:`Song 1 auswählen`}),Gt.map(e=>(0,B.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,B.jsxs)(`select`,{value:Ge,onChange:e=>Ke(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,B.jsx)(`option`,{value:``,children:`Song 2 auswählen`}),Gt.map(e=>(0,B.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,B.jsx)(`button`,{disabled:!Ue||!Ge||Ue===Ge,onClick:()=>De(2),style:V(P),children:`Weiter`})]}),j===2&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`18px`,lineHeight:1.6},children:`Die Songtexte der beiden Songs werden für ein Mashup verwendet. Daraus wird ein neues Mashup erstellt. Das fertige Mashup wird später zugesendet.`}),(0,B.jsx)(`button`,{onClick:()=>De(3),style:V(P),children:`Text generieren`})]}),j===3&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,B.jsx)(`textarea`,{readOnly:!0,value:Pn,style:{width:`100%`,minHeight:`160px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,B.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(Pn),style:H(P),children:`Text kopieren`}),(0,B.jsx)(`a`,{href:Dr,target:`_blank`,rel:`noreferrer`,style:{...V(P),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),vt&&(0,B.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,B.jsxs)(`div`,{style:{width:`100%`,maxWidth:`460px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`22px`,padding:`22px`,color:`white`},children:[(0,B.jsx)(`button`,{onClick:()=>yt(!1),style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,B.jsx)(`h2`,{style:{marginTop:0},children:`Originale anzeigen`}),(0,B.jsx)(`p`,{style:{color:`#9ca3af`,marginBottom:`16px`},children:`Wähle aus, welchen Originalsong du anzeigen möchtest.`}),(0,B.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:N.map(e=>(0,B.jsxs)(`button`,{onClick:()=>Xr(e),style:{display:`flex`,alignItems:`center`,gap:`12px`,width:`100%`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`14px`,padding:`10px`,color:`white`,cursor:`pointer`,textAlign:`left`},children:[(0,B.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`44px`,height:`44px`,borderRadius:`10px`,objectFit:`cover`}}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{style:{fontWeight:700},children:e.title}),(0,B.jsx)(`div`,{style:{color:`#9ca3af`,fontSize:`13px`},children:e.artist})]})]},e.id))})]})})]})}var Wr={width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`transparent`,color:`white`,cursor:`pointer`,fontSize:`18px`},Gr={width:`44px`,height:`44px`,borderRadius:`999px`,border:`none`,background:`white`,color:`black`,cursor:`pointer`,fontSize:`18px`,fontWeight:700},Kr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`transparent`,position:`relative`,zIndex:2,cursor:`pointer`,margin:0,minWidth:0,outline:`none`},qr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`linear-gradient(90deg, rgb(0, 19, 6) 0%, rgb(9, 105, 0) 100%)`,height:`4px`,borderRadius:`999px`,cursor:`pointer`,margin:0},Jr=e=>({background:`transparent`,color:`#9aa2ad`,border:`none`,cursor:e?`grabbing`:`grab`,fontSize:`16px`,padding:0,lineHeight:1}),Yr={width:`32px`,height:`32px`,background:`transparent`,color:`#c7ced9`,border:`none`,borderRadius:`8px`,cursor:`pointer`,fontSize:`16px`};v.createRoot(document.getElementById(`root`)).render((0,B.jsx)(y.StrictMode,{children:(0,B.jsx)(Ur,{})}));