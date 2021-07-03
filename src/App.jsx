import { hot } from 'react-hot-loader'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import ProvideAuth from './auth/ProvideAuth'
import AuthButton from './auth/AuthButton'
import Login from './login/Login'
import PrivateRoute from './auth/PrivateRoute'

function App () {
  return (
    <ProvideAuth>
      <Router>
        <div>
          {/* <Login /> */}
          <Switch>
            <Route path='/public'>
              <PublicPage />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/protected'>
              <ProtectedPage />
            </PrivateRoute>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  )
}

function PublicPage () {
  return <h3>Public</h3>
}

function ProtectedPage () {
  return <h3>Protected</h3>
}

export default hot(module)(App)
