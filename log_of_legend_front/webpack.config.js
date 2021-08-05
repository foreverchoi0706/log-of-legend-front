const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  entry: {
    app: "/src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "development",
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.BannerPlugin({
      banner: "banner",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({}),
    new webpack.EnvironmentPlugin(["DEBUG"]),
  ],
  devServer: {
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: path.join(__dirname, "public/"),
    host: "localhost",
    port: "3001",
    open: true,
  },
};

module.exports = config;
