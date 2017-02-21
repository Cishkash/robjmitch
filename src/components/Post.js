import React, { Component } from 'react';
import Remarkable from 'remarkable';
import 'whatwg-fetch';

let md = new Remarkable();
// Remarkable options
md.set({
  breaks: true
});

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
    fetch(`${process.env.API_URL}/post/${this.props.params.postId}`).then( post => {
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
    function postBody(body) {
      return {__html: md.render(body)};
    }
    return (
      <div id="Post" className="container">
        <div className="row">
          <article className="col-10 mt-3">
            <h2>{this.state.post.title}</h2>
            <small>A blog post by: {this.state.post.author}</small>
            <p className="mt-3"
               dangerouslySetInnerHTML={postBody(this.state.post.body)}></p>
          </article>
        </div>
      </div>
    );
  }
}

export default Post;
