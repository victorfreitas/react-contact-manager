import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Contact from './Contact'

import { getContacts } from '../../actions'

class Contacts extends Component {
  state = {
    infoId: '',
  }

  componentDidMount() {
    const { getContacts } = this.props
    getContacts()
  }

  handleClickInfo = (contact) => {
    const { infoId } = this.state

    this.setState({
      infoId: infoId === contact.id ? '' : contact.id,
    })
  }

  renderContacts() {
    const { infoId } = this.state
    const { contacts } = this.props

    return contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        infoId={infoId}
        handleClickInfo={this.handleClickInfo}
      />
    ))
  }

  render() {
    return (
      <Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-primary">Contact</span> List
        </h1>
        {this.renderContacts()}
      </Fragment>
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
})

const mapDispatchToProps = dispatch => ({
  getContacts: id => getContacts(id, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
