import React, { Component } from 'react';

import '../../styles/RibbyTabs.scss';

const { Children, cloneElement } = React;

/**
 * Pretty slick lightweight tabbing component to handle state between child `Tab`
 * components
 *
 * A RibbyTabs™ can be setup easily by passing in an iterable array of objects
 * with tabId's like:
 * ```
 * tabList: [{tabId: 'thisName'}, {tabId: 'thatName'}];
 * ```
 * as a `tabList` props:
 * ```
 * <RibbyTabs tabList={tabList}>
 * ```
 * -or- to specify a default open tab upon tab render:
 * ```
 * <RibbyTabs tabList={tabList} defaultTab="thisName">
 * ```
 *
 * Then use the `Tab` component with your `tabId` names to handle the content nested
 * inside of the `RibbyTabs` component:
 * ```
 * let tabList = [{tabId: 'thisName'}, {tabId: 'thatName'}];
 * <RibbyTabs tabList={tabList} defaultTab="thisName">
 *   <Tab tabName="thisName">
 *     This is this content
 *   </Tab>
 *   <Tab tabName="thatName">
 *     This is that content
 *   </Tab>
 * </RibbyTabs>
 * ```
 *
 * @TODO Add accessibility.
 *
 * @author Robby Mitchell
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
                className="btn-custom-tab mr-3 mb-3 py-1 px-2"
                key={tab.tabId}
                value={tab.tabId}
                onMouseDown={this.handleTab}>
                {tab.displayName}
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
