import React, { Component } from 'react';
import Loading from './Loading.js';
import 'whatwg-fetch';

/**
 * The Admin component. Allows a user to log in to firebase to make or update
 * blog posts.
 *
 * @class Component.AdminPortal
 * @extends React.Component
 */
class AdminPortal extends Component {
  /**
   * The constructor for the admin class. Initializes state of the input fields
   *
   * @event constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: false,
      loading: false
    }
  }
  /**
   * Adds a check for an authenticated user before they access this
   * route. If unathenticated, the user is redirected to the `/adminpanel`
   * route to access their admin controls.
   *
   * @event componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    fetch(`${process.env.API_URL}/admin/currentuser`).then(
      (response) => {
        if (response.status !== 200) throw response;
        this.props.router.push('/adminpanel');
      }
    );
  }
  /**
   * Sends the authentication credentials to firebase to authenticate.
   *
   * @method authenticate
   * @return {undefined}
   */
  authenticate() {
    // Reset the error state
    this.setState({
      error: false,
      loading: true
    });

    // Make a request to authenticate with firebase.
    fetch(`${process.env.API_URL}/admin/login?email=${this.state.email}&password=${this.state.password}`).then(
      response => {
        this.setState({ loading: false });
        if (response.status !== 200) throw response;
        // This is where we would send our now authenticated user to the admin
        // panel.
        this.props.router.push('/adminpanel');
      }
    ).catch( (err) => {
        this.setState({error: true});
      }
    );
  }
  /**
   * Updates the value of the email or password state.
   *
   * @method handleChange
   * @param  {object} evt The event object when chaning the DOM
   * @return {undefined}
   */
  handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;

    this.setState({
      error: false,
      [name]: target.value
    });
  }
  /**
   * Render method. Renders the layout of the Admin component.
   *
   * @method render
   * @event
   */
  render() {
    const isError = this.state.error;
    const isLoading = this.state.loading;
    return (
      <div id="Admin" className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="col-3">
            <div className="card p-4 text-center">
              <h5>Welcome to robjmitch admin</h5>
              <small>Guess I'm not good at hiding things...</small>
              <div className="card-block text-right">
                <input type="email" name="email"
                       className="form-control"
                       placeholder="Email address"
                       value={this.state.email}
                       onChange={this.handleChange}/><br/>
                <input type="password" name="password"
                       className="form-control"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handleChange}/><br/>
              </div>
              <button onClick={() => this.authenticate()} type="button"
                      className="btn btn-primary">
                Sign in
              </button>

              {/* Show an error if the request errors */}
              {isError ? (
                <small className="alert alert-danger mt-4" role="alert">
                  Log in attempt failed
                </small>
              ) : null}
              {/* Render a loading spinner when making a request */}
              {isLoading ? (
                <div className="mt-4">
                  <Loading />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPortal;
