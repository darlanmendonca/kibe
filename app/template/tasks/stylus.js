'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js')();
var plumber = require('gulp-plumber');
var koutoSwiss = require('kouto-swiss');
var prefixer = require('autoprefixer-stylus');
var jeet = require('jeet');
var rupture = require('rupture');
var stylus = require('gulp-stylus');

var options = {
  use:[
    koutoSwiss(),
    prefixer(),
    jeet(),
    rupture()
  ],
  compress: true
};

// Compile Stylus
gulp.task('stylus', function () {
    return gulp.src(config.styl + 'styles.styl')
    .pipe(plumber())
    .pipe(stylus(options))
    .pipe(gulp.dest(config.dist + 'css/'));
});
