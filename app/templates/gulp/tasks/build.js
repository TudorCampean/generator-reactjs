var gulp = require('gulp');

// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(['react', 'copy.scripts', 'copy.html', 'copy.fonts'], ['less', 'browserify', 'images'],
    callback);
});
