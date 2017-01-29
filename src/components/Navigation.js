import React, { Component } from 'react';
import '../styles/Navigation.scss';

/**
 * Profile class component. Renders the profile section of the app.
 *
 * @class Component.Profile
 * @constructor
 * @extends React.Component
 */
class Navigation extends Component {
  /**
   * Render method. Renders the layout of the component
   *
   * @method render
   * @event
   */
  render() {
    return (
      <div id="Navigation" className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="rjm-brand">Robby Mitchell</h3>
          </div>
          <nav className="navbar navbar-fluid navbar-toggleable-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <small><a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a></small>
                <small><a className="nav-item nav-link" href="#">Blog</a></small>
                <small><a className="nav-item nav-link" href="#">Resume</a></small>
                <small><a className="nav-item nav-link" href="#">LinkedIn</a></small>
                <small><a className="nav-item nav-link" href="#">GitHub</a></small>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
