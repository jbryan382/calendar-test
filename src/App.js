import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import AddToCalendar from 'react-add-to-calendar';

const localizer = momentLocalizer(moment)
const myEventsList = []

class App extends Component {
  render() {
    return <>
   <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
    </>
  }
}

export default App
