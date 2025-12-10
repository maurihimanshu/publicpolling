function r0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function i0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ap={exports:{}},la={},Np={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),s0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),dh=Symbol.iterator;function g0(e){return e===null||typeof e!="object"?null:(e=dh&&e[dh]||e["@@iterator"],typeof e=="function"?e:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xp=Object.assign,Lp={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Lp,this.updater=n||Op}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dp(){}Dp.prototype=Zr.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=Lp,this.updater=n||Op}var Yu=qu.prototype=new Dp;Yu.constructor=qu;xp(Yu,Zr.prototype);Yu.isPureReactComponent=!0;var hh=Array.isArray,Mp=Object.prototype.hasOwnProperty,Xu={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function jp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Mp.call(t,r)&&!Up.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:gs,type:e,key:s,ref:a,props:i,_owner:Xu.current}}function m0(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function v0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fh=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v0(""+e.key):t.toString(36)}function lo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gs:case s0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+il(a,0):r,hh(i)?(n="",e!=null&&(n=e.replace(fh,"$&/")+"/"),lo(i,t,n,"",function(h){return h})):i!=null&&(Ju(i)&&(i=m0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hh(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+il(s,l);a+=lo(s,t,n,c,i)}else if(c=g0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+il(s,l++),a+=lo(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $s(e,t,n){if(e==null)return e;var r=[],i=0;return lo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},uo={transition:null},w0={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:uo,ReactCurrentOwner:Xu};function bp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:$s,forEach:function(e,t,n){$s(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $s(e,function(){t++}),t},toArray:function(e){return $s(e,function(t){return t})||[]},only:function(e){if(!Ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Zr;W.Fragment=o0;W.Profiler=l0;W.PureComponent=qu;W.StrictMode=a0;W.Suspense=h0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;W.act=bp;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xp({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Xu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mp.call(t,c)&&!Up.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:gs,type:e.type,key:i,ref:s,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:c0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u0,_context:e},e.Consumer=e};W.createElement=jp;W.createFactory=function(e){var t=jp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:d0,render:e}};W.isValidElement=Ju;W.lazy=function(e){return{$$typeof:p0,_payload:{_status:-1,_result:e},_init:y0}};W.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=uo.transition;uo.transition={};try{e()}finally{uo.transition=t}};W.unstable_act=bp;W.useCallback=function(e,t){return Me.current.useCallback(e,t)};W.useContext=function(e){return Me.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};W.useEffect=function(e,t){return Me.current.useEffect(e,t)};W.useId=function(){return Me.current.useId()};W.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Me.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};W.useRef=function(e){return Me.current.useRef(e)};W.useState=function(e){return Me.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Me.current.useTransition()};W.version="18.3.1";Np.exports=W;var U=Np.exports;const _0=i0(U),E0=r0({__proto__:null,default:_0},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=U,S0=Symbol.for("react.element"),T0=Symbol.for("react.fragment"),k0=Object.prototype.hasOwnProperty,C0=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P0={key:!0,ref:!0,__self:!0,__source:!0};function Fp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)k0.call(t,r)&&!P0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:S0,type:e,key:s,ref:a,props:i,_owner:C0.current}}la.Fragment=T0;la.jsx=Fp;la.jsxs=Fp;Ap.exports=la;var R=Ap.exports,zp={exports:{}},Je={},Bp={exports:{}},$p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var H=z.length;z.push(V);e:for(;0<H;){var ie=H-1>>>1,J=z[ie];if(0<i(J,V))z[ie]=V,z[H]=J,H=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],H=z.pop();if(H!==V){z[0]=H;e:for(var ie=0,J=z.length,ue=J>>>1;ie<ue;){var Dt=2*(ie+1)-1,Mt=z[Dt],Ut=Dt+1,jt=z[Ut];if(0>i(Mt,H))Ut<J&&0>i(jt,Mt)?(z[ie]=jt,z[Ut]=H,ie=Ut):(z[ie]=Mt,z[Dt]=H,ie=Dt);else if(Ut<J&&0>i(jt,H))z[ie]=jt,z[Ut]=H,ie=Ut;else break e}}return V}function i(z,V){var H=z.sortIndex-V.sortIndex;return H!==0?H:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],h=[],v=1,g=null,S=3,N=!1,A=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=z)r(h),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(h)}}function L(z){if(x=!1,E(z),!A)if(n(c)!==null)A=!0,oi(j);else{var V=n(h);V!==null&&Lt(L,V.startTime-z)}}function j(z,V){A=!1,x&&(x=!1,T(p),p=-1),N=!0;var H=S;try{for(E(V),g=n(c);g!==null&&(!(g.expirationTime>V)||z&&!k());){var ie=g.callback;if(typeof ie=="function"){g.callback=null,S=g.priorityLevel;var J=ie(g.expirationTime<=V);V=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(c)&&r(c),E(V)}else r(c);g=n(c)}if(g!==null)var ue=!0;else{var Dt=n(h);Dt!==null&&Lt(L,Dt.startTime-V),ue=!1}return ue}finally{g=null,S=H,N=!1}}var F=!1,w=null,p=-1,m=5,I=-1;function k(){return!(e.unstable_now()-I<m)}function P(){if(w!==null){var z=e.unstable_now();I=z;var V=!0;try{V=w(!0,z)}finally{V?_():(F=!1,w=null)}}else F=!1}var _;if(typeof y=="function")_=function(){y(P)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Bn=et.port2;et.port1.onmessage=P,_=function(){Bn.postMessage(null)}}else _=function(){D(P,0)};function oi(z){w=z,F||(F=!0,_())}function Lt(z,V){p=D(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){A||N||(A=!0,oi(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var H=S;S=V;try{return z()}finally{S=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=S;S=z;try{return V()}finally{S=H}},e.unstable_scheduleCallback=function(z,V,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,z={id:v++,callback:V,priorityLevel:z,startTime:H,expirationTime:J,sortIndex:-1},H>ie?(z.sortIndex=H,t(h,z),n(c)===null&&z===n(h)&&(x?(T(p),p=-1):x=!0,Lt(L,H-ie))):(z.sortIndex=J,t(c,z),A||N||(A=!0,oi(j))),z},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(z){var V=S;return function(){var H=S;S=V;try{return z.apply(this,arguments)}finally{S=H}}}})($p);Bp.exports=$p;var R0=Bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=U,Xe=R0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vp=new Set,Ki={};function dr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(Ki[e]=t,e=0;e<t.length;e++)Vp.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,N0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},gh={};function O0(e){return Vl.call(gh,e)?!0:Vl.call(ph,e)?!1:N0.test(e)?gh[e]=!0:(ph[e]=!0,!1)}function x0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L0(e,t,n,r){if(t===null||typeof t>"u"||x0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qu=/[\-:]([a-z])/g;function Zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qu,Zu);Ee[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qu,Zu);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qu,Zu);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ec(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L0(t,n,i,r)&&(n=null),r||i===null?O0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Gp=Symbol.for("react.offscreen"),mh=Symbol.iterator;function _i(e){return e===null||typeof e!="object"?null:(e=mh&&e[mh]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,sl;function Ri(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ol=!1;function al(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ri(e):""}function D0(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Sr:return"Portal";case Hl:return"Profiler";case tc:return"StrictMode";case Wl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wp:return(e.displayName||"Context")+".Consumer";case Hp:return(e._context.displayName||"Context")+".Provider";case nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function M0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U0(e){var t=Kp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=U0(e))}function qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yp(e,t){t=t.checked,t!=null&&ec(e,"checked",t,!1)}function Yl(e,t){Yp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ai=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ai(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Xp(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ws,Qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j0=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(e){j0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Di[t]=Di[e]})});function Zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Di.hasOwnProperty(e)&&Di[e]?(""+t).trim():t+"px"}function eg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var b0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tu=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nu=null,Ur=null,jr=null;function Eh(e){if(e=ys(e)){if(typeof nu!="function")throw Error(M(280));var t=e.stateNode;t&&(t=fa(t),nu(e.stateNode,e.type,t))}}function tg(e){Ur?jr?jr.push(e):jr=[e]:Ur=e}function ng(){if(Ur){var e=Ur,t=jr;if(jr=Ur=null,Eh(e),t)for(e=0;e<t.length;e++)Eh(t[e])}}function rg(e,t){return e(t)}function ig(){}var ll=!1;function sg(e,t,n){if(ll)return e(t,n);ll=!0;try{return rg(e,t,n)}finally{ll=!1,(Ur!==null||jr!==null)&&(ig(),ng())}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ru=!1;if(Jt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{ru=!1}function F0(e,t,n,r,i,s,a,l,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(v){this.onError(v)}}var Mi=!1,Co=null,Po=!1,iu=null,z0={onError:function(e){Mi=!0,Co=e}};function B0(e,t,n,r,i,s,a,l,c){Mi=!1,Co=null,F0.apply(z0,arguments)}function $0(e,t,n,r,i,s,a,l,c){if(B0.apply(this,arguments),Mi){if(Mi){var h=Co;Mi=!1,Co=null}else throw Error(M(198));Po||(Po=!0,iu=h)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function og(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ih(e){if(hr(e)!==e)throw Error(M(188))}function V0(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ih(i),e;if(s===r)return Ih(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function ag(e){return e=V0(e),e!==null?lg(e):null}function lg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lg(e);if(t!==null)return t;e=e.sibling}return null}var ug=Xe.unstable_scheduleCallback,Sh=Xe.unstable_cancelCallback,H0=Xe.unstable_shouldYield,W0=Xe.unstable_requestPaint,de=Xe.unstable_now,G0=Xe.unstable_getCurrentPriorityLevel,sc=Xe.unstable_ImmediatePriority,cg=Xe.unstable_UserBlockingPriority,Ro=Xe.unstable_NormalPriority,K0=Xe.unstable_LowPriority,dg=Xe.unstable_IdlePriority,ua=null,Rt=null;function q0(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:J0,Y0=Math.log,X0=Math.LN2;function J0(e){return e>>>=0,e===0?32:31-(Y0(e)/X0|0)|0}var Gs=64,Ks=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ni(l):(s&=a,s!==0&&(r=Ni(s)))}else a=n&~i,a!==0?r=Ni(a):s!==0&&(r=Ni(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function Q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-_t(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Q0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hg(){var e=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ms(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function ew(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function fg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pg,ac,gg,mg,vg,ou=!1,qs=[],_n=null,En=null,In=null,Xi=new Map,Ji=new Map,fn=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function Ii(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ys(t),t!==null&&ac(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nw(e,t,n,r,i){switch(t){case"focusin":return _n=Ii(_n,e,t,n,r,i),!0;case"dragenter":return En=Ii(En,e,t,n,r,i),!0;case"mouseover":return In=Ii(In,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xi.set(s,Ii(Xi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,Ii(Ji.get(s)||null,e,t,n,r,i)),!0}return!1}function yg(e){var t=Yn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=og(n),t!==null){e.blockedOn=t,vg(e.priority,function(){gg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tu=r,n.target.dispatchEvent(r),tu=null}else return t=ys(n),t!==null&&ac(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){co(e)&&n.delete(t)}function rw(){ou=!1,_n!==null&&co(_n)&&(_n=null),En!==null&&co(En)&&(En=null),In!==null&&co(In)&&(In=null),Xi.forEach(kh),Ji.forEach(kh)}function Si(e,t){e.blockedOn===t&&(e.blockedOn=null,ou||(ou=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,rw)))}function Qi(e){function t(i){return Si(i,e)}if(0<qs.length){Si(qs[0],e);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Si(_n,e),En!==null&&Si(En,e),In!==null&&Si(In,e),Xi.forEach(t),Ji.forEach(t),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&fn.shift()}var br=rn.ReactCurrentBatchConfig,No=!0;function iw(e,t,n,r){var i=X,s=br.transition;br.transition=null;try{X=1,lc(e,t,n,r)}finally{X=i,br.transition=s}}function sw(e,t,n,r){var i=X,s=br.transition;br.transition=null;try{X=4,lc(e,t,n,r)}finally{X=i,br.transition=s}}function lc(e,t,n,r){if(No){var i=au(e,t,n,r);if(i===null)wl(e,t,r,Oo,n),Th(e,r);else if(nw(i,e,t,n,r))r.stopPropagation();else if(Th(e,r),t&4&&-1<tw.indexOf(e)){for(;i!==null;){var s=ys(i);if(s!==null&&pg(s),s=au(e,t,n,r),s===null&&wl(e,t,r,Oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Oo=null;function au(e,t,n,r){if(Oo=null,e=ic(r),e=Yn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=og(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function wg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case sc:return 1;case cg:return 4;case Ro:case K0:return 16;case dg:return 536870912;default:return 16}default:return 16}}var vn=null,uc=null,ho=null;function _g(){if(ho)return ho;var e,t=uc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function Ch(){return!1}function Qe(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ys:Ch,this.isPropagationStopped=Ch,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Qe(ei),vs=ae({},ei,{view:0,detail:0}),ow=Qe(vs),cl,dl,Ti,ca=ae({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(cl=e.screenX-Ti.screenX,dl=e.screenY-Ti.screenY):dl=cl=0,Ti=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Ph=Qe(ca),aw=ae({},ca,{dataTransfer:0}),lw=Qe(aw),uw=ae({},vs,{relatedTarget:0}),hl=Qe(uw),cw=ae({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=Qe(cw),hw=ae({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fw=Qe(hw),pw=ae({},ei,{data:0}),Rh=Qe(pw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function dc(){return yw}var ww=ae({},vs,{key:function(e){if(e.key){var t=gw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_w=Qe(ww),Ew=ae({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=Qe(Ew),Iw=ae({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),Sw=Qe(Iw),Tw=ae({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=Qe(Tw),Cw=ae({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pw=Qe(Cw),Rw=[9,13,27,32],hc=Jt&&"CompositionEvent"in window,Ui=null;Jt&&"documentMode"in document&&(Ui=document.documentMode);var Aw=Jt&&"TextEvent"in window&&!Ui,Eg=Jt&&(!hc||Ui&&8<Ui&&11>=Ui),Nh=" ",Oh=!1;function Ig(e,t){switch(e){case"keyup":return Rw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Nw(e,t){switch(e){case"compositionend":return Sg(t);case"keypress":return t.which!==32?null:(Oh=!0,Nh);case"textInput":return e=t.data,e===Nh&&Oh?null:e;default:return null}}function Ow(e,t){if(kr)return e==="compositionend"||!hc&&Ig(e,t)?(e=_g(),ho=uc=vn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eg&&t.locale!=="ko"?null:t.data;default:return null}}var xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xw[e.type]:t==="textarea"}function Tg(e,t,n,r){tg(r),t=xo(t,"onChange"),0<t.length&&(n=new cc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ji=null,Zi=null;function Lw(e){Mg(e,0)}function da(e){var t=Rr(e);if(qp(t))return e}function Dw(e,t){if(e==="change")return t}var kg=!1;if(Jt){var fl;if(Jt){var pl="oninput"in document;if(!pl){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),pl=typeof Lh.oninput=="function"}fl=pl}else fl=!1;kg=fl&&(!document.documentMode||9<document.documentMode)}function Dh(){ji&&(ji.detachEvent("onpropertychange",Cg),Zi=ji=null)}function Cg(e){if(e.propertyName==="value"&&da(Zi)){var t=[];Tg(t,Zi,e,ic(e)),sg(Lw,t)}}function Mw(e,t,n){e==="focusin"?(Dh(),ji=t,Zi=n,ji.attachEvent("onpropertychange",Cg)):e==="focusout"&&Dh()}function Uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(Zi)}function jw(e,t){if(e==="click")return da(t)}function bw(e,t){if(e==="input"||e==="change")return da(t)}function Fw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Fw;function es(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vl.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uh(e,t){var n=Mh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function Pg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rg(){for(var e=window,t=ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ko(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zw(e){var t=Rg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(r!==null&&fc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Uh(n,s);var a=Uh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bw=Jt&&"documentMode"in document&&11>=document.documentMode,Cr=null,lu=null,bi=null,uu=!1;function jh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uu||Cr==null||Cr!==ko(r)||(r=Cr,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&es(bi,r)||(bi=r,r=xo(lu,"onSelect"),0<r.length&&(t=new cc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},gl={},Ag={};Jt&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ha(e){if(gl[e])return gl[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ag)return gl[e]=t[n];return e}var Ng=ha("animationend"),Og=ha("animationiteration"),xg=ha("animationstart"),Lg=ha("transitionend"),Dg=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){Dg.set(e,t),dr(t,[e])}for(var ml=0;ml<bh.length;ml++){var vl=bh[ml],$w=vl.toLowerCase(),Vw=vl[0].toUpperCase()+vl.slice(1);Ln($w,"on"+Vw)}Ln(Ng,"onAnimationEnd");Ln(Og,"onAnimationIteration");Ln(xg,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Lg,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Fh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$0(r,t,void 0,e),e.currentTarget=null}function Mg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Fh(i,l,h),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,h=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Fh(i,l,h),s=c}}}if(Po)throw e=iu,Po=!1,iu=null,e}function te(e,t){var n=t[pu];n===void 0&&(n=t[pu]=new Set);var r=e+"__bubble";n.has(r)||(Ug(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Ug(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Js]){e[Js]=!0,Vp.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,yl("selectionchange",!1,t))}}function Ug(e,t,n,r){switch(wg(t)){case 1:var i=iw;break;case 4:i=sw;break;default:i=lc}n=i.bind(null,t,n,e),i=void 0,!ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Yn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}sg(function(){var h=s,v=ic(n),g=[];e:{var S=Dg.get(e);if(S!==void 0){var N=cc,A=e;switch(e){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":N=_w;break;case"focusin":A="focus",N=hl;break;case"focusout":A="blur",N=hl;break;case"beforeblur":case"afterblur":N=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sw;break;case Ng:case Og:case xg:N=dw;break;case Lg:N=kw;break;case"scroll":N=ow;break;case"wheel":N=Pw;break;case"copy":case"cut":case"paste":N=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Ah}var x=(t&4)!==0,D=!x&&e==="scroll",T=x?S!==null?S+"Capture":null:S;x=[];for(var y=h,E;y!==null;){E=y;var L=E.stateNode;if(E.tag===5&&L!==null&&(E=L,T!==null&&(L=Yi(y,T),L!=null&&x.push(ns(y,L,E)))),D)break;y=y.return}0<x.length&&(S=new N(S,A,null,n,v),g.push({event:S,listeners:x}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&n!==tu&&(A=n.relatedTarget||n.fromElement)&&(Yn(A)||A[Qt]))break e;if((N||S)&&(S=v.window===v?v:(S=v.ownerDocument)?S.defaultView||S.parentWindow:window,N?(A=n.relatedTarget||n.toElement,N=h,A=A?Yn(A):null,A!==null&&(D=hr(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(N=null,A=h),N!==A)){if(x=Ph,L="onMouseLeave",T="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ah,L="onPointerLeave",T="onPointerEnter",y="pointer"),D=N==null?S:Rr(N),E=A==null?S:Rr(A),S=new x(L,y+"leave",N,n,v),S.target=D,S.relatedTarget=E,L=null,Yn(v)===h&&(x=new x(T,y+"enter",A,n,v),x.target=E,x.relatedTarget=D,L=x),D=L,N&&A)t:{for(x=N,T=A,y=0,E=x;E;E=Er(E))y++;for(E=0,L=T;L;L=Er(L))E++;for(;0<y-E;)x=Er(x),y--;for(;0<E-y;)T=Er(T),E--;for(;y--;){if(x===T||T!==null&&x===T.alternate)break t;x=Er(x),T=Er(T)}x=null}else x=null;N!==null&&zh(g,S,N,x,!1),A!==null&&D!==null&&zh(g,D,A,x,!0)}}e:{if(S=h?Rr(h):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var j=Dw;else if(xh(S))if(kg)j=bw;else{j=Uw;var F=Mw}else(N=S.nodeName)&&N.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(j=jw);if(j&&(j=j(e,h))){Tg(g,j,n,v);break e}F&&F(e,S,h),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&Xl(S,"number",S.value)}switch(F=h?Rr(h):window,e){case"focusin":(xh(F)||F.contentEditable==="true")&&(Cr=F,lu=h,bi=null);break;case"focusout":bi=lu=Cr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,jh(g,n,v);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":jh(g,n,v)}var w;if(hc)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else kr?Ig(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Eg&&n.locale!=="ko"&&(kr||p!=="onCompositionStart"?p==="onCompositionEnd"&&kr&&(w=_g()):(vn=v,uc="value"in vn?vn.value:vn.textContent,kr=!0)),F=xo(h,p),0<F.length&&(p=new Rh(p,e,null,n,v),g.push({event:p,listeners:F}),w?p.data=w:(w=Sg(n),w!==null&&(p.data=w)))),(w=Aw?Nw(e,n):Ow(e,n))&&(h=xo(h,"onBeforeInput"),0<h.length&&(v=new Rh("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:h}),v.data=w))}Mg(g,t)})}function ns(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yi(e,n),s!=null&&r.unshift(ns(e,s,i)),s=Yi(e,t),s!=null&&r.push(ns(e,s,i))),e=e.return}return r}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zh(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,h=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&h!==null&&(l=h,i?(c=Yi(n,s),c!=null&&a.unshift(ns(n,c,l))):i||(c=Yi(n,s),c!=null&&a.push(ns(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ww=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function Bh(e){return(typeof e=="string"?e:""+e).replace(Ww,`
`).replace(Gw,"")}function Qs(e,t,n){if(t=Bh(t),Bh(e)!==t&&n)throw Error(M(425))}function Lo(){}var cu=null,du=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(e){return $h.resolve(null).then(e).catch(Yw)}:fu;function Yw(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ti,rs="__reactProps$"+ti,Qt="__reactContainer$"+ti,pu="__reactEvents$"+ti,Xw="__reactListeners$"+ti,Jw="__reactHandles$"+ti;function Yn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vh(e);e!==null;){if(n=e[Pt])return n;e=Vh(e)}return t}e=n,n=e.parentNode}return null}function ys(e){return e=e[Pt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function fa(e){return e[rs]||null}var gu=[],Ar=-1;function Dn(e){return{current:e}}function ne(e){0>Ar||(e.current=gu[Ar],gu[Ar]=null,Ar--)}function Z(e,t){Ar++,gu[Ar]=e.current,e.current=t}var xn={},Re=Dn(xn),Be=Dn(!1),nr=xn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Do(){ne(Be),ne(Re)}function Hh(e,t,n){if(Re.current!==xn)throw Error(M(168));Z(Re,t),Z(Be,n)}function jg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,M0(e)||"Unknown",i));return ae({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,nr=Re.current,Z(Re,e),Z(Be,Be.current),!0}function Wh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=jg(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Re),Z(Re,e)):ne(Be),Z(Be,n)}var Bt=null,pa=!1,El=!1;function bg(e){Bt===null?Bt=[e]:Bt.push(e)}function Qw(e){pa=!0,bg(e)}function Mn(){if(!El&&Bt!==null){El=!0;var e=0,t=X;try{var n=Bt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,pa=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),ug(sc,Mn),i}finally{X=t,El=!1}}return null}var Nr=[],Or=0,Uo=null,jo=0,nt=[],rt=0,rr=null,Ht=1,Wt="";function Wn(e,t){Nr[Or++]=jo,Nr[Or++]=Uo,Uo=e,jo=t}function Fg(e,t,n){nt[rt++]=Ht,nt[rt++]=Wt,nt[rt++]=rr,rr=e;var r=Ht;e=Wt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ht=1<<32-_t(t)+i|n<<i|r,Wt=s+e}else Ht=1<<s|n<<i|r,Wt=e}function pc(e){e.return!==null&&(Wn(e,1),Fg(e,1,0))}function gc(e){for(;e===Uo;)Uo=Nr[--Or],Nr[Or]=null,jo=Nr[--Or],Nr[Or]=null;for(;e===rr;)rr=nt[--rt],nt[rt]=null,Wt=nt[--rt],nt[rt]=null,Ht=nt[--rt],nt[rt]=null}var qe=null,Ke=null,re=!1,gt=null;function zg(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ke=null,!0):!1;default:return!1}}function mu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vu(e){if(re){var t=Ke;if(t){var n=t;if(!Gh(e,t)){if(mu(e))throw Error(M(418));t=Sn(n.nextSibling);var r=qe;t&&Gh(e,t)?zg(r,n):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(mu(e))throw Error(M(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function Kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Zs(e){if(e!==qe)return!1;if(!re)return Kh(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=Ke)){if(mu(e))throw Bg(),Error(M(418));for(;t;)zg(e,t),t=Sn(t.nextSibling)}if(Kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?Sn(e.stateNode.nextSibling):null;return!0}function Bg(){for(var e=Ke;e;)e=Sn(e.nextSibling)}function Gr(){Ke=qe=null,re=!1}function mc(e){gt===null?gt=[e]:gt.push(e)}var Zw=rn.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qh(e){var t=e._init;return t(e._payload)}function $g(e){function t(T,y){if(e){var E=T.deletions;E===null?(T.deletions=[y],T.flags|=16):E.push(y)}}function n(T,y){if(!e)return null;for(;y!==null;)t(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Pn(T,y),T.index=0,T.sibling=null,T}function s(T,y,E){return T.index=E,e?(E=T.alternate,E!==null?(E=E.index,E<y?(T.flags|=2,y):E):(T.flags|=2,y)):(T.flags|=1048576,y)}function a(T){return e&&T.alternate===null&&(T.flags|=2),T}function l(T,y,E,L){return y===null||y.tag!==6?(y=Rl(E,T.mode,L),y.return=T,y):(y=i(y,E),y.return=T,y)}function c(T,y,E,L){var j=E.type;return j===Tr?v(T,y,E.props.children,L,E.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&qh(j)===y.type)?(L=i(y,E.props),L.ref=ki(T,y,E),L.return=T,L):(L=_o(E.type,E.key,E.props,null,T.mode,L),L.ref=ki(T,y,E),L.return=T,L)}function h(T,y,E,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Al(E,T.mode,L),y.return=T,y):(y=i(y,E.children||[]),y.return=T,y)}function v(T,y,E,L,j){return y===null||y.tag!==7?(y=tr(E,T.mode,L,j),y.return=T,y):(y=i(y,E),y.return=T,y)}function g(T,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Rl(""+y,T.mode,E),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:return E=_o(y.type,y.key,y.props,null,T.mode,E),E.ref=ki(T,null,y),E.return=T,E;case Sr:return y=Al(y,T.mode,E),y.return=T,y;case dn:var L=y._init;return g(T,L(y._payload),E)}if(Ai(y)||_i(y))return y=tr(y,T.mode,E,null),y.return=T,y;eo(T,y)}return null}function S(T,y,E,L){var j=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:l(T,y,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Vs:return E.key===j?c(T,y,E,L):null;case Sr:return E.key===j?h(T,y,E,L):null;case dn:return j=E._init,S(T,y,j(E._payload),L)}if(Ai(E)||_i(E))return j!==null?null:v(T,y,E,L,null);eo(T,E)}return null}function N(T,y,E,L,j){if(typeof L=="string"&&L!==""||typeof L=="number")return T=T.get(E)||null,l(y,T,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Vs:return T=T.get(L.key===null?E:L.key)||null,c(y,T,L,j);case Sr:return T=T.get(L.key===null?E:L.key)||null,h(y,T,L,j);case dn:var F=L._init;return N(T,y,E,F(L._payload),j)}if(Ai(L)||_i(L))return T=T.get(E)||null,v(y,T,L,j,null);eo(y,L)}return null}function A(T,y,E,L){for(var j=null,F=null,w=y,p=y=0,m=null;w!==null&&p<E.length;p++){w.index>p?(m=w,w=null):m=w.sibling;var I=S(T,w,E[p],L);if(I===null){w===null&&(w=m);break}e&&w&&I.alternate===null&&t(T,w),y=s(I,y,p),F===null?j=I:F.sibling=I,F=I,w=m}if(p===E.length)return n(T,w),re&&Wn(T,p),j;if(w===null){for(;p<E.length;p++)w=g(T,E[p],L),w!==null&&(y=s(w,y,p),F===null?j=w:F.sibling=w,F=w);return re&&Wn(T,p),j}for(w=r(T,w);p<E.length;p++)m=N(w,T,p,E[p],L),m!==null&&(e&&m.alternate!==null&&w.delete(m.key===null?p:m.key),y=s(m,y,p),F===null?j=m:F.sibling=m,F=m);return e&&w.forEach(function(k){return t(T,k)}),re&&Wn(T,p),j}function x(T,y,E,L){var j=_i(E);if(typeof j!="function")throw Error(M(150));if(E=j.call(E),E==null)throw Error(M(151));for(var F=j=null,w=y,p=y=0,m=null,I=E.next();w!==null&&!I.done;p++,I=E.next()){w.index>p?(m=w,w=null):m=w.sibling;var k=S(T,w,I.value,L);if(k===null){w===null&&(w=m);break}e&&w&&k.alternate===null&&t(T,w),y=s(k,y,p),F===null?j=k:F.sibling=k,F=k,w=m}if(I.done)return n(T,w),re&&Wn(T,p),j;if(w===null){for(;!I.done;p++,I=E.next())I=g(T,I.value,L),I!==null&&(y=s(I,y,p),F===null?j=I:F.sibling=I,F=I);return re&&Wn(T,p),j}for(w=r(T,w);!I.done;p++,I=E.next())I=N(w,T,p,I.value,L),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?p:I.key),y=s(I,y,p),F===null?j=I:F.sibling=I,F=I);return e&&w.forEach(function(P){return t(T,P)}),re&&Wn(T,p),j}function D(T,y,E,L){if(typeof E=="object"&&E!==null&&E.type===Tr&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Vs:e:{for(var j=E.key,F=y;F!==null;){if(F.key===j){if(j=E.type,j===Tr){if(F.tag===7){n(T,F.sibling),y=i(F,E.props.children),y.return=T,T=y;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dn&&qh(j)===F.type){n(T,F.sibling),y=i(F,E.props),y.ref=ki(T,F,E),y.return=T,T=y;break e}n(T,F);break}else t(T,F);F=F.sibling}E.type===Tr?(y=tr(E.props.children,T.mode,L,E.key),y.return=T,T=y):(L=_o(E.type,E.key,E.props,null,T.mode,L),L.ref=ki(T,y,E),L.return=T,T=L)}return a(T);case Sr:e:{for(F=E.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(T,y.sibling),y=i(y,E.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else t(T,y);y=y.sibling}y=Al(E,T.mode,L),y.return=T,T=y}return a(T);case dn:return F=E._init,D(T,y,F(E._payload),L)}if(Ai(E))return A(T,y,E,L);if(_i(E))return x(T,y,E,L);eo(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,E),y.return=T,T=y):(n(T,y),y=Rl(E,T.mode,L),y.return=T,T=y),a(T)):n(T,y)}return D}var Kr=$g(!0),Vg=$g(!1),bo=Dn(null),Fo=null,xr=null,vc=null;function yc(){vc=xr=Fo=null}function wc(e){var t=bo.current;ne(bo),e._currentValue=t}function yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Fo=e,vc=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(vc!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Fo===null)throw Error(M(308));xr=e,Fo.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Xn=null;function _c(e){Xn===null?Xn=[e]:Xn.push(e)}function Hg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_c(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Zt(e,n)}return i=r.interleaved,i===null?(t.next=t,_c(r)):(t.next=i.next,i.next=t),r.interleaved=t,Zt(e,n)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}function Yh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;hn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,h=c.next;c.next=null,a===null?s=h:a.next=h,a=c;var v=e.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==a&&(l===null?v.firstBaseUpdate=h:l.next=h,v.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;a=0,v=h=c=null,l=s;do{var S=l.lane,N=l.eventTime;if((r&S)===S){v!==null&&(v=v.next={eventTime:N,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=e,x=l;switch(S=t,N=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){g=A.call(N,g,S);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,S=typeof A=="function"?A.call(N,g,S):A,S==null)break e;g=ae({},g,S);break e;case 2:hn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[l]:S.push(l))}else N={eventTime:N,lane:S,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(h=v=N,c=g):v=v.next=N,a|=S;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;S=l,l=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(v===null&&(c=g),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);sr|=a,e.lanes=a,e.memoizedState=g}}function Xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ws={},At=Dn(ws),is=Dn(ws),ss=Dn(ws);function Jn(e){if(e===ws)throw Error(M(174));return e}function Ic(e,t){switch(Z(ss,t),Z(is,e),Z(At,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}ne(At),Z(At,t)}function qr(){ne(At),ne(is),ne(ss)}function Gg(e){Jn(ss.current);var t=Jn(At.current),n=Ql(t,e.type);t!==n&&(Z(is,e),Z(At,n))}function Sc(e){is.current===e&&(ne(At),ne(is))}var se=Dn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function Tc(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var go=rn.ReactCurrentDispatcher,Sl=rn.ReactCurrentBatchConfig,ir=0,oe=null,pe=null,me=null,$o=!1,Fi=!1,os=0,e_=0;function ke(){throw Error(M(321))}function kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,i,s){if(ir=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?i_:s_,e=n(r,i),Fi){s=0;do{if(Fi=!1,os=0,25<=s)throw Error(M(301));s+=1,me=pe=null,t.updateQueue=null,go.current=o_,e=n(r,i)}while(Fi)}if(go.current=Vo,t=pe!==null&&pe.next!==null,ir=0,me=pe=oe=null,$o=!1,t)throw Error(M(300));return e}function Pc(){var e=os!==0;return os=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function at(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(M(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function as(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,h=s;do{var v=h.lane;if((ir&v)===v)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var g={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=g,a=r):c=c.next=g,oe.lanes|=v,sr|=v}h=h.next}while(h!==null&&h!==s);c===null?a=r:c.next=l,St(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,sr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);St(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Kg(){}function qg(e,t){var n=oe,r=at(),i=t(),s=!St(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Rc(Jg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ls(9,Xg.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(M(349));ir&30||Yg(n,t,i)}return i}function Yg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xg(e,t,n,r){t.value=n,t.getSnapshot=r,Qg(t)&&Zg(e)}function Jg(e,t,n){return n(function(){Qg(t)&&Zg(e)})}function Qg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Zg(e){var t=Zt(e,1);t!==null&&Et(t,e,1,-1)}function Jh(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t.queue=e,e=e.dispatch=r_.bind(null,oe,e),[t.memoizedState,e]}function ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function em(){return at().memoizedState}function mo(e,t,n,r){var i=Ct();oe.flags|=e,i.memoizedState=ls(1|t,n,void 0,r===void 0?null:r)}function ga(e,t,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(pe!==null){var a=pe.memoizedState;if(s=a.destroy,r!==null&&kc(r,a.deps)){i.memoizedState=ls(t,n,s,r);return}}oe.flags|=e,i.memoizedState=ls(1|t,n,s,r)}function Qh(e,t){return mo(8390656,8,e,t)}function Rc(e,t){return ga(2048,8,e,t)}function tm(e,t){return ga(4,2,e,t)}function nm(e,t){return ga(4,4,e,t)}function rm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function im(e,t,n){return n=n!=null?n.concat([e]):null,ga(4,4,rm.bind(null,t,e),n)}function Ac(){}function sm(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function om(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function am(e,t,n){return ir&21?(St(n,t)||(n=hg(),oe.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function t_(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{X=n,Sl.transition=r}}function lm(){return at().memoizedState}function n_(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},um(e))cm(t,n);else if(n=Hg(e,t,n,r),n!==null){var i=Le();Et(n,e,r,i),dm(n,t,r)}}function r_(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(um(e))cm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,St(l,a)){var c=t.interleaved;c===null?(i.next=i,_c(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hg(e,t,i,r),n!==null&&(i=Le(),Et(n,e,r,i),dm(n,t,r))}}function um(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function cm(e,t){Fi=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}var Vo={readContext:ot,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},i_={readContext:ot,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mo(4194308,4,rm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return mo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=n_.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Jh,useDebugValue:Ac,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Jh(!1),t=e[0];return e=t_.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=Ct();if(re){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ve===null)throw Error(M(349));ir&30||Yg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Qh(Jg.bind(null,r,s,e),[e]),r.flags|=2048,ls(9,Xg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ve.identifierPrefix;if(re){var n=Wt,r=Ht;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s_={readContext:ot,useCallback:sm,useContext:ot,useEffect:Rc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Tl,useRef:em,useState:function(){return Tl(as)},useDebugValue:Ac,useDeferredValue:function(e){var t=at();return am(t,pe.memoizedState,e)},useTransition:function(){var e=Tl(as)[0],t=at().memoizedState;return[e,t]},useMutableSource:Kg,useSyncExternalStore:qg,useId:lm,unstable_isNewReconciler:!1},o_={readContext:ot,useCallback:sm,useContext:ot,useEffect:Rc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:kl,useRef:em,useState:function(){return kl(as)},useDebugValue:Ac,useDeferredValue:function(e){var t=at();return pe===null?t.memoizedState=e:am(t,pe.memoizedState,e)},useTransition:function(){var e=kl(as)[0],t=at().memoizedState;return[e,t]},useMutableSource:Kg,useSyncExternalStore:qg,useId:lm,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ma={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Cn(e),s=Yt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Tn(e,s,i),t!==null&&(Et(t,e,i,r),po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Cn(e),s=Yt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Tn(e,s,i),t!==null&&(Et(t,e,i,r),po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Cn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tn(e,i,r),t!==null&&(Et(t,e,r,n),po(t,e,r))}};function Zh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!es(n,r)||!es(i,s):!0}function hm(e,t,n){var r=!1,i=xn,s=t.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=$e(t)?nr:Re.current,r=t.contextTypes,s=(r=r!=null)?Wr(e,i):xn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ma.enqueueReplaceState(t,t.state,null)}function _u(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ec(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=$e(t)?nr:Re.current,i.context=Wr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ma.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=D0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function fm(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Ou=r),Eu(e,t)},n}function pm(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function tf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=E_.bind(null,e,t,n),t.then(e,e))}function nf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e)}var l_=rn.ReactCurrentOwner,ze=!1;function Oe(e,t,n,r){t.child=e===null?Vg(t,null,n,r):Kr(t,e.child,n,r)}function sf(e,t,n,r,i){n=n.render;var s=t.ref;return Fr(t,i),r=Cc(e,t,n,r,s,i),n=Pc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(re&&n&&pc(t),t.flags|=1,Oe(e,t,r,i),t.child)}function of(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,gm(e,t,s,r,i)):(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:es,n(a,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Pn(s,r),e.ref=t.ref,e.return=t,t.child=e}function gm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(es(s,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,en(e,t,i)}return Iu(e,t,n,r,i)}function mm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Dr,Ge),Ge|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Dr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Dr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(Dr,Ge),Ge|=r;return Oe(e,t,i,n),t.child}function vm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,i){var s=$e(n)?nr:Re.current;return s=Wr(t,s),Fr(t,i),n=Cc(e,t,n,r,s,i),r=Pc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(re&&r&&pc(t),t.flags|=1,Oe(e,t,n,i),t.child)}function af(e,t,n,r,i){if($e(n)){var s=!0;Mo(t)}else s=!1;if(Fr(t,i),t.stateNode===null)vo(e,t),hm(t,n,r),_u(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=$e(n)?nr:Re.current,h=Wr(t,h));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==h)&&ef(t,a,r,h),hn=!1;var S=t.memoizedState;a.state=S,zo(t,r,a,i),c=t.memoizedState,l!==r||S!==c||Be.current||hn?(typeof v=="function"&&(wu(t,n,v,r),c=t.memoizedState),(l=hn||Zh(t,n,l,r,S,c,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wg(e,t),l=t.memoizedProps,h=t.type===t.elementType?l:ft(t.type,l),a.props=h,g=t.pendingProps,S=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=$e(n)?nr:Re.current,c=Wr(t,c));var N=n.getDerivedStateFromProps;(v=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||S!==c)&&ef(t,a,r,c),hn=!1,S=t.memoizedState,a.state=S,zo(t,r,a,i);var A=t.memoizedState;l!==g||S!==A||Be.current||hn?(typeof N=="function"&&(wu(t,n,N,r),A=t.memoizedState),(h=hn||Zh(t,n,h,r,S,A,c)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,A,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,A,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),a.props=r,a.state=A,a.context=c,r=h):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Su(e,t,n,r,s,i)}function Su(e,t,n,r,i,s){vm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Wh(t,n,!1),en(e,t,s);r=t.stateNode,l_.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,s),t.child=Kr(t,null,l,s)):Oe(e,t,l,s),t.memoizedState=r.state,i&&Wh(t,n,!0),t.child}function ym(e){var t=e.stateNode;t.pendingContext?Hh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hh(e,t.context,!1),Ic(e,t.containerInfo)}function lf(e,t,n,r,i){return Gr(),mc(i),t.flags|=256,Oe(e,t,n,r),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function wm(e,t,n){var r=t.pendingProps,i=se.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(se,i&1),e===null)return vu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=wa(a,r,0,null),e=tr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ku(n),t.memoizedState=Tu,e):Nc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return u_(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pn(l,s):(s=tr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Tu,r}return s=e.child,e=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nc(e,t){return t=wa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&mc(r),Kr(t,e.child,null,n),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u_(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(M(422))),to(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=wa({mode:"visible",children:r.children},i,0,null),s=tr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Kr(t,e.child,null,a),t.child.memoizedState=ku(a),t.memoizedState=Tu,s);if(!(t.mode&1))return to(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Cl(s,r,void 0),to(e,t,a,r)}if(l=(a&e.childLanes)!==0,ze||l){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zt(e,i),Et(r,e,i,-1))}return Uc(),r=Cl(Error(M(421))),to(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=I_.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ke=Sn(i.nextSibling),qe=t,re=!0,gt=null,e!==null&&(nt[rt++]=Ht,nt[rt++]=Wt,nt[rt++]=rr,Ht=e.id,Wt=e.overflow,rr=t),t=Nc(t,r.children),t.flags|=4096,t)}function uf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yu(e.return,t,n)}function Pl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _m(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uf(e,n,t);else if(e.tag===19)uf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pl(t,!0,n,null,s);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function c_(e,t,n){switch(t.tag){case 3:ym(t),Gr();break;case 5:Gg(t);break;case 1:$e(t.type)&&Mo(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?wm(e,t,n):(Z(se,se.current&1),e=en(e,t,n),e!==null?e.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,mm(e,t,n)}return en(e,t,n)}var Em,Cu,Im,Sm;Em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};Im=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jn(At.current);var s=null;switch(n){case"input":i=ql(e,i),r=ql(e,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}Zl(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ki.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&te("scroll",e),s||l===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};Sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d_(e,t,n){var r=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return $e(t.type)&&Do(),Ce(t),null;case 3:return r=t.stateNode,qr(),ne(Be),ne(Re),Tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Du(gt),gt=null))),Cu(e,t),Ce(t),null;case 5:Sc(t);var i=Jn(ss.current);if(n=t.type,e!==null&&t.stateNode!=null)Im(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ce(t),null}if(e=Jn(At.current),Zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Pt]=t,r[rs]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)te(Oi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":vh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":wh(r,s),te("invalid",r)}Zl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,e),i=["children",""+l]):Ki.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":Hs(r),yh(r,s,!0);break;case"textarea":Hs(r),_h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pt]=t,e[rs]=r,Em(e,t,!1,!1),t.stateNode=e;e:{switch(a=eu(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)te(Oi[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":vh(e,r),i=ql(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",e);break;case"textarea":wh(e,r),i=Jl(e,r),te("invalid",e);break;default:i=r}Zl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?eg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qp(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qi(e,c):typeof c=="number"&&qi(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ki.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&ec(e,s,c,a))}switch(n){case"input":Hs(e),yh(e,r,!1);break;case"textarea":Hs(e),_h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Mr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Jn(ss.current),Jn(At.current),Zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(s=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&t.mode&1&&!(t.flags&128))Bg(),Gr(),t.flags|=98560,s=!1;else if(s=Zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Pt]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else gt!==null&&(Du(gt),gt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):Uc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return qr(),Cu(e,t),e===null&&ts(t.stateNode.containerInfo),Ce(t),null;case 10:return wc(t.type._context),Ce(t),null;case 17:return $e(t.type)&&Do(),Ce(t),null;case 19:if(ne(se),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ci(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bo(e),a!==null){for(t.flags|=128,Ci(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&de()>Xr&&(t.flags|=128,r=!0,Ci(s,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Ce(t),null}else 2*de()-s.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,Ci(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=de(),t.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function h_(e,t){switch(gc(t),t.tag){case 1:return $e(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),ne(Be),ne(Re),Tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sc(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return qr(),null;case 10:return wc(t.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var no=!1,Pe=!1,f_=typeof WeakSet=="function"?WeakSet:Set,B=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){le(e,t,r)}}var cf=!1;function p_(e,t){if(cu=No,e=Rg(),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,h=0,v=0,g=e,S=null;t:for(;;){for(var N;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(N=g.firstChild)!==null;)S=g,g=N;for(;;){if(g===e)break t;if(S===n&&++h===i&&(l=a),S===s&&++v===r&&(c=a),(N=g.nextSibling)!==null)break;g=S,S=g.parentNode}g=N}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},No=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,D=A.memoizedState,T=t.stateNode,y=T.getSnapshotBeforeUpdate(t.elementType===t.type?x:ft(t.type,x),D);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(L){le(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return A=cf,cf=!1,A}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pu(t,n,s)}i=i.next}while(i!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tm(e){var t=e.alternate;t!==null&&(e.alternate=null,Tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[rs],delete t[pu],delete t[Xw],delete t[Jw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function km(e){return e.tag===5||e.tag===3||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}function Nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}var we=null,pt=!1;function un(e,t,n){for(n=n.child;n!==null;)Cm(e,t,n),n=n.sibling}function Cm(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 5:Pe||Lr(n,t);case 6:var r=we,i=pt;we=null,un(e,t,n),we=r,pt=i,we!==null&&(pt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(pt?(e=we,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),Qi(e)):_l(we,n.stateNode));break;case 4:r=we,i=pt,we=n.stateNode.containerInfo,pt=!0,un(e,t,n),we=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Pu(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Pe&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,un(e,t,n),Pe=r):un(e,t,n);break;default:un(e,t,n)}}function hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f_),t.forEach(function(r){var i=S_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,pt=!1;break e;case 3:we=l.stateNode.containerInfo,pt=!0;break e;case 4:we=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(we===null)throw Error(M(160));Cm(s,a,i),we=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){le(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pm(t,e),t=t.sibling}function Pm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),r&4){try{zi(3,e,e.return),va(3,e)}catch(x){le(e,e.return,x)}try{zi(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:ht(t,e),kt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(ht(t,e),kt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{qi(i,"")}catch(x){le(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Yp(i,s),eu(l,a);var h=eu(l,s);for(a=0;a<c.length;a+=2){var v=c[a],g=c[a+1];v==="style"?eg(i,g):v==="dangerouslySetInnerHTML"?Qp(i,g):v==="children"?qi(i,g):ec(i,v,g,h)}switch(l){case"input":Yl(i,s);break;case"textarea":Xp(i,s);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?Mr(i,!!s.multiple,N,!1):S!==!!s.multiple&&(s.defaultValue!=null?Mr(i,!!s.multiple,s.defaultValue,!0):Mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[rs]=s}catch(x){le(e,e.return,x)}}break;case 6:if(ht(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){le(e,e.return,x)}}break;case 3:if(ht(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=de())),r&4&&hf(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(h=Pe)||v,ht(t,e),Pe=h):ht(t,e),kt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&e.mode&1)for(B=e,v=e.child;v!==null;){for(g=B=v;B!==null;){switch(S=B,N=S.child,S.tag){case 0:case 11:case 14:case 15:zi(4,S,S.return);break;case 1:Lr(S,S.return);var A=S.stateNode;if(typeof A.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(x){le(r,n,x)}}break;case 5:Lr(S,S.return);break;case 22:if(S.memoizedState!==null){pf(g);continue}}N!==null?(N.return=S,B=N):pf(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zp("display",a))}catch(x){le(e,e.return,x)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(x){le(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ht(t,e),kt(e),r&4&&hf(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(km(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=df(e);Nu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=df(e);Au(e,l,a);break;default:throw Error(M(161))}}catch(c){le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g_(e,t,n){B=e,Rm(e)}function Rm(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||no;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Pe;l=no;var h=Pe;if(no=a,(Pe=c)&&!h)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?gf(i):c!==null?(c.return=a,B=c):gf(i);for(;s!==null;)B=s,Rm(s),s=s.sibling;B=i,no=l,Pe=h}ff(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):ff(e)}}function ff(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xh(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Qi(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Pe||t.flags&512&&Ru(t)}catch(S){le(t,t.return,S)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function pf(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function gf(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(c){le(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){le(t,i,c)}}var s=t.return;try{Ru(t)}catch(c){le(t,s,c)}break;case 5:var a=t.return;try{Ru(t)}catch(c){le(t,a,c)}}}catch(c){le(t,t.return,c)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var m_=Math.ceil,Ho=rn.ReactCurrentDispatcher,Oc=rn.ReactCurrentOwner,st=rn.ReactCurrentBatchConfig,K=0,ve=null,fe=null,_e=0,Ge=0,Dr=Dn(0),ge=0,us=null,sr=0,ya=0,xc=0,Bi=null,je=null,Lc=0,Xr=1/0,zt=null,Wo=!1,Ou=null,kn=null,ro=!1,yn=null,Go=0,$i=0,xu=null,yo=-1,wo=0;function Le(){return K&6?de():yo!==-1?yo:yo=de()}function Cn(e){return e.mode&1?K&2&&_e!==0?_e&-_e:Zw.transition!==null?(wo===0&&(wo=hg()),wo):(e=X,e!==0||(e=window.event,e=e===void 0?16:wg(e.type)),e):1}function Et(e,t,n,r){if(50<$i)throw $i=0,xu=null,Error(M(185));ms(e,n,r),(!(K&2)||e!==ve)&&(e===ve&&(!(K&2)&&(ya|=n),ge===4&&pn(e,_e)),Ve(e,r),n===1&&K===0&&!(t.mode&1)&&(Xr=de()+500,pa&&Mn()))}function Ve(e,t){var n=e.callbackNode;Z0(e,t);var r=Ao(e,e===ve?_e:0);if(r===0)n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sh(n),t===1)e.tag===0?Qw(mf.bind(null,e)):bg(mf.bind(null,e)),qw(function(){!(K&6)&&Mn()}),n=null;else{switch(fg(r)){case 1:n=sc;break;case 4:n=cg;break;case 16:n=Ro;break;case 536870912:n=dg;break;default:n=Ro}n=Um(n,Am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Am(e,t){if(yo=-1,wo=0,K&6)throw Error(M(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=Ao(e,e===ve?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var i=K;K|=2;var s=Om();(ve!==e||_e!==t)&&(zt=null,Xr=de()+500,er(e,t));do try{w_();break}catch(l){Nm(e,l)}while(!0);yc(),Ho.current=s,K=i,fe!==null?t=0:(ve=null,_e=0,t=ge)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=Lu(e,i))),t===1)throw n=us,er(e,0),pn(e,r),Ve(e,de()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!v_(i)&&(t=Ko(e,r),t===2&&(s=su(e),s!==0&&(r=s,t=Lu(e,s))),t===1))throw n=us,er(e,0),pn(e,r),Ve(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Gn(e,je,zt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Lc+500-de(),10<t)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fu(Gn.bind(null,e,je,zt),t);break}Gn(e,je,zt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m_(r/1960))-r,10<r){e.timeoutHandle=fu(Gn.bind(null,e,je,zt),r);break}Gn(e,je,zt);break;case 5:Gn(e,je,zt);break;default:throw Error(M(329))}}}return Ve(e,de()),e.callbackNode===n?Am.bind(null,e):null}function Lu(e,t){var n=Bi;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=je,je=n,t!==null&&Du(t)),e}function Du(e){je===null?je=e:je.push.apply(je,e)}function v_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~xc,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function mf(e){if(K&6)throw Error(M(327));zr();var t=Ao(e,0);if(!(t&1))return Ve(e,de()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=Lu(e,r))}if(n===1)throw n=us,er(e,0),pn(e,t),Ve(e,de()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,je,zt),Ve(e,de()),null}function Dc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Xr=de()+500,pa&&Mn())}}function or(e){yn!==null&&yn.tag===0&&!(K&6)&&zr();var t=K;K|=1;var n=st.transition,r=X;try{if(st.transition=null,X=1,e)return e()}finally{X=r,st.transition=n,K=t,!(K&6)&&Mn()}}function Mc(){Ge=Dr.current,ne(Dr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:qr(),ne(Be),ne(Re),Tc();break;case 5:Sc(r);break;case 4:qr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:wc(r.type._context);break;case 22:case 23:Mc()}n=n.return}if(ve=e,fe=e=Pn(e.current,null),_e=Ge=t,ge=0,us=null,xc=ya=sr=0,je=Bi=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Xn=null}return e}function Nm(e,t){do{var n=fe;try{if(yc(),go.current=Vo,$o){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(ir=0,me=pe=oe=null,Fi=!1,os=0,Oc.current=null,n===null||n.return===null){ge=1,us=t,fe=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=_e,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,v=l,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var S=v.alternate;S?(v.updateQueue=S.updateQueue,v.memoizedState=S.memoizedState,v.lanes=S.lanes):(v.updateQueue=null,v.memoizedState=null)}var N=nf(a);if(N!==null){N.flags&=-257,rf(N,a,l,s,t),N.mode&1&&tf(s,h,t),t=N,c=h;var A=t.updateQueue;if(A===null){var x=new Set;x.add(c),t.updateQueue=x}else A.add(c);break e}else{if(!(t&1)){tf(s,h,t),Uc();break e}c=Error(M(426))}}else if(re&&l.mode&1){var D=nf(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),rf(D,a,l,s,t),mc(Yr(c,l));break e}}s=c=Yr(c,l),ge!==4&&(ge=2),Bi===null?Bi=[s]:Bi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var T=fm(s,c,t);Yh(s,T);break e;case 1:l=c;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(kn===null||!kn.has(E)))){s.flags|=65536,t&=-t,s.lanes|=t;var L=pm(s,l,t);Yh(s,L);break e}}s=s.return}while(s!==null)}Lm(n)}catch(j){t=j,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Om(){var e=Ho.current;return Ho.current=Vo,e===null?Vo:e}function Uc(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(sr&268435455)&&!(ya&268435455)||pn(ve,_e)}function Ko(e,t){var n=K;K|=2;var r=Om();(ve!==e||_e!==t)&&(zt=null,er(e,t));do try{y_();break}catch(i){Nm(e,i)}while(!0);if(yc(),K=n,Ho.current=r,fe!==null)throw Error(M(261));return ve=null,_e=0,ge}function y_(){for(;fe!==null;)xm(fe)}function w_(){for(;fe!==null&&!H0();)xm(fe)}function xm(e){var t=Mm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Lm(e):fe=t,Oc.current=null}function Lm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=h_(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=d_(n,t,Ge),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function Gn(e,t,n){var r=X,i=st.transition;try{st.transition=null,X=1,__(e,t,n,r)}finally{st.transition=i,X=r}return null}function __(e,t,n,r){do zr();while(yn!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ew(e,s),e===ve&&(fe=ve=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Um(Ro,function(){return zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=st.transition,st.transition=null;var a=X;X=1;var l=K;K|=4,Oc.current=null,p_(e,n),Pm(n,e),zw(du),No=!!cu,du=cu=null,e.current=n,g_(n),W0(),K=l,X=a,st.transition=s}else e.current=n;if(ro&&(ro=!1,yn=e,Go=i),s=e.pendingLanes,s===0&&(kn=null),q0(n.stateNode),Ve(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,e=Ou,Ou=null,e;return Go&1&&e.tag!==0&&zr(),s=e.pendingLanes,s&1?e===xu?$i++:($i=0,xu=e):$i=0,Mn(),null}function zr(){if(yn!==null){var e=fg(Go),t=st.transition,n=X;try{if(st.transition=null,X=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Go=0,K&6)throw Error(M(331));var i=K;for(K|=4,B=e.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for(B=h;B!==null;){var v=B;switch(v.tag){case 0:case 11:case 15:zi(8,v,s)}var g=v.child;if(g!==null)g.return=v,B=g;else for(;B!==null;){v=B;var S=v.sibling,N=v.return;if(Tm(v),v===h){B=null;break}if(S!==null){S.return=N,B=S;break}B=N}}}var A=s.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zi(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var y=e.current;for(B=y;B!==null;){a=B;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,B=E;else e:for(a=y;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:va(9,l)}}catch(j){le(l,l.return,j)}if(l===a){B=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,B=L;break e}B=l.return}}if(K=i,Mn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ua,e)}catch{}r=!0}return r}finally{X=n,st.transition=t}}return!1}function vf(e,t,n){t=Yr(n,t),t=fm(e,t,1),e=Tn(e,t,1),t=Le(),e!==null&&(ms(e,1,t),Ve(e,t))}function le(e,t,n){if(e.tag===3)vf(e,e,n);else for(;t!==null;){if(t.tag===3){vf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Yr(n,e),e=pm(t,e,1),t=Tn(t,e,1),e=Le(),t!==null&&(ms(t,1,e),Ve(t,e));break}}t=t.return}}function E_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>de()-Lc?er(e,0):xc|=n),Ve(e,t)}function Dm(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=Le();e=Zt(e,t),e!==null&&(ms(e,t,n),Ve(e,n))}function I_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dm(e,n)}function S_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Dm(e,n)}var Mm;Mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,c_(e,t,n);ze=!!(e.flags&131072)}else ze=!1,re&&t.flags&1048576&&Fg(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var i=Wr(t,Re.current);Fr(t,n),i=Cc(null,t,r,e,i,n);var s=Pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(s=!0,Mo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(t),i.updater=ma,t.stateNode=i,i._reactInternals=t,_u(t,r,e,n),t=Su(null,t,r,!0,s,n)):(t.tag=0,re&&s&&pc(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=k_(r),e=ft(r,e),i){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=af(null,t,r,e,n);break e;case 11:t=sf(null,t,r,e,n);break e;case 14:t=of(null,t,r,ft(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),af(e,t,r,i,n);case 3:e:{if(ym(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Wg(e,t),zo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Yr(Error(M(423)),t),t=lf(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(M(424)),t),t=lf(e,t,r,n,i);break e}else for(Ke=Sn(t.stateNode.containerInfo.firstChild),qe=t,re=!0,gt=null,n=Vg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){t=en(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Gg(t),e===null&&vu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,hu(r,i)?a=null:s!==null&&hu(r,s)&&(t.flags|=32),vm(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&vu(t),null;case 13:return wm(e,t,n);case 4:return Ic(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),sf(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(bo,r._currentValue),r._currentValue=a,s!==null)if(St(s.value,a)){if(s.children===i.children&&!Be.current){t=en(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Yt(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?c.next=c:(c.next=v.next,v.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),yu(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(M(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yu(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=ot(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),of(e,t,r,i,n);case 15:return gm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),vo(e,t),t.tag=1,$e(r)?(e=!0,Mo(t)):e=!1,Fr(t,n),hm(t,r,i),_u(t,r,i,n),Su(null,t,r,!0,e,n);case 19:return _m(e,t,n);case 22:return mm(e,t,n)}throw Error(M(156,t.tag))};function Um(e,t){return ug(e,t)}function T_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new T_(e,t,n,r)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k_(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nc)return 11;if(e===rc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")jc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tr:return tr(n.children,i,s,t);case tc:a=8,i|=8;break;case Hl:return e=it(12,n,t,i|2),e.elementType=Hl,e.lanes=s,e;case Wl:return e=it(13,n,t,i),e.elementType=Wl,e.lanes=s,e;case Gl:return e=it(19,n,t,i),e.elementType=Gl,e.lanes=s,e;case Gp:return wa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hp:a=10;break e;case Wp:a=9;break e;case nc:a=11;break e;case rc:a=14;break e;case dn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=it(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function tr(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function wa(e,t,n,r){return e=it(22,e,r,t),e.elementType=Gp,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,s,a,l,c){return e=new C_(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=it(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(s),e}function P_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jm(e){if(!e)return xn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if($e(n))return jg(e,n,t)}return t}function bm(e,t,n,r,i,s,a,l,c){return e=bc(n,r,!0,e,i,s,a,l,c),e.context=jm(null),n=e.current,r=Le(),i=Cn(n),s=Yt(r,i),s.callback=t??null,Tn(n,s,i),e.current.lanes=i,ms(e,i,r),Ve(e,r),e}function _a(e,t,n,r){var i=t.current,s=Le(),a=Cn(i);return n=jm(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(i,t,a),e!==null&&(Et(e,i,a,s),po(e,i,a)),a}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fc(e,t){yf(e,t),(e=e.alternate)&&yf(e,t)}function R_(){return null}var Fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function zc(e){this._internalRoot=e}Ea.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));_a(e,t,null,null)};Ea.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){_a(null,e,null,null)}),t[Qt]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fn.length&&t!==0&&t<fn[n].priority;n++);fn.splice(n,0,e),n===0&&yg(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function A_(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=qo(a);s.call(h)}}var a=bm(t,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=a,e[Qt]=a.current,ts(e.nodeType===8?e.parentNode:e),or(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=qo(c);l.call(h)}}var c=bc(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=c,e[Qt]=c.current,ts(e.nodeType===8?e.parentNode:e),or(function(){_a(t,c,n,r)}),c}function Sa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=qo(a);l.call(c)}}_a(t,a,e,i)}else a=A_(n,t,e,i,r);return qo(a)}pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ni(t.pendingLanes);n!==0&&(oc(t,n|1),Ve(t,de()),!(K&6)&&(Xr=de()+500,Mn()))}break;case 13:or(function(){var r=Zt(e,1);if(r!==null){var i=Le();Et(r,e,1,i)}}),Fc(e,1)}};ac=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Le();Et(t,e,134217728,n)}Fc(e,134217728)}};gg=function(e){if(e.tag===13){var t=Cn(e),n=Zt(e,t);if(n!==null){var r=Le();Et(n,e,t,r)}Fc(e,t)}};mg=function(){return X};vg=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};nu=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fa(r);if(!i)throw Error(M(90));qp(r),Yl(r,i)}}}break;case"textarea":Xp(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};rg=Dc;ig=or;var N_={usingClientEntryPoint:!1,Events:[ys,Rr,fa,tg,ng,Dc]},Pi={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O_={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ag(e),e===null?null:e.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ua=io.inject(O_),Rt=io}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(M(200));return P_(e,t,null,n)};Je.createRoot=function(e,t){if(!Bc(e))throw Error(M(299));var n=!1,r="",i=Fm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,ts(e.nodeType===8?e.parentNode:e),new zc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=ag(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return or(e)};Je.hydrate=function(e,t,n){if(!Ia(t))throw Error(M(200));return Sa(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bm(t,null,e,1,n??null,i,!1,s,a),e[Qt]=t.current,ts(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ea(t)};Je.render=function(e,t,n){if(!Ia(t))throw Error(M(200));return Sa(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(M(40));return e._reactRootContainer?(or(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};Je.unstable_batchedUpdates=Dc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Sa(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm)}catch(e){console.error(e)}}zm(),zp.exports=Je;var x_=zp.exports,Bm,_f=x_;Bm=_f.createRoot,_f.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Ef="popstate";function L_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Mu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yo(i)}return M_(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $c(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function D_(){return Math.random().toString(36).substr(2,8)}function If(e,t){return{usr:e.state,key:e.key,idx:t}}function Mu(e,t,n,r){return n===void 0&&(n=null),cs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ni(t):t,{state:n,key:t&&t.key||r||D_()})}function Yo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=wn.Pop,c=null,h=v();h==null&&(h=0,a.replaceState(cs({},a.state,{idx:h}),""));function v(){return(a.state||{idx:null}).idx}function g(){l=wn.Pop;let D=v(),T=D==null?null:D-h;h=D,c&&c({action:l,location:x.location,delta:T})}function S(D,T){l=wn.Push;let y=Mu(x.location,D,T);h=v()+1;let E=If(y,h),L=x.createHref(y);try{a.pushState(E,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(L)}s&&c&&c({action:l,location:x.location,delta:1})}function N(D,T){l=wn.Replace;let y=Mu(x.location,D,T);h=v();let E=If(y,h),L=x.createHref(y);a.replaceState(E,"",L),s&&c&&c({action:l,location:x.location,delta:0})}function A(D){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof D=="string"?D:Yo(D);return y=y.replace(/ $/,"%20"),he(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let x={get action(){return l},get location(){return e(i,a)},listen(D){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ef,g),c=D,()=>{i.removeEventListener(Ef,g),c=null}},createHref(D){return t(i,D)},createURL:A,encodeLocation(D){let T=A(D);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:S,replace:N,go(D){return a.go(D)}};return x}var Sf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sf||(Sf={}));function U_(e,t,n){return n===void 0&&(n="/"),j_(e,t,n)}function j_(e,t,n,r){let i=typeof t=="string"?ni(t):t,s=Vc(i.pathname||"/",n);if(s==null)return null;let a=$m(e);b_(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let h=X_(s);l=K_(a[c],h)}return l}function $m(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Rn([r,c.relativePath]),v=n.concat(c);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),$m(s.children,t,v,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:W_(h,s.index),routesMeta:v})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Vm(s.path))i(s,a,c)}),t}function Vm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Vm(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function b_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F_=/^:[\w-]+$/,z_=3,B_=2,$_=1,V_=10,H_=-2,Tf=e=>e==="*";function W_(e,t){let n=e.split("/"),r=n.length;return n.some(Tf)&&(r+=H_),t&&(r+=B_),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(F_.test(s)?z_:s===""?$_:V_),r)}function G_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function K_(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,v=s==="/"?t:t.slice(s.length)||"/",g=q_({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},v),S=c.route;if(!g)return null;Object.assign(i,g.params),a.push({params:i,pathname:Rn([s,g.pathname]),pathnameBase:tE(Rn([s,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(s=Rn([s,g.pathnameBase]))}return a}function q_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Y_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,v,g)=>{let{paramName:S,isOptional:N}=v;if(S==="*"){let x=l[g]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const A=l[g];return N&&!A?h[S]=void 0:h[S]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:e}}function Y_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$c(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function X_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const J_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q_=e=>J_.test(e);function Z_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ni(e):e,s;if(n)if(Q_(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$c(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=kf(n.substring(1),"/"):s=kf(n,t)}else s=t;return{pathname:s,search:nE(r),hash:rE(i)}}function kf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let n=eE(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ni(e):(i=cs({},e),he(!i.pathname||!i.pathname.includes("?"),Nl("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Nl("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Nl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let g=t.length-1;if(!r&&a.startsWith("..")){let S=a.split("/");for(;S[0]==="..";)S.shift(),g-=1;i.pathname=S.join("/")}l=g>=0?t[g]:"/"}let c=Z_(i,l),h=a&&a!=="/"&&a.endsWith("/"),v=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||v)&&(c.pathname+="/"),c}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),tE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hm=["post","put","patch","delete"];new Set(Hm);const sE=["get",...Hm];new Set(sE);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}const Gc=U.createContext(null),oE=U.createContext(null),Un=U.createContext(null),Ta=U.createContext(null),jn=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Wm=U.createContext(null);function aE(e,t){let{relative:n}=t===void 0?{}:t;ri()||he(!1);let{basename:r,navigator:i}=U.useContext(Un),{hash:s,pathname:a,search:l}=Km(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Rn([r,a])),i.createHref({pathname:c,search:l,hash:s})}function ri(){return U.useContext(Ta)!=null}function fr(){return ri()||he(!1),U.useContext(Ta).location}function Gm(e){U.useContext(Un).static||U.useLayoutEffect(e)}function _s(){let{isDataRoute:e}=U.useContext(jn);return e?_E():lE()}function lE(){ri()||he(!1);let e=U.useContext(Gc),{basename:t,future:n,navigator:r}=U.useContext(Un),{matches:i}=U.useContext(jn),{pathname:s}=fr(),a=JSON.stringify(Hc(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return Gm(()=>{l.current=!0}),U.useCallback(function(h,v){if(v===void 0&&(v={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let g=Wc(h,JSON.parse(a),s,v.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Rn([t,g.pathname])),(v.replace?r.replace:r.push)(g,v.state,v)},[t,r,a,s,e])}function Km(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=U.useContext(Un),{matches:i}=U.useContext(jn),{pathname:s}=fr(),a=JSON.stringify(Hc(i,r.v7_relativeSplatPath));return U.useMemo(()=>Wc(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function uE(e,t){return cE(e,t)}function cE(e,t,n,r){ri()||he(!1);let{navigator:i}=U.useContext(Un),{matches:s}=U.useContext(jn),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=fr(),v;if(t){var g;let D=typeof t=="string"?ni(t):t;c==="/"||(g=D.pathname)!=null&&g.startsWith(c)||he(!1),v=D}else v=h;let S=v.pathname||"/",N=S;if(c!=="/"){let D=c.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let A=U_(e,{pathname:N}),x=gE(A&&A.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:Rn([c,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?c:Rn([c,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return t&&x?U.createElement(Ta.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:wn.Pop}},x):x}function dE(){let e=wE(),t=iE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},t),n?U.createElement("pre",{style:i},n):null,null)}const hE=U.createElement(dE,null);class fE extends U.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?U.createElement(jn.Provider,{value:this.props.routeContext},U.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pE(e){let{routeContext:t,match:n,children:r}=e,i=U.useContext(Gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(jn.Provider,{value:t},r)}function gE(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let v=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);v>=0||he(!1),a=a.slice(0,Math.min(a.length,v+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<a.length;v++){let g=a[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=v),g.route.id){let{loaderData:S,errors:N}=n,A=g.route.loader&&S[g.route.id]===void 0&&(!N||N[g.route.id]===void 0);if(g.route.lazy||A){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((v,g,S)=>{let N,A=!1,x=null,D=null;n&&(N=l&&g.route.id?l[g.route.id]:void 0,x=g.route.errorElement||hE,c&&(h<0&&S===0?(EE("route-fallback"),A=!0,D=null):h===S&&(A=!0,D=g.route.hydrateFallbackElement||null)));let T=t.concat(a.slice(0,S+1)),y=()=>{let E;return N?E=x:A?E=D:g.route.Component?E=U.createElement(g.route.Component,null):g.route.element?E=g.route.element:E=v,U.createElement(pE,{match:g,routeContext:{outlet:v,matches:T,isDataRoute:n!=null},children:E})};return n&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?U.createElement(fE,{location:n.location,revalidation:n.revalidation,component:x,error:N,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var qm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qm||{}),Ym=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ym||{});function mE(e){let t=U.useContext(Gc);return t||he(!1),t}function vE(e){let t=U.useContext(oE);return t||he(!1),t}function yE(e){let t=U.useContext(jn);return t||he(!1),t}function Xm(e){let t=yE(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function wE(){var e;let t=U.useContext(Wm),n=vE(),r=Xm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _E(){let{router:e}=mE(qm.UseNavigateStable),t=Xm(Ym.UseNavigateStable),n=U.useRef(!1);return Gm(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ds({fromRouteId:t},s)))},[e,t])}const Cf={};function EE(e,t,n){Cf[e]||(Cf[e]=!0)}function IE(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jm(e){let{to:t,replace:n,state:r,relative:i}=e;ri()||he(!1);let{future:s,static:a}=U.useContext(Un),{matches:l}=U.useContext(jn),{pathname:c}=fr(),h=_s(),v=Wc(t,Hc(l,s.v7_relativeSplatPath),c,i==="path"),g=JSON.stringify(v);return U.useEffect(()=>h(JSON.parse(g),{replace:n,state:r,relative:i}),[h,g,i,n,r]),null}function Kn(e){he(!1)}function SE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:s,static:a=!1,future:l}=e;ri()&&he(!1);let c=t.replace(/^\/*/,"/"),h=U.useMemo(()=>({basename:c,navigator:s,static:a,future:ds({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=ni(r));let{pathname:v="/",search:g="",hash:S="",state:N=null,key:A="default"}=r,x=U.useMemo(()=>{let D=Vc(v,c);return D==null?null:{location:{pathname:D,search:g,hash:S,state:N,key:A},navigationType:i}},[c,v,g,S,N,A,i]);return x==null?null:U.createElement(Un.Provider,{value:h},U.createElement(Ta.Provider,{children:n,value:x}))}function TE(e){let{children:t,location:n}=e;return uE(Uu(t),n)}new Promise(()=>{});function Uu(e,t){t===void 0&&(t=[]);let n=[];return U.Children.forEach(e,(r,i)=>{if(!U.isValidElement(r))return;let s=[...t,i];if(r.type===U.Fragment){n.push.apply(n,Uu(r.props.children,s));return}r.type!==Kn&&he(!1),!r.props.index||!r.props.children||he(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Uu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ju(){return ju=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ju.apply(this,arguments)}function kE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function CE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function PE(e,t){return e.button===0&&(!t||t==="_self")&&!CE(e)}const RE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],AE="6";try{window.__reactRouterVersion=AE}catch{}const NE="startTransition",Pf=E0[NE];function OE(e){let{basename:t,children:n,future:r,window:i}=e,s=U.useRef();s.current==null&&(s.current=L_({window:i,v5Compat:!0}));let a=s.current,[l,c]=U.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},v=U.useCallback(g=>{h&&Pf?Pf(()=>c(g)):c(g)},[c,h]);return U.useLayoutEffect(()=>a.listen(v),[a,v]),U.useEffect(()=>IE(r),[r]),U.createElement(SE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mt=U.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:h,preventScrollReset:v,viewTransition:g}=t,S=kE(t,RE),{basename:N}=U.useContext(Un),A,x=!1;if(typeof h=="string"&&LE.test(h)&&(A=h,xE))try{let E=new URL(window.location.href),L=h.startsWith("//")?new URL(E.protocol+h):new URL(h),j=Vc(L.pathname,N);L.origin===E.origin&&j!=null?h=j+L.search+L.hash:x=!0}catch{}let D=aE(h,{relative:i}),T=DE(h,{replace:a,state:l,target:c,preventScrollReset:v,relative:i,viewTransition:g});function y(E){r&&r(E),E.defaultPrevented||T(E)}return U.createElement("a",ju({},S,{href:A||D,onClick:x||s?r:y,ref:n,target:c}))});var Rf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rf||(Rf={}));var Af;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Af||(Af={}));function DE(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=_s(),h=fr(),v=Km(e,{relative:a});return U.useCallback(g=>{if(PE(g,n)){g.preventDefault();let S=r!==void 0?r:Yo(h)===Yo(v);c(e,{replace:S,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[h,c,v,r,i,n,e,s,a,l])}var Nf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ME=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,v=s>>2,g=(s&3)<<4|l>>4;let S=(l&15)<<2|h>>6,N=h&63;c||(N=64,a||(S=64)),r.push(n[v],n[g],n[S],n[N])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ME(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const g=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new UE;const S=s<<2|l>>4;if(r.push(S),h!==64){const N=l<<4&240|h>>2;if(r.push(N),g!==64){const A=h<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class UE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jE=function(e){const t=Qm(e);return Zm.encodeByteArray(t,!0)},Xo=function(e){return jE(e).replace(/\./g,"")},ev=function(e){try{return Zm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>bE().__FIREBASE_DEFAULTS__,zE=()=>{if(typeof process>"u"||typeof Nf>"u")return;const e=Nf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},BE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ev(e[1]);return t&&JSON.parse(t)},Kc=()=>{try{return FE()||zE()||BE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tv=e=>{var t,n;return(n=(t=Kc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nv=e=>{const t=tv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rv=()=>{var e;return(e=Kc())===null||e===void 0?void 0:e.config},iv=e=>{var t;return(t=Kc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function HE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ov(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function WE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GE(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function av(){try{return typeof indexedDB=="object"}catch{return!1}}function lv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function KE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FirebaseError";class ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qE,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?YE(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ct(i,l,r)}}function YE(e,t){return e.replace(XE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const XE=/\{\$([^}]+)}/g;function JE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Of(s)&&Of(a)){if(!hs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Of(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function QE(e,t){const n=new ZE(e,t);return n.subscribe.bind(n)}class ZE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eI(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ol),i.error===void 0&&(i.error=Ol),i.complete===void 0&&(i.complete=Ol);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ol(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=1e3,nI=2,rI=4*60*60*1e3,iI=.5;function xf(e,t=tI,n=nI){const r=t*Math.pow(n,e),i=Math.round(iI*r*(Math.random()-.5)*2);return Math.min(rI,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){return e&&e._delegate?e._delegate:e}class lt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $E;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(aI(t))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qn){return this.instances.has(t)}getOptions(t=qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oI(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qn){return this.component?this.component.multipleInstances?t:qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(e){return e===qn?void 0:e}function aI(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sI(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const uI={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},cI=Y.INFO,dI={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},hI=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=dI[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ka{constructor(t){this.name=t,this._logLevel=cI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const fI=(e,t)=>t.some(n=>e instanceof n);let Lf,Df;function pI(){return Lf||(Lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gI(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,bu=new WeakMap,cv=new WeakMap,xl=new WeakMap,qc=new WeakMap;function mI(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(An(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&uv.set(n,e)}).catch(()=>{}),qc.set(t,e),t}function vI(e){if(bu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});bu.set(e,t)}let Fu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yI(e){Fu=e(Fu)}function wI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ll(this),t,...n);return cv.set(r,t.sort?t.sort():[t]),An(r)}:gI().includes(e)?function(...t){return e.apply(Ll(this),t),An(uv.get(this))}:function(...t){return An(e.apply(Ll(this),t))}}function _I(e){return typeof e=="function"?wI(e):(e instanceof IDBTransaction&&vI(e),fI(e,pI())?new Proxy(e,Fu):e)}function An(e){if(e instanceof IDBRequest)return mI(e);if(xl.has(e))return xl.get(e);const t=_I(e);return t!==e&&(xl.set(e,t),qc.set(t,e)),t}const Ll=e=>qc.get(e);function dv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),l=An(a);return r&&a.addEventListener("upgradeneeded",c=>{r(An(a.result),c.oldVersion,c.newVersion,An(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const EI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],Dl=new Map;function Mf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dl.get(t))return Dl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=II.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EI.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Dl.set(t,s),s}yI(e=>({...e,get:(t,n,r)=>Mf(t,n)||e.get(t,n,r),has:(t,n)=>!!Mf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zu="@firebase/app",Uf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new ka("@firebase/app"),kI="@firebase/app-compat",CI="@firebase/analytics-compat",PI="@firebase/analytics",RI="@firebase/app-check-compat",AI="@firebase/app-check",NI="@firebase/auth",OI="@firebase/auth-compat",xI="@firebase/database",LI="@firebase/data-connect",DI="@firebase/database-compat",MI="@firebase/functions",UI="@firebase/functions-compat",jI="@firebase/installations",bI="@firebase/installations-compat",FI="@firebase/messaging",zI="@firebase/messaging-compat",BI="@firebase/performance",$I="@firebase/performance-compat",VI="@firebase/remote-config",HI="@firebase/remote-config-compat",WI="@firebase/storage",GI="@firebase/storage-compat",KI="@firebase/firestore",qI="@firebase/vertexai-preview",YI="@firebase/firestore-compat",XI="firebase",JI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="[DEFAULT]",QI={[zu]:"fire-core",[kI]:"fire-core-compat",[PI]:"fire-analytics",[CI]:"fire-analytics-compat",[AI]:"fire-app-check",[RI]:"fire-app-check-compat",[NI]:"fire-auth",[OI]:"fire-auth-compat",[xI]:"fire-rtdb",[LI]:"fire-data-connect",[DI]:"fire-rtdb-compat",[MI]:"fire-fn",[UI]:"fire-fn-compat",[jI]:"fire-iid",[bI]:"fire-iid-compat",[FI]:"fire-fcm",[zI]:"fire-fcm-compat",[BI]:"fire-perf",[$I]:"fire-perf-compat",[VI]:"fire-rc",[HI]:"fire-rc-compat",[WI]:"fire-gcs",[GI]:"fire-gcs-compat",[KI]:"fire-fst",[YI]:"fire-fst-compat",[qI]:"fire-vertex","fire-js":"fire-js",[XI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Map,ZI=new Map,$u=new Map;function jf(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e){const t=e.name;if($u.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;$u.set(t,e);for(const n of Jo.values())jf(n,e);for(const n of ZI.values())jf(n,e);return!0}function bn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function vt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new pr("app","Firebase",eS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=JI;function hv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw Nn.create("no-options");const s=Jo.get(i);if(s){if(hs(n,s.options)&&hs(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const a=new lI(i);for(const c of $u.values())a.addComponent(c);const l=new tS(n,r,a);return Jo.set(i,l),l}function Ca(e=Bu){const t=Jo.get(e);if(!t&&e===Bu&&rv())return hv();if(!t)throw Nn.create("no-app",{appName:e});return t}function He(e,t,n){var r;let i=(r=QI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}Tt(new lt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-heartbeat-database",rS=1,fs="firebase-heartbeat-store";let Ml=null;function fv(){return Ml||(Ml=dv(nS,rS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nn.create("idb-open",{originalErrorMessage:e.message})})),Ml}async function iS(e){try{const n=(await fv()).transaction(fs),r=await n.objectStore(fs).get(pv(e));return await n.done,r}catch(t){if(t instanceof ct)tn.warn(t.message);else{const n=Nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tn.warn(n.message)}}}async function bf(e,t){try{const r=(await fv()).transaction(fs,"readwrite");await r.objectStore(fs).put(t,pv(e)),await r.done}catch(n){if(n instanceof ct)tn.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function pv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=1024,oS=30*24*60*60*1e3;class aS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ff();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=oS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ff(),{heartbeatsToSend:r,unsentEntries:i}=lS(this._heartbeatsCache.heartbeats),s=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tn.warn(n),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function lS(e,t=sS){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return av()?lv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function zf(e){return Xo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(e){Tt(new lt("platform-logger",t=>new SI(t),"PRIVATE")),Tt(new lt("heartbeat",t=>new aS(t),"PRIVATE")),He(zu,Uf,e),He(zu,Uf,"esm2017"),He("fire-js","")}cS("");function Yc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dS=gv,mv=new pr("auth","Firebase",gv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new ka("@firebase/auth");function hS(e,...t){Qo.logLevel<=Y.WARN&&Qo.warn(`Auth (${gr}): ${e}`,...t)}function Eo(e,...t){Qo.logLevel<=Y.ERROR&&Qo.error(`Auth (${gr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,...t){throw Jc(e,...t)}function It(e,...t){return Jc(e,...t)}function Xc(e,t,n){const r=Object.assign(Object.assign({},dS()),{[t]:n});return new pr("auth","Firebase",r).create(t,{appName:e.name})}function Xt(e){return Xc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ut(e,"argument-error"),Xc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return mv.create(e,...t)}function $(e,t,...n){if(!e)throw Jc(t,...n)}function Gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Eo(t),new Error(t)}function nn(e,t){e||Gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function pS(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pS()||ov()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n){this.shortDelay=t,this.longDelay=n,nn(n>t,"Short delay should be less than long delay!"),this.isMobile=VE()||WE()}get(){return gS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e,t){nn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Is(3e4,6e4);function Fn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function sn(e,t,n,r,i={}){return yv(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const l=Es(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:c},s);return HE()||(h.referrerPolicy="no-referrer"),vv.fetch()(wv(e,e.config.apiHost,n,l),h)})}async function yv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},vS),t);try{const i=new _S(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw so(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw so(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw so(e,"user-disabled",a);const v=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xc(e,v,h);ut(e,v)}}catch(i){if(i instanceof ct)throw i;ut(e,"network-request-failed",{message:String(i)})}}async function Ss(e,t,n,r,i={}){const s=await sn(e,t,n,r,i);return"mfaPendingCredential"in s&&ut(e,"multi-factor-auth-required",{_serverResponse:s}),s}function wv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Qc(e.config,i):`${e.config.apiScheme}://${i}`}function wS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _S{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),yS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(e,t,r);return i.customData._tokenResponse=n,i}function $f(e){return e!==void 0&&e.enterprise!==void 0}class ES{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return wS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function IS(e,t){return sn(e,"GET","/v2/recaptchaConfig",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(e,t){return sn(e,"POST","/v1/accounts:delete",t)}async function _v(e,t){return sn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function TS(e,t=!1){const n=Ze(e),r=await n.getIdToken(t),i=Zc(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(Ul(i.auth_time)),issuedAtTime:Vi(Ul(i.iat)),expirationTime:Vi(Ul(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ul(e){return Number(e)*1e3}function Zc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ev(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vf(e){const t=Zc(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ct&&kS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function kS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jr(e,_v(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ev(s.providerUserInfo):[],l=RS(e.providerData,a),c=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),v=c?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Hu(s.createdAt,s.lastLoginAt),isAnonymous:v};Object.assign(e,g)}async function PS(e){const t=Ze(e);await Zo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function RS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ev(e){return e.map(t=>{var{providerId:n}=t,r=Yc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(e,t){const n=await yv(e,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=wv(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NS(e,t){return sn(e,"POST","/v2/accounts:revokeToken",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=Vf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AS(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Br;return r&&($(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Kt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Yc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return TS(this,t)}reload(){return PS(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Xt(this.auth));const t=await this.getIdToken();return await Jr(this,SS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,l,c,h,v;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(i=n.email)!==null&&i!==void 0?i:void 0,N=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:E,emailVerified:L,isAnonymous:j,providerData:F,stsTokenManager:w}=n;$(E&&w,t,"internal-error");const p=Br.fromJSON(this.name,w);$(typeof E=="string",t,"internal-error"),cn(g,t.name),cn(S,t.name),$(typeof L=="boolean",t,"internal-error"),$(typeof j=="boolean",t,"internal-error"),cn(N,t.name),cn(A,t.name),cn(x,t.name),cn(D,t.name),cn(T,t.name),cn(y,t.name);const m=new Kt({uid:E,auth:t,email:S,emailVerified:L,displayName:g,isAnonymous:j,photoURL:A,phoneNumber:N,tenantId:x,stsTokenManager:p,createdAt:T,lastLoginAt:y});return F&&Array.isArray(F)&&(m.providerData=F.map(I=>Object.assign({},I))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(t,n,r=!1){const i=new Br;i.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Zo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ev(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Br;l.updateFromIdToken(r);const c=new Kt({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;function qt(e){nn(e instanceof Function,"Expected a class definition");let t=Hf.get(e);return t?(nn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Hf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Iv.type="NONE";const Wf=Iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e,t,n){return`firebase:${e}:${t}:${n}`}class $r{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,s),this.fullPersistenceKey=Io("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Kt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $r(qt(Wf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||qt(Wf);const a=Io(r,t.config.apiKey,t.name);let l=null;for(const h of n)try{const v=await h._get(a);if(v){const g=Kt._fromJSON(t,v);h!==s&&(l=g),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new $r(s,t,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new $r(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rv(t))return"Blackberry";if(Av(t))return"Webos";if(Tv(t))return"Safari";if((t.includes("chrome/")||kv(t))&&!t.includes("edge/"))return"Chrome";if(Pv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sv(e=De()){return/firefox\//i.test(e)}function Tv(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kv(e=De()){return/crios\//i.test(e)}function Cv(e=De()){return/iemobile/i.test(e)}function Pv(e=De()){return/android/i.test(e)}function Rv(e=De()){return/blackberry/i.test(e)}function Av(e=De()){return/webos/i.test(e)}function ed(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function OS(e=De()){var t;return ed(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function xS(){return GE()&&document.documentMode===10}function Nv(e=De()){return ed(e)||Pv(e)||Av(e)||Rv(e)||/windows phone/i.test(e)||Cv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(e,t=[]){let n;switch(e){case"Browser":n=Gf(De());break;case"Worker":n=`${Gf(De())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,l)=>{try{const c=t(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(e,t={}){return sn(e,"GET","/v2/passwordPolicy",Fn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=6;class US{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:MS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $r.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await _v(this,{idToken:t}),r=await Kt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Zo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(vt(this.app))return Promise.reject(Xt(this));const n=t?Ze(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return vt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await DS(this),n=new US(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new pr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&qt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&hS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(e){return Ze(e)}class Kf{constructor(t){this.auth=t,this.observer=null,this.addObserver=QE(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bS(e){Pa=e}function xv(e){return Pa.loadJS(e)}function FS(){return Pa.recaptchaEnterpriseScript}function zS(){return Pa.gapiScript}function BS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const $S="recaptcha-enterprise",VS="NO_RECAPTCHA";class HS{constructor(t){this.type=$S,this.auth=zn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{IS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new ES(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;$f(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(VS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&$f(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=FS();c.length!==0&&(c+=l),xv(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function qf(e,t,n,r=!1){const i=new HS(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await qf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(e,t){const n=bn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hs(s,t??{}))return i;ut(i,"already-initialized")}return n.initialize({options:t})}function GS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function KS(e,t,n){const r=zn(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Lv(t),{host:a,port:l}=qS(t),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YS()}function Lv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qS(e){const t=Lv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Yf(a)}}}function Yf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function YS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,n){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}async function XS(e,t){return sn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(e,t){return Ss(e,"POST","/v1/accounts:signInWithPassword",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",Fn(e,t))}async function ZS(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends td{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ps(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ps(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(t,n,"signInWithPassword",JS);case"emailLink":return QS(t,{email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(t,r,"signUpPassword",XS);case"emailLink":return ZS(t,{idToken:n,email:this._email,oobCode:this._password});default:ut(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e,t){return Ss(e,"POST","/v1/accounts:signInWithIdp",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="http://localhost";class ar extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Yc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ar(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Vr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Vr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Vr(t,n)}buildRequest(){const t={requestUri:eT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Es(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nT(e){const t=xi(Li(e)).link,n=t?xi(Li(t)).deep_link_id:null,r=xi(Li(e)).deep_link_id;return(r?xi(Li(r)).link:null)||r||n||t||e}class nd{constructor(t){var n,r,i,s,a,l;const c=xi(Li(t)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,v=(r=c.oobCode)!==null&&r!==void 0?r:null,g=tT((i=c.mode)!==null&&i!==void 0?i:null);$(h&&v&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=v,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=nT(t);try{return new nd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(t,n){return ps._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=nd.parseLink(n);return $(r,"argument-error"),ps._fromEmailAndCode(t,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends rd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ts{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return gn.credential(t.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ar._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ts{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ts{constructor(){super("twitter.com")}static credential(t,n){return ar._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e,t){return Ss(e,"POST","/v1/accounts:signUp",Fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Kt._fromIdTokenResponse(t,r,i),a=Xf(r);return new lr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Xf(r);return new lr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Xf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ea(t,n,r,i)}}function Dv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(e,s,t,r):s})}async function iT(e,t,n=!1){const r=await Jr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(e,t,n=!1){const{auth:r}=e;if(vt(r.app))return Promise.reject(Xt(r));const i="reauthenticate";try{const s=await Jr(e,Dv(r,i,t,e),n);$(s.idToken,r,"internal-error");const a=Zc(s.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(e.uid===l,r,"user-mismatch"),lr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(e,t,n=!1){if(vt(e.app))return Promise.reject(Xt(e));const r="signIn",i=await Dv(e,r,t),s=await lr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function oT(e,t){return Mv(zn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(e){const t=zn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aT(e,t,n){if(vt(e.app))return Promise.reject(Xt(e));const r=zn(e),a=await Wu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Uv(e),c}),l=await lr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function lT(e,t,n){return vt(e.app)?Promise.reject(Xt(e)):oT(Ze(e),ii.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(e,t){return sn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Ze(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Jr(r,uT(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function dT(e,t,n,r){return Ze(e).onIdTokenChanged(t,n,r)}function hT(e,t,n){return Ze(e).beforeAuthStateChanged(t,n)}function fT(e,t,n,r){return Ze(e).onAuthStateChanged(t,n,r)}function pT(e){return Ze(e).signOut()}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=1e3,mT=10;class bv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);xS()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,mT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}bv.type="LOCAL";const vT=bv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fv.type="SESSION";const zv=Fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ra(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),c=await yT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=id("",20);i.port1.start();const v=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const S=g;if(S.data.eventId===h)switch(S.data.status){case"ack":clearTimeout(v),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(S.data.response);break;default:clearTimeout(v),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function _T(e){Nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function ET(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ST(){return Bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="firebaseLocalStorageDb",TT=1,na="firebaseLocalStorage",Vv="fbase_key";class ks{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(e,t){return e.transaction([na],t?"readwrite":"readonly").objectStore(na)}function kT(){const e=indexedDB.deleteDatabase($v);return new ks(e).toPromise()}function Gu(){const e=indexedDB.open($v,TT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(na,{keyPath:Vv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(na)?t(r):(r.close(),await kT(),t(await Gu()))})})}async function Jf(e,t,n){const r=Aa(e,!0).put({[Vv]:t,value:n});return new ks(r).toPromise()}async function CT(e,t){const n=Aa(e,!1).get(t),r=await new ks(n).toPromise();return r===void 0?null:r.value}function Qf(e,t){const n=Aa(e,!0).delete(t);return new ks(n).toPromise()}const PT=800,RT=3;class Hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>RT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(ST()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ET(),!this.activeServiceWorker)return;this.sender=new wT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||IT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gu();return await Jf(t,ta,"1"),await Qf(t,ta),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>CT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Aa(i,!1).getAll();return new ks(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hv.type="LOCAL";const AT=Hv;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(e,t){return t?qt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends td{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Vr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function NT(e){return Mv(e.auth,new sd(e),e.bypassAuthState)}function OT(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),sT(n,new sd(e),e.bypassAuthState)}async function xT(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),iT(n,new sd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return NT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return OT;default:ut(this.auth,"internal-error")}}resolve(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Is(2e3,1e4);async function Zf(e,t,n){if(vt(e.app))return Promise.reject(It(e,"operation-not-supported-in-this-environment"));const r=zn(e);fS(e,t,rd);const i=Wv(r,n);return new Qn(r,"signInViaPopup",t,i).executeNotNull()}class Qn extends Gv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,LT.get())};t()}}Qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="pendingRedirect",So=new Map;class MT extends Gv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=So.get(this.auth._key());if(!t){try{const r=await UT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}So.set(this.auth._key(),t)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UT(e,t){const n=FT(t),r=bT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jT(e,t){So.set(e._key(),t)}function bT(e){return qt(e._redirectPersistence)}function FT(e){return Io(DT,e.config.apiKey,e.name)}async function zT(e,t,n=!1){if(vt(e.app))return Promise.reject(Xt(e));const r=zn(e),i=Wv(r,t),a=await new MT(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=10*60*1e3;class $T{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!VT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Kv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=BT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(t))}saveEventToCache(t){this.cachedEventUids.add(ep(t)),this.lastProcessedEventTime=Date.now()}}function ep(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Kv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function VT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(e,t={}){return sn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GT=/^https?/;async function KT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await HT(e);for(const n of t)try{if(qT(n))return}catch{}ut(e,"unauthorized-domain")}function qT(e){const t=Vu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!GT.test(n))return!1;if(WT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new Is(3e4,6e4);function tp(){const e=Nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function XT(e){return new Promise((t,n)=>{var r,i,s;function a(){tp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(It(e,"network-request-failed"))},timeout:YT.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)a();else{const l=BS("iframefcb");return Nt()[l]=()=>{gapi.load?a():n(It(e,"network-request-failed"))},xv(`${zS()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw To=null,t})}let To=null;function JT(e){return To=To||XT(e),To}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new Is(5e3,15e3),ZT="__/auth/iframe",e1="emulator/auth/iframe",t1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r1(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qc(t,e1):`https://${e.config.authDomain}/${ZT}`,r={apiKey:t.apiKey,appName:e.name,v:gr},i=n1.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function i1(e){const t=await JT(e),n=Nt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:r1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=It(e,"network-request-failed"),l=Nt().setTimeout(()=>{s(a)},QT.get());function c(){Nt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o1=500,a1=600,l1="_blank",u1="http://localhost";class np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c1(e,t,n,r=o1,i=a1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},s1),{width:r.toString(),height:i.toString(),top:s,left:a}),h=De().toLowerCase();n&&(l=kv(h)?l1:n),Sv(h)&&(t=t||u1,c.scrollbars="yes");const v=Object.entries(c).reduce((S,[N,A])=>`${S}${N}=${A},`,"");if(OS(h)&&l!=="_self")return d1(t||"",l),new np(null);const g=window.open(t||"",l,v);$(g,e,"popup-blocked");try{g.focus()}catch{}return new np(g)}function d1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="__/auth/handler",f1="emulator/auth/handler",p1=encodeURIComponent("fac");async function rp(e,t,n,r,i,s){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:gr,eventId:i};if(t instanceof rd){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",JE(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,g]of Object.entries({}))a[v]=g}if(t instanceof Ts){const v=t.getScopes().filter(g=>g!=="");v.length>0&&(a.scopes=v.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const v of Object.keys(l))l[v]===void 0&&delete l[v];const c=await e._getAppCheckToken(),h=c?`#${p1}=${encodeURIComponent(c)}`:"";return`${g1(e)}?${Es(l).slice(1)}${h}`}function g1({config:e}){return e.emulator?Qc(e,f1):`https://${e.authDomain}/${h1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="webStorageSupport";class m1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zv,this._completeRedirectFn=zT,this._overrideRedirectResult=jT}async _openPopup(t,n,r,i){var s;nn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await rp(t,n,r,Vu(),i);return c1(t,a,id())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await rp(t,n,r,Vu(),i);return _T(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await i1(t),r=new $T(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(jl,{type:jl},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jl];a!==void 0&&n(!!a),ut(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nv()||Tv()||ed()}}const v1=m1;var ip="@firebase/auth",sp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _1(e){Tt(new lt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(e)},h=new jS(r,i,s,c);return GS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tt(new lt("auth-internal",t=>{const n=zn(t.getProvider("auth").getImmediate());return(r=>new y1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(ip,sp,w1(e)),He(ip,sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=5*60,I1=iv("authIdTokenMaxAge")||E1;let op=null;const S1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I1)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function T1(e=Ca()){const t=bn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=WS(e,{popupRedirectResolver:v1,persistence:[AT,vT,zv]}),r=iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=S1(s.toString());hT(n,a,()=>a(n.currentUser)),dT(n,l=>a(l))}}const i=tv("auth");return i&&KS(n,`http://${i}`),n}function k1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}bS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_1("Browser");var C1="firebase",P1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(C1,P1,"app");const qv="@firebase/installations",od="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=1e4,Xv=`w:${od}`,Jv="FIS_v2",R1="https://firebaseinstallations.googleapis.com/v1",A1=60*60*1e3,N1="installations",O1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new pr(N1,O1,x1);function Qv(e){return e instanceof ct&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv({projectId:e}){return`${R1}/projects/${e}/installations`}function ey(e){return{token:e.token,requestStatus:2,expiresIn:D1(e.expiresIn),creationTime:Date.now()}}async function ty(e,t){const r=(await t.json()).error;return ur.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ny({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function L1(e,{refreshToken:t}){const n=ny(e);return n.append("Authorization",M1(t)),n}async function ry(e){const t=await e();return t.status>=500&&t.status<600?e():t}function D1(e){return Number(e.replace("s","000"))}function M1(e){return`${Jv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Zv(e),i=ny(e),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:Jv,appId:e.appId,sdkVersion:Xv},l={method:"POST",headers:i,body:JSON.stringify(a)},c=await ry(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ey(h.authToken)}}else throw await ty("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=/^[cdef][\w-]{21}$/,Ku="";function F1(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=z1(e);return b1.test(n)?n:Ku}catch{return Ku}}function z1(e){return j1(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Map;function oy(e,t){const n=Na(e);ay(n,t),B1(n,t)}function ay(e,t){const n=sy.get(e);if(n)for(const r of n)r(t)}function B1(e,t){const n=$1();n&&n.postMessage({key:e,fid:t}),V1()}let Zn=null;function $1(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=e=>{ay(e.data.key,e.data.fid)}),Zn}function V1(){sy.size===0&&Zn&&(Zn.close(),Zn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="firebase-installations-database",W1=1,cr="firebase-installations-store";let bl=null;function ad(){return bl||(bl=dv(H1,W1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}})),bl}async function ra(e,t){const n=Na(e),i=(await ad()).transaction(cr,"readwrite"),s=i.objectStore(cr),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&oy(e,t.fid),t}async function ly(e){const t=Na(e),r=(await ad()).transaction(cr,"readwrite");await r.objectStore(cr).delete(t),await r.done}async function Oa(e,t){const n=Na(e),i=(await ad()).transaction(cr,"readwrite"),s=i.objectStore(cr),a=await s.get(n),l=t(a);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&oy(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(e){let t;const n=await Oa(e.appConfig,r=>{const i=G1(r),s=K1(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ku?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function G1(e){const t=e||{fid:F1(),registrationStatus:0};return uy(t)}function K1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=q1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Y1(e)}:{installationEntry:t}}async function q1(e,t){try{const n=await U1(e,t);return ra(e.appConfig,n)}catch(n){throw Qv(n)&&n.customData.serverCode===409?await ly(e.appConfig):await ra(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Y1(e){let t=await ap(e.appConfig);for(;t.registrationStatus===1;)await iy(100),t=await ap(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ld(e);return r||n}return t}function ap(e){return Oa(e,t=>{if(!t)throw ur.create("installation-not-found");return uy(t)})}function uy(e){return X1(e)?{fid:e.fid,registrationStatus:0}:e}function X1(e){return e.registrationStatus===1&&e.registrationTime+Yv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1({appConfig:e,heartbeatServiceProvider:t},n){const r=Q1(e,n),i=L1(e,n),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:Xv,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},c=await ry(()=>fetch(r,l));if(c.ok){const h=await c.json();return ey(h)}else throw await ty("Generate Auth Token",c)}function Q1(e,{fid:t}){return`${Zv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(e,t=!1){let n;const r=await Oa(e.appConfig,s=>{if(!cy(s))throw ur.create("not-registered");const a=s.authToken;if(!t&&tk(a))return s;if(a.requestStatus===1)return n=Z1(e,t),s;{if(!navigator.onLine)throw ur.create("app-offline");const l=rk(s);return n=ek(e,l),l}});return n?await n:r.authToken}async function Z1(e,t){let n=await lp(e.appConfig);for(;n.authToken.requestStatus===1;)await iy(100),n=await lp(e.appConfig);const r=n.authToken;return r.requestStatus===0?ud(e,t):r}function lp(e){return Oa(e,t=>{if(!cy(t))throw ur.create("not-registered");const n=t.authToken;return ik(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ek(e,t){try{const n=await J1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ra(e.appConfig,r),n}catch(n){if(Qv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ly(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ra(e.appConfig,r)}throw n}}function cy(e){return e!==void 0&&e.registrationStatus===2}function tk(e){return e.requestStatus===2&&!nk(e)}function nk(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+A1}function rk(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ik(e){return e.requestStatus===1&&e.requestTime+Yv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(e){const t=e,{installationEntry:n,registrationPromise:r}=await ld(t);return r?r.catch(console.error):ud(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(e,t=!1){const n=e;return await ak(n),(await ud(n,t)).token}async function ak(e){const{registrationPromise:t}=await ld(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(e){if(!e||!e.options)throw Fl("App Configuration");if(!e.name)throw Fl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fl(e){return ur.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="installations",uk="installations-internal",ck=e=>{const t=e.getProvider("app").getImmediate(),n=lk(t),r=bn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dk=e=>{const t=e.getProvider("app").getImmediate(),n=bn(t,dy).getImmediate();return{getId:()=>sk(n),getToken:i=>ok(n,i)}};function hk(){Tt(new lt(dy,ck,"PUBLIC")),Tt(new lt(uk,dk,"PRIVATE"))}hk();He(qv,od);He(qv,od,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="analytics",fk="firebase_id",pk="origin",gk=60*1e3,mk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new ka("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new pr("analytics","Analytics",vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(e){if(!e.startsWith(cd)){const t=Ye.create("invalid-gtag-resource",{gtagURL:e});return We.warn(t.message),""}return e}function hy(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function wk(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function _k(e,t){const n=wk("firebase-js-sdk-policy",{createScriptURL:yk}),r=document.createElement("script"),i=`${cd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ek(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ik(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await hy(n)).find(h=>h.measurementId===i);c&&await t[c.appId]}}catch(l){We.error(l)}e("config",i,s)}async function Sk(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await hy(n);for(const c of a){const h=l.find(g=>g.measurementId===c),v=h&&t[h.appId];if(v)s.push(v);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){We.error(s)}}function Tk(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[l,c]=a;await Sk(e,t,n,l,c)}else if(s==="config"){const[l,c]=a;await Ik(e,t,n,r,l,c)}else if(s==="consent"){const[l,c]=a;e("consent",l,c)}else if(s==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(s==="set"){const[l]=a;e("set",l)}else e(s,...a)}catch(l){We.error(l)}}return i}function kk(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Tk(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Ck(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(cd)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=30,Rk=1e3;class Ak{constructor(t={},n=Rk){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fy=new Ak;function Nk(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ok(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Nk(r)},s=mk.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function xk(e,t=fy,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ye.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Mk;return setTimeout(async()=>{l.abort()},gk),py({appId:r,apiKey:i,measurementId:s},a,l,t)}async function py(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=fy){var s;const{appId:a,measurementId:l}=e;try{await Lk(r,t)}catch(c){if(l)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Ok(e);return i.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!Dk(h)){if(i.deleteThrottleMetadata(a),l)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const v=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?xf(n,i.intervalMillis,Pk):xf(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return i.setThrottleMetadata(a,g),We.debug(`Calling attemptFetch again in ${v} millis`),py(e,g,r,i)}}function Lk(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Dk(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Mk{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Uk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(){if(av())try{await lv()}catch(e){return We.warn(Ye.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return We.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bk(e,t,n,r,i,s,a){var l;const c=xk(e);c.then(N=>{n[N.measurementId]=N.appId,e.options.measurementId&&N.measurementId!==e.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>We.error(N)),t.push(c);const h=jk().then(N=>{if(N)return r.getId()}),[v,g]=await Promise.all([c,h]);Ck(s)||_k(s,v.measurementId),i("js",new Date);const S=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return S[pk]="firebase",S.update=!0,g!=null&&(S[fk]=g),i("config",v.measurementId,S),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(t){this.app=t}_delete(){return delete Hi[this.app.options.appId],Promise.resolve()}}let Hi={},up=[];const cp={};let zl="dataLayer",zk="gtag",dp,gy,hp=!1;function Bk(){const e=[];if(ov()&&e.push("This is a browser extension environment."),KE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:t});We.warn(n.message)}}function $k(e,t,n){Bk();const r=e.options.appId;if(!r)throw Ye.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(Hi[r]!=null)throw Ye.create("already-exists",{id:r});if(!hp){Ek(zl);const{wrappedGtag:s,gtagCore:a}=kk(Hi,up,cp,zl,zk);gy=s,dp=a,hp=!0}return Hi[r]=bk(e,up,cp,t,dp,zl,n),new Fk(e)}function Vk(e=Ca()){e=Ze(e);const t=bn(e,ia);return t.isInitialized()?t.getImmediate():Hk(e)}function Hk(e,t={}){const n=bn(e,ia);if(n.isInitialized()){const i=n.getImmediate();if(hs(t,n.getOptions()))return i;throw Ye.create("already-initialized")}return n.initialize({options:t})}function Wk(e,t,n,r){e=Ze(e),Uk(gy,Hi[e.app.options.appId],t,n,r).catch(i=>We.error(i))}const fp="@firebase/analytics",pp="0.10.8";function Gk(){Tt(new lt(ia,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return $k(r,i,n)},"PUBLIC")),Tt(new lt("analytics-internal",e,"PRIVATE")),He(fp,pp),He(fp,pp,"esm2017");function e(t){try{const n=t.getProvider(ia).getImmediate();return{logEvent:(r,i,s)=>Wk(n,r,i,s)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}Gk();var gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var my;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function m(){}m.prototype=p.prototype,w.D=p.prototype,w.prototype=new m,w.prototype.constructor=w,w.C=function(I,k,P){for(var _=Array(arguments.length-2),et=2;et<arguments.length;et++)_[et-2]=arguments[et];return p.prototype[k].apply(I,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,p,m){m||(m=0);var I=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)I[k]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(k=0;16>k;++k)I[k]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=w.g[0],m=w.g[1],k=w.g[2];var P=w.g[3],_=p+(P^m&(k^P))+I[0]+3614090360&4294967295;p=m+(_<<7&4294967295|_>>>25),_=P+(k^p&(m^k))+I[1]+3905402710&4294967295,P=p+(_<<12&4294967295|_>>>20),_=k+(m^P&(p^m))+I[2]+606105819&4294967295,k=P+(_<<17&4294967295|_>>>15),_=m+(p^k&(P^p))+I[3]+3250441966&4294967295,m=k+(_<<22&4294967295|_>>>10),_=p+(P^m&(k^P))+I[4]+4118548399&4294967295,p=m+(_<<7&4294967295|_>>>25),_=P+(k^p&(m^k))+I[5]+1200080426&4294967295,P=p+(_<<12&4294967295|_>>>20),_=k+(m^P&(p^m))+I[6]+2821735955&4294967295,k=P+(_<<17&4294967295|_>>>15),_=m+(p^k&(P^p))+I[7]+4249261313&4294967295,m=k+(_<<22&4294967295|_>>>10),_=p+(P^m&(k^P))+I[8]+1770035416&4294967295,p=m+(_<<7&4294967295|_>>>25),_=P+(k^p&(m^k))+I[9]+2336552879&4294967295,P=p+(_<<12&4294967295|_>>>20),_=k+(m^P&(p^m))+I[10]+4294925233&4294967295,k=P+(_<<17&4294967295|_>>>15),_=m+(p^k&(P^p))+I[11]+2304563134&4294967295,m=k+(_<<22&4294967295|_>>>10),_=p+(P^m&(k^P))+I[12]+1804603682&4294967295,p=m+(_<<7&4294967295|_>>>25),_=P+(k^p&(m^k))+I[13]+4254626195&4294967295,P=p+(_<<12&4294967295|_>>>20),_=k+(m^P&(p^m))+I[14]+2792965006&4294967295,k=P+(_<<17&4294967295|_>>>15),_=m+(p^k&(P^p))+I[15]+1236535329&4294967295,m=k+(_<<22&4294967295|_>>>10),_=p+(k^P&(m^k))+I[1]+4129170786&4294967295,p=m+(_<<5&4294967295|_>>>27),_=P+(m^k&(p^m))+I[6]+3225465664&4294967295,P=p+(_<<9&4294967295|_>>>23),_=k+(p^m&(P^p))+I[11]+643717713&4294967295,k=P+(_<<14&4294967295|_>>>18),_=m+(P^p&(k^P))+I[0]+3921069994&4294967295,m=k+(_<<20&4294967295|_>>>12),_=p+(k^P&(m^k))+I[5]+3593408605&4294967295,p=m+(_<<5&4294967295|_>>>27),_=P+(m^k&(p^m))+I[10]+38016083&4294967295,P=p+(_<<9&4294967295|_>>>23),_=k+(p^m&(P^p))+I[15]+3634488961&4294967295,k=P+(_<<14&4294967295|_>>>18),_=m+(P^p&(k^P))+I[4]+3889429448&4294967295,m=k+(_<<20&4294967295|_>>>12),_=p+(k^P&(m^k))+I[9]+568446438&4294967295,p=m+(_<<5&4294967295|_>>>27),_=P+(m^k&(p^m))+I[14]+3275163606&4294967295,P=p+(_<<9&4294967295|_>>>23),_=k+(p^m&(P^p))+I[3]+4107603335&4294967295,k=P+(_<<14&4294967295|_>>>18),_=m+(P^p&(k^P))+I[8]+1163531501&4294967295,m=k+(_<<20&4294967295|_>>>12),_=p+(k^P&(m^k))+I[13]+2850285829&4294967295,p=m+(_<<5&4294967295|_>>>27),_=P+(m^k&(p^m))+I[2]+4243563512&4294967295,P=p+(_<<9&4294967295|_>>>23),_=k+(p^m&(P^p))+I[7]+1735328473&4294967295,k=P+(_<<14&4294967295|_>>>18),_=m+(P^p&(k^P))+I[12]+2368359562&4294967295,m=k+(_<<20&4294967295|_>>>12),_=p+(m^k^P)+I[5]+4294588738&4294967295,p=m+(_<<4&4294967295|_>>>28),_=P+(p^m^k)+I[8]+2272392833&4294967295,P=p+(_<<11&4294967295|_>>>21),_=k+(P^p^m)+I[11]+1839030562&4294967295,k=P+(_<<16&4294967295|_>>>16),_=m+(k^P^p)+I[14]+4259657740&4294967295,m=k+(_<<23&4294967295|_>>>9),_=p+(m^k^P)+I[1]+2763975236&4294967295,p=m+(_<<4&4294967295|_>>>28),_=P+(p^m^k)+I[4]+1272893353&4294967295,P=p+(_<<11&4294967295|_>>>21),_=k+(P^p^m)+I[7]+4139469664&4294967295,k=P+(_<<16&4294967295|_>>>16),_=m+(k^P^p)+I[10]+3200236656&4294967295,m=k+(_<<23&4294967295|_>>>9),_=p+(m^k^P)+I[13]+681279174&4294967295,p=m+(_<<4&4294967295|_>>>28),_=P+(p^m^k)+I[0]+3936430074&4294967295,P=p+(_<<11&4294967295|_>>>21),_=k+(P^p^m)+I[3]+3572445317&4294967295,k=P+(_<<16&4294967295|_>>>16),_=m+(k^P^p)+I[6]+76029189&4294967295,m=k+(_<<23&4294967295|_>>>9),_=p+(m^k^P)+I[9]+3654602809&4294967295,p=m+(_<<4&4294967295|_>>>28),_=P+(p^m^k)+I[12]+3873151461&4294967295,P=p+(_<<11&4294967295|_>>>21),_=k+(P^p^m)+I[15]+530742520&4294967295,k=P+(_<<16&4294967295|_>>>16),_=m+(k^P^p)+I[2]+3299628645&4294967295,m=k+(_<<23&4294967295|_>>>9),_=p+(k^(m|~P))+I[0]+4096336452&4294967295,p=m+(_<<6&4294967295|_>>>26),_=P+(m^(p|~k))+I[7]+1126891415&4294967295,P=p+(_<<10&4294967295|_>>>22),_=k+(p^(P|~m))+I[14]+2878612391&4294967295,k=P+(_<<15&4294967295|_>>>17),_=m+(P^(k|~p))+I[5]+4237533241&4294967295,m=k+(_<<21&4294967295|_>>>11),_=p+(k^(m|~P))+I[12]+1700485571&4294967295,p=m+(_<<6&4294967295|_>>>26),_=P+(m^(p|~k))+I[3]+2399980690&4294967295,P=p+(_<<10&4294967295|_>>>22),_=k+(p^(P|~m))+I[10]+4293915773&4294967295,k=P+(_<<15&4294967295|_>>>17),_=m+(P^(k|~p))+I[1]+2240044497&4294967295,m=k+(_<<21&4294967295|_>>>11),_=p+(k^(m|~P))+I[8]+1873313359&4294967295,p=m+(_<<6&4294967295|_>>>26),_=P+(m^(p|~k))+I[15]+4264355552&4294967295,P=p+(_<<10&4294967295|_>>>22),_=k+(p^(P|~m))+I[6]+2734768916&4294967295,k=P+(_<<15&4294967295|_>>>17),_=m+(P^(k|~p))+I[13]+1309151649&4294967295,m=k+(_<<21&4294967295|_>>>11),_=p+(k^(m|~P))+I[4]+4149444226&4294967295,p=m+(_<<6&4294967295|_>>>26),_=P+(m^(p|~k))+I[11]+3174756917&4294967295,P=p+(_<<10&4294967295|_>>>22),_=k+(p^(P|~m))+I[2]+718787259&4294967295,k=P+(_<<15&4294967295|_>>>17),_=m+(P^(k|~p))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(k+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var m=p-this.blockSize,I=this.B,k=this.h,P=0;P<p;){if(k==0)for(;P<=m;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<p;)if(I[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,I),k=0;break}}else for(;P<p;)if(I[k++]=w[P++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var m=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=m&255,m/=256;for(this.u(w),w=Array(16),p=m=0;4>p;++p)for(var I=0;32>I;I+=8)w[m++]=this.g[p]>>>I&255;return w};function s(w,p){var m=l;return Object.prototype.hasOwnProperty.call(m,w)?m[w]:m[w]=p(w)}function a(w,p){this.h=p;for(var m=[],I=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;I&&P==p||(m[k]=P,I=!1)}this.g=m}var l={};function c(w){return-128<=w&&128>w?s(w,function(p){return new a([p|0],0>p?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return D(h(-w));for(var p=[],m=1,I=0;w>=m;I++)p[I]=w/m|0,m*=4294967296;return new a(p,0)}function v(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return D(v(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(p,8)),I=g,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),_=parseInt(w.substring(k,k+P),p);8>P?(P=h(Math.pow(p,P)),I=I.j(P).add(h(_))):(I=I.j(m),I=I.add(h(_)))}return I}var g=c(0),S=c(1),N=c(16777216);e=a.prototype,e.m=function(){if(x(this))return-D(this).m();for(var w=0,p=1,m=0;m<this.g.length;m++){var I=this.i(m);w+=(0<=I?I:4294967296+I)*p,p*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(x(this))return"-"+D(this).toString(w);for(var p=h(Math.pow(w,6)),m=this,I="";;){var k=L(m,p).g;m=T(m,k.j(p));var P=((0<m.g.length?m.g[0]:m.h)>>>0).toString(w);if(m=k,A(m))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function x(w){return w.h==-1}e.l=function(w){return w=T(this,w),x(w)?-1:A(w)?0:1};function D(w){for(var p=w.g.length,m=[],I=0;I<p;I++)m[I]=~w.g[I];return new a(m,~w.h).add(S)}e.abs=function(){return x(this)?D(this):this},e.add=function(w){for(var p=Math.max(this.g.length,w.g.length),m=[],I=0,k=0;k<=p;k++){var P=I+(this.i(k)&65535)+(w.i(k)&65535),_=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);I=_>>>16,P&=65535,_&=65535,m[k]=_<<16|P}return new a(m,m[m.length-1]&-2147483648?-1:0)};function T(w,p){return w.add(D(p))}e.j=function(w){if(A(this)||A(w))return g;if(x(this))return x(w)?D(this).j(D(w)):D(D(this).j(w));if(x(w))return D(this.j(D(w)));if(0>this.l(N)&&0>w.l(N))return h(this.m()*w.m());for(var p=this.g.length+w.g.length,m=[],I=0;I<2*p;I++)m[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<w.g.length;k++){var P=this.i(I)>>>16,_=this.i(I)&65535,et=w.i(k)>>>16,Bn=w.i(k)&65535;m[2*I+2*k]+=_*Bn,y(m,2*I+2*k),m[2*I+2*k+1]+=P*Bn,y(m,2*I+2*k+1),m[2*I+2*k+1]+=_*et,y(m,2*I+2*k+1),m[2*I+2*k+2]+=P*et,y(m,2*I+2*k+2)}for(I=0;I<p;I++)m[I]=m[2*I+1]<<16|m[2*I];for(I=p;I<2*p;I++)m[I]=0;return new a(m,0)};function y(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function E(w,p){this.g=w,this.h=p}function L(w,p){if(A(p))throw Error("division by zero");if(A(w))return new E(g,g);if(x(w))return p=L(D(w),p),new E(D(p.g),D(p.h));if(x(p))return p=L(w,D(p)),new E(D(p.g),p.h);if(30<w.g.length){if(x(w)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,I=p;0>=I.l(w);)m=j(m),I=j(I);var k=F(m,1),P=F(I,1);for(I=F(I,2),m=F(m,2);!A(I);){var _=P.add(I);0>=_.l(w)&&(k=k.add(m),P=_),I=F(I,1),m=F(m,1)}return p=T(w,k.j(p)),new E(k,p)}for(k=g;0<=w.l(p);){for(m=Math.max(1,Math.floor(w.m()/p.m())),I=Math.ceil(Math.log(m)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=h(m),_=P.j(p);x(_)||0<_.l(w);)m-=I,P=h(m),_=P.j(p);A(P)&&(P=S),k=k.add(P),w=T(w,_)}return new E(k,w)}e.A=function(w){return L(this,w).h},e.and=function(w){for(var p=Math.max(this.g.length,w.g.length),m=[],I=0;I<p;I++)m[I]=this.i(I)&w.i(I);return new a(m,this.h&w.h)},e.or=function(w){for(var p=Math.max(this.g.length,w.g.length),m=[],I=0;I<p;I++)m[I]=this.i(I)|w.i(I);return new a(m,this.h|w.h)},e.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),m=[],I=0;I<p;I++)m[I]=this.i(I)^w.i(I);return new a(m,this.h^w.h)};function j(w){for(var p=w.g.length+1,m=[],I=0;I<p;I++)m[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(m,w.h)}function F(w,p){var m=p>>5;p%=32;for(var I=w.g.length-m,k=[],P=0;P<I;P++)k[P]=0<p?w.i(P+m)>>>p|w.i(P+m+1)<<32-p:w.i(P+m);return new a(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=v,my=a}).apply(typeof gp<"u"?gp:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var C=o[f];if(!(C in d))break e;d=d[C]}o=o[o.length-1],f=d[o],u=u(f),u!=f&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,f=!1,C={next:function(){if(!f&&d<o.length){var O=d++;return{value:u(O,o[O]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function v(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function S(o,u,d){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:g,S.apply(null,arguments)}function N(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function A(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,C,O){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return u.prototype[C].apply(f,b)}}function x(o){const u=o.length;if(0<u){const d=Array(u);for(let f=0;f<u;f++)d[f]=o[f];return d}return[]}function D(o,u){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(c(f)){const C=o.length||0,O=f.length||0;o.length=C+O;for(let b=0;b<O;b++)o[C+b]=f[b]}else o.push(f)}}class T{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function y(o){return/^[\s\xa0]*$/.test(o)}function E(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var j=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(o,u,d){for(const f in o)u.call(d,o[f],f,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function p(o){const u={};for(const d in o)u[d]=o[d];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(d in f)o[d]=f[d];for(let O=0;O<m.length;O++)d=m[O],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function k(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function P(o){l.setTimeout(()=>{throw o},0)}function _(){var o=V;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,d){const f=Bn.get();f.set(u,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Bn=new T(()=>new oi,o=>o.reset());class oi{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,z=!1,V=new et,H=()=>{const o=l.Promise.resolve(void 0);Lt=()=>{o.then(ie)}};var ie=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(d){P(d)}var u=Bn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}z=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Mt(o,u){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(j){e:{try{L(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ut[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mt.aa.h.call(this)}}A(Mt,ue);var Ut={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),Ty=0;function ky(o,u,d,f,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!f,this.ha=C,this.key=++Ty,this.da=this.fa=!1}function Ps(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Rs(o){this.src=o,this.g={},this.h=0}Rs.prototype.add=function(o,u,d,f,C){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var b=Da(o,u,f,C);return-1<b?(u=o[b],d||(u.fa=!1)):(u=new ky(u,this.src,O,!!f,C),u.fa=d,o.push(u)),u};function La(o,u){var d=u.type;if(d in o.g){var f=o.g[d],C=Array.prototype.indexOf.call(f,u,void 0),O;(O=0<=C)&&Array.prototype.splice.call(f,C,1),O&&(Ps(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Da(o,u,d,f){for(var C=0;C<o.length;++C){var O=o[C];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==f)return C}return-1}var Ma="closure_lm_"+(1e6*Math.random()|0),Ua={};function pd(o,u,d,f,C){if(Array.isArray(u)){for(var O=0;O<u.length;O++)pd(o,u[O],d,f,C);return null}return d=vd(d),o&&o[jt]?o.K(u,d,h(f)?!!f.capture:!1,C):Cy(o,u,d,!1,f,C)}function Cy(o,u,d,f,C,O){if(!u)throw Error("Invalid event type");var b=h(C)?!!C.capture:!!C,Q=ba(o);if(Q||(o[Ma]=Q=new Rs(o)),d=Q.add(u,d,f,b,O),d.proxy)return d;if(f=Py(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Dt||(C=b),C===void 0&&(C=!1),o.addEventListener(u.toString(),f,C);else if(o.attachEvent)o.attachEvent(md(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Py(){function o(d){return u.call(o.src,o.listener,d)}const u=Ry;return o}function gd(o,u,d,f,C){if(Array.isArray(u))for(var O=0;O<u.length;O++)gd(o,u[O],d,f,C);else f=h(f)?!!f.capture:!!f,d=vd(d),o&&o[jt]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],d=Da(O,d,f,C),-1<d&&(Ps(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=ba(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Da(u,d,f,C)),(d=-1<o?u[o]:null)&&ja(d))}function ja(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[jt])La(u.i,o);else{var d=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(d,f,o.capture):u.detachEvent?u.detachEvent(md(d),f):u.addListener&&u.removeListener&&u.removeListener(f),(d=ba(u))?(La(d,o),d.h==0&&(d.src=null,u[Ma]=null)):Ps(o)}}}function md(o){return o in Ua?Ua[o]:Ua[o]="on"+o}function Ry(o,u){if(o.da)o=!0;else{u=new Mt(u,this);var d=o.listener,f=o.ha||o.src;o.fa&&ja(o),o=d.call(f,u)}return o}function ba(o){return o=o[Ma],o instanceof Rs?o:null}var Fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function vd(o){return typeof o=="function"?o:(o[Fa]||(o[Fa]=function(u){return o.handleEvent(u)}),o[Fa])}function Ie(){J.call(this),this.i=new Rs(this),this.M=this,this.F=null}A(Ie,J),Ie.prototype[jt]=!0,Ie.prototype.removeEventListener=function(o,u,d,f){gd(this,o,u,d,f)};function Ae(o,u){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new ue(u,o);else if(u instanceof ue)u.target=u.target||o;else{var C=u;u=new ue(f,o),I(u,C)}if(C=!0,d)for(var O=d.length-1;0<=O;O--){var b=u.g=d[O];C=As(b,f,!0,u)&&C}if(b=u.g=o,C=As(b,f,!0,u)&&C,C=As(b,f,!1,u)&&C,d)for(O=0;O<d.length;O++)b=u.g=d[O],C=As(b,f,!1,u)&&C}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],f=0;f<d.length;f++)Ps(d[f]);delete o.g[u],o.h--}}this.F=null},Ie.prototype.K=function(o,u,d,f){return this.i.add(String(o),u,!1,d,f)},Ie.prototype.L=function(o,u,d,f){return this.i.add(String(o),u,!0,d,f)};function As(o,u,d,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,O=0;O<u.length;++O){var b=u[O];if(b&&!b.da&&b.capture==d){var Q=b.listener,ye=b.ha||b.src;b.fa&&La(o.i,b),C=Q.call(ye,f)!==!1&&C}}return C&&!f.defaultPrevented}function yd(o,u,d){if(typeof o=="function")d&&(o=S(o,d));else if(o&&typeof o.handleEvent=="function")o=S(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function wd(o){o.g=yd(()=>{o.g=null,o.i&&(o.i=!1,wd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ay extends J{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(o){J.call(this),this.h=o,this.g={}}A(ai,J);var _d=[];function Ed(o){F(o.g,function(u,d){this.g.hasOwnProperty(d)&&ja(u)},o),o.g={}}ai.prototype.N=function(){ai.aa.N.call(this),Ed(this)},ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var za=l.JSON.stringify,Ny=l.JSON.parse,Oy=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ba(){}Ba.prototype.h=null;function Id(o){return o.h||(o.h=o.i())}function xy(){}var li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){ue.call(this,"d")}A($a,ue);function Va(){ue.call(this,"c")}A(Va,ue);var mr={},Sd=null;function Ha(){return Sd=Sd||new Ie}mr.La="serverreachability";function Td(o){ue.call(this,mr.La,o)}A(Td,ue);function ui(o){const u=Ha();Ae(u,new Td(u))}mr.STAT_EVENT="statevent";function kd(o,u){ue.call(this,mr.STAT_EVENT,o),this.stat=u}A(kd,ue);function Ne(o){const u=Ha();Ae(u,new kd(u,o))}mr.Ma="timingevent";function Cd(o,u){ue.call(this,mr.Ma,o),this.size=u}A(Cd,ue);function ci(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function Ly(o,u,d,f,C,O){o.info(function(){if(o.g)if(O)for(var b="",Q=O.split("&"),ye=0;ye<Q.length;ye++){var q=Q[ye].split("=");if(1<q.length){var Se=q[0];q=q[1];var Te=Se.split("_");b=2<=Te.length&&Te[1]=="type"?b+(Se+"="+q+"&"):b+(Se+"=redacted&")}}else b=null;else b=O;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+u+`
`+d+`
`+b})}function Dy(o,u,d,f,C,O,b){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+u+`
`+d+`
`+O+" "+b})}function vr(o,u,d,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Uy(o,d)+(f?" "+f:"")})}function My(o,u){o.info(function(){return"TIMEOUT: "+u})}di.prototype.info=function(){};function Uy(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var b=1;b<C.length;b++)C[b]=""}}}}return za(d)}catch{return u}}var Wa={NO_ERROR:0,TIMEOUT:8},jy={},Ga;function Ns(){}A(Ns,Ba),Ns.prototype.g=function(){return new XMLHttpRequest},Ns.prototype.i=function(){return{}},Ga=new Ns;function on(o,u,d,f){this.j=o,this.i=u,this.l=d,this.R=f||1,this.U=new ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pd}function Pd(){this.i=null,this.g="",this.h=!1}var Rd={},Ka={};function qa(o,u,d){o.L=1,o.v=Ds(bt(u)),o.m=d,o.P=!0,Ad(o,null)}function Ad(o,u){o.F=Date.now(),Os(o),o.A=bt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Vd(d.i,"t",f),o.C=0,d=o.j.J,o.h=new Pd,o.g=ah(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ay(S(o.Y,o,o.g),o.O)),u=o.U,d=o.g,f=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(_d[0]=C.toString()),C=_d);for(var O=0;O<C.length;O++){var b=pd(d,C[O],f||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ui(),Ly(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ft(o)==3?u.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Ft(this.g);var u=this.g.Ba();const _r=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Xd(this.g)))){this.J||Te!=4||u==7||(u==8||0>=_r?ui(3):ui(2)),Ya(this);var d=this.g.Z();this.X=d;t:if(Nd(this)){var f=Xd(this.g);o="";var C=f.length,O=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$n(this),hi(this);var b="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(O&&u==C-1)});f.length=0,this.h.g+=o,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=d==200,Dy(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ye=this.g;if((Q=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Q)){var q=Q;break t}}q=null}if(d=q)vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,d);else{this.o=!1,this.s=3,Ne(12),$n(this),hi(this);break e}}if(this.P){d=!0;let dt;for(;!this.J&&this.C<b.length;)if(dt=by(this,b),dt==Ka){Te==4&&(this.s=4,Ne(14),d=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Rd){this.s=4,Ne(15),vr(this.i,this.l,b,"[Invalid Chunk]"),d=!1;break}else vr(this.i,this.l,dt,null),Xa(this,dt);if(Nd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||b.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)vr(this.i,this.l,b,"[Invalid Chunked Response]"),$n(this),hi(this);else if(0<b.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),nl(Se),Se.M=!0,Ne(11))}}else vr(this.i,this.l,b,null),Xa(this,b);Te==4&&$n(this),this.o&&!this.J&&(Te==4?rh(this.j,this):(this.o=!1,Os(this)))}else t0(this.g),d==400&&0<b.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),$n(this),hi(this)}}}catch{}finally{}};function Nd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function by(o,u){var d=o.C,f=u.indexOf(`
`,d);return f==-1?Ka:(d=Number(u.substring(d,f)),isNaN(d)?Rd:(f+=1,f+d>u.length?Ka:(u=u.slice(f,f+d),o.C=f+d,u)))}on.prototype.cancel=function(){this.J=!0,$n(this)};function Os(o){o.S=Date.now()+o.I,Od(o,o.I)}function Od(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ci(S(o.ba,o),u)}function Ya(o){o.B&&(l.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(My(this.i,this.A),this.L!=2&&(ui(),Ne(17)),$n(this),this.s=2,hi(this)):Od(this,this.S-o)};function hi(o){o.j.G==0||o.J||rh(o.j,o)}function $n(o){Ya(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ed(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Xa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ja(d.h,o))){if(!o.K&&Ja(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)zs(d),bs(d);else break e;tl(d),Ne(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ci(S(d.Za,d),6e3));if(1>=Dd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Hn(d,11)}else if((o.K||d.g==o)&&zs(d),!y(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let q=C[u];if(d.T=q[0],q=q[1],d.G==2)if(q[0]=="c"){d.K=q[1],d.ia=q[2];const Se=q[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Te=q[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));const _r=q[5];_r!=null&&typeof _r=="number"&&0<_r&&(f=1.5*_r,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const dt=o.g;if(dt){const Bs=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var O=f.h;O.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Qa(O,O.h),O.h=null))}if(f.D){const rl=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;rl&&(f.ya=rl,ee(f.I,f.D,rl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var b=o;if(f.qa=oh(f,f.J?f.ia:null,f.W),b.K){Md(f.h,b);var Q=b,ye=f.L;ye&&(Q.I=ye),Q.B&&(Ya(Q),Os(Q)),f.g=b}else th(f);0<d.i.length&&Fs(d)}else q[0]!="stop"&&q[0]!="close"||Hn(d,7);else d.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Hn(d,7):el(d):q[0]!="noop"&&d.l&&d.l.ta(q),d.v=0)}}ui(4)}catch{}}var Fy=class{constructor(o,u){this.g=o,this.map=u}};function xd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ld(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Dd(o){return o.h?1:o.g?o.g.size:0}function Ja(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Qa(o,u){o.g?o.g.add(u):o.h=u}function Md(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xd.prototype.cancel=function(){if(this.i=Ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ud(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return x(o.i)}function zy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,f=0;f<d;f++)u.push(o[f]);return u}u=[],d=0;for(f in o)u[d++]=o[f];return u}function By(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const f in o)u[d++]=f;return u}}}function jd(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=By(o),f=zy(o),C=f.length,O=0;O<C;O++)u.call(void 0,f[O],d&&d[O],o)}var bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $y(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),C=null;if(0<=f){var O=o[d].substring(0,f);C=o[d].substring(f+1)}else O=o[d];u(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vn){this.h=o.h,xs(this,o.j),this.o=o.o,this.g=o.g,Ls(this,o.s),this.l=o.l;var u=o.i,d=new gi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Fd(this,d),this.m=o.m}else o&&(u=String(o).match(bd))?(this.h=!1,xs(this,u[1]||"",!0),this.o=fi(u[2]||""),this.g=fi(u[3]||"",!0),Ls(this,u[4]),this.l=fi(u[5]||"",!0),Fd(this,u[6]||"",!0),this.m=fi(u[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}Vn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(pi(u,zd,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(pi(u,zd,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(pi(d,d.charAt(0)=="/"?Wy:Hy,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",pi(d,Ky)),o.join("")};function bt(o){return new Vn(o)}function xs(o,u,d){o.j=d?fi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ls(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Fd(o,u,d){u instanceof gi?(o.i=u,qy(o.i,o.h)):(d||(u=pi(u,Gy)),o.i=new gi(u,o.h))}function ee(o,u,d){o.i.set(u,d)}function Ds(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function fi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function pi(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Vy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zd=/[#\/\?@]/g,Hy=/[#\?:]/g,Wy=/[#\?]/g,Gy=/[#\?@]/g,Ky=/#/g;function gi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&$y(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}e=gi.prototype,e.add=function(o,u){an(this),this.i=null,o=yr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Bd(o,u){an(o),u=yr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function $d(o,u){return an(o),u=yr(o,u),o.g.has(u)}e.forEach=function(o,u){an(this),this.g.forEach(function(d,f){d.forEach(function(C){o.call(u,C,f,this)},this)},this)},e.na=function(){an(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let f=0;f<u.length;f++){const C=o[f];for(let O=0;O<C.length;O++)d.push(u[f])}return d},e.V=function(o){an(this);let u=[];if(typeof o=="string")$d(this,o)&&(u=u.concat(this.g.get(yr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},e.set=function(o,u){return an(this),this.i=null,o=yr(this,o),$d(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Vd(o,u,d){Bd(o,u),0<d.length&&(o.i=null,o.g.set(yr(o,u),x(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var f=u[d];const O=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var C=O;b[f]!==""&&(C+="="+encodeURIComponent(String(b[f]))),o.push(C)}}return this.i=o.join("&")};function yr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function qy(o,u){u&&!o.j&&(an(o),o.i=null,o.g.forEach(function(d,f){var C=f.toLowerCase();f!=C&&(Bd(this,f),Vd(this,C,d))},o)),o.j=u}function Yy(o,u){const d=new di;if(l.Image){const f=new Image;f.onload=N(ln,d,"TestLoadImage: loaded",!0,u,f),f.onerror=N(ln,d,"TestLoadImage: error",!1,u,f),f.onabort=N(ln,d,"TestLoadImage: abort",!1,u,f),f.ontimeout=N(ln,d,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Xy(o,u){const d=new di,f=new AbortController,C=setTimeout(()=>{f.abort(),ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(O=>{clearTimeout(C),O.ok?ln(d,"TestPingServer: ok",!0,u):ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),ln(d,"TestPingServer: error",!1,u)})}function ln(o,u,d,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(d)}catch{}}function Jy(){this.g=new Oy}function Qy(o,u,d){const f=d||"";try{jd(o,function(C,O){let b=C;h(C)&&(b=za(C)),u.push(f+O+"="+encodeURIComponent(b))})}catch(C){throw u.push(f+"type="+encodeURIComponent("_badmap")),C}}function Ms(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Ms,Ba),Ms.prototype.g=function(){return new Us(this.l,this.j)},Ms.prototype.i=function(o){return function(){return o}}({});function Us(o,u){Ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Us,Ie),e=Us.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,vi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?mi(this):vi(this),this.readyState==3&&Hd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,mi(this))},e.Qa=function(o){this.g&&(this.response=o,mi(this))},e.ga=function(){this.g&&mi(this)};function mi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function vi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wd(o){let u="";return F(o,function(d,f){u+=f,u+=":",u+=d,u+=`\r
`}),u}function Za(o,u,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Wd(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ee(o,u,d))}function ce(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ce,Ie);var Zy=/^https?$/i,e0=["POST","PUT"];e=ce.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?Id(this.o):Id(Ga),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){Gd(this,O);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)d.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const O of f.keys())d.set(O,f.get(O));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(e0,u,void 0))||f||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,b]of d)this.g.setRequestHeader(O,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yd(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Gd(this,O)}};function Gd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Kd(o),js(o)}function Kd(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),js(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),ce.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?qd(this):this.bb())},e.bb=function(){qd(this)};function qd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)yd(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const b=o.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var f;if(f=b===0){var C=String(o.D).match(bd)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),f=!Zy.test(C?C.toLowerCase():"")}d=f}if(d)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var O=2<Ft(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",Kd(o)}}finally{js(o)}}}}function js(o,u){if(o.g){Yd(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ae(o,"ready");try{d.onreadystatechange=f}catch{}}}function Yd(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ny(u)}};function Xd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function t0(o){const u={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var d=k(o[f]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[C]||[];u[C]=O,O.push(d)}w(u,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Jd(o){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,o),this.cb=yi("retryDelaySeedMs",1e4,o),this.Wa=yi("forwardChannelMaxRetries",2,o),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xd(o&&o.concurrentRequestLimit),this.Da=new Jy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Jd.prototype,e.la=8,e.G=1,e.connect=function(o,u,d,f){Ne(0),this.W=o,this.H=u||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=oh(this,null,this.W),Fs(this)};function el(o){if(Qd(o),o.G==3){var u=o.U++,d=bt(o.I);if(ee(d,"SID",o.K),ee(d,"RID",u),ee(d,"TYPE","terminate"),wi(o,d),u=new on(o,o.j,u),u.L=2,u.v=Ds(bt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ah(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Os(u)}sh(o)}function bs(o){o.g&&(nl(o),o.g.cancel(),o.g=null)}function Qd(o){bs(o),o.u&&(l.clearTimeout(o.u),o.u=null),zs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Fs(o){if(!Ld(o.h)&&!o.s){o.s=!0;var u=o.Ga;Lt||H(),z||(Lt(),z=!0),V.add(u,o),o.B=0}}function n0(o,u){return Dd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ci(S(o.Ga,o,u),ih(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new on(this,this.j,o);let O=this.o;if(this.S&&(O?(O=p(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=eh(this,C,u),d=bt(this.I),ee(d,"RID",o),ee(d,"CVER",22),this.D&&ee(d,"X-HTTP-Session-Id",this.D),wi(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(Wd(O)))+"&"+u:this.m&&Za(d,this.m,O)),Qa(this.h,C),this.Ua&&ee(d,"TYPE","init"),this.P?(ee(d,"$req",u),ee(d,"SID","null"),C.T=!0,qa(C,d,null)):qa(C,d,u),this.G=2}}else this.G==3&&(o?Zd(this,o):this.i.length==0||Ld(this.h)||Zd(this))};function Zd(o,u){var d;u?d=u.l:d=o.U++;const f=bt(o.I);ee(f,"SID",o.K),ee(f,"RID",d),ee(f,"AID",o.T),wi(o,f),o.m&&o.o&&Za(f,o.m,o.o),d=new on(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=eh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qa(o.h,d),qa(d,f,u)}function wi(o,u){o.H&&F(o.H,function(d,f){ee(u,f,d)}),o.l&&jd({},function(d,f){ee(u,f,d)})}function eh(o,u,d){d=Math.min(o.i.length,d);var f=o.l?S(o.l.Na,o.l,o):null;e:{var C=o.i;let O=-1;for(;;){const b=["count="+d];O==-1?0<d?(O=C[0].g,b.push("ofs="+O)):O=0:b.push("ofs="+O);let Q=!0;for(let ye=0;ye<d;ye++){let q=C[ye].g;const Se=C[ye].map;if(q-=O,0>q)O=Math.max(0,C[ye].g-100),Q=!1;else try{Qy(Se,b,"req"+q+"_")}catch{f&&f(Se)}}if(Q){f=b.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,f}function th(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Lt||H(),z||(Lt(),z=!0),V.add(u,o),o.v=0}}function tl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ci(S(o.Fa,o),ih(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ci(S(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),bs(this),nh(this))};function nl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function nh(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=bt(o.qa);ee(u,"RID","rpc"),ee(u,"SID",o.K),ee(u,"AID",o.T),ee(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(u,"TO",o.ja),ee(u,"TYPE","xmlhttp"),wi(o,u),o.m&&o.o&&Za(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ds(bt(u)),d.m=null,d.P=!0,Ad(d,o)}e.Za=function(){this.C!=null&&(this.C=null,bs(this),tl(this),Ne(19))};function zs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function rh(o,u){var d=null;if(o.g==u){zs(o),nl(o),o.g=null;var f=2}else if(Ja(o.h,u))d=u.D,Md(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;f=Ha(),Ae(f,new Cd(f,d)),Fs(o)}else th(o);else if(C=u.s,C==3||C==0&&0<u.X||!(f==1&&n0(o,u)||f==2&&tl(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:Hn(o,5);break;case 4:Hn(o,10);break;case 3:Hn(o,6);break;default:Hn(o,2)}}}function ih(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Hn(o,u){if(o.j.info("Error code "+u),u==2){var d=S(o.fb,o),f=o.Xa;const C=!f;f=new Vn(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xs(f,"https"),Ds(f),C?Yy(f.toString(),d):Xy(f.toString(),d)}else Ne(2);o.G=0,o.l&&o.l.sa(u),sh(o),Qd(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function sh(o){if(o.G=0,o.ka=[],o.l){const u=Ud(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function oh(o,u,d){var f=d instanceof Vn?bt(d):new Vn(d);if(f.g!="")u&&(f.g=u+"."+f.g),Ls(f,f.s);else{var C=l.location;f=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var O=new Vn(null);f&&xs(O,f),u&&(O.g=u),C&&Ls(O,C),d&&(O.l=d),f=O}return d=o.D,u=o.ya,d&&u&&ee(f,d,u),ee(f,"VER",o.la),wi(o,f),f}function ah(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ce(new Ms({eb:d})):new ce(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function lh(){}e=lh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function tt(o,u){Ie.call(this),this.g=new Jd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wr(this)}A(tt,Ie),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){el(this.g)},tt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=za(o),o=d);u.i.push(new Fy(u.Ya++,o)),u.G==3&&Fs(u)},tt.prototype.N=function(){this.g.l=null,delete this.j,el(this.g),delete this.g,tt.aa.N.call(this)};function uh(o){$a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}A(uh,$a);function ch(){Va.call(this),this.status=1}A(ch,Va);function wr(o){this.g=o}A(wr,lh),wr.prototype.ua=function(){Ae(this.g,"a")},wr.prototype.ta=function(o){Ae(this.g,new uh(o))},wr.prototype.sa=function(o){Ae(this.g,new ch)},wr.prototype.ra=function(){Ae(this.g,"b")},tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Wa.NO_ERROR=0,Wa.TIMEOUT=8,Wa.HTTP_ERROR=6,jy.COMPLETE="complete",xy.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const mp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new ka("@firebase/firestore");function yt(e,...t){if(Qr.logLevel<=Y.DEBUG){const n=t.map(dd);Qr.debug(`Firestore (${Cs}): ${e}`,...n)}}function vy(e,...t){if(Qr.logLevel<=Y.ERROR){const n=t.map(dd);Qr.error(`Firestore (${Cs}): ${e}`,...n)}}function Kk(e,...t){if(Qr.logLevel<=Y.WARN){const n=t.map(dd);Qr.warn(`Firestore (${Cs}): ${e}`,...n)}}function dd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e="Unexpected state"){const t=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+e;throw vy(t),new Error(t)}function Wi(e,t){e||hd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Fe extends ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class Yk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xk{constructor(t){this.t=t,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Wi(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gi,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gi)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Wi(typeof r.accessToken=="string"),new yy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Wi(t===null||typeof t=="string"),new xe(t)}}class Jk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Jk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Wi(this.o===void 0);const r=s=>{s.error!=null&&yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,yt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Wi(typeof n.token=="string"),this.R=n.token,new Zk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function tC(e){return e.name==="IndexedDbTransactionError"}class sa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sa&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vp,G;(G=vp||(vp={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new my([4294967295,4294967295],0);function Bl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&yt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,l=new fd(t,n,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Fe(be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var yp,wp;(wp=yp||(yp={})).ea="default",wp.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;function iC(e,t,n,r){if(t===!0&&r===!0)throw new Fe(be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":hd()}function oC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fe(be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sC(e);throw new Fe(be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Fe(be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Fe(be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}iC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rC((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Fe(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Fe(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Fe(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fe(be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Fe(be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qk;switch(r.type){case"firstParty":return new Qk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Fe(be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_p.get(n);r&&(yt("ComponentProvider","Removing Datastore"),_p.delete(n),r.terminate())}(this),Promise.resolve()}}function aC(e,t,n,r={}){var i;const s=(e=oC(e,wy))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Kk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=xe.MOCK_USER;else{l=sv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Fe(be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xe(h)}e._authCredentials=new Yk(new yy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nC(this,"async_queue_retry"),this.Vu=()=>{const r=Bl();r&&yt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Bl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Gi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!tC(t))throw t;yt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw vy("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=fd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&hd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class lC extends wy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Ip,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ip(t),this._firestoreClient=void 0,await t}}}function uC(e,t){const n=typeof e=="object"?e:Ca(),r=typeof e=="string"?e:"(default)",i=bn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nv("firestore");s&&aC(i,...s)}return i}(function(t,n=!0){(function(i){Cs=i})(gr),Tt(new lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new lC(new Xk(r.getProvider("auth-internal")),new eC(r.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Fe(be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(h.options.projectId,v)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),He(mp,"4.7.3",t),He(mp,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firebasestorage.googleapis.com",cC="storageBucket",dC=2*60*1e3,hC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ct{constructor(t,n,r=0){super($l(t),`Firebase Storage: ${n} (${$l(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return $l(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function $l(e){return"storage/"+e}function fC(){const e="An unknown error occurred, please check the error payload for server response.";return new xt(Ot.UNKNOWN,e)}function pC(){return new xt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gC(){return new xt(Ot.CANCELED,"User canceled the upload/download.")}function mC(e){return new xt(Ot.INVALID_URL,"Invalid URL '"+e+"'.")}function vC(e){return new xt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Sp(e){return new xt(Ot.INVALID_ARGUMENT,e)}function Ey(){return new xt(Ot.APP_DELETED,"The Firebase app was deleted.")}function yC(e){return new xt(Ot.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=wt.makeFromUrl(t,n)}catch{return new wt(t,"")}if(r.path==="")return r;throw vC(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function h(L){L.path_=decodeURIComponent(L.path)}const v="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",N=new RegExp(`^https?://${g}/${v}/b/${i}/o${S}`,"i"),A={bucket:1,path:3},x=n===_y?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",T=new RegExp(`^https?://${x}/${i}/${D}`,"i"),E=[{regex:l,indices:c,postModify:s},{regex:N,indices:A,postModify:h},{regex:T,indices:{bucket:1,path:2},postModify:h}];for(let L=0;L<E.length;L++){const j=E[L],F=j.regex.exec(t);if(F){const w=F[j.indices.bucket];let p=F[j.indices.path];p||(p=""),r=new wt(w,p),j.postModify(r);break}}if(r==null)throw mC(t);return r}}class wC{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(e,t,n){let r=1,i=null,s=null,a=!1,l=0;function c(){return l===2}let h=!1;function v(...D){h||(h=!0,t.apply(null,D))}function g(D){i=setTimeout(()=>{i=null,e(N,c())},D)}function S(){s&&clearTimeout(s)}function N(D,...T){if(h){S();return}if(D){S(),v.call(null,D,...T);return}if(c()||a){S(),v.call(null,D,...T);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,g(E)}let A=!1;function x(D){A||(A=!0,S(),!h&&(i!==null?(D||(l=2),clearTimeout(i),g(0)):D||(l=1)))}return g(0),s=setTimeout(()=>{a=!0,x(!0)},n),x}function EC(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(e){return e!==void 0}function Tp(e,t,n,r){if(r<t)throw Sp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Sp(`Invalid value for '${e}'. Expected ${n} or less.`)}function SC(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oa;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(oa||(oa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(t,n,r,i,s,a,l,c,h,v,g,S=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=v,this.connectionFactory_=g,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,A)=>{this.resolve_=N,this.reject_=A,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ao(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===oa.NO_ERROR,c=s.getStatus();if(!l||TC(c,this.additionalRetryCodes_)&&this.retry){const v=s.getErrorCode()===oa.ABORT;r(!1,new ao(!1,null,v));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new ao(h,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());IC(c)?s(c):s()}catch(c){a(c)}else if(l!==null){const c=fC();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(i.canceled){const c=this.appDelete_?Ey():gC();a(c)}else{const c=pC();a(c)}};this.canceled_?n(!1,new ao(!1,null,!0)):this.backoffId_=_C(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&EC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function CC(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function PC(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function RC(e,t){t&&(e["X-Firebase-GMPID"]=t)}function AC(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function NC(e,t,n,r,i,s,a=!0){const l=SC(e.urlParams),c=e.url+l,h=Object.assign({},e.headers);return RC(h,t),CC(h,n),PC(h,s),AC(h,r),new kC(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function xC(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,n){this._service=t,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new aa(t,n)}get root(){const t=new wt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xC(this._location.path)}get storage(){return this._service}get parent(){const t=OC(this._location.path);if(t===null)return null;const n=new wt(this._location.bucket,t);return new aa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw yC(t)}}function kp(e,t){const n=t==null?void 0:t[cC];return n==null?null:wt.makeFromBucketSpec(n,e)}function LC(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:sv(i,e.app.options.projectId))}class DC{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=_y,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dC,this._maxUploadRetryTime=hC,this._requests=new Set,i!=null?this._bucket=wt.makeFromBucketSpec(i,this._host):this._bucket=kp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,t):this._bucket=kp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Tp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Tp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new aa(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new wC(Ey());{const a=NC(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Cp="@firebase/storage",Pp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="storage";function MC(e=Ca(),t){e=Ze(e);const r=bn(e,Iy).getImmediate({identifier:t}),i=nv("storage");return i&&UC(r,...i),r}function UC(e,t,n,r={}){LC(e,t,n,r)}function jC(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new DC(n,r,i,t,gr)}function bC(){Tt(new lt(Iy,jC,"PUBLIC").setMultipleInstances(!0)),He(Cp,Pp,""),He(Cp,Pp,"esm2017")}bC();const FC={apiKey:"AIzaSyDxyv9vosc-d_Xxew5JNUwngVcRMNvrNq4",authDomain:"publicpolling-prod.firebaseapp.com",projectId:"publicpolling-prod",storageBucket:"publicpolling-prod.firebasestorage.app",messagingSenderId:"347616659044",appId:"1:347616659044:web:4aebba5e2e92e3d8510171",measurementId:"G-MZGEDJQMWY"},xa=hv(FC);typeof window<"u"&&Vk(xa);uC(xa);const Ir=T1(xa);MC(xa);const Sy=U.createContext({}),si=()=>{const e=U.useContext(Sy);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},zC=({children:e})=>{const[t,n]=U.useState(null),[r,i]=U.useState(!0);U.useEffect(()=>fT(Ir,S=>{console.log("[Shell] Auth state changed:",S?S.email:"null"),n(S),i(!1)}),[]);const v={user:t,loading:r,signIn:async(g,S)=>{try{return{success:!0,user:(await lT(Ir,g,S)).user}}catch(N){return{success:!1,error:N.message}}},signUp:async(g,S,N)=>{try{const A=await aT(Ir,g,S);return N&&await cT(A.user,{displayName:N}),{success:!0,user:A.user}}catch(A){return{success:!1,error:A.message}}},signInWithGoogle:async()=>{try{const g=new $t;return{success:!0,user:(await Zf(Ir,g)).user}}catch(g){return{success:!1,error:g.message}}},signInWithGithub:async()=>{try{const g=new Vt;return{success:!0,user:(await Zf(Ir,g)).user}}catch(g){return{success:!1,error:g.message}}},signOut:async()=>{try{return await pT(Ir),{success:!0}}catch(g){return{success:!1,error:g.message}}}};return R.jsx(Sy.Provider,{value:v,children:e})},BC=()=>{var a,l;const{user:e,signOut:t}=si(),n=_s(),r=fr(),i=async()=>{(await t()).success&&n("/")},s=c=>r.pathname===c;return R.jsx("header",{className:"header",children:R.jsxs("div",{className:"container",children:[R.jsxs(mt,{to:"/",className:"logo",children:[R.jsx("span",{className:"logo-icon",children:"🎬"}),R.jsx("span",{className:"logo-text",children:"Entertainment Hub"})]}),R.jsxs("nav",{className:"nav",children:[R.jsx(mt,{to:"/browse",className:`nav-link ${s("/browse")?"active":""}`,children:"Browse"}),e&&R.jsx(mt,{to:"/manage",className:`nav-link ${s("/manage")?"active":""}`,children:"My Content"}),R.jsx("div",{className:"nav-actions",children:e?R.jsxs("div",{className:"user-menu",children:[R.jsxs("div",{className:"user-info",children:[R.jsx("span",{className:"user-avatar",children:e.photoURL?R.jsx("img",{src:e.photoURL,alt:e.displayName}):((a=e.displayName)==null?void 0:a[0])||((l=e.email)==null?void 0:l[0])||"👤"}),R.jsx("span",{className:"user-name",children:e.displayName||e.email})]}),R.jsx("button",{className:"btn btn-secondary btn-sm",onClick:i,children:"Sign Out"})]}):R.jsx(mt,{to:"/login",className:"btn btn-primary btn-sm",children:"Sign In"})})]})]})})},$C=({children:e})=>{const{user:t,loading:n}=si();return n?R.jsxs("div",{className:"loading-container",children:[R.jsx("div",{className:"spinner"}),R.jsx("p",{children:"Loading..."})]}):t?e:R.jsx(Jm,{to:"/login",replace:!0})},VC=()=>{const{user:e}=si();return R.jsxs("div",{className:"home",children:[R.jsxs("section",{className:"hero",children:[R.jsxs("div",{className:"hero-content",children:[R.jsxs("h1",{className:"hero-title",children:["Discover, Rate & Review",R.jsx("span",{className:"gradient-text",children:" Entertainment"})]}),R.jsx("p",{className:"hero-subtitle",children:"Your ultimate platform for movies, web series, cartoons, and more. Join our community to share your opinions and discover what's worth watching."}),R.jsxs("div",{className:"hero-actions",children:[R.jsx(mt,{to:"/browse",className:"btn btn-primary btn-large",children:"🎬 Browse Content"}),e?R.jsx(mt,{to:"/manage",className:"btn btn-secondary btn-large",children:"➕ Add Content"}):R.jsx(mt,{to:"/login",className:"btn btn-secondary btn-large",children:"🔐 Sign In"})]})]}),R.jsxs("div",{className:"hero-image",children:[R.jsx("div",{className:"floating-card card-1",children:"🎥"}),R.jsx("div",{className:"floating-card card-2",children:"📺"}),R.jsx("div",{className:"floating-card card-3",children:"🎭"}),R.jsx("div",{className:"floating-card card-4",children:"⭐"})]})]}),R.jsx("section",{className:"features",children:R.jsxs("div",{className:"container",children:[R.jsx("h2",{className:"section-title",children:"Why Entertainment Hub?"}),R.jsxs("div",{className:"features-grid",children:[R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"🌐"}),R.jsx("h3",{children:"Open Source"}),R.jsx("p",{children:"Built by the community, for the community. Contribute and help us grow!"})]}),R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"⭐"}),R.jsx("h3",{children:"Rate & Review"}),R.jsx("p",{children:"Share your honest opinions and help others discover great content"})]}),R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"🎬"}),R.jsx("h3",{children:"All Entertainment"}),R.jsx("p",{children:"Movies, series, cartoons, anime, documentaries - all in one place"})]}),R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"🔒"}),R.jsx("h3",{children:"Secure & Private"}),R.jsx("p",{children:"Your data is protected with enterprise-level Firebase security"})]}),R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"📱"}),R.jsx("h3",{children:"Responsive Design"}),R.jsx("p",{children:"Perfect experience on desktop, tablet, and mobile devices"})]}),R.jsxs("div",{className:"feature-card",children:[R.jsx("div",{className:"feature-icon",children:"🚀"}),R.jsx("h3",{children:"Fast & Modern"}),R.jsx("p",{children:"Built with React and Vite for lightning-fast performance"})]})]})]})}),R.jsx("section",{className:"cta",children:R.jsx("div",{className:"container",children:R.jsxs("div",{className:"cta-content",children:[R.jsx("h2",{children:"Ready to Get Started?"}),R.jsx("p",{children:"Join thousands of entertainment enthusiasts sharing their reviews"}),R.jsxs("div",{className:"cta-actions",children:[R.jsx(mt,{to:"/browse",className:"btn btn-primary btn-large",children:"Start Browsing"}),!e&&R.jsx(mt,{to:"/signup",className:"btn btn-outline btn-large",children:"Create Account"})]})]})})})]})},HC=()=>{const[e,t]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),[a,l]=U.useState(!1),{signIn:c,signInWithGoogle:h,signInWithGithub:v}=si(),g=_s(),S=async x=>{x.preventDefault(),s(""),l(!0);const D=await c(e,n);D.success?g("/manage"):s(D.error),l(!1)},N=async()=>{s(""),l(!0);const x=await h();x.success?g("/manage"):s(x.error),l(!1)},A=async()=>{s(""),l(!0);const x=await v();x.success?g("/manage"):s(x.error),l(!1)};return R.jsx("div",{className:"auth-page",children:R.jsx("div",{className:"auth-container",children:R.jsxs("div",{className:"auth-card",children:[R.jsx("h2",{className:"auth-title",children:"Welcome Back"}),R.jsx("p",{className:"auth-subtitle",children:"Sign in to manage your content"}),i&&R.jsxs("div",{className:"error-message",children:[R.jsx("span",{className:"error-icon",children:"⚠️"}),i]}),R.jsxs("form",{onSubmit:S,className:"auth-form",children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",children:"Email"}),R.jsx("input",{type:"email",id:"email",value:e,onChange:x=>t(x.target.value),placeholder:"your@email.com",required:!0,disabled:a})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"password",children:"Password"}),R.jsx("input",{type:"password",id:"password",value:n,onChange:x=>r(x.target.value),placeholder:"••••••••",required:!0,disabled:a})]}),R.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:a,children:a?"Signing in...":"Sign In"})]}),R.jsx("div",{className:"divider",children:R.jsx("span",{children:"or continue with"})}),R.jsxs("div",{className:"social-buttons",children:[R.jsxs("button",{onClick:N,className:"btn btn-social",disabled:a,children:[R.jsx("span",{children:"🔐"})," Google"]}),R.jsxs("button",{onClick:A,className:"btn btn-social",disabled:a,children:[R.jsx("span",{children:"🐙"})," GitHub"]})]}),R.jsxs("p",{className:"auth-footer",children:["Don't have an account? ",R.jsx(mt,{to:"/signup",children:"Sign up"})]})]})})})},WC=()=>{const[e,t]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),[a,l]=U.useState(""),[c,h]=U.useState(""),[v,g]=U.useState(!1),{signUp:S,signInWithGoogle:N,signInWithGithub:A}=si(),x=_s(),D=async E=>{if(E.preventDefault(),h(""),i!==a)return h("Passwords do not match");if(i.length<6)return h("Password must be at least 6 characters");g(!0);const L=await S(n,i,e);L.success?x("/manage"):h(L.error),g(!1)},T=async()=>{h(""),g(!0);const E=await N();E.success?x("/manage"):h(E.error),g(!1)},y=async()=>{h(""),g(!0);const E=await A();E.success?x("/manage"):h(E.error),g(!1)};return R.jsx("div",{className:"auth-page",children:R.jsx("div",{className:"auth-container",children:R.jsxs("div",{className:"auth-card",children:[R.jsx("h2",{className:"auth-title",children:"Create Account"}),R.jsx("p",{className:"auth-subtitle",children:"Join our community of entertainment enthusiasts"}),c&&R.jsxs("div",{className:"error-message",children:[R.jsx("span",{className:"error-icon",children:"⚠️"}),c]}),R.jsxs("form",{onSubmit:D,className:"auth-form",children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"displayName",children:"Display Name"}),R.jsx("input",{type:"text",id:"displayName",value:e,onChange:E=>t(E.target.value),placeholder:"John Doe",required:!0,disabled:v})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",children:"Email"}),R.jsx("input",{type:"email",id:"email",value:n,onChange:E=>r(E.target.value),placeholder:"your@email.com",required:!0,disabled:v})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"password",children:"Password"}),R.jsx("input",{type:"password",id:"password",value:i,onChange:E=>s(E.target.value),placeholder:"••••••••",required:!0,disabled:v})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),R.jsx("input",{type:"password",id:"confirmPassword",value:a,onChange:E=>l(E.target.value),placeholder:"••••••••",required:!0,disabled:v})]}),R.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:v,children:v?"Creating account...":"Sign Up"})]}),R.jsx("div",{className:"divider",children:R.jsx("span",{children:"or continue with"})}),R.jsxs("div",{className:"social-buttons",children:[R.jsxs("button",{onClick:T,className:"btn btn-social",disabled:v,children:[R.jsx("span",{children:"🔐"})," Google"]}),R.jsxs("button",{onClick:y,className:"btn btn-social",disabled:v,children:[R.jsx("span",{children:"🐙"})," GitHub"]})]}),R.jsxs("p",{className:"auth-footer",children:["Already have an account? ",R.jsx(mt,{to:"/login",children:"Sign in"})]})]})})})},Rp=({name:e,host:t})=>{const n=U.useRef(null),{user:r}=si(),i=fr();U.useEffect(()=>{let c=t;if(t.startsWith("/"))c=window.location.origin;else if(t.startsWith("http"))try{c=new URL(t).origin}catch{console.error("Invalid host URL:",t)}const h=()=>{if(n.current&&n.current.contentWindow){console.log(`[Shell] Sending AUTH_STATE to ${e} (${c})`);try{n.current.contentWindow.postMessage({type:"AUTH_STATE",user:r?{uid:r.uid,email:r.email,displayName:r.displayName,photoURL:r.photoURL}:null},c)}catch(S){console.debug("PostMessage error:",S.message)}}},v=n.current;v&&(v.addEventListener("load",h),h());const g=S=>{var N;S.origin===c&&((N=S.data)==null?void 0:N.type)==="AUTH_REQUEST"&&(console.log(`[Shell] Received AUTH_REQUEST from ${e}`),h())};return window.addEventListener("message",g),()=>{v&&v.removeEventListener("load",h),window.removeEventListener("message",g)}},[r,t,e]);const s=e==="public-viewer"?"/browse":"/manage",a=i.pathname.startsWith(s)&&i.pathname.substring(s.length)||"/",l=`${t}${a}`;return R.jsx("div",{className:"micro-frontend-container",children:R.jsx("iframe",{ref:n,src:l,className:"micro-frontend-iframe",title:e,allow:"clipboard-write"})})},GC="/publicpolling/public-viewer",KC="/publicpolling/content-manager";function qC(){return R.jsx(zC,{children:R.jsx(OE,{basename:"/publicpolling/",children:R.jsxs("div",{className:"app",children:[R.jsx(BC,{}),R.jsx("main",{className:"main",children:R.jsxs(TE,{children:[R.jsx(Kn,{path:"/",element:R.jsx(VC,{})}),R.jsx(Kn,{path:"/login",element:R.jsx(HC,{})}),R.jsx(Kn,{path:"/signup",element:R.jsx(WC,{})}),R.jsx(Kn,{path:"/browse/*",element:R.jsx(Rp,{name:"public-viewer",host:GC})}),R.jsx(Kn,{path:"/manage/*",element:R.jsx($C,{children:R.jsx(Rp,{name:"content-manager",host:KC})})}),R.jsx(Kn,{path:"*",element:R.jsx(Jm,{to:"/",replace:!0})})]})}),R.jsx("footer",{className:"footer",children:R.jsx("div",{className:"container",children:R.jsxs("div",{className:"footer-content",children:[R.jsx("p",{children:"© 2025 Entertainment Hub. Micro-Frontends Architecture."}),R.jsxs("div",{className:"footer-links",children:[R.jsx("a",{href:"https://github.com/maurihimanshu/publicpolling",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),R.jsx("span",{children:"•"}),R.jsx("a",{href:"/browse",children:"Browse"}),R.jsx("span",{children:"•"}),R.jsx("a",{href:"/manage",children:"Contribute"})]})]})})})]})})})}Bm(document.getElementById("root")).render(R.jsx(U.StrictMode,{children:R.jsx(qC,{})}));
