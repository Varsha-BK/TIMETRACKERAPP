import React from 'react'

const Navbarmenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row">

            <nav class="navbar navbar-expand-lg bg-tertiary ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Project
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Academic</a></li>
                        <li><a class="dropdown-item" href="#">Corporate</a></li>
                        <li><a class="dropdown-item" href="#">Govenment</a></li>
                        <li><a class="dropdown-item" href="#">Knowledge Office</a></li>
                        <li><a class="dropdown-item" href="#">Retail</a></li>
                        <li><a class="dropdown-item" href="#">Administration</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Task
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Training</a></li>
                        <li><a class="dropdown-item" href="#">Meeting& Disccussion</a></li>
                        <li><a class="dropdown-item" href="#">Lark Activity</a></li>
                        <li><a class="dropdown-item" href="#">Content Development</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <input type="text" name="" id="" placeholder='Job Description' className="form-control" />
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mode of Work
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Work from Office</a></li>
                        <li><a class="dropdown-item" href="#">Work from Home</a></li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <button className="btn btn-primary" style={{marginLeft:"300px"}}>Start</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbarmenu