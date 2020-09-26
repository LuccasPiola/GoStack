import React from 'react'
import { Switch } from 'react-router-dom'
import DashBoard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Route from './Route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={DashBoard} isPrivate />
    </Switch>
  )
}

export default Routes
