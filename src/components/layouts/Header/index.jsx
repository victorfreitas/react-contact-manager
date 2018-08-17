import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ branding }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {branding}
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fa fa-plus" /> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fa fa-question" /> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.defaultProps = {
  branding: 'The header component',
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Header
