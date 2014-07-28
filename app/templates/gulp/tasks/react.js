var gulp          = require('gulp')
var notify        = require('gulp-notify')
var changed       = require('gulp-changed')
var react         = require('gulp-react')
var sourcemaps    = require('gulp-sourcemaps')
var handleErrors  = require('../util/handleErrors')

const DEST = 'compiled/scripts'

gulp.task('react', function() {
  return gulp.src('src/scripts/**/*.jsx')
  .pipe(changed(DEST, {extension: '.js'}))
  .pipe(react({
    harmony: true
  }).on('error', handleErrors))
  .pipe(gulp.dest(DEST))
});