import React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};
export default function WrappedStripeElement(StripeEle) {
  return class extends React.Component {
    render() {
      return (
        <StripeProvider apiKey="pk_test_0eqNzT3IpdXuTJyxvfXzfdkP">
          <Elements>
            <StripeEle {...createOptions(30, 10)}/>
          </Elements>
        </StripeProvider>
      );
    }
  }
}

