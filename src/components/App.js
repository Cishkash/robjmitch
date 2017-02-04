import React, { Component } from 'react';
import Blog from './Blog.js';
import Navigation from './Navigation.js';
import '../styles/App.scss';

/**
 * App component class.
 *
 * @class Component.App
 * @extends React.Component
 */
class App extends Component {
  /**
   * Render method. Renders the layout of the App component.
   *
   * @method render
   * @event
   */
  render() {
    return (
      <div id="App">
        <div className="container-fluid bg-faded">
          <div className="row navigation-row">
            <Navigation />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-left">
            <div className="col-9">
              <Blog />
            </div>
            <div className="col-3">
              <div className="sidebar"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
