import React from 'react'
import PropTypes from 'prop-types'

import Fragment from '../../Fragment'

const Info = ({ show, contact }) => (
  <Fragment show={show}>
    <ul className="list-group">
      <li className="list-group-item">Email: {contact.email}</li>
      <li className="list-group-item">Phone: {contact.phone}</li>
    </ul>
  </Fragment>
)

Info.propTypes = {
  show: PropTypes.bool.isRequired,
  contact: PropTypes.object.isRequired,
}

export default Info
