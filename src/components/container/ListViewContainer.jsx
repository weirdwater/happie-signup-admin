import React from 'react'
import base from '../../base'

class ListViewContainer extends React.Component {

  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'signups'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  render() {
    return (
      <div>
        ListViewContainer
      </div>
    )
  }
}

export default ListViewContainer