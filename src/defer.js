import p from './common/p'

/**
 * @returns {{resolve, reject, promise}}
 */
function defer () {
  let resolve
  let reject

  // eslint-disable-next-line
  const promise = new Promise((resolve_, reject_) => {
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
