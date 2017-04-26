import React from 'react';
import ReactDOM from 'react-dom';
import AvailabilityCalendar from './AvailabilityCalendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvailabilityCalendar daysAvailable={[]} />, div);
});


it('successfully gets the sunday of the week', () => {
  const firstOfApril = new Date(2017, 5)
  const firstOfWeek = new Date(2017, 4, 28)

  const testDates = {
    ['2017-04-01']: '2017-03-26',
    ['2017-05-01']: '2017-04-30',
    ['2017-05-17']: '2017-05-14',
    ['2017-06-01']: '2017-05-28'
  }

  Object.keys(testDates).map(testDateString => {
    const testDate = new Date(testDateString)
    const expectedDate = new Date(testDates[testDateString])
    expect(AvailabilityCalendar.getSunday(testDate).toDateString())
      .toBe(expectedDate.toDateString())
  })
})

it('generateMonth returns a list of dates starting the week of the 1st and ending the week of the last day of the month', () => {
  const expectedDates = [
    new Date(2017, 3, 30),
    new Date(2017, 4, 1),
    new Date(2017, 4, 2),
    new Date(2017, 4, 3),
    new Date(2017, 4, 4),
    new Date(2017, 4, 5),
    new Date(2017, 4, 6),
    new Date(2017, 4, 7),
    new Date(2017, 4, 8),
    new Date(2017, 4, 9),
    new Date(2017, 4, 10),
    new Date(2017, 4, 11),
    new Date(2017, 4, 12),
    new Date(2017, 4, 13),
    new Date(2017, 4, 14),
    new Date(2017, 4, 15),
    new Date(2017, 4, 16),
    new Date(2017, 4, 17),
    new Date(2017, 4, 18),
    new Date(2017, 4, 19),
    new Date(2017, 4, 20),
    new Date(2017, 4, 21),
    new Date(2017, 4, 22),
    new Date(2017, 4, 23),
    new Date(2017, 4, 24),
    new Date(2017, 4, 25),
    new Date(2017, 4, 26),
    new Date(2017, 4, 27),
    new Date(2017, 4, 28),
    new Date(2017, 4, 29),
    new Date(2017, 4, 30),
    new Date(2017, 4, 31),
    new Date(2017, 5, 1),
    new Date(2017, 5, 2),
    new Date(2017, 5, 3)
  ]

  const dates = AvailabilityCalendar.generateDatesForMonth(new Date(2017, 4))
  expect(dates).toEqual(expectedDates)
})