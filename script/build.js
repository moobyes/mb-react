/*
 * @Description: build
 * @Author: Moobye
 * @Date: 2020-08-06 13:20:01
 * @LastEditTime: 2021-03-31 16:27:25
 * @LastEditors: Moobye
 */
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');

webpack(webpackConfig, (err, status) => {
  if (err || status.hasErrors()) {
    console.log('编译失败');
  }
});
