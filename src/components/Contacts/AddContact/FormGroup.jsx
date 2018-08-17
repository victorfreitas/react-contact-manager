import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Label from './Label'
import Fragment from '../../Fragment'

const FormGroup = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeholder,
  error,
}) => (
  <div className="form-group">
    <Label name={name} label={label} />
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={classNames('form-control form-control-lg', {
        'is-invalid': error,
        'is-valid': !error && value.trim(),
      })}
    />
    <Fragment show={!!error}>
      <div className="invalid-feedback">
        {error}
      </div>
    </Fragment>
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
  error: PropTypes.string,
}

export default FormGroup
