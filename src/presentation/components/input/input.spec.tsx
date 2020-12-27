/* eslint-disable no-use-before-define */
import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context, { ContextProps } from '../../contexts/form/form-context'

const makeSut = (): RenderResult => {
  return render(
    <Context.Provider value={{} as ContextProps}>
      <Input name="field" />
    </Context.Provider>
  )
}

describe('Input Component', () => {
  test('Should begin with readonly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
