import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './style.css'

import Fragment from '../Fragment'
import Spinner from '../../containers/layouts/spinner'
import Header from '../layouts/Header'
import Container from '../layouts/Container'
import Routes from '../Routes'

const App = () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Fragment>
      <Spinner />
      <Header brand="Contact Manager" />
      <Container>
        <Routes />
      </Container>
    </Fragment>
  </BrowserRouter>
)

export default App
