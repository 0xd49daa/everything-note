import client from '../skynet/skynetClient';
import isLocalhost from '../skynet/isLocalhost';

const DOMAIN = '0xd49'

const Auth = {
  isAuthenticated: false,
  signin (cb) {
    Auth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout (cb) {
    Auth.isAuthenticated = false
    setTimeout(cb, 100)
  },
  async init () {
    try {
      const mySky = await client.loadMySky(DOMAIN, { dev: isLocalhost })
      const loggedIn = await mySky.checkLogin()

      setMySky(mySky)
      setLoggedIn(loggedIn)

      if (loggedIn) {
        setUserId(await mySky.userID())
      }
    } catch (e) {
      console.error(e)
    }
  }

}

export default Auth
