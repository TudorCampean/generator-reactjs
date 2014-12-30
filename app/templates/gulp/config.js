// destination for files for testing
var DEBUG_DESTINATION = "debug";

var less = {
  sources: 'app/less/**/*.less',
  main: ['./app/less/main.less'],
  dest: DEBUG_DESTINATION + '/css'
};

var react = {
  sources: 'app/scripts/**/*.js*',
  dest: 'compiled'
};

var extra = {
  sources: [
    'app/**/*.*',
    '!' + react.sources,
    '!' + less.sources
  ],
  dest : DEBUG_DESTINATION
};

var dist = {
  sources: DEBUG_DESTINATION + '/**/*.html',
  extra: [
    DEBUG_DESTINATION + '/**/*.*',
    '!' + DEBUG_DESTINATION + '/**/*.js',
    '!' + DEBUG_DESTINATION + '/**/*.css',
    '!' + DEBUG_DESTINATION + '/*.html'
  ],
  dest: 'dist'
};

var browserify = {
  files: [
    {
      src: ['./' + react.dest + '/vendor.js'],
      dest: 'vendor.js',
      vendor: true
    },
    {
      src: ['./' + react.dest + '/app.js'],
      dest: 'main.js'
    }
  ],
  dest: './' + DEBUG_DESTINATION + '/scripts/'
};

module.exports = {
  debugDestination: DEBUG_DESTINATION,
  less: less,
  react: react,
  extra: extra,
  dist: dist,
  browserify: browserify
}
