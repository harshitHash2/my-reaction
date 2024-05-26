import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">News ~ Brocolli</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
         </>
    )
  }
}

export default Navbar