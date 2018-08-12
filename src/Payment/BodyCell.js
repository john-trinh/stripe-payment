import React from 'react';

export default class BodyCell extends React.Component {

  renderButton() {
    return(
      <td>{React.cloneElement(this.props.content, this.props.content.props)}</td>
    );
  }

  renderText() {
    return(<td>{this.props.content}</td>);
  }

  render() {
    let ele;
    if (this.props.text) {
      ele = this.renderText();
    } else {
      ele = this.renderButton();
    }
    return ele;
    }
  }