import React from 'react';
import Remarkable from 'remarkable';
import 'whatwg-fetch';

import Post from '../Post';

let md = new Remarkable();
// Remarkable options
md.set({
  breaks: true
});

class PostUpdate extends Post {
  constructor() {
    super();
  }
  /**
   * Adds a check for an authenticated user before they are able to access this
   * route.Just a tricksy way till I sort out having the same dynamic segment
   * across two different routes.
   *
   * @event componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    fetch(`${process.env.API_URL}/admin/currentuser`).then(
      (response) => {
        if (response.status !== 200) throw response;
        return null;
      }
    ).catch( (err) => {
      this.props.router.push('/');
    });
  }
  updatePost() {
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
  }

  render() {
    if (!this.state.title || !this.state.author || !this.state.body) return null;
    return (
      <div id="PostUpdate">
        <div className="row">
          <article className="col-10 mt-3">
            <h5>Title</h5>
            <input className="d-flex w-100 form-control"
              name="title"
              onChange={() => this.handleChange}
              value={this.state.title}/>
            <div className="my-3">
              <strong>Author:</strong><br />
              <small>A blog post by:
                <input className="form-control"
                  name="author"
                  onChange={() => this.handleChange}
                  value={this.state.author}/>
              </small>
            </div>
            <div className="my-3">
              <strong>Body:</strong>
              <textarea className="form-control d-flex w-100 mt-3"
                name="body"
                onChange={() => this.handleChange}
                value={this.state.body}>
              </textarea>
            </div>
            <div className="card-footer text-right">
              <button onClick={() => this.updatePost()} type="submit"
                className="btn btn-primary">
                Submit update
              </button>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default PostUpdate;
