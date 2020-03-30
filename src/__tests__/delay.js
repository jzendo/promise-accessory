/**
 * @jest-environment jsdom
 */

/* global describe, test, expect */
import delay, { DEFAULT_MS, MAX_MS } from '../delay'

jest.useFakeTimers()

const testCase = (msg, delayFn) => {
  // Proxy handler: `delay` & `delay$` compatible
  const delay_ = ms => {
    // delay
    if (delayFn === delay) return delay(ms)
    // delay$
    else return delayFn(ms)()
  }

  describe(msg, () => {
    /**
     * @param {Number} ms wanted MS
     * @param {Integer} realDelayMS the real using MS in internal
     */
    const testDelayWithMS = function (ms = 100, realDelayMS = 100) {
      const msg = ms !== 100 ? `${ms}ms` : 'default parameter'

      test(`call with ${msg}`, done => {
        const fn = jest.fn()
        const delayPromise = delay_(ms)

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

    test('should be function', () => {
      expect(() => delay_()).not.toThrow()
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
}

// Test delay
testCase('delay', delay)

// Test delay.P caller
describe('delay.P', () => {
  test('should be function', () => {
    expect(() => delay.P()).not.toThrow()
  })
})

// Test delay.P
testCase('delay.P', delay.P)
