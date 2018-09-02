import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './style.css'

import Info from './Info'
import Icon from './Icon'

class Contact extends Component {
  onClickDelete = () => {
    const { contact, deleteContact } = this.props
    deleteContact(contact.id)
  }

  handleClickInfo = () => {
    const { contact, handleClickInfo } = this.props
    handleClickInfo(contact)
  }

  render() {
    const { contact, infoId } = this.props
    const showInfo = infoId === contact.id
    const classes = classNames({
      'sort-up': showInfo,
      'sort-down': !showInfo,
    }, 'ml-1 cp')

    return (
      <div className="card card-body mb-3 contact">
        <h4>
          {contact.name}
          <Icon click={this.handleClickInfo} classNames={classes} />
          <Icon click={this.onClickDelete} classNames="times icon-delete cp text-danger" />
          <Link to={`/contact/edit/${contact.id}/`}>
            <i className="fa fa-pencil icon-edit" />
          </Link>
        </h4>
        <Info show={showInfo} contact={contact} />
      </div>
    )
  }
}

export default Contact
