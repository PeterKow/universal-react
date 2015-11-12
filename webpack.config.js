var path = require('path')
var mainPath =  path.resolve(__dirname, 'src', 'app', 'main.js');

var config = {
  entry: mainPath,
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      // I highly recommend using the babel-loader as it gives you
      // ES6/7 syntax and JSX transpiling out of the box
      { test: /\.js$/, exclude: /node_modules/, loaders: [ "babel-loader"] }
    ]
  }
}

module.exports = config;