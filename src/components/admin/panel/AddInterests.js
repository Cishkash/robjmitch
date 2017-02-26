import React, { Component } from 'react';

class AddInterests extends Component {

  constructor() {
    super();
    this.state = {
      articleLink: '',
      articleTitle: ''
    }
  }

  handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

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
