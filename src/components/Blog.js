import React, { Component } from 'react';
import '../styles/Blog.scss';

/**
 * The blog component. Renders the blog section from the app component.
 *
 * @class Component.Blog
 * @constructor
 * @extends React.Component
 */
class Blog extends Component {
  render() {
    return (
      <div className="col-8">
        <nav className="navbar navbar-fluid bg-faded">
          <h1 className="navbar-brand text-left">Some cool logo</h1>
        </nav>
      </div>
    );
  }
}

export default Blog;
