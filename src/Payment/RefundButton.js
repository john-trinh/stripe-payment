import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class RefundButton extends Component {
  constructor(props) {
    super(props);

    this.handleRefund = this.handleRefund.bind(this);
  }

  async handleRefund() {
    const key = 'sk_test_r2Y08Xt7doe5pxgMfl3XnWbm';
    const url = `https://api.stripe.com/v1/refunds`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${key}`,
          'Content-Type': `application/x-www-form-urlencoded`
        },
        body: `charge=${this.props.id}&amount=${this.props.amount}`
      });
    const data = await response.json();
    alert(data.status);
    if (data.status === 'succeeded') {
      this.props.reload();
    }
  }

  render() {
    return (
      <Button onClick={this.handleRefund} disabled={this.props.disabled}>Refund</Button>
    )
  }
}
