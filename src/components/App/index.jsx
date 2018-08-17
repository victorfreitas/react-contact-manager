import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'

import Header from '../layouts/Header'
import AddContact from '../Contacts/AddContact'
import Contacts from '../Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    )
  }
}

export default App
