import React from 'react'
import base from '../../base'

class ListViewContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      participants: {}
    }

  }

  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'participants'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  renderParticipant(participant, key) {
    const {signup} = participant

    return (
      <tbody key={key}>
        <tr>
          <td>{signup.name} {signup.surnamePrefix} {signup.surname}</td>
          <td>{signup.email}</td>
          <td>{signup.phonenumber}</td>
        </tr>
      </tbody>
    )
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Naam</th>
              <th>E-mailadres</th>
              <th>Telefoonnummer</th>
            </tr>
          </tbody>
          {Object.keys(this.state.participants).map(key => this.renderParticipant(this.state.participants[key], key))}
        </table>
      </div>
    )
  }
}

export default ListViewContainer