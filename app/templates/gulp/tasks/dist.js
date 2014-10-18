/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */

// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('dist', function (callback) {
  runSequence(['build', 'images.dist', 'copy.fonts.dist'], ['usemin'],
    callback);
});
