###* @jsx React.DOM ###

App = require('../../app/jsx/app.jsx')

module.exports = () ->
  ReactTestUtils = Render = Simulate = null
  
  beforeEach () ->
    ReactTestUtils = React.addons.TestUtils
    Render = ReactTestUtils.renderIntoDocument
    Simulate = ReactTestUtils.Simulate

  it 'Check Text Assignment', () ->
    app = `<App />`
    Render app

    expect(app.refs.p).to.exist
    expect(app.refs.p.getDOMNode().innerHTML).to.equal 'Always a pleasure scaffolding your apps.'
  
  it 'Responds to click', () ->
    app = `<App />`
    Render app

    Simulate.click app.refs.button.getDOMNode()
    expect(app.refs.p.getDOMNode().innerHTML).to.equal '.sppa ruoy gnidloffacs erusaelp a syawlA'
    #abnormal behaviour might be fixed
    Simulate.click app.refs.button
    expect(app.refs.p.getDOMNode().innerHTML).to.equal '.sppa ruoy gnidloffacs erusaelp a syawlA'