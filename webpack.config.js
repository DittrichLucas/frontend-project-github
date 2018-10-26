const path = require('path')

module.exports = {
    entry: "./app/App.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            query: {
                presets: ['@babel/react']
              }
          }
        }
      ]
    }
  }