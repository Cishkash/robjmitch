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
    this.state = {
      author: '',
      body: '',
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
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
    }).then(post => {
      this.setState({
        author: post.author,
        body: post.body,
        title: post.title
      });
    }).catch( ex => {
      console.error('Failed to fetch the post', ex);
    });
  }

  handleChange(evt) {
    const target = evt.target,
          name = target.name;

    this.setState({
      [name]: target.value
    });
  }
  /**
   * Render method. Renders the layout of the Post component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="Post" className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Post;
