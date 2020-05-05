import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import Parent from './Parent'

afterEach(cleanup)

test('child renders the given value and calls the click handler on click', () => {
  const {getByTestId} = render(<Parent />)
  const button = getByTestId('child-button')
  expect(button.textContent).toBe('1')
  fireEvent.click(button)
  expect(button.textContent).toBe('2')
})
