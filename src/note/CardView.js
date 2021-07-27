import React from 'react'
import { Card } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  card: {
    outline: 'none',
    margin: '20px',
    display: 'inline-block',
    width: '250px',
    minHeight: '20px'
  },
  open: {
    visibility: 'hidden'
  }
}))

function CardView (props) {
  const classes = useStyles()

  return <Card onClick={props.onClick} className={props.className} classes={{ root: classnames(classes.root, classes.card, { [classes.open]: props.open }) }}>
    {props.content}
  </Card>
}

CardView.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
  content: PropTypes.string
}

export default CardView
