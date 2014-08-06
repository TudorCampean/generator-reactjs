var handleErrors = require('../util/handleErrors')

const DEST = 'compiled'

gulp.task('react', function () {
  return gulp.src('app/scripts/**/*.jsx')
    .pipe($.changed(DEST, {
      extension: '.js'
    }))
    .pipe($.react({
      harmony: true
    }).on('error', handleErrors))
    .pipe(gulp.dest(DEST))
});
