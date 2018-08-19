import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup'

import request from '../../../helpers/request'

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
  constructor(props) {
    super(props)
    this.state = { ...defaultState }

    this.unlisten = props.history.listen(() => {
      this.setState({ ...defaultState })
    })
  }

  async componentDidMount() {
    if (!this.getIdEdit()) {
      return
    }

    const { name, email, phone } = await request(`/users/${this.getIdEdit()}`)

    this.setState({
      name,
      email,
      phone,
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  getIdEdit() {
    const { match: { params } } = this.props
    return parseInt(params.id || 0, 10)
  }

  handleChange = ({ target: { name, value } }) => {
    const { errors } = this.state

    if (errors[name] && value.trim()) {
      delete errors[name]
    }

    this.setState({ [name]: value })
  }

  onSubmit = async (event) => {
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

    const { dispatch, history } = this.props
    const id = this.getIdEdit()
    const method = id ? 'put' : 'post'

    const contact = await request[method](
      `/users/${id ? id : ''}`,
      { name, email, phone }
    )

    dispatch({
      type: `${id ? 'UPDATE' : 'ADD'}_CONTACT`,
      payload: {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        id: contact.id,
      },
    })

    this.setState({ ...defaultState })
    history.push('/')
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
          value="Save"
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
