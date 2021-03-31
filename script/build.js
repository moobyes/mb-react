/*
 * @Description: build
 * @Author: Moobye
 * @Date: 2020-08-06 13:20:01
 * @LastEditTime: 2021-01-27 15:47:43
 * @LastEditors: Moobye
 */
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');

webpack(webpackConfig, (err, tatus) => {
  if (err || tatus.hasErrors()) {
    console.log('编译失败');
  }
});
