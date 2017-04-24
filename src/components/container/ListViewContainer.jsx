import React from 'react'
import base from '../../base'
import positionsData from '../../data/positions.json'
import Position from '../presentational/Position'
import ParticipantsTable from '../presentational/ParticipantsTable'

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

  render() {
    return (
      <div>
        <h1>Aanmeldingen</h1>
        <table>

        </table>
        <ParticipantsTable participants={this.state.participants} {...this.props} />
      </div>
    )
  }
}

export default ListViewContainer