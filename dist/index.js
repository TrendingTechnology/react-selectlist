!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("ReactSelectlist",["react"],t):"object"==typeof exports?exports.ReactSelectlist=t(require("react")):e.ReactSelectlist=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=Array.isArray;function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=this,n=e.className,u=e.style,f=e.disabled,d=e.multiple,s=e.orientation,p=e.textField,b=void 0===p?"label":p,y=e.valueField,m=void 0===y?"value":y,v=l(Object(r.useState)(function(){return Math.random().toString(36).substring(2,15)}),1)[0],h=l(Object(r.useState)(e.data),2),j=h[0],O=h[1],g=e.onChange,k=void 0===g?function(){}:g,w=Object(r.useCallback)(function(e){var t,n=[];switch(d){case!0:(n=i(j))[e].checked=!n[e].checked;break;default:(n=j.map(function(e){return c({},e,{checked:!1})}))[e].checked=!0,t=n[e][m]}k(function(e){switch(!0){case d:return e.filter(function(e){return e.checked}).map(function(e){return e[m]});default:return t}}(n))},[d,j]);Object(r.useEffect)(function(){var t,n,r=[],a=e.value;switch(!0){case d&&o(a):r=e.data.map(function(e){return c({},e,{checked:a.includes(e[m])})});break;case d:r=e.data.map(function(e){return c({},e,{checked:e[m]==a})});break;case o(a):n=null==(t=a)?0:t.length,a=n?t[n-1]:void 0;default:r=e.data.map(function(e){return c({},e,{checked:e[m]==a})})}O(r)},[e.data,d,e.value]);var S=Object(r.useMemo)(function(){var n=d?"checkbox":"radio",r="horizontal"===s?{display:"inline-block"}:{display:"block"};return r=c({},e.style,r),j.map(function(e,o){var c=e.checked||!1;return a.a.createElement("span",{key:o,style:r},a.a.createElement("input",{id:"".concat(v,"_").concat(o),checked:c,name:"".concat(v,"_").concat(o),type:n,onChange:w.bind(t,o),value:e[m],disabled:f[o]}),a.a.createElement("label",{htmlFor:"".concat(v,"_").concat(o)},e[b]))})},[f,d,s,j]);return a.a.createElement("span",{className:n,style:u},S)}f.defaultProps={data:[],disabled:[],orientation:"horizontal",multiple:!0};var d=a.a.memo(f);t.default=d}])});