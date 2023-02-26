import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    let Navigate = useNavigate()

    const login = () => {
        Navigate("/login")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row">

                        <nav class="navbar bg-info navbar-dark fixed-top">
                            <div class="container-fluid">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ICT_Academy_Kerala.webp" alt="logo" height={"50px"} width={"60px"} />
                                <button class="btn btn-light" onClick={login}>Login</button>
                            </div>
                        </nav>
                        <h2 style={{textAlign:"center",marginTop:"100px"}}>ICTAK CLOCK-IN SYSTEM</h2>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home