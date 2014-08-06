var debug = './debug/images';
var dist = './build/images';

gulp.task('images', function () {
  return gulp.src('./app/images/**')
    .pipe($.changed(debug)) // Ignore unchanged files
    .pipe($.imagemin()) // Optimize
    .pipe(gulp.dest(debug));
});

gulp.task('images.dist', function () {
  return gulp.src('./app/images/**')
    .pipe($.imagemin()) // Optimize
    .pipe(gulp.dest(dist))
});
