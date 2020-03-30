"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (owner, proxy) => {
  if (owner) owner.P = proxy;
  return owner;
};

exports.default = _default;