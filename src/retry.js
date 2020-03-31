import invariant from '@jzendo/utils/lib/common/invariant'
import isFunction from '@jzendo/utils/lib/common/isFunc'
import isInteger from './common/isInteger'
import defer from './defer'
import delay from './delay'
import p from './common/p'

// Retry interval
const RETRY_DEFAULT_INTERVAL = 1000 // ms
const MIN_LIMIT_RETRY_INTERVAL = 200 // ms
const MAX_LIMIT_RETRY_INTERVAL = 60 * 60 * 1000 // ms
// Try failure error
const ERROR_TRY_FAILURE = new Error('try failure')

function tryForTimes (callback, opt) {
  return callback()
    .catch(() => {
      if (--opt.times > 0) {
        return delay(opt.tryDelayInterval)
          .then(() => tryForTimes(callback, opt))
      } else {
        throw ERROR_TRY_FAILURE
      }
    })
}

function retry (callback, times = 3, tryDelayInterval = RETRY_DEFAULT_INTERVAL) {
  invariant(isFunction(callback), 'The `callback` should be function.')
  invariant(isInteger(times) && times >= 2, 'The `times` should be integer and greater than 1.')
  invariant(isInteger(tryDelayInterval) &&
    tryDelayInterval >= MIN_LIMIT_RETRY_INTERVAL && tryDelayInterval <= MAX_LIMIT_RETRY_INTERVAL,
    `The \`tryDelayInterval\` should be integer and between ${MIN_LIMIT_RETRY_INTERVAL} and ${MAX_LIMIT_RETRY_INTERVAL}.`)

  const { resolve, reject, promise } = defer()

  tryForTimes(callback, { times, tryDelayInterval }).then(resolve).catch(reject)

  return promise
}

function retry$ (callback, times = 3) {
  return () => retry(callback, times)
}

function isTryFailure (err) {
  return err instanceof Error && err === ERROR_TRY_FAILURE
}

export default p(retry, retry$)

export {
  isTryFailure
}
