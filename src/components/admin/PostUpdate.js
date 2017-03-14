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
  render() {
    if (!this.state.post) return null;
    // function postBody(body) {
    //   return {__html: md.render(body)};
    // }
    return (
      <div id="PostUpdate">
        <div className="row">
          <article className="col-10 mt-3">
            <h5>Title</h5>
            <input className="d-flex w-100 form-control" value={this.state.post.title}/>
            <div className="my-3">
              <strong>Author:</strong><br />
              <small>A blog post by:
                <input className="form-control" value={this.state.post.author}/>
              </small>
            </div>
            <div className="my-3">
              <strong>Body:</strong>
              <textarea className="form-control d-flex w-100 mt-3"
                 value={this.state.post.body}></textarea>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default PostUpdate;
