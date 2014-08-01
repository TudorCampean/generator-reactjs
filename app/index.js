/*jslint indent: 2, node: true, nomen: true */
'use strict';
var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');


var ReactGenerator = module.exports = function ReactGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.options = options;
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactGenerator, yeoman.generators.Base);

ReactGenerator.prototype.welcome = function welcome() {
  // welcome message
  console.log(this.yeoman);
  console.log('Out of the box I include HTML5 Boilerplate, ReactJS and Bootstrap');
};

ReactGenerator.prototype.gulpfile = function gruntfile() {
  this.template('Gulpfile.js','Gulpfile.js');
  this.bulkDirectory('gulp', 'gulp')
};

ReactGenerator.prototype.app = function app() {
  this.mkdir('app');
};

ReactGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

ReactGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

ReactGenerator.prototype.h5bp = function h5bp() {
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
};

ReactGenerator.prototype.writeIndex = function writeIndex() {
  this.copy('index.html', 'app/index.html');
};

ReactGenerator.prototype.styles = function styles() {
  this.bulkDirectory('less', 'app/less')
};

ReactGenerator.prototype.scripts = function scripts() {
  this.bulkDirectory('scripts', 'app/scripts')
};

ReactGenerator.prototype.fonts = function fonts() {
  this.bulkDirectory('fonts', 'app/fonts')
};

ReactGenerator.prototype.images = function images() {
  this.bulkDirectory('images', 'app/images')
};

ReactGenerator.prototype.testFiles = function testFiles() {
  this.copy('karma.conf.coffee', 'karma.conf.coffee');
  this.copy('testTemplate/test.coffee', 'test/test.coffee');
  this.copy('testTemplate/specs/appSpec.coffee', 'test/specs/appSpec.coffee');
};

ReactGenerator.prototype.install = function () {
  if (this.options['skip-install']) {
    return;
  }

  var done = this.async();
  this.installDependencies({
    bower: false,
    npm: true,
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done
  });
};
