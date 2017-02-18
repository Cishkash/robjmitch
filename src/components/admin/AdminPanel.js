import React, { Component } from 'react';
import 'whatwg-fetch';

import RibbyTabs from '../pandarium/RibbyTabs.js';
import Tab from '../pandarium/Tab.js';
import AddBlogPost from './panel/AddBlogPost.js';
import DeleteBlogPost from './panel/DeleteBlogPost.js';

import '../../styles/AdminPanel.scss';

/**
 * Admin panel component allows a user to post to the blog and sign out
 * capabilities.
 *
 * @class Component.AdminPanel
 * @extends React.Component
 */
class AdminPanel extends Component {
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
        return;
      }
    ).catch( (err) => {
      this.props.router.push('/admin');
    });
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
                <AddBlogPost />
              </Tab>
              <Tab tabName="DeleteBlogPost">
                <DeleteBlogPost />
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
      tabId: 'AddBlogPost',
    }, {
      tabId: 'DeleteBlogPost'
    }
  ]
}

export default AdminPanel;
