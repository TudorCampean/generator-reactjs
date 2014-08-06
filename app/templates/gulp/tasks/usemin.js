gulp.task('usemin', function() {
  gulp.src('debug/*.html')
    .pipe($.usemin({
      css: [$.minifyCss(), $.rev()],
      html: [$.minifyHtml()],
      js: [$.uglify(), $.rev()]
    }))
    .pipe(gulp.dest('build/'));
});
