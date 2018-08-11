import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { Button } from 'reactstrap';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state ={
      latestCharge: null,
      elements: null,
      card: null
    };
  }


  async handleSubmit(ev) {
    ev.preventDefault();
    // const card = this.props.stripe.elements.create('card');
    this.setState({
      latestCharge: 'Creating token...'
    });
    const key = 'sk_test_r2Y08Xt7doe5pxgMfl3XnWbm';
    let amount = ev.target.amount.value;
    let name = ev.target.name.value;
    let {token} = await this.props.stripe.createToken({name: ev.target.name.value});
    this.setState({
      latestCharge: 'Creating charge...'
    }, () => {
      fetch(`https://api.stripe.com/v1/charges`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${key}`,
          'Content-Type': `application/x-www-form-urlencoded`
        },
        body: `amount=${amount}&currency=usd&description=${name}&source=${token.id}`
      })
      .then(data => data.json())
      .then(response => {
        this.setState({
          latestCharge: response.status + response.charge_id
        });
      });
    });
  };

  render() {
    return (
      <form className="checkoutform" onSubmit={this.handleSubmit}>
        <label className="label-group">
          <div className="label">Name</div>
          <input name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label className="label-group stripe">
          <div className="label">Card details</div>
          <CardElement style={this.props.style}
          />
        </label>
        <label className="label-group">
          <div className="label">Amount</div>
          <input type="text" name="amount" required/>
        </label>
        <Button>Pay</Button>
        <h2>{this.state.latestCharge}</h2>
      </form>
    );
  };
}

export default injectStripe(CheckoutForm);