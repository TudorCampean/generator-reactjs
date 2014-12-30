var handleErrors = require('../util/handleErrors');
var config = require('../config');

gulp.task('react', function () {
  return gulp.src(config.react.sources)
    .pipe($.changed(config.react.dest, {
      extension: '.js'
    }))
    .pipe($.react({
      harmony: true
    }).on('error', handleErrors))
    .pipe(gulp.dest(config.react.dest));
});
