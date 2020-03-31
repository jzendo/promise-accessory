/**
 * @jest-environment jsdom
 */

/* global describe, test, expect */
import retry from '../retry'

const ctor = () => {}

describe('retry', () => {
  test('The parameter `callback` should be function', () => {
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
        retry(arg, 3)
      }).toThrow()
    })
  })

  test('The parameter `times` should be integer', () => {
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

  test('The parameter `tryDelayInterval` should be integer', () => {
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
