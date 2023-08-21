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
      '/task': {
        target: 'https://saas.stonewise.cn/',
        // target: 'http://dev01.bgp.stonewise.cn:7206/',
        // target: 'http://test02.aws.nx.stonewise.cn:7104',
        // test 分支接口
        // target: 'https://test02.aws.nx.stonewise.cn:4433/',
        // target: 'http://dev01.bgp.stonewise.cn:7206',
        // target: 'http://dev01.aws.nx.stonewise.cn:7231/',
        // target: 'https://tmp-test02.aws.nx.stonewise.cn:4433/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/task': '/task',
        },
      },
    },
  },
});
