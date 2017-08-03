import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/BlogList.scss';

/**
 * BlogList component. Iterates through the `blogs` array sent from the `/blogs`
 * request to produce sleek looking cards.
 *
 * A blog list can be set up by:
 * ```
 * <BlogList blogs={this.props.blogs} />
 * -or-
 * <BlogList
 *   onDelete={this.handleDelete}
 *   onUpdate={this.handleUpdate}
 *   blogs={this.props.blogs} />
 * ```
 * Latter onClick parameter will make the red "danger" button appear to remove
 * the blog post. This option reauthenticates the user on the backend to ensure
 * we are only allowing users authenticated with firebase access to delete
 * anything from the app.
 *
 * @class Component.BlogList
 * @extends React.Component
 */
class BlogList extends Component {
  /**
   * Iterates then maps the layout of all blog posts within firebase
   *
   * @method iterateBlogs
   * @returns {HTML}
   */
  iterateBlogs(blogs) {
    const blogArr = [];
    for (let blog in blogs) {
      if (blog) {
        blogArr.push(blog);
      }
    }

    return blogArr.map( (blog) => (
      <article className="d-flex media col-sm-12 col-md-3 my-3" key={blog}>
        <div className="media-body p-3 post-card h-100">
          <small className="text-muted">A blog by Robby Mitchell</small>
          <h3 className="mt-0">{blogs[blog].title}</h3>
          <p>{blogs[blog].body}</p>
          <div className="d-inline-flex">
            <span className="d-inline-flex align-self-start">
              <Link to={`/post/${blog}/view`}>Read the rest</Link>
            </span>
          </div>
          <div className="col">
            {this.props.onDelete ? (
              <button type="button"
                className="btn btn-danger btn-sm d-inline-flex mr-3"
                aria-label="Close"
                value={blog}
                onClick={(e) => this.props.onDelete(e)}>
                Delete post
              </button>
            ) : ''}
            {this.props.update ? (
              <Link
                className="btn btn-primary btn-sm d-inline-flex mr-3"
                to={`/post/${blog}/update`}>
                Update post
              </Link>
            ) : ''}
          </div>
        </div>
      </article>
    )).reverse();
  }
  /**
   * Renders the layout of the `BlogList` component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="BlogList" className="d-inline-flex flex-wrap">
        {this.iterateBlogs(this.props.blogs)}
      </div>
    )
  }
}

export default BlogList;
