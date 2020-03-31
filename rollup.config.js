import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

const banner = `
/*!
 * ${pkg.name} v${pkg.version} ${pkg.license} license <Build ${new Date().toUTCString()}>
 * ${pkg.description}
 */
`

export default [
  {
    input: 'src/index',
    output: {
      file: 'build/bundle.js',
      name: 'promiseAccessoryUtil',
      format: 'umd',
      banner: banner
    },
    plugins: [
      commonjs({
        include: /node_modules/
      }),
      json(),
      injectProcessEnv({
        NODE_ENV: 'production'
      }),
      resolve(),
      babel({
        presets: [['@babel/env', { modules: false }]]
      }),
      uglify({
        output: {
          comments: '/^!/'
        }
      })
    ]
  }
]
