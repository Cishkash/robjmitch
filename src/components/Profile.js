import React, { Component } from 'react';
import '../styles/Profile.scss';

/**
 * Profile class component. Renders the profile section of the app.
 *
 * @class Component.Profile
 * @constructor
 * @extends React.Component
 */
class Profile extends Component {
  /**
   * Render method. Renders the layout of the component
   *
   * @method render
   * @event
   */
  render() {
    return (
      <div className="col-4">
        <div className="card">
          {/* <img className="card-img-top" src="https://placekitten.com/g/400/225" alt="Kittens"/> */}
          <div className="placeholder-400-255">
            <div className="card-image-pop">
              <div className="img-circle-100"></div>
            </div>
          </div>
          <div className="card-block">
            <h4 className="card-title">Robby Mitchell</h4>
            <p className="card-text">JavaScript extrodinare. Sure.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
