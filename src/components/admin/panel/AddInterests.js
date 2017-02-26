import React, { Component } from 'react';

/**
 * AddInterests class for adding interesting articles found on the web.
 *
 * @class Component.AddInterests
 * @extends React.Component
 */
class AddInterests extends Component {
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
      articleTitle: ''
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
            className="form-control"
            placeholder="Article link"
            value={this.state.articleLink}
            onChange={this.handleChange}/>
        </div>
      </article>
    );
  }
}

export default AddInterests;
