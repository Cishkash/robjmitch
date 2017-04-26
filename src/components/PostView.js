import React from 'react';
import Remarkable from 'remarkable';
import 'whatwg-fetch';

import Post from './Post';

let md = new Remarkable();
// Remarkable options
md.set({
  breaks: true
});

class PostView extends Post {
  render() {
    if (!this.state.body) return null;
    function postBody(body) {
      return {__html: md.render(body)};
    }
    return (
      <div id="PostView">
        <div className="row">
          <article className="col-sm-12 col-md-10 mt-3">
            <h2>{this.state.title}</h2>
            <small>A blog post by: {this.state.author}</small>
            <p className="mt-3"
               dangerouslySetInnerHTML={postBody(this.state.body)}></p>
          </article>
        </div>
      </div>
    )
  }
}

export default PostView;
