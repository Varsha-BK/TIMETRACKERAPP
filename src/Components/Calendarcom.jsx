import React from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Sidebar from './Sidebar';

const Calendarcom = () => {
  return (
    <>
      <Sidebar />
      <div>
        <h1>Calendar</h1>
        <Calendar />
      </div>
    </>
  )
}

export default Calendarcom