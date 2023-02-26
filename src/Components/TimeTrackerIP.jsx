import axios from 'axios'
import React, { useState } from 'react'
import EmpNavbar from './EmpNavbar'
import MyTimer from './MyTimer'
import Project from './Project'

const TimeTrackerIP = () => {

    const [data, setData] = useState(
        {
            Userid: sessionStorage.getItem("userid"),
            Name: sessionStorage.getItem("name"),
            Projectname: "",
            Task: "",
            JobDescription: "",
            Modeofwork: "",
            Duration: "",
            Totaltime: ""

        }
    )

    console.log(data);
    const inputHandler = (event) => {
        const { name, value } = event.target

        setData(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const projectData = () => {
        axios.post("http://localhost:3001/trackerip", data)
            .then(
                (res) => {
                    // <MyTimer />

                    setData(
                        {
                            Projectname: "",
                            Task: "",
                            JobDescription: "",
                            Modeofwork: "",
                            Duration: "",
                            Totaltime: ""
                        }
                    )
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }


    return (
        <div className="container">
            <EmpNavbar />

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5 " >
                    <div className="card" style={{marginTop:"100px"}}>
                        <div className="card-body">
                            <div className="row">
                                <h2>Create New Job</h2>
                                <div className="col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                    <label for="">Project</label>
                                    <select name="Projectname"
                                        id="Projectname"
                                        className='form-control'
                                        onChange={inputHandler}
                                        value={data.Projectname}>
                                        <option value=""></option>
                                        <option value="Academic">Academic</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Government">Government</option>
                                        <option value="Knowledge-Office">Knowledge-Office</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Administration">Administration</option>
                                    </select>
                                </div>

                                <div className="col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                    <label for="">Task</label>
                                    <select
                                        name="Task"
                                        id="Task"
                                        className='form-control'
                                        onChange={inputHandler}
                                        value={data.Task}>
                                        <option value="" ></option>
                                        <option value="Training">Training</option>
                                        <option value="Meatings& Disscussion">Meatings& Discussion</option>
                                        <option value="Lark Activity">Lark Activity</option>
                                        <option value="Content Development">Content Development</option>
                                    </select>
                                </div>

                                <div className="col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                    <label for="">Job Description</label>
                                    <input type="text"
                                        name="JobDescription"
                                        placeholder='Job Description'
                                        id="JobDescription" className="form-control"
                                        onChange={inputHandler}
                                        value={data.JobDescription} />
                                </div>

                                <div className="col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                    <label for="">Mode of Work</label>
                                    <select name="Modeofwork" id="Modeofwork"
                                        className='form-control'
                                        onChange={inputHandler}
                                        value={data.Modeofwork}>
                                        <option value="" ></option>
                                        <option value="Work from Home">Work from Home</option>
                                        <option value="Work from Office">Work from Office</option>
                                    </select>
                                </div>

                                {/* <div className="col col-1 col-sm-1 col-md-1 col-lg-1 col-xl-2 col-xxl-2 ">
                                    <label for="">Time Taken</label>
                                    <input type="text" 
                                    name="Duration" id="" 
                                    className="form-control"
                                    onChange={inputHandler}
                                    value={data.Duration} />
                                </div> */}


                                <div className="col col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                                    {/* <MyTimer/> */}
                                    <button className="btn btn-primary" onClick={projectData}>Create</button>
                                </div>

                                <div className="col col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                                    {/* <button className="btn btn-danger">Stop</button> */}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <Project />
            </div>
        </div>
    )
}

export default TimeTrackerIP
