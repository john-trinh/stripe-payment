import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class TableComponent extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>head1</th>
            <th>head2</th>
            <th>head3</th>
            <th>head4</th>
            <th>head5</th>
            <th>head6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>It is a long established</td>
            <td>adable content</td>
            <td>It is a long established</td>
            <td>adable content</td>
            <td>It is a long established</td>
            <td>adable content</td>
          </tr>
          <tr>
            <td>It is a long established</td>
            <td>adable content</td>
            <td>It is a long established</td>
            <td>adable content</td>
            <td>It is a long established</td>
            <td>adable content</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
