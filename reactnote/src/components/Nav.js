import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="logo navbar-brand" to="/">Note<span className='pal'>Pal</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/Create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Notes">Notes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
        </div>
      </nav>
    </>
  )
}

export default Nav