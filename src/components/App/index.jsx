import React from 'react'
import { Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'

import Header from '../layouts/Header'
import Contacts from '../Contacts'
import About from '../pages/About'
import AddContact from '../Contacts/AddContact'
import NotFound from '../pages/NotFound'

const App = () => (
  <div className="app">
    <Header branding="Contact Manager" />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact/add" component={AddContact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
