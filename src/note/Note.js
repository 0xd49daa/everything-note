import React, { useCallback, useState } from 'react'
import Card from '@material-ui/core/Card'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/styles'
import classnames from 'classnames'
import Dialog from '@material-ui/core/Dialog'

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
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    if (!open) {
      setOpen(true)
    }
  }, [open])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const card = <Card onClick={handleClick} classes={{ root: classnames(classes.card, { open }) }}>
    mainview {props.id}
  </Card>

  return <>
    {card}
    {open && <Dialog classes={{ root: classes.modal }} open onClose={handleClose} transitionDuration={{ enter: 1000, exit: 1000 }}>
      {card}
    </Dialog>}
  </>
}

export default Note
