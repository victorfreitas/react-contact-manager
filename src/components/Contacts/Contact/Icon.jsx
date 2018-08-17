import React from 'react'

export default ({ handleClick, classNames }) => (
  <i
    className={`fa fa-${classNames}`}
    onClick={handleClick}
  />
)
