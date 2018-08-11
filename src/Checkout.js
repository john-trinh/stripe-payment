import React from 'react';
import CheckoutForm  from './Stripe/CheckoutForm';
import WrappedStripeElement from './Stripe/WrappedStripeElement';

export default class Checkout extends React.Component {
  render() {
    const StripeForm = WrappedStripeElement(CheckoutForm);
    return (<StripeForm/>);
  }
}
