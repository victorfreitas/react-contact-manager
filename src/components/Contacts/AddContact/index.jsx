import React from 'react'

import { Consumer } from '../../../Context'
import Body from './Body'
import Header from './Header'

const AddContact = () => (
  <Consumer>
    {({ contacts, dispatch }) => (
      <div className="card mb-3">
        <Header />
        <Body contacts={contacts} dispatch={dispatch} />
      </div>
    )}
  </Consumer>
)

export default AddContact
