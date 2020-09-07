const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: '模板',
      template: 'assets/index.html',
      favicon: 'assets/favicon.ico',
    }),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        reacts: {
          test: /[\\/]node_modules[\\/].*react.*[\\/]/,
          name(module, chunks, cacheGroupsKey) {
            return `vendors-${cacheGroupsKey}`;
          },
          priority: 10,
        },
        others: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupsKey) {
            return `vendors-${cacheGroupsKey}`;
          },
          priority: 0,
        },
      },
    },
  },
};
