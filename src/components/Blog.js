import React, { Component } from 'react';
import 'whatwg-fetch';

import BlogList from './BlogList.js';

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
    this.state = { blogs: {} };
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
            <BlogList blogs={this.state.blogs}/>
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
