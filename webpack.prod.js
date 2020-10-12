const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
//RULES
const jsFileRules = {
  test: /\.(js|jsx)$/,
  use: ["babel-loader"],
  exclude: /node_module/,
};

const stylesRules = {
  test: /\.(css|scss)$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
};

const imagesRules = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "js/[name]-bundle.[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  //   devServer: {
  //     contentBase: "dist",
  //     overlay: true, //To show the erros into the screen
  //     port: 8083,
  //   },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    //These are the rules the webpack will use when he encounters various file types.
    rules: [imagesRules, stylesRules, jsFileRules],
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name]-[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "watting for your title...",
    }),
    new UglifyjsWebpackPlugin(),
    new Dotenv(),
  ],
};
