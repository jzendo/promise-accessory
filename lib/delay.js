"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_MS = exports.DEFAULT_MS = exports.default = void 0;
const MAX_MS = 24 * 60 * 60 * 1000;
exports.MAX_MS = MAX_MS;
const DEFAULT_MS = 100;
exports.DEFAULT_MS = DEFAULT_MS;

const setTimeout = (fn, ms) => {
  return window.setTimeout(fn, ms);
};

const isInteger = ms => {
  return typeof ms === 'number' && Number.isFinite(ms) && ms <= MAX_MS && ms % 1 === 0;
};

var _default = (ms = DEFAULT_MS) => {
  ms = isInteger(ms) ? ms : DEFAULT_MS;
  return new Promise(resolve => setTimeout(resolve, ms));
};

exports.default = _default;