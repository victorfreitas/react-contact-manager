import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

import { Consumer } from '../../../Context'
import Info from './Info'
import Icon from './Icon'

import request from '../../../helpers/request'

class Contact extends Component {
  async onClickDelete(dispatch) {
    const { contact: { id } } = this.props

    await request.delete(`/users/${id}`)
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  handleClickInfo = () => {
    const { contact, handleClickInfo } = this.props
    handleClickInfo(contact)
  }

  renderCard = ({ dispatch }) => {
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
          <Icon handleClick={this.handleClickInfo} classNames={classes} />
          <Icon handleClick={this.onClickDelete.bind(this, dispatch)} classNames="times icon-delete cp text-danger" />
          <Link to={`/contact/edit/${contact.id}/`}>
            <i className="fa fa-pencil icon-edit" />
          </Link>
        </h4>
        <Info show={showInfo} contact={contact} />
      </div>
    )
  }

  render() {
    return (
      <Consumer>
        {this.renderCard}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  handleClickInfo: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired
}

export default Contact
