import React from 'react'
import './NavBar.css'
import textimg from '../../../Assets/running.png'

function NavBar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand green-grid" >Green Gr<img src={textimg} alt="" />d</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
               Home
              </li>
              <li className="nav-item">
               Features
              </li>
            </ul>
            <span className="navbar-text">
            <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle user" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            User
          </span>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><span className="dropdown-item">Action</span></li>
            <li><span className="dropdown-item">Another action</span></li>
            <li><span className="dropdown-item">Something else here</span></li>
          </ul>
        </li>
            </span>
          </div>
        </div>
      </nav>
        
    )
}

export default NavBar