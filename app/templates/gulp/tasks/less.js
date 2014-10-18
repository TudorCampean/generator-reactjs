/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');

var DEBUG = "debug/css";

gulp.task('less', function () {
  return gulp.src(['./app/less/main.less'])
    .pipe($.sourcemaps.init())
    .pipe($.less({
      strictMath: true
    }).on('error', handleErrors))
    .pipe($.sourcemaps.write('maps'))
    .pipe(gulp.dest(DEBUG));
});
