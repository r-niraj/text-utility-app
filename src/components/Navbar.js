import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
            </li>
          </ul>

          {/* <div className="d-flex">
            <div className="bg-primary mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-warning mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-danger mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-success mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-light border border-dark mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-dark border border-white mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div> */}
          
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={() => { props.toggleMode(null) }} id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'white'}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Set Title Here',
//     about: 'About text Here'
// }