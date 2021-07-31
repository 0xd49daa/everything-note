import React from 'react'
import AuthContext from './AuthContext'
import useProvideAuth from './useProvideAuth'
import PropTypes from 'prop-types'

function ProvideAuth ({ children }) {
  const auth = useProvideAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

ProvideAuth.propTypes = {
  children: PropTypes.node
}

export default ProvideAuth
