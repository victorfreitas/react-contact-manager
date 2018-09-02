import React from 'react'

import links from './links'
import Item from './Item'

const Menu = () => (
  <ul className="navbar-nav">
    {links.map(link => <Item {...link} />)}
  </ul>
)

export default Menu
