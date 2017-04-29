import React from 'react'
import {Link} from 'react-router-dom'
import base from '../../base'
import styles from './DetailViewContainer.css'
import ParticipantDetails from '../presentational/ParticipantDetails'
import AvailabilityCalendar from '../presentational/AvailabilityCalendar'
import Breadcrumbs from '../presentational/Breadcrumbs'

class DetailViewContainer extends React.Component {

  constructor(props) {
    super(props)

    this.toggleContacted = this.toggleContacted.bind(this)
    this.toggleProcessed = this.toggleProcessed.bind(this)
    this.deleteParticipant = this.deleteParticipant.bind(this)

    this.state = {
      loading: true,
      id: this.props.match.params.id,
      participant: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.state.id}`, {
      context: this,
      state: 'participant',
      then() {
        this.setState({loading: false})
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  toggleContacted() {
    const {participant} = this.state
    const contacted = !participant.contacted
    const nextParticipant = Object.assign({}, participant, {contacted})
    this.setState({participant: nextParticipant})
  }

  toggleProcessed() {
    const {participant} = this.state
    const processed = !participant.processed
    const nextParticipant = Object.assign({}, participant, {processed})
    this.setState({participant: nextParticipant})
  }

  deleteParticipant() {
    const {participant} = this.state
    const hidden = true
    const nextParticipant = Object.assign({}, participant, {hidden})
    this.setState({participant: nextParticipant})
  }

  render() {

    if (this.state.loading) {
      return (
        <div className={styles.container}>
          <h1 className={styles.loadingMessage}>Loading...</h1>
        </div>
      )
    }

    const noData = Object.keys(this.state.participant).length === 0

    if (noData || this.state.participant.hidden) {
      return (
        <div className={styles.container}>
          <h1>Geen aanmelding gevonden voor {this.state.id}</h1>
          <h2><Link to="/" >Terug naar overzicht</Link></h2>
        </div>
      )
    }

    const participant = this.state.participant
    const fullname = `${participant.signup.name} ${participant.signup.surnamePrefix || ''} ${participant.signup.surname || ''}`

    return (
      <div className={styles.container}>
        <Breadcrumbs className={styles.breadcrumbs} path={[{title: 'Aanmeldingen', url: '/'}, {title: fullname, url: `/${this.state.id}`}]} />
        <ParticipantDetails deleteParticipant={this.deleteParticipant} toggleProcessed={this.toggleProcessed} toggleContacted={this.toggleContacted} className={styles.details} participant={this.state.participant} />
        <AvailabilityCalendar className={styles.calendar} daysAvailable={this.state.participant.signup.daysAvailable} />
      </div>
    )
  }
}

export default DetailViewContainer