import React, { Component } from 'react';
import '../styles/Index.scss';

class Index extends Component {
  render() {
    return (
      <div id="Index">
        <img src="/images/landing-image.jpg" className="img-fluid" role="presentation" />
        <div className="container">
          <div className="row">
            <section className="about-me">
              <h2>Let's talk about me for a little bit</h2>
              <p>I am a web developer.</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Index;
