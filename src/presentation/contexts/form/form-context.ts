import { createContext, Dispatch, SetStateAction } from 'react'

interface State {
  isLoading: boolean
  email: string
  password: string
  errorMessage: string
  emailError: string
  passwordError: string
}

export interface ContextProps {
  state: State
  setState: Dispatch<SetStateAction<State>>
}

export default createContext({} as ContextProps)
