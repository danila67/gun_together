const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ isProduction }) => {
  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    watch: !isProduction,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/i,
          use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.html',
            },
          },
        ],
        },
        {
          test: /\.(?:png|svg)$/,
          use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
    ],
  }
}