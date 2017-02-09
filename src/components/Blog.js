import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

import '../styles/Blog.scss';

/**
 * The blog component. Renders the blog section from the app component.
 *
 * @class Component.Blog
 * @extends Component
 */
class Blog extends Component {
  /**
   * Constructor for initializing posts state.
   *
   * @event constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = { blogs: null };
  }
  /**
   * Fetches all blog posts.
   *
   * @event componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    fetch(`${process.env.API_URL}/blogs`).then( blogs => {
      if (blogs.status === 200) {
        return blogs.json();
      }
    }).then(json => this.setState({blogs: json})).catch( ex =>
      console.error('Failed to fetch blog posts', ex)
    );
  }
  /**
   * Rendering of the blog posts layout
   *
   * @event render()
   * @return {HTML}
   */
  render() {
    if (!this.state.blogs) return null;

    return (
      <div id="Blog" className="container mt-3">
        <div className="row justify-content-md-left">
          <div className="col-9">
            {this.state.blogs.map(blog => (
              <div className="media post-card p-4" key={blog.id}>
                <img className="d-flex align-self-start mr-3 rounded-circle"
                     src={blog.image} role="presentation" />
                <div className="media-body">
                  <small className="text-muted">A blog by Robby Mitchell</small>
                  <h3 className="mt-0">{blog.title}</h3>
                  <p>{blog.body}</p>
                  <div className="text-right">
                    <Link to={`/post/${blog.id}`}>Read the rest</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-3">
            <div className="sidebar"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
