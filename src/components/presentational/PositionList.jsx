import React from 'react'
import PropTypes from 'prop-types'
import Position from './Position'
import positionsData from '../../data/positions.json'
import styles from './PositionList.css'

const PositionList = (props) => {
  const positions = props.positions || []

  return (
    <ul className={styles.list}>
      {positions.map(
        positionName => <li key={positionName}><Position position={positionsData[positionName]}/></li>
      )}
    </ul>
  )


}

PositionList.propTypes = {
  positions: PropTypes.array
}

export default PositionList