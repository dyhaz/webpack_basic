const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: true,
            },
          },
        ],
      },
      {
        test: /\.css$/, use: [
          {
            loader: 'css-loader',
            options: { import: true, url: true }
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  }
};
