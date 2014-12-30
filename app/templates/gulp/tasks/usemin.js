var config = require('../config');

gulp.task('usemin', function() {
  gulp.src(config.dist.sources)
    .pipe($.usemin({
      css: [$.rev()],
      html: [$.minifyHtml()],
      js: [$.uglify(), $.rev()]
    }))
    .pipe(gulp.dest(config.dist.dest));
});
