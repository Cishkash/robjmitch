import React, { Component } from 'react';
import 'whatwg-fetch';

class AddBlogPost extends Component {

  constructor() {
    super();
    this.state = {
      blogBody: '',
      blogPosted: '',
      error: false,
      postAuthor: '',
      postBody: '',
      title: ''
    }
  }
  /**
  * Handles setting of the state of all inputs on their respective spot in the
  * state object.
  *
  * @param  {String} evt The value of the input
  * @return {undefined}
  */
  handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;

    this.setState({
      blogPosted: false,
      [name]: target.value
    });
  }
  /**
   * Allows an authenticated user to log out of firebase.
   *
   * @method logout
   * @return {undefined}
   */
  logOut() {
    fetch(`${process.env.API_URL}/admin/logout`).then(
      (response) => {
        if (response.status === 200) {
          this.props.router.push('/');
        }
      }, (err) => {
        console.warn('There was an issue logging the user out.', err);
      }
    );
  }
  /**
   * Allows an authenticated user to make a blog post request. It will take the
   * state of all inputs elements and submit them to the back end.
   *
   * @TODO Submit the user input as markdown and sanitize it all in the backend
   *       just in case a user gets crafty.
   *
   * @method submitBlog
   * @returns {undefined}
   */
  submitBlog() {
    const blogBody = this.state.blogBody,
          postAuthor = this.state.postAuthor,
          postBody = this.state.postBody,
          title = this.state.title,
          options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              blogBody: blogBody,
              postAuthor: postAuthor,
              postBody: postBody,
              title: title
            })
          };

    // Do not submit when we are missing required fields.
    if (!blogBody || !postAuthor || !postBody || !title) {
      this.setState({ error: true });
      return null;
    }
    // Prepare state for new blog post.
    this.setState({ blogPosted: false });

    fetch(`${process.env.API_URL}/admin/addblog`, options).then(
      (response) => {
        // Remove the state of all the input boxes
        this.setState({
          blogPosted: true,
          blogBody: '',
          postAuthor: '',
          postBody: '',
          title: ''
        });
      }, (err) => {
        this.setState({ error: err });
      }
    );
  }
  render() {
    let isError = this.state.error;
    return (
      <div id="AddBlogPost">
        <div className="card mb-3">
          <div className="card-header">
            Blog post title
          </div>
          <div className="card-block">
            <input type="text" name="title"
              className="form-control"
              placeholder="Blog title"
              value={this.state.title}
              onChange={this.handleChange}/><br/>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            Blog description
          </div>
          <div className="card-block">
            <textarea type="text" name="blogBody"
              className="form-control mb-3"
              placeholder="Add a short blog body description"
              value={this.state.blogBody}
              onChange={this.handleChange}><br />
            </textarea>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Post description
          </div>
          <div className="card-block">
            <input type="text" name="postAuthor"
              className="form-control"
              placeholder="Post author"
              value={this.state.postAuthor}
              onChange={this.handleChange}/><br />
            <textarea type="text" name="postBody"
              className="form-control mb-3"
              placeholder="Add a post body"
              value={this.state.postBody}
              onChange={this.handleChange}><br />
            </textarea>
          </div>
          <div className="card-footer text-right">
            {this.state.blogPosted ? (
              <small className="alert alert-success mr-3" role="alert">
                Blog successfully posted!
              </small>
            ) : null}
            <button onClick={() => this.submitBlog()} type="submit"
                    className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>

        {isError ? (
          <small className="alert alert-danger d-flex mt-3" role="alert">
            You are missing required fields
          </small>
        ) : null}
      </div>
    )
  }
}

export default AddBlogPost;
