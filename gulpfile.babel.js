'use strict';

const gulp = require('gulp'),
  istanbul = require('gulp-istanbul'),
  livereload = require('gulp-livereload'),
  jasmine = require('gulp-jasmine'),
  babel = require('gulp-babel'),
  webpack = require('gulp-webpack');

gulp.task('default', ['bundle']);

gulp.task('transpile', () => {
    return gulp.src(['./app.js','./server/models/index.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle', () => {
  return gulp.src('./index.js')
    .pipe(webpack({
      entry: {
        app: './index1.js',
        test: './index.js',
      },
      output: {
        filename: '[name].js',
      },
    }))
    .pipe(gulp.dest('dist/'));
});
