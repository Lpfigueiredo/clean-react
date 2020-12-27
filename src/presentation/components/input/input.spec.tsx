/* eslint-disable no-use-before-define */
import React from 'react'
import { render } from '@testing-library/react'
import Input from './input'
import Context, { ContextProps } from '../../contexts/form/form-context'

describe('Input Component', () => {
  test('Should begin with readonly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{} as ContextProps}>
        <Input name="field" />
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
