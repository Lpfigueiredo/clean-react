// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from './../../contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  let error: string
  switch (props.name) {
    case 'password':
      error = state.passwordError
      break
    case 'email':
      error = state.emailError
      break
  }
  const getStatus = (): string => {
    return error ? '🔴' : '💚'
  }
  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
      <span data-testid={`${props.name as string}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
