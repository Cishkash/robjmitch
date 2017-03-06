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
   * Responsible for creating the unique id of the container component. Useful
   * for styling standards on a component based nested style.
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
   * @NOTE All tabs are rendered and hidden from view if not the active tab.
   *       This was intentional so we retain the user's input when they type
   *       some input on one tab and if they were to switch tabs and return,
   *       everything would be as it was.
   *
   * @TODO Needs to be unhitched from bootstrap `show/hidden-sm-up`. Possibly
   *       affected by the style `display` property instead or included with
   *       the base css file for the stripped module.
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
