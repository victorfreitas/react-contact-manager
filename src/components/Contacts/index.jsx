import React, { Component } from 'react'

import { Consumer } from '../../Context'
import Contact from './Contact'

class Contacts extends Component {
  state = {
    infoId: '',
  }

  handleClickInfo = (contact) => {
    const { infoId } = this.state

    this.setState({
      infoId: infoId === contact.id ? '' : contact.id,
    })
  }

  renderContacts = ({ contacts }) => {
    const { infoId } = this.state

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
      <Consumer>
        {this.renderContacts}
      </Consumer>
    )
  }
}

export default Contacts
