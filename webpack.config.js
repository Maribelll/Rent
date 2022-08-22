const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
  },
  entry: "./index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //Loading images
      {
        test: /\.jpe?g$|\.gif$|\.png|\.ico|\.svg$/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext][query]",
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "land.html",
      template: "./land.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
