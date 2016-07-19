const ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  library: 'VueFswipe',
  libraryTarget: 'umd',
  filename: 'vue-fswipe.js',
  path: './dist'
};
options.externals = {
  vue: 'Vue'
};
options.plugins = [new ExtractTextPlugin('vue-swipe.css')];
options.vue.loaders.css = ExtractTextPlugin.extract('style', 'css');
module.exports = options;
