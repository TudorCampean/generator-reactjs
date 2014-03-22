/** @jsx React.DOM */
/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global React, require */

'use strict';
module.exports = React.createClass({
  getInitialState: function () {
    return {
      message : 'Always a pleasure scaffolding your apps.'
    };
  },
  reverse: function (event) {
	this.setState({
      message : this.state.message.split('').reverse().join('')
    });
  },
  render: function () {
	return (
      <div>
        <p className="lead">{this.state.message}</p>
        <p>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.reverse}>
              Click me!
          </button>
        </p>
      </div>
	);
  }
});
