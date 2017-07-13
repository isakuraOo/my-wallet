import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from '../views/login';

const AppRouter = () => (
    <Router>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
    </Router>
)

export default AppRouter