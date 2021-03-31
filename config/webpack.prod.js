/*
 * @Description: 生产配置
 * @Author: Moobye
 * @Date: 2020-08-06 13:20:01
 * @LastEditTime: 2021-01-27 14:48:55
 * @LastEditors: Moobye
 */
const merge = require('webpack-merge');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new OptimizeCss({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
  ],
});
