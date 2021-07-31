import React, { useReducer, useMemo, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import Note from './../note/Note'
import { useLiveQuery } from 'dexie-react-hooks'
import db from '../dexie/db'
import AddNote from '../note/AddNote'
import reducer, { INITIAL_STATE } from './reducer/reducer'
import MainViewContext from './MainViewContext'
import Auth, { LOCALSTORAGE_ENTRY } from '../auth/Auth'

const useStyles = makeStyles(() => ({
  container: {
  }
}))

function MainView () {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const contextValue = useMemo(() => [state, dispatch], [state, dispatch])

  const notes = useLiveQuery(
    () => db.notes
      .orderBy('modifiedAt')
      .reverse()
      .limit(20)
      .toArray()
  ) || []

  useEffect(() => {
    db.syncable.connect('skynet', 'https://siasky.net', {
      seed: Auth.seed
    })
  }, [])

  return (
    <MainViewContext.Provider value={contextValue}>
      <Container>
        <div className={classes.container}>
          <AddNote />
          {notes.map((note) => {
            return <Note key={note.id} id={note.id} content={note.content} />
          })}
        </div>
      </Container>
    </MainViewContext.Provider>
  )
}

export default MainView
