import React, { Component } from 'react'

import FormGroups from './FormGroups'

class Form extends Component {
  componentDidMount() {
    const { fetchContacts } = this.props

    if (this.getIdEdit()) {
      fetchContacts(this.getIdEdit())
    }
  }

  componentWillUnmount() {
    this.clear()
  }

  getIdEdit() {
    const { match: { params } } = this.props
    return parseInt(params.id || 0, 10)
  }

  handleChange = ({ target: { name, value } }) => {
    const { current: { errors } } = this.props

    if (errors[name] && value.trim()) {
      delete errors[name]
    }

    this.setCurrent({ [name]: value })
  }

  setCurrent(current) {
    const { setCurrentContact } = this.props
    setCurrentContact(current)
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { current: { id, name, email, phone } } = this.props
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
      this.setCurrent({ errors })
      return
    }

    const { makeContact, history } = this.props

    makeContact({ id, name, email, phone })
    history.push('/')
  }

  clear() {
    this.setCurrent({
      id: null,
      name: '',
      email: '',
      phone: '',
      errors: {},
    })
  }

  render() {
    const { current } = this.props

    return (
      <form autoComplete="off" onSubmit={this.onSubmit}>
        <FormGroups current={current} change={this.handleChange} />
        <input type="submit" value="Save" className="btn btn-light btn-block" />
      </form>
    )
  }
}

export default Form
