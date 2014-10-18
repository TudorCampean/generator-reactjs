/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var React = require('react');
var Reverter = require('./reverter');
var Nav = require('./nav');

React.renderComponent(
  <Reverter />,
  document.getElementById('reverter')
);

React.renderComponent(
  <Nav links={links} />,
  document.getElementById('navigation')
)