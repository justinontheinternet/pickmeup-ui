var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300
  },
}).listen(3001, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});
