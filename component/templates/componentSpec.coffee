###* @jsx React.DOM ###

<%= componentName %> = require('<%= componetPathTest %>')

module.exports = () ->
  ReactTestUtils = Render = Simulate = null
  
  beforeEach () ->
    ReactTestUtils = React.addons.TestUtils
    Render = ReactTestUtils.renderIntoDocument
    Simulate = ReactTestUtils.Simulate

  it "Check Text Assignment", () ->
    <%= componentName %> = `<<%= componentName %> />`
    Render <%= componentName %>
    
    expect(<%= componentName %>).to.exist
    expect(<%= componentName %>.getDOMNode().innerHTML).to.equal 'Hello World'


