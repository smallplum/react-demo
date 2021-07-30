const path = require('path');
const baseConfig = require('./webpack.config');
var merge = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
  1. async的意思是，所有异步chunks里共同模块,比如 lodash被单独分离出一个文件
    两个入口都import('lodash'); loadash会提到单独的包里，而同步的react则会打两份
  2. 
*/
module.exports = merge(baseConfig, {
  devtool: 'none',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/public/',
          to: __dirname + '/dist/'
        }
      ]
    })
  ],
  //优化项目
  optimization: {
    splitChunks: {
      chunks: 'all',//优化所有的js
      minSize: 30000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      }
    }
  }
});
