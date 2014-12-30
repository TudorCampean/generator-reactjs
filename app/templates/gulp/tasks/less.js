var LessPluginCleanCSS = require("less-plugin-clean-css"),
cleancss = new LessPluginCleanCSS({
  aggressiveMerging : false,
  advanced: false
});

var handleErrors = require('../util/handleErrors');
var config = require('../config');

gulp.task('less', function () {
  if (global.isDistribution){
    return gulp.src(config.less.main)
      .pipe($.less({
        strictMath: true,
        plugins: [cleancss]
      }).on('error', handleErrors))
      .pipe(gulp.dest(config.less.dest));
  }
  return gulp.src(config.less.main)
    .pipe($.sourcemaps.init())
    .pipe($.less({
      strictMath: true,
      plugins: [cleancss]
    }).on('error', handleErrors))
    .pipe($.sourcemaps.write('maps'))
    .pipe(gulp.dest(config.less.dest));
});
