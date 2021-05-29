const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const cssRegex = /\.css$/;

module.exports = {
  mode: 'production',
  context: __dirname,
  output: {
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[contenthash]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the `compress` and `output`
            ecma: 8,
          },
          compress: { ecma: 5, inline: 2 },
          mangle: { safari10: true },
          output: { ecma: 5, comments: false },
        },
        // Use multi-process parallel running to improve the build speed
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: { inline: false, annotation: true },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: [
                /(node_modules)/,
                // \\ for Windows, \/ for Mac OS and Linux
                /node_modules[\\\/]core-js/,
                /node_modules[\\\/]webpack[\\\/]buildin/,
              ],
              presets: ['@babel/env', '@babel/react'],
            },
          },
        ],
      },
      {
        test: cssRegex,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|ico|webp)$/,
        type: 'asset',
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 3001,
    watchContentBase: true,
  },
};
