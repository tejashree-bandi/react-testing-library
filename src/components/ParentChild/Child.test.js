import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import Child from './Child'

afterEach(cleanup)

test('child renders the given value and calls the click handler on click', () => {
  const handleClickMock = jest.fn()
  const {container} = render(<Child value={1} onClick={handleClickMock} />)
  fireEvent.click(container.firstChild)
  //console.log(container.firstChild, 'first child')
  expect(handleClickMock).toHaveBeenCalledTimes(1)
})
