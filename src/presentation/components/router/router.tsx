// eslint-disable-next-line no-use-before-define
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

// eslint-disable-next-line react/prop-types
const Router: React.FC<Props> = ({ makeLogin }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
