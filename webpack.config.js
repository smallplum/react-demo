const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: '[name].[contenthash:6].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        loader: 'url-loader?limit=8192',
      },

      {
        test: /\.css$/,
        // include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(pdf|svg|docx|doc)$/,
        use: 'file-loader', //如果不可以试试这个file-loader?name=[path][name].[ext]
      },
      {
        // test: /\.(jpg|png|gif|bmp|jpeg)$/,
        test: /\.(xlsx|xls)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // 可根据需要调整生成的文件名格式
              // outputPath: 'xlsx', // 输出文件夹路径
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:6].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
