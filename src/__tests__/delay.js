/**
 * @jest-environment jsdom
 */

/* global describe, test, expect */
import delay, { DEFAULT_MS, MAX_MS } from '../delay'

jest.useFakeTimers()

const toInteger = num => num >>> 0

/**
 * @param {Number} ms wanted MS
 * @param {Integer} realDelayMS the real using MS in internal
 */
const testDelayWithMS = function (ms = 100, realDelayMS = 100) {
  const msg = ms !== 100 ? `${ms}ms` : 'default parameter'

  test(`call with ${msg}`, done => {
    const fn = jest.fn()
    const delayPromise = delay(ms)

    // Should be promise-like result
    expect(delayPromise).toEqual(
      expect.objectContaining({
        then: expect.any(Function),
        catch: expect.any(Function)
      })
    )

    // Forward the timer
    jest.advanceTimersByTime(realDelayMS)

    delayPromise.then(fn).then(() => {
      expect(fn).toHaveBeenCalledTimes(1)
      done()
    })
  })
}

describe('delay', () => {
  test('should be function', () => {
    expect(() => delay()).not.toThrow()
  })

  // -- legal parameters
  // default
  testDelayWithMS()
  // integer
  testDelayWithMS(200, 200)

  // -- illegal paramaters
  // float
  testDelayWithMS(200.123, DEFAULT_MS)
  // out of bound
  testDelayWithMS(MAX_MS + 1, DEFAULT_MS)
})
