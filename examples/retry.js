// Node
const retry = require('../lib/retry').default
const defer = require('../lib/defer').default

const retryTimes = 3
let times = 0

const rejectError = new Error('error')
const resolveResult = '<result>'

console.log(`\n\nThe max retry times is ${retryTimes}\n`)

const callback = () => {
  const { resolve, reject, promise } = defer()

  // The prev ${retryTimes - 1} with rejected
  if (++times <= retryTimes - 1) {
    console.log(`reject with error, the ${times}th trying.`)
    reject(rejectError)
  } else { // The ${retryTimes}th with resolved
    console.log(`resolve with '${resolveResult}'.`)
    resolve(resolveResult)
  }

  return promise
}

retry(callback, retryTimes, 2000)
  .then(v => console.log('Resolved: ', v))
  .catch(err => console.log('Rejected: ', err))
