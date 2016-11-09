const React = require('react')
const Header = require('./Header')
const Request = require('superagent')

const Landing = React.createClass({
  getInitialState () {
    return {
      participants: []
    }
  },
  componentWillMount () {
    const url = "http://pokerseason.herokuapp.com/api/v1/participants"
    Request.get(url).then((response) => {
      this.setState({
        participants: response.body
      })
    })
  },

  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          Landing!
        </div>
      </div>
    )
  }
})

module.exports = Landing
