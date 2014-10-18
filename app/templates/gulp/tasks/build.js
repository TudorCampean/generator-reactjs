/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global gulp */

// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(['react', 'copy.scripts', 'copy.html', 'copy.fonts'], ['less', 'browserify'],
    callback);
});
