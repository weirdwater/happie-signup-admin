import React from 'react'
import styles from './Position.css'

const Position = (props) => {
  const position = props.position || {}
  return (
    <span className={styles.pill} style={{background: position.color}} >{position.label}</span>
  )
}

Position.propTypes = {
  position: React.PropTypes.object
}

export default Position