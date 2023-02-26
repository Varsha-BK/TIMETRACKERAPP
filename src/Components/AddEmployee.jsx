import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const AddEmployee = () => {

    let Navigate = useNavigate()

    const [emp, setEmp] = useState(
        {
            Name: "",
            Email: "",
            Designation: "",
            Phonenumber: null,
            Password: ""
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target

        setEmp(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const empData = () => {
        axios.post("http://localhost:3001/addemployee", emp)
            .then(
                (res) => {
                    if (res.data.Status === "Success") {
                        alert("Registered Successfully")
                        setEmp(
                            {
                                Name: "",
                                Email: "",
                                Designation: "",
                                Phonenumber: "",
                                Password: ""
                            }
                        )
                        Navigate("/viewemployees")
                    }

                }
            )
            .catch()
    }


    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div className="container" style={{marginTop:"50px"}}>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <h2 style={{ textAlign: "center" }}>Employee Form</h2>
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text"
                                            name="Name"
                                            placeholder='Employee Name'
                                            className="form-control"
                                            onChange={inputHandler}
                                            value={emp.Name} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Email  ID</label>
                                        <input type="email"
                                            name="Email"
                                            placeholder='Employee Email ID'
                                            className="form-control"
                                            onChange={inputHandler}
                                            value={emp.Email}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Designation</label>
                                        <input type="text"
                                            name="Designation"
                                            placeholder='Employee Designation'
                                            className="form-control"
                                            onChange={inputHandler}
                                            value={emp.Designation}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text"
                                            name="Phonenumber"
                                            placeholder='Employee Phone Number'
                                            className="form-control"
                                            onChange={inputHandler}
                                            value={emp.Phonenumber}
                                        />
                                    </div>
                                    {/* <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" 
                                name="Username" 
                                placeholder='Enter Your Username' 
                                className="form-control"/>
                            </div> */}
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password"
                                            name="Password"
                                            placeholder='Employee Password'
                                            className="form-control"
                                            onChange={inputHandler}
                                            value={emp.Password}
                                        />
                                    </div>

                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-primary" onClick={empData}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default AddEmployee