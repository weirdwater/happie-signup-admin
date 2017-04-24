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
        <h1>{signup.name} {signup.surnameprefix} {signup.surname}</h1>
        <div>
          <label>
            <input type="checkbox" value={participant.contacted}/> Contact opgenomen
          </label>
          <label>
            <input type="checkbox" value={participant.processed}/> Verwerkt in planning
          </label>
        </div>
        <div>
          <dl>
            <dt>E-mailadres</dt>
            <dd>{signup.email}</dd>
            <dt>Telefoonnummer</dt>
            <dd>{signup.phonenumber}</dd>
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