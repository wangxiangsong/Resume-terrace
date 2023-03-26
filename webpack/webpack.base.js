/**
 * @desc 基础公共配置
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 *  @extensions
 *  webpack 在启动后会从配置的入口模块触发，找到所有依赖的模块 resolve 配置webpack如何寻找模块所对应的文件。
 *  extensions 表示在 导入 语句中没有带后缀名时，webpack会自动带上后缀去尝试访问文件是否存在
 *  比如 遇到 import A from './A'; 时 会先寻找 A.js 按顺序找，最后找不到就会报错
 *
 *  @alias
 *  别名
 *
 *  @loader
 *  模块打包方案，匹配到 /\.(js|jsx|ts|tsx)$/ 这些文件时，babel-loader 会去处理
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
