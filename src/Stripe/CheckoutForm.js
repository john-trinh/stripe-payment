import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { Button } from 'reactstrap';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card details
            <CardElement style={{base: {color: '#303238', fontSize: '16px', fontFamily: '"Open Sans sans-serif', fontSmoothing: 'antialiased','::placeholder': {color: '#CFD7DF'}}}}
            />
          </label>
          <Button color="primary">Pay</Button>
        </form>
      </div>
    );
  };
}

export default injectStripe(CheckoutForm);