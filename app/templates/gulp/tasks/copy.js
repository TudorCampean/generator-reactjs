var gulp = require('gulp')
var changed = require('gulp-changed')

var scriptsSrc = './app/scripts/**/*.js'
var scriptsDest = 'compiled'

var fontsSrc = './app/fonts/**'
var fontsDest = 'dist/fonts'

gulp.task('copy.scripts', function () {
  return gulp.src(scriptsSrc)
    .pipe(changed(scriptsDest))
    .pipe(gulp.dest(scriptsDest));
});

gulp.task('copy.fonts', function () {
  return gulp.src(fontsSrc)
    .pipe(gulp.dest(fontsDest));
});
