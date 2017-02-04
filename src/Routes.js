import React from 'react';
import { Router, Route } from 'react-router'
import App from './components/App.js';

/**
 * Sets up the routes for the application
 * @param {Object} props Will take an arbitrary amount of params that can be
 *                       applied to the Router component
 */
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}/>
  </Router>
);

export default Routes;
