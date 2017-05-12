import React from 'react'
import PropTypes from 'prop-types'
import styles from './ParticipantsTable.css'
import PositionList from './PositionList'

class ParticipantsTable extends React.Component {

  renderParticipant(participant) {
    const {signup, contacted, processed, key} = participant

    const completed = participant.signup.daysAvailable !== undefined

    const positions = signup.position || []
    return (
      <tbody key={key} className={styles.rowContainer} onClick={() => this.props.history.push(`/${key}`)} >
        <tr className={styles.row} data-completed={completed}>
          <td>{signup.name} {signup.surnamePrefix} {signup.surname}</td>
          <td>{signup.email}</td>
          <td>{signup.phonenumber}</td>
          <td>{signup.wantsCalls ? 'Ja' : 'Nee'}</td>
          <td>{contacted ? 'Ja' : 'Nee'}</td>
          <td>{processed ? 'Ja' : 'Nee'}</td>
          <td><PositionList positions={positions}/></td>
        </tr>
      </tbody>
    )
  }

  isNotHidden(participant) {
    return !participant.hidden
  }

  filterPositions(participant) {
    const showPositions = []
    // const showPositions = ['barShift', 'spoelShift', 'keukenShift1', 'keukenShift2', 'bedieningShift1', 'bedieningShift2']
    if(showPositions.length) {
      if (participant.signup && participant.signup.position) {
        const appliedPositions = Array.from(participant.signup.position)
        return showPositions.reduce((result, position) => appliedPositions.includes(position) ? true : result, false)
      }
      return false
    }
    return true
  }

  render() {

    const { participants } = this.props

    const participantsList = Object.keys(participants)
      .map(key => {
        const participant = participants[key]
        participant.key = key
        return participant
      })

    // const justWantsCalls = true

    return (
      <table className={styles.table}>
        <tbody>
        <tr>
          <th>Naam</th>
          <th>E-mailadres</th>
          <th>Telefoonnummer</th>
          <th>Bel lijst</th>
          <th>Mail gestuurd</th>
          <th>Verwerkt</th>
          <th>Functies</th>
        </tr>
        </tbody>
        {participantsList
          .filter(this.isNotHidden)
          // .filter(participant => !justWantsCalls || participant.signup.wantsCalls)
          // .filter(this.filterPositions)
          .reverse()
          .map(participant => this.renderParticipant(participant))}
      </table>
    )
  }
}
ParticipantsTable.propTypes = {
  participants: PropTypes.object.isRequired
}

export default ParticipantsTable