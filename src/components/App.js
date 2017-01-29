import React, { Component } from 'react';
import Blog from './Blog.js';
import Navigation from './Navigation.js';
import '../styles/App.scss';

/**
 * App component class.
 *
 * @class Component.App
 * @constructor
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
      <div id="App" className="container-fluid bg-faded">
        <div className="row">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default App;
