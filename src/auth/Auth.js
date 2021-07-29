export const LOCALSTORAGE_ENTRY = 'seed'

const Auth = {
  get seed () {
    return window.localStorage.getItem(LOCALSTORAGE_ENTRY)
  },
  get isAuthenticated () {
    return !!window.localStorage.getItem(LOCALSTORAGE_ENTRY)
  },
  signin (seed) {
    window.localStorage.setItem(LOCALSTORAGE_ENTRY, seed)
  },
  signout () {
    window.localStorage.removeItem(LOCALSTORAGE_ENTRY)
  }
}

export default Auth
