const path = require('path')




module.exports = {
  /*
   *    The base directory, an absolute path, for resolving entry points and loaders from configuration.
   */
  context: path.resolve(__dirname, ".."),
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: './asset'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // es6 to es5
          presets: ['es2015']
        }
      }
    ]
  }
}
