/**
 * @jest-environment jsdom
 */

/* global describe, test, expect */
import defer from '../defer'

const testCase = (msg, defer) => {
  describe(msg, () => {
    test('should be function', () => {
      expect(() => defer()).not.toThrow()
    })

    test('return with {resolve, reject, promise}', () => {
      const r = defer()
      expect(r).toEqual(
        expect.objectContaining({
          resolve: expect.any(Function),
          reject: expect.any(Function),
          promise: expect.any(Object)
        })
      )
    })

    // Test with resolve
    test('test function with resolve', async () => {
      const { promise, resolve } = defer()
      const fn = jest.fn()

      try {
        resolve()
        fn()
        await promise
        fn()
      } catch (e) {
        fn()
      } finally {
        expect(fn).toHaveBeenCalledTimes(2)
      }
    })

    // Test with reject
    test('test function with reject', async () => {
      const { promise, reject } = defer()
      const fn = jest.fn()

      try {
        reject()
        fn()
        await promise
        fn()
      } catch (e) {
        fn()
      } finally {
        expect(fn).toHaveBeenCalledTimes(2)
      }
    })
  })
}

// Test defer
testCase('defer', defer)

// Test defer.P caller
describe('defer.P', () => {
  test('should be function', () => {
    expect(() => defer.P).not.toThrow()
  })
})
// Test defer.P
testCase('defer.P', defer.P())
