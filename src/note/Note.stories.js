import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme';
import Note from './Note';
import withReducer from '../main/reducer/withReducer';
import reducer, { VARS } from '../main/reducer/reducer';

export default {
  title: 'Note',
}

export function NoteStory() {
    const WrappedNote = withReducer(reducer, {
        [VARS.OPEN_ITEM]: 'TEST_ID'
    })(Note)

    return <ThemeProvider theme={theme}>
        <WrappedNote content={'Test content'} id={'TEST_ID'} />
    </ThemeProvider>
}