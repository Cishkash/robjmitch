import React, { Component } from 'react';

import '../../styles/RibbyTabs.scss';

const { Children, cloneElement } = React;

/**
 * Tabbing component to handle tab state among child tabs.
 *
 * @class Component.RibbyTabs
 * @extends React.Component
 */
class RibbyTabs extends Component {
  /**
   * Constructor initializing RibbyTabs state
   *
   * @event constructor
   * @constructor
   * @returns {undefined}
   */
  constructor(props) {
    super();
    this.state = {
      activeTab: props.defaultTab
    }
  }
  /**
   * Handles the setting of the activeTab state to the selected button value
   *
   * @TODO Resolve the double click issue that's occurring when selecting a
   *       different tab option.
   *
   * @param  {Object} evt The event object of the `onMouseUp` event on button
   *                      select.
   * @method handleTab
   * @return {undefined}
   */
  handleTab = (evt) => {
    this.setState({
      activeTab: evt.target.value
    })
  }
  /**
   * Renders layout hook of the `RibbyTabs` component.
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    if (!this.props.defaultTab) return null;
    return (
      <div id="RibbyTabs">
        {this.props.tabList.map(
          (tab) => {
            return (
              <button
                className="btn-custom-tab mr-3 mb-3 py-2 px-3"
                key={tab.tabId}
                value={tab.tabId}
                onMouseUp={this.handleTab}>
                {tab.tabId}
              </button>
            )
          }
        )}
        <div>
          {/* Yield the active tab to the children's prop object */}
          {Children.map(this.props.children,
            (child) => {
              return cloneElement(child, {
                activeTab: this.state.activeTab,
                defaultTab: this.props.defaultTab
              });
            }
          )}
        </div>
      </div>
    )
  }
}

export default RibbyTabs;
