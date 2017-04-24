import React from 'react'
import styles from './ParticipantDetails.css'
import PositionList from './PositionList'

class ParticipantDetails extends React.Component {
  render() {
    const participant = this.props.participant
    const signup = participant.signup
    const positions = signup.position || []

    return (
      <section>
        <h1 className={styles.name}>{signup.name} {signup.surnamePrefix} {signup.surname}</h1>
        <div className={styles.adminActions}>
          <label className={styles.action}>
            <input type="checkbox" value={participant.contacted}/> Contact opgenomen
          </label>
          <label className={styles.action}>
            <input type="checkbox" value={participant.processed}/> Verwerkt in planning
          </label>
        </div>
        <div className={styles.details}>
          <dl className={styles.detailsList}>
            <dt>E-mailadres</dt>
            <dd className={styles.email} >{signup.email}</dd>
            <dt>Telefoonnummer</dt>
            <dd className={styles.phonenumber}>{signup.phonenumber}</dd>
            <dt>Functies</dt>
            <dd><PositionList positions={positions} /></dd>
            <dt>Opmerkingen Beschikbaarheid</dt>
            <dd>{signup.availabillityComments || <i>Geen</i>}</dd>
            <dt>Overige Ervaring</dt>
            <dd>{signup.pastExperience  || <i>Geen</i>}</dd>
          </dl>
          <ul className={styles.otherProperties} >
            {signup.wantsCalls ? <li>Bel-me-maar-lijst</li> : ''}
            {signup.hasFirstAidCertificate ? <li>EHBO diploma</li> : ''}
            {signup.isBHVCertified ? <li>BHV</li> : ''}
            {signup.hasTapLicense ? <li>Tap vergunning</li> : ''}
            {signup.canTapBeer ? <li>Kan tappen</li> : ''}
          </ul>
        </div>
      </section>
    )
  }
}

ParticipantDetails.propTypes = {
  participant: React.PropTypes.object.isRequired
}

export default ParticipantDetails