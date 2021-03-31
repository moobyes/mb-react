/*
 * @Description: config.js
 * @Author: Moobye
 * @Date: 2021-01-25 17:59:37
 * @LastEditTime: 2021-02-04 11:07:45
 * @LastEditors: Moobye
 */
const dotenv = require('dotenv');

const config = dotenv.config();
console.log('dotenv.config() :>> ', config);

const { parsed } = config;

module.exports = {
  port: parsed.PROT,
  outPutDir: 'dist',
  routes: {

  },
};
