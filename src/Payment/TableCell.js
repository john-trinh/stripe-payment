import React, { Component } from 'react';
import { Table } from 'reactstrap';
import HeadCell from './HeadCell';
import BodyCell from './BodyCell';
// import DataTest from '../data-test.json';
import RefundButton from './RefundButton';

export default class TableCell extends Component {
  constructor(props) {
    super(props);

    this.state= {
      tableBody: [],
      loading: true,
      tableHead: ["Id", "Amount", "Refunded", "Dispute", "Reason", "Refund"]
    };
  }
   componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const key = 'sk_test_r2Y08Xt7doe5pxgMfl3XnWbm';
    const response = await fetch(`https://api.stripe.com/v1/charges`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${key}`,
        'Content-Type': `application/x-www-form-urlencoded`
      }
    });
    const data = await response.json();
    this.setState({
      tableBody: data.data,
      loading: false
    })
  }

  reloadData() {
    this.setState({
      loading: true,
      tableBody: []
    });
    this.loadData();
  }

  render() {
    return (
      <div className="wrap-table">
        {this.state.loading ? (<p className="status">Loading....</p>) : null}
        <Table>
          <thead>
            <tr>
              {this.state.tableHead.map((head, index) => <HeadCell key={index + "sdffafads"} content={head}/>)}
            </tr>
          </thead>
          <tbody>
            {this.state.tableBody.map((row, index) => (
              <tr>
                <BodyCell content={row.id} text key={index + "a"}/>
                <BodyCell content={row.amount} text key={index + "b"}/>
                <BodyCell content={row.refunded.toString()} text key={index + "c"}/>
                <BodyCell content={row.dispute ? "true" : 'false'} text key={index + "d"}/>
                {row.dispute ? (
                  <BodyCell content={'reason'} text key={index + "e"}/>) : (
                  <BodyCell content={''} text key={index + "ds"}/>
                )}
                <BodyCell content={(<RefundButton url={row.refunds.url} amount ={row.amount} disabled={row.refunded} id={row.id} key={index + "affsdf"}/>)} key={index + "f"} reload={this.reloadData.bind(this)}/>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
