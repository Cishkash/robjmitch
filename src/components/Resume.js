import React, { Component } from 'react';
import "../styles/Resume.scss";

/**
 * Resume class compnent. Renders a cheap HTML version of my sweet resume.
 *
 * @class Component.Resume
 * @extends React.Component
 */
class Resume extends Component {
  /**
   * Renders the resume layout.
   * @TODO Move the data to the db. It's. just. easier. to. manage. and far
   *       cleaner.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <div id="Resume" className="container">
        <div className="row justify-content-around col-sm-12 col-md-8">
          <section>
            <h3 className="generic-section">Front End Developer</h3>
            <ul>
              <li>Ember developer experienced with modern JavaScript frameworks
                  and current coding and testing standards.
              </li>
              <li>Known for creating visually stunning UI with modern responsive
                  frameworks such as Bootstrap, Foundation, and a bit of my own
                  flair.
              </li>
              <li>Strong interpersonal skills to help bridge gaps between business,
                  development, and production.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="generic-section">Technical Skills</h3>
            <p>JavaScript, Ember, jQuery, QUnit, ES6, React, Sass, Node.js,
               Express, Bootstrap 3+, Foundation, HTML5, Handlebars, Git, GitHub,
               BitBucket, Jira, Photoshop, Python, CherryPy, Mako
            </p>
          </section>
          <section>
            <h3 className="generic-section">Experience</h3>
            <h5>Healthsparq, UI Developer - Portland, Oregon</h5>
            <h6 className="text-muted">May 2015 - Present</h6>
            <ul>
              <li>Primary UI developer for the treatment and service cost analysis
                  applications in the customer facing HealthSparq One healthcare
                  transparency platform utilizing the Ember JS framework.
              </li>
              <li>Pioneered the implementation of localizations throughout the
                  entirety of the application.
              </li>
              <li>Implemented the provider facing experience allowing healthcare
                  professionals to act on behalf of a user to find costs related
                  data.
              </li>
              <li>Utilized Node and React to develop an internal environment health
                  check dashboard application.
              </li>
              <li>Developed “HealthSparq Key” using Node and Ember that provide a
                  convenient call to action for clients’ external web applications.
              </li>
            </ul>

            <h5>Funcom Inc., Web Developer and Designer - Durham, North Carolina</h5>
            <h6 className="text-muted">Sept 2011 - May 2015</h6>
            <ul>
              <li>Web developer and sole designer for a number of customer facing
                  and internal web applications.
              </li>
              <li>Constructed the customer service and user petition system from
                  scratch using Python, CherryPy, and Mako.
              </li>
              <li>Created the Lego Minifigures Online beta sign up application so
                  users could opt into the beta program.
              </li>
              <li>Built all outgoing online marketing material with Strongmail, an
                  application that allows us to track user mail metrics using
                  typical marketing techniques like A/B testing.
              </li>
            </ul>

            <h3 className="generic-section">Education</h3>
            <h5>Wayne Community College</h5>
            <h6>Associates in Applied Science, Information Systems</h6>
            <ul>
              <li>Certificate in programming</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default Resume;
