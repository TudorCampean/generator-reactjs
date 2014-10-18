/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */

var browserSync = require('browser-sync');

gulp.task('browserSync', ['build'], function () {
  browserSync({
    server: {
      baseDir: ['debug'],
      routes: {
        "/bower_components": "./bower_components"
      },
    },
    directory: true
  });
});
