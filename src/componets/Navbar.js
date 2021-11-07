import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./Hedding.css"
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <div>
       <nav className=" fixed-top navbar  navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="nav navbar-brand " to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/Project">Project</Link>
        <Link className="nav-link" to="#">About-Us</Link>
        <Link className="nav-link" to="/Aboutus">CV</Link>
      </div>
    </div>
  </div>
</nav>
      </div>

    )
}



        
    