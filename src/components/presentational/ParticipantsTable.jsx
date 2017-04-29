import React from 'react'
import PropTypes from 'prop-types'
import styles from './ParticipantsTable.css'
import PositionList from './PositionList'

class ParticipantsTable extends React.Component {

  renderParticipant(participant, key) {
    const {signup, contacted, processed} = participant

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

  render() {

    const { participants } = this.props

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
        {Object.keys(participants).map(key => {
          const participant = participants[key]
          if (!participant.hidden) {
            return this.renderParticipant(participant, key)
          }
          return ''
        })}
      </table>
    )
  }
}
ParticipantsTable.propTypes = {
  participants: PropTypes.object.isRequired
}

export default ParticipantsTable