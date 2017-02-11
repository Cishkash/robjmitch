import React, { Component } from 'react';
import 'whatwg-fetch';

import '../../styles/AdminPanel.scss';

/**
 * Admin panel component allows a user to post to the blog and sign out
 * capabilities.
 *
 * @class Component.AdminPanel
 * @extends React.Component
 */
class AdminPanel extends Component {
  /**
   * The constructor sets the initial state of the component
   *
   * @event constructor
   * @constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      blogBody: '',
      postAuthor: '',
      postBody: '',
      title: ''
    };
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

    this.setState({[name]: target.value});
  }
  /**
   * Adds a check for an authenticated user before they are able to access this
   * route. If unathenticated, the user is redirected to the `/adminportal`
   * route to authenticate again.
   *
   * @event componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    fetch(`${process.env.API_URL}/admin/currentuser`).then(
      (response) => {
        if (response.status !== 200) throw response;
        return;
      }
    ).catch( (err) => {
      this.props.router.push('/admin');
    });
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
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        blogBody: this.state.blogBody,
        postAuthor: this.state.postAuthor,
        postBody: this.state.postBody,
        title: this.state.title
      })
    };

    fetch(`${process.env.API_URL}/admin/addblog`, options).then(
      (response) => {
        this.setState({
          blogPosted: true
        });

        setInterval( () => {
          this.setState({
            blogPosted: false
          });
        }, 5000);
      }, (err) => {
        this.setState({ error: err });
      }
    );
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
   * Render method. Renders the layout of the AdminPanel component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="AdminPanel" className="container">
        <div className="row no-gutter my-4">

          <div className="col-9">
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
                <button onClick={() => this.submitBlog()} type="submit"
                        className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>

          </div>

          <div className="col-3">
            <div className="card">
              <div className="card-header">
                Admin Controls
              </div>
              <div className="list-group">
                <button type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => this.logOut()}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
