import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmpNavbar = () => {

    let Name = sessionStorage.getItem("name")
    const Navigate = useNavigate()

    const signout = ()=>{
        Navigate("/")
    }


  return (
    <div>

    <nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/trackerip">{Name}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="/trackerip">Time Tracker</a>
                    <button className="btn btn btn-primary" style={{marginLeft:"1000px"}} onClick={signout}>Sign Out</button>
                </div>
            </div>
        </div>
    </nav>
</div>
)
}

export default EmpNavbar