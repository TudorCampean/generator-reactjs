/*jslint indent: 2, node: true, nomen: true */
'use strict';
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');


var ReactGenerator = module.exports = function ReactGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  options['test-framework'] = this.testFramework;

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', {
    as: 'app',
    options: {
      options: {
        'skip-install': options['skip-install-message'],
        'skip-message': options['skip-install']
      }
    }
  });

  this.options = options;
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactGenerator, yeoman.generators.Base);

ReactGenerator.prototype.askFor = function askFor() {
  var cb = this.async(), prompts = [];

  // welcome message
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
    console.log('Out of the box I include HTML5 Boilerplate');
  }

  prompts = [
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [
        {
          name: 'React Addons',
          value: 'reactAddons',
          checked: true
        }, {
          name: 'Modernizr',
          value: 'includeModernizr',
          checked: true
        }, {
          name: 'Sass with Compass',
          value: 'includeCompass',
          checked: true
        }, {
          name: 'Bootstrap',
          value: 'includeBootstrap',
          checked: true
        }
      ]
    }, {
      type: 'list',
      name: 'depManagement',
      message: 'Would you like to include a dependency management tool?',
      choices: [
        {
          name: 'Browserify',
          value: 'browserify'
        }, {
          name: 'RequireJS',
          value: 'require'
        }, {
          name: 'No',
          value: 'none'
        }
      ]
    }
  ];

  this.prompt(prompts, function (answers) {
    var features = answers.features,
      depManangement = answers.depManagement;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.includeCompass = hasFeature('includeCompass');
    this.includeBootstrap = hasFeature('includeBootstrap');
    this.includeModernizr = hasFeature('includeModernizr');
    this.reactAddons = hasFeature('reactAddons');
    this.requireJS = (depManangement === 'require');
    this.browserify = (depManangement === 'browserify');
    // this.cssPreprocessor = answers.cssPreprocessor;
    cb();
  }.bind(this));
};

ReactGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

ReactGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/jsx');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
};

ReactGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

ReactGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

ReactGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

ReactGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

ReactGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

ReactGenerator.prototype.h5bp = function h5bp() {
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
  this.copy('htaccess', 'app/.htaccess');
};

ReactGenerator.prototype.mainStylesheet = function mainStylesheet() {
  var css = 'styles/main.' + (this.includeCompass ? 's' : '') + 'css';
  this.copy(css, 'app/' + css);
};

ReactGenerator.prototype.writeIndex = function writeIndex() {
  this.copy('index.html', 'app/index.html');
};

ReactGenerator.prototype.requirejs = function requirejs() {
  if (this.requireJS) {
    this.copy('jsx/requirejs/app-require.jsx', 'app/jsx/app.jsx');
    this.copy('jsx/requirejs/main-require.jsx', 'app/jsx/main.jsx');
  } else if (this.browserify) {
    this.copy('jsx/browserify/app-browserify.jsx', 'app/jsx/app.jsx');
    this.copy('jsx/browserify/main-browserify.jsx', 'app/jsx/main.jsx');
  } else {
    this.copy('jsx/main.jsx', 'app/jsx/main.jsx');
  }
};

ReactGenerator.prototype.install = function () {
  if (this.options['skip-install']) {
    return;
  }

  var done = this.async();
  this.installDependencies({
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done
  });
};