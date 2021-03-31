const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const notifier = require('node-notifier');
const postcss = require('postcss-import');
const autoFixer = require('autoprefixer');
const { port, outPutDir } = require('../config');

console.log(`端口为:${port}`);

const fileDir = `../${outPutDir}`;
const DIST_PATH = path.resolve(__dirname, fileDir);
// const APP_PATH = path.resolve(__dirname, "../app"); // todo

const urlConfig = {
  dev: {
    https: null,
    host: 'localhost',
  },
};

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.less'],
    // alias: {
    //   '@': resolve('src')
    // }
  },
  entry: {
    // app: "./app/index.js",
    app: path.join(__dirname, '../src/App.jsx'),
    framework: ['react', 'react-dom'],
  },
  output: {
    path: DIST_PATH,
    filename: './js/[name].[hash:16].js',
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        include: path.resolve(__dirname, '../src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[path][name]_[local]--[hash:base64:5]',
                },
                localsConvention: 'camelCase',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  postcss({
                    root: loader.resourcePath,
                  }),
                  autoFixer(),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                sourceMap: true,
                resources: [
                  path.resolve(__dirname, '../src/assets/css/global.scss'),
                ], // 一定要path.resolve的绝对路径，加载全局样式
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        // 注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: './images/[hash].[ext]',
          },
        },
        // 注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            urlConfig.dev.https ? 'https' : 'http'
          }://${urlConfig.dev.host}:${port}`,
        ],
        notes: ['欢迎使用mb-react'],
      },
      onErrors: (severity, errors) => {
        console.log('错误：', severity, errors);
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          subtitle: error.file || '',
          icon: 'ICON',
        });
      },
      clearConsole: true,
    }),
    new ExtractTextPlugin({
      filename: './css/[name][hash].css',
    }),
    new CleanWebpackPlugin(),
    // ({
    //   CleanWebpackPlugin: [
    //     path.resolve(process.cwd(), "build/"),
    //     path.resolve(process.cwd(), "dist/"),
    //   ],
    // }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        framework: {
          test: 'framework',
          name: 'framework',
          enforce: true,
        },
      },
    },
  },
};
