var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  library: 'LibName',
  libraryTarget: 'umd',
  filename: 'test.js',
  path: './dist'
};
options.externals = {
  vue: 'Vue'
};
module.exports = options;
