import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeContact, setCurrentContact, getContacts } from '../../../actions'
import FormGroup from './FormGroup'

const groups = [
  { type: 'text', name: 'name', label: 'Name' },
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'tel', name: 'phone', label: 'Phone' },
]

class Form extends Component {
  constructor(props) {
    super(props)
    this.unlisten = props.history.listen(() => this.clear())
  }

  componentDidMount() {
    const { getContacts } = this.props

    if (this.getIdEdit()) {
      getContacts(this.getIdEdit())
    }
  }

  componentWillUnmount() {
    this.unlisten()
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
    this.clear()
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

  renderFormGroups() {
    const { current } = this.props

    return (
      groups.map(({ type, name, label }) => (
        <FormGroup
          type={type}
          name={name}
          label={label}
          key={name}
          value={current[name]}
          placeholder={`Enter ${label}...`}
          handleChange={this.handleChange}
          error={current.errors[name]}
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
  makeContact: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  setCurrentContact: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.contact.current,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    makeContact,
    setCurrentContact,
    getContacts,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
