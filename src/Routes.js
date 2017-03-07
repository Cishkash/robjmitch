import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

// Import the route components
import App from './components/App.js';
import Index from './components/Index.js';
import Blog from './components/Blog.js';
import Post from './components/Post.js';
import AdminPortal from './components/admin/AdminPortal.js';
import AdminPanel from './components/admin/AdminPanel.js';
import Resume from './components/Resume.js';

/**
 * Sets up the routes for the application
 * @param {Object} props Will take an arbitrary amount of params that can be
 *                       applied to the Router component
 */
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="blog" component={Blog}/>
      <Route path="post/:postId" component={Post}/>
      <Route path="resume" component={Resume}/>
      <Route path="admin">
        <IndexRoute component={AdminPortal}/>
        <Route path="adminpanel" component={AdminPanel}/>
      </Route>
    </Route>
  </Router>
);

export default Routes;
