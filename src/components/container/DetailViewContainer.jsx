import React from 'react'

class DetailViewContainer extends React.Component {
    render() {
        const id = this.props.match.params.id
        return (
            <div>
                DetailViewContainer for {id}
            </div>
        )
    }
}

export default DetailViewContainer