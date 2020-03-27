import React from 'react'
import { render } from 'utils/test-utils'

import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const content = getByText(/App stuff/i)
  expect(content).toBeInTheDocument()
})
