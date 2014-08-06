gulp.task('watch', ['setWatch', 'browserSync'], function () {
  gulp.watch('app/scripts/**/*.jsx', ['react']);
  gulp.watch('app/scripts/**/*.js', ['copy.scripts']);
  gulp.watch('app/less/**/*.less',['less']);
  gulp.watch('app/images/**', ['images']);
  gulp.watch('app/**/*.html', ['copy.html']);
  // Note: The browserify task handles js recompiling with watchify
});
