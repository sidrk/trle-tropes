import * as path from 'path';
// eslint-disable-next-line node/no-unpublished-import
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
  },
};

export default config;
