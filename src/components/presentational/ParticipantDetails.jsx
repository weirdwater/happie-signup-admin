import React from 'react'
import styles from './ParticipantDetails.css'

class ParticipantDetails extends React.Component {
  render() {
    const participant = this.props.participant
    return (
      <section>
        <h1>{participant.signup.name} {participant.signup.surnameprefix} {participant.signup.surname}</h1>
      </section>
    )
  }
}

ParticipantDetails.propTypes = {
  participant: React.PropTypes.object.isRequired
}

export default ParticipantDetails