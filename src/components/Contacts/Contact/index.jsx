import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

import { Consumer } from '../../../Context'
import Info from './Info'
import Icon from './Icon'

class Contact extends Component {
  onClickDelete(dispatch) {
    const { contact } = this.props

    dispatch({
      type: 'DELETE_CONTACT',
      payload: contact.id,
    })
  }

  handleClickInfo = () => {
    const { contact, handleClickInfo } = this.props
    handleClickInfo(contact)
  }

  renderCard = ({ dispatch }) => {
    const { contact, infoId } = this.props
    const showInfo = infoId === contact.id

    return (
      <div className="card card-body mb-3 contact">
        <h4>
          {contact.name}
          <Icon handleClick={this.handleClickInfo} classNames={`sort-${showInfo ? 'up' : 'down'} ml-1 cp`} />
          <Icon handleClick={this.onClickDelete.bind(this, dispatch)} classNames="times icon-delete cp text-danger" />
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
