const React = require('react')
const { Navbar, Nav } = require('react-bootstrap')

const NavLink = require('./NavLink')

const Layout = (props) => (
  <div className='main-container'>
    {props.children}
  </div>
)

module.exports = Layout
