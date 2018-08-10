import React, { Component } from 'react'
import { Container} from 'reactstrap';
import TabList from './Tab/TabList';
import Payment from './Payment';
import WrappedTab from './Tab/WrappedTab';
import Checkout from './Checkout';

export default class Homepage extends Component {
  render() {
    const Tab2 = WrappedTab(Payment);
    const Tab1 = WrappedTab(Checkout);
    return (
      <Container>
        <TabList>
          <Tab1 name="Checkout"/>
          <Tab2 name="Payment"/>
        </TabList>
      </Container>
    )
  }
}
