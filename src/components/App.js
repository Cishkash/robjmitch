import React, { Component } from 'react';
import Blog from './Blog.js';
import Profile from './Profile.js';
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
      <div className="App">
        <div className="Blog container">
          <div className="row">
            {/* Profile section */}
            <Profile />
            {/* Blog section */}
            <Blog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
