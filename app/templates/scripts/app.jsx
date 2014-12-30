/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var Reverter = require('./reverter');

React.render(
  <Reverter />,
  document.getElementById('reverter')
);
