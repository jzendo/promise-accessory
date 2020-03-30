"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_MS = exports.DEFAULT_MS = exports.default = void 0;

var _p = _interopRequireDefault(require("./common/p"));

var _timer = _interopRequireDefault(require("./common/timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MAX_MS = 24 * 60 * 60 * 1000;
exports.MAX_MS = MAX_MS;
const DEFAULT_MS = 100;
exports.DEFAULT_MS = DEFAULT_MS;

const setTimeoutImpl = (fn, ms) => {
  return _timer.default.setTimeout(fn, ms);
};

const isInteger = ms => {
  return typeof ms === 'number' && Number.isFinite(ms) && ms <= MAX_MS && ms % 1 === 0;
};

function delay(ms = DEFAULT_MS) {
  ms = isInteger(ms) ? ms : DEFAULT_MS;
  return new Promise(resolve => setTimeoutImpl(resolve, ms));
}

function delay$(ms = DEFAULT_MS) {
  return () => delay(ms);
}

var _default = (0, _p.default)(delay, delay$);

exports.default = _default;