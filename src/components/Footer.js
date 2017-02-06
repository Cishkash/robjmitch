import React, { Component } from 'react';
import IconHeart from "./svg/IconHeart";
import '../styles/Footer.scss';

class App extends Component {
  /**
   * Render method. Renders the layout of the Footer component.
   *
   * @method render
   * @event
   */
  render() {
    return (
      <div id="Footer" className="container-fluid bg-inverse text-white">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <small>Made with <span><IconHeart /></span> by Robby "Ribbeth" Mitchell</small><br/>
                <small>&copy;2017 Robert Mitchell</small>
              </div>
              <aside className="col-3">
                <small>
                  Made with <a href="https://facebook.github.io/react/">React</a>.
                </small><br/>
                <small>
                  Find this project on <a href="https://github.com/Cishkash/robjmitch">Github</a>.
                </small>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
