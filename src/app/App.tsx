import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const AppContainer = styled.section`
  background-color: #f9f7fc;
`

function App() {
  return (
    <AppContainer>
      <Container maxWidth="md">App stuff</Container>
    </AppContainer>
  )
}

export default App
