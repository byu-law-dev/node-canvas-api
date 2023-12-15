import terser from '@rollup/plugin-terser';

const config = {
  input: './src/index.js',
  output: {
    format: 'cjs',
    dir: 'output',
    name: 'node-canvas-api'
  },
  plugins: [
    terser()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
