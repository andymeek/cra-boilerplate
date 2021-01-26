import React from 'react'
import { render } from 'utils/test-utils'

import App from './App'

test('renders App text', () => {
  const { getByText } = render(<App />)
  const content = getByText(/App/i)
  expect(content).toBeInTheDocument()
})
