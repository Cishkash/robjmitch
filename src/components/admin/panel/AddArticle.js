import React, { Component } from 'react';
import 'whatwg-fetch';

/**
 * AddInterests class for adding interesting articles found on the web.
 *
 * @class Component.AddInterests
 * @extends React.Component
 */
class AddArticle extends Component {
  /**
   * Constructor for the `AddInterests` route. Sets initial state.
   *
   * @event constructor
   * @constructor
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      articleLink: '',
      articlePosted: '',
      articleTitle: ''
    }
  }
  /**
   * Adds an article to Firebase.
   *
   * @method addArticle
   * @returns {undefined}
   */
  addArticle() {
    // Check for url format
    const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    if (regex.test(this.state.articleLink)) {
      const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                articleLink: this.state.articleLink,
                articleTitle: this.state.articleTitle
              })
            };

      fetch(`${process.env.API_URL}/addArticle`, options).then(
        (response) => {
          // Set the state for successfully posting an article
          this.setState({
            articleLink: '',
            articlePosted: true,
            articleTitle: ''
          });

          // Reset the resolved feedback
          setTimeout( () => {
            this.setState({
              articlePosted: ''
            });
          }, 3000);
          return null;
        }
      )
    } else {
      // Toggles a validation error when regex doesn't match.
      this.setState({
        validError: true
      });

      // Reset any validation error announcements
      setTimeout( () => {
        this.setState({
          validError: false
        })
      }, 3000);
    }
  }
  /**
   * Handles user input changes.
   *
   * @method handleChange
   * @param  {Object} evt The event object of the modified element
   * @return {undefined}
   */
  handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }
  /**
   * The rendered layout of the `AddInterests` component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    return (
      <article className="card">
        <div className="card-header">
          Add an interesting article
        </div>
        <div className="card-block">
          <input type="text" name="articleTitle"
            className="form-control"
            placeholder="Article title"
            value={this.state.articleTitle}
            onChange={this.handleChange}/><br/>
          <input type="text" name="articleLink"
            className={`form-control ${this.state.validError ? 'error-ease' : ''}`}
            placeholder="Article link"
            value={this.state.articleLink}
            onChange={this.handleChange}/>
        </div>
        <div className="card-footer text-right">
          {this.state.articlePosted ? (
            <small className="alert alert-success mr-3" role="alert">
              Article successfully posted!
            </small>
          ) : null}
          <button onClick={() => this.addArticle()} type="submit"
            className="btn btn-primary">
            Add
          </button>
        </div>
      </article>
    );
  }
}

export default AddArticle;
