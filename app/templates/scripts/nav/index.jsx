/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var HighlightedLink = React.createClass({
  getDefaultProps: function (){
    return {
      activeClassName : 'active'
    }
  },
  render: function() {
    var className = this.isActive() ? className = this.props.activeClassName : "";
    return (
      <li className={className} onClick={this._changeLocation}>
        <a>{this.props.children}</a>
      </li>
      );
  },
  _changeLocation: function (event) {
    event.stopPropagation();
    if (!this.isActive()) {
      window.history.pushState({}, '', this.props.href);
      this._owner._update();
    }
  },
  isActive: function() {
    return window.location.pathname === this.props.href
  },
})

var NavButton = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  componentDidMount: function () {
    window.addEventListener('popstate', this._update);
  },
  componentWillUnmount: function () {
    window.removeEventListener('popstate', this._update);
  },
  render: function () {
    var links = this.props.links.map(function (element, index) {
      return (
        <HighlightedLink key={"links" + index} href={element.href}>
          {element.title}
        </HighlightedLink>
      );
      })
    return (
    <ul className="nav nav-pills pull-right">
      {links}
    </ul>
    );
  },
  _update: function (route) {
    this.props.action && this.props.action(route)
    this.forceUpdate()
  }
});

module.exports = NavButton;