import p from './common/p'
import getPromiseInstance from './common/promise'

/**
 * @returns {{resolve, reject, promise}}
 */
function defer () {
  let resolve
  let reject

  // eslint-disable-next-line
  const promise = getPromiseInstance((resolve_, reject_) => {
    resolve = resolve_
    reject = reject_
  })

  return {
    resolve,
    reject,
    promise
  }
}

function defer$ () {
  return () => defer()
}

export default p(defer, defer$)
