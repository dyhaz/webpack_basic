const path = require('path');
const module_federation = require('module-federation-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    uniqueName: "angular13",
    publicPath: "auto"
  },
  plugins: [
    new module_federation.ModuleFederationPlugin({
      library: { type: "commonjs" },
      filename: "remoteEntry.js",
    }),
  ],
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
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
