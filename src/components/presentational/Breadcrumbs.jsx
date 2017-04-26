import React from 'react'
import PropTypes from 'prop-types'
import styles from './Breadcrumbs.css'
import {Link} from 'react-router-dom'

const Breadcrumbs = (props) => {
  const path = props.path || []
  return (
    <div className={props.className}>
      <ul className={styles.path}>
        {path.map(page => {
          return <li key={page.title} className={styles.page}><Link to={page.url}>{page.title}</Link></li>
        })}
      </ul>
    </div>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.array
}

export default Breadcrumbs