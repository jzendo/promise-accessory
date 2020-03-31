"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isWeixinEnv = _interopRequireDefault(require("./isWeixinEnv"));

var _global = _interopRequireDefault(require("./global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let methods = {
  setTimeout: _isWeixinEnv.default ? setTimeout : _global.default.setTimeout,
  clearTimeout: _isWeixinEnv.default ? clearTimeout : _global.default.clearTimeout,
  setInterval: _isWeixinEnv.default ? setInterval : _global.default.setInterval,
  clearInterval: _isWeixinEnv.default ? clearInterval : _global.default.clearInterval
};

if (process.env.NODE_ENV === 'test') {
  methods = {
    setTimeout: (...args) => setTimeout(...args),
    clearTimeout: (...args) => clearTimeout(...args),
    setInterval: (...args) => setInterval(...args),
    clearInterval: (...args) => clearInterval(...args)
  };
}

var _default = methods;
exports.default = _default;