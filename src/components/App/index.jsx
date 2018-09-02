import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './style.css'

import Header from '../layouts/Header'
import Container from '../layouts/Container'
import Routes from '../Routes'

const App = () => (
  <Router>
    <Fragment>
      <Header brand="Contact Manager" />
      <Container>
        <Routes />
      </Container>
    </Fragment>
  </Router>
)

export default App
