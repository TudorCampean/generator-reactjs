/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

var reverter = require('../components/reverter');

React.renderComponent(
  /* jshint ignore:start */
  <reverter />,
  document.getElementById('reverter')
  /* jshint ignore:end */
);
