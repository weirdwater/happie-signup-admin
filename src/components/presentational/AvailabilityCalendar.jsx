import React from 'react'
import styles from './AvailablilityCalendar.css'
import {days, months} from '../../data/timeUnits.nl.json'

class AvailabilityCalendar extends React.Component {

  render() {
    const availableDates = this.props.daysAvailable.map(dateString => new Date(dateString))

    console.log(availableDates)

    return (
      <section className={this.props.className}>
        <h1>Beschikbaarheid</h1>
        <ul>
          {availableDates.map((date, key) => <li key={key}>{days[date.getDay()]} {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</li>)}
        </ul>
      </section>
    )
  }
}

AvailabilityCalendar.propTypes = {
  daysAvailable: React.PropTypes.array.isRequired
}

export default AvailabilityCalendar