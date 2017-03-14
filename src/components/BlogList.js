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
      <article id="BlogList" className="media post-card p-4 my-3 rounded" key={blog}>
        <img className="d-flex align-self-start mr-3 rounded-circle"
          src={blogs[blog].image} role="presentation" />
        <div className="media-body">
          <small className="text-muted">A blog by Robby Mitchell</small>
          <h3 className="mt-0">{blogs[blog].title}</h3>
          <p>{blogs[blog].body}</p>
          <div className="row justify-content-end">
            <div className="col text-right">
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
              <span className="d-inline-flex">
                <Link to={`/post/${blog}/view`}>Read the rest</Link>
              </span>
            </div>
          </div>
        </div>
      </article>
    ));
  }
  /**
   * Renders the layout of the `BlogList` component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="BlogList">
        {this.iterateBlogs(this.props.blogs)}
      </div>
    )
  }
}

export default BlogList;
