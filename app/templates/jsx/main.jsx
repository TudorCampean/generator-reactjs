/** @jsx React.DOM */
/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global Class, React, require */
'use strict';

var app = require('./app.jsx');

React.renderComponent(
  <app />,
  document.getElementById('app')
);
