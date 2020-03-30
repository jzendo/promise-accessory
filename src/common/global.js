// influenced by https://github.com/jzendo/promise-accessory/blob/master/node_modules/promise-polyfill/lib/polyfill.js#L275-L289

const globalNamespace = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

export default globalNamespace
