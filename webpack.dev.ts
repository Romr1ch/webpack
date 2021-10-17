import path from 'path'
import { merge } from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { commonConfig } from './webpack.common'

export default (env: any) =>
  merge(commonConfig(env), {
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
