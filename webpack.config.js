const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "production",
  context: __dirname,
  entry: "./frontend/widgets.jsx",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "[resourcePath]",
    devtoolFallbackModuleFilenameTemplate: "[resourcePath]?[hash]"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Widgets!',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            plugins: ["@babel/plugin-proposal-class-properties"],
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  watch: true
};