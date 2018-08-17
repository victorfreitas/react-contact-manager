import React from 'react'

import Form from './Form'

export default props => {
  return (
    <div className="card-body">
      <Form {...props} />
    </div>
  )
}
