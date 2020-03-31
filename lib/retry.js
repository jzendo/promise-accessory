"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTryFailure = isTryFailure;
exports.default = void 0;

var _invariant = _interopRequireDefault(require("@jzendo/utils/lib/common/invariant"));

var _isFunc = _interopRequireDefault(require("@jzendo/utils/lib/common/isFunc"));

var _isInteger = _interopRequireDefault(require("./common/isInteger"));

var _defer = _interopRequireDefault(require("./defer"));

var _delay = _interopRequireDefault(require("./delay"));

var _p = _interopRequireDefault(require("./common/p"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RETRY_DEFAULT_INTERVAL = 1000;
const RETRY_MIN_INTERVAL = 10;
const RETRY_MAX_INTERVAL = 60 * 60 * 1000;
const ERROR_TRY_FAILURE = new Error('try failure');

async function runAndRetryWhenFallback(callback, opt) {
  try {
    const result = await callback();
    return result;
  } catch (e) {
    if (--opt.times > 0) {
      await (0, _delay.default)(opt.tryDelayInterval);
      return runAndRetryWhenFallback(...arguments);
    } else {
      throw ERROR_TRY_FAILURE;
    }
  }
}

function retry(callback, times = 3, tryDelayInterval = RETRY_DEFAULT_INTERVAL) {
  (0, _invariant.default)((0, _isFunc.default)(callback), 'The `callback` should be function.');
  (0, _invariant.default)((0, _isInteger.default)(times) && times >= 2, 'The `times` should be integer and greater than 1.');
  (0, _invariant.default)((0, _isInteger.default)(tryDelayInterval) && tryDelayInterval >= RETRY_MIN_INTERVAL && tryDelayInterval <= RETRY_MAX_INTERVAL, `The \`tryDelayInterval\` should be integer and between ${RETRY_MIN_INTERVAL} and ${RETRY_MAX_INTERVAL}.`);
  const {
    resolve,
    reject,
    promise
  } = (0, _defer.default)();
  runAndRetryWhenFallback(callback, {
    times,
    tryDelayInterval
  }).then(resolve).catch(reject);
  return promise;
}

function retry$(callback, times = 3, tryDelayInterval = RETRY_DEFAULT_INTERVAL) {
  return () => retry(...arguments);
}

function isTryFailure(err) {
  return err instanceof Error && err === ERROR_TRY_FAILURE;
}

var _default = (0, _p.default)(retry, retry$);

exports.default = _default;