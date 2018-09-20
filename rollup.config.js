// import uglify from 'rollup-plugin-uglify'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import createBanner from 'create-banner'
import changeCase from 'change-case'
const pkg = require('./package')
const name = changeCase.pascalCase(pkg.name)
const banner = createBanner({
  data: {
    name: `${name}.js`,
    year: '2015-present'
  }
})
module.exports = {
  input: 'src/index.js',
  output: {
    banner,
    name,
    file: `dist/index.js`,
    format: 'umd'
  },
  plugins: [
    babel({
      presets: [['@babel/preset-env',
        {
          'useBuiltIns': 'entry'
        }]]
    }),
    uglify({
      output: {
        comments: 'all'
      }})
  ]
}
