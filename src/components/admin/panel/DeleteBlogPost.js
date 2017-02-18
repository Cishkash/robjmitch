import React, { Component } from 'react';

/**
 * App component class. Renders the navigation bar for the application and
 * provides an outlet for children routes within the index route.
 *
 * @class Component.App
 * @extends React.Component
 */
class DeleteBlogPost extends Component {
  /**
   * Render method. Renders the layout of the DeleteBlogPost component.
   *
   * @method render
   * @event
   */
  render() {
    return (
      <div id="DeleteBlogPost">
        Welcome to the Thunderdome!
      </div>
    );
  }
}

export default DeleteBlogPost;
