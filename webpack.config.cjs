const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
};
