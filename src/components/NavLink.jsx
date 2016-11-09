const React = require('react')
const { Link } = require('react-router')

const NavLink = (props) => (
  <li className='nav-item'>
    <Link to={props.path} className='nav-link'>{props.title}</Link>
  </li>
)

module.exports = NavLink
