/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

var app = require('./app.jsx');

React.renderComponent(
  /* jshint ignore:start */
  <app />,
  document.getElementById('app')
  /* jshint ignore:end */
);
