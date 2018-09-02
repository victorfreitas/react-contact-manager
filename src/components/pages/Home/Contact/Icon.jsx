import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ click, classNames }) => (
  <i className={`fa fa-${classNames}`} onClick={click} />
)

Icon.propTypes = {
  click: PropTypes.func.isRequired,
  classNames: PropTypes.string.isRequired,
}

export default Icon
