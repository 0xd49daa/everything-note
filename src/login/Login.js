// import { useHistory, useLocation } from 'react-router-dom'
// import React from 'react'
// import useAuth from '../auth/useAuth'
//
// function Login () {
//   const history = useHistory()
//   const location = useLocation()
//   const auth = useAuth()
//
//   console.log(auth)
//
//   const { from } = location.state || { from: { pathname: '/' } }
//   const login = () => {
//     auth.signin(() => {
//       history.replace(from)
//     })
//   }
//
//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   )
// }
//
// export default Login

import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import Stack from '@material-ui/core/Stack'
import { useCallback, useEffect, useState } from 'react'
import useAuth from '../auth/useAuth'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}))

export default function SimpleContainer () {
  const [seed, setSeed] = useState('')
  const { logged, signin } = useAuth()
  const history = useHistory()

  const classes = useStyles()

  const handleSeedChange = useCallback((e) => {
    setSeed(e.target.value)
  }, [])

  const handleLogin = useCallback(() => {
    signin(seed)
  }, [signin, seed])

  useEffect(() => {
    if (logged) {
      history.push('/protected')
    }
  }, [logged])

  return (
    <>
      <CssBaseline />
      <Container classes={{ root: classes.container }}>
        <Box className={classes.box}>
          <Stack spacing={2}>
            <TextField id='outlined-basic' label='Enter your seed phrase' variant='outlined' value={seed} onChange={handleSeedChange} />
            <Button variant='contained' color='success' onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}
