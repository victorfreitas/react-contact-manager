import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Item = ({ path, icon, title }) => (
  <li className="nav-item">
    <Link to={path} className="nav-link">
      <i className={`fa fa-${icon}`} /> {title}
    </Link>
  </li>
)

Item.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Item
