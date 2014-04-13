# Karma configuration
# Generated on Sun Apr 06 2014 02:49:37 GMT+0300 (GTB, oră de vară)

module.exports = (config) ->
  config.set

    # base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    # frameworks to use
    # available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    # list of files / patterns to load in the browser
    files: [
      'app/bower_components/react/react-with-addons.js'
      'test/**/*.coffee'
    ],

    # list of files to exclude
    exclude: [
      
    ],

    # preprocess matching files before serving them to the browser
    # available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.coffee': ['browserify']
    },


    # test results reporter to use
    # possible values: 'dots', 'progress'
    # available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    # browserify setup
    browserify:
      extensions: ['.coffee']
      transform: [
        'coffeeify',
        [ 'reactify',{'es6': true}]
      ]
      watch: true   # Watches dependencies only (Karma watches the tests)

    # web server port
    port: 9876,

    # enable / disable colors in the output (reporters and logs)
    colors: true,

    # level of logging
    # possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    # enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    # start these browsers
    # available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','Firefox'],


    # Continuous Integration mode
    # if true, Karma captures browsers, runs the tests and exits
    singleRun: false
