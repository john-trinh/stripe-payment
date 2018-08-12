import React from 'react';

export default class HeadCell extends React.Component {
  render() {
    return (<th>{this.props.content}</th>);
  }
};

