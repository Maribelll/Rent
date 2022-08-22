const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
    publicPath: "",
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
        test: /\.(?:|jpg|gif|png|ico|svg|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[filename].[ext]",
            },
          },
        ],
      },
      // {
      //   test: /\.(ttf|eot|woff2?)$/i,
      //   type: "asset/resource",
      // },
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

    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "images"),
        // path.resolve(__dirname, "images"),
      ],
    }),
  ],
};
