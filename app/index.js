/*jslint indent: 2, node: true, nomen: true */
'use strict';
var yosay = require('yosay');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function () {

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          skipMessage: this.options['skip-install-message']
        });
      }
    });
  },

  welcome: function welcome() {
    // welcome message
    this.log(yosay('Out of the box I include HTML5 Boilerplate, ReactJS and Bootstrap'));
  },

  files: function files() {
    // base
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');

    // gulpfile and extras
    this.template('Gulpfile.js','Gulpfile.js');
    this.bulkDirectory('gulp', 'gulp');

    // app directory
    this.mkdir('app');

    // h5bp
    this.copy('favicon.ico', 'app/favicon.ico');
    this.copy('404.html', 'app/404.html');
    this.copy('robots.txt', 'app/robots.txt');
    // index.html
    this.copy('index.html', 'app/index.html');

    // less style
    this.bulkDirectory('less', 'app/less');

    // scripts
    this.bulkDirectory('scripts', 'app/scripts');

    // fonts
    this.bulkDirectory('fonts', 'app/fonts');

    //images
    this.bulkDirectory('images', 'app/images');


    // @ToDO test files
    // this.copy('karma.conf.coffee', 'karma.conf.coffee');
    // this.copy('testTemplate/test.coffee', 'test/test.coffee');
    // this.copy('testTemplate/specs/appSpec.coffee', 'test/specs/appSpec.coffee');
  },
});
