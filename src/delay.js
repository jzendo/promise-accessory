import invariant from '@jzendo/utils/lib/common/invariant'
import p from './common/p'
import timer from './common/timer'

const MIN_MS = 10
const MAX_MS = 24 * 60 * 60 * 1000 // 1day's ms
const DEFAULT_MS = 100 // 100 ms

const setTimeoutImpl = (fn, ms) => {
  return timer.setTimeout(fn, ms)
}

const isInteger = ms => {
  return typeof ms === 'number' &&
    ms <= MAX_MS && ms >= MIN_MS && // Limit MAX
    ms % 1 === 0 // Simple checking integer
}

/**
 * @param {Integer} ms the m-seconds for delaying
 * @returns {Promise}
 */
function delay (ms = DEFAULT_MS) {
  invariant(isInteger(ms), `The \`ms\` should be integer and only between ${MIN_MS} and ${MAX_MS}.`)

  return new Promise(resolve => setTimeoutImpl(resolve, ms))
}

/**
 * Wrapped with delay
 *
 * @param {Integer} ms the m-seconds for delaying
 * @returns {function} the delay function
 */
function delay$ (ms = DEFAULT_MS) {
  return () => delay(...arguments)
}

export default p(delay, delay$)

export {
  DEFAULT_MS,
  MAX_MS,
  MIN_MS
}
