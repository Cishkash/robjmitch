import React, { Component } from 'react';

class Admin extends Component {
  authenticate() {
    console.log('You attempted to authenticate');
    return;
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
                       placeholder="Email address"/><br/>
                <input type="password" name="password"
                       className="form-control"
                       placeholder="Password"/><br/>
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

export default Admin;
