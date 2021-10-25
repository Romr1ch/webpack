import { merge } from 'webpack-merge'
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import { commonConfig } from './webpack.common'

export default (env: object) =>
  merge(commonConfig(env), {
    mode: 'production',
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
