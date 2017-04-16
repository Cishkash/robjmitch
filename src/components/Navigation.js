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
    // Just a little js magic to toggle the nav menu for mobile. Bootstrap's
    // built in data attr toggling wasn't working so I made my own solution.
    function toggleNav() {
      let element = document.getElementById('navbar-nav-main');

      element.classList.toggle('show');
    }
    return (
      <div id="Navigation" className="container-fluid bg-faded">
        <div className="row navigation-row">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-md-left">
                <h3 className="rjm-brand">Robby Mitchell</h3>
              </div>
              <nav className="navbar navbar-fluid
                navbar-toggleable-md
                navbar-light
                w-100">
                <button className="navbar-toggler align-self-center"
                        type="button"
                        onClick={toggleNav}
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav-main">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-item nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog" className="nav-item nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/resume" className="nav-item nav-link">
                        Resume
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-item nav-link"
                         href="https://www.linkedin.com/in/robjmitch">
                         LinkedIn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-item nav-link"
                         href="https://github.com/Cishkash">
                         GitHub
                      </a>
                    </li>
                  </ul>
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
