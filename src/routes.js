import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import MainPage from './containers/MainPage'
import LoginPage from './containers/LoginPage'
import LogoutPage from './containers/LogoutPage'
import SignupPage from './containers/SignupPage'
import NotFoundPage from './components/NotFoundPage'

export default () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/logout" component={LogoutPage} />
    <Route path="/signup" component={SignupPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
