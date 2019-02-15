import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ApplyForm from './ApplyForm'
import Forms from './Forms'
import List from './List'
import Table2 from './Table2'
export default class FormRouting extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <div style={{ backgroundColor: "black" }}>
                            <h2 style={{ color: "white" }}><center>Campus Drive</center></h2>

                            <nav style={{ paddingBottom: "20px" }}>
                                <Link style={{ color: "white", paddingRight: "10px" }} to="/">Home</Link>
                                <Link style={{ color: "white", paddingRight: "10px" }} to="/apply_form">Apply Here</Link>
                                <Link style={{ color: "white", paddingRight: "10px" }} to="/list_item">List</Link>
                                <Link style={{ color: "white", paddingRight: "10px" }} to="/table">Table</Link>
                            </nav>
                        </div>
                    </header>
                    <b style={{ marginBottom: "10px" }}></b>
                    <Route exact path="/" component={Forms}></Route>
                    <Route exact path="/apply_form" component={ApplyForm}></Route>
                    <Route exact path="/list_item" component={List}></Route>
                    <Route exact path="/table" component={Table2}></Route>
                </div>
            </BrowserRouter>
        )
    }
}


