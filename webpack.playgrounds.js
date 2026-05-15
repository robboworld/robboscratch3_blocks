// Сборка gh-pages/playgrounds — только для локальной отладки blocks, не для RS3/NW.js/Android
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './shim/gh-pages.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'gh-pages')
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'node_modules/google-closure-library',
      to: 'closure-library'
    }, {
      from: 'blocks_common',
      to: 'playgrounds/blocks_common'
    }, {
      from: 'blocks_horizontal',
      to: 'playgrounds/blocks_horizontal'
    }, {
      from: 'blocks_vertical',
      to: 'playgrounds/blocks_vertical'
    }, {
      from: 'core',
      to: 'playgrounds/core'
    }, {
      from: 'media',
      to: 'playgrounds/media'
    }, {
      from: 'msg',
      to: 'playgrounds/msg'
    }, {
      from: 'tests',
      to: 'playgrounds/tests'
    }, {
      from: '*.js',
      ignore: 'webpack.config.js',
      to: 'playgrounds'
    }])
  ]
};
