const webpackMerge = require('webpack-merge');

const config = require('./webpack.config');

module.exports = webpackMerge.merge(config, {
  mode: 'production',
});
