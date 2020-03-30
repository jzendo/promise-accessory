"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const isWXEnv = typeof wx !== 'undefined' && wx.showShareActionSheet !== undefined;
var _default = isWXEnv;
exports.default = _default;