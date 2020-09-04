const webpackMerge = require('webpack-merge');

const config = require('./webpack.config');

module.exports = webpackMerge.merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});
