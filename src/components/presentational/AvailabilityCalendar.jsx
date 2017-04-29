import React from 'react'
import PropTypes from 'prop-types'
import styles from './AvailablilityCalendar.css'
import {days, months} from '../../data/timeUnits.nl.json'

class AvailabilityCalendar extends React.Component {

  constructor(props) {
    super(props)

    this.renderWeek = this.renderWeek.bind(this)
    this.renderDay = this.renderDay.bind(this)


    this.state = {
      month: 4,
      year: 2017,
      daysAvailable: this.props.daysAvailable || []
    }
  }

  static getSunday(firstOfMonth) {
    const day = firstOfMonth.getDay()
    const date = firstOfMonth.getDate() - day

    return new Date(
      firstOfMonth.getFullYear(),
      firstOfMonth.getMonth(),
      date)
  }

  static isSameDate(firstDate, secondDate) {
    return firstDate.toDateString() === secondDate.toDateString()
  }

  static generateDatesForMonth(firstOfMonth) {
    const days = []
    const nextMonth = firstOfMonth.getMonth() + 1

    let monthCompleted = false;
    let date = AvailabilityCalendar.getSunday(firstOfMonth)
    while (!monthCompleted) {
      for (let i = 0; i < 7; i++) {
        days.push(new Date(date))

        const nextDay = date.getDate() + 1
        date.setDate(nextDay)
      }
      monthCompleted = date.getDay() === 0 && date.getMonth() === nextMonth
    }
    return days
  }

  dateString(date) {
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${date.getFullYear()}-${month}-${day}`
  }

  renderWeek(week, index) {
    return (
      <tbody key={index}>
        <tr>
          {week.map(this.renderDay)}
        </tr>
      </tbody>
    )
  }

  renderDay(date, index) {
    const mainMonth = date.getMonth() === this.state.month
    const isAvailable = this.state.daysAvailable.find(day => day === this.dateString(date))
    return <td key={index} className={isAvailable ? styles.availableDay : styles.day} >
      <span className={mainMonth ? styles.thisMonthDate : styles.otherMonthDate}>{date.getDate()}</span>
    </td>
  }

  render() {
    const {year, month} = this.state
    const allDays = AvailabilityCalendar.generateDatesForMonth(new Date(year, month))
    const weeks = []
    while (allDays[0]) {
      if (allDays.length % 7 === 0) {
        weeks.push([])
      }
      weeks[weeks.length -1].push(allDays.shift())
    }

    return (
      <section className={this.props.className}>
        <h1>Beschikbaarheid</h1>
        <h2>{months[month]} {year}</h2>
        <table className={styles.table}>
          <tbody>
          <tr>
            {days.map((day, index) => <th key={index}>{day}</th>)}
          </tr>
          </tbody>
          {weeks.map(this.renderWeek)}
        </table>
      </section>
    )
  }
}

AvailabilityCalendar.propTypes = {
  daysAvailable: PropTypes.array
}

export default AvailabilityCalendar