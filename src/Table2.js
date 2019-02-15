import React, { Component } from 'react';
import Table1 from './Table1'

var data = [
    { id: 1, name: 'Joe', roll: '2', course: 'B.tech', college: 'GNIOT', branch: 'CSE', address: 'Greater Noida' },
    { id: 2, name: 'Buster', roll: '3', course: 'M.tech', college: 'GLB', branch: 'Civil', address: 'Greater Noida' },
    { id: 3, name: 'George', roll: '4', course: 'B.tech', college: 'IIMT', branch: 'IT', address: 'Greater Noida' }
];


class Table2 extends Component {
    render() {
        return (
            <div className="Table2">
                <p className="Table-header"><b>Basic Table</b></p>
                <Table1 data={data} />
            </div>
        );
    }
}

export default Table2;