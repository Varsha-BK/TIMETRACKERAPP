import React from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  let Navigate = useNavigate()

  const newProject = () => {
    Navigate("/project")
  }

  return (
    <>
    <Sidebar/>
      <div>

        <button className="btn btn-info" onClick={newProject}>Create New Project</button>
      </div>
    </>
  )
}

export default Dashboard