import React from 'react';
import InjectedCheckoutForm from './Stripe/CheckoutForm';
import WrappedStripeElement from './Stripe/WrappedStripeElement';

export default class Checkout extends React.Component {
  render() {
    const CheckOutForm = WrappedStripeElement(InjectedCheckoutForm);
    return (<CheckOutForm/>);
  }
}
