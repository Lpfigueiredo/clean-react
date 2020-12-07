// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '../../contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, errorMessage } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { errorMessage && <span data-testid="main-error" className={Styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
