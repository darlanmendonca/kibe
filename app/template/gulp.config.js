'use strict';

module.exports = function () {
  var config = {
    dev: './src/',
    js: './src/js/',
    mainjs: 'main.js',
    styl: './src/styl/',
    sprites: './src/img/sprites/',
    dist: './dist/',
    img: './dist/img/',
    browserSync: require('browser-sync').create()
  };

  return config;
};
