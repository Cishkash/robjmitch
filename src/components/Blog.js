import React, { Component } from 'react';
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
    this.state = { posts: null };
  }
  /**
   * Fetches all blog posts.
   *
   * @event componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    fetch('http://localhost:3001/posts').then( posts => {
      if (posts.status === 200) {
        return posts.json();
      }
    }).then(json => this.setState({posts: json})).catch( ex =>
      console.error('Failed to fetch blog posts', ex)
    );
  }
  /**
   * Rendering of the blog posts layout
   *
   * @event render()
   * @return {Object}
   */
  render() {
    if (!this.state.posts) return null;

    return (
      <div id="Blog" className="container">
        <div className="row justify-content-md-left">
          <div className="col-9">
            {this.state.posts.map(post => (
              <div className="media post-card" key={post.title}>
                <img className="d-flex align-self-start mr-3 rounded-circle"
                     src={post.image} alt="Just up here thinkin" />
                <div className="media-body">
                  <h3 className="mt-0">{post.title}</h3>
                  <p>{post.body}</p>
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
