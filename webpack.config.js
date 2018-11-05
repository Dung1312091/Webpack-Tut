const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  optimization: {
    usedExports: true
  },
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: "inline-source-map", //map to line err in file
  devServer: {
    //when change code webpack automatic run and auto refresh browser
    contentBase: "./dist",
    hot: true
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]), //clear foder before build
    new HtmlWebpackPlugin({
      //generate file html and can custom
      title: "Development"
    }),
    new webpack.HotModuleReplacementPlugin() //allow module update without refresh browser
  ],
  module: {
    rules: [
      //define which file types then use which types loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
