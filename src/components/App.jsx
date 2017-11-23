import React from 'react';
import createReactClass from 'create-react-class';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default createReactClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
