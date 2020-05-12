// Webpack has certain defaults on which JavaScript file to start with. It looks for a src/index.js file. It’ll also output the bundle to dist/main.js by default. If you need to change the locations of your src and dist files, you’ll need a few more configuration entries in webpack.config.js.
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};