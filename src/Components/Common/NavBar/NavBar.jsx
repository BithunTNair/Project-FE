import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" >Green Grid</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               Home
              </li>
              <li className="nav-item">
               Features
              </li>
            </ul>
            <span className="navbar-text">
            <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Dropdown link
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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