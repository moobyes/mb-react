const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");

const config = {
  mode: "development",
  devServer: {
    port: 8088,
    contentBase: path.join(__dirname, "../dist"),
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
