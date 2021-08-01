import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import Note from './../note/Note'
import { useLiveQuery } from 'dexie-react-hooks'
import db from '../dexie/db'
import AddNote from '../note/AddNote'
import reducer, { INITIAL_STATE } from './reducer/reducer'
import Auth from '../auth/Auth'
import withReducer from './reducer/withReducer'

const useStyles = makeStyles(() => ({
  container: {
  }
}))

function MainView () {
  const classes = useStyles()

  const notes = useLiveQuery(
    () => db.notes
      .orderBy('modifiedAt')
      .reverse()
      .limit(20)
      .toArray()
  ) || []

  useEffect(() => {
    db.syncable.connect('skynet', 'https://siasky.net', {
      seed: Auth.seed,
      poolInterval: 10000,
      rootItem: 'everything-note'
    })
  }, [])

  return (
      <Container>
        <div className={classes.container}>
          <AddNote />
          {notes.map((note) => {
            return <Note key={note.id} id={note.id} content={note.content} />
          })}
        </div>
      </Container>
  )
}

export default withReducer(reducer, INITIAL_STATE)(MainView)
