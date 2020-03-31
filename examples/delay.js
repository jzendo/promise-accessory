// Node
const defer = require('../lib/defer').default
const delay = require('../lib/delay').default

const doJob = () => new Promise(resolve => setTimeout(resolve, 100))

const promises = [
  doJob, // 100 ms
  delay.P(500), // 500 ms
  doJob,
  delay.P(500),
  doJob,
  delay.P(500)
]

const getTime = () => new Date().getTime()

const doJobs = () => {
  const { resolve, reject, promise } = defer()

  promises.reduce((r, current) => {
    r = r.then(current)
    return r
  }, Promise.resolve()).then(resolve).catch(reject)

  return promise
}

const startTime = getTime()

doJobs().then(() => {
  console.log(getTime() - startTime)
})
