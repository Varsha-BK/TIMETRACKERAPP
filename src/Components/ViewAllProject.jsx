import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAllProject = () => {

    const [myproject, setMyProject] = useState([])

    useEffect(
      () => {
        fetchProject()
      }
    )
  
    const fetchProject = () => {
      const data = { "Userid": sessionStorage.getItem("userid"),"Name":sessionStorage.getItem("name") }
      axios.post("http://localhost:3001/project", data)
        .then(
          (res) => {
            setMyProject(res.data)
          }
        )
        .catch(
          (err) => {
            console.log(err);
          }
        )
    }
  

    const deleteProject = async (id) => {
        await axios.delete(`http://localhost:3001/project/${id}`)
          .then(
            (res) => {
              alert("Deleted Successfully")
              res.json()
            }
          )
          .catch(
            (err) => {
              console.log(err)
            }
          )
      }
    

    return (
        <>
            {/* <Sidebar /> */}
            <div className="container">
            <Navbar/>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{marginTop:"50px"}}>
                    <div className="row">
                        <div className="row g-3 ">
                            <h2>Projects</h2>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table table-striped table-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Project</th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Job Description</th>
                                            <th scope="col">Start Time</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>

                                    {
                                       myproject.map(
                                        (value,key)=>{
                                            return                                     <tbody>
                                            <tr>
                                                <td>{value.Name}</td>
                                                <td>{value.Projectname}</td>
                                                <td>{value.Task}</td>
                                                <td>{value.JobDescription}</td>
                                                <td>{value.AddedDate}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteProject(value._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
    
                                        }
                                       ) 
                                    }


                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAllProject