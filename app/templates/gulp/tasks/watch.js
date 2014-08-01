var gulp = require('gulp');
// temporary fix while new sysytem for tasks is built
var runSequence = require('run-sequence');

gulp.task('watch', ['setWatch', 'browserSync'], function () {
  gulp.watch('app/scripts/**/*.jsx', ['react']);
  gulp.watch('app/scripts/**/*.js', ['copy.scripts']);
  gulp.watch('app/less/**/*.less', function () {
    runSequence('cleancss', 'less');
  });
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/htdocs/**', ['copy']);
  // Note: The browserify task handles js recompiling with watchify
});
