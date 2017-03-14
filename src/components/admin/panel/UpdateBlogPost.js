import React, { Component } from 'react';
import 'whatwg-fetch';

import BlogList from '../../BlogList.js';

/**
 * DeleteBlogPost class handles the removal of blog posts within firebase. Will
 * remove the blog and the sister post objects.
 *
 * @class Component.DeleteBlogPost
 * @extends React.Component
 */
class UpdateBlogPost extends Component {
  /**
   * DeleteBlogPost constructor. Sets initial state.
   *
   * @constructor
   * @event constructor
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      deleteSuccess: false
    }
  }
  /**
   * Responsible for reqeusting the deletion of blog posts. Sends the request to
   * the backend to delete the related blog and post objects associated with the
   * key of the component a user removes.
   *
   * Used as a closure method to the BlogList component which ends ultimately
   * determines whether the `BlogList` component will display the delete button
   * or not.
   *
   * @method handleDelete
   * @param  {evt} evt Event object
   * @return {undefined}
   */
  handleDelete = (evt) => {
    if (!evt.target.value) return null;
    fetch(`${process.env.API_URL}/deleteBlog/${evt.target.value}`).then(
      (response) => {
        if (!response) {
          throw new Error(response);
        }
        this.props.fetchBlogs();
      }).catch( (err) => {
        console.warn(err);
        this.setState({ error: true });
      }
    )
  }
  /**
   * Render method. Renders the layout of the DeleteBlogPost component.
   *
   * @TODO Needs interstitial confirmation of deletion modal.
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    if (!this.props.blogs) return null;
    return (
      <div id="DeleteBlogPost">
        <BlogList
          update="true"
          onDelete={this.handleDelete}
          blogs={this.props.blogs} />
      </div>
    );
  }
}

export default UpdateBlogPost;
