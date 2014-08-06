/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
var reverter = require('./reverter');
var about = require('./about');
var Nav = require('./nav');
var Router = require('react-router-component')
var React = require('react')

var Locations = Router.Locations
var Location = Router.Location

var links = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/about',
    title: 'About'
  },
  {
    href: '/contact',
    title: 'Contact'
  }
]
var App = React.createClass({
  render: function() {
    return (
      <Locations hash>
        <Location path="/" handler={reverter} />
        <Location path="/about" handler={about} />
      </Locations>
    )
  }
})

React.renderComponent(
  <App />,
  document.getElementById('reverter')
);

React.renderComponent(
  <Nav links={links} />,
  document.getElementById('navigation')
)