import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const FormGroup = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeholder,
}) => (
  <div className="form-group">
    <Label name={name} label={label} />
    <input
      type={type}
      name={name}
      className="form-control form-control-lg"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
)

FormGroup.defaultProps = {
  type: 'text',
  value: '',
}

FormGroup.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default FormGroup
