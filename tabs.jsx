'use strict';

import React from 'react';

const Headers = React.createClass({
  render: function() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title,
          klass = (selected === index ? "active" : "");
      return (
          <span
            key={index}
            className={klass}
            onClick={this.props.onTabChosen.bind(null, index)}>
            {title}
            </span>
      );
    });

    return (
        <div>{headers}</div>
    );
  }
});  

const Tabs = React.createClass({
  getInitialState: function() {
    return { selectedPane: 0 };
  },

  selectTab: function(num) {
    this.setState({ selectedPane: num });
  },

  render: function() {
    let pane = this.props.panes[this.state.selectedPane];
    
    return (
        <div className="tabs">
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <p>
            {pane.content}
          </p>
        </div>
    );
  }
});

export default Tabs
