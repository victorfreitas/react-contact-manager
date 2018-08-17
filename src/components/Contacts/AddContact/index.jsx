import React from 'react'

import { Consumer } from '../../../Context'
import Body from './Body'
import Header from './Header'

const AddContact = props => (
  <Consumer>
    {value => (
      <div className="card mb-3">
        <Header />
        <Body {...value} {...props} />
      </div>
    )}
  </Consumer>
)

export default AddContact
