!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var i,o,a,f,u,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,s=t,f=e.apply(r,n)}function O(e){return s=e,u=setTimeout(h,t),c?p(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function h(){var e=b();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-s)):n}(e))}function w(e){return u=void 0,m&&i?p(e):(i=o=void 0,f)}function T(){var e=b(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(h,t),p(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,y(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=l=o=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");if(O.addEventListener("input",e(t)((function(e){var t={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),JSON.parse(localStorage.getItem("feedback-form-state"))){var j=JSON.parse(localStorage.getItem("feedback-form-state"));O.elements.email.value=j.email,O.elements.message.value=j.message}O.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.elements.email.value||""===O.elements.message.value)return alert("Please fill in all fields before submitting");var t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),O.reset()}))}();
//# sourceMappingURL=03-feedback.de70f681.js.map
