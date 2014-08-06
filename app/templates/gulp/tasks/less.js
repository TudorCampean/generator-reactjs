var handleErrors = require('../util/handleErrors');

const DEBUG = "debug/css"

gulp.task('less', function () {
  return gulp.src(['./app/less/main.less'])
    .pipe($.sourcemaps.init())
    .pipe($.less({
      strictMath: true
    }).on('error', handleErrors))
    .pipe($.sourcemaps.write('maps'))
    .pipe(gulp.dest(DEBUG))
});
