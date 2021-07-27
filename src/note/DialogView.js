import React, { useEffect, useState } from 'react'
import { Card } from '@material-ui/core'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { Editor, EditorState, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'

const useStyles = makeStyles(() => ({
  card: {
    outline: 'none',
    margin: '20px',
    display: 'inline-block',
    width: '250px'
  }
}))

function DialogView (props) {
  const classes = useStyles()
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(ContentState.createFromText(props.content))
  )

  useEffect(() => {
    props.onChange(editorState.getCurrentContent().getPlainText())
  }, [editorState])

  return <Card classes={{ root: classnames(classes.card) }}>
    <Editor editorState={editorState} onChange={setEditorState} />
  </Card>
}

DialogView.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func
}

export default DialogView
