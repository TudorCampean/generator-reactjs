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

ReactGenerator.prototype.welcome = function welcome() {
  // welcome message
  console.log(this.yeoman);
  console.log('Out of the box I include HTML5 Boilerplate, ReactJS and Bootstrap');
};

ReactGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js','Gruntfile.js');
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

ReactGenerator.prototype.h5bp = function h5bp() {
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
};

ReactGenerator.prototype.mainStylesheet = function mainStylesheet() {
  var css = 'styles/main.less';
  this.copy(css, 'app/' + css);
};

ReactGenerator.prototype.writeIndex = function writeIndex() {
  this.copy('index.html', 'app/index.html');
};

ReactGenerator.prototype.browserify = function browserify() {
  this.copy('jsx/app.jsx', 'app/jsx/app.jsx');
  this.copy('jsx/main.jsx', 'app/jsx/main.jsx');
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
