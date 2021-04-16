import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';

const App = () => (
  <AuthWrapper>
    <Router>
      <Switch>
        <PrivateRoute exact path='/'>
          <Dashboard />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  </AuthWrapper>
);

export default App;
