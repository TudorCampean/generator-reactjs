var browserSync = require('browser-sync');

gulp.task('browserSync', ['build'], function () {
  browserSync({
    server: {
      baseDir: ['debug'],
    },
    files :[
      'debug/**'
    ],
    watchOptions: {
      debounceDelay: 1000
    }
  });
});

gulp.task('serveDist', function () {
  browserSync({
    server: {
      baseDir: ['dist'],
    },
  });
});
