import { useState } from 'react'
import Auth from './Auth'

function useProvideAuth () {
  const [user, setUser] = useState(null)

  const signin = cb => {
    return Auth.signin(() => {
      setUser('user')
      cb()
    })
  }

  const signout = cb => {
    return Auth.signout(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signin,
    signout
  }
}

export default useProvideAuth
