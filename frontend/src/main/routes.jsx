import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <div>
      <Route exact path='/' component={Todo} />
      <Route path='/todo' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todo' />
    </div>
  </HashRouter>
)