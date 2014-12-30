var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function () {
  gulp.watch(config.react.sources, ['react']);
  gulp.watch(config.less.sources,['less']);
  gulp.watch(config.extra.sources, ['copyExtra']);
  // Note: The browserify task handles js recompiling with watchify
});
