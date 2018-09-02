import React from 'react'
import PropTypes from 'prop-types'

import groups from './groups'
import FormGroup from './FormGroup'

const FormGroups = ({ current, change }) => (
  groups.map(({ type, name, label }) => (
    <FormGroup
      key={name}
      type={type}
      name={name}
      label={label}
      value={current[name]}
      placeholder={`Enter ${label}...`}
      handleChange={change}
      error={current.errors[name]}
    />
  ))
)

FormGroups.propTypes = {
  current: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
}

export default FormGroups
