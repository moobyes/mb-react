/*
 * @Description: 开发环境
 * @Author: Moobye
 * @Date: 2020-08-06 13:20:01
 * @LastEditTime: 2021-01-27 15:18:14
 * @LastEditors: Moobye
 */
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const { port, outPutDir } = require('../config');

const fileDir = `../${outPutDir}`;
const DIST_PATH = path.resolve(__dirname, fileDir);

const config = {
  mode: 'development',
  devServer: {
    port,
    contentBase: path.join(__dirname, DIST_PATH),
    compress: true,
    historyApiFallback: true,
    // historyAipFallback: true,
    // clientLogLevel: "info",
    hot: true,
    https: false,
    noInfo: true,
    open: true,
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
  },
};

module.exports = merge(baseWebpackConfig, config);
