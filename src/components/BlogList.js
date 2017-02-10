import React, { Component } from 'react';
import { Link } from 'react-router';

class BlogList extends Component {
  iterateBlogs(blogs) {
    let blogArr = [];
    for (let blog in blogs) {
      if (blog) {
        blogArr.push(blog);
      }
    }

    return blogArr.map( (blog) => (
      <div className="media post-card p-4" key={blog}>
        <img className="d-flex align-self-start mr-3 rounded-circle"
          src={blogs[blog].image} role="presentation" />
        <div className="media-body">
          <small className="text-muted">A blog by Robby Mitchell</small>
          <h3 className="mt-0">{blogs[blog].title}</h3>
          <p>{blogs[blog].body}</p>
          <div className="text-right">
            <Link to={`/post/${blog}`}>Read the rest</Link>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div id="BlogList">
        {this.iterateBlogs(this.props.blogs)}
      </div>
    )
  }
}

export default BlogList;
