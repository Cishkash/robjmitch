import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import '../styles/App.scss';

/**
 * App component class. Renders the navigation bar for the application and
 * provides an outlet for children routes within the index route.
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
        <Navigation />
        <div className="app-outlet">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
