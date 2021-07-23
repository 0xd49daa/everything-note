import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import Note from './../note/Note'

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    '& .MuiCard-root.open': {
      visibility: 'hidden'
    }
  }
}))

function MainView () {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
          return <Note key={id} id={id} />
        })}
      </div>
    </Container>
  )
}

export default MainView
