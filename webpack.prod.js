const { merge } = require('webpack-merge')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.common')

module.exports = (env) =>
  merge(common(env), {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[contenthash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            chunks: 'initial',
            enforce: true,
            filename: 'vendor.[contenthash].js',
          },
        },
      },
      minimizer: ['...', new CssMinimizerWebpackPlugin()],
    },
  })
