import React, { Fragment } from 'react'

import './style.css'

import Header from '../layouts/Header'
import Container from '../layouts/Container'
import Routes from '../Routes'

const App = () => (
  <Fragment>
    <Header brand="Contact Manager" />
    <Container>
      <Routes />
    </Container>
  </Fragment>
)

export default App
