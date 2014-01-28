/** @jsx React.DOM */
/*jslint indent: 2, node: true, nomen: true */
/*global React, require */
'use strict';

require.config({
  baseUrl: 'scripts',
  paths: {
    react: 'script/react.min'
  },
  shim: {
    react: {
	  exports: 'React'
	}
  }
});

require(['app'], function (App) {
  // use app here
  React.renderComponent(
    <App />,
	document.getElementById('app')
	);
});