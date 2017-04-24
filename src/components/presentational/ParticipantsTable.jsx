import React from 'react'
import styles from './ParticipantsTable.css'
import positionsData from '../../data/positions.json'
import Position from '../presentational/Position'

class ParticipantsTable extends React.Component {

  renderParticipant(participant, key) {
    const {signup, contacted, processed} = participant

    const positions = signup.position || []
    return (
      <tbody key={key} className={styles.rowContainer} onClick={() => this.props.history.push(`/${key}`)} >
      <tr className={styles.row}>
        <td>{signup.name} {signup.surnamePrefix} {signup.surname}</td>
        <td>{signup.email}</td>
        <td>{signup.phonenumber}</td>
        <td>{signup.wantsCalls ? 'Ja' : 'Nee'}</td>
        <td>{contacted ? 'Ja' : 'Nee'}</td>
        <td>{processed ? 'Ja' : 'Nee'}</td>
        <td>{positions.map(positionName => <Position key={positionName} position={positionsData[positionName]}/>)}</td>
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
        {Object.keys(participants).map(key => this.renderParticipant(participants[key], key))}
      </table>
    )
  }
}
ParticipantsTable.propTypes = {
  participants: React.PropTypes.object.isRequired
}

export default ParticipantsTable