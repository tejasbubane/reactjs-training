"use strict";

const webpack = require("webpack");
const path = require("path");

const apiUrl = "http://localhost:3000"

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  devtool: "source-map",

  resolve: {
    // priority of lookup -> left to right
    modules: ["src", "node_modules"]
  },

  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    publicPath: "/",
    proxy: {
      "/api": {
        target: apiUrl,
        secure: false
      }
    }
  }
};
