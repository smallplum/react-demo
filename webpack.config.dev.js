const path = require('path');
const baseConfig = require('./webpack.config');
var merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
    proxy: {
      '/operation': {
        target: 'http://192.168.1.107:7203/',
        changeOrigin: true,
        secure: true,
      },
    }
  }
});
