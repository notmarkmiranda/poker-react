const React = require('react')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
import './App.css';

const Layout = require('./components/Layout')
const Landing = require('./components/Landing')

const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
        </Route>
      </Router>
    );
  }
})

module.exports = App
