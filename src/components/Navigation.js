import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Navigation.scss';

/**
 * Profile class component. Renders the profile section of the app.
 *
 * @class Component.Profile
 * @extends React.Component
 */
class Navigation extends Component {
  /**
   * Render method. Renders the layout of the Navigation component. Contains
   * a modified
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    return (
      <div id="Navigation" className="container-fluid bg-faded">
        <div className="row navigation-row">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="rjm-brand">Robby Mitchell</h3>
              </div>
              <nav className="navbar navbar-fluid navbar-toggleable-md">
                <button className="navbar-toggler navbar-toggler-right"
                        type="button" data-toggle="collapse"
                        data-target="#navbar-nav-main"
                        aria-controls="navbar-nav-main" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav-main">
                  <div className="navbar-nav">
                    <small>
                      <Link to="/" className="nav-item nav-link">Home</Link>
                    </small>
                    <small>
                      <Link to="/blog" className="nav-item nav-link">
                        Blog
                      </Link>
                    </small>
                    <small>
                      <Link to="/resume" className="nav-item nav-link">
                        Resume
                      </Link>
                    </small>
                    <small>
                      <a className="nav-item nav-link"
                         href="https://www.linkedin.com/in/robjmitch">
                         LinkedIn
                      </a>
                    </small>
                    <small>
                      <a className="nav-item nav-link"
                         href="https://github.com/Cishkash">
                         GitHub
                      </a>
                    </small>
                  </div>
                </div>
              </nav> {/* navbar */}
            </div> {/* row */}
          </div> {/* .container */}
        </div> {/* .navigation-row */}
      </div>
    );
  }
}

export default Navigation;
