import { createContext } from 'react'

export default createContext({ isLoading: false, errorMessage: '', emailError: 'Campo obrigatório', passwordError: 'Campo obrigatório' })
