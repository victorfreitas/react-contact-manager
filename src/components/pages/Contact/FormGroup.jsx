import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Fragment from '../../Fragment'

class FormGroup extends Component {
  getClassNames() {
    const { error, value } = this.props

    return classNames(
      'form-control form-control-lg',
      { 'is-invalid': error, 'is-valid': !error && value.trim() }
    )
  }

  renderInput() {
    const { name, label, type, value, handleChange, placeholder } = this.props

    return (
      <Fragment>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={this.getClassNames()}
        />
      </Fragment>
    )
  }

  renderError() {
    const { error } = this.props

    return (
      <Fragment show={!!error}>
        <div className="invalid-feedback">
          {error}
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <div className="form-group">
        {this.renderInput()}
        {this.renderError()}
      </div>
    )
  }
}

FormGroup.defaultProps = {
  type: 'text',
  value: '',
  error: '',
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
