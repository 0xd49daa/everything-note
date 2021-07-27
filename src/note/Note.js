import React, { useCallback, useContext, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import CardView from './CardView'
import DialogView from './DialogView'
import PropTypes from 'prop-types'
import db from '../dexie/db'
import MainViewContext from '../main/MainViewContext'
import { ACTIONS, VARS } from '../main/reducer/reducer'
import NoteModel from '../main/NoteModel'

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    '& $card': {
      margin: 0,
      backgroundColor: '#1e2323'
    }
  },
  card: {
    outline: 'none',
    margin: '20px',
    display: 'inline-block',
    width: '250px'
  }
}))

function Note (props) {
  const originalId = useRef(props.id)
  const classes = useStyles()

  const [state, dispatch] = useContext(MainViewContext)

  const open = state[VARS.OPEN_ITEM] === props.id

  const handleClick = useCallback(() => {
    if (!open) {
      dispatch({ type: ACTIONS.SET_OPEN_ITEM, value: props.id })
    }
  }, [open])

  const handleClose = useCallback(() => {
    dispatch({ type: ACTIONS.SET_OPEN_ITEM, value: null })
  }, [])

  const handleOnChange = useCallback(async (content) => {
    await NoteModel.update(originalId.current, content)
  }, [])

  return <>
    <CardView onClick={handleClick} open={open} content={props.content} />
    {open && <Dialog
      classes={{ root: classes.modal }} open onClose={handleClose} transitionDuration={{
        enter: 1000,
        exit: 1000
      }}
    >
      <DialogView content={props.content} onChange={handleOnChange} />
    </Dialog>}
  </>
}

Note.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string
}

export default Note
