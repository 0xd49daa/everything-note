import { useHistory } from 'react-router-dom'
import React from 'react'
import useAuth from './useAuth'

function AuthButton () {
  const history = useHistory()
  const auth = useAuth()

  return auth.user ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          auth.signout(() => history.push('/'))
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

export default AuthButton
