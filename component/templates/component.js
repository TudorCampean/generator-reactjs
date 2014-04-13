/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({
  //
  // ### propTypes
  //
  // React.PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
  // for more information [React reusable components](http://facebook.github.io/react/docs/reusable-components.html)
  //
  propTypes : {
  },
  
  //
  // ### mixins
  //
  // The mixins array allows you to use mixins to share behavior among multiple components.
  //
  mixins : [],
  
  //
  // ### statics
  //
  // The statics object allows you to define static methods that can be called on the component class.
  // Methods defined within this block are static, meaning that you can run them before any component 
  // instances are created, and the methods do not have access to the props or state of your components.
  //
  statics : [],
  
  //
  // ### getDefaultProps
  //
  // Invoked once when the component is mounted. 
  // Values in the mapping will be set on this.props if that prop is not specified by the parent component 
  //
  getDefaultProps: function () {
    return {
    };
  },
  
  //
  // ### getInitialState
  //
  // Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
  //
  getInitialState: function () {
    return {
    };
  },

  //
  // ### componentWillMount
  //
  // Invoked once, immediately before the initial rendering occurs. 
  // If you call setState within this method, render() will see the updated state 
  // and will be executed only once despite the state change.
  //
  componentWillMount: function () {
  
  },
  
  //
  // ### componentDidMount
  //
  // Invoked immediately after rendering occurs. 
  // At this point in the lifecycle, the component has a DOM representation which you can access via this.getDOMNode().
  // If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, 
  // or send AJAX requests, perform those operations in this method.
  //
  componentDidMount: function () {
  
  },
  
  //
  // ### componentWillReceiveProps
  //
  // Invoked when a component is receiving new props. 
  // This method is not called for the initial render.
  // Use this as an opportunity to react to a prop transition before render() is called 
  // by updating the state using this.setState().
  // The old props can be accessed via this.props. 
  // Calling this.setState() within this function will not trigger an additional render.
  //
  componentWillReceiveProps: function () {
  
  }, 
  
  //
  // ### shouldComponentUpdate(nextProps, nextState)
  //
  // Invoked before rendering when new props or state are being received. 
  // This method is not called for the initial render or when forceUpdate is used.
  // Use this as an opportunity to return false when you're certain that the transition 
  // to the new props and state will not require a component update.
  //
  shouldComponentUpdate: function (nextProps, nextState) {
    
    // necessary to return true for component to update on changes
    return true;
  }, 
 
   //
  // ### componentWillUpdate(object nextProps, object nextState)
  //
  // Invoked immediately before rendering when new props or state are being received. 
  // This method is not called for the initial render.
  // Use this as an opportunity to perform preparation before an update occurs.
  //
  componentWillUpdate: function (nextProps, nextState) {
  
  },
  
  //
  // ### componentDidUpdate(object prevProps, object prevState)
  //
  // Invoked immediately after updating occurs. 
  // This method is not called for the initial render.
  // Use this as an opportunity to operate on the DOM when the component has been updated.
  //
  componentDidUpdate: function (prevProps, prevState) {
  
  },

  //
  // ### componentWillUnmount
  //
  // Invoked immediately before a component is unmounted from the DOM.
  // Perform any necessary cleanup in this method, such as invalidating timers or 
  // cleaning up any DOM elements that were created in componentDidMount
  //
  componentWillUnmount: function () {
  
  },
  
  //
  // ### render
  // (* required)
  //
  // When called, it should examine this.props and this.state and return a single child component. 
  // This child component can be either a virtual representation of a native DOM component 
  // or another composite component that you've defined yourself.
  //
  render: function () {
    return (
     /*jshint ignore:start */
        <p>Hello World</p>
     /*jshint ignore:end */
    );
  }
});

