import React, { Component } from 'react';
import 'whatwg-fetch';

/**
 * The specific full post of a blog entry by dynamic segment.
 *
 * @class Component.Post
 * @extends React.Component
 */
class Post extends Component {
  /**
   * The constructor of the component. Using this to set the state of the
   * component before anything is mounted/rendered.
   *
   * @event constructor
   * @constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {post: null}
  }
  /**
   * Fetches the post of the dynamic segment after the component mounts.
   * Segment Id is determined by the blogs.id from the blogs response.
   *
   * @event componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    fetch('http://localhost:3001/post/' + this.props.params.postId).then( post => {
      if (post.status === 200) {
        return post.json();
      }
    }).then(post => this.setState({post: post})).catch( ex => {
      console.error('Failed to fetch the post', ex);
    });
  }
  /**
   * Render method. Renders the layout of the Post component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    if (!this.state.post) return null;
    return (
      <div id="Post" className="container">
        <div className="row">
          <div className="col-10 mt-3">
            <h2>{this.state.post.title}</h2>
            <small>A blog post by: {this.state.post.author}</small>
            <p className="mt-3">{this.state.post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;