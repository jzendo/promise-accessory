let envPreset = [
  '@babel/preset-env',
  {
    targets: {
      node: 'current'
    }
  }
]

if (process.env.NODE_ENV === 'test') {
  envPreset = [
    '@babel/preset-env',
    {
      targets: {
        node: 'current'
      }
    }
  ]
} else { // development or production

}

module.exports = {
  presets: [
    envPreset
  ]
}
