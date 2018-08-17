import React, { Component, Fragment } from 'react'

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
        {value => (
          <Fragment>
            <h1 className="display-4 mb-2">
              <span className="text-primary">Contact</span> List
            </h1>
            {this.renderContacts(value)}
          </Fragment>
        )}
      </Consumer>
    )
  }
}

export default Contacts
