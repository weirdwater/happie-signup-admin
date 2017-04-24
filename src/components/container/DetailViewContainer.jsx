import React from 'react'
import {Link} from 'react-router-dom'
import base from '../../base'
import ParticipantDetails from '../presentational/ParticipantDetails'
import AvailabilityCalendar from '../presentational/AvailabilityCalendar'
import Breadcrumbs from '../presentational/Breadcrumbs'

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

    const participant = this.state.participant
    const fullname = `${participant.signup.name} ${participant.signup.surnamePrefix || ''} ${participant.signup.surname || ''}`

    return (
      <div>
        <Breadcrumbs path={[{title: 'Aanmeldingen', url: '/'}, {title: fullname, url: `/${this.state.id}`}]} />
        <ParticipantDetails participant={this.state.participant} />
        <AvailabilityCalendar/>
      </div>
    )
  }
}

export default DetailViewContainer