import React from 'react'
import styles from './Breadcrumbs.css'
import {Link} from 'react-router-dom'

const Breadcrumbs = (props) => {
  const path = props.path || []
  console.log(path)
  return (
    <div>
      <ul className={styles.path}>
        {path.map(page => {
          return <li key={page.title} className={styles.page}><Link to={page.url}>{page.title}</Link></li>
        })}
      </ul>
    </div>
  )
}

Breadcrumbs.propTypes = {
  path: React.PropTypes.array
}

export default Breadcrumbs