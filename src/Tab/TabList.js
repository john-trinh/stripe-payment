import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

export default class TabList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const headers = React.Children.map(this.props.children, (child, index) => {
      return (
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === index })}
            onClick={() => {
              this.toggle(index);
            }}
            >
            {child.props.name}
          </NavLink>
        </NavItem>
      );
    });

    const panels = React.Children.map(this.props.children, (child, index) => {
      return(
        <TabPane tabId={index}>
          {React.cloneElement(child, child.props)}
        </TabPane>
      );
    });
    return (
      <div className="wrap-tabs">
        <Nav tabs >
          {headers}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {panels}
        </TabContent>
      </div>
    );
  }
}
