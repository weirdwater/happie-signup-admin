import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>De pagina bestaat niet.</h1>
                <h2><Link to="/">Terug naar overzicht</Link></h2>
            </div>
        )
    }
}

export default NotFound