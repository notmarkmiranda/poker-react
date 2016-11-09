const React = require('react')
const { Navbar, Nav } = require('react-bootstrap')

const NavLink = require('./NavLink')
const Header = (props) => (
  <Navbar fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href='#'><span>POKER</span>RANK</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavLink path='/players' title='Players' />
    <NavLink path='/games' title='Games' />
    <NavLink path='/seasons' title='Seasons' />
  </Nav>
</Navbar>
)

module.exports = Header
