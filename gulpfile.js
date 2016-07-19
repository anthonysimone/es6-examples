"use strict";

/************************
 * SETUP
 ************************/

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');

/************************
 * CONFIGURATION
 ************************/
var autoReload = true;
var scriptsSrc = [
  './js/src/*.js',
  './js/examples/*.js'
];

/************************
 * TASKS
 ************************/

gulp.task('scripts', function() {
  gulp.src(scriptsSrc)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js/dist/'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./js/dist/'))
});

gulp.task('watch', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch('./js/src/*.js', ['scripts']);
});

gulp.task('livereload', function() {
  gulp.src(scriptsSrc)
    .pipe(livereload());
});

gulp.task('watch-livereload', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch(scriptsSrc, ['livereload']);
});

gulp.task('default', ['scripts']);
