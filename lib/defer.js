"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _p = _interopRequireDefault(require("./common/p"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defer() {
  let resolve;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve = resolve_;
    reject = reject_;
  });
  return {
    resolve,
    reject,
    promise
  };
}

function defer$() {
  return () => defer();
}

var _default = (0, _p.default)(defer, defer$);

exports.default = _default;