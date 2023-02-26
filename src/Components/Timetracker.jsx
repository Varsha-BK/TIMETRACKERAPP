import React, { useState } from 'react'
import MyTimer from './MyTimer'
import Sidebar from './Sidebar'

const Timetracker = () => {
  const [project, setProject] = useState()
  const [task, setTask] = useState()
  const [work, setWork] = useState()

  const pvalue = { project }
  console.log(pvalue);

  const tvalue = { task }
  console.log(tvalue);



  const inputHandler = (event) => {
    const { name, value } = event.target

    setProject(
      (previousState) => ({
        ...previousState,
        [name]: value
      })
    )
  }


  return (
    <div className="container">
<Sidebar/>

      <div className="row">
        <h2 style={{ padding: "30px" }}>Time Tracker</h2>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Project</label>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <select name="" id="" value={project} onChange={e => setProject(e.target.value)}>
                  <option ></option>
                  <option >Academic</option>
                  <option >Corporate</option>
                  <option >Government</option>
                  <option >Knowledge Office</option>
                  <option >Retail</option>
                  <option >Administration</option>
                </select>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Task</label>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <select name="" id="" value={task} onChange={e => setTask(e.target.value)}>
                  <option ></option>
                  <option >Training</option>
                  <option >Meeting& Discussion</option>
                  <option >Lark Activity</option>
                  <option >Content Development</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <input type="text" name="" id=""
                  placeholder='Job Description'
                  className="form-control"
                  style={{ marginTop: "15px" }} />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Mode of Work</label>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <select name="" id="" value={work} onChange={e => { setWork(e.target.value) }}>
                  <option ></option>
                  <option >Work from Home</option>
                  <option >Work from Office</option>
                </select>
              </div>


              <MyTimer />


            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Timetracker