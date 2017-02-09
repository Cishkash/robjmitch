import React, { Component } from 'react';
import '../styles/Loading.scss';

/**
 * This component is just a loading spinner. The gold is in the scss.
 *
 * @class Component.Loading
 * @extends React.Component
 */
class Loading extends Component {
  /**
   * Render method. Renders the layout of the Loading component.
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    return (
      <div id="Loading">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    );
  }
}

export default Loading;
