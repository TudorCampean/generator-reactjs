var del = require('del');
var config = require('../config');

var cleanSrc = [config.debugDestination, config.dist.dest, config.react.dest];

gulp.task('clean', function (cb) {
  del(cleanSrc, cb);
});
