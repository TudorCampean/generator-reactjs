/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');

gulp.task('browserify', function () {

  var destinationDirectory = './debug/scripts/';
  var files = [
    {
      src: ['./compiled/vendor.js'],
      dest: 'vendor.js',
      vendor: true
    },
    {
      src: ['./compiled/reverter/index.js'],
      dest: 'reverter.js'
    },
    {
      src: ['./compiled/app.js'],
      dest: 'main.js'
    },
  ];

  var bundlers = [];

  files.forEach(function (file) {
    var options = {
      // Specify the entry point of your app
      entries: file.src,
      // Add file extentions to make optional in your requires
      extensions: ['.js'],
      cache: {},
      packageCache: {},
      fullPaths: false,
    }
    var b = browserify(options);
    if (file.vendor){
      b.require('react', {expose: 'react'})
    } else {
      b.external('react')
    }
    b.dest = file.dest;
    bundlers.push(b);
  });

  function _bundle(bundler) {
    // Log when bundling starts
    bundleLogger.start("'" + bundler.dest + "'");

    bundler
    .bundle()
    // Report compile errors
    .on('error', handleErrors)
    // Use vinyl-source-stream to make the
    // stream gulp compatible. Specifiy the
    // desired output filename here.
    .pipe(source(bundler.dest))
    // Specify the output destination
    .pipe(gulp.dest(destinationDirectory))
    // Log when bundling completes!
    .on('end', function () {
      bundleLogger.end("'" + bundler.dest + "'");
    });
  }

  var bundle = function () {
    bundlers.forEach(_bundle);
  };

  if (global.isWatching) {
    bundlers.forEach(function (bundler) {
      watchify(bundler);
    });
  }



  if (global.isWatching) {
    // Rebundle with watchify on changes.
    bundlers.forEach(function (bundler) {
      bundler.on('update', function () {
        _bundle(bundler)
      });
    });
  }

  return bundle();
});
