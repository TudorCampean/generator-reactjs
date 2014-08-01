var gulp = require('gulp')
var changed = require('gulp-changed')
var react = require('gulp-react')
var handleErrors = require('../util/handleErrors')

const DEST = 'compiled'

gulp.task('react', function () {
  return gulp.src('app/scripts/**/*.jsx')
    .pipe(changed(DEST, {
      extension: '.js'
    }))
    .pipe(react({
      harmony: true
    }).on('error', handleErrors))
    .pipe(gulp.dest(DEST))
});
