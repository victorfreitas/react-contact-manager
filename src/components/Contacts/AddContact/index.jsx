import React from 'react'

import Body from './Body'
import Header from './Header'

const getTitle = (props) => {
  const { match } = props
  return `${match.params.id ? 'Edit' : 'Add'} Contact`
}

const AddContact = props => (
  <div className="card mb-3">
    <Header title={getTitle(props)} />
    <Body {...props} />
  </div>
)

export default AddContact
