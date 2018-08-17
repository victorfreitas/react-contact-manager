import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import FormGroup from './FormGroup'

const defaultState = {
  name: '',
  email: '',
  phone: '',
  errors: {},
}
const groups = [
  { type: 'text', name: 'name', label: 'Name' },
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'tel', name: 'phone', label: 'Phone' },
]

class Form extends Component {
  state = defaultState

  handleChange = ({ target: { name, value } }) => {
    const { errors } = this.state

    if (errors[name] && value.trim()) {
      delete errors[name]
    }

    this.setState({ [name]: value })
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { name, email, phone } = this.state
    const errors = {}

    if (!name.trim()) {
      errors.name = 'Name is required'
    }

    if (!email.trim()) {
      errors.email = 'Email is required'
    }

    if (!phone.trim()) {
      errors.phone = 'Phone is required'
    }

    if (Object.entries(errors).length) {
      this.setState({ errors })
      return
    }

    const { dispatch } = this.props

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: uuid(),
        name,
        email,
        phone,
      },
    })
    this.setState({ ...defaultState })
  }

  renderFormGroups() {
    const state = { ...this.state }

    return (
      groups.map(({ type, name, label }) => (
        <FormGroup
          type={type}
          name={name}
          label={label}
          key={name}
          value={state[name]}
          placeholder={`Enter ${label}...`}
          handleChange={this.handleChange}
          error={state.errors[name]}
        />
      ))
    )
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.onSubmit}>
        {this.renderFormGroups()}
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-light btn-block"
        />
      </form>
    )
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Form
