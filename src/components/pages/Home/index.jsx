import React, { Component, Fragment } from 'react'

import Contact from '../../../containers/pages/home/contact'

class Home extends Component {
  state = {
    infoId: '',
  }

  componentDidMount() {
    const { fetchContacts } = this.props
    fetchContacts()
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
          <span className="text-primary">Contacts</span>
        </h1>
        {this.renderContacts()}
      </Fragment>
    )
  }
}

export default Home
