'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
}

var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    var parts = this.name.split('/')
    this.componentName = parts.slice(-1)[0];
    this.componetPathTest = "../".repeat(1+parts.length) + 'app/jsx/' + this.name + '.jsx'
    this.copy('component.js', 'app/jsx/' + this.name + '.jsx');
    this.template('componentSpec.coffee', 'test/specs/' + this.name + 'Spec.coffee');
    
    // tests must be added to test/test.coffe and required there to work with the
    // karma-browserify
    
    var test = "\ndescribe '" + this.name + " Test', require('./specs/" + this.name + "Spec.coffee')";
    if (fs.readFileSync('test/test.coffee','UTF-8').indexOf(test) < 0)
      fs.appendFileSync('test/test.coffee', test);
  }
});

module.exports = ComponentGenerator;