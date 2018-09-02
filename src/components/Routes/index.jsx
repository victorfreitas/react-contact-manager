import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} />
    ))}
  </Switch>
)

export default Routes
