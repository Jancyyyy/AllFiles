import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './FORM/Home'
import Edit from './FORM/Edit'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/edit" exact component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
