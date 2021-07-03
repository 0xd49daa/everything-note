import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import useAuth from './useAuth'

function PrivateRoute ({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )}
    />
  )
}

export default PrivateRoute
