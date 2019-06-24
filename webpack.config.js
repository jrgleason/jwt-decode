const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'lib/index.mjs'),
  output: {
      filename: 'jwt-decode.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          }
      ]
  }
}