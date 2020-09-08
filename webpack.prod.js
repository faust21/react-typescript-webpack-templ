const webpackMerge = require('webpack-merge');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config');

module.exports = webpackMerge.merge(config, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
