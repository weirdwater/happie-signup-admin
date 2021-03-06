import React from 'react'
import base from '../../base'
import ParticipantsTable from '../presentational/ParticipantsTable'

class ListViewContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      participants: {}
    }

  }

  componentWillMount() {
    this.ref = base.bindToState('/', {
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
        <ParticipantsTable participants={this.state.participants} {...this.props} />
      </div>
    )
  }
}

export default ListViewContainer