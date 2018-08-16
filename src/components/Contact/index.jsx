import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

import { Consumer } from '../../Context'
import Info from './Info'
import Icon from './Icon'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showContactInfo: false,
    }
  }

  onClickSort = () => {
    const { showContactInfo } = this.state

    this.setState({
      showContactInfo: !showContactInfo,
    })
  }

  onClickDelete(dispatch) {
    const { contact } = this.props

    dispatch({
      type: 'DELETE_CONTACT',
      payload: contact.id,
    })
  }

  renderCard = ({ dispatch }) => {
    const { contact } = this.props
    const { showContactInfo } = this.state

    return (
      <div className="card card-body mb-3 contact">
        <h4>
          {contact.name}
          <Icon handleClick={this.onClickSort} classNames="sort-down ml-1 cp" />
          <Icon handleClick={this.onClickDelete.bind(this, dispatch)} classNames="times icon-delete cp text-danger" />
        </h4>
        <Info show={showContactInfo} contact={contact} />
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
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired
}

export default Contact
