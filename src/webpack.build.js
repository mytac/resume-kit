const path = require('path');
var template = require("ejs!./file.ejs");

template(data)
module.exports = {
  entry: './views/index.ejs',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
    ]
  }
};