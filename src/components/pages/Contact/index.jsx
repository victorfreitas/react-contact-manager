import React from 'react'
import PropTypes from 'prop-types'

import Body from './Body'
import Header from './Header'

const getTitle = ({ match }) => `${match.params.id ? 'Edit' : 'Add'} Contact`

const Contact = props => (
  <div className="card mb-3">
    <Header title={getTitle(props)} />
    <Body {...props} />
  </div>
)

Contact.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Contact
