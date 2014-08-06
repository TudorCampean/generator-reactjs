/*jshint indent: 2, node: true, nomen: true, browser: true*/

global.React = require('react');
exports.react = global.React

global._ = require('lodash');

if (typeof Promise === 'undefined') {
  global.Promise = require('es6-promise').Promise;
}
