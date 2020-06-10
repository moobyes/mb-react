const webpack = require('webpack')
const webpackConfig = require('../config/webpack.prod')

webpack(webpackConfig, (err, tatus) => {
  if (err || tatus.hasErrors()) {
    console.log("编译失败");
  }
})
