
import React, { Component } from 'react';
import './Table.css';

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            info: ["Khushbu", "Pooja", "Ruchi", "Mahi", "Uma"]

        }
    }

    _renderItems() {
        return this.state.info.map(el => <p>{el}</p>)
    }

    render() {
        return (<div>
            <div>
             <h4 style={{ color: "blue", paddingRight: "10px" }}>List of Candidates.</h4>
            </div>
            <div className='List'>
                {this._renderItems()}
            </div>
        </div>
        )
    }
}