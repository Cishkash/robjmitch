import React, { Component } from 'react';
import Navigation from './Navigation.js';
import '../styles/App.scss';
import landingImage from '../../public/images/landing-image.jpg';

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
        <img src={landingImage} className="img-fluid" role="presentation" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
