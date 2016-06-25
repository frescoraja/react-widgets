"use strict";

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AutoComplete = React.createClass({
  getInitialState: function() {
    return { query: "" };
  },

  handleChange: function(e) {
    this.setState({ query: e.currentTarget.value });
  },

  matches: function() {
    const matches = [];
    if (this.state.query.length === 0) {
      return this.props.items;
    }

    this.props.items.forEach(name => {
      let sub = name.slice(0, this.state.query.length);
      if (sub.toLowerCase() === this.state.query.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  },

  selectName: function(e) {
    let name = e.currentTarget.innerText;
    this.setState({ query: name });
  },

  render: function() {
    let results = this.matches().map((result, i) => {
      return (
          <li key={i} onClick={this.selectName}>{result}</li>
          );
    });

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.query} />
          <ul>
            <ReactCSSTransitionGroup
              transitionName="auto" 
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
    );
  }
});

export default AutoComplete
