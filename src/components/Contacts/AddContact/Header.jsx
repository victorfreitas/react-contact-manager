import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <div className="card-header">
    {title}
  </div>
)

Header.defaultProps = {
  title: 'Add Contact',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
