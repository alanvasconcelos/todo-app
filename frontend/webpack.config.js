const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('public/assets'),
    filename: 'app.js',
    publicPath: 'assets'
  },
  devServer: {
    port: 8000,
    contentBase: './public',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ]
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    hints: false
  }
}