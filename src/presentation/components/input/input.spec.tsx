/* eslint-disable no-use-before-define */
import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Input from './input'
import Context, { ContextProps } from '../../contexts/form/form-context'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={{} as ContextProps}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}

describe('Input Component', () => {
  test('Should begin with readonly', () => {
    const sut = makeSut('field')
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readonly on focus', () => {
    const sut = makeSut('field')
    const input = sut.getByTestId('field') as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
