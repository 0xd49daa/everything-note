import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import useAuth from './useAuth'
import PropTypes from 'prop-types'

function PrivateRoute ({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.logged ? (
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

PrivateRoute.propTypes = {
  children: PropTypes.node
}

export default PrivateRoute
