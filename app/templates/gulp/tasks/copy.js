var config = require('../config');

gulp.task('copyExtra', function () {
  return gulp.src(config.extra.sources)
    .pipe(gulp.dest(config.extra.dest));
});

gulp.task('copyDist', function () {
  return gulp.src(config.dist.extra)
  .pipe(gulp.dest(config.dist.dest));
});
