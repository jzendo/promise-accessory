/*!
 * promise-accessory v0.3.0 MIT license <Build Wed, 01 Apr 2020 04:21:08 GMT>
 * The accessory util is based on promise.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).promiseAccessoryUtil={})}(this,function(e){"use strict";function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,o,u,i){try{var a=e[u](i),f=a.value}catch(e){return void r(e)}a.done?t(f):Promise.resolve(f).then(n,o)}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}function u(e,t){return e&&(e.P=t),e}var a=t(o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,o,u,i,a){return}})),i="undefined"!=typeof wx&&void 0!==wx.showShareActionSheet,l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}(),s={setTimeout:i?setTimeout:l.setTimeout,clearTimeout:i?clearTimeout:l.clearTimeout,setInterval:i?setInterval:l.setInterval,clearInterval:i?clearInterval:l.clearInterval},d=10,p=864e5,v=100,y=function(e,t){return s.setTimeout(e,t)},b=function(e){return"number"==typeof e&&e<=p&&d<=e&&e%1==0};function m(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:v;return a(b(t),"The `ms` should be integer and only between ".concat(d," and ").concat(p,".")),new Promise(function(e){return y(e,t)})}var h=u(m,function(){var e=arguments;return function(){return m.apply(void 0,r(e))}});function N(){var r,n,e=new Promise(function(e,t){r=e,n=t});return{resolve:r,reject:n,promise:e}}var g=u(N,function(){return function(){return N()}}),w=t(o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return"function"==typeof e}})),M=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(arguments.length<2||!t)return!1;var r=u.call(e),n=t.trim(),o=n.slice(0,1).toUpperCase()+i(n.slice(1));return r==="[object ".concat(o,"]")};var u=Object.prototype.toString,i=function(e){return e.replace(/\s+(.)/g,function(e,t){return t.toUpperCase()})}});t(M);var _=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(0===arguments.length||void 0===e)return!1;var r=(0,n.default)(e,"number");if(!r)return r;t&&(r=!o(e));return r=r&&u(e)},t.MIN_NUMBER=t.MAX_NUMBER=t.isFinite=t.isNaN=void 0;var r,n=(r=M)&&r.__esModule?r:{default:r};var o=Number.isNaN||window.isNaN;t.isNaN=o;var u=Number.isFinite||window.isFinite;t.isFinite=u;var i=Number.MAX_VALUE;t.MAX_NUMBER=i;var a=Number.MIN_VALUE;t.MIN_NUMBER=a});t(_);_.MIN_NUMBER,_.MAX_NUMBER,_.isFinite,_.isNaN;var j=t(o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(_);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}t.default=function(e,t){var r,n,o,u=1<arguments.length&&void 0!==t&&t;if(Number.isInteger)r=Number.isInteger(e);else{if(!(r=(0,i.default)(e,!0)))return r;r=(0,i.isFinite)(e)&&(0===(n=e)?n:(0<n?1:-1)*Math.floor(Math.abs(n)))===e}return r&&u?(o=e,Number.isSafeInteger?Number.isSafeInteger(o):Number.MIN_SAFE_INTEGER<=o&&o<=Number.MAX_SAFE_INTEGER):r}})),I=function(e){return j(e,!0)},O=1e3,A=10,E=36e5,P=new Error("try failure");function S(e,t){return x.apply(this,arguments)}function x(){var a;return a=regeneratorRuntime.mark(function e(t,r){var n,o,u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,e.abrupt("return",n);case 7:if(e.prev=7,e.t0=e.catch(0),0<--r.times)return e.next=12,h(r.tryDelayInterval);e.next=18;break;case 12:return e.next=14,S.apply(void 0,u);case 14:return o=e.sent,e.abrupt("return",o);case 18:throw P;case 19:case"end":return e.stop()}},e,null,[[0,7]])}),(x=function(){var e=this,i=arguments;return new Promise(function(t,r){var n=a.apply(e,i);function o(e){c(n,t,r,o,u,"next",e)}function u(e){c(n,t,r,o,u,"throw",e)}o(void 0)})}).apply(this,arguments)}function T(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:O;a(w(e),"The `callback` should be function."),a(I(t)&&2<=t,"The `times` should be integer and greater than 1."),a(I(r)&&A<=r&&r<=E,"The `tryDelayInterval` should be integer and between ".concat(A," and ").concat(E,"."));var n=g(),o=n.resolve,u=n.reject,i=n.promise;return S(e,{times:t,tryDelayInterval:r}).then(o).catch(u),i}var U=u(T,function(e){var t=arguments;return function(){return T.apply(void 0,r(t))}});e.defer=g,e.delay=h,e.retry=U,Object.defineProperty(e,"__esModule",{value:!0})});
