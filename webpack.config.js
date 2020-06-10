'use strict';

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', MiniCSS.loader],
      },
      {
        test: /\.(js|jsx)/,
        exclude: '/node_modules/',
        use: { loader: 'babel-loader' },
      },
      {
        test: /\index.html/,
        use: { loader: 'html-loader' },
      },
    ],
  },
  resolve: {},
  plugins: [new HtmlWebPackPlugin({ template: './index.html', filename: './index.html' }), new MiniCSS()],
};
