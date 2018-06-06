var path = require('path')
const webpack = require('webpack')
module.exports = [
  {
    entry: path.join(__dirname, 'src', 'library', 'parser.js'),
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      library: 'talkr-apng',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /[\\\/](node_modules|lib)[\\\/]/
        }
      ]
    }
  },
  {
    entry: path.join(__dirname, 'src', 'demo-page', 'index.js'),
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'index.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /[\\\/](node_modules|lib)[\\\/]/
        },
        {
          test: /\.css$/,
          exclude: /[\\\/](node_modules|lib)[\\\/]/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
     plugins: [
        new webpack.optimize.UglifyJsPlugin({
       
      })
     ] 
  }
]
