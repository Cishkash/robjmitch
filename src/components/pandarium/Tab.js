import React, { Component } from 'react';

/**
 * The Tab class. When nested from the `RibbyTabs` component, will handle
 * display state of the current active tab.
 *
 * @class Component.Tab
 * @extends React.Component
 */
class Tab extends Component {
  /**
   * Tab constructor. Handles setting the initial state of `showTab`
   *
   * @event constructor
   * @constructor
   * @returns {undefined}
   */
  constructor() {
    super();
    this.state = {
      showTab: false
    }
  }
  /**
   * Responsible for creating the id of the container component.
   *
   * @param  {String} name The tabName property passed into the component
   * @return {String}
   */
  generateTabId = (name) => {
    return `Tab-${name}`;
  }
  /**
   * The render event of the component. Renders the layout of the `Tab`
   * component.
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    if (!this.props.activeTab) return null;
    return (
      <div id={this.generateTabId(this.props.tabName)}
        className={this.props.activeTab === this.props.tabName ? 'show' : 'hidden-sm-up'}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab;
