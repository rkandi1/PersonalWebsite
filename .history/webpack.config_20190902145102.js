const path = require("path");

const absolute = path.join(__dirname, "public");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(absolute, "/Scripts"),
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use:["style-loader", "css-loader", "sass-loader"]
    }]
  },
  devtool:"cheap-module-eval-source-map",
  devServer: {
    contentBase: absolute,
    historyApiFallback: true
  }
};
