/*!
 * promise-accessory - The accessory util is based on promise.
 * MIT, version: 0.1.0, build: Mon, 30 Mar 2020 12:20:30 GMT
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).promiseAccessoryUtil={})}(this,function(e){"use strict";e.defer=function(){var t,o,e=new Promise(function(e,n){t=e,o=n});return{resolve:t,reject:o,promise:e}},e.delay=function(){var e,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return o="number"==typeof(e=o)&&Number.isFinite(e)&&e<=864e5&&e%1==0?o:100,new Promise(function(e){return n=e,t=o,window.setTimeout(n,t);var n,t})},Object.defineProperty(e,"__esModule",{value:!0})});
