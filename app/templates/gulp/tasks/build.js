// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(['clean'],['react', 'copyExtra', 'less'], [ 'browserify'],
    callback);
});
