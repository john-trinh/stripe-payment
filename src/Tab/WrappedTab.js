import React from 'react';
import Tab from './Tab';

export default function WrappedTab(InsideTabComponent) {
  return class extends React.Component {
    render() {
      return(
        <Tab name={this.props.name}>
          <InsideTabComponent/>
        </Tab>
      );
    }
  }
}