"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isInteger = _interopRequireDefault(require("@jzendo/utils/lib/common/isInteger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = val => (0, _isInteger.default)(val, true);

exports.default = _default;