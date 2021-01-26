import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'utils/theme'
import Supermarket from 'app/App'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Supermarket />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
