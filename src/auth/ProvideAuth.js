import React from 'react'
import AuthContext from './AuthContext'
import useProvideAuth from './useProvideAuth'

function ProvideAuth ({ children }) {
  const auth = useProvideAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default ProvideAuth
