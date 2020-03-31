import isWx from './isWeixinEnv'
import global from './global'

// The MINA-program env should be not include global context.
let methods = {
  setTimeout: isWx ? setTimeout : global.setTimeout,
  clearTimeout: isWx ? clearTimeout : global.clearTimeout,
  setInterval: isWx ? setInterval : global.setInterval,
  clearInterval: isWx ? clearInterval : global.clearInterval
}

// For jest mock timer
if (process.env.NODE_ENV === 'test') {
  methods = {
    setTimeout: (...args) => setTimeout(...args),
    clearTimeout: (...args) => clearTimeout(...args),
    setInterval: (...args) => setInterval(...args),
    clearInterval: (...args) => clearInterval(...args)
  }
}

export default methods
