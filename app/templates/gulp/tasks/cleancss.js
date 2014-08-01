var gulp = require('gulp')
var handleErrors = require('../util/handleErrors')
var rimraf = require('gulp-rimraf');

gulp.task('cleancss', function () {
  return gulp.src('dist/css/**/*.css*', {
      read: false
    })
    .pipe(rimraf({
      force: true
    }))
    .on('error', handleErrors)
});
