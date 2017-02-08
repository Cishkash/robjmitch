import React, { Component } from 'react';

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
      password: ''
    }
  }
  /**
   * Sends the authentication credentials to firebase to authenticate.
   *
   * @method authenticate
   * @return {undefined}
   */
  authenticate() {
    console.log("Logging into Firebase admin");
    return;
  }
  /**
   * Updates the value of the email or password state.
   *
   * @method handleChange
   * @param  {object} evt The event object when chaning the DOM
   * @return {undefined}
   */
  handleChange = evt => {
    const target = evt.target;
    const name = target.name;

    this.setState({
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
              <button onClick={this.authenticate} type="button"
                      className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPortal;
