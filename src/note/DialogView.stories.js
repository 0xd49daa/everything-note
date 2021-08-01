import React from 'react';
import DialogView from './DialogView';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme';

export default {
  title: 'DialogView',
}

export function DialogViewStory() {
    return <ThemeProvider theme={theme}>
        <DialogView content={'Test content'} onChange={() => {}} />
    </ThemeProvider>
}