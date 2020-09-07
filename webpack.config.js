const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//RULES
const jsFileRules = {
  test: /\.(js|jsx)$/,
  use: ["babel-loader"],
  exclude: /node_module/,
};

const stylesRules = {
  test: /\.(css|scss)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

// const imagesRules = {
//   test: /\.(png|svg|jpg|gif)$/,
//   use: [
//     {
//       loader: "file-loader",
//     },
//   ],
// };

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "Js/[name]-bundle.[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    contentBase: "dist",
    overlay: true, //To show the erros into the screen
    port: 8083,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    //These are the rules the webpack will use when he encounters various file types.
    rules: [stylesRules, jsFileRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "watting for your title...",
    }),
  ],
};
