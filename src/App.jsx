import { hot } from 'react-hot-loader'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ProvideAuth from './auth/ProvideAuth'
import Login from './login/Login'
import PrivateRoute from './auth/PrivateRoute'
import MainView from './main/MainView'
import './dexie/db'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <Router>
          <div>
            <Switch>
              <Route path='/public'>
                <PublicPage />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <PrivateRoute path='/app'>
                <MainView />
              </PrivateRoute>
              <Route path='/'>
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    </ThemeProvider>
  )
}

function PublicPage () {
  return <h3>Public</h3>
}

export default hot(module)(App)
