/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp, $ */

var handleErrors = require('../util/handleErrors');

var DEST = 'compiled';

gulp.task('react', function () {
  return gulp.src('app/scripts/**/*.jsx')
    .pipe($.changed(DEST, {
      extension: '.js'
    }))
    .pipe($.react({
      harmony: true
    }).on('error', handleErrors))
    .pipe(gulp.dest(DEST));
});
