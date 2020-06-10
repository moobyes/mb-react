const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");
const optimizeCss = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
  ]
});
