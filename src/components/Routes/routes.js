import uuid from 'uuid'

import Home from '../../containers/pages/home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

export default [
  { key: uuid(), exact: true, path: '/', component: Home },
  { key: uuid(), exact: true, path: '/contact/add', component: Contact },
  { key: uuid(), exact: true, path: '/contact/edit/:id', component: Contact },
  { key: uuid(), exact: true, path: '/about', component: About },
  { key: uuid(), path: '*', component: NotFound },
]
