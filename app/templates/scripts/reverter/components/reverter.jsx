/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var revert = require('../services/revert.js')

module.exports = React.createClass({
  getInitialState: function () {
    return {
      message : 'Always a pleasure scaffolding your apps.'
    };
  },
  reverse: function () {
    this.setState({
      message : revert(this.state.message)
    });
  },
  render: function () {
    return (
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
      );
  }
});
