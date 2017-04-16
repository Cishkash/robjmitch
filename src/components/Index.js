import React, { Component } from 'react';

/**
 * Index component. The IndexRoute of the application. Renders the "about me"
 * portion of the app.
 *
 * @class Component.Index
 * @extends React.Component
 */
class Index extends Component {
  /**
   * Renders the layout of the Index component. IndexRoute of the application.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="Index">
        <img src="/images/landing-image.jpg" className="img-fluid" role="presentation" />
        <div className="container mt-5">
          <div className="row">
            <section className="col-sm-12 col-md-9">
              <h2>Let's talk about me for a little bit</h2>
              <p className="mt-4">
                I'm a five year experienced front end web developer. You'll
                typically find me working with Javascript, HTML, and CSS using
                Ember or React JS frameworks, SASS as a CSS preprocessor, and a
                variety of modules in between. Although most of my code belongs
                to corporate applications, I do have a couple public projects on
                my Github and have become more active with having public
                projects.
              </p>
              <p>
                While I do define my professional career as a front end
                developer, I am open to developing on the back end using NodeJS.
                I have connected to public APIs like Vimeo and League of Legends
                to create small applications, one of which I used in a
                competition (the other was just for fun) and even have
                experience connecting to firebase to serve up some nosql data.
              </p>
              <p>
                When I'm not coding, you'll find me either in the gym or
                watching cartoons (big Steven Universe fan). I also play a few
                video games in the MMO, MOBA, and fighting game genres and I'm
                one of those "PC master race" guys. I like to travel too! A bit
                of a mixed bag of hobbies.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Index;
