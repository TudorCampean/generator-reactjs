/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var scriptsSrc = './app/scripts/**/*.js';
var scriptsDest = 'compiled';

var fontsSrc = './app/fonts/**';
var fontsDest = 'debug/fonts';
var fontsDist = 'build/fonts';

var htmlSrc = './app/**/*.html';
var htmlDest = 'debug';

gulp.task('copy.scripts', function () {
  return gulp.src(scriptsSrc)
    .pipe($.changed(scriptsDest))
    .pipe(gulp.dest(scriptsDest));
});

gulp.task('copy.fonts', function () {
  return gulp.src(fontsSrc)
    .pipe(gulp.dest(fontsDest));
});

gulp.task('copy.html', function () {
  return gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDest));
});

gulp.task('copy.fonts.dist', function () {
  return gulp.src(fontsSrc)
    .pipe(gulp.dest(fontsDist));
});
