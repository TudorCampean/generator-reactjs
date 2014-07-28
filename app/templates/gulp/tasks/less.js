var gulp = require('gulp'),
  notify = require('gulp-notify'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  rev = require('gulp-rev'),
  handleErrors = require('../util/handleErrors'),
  gulpFilter = require('gulp-filter'),
  csso = require('gulp-csso'),
  minifyCSS = require('gulp-minify-css')

gulp.task('less', function () {
  var cssFilter = gulpFilter('**/*.css');
  return gulp.src('src/less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less().on('error', handleErrors))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssFilter)
    .pipe(minifyCSS().on('error', handleErrors))
    .pipe(rev())
    .pipe(gulp.dest('dist/css')) // write rev'd assets to build dir
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/css'))
});