'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js')();

gulp.task('move', function() {
  return gulp
    .src([config.dev + '**/*.html', config.dev + '**/*.txt'])
    .pipe(gulp.dest(config.dist));
});
