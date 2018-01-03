"use strict";

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/bundle.css"
});

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
      },
      {
        test: /\.(css)$/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
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
  },

  plugins: [extractSass]
};
