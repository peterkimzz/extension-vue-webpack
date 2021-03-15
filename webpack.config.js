const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.ts$/,
      //   loader: 'ts-loader',
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/]
      //   }
      // },
      {
        test: /\.css$/,
        // include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'src/public'), to: path.resolve(__dirname, 'dist') }]
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true
  },
}
