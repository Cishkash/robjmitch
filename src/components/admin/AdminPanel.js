import React, { Component } from 'react';
import 'whatwg-fetch';

import RibbyTabs from '../pandarium/RibbyTabs.js';
import Tab from '../pandarium/Tab.js';
import AddBlogPost from './panel/AddBlogPost.js';
import DeleteBlogPost from './panel/DeleteBlogPost.js';
import AddArticle from './panel/AddArticle.js';

import '../../styles/AdminPanel.scss';

/**
 * Admin panel component allows a user to post to the blog and sign out
 * capabilities. Also, manages blog state between child component for proper
 * data down actions up methodology.
 *
 * @class Component.AdminPanel
 * @extends React.Component
 */
class AdminPanel extends Component {
  /**
   * Constructor for the AdminPanel component. Sets initial state.
   *
   * @event constructor
   * @constructor
   * @returns {undefined}
   */
  constructor() {
    super();

    this.state = {
      authenticated: false,
      blogs: null,
      error: false
    }
  }
  /**
   * Adds a check for an authenticated user before they are able to access this
   * route. If unathenticated, the user is redirected to the `/adminportal`
   * route to authenticate again.
   *
   * @event componentWillMount
   * @returns {undefined}
   */
  componentWillMount() {
    fetch(`${process.env.API_URL}/admin/currentuser`).then(
      (response) => {
        if (response.status !== 200) throw response;
        this.setState({ authenticated: true })
      }
    ).catch( (err) => {
      this.props.router.push('/admin');
    });
  }
  /**
   * Fetches blogs upon mounting so we're able to delete (and eventually update)
   * blog posts.
   *
   * @event componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.fetchBlogs();
  }
  /**
   * Fetch method for keeping up with blog data.
   * Used when component mounts and as a closure method. Uses the ES6
   * fat arrow to stay within the proper scope of this component to maintain
   * state on properties here and not within components that use this as a
   * closure method.
   *
   * @method fetchBlogs
   * @return {undefined}
   */
  fetchBlogs = () => {
    // Reset the error state before fetching
    this.setState({ error: false });

    fetch(`${process.env.API_URL}/blogs`).then( (blogs) => {
      if (blogs.status === 200) {
        return blogs.json();
      } else if (blogs.status === 404) {
        this.setState({ blogs: {} });
      } else {
        throw new Error(blogs.json());
      }
    })
      .then( (json) => this.setState({blogs: json}))
      .catch( (err) => {
        console.warn(err);
        this.setState({ error: true });
      }
    );
  }
  /**
   * Render method. Renders the layout of the AdminPanel component.
   *
   * @event render
   * @return {HTML}
   */
  render() {
    if (!this.props) return null;
    return (
      <div id="AdminPanel" className="container">
        <div className="row no-gutter my-4">
          <div className="col-9">
            <RibbyTabs tabList={this.props.tabList} defaultTab="AddBlogPost">
              <Tab tabName="AddBlogPost">
                <AddBlogPost update={this.fetchBlogs}/>
              </Tab>
              <Tab tabName="DeleteBlogPost">
                <DeleteBlogPost
                  fetchBlogs={this.fetchBlogs}
                  blogs={this.state.blogs}/>
              </Tab>
              <Tab tabName="AddArticle">
                <AddArticle />
              </Tab>
            </RibbyTabs>
          </div>

          <div className="col-3">
            <div className="card">
              <div className="card-header">
                Admin Controls
              </div>
              <div className="list-group">
                <button type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => this.logOut()}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Sets default props on the component. I'm simply supplying the tabList as a
// property to move it outside of my render component here.
AdminPanel.defaultProps = {
  tabList: [
    {
      tabId: 'AddBlogPost'
    }, {
      tabId: 'DeleteBlogPost'
    }, {
      tabId: 'AddArticle'
    }
  ]
}

export default AdminPanel;
