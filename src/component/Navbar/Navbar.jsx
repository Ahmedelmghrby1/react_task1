import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Navbar/Navbar.css"
export default function Navbar() {
  return (
    <>

<nav className="navbar fixed-top navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="/Start">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="page" to="/About">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </>
  )
}
