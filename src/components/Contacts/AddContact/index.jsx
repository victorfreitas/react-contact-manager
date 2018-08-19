import React from 'react'

import { Consumer } from '../../../Context'
import Body from './Body'
import Header from './Header'

const getTitle = (props) => {
  const { match } = props
  return `${match.params.id ? 'Edit' : 'Add'} Contact`
}

const AddContact = props => (
  <Consumer>
    {value => (
      <div className="card mb-3">
        <Header title={getTitle(props)} />
        <Body {...value} {...props} />
      </div>
    )}
  </Consumer>
)

export default AddContact
