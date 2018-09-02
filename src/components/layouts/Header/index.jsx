import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Container from '../Container'
import Menu from '../Menu'

const Header = ({ brand }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
    <Container>
      <Link to="/" className="navbar-brand">
        {brand}
      </Link>
      <Menu />
    </Container>
  </nav>
)

Header.propTypes = {
  brand: PropTypes.string.isRequired,
}

export default Header
