const path = require('path');
const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const { extensions, htmlPl, loaders, tsPathsPl } = require('./webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: loaders,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions,
    plugins: [tsPathsPl],
  },
  plugins: [
    new Dotenv(),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    htmlPl,
  ],
  devtool: 'source-map',
};
