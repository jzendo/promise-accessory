import invariant from '@jzendo/utils/lib/common/invariant'
import isFunction from '@jzendo/utils/lib/common/isFunc'
import isInteger from './common/isInteger'
import defer from './defer'
import delay from './delay'
import p from './common/p'

// Retry interval
const RETRY_DEFAULT_INTERVAL = 1000 // ms
const RETRY_MIN_INTERVAL = 10 // ms
const RETRY_MAX_INTERVAL = 60 * 60 * 1000 // ms
// Try failure error
const ERROR_TRY_FAILURE = new Error('try failure')

/*
// Impl 1: callback
function runAndRetryWhenFallback (callback, opt) {
  return callback()
    .catch(() => {
      if (--opt.times > 0) {
        return delay(opt.tryDelayInterval)
          .then(() => runAndRetryWhenFallback(callback, opt))
      } else {
        throw ERROR_TRY_FAILURE
      }
    })
}
*/

// Impl 2: async/await
async function runAndRetryWhenFallback (callback, opt) {
  try {
    /**
      * If you want try again, you should fire a exception
      * which will be catched in callback
      */
    const result = await callback()
    return result
  } catch (e) {
    if (--opt.times > 0) {
      await delay(opt.tryDelayInterval)
      const tryResult = await runAndRetryWhenFallback(...arguments)
      return tryResult
    } else {
      throw ERROR_TRY_FAILURE
    }
  }
}

function retry (callback, times = 3, tryDelayInterval = RETRY_DEFAULT_INTERVAL) {
  // Check parameters (throw exception when invalid)
  invariant(isFunction(callback), 'The `callback` should be function.')
  invariant(isInteger(times) && times >= 2, 'The `times` should be integer and greater than 1.')
  invariant(isInteger(tryDelayInterval) &&
      tryDelayInterval >= RETRY_MIN_INTERVAL && tryDelayInterval <= RETRY_MAX_INTERVAL,
      `The \`tryDelayInterval\` should be integer and between ${RETRY_MIN_INTERVAL} and ${RETRY_MAX_INTERVAL}.`)

  const { resolve, reject, promise } = defer()

  runAndRetryWhenFallback(callback, { times, tryDelayInterval })
    .then(resolve)
    .catch(reject)

  return promise
}

// eslint-disable-next-line
function retry$ (callback, times = 3, tryDelayInterval = RETRY_DEFAULT_INTERVAL) {
  return () => retry(...arguments)
}

function isTryFailure (err) {
  return err instanceof Error && err === ERROR_TRY_FAILURE
}

export default p(retry, retry$)

export {
  isTryFailure
}
