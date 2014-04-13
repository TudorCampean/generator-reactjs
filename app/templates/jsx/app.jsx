/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

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
      /* jshint ignore:start */
      <div>
        <p ref="p" className="lead">{this.state.message}</p>
        <p>
          <button
            type="button"
            className="btn btn-success"
            ref="button"
            onClick={this.reverse}>
            <span className="glyphicon glyphicon-refresh"></span>
              Click me!
          </button>
        </p>
      </div>
      /* jshint ignore:end */
	);
  }
});

