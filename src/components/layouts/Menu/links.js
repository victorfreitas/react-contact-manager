import uuid from 'uuid'

export default [
  { key: uuid(), path: '/', icon: 'home', title: 'Home' },
  { key: uuid(), path: '/contact/add', icon: 'plus', title: 'Add' },
  { key: uuid(), path: '/about', icon: 'question', title: 'About' },
]
