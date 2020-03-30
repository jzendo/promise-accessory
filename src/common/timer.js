import isWx from './isWeixinEnv'
import global from './global'

// The MINA-program env should be not include global context.
const methods = {
  setTimeout: isWx ? setTimeout : global.setTimeout,
  clearTimeout: isWx ? clearTimeout : global.clearTimeout,
  setInterval: isWx ? setInterval : global.setInterval,
  clearInterval: isWx ? clearInterval : global.clearInterval,
}

export default methods
