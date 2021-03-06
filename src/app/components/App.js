var React = require('react');
var { POLL_FREQUENCY } = require('../Constants.js');
var BuildsStore = require('../stores/BuildsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');
var LightGrid = require('./LightGrid');

var App = React.createClass({
  getInitialState () {
    return BuildsStore.getState();
  },

  componentDidMount () {
    BuildsStore.addChangeListener(this.handleStoreChange);
    window.setInterval(ViewActionCreators.loadBuilds, POLL_FREQUENCY);
  },

  componentWillUnmount () {
    BuildsStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(BuildsStore.getState());
  },

  render () {
    return (
        <div className='app'>
        <h1 className='header'>Jenkins Build Light View</h1>
        <LightGrid { ...this.state }/>
        </div>
    );
  }
});

module.exports = App;

