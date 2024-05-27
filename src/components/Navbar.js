import React, { Component } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Link,
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor: '#4169E1'}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" style={{color: 'white'}} href="/"> <sub> News </sub>Brocolli</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-2" >
        <div className='container me-2' >
        
        <Link className="nav-Link active me-2" style={{color: 'white', textDecoration: 'none'}} aria-current="page" to="/">Home</Link> </div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/business">Business</Link></div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/entertainment">Entertainment</Link></div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/health">Health</Link></div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/science">Science</Link></div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/sports">Sports</Link></div>
        <div className='container'><Link className="nav-Link me-2" style={{color: 'white', textDecoration: 'none'}} to="/technology">Technology</Link></div>
        
      </div>
    </div>
  </div>
</nav>
         </>
    )
  }
}

export default Navbar