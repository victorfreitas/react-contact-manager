import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'

import Header from '../layouts/Header'
import AddContact from '../Contacts/AddContact'
import Contacts from '../Contacts'

const App = () => (
  <div className="app">
    <Header branding="Contact Manager" />
    <div className="container">
      <AddContact />
      <Contacts />
    </div>
  </div>
)

export default App
