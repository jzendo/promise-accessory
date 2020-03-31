// eslint-disable-next-line
const isWXEnv = typeof wx !== 'undefined' && wx.showShareActionSheet !== undefined

export default isWXEnv
