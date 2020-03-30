import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const banner = `
/*!
 * ${pkg.name} - ${pkg.description}
 * ${pkg.license}, version: ${pkg.version}, build: ${new Date().toUTCString()}
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
