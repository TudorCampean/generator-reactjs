/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function (title) {
    startTime = process.hrtime();
    gutil.log('Running', gutil.colors.green(title || "'bundle'") + '...');
  },

  end: function (title) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Finished', gutil.colors.green(title || "'bundle'"), 'in', gutil.colors.yellow(prettyTime));
  }
};
