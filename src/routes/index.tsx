import { Switch, Route } from 'react-router-dom'

import { UserList } from '../UserList'
import { UserForm } from '../UserForm'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={UserList} />
    <Route path="/form" exact component={UserForm} />
  </Switch>
)

export default Routes
