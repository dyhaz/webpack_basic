const path = require('path');
const module_federation = require('module-federation-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    uniqueName: "dashboard",
    publicPath: "auto"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.jpg"],
          },
        }
      ],
    }),
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
        test: /\.(js)$/i,
        use: [
          {
            loader: 'file-loader',
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
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      },
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  }
};
