'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var url = require('url');

/* jshint -W106 */
var proxy = process.env.http_proxy || process.env.HTTP_PROXY || process.env.https_proxy ||
process.env.HTTPS_PROXY || null;
/* jshint +W106 */
var githubOptions = {
  version: '3.0.0'
};

if (proxy) {
  var proxyUrl = url.parse(proxy);
  githubOptions.proxy = {
    host: proxyUrl.hostname,
    port: proxyUrl.port
  };
}

var GitHubApi = require('github');
var github = new GitHubApi(githubOptions);

if (process.env.GITHUB_TOKEN) {
  github.authenticate({
    type: 'oauth',
    token: process.env.GITHUB_TOKEN
  });
}
var emptyGithubRes = {
  name: '',
  email: '',
  html_url: ''
};

var githubUserInfo = function (name, cb, log) {
  github.user.getFrom({
    user: name
  }, function (err, res) {
    if (err) {
      log.error('Cannot fetch your github profile. Make sure you\'ve typed it correctly.');
      res = emptyGithubRes;
    }
    cb(JSON.parse(JSON.stringify(res)));
  });
};

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },


  prompting: {
    askFor: function () {
      var done = this.async();

      this.log(yosay('Create your own ' + chalk.blue('ReactJS') + ' application!'));

      var prompts = [{
        name: 'githubUser',
        message: 'Would you mind telling me your username on GitHub?',
        default: 'someuser'
      }];

      this.prompt(prompts, function (props) {
        this.githubUser = props.githubUser;

        done();
      }.bind(this));
    },
  },

  configuring: {
    userInfo: function () {
      var done = this.async();

      githubUserInfo(this.githubUser, function (res) {
        /*jshint camelcase:false */
        this.realname = res.name;
        this.email = res.email;
        this.githubUrl = res.html_url;
        done();
      }.bind(this), this.log);
    }
  },

  writing: {
    projectfiles: function () {
      this.template('_package.json', 'package.json');
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
      this.copy('_travis.yml', '.travis.yml');
      this.template('README.md');
    },

    gitfiles: function () {
      this.copy('gitattributes', '.gitattributes');
      this.copy('gitignore', '.gitignore');
    },

    gulp: function(){
      this.copy('Gulpfile.js','Gulpfile.js');
      this.bulkDirectory('gulp', 'gulp');
    },

    app: function(){

      // app directory
      this.mkdir('app');

      // h5bp
      this.copy('favicon.ico', 'app/favicon.ico');
      this.copy('404.html', 'app/404.html');
      this.copy('robots.txt', 'app/robots.txt');
      // index.html
      this.template('index.html', 'app/index.html');

      // less style
      this.bulkDirectory('less', 'app/less');

      // scripts
      this.bulkDirectory('scripts', 'app/scripts');

      //images
      this.bulkDirectory('images', 'app/images');
    }

    // @ToDO test files
    // this.copy('karma.conf.coffee', 'karma.conf.coffee');
    // this.copy('testTemplate/test.coffee', 'test/test.coffee');
    // this.copy('testTemplate/specs/appSpec.coffee', 'test/specs/appSpec.coffee');
  },
  install: function () {
    var howToInstall =
      '\nAfter running ' + chalk.yellow.bold('npm i') +
      ', inject your front end dependencies by running ' +
      chalk.yellow.bold('gulp wiredep') + '.';

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }

    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
