const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/widgets.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "[resourcePath]",
    devtoolFallbackModuleFilenameTemplate: "[resourcePath]?[hash]"
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
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  watch: true
};