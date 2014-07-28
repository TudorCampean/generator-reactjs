var gulp = require('gulp');

gulp.task('build', ['react', 'cleancss', 'less', 'images', 'copy', 'browserify']);
