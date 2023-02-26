import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const ViewEmployee = () => {

  const [employee, setEmployee] = useState([
    {
      Name: "",
      Email: "",
      Designation: "",
      Phonenumber: null,
      Password: ""
    }
  ])

  useEffect(
    () => {
      fetchEmployee()
    }
  )

  const fetchEmployee = () => {
    axios.get("http://localhost:3001/viewemployees")
      .then(
        (res) => {
          setEmployee(res.data)
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }


  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/viewemployees/${id}`)
      .then(
        (res) => {
          alert("Data Deleted Successfully")
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
    <div className="container">
      <Navbar />
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{marginTop:"50px"}}>
        <div className="row">
          <div className="row g-3 ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <h2>Employee Details</h2>

              <table class="table table-striped table-primary">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Edit/Delete</th>
                  </tr>
                </thead>

                {
                  employee.map(
                    (value, key) => {
                      return <tbody>
                        <tr>
                          <td>{value.Name}</td>
                          <td>{value.Email}</td>
                          <td>{value.Designation}</td>
                          <td>{value.Phonenumber}</td>
                          <td>
                            <Link to={`/update/${value._id}`} className="btn btn-success mx-2">Edit</Link>

                            <button className="btn btn-danger" onClick={() => deleteEmployee(value._id)} >Delete</button></td>
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

  )
}

export default ViewEmployee