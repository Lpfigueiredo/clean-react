import { createContext, Dispatch, SetStateAction } from 'react'

interface State {
  isLoading: boolean
  email: string
  errorMessage: string
  emailError: string
  passwordError: string
}

interface ContextProps {
  state: State
  setState: Dispatch<SetStateAction<State>>
}

export default createContext({} as ContextProps)
