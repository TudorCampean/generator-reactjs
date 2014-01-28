/** @jsx React.DOM */
/*jslint indent: 2, node: true, nomen: true */
/*global React, define */
define([], function () {
  'use strict';
  return React.createClass({
    getInitialState: function () {
	  return {message: 'Click me!'};
    },
	reverse: function (event) {
	  this.setState({
        message: this.state.message.split('').reverse().join('')
      });
	},
	render: function () {
	  return (
		<h1 onClick={this.reverse}>{this.state.message}</h1>
	   );
    }
  });
});
