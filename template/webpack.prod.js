const path = require('path');

const { htmlPl, tsPathsPl, extensions, loaders } = require('./webpack');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'main.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions,
    plugins: [tsPathsPl],
  },
  plugins: [htmlPl],
};
