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
   * Handles the initial evaluation of the active tab against the default tab.
   *
   * @event componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.evaluateTabs(this.props.activeTab, this.props.defaultTab)
  }
  /**
   * Handles calling the evaluateTabs on new properties passed into the
   * component.
   *
   * @event componentWillReceiveProps
   * @returns {undefined}
   */
  componentWillReceiveProps(nextProp) {
    this.evaluateTabs(this.props.activeTab, nextProp.activeTab);
  }
  /**
   * Evaluates the tabs between default/updated properties passed into the
   * component.
   *
   * @method evaluateTabs
   * @param {String} currentProp The current property passed set or initially
   *                             passed into the component.
   * @param {String} nextProp    The property our currentProp evaluates against
   */
  evaluateTabs(currentProp, nextProp) {
    if (currentProp === nextProp) {
      this.setState({ showTab: true });
    } else {
      this.setState({ showTab: false });
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
        className={this.state.showTab ? 'show' : 'hidden-sm-up'}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab;
