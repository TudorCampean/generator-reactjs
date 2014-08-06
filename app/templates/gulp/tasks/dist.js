// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('dist', function (callback) {
  runSequence(['build', 'images.dist', 'copy.fonts.dist'], ['usemin'],
    callback);
});
