import React from 'react'

const Icon = ({ handleClick, classNames }) => (
  <i
    className={`fa fa-${classNames}`}
    onClick={handleClick}
  />
)

export default Icon
