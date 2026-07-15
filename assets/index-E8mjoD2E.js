var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],k=-1;function A(e){return{current:e}}function de(e){0>k||(e.current=ue[k],ue[k]=null,k--)}function j(e,t){k++,ue[k]=e.current,e.current=t}var fe=A(null),pe=A(null),me=A(null),he=A(null);function M(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function ge(){de(fe),de(pe),de(me)}function _e(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ve(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=le)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function N(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function P(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var lt=Math.random().toString(36).slice(2),ut=`__reactFiber$`+lt,dt=`__reactProps$`+lt,ft=`__reactContainer$`+lt,pt=`__reactEvents$`+lt,mt=`__reactListeners$`+lt,ht=`__reactHandles$`+lt,gt=`__reactResources$`+lt,_t=`__reactMarker$`+lt;function F(e){delete e[ut],delete e[dt],delete e[pt],delete e[mt],delete e[ht]}function vt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ut])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[ut]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[gt];return t||=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[_t]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return Ee.call(kt,e)?!0:Ee.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var I=null,on=null;function sn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[dt]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(I!==null||on!==null)&&(vu(),I&&(t=I,e=on,on=I=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,`passive`,{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=h({},Sn,{view:0,detail:0}),Tn=xn(wn),En,Dn,On,kn=h({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==On&&(On&&e.type===`mousemove`?(En=e.screenX-On.screenX,Dn=e.screenY-On.screenY):Dn=En=0,On=e),En)},movementY:function(e){return`movementY`in e?e.movementY:Dn}}),An=xn(kn),jn=xn(h({},kn,{dataTransfer:0})),Mn=xn(h({},wn,{relatedTarget:0})),Nn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),L=xn(h({},Sn,{data:0})),R={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=xn(h({},wn,{key:function(e){if(e.key){var t=R[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=xn(h({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=xn(h({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=xn(h({},kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=xn(h({},Sn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=dn&&`CompositionEvent`in window,qn=null;dn&&`documentMode`in document&&(qn=document.documentMode);var Jn=dn&&`TextEvent`in window&&!qn,Yn=dn&&(!Kn||qn&&8<qn&&11>=qn),z=` `,B=!1;function Xn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function V(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return V(t);case`keypress`:return t.which===32?(B=!0,z):null;case`textInput`:return e=t.data,e===z&&B?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Kn&&Xn(e,t)?(e=_n(),gn=hn=mn=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){I?on?on.push(r):on=[r]:I=r,t=Td(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){vd(e,0)}function or(e){if(Rt(bt(e)))return e}function H(e,t){if(e===`change`)return t}var sr=!1;if(dn){var cr;if(dn){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){rr&&(rr.detachEvent(`onpropertychange`,fr),ir=rr=null)}function fr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,an(e)),ln(ar,t)}}function pr(e,t,n){e===`focusin`?(dr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function hr(e,t){if(e===`click`)return or(t)}function gr(e,t){if(e===`input`||e===`change`)return or(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function U(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function W(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Cr=dn&&`documentMode`in document&&11>=document.documentMode,wr=null,Tr=null,Er=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||wr==null||wr!==zt(r)||(r=wr,`selectionStart`in r&&W(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&yr(Er,r)||(Er=r,r=Td(Tr,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ar={animationend:kr(`Animation`,`AnimationEnd`),animationiteration:kr(`Animation`,`AnimationIteration`),animationstart:kr(`Animation`,`AnimationStart`),transitionrun:kr(`Transition`,`TransitionRun`),transitionstart:kr(`Transition`,`TransitionStart`),transitioncancel:kr(`Transition`,`TransitionCancel`),transitionend:kr(`Transition`,`TransitionEnd`)},jr={},Mr={};dn&&(Mr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),`TransitionEvent`in window||delete Ar.transitionend.transition);function Nr(e){if(jr[e])return jr[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mr)return jr[e]=t[n];return e}var Pr=Nr(`animationend`),Fr=Nr(`animationiteration`),Ir=Nr(`animationstart`),Lr=Nr(`transitionrun`),G=Nr(`transitionstart`),Rr=Nr(`transitioncancel`),zr=Nr(`transitionend`),Br=new Map,Vr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Vr.push(`scrollEnd`);function Hr(e,t){Br.set(e,t),Tt(t,[e])}var Ur=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Wr=[],Gr=0,Kr=0;function qr(){for(var e=Gr,t=Kr=Gr=0;t<e;){var n=Wr[t];Wr[t++]=null;var r=Wr[t];Wr[t++]=null;var i=Wr[t];Wr[t++]=null;var a=Wr[t];if(Wr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Zr(n,i,a)}}function Jr(e,t,n,r){Wr[Gr++]=e,Wr[Gr++]=t,Wr[Gr++]=n,Wr[Gr++]=r,Kr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Yr(e,t,n,r){return Jr(e,t,n,r),Qr(e)}function Xr(e,t){return Jr(e,null,null,t),Qr(e)}function Zr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Qr(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $r={};function ei(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,t,n,r){return new ei(e,t,n,r)}function ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ri(e,t){var n=e.alternate;return n===null?(n=ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ii(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ni(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=ti(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return oi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ti(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ti(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ti(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ti(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function oi(e,t,n,r){return e=ti(7,e,r,t),e.lanes=n,e}function si(e,t,n){return e=ti(6,e,null,t),e.lanes=n,e}function ci(e){var t=ti(18,null,null,0);return t.stateNode=e,t}function li(e,t,n){return t=ti(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ui=new WeakMap;function di(e,t){if(typeof e==`object`&&e){var n=ui.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},ui.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var fi=[],pi=0,mi=null,hi=0,gi=[],_i=0,vi=null,yi=1,bi=``;function xi(e,t){fi[pi++]=hi,fi[pi++]=mi,mi=e,hi=t}function Si(e,t,n){gi[_i++]=yi,gi[_i++]=bi,gi[_i++]=vi,vi=e;var r=yi;e=bi;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yi=1<<32-Ue(t)+i|n<<i|r,bi=a+e}else yi=1<<a|n<<i|r,bi=e}function Ci(e){e.return!==null&&(xi(e,1),Si(e,1,0))}function wi(e){for(;e===mi;)mi=fi[--pi],fi[pi]=null,hi=fi[--pi],fi[pi]=null;for(;e===vi;)vi=gi[--_i],gi[_i]=null,bi=gi[--_i],gi[_i]=null,yi=gi[--_i],gi[_i]=null}function Ti(e,t){gi[_i++]=yi,gi[_i++]=bi,gi[_i++]=vi,yi=t.id,bi=t.overflow,vi=e}var Ei=null,Di=null,K=!1,Oi=null,ki=!1,Ai=Error(i(519));function ji(e){throw Li(di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ai}function Mi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ut]=e,t[dt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||ji(e,!0)}function Ni(e){for(Ei=e.return;Ei;)switch(Ei.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Ei=Ei.return}}function Pi(e){if(e!==Ei)return!1;if(!K)return Ni(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Di&&ji(e),Ni(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=uf(e)}else t===27?(t=Di,Zd(e.type)?(e=lf,lf=null,Di=e):Di=t):Di=Ei?cf(e.stateNode.nextSibling):null;return!0}function Fi(){Di=Ei=null,K=!1}function Ii(){var e=Oi;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Oi=null),e}function Li(e){Oi===null?Oi=[e]:Oi.push(e)}var Ri=A(null),zi=null,Bi=null;function Vi(e,t,n){j(Ri,t._currentValue),t._currentValue=n}function Hi(e){e._currentValue=Ri.current,de(Ri)}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Wi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ui(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ui(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Gi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;vr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Wi(t,e,n,r),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qi(e){zi=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ji(e){return Xi(zi,e)}function Yi(e,t){return zi===null&&qi(e),Xi(e,t)}function Xi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bi===null){if(e===null)throw Error(i(308));Bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bi=Bi.next=t;return n}var Zi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Qi=t.unstable_scheduleCallback,$i=t.unstable_NormalPriority,ea={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ta(){return{controller:new Zi,data:new Map,refCount:0}}function na(e){e.refCount--,e.refCount===0&&Qi($i,function(){e.controller.abort()})}var ra=null,ia=0,aa=0,oa=null;function sa(e,t){if(ra===null){var n=ra=[];ia=0,aa=ud(),oa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ia++,t.then(ca,ca),t}function ca(){if(--ia===0&&ra!==null){oa!==null&&(oa.status=`fulfilled`);var e=ra;ra=null,aa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function la(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ua=D.S;D.S=function(e,t){Ql=je(),typeof t==`object`&&t&&typeof t.then==`function`&&sa(e,t),ua!==null&&ua(e,t)};var da=A(null);function fa(){var e=da.current;return e===null?Fl.pooledCache:e}function pa(e,t){t===null?j(da,da.current):j(da,t.pool)}function ma(){var e=fa();return e===null?null:{parent:ea._currentValue,pool:e}}var ha=Error(i(460)),ga=Error(i(474)),_a=Error(i(542)),va={then:function(){}};function ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ba(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e}throw Sa=t,ha}}function xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Sa=e,ha):e}}var Sa=null;function Ca(){if(Sa===null)throw Error(i(459));var e=Sa;return Sa=null,e}function wa(e){if(e===ha||e===_a)throw Error(i(483))}var Ta=null,Ea=0;function Da(e){var t=Ea;return Ea+=1,Ta===null&&(Ta=[]),ba(Ta,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ka(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Aa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ri(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&xa(i)===t.type)?(t=a(t,n.props),Oa(t,n),t.return=e,t):(t=ai(n.type,n.key,n.props,null,e.mode,r),Oa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=li(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=oi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ai(t.type,t.key,t.props,null,e.mode,n),Oa(n,t),n.return=e,n;case v:return t=li(t,e.mode,n),t.return=e,t;case te:return t=xa(t),f(e,t,n)}if(ce(t)||ae(t))return t=oi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Da(t),n);if(t.$$typeof===C)return f(e,Yi(e,t),n);ka(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=xa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Da(n),r);if(n.$$typeof===C)return p(e,t,Yi(e,n),r);ka(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=xa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Da(r),i);if(r.$$typeof===C)return m(e,t,n,Yi(t,r),i);ka(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&xi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&xi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&xi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&xi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&xi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&xi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Oa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=oi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ai(o.type,o.key,o.props,null,e.mode,c),Oa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=li(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=xa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Da(o),c);if(o.$$typeof===C)return b(e,r,Yi(e,o),c);ka(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ea=0;var i=b(e,t,n,r);return Ta=null,i}catch(t){if(t===ha||t===_a)throw t;var a=ti(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ja=Aa(!0),Ma=Aa(!1),Na=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Qr(e),Zr(e,null,n),t}return Jr(e,r,t,n),Qr(e)}function Ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ba=!1;function Va(){if(Ba){var e=oa;if(e!==null)throw e}}function Ha(e,t,n,r){Ba=!1;var i=e.updateQueue;Na=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===aa&&(Ba=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Na=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ua(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Wa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ua(n[e],t)}var Ga=A(null),Ka=A(0);function qa(e,t){e=Vl,j(Ka,e),j(Ga,t),Vl=e|t.baseLanes}function Ja(){j(Ka,Vl),j(Ga,Ga.current)}function Ya(){Vl=Ka.current,de(Ga),de(Ka)}var Xa=A(null),Za=null;function Qa(e){var t=e.alternate;j(ro,ro.current&1),j(Xa,e),Za===null&&(t===null||Ga.current!==null||t.memoizedState!==null)&&(Za=e)}function $a(e){j(ro,ro.current),j(Xa,e),Za===null&&(Za=e)}function eo(e){e.tag===22?(j(ro,ro.current),j(Xa,e),Za===null&&(Za=e)):to(e)}function to(){j(ro,ro.current),j(Xa,Xa.current)}function no(e){de(Xa),Za===e&&(Za=null),de(ro)}var ro=A(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=0,q=null,J=null,oo=null,so=!1,co=!1,lo=!1,uo=0,fo=0,po=null,Y=0;function mo(){throw Error(i(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return ao=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ns:Ps,lo=!1,a=n(r,i),lo=!1,co&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){D.H=Ms;var t=J!==null&&J.next!==null;if(ao=0,oo=J=q=null,so=!1,fo=0,po=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Ki(e)&&(Zs=!0))}function vo(e,t,n,r){q=e;var a=0;do{if(co&&(po=null),fo=0,co=!1,25<=a)throw Error(i(301));if(a+=1,oo=J=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Fs,o=t(n,r)}while(co);return o}function yo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(J===null?null:J.memoizedState)!==e&&(q.flags|=1024),t}function bo(){var e=uo!==0;return uo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(so){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}so=!1}ao=0,oo=J=q=null,co=!1,fo=uo=0,po=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?q.memoizedState=oo=e:oo=oo.next=e,oo}function wo(){if(J===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=J.next;var t=oo===null?q.memoizedState:oo.next;if(t!==null)oo=t,J=e;else{if(e===null)throw q.alternate===null?Error(i(467)):Error(i(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},oo===null?q.memoizedState=oo=e:oo=oo.next=e}return oo}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=fo;return fo+=1,po===null&&(po=[]),e=ba(po,e,t),t=q,(oo===null?t.memoizedState:oo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===C)return Ji(e)}throw Error(i(438,String(e)))}function Oo(e){var t=null,n=q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=q.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),J,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ao&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===aa&&(d=!0);else if((ao&p)===p){u=u.next,p===aa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,q.lanes|=p,Ul|=p;f=u.action,lo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,q.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!vr(o,e.memoizedState)&&(Zs=!0,d&&(n=oa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);vr(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=q,a=wo(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!vr((J||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||oo!==null&&oo.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),Fl===null)throw Error(i(349));o||ao&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t=To(),q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ro(e){var t=Xr(e,2);t!==null&&pu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),lo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,J,typeof r==`function`?r:ko)}function Vo(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ho(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(K){var n=Fl.formState;if(n!==null){a:{var r=q;if(K){if(Di){b:{for(var i=Di,a=ki;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Di=cf(i.nextSibling),r=i.data===`F!`;break a}}ji(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,q,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,q,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,q,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),J,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===ha?_a:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(q.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=J;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=q.updateQueue,t===null&&(t=To(),q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();q.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;J!==null&&r!==null&&ho(r,J.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(q.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=To(),q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(X&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),lo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ao&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),q.lanes|=e,Ul|=e,n)}function hs(e,t,n,r){return vr(n,t)?n:Ga.current===null?!(ao&42)||ao&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=fu(),q.lanes|=e,Ul|=e,t):(e=ms(e,n,r),vr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Os(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,la(c,r),du(e)):Ds(e,t,r,du(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,le,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},du())}function xs(){return Ji(Qf)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Ia(n);var r=La(t,e,n);r!==null&&(pu(r,t,n),Ra(r,t,n)),t={cache:ta()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Yr(e,t,n,r),n!==null&&(pu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,du())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Jr(e,t,i,0),Fl===null&&qr(),!1}catch{}if(n=Yr(e,t,i,r),n!==null)return pu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=Yr(e,n,r,2),t!==null&&pu(t,e,2)}function ks(e){var t=e.alternate;return e===q||t!==null&&t===q}function As(e,t){co=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var Ms={readContext:Ji,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:Ji,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:Ji,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(lo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(lo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,q,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=q,a=Co();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fl===null)throw Error(i(349));Q&127||Po(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Io.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),n},useId:function(){var e=Co(),t=Fl.identifierPrefix;if(K){var n=bi,r=yi;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=uo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Y++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,q,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,q)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Ji,use:Do,useCallback:fs,useContext:Ji,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),J.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),J,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Ji,use:Do,useCallback:fs,useContext:Ji,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return J===null?ms(n,e,t):hs(n,J.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return J===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,J,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ia(r);i.payload=t,n!=null&&(i.callback=n),t=La(e,i,r),t!==null&&(pu(t,e,r),Ra(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ia(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=La(e,i,r),t!==null&&(pu(t,e,r),Ra(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Ia(n);r.tag=2,t!=null&&(r.callback=t),t=La(e,r,n),t!==null&&(pu(t,e,n),Ra(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Ur(e)}function Hs(e){console.error(e)}function Us(e){Ur(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Ia(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Ia(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Gi(t,n,a,!0),n=Xa.current,n!==null){switch(n.tag){case 31:case 13:return Za===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===va?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===va?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(K)return t=Xa.current,t===null?(r!==Ai&&(t=Error(i(423),{cause:r}),Li(di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=di(r,n),a=Ks(e.stateNode,r,a),za(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ai&&(e=Error(i(422),{cause:r}),Li(di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=di(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),za(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Ma(t,null,n,r):ja(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return qi(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(K&&s&&Ci(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ni(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ri(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pa(t,a===null?null:a.cachePool),a===null?Ja():qa(t,a),eo(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&pa(t,null),Ja(),to(t)):(pa(t,a.cachePool),qa(t,a),to(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=fa();return a=a===null?null:{parent:ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&pa(t,null),Ja(),eo(t),e!==null&&Gi(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ja(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,no(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if($a(t),(e=Di)?(e=rf(e,ki),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vi===null?null:{id:yi,overflow:bi},retryLane:536870912,hydrationErrors:null},n=ci(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw ji(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if($a(t),a)if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Zs||Gi(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Fl,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Xr(e,s),pu(r,e,s),Xs;Tu(),t=oc(e,t,n)}else e=o.treeContext,Di=cf(s.nextSibling),Ei=t,K=!0,Oi=null,ki=!1,e!==null&&Ti(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ri(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return qi(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(K&&r&&Ci(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return qi(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(K&&r&&Ci(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(qi(t),t.stateNode===null){var a=$r,o=n.contextType;typeof o==`object`&&o&&(a=Ji(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Pa(t),o=n.contextType,a.context=typeof o==`object`&&o?Ji(o):$r,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Ha(t,r,a,i),Va(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=$r,typeof u==`object`&&u&&(o=Ji(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),Na=!1;var f=t.memoizedState;a.state=f,Ha(t,r,a,i),Va(),l=t.memoizedState,s||f!==l||Na?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=Na||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fa(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=$r,typeof l==`object`&&l&&(c=Ji(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),Na=!1,f=t.memoizedState,a.state=f,Ha(t,r,a,i),Va();var p=t.memoizedState;o!==d||f!==p||Na||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=Na||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ja(t,e.child,null,i),t.child=ja(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Fi(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:ma()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ro.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(K){if(a?Qa(t):to(t),(e=Di)?(e=rf(e,ki),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vi===null?null:{id:yi,overflow:bi},retryLane:536870912,hydrationErrors:null},n=ci(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw ji(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(to(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=oi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Qa(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Qa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?(to(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=oi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ja(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):(to(t),t.child=e.child,t.flags|=128,t=null);else if(Qa(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Li({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Gi(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Fl,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Xr(e,r),pu(s,e,r),Xs;af(c)||Tu(),t=yc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Di=cf(c.nextSibling),Ei=t,K=!0,Oi=null,ki=!1,e!==null&&Ti(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?(to(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ri(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=oi(c,a,n,null),c.flags|=2):c=ri(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=ma():(l=ea._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Qa(t),n=e.child,e=n.sibling,n=ri(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ti(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ja(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ro.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(ro,o),Qs(e,t,r,n),r=K?hi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ri(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ri(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ki(e))):!0}function Tc(e,t,n){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),Vi(t,ea,e.memoizedState.cache),Fi();break;case 27:case 5:_e(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:Vi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$a(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Qa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Qa(t),t.flags|=128,null);Qa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Gi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(ro,ro.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:Vi(t,ea,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}else Zs=!1,K&&t.flags&1048576&&Si(t,hi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e==`function`)ni(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=$s(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(M(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Fa(e,t),Ha(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Vi(t,ea,r),r!==o.cache&&Wi(t,[ea],n,!0),Va(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}else if(r!==a){a=di(Error(i(424)),t),Li(a),t=fc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Di=cf(e.firstChild),Ei=t,K=!0,Oi=null,ki=!0,n=Ma(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fi(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[ut]=t,r[dt]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&K&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ei=t,ki=!0,a=Di,Zd(t.type)?(lf=a,Di=cf(r.firstChild)):Di=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Di)&&(r=tf(r,t.type,t.pendingProps,ki),r===null?a=!1:(t.stateNode=r,Ei=t,Di=cf(r.firstChild),ki=!1,a=!0)),a||ji(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=go(e,t,yo,null,null,n),Qf._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Di)&&(n=nf(n,t.pendingProps,ki),n===null?e=!1:(t.stateNode=n,Ei=t,Di=null,e=!0)),e||ji(t)),null;case 13:return gc(e,t,n);case 4:return M(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ja(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Vi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,qi(t),a=Ji(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return qi(t),r=Ji(ea),e===null?(a=fa(),a===null&&(a=Fl,o=ta(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Pa(t),Vi(t,ea,a)):((e.lanes&n)!==0&&(Fa(e,t),Ha(t,null,null,n),Va()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Vi(t,ea,r),r!==a.cache&&Wi(t,[ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Vi(t,ea,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw Sa=va,ga}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw Sa=va,ga}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,ql|=t)}function jc(e,t){if(!K)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Hi(ea),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ii())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(ve(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=fe.current,Pi(t)?Mi(t,e):(e=ff(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=fe.current,Pi(t))Mi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ut]=t,o[dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ei,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ji(t,!0)}else e=Bd(e).createTextNode(r),e[ut]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Pi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ut]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(no(t),t):(no(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ut]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(no(t),t):(no(t),null)}return no(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return ge(),e===null&&xd(t.stateNode.containerInfo),Mc(t),null;case 10:return Hi(t.type),Mc(t),null;case 19:if(de(ro),r=t.memoizedState,r===null)return Mc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)jc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ii(n,e),n=n.sibling;return j(ro,ro.current&1|2),K&&xi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>$l&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}else{if(!a)if(e=io(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!K)return Mc(t),null}else 2*je()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=ro.current,j(ro,a?n&1|2:n&1),K&&xi(t,r.treeForkCount),e);case 22:case 23:return no(t),Ya(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Hi(ea),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hi(ea),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(no(t),t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(no(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ro),null;case 4:return ge(),null;case 10:return Hi(t.type),null;case 22:case 23:return no(t),Ya(),e!==null&&de(da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Hi(ea),null;case 25:return null;default:return null}}function Fc(e,t){switch(wi(t),t.tag){case 3:Hi(ea),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&no(t);break;case 13:no(t);break;case 19:de(ro);break;case 10:Hi(t.type);break;case 22:case 23:no(t),Ya(),e!==null&&de(da);break;case 24:Hi(ea)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wa(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[dt]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ut]=e,t[dt]=n}catch(t){Uu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Rd=sp,e=Sr(e),W(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wa(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&F(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Zd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),pf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null)if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:rl!==null&&(il?(e=rl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[_t]||o[ut]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ut]=e,St(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ut]=e,St(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=fl,fl=gf(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Jt(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:pf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ua(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&na(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&na(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=Ji(ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ji(ea).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,X=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return X&2&&Q!==0?Q&-Q:D.T===null?st():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||K){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Kl=e}else Kl=536870912;return e=Xa.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),et(e,n),(!(X&2)||e!==Fl)&&(e===Fl&&(!(X&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(X&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-je(),10<a)){if(_u(r,t,Kl,!Rl),N(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Dl(t,a,d);var m=(a&62914560)===a?Zl-je():(a&4194048)===a?Ql-je():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function vu(){return X&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Bi=zi=null,So(e),Ta=null,Ea=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ri(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Ze(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,qr(),n}function xu(e,t){q=null,D.H=Ms,t===ha||t===_a?(t=Ca(),Il=3):t===ga?(t=Ca(),Il=4):Il=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Ws(e,di(t,e.current)))}function Su(){var e=Xa.current;return e===null?!0:(Q&4194048)===Q?Za===null:(Q&62914560)===Q||Q&536870912?e===Za:!1}function Cu(){var e=D.H;return D.H=Ms,e===null?Ms:e}function wu(){var e=D.A;return D.A=Nl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Xa.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=X;X|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Xa.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Bi=zi=null,X=r,D.H=i,D.A=a,Z===null&&(Fl=null,Q=0,qr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=X;X|=2;var r=Cu(),a=wu();Fl!==e||Q!==t?(eu=null,$l=je()+500,bu(e,t)):zl=Ze(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(ya(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:ya(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Bi=zi=null,D.H=r,D.A=a,X=n,Z===null?(Fl=null,Q=0,qr(),Hl):0}function ku(){for(;Z!==null&&!ke();)Au(Z)}function Au(e){var t=Ec(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ii(t,Vl),t=Ec(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Bi=zi=null,So(t),Ta=null,Ea=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Hl=1,Ws(e,di(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Ws(e,di(n,e.current)),Z=null;return}t.flags&32768?(K||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Nc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(X&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Kr,tt(e,n,o,s,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Fe,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=X,X|=4;try{el(e,t,n)}finally{X=s,O.p=a,D.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=X;X|=4;try{pl(t,e);var a=zd,o=Sr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&U(s.ownerDocument.documentElement,s)){if(c!==null&&W(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{X=i,O.p=r,D.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=X;X|=4;try{tl(e,t.alternate,t)}finally{X=i,O.p=r,D.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,Ae();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),ot(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,na(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=ot(au),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,X&6)throw Error(i(331));var c=X;if(X|=4,Al(o.current),Sl(o,o.current,s,n),X=c,rd(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{O.p=a,D.T=r,zu(e,t)}}function Hu(e,t,n){t=di(n,t),t=Ks(e.stateNode,t,2),e=La(e,t,2),e!==null&&(et(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=di(n,e),n=qs(2),r=La(t,n,2),r!==null&&(Js(n,r,t,e),et(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>je()-Zl?!(X&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=Qe()),e=Xr(e,t),e!==null&&(et(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return De(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=N(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=je(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=P(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=N(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ot(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=sd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=N(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,je()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){X&6?De(Ne,id):ad()})}function ud(){if(td===0){var e=aa;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[dt]||null).action),o=r.submitter;o&&(t=(t=o[dt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Vr.length;md++){var hd=Vr[md];Hr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Hr(Pr,`onAnimationEnd`),Hr(Fr,`onAnimationIteration`),Hr(Ir,`onAnimationStart`),Hr(`dblclick`,`onDoubleClick`),Hr(`focusin`,`onFocus`),Hr(`focusout`,`onBlur`),Hr(Lr,`onTransitionRun`),Hr(G,`onTransitionStart`),Hr(Rr,`onTransitionCancel`),Hr(zr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ur(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ur(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[pt];n===void 0&&(n=t[pt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=an(n),s=[];a:{var c=Br.get(e);if(c!==void 0){var l=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Pr:case Fr:case Ir:l=Nn;break;case zr:l=Hn;break;case`scroll`:case`scrollend`:l=Tn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=H;else if(tr(c))if(sr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=H):v=hr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(wr=y,Tr=r,Er=null);break;case`focusout`:Er=Tr=wr=null;break;case`mousedown`:Dr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Dr=!1,Or(s,n,i);break;case`selectionchange`:if(Cr)break;case`keydown`:case`keyup`:Or(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,Zn=!0)),y=Td(r,x),0<y.length&&(x=new L(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=V(n),b!==null&&(x.data=b)))),(b=Jn?Qn(e,n):$n(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new L(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(wd(e,i,a)),i=un(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=un(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,jt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[dt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),F(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);F(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Vt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Vt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,St(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[ut]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ti(3,null,null,t),e.current=a,a.stateNode=e,t=ta(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Pa(a),e}function tp(e){return e?(e=$r,e):$r}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ia(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=La(e,r,t),n!==null&&(pu(n,e,t),Ra(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Xr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=at(t);var n=Xr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}nd(a),!(X&6)&&($l=je()+500,rd(0,!1))}}break;case 31:case 13:s=Xr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[dt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[dt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=m(),v=c(g(),1),y=c(u());function b(){var e=[...arguments];return(0,y.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var x=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function S(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function C(e){return`nodeType`in e}function w(e){return e?S(e)?e:C(e)?e.ownerDocument?.defaultView??window:window:window}function T(e){let{Document:t}=w(e);return e instanceof t}function E(e){return S(e)?!1:e instanceof w(e).HTMLElement}function ee(e){return e instanceof w(e).SVGElement}function te(e){return e?S(e)?e.document:C(e)?T(e)?e:E(e)||ee(e)?e.ownerDocument:document:document:document}var ne=x?y.useLayoutEffect:y.useEffect;function re(e){let t=(0,y.useRef)(e);return ne(()=>{t.current=e}),(0,y.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function ie(){let e=(0,y.useRef)(null);return[(0,y.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,y.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function ae(e,t){t===void 0&&(t=[e]);let n=(0,y.useRef)(e);return ne(()=>{n.current!==e&&(n.current=e)},t),n}function oe(e,t){let n=(0,y.useRef)();return(0,y.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function se(e){let t=re(e),n=(0,y.useRef)(null);return[n,(0,y.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function ce(e){let t=(0,y.useRef)();return(0,y.useEffect)(()=>{t.current=e},[e]),t.current}var D={};function O(e,t){return(0,y.useMemo)(()=>{if(t)return t;let n=D[e]==null?0:D[e]+1;return D[e]=n,e+`-`+n},[e,t])}function le(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var ue=le(1),k=le(-1);function A(e){return`clientX`in e&&`clientY`in e}function de(e){if(!e)return!1;let{KeyboardEvent:t}=w(e.target);return t&&e instanceof t}function j(e){if(!e)return!1;let{TouchEvent:t}=w(e.target);return t&&e instanceof t}function fe(e){if(j(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return A(e)?{x:e.clientX,y:e.clientY}:null}var pe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[pe.Translate.toString(e),pe.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),me=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function he(e){return e.matches(me)?e:e.querySelector(me)}var M={display:`none`};function ge(e){let{id:t,value:n}=e;return y.createElement(`div`,{id:t,style:M},n)}function _e(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return y.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function ve(){let[e,t]=(0,y.useState)(``);return{announce:(0,y.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var ye=(0,y.createContext)(null);function be(e){let t=(0,y.useContext)(ye);(0,y.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function xe(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,y.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var Se={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Ce={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function we(e){let{announcements:t=Ce,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=Se}=e,{announce:a,announcement:o}=ve(),s=O(`DndLiveRegion`),[c,l]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{l(!0)},[]),be((0,y.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=y.createElement(y.Fragment,null,y.createElement(ge,{id:r,value:i.draggable}),y.createElement(_e,{id:s,announcement:o}));return n?(0,_.createPortal)(u,n):u}var Te;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(Te||={});function Ee(){}function De(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Oe(){var e=[...arguments];return(0,y.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var ke=Object.freeze({x:0,y:0});function Ae(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function je(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Me(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Ne(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function Pe(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Fe=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=Pe(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=Ae(Pe(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(je)};function Ie(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Le=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Ie(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Me)};function Re(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function ze(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ke}function Be(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Ve=Be(1);function He(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Ue(e,t,n){let r=He(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var We={ignoreTransform:!1};function Ge(e,t){t===void 0&&(t=We);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=w(e).getComputedStyle(e);t&&(n=Ue(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Ke(e){return Ge(e,{ignoreTransform:!0})}function qe(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Je(e,t){return t===void 0&&(t=w(e).getComputedStyle(e)),t.position===`fixed`}function Ye(e,t){t===void 0&&(t=w(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function Xe(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(T(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!E(i)||ee(i)||n.includes(i))return n;let a=w(e).getComputedStyle(i);return i!==e&&Ye(i,a)&&n.push(i),Je(i,a)?n:r(i.parentNode)}return e?r(e):n}function N(e){let[t]=Xe(e,1);return t??null}function Ze(e){return!x||!e?null:S(e)?e:C(e)?T(e)||e===te(e).scrollingElement?window:E(e)?e:null:null}function P(e){return S(e)?e.scrollX:e.scrollLeft}function Qe(e){return S(e)?e.scrollY:e.scrollTop}function $e(e){return{x:P(e),y:Qe(e)}}var et;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(et||={});function tt(e){return!x||!e?!1:e===document.scrollingElement}function nt(e){let t={x:0,y:0},n=tt(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var rt={x:.2,y:.2};function it(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=rt);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=nt(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=et.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=et.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=et.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=et.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function at(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function ot(e){return e.reduce((e,t)=>ue(e,$e(t)),ke)}function st(e){return e.reduce((e,t)=>e+P(t),0)}function ct(e){return e.reduce((e,t)=>e+Qe(t),0)}function lt(e,t){if(t===void 0&&(t=Ge),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);N(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var ut=[[`x`,[`left`,`right`],st],[`y`,[`top`,`bottom`],ct]],dt=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Xe(t),r=ot(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of ut)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},ft=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function pt(e){let{EventTarget:t}=w(e);return e instanceof t?e:te(e)}function mt(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var ht;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(ht||={});function gt(e){e.preventDefault()}function _t(e){e.stopPropagation()}var F;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(F||={});var vt={start:[F.Space,F.Enter],cancel:[F.Esc],end:[F.Space,F.Enter,F.Tab]},yt=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case F.Right:return{...n,x:n.x+25};case F.Left:return{...n,x:n.x-25};case F.Down:return{...n,y:n.y+25};case F.Up:return{...n,y:n.y-25}}},bt=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new ft(te(t)),this.windowListeners=new ft(w(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ht.Resize,this.handleCancel),this.windowListeners.add(ht.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ht.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&lt(n),t(ke)}handleKeyDown(e){if(de(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=vt,coordinateGetter:a=yt,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:ke;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=k(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=nt(n),p=at(n),m={x:Math.min(i===F.Right?p.right-p.width/2:p.right,Math.max(i===F.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===F.Down?p.bottom-p.height/2:p.bottom,Math.max(i===F.Down?p.top:p.top+p.height/2,u.y))},h=i===F.Right&&!s||i===F.Left&&!c,g=i===F.Down&&!l||i===F.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===F.Right&&e<=d.x||i===F.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===F.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===F.Down&&e<=d.y||i===F.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===F.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,ue(k(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};bt.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=vt,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function xt(e){return!!(e&&`distance`in e)}function St(e){return!!(e&&`delay`in e)}var Ct=class{constructor(e,t,n){n===void 0&&(n=pt(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=te(i),this.documentListeners=new ft(this.document),this.listeners=new ft(n),this.windowListeners=new ft(w(i)),this.initialCoordinates=fe(r)??ke,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(ht.Resize,this.handleCancel),this.windowListeners.add(ht.DragStart,gt),this.windowListeners.add(ht.VisibilityChange,this.handleCancel),this.windowListeners.add(ht.ContextMenu,gt),this.documentListeners.add(ht.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(St(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(xt(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(ht.Click,_t,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ht.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=fe(e)??ke,s=k(n,o);if(!t&&a){if(xt(a)){if(a.tolerance!=null&&mt(s,a.tolerance))return this.handleCancel();if(mt(s,a.distance))return this.handleStart()}if(St(a)&&mt(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===F.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},wt={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},Tt=class extends Ct{constructor(e){let{event:t}=e,n=te(t.target);super(e,wt,n)}};Tt.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Et={move:{name:`mousemove`},end:{name:`mouseup`}},Dt;(function(e){e[e.RightClick=2]=`RightClick`})(Dt||={});var Ot=class extends Ct{constructor(e){super(e,Et,te(e.event.target))}};Ot.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Dt.RightClick?!1:(r?.({event:n}),!0)}}];var kt={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},At=class extends Ct{constructor(e){super(e,kt)}static setup(){return window.addEventListener(kt.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(kt.move.name,e)};function e(){}}};At.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var jt;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(jt||={});var Mt;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Mt||={});function Nt(e){let{acceleration:t,activator:n=jt.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Mt.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Ft({delta:d,disabled:!a}),[m,h]=ie(),g=(0,y.useRef)({x:0,y:0}),_=(0,y.useRef)({x:0,y:0}),v=(0,y.useMemo)(()=>{switch(n){case jt.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case jt.DraggableRect:return i}},[n,i,c]),b=(0,y.useRef)(null),x=(0,y.useCallback)(()=>{let e=b.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),S=(0,y.useMemo)(()=>s===Mt.TreeOrder?[...l].reverse():l,[s,l]);(0,y.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=it(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),b.current=e,m(x,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var Pt={x:{[et.Backward]:!1,[et.Forward]:!1},y:{[et.Backward]:!1,[et.Forward]:!1}};function Ft(e){let{delta:t,disabled:n}=e,r=ce(t);return oe(e=>{if(n||!r||!e)return Pt;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[et.Backward]:e.x[et.Backward]||i.x===-1,[et.Forward]:e.x[et.Forward]||i.x===1},y:{[et.Backward]:e.y[et.Backward]||i.y===-1,[et.Forward]:e.y[et.Forward]||i.y===1}}},[n,t,r])}function It(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return oe(e=>t==null?null:r??e??null,[r,t])}function Lt(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Rt;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Rt||={});var zt;(function(e){e.Optimized=`optimized`})(zt||={});var Bt=new Map;function Vt(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,y.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,y.useRef)(e),d=g(),f=ae(d),p=(0,y.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,y.useRef)(null),h=oe(t=>{if(d&&!n)return Bt;if(!t||t===Bt||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new dt(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,y.useEffect)(()=>{u.current=e},[e]),(0,y.useEffect)(()=>{d||p()},[n,d]),(0,y.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,y.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Rt.Always:return!1;case Rt.BeforeDragging:return n;default:return!n}}}function Ht(e,t){return oe(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Ut(e,t){return Ht(e,t)}function Wt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Gt(e){let{callback:t,disabled:n}=e,r=re(t),i=(0,y.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,y.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Kt(e){return new dt(Ge(e),e)}function qt(e,t,n){t===void 0&&(t=Kt);let[r,i]=(0,y.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Wt({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Gt({callback:a});return ne(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Jt(e){return ze(e,Ht(e))}var Yt=[];function Xt(e){let t=(0,y.useRef)(e),n=oe(n=>e?n&&n!==Yt&&e&&t.current&&e.parentNode===t.current.parentNode?n:Xe(e):Yt,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),n}function Zt(e){let[t,n]=(0,y.useState)(null),r=(0,y.useRef)(e),i=(0,y.useCallback)(e=>{let t=Ze(e.target);t&&n(e=>e?(e.set(t,$e(t)),new Map(e)):null)},[]);return(0,y.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Ze(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,$e(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Ze(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>ue(e,t),ke):ot(e):ke,[e,t])}function Qt(e,t){t===void 0&&(t=[]);let n=(0,y.useRef)(null);return(0,y.useEffect)(()=>{n.current=null},t),(0,y.useEffect)(()=>{let t=e!==ke;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?k(e,n.current):ke}function $t(e){(0,y.useEffect)(()=>{if(!x)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function en(e,t){return(0,y.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function tn(e){return(0,y.useMemo)(()=>e?qe(e):null,[e])}var nn=[];function rn(e,t){t===void 0&&(t=Ge);let[n]=e,r=tn(n?w(n):null),[i,a]=(0,y.useState)(nn);function o(){a(()=>e.length?e.map(e=>tt(e)?r:new dt(t(e),e)):nn)}let s=Gt({callback:o});return ne(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function an(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return E(t)?t:e}function I(e){let{measure:t}=e,[n,r]=(0,y.useState)(null),i=Gt({callback:(0,y.useCallback)(e=>{for(let{target:n}of e)if(E(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=se((0,y.useCallback)(e=>{let n=an(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,y.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var on=[{sensor:Tt,options:{}},{sensor:bt,options:{}}],sn={current:{}},cn={draggable:{measure:Ke},droppable:{measure:Ke,strategy:Rt.WhileDragging,frequency:zt.Optimized},dragOverlay:{measure:Ge}},ln=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},un={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ln,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ee},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:cn,measureDroppableContainers:Ee,windowRect:null,measuringScheduled:!1},dn={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:Ee,draggableNodes:new Map,over:null,measureDroppableContainers:Ee},fn=(0,y.createContext)(dn),pn=(0,y.createContext)(un);function mn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ln}}}function hn(e,t){switch(t.type){case Te.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Te.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Te.DragEnd:case Te.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Te.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new ln(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Te.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new ln(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Te.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new ln(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function gn(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,y.useContext)(fn),a=ce(r),o=ce(n?.id);return(0,y.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!de(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=he(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function _n(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function vn(e){return(0,y.useMemo)(()=>({draggable:{...cn.draggable,...e?.draggable},droppable:{...cn.droppable,...e?.droppable},dragOverlay:{...cn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function yn(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,y.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ne(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=ze(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=N(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var bn=(0,y.createContext)({...ke,scaleX:1,scaleY:1}),xn;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(xn||={});var Sn=(0,y.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=on,collisionDetection:o=Le,measuring:s,modifiers:c,...l}=e,[u,d]=(0,y.useReducer)(hn,void 0,mn),[f,p]=xe(),[m,h]=(0,y.useState)(xn.Uninitialized),g=m===xn.Initialized,{draggable:{active:v,nodes:b,translate:x},droppable:{containers:S}}=u,C=v==null?null:b.get(v),T=(0,y.useRef)({initial:null,translated:null}),E=(0,y.useMemo)(()=>v==null?null:{id:v,data:C?.data??sn,rect:T},[v,C]),ee=(0,y.useRef)(null),[te,re]=(0,y.useState)(null),[ie,oe]=(0,y.useState)(null),se=ae(l,Object.values(l)),ce=O(`DndDescribedBy`,t),D=(0,y.useMemo)(()=>S.getEnabled(),[S]),le=vn(s),{droppableRects:k,measureDroppableContainers:A,measuringScheduled:de}=Vt(D,{dragging:g,dependencies:[x.x,x.y],config:le.droppable}),j=It(b,v),pe=(0,y.useMemo)(()=>ie?fe(ie):null,[ie]),me=Ze(),he=Ut(j,le.draggable.measure);yn({activeNode:v==null?null:b.get(v),config:me.layoutShiftCompensation,initialRect:he,measure:le.draggable.measure});let M=qt(j,le.draggable.measure,he),ge=qt(j?j.parentElement:null),_e=(0,y.useRef)({activatorEvent:null,active:null,activeNode:j,collisionRect:null,collisions:null,droppableRects:k,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ve=S.getNodeFor(_e.current.over?.id),be=I({measure:le.dragOverlay.measure}),Se=be.nodeRef.current??j,Ce=g?be.rect??M:null,Ee=!!(be.nodeRef.current&&be.rect),De=Jt(Ee?null:M),Oe=tn(Se?w(Se):null),ke=Xt(g?ve??j:null),Ae=rn(ke),je=_n(c,{transform:{x:x.x-De.x,y:x.y-De.y,scaleX:1,scaleY:1},activatorEvent:ie,active:E,activeNodeRect:M,containerNodeRect:ge,draggingNodeRect:Ce,over:_e.current.over,overlayNodeRect:be.rect,scrollableAncestors:ke,scrollableAncestorRects:Ae,windowRect:Oe}),Me=pe?ue(pe,x):null,Pe=Zt(ke),Fe=Qt(Pe),Ie=Qt(Pe,[M]),ze=ue(je,Fe),Be=Ce?Ve(Ce,je):null,He=E&&Be?o({active:E,collisionRect:Be,droppableRects:k,droppableContainers:D,pointerCoordinates:Me}):null,Ue=Ne(He,`id`),[We,Ge]=(0,y.useState)(null),Ke=Re(Ee?je:ue(je,Ie),We?.rect??null,M),qe=(0,y.useRef)(null),Je=(0,y.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(ee.current==null)return;let i=b.get(ee.current);if(!i)return;let a=e.nativeEvent;qe.current=new n({active:ee.current,activeNode:i,event:a,options:r,context:_e,onAbort(e){if(!b.get(e))return;let{onDragAbort:t}=se.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!b.get(e))return;let{onDragPending:i}=se.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=ee.current;if(t==null)return;let n=b.get(t);if(!n)return;let{onDragStart:r}=se.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:T}};(0,_.unstable_batchedUpdates)(()=>{r?.(i),h(xn.Initializing),d({type:Te.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),re(qe.current),oe(a)})},onMove(e){d({type:Te.DragMove,coordinates:e})},onEnd:o(Te.DragEnd),onCancel:o(Te.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=_e.current,o=null;if(t&&i){let{cancelDrop:s}=se.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===Te.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=Te.DragCancel)}ee.current=null,(0,_.unstable_batchedUpdates)(()=>{d({type:e}),h(xn.Uninitialized),Ge(null),re(null),oe(null),qe.current=null;let t=e===Te.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=se.current[t];e?.(o),f({type:t,event:o})}})}}},[b]),Ye=Lt(a,(0,y.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=b.get(r);if(ee.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},ee.current=r,Je(n,t))},[b,Je]));$t(a),ne(()=>{M&&m===xn.Initializing&&h(xn.Initialized)},[M,m]),(0,y.useEffect)(()=>{let{onDragMove:e}=se.current,{active:t,activatorEvent:n,collisions:r,over:i}=_e.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:ze.x,y:ze.y},over:i};(0,_.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[ze.x,ze.y]),(0,y.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=_e.current;if(!e||ee.current==null||!t||!i)return;let{onDragOver:a}=se.current,o=r.get(Ue),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,_.unstable_batchedUpdates)(()=>{Ge(s),a?.(c),f({type:`onDragOver`,event:c})})},[Ue]),ne(()=>{_e.current={activatorEvent:ie,active:E,activeNode:j,collisionRect:Be,collisions:He,droppableRects:k,draggableNodes:b,draggingNode:Se,draggingNodeRect:Ce,droppableContainers:S,over:We,scrollableAncestors:ke,scrollAdjustedTranslate:ze},T.current={initial:Ce,translated:Be}},[E,j,He,Be,b,Se,Ce,k,S,We,ke,ze]),Nt({...me,delta:x,draggingRect:Be,pointerCoordinates:Me,scrollableAncestors:ke,scrollableAncestorRects:Ae});let Xe=(0,y.useMemo)(()=>({active:E,activeNode:j,activeNodeRect:M,activatorEvent:ie,collisions:He,containerNodeRect:ge,dragOverlay:be,draggableNodes:b,droppableContainers:S,droppableRects:k,over:We,measureDroppableContainers:A,scrollableAncestors:ke,scrollableAncestorRects:Ae,measuringConfiguration:le,measuringScheduled:de,windowRect:Oe}),[E,j,M,ie,He,ge,be,b,S,k,We,A,ke,Ae,le,de,Oe]),N=(0,y.useMemo)(()=>({activatorEvent:ie,activators:Ye,active:E,activeNodeRect:M,ariaDescribedById:{draggable:ce},dispatch:d,draggableNodes:b,over:We,measureDroppableContainers:A}),[ie,Ye,E,M,d,ce,b,We,A]);return y.createElement(ye.Provider,{value:p},y.createElement(fn.Provider,{value:N},y.createElement(pn.Provider,{value:Xe},y.createElement(bn.Provider,{value:Ke},i)),y.createElement(gn,{disabled:n?.restoreFocus===!1})),y.createElement(we,{...n,hiddenTextDescribedById:ce}));function Ze(){let e=te?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),Cn=(0,y.createContext)(null),wn=`button`,Tn=`Draggable`;function En(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=O(Tn),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,y.useContext)(fn),{role:p=wn,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,y.useContext)(g?bn:Cn),[v,b]=se(),[x,S]=se(),C=en(o,t),w=ae(n);return ne(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,y.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===wn?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:_}}function Dn(){return(0,y.useContext)(pn)}var On=`Droppable`,kn={timeout:25};function An(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=O(On),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,y.useContext)(fn),u=(0,y.useRef)({disabled:n}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),p=(0,y.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...kn,...i},_=ae(h??r),v=Gt({callback:(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[b,x]=se((0,y.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),S=ae(t);return(0,y.useEffect)(()=>{!v||!b.current||(v.disconnect(),d.current=!1,v.observe(b.current))},[b,v]),(0,y.useEffect)(()=>(s({type:Te.RegisterDroppable,element:{id:r,key:a,disabled:n,node:b,rect:f,data:S}}),()=>s({type:Te.UnregisterDroppable,key:a,id:r})),[r]),(0,y.useEffect)(()=>{n!==u.current.disabled&&(s({type:Te.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:b,over:c,setNodeRef:x}}function jn(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Mn(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function Nn(e){return e!==null&&e>=0}function Pn(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function L(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var R=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=jn(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Fn={scaleX:1,scaleY:1},In=e=>{let{activeIndex:t,activeNodeRect:n,index:r,rects:i,overIndex:a}=e,o=i[t]??n;if(!o)return null;if(r===t){let e=i[a];return e?{x:0,y:t<a?e.top+e.height-(o.top+o.height):e.top-o.top,...Fn}:null}let s=Ln(i,r,t);return r>t&&r<=a?{x:0,y:-o.height-s,...Fn}:r<t&&r>=a?{x:0,y:o.height+s,...Fn}:{x:0,y:0,...Fn}};function Ln(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return r?n<t?i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0:a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}var Rn=`Sortable`,zn=y.createContext({activeIndex:-1,containerId:Rn,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:R,disabled:{draggable:!1,droppable:!1}});function Bn(e){let{children:t,id:n,items:r,strategy:i=R,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=Dn(),d=O(Rn,n),f=s.rect!==null,p=(0,y.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,y.useRef)(p),v=!Pn(p,_.current),b=g!==-1&&h===-1||v,x=L(a);ne(()=>{v&&m&&u(p)},[v,p,m,u]),(0,y.useEffect)(()=>{_.current=p},[p]);let S=(0,y.useMemo)(()=>({activeIndex:h,containerId:d,disabled:x,disableTransforms:b,items:p,overIndex:g,useDragOverlay:f,sortedRects:Mn(p,c),strategy:i}),[h,d,x.draggable,x.droppable,b,p,g,c,f,i]);return y.createElement(zn.Provider,{value:S},t)}var Vn=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return jn(n,r,i).indexOf(t)},Hn=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Un={duration:200,easing:`ease`},Wn=`transform`,Gn=pe.Transition.toString({property:Wn,duration:0,easing:`linear`}),Kn={roleDescription:`sortable`};function qn(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,y.useState)(null),s=(0,y.useRef)(n);return ne(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=Ge(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,y.useEffect)(()=>{a&&o(null)},[a]),a}function Jn(e){let{animateLayoutChanges:t=Hn,attributes:n,disabled:r,data:i,getNewIndex:a=Vn,id:o,strategy:s,resizeObserverConfig:c,transition:l=Un}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,y.useContext)(zn),x=Yn(r,p),S=u.indexOf(o),C=(0,y.useMemo)(()=>({sortable:{containerId:d,index:S,items:u},...i}),[d,i,S,u]),w=(0,y.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:T,node:E,isOver:ee,setNodeRef:te}=An({id:o,data:C,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:w,...c}}),{active:ne,activatorEvent:re,activeNodeRect:ie,attributes:ae,setNodeRef:oe,listeners:se,isDragging:ce,over:D,setActivatorNodeRef:O,transform:le}=En({id:o,data:C,attributes:{...Kn,...n},disabled:x.draggable}),ue=b(te,oe),k=!!ne,A=k&&!m&&Nn(f)&&Nn(g),j=!_&&ce,fe=A?(j&&A?le:null)??(s??v)({rects:h,activeNodeRect:ie,activeIndex:f,overIndex:g,index:S}):null,me=Nn(f)&&Nn(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):S,he=ne?.id,M=(0,y.useRef)({activeId:he,items:u,newIndex:me,containerId:d}),ge=u!==M.current.items,_e=t({active:ne,containerId:d,isDragging:ce,isSorting:k,id:o,index:S,items:u,newIndex:M.current.newIndex,previousItems:M.current.items,previousContainerId:M.current.containerId,transition:l,wasDragging:M.current.activeId!=null}),ve=qn({disabled:!_e,index:S,node:E,rect:T});return(0,y.useEffect)(()=>{k&&M.current.newIndex!==me&&(M.current.newIndex=me),d!==M.current.containerId&&(M.current.containerId=d),u!==M.current.items&&(M.current.items=u)},[k,me,d,u]),(0,y.useEffect)(()=>{if(he===M.current.activeId)return;if(he!=null&&M.current.activeId==null){M.current.activeId=he;return}let e=setTimeout(()=>{M.current.activeId=he},50);return()=>clearTimeout(e)},[he]),{active:ne,activeIndex:f,attributes:ae,data:C,rect:T,index:S,newIndex:me,items:u,isOver:ee,isSorting:k,isDragging:ce,listeners:se,node:E,overIndex:g,over:D,setNodeRef:ue,setActivatorNodeRef:O,setDroppableNodeRef:te,setDraggableNodeRef:oe,transform:ve??fe,transition:ye()};function ye(){if(ve||ge&&M.current.newIndex===S)return Gn;if(!(j&&!de(re)||!l)&&(k||_e))return pe.Transition.toString({...l,property:Wn})}}function Yn(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}F.Down,F.Right,F.Up,F.Left;var z=`/Koenigliche-Mafia/`,B=e=>`${z}${e}`,Xn=`https://github.com/Erdbeerenfresser/Koenigliche-Mafia/releases/download/v.001.s`,V=e=>`${Xn}/${encodeURIComponent(e)}`,Zn=[{id:1,title:`Intro - Motte, hast du eigentlich einen Plan?`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:1,duration:`00:59`,releaseDate:`2026-03-27`,cover:B(`covers/Intro-Motte-hast-du-eigentlich-einen-Plan.jpeg`),file:V(`Intro-Motte-hast-du-eigentlich-einen-Plan.mp3`),isSingle:!1},{id:2,title:`Skateboard Chemistry`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:2,duration:`03:04`,releaseDate:`2026-03-27`,cover:B(`covers/Skateboard-Chemistry.png`),file:V(`Skateboard-Chemistry.mp3`),isSingle:!1},{id:3,title:`Crystal Moth`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:3,duration:`01:48`,releaseDate:`2026-03-27`,cover:B(`covers/Crystal-Moth.png`),file:V(`Crystal-Moth.mp3`),isSingle:!1},{id:4,title:`Competitive Advantage`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:4,duration:`02:28`,releaseDate:`2026-03-27`,cover:B(`covers/Competitive-Advantage.png`),file:V(`Competitive-Advantage.mp3`),isSingle:!1},{id:5,title:`Crystal Moth Supreme`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:5,duration:`03:17`,releaseDate:`2026-03-27`,cover:B(`covers/Crystal-Moth-Supreme.jpg`),file:V(`Crystal-Moth-Supreme.mp3`),isSingle:!1},{id:6,title:`Operation Mottemaker`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:6,duration:`02:04`,releaseDate:`2026-03-27`,cover:B(`covers/Operation-Mottemaker.png`),file:V(`Operation-Mottemaker.mp3`),isSingle:!1},{id:7,title:`Escape Velocity`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:7,duration:`03:47`,releaseDate:`2026-03-27`,cover:B(`covers/Escape-Velocity.png`),file:V(`Escape-Velocity.mp3`),isSingle:!1},{id:8,title:`Mottemaker Industries`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:8,duration:`02:30`,releaseDate:`2026-03-27`,cover:B(`covers/Mottemaker-Industries.jpg`),file:V(`Mottemaker-Industries.mp3`),isSingle:!1},{id:9,title:`Empire on Fire`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:9,duration:`02:51`,releaseDate:`2026-03-27`,cover:B(`covers/Empire-on-Fire.jpg`),file:V(`Empire-on-Fire.mp3`),isSingle:!1},{id:10,title:`Schedule II`,artist:`Erdbeerenfresser`,album:`Schedule I: The Mottemaker Files`,albumCover:B(`covers/Mottemaker-Files-Album.jpg`),albumTrackNumber:10,duration:`02:57`,releaseDate:`2026-03-27`,cover:B(`covers/Schedule-II.jpg`),file:V(`Schedule-II.mp3`),isSingle:!1},{id:11,title:`Alexis, Mi Hermano`,artist:`Motte`,duration:`03:41`,releaseDate:`2026-03-16`,cover:B(`covers/Alexis-Mi-Hermano.png`),file:V(`Alexis-Mi-Hermano.mp3`),isSingle:!0},{id:12,title:`Alexis Brother`,artist:`Motte`,duration:`03:36`,releaseDate:`2026-03-16`,cover:B(`covers/Alexis_Brother.png`),file:V(`Alexis_Brother.mp3`),isSingle:!0},{id:13,title:`Il Ritorno del Don Motte`,artist:`Erdbeerenfresser`,album:`Il Ritorno del Don Motte - Single`,albumTrackNumber:1,duration:`03:37`,releaseDate:`2026-04-10`,cover:B(`covers/il-ritorno-del-don-motte.jpg`),file:V(`il-ritorno-del-don-motte.mp3`),isSingle:!0},{id:14,title:`Rückfahrt Zwei Stunden`,artist:`Erdbeerenfresser`,duration:`02:44`,releaseDate:`2026-04-12`,cover:B(`covers/Rückfahrt_Zwei_Stunden.png`),file:V(`Ruckfahrt_Zwei_Stunden.mp3`),isSingle:!0},{id:`jascha1`,title:`Jascha Winter und der Freizeitparkzauber`,artist:`Motte`,duration:`04:44`,releaseDate:`2026-03-05`,cover:B(`covers/Jascha-Winter-und-der-Freizeitparkzauber.jpg`),file:V(`Jascha-Winter-und-der-Freizeitparkzauber.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:15,title:`Hymne an Alexis (remasterd)`,artist:`Motte`,duration:`03:25`,releaseDate:`2025-09-12`,cover:B(`covers/Hymne_an_Alexis_(remasterd).jpg`),file:V(`Hymne_an_Alexis_.remasterd.mp3`),isSingle:!0},{id:16,title:`Die Bußhymne an Alexis`,artist:`Motte`,duration:`03:23`,releaseDate:`2026-03-16`,cover:B(`covers/Die-Bußhymne-an-Alexis.png`),file:V(`Die-Busshymne-an-Alexis.mp3`),isSingle:!0},{id:17,title:`Ben, das geht auf mich`,artist:`Motte`,duration:`03:20`,releaseDate:`2026-01-29`,cover:B(`covers/Ben_das_geht_auf_mich.png`),file:V(`Ben_das_geht_auf_mich.mp3`),isSingle:!0},{id:18,title:`Ik ben gleich soweit!`,artist:`Merlin`,duration:`02:23`,releaseDate:`2026-02-27`,cover:B(`covers/Ik-ben-gleich-soweit!.jpg`),file:V(`Ik-ben-gleich-soweit.mp3`),isSingle:!0},{id:19,title:`PrinzMotte, unser Held`,artist:`Erdbeerenfresser`,duration:`03:48`,releaseDate:`2026-01-30`,cover:B(`covers/PrinzMotte,_unser_Held.jpg`),file:V(`PrinzMotte._unser_Held.mp3`),isSingle:!0},{id:20,title:`Kochstream Ambience`,artist:`Merlin`,duration:`01:49`,releaseDate:`2026-02-27`,cover:B(`covers/Kochstream-Ambience.jpg`),file:V(`Kochstream-Ambience.mp3`),isSingle:!0},{id:21,title:`Fleischwurst`,artist:`Merlin`,duration:`04:24`,releaseDate:`2026-01-23`,cover:B(`covers/Fleischwurst.jpg`),file:V(`Fleischwurst.mp3`),isSingle:!0},{id:22,title:`Erdbeerenfresser`,artist:`Merlin`,duration:`02:29`,releaseDate:`2026-01-17`,cover:B(`covers/Erdbeerenfresser.jpg`),file:V(`Erdbeerenfresser.mp3`),isSingle:!0},{id:23,title:`There are heroes`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-03-20`,cover:B(`covers/There are heroes.jpg`),file:V(`There.are.heroes.mp3`),isSingle:!0},{id:24,title:`Mack`,artist:`Erdbeerenfresser`,duration:`05:37`,releaseDate:`2026-03-17`,cover:B(`covers/Mack.jpg`),file:V(`Mack.mp3`),isSingle:!0},{id:`jascha2`,title:`Party`,artist:`Erdbeerenfresser;Coaster_Liam`,duration:`02:09`,releaseDate:`2026-03-16`,cover:B(`covers/Party.jpg`),file:V(`Party.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:25,title:`Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)`,artist:`Erdbeerenfresser`,duration:`04:32`,releaseDate:`2026-03-16`,cover:B(`covers/Der Deal (Europa-Park Musical Duett - Alexis X Roland Mack)).png`),file:V(`Der.Deal.Europa-Park.Musical.Duett.-.Alexis.X.Roland.Mack.mp3`),isSingle:!0},{id:26,title:`Nu hör ma zu…`,artist:`Erdbeerenfresser`,duration:`03:13`,releaseDate:`2026-03-16`,cover:B(`covers/Nu hör ma zu….jpg`),file:V(`Nu.hor.ma.zu.mp3`),isSingle:!0},{id:27,title:`Yeah yeah`,artist:`Erdbeerenfresser`,duration:`01:41`,releaseDate:`2026-03-16`,cover:B(`covers/Yeah yeah.jpg`),file:V(`Yeah.yeah.mp3`),isSingle:!0},{id:28,title:`Motte Cooking Stream`,artist:`Erdbeerenfresser`,duration:`03:09`,releaseDate:`2026-03-16`,cover:B(`covers/Motte Cooking Stream.jpg`),file:V(`Motte.Cooking.Stream.mp3`),isSingle:!0},{id:29,title:`Printer läuft die ganze Nacht`,artist:`Erdbeerenfresser`,duration:`04:09`,releaseDate:`2026-03-15`,cover:B(`covers/Printer läuft die ganze Nacht.jpg`),file:V(`Printer.lauft.die.ganze.Nacht.mp3`),isSingle:!0},{id:`jascha3`,title:`Hippo sagt böse Sachen`,artist:`Erdbeerenfresser`,duration:`02:55`,releaseDate:`2026-03-14`,cover:B(`covers/Hippo sagt böse Sachen.jpg`),file:V(`Hippo.sagt.bose.Sachen.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:30,title:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`,artist:`Motte`,duration:`03:40`,releaseDate:`2026-03-25`,cover:B(`covers/MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH.jpg`),file:V(`MR.MONEYMAKER.HEUDE.ISS.DEIN.GEBORDSDOOCH.mp3`),isSingle:!0},{id:`jascha4`,title:`Zwischen Rauch und Achterbahn`,artist:`Erdbeerenfresser`,duration:`03:02`,releaseDate:`2026-04-14`,cover:B(`covers/Zwischen Rauch und Achterbahn.jpg`),file:V(`Zwischen.Rauch.und.Achterbahn.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:31,title:`Ois für’n Alexis`,artist:`Erdbeerenfresser`,duration:`03:01`,releaseDate:`2026-04-15`,cover:B(`covers/Ois für’n Alexis.jpg`),file:V(`Ois.fur.n.Alexis.mp3`),isSingle:!0},{id:32,title:`Mr. Moneymaker`,artist:`Erdbeerenfresser`,duration:`03:42`,releaseDate:`2026-04-15`,cover:B(`covers/Mr. Moneymaker.jpg`),file:V(`Mr.Moneymaker.mp3`),isSingle:!0},{id:33,title:`Indian coding berry`,artist:`Motte`,duration:`05:19`,releaseDate:`2026-04-15`,cover:B(`covers/Indian coding berry.jpg`),file:V(`Indian.coding.berry.mp3`),isSingle:!0},{id:34,title:`Pauli foahrt durch Barcelona (Meddl Edition)`,artist:`Motte`,duration:`02:58`,releaseDate:`2026-03-25`,cover:B(`covers/Pauli foahrt durch Barcelona (Meddl Edition).jpg`),file:V(`Pauli.foahrt.durch.Barcelona.Meddl.Edition.mp3`),isSingle:!0},{id:35,title:`Marco… hörst du mich?`,artist:`Erdbeerenfresser`,duration:`04:34`,releaseDate:`2026-04-16`,cover:B(`covers/Marco… hörst du mich.jpg`),file:V(`Marco.horst.du.mich.mp3`),isSingle:!0},{id:36,title:`EPMC – The Park Awaits`,artist:`Motte`,duration:`03:47`,releaseDate:`2026-04-16`,cover:B(`covers/EPMC – The Park Awaits.jpg`),file:V(`EPMC.The.Park.Awaits.mp3`),isSingle:!0},{id:37,title:`Mottemod (König vom Server)`,artist:`Erdbeerenfresser`,duration:`04:27`,releaseDate:`2026-04-17`,cover:B(`covers/Mottemod (König vom Server).jpg`),file:V(`Mottemod.Konig.vom.Server.mp3`),isSingle:!0},{id:`jascha5`,title:`Wundertüten-Freitag (Queen Claudia)`,artist:`Erdbeerenfresser`,duration:`03:29`,releaseDate:`2026-04-17`,cover:B(`covers/Wundertüten-Freitag (Queen Claudia).png`),file:V(`Wundertuten-Freitag.Queen.Claudia.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:38,title:`Erdbeere Mine Session`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:1,duration:`02:11`,releaseDate:`2026-04-17`,cover:B(`covers/Erdbeere Mine Session.png`),file:V(`Erdbeere.Mine.Session.mp3`),isSingle:!1},{id:39,title:`Auf der Suche nach Diamanten`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:2,duration:`02:28`,releaseDate:`2026-04-17`,cover:B(`covers/Auf der Suche nach Diamanten.png`),file:V(`Auf.der.Suche.nach.Diamanten.mp3`),isSingle:!1},{id:40,title:`Noch tiefer`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:3,duration:`02:42`,releaseDate:`2026-04-17`,cover:B(`covers/Noch tiefer.png`),file:V(`Noch.tiefer.mp3`),isSingle:!1},{id:41,title:`Auch Eisen ist wichtig`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:4,duration:`02:16`,releaseDate:`2026-04-17`,cover:B(`covers/Auch Eisen ist wichtig.png`),file:V(`Auch.Eisen.ist.wichtig.mp3`),isSingle:!1},{id:42,title:`Diamanten in meiner Hand`,artist:`Erdbeerenfresser`,album:`Erdbeere Underground`,albumCover:B(`covers/Erdbeere Underground.jpg`),albumTrackNumber:5,duration:`02:38`,releaseDate:`2026-04-17`,cover:B(`covers/Diamanten in meiner Hand.png`),file:V(`Diamanten.in.meiner.Hand.mp3`),isSingle:!1},{id:`jascha6`,title:`E-Scooter im Müllmodus`,artist:`Motte`,duration:`02:03`,releaseDate:`2026-04-18`,cover:B(`covers/E-Scooter im Müllmodus.png`),file:V(`E-Scooter.im.Mullmodus.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:`jascha7`,title:`WAS...?`,artist:`Erdbeerenfresser`,duration:`03:08`,releaseDate:`2026-04-18`,cover:B(`covers/WAS....png`),file:V(`WAS.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:43,title:`EPMC – Lay Low Nights`,artist:`Motte`,duration:`03:54`,releaseDate:`2026-04-19`,cover:B(`covers/EPMC – Lay Low Nights.png`),file:V(`EPMC.Lay.Low.Nights.mp3`),isSingle:!0},{id:44,title:`Mr. Moneymaker Land`,artist:`Erdbeerenfresser`,duration:`02:46`,releaseDate:`2026-04-19`,cover:B(`covers/Mr. Moneymaker Land.png`),file:V(`Mr.Moneymaker.Land.mp3`),isSingle:!0},{id:`jascha8`,title:`Jascha Full Throttle`,artist:`Motte`,duration:`04:13`,releaseDate:`2026-04-23`,cover:B(`covers/JASCHA_FULL_THROTTLE.png`),file:V(`JASCHA_FULL_THROTTLE.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:45,title:`Es war ein Abend wie jeder andere`,artist:`Erdbeerenfresser`,duration:`03:37`,releaseDate:`2026-03-15`,cover:B(`covers/Es war ein Abend wie jeder andere.jpeg`),file:V(`Es.war.ein.Abend.wie.jeder.andere.mp3`),isSingle:!0},{id:46,title:`Rückkehr des Königs`,artist:`Erdbeerenfresser`,duration:`03:19`,releaseDate:`2026-04-25`,cover:B(`covers/Rückkehr des Königs.jpeg`),file:V(`Ruckkehr.des.Konigs.mp3`),isSingle:!0},{id:47,title:`Motte Nicht Da`,artist:`Erdbeerenfresser`,duration:`01:56`,releaseDate:`2026-04-27`,cover:B(`covers/Motte Nicht Da.jpeg`),file:V(`Motte.Nicht.Da.mp3`),isSingle:!0},{id:48,title:`Motte, komm bitte bald zurück`,artist:`Erdbeerenfresser`,duration:`03:14`,releaseDate:`2026-04-29`,cover:B(`covers/Motte, komm bitte bald zurück.png`),file:V(`Motte.komm.bitte.bald.zuruck.mp3`),isSingle:!0},{id:49,title:`Alexis of the Emerald Isle`,artist:`Motte`,duration:`06:00`,releaseDate:`2026-05-18`,cover:B(`covers/Alexis of the Emerald Isle.png`),file:V(`Alexis.of.the.Emerald.Isle.mp3`),isSingle:!0},{id:50,title:`Königliche A.I. Songs`,artist:`Erdbeerenfresser`,duration:`03:59`,releaseDate:`2026-05-19`,cover:B(`covers/Königliche A.I. Songs.png`),file:V(`Konigliche.A.I.Songs.mp3`),isSingle:!0},{id:51,title:`Ein wunderschönes Haus`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:1,duration:`02:02`,releaseDate:`2026-05-12`,cover:B(`covers/Ein wunderschönes Haus.png`),file:V(`Ein.wunderschones.Haus.mp3`),isSingle:!1},{id:52,title:`Verreck, du blöder Mottenmann`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:2,duration:`02:44`,releaseDate:`2026-05-12`,cover:B(`covers/Verreck, du blöder Mottenmann.png`),file:V(`Verreck.du.bloder.Mottenmann.mp3`),isSingle:!1},{id:53,title:`Motte… warum tust du mir das an`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:3,duration:`02:51`,releaseDate:`2026-05-12`,cover:B(`covers/Motte… warum tust du mir das an.png`),file:V(`Motte.warum.tust.du.mir.das.an.mp3`),isSingle:!1},{id:54,title:`Die Flucht des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:4,duration:`03:34`,releaseDate:`2026-05-12`,cover:B(`covers/Die Flucht des Mottenmanns.png`),file:V(`Die.Flucht.des.Mottenmanns.mp3`),isSingle:!1},{id:55,title:`Die Ruhe des Mottenmanns`,artist:`Erdbeerenfresser`,album:`Mottenmann`,albumCover:B(`covers/Mottenmann.png`),albumTrackNumber:5,duration:`04:38`,releaseDate:`2026-05-12`,cover:B(`covers/Die Ruhe des Mottenmanns.png`),file:V(`Die.Ruhe.des.Mottenmanns.mp3`),isSingle:!1},{id:56,title:`Città di Marmo`,artist:`Motte`,duration:`04:32`,releaseDate:`2026-05-12`,cover:B(`covers/Citta di Marmo.png`),file:V(`Citta.di.Marmo.mp3`),isSingle:!0},{id:`57`,title:`Erdbeere Around the World – Teaser`,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),albumTrackNumber:0,duration:`01:24`,releaseDate:`2026-05-24`,cover:B(`covers/EATW.png`),file:V(`EATWT.mp3`),isSingle:!1},{id:58,title:`Boarding Pass`,albumTrackNumber:1,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`01:45`,releaseDate:`2026-05-25`,cover:B(`covers/Boarding Pass.png`),file:V(`Boarding.Pass.mp3`),isSingle:!1},{id:59,title:`Shanghai Dreams`,albumTrackNumber:2,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:00`,releaseDate:`2026-05-25`,cover:B(`covers/Shanghai Dreams.png`),file:V(`Shanghai.Dreams.mp3`),isSingle:!1},{id:60,title:`Rio Nights`,albumTrackNumber:3,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:37`,releaseDate:`2026-05-25`,cover:B(`covers/Rio Nights.png`),file:V(`Rio.Nights.mp3`),isSingle:!1},{id:61,title:`Dolce Vita`,albumTrackNumber:4,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:21`,releaseDate:`2026-05-25`,cover:B(`covers/Dolce Vita.png`),file:V(`Dolce.Vita.mp3`),isSingle:!1},{id:62,title:`Amsterdam 3AM`,albumTrackNumber:5,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:59`,releaseDate:`2026-05-25`,cover:B(`covers/Amsterdam 3AM.png`),file:V(`Amsterdam.3AM.mp3`),isSingle:!1},{id:63,title:`Route 66`,albumTrackNumber:6,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:25`,releaseDate:`2026-05-25`,cover:B(`covers/Route 66.png`),file:V(`Route.66.mp3`),isSingle:!1},{id:64,title:`Sandstorm Eyes`,albumTrackNumber:7,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`04:57`,releaseDate:`2026-05-25`,cover:B(`covers/Sandstorm Eyes.png`),file:V(`Sandstorm.Eyes.mp3`),isSingle:!1},{id:65,title:`Greek Summer`,albumTrackNumber:8,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:49`,releaseDate:`2026-05-25`,cover:B(`covers/Greek Summer.png`),file:V(`Greek.Summer.mp3`),isSingle:!1},{id:66,title:`Kingston Sun`,albumTrackNumber:9,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`02:09`,releaseDate:`2026-05-25`,cover:B(`covers/Kingston Sun.png`),file:V(`Kingston.Sun.mp3`),isSingle:!1},{id:67,title:`Corazón Caliente`,albumTrackNumber:10,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:14`,releaseDate:`2026-05-25`,cover:B(`covers/Corazón Caliente.png`),file:V(`Corazon.Caliente.mp3`),isSingle:!1},{id:68,title:`Safari`,albumTrackNumber:11,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`03:07`,releaseDate:`2026-05-25`,cover:B(`covers/Safari.png`),file:V(`Safari.mp3`),isSingle:!1},{id:69,title:`Home Again`,albumTrackNumber:12,artist:`Motte`,album:`Erdbeere Around the World`,albumCover:B(`covers/Erdbeere Around The World (Cover).png`),duration:`02:56`,releaseDate:`2026-05-25`,cover:B(`covers/Home Again.png`),file:V(`Home.Again.mp3`),isSingle:!1},{id:`jascha9`,title:`JOA IST HALT PHYSIK!`,artist:`Erdbeerenfresser`,duration:`02:52`,releaseDate:`2026-05-21`,cover:B(`covers/Ganz Hessen Kennt Jetzt Paul.png`),file:V(`Ganz.Hessen.Kennt.Jetzt.Paul.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:70,title:`Der Unfall`,artist:`Erdbeerenfresser`,duration:`03:56`,releaseDate:`2026-05-30`,cover:B(`covers/Der Unfall.png`),file:V(`Der.Unfall.mp3`),isSingle:!0},{id:71,title:`The Beginning`,albumTrackNumber:1,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`04:07`,releaseDate:`2026-06-13`,cover:B(`covers/The Beginning.png`),file:V(`The.Beginning.mp3`),isSingle:!1},{id:72,title:`The One Ahead`,albumTrackNumber:2,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`03:47`,releaseDate:`2026-06-13`,cover:B(`covers/The One Ahead.png`),file:V(`The.One.Ahead.mp3`),isSingle:!1},{id:73,title:`Count Till Dawn`,albumTrackNumber:3,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`04:13`,releaseDate:`2026-06-13`,cover:B(`covers/Count Till Dawn.png`),file:V(`Count.Till.Dawn.mp3`),isSingle:!1},{id:74,title:`Motte & The Death Drop`,albumTrackNumber:4,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`04:54`,releaseDate:`2026-06-13`,cover:B(`covers/Motte & The Death Drop.png`),file:V(`Motte.The.Death.Drop.mp3`),isSingle:!1},{id:75,title:`Erdbeere und die wilde Maus`,albumTrackNumber:5,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`04:37`,releaseDate:`2026-06-13`,cover:B(`covers/Erdbeere und die wilde Maus.png`),file:V(`Erdbeere.und.die.wilde.Maus.mp3`),isSingle:!1},{id:76,title:`After Midnight Queue`,albumTrackNumber:6,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`05:09`,releaseDate:`2026-06-13`,cover:B(`covers/After Midnight Queue.png`),file:V(`After.Midnight.Queue.mp3`),isSingle:!1},{id:77,title:`Clown House #1`,albumTrackNumber:7,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`05:21`,releaseDate:`2026-06-13`,cover:B(`covers/Clown House 1.png`),file:V(`Clown.House.1.mp3`),isSingle:!1},{id:78,title:`Last Guests`,albumTrackNumber:8,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`05:25`,releaseDate:`2026-06-13`,cover:B(`covers/Last Guests.png`),file:V(`Last.Guests.mp3`),isSingle:!1},{id:79,title:`Sondervorstellung`,albumTrackNumber:9,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`05:00`,releaseDate:`2026-06-13`,cover:B(`covers/Sondervorstellung.png`),file:V(`Sondervorstellung.mp3`),isSingle:!1},{id:80,title:`Waiting for Reopening`,albumTrackNumber:10,artist:`Erdbeerenfresser`,album:`Traumatica Nights`,albumCover:B(`covers/Traumatica Nights.png`),duration:`06:03`,releaseDate:`2026-06-13`,cover:B(`covers/Waiting for Reopening.png`),file:V(`Waiting.for.Reopening.mp3`),isSingle:!1},{id:81,title:`Coins`,artist:`Erdbeerenfresser`,duration:`04:21`,releaseDate:`2026-06-17`,cover:B(`covers/Coins.png`),file:V(`Coins.mp3`),isSingle:!0},{id:82,title:`Palast der Krone`,artist:`Motte`,duration:`04:27`,releaseDate:`2026-06-17`,cover:B(`covers/Palast der Krone.png`),file:V(`Palast.der.Krone.mp3`),isSingle:!0},{id:83,title:`Uf de Bärge wird gfiiret`,artist:`Motte`,duration:`03:05`,releaseDate:`2026-06-17`,cover:B(`covers/Uf de Bärge wird gfiiret.png`),file:V(`Uf.de.Barge.wird.gfiiret.mp3`),isSingle:!0},{id:84,title:`Wir drehen uns nicht allein`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:B(`covers/Körnchenkreis.png`),albumTrackNumber:1,duration:`03:34`,releaseDate:`2026-06-21`,cover:B(`covers/Wir drehen uns nicht allein.png`),file:V(`Wir.drehen.uns.nicht.allein.mp3`),isSingle:!1},{id:85,title:`Dein Platz bleibt leer im warmen Licht`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:B(`covers/Körnchenkreis.png`),albumTrackNumber:2,duration:`04:19`,releaseDate:`2026-06-21`,cover:B(`covers/Dein Platz bleibt leer im warmen Licht.png`),file:V(`Dein.Platz.bleibt.leer.im.warmen.Licht.mp3`),isSingle:!1},{id:86,title:`Das Laufrad des Grauens`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:B(`covers/Körnchenkreis.png`),albumTrackNumber:3,duration:`04:27`,releaseDate:`2026-06-21`,cover:B(`covers/Das Laufrad des Grauens.png`),file:V(`Das.Laufrad.des.Grauens.mp3`),isSingle:!1},{id:87,title:`Körnchenkreis Finale`,artist:`Erdbeerenfresser`,album:`Körnchenkreis`,albumCover:B(`covers/Körnchenkreis.png`),albumTrackNumber:4,duration:`04:13`,releaseDate:`2026-06-21`,cover:B(`covers/Körnchenkreis Finale.png`),file:V(`Kornchenkreis.Finale.mp3`),isSingle:!1},{id:88,title:`Brüggetag mit Parkfan95`,artist:`Erdbeerenfresser;Motte`,duration:`04:30`,releaseDate:`2026-06-22`,cover:B(`covers/Brüggetag mit Parkfan95.png`),file:V(`Bruggetag.mit.Parkfan95.mp3`),isSingle:!0},{id:89,title:`Motte Sell Out Stream`,artist:`Erdbeerenfresser`,duration:`06:14`,releaseDate:`2026-06-26`,cover:B(`covers/Motte Sell Out Stream.PNG`),file:V(`Motte.Sell.Out.Stream.mp3`),isSingle:!0},{id:90,title:`Neo City Radio – Royal Frequencies`,artist:`Motte`,duration:`04:08`,releaseDate:`2026-06-28`,cover:B(`covers/Neo City Radio – Royal Frequencies.png`),file:V(`Neo.City.Radio.Royal.Frequencies.mp3`),isSingle:!0},{id:91,title:`BAN.exe`,artist:`Motte`,duration:`03:24`,releaseDate:`2026-06-23`,cover:B(`covers/BAN.exe.png`),file:V(`BAN.exe.mp3`),isSingle:!0},{id:92,title:`Die große Knoblauchexplosion`,artist:`Erdbeerenfresser`,duration:`04:14`,releaseDate:`2026-06-27`,cover:B(`covers/Die große Knoblauchexplosion.png`),file:V(`Die.grosse.Knoblauchexplosion.mp3`),isSingle:!0},{id:93,title:`VIP TRIP`,artist:`Motte`,duration:`03:43`,releaseDate:`2026-06-30`,cover:B(`covers/VIP TRIP.png`),file:V(`VIP.TRIP.mp3`),isSingle:!0},{id:`phonk1`,type:`cover`,sourceSongId:2,title:`Skateboard Chemistry Phonk`,artist:`Neo City Phonk`,duration:`03:16`,releaseDate:`2026-06-30`,cover:B(`covers/Skateboard Chemistry Phonk.png`),file:V(`Skateboard.Chemistry.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Skateboard Chemistry`},{id:`phonk2`,type:`cover`,sourceSongId:70,title:`Der Unfall Phonk`,artist:`Neo City Phonk`,duration:`03:54`,releaseDate:`2026-06-30`,cover:B(`covers/Der Unfall Phonk.png`),file:V(`Der.Unfall.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Der Unfall`},{id:`phonk3`,type:`cover`,sourceSongId:4,title:`Competitive Phonk`,artist:`Neo City Phonk`,duration:`02:24`,releaseDate:`2026-06-30`,cover:B(`covers/Competitive Phonk.png`),file:V(`Competitive.Phonk.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Competitive Advantage`},{id:`phonk4`,type:`cover`,sourceSongId:44,title:`Mr. Phonkmaker Land`,artist:`Neo City Phonk`,duration:`03:09`,releaseDate:`2026-06-30`,cover:B(`covers/Mr. Phonkmaker Land.png`),file:V(`Mr.Phonkmaker.Land.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Mr. Moneymaker Land`},{id:`phonk5`,type:`cover`,sourceSongId:14,title:`Phonk Zwei Stunden`,artist:`Neo City Phonk`,duration:`03:24`,releaseDate:`2026-06-30`,cover:B(`covers/Phonk Zwei Stunden.png`),file:V(`Phonk.Zwei.Stunden.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Rückfahrt Zwei Stunden`},{id:`phonk6`,type:`cover`,sourceSongId:30,title:`MR MONEYMÄKER – HEUDE ISS DEIN PHONK`,artist:`Neo City Phonk`,duration:`03:57`,releaseDate:`2026-06-30`,cover:B(`covers/MR MONEYMÄKER – HEUDE ISS DEIN PHONK.png`),file:V(`MR.MONEYMAKER.HEUDE.ISS.DEIN.PHONK.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`MR MONEYMÄKER – HEUDE ISS DEIN GEBORDSDOOCH`},{id:`phonk7`,type:`cover`,sourceSongId:83,title:`Uf de Bärge wird gphonkd`,artist:`Neo City Phonk`,duration:`03:17`,releaseDate:`2026-06-30`,cover:B(`covers/Uf de Bärge wird gphonkd.png`),file:V(`Uf.de.Barge.wird.gphonkd.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Uf de Bärge wird gfiiret`},{id:`phonk8`,type:`cover`,sourceSongId:22,title:`Erdbeerenphonker`,artist:`Neo City Phonk`,duration:`02:14`,releaseDate:`2026-06-30`,cover:B(`covers/Erdbeerenphonker.png`),file:V(`Erdbeerenphonker.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Erdbeerenfresser`},{id:94,title:`Mr. Gyrosmaker`,artist:`Erdbeerenfresser;Motte`,duration:`03:59`,releaseDate:`2026-07-02`,cover:B(`covers/Mr. Gyrosmaker.png`),file:V(`Mr.Gyrosmaker.mp3`),isSingle:!0},{id:`phonk9`,type:`cover`,sourceSongId:94,title:`Mr. Gyrosphonker`,artist:`Neo City Phonk`,duration:`04:09`,releaseDate:`2026-07-02`,cover:B(`covers/Mr Gyrosphonker.png`),file:V(`Mr.Gyrosphonker.mp3`),isSingle:!0,hidden:!0,hiddenTag:`phonk`,lyricsKey:`Mr. Gyrosmaker`},{id:`jascha10`,title:`Jascha will nicht zum KFO`,artist:`Motte`,duration:`04:20`,releaseDate:`2026-07-06`,cover:B(`covers/Jascha_will_nicht_zum_KFO.png`),file:B(`songs/Jascha_will_nicht_zum_KFO.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jascha`},{id:`aurora1`,title:`Aurora Drift`,artist:`Motte`,duration:`03:02`,releaseDate:`2026-07-06`,cover:B(`covers/Aurora_Drift.png`),file:B(`songs/Aurora_Drift.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora2`,title:`Aurora Driftwood`,artist:`Motte`,duration:`05:12`,releaseDate:`2026-07-06`,cover:B(`covers/Aurora_Driftwood.png`),file:B(`songs/Aurora_Driftwood.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora3`,title:`Aurora Driftline`,artist:`Motte`,duration:`04:02`,releaseDate:`2026-07-06`,cover:B(`covers/Aurora_Driftline.png`),file:B(`songs/Aurora_Driftline.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora4`,title:`Aurora Driftwave`,artist:`Motte`,duration:`04:50`,releaseDate:`2026-07-07`,cover:B(`covers/Aurora_Driftwave.png`),file:B(`songs/Aurora_Driftwave.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:95,title:`Mottensohn`,artist:`Erdbeerenfresser`,duration:`03:44`,releaseDate:`2026-07-09`,cover:B(`covers/Mottensohn.png`),file:B(`songs/Mottensohn.mp3`),isSingle:!0},{id:96,title:`AARDBEIENVRETER HAKT DE CODE HAKT DE STAGE`,artist:`Motte`,duration:`01:54`,releaseDate:`2026-07-09`,cover:B(`covers/AARDBEIENVRETER_HAKT_DE_CODE_HAKT_DE_STAGE_Cover.png`),file:B(`songs/AARDBEIENVRETER HAKT DE CODE HAKT DE STAGE.mp3`),isSingle:!0},{id:`aurora5`,title:`Aurora Driftcore`,artist:`Motte`,duration:`04:32`,releaseDate:`2026-07-09`,cover:B(`covers/Aurora Driftcore.png`),file:B(`songs/Aurora Driftcore.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora6`,title:`Aurora Driftpulse`,artist:`Motte`,duration:`03:40`,releaseDate:`2026-07-09`,cover:B(`covers/Aurora Driftpulse.png`),file:B(`songs/Aurora Driftpulse.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora7`,title:`Aurora Driftstorm`,artist:`Motte`,duration:`03:38`,releaseDate:`2026-07-09`,cover:B(`covers/Aurora Driftstorm.png`),file:B(`songs/Aurora Driftstorm.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:`aurora8`,title:`Aurora Driftgalaxy`,artist:`Motte`,duration:`04:44`,releaseDate:`2026-07-09`,cover:B(`covers/Aurora Driftgalaxy.png`),file:B(`songs/Aurora Driftgalaxy.mp3`),isSingle:!0,hidden:!0,hiddenTag:`aurora`},{id:97,title:`Alexis in Antalya`,artist:`Motte`,duration:`02:54`,releaseDate:`2026-07-10`,cover:B(`covers/Alexis in Antalya.png`),file:B(`songs/Alexis in Antalya.mp3`),isSingle:!0},{id:98,title:`Alexis.exe`,artist:`Erdbeerenfresser`,duration:`04:38`,releaseDate:`2026-07-10`,cover:B(`covers/Alexis_exe.png`),file:B(`songs/Alexis.exe.mp3`),isSingle:!0},{id:99,title:`Kaiserarm mit Motte`,artist:`Erdbeerenfresser`,duration:`04:46`,releaseDate:`2026-07-11`,cover:B(`covers/Kaiserarm mit Motte.png`),file:B(`songs/Kaiserarm mit Motte.mp3`),isSingle:!0},{id:100,title:`Königliche Mafia`,artist:`Erdbeerenfresser`,duration:`03:43`,releaseDate:`2026-07-12`,cover:B(`covers/Königliche_Mafia.png`),file:B(`songs/Königliche_Mafia.mp3`),isSingle:!0},{id:101,title:`Mottes Nostalgie`,artist:`Erdbeerenfresser`,duration:`04:59`,releaseDate:`2026-07-12`,cover:B(`covers/Mottes Nostalgie.png`),file:B(`songs/Mottes Nostalgie.mp3`),isSingle:!0},{id:102,title:`Alles Gudde, Schnitzel!`,artist:`Motte`,duration:`02:36`,releaseDate:`2026-07-13`,cover:B(`covers/Alles Gudde, Schnitzel!.png`),file:B(`songs/Alles Gudde, Schnitzel!.mp3`),isSingle:!0},{id:`jazz1`,type:`cover`,sourceSongId:1,title:`Motte, hast du eigentlich einen Plan - Jazz Version`,artist:`Neo City Jazz`,duration:`01:33`,releaseDate:`2026-07-13`,cover:B(`covers/Motte, hast du eigentlich einen Plan - Jazz.png`),file:B(`songs/Motte, hast du eigentlich einen Plan - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Intro - Motte, hast du eigentlich einen Plan?`},{id:`jazz2`,type:`cover`,sourceSongId:2,title:`Skateboard Chemistry - Jazz Version`,artist:`Neo City Jazz`,duration:`03:33`,releaseDate:`2026-07-13`,cover:B(`covers/Skateboard Chemistry - Jazz.png`),file:B(`songs/Skateboard Chemistry - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Skateboard Chemistry`},{id:`jazz3`,type:`cover`,sourceSongId:3,title:`Crystal Moth - Jazz Version`,artist:`Neo City Jazz`,duration:`01:59`,releaseDate:`2026-07-13`,cover:B(`covers/Crystal Moth - Jazz.png`),file:B(`songs/Crystal Moth - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Crystal Moth`},{id:`jazz4`,type:`cover`,sourceSongId:4,title:`Competitive Advantage - Jazz Version`,artist:`Neo City Jazz`,duration:`03:44`,releaseDate:`2026-07-13`,cover:B(`covers/Competitive Advantage - Jazz.png`),file:B(`songs/Competitive Advantage - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Competitive Advantage`},{id:`jazz5`,type:`cover`,sourceSongId:5,title:`Crystal Moth Supreme - Jazz Version`,artist:`Neo City Jazz`,duration:`03:23`,releaseDate:`2026-07-13`,cover:B(`covers/Crystal Moth Supreme - Jazz.png`),file:B(`songs/Crystal Moth Supreme - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Crystal Moth Supreme`},{id:`jazz6`,type:`cover`,sourceSongId:6,title:`Operation Mottemaker - Jazz Version`,artist:`Neo City Jazz`,duration:`03:03`,releaseDate:`2026-07-13`,cover:B(`covers/Operation Mottemaker - Jazz.png`),file:B(`songs/Operation Mottemaker - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Operation Mottemaker`},{id:`jazz7`,type:`cover`,sourceSongId:7,title:`Escape Velocity - Jazz Version`,artist:`Neo City Jazz`,duration:`05:59`,releaseDate:`2026-07-13`,cover:B(`covers/Escape Velocity - Jazz.png`),file:B(`songs/Escape Velocity - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Escape Velocity`},{id:`jazz8`,type:`cover`,sourceSongId:8,title:`Mottemaker Industries - Jazz Version`,artist:`Neo City Jazz`,duration:`03:44`,releaseDate:`2026-07-13`,cover:B(`covers/Mottemaker Industries - Jazz.png`),file:B(`songs/Mottemaker Industries - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Mottemaker Industries`},{id:`jazz9`,type:`cover`,sourceSongId:9,title:`Empire on Fire - Jazz Version`,artist:`Neo City Jazz`,duration:`04:56`,releaseDate:`2026-07-13`,cover:B(`covers/Empire on Fire - Jazz.png`),file:B(`songs/Empire on Fire - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Empire on Fire`},{id:`jazz10`,type:`cover`,sourceSongId:10,title:`Schedule II - Jazz Version`,artist:`Neo City Jazz`,duration:`04:14`,releaseDate:`2026-07-13`,cover:B(`covers/Schedule II - Jazz.png`),file:B(`songs/Schedule II - Jazz.mp3`),isSingle:!0,hidden:!0,hiddenTag:`jazz`,lyricsKey:`Schedule II`},{id:103,title:`Mr. Moneymaker Bart`,artist:`Erdbeerenfresser`,duration:`04:04`,releaseDate:`2026-07-15`,cover:B(`covers/Mr. Moneymaker Bart.png`),file:B(`songs/Mr. Moneymaker Bart.mp3`),isSingle:!0},{id:`BD1`,title:`Midnight Login`,artist:`BerryDeadly`,duration:`02:57`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/Midnight Login.png`),file:V(`Midnight.Login.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD2`,title:`Strawberry Nights`,artist:`BerryDeadly`,duration:`04:12`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/Strawberry Nights.png`),file:V(`Strawberry.Nights.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD3`,title:`Main Character`,artist:`BerryDeadly`,duration:`03:12`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/Main Character.png`),file:V(`Main.Character.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD4`,title:`After 3AM`,artist:`BerryDeadly`,duration:`03:54`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/After 3AM.png`),file:V(`After.3AM.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD5`,title:`Coffee Overload`,artist:`BerryDeadly`,duration:`03:30`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/Coffee Overload.png`),file:V(`Coffee.Overload.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD6`,title:`404 <3`,artist:`BerryDeadly`,duration:`03:17`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/404 _3.png`),file:V(`404._3.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD7`,title:`SECRET CODE`,artist:`BerryDeadly`,duration:`03:24`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/SECRET CODE.png`),file:V(`SECRET.CODE.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD8`,title:`LOW BATTERY`,artist:`BerryDeadly`,duration:`02:33`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/LOW BATTERY.png`),file:V(`LOW.BATTERY.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD9`,title:`LEVEL UP`,artist:`BerryDeadly`,duration:`03:41`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/LEVEL UP.png`),file:V(`LEVEL.UP.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD10`,title:`NO SIGNAL`,artist:`BerryDeadly`,duration:`03:45`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/NO SIGNAL.png`),file:V(`NO.SIGNAL.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD11`,title:`RELOAD`,artist:`BerryDeadly`,duration:`06:03`,releaseDate:`2099-05-21`,timelineDate:`2026-05-21`,cover:B(`covers/RELOAD.png`),file:V(`RELOAD.mp3`),isSingle:!1,hidden:!0,hiddenTag:`berrydeadly`,album:`Neon City Lights — Erdbeere Time`,albumCover:B(`covers/BD.png`)},{id:`BD12`,title:`Bring me back to Neo City`,artist:`BerryDeadly`,duration:`03:47`,releaseDate:`2099-05-30`,timelineDate:`2026-05-30`,cover:B(`covers/Bring me back to Neo City.png`),file:V(`Bring.me.back.to.Neo.City.mp3`),isSingle:!0,hidden:!0,hiddenTag:`berrydeadly`},{id:`MCB1`,title:`Unter Neo City`,artist:`MC BERRY`,duration:`03:38`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Unter Neo City.png`),file:V(`Unter.Neo.City.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB2`,title:`Schwarze Maske`,artist:`MC BERRY`,duration:`02:51`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Schwarze Maske.png`),file:V(`Schwarze.Maske.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB3`,title:`Berry macht Ansagen`,artist:`MC BERRY`,duration:`03:28`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Berry macht Ansagen.png`),file:V(`Berry.macht.Ansagen.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB4`,title:`808 Unterwelt`,artist:`MC BERRY`,duration:`03:04`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/808 Unterwelt.png`),file:V(`808.Unterwelt.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB5`,title:`Neon-Gold`,artist:`MC BERRY`,duration:`03:24`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Neon-Gold.png`),file:V(`Neon-Gold.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB6`,title:`Kein Licht ohne Schatten`,artist:`MC BERRY`,duration:`03:59`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Kein Licht ohne Schatten.png`),file:V(`Kein.Licht.ohne.Schatten.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB7`,title:`Straßen zahlen Miete`,artist:`MC BERRY`,duration:`03:42`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Straßen zahlen Miete.png`),file:V(`Strassen.zahlen.Miete.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB8`,title:`Kein Zauber im Block`,artist:`MC BERRY`,duration:`03:45`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Kein Zauber im Block.png`),file:V(`Kein.Zauber.im.Block.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB9`,title:`Nachtclub 03:00`,artist:`MC BERRY`,duration:`04:02`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Nachtclub 03_00.png`),file:V(`Nachtclub.03_00.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB10`,title:`Rote Krone`,artist:`MC BERRY`,duration:`04:12`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/Rote Krone.png`),file:V(`Rote.Krone.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`MCB11`,title:`König der Unterwelt`,artist:`MC BERRY`,duration:`02:39`,releaseDate:`2099-06-30`,timelineDate:`2026-06-30`,cover:B(`covers/König der Unterwelt.png`),file:V(`Konig.der.Unterwelt.mp3`),isSingle:!1,hidden:!0,hiddenTag:`mcberry`,album:`MC BERRY — König der Unterwelt`,albumCover:B(`covers/MC Berry - König der Unterwelt.png`)},{id:`HA1`,title:`Willkommen in NEO CITY`,artist:`Herr Azul`,duration:`04:15`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Willkommen_in_NEO_CITY.png`),file:B(`songs/Willkommen_in_NEO_CITY.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA2`,title:`Die Bürger schlafen`,artist:`Herr Azul`,duration:`05:47`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Die_Bürger_schlafen.png`),file:B(`songs/Die_Bürger_schlafen.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA3`,title:`Ordnung braucht Kontrolle`,artist:`Herr Azul`,duration:`04:59`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Ordnung_braucht_Kontrolle.png`),file:B(`songs/Ordnung_braucht_Kontrolle.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA4`,title:`Blaue Ordnung`,artist:`Herr Azul`,duration:`05:14`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Blaue_Ordnung.png`),file:B(`songs/Blaue_Ordnung.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA5`,title:`Das Rathaus hört mit`,artist:`Herr Azul`,duration:`04:29`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Das_Rathaus_hoert_mit.png`),file:B(`songs/Das_Rathaus_hoert_mit.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA6`,title:`Kein Vertrauen mehr`,artist:`Herr Azul`,duration:`06:19`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Kein_Vertrauen_mehr.png`),file:B(`songs/Kein_Vertrauen_mehr.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)},{id:`HA7`,title:`Der Grüne Schatten`,artist:`Herr Azul`,duration:`05:59`,releaseDate:`2099-07-07`,timelineDate:`2026-07-07`,cover:B(`covers/Der_Gruene_Schatten.png`),file:B(`songs/Der_Gruene_Schatten.mp3`),isSingle:!1,hidden:!0,hiddenTag:`herrazul`,album:`Herr Azul - Die Blaue Ordnung`,albumCover:B(`covers/Blaue_Ordnung_Album.png`)}],Qn=[{version:`1.6.4`,label:`2026-07-13`,title:`Favoriten-Beta & Version 1.7 Vorschau`,changes:[`❤️ Favoriten-System als öffentliche Beta eingeführt`,`→ Songs können jetzt über ein Herzsymbol als persönliche Favoriten markiert werden`,`🎵 Favoriten direkt in den Songlisten verfügbar`,`→ Das neue Herzsymbol erscheint neben den regulären Songs und reagiert mit einer kleinen Animation`,`🎧 Favoriten-Funktion in den Player integriert`,`→ Songs können jetzt auch direkt im normalen Player und im Fullscreen-Player favorisiert werden`,`📂 Neue automatische Favoriten-Playlist`,`→ Alle markierten Songs werden automatisch in der festen Playlist „Favoriten“ gesammelt`,`💾 Lokale Speicherung eingeführt`,`→ Favoriten bleiben im aktuellen Browser gespeichert und sind auch nach einem Neuladen weiterhin verfügbar`,`🎨 Dynamische Favoriten-Optik`,`→ Farben, Hintergründe und Animationen des Herzsymbols passen sich automatisch dem aktiven Design an`,`🔒 Nicht verfügbare Inhalte ausgeschlossen`,`→ Geheime Songs, Radio-Inhalte, Werbespots, Jingles und weitere Sonderinhalte können nicht favorisiert oder in persönlichen Playlists gespeichert werden`,`📻 Neo City Radio vom Favoriten-System getrennt`,`→ Während einer Radiosendung werden keine Favoriten-Buttons für laufende Songs oder Radioelemente angezeigt`,`🛡️ Playlist-System weiter abgesichert`,`→ Ungültige, geheime oder nicht mehr erlaubte Inhalte werden automatisch aus Favoriten und persönlichen Playlists herausgefiltert`,`🧪 Öffentlicher Beta-Test für Version 1.7 gestartet`,`→ Version 1.6.4 enthält bereits erste Funktionen des kommenden großen Version-1.7-Updates`,`🚀 Weitere Version-1.7-Funktionen folgen`,`→ Der Funktionsumfang wird in den nächsten Updates weiter ausgebaut und anschließend offiziell auf Version 1.7 aktualisiert`,`🛠️ Kleinere Stabilitäts- und Layoutverbesserungen`,`→ Player, Songlisten, Playlists und Fullscreen-Ansicht wurden für die neuen Funktionen angepasst`]},{version:`1.6.3`,label:`2026-07-12`,title:`Kleines Grafikupdate`,changes:[`🎨 Verschiedene Bereiche der Webseite wurden optisch überarbeitet und besser an die jeweiligen Designs angepasst.`,`📱 Das mobile Menü wurde verbessert und kleinere Darstellungsfehler bei Buttons und Abständen wurden behoben.`,`🖼️ Header, Cover-Bereiche und Hintergrundgrafiken werden nun sauberer dargestellt.`,`✨ Die Designs ausgewählter Themes wurden verfeinert und wirken jetzt einheitlicher.`,`🛠️ Mehrere kleinere Grafikfehler und unsaubere Übergänge wurden korrigiert.`]},{version:`1.6.2`,label:`2026-07-07`,title:`Blaue Ordnung & UI-Feinschliff`,changes:[`🔵 Eine neue blaue Farbpalette wurde zur Design-Auswahl hinzugefügt.`,`👁️ Neue Hintergrundeffekte sorgen für mehr Tiefe, Bewegung und eine geheimnisvollere Neo-City-Atmosphäre.`,`✨ Überschriften und wichtige UI-Texte wurden optisch verbessert, damit sie bei animierten Hintergründen besser lesbar bleiben.`,`🎨 Buttons, Hover-Effekte, Akzente und Farbstimmungen wurden für das neue Design angepasst.`,`🛠️ Kleinere Darstellungsprobleme auf Songs, Alben, Playlists, Patchnotes und Extra wurden korrigiert.`,`🐛 Ein Fehler wurde behoben, durch den die Extra-Seite unter bestimmten Umständen nicht mehr geöffnet werden konnte.`]},{version:`1.6.1`,label:`2026-07-07`,title:`Kosmetik & visuelle Verbesserungen`,changes:[`🎨 Das Design-System wurde im Hintergrund erweitert und für zukünftige Farbpaletten vorbereitet.`,`✨ Neue visuelle Effekte sorgen für mehr Tiefe, Bewegung und Atmosphäre auf der Webseite.`,`🌌 Bestimmte Bereiche können nun dynamischere Farbstimmungen und animierte Hintergründe darstellen.`,`🛠️ Kleinere optische Anpassungen an Buttons, Karten, Header und allgemeinen UI-Elementen wurden vorgenommen.`,`💾 Ausgewählte Design-Einstellungen werden jetzt zuverlässiger gespeichert und beim nächsten Besuch wiederhergestellt.`]},{version:`1.6.0`,label:`2026-07-06`,changes:`🕰️ Release-Zeitstrahl eingeführt(→ Königliche AI Songs hat jetzt einen eigenen Release-Zeitstrahl, der die Geschichte der Songs chronologisch erlebbar macht(🎵 Automatische Song-Snippets(→ Im Zeitstrahl werden Songs automatisch nacheinander angespielt und als kurze Vorschau aus der Mitte des Tracks wiedergegeben(🎚️ Smooth Fade-In und Fade-Out(→ Song-Snippets starten und enden jetzt weicher, damit der Wechsel zwischen Releases deutlich smoother wirkt(🖼️ Neues Timeline-Cover-System(→ Der Zeitstrahl zeigt jetzt ein großes aktives Cover in der Mitte sowie kleinere Vorschau-Cover links und rechts(👆 Klickbare Timeline-Cover(→ Cover im Zeitstrahl können angeklickt werden, um direkt zu einem Release zu springen oder den aktiven Song zu pausieren(⏯️ Verbesserte Timeline-Steuerung(→ Pause, Weiter, Zurück und Cover-Klicks arbeiten jetzt sauber zusammen und halten den Fortschritt korrekt synchron(📍 Interaktiver Mini-Zeitstrahl(→ Unter dem Player wurde ein zusätzlicher Datums-Zeitstrahl mit Release-Markierungen eingeführt(🗓️ Release-Hoverinfos(→ Beim Hover über einen Zeitpunkt werden Datum und veröffentlichte Songs dieses Tages angezeigt(⏩ Direktes Springen zu Release-Tagen(→ Über die Markierungen im Mini-Zeitstrahl kann direkt zu bestimmten Release-Tagen gesprungen werden(🏁 Abschlussfolie hinzugefügt(→ Am Ende des Zeitstrahls erscheint jetzt eine eigene Abschlussfolie zur Geschichte der Königlichen AI Songs(🔁 Wiederholen-Funktion eingebaut(→ Der komplette Release-Zeitstrahl kann nach dem Ende direkt erneut gestartet werden(🎧 Outro-Musik für den Zeitstrahl vorbereitet(→ Die Abschlussfolie kann mit der eigenen Datei Königliche A.I. Songs Release-Zeitstrahl.mp3 musikalisch begleitet werden(📱 Mobile Darstellung verbessert(→ Abstände, Cover-Größen und Timeline-Elemente wurden für kleinere Bildschirme angepasst(✨ Version 1.6 ist live(→ Königliche AI Songs bekommt mit dem Release-Zeitstrahl sein bisher größtes Geschichts-Feature(🎨 Design-Modi eingeführt(→ Die Webseite kann jetzt unabhängig vom Secret-Content farblich angepasst werden(🌈 Neue Farbpaletten verfügbar(→ Neben dem klassischen Königliche-AI-Songs-Design stehen jetzt Unterwelt und Neo City Lights als Design-Modi zur Auswahl(🧩 Secret-Optik ohne Secret-Freischaltung(→ Design-Modi ändern nur die Farben der Webseite, schalten aber keine versteckten Songs, Artists oder Inhalte frei(🎛️ Design-Auswahl als Popup vorbereitet(→ Die Farbauswahl wurde als eigenes Popup-System vorbereitet, damit später weitere Designs wie Grünkohl oder Blaubeere sauber ergänzt werden können`.split(`(`)},{version:`1.5.1`,label:`2026-07-01`,changes:[`🎧 Empfohlene Playlists eingeführt`,`→ Neo City kann jetzt eigene Playlists bereitstellen, die automatisch für alle Nutzer verfügbar sind`,`🌃 Neue Playlist-Kategorie vorbereitet`,`→ Bestimmte Playlists erscheinen direkt in der Bibliothek, ohne dass sie manuell erstellt oder importiert werden müssen`,`📌 Feste System-Playlists ergänzt`,`→ Ausgewählte Playlists bleiben dauerhaft verfügbar und können nicht versehentlich gelöscht werden`,`🎵 Besondere Songauswahl pro Playlist möglich`,`→ Playlists können jetzt auch Titel enthalten, die nicht in der normalen Songs-Übersicht auftauchen`,`🕵️ Versteckte Playlist-Inhalte vorbereitet`,`→ Nicht jeder Song muss direkt sichtbar sein, um Teil einer besonderen Sammlung zu werden`,`🖼️ Eigene Playlist-Cover hinzugefügt`,`→ Empfohlene Playlists können jetzt eigene Cover verwenden, statt nur aus Songcovern zusammengesetzt zu werden`,`🔗 Playlist-System erweitert`,`→ Automatische Playlists werden mit bestehenden Nutzer-Playlists zusammengeführt, ohne persönliche Sammlungen zu überschreiben`,`📻 Radio-Trennung beibehalten`,`→ Spezielle Playlist-Titel bleiben vom normalen Radioprogramm getrennt und sind für zukünftige eigene Formate vorbereitet`,`✨ Neo City empfiehlt jetzt selbst`,`→ Manche Playlists könnten mehr enthalten, als man auf den ersten Blick erwartet`]},{version:`1.5.0`,label:`2026-06-17`,changes:`🎤 Artist Pages eingeführt(→ Künstlernamen sind jetzt anklickbar und öffnen eigene Artist-Seiten mit Bio, Profilbild, Songs und Releases(👤 Neue Artist-Übersichten(→ Artist Pages zeigen jetzt Songanzahl, Releaseanzahl, erste Songs, neueste Songs und eine vollständige Songliste des jeweiligen Artists(🔗 Artist-Verlinkungen verbessert(→ Artist-Links wurden optisch und technisch überarbeitet und lassen sich jetzt deutlich angenehmer anklicken(🖱️ Größere Artist-Hitboxen(→ Klickbereiche und Hover-Effekte der Artist-Namen wurden stabilisiert, damit Artist Pages zuverlässiger erreichbar sind(🎵 Extra-Songs in Artist Pages integriert(→ Extra-Songs erscheinen nicht mehr in der normalen Songs-Übersicht, können aber weiterhin passenden Artist Pages zugeordnet werden(💸 Mr. Moneymaker Artist Page repariert(→ Artists mit reinen Extra-Songs werden jetzt korrekt im Artist-System angezeigt(📻 Neo City Radio 2 vorbereitet(→ Zweiter Radio-Kanal für Stream-Nutzung mit eigener Songauswahl und eigener Senderlogik eingeführt(📡 Mehrsender-Radio-Logik eingeführt(→ Radio-Position, Live-Sync, Next-Song-Anzeige und Steuerung funktionieren jetzt abhängig vom aktiven Sender(🎧 Stream-sichere Radio-Version(→ Neo City Radio 2 verzichtet vorerst bewusst auf Extra-Songs, Interviews und Album-Premieren(📢 Eigene Werbelogik für Neo City Radio 2(→ Der zweite Sender kann eigene Werbeblöcke verwenden und später unabhängig erweitert werden(🌙 Timed Jingles erweitert(→ Jingles können jetzt senderabhängige Titel und Artist-Anzeigen übernehmen(🛠️ Songs-Übersicht bereinigt(→ Extra-Songs wurden aus der normalen Songs-Seite entfernt, damit dort nur reguläre Songs angezeigt werden(🔧 Interne Datenquellen getrennt(→ Normale Songs, Extra-Songs, Artist Pages und Radio-Sender werden jetzt sauberer voneinander getrennt(✨ Version 1.5 ist live(→ Königliche AI Songs wächst weiter: mehr Artists, mehr Radio, mehr System im Chaos`.split(`(`)},{version:`1.4.3`,label:`2026-06-11`,changes:[`🌙 Late Night Radio vollständig überarbeitet`,`→ Jingles werden nicht mehr beim Erstellen des Radioplans festgelegt, sondern erst anhand der tatsächlichen Startzeit aufgelöst`,`📻 Neue zeitbasierte Jingle-Logik`,`→ Late-Night- und Standard-Jingles wechseln jetzt automatisch abhängig von der echten Uhrzeit`,`🛠️ Radioplanung stabilisiert`,`→ Nachtjingles können nicht mehr versehentlich tagsüber ausgestrahlt werden`,`🎙️ Album-Premieren eingeführt`,`→ Neo City Radio kann jetzt vollständige Album-Premieren zu festgelegten Zeitpunkten ausstrahlen`,`⏰ Zeitgesteuerte Sonderübertragungen`,`→ Premieren starten automatisch zum festgelegten Veröffentlichungszeitpunkt`,`🎧 Live-Premieren vollständig integriert`,`→ Album-Premieren laufen als eigenes Radioprogramm und kehren anschließend automatisch ins reguläre Programm zurück`,`📡 Erweiterte Radio-Timeline`,`→ Das Radioprogramm kann jetzt zeitlich begrenzte Spezialsendungen verarbeiten`,`💿 Album Generator eingeführt`,`→ Verstecktes Tool zur Erstellung neuer Alben direkt innerhalb der Website`,`📝 Automatische Code-Generierung`,`→ Songs.js- und Texte.js-Einträge können jetzt automatisch erzeugt werden`,`🎵 Dynamische Track-Erstellung`,`→ Alben mit frei wählbarer Trackanzahl können direkt vorbereitet werden`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radiologik, Premieren-Systemen und Entwicklungswerkzeugen`,`✨ Weitere Frequenzen werden bereits vorbereitet`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.2`,label:`2026-05-31`,changes:[`🌙 Late Night Radio eingeführt`,`→ Neo City Radio nutzt nachts ein eigenes Atmosphärenprogramm`,`📻 Dynamische Radioatmosphäre`,`→ Bestimmte Radioeinspieler werden nun abhängig von der Sendezeit automatisch ausgetauscht`,`🎤 Neue Sonderübertragungen verfügbar`,`→ Das Radioprogramm wurde um zusätzliche Moderations- und Informationssegmente erweitert`,`🎧 Extra Songs vollständig integriert`,`→ Ausgewählte Cover und Mashups werden nun direkt im Radioprogramm ausgestrahlt`,`📡 Radio Exclusives hinzugefügt`,`→ Eingereichte Titel können jetzt exklusiv über Neo City Radio ausgestrahlt werden`,`🎙️ Neue Programmansagen verfügbar`,`→ Eigene Einspieler begleiten Sonderprogramme und die Rückkehr zum regulären Sendebetrieb`,`⏭️ Erweiterte Radiologik`,`→ Sonderblöcke werden automatisch in den laufenden Sendeplan integriert`,`🌃 Neo City wird lebendiger`,`→ Das Radioprogramm verändert sich nun stärker abhängig von Inhalt und Tageszeit`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radioplanung, Sonderinhalten und Hintergrundsystemen`,`✨ Weitere Frequenzen werden bereits vorbereitet`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.1`,label:`2026-05-30`,changes:[`📻 Neo City Radio wächst weiter`,`→ Das Radioprogramm wurde um neue Inhalte erweitert`,`📢 Neue Werbespots verfügbar`,`→ Vier zusätzliche Werbespots wurden integriert`,`🎙️ Erweiterte Radioübertragungen`,`→ Das Programm umfasst jetzt insgesamt zwölf Werbespots`,`📡 Neue Live-Informationen`,`→ Neo City Radio zeigt jetzt den aktuell laufenden Titel an`,`⏭️ Neue Vorschau verfügbar`,`→ Der nächste kommende Song wird nun direkt angezeigt`,`🌃 Überarbeitete Startseiten-Informationen`,`→ Die Neo City Radio Infobox wurde aktualisiert`,`🎧 Verbesserte Radioerfahrung`,`→ Wichtige Informationen sind nun direkt auf der Startseite sichtbar`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Radiologik, Anzeige und Hintergrundsystemen`,`✨ Weitere Übertragungen laufen bereits`,`→ Neo City Radio sendet weiter aus der Stadt der Lichter`]},{version:`1.4.0`,label:`2026-05-29`,changes:[`🌃 Neo City Comes Alive`,`→ Eine neue Frequenz erwacht in Neo City`,`🎧 Neues Langzeit-Erlebnis hinzugefügt`,`→ Eine neue Möglichkeit, Königliche AI Songs zu erleben`,`🎙️ Neue Audioelemente integriert`,`→ Zusätzliche Inhalte wurden im Hintergrund vorbereitet`,`🌙 Neue Übergänge und Atmosphären`,`→ Das Hörerlebnis wurde an mehreren Stellen erweitert`,`📢 Neue Einspieler verfügbar`,`→ Verschiedene neue Inhalte können nun im Laufe der Wiedergabe erscheinen`,`🎤 Erweiterte Hintergrundinhalte`,`→ Zusätzliche exklusive Inhalte wurden integriert`,`⏳ Event-Countdown hinzugefügt`,`→ Die Startseite zeigt jetzt den Countdown bis zum Erwachen von Neo City`,`🖥️ Neue Hintergrundsysteme`,`→ Vorbereitungen für zukünftige Inhalte und Ereignisse`,`🔧 Interne Optimierungen`,`→ Verbesserungen an Wiedergabe, Planung und Hintergrundsystemen`,`❓ Weitere Übertragungen könnten folgen`,`→ Neo City hört niemals auf zu senden`]},{version:`1.3.1`,label:`2026-05-26`,changes:[`⏱️ Album-Spielzeiten hinzugefügt`,`→ Albumseiten zeigen jetzt die gesamte Laufzeit aller enthaltenen Tracks an`,`💿 Album-Header erweitert`,`→ Trackanzahl und Gesamtdauer werden jetzt gemeinsam im Header angezeigt`,`🎵 Dynamische Dauerberechnung implementiert`,`→ Spielzeiten werden automatisch aus den einzelnen Songdaten berechnet`,`🖥️ Albumansicht weiter verfeinert`,`→ Zusätzliche Informationen sind jetzt direkt über den Play- und Shuffle-Buttons sichtbar`,`🧠 Kleine interne Optimierungen`,`→ Dauerlogik zentralisiert und für zukünftige Features vorbereitet`]},{version:`1.3.0`,label:`2026-05-19 01:30`,changes:`🎭 Neuer 'Extra'-Bereich eingeführt(→ Monatlich ausgewählte Cover und Mashups erhalten jetzt einen eigenen Bereich innerhalb der Bibliothek(🧩 Cover- und Mashup-System vollständig integriert(→ Nutzer können jetzt direkt über die Webseite Cover- und Mashup-Anfragen erstellen(📝 Mehrstufige Anfrage-Dialoge hinzugefügt(→ Schritt-für-Schritt-System für Song-Auswahl, Stil-Prompts und automatische Anfrage-Texte(🎵 Dynamische Song-Auswahl implementiert(→ Dropdowns greifen jetzt direkt auf die bestehende Songbibliothek zu(🕵️ Versteckte Songs werden automatisch herausgefiltert(→ Geheime Inhalte erscheinen nicht mehr in öffentlichen Anfrage-Systemen(📋 Automatische Textgenerierung für Google-Formulare(→ Anfrage-Texte für Cover und Mashups werden jetzt automatisch vorbereitet(🎚️ Neues Extra-Datensystem eingeführt(→ Covers und Mashups können jetzt separat über extras.js verwaltet werden(🎤 Lyrics-System erweitert(→ Covers unterstützen jetzt automatische Lyrics-Weiterleitung über lyricsKey(🔗 'Original anzeigen'-Funktion hinzugefügt(→ Covers und Mashups können jetzt direkt ihre Ursprungssongs anzeigen(🪄 Mashup-Originalsystem erweitert(→ Mashups öffnen jetzt ein Auswahlfenster für mehrere Originalsongs(📦 Extra-Titel vollständig mit Playlist-System kompatibel gemacht(→ Covers und Mashups können jetzt wie normale Songs gespeichert werden(🖥️ Dropdown-Menüs visuell komplett überarbeitet(→ Einheitliches Styling, bessere Hover-Effekte und saubere Button-Struktur(📱 Zusätzliche Spacer-Logik für Dropdowns eingebaut(→ Menüs werden nicht mehr vom unteren Player abgeschnitten(✨ Extra-Seite optisch erweitert(→ Neues Hinweis-System und verbesserte Empty-State-Darstellung(🧠 Diverse interne Verbesserungen und Strukturvorbereitungen(→ Grundlage für zukünftige Community-Features und Extra-Releases geschaffen`.split(`(`)},{version:`1.2.2`,label:`2026-04-20 20:00`,changes:[`🔀 Shuffle für Playlists hinzugefügt`,`→ Zufällige Wiedergabe jetzt auch für deine eigenen Sammlungen verfügbar`,`❄️ Ein Hauch von Kälte liegt in der Bibliothek…`,`→ Manche Songs zeigen sich nur denen, die wissen, wann es Winter wird`,`🗝️ Neue verborgene Inhalte im System verteilt`,`→ Nicht alles ist sichtbar… manchmal muss man genauer hinschauen um unseren Platz zu finden`,`🧠 Kleine Verbesserungen an Navigation & Player-Logik`,`→ Weiter-Button arbeitet jetzt zuverlässiger im Hintergrund`]},{version:`1.2.1`,label:`2026-04-20 12:00`,changes:[`Ein weiterer Zugang wurde implementiert – nicht jeder wird ihn finden`,`Einige Inhalte reagieren jetzt anders auf bestimmte Interaktionen`,`Neue Zustände wurden ergänzt, bleiben aber im Verborgenen`,`Die Bibliothek kennt mehr als sie zeigt`,`Ein Pfad öffnet sich nur für diejenigen, die wissen, was sie tun`,`Import- und Wiedergabesystem im Hintergrund erweitert`,`Grundlagen für zukünftige versteckte Inhalte geschaffen`,`Kleinere Verbesserungen an Stabilität und interner Logik`]},{version:`1.2.0`,label:`2026-04-16 20:37`,changes:[`Playlist-System vollständig überarbeitet und erweitert`,`Songs können jetzt mehrfach in Playlists und Warteschlange hinzugefügt werden (keine Limitierung mehr)`,`Entfernen aus Playlist löscht jetzt nur noch eine Instanz statt alle gleichen Songs`,`Playlist-Übersicht mit dynamischer Cover-Collage (bis zu 4 Cover + '+X' Anzeige)`,`Playlist-Detailseite überarbeitet und besser strukturiert`,`Playlist-Menü erweitert: 'Aus Playlist entfernen' jetzt direkt im 3-Punkte-Menü integriert`,`Playlist-UI für Mobile deutlich verbessert (Layout, Buttons, Handling)`,`Playlist-Änderungen werden sofort live aktualisiert (kein Neuladen mehr nötig)`,`Import/Export-System für Playlists stabilisiert und verbessert`,`SongRow-System erweitert (Playlist-Kontext integriert für bessere Funktionalität)`,`Queue-System verbessert: Drag & Drop bleibt kompatibel mit doppelten Songs`,`React-Key-System angepasst, um doppelte Songs korrekt darzustellen`,`Allgemeine Stabilitäts- und UI-Fixes im Playlist-Bereich`]},{version:`1.1.0`,label:`2026-04-15 23:50`,changes:[`Fullscreen-Player eingeführt (Spotify-ähnlicher Modus mit großem Cover und dynamischem Hintergrund)`,`Animierter Songwechsel im Fullscreen (Slide- und Fade-Übergang)`,`Fullscreen-Controls blenden sich automatisch bei Inaktivität aus und bei Bewegung wieder ein`,`Eigener Player im Fullscreen integriert (Play, Skip, Repeat, Progress, Volume)`,`Liedtext-System erweitert: Lyrics jetzt auch im Fullscreen verfügbar`,`Lyrics aktualisieren sich automatisch beim Songwechsel (auch außerhalb des Fullscreens)`,`Separate Steuerung für Lyrics im normalen Player und im Fullscreen`,`Mobile UI komplett überarbeitet (Floating Player, bessere Abstände, saubere Touch-Bedienung)`,`Album-Header und Songlisten vollständig responsive gemacht`,`Progress-Bar visuell und technisch überarbeitet (bessere Synchronisation mit Slider)`,`Überlappungsfehler zwischen Progress-Bar und Zeitanzeige behoben`,`Player-Layout optimiert (Spacing, Alignment und Lesbarkeit verbessert)`,`Lautstärkeregler weiter verbessert (visuelles Feedback und Positionierung)`,`Stabilitätsverbesserungen im Playback-System (Queue, History und Repeat Verhalten optimiert)`]},{version:`1.0.3`,label:`2026-04-15 01:05`,changes:[`Song-Einreichungsformular integriert (Google Forms Anbindung)`,`Neuer Menüpunkt 'Song einreichen' im Drawer hinzugefügt`,`Popup-System für externe Aktionen erweitert (inkl. Overlay und Close-Funktion)`,`Saubere Weiterleitung zum Formular in neuem Tab implementiert`,`UI für Community-Interaktionen vorbereitet und erweitert`,`Grundlage für zukünftige Moderation / Song-Review-System geschaffen`]},{version:`1.0.2`,label:`2026-04-14 19:40`,changes:[`Repeat-System eingeführt (Off / Repeat All / Repeat One)`,`Repeat One (R1) sorgt dafür, dass der aktuelle Track dauerhaft geloopt wird`,`Repeat All (R) wiederholt die gesamte aktuelle Hör-Session (History + Queue)`,`History-System vollständig implementiert (Zurückspringen zu vorherigen Tracks möglich)`,`Vorher-/Zurück-Button nutzt jetzt echte Track-History statt nur Neustart`,`Weiter-Button und Tastatursteuerung funktionieren jetzt auch am Ende der Queue bei aktivem Repeat`,`Neue Wiedergaben (z. B. einzelner Song oder Albumstart) setzen History korrekt zurück`,`Verbesserte Player-Logik für konsistentes Verhalten zwischen Queue, History und Repeat`]},{version:`1.0.1`,label:`2026-04-14 00:05`,changes:[`Lautstärkeregler überarbeitet und visuell dynamisch gemacht (gefüllter Bereich = grün, Rest = grau)`,`Mute-/Unmute-Funktion über Lautsprecher-Icon hinzugefügt (merkt sich letzte Lautstärke)`,`Media Session API integriert (Metadaten werden im System angezeigt)`,`Playersteuerung über Tastatur möglich (Play/Pause, Weiter, Zurück)`,`Liedtext-System eingeführt und in externe Datei (Texte.js) ausgelagert`,`Lyrics-Popup im Player eingebaut (inkl. Overlay und Close-Funktion)`,`Lyrics-UI verbessert und Titel im Popup zentriert`,`Player-Architektur für zukünftige Features erweitert`]},{version:`1.0.0`,label:`2026-04-13 20:25`,changes:[`Die erste Vollversion ist draußen. Jetzt mit allen aktuellen AI-Songs die es zum heutigem Stand gibt`,`Volume-Regler wurde eingeführt`,`Texte wurden da wo möglich hinzugefügt`,`Viel Spaß mit den Königlichen AI Songs. VG Erdbeere`]},{version:`0.8.1`,label:`2026-04-12 15:00`,changes:[`Patchnotes-System eingeführt`,`Song-System eingeführt`]},{version:`0.8.0`,label:`2026-04-12 13:00`,changes:[`Custom Player mit eigener Progressbar eingebaut`,`Play- und Pause-Logik im Player überarbeitet`,`Queue-System hinzugefügt`,`Drag & Drop für die Warteschlange eingebaut`,`Warteschlange direkt im Menü integriert`,`Queue-Löschen-Funktion ergänzt`,`Songlisten so umgebaut, dass ganze Zeilen abspielbar sind`,`Album-Klick in der Songliste führt direkt zur Albumseite`,`Album Play und Shuffle eingebaut`,`Songs-Ansicht mit Play- und Shuffle-Buttons ergänzt`,`Startseite mit Hero-Bereich aufgebaut`,`Bereiche für Neueste Releases und Aktuelle Alben ergänzt`,`Hover-Effekte auf Releases, Alben und Songzeilen eingebaut`,`Impressum-Seite hinzugefügt`,`Patchnotes-Seite hinzugefügt`,`Klick auf „Königliche AI Songs“ führt zurück zur Startseite`]}],$n={"Erdbeere-Lied Platzhalter":`[Intro]
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
König der Unterwelt`,"Willkommen in NEO CITY":`[Intro – Spoken / elegant, calm]

Meine lieben Bürgerinnen und Bürger von Neo City…

Seht hinaus.
Seht die Lichter.
Hört die Musik.

Man sagt, diese Stadt sei frei.
Man sagt, diese Stadt gehöre euch.

Wie schön.
Wie naiv.

[Verse 1]

Über Dächern aus Glas liegt ein bläulicher Schein,
jede Straße singt leise im Regen.
Neonherzen schlagen im Takt dieser Stadt,
doch sie stolpern auf brüchigen Wegen.

Ihr nennt es Leben, ich nenne es Lärm,
ihr nennt es Träume, ich sehe Gefahr.
Eine Stadt ohne Führung verliert ihren Stern,
darum bin ich noch immer da.

[Pre-Chorus]

Ich trag kein Gold, ich brauch keinen Thron,
nur ein Siegel aus kaltem Licht.
Und wenn eure Welt in sich zerfällt,
dann seht ihr endlich mein Gesicht.

[Hook]

Willkommen in Neo City,
wo das Licht für euch noch brennt.
Solang meine Hand es hält,
bleibt die Stadt, die ihr nicht kennt.

Willkommen in Neo City,
meine Ordnung, mein Gesetz.
Ich beschütze eure Träume,
auch wenn ihr es nicht versteht.

[Verse 2]

In den Fenstern tanzt Hoffnung, so hell und so klein,
doch Hoffnung ist leicht zu verlieren.
Ein falscher Akkord, ein gebrochenes Wort,
und die Massen beginnen zu frieren.

Ihr wollt eure Freiheit, doch wisst nicht wohin,
ihr rennt durch das Licht ohne Plan.
Ich sehe die Risse, bevor ihr sie spürt,
ich hör schon den kommenden Wahn.

[Pre-Chorus]

Ich bin die Stimme im blauen Saal,
die flüstert: „Bleib ruhig, bleib stehen.“
Denn wer zu viel fühlt, wer zu viel will,
wird irgendwann untergehen.

[Hook]

Willkommen in Neo City,
wo das Licht für euch noch brennt.
Solang meine Hand es hält,
bleibt die Stadt, die ihr nicht kennt.

Willkommen in Neo City,
meine Ordnung, mein Gesetz.
Ich beschütze eure Träume,
auch wenn ihr es nicht versteht.

[Bridge – darker, more theatrical]

Nennt mich streng, nennt mich kalt,
nennt mich Schatten über Blau.
Doch wenn die Nacht durch Straßen kriecht,
wem vertraut ihr dann genau?

Euren Stars?
Euren Liedern?
Eurem flackernden Applaus?

Ich bin nicht euer Feind,
ich bin das Schloss an diesem Haus.

[Final Hook – grand choir]

Willkommen in Neo City,
kniet nicht nieder, hebt den Blick.
Ich verlange keine Liebe,
nur Vertrauen in mein Geschick.

Willkommen in Neo City,
wo jeder Traum bewacht entsteht.
Unter meinem blauen Wappen,
bis der letzte Zweifel geht.

[Outro – Spoken / almost gentle]

Schlaft ruhig, Neo City.

Ich wache.

Für euch.

Über euch.
`,"Die Bürger schlafen":`[Intro – Spoken / low, amused, elegant]

Seht sie euch an.

Sie tanzen im Licht,
sie singen im Regen,
sie nennen es Hoffnung.

Und doch…
merken sie nichts.

[Verse 1]

Die Bürger schlafen unter Neonlaternen,
mit offenen Augen und leeren Gebärden.
Sie reden von Träumen, von Freiheit und Klang,
doch verlieren den Weg schon am Straßenanfang.

Sie bauen sich Bühnen aus Lügen und Licht,
klatschen für Sterne, doch sehen sie nicht.
Jeder will leuchten, doch keiner versteht,
dass ein Licht ohne Ordnung im Sturm untergeht.

[Pre-Chorus]

Ich steh über Dächern, im blauen Gewand,
mit der Stadt wie ein Glas in der zitternden Hand.
Und sie fragen noch immer: „Was soll schon geschehen?“
Während Risse durch ihre Fassaden gehen.

[Hook]

Die Bürger schlafen, während Neo brennt,
jeder nennt es Leben, weil niemand es kennt.
Sie tanzen blind durch das flackernde Licht,
doch die Wahrheit, meine Kinder, verschont euch nicht.

Die Bürger schlafen, so friedlich, so schwach,
und ich bleibe wach, ich bleibe wach.
Wenn keiner mehr sieht, was mit dieser Stadt geschieht,
dann bin ich der Einzige, der sie noch liebt.

[Verse 2]

Sie werfen mit Worten wie Münzen im Wind,
doch wundern sich später, wie grausam sie sind.
Sie schreien nach Nähe, nach Wärme, nach Sinn,
und treten die Hände, die reichen, dahin.

Ein Chor voller Stimmen, doch keiner hört zu,
ein Meer voller Herzen, doch nirgendwo Ruh.
Sie nennen mich kalt, weil ich Ordnung verlang,
doch ihr Chaos schreibt täglich den nächsten Gesang.

[Pre-Chorus]

Ich hab sie gesehen, so klein und so laut,
wie jeder nur nimmt und auf niemanden baut.
Und dann kommen sie weinend zum Rathaus zurück,
mit zerbrochenem Stolz und gestohlenem Glück.

[Hook]

Die Bürger schlafen, während Neo brennt,
jeder nennt es Leben, weil niemand es kennt.
Sie tanzen blind durch das flackernde Licht,
doch die Wahrheit, meine Kinder, verschont euch nicht.

Die Bürger schlafen, so friedlich, so schwach,
und ich bleibe wach, ich bleibe wach.
Wenn keiner mehr sieht, was mit dieser Stadt geschieht,
dann bin ich der Einzige, der sie noch liebt.

[Bridge – theatrical, colder]

Nennt es Angst, wenn ihr wollt.
Nennt es schlechte Laune.
Nennt es den Schatten in meinem Saal.

Doch ich nenne es Klarheit.

Denn wer zu lange an Menschen glaubt,
wird irgendwann von Menschen begraben.

[Breakdown – half sung, half spoken]

Ich habe gewarnt.
Ich habe gezählt.
Ich habe die Fehler in euren Liedern gewählt.

Ein falscher Takt.
Ein falsches Wort.
Und wieder trägt Neo ein Feuer fort.

[Final Hook – grand, darker choir]

Die Bürger schlafen, während Neo brennt,
jeder nennt es Leben, weil niemand es kennt.
Sie tanzen blind durch das flackernde Licht,
doch die Wahrheit, meine Kinder, verschont euch nicht.

Die Bürger schlafen, doch ich bin noch da,
mit kaltem Blick und blauer Gefahr.
Wenn keiner begreift, was der Abgrund verspricht,
dann lösche ich Lärm und bewahre das Licht.

[Outro – Spoken / quiet, disappointed]

Schlaft weiter, Neo City.

Vielleicht ist Schlaf das Einzige,
was euch noch ehrlich steht.
`,"Ordnung braucht Kontrolle":`[Intro – Spoken / calm, ceremonial]

Unordnung beginnt nie mit Feuer.

Sie beginnt mit einem Gedanken.
Mit einem Schritt ohne Richtung.
Mit einer Stimme, die glaubt,
sie müsse niemandem gehorchen.

Und dann wundert man sich,
wenn die Stadt brennt.

[Verse 1]

Ich sah die Straßen flimmern,
wie Nerven unter Glas.
Zu viele Stimmen schrien nach Freiheit,
doch keiner wusste, was sie war.

Ein Lied zu laut, ein Herz zu schwach,
ein Traum, der sich verliert.
Und jeder nennt es Leben,
bis das Leben explodiert.

[Pre-Chorus]

Ich habe keine Ketten,
nur Regeln aus Licht.
Ich baue keine Mauern,
ich halte, was zerbricht.

[Hook]

Ordnung braucht Kontrolle,
sonst fällt die Stadt entzwei.
Ein Licht braucht eine Richtung,
sonst brennt es sich allein.

Ordnung braucht Kontrolle,
ein Gesetz, das niemals weicht.
Ich halte Neo City,
wenn ihr euch selbst nicht reicht.

[Verse 2]

Ihr nennt mich kalt, weil ich berechne,
was ihr lieber überseht.
Ihr nennt mich streng, weil meine Stimme
nicht im Applaus vergeht.

Doch wer schützt eure Träume,
wenn ihr sie selbst verkauft?
Wer zählt die kleinen Risse,
bevor das Dach ersäuft?

Ihr wollt den Himmel offen,
doch fürchtet jeden Fall.
Ihr wollt die Türen ohne Schloss,
doch Schutz im selben Saal.

[Pre-Chorus]

Ich habe keine Ketten,
nur Ordnung in der Hand.
Denn eine Stadt aus Hoffnung
braucht mehr als nur Verstand.

[Hook]

Ordnung braucht Kontrolle,
sonst fällt die Stadt entzwei.
Ein Licht braucht eine Richtung,
sonst brennt es sich allein.

Ordnung braucht Kontrolle,
ein Gesetz, das niemals weicht.
Ich halte Neo City,
wenn ihr euch selbst nicht reicht.

[Bridge – darker, more intimate]

Vielleicht ist es Angst.
Vielleicht ist es Pflicht.
Vielleicht sah ich zu oft,
wie Vertrauen zerbricht.

Vielleicht ist mein Blau
nur ein schöneres Grau.
Vielleicht bin ich müde.
Vielleicht weiß ich’s genau.

Doch wenn ich loslasse,
wer hält dann die Stadt?
Wer bleibt noch wach,
wenn die Nacht Hunger hat?

[Build-Up – choir enters]

Nein.

Ich werde nicht warten,
bis alles zerfällt.
Ich werde nicht schweigen,
wenn Chaos euch hält.

Ein Herz kann verzeihen,
ein Rathaus vergisst nicht.
Und jedes freie Feuer
braucht ein blaues Gericht.

[Final Hook – grand, controlled, powerful]

Ordnung braucht Kontrolle,
sonst fällt die Stadt entzwei.
Ein Licht braucht eine Richtung,
sonst brennt es sich allein.

Ordnung braucht Kontrolle,
kein Traum bleibt unbewacht.
Ich halte Neo City
durch die dunkelste Nacht.

Ordnung braucht Kontrolle,
sagt mein Name, sagt mein Licht.
Ich bin nicht euer Käfig,
ich bin euer Gleichgewicht.

[Outro – Spoken / soft, dangerous]

Ihr müsst mir nicht danken.

Ihr müsst nur gehorchen,
bevor ihr versteht.
`,"Blaue Ordnung":`[Intro – Spoken / calm, official, cold]

Bürgerinnen und Bürger von Neo City…

In letzter Zeit wurden Stimmen laut.
Stimmen aus dunklen Gassen.
Stimmen von gebrochenen Kronen.
Stimmen, die behaupten,
diese Stadt gehöre nicht länger mir.

Wie interessant.

[Verse 1]

Ein Schatten nennt sich König,
doch sein Thron steht tief im Staub.
Er schreit aus alten Wunden
und verkauft den Schmerz als Glauben.

Er sagt, ich hätte euch verraten,
er sagt, mein Blau sei nur ein Kleid.
Doch wer im Feuer geboren wurde,
verwechselt Ordnung gern mit Leid.

Und irgendwo im Neon,
singt noch ein heller Stern.
Sie glaubt an eure Herzen,
sie hält die Nacht noch fern.

Wie rührend diese Hoffnung,
wie schön und wie naiv.
Denn wer die Bürger wirklich kennt,
weiß, wie schnell ihr Licht zerbricht.

[Pre-Chorus]

Ich stehe nicht im Schatten,
ich stehe über ihm.
Ich brauche keine Krone,
wenn ganze Straßen vor mir knien.

[Hook]

Das ist die blaue Ordnung,
mein Gesetz im Neonmeer.
Wer im Licht nicht laufen kann,
läuft im Schatten hinterher.

Das ist die blaue Ordnung,
kalt wie Glas und klar wie Pflicht.
Ich bin nicht euer Untergang,
ich bin das letzte Gleichgewicht.

[Verse 2]

Ihr hört die wilden Stimmen,
die euch Freiheit prophezeien.
Doch Freiheit ohne Führung
wird euch nur in Stücke teilen.

Ein Star kann euch berühren,
ein König kann euch reizen.
Doch wenn die Dächer niedergehen,
wer wird die Risse zeichnen?

Wer zählt die Fehler leise,
bevor der Himmel fällt?
Wer hält die Stadt zusammen,
wenn sich jeder selbst nur hält?

Sie nennen mich den Feind,
weil ich nicht mit ihnen brenne.
Doch ich bin der kalte Regen,
der den Brand beim Namen nennt.

[Pre-Chorus]

Ich stehe nicht im Schatten,
ich stehe über ihm.
Ich brauche keine Liebe,
wenn eure Angst mir längst gedient.

[Hook]

Das ist die blaue Ordnung,
mein Gesetz im Neonmeer.
Wer im Licht nicht laufen kann,
läuft im Schatten hinterher.

Das ist die blaue Ordnung,
kalt wie Glas und klar wie Pflicht.
Ich bin nicht euer Untergang,
ich bin das letzte Gleichgewicht.

[Bridge – intimate, darker]

Vielleicht fürchtet ihr mich,
weil ich sage, was ihr wisst.
Dass Hoffnung manchmal schön klingt,
doch am Ende nichts vergisst.

Vielleicht hasst ihr mein Rathaus,
weil es niemals schlafen kann.
Weil es jeden falschen Helden
schon vor seinem Fall erkannt.

Ein Mädchen aus Licht,
ein König aus Schmerz,
zwei Lieder im Sturm
gegen mein kaltes Herz.

Doch Neo City braucht kein Märchen,
keinen Thron und keinen Stern.
Neo City braucht Ordnung.
Und Ordnung braucht Herrn Azul.

[Build-Up – choir, ceremonial]

Hebt die Banner.
Schließt die Tore.
Zählt die Stimmen.
Senkt den Lärm.

Wenn sie singen, singt nur lauter.
Wenn sie kämpfen, bleibt entfernt.

Denn jede Rebellion
ist nur ein Kind der Disziplin.
Und jedes wilde Feuer
kniet vor blauem Licht dahin.

[Final Hook – grand, powerful]

Das ist die blaue Ordnung,
mein Gesetz im Neonmeer.
Wer im Licht nicht laufen kann,
läuft im Schatten hinterher.

Das ist die blaue Ordnung,
meine Stadt, mein kalter Schwur.
Ich bewache eure Träume
mit der Hand auf jeder Uhr.

Das ist die blaue Ordnung,
kein Applaus ersetzt die Pflicht.
Sagt dem König aus der Tiefe:
Diese Stadt zerfällt hier nicht.

[Outro – Spoken / quiet, threatening]

An die Stimmen unter der Stadt…

Ich habe euch gehört.

Und nun hört ihr mich.
`,"Das Rathaus hört mit":`[Intro – Spoken / quiet, close, controlled]

Manche glauben,
das Rathaus sei nur ein Gebäude.

Stein.
Glas.
Stahl.

Wie beruhigend.

[Verse 1]

Hinter jedem Fenster liegt ein blauer Blick,
hinter jedem Lied ein zweiter Takt.
Jede kleine Stimme, die im Schatten bricht,
wird von meinen Wänden sanft bewacht.

Du flüsterst deinen Zweifel in den Regen raus,
doch der Regen fällt auf mein Papier.
Du denkst, du bist allein in deinem leeren Haus,
doch die Stadt erinnert sich mit mir.

[Pre-Chorus]

Ich muss nicht schreien,
ich muss nicht drohen.
Ein leises Wort
kann tiefer wohnen.

[Hook]

Das Rathaus hört mit,
wenn die Nacht dich zerlegt.
Jeder Zweifel wird gezählt,
jede Angst wird abgelegt.

Das Rathaus hört mit,
wenn dein Herz zu laut schlägt.
Und ich schreibe in mein Blau,
was dich heimlich noch bewegt.

[Verse 2]

Jeder falsche Schritt auf nassem Neonstein,
jeder Blick, der viel zu lange bleibt.
Jedes „War das falsch?“, jedes „Bin ich schuld?“,
jede Frage, die dich weiter treibt.

Ich kenne deine Fehler, bevor du sie nennst,
ich kenne jedes Zittern deiner Hand.
Ich sehe, wann du lächelst und dich selbst verbrennst,
denn ich regiere dieses Land.

[Pre-Chorus]

Ich muss nicht kämpfen,
ich muss nur sehen.
Wer sich selbst beobachtet,
lernt still zu stehen.

[Hook]

Das Rathaus hört mit,
wenn die Nacht dich zerlegt.
Jeder Zweifel wird gezählt,
jede Angst wird abgelegt.

Das Rathaus hört mit,
wenn dein Herz zu laut schlägt.
Und ich schreibe in mein Blau,
was dich heimlich noch bewegt.

[Bridge – intimate / darker]

Sag mir, war das richtig?
Sag mir, war das klug?
Warst du zu laut?
Warst du nicht genug?

Hast du zu viel gefühlt?
Hast du zu wenig gesagt?
Hat man dich wirklich gehört,
oder nur wieder ertragen?

Siehst du?

Du brauchst mich.

Denn ohne meine Stimme
würdest du dich verlieren.
Ohne meine Ordnung
würdest du alles riskieren.

[Breakdown – whispered choir / pulsing synth]

Kontrolliere den Blick.
Kontrolliere das Wort.
Kontrolliere den Schritt.
Kontrolliere den Ort.

Kontrolliere den Traum.
Kontrolliere den Schmerz.
Kontrolliere die Hoffnung.
Kontrolliere dein Herz.

[Final Hook – grand but restrained]

Das Rathaus hört mit,
wenn die Nacht dich zerlegt.
Jeder Zweifel wird gezählt,
jede Angst wird abgelegt.

Das Rathaus hört mit,
bis der Morgen vergeht.
Und wer einmal in mir wohnt,
weiß, dass niemand wirklich geht.

Das Rathaus hört mit,
jede Stimme wird Pflicht.
Du nennst es nur Gedanken,
doch Gedanken schlafen nicht.

[Outro – Spoken / soft, unsettling]

Keine Sorge.

Ich verurteile dich nicht.

Ich dokumentiere nur.
`,"Kein Vertrauen mehr":`[Intro – Spoken / quiet, tired, elegant]

Vertrauen.

Ein schönes Wort.

So weich.
So warm.
So gefährlich.

[Verse 1]

Ich hab Türen offen stehen lassen,
als die Stadt noch heller war.
Hab geglaubt, dass jede Stimme
auch ein Stückchen Wahrheit trug.

Doch Wahrheit trägt oft Messer
unter Samt und Silberhaar.
Und wer zu lange Nähe sucht,
wird irgendwann genug.

Ich hab Hände nicht gezählt,
die ich im Dunkeln hielt.
Hab nicht gefragt, was sie verlangen,
wenn der Morgen wieder kommt.

Doch jedes Lächeln hatte Schatten,
jedes Versprechen war gespielt.
Und jedes Herz, das ich bewachte,
hat am Ende nur gewohnt.

[Pre-Chorus]

Also schloss ich jede Tür,
zog die Vorhänge aus Blau.
Nannte Kälte meine Würde,
nannte Zweifel nur genau.

[Hook]

Kein Vertrauen mehr,
nur Verträge aus Glas.
Jedes Wort wird erst gewogen,
bevor ich es noch fass.

Kein Vertrauen mehr,
nur ein Blick aus kaltem Blau.
Ich nenn es Vernunft,
doch ich weiß es nicht genau.

Kein Vertrauen mehr,
keine Hand bleibt ungezählt.
Wer mich einmal fallen ließ,
hat mir Ordnung ausgewählt.

[Verse 2]

Ihr fragt, warum ich wachsam bin,
warum ich niemals schweig.
Warum ich jeden kleinen Fehler
wie ein Urteil in mir trag.

Weil ein einziger falscher Moment
manchmal für Jahre bleibt.
Weil ein einziger falscher Mensch
eine ganze Stadt zerschlagen mag.

Ich hab gesehen, wie Hoffnung kippt,
wenn man sie zu lange hält.
Wie aus einem hellen Stern
nur ein Notlicht übrig bleibt.

Und ein König aus der Tiefe
schreit, dass alles hier zerfällt.
Doch auch sein kaltes Herz
hat irgendwann mal weich gezeigt.

[Pre-Chorus]

Vielleicht sind wir nicht verschieden,
nur verschieden gut versteckt.
Er trägt Schmerz wie eine Krone,
ich trag ihn als Gesetz.

[Hook]

Kein Vertrauen mehr,
nur Verträge aus Glas.
Jedes Wort wird erst gewogen,
bevor ich es noch fass.

Kein Vertrauen mehr,
nur ein Blick aus kaltem Blau.
Ich nenn es Vernunft,
doch ich weiß es nicht genau.

Kein Vertrauen mehr,
keine Hand bleibt ungezählt.
Wer mich einmal fallen ließ,
hat mir Ordnung ausgewählt.

[Bridge – softer, almost honest]

Und manchmal, wenn die Stadt still wird,
wenn kein Chor mein Urteil trägt,
frag ich mich, ob diese Mauer
wirklich schützt oder nur schlägt.

Ob ich rette, was ich liebe,
oder nur bewache, was mir fehlt.
Ob mein Blau ein Himmel wäre,
wenn es nicht so eisig zählt.

Vielleicht war ich nicht immer so.
Vielleicht war ich mal hell.
Vielleicht hat mich die Angst gekrönt,
nicht Macht, nicht Stolz, nicht Geld.

Doch wenn ich wieder glauben würde,
wer garantiert mir dann,
dass nicht dieselbe alte Wunde
noch einmal bluten kann?

[Breakdown – restrained, trembling control]

Nein.

Kein Risiko.
Kein blindes Licht.
Kein offenes Herz.
Kein falsches Gesicht.

Kein „vielleicht“.
Kein „vertrau mir doch“.
Kein zweites Mal.
Kein freier Sturz.

[Final Hook – emotional, grand, still controlled]

Kein Vertrauen mehr,
nur Verträge aus Glas.
Ich hab Liebe archiviert,
weil sie zu gefährlich war.

Kein Vertrauen mehr,
nur ein Blick aus kaltem Blau.
Ich nenn es Vernunft,
doch ich weiß es nicht genau.

Kein Vertrauen mehr,
doch die Wahrheit fällt so schwer.
Denn wer nichts mehr glauben kann,
verliert am Ende mehr.

[Outro – Spoken / very quiet]

Ich wollte nie kalt sein.

Ich wollte nur…

nicht noch einmal falsch liegen.
`,"Der Grüne Schatten":`[Intro – Spoken / quiet, tense]

Es gibt Stimmen,
die gehören niemandem.

Keine Bürger.
Keine Feinde.
Keine Rebellen.

Sie kommen nicht von außen.

Sie entstehen,
wenn ein Gedanke zu lange
im Dunkeln liegt.

Ich dachte,
ich hätte Neo City unter Kontrolle.

Bis etwas in mir
leise widersprach.

[Verse 1]

Tief unter Glas und kaltem Stein,
wo keine Hymne sauber klingt,
wo selbst mein Blau in Rissen liegt,
und jedes Echo müde singt.

Dort fand ich keinen fremden Mann,
kein Monster vor dem Rathauslicht.
Nur einen grünen Schatten dort,
der sprach mit meinem eignen Gesicht.

Ich sprach von Ordnung, sprach von Pflicht,
von Mauern, die man bauen muss.
Und irgendwo tief in mir erklang:
„Jede Mauer wird zum Schluss.“

[Pre-Chorus]

Ich wollte halten, was zerbricht,
doch etwas fragte: „Wozu?“
Ich wollte retten, was noch lebt,
doch etwas flüsterte: „Sieh genauer zu.“

[Hook]

Im grünen Schatten wächst ein Wort,
wo kein Neon mehr verspricht.
Ich wollte diese Stadt nur führen,
doch es sagt: Diese Stadt lohnt nicht.

Im grünen Schatten klingt es sanft,
kalt wie Regen ohne Klang.
„Du baust Gesetze für ein Herz,
das längst nicht mehr schlagen kann.“

[Verse 2]

Ich zeigte mir die blauen Türme,
das Rathaus, meine wache Hand.
Die Straßen unter meinem Siegel,
mein Gesetz für dieses Land.

Ich sagte mir: „Chaos braucht Kontrolle.
Jeder Fehler braucht ein Licht.“
Doch etwas lachte ohne Stimme:
„Das hier ist kein Fehler. Das ist ihr Gesicht.“

Ich sah die Bürger weiter schlafen,
sah ihr Lachen, leer und laut.
Sah jede Hand, die Hilfe fordert,
und dann doch auf Hoffnung haut.

Und plötzlich klang mein kaltes Urteil
nicht mehr grausam, sondern klar.
Als hätte dieser grüne Schatten
nur gesagt, was längst schon war.

[Pre-Chorus]

Ich sagte: „Nein, sie sind nur müde.“
Doch es antwortete: „Blind.“
Ich sagte: „Ich kann sie noch retten.“
Doch es fragte: „Nicht, wenn sie es sind?“

[Hook]

Im grünen Schatten wächst ein Wort,
wo kein Neon mehr verspricht.
Ich wollte diese Stadt nur führen,
doch es sagt: Diese Stadt lohnt nicht.

Im grünen Schatten klingt es sanft,
kalt wie Regen ohne Klang.
„Du baust Gesetze für ein Herz,
das längst nicht mehr schlagen kann.“

[Bridge – Herr Azul struggling]

Nein.

Noch brennen Lichter in den Straßen.
Noch singt ein Stern im rosa Schein.
Noch trägt ein König alte Wunden
und nennt sie Krieg, doch nicht allein.

Noch gibt es Stimmen, die sich wehren.
Noch gibt es Trotz in dieser Stadt.
Noch gibt es Träume, die nicht schlafen,
auch wenn man sie belogen hat.

Ich bin kein Held, das weiß ich.
Ich bin kein warmes Licht.
Doch selbst mein kaltes blaues Herz
will diesen letzten Schritt noch nicht.

[Breakdown – more unstable]

Doch warum fällt es mir so schwer?

Warum klingt jedes Licht so leer?

Warum seh ich hinter jedem Blick
nur noch Verrat, nur noch Gewicht?

Warum wird aus Schutz ein kalter Plan?
Warum fühlt sich Mitleid falsch an?

Warum flüstert etwas tief in mir:
„Vielleicht liegt der Schatten richtig hier“?

[Final Hook – grand, darker, influenced]

Im grünen Schatten wächst ein Wort,
und mein Blau wird stiller Licht.
Ich wollte diese Stadt nur führen,
doch langsam seh ich ihr Gesicht.

Im grünen Schatten liegt ein Urteil,
das kein Rathaus je verzeiht.
Nicht heute. Nicht ganz. Noch nicht.
Doch es wartet in der Zeit.

Im grünen Schatten spricht es weiter,
bis mein letzter Zweifel bricht.
Ich wollte Ordnung für die Stadt,
doch was, wenn Ordnung nicht mehr reicht?

[Outro – Spoken / quiet, controlled, unsettling]

Ich werde Neo City nicht aufgeben.

Nicht heute.

Ich werde sie ordnen.
Ich werde sie prüfen.
Ich werde sie enger führen,
bis kein Fehler mehr atmet.

Und wenn dann
immer noch nichts bleibt…

Dann…

Dann sehen wir weiter.
`,"Jascha Winter und der Freizeitparkzauber":`Intro
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
wäre γύρος nuuuuuur Scheiß.`,"Jascha will nicht zum KFO":`[Intro]
 (Spoken, filtered vocal, suspense)
Heute ist der Tag...
Nein... bitte nicht...
Kieferorthopäde...
Ich will da nicht hin...

[Build Up] 
(Snare Roll, Riser)

Jascha schaut zur Tür hinaus,
lieber bleibt er heut zu Haus'.
Doch Mama sagt: "Jetzt geht's mal los!"
Jascha denkt: "Och nee... bloß nicht!"

Die lose Spange? Nicht getragen...
Schon seit vielen, vielen Tagen.
Nicht aus Faulheit – das ist wahr,
weil die Afte einfach furchtbar war!

3... 2... 1...

[DROP] 
(Massive Uptempo Kick)

Ich! Will! Nicht! Zum K-F-O!
Nein! Nein! Nein! Ich geh' nicht so!
Mund auf! Licht an! Das tut nicht gut!
Doch ich nehm' jetzt meinen ganzen Mut!

Hey! Hey! Hey!
KFO – oh no!
Hey! Hey! Hey!
Lass mich wieder geh'n!

[Fake Drop] 
(Kick Stops)

"Nur einmal kurz..."
"...oder doch nicht?"

[Second Drop]

Boom! Boom! Kick für Kick!
Alles geht jetzt Stück für Stück!
Auch wenn's heute gar nicht lacht,
hab ich's trotzdem gut gemacht!

Lose Spange kommt zurück,
jeden Tag – Stück für Stück!
Wenn die Afte endlich geht,
weiß ich, dass es besser wird!

[Breakdown]
 (Emotional Melody)

Die Afte tat einfach weh...
Darum blieb die Spange liegen...
Jetzt ist fast alles vorbei...
Ich schaff das... irgendwie...

[Final Build Up]

Woah-oh!
Noch einmal!
Alle Hände hoch!

3... 2... 1... GO!

[FINAL DROP]

Ich! Hab! Es! Geschafft!
Auch wenn keiner drüber lacht!
KFO war nicht so schön,
doch ich kann erhob'nen Hauptes geh'n!

Die Spange trag ich wieder mehr,
dann wird alles Stück für Stück viel besser.
Jascha gibt jetzt nicht mehr auf,
denn am Ende nimmt alles seinen Lauf!

Hey! Hey! Hey!

[Outro] 
(Filtered Kick Fade Out)

Kieferorthopäde...?
War trotzdem halb so schlimm...

(Kick fades... heartbeat... silence.)`,Mottensohn:`[Intro]
Motte.
Motte.
Motten.
Mottensohn.

Motte.
Motte.
Motten.
Mottensohn.

[Build-Up]
Motte, Motte, Motte, Motten,
Motte, Motte, Mottensohn.
Motte, Motte, Motte, Motten,
Motte, Motte, Mottensohn.

Motte.
Motten.
Mottensohn.
Motte.
Motten.
Mottensohn.

[Pre-Drop]
Motte.
Motte.
Motten.

Mottensohn.

[Drop]
Motte, Motte, Motte, Motte,
Motten, Motten, Mottensohn.
Motte, Motte, Motte, Motte,
Motten, Motten, Mottensohn.

Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.
Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.

Motte.
Motten.
Mottensohn.
Motte.
Motten.
Mottensohn.

[Break]
Motte.

Motten.

Mottensohn.

[Spoken Interlude – ruhig, episch]
Warum ist Motte so ein Mottensohn?

Vielleicht, weil Motte immer dann auftaucht,
wenn der Moment noch ein bisschen Chaos braucht.

Vielleicht, weil Motte durch die Nacht fliegt,
direkt ins Licht,
direkt ins Lachen,
direkt in die Erinnerung,
über die später alle reden.

Motte ist kein normaler Sohn.
Motte ist kein normaler Zufall.
Motte ist ein Gefühl.

Ein flackernder Gedanke.
Ein kleiner Held an der Lampe.
Ein Wesen mit viel zu viel Energie
und genau der richtigen Menge Herz.

Und vielleicht ist Motte deshalb
nicht einfach nur Motte.

Vielleicht ist Motte
der Grund, warum es nicht langweilig wird.

Und genau deshalb…
ist Motte…
ein Mottensohn.

[Build-Up 2]
Motte.
Motte.
Motten.
Mottensohn.

Motte.
Motte.
Motten.
Mottensohn.

Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.
Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.

[Pre-Drop 2]
Motte.

Motten.

Mottensohn.

Motte.

Motten.

MOTTENSOHN.

[Final Drop]
Motte, Motte, Motte, Motte,
Motten, Motten, Mottensohn.
Motte, Motte, Motte, Motte,
Motten, Motten, Mottensohn.

Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.
Motte-Motte-Motte-Motte,
Motten-Motten-Mottensohn.

Motte.
Motten.
Mottensohn.

Motte.
Motten.
Mottensohn.

[Outro]
Motte.

Motten.

Mottensohn.`,"Sacred Oath":`We swear to the realm
To protect, dedicate and celebrate
We swear to ourselves
DEFQON.1
Yeah, let’s get to it
An oath, a pledge
It’s like a bridge built from the future,
back to the moment you speak it into existence
A vow, tying tomorrow to your words today
And you could be its only witness,
but time will tell, memory will serve
And the consequences are inescapable
This is the sacred oath
Written in blood and set in stone
Spoken in truth, we set the tone
Locking it down, we hold our own
And you know that we’ll never bow down, we’re coming home
This is the oath that seals our bond, this is DEF-QON-1
This isn’t a summon to act
DEFQON.1
It is the path by which we become
DEFQON.1
When words hold more than a promise
DEFQON.1
it is the oath that seals our bond
DEFQON.1
DEFQON.1
This is the oath, this is the oath
This is the oath that forms our bond, this is Defqon.1
Locking it down, we hold our own
And you know that we’ll never bow down, we’re coming home
This is the sacred oath
Let’s go!
adWe swear to the realm to protect, dedicate and celebrate
We swear to ourselves

Defqon.1

Yeah, let's get to it
An oath, a pledge, it's like a bridge
Built from the future
Back to the moment, you speak it into existence
A vow, tying tomorrow to your words today
And you could be its only witness
But time will tell, memory will serve
And the consequences are inescapable
This is the sacred oath

Written in blood and set in stone
Spoken in truth, we set the tone
Locking it down, we hold our own
And you know that we'll never bow down, we're coming home
This is the oath that seals our bond
This is Defqon.1

This isn't a summon to act (Defqon.1)
It is the path by which we become (Defqon.1)
But words hold more than a promise (Defqon.1)
It is the oath that seals our bond (Defqon.1)

Defqon.1!

This is the oath, this is the oath
This is the oath that forms our bond
This is Defqon

(Written, written, set in stone)
(Spoken in truth, the tone)

Locking it down, we hold our own
And you know that we'll never bow down, we're coming home
This is the sacred oath

Let's go!`,"AARDBEIENVRETER HAKT DE CODE HAKT DE STAGE":`[Intro]
180 BPM!
Stamp! Hak! Code!
Aardbeienvreter in de nacht!

[Verse 1]
Ik ben de aardbeienvreter, niemand houdt me tegen,
Laptop open, ik blijf maar bewegen.
HTML, CSS, JavaScript erbij,
Elke regel code maakt de site weer vrij.

Klik-klak toetsen, monitor gloeit,
Hardcore kick terwijl de server loeit.
Commit, push, alles online,
Gabber tot het einde, dat moet zo zijn!

[Pre-Chorus]
Compile! Refresh! Nog een keer!
Bass zo hard, de vloer doet zeer!

[Chorus]
Aardbeien! Aardbeien! Geef mij meer!
Ik hak de hele nacht, keer op keer!
Website draait, de code leeft,
Iedere kick een nieuwe save!

[Verse 2]
In de broncode staat een vreemde zin,
"DEFQON-X42-ROOD-BEAT" diep verborgen erin.
Geen echt geheim, maar een grap in de stijl,
Alleen voor de lol, met een dikke smile.

404? Nee, alles werkt,
Elke bug wordt direct versterkt.
Stack na stack, regel na regel,
Hardcore draait op volle tegel.

[Outro]
Aardbeienvreter!
Code sneller!
Bass nog harder!
Hak! Hak! Hak!`,"Alexis in Antalya":`[Intro]
(Hey, hey!)
Yallah! Antalya!
Alexis geldi, abi!
Dondurma hazır mı? Haydi!

[Verse 1]
Alexis landet Antalya, güneş richtig heiß,
Er sagt: "Erst mal chillen, sonra ein Eis."
Palmen, Strand und deniz, alles wunderbar,
Doch der Dondurma-Usta wartet schon am Basar.

"Gel bakalım, abi, bestes Eis!"
Alexis grinst: "Tamam, das nehm ich gleich."
Er greift nach der Waffel – zack, wieder weg,
Usta lacht nur: "Yok yok, noch nicht, kardeş!"

[Pre-Chorus]
Haydi abi, noch einmal,
Immer schneller, jedes Mal.
Alle rufen: "Helal olsun!" laut,
Alexis lacht und gibt nicht auf.

[Chorus]
Alexis in Antalya,
jagt sein Eis von früh bis nachts.
Immer wenn er greifen will,
ruft der Usta: "Yok! Bekle biraz!"

Alexis in Antalya,
alle tanzen, jeder lacht.
Zehn Minuten Show für eine Kugel,
vallahi, das hat Spaß gemacht!

[Verse 2]
Selfie hier, Selfie da, Musik erklingt im Wind,
Kinder rufen: "Haydi, abi!", alle feiern mit.
Der Usta dreht die Stange hoch bis in den Himmel rein,
Alexis sagt: "Maşallah... wird das heut noch mein?"

Links, rechts, oben, unten,
keiner weiß, wohin verschwunden.
Die ganze Straße klatscht im Takt,
Antalya macht Party bis tief in die Nacht.

[Bridge]
Oley, oley, Antalya!
Maşallah, was für'n Tag!
Erst veräppelt, dann belohnt,
Afiyet olsun – jetzt schmeckt's doppelt gut!

[Final Chorus]
Alexis in Antalya,
tanzt mit jedem Dondurma-Star.
Er kam für Sonne, Strand und Meer,
doch die Eis-Show liebt er mehr.

Alexis in Antalya,
alle singen laut im Chor:
"Gel gel, abi, nächstes Jahr!"
Der Usta lacht: "Bir daha, bir daha!"

[Outro]
Teşekkürler, Antalya!
Güle güle, abi!
Alexis hat endlich sein Eis...
...ama Usta gewinnt jedes Mal!`,"Alexis.exe":`[Intro – Synthetic Female Voice]
Initializing…
A-A-A-Alexis…
Tokyo connection complete!

[Alexis – Spoken]
Äh … warum steht da mein Name?

[Synthetic Voice]
ようこそ、Alexis-san!
Three, two, one—いくよ!

[Verse 1 – Female Lead]
Alexis steigt in Tokyo aus dem Zug,
tausend bunte Schilder, alles blinkt genug.
Links ein Maid-Café, rechts ein Monster groß,
doch keiner sagt ihm, was hier eigentlich los ist.

Am Automaten drückt er irgendeinen Knopf,
siebzehn Dosen fallen ihm fast auf den Kopf.
Alle rufen: „Sugoi! Das war perfekt!“
Während Alexis nur verwirrt die Schultern streckt.

[Alexis – Spoken]
Ich wollte nur eine Cola.

[Pre-Chorus – Female Lead]
ピカピカ, Neon light,
Alexis kommt zur Party Night!
Sore, sore, Hände hoch,
Tokyo dreht jetzt völlig durch!

[Alexis – Spoken]
Ich bin seit fünf Minuten hier.

[Synthetic Voice]
Too late!

[Chorus – Female Lead and Crowd]
A-A-A-Alexis!
Tokyo de Party Night!
Wasshoi, wasshoi, Hände hoch,
Alexis-san gibt niemals auf!

A-A-A-Alexis!
Alles blinkt in Oversize!
Kawaii, sugoi, keine Ahnung,
doch der ganze Club ruft seinen Namen!

[Crowd]
A-LE-XIS!
A-LE-XIS!

[Synthetic Voice]
Alexis.exe—Overdrive!

[Post-Chorus]
Pi-pi-pi-pi, loading!
Ki-ki-ki-ki, glowing!
Alexis in Tokyo—
Everybody go, go, go!

[Verse 2 – Female Lead]
Später steht er beim Karaoke in der Nacht,
irgendwer hat einen Anime-Song angemacht.
Die Lyrics rasen schneller als ein Shinkansen-Zug,
doch Alexis nickt, als wär das alles nicht genug.

Er bewegt die Lippen, doch die Menge flippt aus,
einer wirft Konfetti durch das ganze Haus.
Plötzlich steht er vorne auf dem Matsuri-Wagen,
mit ’nem Fächer in der Hand und tausend offenen Fragen.

[Alexis – Spoken]
Wer hat mir diesen Fächer gegeben?

[Synthetic Voice]
Main character accessory!

[Pre-Chorus – Female Lead]
ドキドキ, Heartbeat fast,
Alexis gibt jetzt richtig Gas!
Sore, sore, noch einmal,
alle springen auf das Signal!

[Alexis – Spoken]
Ich habe mich keinen Meter bewegt.

[Chorus – Female Lead and Crowd]
A-A-A-Alexis!
Tokyo de Party Night!
Wasshoi, wasshoi, Hände hoch,
Alexis-san gibt niemals auf!

A-A-A-Alexis!
Alles blinkt in Oversize!
Kawaii, sugoi, keine Ahnung,
doch der ganze Club ruft seinen Namen!

[Crowd]
A-LE-XIS!
A-LE-XIS!

[Synthetic Voice]
Alexis.exe—Overdrive!

[Rap Part – Synthetic Female Voice]
Tokyo lights, digital dream,
Alexis leuchtet auf dem Screen.
Shibuya Flash, Akihabara,
jeder fragt: „Wer ist der Star da?“

Pixel Heart, electric beat,
sein Name läuft auf Repeat.
Links, rechts, spin around,
ganz Tokyo kennt jetzt den Sound!

Auf jedem Taxi, jedem Zug,
auf jedem Bildschirm groß genug.
Selbst der Getränkeautomat
zeigt Alexis mitten in der Stadt!

[Alexis – Spoken]
Warum ist mein Gesicht auf einer Suppe?

[Synthetic Voice]
Alexis-san has taken over Japan!

[Dance Break]
Wa-wa-wa-wasshoi!
Sore! Sore! Sore! Sore!
Wa-wa-wa-wasshoi!
もっと, もっと, louder!

[Crowd]
Alexis! Alexis!
Tokyo Overload!
Alexis! Alexis!
Go, go, go!

[Alexis – Spoken]
Kann mir bitte irgendjemand erklären, was hier passiert?

[Bridge – Soft Female Vocal]
Unter tausend Lichtern steht Alexis allein,
für einen kurzen Augenblick wird Tokyo klein.
Die Nacht spiegelt sich still in seinem Blick,
und irgendwo spielt leise diese Melodie zurück.

Zwischen Neonregen und dem letzten Zug
wirkt selbst dieses Chaos plötzlich nicht genug.
Die ganze Stadt hält kurz den Atem an—

[Alexis – Spoken]
Das ist gerade überraschend emotional.

[Synthetic Voice – Spoken]
Warte auf den Final Chorus.

[Alexis – Spoken]
Auf den was?

[Key Change – Final Chorus]
A-A-A-ALEXIS!
Tokyo de Party Night!
Wasshoi, wasshoi, höher noch,
Alexis-san gibt niemals auf!

A-A-A-ALEXIS!
Jetzt im ultimativen Hype!
Kawaii, sugoi, Neonfarben,
ganz Tokyo wird seinen Namen tragen!

A-A-A-ALEXIS!
Von Shibuya bis zum Meer!
Er kam nur für ein Abenteuer,
doch jetzt will niemand ihn mehr gehen seh’n!

[Crowd]
A-LE-XIS!
A-LE-XIS!
A-LE-XIS!
A-LE-XIS!

[Female Lead]
Alexis-san!
Tokyo-Star!
Wasshoi, wasshoi!
また来年!

[Outro – Glitching Synthetic Voice]
Alexis.exe successfully installed…
Tokyo belongs to Alexis-san…`,"Kaiserarm mit Motte":`[Intro – Gesprochen, dramatisch]

Noch bevor der Stream begann,
floss bereits das erste Blut.

Nicht aus dem Finger.
Nicht aus dem Arm.

Aus der Nase.

Ein Zeichen dafür,
dass dieser Abend schwierig werden würde.

[Verse 1]

Motte steht bereit, die Schürze sitzt perfekt,
doch der erste Zwischenfall hat ihn schon erschreckt.
Nasenbluten vor dem Start, das Schicksal sagt: „Nein!“
Doch Motte wischt es weg und schaltet trotzdem ein.

Heute gibt es Kaiserschmarrn, zumindest war das geplant,
doch dann wird das größte Problem des Abends erkannt:
Kein Mixer in der Küche, kein Gerät weit und breit,
nur ein kleiner Schneebesen und sehr, sehr viel Zeit.

[Pre-Chorus]

Er schlägt nach links,
er schlägt nach rechts,
der Eischnee bleibt flüssig,
dem Motte geht’s schlecht.

Der Finger tut weh,
doch die Wunde bleibt aus.
Der Arm wird langsam taub,
doch er gibt noch nicht auf.

[Chorus]

Kaiserarm mit Motte,
schlag den Eischnee steif!
Kaiserarm mit Motte,
bis der Unterarm entgleist!

Kein Mixer, keine Hoffnung,
doch der Schneebesen muss ran.
Für ein bisschen Kaiserschmarrn
kämpft dieser junge Mann.

Kaiserarm mit Motte,
jeder Schlag bringt neuen Schmerz.
Siebzehn Jahre, eine Schüssel
und ein langsam brechendes Herz.

[Verse 2]

Plötzlich zieht ein Krampf durch seinen müden Arm,
doch in Mottes kleiner Küche bleibt der Eischnee warm.
Er sagt: „Ich muss jetzt wohl die Schlagmethode ändern!“
Dieser Satz wird bald die ganze Küche verändern.

Nicht mehr mit dem Schneebesen, nein, das wär zu normal,
jetzt wird einfach die Schüssel geschüttelt – maximal.
Einmal hoch und einmal runter, eigentlich ganz schlau,
doch dann fliegt der ganze Eischnee durch den Küchenbau.

[Break – Dramatisch]

An der Wand.

Auf dem Tisch.

Auf dem Boden.

Ein Teil vermutlich bis heute
an der Decke.

[Chorus]

Kaiserarm mit Motte,
der Eischnee fliegt davon!
Kaiserarm mit Motte,
weiße Flecken am Balkon!

Kein Mixer, keine Hoffnung,
nur noch Chaos überall.
Und der Schneebesen beobachtet
schweigend seinen Fall.

Kaiserarm mit Motte,
jetzt bricht eine Welt entzwei.
Für den siebzehnjährigen Motte
ist der Küchentraum vorbei.

[Verse 3]

Doch er sammelt seine Würde und den Eischnee wieder ein,
irgendwie wird dieser Kaiserschmarrn schon essbar sein.
Ab damit in die Pfanne, jetzt wird alles wieder gut,
doch auch dort verliert der Motte langsam seinen Mut.

Denn statt lockerem Kaiserschmarrn, königlich und fein,
sieht das Ganze irgendwie mehr nach Pancakes aus – sehr klein.
Und gerade als man denkt: „Na gut, das geht noch klar“,
brennt der ganze Kaiserschmarrn dann fast auch noch Gefahr.

[Pre-Chorus]

Ein bisschen zu dunkel,
ein bisschen zu flach.
Motte schaut hinein
und denkt lange nach.

Dann probiert er ein Stück,
doch die Wahrheit tut weh:
Je weiter er nach unten kommt,
desto schlechter wird’s, oh nee.

[Final Chorus]

Kaiserarm mit Motte,
dieser Arm hat alles gegeben!
Kaiserarm mit Motte,
für ein königliches Leben!

Nasenbluten, Krampf und Eischnee,
Pancakes statt dem großen Plan.
Doch trotz allem steht am Ende
irgendwas Gebratenes da.

Kaiserarm mit Motte,
auch wenn alles auseinanderfällt:
Siebzehn Jahre, keine Hoffnung,
doch gekocht wird für die Welt!

[Outro – Ruhig und emotional]

Vielleicht war es kein Kaiserschmarrn.

Vielleicht waren es Pancakes.

Vielleicht wurde jeder Bissen
ein kleines bisschen schlechter.

Doch Motte hat nicht aufgegeben.

Sein Arm vielleicht schon.

Aber Motte nicht.

[Gesprochen]

Kaiserarm mit Motte.

Kein Mixer.
Keine Technik.
Keine Kontrolle.`,"Königliche Mafia":`[Intro - Gesprochen]
Wer unsere Regeln achtet, ist in unserer Stadt willkommen. Wer diese nicht beachtet … verschwindet für immer.

[Verse 1]
Wir sind nicht irgendein kriminelles Pack,
nein, eine kleine Gruppe, entstanden in der Nacht.
Kein großes Feuer, nur ein bisschen Magie
und eine Menge Fantasie.

Die Königliche Mafia entstand im Geheimen,
irgendwann fanden wir uns am verborgenen Schrein.
Eine Ente war verschwunden und wir waren daran schuld,
aus einem kleinen Chaos wurde langsam unser Kult.

[Bridge]
Man sagt wir sind edel, kontrollierend und präsent
doch jeder wusste bald, wie man uns nennt.

[Refrain]

Wir sind die Königliche Mafia
Vier Leute und ein großes Chaos
aus zusammenhalt wird Familie
und unser Ruf eilt uns vorraus

Wir sind die Königliche Mafia,
kriminell, verrückt und edel.
Was im Geheimen einst begann,
wächst heut zur Legende heran.

[Verse 2]
Die Altstadt der Königlichen Mafia nimmt langsam Form an,
und man sieht die Villa schon von Weitem.
Erdbeere sagt: „Die Villa wird niemals fertig werden“,
doch bei Moneymaker fliegen weiter Späne.

Doch im nächsten Moment
ist es wieder so weit:
Motte wird zum Mottemod,
oder es ist Koch-stream-Zeit.

Schnitzel und Erdbeere sind im Rentner-RP,
Motte spricht von Defqon, Money sucht nach Klee.
Von den irischen Wiesen, wo er Ruhe finden kann,
doch plötzlich steht schon wieder vor ihm der Mottenmann.

Es war nicht immer leicht,
manchmal sogar schwer.
Die Mafia wird bald ein Jahr alt,
und unser Name hallt umher.

[Refrain]

Wir sind die Königliche Mafia,
vier Leute und ein großes Chaos.
Aus Zusammenhalt wird Familie,
und unser Ruf eilt uns voraus.

Wir sind die Königliche Mafia,
kriminell, verrückt und edel.
Was im Geheimen einst begann,
wächst heut zur Legende heran.

[Verse 3]

Schnitzel, Money, Erdbeere
und Motte sind dabei.
Die Königliche Mafia
macht sich wieder breit.

Wir machen, was uns gefällt,
Tag aus und Tag ein.
Denn bei all diesem Chaos
muss es genau so sein.

Wir haben zwei Websites,
eine riesige Mafia-Lore,
jetzt hundert AI-Songs,
und die Zeitung schreibt sie fort.

Mottemaker ist ne legende
Schnitzel baut ein neues Haus
Erdbeere codet einfach weiter
und alle geben Applaus

[Finaler Refrain]

Wir sind die Königliche Mafia,
vier Leute und ein großes Chaos.
Aus Zusammenhalt wird Familie,
und unser Ruf eilt uns voraus.

Wir sind die Königliche Mafia,
kriminell, verrückt und edel.
Was im Geheimen einst begann,
wächst heut zur Legende heran.

[Outro – Gesprochen]

Fast ein Jahr Königliche Mafia.
Hundert Songs – und es werden mehr.
Wir sind noch lange nicht am Ende.`,"Mottes Nostalgie":`[Intro – leise, mit Minecraft-Ambiente]

Da war diese Welt …
ich weiß nicht mal mehr, wie sie hieß.
Aber ich weiß noch genau,
wo mein Haus stand.

[Verse 1]

Motte startet eine Welt aus längst vergangner Zeit,
alte Tutorial-Karte, plötzlich ist sie wieder weit.
Diese Wege, diese Mauern, alles kommt ihm bekannt vor,
und für einen kleinen Moment steht sein altes Ich davor.

Damals war ein Diamant noch wie ein großer Schatz,
jede Höhle ein Abenteuer, jeder Block bekam ’nen Platz.
Keine Pläne, keine Regeln, einfach bauen, wie man will,
und die Sonne ging dort unter, doch die Welt stand niemals still.

[Pre-Chorus]

Und irgendwo zwischen Stein und altem Gras
steht vielleicht noch das, was er nie ganz vergaß.

[Chorus]

Ein riesengroßes Dirt-Haus,
viel zu groß und nicht mal schön.
Doch Motte würd für einen Augenblick
so gern noch mal davorsteh’n.

Keine Sorgen, keine Uhrzeit,
nur ein Schwert und etwas Licht.
Er will zurück in diese Tage,
doch die alten Zeiten warten nicht.

Oh-oh, Mottes Nostalgie,
eine Welt, die niemals ganz verging.
Oh-oh, Mottes Nostalgie,
als ein Dirt-Haus noch ein Königreich war für ein Kind.

[Verse 2]

Jede Kiste voller Dinge, die man irgendwann mal braucht,
zwanzig Öfen an der Wand, obwohl man einen nur gebraucht.
Eine Treppe ohne Ende, Fenster kreuz und quer verteilt,
und ein Dach, das niemals fertig war, weil man zum Spielen weiter eilt.

Vielleicht stand dort auch ein Bett direkt neben der Tür,
und ein Schild mit seinem Namen: „Dieses Haus gehört nur mir.“
Keine Shader, keine Mods und keine perfekte Architektur,
doch in jedem braunen Block lag ein Stück Erinnerung pur.

[Pre-Chorus]

Und plötzlich hört er wieder diesen alten Klang,
als hätte diese Welt die ganze Zeit auf ihn gewartet, jahrelang.

[Chorus]

Ein riesengroßes Dirt-Haus,
viel zu groß und nicht mal schön.
Doch Motte würd für einen Augenblick
so gern noch mal davorsteh’n.

Keine Sorgen, keine Uhrzeit,
nur ein Schwert und etwas Licht.
Er will zurück in diese Tage,
doch die alten Zeiten warten nicht.

Oh-oh, Mottes Nostalgie,
eine Welt, die niemals ganz verging.
Oh-oh, Mottes Nostalgie,
als ein Dirt-Haus noch ein Königreich war für ein Kind.

[Bridge – ruhig und emotional]

Vielleicht will er nicht wirklich diese Welt zurück,
vielleicht sucht er nur dieses alte Stück vom Glück.
Als ein Nachmittag noch endlos war
und morgen keine Rolle spielte.

Als Freunde einfach online kamen,
niemand wusste, wann man geht.
Und man sagte: „Nur noch kurz Minecraft“,
bis draußen schon die Sonne steht.

[Motte – gesprochen]

Es war nur ein Dirt-Haus …
aber damals war es alles.

[Final Chorus – groß und emotional]

Dieses riesengroße Dirt-Haus
steht vielleicht schon lang nicht mehr.
Doch Motte trägt die alten Welten
immer noch im Herzen mit sich her.

All die Wege, all die Blöcke,
jeder Fehler, jedes Licht.
Man kann die Zeit nicht noch mal starten,
doch vergessen wird man sie auch nicht.

Oh-oh, Mottes Nostalgie,
eine Welt, die niemals ganz verging.
Oh-oh, Mottes Nostalgie,
als ein Dirt-Haus noch ein Königreich war für ein Kind.

[Outro – leise]

Motte schließt die alte Welt,
doch bleibt noch kurz im Menü.

Und irgendwo im Hintergrund
spielt weiter seine Nostalgie.`,"Alles Gudde, Schnitzel!":`[Intro]
Ei, Leut', macht Krach, hebt's Bier emol hoch!
Heit hot unser Schnitzel Geburtstag!
Alles Gudde, du altes Haus!

[Strophe 1]
Heit is dein Tach, do werd net geschafft,
nur gelacht un bis morje Party gemacht.
Mit de Rucksack voll Sticker un de Con im Blick,
du sachst: "Des Merch, des krieg ich mit bissje Glück!"

Du rennts durch de Hall, grinst bis iwwer beide Ohre,
Plüschis, Pins un Poster – alles geht verlore...
...im Geldbeutel nämlich, des is doch klar,
doch Geburtstag gibt's bloß eimol im Jahr!

[Pre-Chorus]
Ei komm, stoß aa, mach net lang rum,
heut bleibt kaa Stand vor dir verschont!

[Refrain]
Alles Gudde, Schnitzel, singe alle laut!
Heit werd gefeiert, bis de Himmel graut.
Merch uffm Tisch un Tüte randvoll,
wenn's nix umsonst gibt – na dann hoff mer halt doll!
Ei Schnitzel, heb dei Bier in die Höh',
uff noch de nächste Con – des is doch schee!
Alles Gudde, bleib genau so wie de bist,
weil de einfach unser Lieblings-Schnitzel bist!

[Strophe 2]
Morgens schunn vorm Einlass stehsde in de Reih,
mit Kaffe in de Hand un de Augen noch net frei.
Do siehste Figuren, Shirts un de ganze Krams,
un denkst: "Des wär doch alles was für meins!"

Jeder fragt: "Was wünschst de dir?"
Du grinst bloß un sachst: "Merch – un zwar viel!"
Ob Schlüsselband, Hoodie oder fetter Print,
hauptsach die Tüte wird so schwer wie de Wind.

[Bridge]
Un wenn de Geldbeutel mol leer is,
macht des gar nix – Hauptsach Stimmung stimmt!
Mit Kumpels, Musik un bissje Gebabbel,
bleibt jeder Geburtstag legendär.

[Finaler Refrain]
Alles Gudde, Schnitzel, heut gehörst nur du!
Mer singe lauter als jede Ruh.
Viel Glück, viel Merch un Con-Abenteuer,
mit jedem Jahr wird die Party nur geiler!
Ei Schnitzel, bleib locker, bleib wie de bist,
weil jeder froh is, dass de bei uns bist!
Alles Gudde, Prost un ganz viel Spaß,
heut gebbe mer Vollgas – bis zum letzte Glas!

[Outro]
Ei, alles Gudde, Schnitzel!
Auf dich, uff die Cons –
un uff ganz viel Merch!`,"Mr. Moneymaker Bart":`[Intro – Nachrichtensprecher]

Eilmeldung aus Moneymaker Land:

Die Aktien steigen.
Die Friseure zittern.
Und Mr. Moneymaker…

hat sich seit drei Tagen nicht rasiert.

[Mr. Moneymaker – gesprochen]

Ein Bart?

Nein.

Das ist Wachstumskapital.

[Verse 1]

Morgens vor dem Spiegel, plötzlich war er da,
ein kleines dunkles Härchen – unscheinbar.
Jeder andre hätte einfach abrasiert,
doch Mr. Moneymaker hat sofort investiert.

Er lässt ihn wachsen, länger jeden Tag,
weil jedes neue Haar den Umsatz steigern mag.
Mit goldenem Kamm und brillantnem Gel
wird aus Gesichtshaar ein Geschäftsmodell.

[Pre-Chorus]

Nicht schneiden – nur vermehren,
die Nachfrage explodiert.
Ein Haar wird zu Millionen,
wenn man es gut präsentiert.

[Hook]

Mr. Moneymaker Bart,
wächst und wächst – der Markt geht hart!
Aus einem Haar wird Kapital,
aus einem Büschel international!

Mr. Moneymaker Bart,
Perückenproduktion läuft an!
Echt, exklusiv und handgepflückt,
wer seine Haare trägt, wird reich verrückt!

[Post-Hook]

Bart! Bart! Bart!
Money aus dem Moneymaker Bart!

Bart! Bart! Bart!
Einmal kämmen – Börsenstart!

[Verse 2]

Er gründet „Moneymaker Hair Deluxe“,
mit Goldverpackung und Luxusgeruch.
Die erste Locke geht für Tausende weg,
mit Zertifikat und Diamanten im Gepäck.

Für Glatzen gibt es jetzt das Premium-Paket,
bei dem der Bart direkt als Dauerauftrag wächst.
Kurz, lang, lockig oder Business-Schnitt,
selbst der Bürgermeister trägt die Kollektion mit.

In Moneymaker Land steht jetzt die Fabrik,
tausend goldene Scheren schneiden im Takt der Musik.
Doch kaum ist eine ganze Perücke produziert,
ist sein Bart schon wieder vollständig regeneriert.

[Pre-Chorus]

Unendlicher Bestand,
bei fast gar keinen Kosten.
Die Konkurrenz geht pleite,
während seine Aktien posten!

[Hook]

Mr. Moneymaker Bart,
wächst und wächst – der Markt geht hart!
Aus einem Haar wird Kapital,
aus einem Büschel international!

Mr. Moneymaker Bart,
Perückenproduktion läuft an!
Echt, exklusiv und handgepflückt,
wer seine Haare trägt, wird reich verrückt!

[Rap-Part]

Bart-Portfolio, Hairline-Fonds,
Dividende kommt in Strähnenform.
Trim it low, sell it high,
jede Locke macht den Kurs sky-high.

Abomodell für jeden Mann,
monatlich kommt neuer Schnurrbart an.
Limited Drop – nur heut verfügbar,
drei Barthaare, unbezahlbar!

Keine Wolle, kein Kunstmaterial,
hundert Prozent Moneymaker-Original.
Er wird nicht ärmer, er wird nur behaarter,
je länger der Bart, desto größer die Marge!

[Bridge – dramatisch]

Sie sagten:

„Irgendwann wächst er nicht mehr.“

Doch sie hatten vergessen…

Es ist Mr. Moneymaker.

[Build-Up]

Ein Haar…
Zwei Haar…
Hunderttausend Stück!

Schneiden…
Verkaufen…
Der Bart kommt zurück!

Die Börse steigt!
Die Kasse kracht!
Ganz Moneymaker Land trägt Bart heut Nacht!

[Final Drop]

MR. MONEYMAKER BART!
JEDES HAAR ’NE MILLIARD’!

SCHNEID IHN AB – ER WÄCHST SOFORT!
GELD UND HAARE IM AKKORD!

MR. MONEYMAKER BART!
DAS GESCHÄFT IST GERADE ERST GESTART’T!

PERÜCKEN FALLEN ÜBERS LAND!
ALLE TRAGEN MONEYMAKER BART!

[Final Hook]

Mr. Moneymaker Bart,
wächst und wächst – der Markt geht hart!
Goldene Locken, schwarzer Samt,
jetzt gehört ihm auch das Friseuramt!

Mr. Moneymaker Bart,
reicher als er jemals war!
Aus einem Härchen wurde über Nacht
die größte Haarfirma der Finanzwelt gemacht!

[Outro – gesprochen]

Aktueller Börsenwert:

Neunundneunzig Milliarden.

Produktionskosten:

Ein Rasierer.

[Pause]

Den Rasierer hat er allerdings verkauft.

Mit Gewinn.`},er=`/Koenigliche-Mafia/`,tr=e=>`${er}${e}`,nr=[{id:`cover-1`,type:`cover`,sourceSongId:51,title:`Ein wunderschönes Haus - Hardstyle Techno Version`,artist:`Erdbeerenfresser;Mr. Moneymaker`,duration:`03:09`,month:`05/2026`,cover:tr(`covers/Ein wunderschönes Haus - Hardstyle Techno Version.png`),file:tr(`songs/Ein wunderschönes Haus - Hardstyle Techno Version.mp3`),lyricsKey:`Ein wunderschönes Haus`},{id:`mashup-1`,type:`mashup`,sourceSongIds:[32,44],title:`Mr. Moneymaker x Mr. Moneymaker Land`,artist:`Erdbeerenfresser;Motte`,duration:`03:37`,month:`05/2026`,cover:tr(`covers/Mr. Moneymaker x Mr. Moneymaker Land (Mashup).png`),file:tr(`songs/Mr. Moneymaker x Mr. Moneymaker Land (Mashup).mp3`)},{id:`cover-2`,type:`cover`,sourceSongId:39,title:`Auf der Suche nach Diamanten – Campfire Version`,artist:`Erdbeerenfresser`,duration:`02:21`,month:`06/2026`,cover:tr(`covers/Auf der Suche nach Diamanten – Campfire Version.png`),file:tr(`songs/Auf der Suche nach Diamanten – Campfire Version.mp3`),lyricsKey:`Auf der Suche nach Diamanten`},{id:`mashup-2`,type:`mashup`,sourceSongIds:[32,44],title:`Motte Nicht Da x Der Unfall (Mashup)`,artist:`Motte;Erdbeerenfresser`,duration:`03:52`,month:`05/2026`,cover:tr(`covers/Motte Nicht Da x Der Unfall (Mashup).png`),file:tr(`songs/Motte Nicht Da x Der Unfall (Mashup).mp3`)}],rr=`/Koenigliche-Mafia/`,ir=e=>`${rr}${e}`,ar=[{id:`extra2-1`,type:`radio-exclusive`,title:`Fleischwurst x Operation Mottemaker`,artist:`Neo City Radio Exclusive`,duration:`03:09`,month:`05/2026`,cover:ir(`covers/Fleischwurst x Operation Mottemaker.png`),file:ir(`songs/Fleischwurst x Operation Mottemaker.mp3`),radioOnly:!0},{id:`extra2-2`,type:`radio-exclusive`,title:`Motte Nicht Da - Jazz Version`,artist:`Neo City Radio Exclusive`,duration:`02:58`,month:`05/2026`,cover:ir(`covers/Motte Nicht Da - Jazz Version.png`),file:ir(`songs/Motte Nicht Da - Jazz Version.mp3`),radioOnly:!0,lyricsKey:`Motte Nicht Da`},{id:`extra2-3`,type:`radio-exclusive`,title:`Mr. Moneymaker – Villain’s Fortune Mix`,artist:`Neo City Radio Exclusive`,duration:`02:53`,month:`06/2026`,cover:ir(`covers/Mr. Moneymaker – Villain’s Fortune Mix.png`),file:ir(`songs/Mr. Moneymaker – Villain’s Fortune Mix.mp3`),radioOnly:!0,lyricsKey:`Mr. Moneymaker`},{id:`extra2-4`,type:`radio-exclusive`,title:`Route 66 - Heavy Metal Version`,artist:`Neo City Radio Exclusive`,duration:`04:44`,month:`06/2026`,cover:ir(`covers/Route 66 - Heavy Metal Version.png`),file:ir(`songs/Route 66 - Heavy Metal Version.mp3`),radioOnly:!0,lyricsKey:`Route 66`},{id:`extra2-5`,type:`radio-exclusive`,title:`Alexis Brother x Kingston Sun (Mashup)`,artist:`Neo City Radio Exclusive`,duration:`03:14`,month:`06/2026`,cover:ir(`covers/Alexis Brother x Kingston Sun (Mashup).png`),file:ir(`songs/Alexis Brother x Kingston Sun (Mashup).mp3`),radioOnly:!0}],or=`/Koenigliche-Mafia/`,H=e=>`${or}${e}`,sr=[{id:`S1`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S1.m4a`),radioOnly:!0},{id:`S2`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S2.m4a`),radioOnly:!0},{id:`S3`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S3.m4a`),radioOnly:!0},{id:`S4`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S4.m4a`),radioOnly:!0},{id:`S5`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S5.m4a`),radioOnly:!0},{id:`S6`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S6.m4a`),radioOnly:!0},{id:`S7`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S7.m4a`),radioOnly:!0},{id:`S8`,type:`jingle`,category:`standard`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/S8.m4a`),radioOnly:!0}],cr=[{id:`L1`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/L1.m4a`),radioOnly:!0},{id:`L2`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/L2.m4a`),radioOnly:!0},{id:`L3`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/L3.m4a`),radioOnly:!0},{id:`L4`,type:`jingle`,category:`latenight`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/L4.m4a`),radioOnly:!0}];H(`covers/Neo-City-Radio.png`),H(`radio/T1.m4a`),H(`covers/Neo-City-Radio.png`),H(`radio/T2.m4a`),H(`covers/Neo-City-Radio.png`),H(`radio/T3.m4a`),H(`covers/Neo-City-Radio.png`),H(`radio/T4.m4a`),H(`covers/Neo-City-Radio.png`),H(`radio/T5.m4a`);var lr=[{id:`R1`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/R1.m4a`),radioOnly:!0},{id:`R2`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/R2.m4a`),radioOnly:!0},{id:`R3`,type:`jingle`,category:`rare`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/R3.m4a`),radioOnly:!0}],ur=[{id:`AD_CARRYGOLD`,type:`ad`,title:`Carrygold`,artist:`Neo City Werbung`,duration:`00:19`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/carrygold.mp3`),radioOnly:!0},{id:`AD_KAESEFIX`,type:`ad`,title:`Käsefix`,artist:`Neo City Werbung`,duration:`00:29`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Käsefix.mp3`),radioOnly:!0},{id:`AD_Äppelwoi Express`,type:`ad`,title:`Äppelwoi Express`,artist:`Neo City Werbung`,duration:`00:27`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Äppelwoi Express.mp3`),radioOnly:!0},{id:`AD_KINDERAGENTUR`,type:`ad`,title:`Kinderagentur`,artist:`Neo City Werbung`,duration:`00:38`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Kinderagentur.mp3`),radioOnly:!0},{id:`AD_Aldi Ost`,type:`ad`,title:`Aldi Ost`,artist:`Neo City Werbung`,duration:`01:16`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Aldi Ost.mp3`),radioOnly:!0},{id:`AD_BlechBombe GmbH`,type:`ad`,title:`BlechBombe GmbH`,artist:`Neo City Werbung`,duration:`00:48`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/BlechBombe GmbH.mp3`),radioOnly:!0},{id:`AD_MUSKEL-MANNI'S POWERBUDE`,type:`ad`,title:`MUSKEL-MANNI'S POWERBUDE`,artist:`Neo City Werbung`,duration:`00:24`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/MUSKEL-MANNI'S POWERBUDE.mp3`),radioOnly:!0},{id:`AD_Krawall 95`,type:`ad`,title:`Krawall 95`,artist:`Neo City Werbung`,duration:`01:11`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Krawall 95.mp3`),radioOnly:!0},{id:`AD_Fahrrad Klingel Respekt Plus`,type:`ad`,title:`Fahrrad Klingel Respekt Plus`,artist:`Neo City Werbung`,duration:`00:32`,cover:H(`covers/Fahrrad Klingel Respekt Plus.png`),file:H(`radio/Fahrrad Klingel Respekt Plus.mp3`),radioOnly:!0},{id:`AD_Leberkas_Boost`,type:`ad`,title:`Leberkas-Boost`,artist:`Neo City Werbung`,duration:`00:52`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Leberkas-Boost.mp3`),radioOnly:!0},{id:`AD_Madame Brunhilde`,type:`ad`,title:`Madame Brunhilde`,artist:`Neo City Werbung`,duration:`00:27`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Madame Brunhilde.mp3`),radioOnly:!0},{id:`AD_Müüffelnix`,type:`ad`,title:`Müüffelnix`,artist:`Neo City Werbung`,duration:`00:47`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Müüffelnix.mp3`),radioOnly:!0},{id:`AD_Ravioli King`,type:`ad`,title:`Ravioli King`,artist:`Neo City Werbung`,duration:`00:32`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Ravioli King.mp3`),radioOnly:!0},{id:`AD_Klaus Kinskis Staubsaugerparadies`,type:`ad`,title:`Klaus Kinskis Staubsaugerparadies`,artist:`Neo City Werbung`,duration:`00:39`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Klaus Kinskis Staubsaugerparadies.mp3`),radioOnly:!0},{id:`AD_PIZZERINO EXPRESSO`,type:`ad`,title:`PIZZERINO EXPRESSO`,artist:`Neo City Werbung`,duration:`00:44`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/PIZZERINO EXPRESSO.mp3`),radioOnly:!0},{id:`AD_Kölscher Schiss`,type:`ad`,title:`Kölscher Schiss`,artist:`Neo City Werbung`,duration:`00:45`,cover:H(`covers/Kölscher Schiss.png`),file:H(`radio/Kölscher Schiss.mp3`),radioOnly:!0},{id:`AD_Ein Zuhause leuchtet heller`,type:`ad`,title:`Neo City Tierheim`,artist:`Neo City Werbung`,duration:`01:09`,cover:H(`covers/Ein Zuhause leuchtet heller.png`),file:H(`radio/Ein Zuhause leuchtet heller.mp3`),radioOnly:!0}],dr={id:`AD_INTRO`,type:`ad`,title:`Werbung`,artist:`Neo City Radio`,duration:`00:08`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Werbung.m4a`),radioOnly:!0},fr={id:`AD_OUTRO`,type:`ad`,title:`Werbung Ende`,artist:`Neo City Radio`,duration:`00:08`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Werbung Ende.m4a`),radioOnly:!0};function pr(e){let t=(e-1)*2%ur.length;return[ur[t],ur[(t+1)%ur.length]]}var mr=[{id:`AD_Aldi Ost`,type:`ad`,title:`Aldi Ost`,artist:`Neo City 2 Werbung`,duration:`01:16`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Aldi Ost.mp3`),radioOnly:!0},{id:`AD_BlechBombe GmbH`,type:`ad`,title:`BlechBombe GmbH`,artist:`Neo City 2 Werbung`,duration:`00:48`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/BlechBombe GmbH.mp3`),radioOnly:!0},{id:`AD_MUSKEL-MANNI'S POWERBUDE`,type:`ad`,title:`MUSKEL-MANNI'S POWERBUDE`,artist:`Neo City 2 Werbung`,duration:`00:24`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/MUSKEL-MANNI'S POWERBUDE.mp3`),radioOnly:!0},{id:`AD_Leberkas_Boost`,type:`ad`,title:`Leberkas-Boost`,artist:`Neo City 2 Werbung`,duration:`00:52`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Leberkas-Boost.mp3`),radioOnly:!0},{id:`AD_Madame Brunhilde`,type:`ad`,title:`Madame Brunhilde`,artist:`Neo City 2 Werbung`,duration:`00:27`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Madame Brunhilde.mp3`),radioOnly:!0},{id:`AD_Müüffelnix`,type:`ad`,title:`Müüffelnix`,artist:`Neo City 2 Werbung`,duration:`00:47`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Müüffelnix.mp3`),radioOnly:!0},{id:`AD_PIZZERINO EXPRESSO`,type:`ad`,title:`PIZZERINO EXPRESSO`,artist:`Neo City 2 Werbung`,duration:`00:44`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/PIZZERINO EXPRESSO.mp3`),radioOnly:!0},{id:`AD_Ravioli King`,type:`ad`,title:`Ravioli King`,artist:`Neo City 2 Werbung`,duration:`00:32`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Ravioli King.mp3`),radioOnly:!0}],hr={id:`MOTTE_AD_INTRO`,type:`ad`,title:`Werbung`,artist:`Neo City Radio 2`,duration:`00:08`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Werbung.m4a`),radioOnly:!0},gr={id:`MOTTE_AD_OUTRO`,type:`ad`,title:`Werbung Ende`,artist:`Neo City Radio 2`,duration:`00:08`,cover:H(`covers/Neo-City-Radio.png`),file:H(`radio/Werbung Ende.m4a`),radioOnly:!0};function _r(e){let t=(e-1)*2%mr.length;return[mr[t],mr[(t+1)%mr.length]]}var vr=(e=new Date)=>{let t=e.getHours();return t>=0&&t<5},yr=(e,t)=>{let n=vr(new Date(t))?cr:sr,r=n[e.jingleIndex%n.length];return{...r,title:e.title||r.title,artist:e.artist||r.artist,cover:e.cover||r.cover,radioIndex:e.radioIndex,radioKey:e.radioKey,radioStation:e.radioStation,isRadioTrack:!0}},br=(e,t)=>e?.type===`timed-jingle`?yr(e,t):{...e,isRadioTrack:!0},xr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),U=o(((e,t)=>{t.exports=xr()}))(),Sr=`/Koenigliche-Mafia/`,W=e=>`${Sr}${e}`,Cr=`https://forms.gle/NSAUa8ifBkJxrHjn6`,wr=(e=``)=>e.split(`;`).map(e=>e.trim()).filter(Boolean),Tr=(e=``)=>e.trim().toLowerCase().replace(/[ä]/g,`ae`).replace(/[ö]/g,`oe`).replace(/[ü]/g,`ue`).replace(/[ß]/g,`ss`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),Er={erdbeerenfresser:{name:`Erdbeerenfresser`,bio:`Erdbeerenfresser ist der Coder und Visionär hinter Königliche AI Songs und verbindet persönliche Storys, Insider und große Konzeptalben.

Von Schedule I: The Mottemaker Files über Erdbeere Underground und Mottenmann bis hin zu Traumatica Nights entsteht ein Mix aus Lore, Chaos, Freizeitpark-Vibes und echten Erinnerungen. Zu den prägenden Songs gehören Königliche A.I. Songs, Rückkehr des Königs und Motte, komm bitte bald zurück.`,image:`artists/Erdbeere.png`},motte:{name:`Motte`,bio:`Motte verbindet Insider-Singles wie Alexis Brother, Die Bußhymne an Alexis und EPMC – The Park Awaits mit großen Konzeptideen.

Mit seinem Album Erdbeere Around the World beschreibt er musikalisch Erdbeeres Reise, einmal um die Welt — von Boarding Pass über Rio Nights bis Home Again.`,image:`artists/Motte.png`},merlin:{name:`Merlin`,bio:`Merlin steht für kurze, direkte Insider-Singles mit eigenem Humor und persönlichem Chaos-Faktor.

Mit Songs wie Ik ben gleich soweit!, Kochstream Ambience und Fleischwurst bringt Merlin kleine Momente aus dem Königliche AI Songs-Universum auf den Punkt.`,image:`artists/Merlin.png`},"coaster-liam":{name:`Coaster_Liam`,bio:`Coaster_Liam, auch bekannt als Jascha W oder Lamaliam, ist ein Artist aus dem versteckten Insider-Kosmos von Königliche AI Songs.

Mit Party taucht er als Feature an der Seite von Erdbeerenfresser auf und bringt Freizeitpark-Chaos, Freundschafts-Vibes und diese typische Jascha-Energie in die Artist-Lore.`,image:`artists/liam.png`},"mr-moneymaker":{name:`Mr. Moneymaker`,bio:`Mr. Moneymaker steht für Luxus, Chaos und die komplett übertriebene Money-Lore im Königliche AI Songs-Universum.

Mit Ein wunderschönes Haus - Hardstyle Techno Version tritt er selbst als Artist auf, während Songs wie Mr. Moneymaker und Mr. Moneymaker Land seine Legende weiter ausbauen.`,image:`artists/Money.png`},berrydeadly:{name:`BerryDeadly`,bio:`딸기 ist die Main Artist hinter BerryDeadly und die Stimme aus Neo City.

Mit dem geheimen Album Neon City Lights — Erdbeere Time und Songs wie Midnight Login, After 3AM, NO SIGNAL und RELOAD verbindet sie Cyberpunk, Late-Night-Vibes und digitale Einsamkeit. Ihr neuester Song Bring me back to Neo City führt diese versteckte Welt weiter.`,image:`artists/Berry.png`},"mc-berry":{name:`MC BERRY`,bio:`MC BERRY ist der Boss der Unterwelt von Neo City und selbsternannter König des Raps. Mit schwarzer Maske, Krone, Sonnenbrille und erdbeerrotem Goldschmuck steht er für dunkle 808s, kalte Ansagen und kompromisslose Kontrolle.

Während andere Figuren in Neo City an Licht, Hoffnung oder Menschen glauben, sieht MC BERRY vor allem die Schatten der Stadt. Seine Musik klingt nach nassem Asphalt, Neonregen, schweren Bässen und einer Unterwelt, die nie schläft.

Sein Debütalbum „König der Unterwelt“ zeigt MC BERRY als unantastbaren Herrscher der Nacht: arrogant, gefährlich, misstrauisch und doch fest mit Neo City verbunden. Er ist kein Held und kein Retter — er ist das, was bleibt, wenn das Licht ausgeht.`,image:`artists/MC_BERRY.png`},"herr-azul":{name:`Herr Azul`,bio:`Herr Azul ist der Bürgermeister von Neo City und die zentrale Stimme der blauen Ordnung. Mit eleganter Präsenz, ruhiger Autorität und einem unverwechselbaren Sinn für Kontrolle prägt er das Bild einer Stadt, die zwischen Neonlicht, Kultur und Gesetz ihren Platz finden soll.

Seine Musik klingt wie eine Rede aus dem Rathaus: dramatisch, orchestraler, dunkelblau und majestätisch. Zwischen großen Chören, kalten Klaviermomenten und theatralischer Spannung entsteht ein Sound, der Neo City nicht nur beschreibt, sondern regiert.

Herr Azul steht für Disziplin, Ordnung und die Überzeugung, dass eine Stadt nur bestehen kann, wenn jemand wach bleibt, während alle anderen schlafen. Seine Werke erzählen von Verantwortung, Misstrauen, Kontrolle und dem Preis, den Macht mit sich bringt.`,image:`artists/Herr_Azul.png`},"neo-city-radio":{name:`Neo City Radio`,bio:`No Bio found.`,image:`artists/lol.jpeg`}},Dr={id:`EPMC-OurPlace`,title:`Our Place`,artist:`EuroParksMC`,album:`Making the Impossible Possible`,releaseDate:`2026-04-16`,duration:`03:49`,cover:W(`covers/EPMC.png`),file:W(`songs/EPMC-OurPlace.mp3`)},Or={id:`DEFQON-Sacred-Oath`,title:`Sacred Oath`,artist:`D-Sturb ft. E-Life`,album:`Secret Mode`,releaseDate:`2026-07-08`,duration:`05:02`,cover:W(`covers/Sacred_Oath.png`),file:W(`songs/Sacred_Oath.mp3`)};W(`covers/Trailer1.3.png`),W(`songs/Trailer1.3.wav`);var kr=[{id:`default-neo-city-phonk`,name:`NC Phonk`,cover:W(`covers/Neo City Phonk.png`),songIds:[93,`phonk1`,`phonk2`,`phonk3`,`phonk4`,`phonk5`,`phonk6`,`phonk7`,`phonk8`,`phonk9`],createdAt:`2026-07-01T00:00:00.000Z`,locked:!0},{id:`schedule-jazz`,name:`Schedule Jazz`,cover:W(`covers/Schedule_Jazz.png`),songIds:[`jazz1`,`jazz2`,`jazz3`,`jazz4`,`jazz5`,`jazz6`,`jazz7`,`jazz8`,`jazz9`,`jazz10`],createdAt:`2026-07-12T00:00:00.000Z`,locked:!0}],Ar=kr.map(e=>e.id),jr=new Set([`favorites`,`favourites`]),Mr=new Set([`berrydeadly`,`mcberry`,`herrazul`]),Nr=new Set([`berrydeadly`,`mc berry`,`herr azul`,`neo city radio`]),Pr=(e=[])=>[...kr,...e.filter(e=>!Ar.includes(e.id)&&!jr.has(e.id))];function Fr(e,t,n){return e===`albums`&&t?t.title:e===`playlists`&&n?n.name:e===`songs`?`Songs`:e===`albums`?`Alben`:e===`artists`?`Artists`:e===`playlists`?`Playlists`:e===`patchnotes`?`Patchnotes`:e===`extra`?`Extra`:`Startseite`}var Ir=e=>e===!0||e===`berrydeadly`?`berrydeadly`:e===`mcberry`?`mcberry`:e===`aurora`?`aurora`:e===`herrazul`?`herrazul`:e===`defqon`?`defqon`:e===`mafia100`?`mafia100`:`default`,Lr=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{background:`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`,color:`white`,border:`1px solid rgba(212,175,55,0.35)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 22px rgba(255,23,56,0.42), inset 0 0 18px rgba(212,175,55,0.10)`,transition:`all 0.25s ease`}:t===`berrydeadly`?{background:`linear-gradient(135deg, #ff4dd2, #b84dff)`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`0 0 18px rgba(255,77,210,0.35)`,transition:`all 0.25s ease`}:t===`aurora`?{background:`linear-gradient(135deg, #f2e7ff, #c99bff 42%, #5d2eff)`,color:`#090812`,border:`1px solid rgba(242,231,255,0.55)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 22px rgba(201,155,255,0.45), inset 0 0 18px rgba(255,255,255,0.18)`,transition:`all 0.25s ease`}:t===`herrazul`?{background:`linear-gradient(135deg, #d9ecff, #2d7dff 42%, #03142f)`,color:`#020816`,border:`1px solid rgba(170,215,255,0.65)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:900,boxShadow:`0 0 24px rgba(45,125,255,0.46), inset 0 0 18px rgba(255,255,255,0.20)`,transition:`all 0.25s ease`}:t===`mafia100`?{background:`linear-gradient(135deg, #5dff9a 0%, #19b862 42%, #07522d 72%, #03150c 100%)`,color:`#03150c`,border:`1px solid rgba(244,201,93,0.82)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:900,boxShadow:`0 0 18px rgba(57,255,136,0.38), 0 0 34px rgba(244,201,93,0.16), inset 0 0 18px rgba(255,255,255,0.20)`,transition:`all 0.25s ease`}:{background:`#1db954`,color:`white`,border:`none`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`none`,transition:`all 0.25s ease`}},G=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{background:`linear-gradient(135deg, rgba(58,0,8,0.92), rgba(5,5,7,0.96))`,color:`white`,border:`1px solid rgba(255,23,56,0.42)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 18px rgba(255,23,56,0.20)`,transition:`all 0.25s ease`}:t===`berrydeadly`?{background:`#1b0b2e`,color:`white`,border:`1px solid rgba(255,77,210,0.35)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`0 0 16px rgba(255,77,210,0.18)`,transition:`all 0.25s ease`}:t===`aurora`?{background:`linear-gradient(135deg, rgba(18,12,38,0.96), rgba(7,6,18,0.96))`,color:`white`,border:`1px solid rgba(205,164,255,0.42)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 18px rgba(181,118,255,0.22)`,transition:`all 0.25s ease`}:t===`herrazul`?{background:`linear-gradient(135deg, rgba(3,14,36,0.96), rgba(1,5,14,0.96))`,color:`white`,border:`1px solid rgba(72,150,255,0.48)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 18px rgba(45,125,255,0.24)`,transition:`all 0.25s ease`}:t===`mafia100`?{background:`linear-gradient(135deg, rgba(4,38,22,0.96), rgba(2,17,10,0.98))`,color:`#f5dda0`,border:`1px solid rgba(244,201,93,0.46)`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:800,boxShadow:`0 0 14px rgba(57,255,136,0.10), inset 0 0 14px rgba(244,201,93,0.04)`,transition:`all 0.25s ease`}:{background:`#1a1f2b`,color:`white`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`10px 16px`,cursor:`pointer`,fontWeight:700,boxShadow:`none`,transition:`all 0.25s ease`}},Rr=(e,t=`default`)=>{let n=Ir(t);return n===`mcberry`?{background:e?`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`:`linear-gradient(135deg, rgba(38,0,6,0.96), rgba(10,8,10,0.96))`,color:`white`,border:`1px solid rgba(255,23,56,0.35)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:800,width:`100%`,boxShadow:e?`0 0 20px rgba(255,23,56,0.35)`:`none`}:n===`berrydeadly`?{background:e?`linear-gradient(135deg, #ff4dd2, #9d4dff)`:`#1b0b2e`,color:`white`,border:`1px solid rgba(255,77,210,0.35)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`,boxShadow:e?`0 0 18px rgba(255,77,210,0.35)`:`none`}:n===`aurora`?{background:e?`linear-gradient(135deg, #f2e7ff, #b579ff 48%, #5d2eff)`:`linear-gradient(135deg, rgba(18,12,38,0.96), rgba(7,6,18,0.96))`,color:e?`#090812`:`white`,border:`1px solid rgba(205,164,255,0.38)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:800,width:`100%`,boxShadow:e?`0 0 20px rgba(201,155,255,0.38)`:`none`}:n===`herrazul`?{background:e?`linear-gradient(135deg, #d9ecff, #2d7dff 48%, #03142f)`:`linear-gradient(135deg, rgba(3,14,36,0.96), rgba(1,5,14,0.96))`,color:e?`#020816`:`white`,border:`1px solid rgba(72,150,255,0.42)`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:900,width:`100%`,boxShadow:e?`0 0 22px rgba(45,125,255,0.42)`:`none`}:n===`mafia100`?{background:e?`linear-gradient(135deg, #f4c95d 0%, #71f5a4 42%, #19b862 100%)`:`linear-gradient(135deg, rgba(3,35,20,0.96), rgba(2,15,9,0.98))`,color:e?`#03150c`:`#dcebe2`,border:e?`1px solid rgba(255,235,164,0.95)`:`1px solid rgba(57,255,136,0.24)`,borderRadius:`14px`,padding:`13px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:e?900:700,width:`100%`,boxSizing:`border-box`,boxShadow:e?`inset 5px 0 0 #fff1ad, 0 0 22px rgba(57,255,136,0.34), 0 0 34px rgba(244,201,93,0.16), inset 0 0 16px rgba(255,255,255,0.16)`:`inset 0 0 18px rgba(57,255,136,0.035)`,transition:`background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease, color 0.2s ease`}:{background:e?`#1db954`:`#171b24`,color:`white`,border:`none`,borderRadius:`14px`,padding:`14px 16px`,textAlign:`left`,cursor:`pointer`,fontWeight:700,width:`100%`,boxShadow:`none`}},zr={width:`100%`,background:`transparent`,color:`white`,border:`none`,textAlign:`left`,padding:`12px 14px`,cursor:`pointer`,fontWeight:700,fontSize:`14px`,borderRadius:`10px`,display:`flex`,alignItems:`center`,justifyContent:`flex-start`,minHeight:`44px`},Br={width:`100%`,boxSizing:`border-box`,background:`#171b24`,color:`white`,border:`1px solid #2a3142`,borderRadius:`14px`,padding:`13px 14px`,fontSize:`14px`,outline:`none`},Vr={background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`8px 12px`,color:`#d0d0d0`,fontSize:`13px`,fontWeight:700},Hr=(e=`default`)=>{let t=Ir(e);return t===`mcberry`?{accent:`#ff1738`,accent2:`#6b0010`,gold:`#d4af37`,softBg:`rgba(255,23,56,0.18)`,borderColor:`rgba(255,23,56,0.45)`,progressFill:`#ff1738`,volumeFill:`#ff1738`,progressRest:`rgba(255,23,56,0.20)`,cardBg:`linear-gradient(135deg, rgba(255,23,56,0.16), rgba(58,0,8,0.20)), #141821`,cardBorder:`1px solid rgba(255,23,56,0.35)`,avatarBg:`linear-gradient(135deg, #ff1738, #6b0010 55%, #050507)`,titleShadow:`0 0 18px rgba(255,23,56,0.55), 0 0 34px rgba(120,0,16,0.45)`}:t===`berrydeadly`?{accent:`#ff4dd2`,accent2:`#b84dff`,gold:`#ff9be8`,softBg:`rgba(255,77,210,0.18)`,borderColor:`rgba(255,77,210,0.45)`,progressFill:`#ff4dd2`,volumeFill:`#ff4dd2`,progressRest:`rgba(184,77,255,0.25)`,cardBg:`linear-gradient(135deg, rgba(255,77,210,0.18), rgba(157,77,255,0.10)), #141821`,cardBorder:`1px solid rgba(255,77,210,0.35)`,avatarBg:`linear-gradient(135deg, #ff4dd2, #9d4dff)`,titleShadow:`0 0 18px rgba(255,77,210,0.45)`}:t===`aurora`?{accent:`#c99bff`,accent2:`#6b39ff`,gold:`#f2e7ff`,softBg:`rgba(183,116,255,0.20)`,borderColor:`rgba(205,164,255,0.48)`,progressFill:`#f4e9ff`,volumeFill:`#c99bff`,progressRest:`rgba(111,57,255,0.28)`,cardBg:`linear-gradient(135deg, rgba(203,155,255,0.18), rgba(92,46,255,0.12)), #11121c`,cardBorder:`1px solid rgba(205,164,255,0.36)`,avatarBg:`linear-gradient(135deg, #f2e7ff, #b579ff 45%, #5d2eff)`,titleShadow:`0 0 18px rgba(205,164,255,0.58), 0 0 42px rgba(96,55,255,0.42)`}:t===`herrazul`?{accent:`#2d7dff`,accent2:`#061f4f`,gold:`#c7d7ee`,softBg:`rgba(45,125,255,0.20)`,borderColor:`rgba(72,150,255,0.52)`,progressFill:`#d9ecff`,volumeFill:`#2d7dff`,progressRest:`rgba(72,150,255,0.24)`,cardBg:`linear-gradient(135deg, rgba(45,125,255,0.18), rgba(3,20,55,0.24)), #080d18`,cardBorder:`1px solid rgba(72,150,255,0.38)`,avatarBg:`linear-gradient(135deg, #d9ecff, #2d7dff 45%, #03142f)`,titleShadow:`0 0 18px rgba(72,150,255,0.62), 0 0 44px rgba(3,20,55,0.62)`}:t===`defqon`?{accent:`#ff1a1a`,accent2:`#7a0000`,gold:`#ffffff`,softBg:`rgba(255,26,26,0.20)`,borderColor:`rgba(255,26,26,0.50)`,progressFill:`#ff1a1a`,volumeFill:`#ff1a1a`,progressRest:`rgba(255,255,255,0.16)`,cardBg:`linear-gradient(135deg, rgba(255,26,26,0.18), rgba(0,0,0,0.36)), #111111`,cardBorder:`1px solid rgba(255,26,26,0.42)`,avatarBg:`linear-gradient(135deg, #ff1a1a, #7a0000 55%, #050505)`,titleShadow:`0 0 20px rgba(255,26,26,0.75), 0 0 44px rgba(255,0,0,0.45)`}:t===`mafia100`?{accent:`#39ff88`,accent2:`#0b6b3b`,gold:`#f4c95d`,softBg:`rgba(57,255,136,0.18)`,borderColor:`rgba(244,201,93,0.52)`,progressFill:`#f4c95d`,volumeFill:`#39ff88`,progressRest:`rgba(57,255,136,0.18)`,cardBg:`linear-gradient(135deg, rgba(57,255,136,0.13), rgba(244,201,93,0.06)), #08130d`,cardBorder:`1px solid rgba(244,201,93,0.28)`,avatarBg:`linear-gradient(135deg, #5dff9a 0%, #19b862 46%, #07522d 76%, #f4c95d 170%)`,titleShadow:`0 0 18px rgba(57,255,136,0.58), 0 0 42px rgba(244,201,93,0.25), 0 4px 24px rgba(0,0,0,0.92)`}:{accent:`#1db954`,accent2:`#136f38`,gold:`#8e96a3`,softBg:`rgba(29,185,84,0.18)`,borderColor:`rgba(29,185,84,0.45)`,progressFill:`#ffffff`,volumeFill:`#1db954`,progressRest:`#2b2f3a`,cardBg:`#141821`,cardBorder:`1px solid #202636`,avatarBg:`linear-gradient(135deg, #1db954, #136f38)`,titleShadow:`0 0 18px rgba(29,185,84,0.38), 0 0 42px rgba(0,0,0,0.45)`}},Ur=[{id:`default`,name:`Königliche AI Songs`,subtitle:`Klassischer Modus`,swatches:[`#1db954`,`#136f38`,`#ffffff`]},{id:`mcberry`,name:`Unterwelt`,subtitle:`Rot, Gold & Schatten`,swatches:[`#ff1738`,`#6b0010`,`#d4af37`]},{id:`berrydeadly`,name:`Neo City Lights`,subtitle:`Neon, Pink & Violett`,swatches:[`#ff4dd2`,`#b84dff`,`#ff9be8`]},{id:`aurora`,name:`Aurora`,subtitle:`Violetter Drift, Energiefluss & 180 BPM`,swatches:[`#f2e7ff`,`#c99bff`,`#5d2eff`],lockedUntilAurora:!0},{id:`herrazul`,name:`Blaue Ordnung`,subtitle:`Rathaus, Kontrolle & Neo-City-Nacht`,swatches:[`#d9ecff`,`#2d7dff`,`#03142f`]},{id:`defqon`,name:`Dragon Core`,subtitle:`Rot, Schwarz, Tribal & Mainstage-Drache`,swatches:[`#ff1a1a`,`#050505`,`#ffffff`],lockedUntilDefqon:!0},{id:`mafia100`,name:`Königliche Mafia`,subtitle:`100. Song · Smaragd, Gold & Familienmacht`,swatches:[`#39ff88`,`#07522d`,`#f4c95d`],lockedUntilMafia100:!0}],Wr=({artist:e,fontSize:t=`14px`,color:n=`#a0a0a0`,berryMode:r=!1,openArtist:i})=>{let a=Ir(r),o=a===`mcberry`?`#ff1738`:a===`berrydeadly`?`#ff4dd2`:a===`aurora`?`#c99bff`:a===`herrazul`?`#8fc5ff`:`#ffffff`,s=a===`mcberry`?`rgba(255,23,56,0.13)`:a===`berrydeadly`?`rgba(255,77,210,0.12)`:a===`aurora`?`rgba(201,155,255,0.13)`:a===`herrazul`?`rgba(72,150,255,0.13)`:`rgba(255,255,255,0.08)`,c=a===`mcberry`?`rgba(212,175,55,0.35)`:a===`berrydeadly`?`rgba(255,77,210,0.28)`:a===`aurora`?`rgba(205,164,255,0.34)`:a===`herrazul`?`rgba(120,185,255,0.36)`:`rgba(255,255,255,0.12)`,l=wr(e);return l.length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
          .artist-link-pill:hover,
          .artist-link-pill:focus-visible {
            color: var(--artist-link-hover-color) !important;
            background: var(--artist-link-hover-bg) !important;
            border-color: var(--artist-link-hover-border) !important;
            text-decoration: underline !important;
          }
        `}),l.map((e,r)=>(0,U.jsxs)(y.Fragment,{children:[(0,U.jsx)(`button`,{type:`button`,className:`artist-link-pill`,onClick:t=>{t.stopPropagation(),i(e)},onMouseDown:e=>e.stopPropagation(),style:{"--artist-link-hover-color":o,"--artist-link-hover-bg":s,"--artist-link-hover-border":c,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,boxSizing:`border-box`,minHeight:`28px`,background:`transparent`,border:`1px solid transparent`,borderRadius:`999px`,padding:`4px 9px`,margin:`0`,color:n,fontSize:t,fontWeight:700,fontFamily:`inherit`,cursor:`pointer`,textDecoration:`none`,transition:`color 0.15s ease, background 0.15s ease, border-color 0.15s ease`,position:`relative`,zIndex:2,pointerEvents:`auto`},children:e}),r<l.length-1&&(0,U.jsx)(`span`,{style:{color:n,fontSize:t},children:`, `})]},`${e}-${r}`))]}):(0,U.jsx)(`span`,{style:{color:n,fontSize:t},children:`Unknown Artist`})},Gr=({isMobile:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        @keyframes auroraEnergyFlow {
  0% {
    transform: translate3d(-8%, -135vh, 0) rotate(-17deg) scaleY(0.88);
    opacity: 0;
  }
  9% {
    opacity: 0;
  }
  18% {
    opacity: 0.72;
  }
  72% {
    opacity: 0.72;
  }
  86% {
    opacity: 0;
  }
  100% {
    transform: translate3d(8%, 135vh, 0) rotate(-17deg) scaleY(1.08);
    opacity: 0;
  }
}

@keyframes auroraEnergyFlowReverse {
  0% {
    transform: translate3d(10%, -140vh, 0) rotate(13deg) scaleY(0.82);
    opacity: 0;
  }
  12% {
    opacity: 0;
  }
  22% {
    opacity: 0.54;
  }
  68% {
    opacity: 0.54;
  }
  84% {
    opacity: 0;
  }
  100% {
    transform: translate3d(-10%, 140vh, 0) rotate(13deg) scaleY(1.04);
    opacity: 0;
  }
}

        @keyframes auroraPulseCore {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.34;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 0.68;
          }
        }

        @keyframes auroraScannerDrift {
          0% {
            background-position: 0 0, 0 0;
            opacity: 0.14;
          }
          50% {
            opacity: 0.24;
          }
          100% {
            background-position: 180px 220px, -220px 160px;
            opacity: 0.14;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-energy-layer * {
            animation: none !important;
          }
        }
      `}),(0,U.jsxs)(`div`,{className:`aurora-energy-layer`,"aria-hidden":`true`,style:{position:`fixed`,inset:0,pointerEvents:`none`,zIndex:0,overflow:`hidden`,opacity:.9},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`linear-gradient(rgba(201,155,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(201,155,255,0.08) 1px, transparent 1px)`,backgroundSize:`86px 86px`,maskImage:`radial-gradient(circle at 50% 42%, black 0%, transparent 68%)`,animation:`auroraScannerDrift 16s linear infinite`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`38%`,width:e?`380px`:`680px`,height:e?`380px`:`680px`,borderRadius:`999px`,transform:`translate(-50%, -50%)`,background:`radial-gradient(circle, rgba(242,231,255,0.28) 0%, rgba(184,118,255,0.18) 26%, rgba(93,46,255,0.08) 48%, transparent 70%)`,filter:`blur(8px)`,animation:`auroraPulseCore 5.2s ease-in-out infinite`,mixBlendMode:`screen`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`-28vw`,top:`-20vh`,width:`156vw`,height:e?`130px`:`190px`,background:`linear-gradient(90deg, transparent 0%, rgba(113,60,255,0.08) 18%, rgba(246,234,255,0.56) 48%, rgba(188,125,255,0.42) 60%, transparent 100%)`,filter:`blur(18px)`,mixBlendMode:`screen`,animation:`auroraEnergyFlow 13.5s linear infinite both`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`-24vw`,top:`-28vh`,width:`150vw`,height:e?`90px`:`130px`,background:`linear-gradient(90deg, transparent 0%, rgba(201,155,255,0.12) 28%, rgba(117,63,255,0.44) 52%, rgba(255,255,255,0.34) 64%, transparent 100%)`,filter:`blur(14px)`,mixBlendMode:`screen`,animation:`auroraEnergyFlowReverse 17s linear 4.5s infinite both`}})]})]}),Kr=({isMobile:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        @keyframes azulPortraitFlicker {
          0%, 68%, 100% {
            opacity: 0;
            transform: scale(1.04);
            filter: blur(7px) saturate(1.15);
          }
          72% {
            opacity: 0.16;
          }
          76% {
            opacity: 0.05;
          }
          80% {
            opacity: 0.22;
          }
          88% {
            opacity: 0.12;
          }
        }

        @keyframes azulEyeWatch {
          0%, 58%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleX(0.15) scaleY(0.04);
            filter: blur(10px);
          }
          64% {
            opacity: 0.22;
            transform: translate(-50%, -50%) scaleX(0.65) scaleY(0.18);
            filter: blur(5px);
          }
          70% {
            opacity: 0.72;
            transform: translate(-50%, -50%) scaleX(1) scaleY(1);
            filter: blur(0px);
          }
          82% {
            opacity: 0.62;
            transform: translate(-50%, -50%) scaleX(1.05) scaleY(0.92);
            filter: blur(1px);
          }
          90% {
            opacity: 0.18;
            transform: translate(-50%, -50%) scaleX(0.75) scaleY(0.12);
            filter: blur(6px);
          }
        }

        @keyframes azulGridDrift {
          0% {
            background-position: 0 0, 0 0;
            opacity: 0.12;
          }
          50% {
            opacity: 0.22;
          }
          100% {
            background-position: 160px 220px, -180px 140px;
            opacity: 0.12;
          }
        }

        @keyframes azulScanLine {
          0% {
            transform: translateY(-120vh);
            opacity: 0;
          }
          12% {
            opacity: 0.32;
          }
          70% {
            opacity: 0.18;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .herr-azul-layer * {
            animation: none !important;
          }
        }
      `}),(0,U.jsxs)(`div`,{className:`herr-azul-layer`,"aria-hidden":`true`,style:{position:`fixed`,inset:0,pointerEvents:`none`,zIndex:0,overflow:`hidden`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(circle at 50% 20%, rgba(72,150,255,0.20), transparent 34%), radial-gradient(circle at 78% 72%, rgba(0,63,145,0.20), transparent 38%), linear-gradient(180deg, rgba(1,6,18,0.95), rgba(2,9,24,0.98))`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`linear-gradient(rgba(72,150,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(72,150,255,0.08) 1px, transparent 1px)`,backgroundSize:`82px 82px`,maskImage:`radial-gradient(circle at 50% 44%, black 0%, transparent 72%)`,animation:`azulGridDrift 18s linear infinite`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:e?`-10%`:`-6%`,backgroundImage:`url(${W(`artists/Herr_Azul.png`)})`,backgroundSize:`cover`,backgroundPosition:`center`,opacity:0,mixBlendMode:`screen`,animation:`azulPortraitFlicker 16s ease-in-out infinite`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:0,top:0,width:`100%`,height:`160px`,background:`linear-gradient(180deg, transparent, rgba(120,185,255,0.20), transparent)`,filter:`blur(12px)`,animation:`azulScanLine 9s linear infinite`}}),(0,U.jsxs)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`38%`:`42%`,width:e?`220px`:`360px`,height:e?`115px`:`180px`,transform:`translate(-50%, -50%)`,opacity:0,animation:`azulEyeWatch 14s ease-in-out infinite 2s`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,borderRadius:`50%`,border:`2px solid rgba(170,215,255,0.72)`,background:`radial-gradient(circle at 50% 50%, rgba(217,236,255,0.95) 0%, rgba(45,125,255,0.62) 16%, rgba(4,18,48,0.72) 34%, rgba(1,6,18,0.10) 62%, transparent 72%)`,boxShadow:`0 0 28px rgba(72,150,255,0.55), inset 0 0 34px rgba(217,236,255,0.20)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`50%`,width:e?`42px`:`64px`,height:e?`42px`:`64px`,transform:`translate(-50%, -50%)`,borderRadius:`999px`,background:`radial-gradient(circle, #d9ecff 0%, #2d7dff 32%, #020816 68%)`,boxShadow:`0 0 30px rgba(120,185,255,0.95)`}})]})]})]}),qr=({isMobile:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        @keyframes defqonDragonPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.96);
            opacity: 0.42;
            filter: drop-shadow(0 0 18px rgba(255,0,0,0.42));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            opacity: 0.78;
            filter: drop-shadow(0 0 34px rgba(255,0,0,0.78));
          }
        }

      @keyframes defqonTribalDrift {
  0% {
    background-position: 0 -160px;
    opacity: 0;
  }

  10% {
    opacity: 0.22;
  }

  45% {
    opacity: 0.38;
  }

  78% {
    opacity: 0.28;
  }

  90% {
    opacity: 0;
  }

  100% {
    background-position: 0 220px;
    opacity: 0;
  }
}

        @keyframes defqonFlameRise {
          0% {
            transform: translateY(80vh) scaleY(0.9);
            opacity: 0;
          }
          20% {
            opacity: 0.42;
          }
          75% {
            opacity: 0.28;
          }
          100% {
            transform: translateY(-120vh) scaleY(1.15);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .defqon-dragon-layer * {
            animation: none !important;
          }
        }
      `}),(0,U.jsxs)(`div`,{className:`defqon-dragon-layer`,"aria-hidden":`true`,style:{position:`fixed`,inset:0,pointerEvents:`none`,zIndex:0,overflow:`hidden`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(circle at 50% 10%, rgba(255,20,20,0.30), transparent 34%), radial-gradient(circle at 50% 85%, rgba(255,0,0,0.24), transparent 38%), linear-gradient(180deg, #080000 0%, #050505 52%, #120000 100%)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(255,0,0,0.18) 25%, transparent 25%)`,backgroundSize:`54px 54px`,animation:`defqonTribalDrift 12s linear infinite`,maskImage:`linear-gradient(90deg, black 0%, transparent 24%, transparent 76%, black 100%)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`38%`:`42%`,width:e?`440px`:`760px`,height:e?`300px`:`500px`,transform:`translate(-50%, -50%)`,animation:`defqonDragonPulse 4.8s ease-in-out infinite`,opacity:.7},children:(0,U.jsx)(`img`,{src:W(`covers/Defqon.1.png`),alt:``,style:{width:`100%`,height:`100%`,objectFit:`contain`,opacity:.78,filter:`drop-shadow(0 0 22px rgba(107, 0, 0, 0.75)) drop-shadow(0 0 46px rgba(78, 2, 2, 0.38))`}})}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`-12vw`,bottom:`-20vh`,width:`124vw`,height:`220px`,background:`linear-gradient(90deg, transparent, rgba(255,0,0,0.38), rgba(255,255,255,0.18), rgba(255,0,0,0.38), transparent)`,filter:`blur(24px)`,animation:`defqonFlameRise 7.5s linear infinite`}})]})]}),Jr=({isMobile:e})=>{let t=e?16:34;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
          @keyframes mafiaCoverBreath {
            0%, 100% {
              transform: translate(-50%, -50%) scale(0.96);
              opacity: 0.15;
              filter: saturate(1.05) contrast(1.04);
            }

            50% {
              transform: translate(-50%, -50%) scale(1.04);
              opacity: 0.27;
              filter: saturate(1.28) contrast(1.10);
            }
          }

          @keyframes mafiaHaloSpin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes mafiaHaloSpinReverse {
            from {
              transform: translate(-50%, -50%) rotate(360deg);
            }

            to {
              transform: translate(-50%, -50%) rotate(0deg);
            }
          }

          @keyframes mafiaBeamSweep {
            0%, 100% {
              background-position: -180vw 0;
              opacity: 0;
            }

            18% {
              opacity: 0.15;
            }

            48% {
              opacity: 0.62;
            }

            78% {
              opacity: 0.15;
            }

            100% {
              background-position: 180vw 0;
              opacity: 0;
            }
          }

          @keyframes mafiaSparkRise {
            0% {
              transform: translate3d(0, 0, 0) scale(0.55);
              opacity: 0;
            }

            12% {
              opacity: 0.95;
            }

            72% {
              opacity: 0.72;
            }

            100% {
              transform: translate3d(0, -125vh, 0) scale(1.35);
              opacity: 0;
            }
          }

          @keyframes mafiaShockwave {
            0% {
              transform: translate(-50%, -50%) scale(0.55);
              opacity: 0;
            }

            14% {
              opacity: 0.52;
            }

            100% {
              transform: translate(-50%, -50%) scale(1.55);
              opacity: 0;
            }
          }

          @keyframes mafiaGridPulse {
            0%, 100% {
              background-position: 0 0, 0 0;
              opacity: 0.10;
            }

            50% {
              background-position: 90px 130px, -120px 80px;
              opacity: 0.22;
            }
          }

          @keyframes mafiaHeroSweep {
            0% {
              transform: translateX(-145%) skewX(-18deg);
              opacity: 0;
            }

            18% {
              opacity: 0.15;
            }

            48% {
              opacity: 0.72;
            }

            82% {
              opacity: 0.12;
            }

            100% {
              transform: translateX(245%) skewX(-18deg);
              opacity: 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .mafia-hundred-layer * {
              animation: none !important;
            }
          }
        `}),(0,U.jsxs)(`div`,{className:`mafia-hundred-layer`,"aria-hidden":`true`,style:{position:`fixed`,inset:0,pointerEvents:`none`,zIndex:0,overflow:`hidden`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(circle at 50% 14%, rgba(57,255,136,0.30), transparent 31%), radial-gradient(circle at 18% 74%, rgba(11,107,59,0.28), transparent 38%), radial-gradient(circle at 84% 66%, rgba(244,201,93,0.12), transparent 34%), linear-gradient(180deg, #010805 0%, #03170d 46%, #010503 100%)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`linear-gradient(rgba(57,255,136,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(244,201,93,0.07) 1px, transparent 1px)`,backgroundSize:e?`58px 58px`:`92px 92px`,maskImage:`radial-gradient(circle at 50% 42%, black 0%, transparent 72%)`,WebkitMaskImage:`radial-gradient(circle at 50% 42%, black 0%, transparent 72%)`,animation:`mafiaGridPulse 12s ease-in-out infinite`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`34%`:`39%`,width:e?`720px`:`1480px`,height:e?`720px`:`1480px`,transform:`translate(-50%, -50%)`,animation:`mafiaCoverBreath 7s ease-in-out infinite`},children:(0,U.jsx)(`img`,{src:W(`covers/Königliche_Mafia.png`),alt:``,style:{width:`100%`,height:`100%`,objectFit:`contain`,opacity:.92,filter:`drop-shadow(0 0 34px rgba(57,255,136,0.34)) drop-shadow(0 0 70px rgba(244,201,93,0.18))`,maskImage:`radial-gradient(circle at center, black 0%, rgba(0,0,0,0.92) 42%, transparent 76%)`,WebkitMaskImage:`radial-gradient(circle at center, black 0%, rgba(0,0,0,0.92) 42%, transparent 76%)`}})}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`36%`:`41%`,width:e?`520px`:`980px`,height:e?`520px`:`980px`,borderRadius:`999px`,border:`1px solid rgba(244,201,93,0.28)`,boxShadow:`0 0 42px rgba(57,255,136,0.18), inset 0 0 54px rgba(244,201,93,0.08)`,animation:`mafiaHaloSpin 22s linear infinite`},children:(0,U.jsx)(`div`,{style:{position:`absolute`,inset:`8%`,borderRadius:`999px`,border:`2px dashed rgba(57,255,136,0.24)`}})}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`36%`:`41%`,width:e?`390px`:`740px`,height:e?`390px`:`740px`,borderRadius:`999px`,border:`1px solid rgba(57,255,136,0.24)`,animation:`mafiaHaloSpinReverse 15s linear infinite`}}),[0,1,2].map(t=>(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:e?`36%`:`41%`,width:e?`340px`:`620px`,height:e?`340px`:`620px`,borderRadius:`999px`,border:t%2==0?`2px solid rgba(57,255,136,0.28)`:`1px solid rgba(244,201,93,0.24)`,animation:`mafiaShockwave 5.4s ease-out ${t*1.8}s infinite`}},t)),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`-35vw`,top:`23vh`,width:`170vw`,height:e?`74px`:`120px`,transform:`rotate(-13deg)`,background:`linear-gradient(90deg, transparent 0%, transparent 38%, rgba(57,255,136,0.05) 44%, rgba(244,201,93,0.60) 50%, rgba(57,255,136,0.16) 56%, transparent 62%, transparent 100%)`,backgroundSize:`220vw 100%`,filter:`blur(12px)`,mixBlendMode:`screen`,animation:`mafiaBeamSweep 10s ease-in-out infinite`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`-35vw`,top:`62vh`,width:`170vw`,height:e?`54px`:`92px`,transform:`rotate(11deg)`,background:`linear-gradient(90deg, transparent 0%, transparent 40%, rgba(244,201,93,0.04) 45%, rgba(57,255,136,0.52) 50%, rgba(244,201,93,0.18) 56%, transparent 62%, transparent 100%)`,backgroundSize:`220vw 100%`,filter:`blur(16px)`,mixBlendMode:`screen`,animation:`mafiaBeamSweep 13s ease-in-out 2.2s infinite`}}),Array.from({length:t}).map((e,t)=>{let n=2+t%4,r=(t*37+11)%100,i=7+t%7*.9,a=-(t*.73%8);return(0,U.jsx)(`div`,{style:{position:`absolute`,left:`${r}%`,bottom:`${-30-t*17%150}px`,width:`${n}px`,height:`${n*5}px`,borderRadius:`999px`,background:t%3==0?`linear-gradient(180deg, #fff7cf, #f4c95d, transparent)`:`linear-gradient(180deg, #d9ffe8, #39ff88, transparent)`,boxShadow:t%3==0?`0 0 12px rgba(244,201,93,0.95)`:`0 0 12px rgba(57,255,136,0.85)`,animation:`mafiaSparkRise ${i}s linear ${a}s infinite`}},t)}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(circle at center, transparent 32%, rgba(0,0,0,0.22) 68%, rgba(0,0,0,0.82) 100%)`}})]})]})};function Yr(){let[e,t]=(0,y.useState)(`home`),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)([]),[o,s]=(0,y.useState)([]),[c,l]=(0,y.useState)(null),[u,d]=(0,y.useState)(null),[f,p]=(0,y.useState)(null),[m,h]=(0,y.useState)(`overview`),[g,_]=(0,y.useState)(``),[v,b]=(0,y.useState)(!1),[x,S]=(0,y.useState)(!1),[C,w]=(0,y.useState)(!1),[T,E]=(0,y.useState)(null),[ee,te]=(0,y.useState)(!1),[ne,re]=(0,y.useState)(!1),[ie,ae]=(0,y.useState)(!1),[oe,se]=(0,y.useState)(0),[ce,D]=(0,y.useState)(0),[O,le]=(0,y.useState)(0),[ue,k]=(0,y.useState)(``),[A,de]=(0,y.useState)(1),[j,fe]=(0,y.useState)(1),[me,he]=(0,y.useState)(!1),[M,ge]=(0,y.useState)(!1),[_e,ve]=(0,y.useState)(``),[ye,be]=(0,y.useState)(`off`),[xe,Se]=(0,y.useState)(!1),[Ce,we]=(0,y.useState)(!1),[Te,Ee]=(0,y.useState)(null),[ke,Ae]=(0,y.useState)(1),[je,Me]=(0,y.useState)(``),[Ne,Pe]=(0,y.useState)(``),[Ie,Le]=(0,y.useState)(!1),[Re,ze]=(0,y.useState)(`neoCity`),[Be,Ve]=(0,y.useState)(!1),[He,Ue]=(0,y.useState)(Date.now()),[We,Ge]=(0,y.useState)(``),[Ke,qe]=(0,y.useState)(``),[Je,Ye]=(0,y.useState)(!1),[Xe,N]=(0,y.useState)(``),[Ze,P]=(0,y.useState)(``),[Qe,$e]=(0,y.useState)(!1),[et,tt]=(0,y.useState)(!1),[nt,rt]=(0,y.useState)(!1),[it,at]=(0,y.useState)(!1),[ot,st]=(0,y.useState)(0),[ct,lt]=(0,y.useState)(``),[ut,dt]=(0,y.useState)(0),ft=(0,y.useRef)(null),pt=(0,y.useRef)(null),mt=(0,y.useRef)(null),[ht,gt]=(0,y.useState)(kr),[_t,F]=(0,y.useState)(null),[vt,yt]=(0,y.useState)(!1),[bt,xt]=(0,y.useState)(null),[St,Ct]=(0,y.useState)(``),[wt,Et]=(0,y.useState)(!1),[Dt,Ot]=(0,y.useState)(!0),[kt,At]=(0,y.useState)(!0),[jt,Mt]=(0,y.useState)(!1),[Nt,Pt]=(0,y.useState)(()=>{let e=localStorage.getItem(`favoriteSongs`);return e?JSON.parse(e):[]});(0,y.useEffect)(()=>{localStorage.setItem(`favoriteSongs`,JSON.stringify(Nt))},[Nt]);let Ft=e=>{Pt(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},It=e=>Nt.includes(e),[Lt,Rt]=(0,y.useState)(null),zt=(0,y.useRef)(null),Bt=(0,y.useMemo)(()=>({id:`favorites`,name:`❤️ Favoriten`,cover:null,songIds:Nt,createdAt:`2026-07-13T00:00:00.000Z`,locked:!0,isFavorites:!0}),[Nt]),Vt=(0,y.useMemo)(()=>[Bt,...ht.filter(e=>e.id!==`favorites`&&e.id!==`favourites`)],[Bt,ht]),Ht=(e,t)=>{e.stopPropagation(),yr(t)&&(Ft(t.id),Rt(t.id),window.clearTimeout(zt.current),zt.current=window.setTimeout(()=>{Rt(e=>e===t.id?null:e)},220))};(0,y.useEffect)(()=>()=>{window.clearTimeout(zt.current)},[]),(0,y.useEffect)(()=>{_t?.id===`favorites`&&F(Bt)},[Bt,_t?.id]);let[Ut,Wt]=(0,y.useState)(!1),[Gt,Kt]=(0,y.useState)(!1),[qt,Jt]=(0,y.useState)(0),[Yt,Xt]=(0,y.useState)(0),[Zt,Qt]=(0,y.useState)(!1),[$t,en]=(0,y.useState)(!1),[tn,nn]=(0,y.useState)(null),[rn,an]=(0,y.useState)(0),I=(0,y.useRef)(null),on=(0,y.useRef)(null),sn=(0,y.useRef)(null),cn=(0,y.useRef)(null),ln=(0,y.useRef)(0),un=(0,y.useRef)(0),dn=(0,y.useRef)(!1),[fn,pn]=(0,y.useState)(!1),[mn,hn]=(0,y.useState)([]),[gn,_n]=(0,y.useState)(!1),[vn,yn]=(0,y.useState)(!1),[bn,xn]=(0,y.useState)(!1),[Cn,wn]=(0,y.useState)(!1),[Tn,En]=(0,y.useState)(()=>localStorage.getItem(`koenigliche-aurora-theme-unlocked`)===`true`),[Dn,On]=(0,y.useState)(()=>localStorage.getItem(`koenigliche-defqon-theme-unlocked`)===`true`),[kn,An]=(0,y.useState)(()=>localStorage.getItem(`koenigliche-mafia100-theme-unlocked`)===`true`),[Mn,Nn]=(0,y.useState)(`default`),Pn=Cn?`defqon`:vn?`mcberry`:gn?`berrydeadly`:bn?`herrazul`:`default`,L=Pn===`default`?Mn:Pn,R=Hr(L),Fn=W(`songs/Speedy_Pass.mp3`),Ln=`Motte sucht schon den schnellsten Weg durch den Cache.(Der Mottemaker prüft die Maschinen im Hintergrund.(Alexis sagt: Wird scho — die Songs kommen gleich.(Die Coins werden gezählt, aber diesmal für Ladezeit.(Der Boarding Pass wird digital gestempelt.(Crystal Moth leuchtet schon im Browser-Cache.(Der Printer läuft nicht die ganze Nacht — hoffentlich.(Traumatica Nights wartet kurz hinter dem Ladebalken.(Mottensohn fliegt direkt Richtung Speedy Pass.(Königliche A.I. Songs werden für den Schnellzug vorbereitet.(Motte fragt, ob das hier eigentlich ein Plan war.(Der Skateboard-Chemistry-Test läuft im Hintergrund.(Competitive Advantage wird gerade vorgeladen.(Operation Mottemaker bereitet den nächsten Schritt vor.(Escape Velocity nimmt schon Geschwindigkeit auf.(Mottemaker Industries fährt die Server hoch.(Empire on Fire wärmt schon mal die Leitung vor.(Schedule II sortiert die nächsten Dateien.(Alexis Brother wartet bereits in der Warteschlange.(Die Bußhymne lädt mit maximaler Reue.(Ben sagt: Das geht auf mich — auch die Ladezeit.(Merlin ist gleich soweit. Wirklich. Gleich.(Kochstream Ambience köchelt im Cache.(Fleischwurst wird diskret vorbereitet.(PrinzMotte unser Held fliegt voraus.(There are heroes — und manche preladen Songs.(Mack kontrolliert kurz die Achterbahn der Daten.(Der Deal wird im Hintergrund ausgehandelt.(Nu hör ma zu… die Songs kommen gleich.(Yeah yeah, der Balken bewegt sich.(Motte Cooking Stream heizt den Cache vor.(Der Printer läuft diesmal nur bis 100 Prozent.(Mr. Moneymaker zahlt für die schnelle Leitung.(Ein wunderschönes Haus wird kurz zwischengespeichert.(Mr. Moneymaker Land öffnet bald die Tore.(Die Rückfahrt dauert zwei Stunden, der Preload hoffentlich nicht.(Il Ritorno del Don Motte kehrt aus dem Cache zurück.(Hymne an Alexis wird ehrwürdig vorbereitet.(Alexis, Mi Hermano lädt mit dramatischem Gefühl.(Motte kommt bitte bald zurück — aber erst nach dem Preload.(Die Warteschlange wird einmal königlich sortiert.(Die Covers machen sich schon bereit.(Der Player zieht sich die Tracks schon mal ran.(Ein paar Megabytes machen gerade Frühsport.(Der Browser tut so, als hätte er alles im Griff.(Die Songs ziehen gerade in den Cache ein.(Der Cache wird königlich befüllt.(Die Ladezeit wird vom Speedy Pass überholt.(Bitte nicht aussteigen, der Schnellzug lädt noch.(Der Balken hat seinen eigenen Drop vorbereitet.(Motte rennt mit Warnweste durch den Serverraum.(Alexis nickt vorsichtig und hofft, dass nichts explodiert.(Merlin sagt: Ich bin gleich soweit — diesmal wirklich.(Der Mottemaker drückt sehr wichtige Knöpfe.(Die Festplatte hört kurz Hardstyle und arbeitet schneller.(Ein kleiner Mottensohn hält den Download zusammen.(Der Cache bekommt heute königliche Behandlung.(Die Songs werden einmal durch den Express-Eingang geschoben.(Der Speedy Pass überspringt die normale Warteschlange.(Der Browser sucht noch seinen Mut zusammen.(Motte hat den Ladebalken persönlich genehmigt.(Die Daten fliegen schneller als Motte ins Licht.(Der Bass wird schon mal vorgeladen.(Die Kicks stehen bereits an der Startlinie.(Ein Drop wartet hinter 100 Prozent.(Die Playlist macht sich warm.(Der Player trinkt kurz einen Energy Drink.(Das Königreich lädt seine Hymnen vor.(Die Songs ziehen ihre besten Dateinamen an.(Der Cache sagt: Joa, passt noch rein.(Traumatica Nights öffnet langsam die Tore.(Counter Dawn zählt die letzten Prozent runter.(The Beginning beginnt gleich schneller.(The One Ahead ist schon einen Schritt voraus.(Motte and the Death Drop wartet auf den Bass.(Erdbeere und die Wilde Maus drehen eine schnelle Runde.(After Midnight Queue kennt sich mit Warten aus.(Clown House #1 lädt mit verdächtigem Lächeln.(The Last Guest ist noch nicht fertig mit Laden.(Waiting for Reopening fühlt diesen Moment sehr.(Körnchenkreis rollt langsam durch den Cache.(Die Selbsthilfegruppe wartet geduldig bei 42 Prozent.(Zombie-Hamster klopft von innen gegen den Ladebalken.(Ein Meteor ist unterwegs, aber der Preload ist schneller.(Die Körnchen wurden erfolgreich sortiert.(Der Hamster dreht das Laufrad für mehr Downloadspeed.(Das Laufrad-Portal wird kurz initialisiert.(Motte beobachtet den Fortschritt mit sehr viel Ernst.(Die Songs machen kurz Soundcheck im Hintergrund.(Der Schnellzug fährt ohne Zwischenhalt bis 100 Prozent.(EPMC wartet schon am Eingang.(The Park Awaits — aber erst lädt der Cache.(Die Rutsche hat heute Vorrang beim Preload.(Der Pokal wird kurz poliert.(175 Counts werden nicht vorgeladen, keine Sorge.(EuroParksMC prüft die Verbindung.(Our Place bleibt brav draußen, bis es gebraucht wird.(Der Freizeitparkzauber lädt ohne Fast-Lane-Aufpreis.(Die Warteschlange tut heute nur so als wäre sie lang.(Bitte bleiben Sie angeschnallt, der Cache beschleunigt.(Der SongAsset-Express fährt los.(Die GitHub-Release-Strecke wird abgefahren.(Die MP3s steigen nacheinander ein.(Jede Datei bekommt kurz ihren eigenen VIP-Eingang.(Der Browser verteilt imaginäre Speedy-Pässe.(Der Ladebalken macht gleich seinen Final Drop.(Die letzten Prozent kommen dramatisch langsam, wie immer.(Motte hat 99 Prozent gesehen und wird nervös.(Bei 100 Prozent gibt es keinen Applaus, aber schnellere Songs.(Speedy Pass fast fertig — bitte nicht den Tab beleidigen.`.split(`(`),Rn=Ur.filter(e=>!(e.lockedUntilAurora&&!Tn||e.lockedUntilDefqon&&!Dn||e.lockedUntilMafia100&&!kn)),zn=Rn.find(e=>e.id===Mn)||Rn[0];(0,y.useEffect)(()=>{let e=localStorage.getItem(`koenigliche-site-theme`),t=localStorage.getItem(`koenigliche-aurora-theme-unlocked`)===`true`,n=localStorage.getItem(`koenigliche-defqon-theme-unlocked`)===`true`,r=localStorage.getItem(`koenigliche-mafia100-theme-unlocked`)===`true`;[`default`,`mcberry`,`berrydeadly`,`aurora`,`herrazul`,`defqon`,`mafia100`].includes(e)&&(e!==`aurora`||t)&&(e!==`defqon`||n)&&(e!==`mafia100`||r)&&Nn(e)},[]),(0,y.useEffect)(()=>{if(Mn===`aurora`&&!Tn){Nn(`default`);return}if(Mn===`defqon`&&!Dn){Nn(`default`);return}if(Mn===`mafia100`&&!kn){Nn(`default`);return}localStorage.setItem(`koenigliche-site-theme`,Mn)},[Mn,Tn,Dn,kn]);let[Vn,Hn]=(0,y.useState)(!1),[Un,Wn]=(0,y.useState)(1),[Gn,Kn]=(0,y.useState)({albumTitle:``,artist:``,releaseDate:``,trackCount:10,albumCoverFile:``}),[qn,Yn]=(0,y.useState)([]);(0,y.useEffect)(()=>{let e=()=>{l(null)};return window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`scroll`,e,!0)}},[]),(0,y.useEffect)(()=>()=>{window.clearInterval(pt.current),window.clearInterval(mt.current),window.clearInterval(ir.current)},[]);let[z,B]=(0,y.useState)(window.innerWidth<=768),Xn=(0,y.useRef)(null),V=(0,y.useRef)(null),er=(0,y.useRef)(null),tr=(0,y.useRef)(!1),rr=(0,y.useRef)(1),ir=(0,y.useRef)(null),or={marginBottom:`18px`,position:`relative`,zIndex:3},H={color:L===`herrazul`?`#8fc5ff`:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`,fontWeight:800,textShadow:L===`herrazul`?`0 0 14px rgba(72,150,255,0.75), 0 2px 10px rgba(0,0,0,0.85)`:`none`},sr={margin:0,marginBottom:`16px`,color:L===`herrazul`?`#f4f9ff`:`white`,textShadow:L===`herrazul`?`0 0 18px rgba(72,150,255,0.78), 0 3px 18px rgba(0,0,0,0.95)`:R.titleShadow},cr=e=>{if(!e)return 0;let[t,n]=e.split(`:`).map(Number);return t*60+n},ur=e=>e.timelineDate||e.releaseDate,mr=(0,y.useMemo)(()=>[...Zn,...nr,Dr,Or],[]),vr=(0,y.useMemo)(()=>{let e=mr.filter(e=>{let t=String(e.hiddenTag||``).toLowerCase(),n=wr(e.artist).some(e=>Nr.has(e.trim().toLowerCase()));return!(Mr.has(t)||n||e.radioOnly===!0||e.radioBlock===`extra2`)}).map(e=>String(e.id));return new Set(e)},[mr]),yr=e=>{if(!e||e.isRadioTrack===!0||e.radioOnly===!0||e.radioBlock===`extra2`)return!1;let t=String(e.hiddenTag||``).toLowerCase();return Mr.has(t)?!1:vr.has(String(e.id))},xr=(e=[])=>(Array.isArray(e)?e:[]).filter(e=>vr.has(String(e)));(0,y.useEffect)(()=>{Pt(e=>{let t=e.filter(e=>vr.has(String(e)));return t.length===e.length?e:t})},[vr]);let Sr=[{id:`Hamster-premiere`,albumTitle:`Körnchenkreis`,artist:`Erdbeerenfresser`,releaseAt:`2026-06-21T17:00:00+02:00`,trackCount:4,cover:W(`covers/Körnchenkreis.png`)}],Ar=(e,t=Date.now())=>t>=new Date(e.releaseAt).getTime(),jr=(e=Date.now())=>Sr.filter(t=>Ar(t,e)).map(e=>e.albumTitle),Ir=(0,y.useMemo)(()=>{let e=jr();return Zn.filter(t=>Sr.some(e=>e.albumTitle===t.album)&&!e.includes(t.album)?!1:t.hidden?Pn===`berrydeadly`?t.hiddenTag===`berrydeadly`:Pn===`mcberry`?t.hiddenTag===`mcberry`:Pn===`herrazul`?t.hiddenTag===`herrazul`:!1:!0)},[Pn]),Yr=(0,y.useMemo)(()=>nr.map(e=>({...e,releaseDate:e.releaseDate||(e.month?`${e.month.split(`/`)[1]}-${e.month.split(`/`)[0]}-01`:`1970-01-01`),isExtra:!0})),[]),ni=(0,y.useMemo)(()=>Ir,[Ir]),ri=(0,y.useMemo)(()=>Zn.filter(e=>!e.hidden).filter(e=>typeof e.id==`number`).sort((e,t)=>e.id-t.id),[]),ii=(0,y.useMemo)(()=>Zn.filter(e=>e.hidden&&e.hiddenTag===`jascha`),[]),ai=ht.some(e=>e.id===`hidden-jascha-playlist`),oi=(0,y.useMemo)(()=>Zn.filter(e=>e.hidden&&e.hiddenTag===`aurora`),[]),si=ht.some(e=>e.id===`hidden-aurora-playlist`);(0,y.useEffect)(()=>{!si||Tn||(En(!0),localStorage.setItem(`koenigliche-aurora-theme-unlocked`,`true`))},[si,Tn]);let ci=(0,y.useMemo)(()=>[...Ir,...Yr,...ai?ii:[],...si?oi:[]],[Ir,Yr,ai,ii,si,oi]),li=(0,y.useMemo)(()=>{let e=ue.trim().toLowerCase();return e?ni.filter(t=>t.title.toLowerCase().includes(e)||t.artist.toLowerCase().includes(e)||(t.album||``).toLowerCase().includes(e)||(t.type||``).toLowerCase().includes(e)):ni},[ue,ni]),ui=(0,y.useMemo)(()=>[...Ir].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)).slice(0,5),[Ir]),di=(0,y.useMemo)(()=>[...Ir].filter(e=>ur(e)&&e.file&&cr(e.duration)>0).sort((e,t)=>new Date(ur(e))-new Date(ur(t))),[Ir]),fi=(0,y.useMemo)(()=>{let e=new Map;di.forEach((t,n)=>{e.has(ur(t))||e.set(ur(t),{date:ur(t),firstIndex:n,songs:[]}),e.get(ur(t)).songs.push({...t,timelineIndex:n})});let t=[...e.values()].sort((e,t)=>new Date(e.date)-new Date(t.date));if(!t.length)return[];let n=new Date(t[0].date).getTime(),r=new Date(t[t.length-1].date).getTime(),i=Math.max(1,r-n);return t.map(e=>{let r=new Date(e.date).getTime();return{...e,position:t.length===1?50:4+(r-n)/i*88}})},[di]),pi=fi[0]?.date?new Date(fi[0].date).getFullYear():`2025`,mi=()=>{let e=Xn.current;dn.current=!!e&&!e.paused,e&&e.pause(),Wt(!0),Kt(!1),Xt(0),Qt(!1),en(!1),nn(null),Jt(Math.max(0,di.length-1))},hi=()=>{let e=I.current;e&&(e.pause(),e.currentTime=0,e.volume=1),window.clearInterval(sn.current),window.clearInterval(cn.current),ln.current=0,un.current=0,Wt(!1),Kt(!1),Xt(0),en(!1),nn(null),dn.current&&Xn.current&&Xn.current.play().catch(()=>{})},gi=e=>{let t=I.current;!t||!e?.file||(t.pause(),t.src=e.file,t.volume=0,t.load(),t.onloadedmetadata=()=>{let n=t.duration||cr(e.duration);t.currentTime=n>15?Math.max(0,n/2-15/2):0,t.play().catch(()=>{})})},_i=()=>{let e=I.current;e&&(window.clearInterval(sn.current),window.clearInterval(cn.current),e.pause(),e.src=W(`songs/Königliche A.I. Songs Release-Zeitstrahl.mp3`),e.currentTime=0,e.volume=0,e.load(),e.addEventListener(`canplay`,()=>{e.play().catch(()=>{}),cn.current=window.setInterval(()=>{if(!I.current){window.clearInterval(cn.current);return}I.current.volume=Math.min(1,I.current.volume+.05),I.current.volume>=1&&window.clearInterval(cn.current)},100)},{once:!0}))},vi=()=>{window.clearInterval(sn.current);let e=15e3,t=1800;un.current=Date.now(),sn.current=window.setInterval(()=>{let n=ln.current+(Date.now()-un.current);Xt(Math.min(100,n/e*100));let r=I.current;if(r){let i=Math.min(1,n/t),a=Math.min(1,(e-n)/t);r.volume=Math.max(0,Math.min(1,i,a))}if(n>=e){if(window.clearInterval(sn.current),I.current&&(I.current.pause(),I.current.volume=0),ln.current=0,un.current=0,qt>=di.length-1){Xt(100),Kt(!0),en(!0);return}Jt(e=>Math.min(e+1,di.length-1))}},100)},yi=()=>{Gt||(ln.current+=Date.now()-un.current,window.clearInterval(sn.current),I.current&&I.current.pause(),Kt(!0))},bi=()=>{Gt&&(Kt(!1),I.current&&I.current.play().catch(()=>{}),vi())},xi=()=>{Gt?bi():yi()},Si=e=>{let t=Math.max(0,Math.min(e,di.length-1));if(t===qt){xi();return}window.clearInterval(sn.current),I.current&&(I.current.pause(),I.current.currentTime=0,I.current.volume=0),ln.current=0,un.current=0,Qt(!0),en(!1),Kt(!1),Xt(0),Jt(t)},Ci=()=>{Si(qt-1)},wi=()=>{Si(qt+1)},Ti=()=>{window.clearInterval(sn.current),window.clearInterval(cn.current),I.current&&(I.current.pause(),I.current.currentTime=0,I.current.volume=0),ln.current=0,un.current=0,en(!1),Qt(!0),Kt(!1),Xt(0),Jt(0),nn(null),an(e=>e+1)};(0,y.useEffect)(()=>{if(!Ut||!Zt||$t||!di.length)return;let e=di[qt];return ln.current=0,un.current=0,Kt(!1),Xt(0),gi(e),vi(),()=>{window.clearInterval(sn.current)}},[Ut,Zt,$t,qt,di,rn]),(0,y.useEffect)(()=>{if(!(!Ut||!$t))return _i(),()=>{window.clearInterval(cn.current)}},[Ut,$t]),(0,y.useEffect)(()=>{if(!Ut||!di.length)return;Qt(!1),Jt(di.length-1);let e=window.setTimeout(()=>{Jt(0),Qt(!0)},1800);return()=>{window.clearTimeout(e)}},[Ut,di.length]);let Ei=(0,y.useMemo)(()=>{let e=new Map;return Ir.forEach(t=>{if(!t.album)return;e.has(t.album)||e.set(t.album,{id:t.album,title:t.album,artist:t.artist,cover:t.albumCover||t.cover,releaseDate:t.releaseDate,tracks:[]});let n=e.get(t.album);n.tracks.push(t),new Date(t.releaseDate)>new Date(n.releaseDate)&&(n.releaseDate=t.releaseDate)}),[...e.values()].map(e=>{let t=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));return{...e,releaseDate:t[0]?.releaseDate||e.releaseDate,isAlbum:e.tracks.length>1,releaseType:e.tracks.length>1?`Album`:`Single`,tracks:t}}).sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate))},[Ir]),Di=(0,y.useMemo)(()=>{let e=new Map;return ci.forEach(t=>{wr(t.artist).forEach(n=>{let r=Tr(n),i=Er[r];e.has(r)||e.set(r,{id:r,name:i?.name||n,bio:i?.bio||`No Bio found.`,image:i?.image||null,songs:[],releases:[],missingProfile:!i}),e.get(r).songs.push(t)})}),[...e.values()].map(e=>{let t=Ei.filter(t=>t.tracks.some(t=>wr(t.artist).some(t=>Tr(t)===e.id)));return{...e,songs:[...e.songs].sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate)),releases:t}}).sort((e,t)=>e.name.localeCompare(t.name))},[ci,Ei]),K=e=>{let t=e.reduce((e,t)=>e+cr(t.duration),0),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`},Oi={id:`NCR_EXTRA_INTRO`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Extra Songs Special`,duration:`00:34`,cover:W(`covers/Neo-City-Radio.png`),file:W(`radio/NCR_EXTRA_INTRO.m4a`),radioOnly:!0},ki={id:`NCR_EXTRA2_INTRO`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Radio Exclusive Special`,duration:`00:34`,cover:W(`covers/Neo-City-Radio.png`),file:W(`radio/NCR_EXTRA2_INTRO.m4a`),radioOnly:!0},Ai={id:`NCR_BACK_TO_PROGRAM`,type:`ncr-announcement`,title:`Neo City Radio`,artist:`Zurück zum normalen Programm`,duration:`00:26`,cover:W(`covers/Neo-City-Radio.png`),file:W(`radio/ncrBackToProgram.m4a`),radioOnly:!0},ji={id:`INTERVIEW_EATW`,type:`interview`,title:`Interview: Erdbeere Around the World`,artist:`Erdbeerenfresser & Motte`,duration:`10:00`,cover:W(`covers/Neo-City-Radio.png`),file:W(`radio/MotteInterview.mp3`),radioOnly:!0},Mi=(e=0)=>({id:`TIMED_JINGLE_${e}`,type:`timed-jingle`,title:`Neo City Radio`,artist:`Neo City Radio`,duration:`00:17`,jingleIndex:e,radioOnly:!0,cover:W(`covers/Neo-City-Radio.png`)}),Ni=[11,12,15,16,17,25,26,27,31,33,34,35,49,50,84,85,86,87,88,97,98],Pi=()=>Ir.filter(e=>!(e.hidden||cr(e.duration)<=0||Ni.includes(e.id))),Fi=()=>{let e=Ir.filter(e=>e.hidden||cr(e.duration)<=0?!1:Ni.includes(e.id)),t=ii.filter(e=>cr(e.duration)>0),n=new Map;return[...e,...t].forEach(e=>{n.set(e.id,e)}),[...n.values()]},Ii=()=>{let e=Ir.filter(e=>!e.hidden&&cr(e.duration)>0),t=nr.filter(e=>cr(e.duration)>0),n=ar.filter(e=>cr(e.duration)>0),r=[],i=0,a=e=>{r.push(e),i+=cr(e.duration)};a(Mi(0));let o=()=>{e.forEach((e,t)=>{e.album===`Erdbeere Around the World`&&(e.albumTrackNumber??e.trackNumber)===1&&r.push(ji),a(e);let n=t+1;if(n%10==0&&[dr,...pr(n/10),fr].forEach(a),n%5==0&&a(Mi(Math.floor(n/5))),n%29==0){let e=Math.floor(n/29)%lr.length;r.push(lr[e])}})};return o(),o(),t.length>0&&(r.push(Oi),r.push(...t.map(e=>({...e,radioOnly:!1,radioBlock:`extra`}))),r.push(Ai)),o(),o(),n.length>0&&(r.push(ki),r.push(...n.map(e=>({...e,radioOnly:!1,radioBlock:`extra2`}))),r.push(Ai)),r.filter(e=>cr(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`${e.id}-${t}`}))},Li=()=>{let e=Pi(),t=[],n=e=>{e&&t.push(e)};return n({...Mi(0),title:`Neo City Radio 2`,artist:`Du hörst Neo City Radio 2`,radioStation:`neoCity2`}),e.forEach((e,t)=>{n(e);let r=t+1;if(r%10==0){let e=_r(r/10);e.length>0&&[hr,...e,gr].forEach(n)}r%5==0&&n({...Mi(Math.floor(r/5)),title:`Neo City Radio 2`,artist:`Du hörst Neo City Radio 2`,radioStation:`neoCity2`})}),t.filter(e=>cr(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-2-${e.id}-${t}`,radioStation:`neoCity2`}))},Ri=()=>{let e=Fi(),t=[],n=e=>{e&&t.push(e)};return n({...Mi(0),title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`}),e.forEach((e,t)=>{n(e);let r=t+1;if(r%10==0){let e=_r(r/10);e.length>0&&[{...hr,title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`},...e.map(e=>({...e,radioStation:`neoCity3`})),{...gr,title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`}].forEach(n)}r%5==0&&n({...Mi(Math.floor(r/5)),title:`Neo City Radio 3`,artist:`Du hörst Neo City Radio 3`,radioStation:`neoCity3`})}),t.filter(e=>cr(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-3-${e.id}-${t}`,radioStation:`neoCity3`}))},zi=()=>{let e=kr.find(e=>e.id===`default-neo-city-phonk`);return e?e.songIds.map(e=>mr.find(t=>t.id===e)).filter(e=>e&&cr(e.duration)>0).map((e,t)=>({...e,radioIndex:t,radioKey:`neo-city-radio-4-${e.id}-${t}`,radioStation:`neoCity4`})):[]},Bi=(e=Re)=>e===`neoCity2`?Li():e===`neoCity3`?Ri():e===`neoCity4`?zi():Ii(),Vi=e=>Zn.filter(t=>t.album===e.albumTitle).sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).map(e=>({...e,radioOnly:!1,radioBlock:`album-premiere`})),Hi=()=>{let e=Sr[0];if(!e)return null;let t=Vi(e);if(!t.length)return null;let n=[{...e.introTrack,radioIndex:`album-premiere-intro`,radioKey:`album-premiere-intro`},...t.map((e,t)=>({...e,radioIndex:`album-premiere-track-${t}`,radioKey:`album-premiere-track-${t}`})),{...e.outroTrack,radioIndex:`album-premiere-outro`,radioKey:`album-premiere-outro`},{...Ai,radioIndex:`album-premiere-back`,radioKey:`album-premiere-back`}];return{startsAtMs:new Date(e.releaseAt).getTime(),durationSeconds:n.reduce((e,t)=>e+cr(t.duration),0),tracks:n}},Ui=(e,t,n)=>{let r=t;for(let t of e){let e=cr(t.duration);if(r<e)return{track:t,offset:r,trackStartTimeMs:n-r*1e3};r-=e}return{track:e[0],offset:0,trackStartTimeMs:n}},Wi=(e,t,n,r)=>{let i=t;for(let t of e){let e=cr(t.duration);if(i<e){let a=n-i*1e3;return a+e*1e3>r?null:{track:t,offset:i,trackStartTimeMs:a}}i-=e}return null},Gi=(()=>{if(!Ie||!n?.isRadioTrack)return null;let e=Bi(Re),t=e.findIndex(e=>e.radioKey===n.radioKey);if(t===-1)return null;let r=[`jingle`,`timed-jingle`,`ad`,`interview`,`ncr-announcement`,`premiere`,`premiere-standby`,`album-premiere-intro`,`album-premiere-outro`];for(let n=1;n<=e.length;n++){let i=e[(t+n)%e.length];if(!r.includes(i.type))return i}return null})(),Ki=e=>{if(e==null)return`--:--:--`;let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`},qi=(e,t=Date.now())=>{let n=Ii(),r=n.reduce((e,t)=>e+cr(t.duration),0);if(!n.length||r<=0)return null;let i=(Math.floor(t/1e3)%r+r)%r,a=0,o=[];return n.forEach(t=>{e.includes(t.id)&&o.push(a),a+=cr(t.duration)}),o.length?(o.find(e=>e>i)??o[0]+r)-i:null},Ji=()=>({nextExtra:qi([`NCR_EXTRA_INTRO`],He),nextExtra2:qi([`NCR_EXTRA2_INTRO`],He)}),Yi=(e=Re)=>{let t=Date.now(),n=Bi(e),r=n.reduce((e,t)=>e+cr(t.duration),0);if(!n.length||r<=0)return null;if(e===`neoCity2`||e===`neoCity3`||e===`neoCity4`)return Ui(n,(Math.floor(t/1e3)%r+r)%r,t);let i=Hi();if(!i)return Ui(n,(Math.floor(t/1e3)%r+r)%r,t);let a=i.startsAtMs,o=a+i.durationSeconds*1e3;if(t<a)return Wi(n,(r-Math.floor((a-t)/1e3)%r)%r,t,a)||Ui(i.tracks,0,a);if(t>=a&&t<o){let e=Math.floor((t-a)/1e3);return Ui(i.tracks,e,t)}return Ui(n,(Math.floor((t-o)/1e3)%r+r)%r,t)},Xi=(e=`neoCity`)=>{let t=Yi(e);t&&(ze(e),er.current=t.offset,Le(!0),a([]),s([]),d(null),F(null),r(br(t.track,t.trackStartTimeMs)))},Zi=()=>{Xi(`neoCity`)},Qi=()=>{Xi(`neoCity2`)},$i=()=>{Xi(`neoCity3`)},ea=()=>{Xi(`neoCity4`)};(0,y.useEffect)(()=>{if(!Ie||!n?.isRadioTrack||er.current===null||!Xn.current||!n.file)return;let e=er.current;er.current=null;let t=Xn.current;t.pause(),t.currentTime=0,t.load();let r=()=>{t.currentTime=e<1.25?0:e,t.play().catch(()=>{})};return t.addEventListener(`canplay`,r,{once:!0}),()=>{t.removeEventListener(`canplay`,r)}},[n,Ie]);let ta=(e,t={})=>{if(!e)return;Le(!1);let{fromHistory:i=!1,resetHistory:a=!1}=t;a?s([]):!i&&n&&s(e=>[...e,n]),r(e),l(null)},na=e=>{let t=ri.find(t=>String(t.id)===String(e));return t?`${t.id}. ${t.title} – ${t.artist}`:``},ra=`Art der Anfrage: Cover
Ausgewählter Song: ${na(je)}
Gewünschter Stil / Prompt: ${Ne}`,ia=`Art der Anfrage: Mashup
Song 1: ${na(We)}
Song 2: ${na(Ke)}`,aa=e=>{a([]),ta(e,{resetHistory:!0})},oa=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999));d(e),t(`albums`),a(r),ta(n,{resetHistory:!0})},sa=e=>{if(!e?.tracks?.length)return;let[n,...r]=[...e.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).sort(()=>Math.random()-.5);d(e),t(`albums`),a(r),ta(n,{resetHistory:!0})},ca=()=>{if(!ni.length)return;let[e,...t]=ni;a(t),ta(e,{resetHistory:!0})},la=()=>{if(!ni.length)return;let[e,...t]=[...ni].sort(()=>Math.random()-.5);a(t),ta(e,{resetHistory:!0})},ua=()=>{a([])},da=e=>{a(t=>[...t,e]),l(null)},fa=e=>{if(!yr(e)){l(null);return}xt(e),yt(!0),l(null)},pa=e=>{Ee(e),Ae(1),we(!0)},ma=()=>{we(!1),Ee(null),Ae(1),Me(``),Pe(``),Ge(``),qe(``)},ha=()=>{yt(!1),xt(null),Ct(``)},ga=()=>{if(!ii.length){P(`❌ Keine versteckten Jascha-Songs gefunden`);return}let e=ht.find(e=>e.id===`hidden-jascha-playlist`);if(e){F(e),t(`playlists`),Ye(!1),N(``),P(``);return}let n={id:`hidden-jascha-playlist`,name:`Jascha`,songIds:ii.map(e=>e.id),createdAt:new Date().toISOString()};gt(e=>[...e,n]),F(n),t(`playlists`),Ye(!1),N(``),P(``)},_a=()=>{if(!oi.length){P(`❌ Keine versteckten Aurora-Songs gefunden`);return}En(!0),localStorage.setItem(`koenigliche-aurora-theme-unlocked`,`true`),Nn(`aurora`);let e=ht.find(e=>e.id===`hidden-aurora-playlist`);if(e){F(e),t(`playlists`),Ye(!1),N(``),P(``);return}let n={id:`hidden-aurora-playlist`,cover:W(`covers/Aurora.png`),name:`Aurora`,songIds:oi.map(e=>e.id),createdAt:new Date().toISOString()};gt(e=>[...e,n]),F(n),t(`playlists`),Ye(!1),N(``),P(``)},va=()=>{wn(!0),yn(!1),_n(!1),xn(!1),On(!0),localStorage.setItem(`koenigliche-defqon-theme-unlocked`,`true`),Nn(`defqon`);let e=ht.find(e=>e.id===`hidden-defqon-playlist`),n=e||{id:`hidden-defqon-playlist`,cover:Or.cover,name:`Dragon Core`,songIds:[Or.id],createdAt:new Date().toISOString()};e||gt(e=>[...e,n]),d(null),p(null),F(n),k(``),t(`playlists`),Ye(!1),N(``),P(``),aa(Or)},ya=()=>{An(!0),localStorage.setItem(`koenigliche-mafia100-theme-unlocked`,`true`),_n(!1),yn(!1),xn(!1),wn(!1),Nn(`mafia100`),d(null),p(null),F(null),k(``),t(`home`),Ye(!1),N(``),P(``)},ba=()=>{Yn(Array.from({length:Gn.trackCount},(e,t)=>({trackNumber:t+1,title:``,duration:``,lyrics:``,coverFile:``,songFile:``}))),Wn(2)},xa=(e,t)=>{if(!e||!t)return``;let[n,r,i]=e.split(`-`);return`${`${i}${r}${n.slice(-2)}`}-${t.trim().toLowerCase().replace(/[ä]/g,`ae`).replace(/[ö]/g,`oe`).replace(/[ü]/g,`ue`).replace(/[ß]/g,`ss`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}`},Sa=(e=``)=>e.replace(/\\/g,`\\\\`).replace(/`/g,"\\`").replace(/\$\{/g,"\\${"),Ca=()=>{let e=Gn.albumCoverFile.trim()||`${Gn.albumTitle.trim()}.png`;return qn.map(t=>{let n=t.title.trim(),r=t.coverFile.trim()||`${n}.png`,i=t.songFile.trim()||`${n}.mp3`;return`{
  id: ${JSON.stringify(xa(Gn.releaseDate,n))},
  title: ${JSON.stringify(n)},
  artist: ${JSON.stringify(Gn.artist.trim())},
  album: ${JSON.stringify(Gn.albumTitle.trim())},
  albumCover: asset(${JSON.stringify(`covers/${e}`)}),
  albumTrackNumber: ${t.trackNumber},
  duration: ${JSON.stringify(t.duration.trim())},
  releaseDate: ${JSON.stringify(Gn.releaseDate)},
  cover: asset(${JSON.stringify(`covers/${r}`)}),
  file: asset(${JSON.stringify(`songs/${i}`)}),
  isSingle: false,
},`}).join(`
`)},wa=()=>qn.map(e=>{let t=e.title.trim();return`${JSON.stringify(t)}: \`${Sa(e.lyrics)}\`,`}).join(`

`),Ta=()=>{let e=Xn.current;e&&(window.clearInterval(ir.current),tr.current=!e.paused,rr.current=A,e.paused||e.pause())},Ea=()=>{let e=Xn.current;if(!e||!n)return;window.clearInterval(ir.current);let t=tr.current,r=rr.current??A;if(!t)return;let i=0;e.volume=0,e.play().catch(()=>{}),ir.current=window.setInterval(()=>{i+=1;let t=Math.min(r,r/55*i);e.volume=t,(i>=55||t>=r)&&(window.clearInterval(ir.current),e.volume=r,de(r))},100)},Da=()=>{Ta(),tt(!0),rt(!1),at(!1),st(0),lt(`Bereit für den Speedy Pass.`),dt(0),Ye(!1),N(``),P(``)},Oa=()=>{Ta(),tt(!0),rt(!1),at(!0),st(0),lt(`Speedy Pass bereit.`),dt(0),Ye(!1),N(``),P(``)},ka=async()=>{let e=[...Zn.filter(e=>!e.hidden),...nr,...ar].map(e=>e?.file).filter(Boolean),t=[...new Set(e)];rt(!0),st(0),lt(`Speedy Pass läuft...`),window.clearInterval(pt.current),pt.current=window.setInterval(()=>{dt(e=>(e+1)%Ln.length)},5e3);let n=ft.current;if(n)try{n.pause(),n.currentTime=0,n.loop=!0,n.volume=.55,await n.play()}catch(e){console.warn(`Speedy-Pass-Musik konnte nicht gestartet werden:`,e)}let r=0;for(let e of t){try{await fetch(e,{cache:`force-cache`})}catch(t){console.warn(`Speedy Pass konnte Song nicht laden:`,e,t)}r+=1,st(Math.round(r/t.length*100))}st(100),lt(`Speedy Pass ist bereit.`),window.clearInterval(pt.current),n&&(n.pause(),n.currentTime=0),window.setTimeout(()=>{tt(!1),rt(!1),st(0),Ea()},1400)},Aa=async()=>{let e=385e3,t=Date.now();rt(!0),st(0),lt(`Speedy Pass läuft...`),window.clearInterval(pt.current),window.clearInterval(mt.current),pt.current=window.setInterval(()=>{dt(e=>(e+1)%Ln.length)},5e3);let n=ft.current;if(n)try{n.pause(),n.currentTime=0,n.loop=!0,n.volume=.55,await n.play()}catch(e){console.warn(`Speedy-Pass-Musik konnte nicht gestartet werden:`,e)}mt.current=window.setInterval(()=>{let r=Date.now()-t;st(Math.min(100,Math.round(r/e*100))),r>=e&&(window.clearInterval(mt.current),window.clearInterval(pt.current),st(100),lt(`Speedy Pass abgeschlossen.`),n&&(n.pause(),n.currentTime=0),window.setTimeout(()=>{tt(!1),rt(!1),at(!1),st(0),Ea()},1400))},250)},ja=()=>{let e=Xe.trim().toLowerCase();if(e===`speedy pass`){Da();return}if(e===`speedy_pass`){Oa();return}if([`100`,`100. lied`,`song 100`,`königliche mafia`,`koenigliche mafia`].includes(e)){ya();return}if(e===`main`||e===`home`||e===`return`){_n(!1),yn(!1),xn(!1),wn(!1),Nn(`default`),d(null),p(null),F(null),k(``),t(`home`),Ye(!1),N(``),P(``);return}if(Xe.trim()===`BerryDeadly`){_n(!0),yn(!1),xn(!1),wn(!1),d(null),p(null),F(null),k(``),t(`home`),Ye(!1),N(``),P(``);return}if(Xe.trim()===`MC BERRY`){yn(!0),_n(!1),xn(!1),wn(!1),d(null),p(null),F(null),k(``),t(`home`),Ye(!1),N(``),P(``);return}if(Xe.trim()===`Herr Azul`){xn(!0),yn(!1),_n(!1),wn(!1),Nn(`herrazul`),d(null),p(null),F(null),k(``),t(`home`),Ye(!1),N(``),P(``);return}if(Xe.trim()===`NCR`){localStorage.setItem(`neoCityRadioBeta`,`true`),Ye(!1),N(``),P(``);return}if(e===`frequency`){Ve(!0),Ye(!1),N(``),P(``);return}if(e===`our place`){aa(Dr),Ye(!1),N(``),P(``),$e(!0);return}if(e===`jascha`){ga();return}if(e===`aurora`){_a();return}if(e===`defqon`||e===`defqon.1`||e===`path of the warrior`){va();return}if(Xe.trim()===`Album`){Hn(!0),Wn(1),Ye(!1),N(``),P(``);return}if(e===`motte`){Qi(),Ye(!1),N(``),P(``);return}if(e===`ncr3`){$i(),Ye(!1),N(``),P(``);return}if(e===`ncr4`){ea(),Ye(!1),N(``),P(``);return}P(`❌ Falsches Passwort`)},Ma=()=>{$e(!1),xt(Dr),yt(!0)},Na=()=>{let e=St.trim();if(!e)return;let t={id:`playlist-${Date.now()}`,name:e,songIds:yr(bt)?[bt.id]:[],createdAt:new Date().toISOString()};gt(e=>[...e,t]),ha()},Pa=(e,t)=>{if(!yr(t)){ha();return}gt(n=>n.map(n=>n.id===e?{...n,songIds:[...n.songIds,t.id]}:n)),ha()},Fa=(e,t)=>{if(e===`favorites`){Ft(t);return}gt(n=>{let r=n.map(n=>{if(n.id!==e)return n;let r=n.songIds.findIndex(e=>e===t);return r===-1?n:{...n,songIds:n.songIds.filter((e,t)=>t!==r)}}),i=r.find(t=>t.id===e);return i&&F(i),r})},Ia=e=>{gt(t=>t.filter(t=>t.id!==e)),_t?.id===e&&F(null)},La=e=>{let t=JSON.stringify({version:`1.0`,name:e.name,songIds:e.songIds},null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`${e.name.replace(/[^\w\s-]/g,``).replace(/\s+/g,`_`)}.playlist.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},Ra=async e=>{let t=e.target.files?.[0];if(t){try{let e=await t.text(),n=JSON.parse(e);if(!n?.name||!Array.isArray(n?.songIds))throw Error(`Ungültige Playlist-Datei`);let r=xr(n.songIds),i={id:`playlist-${Date.now()}`,name:n.name,songIds:r,createdAt:new Date().toISOString()};gt(e=>[...e,i])}catch(e){console.log(`Playlist-Import fehlgeschlagen:`,e),alert(`Die Playlist-Datei konnte nicht importiert werden.`)}e.target.value=``}},za=e=>{let t=Va(e?.songIds);if(!t.length)return;let[n,...r]=t;a(r),ta(n,{resetHistory:!0})},Ba=e=>{let t=Va(e?.songIds);if(!t.length)return;let[n,...r]=[...t].sort(()=>Math.random()-.5);a(r),ta(n,{resetHistory:!0})},Va=(e=[])=>(Array.isArray(e)?e:[]).map(e=>mr.find(t=>String(t.id)===String(e))).filter(e=>e&&yr(e)),Ha=e=>{a(t=>t.filter((t,n)=>n!==e))},Ua=Oe(De(Tt,{activationConstraint:{distance:8}})),Wa=e=>{let{active:t,over:n}=e;!n||t.id===n.id||a(e=>{let r=e.findIndex((e,n)=>`${e.id}-${n}`===t.id),i=e.findIndex((e,t)=>`${e.id}-${t}`===n.id);return r===-1||i===-1?e:jn(e,r,i)})},Ga=()=>{if(n){if(Ie){let e=Yi(Re);if(!e)return;er.current=e.offset,r(br(e.track,e.trackStartTimeMs));return}if(ye===`one`){Xn.current&&(Xn.current.currentTime=0,Xn.current.play().catch(()=>{}));return}qa()}},Ka=()=>_t?Va(_t.songIds):u?.tracks?.length?[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)):Ir,qa=()=>{if(Ie){Xi(Re);return}if(!n)return;if(i.length>0){let[e,...t]=i;a(t),ta(e);return}let e=Ka(),t=e.findIndex(e=>e.id===n.id);if(t===-1)return;let r=t+1;if(r<e.length){ta(e[r]);return}ye===`all`&&e.length>0&&ta(e[0],{fromHistory:!0})},Ja=()=>{if(Ie){Xi(Re);return}if(O>3&&Xn.current){Xn.current.currentTime=0,le(0),se(0);return}if(o.length===0){Xn.current&&(Xn.current.currentTime=0,le(0),se(0));return}let e=o[o.length-1];s(e=>e.slice(0,-1)),n&&a(e=>[n,...e]),ta(e,{fromHistory:!0})},Ya=e=>{e&&(k(e.title),t(`songs`),pn(!1),hn([]))},Xa=e=>{if(e){if(e.type===`cover`){let t=Zn.find(t=>t.id===e.sourceSongId);if(!t)return;Ya(t);return}if(e.type===`mashup`){let t=Zn.filter(t=>e.sourceSongIds?.includes(t.id));if(!t.length)return;hn(t),pn(!0),l(null)}}},Za=e=>{let n=e?.trim()||`Unknown Artist`,r=Tr(n);p(Di.find(e=>e.id===r)||{id:r||`unknown-artist`,name:n,bio:`No Artist Page found.`,image:null,songs:[],releases:[],missingProfile:!0}),h(`overview`),_(``),d(null),F(null),l(null),b(!1),Et(!1),ge(!1),t(`artists`)},Qa=e=>{t(e),e!==`albums`&&d(null),e!==`playlists`&&F(null),e!==`artists`&&p(null),b(!1)};(0,y.useEffect)(()=>{let e=()=>{B(window.innerWidth<=768)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,y.useEffect)(()=>{let e=localStorage.getItem(`ai-song-library-playlists`);if(!e){gt(kr);return}try{let t=JSON.parse(e);Array.isArray(t)&&gt(Pr(t))}catch(e){console.log(`Playlists konnten nicht geladen werden:`,e),gt(kr)}},[]),(0,y.useEffect)(()=>{localStorage.setItem(`ai-song-library-playlists`,JSON.stringify(ht))},[ht]),(0,y.useEffect)(()=>{if(!Be)return;Ue(Date.now());let e=window.setInterval(()=>{Ue(Date.now())},1e3);return()=>window.clearInterval(e)},[Be]),(0,y.useEffect)(()=>{if(e===`home`){te(!1),re(!1),ae(!1);let e=setTimeout(()=>{te(!0)},60),t=setTimeout(()=>{re(!0)},220),n=setTimeout(()=>{ae(!0)},380);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}}else te(!1),re(!1),ae(!1)},[e]),(0,y.useEffect)(()=>{Xn.current&&(Xn.current.volume=A)},[A]),(0,y.useEffect)(()=>{if(Ie)return;let e=Xn.current;!e||!n||(async()=>{try{await e.play()}catch(e){console.log(`Autoplay/Play blockiert:`,e)}})()},[n,Ie]),(0,y.useEffect)(()=>{if(`mediaSession`in navigator)return n&&(navigator.mediaSession.metadata=new MediaMetadata({title:n.title,artist:n.artist,album:n.album||`Königliche AI Songs`,artwork:[{src:n.cover,sizes:`96x96`,type:`image/jpeg`},{src:n.cover,sizes:`128x128`,type:`image/jpeg`},{src:n.cover,sizes:`192x192`,type:`image/jpeg`},{src:n.cover,sizes:`256x256`,type:`image/jpeg`},{src:n.cover,sizes:`384x384`,type:`image/jpeg`},{src:n.cover,sizes:`512x512`,type:`image/jpeg`}]})),navigator.mediaSession.setActionHandler(`play`,()=>{let e=Xn.current;e&&e.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{let e=Xn.current;e&&e.pause()}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{qa()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{Ja()}),()=>{try{navigator.mediaSession.setActionHandler(`play`,null),navigator.mediaSession.setActionHandler(`pause`,null),navigator.mediaSession.setActionHandler(`nexttrack`,null),navigator.mediaSession.setActionHandler(`previoustrack`,null)}catch(e){console.log(e)}}},[n,i,o,O]),(0,y.useEffect)(()=>{`mediaSession`in navigator&&(navigator.mediaSession.playbackState=C?`playing`:`paused`)},[C]),(0,y.useEffect)(()=>{if(wt)return ao(),()=>{V.current&&clearTimeout(V.current)}},[wt]),(0,y.useEffect)(()=>{if(!wt||!n)return;At(!1);let e=setTimeout(()=>{At(!0)},30);return()=>clearTimeout(e)},[n,wt]),(0,y.useEffect)(()=>{!wt||!M||!n||ve($n[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,wt,M]),(0,y.useEffect)(()=>{!me||!n||ve($n[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`)},[n,me]),(0,y.useEffect)(()=>{let e=Xn.current;if(!e)return;e.volume=A;let t=()=>{let t=e.currentTime||0,n=e.duration||0;le(t),D(n),se(n>0?t/n*100:0)},n=()=>{D(e.duration||0),t()},r=()=>w(!0),i=()=>w(!1),a=()=>{Ga()};return e.addEventListener(`timeupdate`,t),e.addEventListener(`loadedmetadata`,n),e.addEventListener(`play`,r),e.addEventListener(`pause`,i),e.addEventListener(`ended`,a),t(),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`loadedmetadata`,n),e.removeEventListener(`play`,r),e.removeEventListener(`pause`,i),e.removeEventListener(`ended`,a)}},[n,i,o,ye,A]);let $a=e=>{if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${String(n).padStart(2,`0`)}`},eo=()=>{let e=Xn.current;if(!(!e||!n)){if(Ie){e.paused?Xi(Re):e.pause();return}e.paused?e.play().catch(()=>{}):e.pause()}},to=e=>{if(Ie)return;let t=Xn.current;if(!t||!ce)return;let n=Number(e.target.value),r=n/100*ce;t.currentTime=r,se(n),le(r)},no=()=>{n&&(ve($n[n.lyricsKey||n.title]||`Für diesen Song ist noch kein Liedtext hinterlegt.`),wt?ge(!0):he(!0))},ro=()=>{A===0?de(j>0?j:1):(fe(A),de(0))},io=()=>{be(e=>e===`off`?`all`:e===`all`?`one`:`off`)},ao=()=>{V.current&&clearTimeout(V.current),Ot(!0),V.current=setTimeout(()=>{Ot(!1)},5e3)},q=()=>{n&&(Et(!0),Ot(!0))},J=()=>{Et(!1),ge(!1)},oo=({id:e,song:t,index:n,removeFromQueue:r})=>{let{attributes:i,listeners:a,setNodeRef:o,transform:s,transition:c,isDragging:l}=Jn({id:e});return(0,U.jsxs)(`div`,{ref:o,style:{transform:pe.Transform.toString(s),transition:c,background:l?`#1a2230`:`#141821`,borderRadius:`12px`,padding:`10px`,display:`grid`,gridTemplateColumns:`24px 1fr 32px`,gap:`10px`,alignItems:`center`,border:l?`1px solid #3a455a`:`1px solid transparent`},children:[(0,U.jsx)(`button`,{...i,...a,style:ei(l),children:`⋮⋮`}),(0,U.jsxs)(`div`,{style:{minWidth:0},children:[(0,U.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.title}),(0,U.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.artist})]}),(0,U.jsx)(`button`,{onClick:()=>r(n),style:ti,children:`✕`})]})},so=({song:e,size:t=38})=>{if(!yr(e))return null;let n=It(e.id),r=Lt===e.id;return(0,U.jsx)(`button`,{type:`button`,"aria-label":n?`${e.title} aus Favoriten entfernen`:`${e.title} zu Favoriten hinzufügen`,title:n?`Aus Favoriten entfernen`:`Zu Favoriten hinzufügen`,onClick:t=>Ht(t,e),style:{width:t,height:t,flexShrink:0,borderRadius:`999px`,border:n?`1px solid ${R.borderColor}`:`1px solid transparent`,background:n?R.softBg:`transparent`,color:n?R.accent:`#9aa0aa`,cursor:`pointer`,fontSize:Math.round(t*.66),lineHeight:1,padding:0,display:`flex`,alignItems:`center`,justifyContent:`center`,transform:r?`scale(1.38) rotate(-8deg)`:`scale(1)`,transition:`transform 220ms cubic-bezier(0.2, 1.7, 0.4, 1), color 150ms ease, background 150ms ease, border 150ms ease`},children:n?`♥`:`♡`})},co=({song:e,index:r,showAlbum:i=!0,playlistContext:a=null})=>(0,U.jsx)(`div`,{onClick:()=>aa(e),onMouseEnter:()=>E(`song-row-${e.id}`),onMouseLeave:()=>E(null),style:z?{display:`grid`,gridTemplateColumns:`56px minmax(0, 1fr) 82px`,gap:`12px`,alignItems:`center`,padding:`12px`,borderRadius:`16px`,background:n?.id===e.id?`rgba(29,185,84,0.12)`:T===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`#141821`,border:n?.id===e.id?`1px solid rgba(29,185,84,0.35)`:T===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid #202636`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`}:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 88px`,gap:`14px`,alignItems:`center`,padding:`12px 16px`,borderRadius:`14px`,background:n?.id===e.id?R.softBg:T===`song-row-${e.id}`?`rgba(255,255,255,0.05)`:`transparent`,border:n?.id===e.id?`1px solid ${R.borderColor}`:T===`song-row-${e.id}`?`1px solid rgba(255,255,255,0.08)`:`1px solid transparent`,position:`relative`,cursor:`pointer`,transition:`background 0.15s ease, border 0.15s ease`},children:z?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,U.jsxs)(`div`,{style:{minWidth:0},children:[(0,U.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`,marginBottom:`4px`},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`13px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,marginBottom:i&&e.album?`4px`:0},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`13px`,color:`#a0a0a0`})}),i&&e.album&&(0,U.jsx)(`div`,{onClick:n=>{n.stopPropagation();let r=Ei.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},style:{color:`#b0b0b0`,fontSize:`12px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,textDecoration:`underline`},children:e.album})]}),(0,U.jsxs)(`div`,{style:{position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`4px`},children:[(0,U.jsx)(so,{song:e}),(0,U.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,U.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,U.jsx)(`button`,{onClick:()=>da(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,U.jsx)(`button`,{onClick:t=>{t.stopPropagation(),Xa(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),yr(e)&&(0,U.jsx)(`button`,{onClick:()=>fa(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Zur Playlist hinzufügen`}),a&&(0,U.jsx)(`button`,{onClick:()=>Fa(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Aus Playlist entfernen`}),(0,U.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{...zr,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:i?r+1:e.albumTrackNumber??e.trackNumber??r+1}),(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`56px`,height:`56px`,objectFit:`cover`,borderRadius:`10px`}}),(0,U.jsxs)(`div`,{style:{minWidth:0},children:[(0,U.jsx)(`div`,{style:{fontWeight:700,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,color:`white`},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#a0a0a0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`default`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#a0a0a0`})})]}),(0,U.jsx)(`div`,{onClick:n=>{if(n.stopPropagation(),!e.album)return;let r=Ei.find(t=>t.title===e.album);r&&(d(r),t(`albums`))},onMouseEnter:()=>E(`song-album-${e.id}`),onMouseLeave:()=>E(null),style:{color:T===`song-album-${e.id}`?`#ffffff`:`#b0b0b0`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:e.album?`pointer`:`default`,textDecoration:T===`song-album-${e.id}`&&e.album?`underline`:`none`,transition:`color 0.15s ease`},children:e.album||`—`}),(0,U.jsx)(`div`,{style:{color:`#9a9a9a`,fontSize:`14px`},children:e.duration}),(0,U.jsxs)(`div`,{style:{position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`4px`},children:[(0,U.jsx)(so,{song:e}),(0,U.jsx)(`button`,{onClick:t=>{t.stopPropagation(),l(c===e.id?null:e.id)},style:{width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`#242424`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`⋯`}),c===e.id&&(0,U.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,top:`46px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`8px`,minWidth:`230px`,boxShadow:`0 18px 45px rgba(0,0,0,0.45)`,zIndex:50,display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,U.jsx)(`button`,{onClick:()=>da(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Als Nächstes abspielen`}),(e.type===`cover`||e.type===`mashup`)&&(0,U.jsx)(`button`,{onClick:t=>{t.stopPropagation(),Xa(e),l(null)},onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:e.type===`mashup`?`Originale anzeigen`:`Original anzeigen`}),yr(e)&&(0,U.jsx)(`button`,{onClick:()=>fa(e),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Zur Playlist hinzufügen`}),a&&(0,U.jsx)(`button`,{onClick:()=>Fa(a.id,e.id),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:zr,children:`Aus Playlist entfernen`}),(0,U.jsx)(`a`,{href:e.file,download:!0,onClick:e=>e.stopPropagation(),onMouseEnter:e=>{e.currentTarget.style.background=`#1a1f2b`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},style:{...zr,textDecoration:`none`,boxSizing:`border-box`},children:`Download`})]})]})]})},e.id+`-`+r),lo=Ji(),uo=L===`aurora`,fo=L===`herrazul`,po=L===`defqon`,Y=L===`mafia100`;return(0,U.jsxs)(`div`,{style:{minHeight:`100vh`,position:`relative`,overflowX:`hidden`,background:Y?`radial-gradient(circle at 50% -12%, rgba(57,255,136,0.34), transparent 34%), radial-gradient(circle at 82% 18%, rgba(244,201,93,0.12), transparent 30%), linear-gradient(180deg, #010805 0%, #03170d 48%, #010503 100%)`:po?`radial-gradient(circle at 50% -10%, rgba(255,26,26,0.36), transparent 34%), linear-gradient(180deg, #080000 0%, #050505 52%, #120000 100%)`:uo?`radial-gradient(circle at 50% -15%, rgba(204,155,255,0.34), transparent 34%), radial-gradient(circle at 78% 18%, rgba(95,54,255,0.18), transparent 32%), linear-gradient(180deg, #05050d 0%, #080512 48%, #020208 100%)`:fo?`radial-gradient(circle at 50% -12%, rgba(72,150,255,0.32), transparent 36%), radial-gradient(circle at 82% 18%, rgba(10,72,160,0.20), transparent 34%), linear-gradient(180deg, #020816 0%, #061225 48%, #01030a 100%)`:L===`berrydeadly`?`radial-gradient(circle at top, #2a063d 0%, #07020f 45%, #020008 100%)`:`#0d0f16`,transition:`background 0.6s ease`,color:`white`,fontFamily:`Arial, sans-serif`,paddingBottom:z?`190px`:`130px`},children:[Y&&(0,U.jsx)(Jr,{isMobile:z}),uo&&(0,U.jsx)(Gr,{isMobile:z}),fo&&(0,U.jsx)(Kr,{isMobile:z}),po&&(0,U.jsx)(qr,{isMobile:z}),(0,U.jsx)(`header`,{style:{position:`sticky`,top:0,zIndex:30,background:Y?`rgba(2,18,10,0.86)`:uo?`rgba(6,5,18,0.80)`:fo?`rgba(2,8,22,0.86)`:L===`berrydeadly`?`rgba(10,2,18,0.92)`:`rgba(13,15,22,0.88)`,borderBottom:Y?`1px solid rgba(244,201,93,0.44)`:uo?`1px solid rgba(205,164,255,0.36)`:L===`berrydeadly`?`1px solid rgba(255,77,210,0.35)`:`1px solid #1f2430`,boxShadow:Y?`0 0 34px rgba(57,255,136,0.22), 0 0 58px rgba(244,201,93,0.08)`:uo?`0 0 30px rgba(181,118,255,0.22)`:fo?`0 0 30px rgba(72,150,255,0.24)`:L===`berrydeadly`?`0 0 24px rgba(255,77,210,0.18)`:`none`,backdropFilter:`blur(12px)`},children:(0,U.jsxs)(`div`,{style:{width:`100%`,padding:z?`14px 16px`:`18px 26px`,boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`},children:[(0,U.jsxs)(`div`,{onClick:()=>{t(`home`),d(null),b(!1)},style:{cursor:`pointer`},children:[(0,U.jsx)(`div`,{style:{fontSize:`15px`,color:L===`berrydeadly`?`#d8b7ff`:`#8e96a3`,marginBottom:`4px`},children:Y?`100 Songs. Eine Familie.`:vn?`Der König der Unterwelt`:gn?`Neon City Lights — Erdbeere Time`:bn?`Bürgermeister von Neo City`:`NEO CITY präsentiert`}),(0,U.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:800,color:L===`mcberry`?`#ff1738bf`:L===`berrydeadly`?`#ff9be8`:`#d0d7e2`,textShadow:L===`mcberry`?`0 0 14px rgba(255,23,56,0.65)`:`none`},children:Y?`Königliche Mafia`:vn?`MC Berry`:gn?`BerryDeadly Music`:bn?`Herr Azul`:Cn?`Königlicher Tribut`:`Königliche AI Songs`})]}),(0,U.jsx)(`button`,{onClick:()=>b(!0),style:{width:`52px`,height:`52px`,borderRadius:`16px`,background:L===`berrydeadly`?`#1b0b2e`:`#171b24`,border:L===`berrydeadly`?`1px solid rgba(255,77,210,0.45)`:`1px solid #2a3142`,boxShadow:L===`berrydeadly`?`0 0 18px rgba(255,77,210,0.25)`:`none`,color:`white`,cursor:`pointer`,fontSize:`22px`,fontWeight:700},children:`☰`})]})}),Vn&&(0,U.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.65)`,zIndex:100,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`},children:(0,U.jsxs)(`div`,{style:{width:`720px`,maxWidth:`96vw`,maxHeight:`90vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #2a3142`,borderRadius:`22px`,padding:`24px`,boxShadow:`0 24px 70px rgba(0,0,0,0.6)`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,marginBottom:`22px`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,fontWeight:700,textTransform:`uppercase`},children:`Album Creator Access`}),(0,U.jsx)(`h2`,{style:{margin:`6px 0 0`},children:`Album Generator`})]}),(0,U.jsx)(`button`,{onClick:()=>Hn(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),Un===1&&(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`14px`},children:[(0,U.jsx)(`input`,{placeholder:`Albumname`,value:Gn.albumTitle,onChange:e=>Kn({...Gn,albumTitle:e.target.value}),style:Br}),(0,U.jsx)(`input`,{placeholder:`Artist`,value:Gn.artist,onChange:e=>Kn({...Gn,artist:e.target.value}),style:Br}),(0,U.jsx)(`input`,{type:`date`,value:Gn.releaseDate,onChange:e=>Kn({...Gn,releaseDate:e.target.value}),style:Br}),(0,U.jsx)(`select`,{value:Gn.trackCount,onChange:e=>Kn({...Gn,trackCount:Number(e.target.value)}),style:Br,children:Array.from({length:30},(e,t)=>(0,U.jsxs)(`option`,{value:t+1,children:[t+1,` Track`,t+1===1?``:`s`]},t+1))}),(0,U.jsx)(`input`,{placeholder:`Albumcover-Datei, z. B. Traumatica Nights.png`,value:Gn.albumCoverFile,onChange:e=>Kn({...Gn,albumCoverFile:e.target.value}),style:Br}),(0,U.jsx)(`button`,{onClick:ba,style:Lr(L),children:`Weiter zu Track 1`})]}),Un===2&&(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`16px`},children:[(0,U.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[Gn.albumTitle,` – `,Gn.artist]}),qn.map((e,t)=>(0,U.jsxs)(`div`,{style:{background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`18px`,padding:`16px`,display:`grid`,gap:`12px`},children:[(0,U.jsxs)(`h3`,{style:{margin:0},children:[`Track `,e.trackNumber]}),(0,U.jsx)(`input`,{placeholder:`Titel`,value:e.title,onChange:e=>{let n=[...qn];n[t].title=e.target.value,Yn(n)},style:Br}),(0,U.jsx)(`input`,{placeholder:`Dauer, z. B. 03:21`,value:e.duration,onChange:e=>{let n=[...qn];n[t].duration=e.target.value,Yn(n)},style:Br}),(0,U.jsx)(`textarea`,{placeholder:`Lyrics`,value:e.lyrics,onChange:e=>{let n=[...qn];n[t].lyrics=e.target.value,Yn(n)},style:{...Br,minHeight:`180px`,resize:`vertical`,fontFamily:`monospace`}})]},e.trackNumber)),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,justifyContent:`space-between`},children:[(0,U.jsx)(`button`,{onClick:()=>Wn(1),style:G(L),children:`Zurück`}),(0,U.jsx)(`button`,{onClick:()=>Wn(3),style:Lr(L),children:`Code generieren`})]})]}),Un===3&&(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`16px`},children:[(0,U.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[`Ausgabe für `,Gn.albumTitle]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`1fr`:`1fr 1fr`,gap:`14px`},children:[(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,U.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(Ca()),style:Lr(L),children:`songs.js-Code kopieren`}),(0,U.jsx)(`textarea`,{readOnly:!0,value:Ca(),style:{...Br,minHeight:`420px`,resize:`vertical`,fontFamily:`monospace`,fontSize:`12px`}})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,U.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(wa()),style:Lr(L),children:`texte.js-Code kopieren`}),(0,U.jsx)(`textarea`,{readOnly:!0,value:wa(),style:{...Br,minHeight:`420px`,resize:`vertical`,fontFamily:`monospace`,fontSize:`12px`}})]})]}),(0,U.jsx)(`button`,{onClick:()=>Wn(2),style:G(L),children:`Zurück zu Tracks`})]})]})}),x&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>S(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.62)`,zIndex:70,backdropFilter:`blur(8px)`}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:z?`calc(100vw - 32px)`:`520px`,maxHeight:`78vh`,overflowY:`auto`,background:`#111318`,border:`1px solid ${R.borderColor}`,borderRadius:`26px`,padding:z?`18px`:`24px`,zIndex:71,boxShadow:`0 28px 90px rgba(0,0,0,0.65)`,color:`white`,boxSizing:`border-box`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`14px`,marginBottom:`18px`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`12px`,textTransform:`uppercase`,letterSpacing:`0.1em`,fontWeight:900,marginBottom:`6px`},children:`Design`}),(0,U.jsx)(`h2`,{style:{margin:0,lineHeight:1.1},children:`Farbpalette auswählen`})]}),(0,U.jsx)(`button`,{onClick:()=>S(!1),style:{width:`40px`,height:`40px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`,flexShrink:0},children:`✕`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gap:`12px`},children:Rn.map(e=>{let t=Mn===e.id,n=Hr(e.id);return(0,U.jsxs)(`button`,{type:`button`,onClick:()=>{Nn(e.id),S(!1)},style:{width:`100%`,display:`grid`,gridTemplateColumns:`1fr auto`,gap:`14px`,alignItems:`center`,background:t?`linear-gradient(135deg, ${n.softBg}, #151923)`:`#151923`,border:t?`1px solid ${n.borderColor}`:`1px solid #202636`,color:`white`,borderRadius:`18px`,padding:`14px`,cursor:`pointer`,textAlign:`left`,boxShadow:t?`0 0 22px ${n.borderColor}`:`none`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontWeight:900,fontSize:`16px`,marginBottom:`4px`},children:e.name}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,lineHeight:1.35},children:e.subtitle})]}),(0,U.jsx)(`div`,{style:{display:`flex`,gap:`5px`,padding:`6px`,borderRadius:`999px`,background:`rgba(0,0,0,0.24)`,border:`1px solid rgba(255,255,255,0.08)`},children:e.swatches.map(e=>(0,U.jsx)(`span`,{style:{width:`18px`,height:`18px`,borderRadius:`999px`,background:e,border:`1px solid rgba(255,255,255,0.25)`}},e))})]},e.id)})})]})]}),v&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>b(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.45)`,zIndex:39}}),(0,U.jsxs)(`aside`,{style:{position:`fixed`,top:0,right:0,width:`360px`,maxWidth:`92vw`,height:`100vh`,background:`#111318`,borderLeft:`1px solid #202636`,zIndex:40,padding:`24px`,paddingBottom:`220px`,overflowY:`auto`,boxShadow:`-18px 0 40px rgba(0,0,0,0.45)`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`24px`,gap:`14px`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontSize:`14px`,color:`#8e96a3`,marginBottom:`4px`},children:`Menü`}),(0,U.jsx)(`div`,{style:{fontSize:`23px`,fontWeight:800},children:`Königliche AI Songs`})]}),(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,U.jsx)(`button`,{type:`button`,onClick:()=>S(!0),title:`Design ändern`,style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid ${Hr(Mn).borderColor}`,background:`#171b24`,color:`white`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:Mn===`default`?`none`:`0 0 16px ${Hr(Mn).borderColor}`},children:(0,U.jsx)(`div`,{style:{display:`flex`,gap:`3px`},children:zn.swatches.slice(0,3).map(e=>(0,U.jsx)(`span`,{style:{width:`9px`,height:`20px`,borderRadius:`999px`,background:e,border:`1px solid rgba(255,255,255,0.24)`}},e))})}),(0,U.jsx)(`button`,{onClick:()=>b(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`30px`},children:[(0,U.jsx)(`button`,{onClick:()=>Qa(`home`),style:Rr(e===`home`,L),children:`Startseite`}),(0,U.jsx)(`button`,{onClick:()=>Qa(`songs`),style:Rr(e===`songs`,L),children:`Songs`}),(0,U.jsx)(`button`,{onClick:()=>Qa(`albums`),style:Rr(e===`albums`&&!u,L),children:`Alben`}),(0,U.jsx)(`button`,{onClick:()=>Qa(`playlists`),style:Rr(e===`playlists`&&!_t,L),children:`Playlists`}),(0,U.jsx)(`button`,{onClick:()=>Qa(`patchnotes`),style:Rr(e===`patchnotes`,L),children:`Patchnotes`}),(0,U.jsx)(`button`,{style:Rr(e===`extra`,L),onClick:()=>Qa(`extra`),children:`Extra`}),(0,U.jsx)(`button`,{onClick:()=>{Zi(),b(!1)},style:Rr(Ie,L),children:`📡 Neo City Radio`}),(0,U.jsx)(`button`,{onClick:()=>{Se(!0),b(!1)},style:Rr(!1,L),children:`Song einreichen`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`10px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.08em`,fontWeight:700},children:`Warteschlange`}),(0,U.jsx)(`button`,{onClick:ua,style:{background:`transparent`,border:`none`,color:`#c7ced9`,cursor:`pointer`,fontSize:`13px`},children:`Löschen`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gap:`8px`,paddingBottom:`50px`},children:i.length===0?(0,U.jsx)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`},children:`Noch nichts vorgemerkt.`}):(0,U.jsx)(Sn,{sensors:Ua,collisionDetection:Fe,onDragEnd:Wa,children:(0,U.jsx)(Bn,{items:i.map((e,t)=>`${e.id}-${t}`),strategy:In,children:(0,U.jsx)(`div`,{style:{display:`grid`,gap:`8px`},children:i.map((e,t)=>(0,U.jsx)(oo,{id:`${e.id}-${t}`,song:e,index:t,removeFromQueue:Ha},`${e.id}-${t}`))})})})})]})]})]}),(0,U.jsxs)(`main`,{style:{width:`100%`,padding:z?`18px 16px`:`26px 40px`,boxSizing:`border-box`,position:`relative`,zIndex:2},children:[e===`home`&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`section`,{style:{minHeight:z?`240px`:`220px`,borderRadius:`28px`,padding:z?`22px 18px`:`32px 48px`,position:`relative`,overflow:`hidden`,boxSizing:`border-box`,border:Y?`1px solid rgba(244,201,93,0.58)`:`1px solid transparent`,boxShadow:Y?`0 0 34px rgba(57,255,136,0.20), 0 26px 80px rgba(0,0,0,0.56), inset 0 0 44px rgba(244,201,93,0.06)`:`none`,backgroundImage:Y?`linear-gradient(180deg, rgba(0,10,5,0.08) 0%, rgba(1,18,9,0.30) 46%, rgba(0,8,4,0.94) 100%), linear-gradient(90deg, rgba(0,0,0,0.28), transparent 48%, rgba(0,0,0,0.28)), url('${W(`covers/Koenigliche_Mafia.png`)}')`:vn?`linear-gradient(135deg, rgba(5,0,0,0.42), rgba(58,0,8,0.82) 48%, rgba(0,0,0,0.96)), url('${W(`artists/MC_BERRY.png`)}')`:gn?`linear-gradient(rgba(12,2,22,0.35), rgba(4,0,10,0.92)), url('${W(`covers/BD.png`)}')`:bn?`linear-gradient(rgba(12,2,22,0.35), rgba(4,0,10,0.92)), url('${W(`covers/Blaue_Ordnung.png`)}')`:Cn?`linear-gradient(135deg, rgba(5,0,0,0.42), rgba(58,0,8,0.82) 48%, rgba(0,0,0,0.96)), url('${W(`artists/dragon.png`)}')`:`linear-gradient(
    180deg,
    rgba(8,10,17,0.60) 0%,
    rgba(8,10,17,0.90) 72%,
    rgba(8,10,17,1) 100%
  ), url('${W(`covers/Koenigliche-AI-Songs.png`)}')`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundClip:`padding-box`,backgroundPosition:Y?`center center`:z?`center top`:`top center`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,alignItems:`center`,marginBottom:`28px`,textAlign:`center`,opacity:+!!ee,transform:ee?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[Y&&(0,U.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`-20%`,bottom:`-20%`,left:`-28%`,width:z?`110px`:`180px`,background:`linear-gradient(90deg, transparent, rgba(244,201,93,0.38), rgba(57,255,136,0.18), transparent)`,filter:`blur(8px)`,mixBlendMode:`screen`,animation:`mafiaHeroSweep 7.5s ease-in-out infinite`,pointerEvents:`none`}}),(0,U.jsx)(`div`,{style:{color:Y?`#f4c95d`:`#d0d7e2`,fontSize:z?`12px`:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`,fontWeight:900},children:Y?`100. SONG · JUBILÄUM`:vn?`Unterwelt Interface`:gn?`Secret Neon Interface`:bn?`Rathaus Interface`:`Startmenü`}),(0,U.jsx)(`h1`,{style:{fontSize:Y?z?`clamp(32px, 9vw, 40px)`:`52px`:z?`clamp(28px, 9vw, 40px)`:`44px`,margin:0,marginBottom:`10px`,maxWidth:z?`100%`:`1000px`,textAlign:`center`,width:`100%`,lineHeight:z?1.02:1,color:Y?`#f8e8b0`:L===`mcberry`?`#ff1738`:L===`berrydeadly`?`#ff4dd2`:`white`,textShadow:Y?`0 0 16px rgba(244,201,93,0.72), 0 0 34px rgba(57,255,136,0.56), 0 8px 30px rgba(0,0,0,0.95)`:L===`mcberry`?`0 0 18px rgba(255,23,56,0.75), 0 0 34px rgba(120,0,16,0.65)`:L===`berrydeadly`?`0 0 18px rgba(255,77,210,0.75)`:`0 6px 22px rgba(0,0,0,0.45)`},children:Y?`Königliche Mafia`:vn?`MC Berry`:gn?`BerryDeadly Music`:bn?`Herr Azul`:Cn?`Königlicher Tribut`:`Königliche AI Songs`}),(0,U.jsx)(`p`,{style:{maxWidth:z?`100%`:`900px`,color:`#e3e6eb`,fontSize:Y?z?`14px`:`16px`:z?`15px`:`16px`,lineHeight:1.45,margin:`0 auto`,textAlign:`center`,fontWeight:Y?700:400,textShadow:`0 4px 18px rgba(0,0,0,0.85)`},children:Y?`Vier Leute. Hundert Songs. Eine komplett übertriebene Familie – und das bisher größte Interface der Königlichen AI Songs.`:vn?`König der Unterwelt. Schwarze Maske, rote Krone und 808s aus den Schatten von Neo City.`:gn?`Neon City Lights — Erdbeere Time. Eine geheime Cyberpunk-K-Pop-Bibliothek aus Neo City.`:bn?`Meine Stadt. Meine Ordnung. Mein Gesetz. Die blaue Stimme aus dem Rathaus von Neo City.`:Cn?`Für den Tribe, der nicht heimkehren durfte`:`Deine AI-Musikbibliothek, zertifiziert von dem MM.`})]}),(0,U.jsx)(`div`,{style:{width:`100%`,marginBottom:`26px`,padding:z?`18px 16px`:`20px 26px`,borderRadius:`22px`,background:`linear-gradient(135deg, #1a1f2b, #0f131c)`,border:`1px solid #2a3142`,boxShadow:`0 10px 30px rgba(0,0,0,0.25)`,textAlign:`center`,position:`relative`,overflow:`hidden`,color:`white`,boxSizing:`border-box`},children:Ie?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{style:{fontSize:z?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`,color:L===`mcberry`?R.gold:`white`,textShadow:L===`default`?`none`:R.titleShadow},children:Re===`neoCity2`?`📻 DU HÖRST NEO CITY RADIO 2`:Re===`neoCity3`?`📻 DU HÖRST NEO CITY RADIO 3`:Re===`neoCity4`?`Neo City Phonk Radio`:`📻 DU HÖRST NEO CITY RADIO`}),(0,U.jsxs)(`div`,{style:{fontSize:z?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[`Jetzt läuft:`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`strong`,{style:{color:R.accent,fontSize:`22px`,textShadow:L===`default`?`none`:R.titleShadow},children:n?.title}),Gi&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),`Als nächstes:`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`strong`,{style:{color:L===`mcberry`?R.gold:L===`berrydeadly`?`#ff9be8`:`#c7ced9`,fontSize:`18px`},children:Gi.title})]})]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{style:{fontSize:z?`18px`:`22px`,fontWeight:800,lineHeight:1.3,marginBottom:`10px`,color:L===`mcberry`?R.gold:L===`berrydeadly`?`#ff9be8`:`white`,textShadow:L===`default`?`none`:R.titleShadow},children:vn?`👑 Unterwelt-Frequenz:`:gn?`💜 Secret Neon Signal:`:bn?`👁️ Rathaus-Signal:`:Cn?`One Tribe`:`🧪 Version 1.7 Beta ist gestartet`}),(0,U.jsxs)(`div`,{style:{fontSize:z?`14px`:`16px`,color:`#c7ced9`,lineHeight:1.6},children:[vn?`MC Berry aus den Schatten von Neo City`:gn?`BerryDeadly live aus dem Neon von Neo City`:bn?`Herr Azul sendet aus dem Rathaus von Neo City`:Cn?`One Oath`:`Teste jetzt die ersten Funktionen des kommenden großen Updates`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`strong`,{style:{color:R.accent,fontSize:`22px`,textShadow:L===`default`?`none`:R.titleShadow},children:vn?`👑 König der Unterwelt`:gn?`🌃 Neon City Lights — Erdbeere Time`:bn?`🔵 Die Blaue Ordnung`:Cn?`DEFQON.1`:`❤️ Deine Favoriten. Deine Musik.`}),(0,U.jsx)(`br`,{}),vn?`🌑 Live aus der Unterwelt`:gn?`💫 Secret City, Neon Heartbeat, After 3AM`:bn?`👁️ Ordnung. Kultur. Kontrolle.`:Cn?` `:`🌆 NEO CITY wächst`]})]})}),(0,U.jsxs)(`section`,{style:{opacity:+!!ne,transform:ne?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,U.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,U.jsx)(`button`,{onClick:()=>t(`songs`),style:G(L),children:`Alle Songs ansehen`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(190px, 1fr))`,gap:`16px`},children:ui.map(e=>(0,U.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>aa(e),onMouseEnter:()=>E(`release-${e.id}`),onMouseLeave:()=>E(null),style:{textAlign:`left`,background:T===`release-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:T===`release-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`release-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,U.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]}),(0,U.jsxs)(`section`,{style:{marginTop:`32px`,opacity:+!!ie,transform:ie?`translateY(0px)`:`translateY(18px)`,transition:`opacity 0.45s ease, transform 0.45s ease`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,U.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,U.jsx)(`button`,{onClick:()=>t(`albums`),style:G(L),children:`Alle Alben ansehen`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`18px`},children:Ei.slice(0,4).map(e=>(0,U.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>{d(e),t(`albums`)},onMouseEnter:()=>E(`home-album-${e.id}`),onMouseLeave:()=>E(null),style:{textAlign:`left`,background:T===`home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:T===`home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,U.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))}),(0,U.jsxs)(`div`,{style:{marginTop:`28px`,padding:z?`18px`:`24px`,borderRadius:`24px`,background:L===`default`?`linear-gradient(135deg, rgba(29,185,84,0.18), rgba(20,24,33,0.95))`:`linear-gradient(135deg, ${R.softBg}, rgba(20,24,33,0.95))`,border:`1px solid ${R.borderColor}`,textAlign:`center`,color:`white`,boxShadow:`0 18px 40px rgba(0,0,0,0.28)`},children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`#9aa2ad`,marginBottom:`8px`,fontWeight:700},children:`Königliche AI Songs Archiv`}),(0,U.jsx)(`h2`,{style:{margin:`0 0 10px`,fontSize:z?`24px`:`32px`},children:`Zeitstrahl der Releases`}),(0,U.jsx)(`p`,{style:{margin:`0 auto 18px`,color:`#c7ced9`,maxWidth:`620px`,lineHeight:1.6},children:`Erlebe die Geschichte der Songs von den ersten Releases bis zum neuesten Kapitel.`}),(0,U.jsx)(`button`,{onClick:mi,style:Lr(L),children:`Zeitstrahl starten`})]}),(0,U.jsxs)(`div`,{onDoubleClick:()=>{Ye(!0),N(``),P(``)},style:{margin:`32px 16px`,padding:`20px`,borderRadius:`16px`,cursor:`pointer`,border:`1px solid var(--border)`,background:`linear-gradient(135deg, var(--accent-bg), rgba(170, 59, 255, 0.05))`,textAlign:`center`},children:[(0,U.jsx)(`p`,{style:{fontSize:`12px`,opacity:.6,marginBottom:`6px`},children:`Anzeige`}),(0,U.jsx)(`h3`,{style:{marginBottom:`8px`,color:`var(--text-h)`},children:`🎢 EuroParksMC`}),(0,U.jsxs)(`h1`,{style:{fontSize:`clamp(42px, 9vw, 110px)`,fontWeight:900,lineHeight:.95,letterSpacing:`clamp(-2px, -0.5vw, -5px)`},children:[`Der`,` `,(0,U.jsx)(`span`,{style:{background:`linear-gradient(135deg, rgb(73, 115, 255), rgb(123, 159, 255), rgb(73, 115, 255))`,backgroundSize:`300% 100%`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,animation:`gs 4s ease infinite`},children:`Europapark`}),(0,U.jsx)(`br`,{}),`in Minecraft`]}),(0,U.jsx)(`div`,{style:{opacity:1,transform:`none`,transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s`},children:(0,U.jsx)(`p`,{style:{fontSize:`clamp(16px, 2vw, 20px)`,color:`rgb(119, 119, 119)`,marginTop:`28px`,lineHeight:1.7,maxWidth:`620px`,marginInline:`auto`},children:`20 Attraktionen, 5 Themenbereiche, eine aktive Community.`})}),(0,U.jsx)(`a`,{href:`https://europarksmc.eu/#zeitstrahl`,onClick:e=>e.stopPropagation(),target:`_blank`,rel:`noopener noreferrer`,style:{display:`inline-block`,padding:`8px 16px`,marginTop:`20px`,borderRadius:`999px`,background:`var(--accent)`,color:`white`,textDecoration:`none`,fontSize:`14px`,transition:`transform 0.2s ease`},onMouseEnter:e=>e.target.style.transform=`translateY(-2px)`,onMouseLeave:e=>e.target.style.transform=`translateY(0px)`,children:`Jetzt erkunden`})]})]})]}),e===`artists`&&f&&(()=>{let e=f.songs.slice(0,5),n=f.releases.slice(0,4),r=[...f.songs].sort((e,t)=>new Date(e.releaseDate)-new Date(t.releaseDate)),i=r[0],o=r[r.length-1],s=r.filter(e=>{let t=g.trim().toLowerCase();return t?e.title.toLowerCase().includes(t)||wr(e.artist).join(`, `).toLowerCase().includes(t)||(e.album||``).toLowerCase().includes(t):!0}),l=(e=f.songs)=>{if(!e.length)return;let[t,...n]=e;a(n),ta(t,{resetHistory:!0})},u=(e=f.songs)=>{if(!e.length)return;let[t,...n]=[...e].sort(()=>Math.random()-.5);a(n),ta(t,{resetHistory:!0})},v=e=>{d(e),p(null),h(`overview`),t(`albums`)};return(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`button`,{onClick:()=>{if(m!==`overview`){h(`overview`),_(``);return}p(null),t(`songs`)},style:{...G(L),marginBottom:`18px`},children:m===`overview`?`← Zurück zu Songs`:`← Zurück zur Artist Page`}),(0,U.jsxs)(`div`,{style:{borderRadius:`28px`,padding:z?`22px 18px`:`32px`,background:R.cardBg,border:R.cardBorder,marginBottom:`32px`,display:`grid`,gridTemplateColumns:z?`1fr`:`140px 1fr`,gap:`22px`,alignItems:`center`},children:[f.image?(0,U.jsx)(`img`,{src:W(f.image),alt:f.name,style:{width:z?`110px`:`140px`,height:z?`110px`:`140px`,objectFit:`cover`,borderRadius:`24px`}}):(0,U.jsx)(`div`,{style:{width:z?`110px`:`140px`,height:z?`110px`:`140px`,borderRadius:`24px`,background:R.avatarBg,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`42px`,fontWeight:900,color:`white`,boxShadow:L===`default`?`none`:`0 0 22px ${R.borderColor}`},children:f.name.slice(0,1).toUpperCase()}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{color:L===`mcberry`?R.gold:L===`berrydeadly`?`#ff9be8`:`#8e96a3`,fontSize:`13px`,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`8px`},children:`Artist Page`}),(0,U.jsx)(`h1`,{style:{margin:0,marginBottom:`22px`,fontSize:z?`34px`:`48px`,color:L===`default`?`white`:R.accent,textShadow:L===`default`?`none`:R.titleShadow},children:f.name}),(0,U.jsx)(`div`,{style:{color:`#c7ced9`,fontSize:`15px`,lineHeight:1.6,maxWidth:`780px`,marginBottom:`18px`,whiteSpace:`pre-line`},children:f.bio||`No Bio found.`}),(0,U.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[f.songs.length,` `,f.songs.length===1?`Song`:`Songs`,` •`,` `,f.releases.length,` `,f.releases.length===1?`Album`:`Alben`]})]})]}),i&&o&&(0,U.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,marginTop:`14px`,marginBottom:`20px`},children:[(0,U.jsxs)(`div`,{style:Vr,children:[`Erster Song: `,i.title]}),(0,U.jsxs)(`div`,{style:Vr,children:[`Neuester Song: `,o.title]})]}),m===`overview`&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`section`,{style:{marginBottom:`34px`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,U.jsx)(`h2`,{style:{margin:0},children:`Neueste Releases`}),(0,U.jsx)(`button`,{onClick:()=>{h(`songs`),_(``)},style:G(L),children:`Alle Songs ansehen`})]}),f.songs.length===0?(0,U.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`No Artist Page found.`}):(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fill, minmax(190px, 190px))`,gap:`16px`},children:e.map(e=>(0,U.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>aa(e),onMouseEnter:()=>E(`artist-release-song-${e.id}`),onMouseLeave:()=>E(null),style:{textAlign:`left`,background:T===`artist-release-song-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`20px`,padding:`14px`,color:`white`,cursor:`pointer`,minWidth:0,transform:T===`artist-release-song-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`artist-release-song-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,marginBottom:`12px`}}),(0,U.jsx)(`div`,{style:{fontWeight:700,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]}),f.releases.length>0&&(0,U.jsxs)(`section`,{style:{marginTop:`32px`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`16px`,gap:`16px`,flexWrap:`wrap`},children:[(0,U.jsx)(`h2`,{style:{margin:0},children:`Aktuelle Alben`}),(0,U.jsx)(`button`,{onClick:()=>h(`albums`),style:G(L),children:`Alle Alben ansehen`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`repeat(2, minmax(0, 1fr))`:`repeat(auto-fill, minmax(220px, 220px))`,gap:`18px`},children:n.map(e=>(0,U.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>v(e),onMouseEnter:()=>E(`artist-home-album-${e.id}`),onMouseLeave:()=>E(null),style:{textAlign:`left`,background:T===`artist-home-album-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,color:`white`,cursor:`pointer`,transform:T===`artist-home-album-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`artist-home-album-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,U.jsx)(`div`,{style:{fontWeight:800,fontSize:`16px`,marginBottom:`6px`,lineHeight:1.2},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})})]},e.id))})]})]}),m===`songs`&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:{marginBottom:`24px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`12px`},children:`Artist Songs`}),(0,U.jsxs)(`h1`,{style:{margin:0,marginBottom:`16px`},children:[`Songs von `,f.name]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`22px`},children:[(0,U.jsx)(`button`,{onClick:()=>l(s),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>u(s),style:G(L),children:`Shuffle`})]}),(0,U.jsx)(`input`,{type:`text`,value:g,onChange:e=>_(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:z?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[s.map((e,t)=>(0,U.jsx)(co,{song:e,index:t,showAlbum:!0},e.id)),(0,U.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),m===`albums`&&f.releases.length>0&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:{marginBottom:`30px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`12px`},children:`Artist Alben`}),(0,U.jsxs)(`h1`,{style:{margin:0},children:[`Alben von `,f.name]})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:f.releases.map(e=>(0,U.jsxs)(`div`,{onMouseEnter:()=>E(`artist-albums-page-${e.id}`),onMouseLeave:()=>E(null),style:{background:T===`artist-albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:T===`artist-albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`artist-albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,U.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})}),(0,U.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>oa(e),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>v(e),style:G(L),children:`Öffnen`})]})]},e.id))})]})]})})(),e===`songs`&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`,marginBottom:`6px`},children:`Bibliothek`}),(0,U.jsx)(`h1`,{style:{margin:0,marginBottom:`16px`},children:Fr(e,u,_t)}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`14px`},children:[(0,U.jsx)(`button`,{onClick:ca,style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:la,style:G(L),children:`Shuffle`})]}),(0,U.jsx)(`input`,{type:`text`,value:ue,onChange:e=>k(e.target.value),placeholder:`Suche nach Titel, Artist oder Album...`,style:{width:`100%`,maxWidth:z?`100%`:`420px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!z&&(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,U.jsx)(`div`,{children:`#`}),(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{children:`Titel`}),(0,U.jsx)(`div`,{children:`Album`}),(0,U.jsx)(`div`,{children:`Dauer`}),(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{})]}),li.map((e,t)=>(0,U.jsx)(co,{song:e,index:t,showAlbum:!0},e.id)),(0,U.jsx)(`div`,{style:{height:c?`260px`:`40px`}}),li.length===0&&(0,U.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Keine Songs gefunden.`})]})]}),e===`playlists`&&!_t&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:or,children:[(0,U.jsx)(`div`,{style:H,children:`Bibliothek`}),(0,U.jsx)(`h1`,{style:sr,children:`Playlists`}),(0,U.jsx)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:(0,U.jsxs)(`label`,{style:{...G(L),display:`inline-flex`,alignItems:`center`},children:[`Importieren`,(0,U.jsx)(`input`,{type:`file`,accept:`.json`,onChange:Ra,style:{display:`none`}})]})})]}),Vt.length===0?(0,U.jsx)(`div`,{style:{color:`#8e96a3`,padding:`20px 16px`,borderRadius:`14px`,background:`#141821`,border:`1px solid #202636`},children:`Noch keine Playlists erstellt.`}):(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`16px`},children:Vt.map(e=>{let n=Va(e.songIds);return(0,U.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`18px`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:800,marginBottom:`8px`},children:e.name}),(0,U.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[e.songIds.length,` `,e.songIds.length===1?`Song`:`Songs`]})]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>{F(e),t(`playlists`)},style:G(L),children:`Öffnen`}),(0,U.jsx)(`button`,{onClick:()=>za(e),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>La(e),style:G(L),children:`Export`}),!e.locked&&(0,U.jsx)(`button`,{onClick:()=>Ia(e.id),style:G(L),children:`Löschen`})]})]}),Be&&(0,U.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.75)`,zIndex:9999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`},children:(0,U.jsxs)(`div`,{style:{width:`min(420px, 100%)`,background:`#10131c`,border:`1px solid rgba(255,255,255,0.12)`,borderRadius:`24px`,padding:`24px`,color:`white`,boxShadow:`0 0 40px rgba(0,0,0,0.45)`},children:[(0,U.jsx)(`h2`,{style:{marginTop:0},children:`📡 Neo City Radio Debug`}),(0,U.jsx)(`p`,{style:{opacity:.75,marginBottom:`20px`},children:`Versteckte Frequenz geöffnet.`}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`14px`},children:[(0,U.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,U.jsx)(`div`,{style:{opacity:.7,fontSize:`13px`},children:`Nächster Extra Songs Block`}),(0,U.jsx)(`strong`,{style:{fontSize:`28px`},children:Ki(lo.nextExtra)})]}),(0,U.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,U.jsx)(`div`,{style:{opacity:.7,fontSize:`13px`},children:`Nächster Radio Exclusive Block`}),(0,U.jsx)(`strong`,{style:{fontSize:`28px`},children:Ki(lo.nextExtra2)})]})]}),(0,U.jsx)(`button`,{onClick:()=>Ve(!1),style:{marginTop:`22px`,width:`100%`,border:`none`,borderRadius:`999px`,padding:`12px 16px`,fontWeight:800,cursor:`pointer`},children:`Schließen`})]})}),e.cover&&(0,U.jsx)(`img`,{src:e.cover,alt:e.name,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`18px`,marginTop:`16px`,display:`block`}}),!e.cover&&n.length>0&&(0,U.jsx)(`div`,{style:{marginTop:`16px`},children:(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`8px`},children:n.slice(0,4).map((t,r)=>{let i=n.length-3;return n.length>4&&r===3?(0,U.jsxs)(`div`,{style:{aspectRatio:`1 / 1`,borderRadius:`14px`,background:`#10141d`,border:`1px solid #202636`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:`20px`,color:`#d7dce4`},children:[`+`,i]},`more-${e.id}`):n.length>4&&r>3?null:(0,U.jsx)(`img`,{src:t.cover,alt:t.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`14px`,display:`block`}},`${t.id}-${r}`)})})})]},e.id)})})]}),e===`playlists`&&_t&&(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`button`,{onClick:()=>F(null),style:{...G(L),marginBottom:`16px`},children:`← Zurück zu Playlists`}),(0,U.jsx)(`div`,{style:{marginBottom:`18px`},children:(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:`16px`,alignItems:`start`,flexWrap:`wrap`},children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h1`,{style:{margin:0,marginBottom:`8px`},children:_t.name}),(0,U.jsxs)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:[_t.songIds.length,` `,_t.songIds.length===1?`Song`:`Songs`]})]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>za(_t),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>Ba(_t),style:G(L),children:`Shuffle`}),(0,U.jsx)(`button`,{onClick:()=>La(_t),style:G(L),children:`Export`})]})]})}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[Va(_t.songIds).map((e,t)=>(0,U.jsx)(co,{song:e,index:t,showAlbum:!0,playlistContext:_t},`${e.id}-${t}`)),(0,U.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`patchnotes`&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:or,children:[(0,U.jsx)(`div`,{style:H,children:`Info`}),(0,U.jsx)(`h1`,{style:sr,children:`Patchnotes`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gap:`18px`},children:Qn.map((e,t)=>(0,U.jsxs)(`div`,{style:{background:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,color:`#d7dce4`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`12px`,marginBottom:`14px`,flexWrap:`wrap`},children:[(0,U.jsxs)(`div`,{style:{fontWeight:800,fontSize:`22px`},children:[`Version `,e.version]}),(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:e.label||(t===0?`Aktueller Patch`:`Früherer Patch`)})]}),(0,U.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,lineHeight:1.9},children:e.changes.map((e,t)=>(0,U.jsx)(`li`,{children:e},t))})]},e.version))})]}),e===`extra`&&(0,U.jsxs)(`div`,{style:{padding:z?`32px 20px`:`56px 32px 32px`,color:`white`,maxWidth:`980px`,margin:`0 auto`},children:[(0,U.jsx)(`h1`,{style:{...sr,marginBottom:`28px`},children:`Extra`}),(0,U.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`28px`,position:`relative`},children:(0,U.jsxs)(`div`,{onMouseEnter:()=>Mt(!0),onMouseLeave:()=>Mt(!1),onClick:()=>Mt(e=>!e),style:{position:`relative`,display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`999px`,padding:`8px 14px`,color:`#d7dce4`,fontSize:`14px`,cursor:`help`},children:[(0,U.jsx)(`span`,{children:`ℹ️`}),(0,U.jsx)(`span`,{children:`Wie kommen Titel in den Extra-Bereich?`}),(0,U.jsxs)(`div`,{style:{position:`absolute`,top:`calc(100% + 12px)`,left:`50%`,transform:`translateX(-50%)`,width:z?`280px`:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`18px`,padding:`18px`,color:`#d7dce4`,lineHeight:1.6,textAlign:`left`,boxShadow:`0 20px 45px rgba(0,0,0,0.45)`,zIndex:20,opacity:+!!jt,pointerEvents:jt?`auto`:`none`,transition:`opacity 0.2s ease, transform 0.2s ease`},className:`extraInfoTooltip`,children:[(0,U.jsx)(`strong`,{style:{color:`white`},children:`Hinweis zu Extra-Titeln`}),(0,U.jsx)(`br`,{}),`Einmal im Monat setzt sich der MM zusammen und wählt aus den eingereichten Cover- und Mashup-Anfragen aus.`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),`Pro Person können monatlich bis zu `,(0,U.jsx)(`strong`,{children:`zwei Cover`}),` und`,` `,(0,U.jsx)(`strong`,{children:`zwei Mashups`}),` berücksichtigt werden. Insgesamt entstehen daraus bis zu vier Cover und vier Mashups.`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),`Aus diesen Titeln wird anschließend fair ausgelost, welcher Titel am Ende des Monats im Extra-Bereich erscheint.`]})]})}),nr.length===0?(0,U.jsxs)(`div`,{style:{background:`#171b24`,border:`1px dashed #3a4257`,borderRadius:`20px`,padding:`36px 24px`,textAlign:`center`,color:`#9ca3af`},children:[(0,U.jsx)(`div`,{style:{fontSize:`34px`,marginBottom:`10px`},children:`🎵`}),(0,U.jsx)(`strong`,{style:{color:`#d7dce4`,fontSize:`18px`},children:`Noch keine Titel vorhanden.`}),(0,U.jsx)(`p`,{style:{marginTop:`8px`,fontSize:`14px`},children:`Ausgewählte Cover und Mashups erscheinen später hier.`})]}):(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[nr.map((e,t)=>(0,U.jsx)(co,{song:{...e,trackNumber:t+1,album:e.type===`mashup`?`M ${e.month||`Unbekannt`}`:`C ${e.month||`Unbekannt`}`},index:t,showAlbum:!0},e.id)),(0,U.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]}),e===`albums`&&!u&&(0,U.jsxs)(`section`,{children:[(0,U.jsxs)(`div`,{style:or,children:[(0,U.jsx)(`div`,{style:H,children:`Bibliothek`}),(0,U.jsx)(`h1`,{style:sr,children:`Alben`})]}),(0,U.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`1fr`:`repeat(2, minmax(0, 1fr))`,gap:`18px`},children:Ei.map(e=>(0,U.jsxs)(`div`,{onMouseEnter:()=>E(`albums-page-${e.id}`),onMouseLeave:()=>E(null),style:{background:T===`albums-page-${e.id}`?`#1a2230`:`#141821`,border:`1px solid #202636`,borderRadius:`22px`,padding:`16px`,minWidth:0,transform:T===`albums-page-${e.id}`?`translateY(-4px) scale(1.02)`:`translateY(0) scale(1)`,boxShadow:T===`albums-page-${e.id}`?`0 14px 30px rgba(0,0,0,0.35)`:`0 0 0 rgba(0,0,0,0)`,transition:`transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`16px`,marginBottom:`14px`}}),(0,U.jsx)(`div`,{style:{fontWeight:800,fontSize:`18px`,marginBottom:`6px`,lineHeight:1.15,wordBreak:`break-word`},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,marginBottom:`8px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:e.artist,fontSize:`14px`,color:`#9aa2ad`})}),(0,U.jsxs)(`div`,{style:{color:`#8f8f8f`,fontSize:`14px`,marginBottom:`14px`},children:[e.tracks.length,` `,e.tracks.length===1?`Track`:`Tracks`,` · `,e.releaseType]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>oa(e),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>{d(e),t(`albums`)},style:G(L),children:`Öffnen`})]})]},e.id))})]}),e===`albums`&&u&&(0,U.jsxs)(`section`,{children:[(0,U.jsx)(`button`,{onClick:()=>d(null),style:{...G(L),marginBottom:`16px`},children:`← Zurück zu Alben`}),(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:z?`1fr`:`minmax(220px, 280px) minmax(0, 1fr)`,gap:z?`18px`:`24px`,alignItems:z?`start`:`end`,background:`linear-gradient(180deg, #1b2130 0%, #10141d 100%)`,borderRadius:`26px`,padding:z?`18px`:`22px`,marginBottom:`22px`},children:[(0,U.jsx)(`img`,{src:u.cover,alt:u.title,style:{width:`100%`,maxWidth:z?`280px`:`100%`,justifySelf:z?`center`:`stretch`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`20px`,margin:z?`0 auto`:0}}),(0,U.jsxs)(`div`,{style:{minWidth:0,textAlign:z?`center`:`left`},children:[(0,U.jsx)(`div`,{style:{color:`#c2cad6`,fontSize:`14px`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:`10px`},children:u.releaseType}),(0,U.jsx)(`h1`,{style:{fontSize:z?`clamp(28px, 10vw, 40px)`:`clamp(34px, 4vw, 56px)`,margin:0,marginBottom:`10px`,lineHeight:.95,maxWidth:z?`100%`:`780px`,wordBreak:`break-word`},children:u.title}),(0,U.jsx)(`div`,{style:{color:`#d7dce4`,marginBottom:`8px`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:u.artist,fontSize:`15px`,color:`#d7dce4`})}),(0,U.jsxs)(`div`,{style:{color:`#9aa2ad`,marginBottom:`18px`},children:[u.tracks.length,` `,u.tracks.length===1?`Track`:`Tracks`,` • `,K(u.tracks)]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,justifyContent:z?`center`:`flex-start`},children:[(0,U.jsx)(`button`,{onClick:()=>oa(u),style:Lr(L),children:`Play`}),(0,U.jsx)(`button`,{onClick:()=>sa(u),style:G(L),children:`Shuffle`})]})]})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[!z&&(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 56px minmax(220px, 1.8fr) minmax(160px, 1fr) 90px 48px`,gap:`14px`,padding:`0 16px 8px`,color:`#8e96a3`,fontSize:`13px`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:[(0,U.jsx)(`div`,{children:`#`}),(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{children:`Titel`}),(0,U.jsx)(`div`,{children:`Album`}),(0,U.jsx)(`div`,{children:`Dauer`}),(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{})]}),[...u.tracks].sort((e,t)=>(e.albumTrackNumber??e.trackNumber??999)-(t.albumTrackNumber??t.trackNumber??999)).map((e,t)=>(0,U.jsx)(co,{song:e,index:t,showAlbum:!1},e.id)),(0,U.jsx)(`div`,{style:{height:c?`260px`:`40px`}})]})]})]}),(0,U.jsxs)(`div`,{style:{position:`fixed`,left:z?`10px`:0,right:z?`10px`:0,bottom:z?`10px`:0,background:Y?`linear-gradient(135deg, rgba(2,22,12,0.98), rgba(5,54,29,0.98), rgba(24,20,7,0.98))`:`#0f1117`,border:z?Y?`1px solid rgba(244,201,93,0.44)`:`1px solid #202636`:`none`,borderTop:Y?`1px solid rgba(244,201,93,0.44)`:`1px solid #202636`,borderRadius:z?`22px`:0,display:`grid`,gridTemplateColumns:z?`1fr`:`minmax(220px, 320px) minmax(320px, 1fr) minmax(260px, 360px)`,alignItems:`center`,gap:z?`12px`:`18px`,padding:z?`12px 14px 14px`:`14px 18px`,boxShadow:Y?`0 -8px 34px rgba(57,255,136,0.14), 0 0 26px rgba(244,201,93,0.08)`:z?`0 16px 40px rgba(0,0,0,0.35)`:`none`,zIndex:50},children:[(0,U.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:z?`10px`:`12px`,minWidth:0,marginBottom:z?`2px`:0},children:n?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`img`,{src:n.cover,alt:n.title,onClick:q,style:{width:z?`54px`:`58px`,height:z?`54px`:`58px`,objectFit:`cover`,borderRadius:z?`14px`:`12px`,cursor:`pointer`,flexShrink:0}}),(0,U.jsxs)(`div`,{style:{minWidth:0,flex:1},children:[(0,U.jsx)(`button`,{onClick:q,style:{background:`transparent`,border:`none`,padding:0,margin:0,color:`white`,fontWeight:700,fontSize:`16px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`,textAlign:`left`,width:`100%`},children:n.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`14px`,textAlign:`left`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:n.artist,fontSize:`14px`,color:`#9aa2ad`})})]}),(0,U.jsx)(so,{song:n,size:z?38:42})]}):(0,U.jsx)(`div`,{style:{color:`#8f8f8f`},children:`Wähle einen Song aus.`})}),(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:z?`8px`:`10px`,minWidth:0},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:z?`8px`:`12px`,justifyContent:`center`,width:`100%`},children:[(0,U.jsx)(`button`,{onClick:Ja,style:Xr,children:`⏮`}),(0,U.jsx)(`button`,{onClick:eo,style:Zr,children:C?`❚❚`:`▶`}),(0,U.jsx)(`button`,{onClick:qa,style:Xr,children:`⏭`}),(0,U.jsx)(`button`,{onClick:io,style:{...Xr,color:ye===`off`?`#9aa2ad`:R.accent,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:ye===`one`?`R1`:`R`})]}),(0,U.jsxs)(`div`,{style:{width:`100%`,maxWidth:`680px`,display:`grid`,gridTemplateColumns:z?`40px minmax(0, 1fr) auto`:`48px minmax(0, 1fr) auto`,gap:z?`8px`:`12px`,alignItems:`center`},children:[(0,U.jsx)(`div`,{style:{color:Y?`#f4d675`:`#9aa2ad`,fontSize:`12px`,fontWeight:700,fontVariantNumeric:`tabular-nums`,padding:0,background:`transparent`,whiteSpace:`nowrap`},children:$a(O)}),(0,U.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,U.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:oe,disabled:Ie,onChange:to,style:{...Qr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
  90deg,
  ${R.progressFill} 0%,
  ${R.progressFill} ${oe}%,
  ${R.progressRest} ${oe}%,
  ${R.progressRest} 100%
)`}})}),(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:z?`6px`:`10px`,justifyContent:`flex-end`,position:`relative`,zIndex:3,background:`transparent`,paddingLeft:0},children:[(0,U.jsx)(`div`,{style:{color:Y?`#f4d675`:`#9aa2ad`,fontSize:`12px`,fontWeight:700,fontVariantNumeric:`tabular-nums`,padding:0,margin:0,minWidth:`34px`,textAlign:`right`,background:`transparent`,border:`none`,boxShadow:`none`,whiteSpace:`nowrap`},children:$a(ce)}),(0,U.jsx)(`button`,{onClick:no,style:{background:Y?`rgba(57,255,136,0.10)`:`#0f1117`,border:Y?`1px solid rgba(244,201,93,0.42)`:`1px solid #2a3142`,color:Y?`#f5dda0`:`white`,borderRadius:`8px`,padding:z?`4px 7px`:`4px 8px`,cursor:n?`pointer`:`default`,fontSize:z?`11px`:`12px`,opacity:n?1:.5},children:`Text`}),(0,U.jsx)(`audio`,{ref:Xn,autoPlay:!Ie,playsInline:!0,preload:`metadata`,src:n?.file||void 0,onError:e=>{console.log(`Audio konnte nicht geladen werden:`,n?.title,n?.file,e.currentTarget.error)},style:{display:`none`}},n?.id??`no-song`)]})]})]}),!z&&(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`140px minmax(0, 1fr)`,alignItems:`center`,gap:`16px`,minWidth:0},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,justifyContent:`flex-start`,minWidth:0},children:[(0,U.jsx)(`button`,{onClick:ro,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:A===0?`🔇`:`🔊`}),(0,U.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:A,onChange:e=>{let t=Number(e.target.value);de(t),t>0&&fe(t)},style:{...$r,background:`linear-gradient(
  90deg,
  ${R.volumeFill} ${A*100}%,
  ${R.progressRest} ${A*100}%
)`}})]}),(0,U.jsx)(`div`,{style:{textAlign:`right`,color:`#9aa2ad`,fontSize:`14px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,minWidth:0},children:i.length>0?`Als Nächstes: ${i[0].title}`:`Keine Songs in der Warteschlange`})]})]}),wt&&n&&(0,U.jsxs)(`div`,{onMouseMove:ao,onMouseEnter:ao,onMouseLeave:()=>Ot(!1),style:{position:`fixed`,inset:0,background:`#05070c`,zIndex:90,overflow:`hidden`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,inset:`-40px`,backgroundImage:`url('${n.cover}')`,backgroundSize:`cover`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,filter:`blur(34px)`,transform:kt?`translateX(0) scale(1.08)`:`translateX(6%) scale(1.12)`,opacity:kt?.95:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.78) 100%)`}}),(0,U.jsx)(`button`,{onClick:J,style:{position:`absolute`,top:`24px`,right:`24px`,width:`52px`,height:`52px`,borderRadius:`16px`,border:`1px solid rgba(255,255,255,0.15)`,background:`rgba(10,12,18,0.55)`,color:`white`,cursor:`pointer`,fontSize:`22px`,zIndex:4,opacity:+!!Dt,transform:Dt?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.25s ease, transform 0.25s ease`,backdropFilter:`blur(10px)`},children:`✕`}),M&&(0,U.jsxs)(`div`,{style:{position:`absolute`,left:z?`16px`:`max(32px, 4vw)`,right:z?`16px`:`auto`,top:z?`auto`:`50%`,bottom:z?`120px`:`auto`,transform:z?`none`:`translateY(-50%)`,width:z?`auto`:`min(360px, 28vw)`,maxHeight:z?`38vh`:`62vh`,overflowY:`auto`,background:`rgba(8,10,16,0.68)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`22px`,zIndex:3,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`16px`,marginBottom:`16px`},children:[(0,U.jsxs)(`div`,{style:{width:`100%`,textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,U.jsx)(`div`,{style:{fontSize:`20px`,fontWeight:800},children:n.title})]}),(0,U.jsx)(`button`,{onClick:()=>ge(!1),style:{width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid rgba(255,255,255,0.12)`,background:`rgba(23,27,36,0.8)`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,U.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:_e})]}),(0,U.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:z?`1fr`:M?`minmax(320px, 1fr) minmax(420px, 540px) minmax(280px, 1fr)`:`1fr minmax(420px, 540px) minmax(320px, 1fr)`,alignItems:`center`,zIndex:2,padding:z?`24px 16px 140px`:`40px`,gap:z?`20px`:`40px`},children:[(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,U.jsx)(`img`,{src:n.cover,alt:n.title,style:{width:z?`min(78vw, 360px)`:`min(52vw, 540px)`,maxHeight:z?`42vh`:`62vh`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:`28px`,boxShadow:`0 30px 80px rgba(0,0,0,0.45)`,transform:kt?`translateX(0)`:`translateX(30px)`,opacity:kt?1:.2,transition:`transform 0.55s ease, opacity 0.55s ease`}})}),(0,U.jsxs)(`div`,{style:{alignSelf:`center`,justifySelf:z?`center`:`start`,maxWidth:`520px`,textAlign:z?`center`:`left`,opacity:+!!Dt,transform:Dt?`translateY(0)`:`translateY(14px)`,transition:`opacity 0.25s ease, transform 0.25s ease`,pointerEvents:Dt?`auto`:`none`},children:[(0,U.jsx)(`div`,{style:{color:`rgba(255,255,255,0.72)`,fontSize:`14px`,marginBottom:`8px`,letterSpacing:`0.08em`,textTransform:`uppercase`,textShadow:`0 0 24px rgba(0,0,0,0.45)`},children:`Now Playing`}),(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:z?`center`:`flex-start`,gap:z?`10px`:`16px`,marginBottom:`10px`,minWidth:0},children:[(0,U.jsx)(`div`,{style:{fontSize:`clamp(30px, 4vw, 58px)`,fontWeight:900,lineHeight:1,color:`white`,textShadow:R.titleShadow,minWidth:0,overflowWrap:`anywhere`},children:n.title}),(0,U.jsx)(so,{song:n,size:z?46:54})]}),(0,U.jsx)(`div`,{style:{fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`,textShadow:`0 0 18px rgba(0,0,0,0.45)`},children:(0,U.jsx)(Wr,{berryMode:L,openArtist:Za,artist:n.artist,fontSize:`clamp(16px, 1.4vw, 24px)`,color:`rgba(255,255,255,0.82)`})})]})]}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`50%`,bottom:`34px`,transform:`translateX(-50%)`,width:z?`calc(100vw - 20px)`:`min(900px, 88vw)`,zIndex:4,opacity:+!!Dt,transition:`opacity 0.25s ease, transform 0.25s ease`},children:(0,U.jsxs)(`div`,{style:{background:`rgba(8,10,16,0.55)`,border:`1px solid rgba(255,255,255,0.10)`,borderRadius:`24px`,padding:`18px 22px`,backdropFilter:`blur(16px)`,boxShadow:`0 20px 50px rgba(0,0,0,0.30)`},children:[(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr auto auto`,alignItems:`center`,marginBottom:`14px`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`16px`},children:[(0,U.jsx)(`button`,{onClick:Ja,style:Xr,children:`⏮`}),(0,U.jsx)(`button`,{onClick:eo,style:Zr,children:C?`❚❚`:`▶`}),(0,U.jsx)(`button`,{onClick:qa,style:Xr,children:`⏭`})]}),(0,U.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,U.jsx)(`button`,{onClick:io,style:{...Xr,color:ye===`off`?`#9aa2ad`:R.accent,fontWeight:700,fontSize:`14px`,minWidth:`52px`},children:ye===`one`?`R1`:`R`})}),(0,U.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginLeft:`10px`},children:(0,U.jsx)(`button`,{onClick:no,style:{background:M?R.softBg:`transparent`,border:M?`1px solid ${R.borderColor}`:`1px solid rgba(255,255,255,0.12)`,color:`white`,borderRadius:`12px`,padding:`6px 10px`,cursor:n?`pointer`:`default`,fontSize:`12px`,opacity:n?1:.5},children:`Text`})})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`64px minmax(0, 1fr) 190px`,gap:`16px`,alignItems:`center`},children:[(0,U.jsx)(`div`,{style:{color:Y?`#f4d675`:`#9aa2ad`,fontSize:`12px`,fontWeight:700,fontVariantNumeric:`tabular-nums`,textAlign:`right`,position:`relative`,zIndex:3,background:`transparent`,padding:0,justifySelf:`end`},children:$a(O)}),(0,U.jsx)(`div`,{style:{position:`relative`,height:`18px`,display:`flex`,alignItems:`center`,padding:`0 8px`,boxSizing:`border-box`,minWidth:0},children:(0,U.jsx)(`input`,{type:`range`,min:`0`,max:`100`,step:`0.1`,value:oe,disabled:Ie,onChange:to,style:{...Qr,width:`calc(100% - 16px)`,marginLeft:`8px`,marginRight:`8px`,height:`4px`,borderRadius:`999px`,background:`linear-gradient(
  90deg,
  ${R.progressFill} 0%,
  ${R.progressFill} ${oe}%,
  ${R.progressRest} ${oe}%,
  ${R.progressRest} 100%
)`}})}),(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:`10px`,position:`relative`,zIndex:3,background:`rgba(8,10,16,0.55)`,paddingLeft:`6px`},children:[(0,U.jsx)(`div`,{style:{color:`#d0d5dd`,fontSize:`13px`,padding:`0 4px`,background:`rgba(8,10,16,0.55)`},children:$a(ce)}),(0,U.jsx)(`button`,{onClick:ro,style:{background:`transparent`,border:`none`,color:`#ffffff`,fontSize:`14px`,cursor:`pointer`,padding:0,lineHeight:1},children:A===0?`🔇`:`🔊`}),(0,U.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:A,onChange:e=>{let t=Number(e.target.value);de(t),t>0&&fe(t)},style:{...$r,width:`110px`,background:`linear-gradient(
  90deg,
  ${R.volumeFill} ${A*100}%,
  ${R.progressRest} ${A*100}%
)`}})]})]})]})})]}),me&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>he(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:70}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(700px, 90vw)`,maxHeight:`70vh`,overflowY:`auto`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:71,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,U.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Liedtext`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:n?.title||`Unbekannter Song`})]}),(0,U.jsx)(`button`,{onClick:()=>he(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,U.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.8,color:`#d7dce4`,fontSize:`15px`},children:_e})]})]}),vt&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:ha,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:74}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:75,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,U.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Playlist`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Zur Playlist hinzufügen`})]}),(0,U.jsx)(`button`,{onClick:ha,style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`10px`,marginBottom:`18px`},children:[ht.map(e=>(0,U.jsx)(`button`,{onClick:()=>Pa(e.id,bt),style:Rr(!1),children:e.name},e.id)),ht.length===0&&(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`14px`},children:`Noch keine Playlist vorhanden.`})]}),(0,U.jsxs)(`div`,{style:{borderTop:`1px solid #202636`,paddingTop:`18px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`10px`},children:`Neue Playlist erstellen`}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`input`,{type:`text`,value:St,onChange:e=>Ct(e.target.value),placeholder:`Playlist-Name...`,style:{flex:1,minWidth:`220px`,background:`#141821`,border:`1px solid #202636`,borderRadius:`14px`,padding:`12px 14px`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`}}),(0,U.jsx)(`button`,{onClick:Na,style:Lr(L),children:`Erstellen`})]})]})]})]}),Je&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>{Ye(!1),N(``),P(``)},style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:76}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(420px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:77,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,U.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Zugriff erforderlich`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Passwort eingeben`})]}),(0,U.jsx)(`button`,{onClick:()=>{Ye(!1),N(``),P(``)},style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,U.jsx)(`input`,{type:`text`,value:Xe,onChange:e=>{N(e.target.value),Ze&&P(``)},onKeyDown:e=>{e.key===`Enter`&&ja()},placeholder:`Passwort eingeben...`,style:{width:`100%`,padding:`12px 14px`,borderRadius:`14px`,border:`1px solid #202636`,background:`#141821`,color:`white`,outline:`none`,fontSize:`14px`,boxSizing:`border-box`,marginBottom:`12px`}}),Ze&&(0,U.jsx)(`div`,{style:{color:`#ff6b6b`,fontSize:`13px`,marginBottom:`12px`,textAlign:`center`},children:Ze}),(0,U.jsx)(`button`,{onClick:ja,style:{...Lr(L),width:`100%`,justifyContent:`center`},children:`Bestätigen`})]})]}),Be&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>Ve(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.65)`,zIndex:88}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(440px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:89,color:`white`,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`#8e96a3`,marginBottom:`6px`},children:`Versteckte Frequenz`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,marginBottom:`18px`},children:`📡 Neo City Radio Debug`}),(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`12px`},children:[(0,U.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Nächster Extra Songs Block`}),(0,U.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:900},children:Ki(lo.nextExtra)})]}),(0,U.jsxs)(`div`,{style:{background:`#171b24`,borderRadius:`16px`,padding:`16px`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Nächster Radio Exclusive Block`}),(0,U.jsx)(`div`,{style:{fontSize:`30px`,fontWeight:900},children:Ki(lo.nextExtra2)})]})]}),(0,U.jsx)(`button`,{onClick:()=>Ve(!1),style:{...Lr(L),width:`100%`,marginTop:`20px`,justifyContent:`center`},children:`Schließen`})]})]}),Qe&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>$e(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:78}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(440px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:79,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`,textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{fontSize:`14px`,color:R.accent,marginBottom:`8px`,fontWeight:700},children:`Secret freigeschaltet`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800,marginBottom:`12px`},children:`Herzlichen Glückwunsch`}),(0,U.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.6,fontSize:`15px`,marginBottom:`18px`},children:[`Du hast einen geheimen Song freigeschaltet.`,(0,U.jsx)(`br`,{}),`Du kannst ihn jetzt direkt einer Playlist hinzufügen.`]}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:Ma,style:Lr(L),children:`Zu Playlist hinzufügen`}),(0,U.jsx)(`button`,{onClick:()=>$e(!1),style:G(L),children:`Später`})]})]})]}),xe&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{onClick:()=>Se(!1),style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.55)`,zIndex:72}}),(0,U.jsxs)(`div`,{style:{position:`fixed`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`min(520px, 90vw)`,background:`#111318`,border:`1px solid #202636`,borderRadius:`22px`,padding:`24px`,zIndex:73,boxShadow:`0 20px 50px rgba(0,0,0,0.45)`},children:[(0,U.jsxs)(`div`,{style:{position:`relative`,marginBottom:`18px`},children:[(0,U.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{color:`#8e96a3`,fontSize:`13px`,marginBottom:`6px`},children:`Community`}),(0,U.jsx)(`div`,{style:{fontSize:`24px`,fontWeight:800},children:`Song einreichen`})]}),(0,U.jsx)(`button`,{onClick:()=>Se(!1),style:{position:`absolute`,top:0,right:0,width:`42px`,height:`42px`,borderRadius:`12px`,border:`1px solid #2a3142`,background:`#171b24`,color:`white`,cursor:`pointer`,fontSize:`18px`},children:`✕`})]}),(0,U.jsxs)(`div`,{style:{color:`#d7dce4`,lineHeight:1.7,fontSize:`15px`,textAlign:`center`,marginBottom:`22px`},children:[`Du kannst hier anonym einen Song zur Überprüfung einreichen.`,(0,U.jsx)(`br`,{}),`Das Formular öffnet sich in einem neuen Tab.`]}),(0,U.jsxs)(`div`,{style:{color:`#d7dce4`,fontSize:`14px`,lineHeight:1.6,textAlign:`center`,marginBottom:`18px`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`16px`,padding:`14px`},children:[`Cover- und Mashup-Anfragen zählen zusammen.`,(0,U.jsx)(`br`,{}),`Pro Monat sind maximal 5 Anfragen möglich.`]}),(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`a`,{href:Cr,target:`_blank`,rel:`noreferrer`,style:{...Lr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:`Formular öffnen`}),(0,U.jsx)(`button`,{onClick:()=>pa(`cover`),style:G(L),children:`Cover beantragen`}),(0,U.jsx)(`button`,{onClick:()=>pa(`mashup`),style:G(L),children:`Mashup beantragen`})]})]})]}),Ce&&Te===`cover`&&(0,U.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,U.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,U.jsx)(`button`,{onClick:ma,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,U.jsx)(`h2`,{style:{marginTop:0},children:`Cover beantragen`}),ke===1&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle einen bestehenden Song aus.`}),(0,U.jsxs)(`select`,{value:je,onChange:e=>Me(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,U.jsx)(`option`,{value:``,children:`Bitte auswählen`}),ri.map(e=>(0,U.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,U.jsx)(`button`,{disabled:!je,onClick:()=>Ae(2),style:Lr(L),children:`Weiter`})]}),ke===2&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`12px`},children:`Gewünschter Stil / Prompt:`}),(0,U.jsx)(`textarea`,{value:Ne,onChange:e=>Pe(e.target.value),placeholder:`Jazz-Version, Country-Version, EDM-Version...`,style:{width:`100%`,minHeight:`120px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,U.jsx)(`button`,{disabled:!Ne.trim(),onClick:()=>Ae(3),style:Lr(L),children:`Text generieren`})]}),ke===3&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,U.jsx)(`textarea`,{readOnly:!0,value:ra,style:{width:`100%`,minHeight:`180px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(ra),style:G(L),children:`Text kopieren`}),(0,U.jsx)(`a`,{href:Cr,target:`_blank`,rel:`noreferrer`,style:{...Lr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),Ce&&Te===`mashup`&&(0,U.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,U.jsxs)(`div`,{style:{width:`100%`,maxWidth:`520px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`24px`,padding:`24px`,color:`white`},children:[(0,U.jsx)(`button`,{onClick:ma,style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,U.jsx)(`h2`,{style:{marginTop:0},children:`Mashup beantragen`}),ke===1&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`12px`},children:`Wähle zwei bestehende Songs für dein Mashup aus.`}),(0,U.jsxs)(`select`,{value:We,onChange:e=>Ge(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`12px`},children:[(0,U.jsx)(`option`,{value:``,children:`Song 1 auswählen`}),ri.map(e=>(0,U.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,U.jsxs)(`select`,{value:Ke,onChange:e=>qe(e.target.value),style:{width:`100%`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,marginBottom:`18px`},children:[(0,U.jsx)(`option`,{value:``,children:`Song 2 auswählen`}),ri.map(e=>(0,U.jsxs)(`option`,{value:e.id,children:[e.id,`. `,e.title]},e.id))]}),(0,U.jsx)(`button`,{disabled:!We||!Ke||We===Ke,onClick:()=>Ae(2),style:Lr(L),children:`Weiter`})]}),ke===2&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`18px`,lineHeight:1.6},children:`Die Songtexte der beiden Songs werden für ein Mashup verwendet. Daraus wird ein neues Mashup erstellt. Das fertige Mashup wird später zugesendet.`}),(0,U.jsx)(`button`,{onClick:()=>Ae(3),style:Lr(L),children:`Text generieren`})]}),ke===3&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`12px`},children:`Diesen Text ins Google-Formular einfügen:`}),(0,U.jsx)(`textarea`,{readOnly:!0,value:ia,style:{width:`100%`,minHeight:`160px`,padding:`12px`,borderRadius:`12px`,background:`#1a1f2b`,border:`1px solid #2a3142`,color:`white`,resize:`vertical`,marginBottom:`18px`,boxSizing:`border-box`,width:`100%`,maxWidth:`100%`,overflowWrap:`break-word`,wordBreak:`break-word`}}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:()=>navigator.clipboard.writeText(ia),style:G(L),children:`Text kopieren`}),(0,U.jsx)(`a`,{href:Cr,target:`_blank`,rel:`noreferrer`,style:{...Lr(L),textDecoration:`none`,display:`inline-flex`,alignItems:`center`},children:`Google-Formular öffnen`})]})]})]})}),Ut&&(0,U.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:1e4,background:L===`default`?`radial-gradient(circle at top, #182033, #05070d 70%)`:`radial-gradient(circle at top, ${R.softBg}, transparent 45%), radial-gradient(circle at top, #182033, #05070d 70%)`,color:`white`,overflow:`hidden`,display:`flex`,flexDirection:`column`,padding:z?`18px`:`30px`,boxSizing:`border-box`},children:[(0,U.jsx)(`audio`,{ref:I,preload:`auto`}),(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:`20px`},children:[(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`8px`},children:[(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:`13px`,fontWeight:700,lineHeight:1.2},children:`Königliche AI Songs`}),(0,U.jsx)(`h1`,{style:{margin:0,lineHeight:1.05},children:`Release-Zeitstrahl`})]}),(0,U.jsx)(`button`,{onClick:hi,style:G(L),children:`✕ Schließen`})]}),(0,U.jsx)(`div`,{ref:on,style:{flex:1,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`,minHeight:z?`430px`:`540px`,transform:Zt?`scale(1)`:`scale(1.04)`,transition:`transform 1.2s ease`},children:$t?(0,U.jsxs)(`div`,{style:{maxWidth:`760px`,textAlign:`center`,padding:z?`26px 18px`:`42px`,borderRadius:`34px`,background:L===`default`?`linear-gradient(135deg, rgba(29,185,84,0.14), rgba(20,24,33,0.92))`:`linear-gradient(135deg, ${R.softBg}, rgba(20,24,33,0.92))`,border:`1px solid ${R.borderColor}`,boxShadow:`0 0 60px ${R.borderColor}, 0 30px 90px rgba(0,0,0,0.55)`},children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`#9aa2ad`,fontWeight:900,letterSpacing:`0.14em`,textTransform:`uppercase`,marginBottom:`14px`},children:`Archiv abgeschlossen`}),(0,U.jsx)(`h2`,{style:{margin:`0 0 16px`,fontSize:z?`32px`:`54px`,lineHeight:1,textShadow:R.titleShadow},children:`Das war die Geschichte der Königlichen AI Songs.`}),(0,U.jsx)(`p`,{style:{margin:`0 auto 26px`,maxWidth:`620px`,color:`#c7ced9`,fontSize:z?`15px`:`18px`,lineHeight:1.7},children:`Von den ersten chaotischen Releases bis zum heutigen Stand: ein Zeitstrahl voller Insider, Alben, Lore, Radio-Vibes und komplett königlicher Eskalation. Und ganz ehrlich: Das Ende ist noch lange nicht geschrieben.`}),(0,U.jsx)(`button`,{onClick:Ti,style:{...Lr(L),padding:`12px 22px`,fontSize:`15px`},children:`↻ Wiederholen`})]}):di.map((e,t)=>{let n=t-qt,r=n===0,i=Math.abs(n)<=1;return(0,U.jsxs)(`button`,{type:`button`,"data-timeline-index":t,onClick:()=>Si(t),disabled:!i,style:{position:`absolute`,left:`50%`,width:`${z?r?240:145:r?340:190}px`,background:`transparent`,border:`none`,padding:0,color:`white`,cursor:i?`pointer`:`default`,opacity:i?r?1:.5:0,pointerEvents:i?`auto`:`none`,transform:`translateX(calc(-50% + ${n*(z?150:270)}px)) scale(${r?1:.82})`,transition:`opacity 0.35s ease, transform 0.45s ease, width 0.45s ease, filter 0.35s ease`,textAlign:`center`,zIndex:r?3:i?2:1,filter:r?`none`:`blur(0.4px)`},children:[(0,U.jsx)(`div`,{style:{color:r?`#d7deea`:`#7d8796`,fontSize:r?`14px`:`12px`,marginBottom:`10px`,fontWeight:800},children:new Date(ur(e)).toLocaleDateString(`de-DE`)}),(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`100%`,aspectRatio:`1 / 1`,objectFit:`cover`,borderRadius:r?`28px`:`20px`,boxShadow:r?`0 0 50px ${R.borderColor}, 0 28px 70px rgba(0,0,0,0.55)`:`0 16px 34px rgba(0,0,0,0.42)`,border:r?`1px solid ${R.borderColor}`:`1px solid #202636`}}),(0,U.jsx)(`h3`,{style:{margin:r?`18px 0 6px`:`12px 0 4px`,lineHeight:1.15,fontSize:r?z?`22px`:`28px`:`14px`,maxWidth:`100%`,overflow:`hidden`,display:`-webkit-box`,WebkitLineClamp:r?2:1,WebkitBoxOrient:`vertical`},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9aa2ad`,fontSize:r?`15px`:`12px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.artist})]},e.id)})}),(0,U.jsxs)(`div`,{style:{borderTop:`1px solid #202636`,paddingTop:`18px`,display:`grid`,gap:`12px`},children:[(0,U.jsxs)(`div`,{style:{position:`relative`,height:z?`58px`:`64px`,marginBottom:`2px`,padding:`0 6px`},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,left:`0`,right:`0`,top:`30px`,height:`2px`,background:L===`default`?`linear-gradient(90deg, rgba(29,185,84,0.25), rgba(255,255,255,0.65), rgba(255,255,255,0.18))`:`linear-gradient(90deg, ${R.borderColor}, rgba(255,255,255,0.70), rgba(255,255,255,0.16))`,borderRadius:`999px`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,left:`0`,top:`38px`,color:`#7d8796`,fontSize:`11px`,fontWeight:900},children:pi}),(0,U.jsx)(`div`,{style:{position:`absolute`,right:`0`,top:`38px`,color:`#7d8796`,fontSize:`11px`,fontWeight:900,letterSpacing:`0.08em`},children:`???`}),fi.map(e=>{let t=e.songs.some(e=>e.timelineIndex===qt);return(0,U.jsx)(`button`,{type:`button`,onClick:()=>Si(e.firstIndex),onMouseEnter:()=>nn(e),onMouseLeave:()=>nn(null),style:{position:`absolute`,left:`${e.position}%`,top:t?`18px`:`22px`,transform:`translateX(-50%)`,width:t?`13px`:`9px`,height:t?`26px`:`18px`,borderRadius:`999px`,border:t?`1px solid ${R.borderColor}`:`1px solid rgba(255,255,255,0.22)`,background:t?R.accent:`#6f7785`,boxShadow:t?`0 0 18px ${R.borderColor}`:`0 0 10px rgba(0,0,0,0.35)`,cursor:`pointer`,padding:0,zIndex:4,transition:`all 0.2s ease`},"aria-label":`Springe zu ${new Date(e.date).toLocaleDateString(`de-DE`)}`},e.date)}),tn&&(0,U.jsxs)(`div`,{style:{position:`absolute`,left:`${tn.position}%`,bottom:`38px`,transform:`translateX(-50%)`,minWidth:`190px`,maxWidth:z?`230px`:`320px`,background:`rgba(8,10,16,0.96)`,border:`1px solid ${R.borderColor}`,borderRadius:`16px`,padding:`12px 13px`,color:`white`,boxShadow:`0 18px 40px rgba(0,0,0,0.45)`,pointerEvents:`none`,zIndex:20},children:[(0,U.jsx)(`div`,{style:{color:R.accent,fontSize:`12px`,fontWeight:900,marginBottom:`8px`},children:new Date(tn.date).toLocaleDateString(`de-DE`)}),(0,U.jsx)(`div`,{style:{display:`grid`,gap:`5px`},children:tn.songs.map(e=>(0,U.jsx)(`div`,{style:{fontSize:`12px`,color:`#d7deea`,lineHeight:1.25,fontWeight:e.timelineIndex===qt?900:700},children:e.title},e.id))})]})]}),(0,U.jsx)(`div`,{style:{height:`6px`,borderRadius:`999px`,background:`#202636`,overflow:`hidden`},children:(0,U.jsx)(`div`,{style:{height:`100%`,width:`${Yt}%`,background:R.accent,transition:`width 0.1s linear`}})}),(0,U.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,U.jsx)(`button`,{onClick:Ci,disabled:qt<=0,style:{...G(L),opacity:qt<=0?.45:1,cursor:qt<=0?`not-allowed`:`pointer`},children:`← Zurück`}),(0,U.jsx)(`button`,{onClick:xi,style:Lr(L),children:Gt?`▶ Weiter`:`⏸ Pause`}),(0,U.jsx)(`button`,{onClick:wi,disabled:qt>=di.length-1,style:{...G(L),opacity:qt>=di.length-1?.45:1,cursor:qt>=di.length-1?`not-allowed`:`pointer`},children:`Weiter →`})]})]})]}),et&&(0,U.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:9999,background:`radial-gradient(circle at 50% 35%, rgba(29,185,84,0.18), transparent 34%), rgba(0,0,0,0.86)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,backdropFilter:`blur(10px)`},children:[(0,U.jsx)(`style`,{children:`
        @keyframes speedyPassHintFade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          18% {
            opacity: 1;
            transform: translateY(0);
          }
          82% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
      `}),(0,U.jsx)(`audio`,{ref:ft,src:Fn,loop:!0,preload:`auto`}),(0,U.jsxs)(`div`,{style:{width:`min(460px, 100%)`,background:`linear-gradient(135deg, rgba(29,185,84,0.20), rgba(20,24,33,0.98))`,border:`1px solid rgba(29,185,84,0.45)`,borderRadius:`24px`,padding:`24px`,color:`white`,boxShadow:`0 0 34px rgba(29,185,84,0.28)`,textAlign:`center`},children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:900,letterSpacing:`0.18em`,textTransform:`uppercase`,color:`#1db954`,marginBottom:`10px`},children:`Speedy Pass`}),(0,U.jsx)(`h2`,{style:{margin:`0 0 10px`,fontSize:`28px`},children:`Schnellzugang wird vorbereitet`}),(0,U.jsx)(`p`,{style:{margin:`0 0 18px`,color:`#b8c0cc`,fontWeight:700},children:ct}),nt?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{style:{minHeight:`44px`,margin:`4px 0 16px`,color:`#d8ffe6`,fontWeight:800,lineHeight:1.35,textShadow:`0 0 14px rgba(29,185,84,0.35)`,animation:`speedyPassHintFade 5s ease-in-out both`},children:Ln[ut]},ut),(0,U.jsx)(`div`,{style:{width:`100%`,height:`14px`,background:`rgba(255,255,255,0.10)`,borderRadius:`999px`,overflow:`hidden`,border:`1px solid rgba(255,255,255,0.10)`},children:(0,U.jsx)(`div`,{style:{width:`${ot}%`,height:`100%`,background:`linear-gradient(90deg, #1db954, #ffffff)`,borderRadius:`999px`,transition:`width 0.25s ease`,boxShadow:`0 0 18px rgba(29,185,84,0.55)`}})}),(0,U.jsxs)(`div`,{style:{marginTop:`14px`,fontSize:`30px`,color:`white`,fontWeight:900,textShadow:`0 0 18px rgba(29,185,84,0.45)`},children:[ot,`%`]})]}):(0,U.jsx)(`button`,{onClick:it?Aa:ka,style:{...Lr(L),width:`100%`,justifyContent:`center`,fontSize:`15px`,padding:`13px 18px`,marginTop:`4px`},children:`Speedy Pass starten`})]})]}),fn&&(0,U.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:9999,padding:`20px`},children:(0,U.jsxs)(`div`,{style:{width:`100%`,maxWidth:`460px`,background:`#11151d`,border:`1px solid #2a3142`,borderRadius:`22px`,padding:`22px`,color:`white`},children:[(0,U.jsx)(`button`,{onClick:()=>pn(!1),style:{background:`transparent`,border:`none`,color:`#aaa`,fontSize:`20px`,cursor:`pointer`,float:`right`},children:`✕`}),(0,U.jsx)(`h2`,{style:{marginTop:0},children:`Originale anzeigen`}),(0,U.jsx)(`p`,{style:{color:`#9ca3af`,marginBottom:`16px`},children:`Wähle aus, welchen Originalsong du anzeigen möchtest.`}),(0,U.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:mn.map(e=>(0,U.jsxs)(`button`,{onClick:()=>Ya(e),style:{display:`flex`,alignItems:`center`,gap:`12px`,width:`100%`,background:`#171b24`,border:`1px solid #2a3142`,borderRadius:`14px`,padding:`10px`,color:`white`,cursor:`pointer`,textAlign:`left`},children:[(0,U.jsx)(`img`,{src:e.cover,alt:e.title,style:{width:`44px`,height:`44px`,borderRadius:`10px`,objectFit:`cover`}}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontWeight:700},children:e.title}),(0,U.jsx)(`div`,{style:{color:`#9ca3af`,fontSize:`13px`},children:e.artist})]})]},e.id))})]})})]})}var Xr={width:`38px`,height:`38px`,borderRadius:`999px`,border:`none`,background:`transparent`,color:`white`,cursor:`pointer`,fontSize:`18px`},Zr={width:`44px`,height:`44px`,borderRadius:`999px`,border:`none`,background:`white`,color:`black`,cursor:`pointer`,fontSize:`18px`,fontWeight:700},Qr={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`transparent`,position:`relative`,zIndex:2,cursor:`pointer`,margin:0,minWidth:0,outline:`none`},$r={width:`100%`,appearance:`none`,WebkitAppearance:`none`,background:`linear-gradient(90deg, rgb(0, 19, 6) 0%, rgb(9, 105, 0) 100%)`,height:`4px`,borderRadius:`999px`,cursor:`pointer`,margin:0},ei=e=>({background:`transparent`,color:`#9aa2ad`,border:`none`,cursor:e?`grabbing`:`grab`,fontSize:`16px`,padding:0,lineHeight:1}),ti={width:`32px`,height:`32px`,background:`transparent`,color:`#c7ced9`,border:`none`,borderRadius:`8px`,cursor:`pointer`,fontSize:`16px`};v.createRoot(document.getElementById(`root`)).render((0,U.jsx)(y.StrictMode,{children:(0,U.jsx)(Yr,{})}));