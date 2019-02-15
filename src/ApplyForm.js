import React from 'react';
import './Form.css';

class ApplyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            roll: '',
            result: '',
            course: '5',
            radio: '1',
            college: '1',
            errors: {}

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // reponsemessage = () => {
    //     this.setState({ result: "Your Form has been successfully submitted" });
    //     setTimeout(() => { this.setState({ result: "" }); }, 3000);

    //     //Use Closure

    // }
    handleChange(event) {
        //this.setState({ value: event.target.value });

        var changedValue = event.target.value;
        console.log(changedValue);
        if (event.target.className === "name") {
            this.setState({
                name: changedValue
            });

        } else if (event.target.className === "roll") {
            this.setState({
                roll: changedValue
            });
        } else if (event.target.className === "course") {
            this.setState({
                course: changedValue
            });
        }
        else if (event.target.className === "college") {
            this.setState({
                college: changedValue
            });
        }
        else if (event.target.className === "branch") {
            this.setState({
                radio: changedValue
            });
        } else {
            this.setState({
                address: changedValue
            });
        }
    }

    handleSubmit(event) {
        if (this.validateForm()) {
            alert('Name:' + this.state.name + ',Roll:' + this.state.roll + ',Course:' + this.state.course + ',College:' + this.state.college + ',Address:' + this.state.address + ',Branch:' + this.state.radio);
            event.preventDefault();
            this.props.history.push("/");
        } else{
            event.preventDefault();
        }
    }

    validateForm() {
        let errors = {};
        let formIsValid = true;
        if (!this.state.name) {
            formIsValid = false;
            errors["name"] = "Please Enter Name.";
        }
        if (typeof this.state.name !== "undefined") {
            if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "Please enter alphabet characters only.";
            }
        }
        if (!this.state.roll) {
            formIsValid = false;
            errors["roll"] = "Please Enter Roll No.";
        }
        if (typeof this.state.roll !== "undefined") {
            if (!this.state.roll.match(/^[a-zA-Z0-9 ]*$/)) {
                formIsValid = false;
                errors["roll"] = "Please enter alphanumeric only.";
            }
        }
        if (!this.state.course) {
            formIsValid = false;
            errors["course"] = "Please Enter Course Name.";
        }
        if (!this.state.college) {
            formIsValid = false;
            errors["college"] = "Please Enter College Name.";
        }
        if (!this.state.radio) {
            formIsValid = false;
            errors["branch"] = "Please Select Branch Name.";
        }
        if (!this.state.address) {
            formIsValid = false;
            errors["address"] = "Please Enter Address.";
        }
        if (typeof this.state.address !== "undefined") {
            if (!this.state.address.match(/^[a-zA-Z0-9 ]*$/)) {
                formIsValid = false;
                errors["address"] = "Please enter alphanumeric only.";
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <div>
                <div><h2><b><center>Registration Form</center></b></h2></div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label><b>Name&nbsp;</b></label>
                    <input type="text" className="name" value={this.state.name} onChange={this.handleChange} /><br />
                    <div className="errorMsg">{this.state.errors.name}</div>
                    <br />
                    <label><b>Roll&nbsp;</b></label>
                    <input type="text" className="roll" value={this.state.roll} onChange={this.handleChange} /><br />
                    <div className="errorMsg">{this.state.errors.roll}</div><br />
                    <label><b>Course&nbsp;</b></label>
                    <select name="course" className="course" value={this.state.course} onChange={this.handleChange}>
                        <option value="1">B.Tech</option>
                        <option value="2">M.Tech</option>
                        <option value="3">BCA</option>
                        <option value="4">MCA</option>
                        <option value="5">MBA</option>
                    </select><br />
                    <div className="errorMsg">{this.state.errors.course}</div>
                    <br />
                    <label><b>College&nbsp;</b></label>
                    <select name="college" className="college" value={this.state.college} onChange={this.handleChange}>
                        <option value="1">Galgotia University</option>
                        <option value="2">G.L Bajaj</option>
                        <option value="3">GNIOT</option>
                        <option value="4">IIMS College</option>
                        <option value="5">Sharda University</option>
                    </select><br />
                    <div className="errorMsg">{this.state.errors.college}</div>
                    <br />
                    <label><b>Branch</b><br />
                        <div value={this.state.radio} onChange={this.handleChange}>
                            <label>
                                <input type="radio"  defaultChecked ={this.state.radio} className="branch" name="branch" value="1" />
                                CSE.
                        </label>
                            <label>
                                <input type="radio"  className="branch" name="branch" value="2" />
                                EC
                        </label>
                            <label>
                                <input type="radio"  className="branch" name="branch" value="3" />
                                IT
                        </label>
                            <label>
                                <input type="radio"  className="branch" name="branch" value="4" />
                                Civil
                        </label>
                            <label>
                                <input type="radio"  className="branch" name="branch" value="5" />
                                EE
                        </label>
                        </div>
                    </label>
                    <div className="errorMsg">{this.state.errors.branch}</div><br />
                    <label><b>Address</b><br />
                        <textarea className="address" value={this.state.address} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.address}</div>
                    </label>
                    <br />
                    <input type="submit" name="submit" />
                    <div><b>{this.state.result}</b></div>
                </form>
            </div>
        );
    } z
}

export default ApplyForm;