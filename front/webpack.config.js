const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const config = {
  entry: {
    app: "/src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    overlay: true,
    contentBase: path.join(__dirname, "public/"),
    host: "localhost",
    port: "8080",
    open: true,
  },
};

module.exports = config;
