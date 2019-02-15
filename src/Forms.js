import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            result: ''
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    
    validateField(fieldName, value) {
        var fieldValidationErrors = this.state.formErrors;
        var emailValid = this.state.emailValid;
        var passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    reponsemessage = () => {
        this.setState({ result: "Successfully Login" });
        setTimeout(() => { this.setState({ result: "" }); }, 5000);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <form className="demoForm">
                <h2>Login</h2>
                <FormErrors formErrors={this.state.formErrors} />
                <div className="panel panel-default">
                </div>
                <div>
                    <label htmlFor="email">Email</label>&nbsp;
          <input type="email" required className="form-control" name="email" placeholder="Please enter email address"
                        value={this.state.email} onChange={this.handleUserInput} />
                </div><br />
                <div>
                    <label htmlFor="password">Password</label>&nbsp;
          <input type="password" className="form-control" name="password" placeholder="Please enter password"
                        value={this.state.password} onChange={this.handleUserInput} />
                </div><br/>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.reponsemessage}>Sign In</button>
                <div>{this.state.result}</div>
            </form>
        )
    }
}