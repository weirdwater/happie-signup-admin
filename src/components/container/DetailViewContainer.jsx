import React from 'react'
import {Link} from 'react-router-dom'
import base from '../../base'

class DetailViewContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      participant: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.state.id}`, {
      context: this,
      state: 'participant'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  render() {

    const noData = Object.keys(this.state.participant).length === 0

    if (noData) {
      return (
        <div>
          <h1>Geen aanmelding gevonden voor {this.state.id}</h1>
          <h2><Link to="/" >Terug naar overzicht</Link></h2>
        </div>
      )
    }

    const {participant} = this.state

    return (
      <div>
        <h1>{participant.signup.name} {participant.signup.surnameprefix} {participant.signup.surname}</h1>
      </div>
    )
  }
}

export default DetailViewContainer