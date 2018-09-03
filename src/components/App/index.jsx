import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './style.css'

import Header from '../layouts/Header'
import Container from '../layouts/Container'
import Routes from '../Routes'

const App = () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Fragment>
      <Header brand="Contact Manager" />
      <Container>
        <Routes />
      </Container>
    </Fragment>
  </BrowserRouter>
)

export default App
