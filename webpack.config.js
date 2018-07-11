const path = require('path');

const config = {
  entry: './src/cgp.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cgp.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|flow)$/,
        loader: 'babel-loader',
        options: {
          presets: ['stage-2', 'env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};

module.exports = config;
