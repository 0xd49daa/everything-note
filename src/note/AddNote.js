import React, { useCallback, useContext } from 'react'
import CardView from './CardView'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/styles'
import MainViewContext from '../main/MainViewContext'
import { ACTIONS } from '../main/reducer/reducer'
import NoteModel from '../main/NoteModel'

const useStyles = makeStyles(() => ({
  addNote: {
    padding: '16px'
  }
}))

function AddNote (props) {
  const classes = useStyles()

  const [state, dispatch] = useContext(MainViewContext)

  const handleClick = useCallback(async () => {
    const id = await NoteModel.add()
    dispatch({ type: ACTIONS.SET_OPEN_ITEM, value: id })
  }, [])

  return <>
    <CardView onClick={handleClick} open={false} content={<AddIcon />} className={classes.addNote} />
  </>
}

AddNote.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string
}

export default AddNote
