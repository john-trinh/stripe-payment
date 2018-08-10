import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';

export default function WrappedStripeElement(StripeElement) {
  return class extends React.Component {
    render() {
      return (
        <StripeProvider apiKey="pk_test_0eqNzT3IpdXuTJyxvfXzfdkP">
          <Elements>
            <StripeElement/>
          </Elements>
        </StripeProvider>
      );
    }
  }
}

