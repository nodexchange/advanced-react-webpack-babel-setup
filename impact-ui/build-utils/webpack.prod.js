const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      API_PORT: JSON.stringify(process.env.API_PORT),
      API_IP: JSON.stringify(process.env.API_IP),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
