// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('dist', function (callback) {
  global.isDistribution = true;
  runSequence(['build'], ['copyDist'], ['usemin'], ['serveDist'],
    callback);
});
