import React, { Component } from 'react'

import { Consumer } from '../../Context'
import Contact from '../Contact'

class Contacts extends Component {
  renderContacts({ contacts }) {
    return contacts.map(contact => (
      <Contact key={contact.id} contact={contact} />
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
