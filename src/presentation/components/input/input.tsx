// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from './../../contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const value = useContext(Context)
  let error: string
  switch (props.name) {
    case 'password':
      error = value.passwordError
      break
    case 'email':
      error = value.emailError
      break
    default:
      error = ''
      break
  }
  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name as string}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
