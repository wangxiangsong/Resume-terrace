/**
 *  @desc 主进程配置
 */

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

/**
 *  @entry 定义入口文件是 /app/main/electron.js
 *  @output 定义打包出来的文件目录为 dist，文件名为 electron.js
 *  @target 由于 JS 的应用场景日益增长，从浏览器到 Node，运行在不同环境下的 JS 代码存在一些差异。
 *          target 配置项可以让 Webpack 构建出不同运行环境的代码
 */

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inlin-source-map',
  // mode 等价于我们在 DefinePlugin 中定义了 process.env.NODE_ENV
  mode: 'development',
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': 'development',
  //   }),
  // ],
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
