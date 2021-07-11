const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const loaders = [
  {
    test: /\.tsx?$/,
    loader: 'babel-loader',
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
  },
];

const extensions = ['.ts', '.tsx', '.json', '.js'];

const htmlPl = new HtmlWebPackPlugin({
  inject: true,
  template: path.join(__dirname, 'public', 'index.html'),
});

const tsPathsPl = new TsconfigPathsPlugin({});

module.exports = {
  htmlPl,
  extensions,
  loaders,
  tsPathsPl,
};
