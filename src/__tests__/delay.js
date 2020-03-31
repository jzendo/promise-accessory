/**
 * @jest-environment jsdom
 */

/* global describe, test, expect, jest */
import delay, { DEFAULT_MS, MAX_MS, MIN_MS } from '../delay'

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
     */
    const testDelayWithMS = function (ms = DEFAULT_MS) {
      const msg = ms !== DEFAULT_MS ? `${ms}ms` : 'default parameter'

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
        jest.advanceTimersByTime(ms)

        delayPromise.then(fn).then(() => {
          expect(fn).toHaveBeenCalledTimes(1)
          done()
        })
      })
    }

    test('should be function', () => {
      expect(() => delay_()).not.toThrow()
      expect(() => delay_(200)).not.toThrow()

      expect(() => delay_(-100)).toThrow()
      expect(() => delay_(1.2)).toThrow()
      expect(() => delay_(123.0001)).toThrow()

      expect(() => delay_(MIN_MS - 1)).toThrow()
      expect(() => delay_(MAX_MS + 1)).toThrow()
    })

    testDelayWithMS()
    testDelayWithMS(200)
    testDelayWithMS(DEFAULT_MS)
    testDelayWithMS(MIN_MS)
    testDelayWithMS(MAX_MS)
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
