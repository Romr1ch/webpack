const path = require('path')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const common = require('./webpack.common')

module.exports = (env) =>
  merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
    },
    devServer: {
      static: path.resolve(__dirname, './dist'),
      port: 3000,
      hot: true,
      compress: true,
      historyApiFallback: true,
      client: {
        logging: 'none',
      },
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
    ],
  })
