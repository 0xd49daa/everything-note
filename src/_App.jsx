import { hot } from 'react-hot-loader'
import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import client from './skynet/skynetClient'
import isLocalhost from './skynet/isLocalhost'

const App = () => {
  const [mySky, setMySky] = useState()
  const [loggedIn, setLoggedIn] = useState()
  const [userId, setUserId] = useState()
  const [data, setData] = useState()
  const [dataLink, setDataLink] = useState()

  useEffect(() => {
    async function initMySky () {
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

    initMySky()
  }, [])

  const handleMySkyLogin = useCallback(async () => {
    const status = await mySky.requestLoginAccess()
    setLoggedIn(status)
    if (status) {
      setUserId(await mySky.userID())
    }
  }, [mySky])

  const handleSaveJson = useCallback(async () => {
    try {
      const {
        data,
        dataLink
      } = await mySky.setJSON(`${DOMAIN}/root.json`, { message: 'hello' })
      console.log(data, dataLink)
    } catch (error) {
      console.log(error)
    }
  }, [mySky])

  const handleReadJson = useCallback(async () => {
    try {
      // Get discoverable JSON data from the given path.
      const {
        data,
        dataLink
      } = await mySky.getJSON(`${DOMAIN}/root.json`)

      setData(JSON.stringify(data, null, 4))
      setDataLink(dataLink)
    } catch (error) {
      console.log(error)
    }
  }, [mySky])

  return (
    <div className='App'>
      {loggedIn === false && (
        <Button onClick={handleMySkyLogin} color='green' size='medium'>
          Log in
        </Button>
      )}
      {loggedIn === true && (
        <>
          <Button onClick={handleSaveJson} color='green' size='medium'>
            Save data
          </Button>
          <Button onClick={handleReadJson} color='green' size='medium'>
            Load data
          </Button>
        </>
      )}
      {loggedIn ? 'Logged in as ' : 'Not logged in'}
      {userId}<br />
      {dataLink}<br />
      {data}
    </div>
  )
}

export default hot(module)(App)
