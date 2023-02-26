import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <nav class="nav flex-column">
        <div className='link'>
        <a class="nav-link" aria-current="page" href="/timer">Time Tracker</a>
        <a class="nav-link" href="/calendar">Calendar</a>
        <a class="nav-link" href="/dashboard">Dashboard</a>
        <a class="nav-link" href="/report">Reports</a>
        <a class="nav-link" href="/project">Projects</a>
        <a class="nav-link" href="/">Sign Out</a>
        </div>
      </nav>


    </div>
  )
}

export default Sidebar