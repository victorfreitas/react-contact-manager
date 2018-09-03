import React from 'react'

import './style.css'

import Fragment from '../../Fragment'

const Spinner = ({ isWait }) => (
  <Fragment show={isWait}>
    <div className="loading">
      <div className="spinner" />
    </div>
  </Fragment>
)

export default Spinner
