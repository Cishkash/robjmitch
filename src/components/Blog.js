import React, { Component } from 'react';
import 'whatwg-fetch';

import ArticleList from './ArticleList.js';
import BlogList from './BlogList.js';

/**
 * The blog component. Renders the blog section from the app component.
 *
 * @class Component.Blog
 * @extends Component
 */
class Blog extends Component {
  /**
   * Constructor for initializing blogs state.
   *
   * @event constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      blogs: {},
      error: false
    };
  }
  /**
   * Fetches all blog posts.
   *
   * @event componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    // Reset the error state before fetching
    this.setState({ error: false });

    fetch(`${process.env.API_URL}/blogs`).then( blogs => {
      if (blogs.status === 200) {
        return blogs.json();
      } else {
        throw new Error(blogs.json());
      }
    })
      .then( (json) => this.setState({blogs: json}))
      .catch( (err) => {
        console.warn(err)
        this.setState({ error: true });
      }
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
            {this.state.error ? (
              <div className="alert alert-info" role="alert">
                <strong>Oh no!</strong> There doesn't appear to be anything here.
              </div>
            ) : ( <BlogList blogs={this.state.blogs}/> )}
          </div>
          <aside className="col-3">
            <div className="sidebar">
              <ArticleList />
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Blog;
