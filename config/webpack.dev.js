const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname,'../dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname,'../dist'),
    open: true,
    port: 8086
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}