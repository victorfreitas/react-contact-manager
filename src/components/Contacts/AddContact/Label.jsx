import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ name, label }) => (
  <label htmlFor={name}>
    {label}
  </label>
)

Label.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Label
