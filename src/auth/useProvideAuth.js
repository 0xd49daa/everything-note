import { useState } from 'react'
import Auth from './Auth'

function useProvideAuth () {
  const [logged, setLogged] = useState(Auth.isAuthenticated)

  const signin = seed => {
    Auth.signin(seed)
    setLogged(true)
  }

  const signout = cb => {
    Auth.signout()
    setLogged(false)
  }

  return {
    logged,
    signin,
    signout
  }
}

export default useProvideAuth
