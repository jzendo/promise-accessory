/**
 * @jest-environment jsdom
 */

/* global describe, test, expect, jest */
import retry from '../retry'

const ctor = () => {}

describe('retry', () => {
  describe('parameter `callback`', () => {
    test('should be function', () => {
      [
        123.1,
        '123',
        true,
        {},
        [],
        null,
        window,
        window.document
      ].forEach(arg => {
        expect(() => {
          retry(arg)
        }).toThrow()
      })
    })
  })

  describe('parameter `times`', () => {
    test('should be integer', () => {
      [
        123.1,
        '123',
        true,
        {},
        [],
        null,
        window,
        window.document
      ].forEach(arg => {
        expect(() => {
          retry(ctor, arg)
        }).toThrow()
      })
    })
  })

  describe('parameter `tryDelayInterval`', () => {
    test('should be integer', () => {
      [
        123.1,
        '123',
        true,
        {},
        [],
        null,
        window,
        window.document
      ].forEach(arg => {
        expect(() => {
          retry(ctor, 100, arg)
        }).toThrow()
      })
    })
  })

  test('retry 3 times', done => {
    const resolvedResult = '<result>'
    const rejectedResult = new Error('again')
    const fn = jest.fn()
    const fn2 = jest.fn()
    const MAX_TIMES = 3

    const callerProxy = (rejectTimes, fn) => {
      let times = 0
      return () => {
        fn()
        if (++times <= rejectTimes) {
          return Promise.reject(rejectedResult)
        } else {
          return Promise.resolve(resolvedResult)
        }
      }
    }

    retry(callerProxy(2, fn), MAX_TIMES, 20).then(val => {
      expect(fn).toHaveBeenCalledTimes(MAX_TIMES)
      expect(val).toEqual(resolvedResult)
      done()
    })

    retry(callerProxy(3, fn2), MAX_TIMES, 20).catch(err => {
      expect(fn2).toHaveBeenCalledTimes(MAX_TIMES)
      expect(err).toEqual(rejectedResult)
      done()
    })
  })
})
