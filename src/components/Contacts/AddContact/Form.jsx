import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import FormGroup from './FormGroup'

const defaultState = {
  name: '',
  email: '',
  phone: '',
}
const groups = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'phone', label: 'Phone' },
]

class Form extends Component {
  state = defaultState

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    const { name, email, phone } = this.state

    this.setState({ ...defaultState })
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: uuid(),
        name,
        email,
        phone,
      },
    })
  }

  isEnabled() {
    const { name, email, phone } = this.state
    return !(name && email && phone)
  }

  renderFormGroups() {
    const state = { ...this.state }

    return (
      groups.map(({ name, label }) => (
        <FormGroup
          name={name}
          label={label}
          key={name}
          value={state[name]}
          placeholder={`Enter ${label}...`}
          handleChange={this.handleChange}
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
          disabled={this.isEnabled()}
        />
      </form>
    )
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Form
