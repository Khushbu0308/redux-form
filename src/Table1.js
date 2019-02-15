import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
// import './node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
      
export default class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width='35px'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name' width='50px'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='roll' width='35px'>
            Roll
          </TableHeaderColumn>
          <TableHeaderColumn dataField='course' width='50px'>
           Course
          </TableHeaderColumn>
          <TableHeaderColumn dataField='college' width='50px'>
          College
          </TableHeaderColumn>
          <TableHeaderColumn dataField='branch' width='50px'>
          Branch
          </TableHeaderColumn>
          <TableHeaderColumn dataField='address' width='50px'>
          Address
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 