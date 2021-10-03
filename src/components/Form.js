import React, { Component } from 'react'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForMob = RegExp(/^[6-9][0-9]{9}$/)
const regForAadhar = RegExp(/^[0-9]{12}$/)
const regForPan = RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]$/)
export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '', mname: '', lname: '', mobile: '', email: '', dob: '', sex: '', status: '', username: '', password: '', confirmpassword: '', pan: '', aadhar: '', address: '', city: '', state: '', pincode: '',
            errors: { fname: '', mname: '', lname: '', mobile: '', email: '', dob: '', sex: '', status: '', username: '', password: '', confirmpassword: '', pan: '', aadhar: '', address: '', city: '', state: '', pincode: '' }
        }
    }
    handler = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'fname':
                errors.fname = value.length < 3 ? 'Name should be of min. 3 characters' : '';
                break;
            case 'lname':
                errors.lname = value.length < 3 ? 'Name should be of min. 3 characters' : '';
                break;
            case 'mobile':
                errors.mobile = regForMob.test(value) ? '' : 'Invalid mobile no.';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : 'Email is not valid';
                break;
            case 'dob':
                errors.dob = ((Number(value.split("-")[0])) - 2012) > 8 ? '' : 'Invalid age';
                break;
            case 'aadhar':
                errors.aadhar = regForAadhar.test(value) ? '' : 'Aadhar is not valid';
                break;
            case 'pan':
                errors.pan = regForPan.test(value) ? '' : 'Pan is not valid';
                break;
            case 'address':
                errors.address = value.length < 8 ? 'Enter Atleast 8 characters' : '';
                break;
            case 'city':
                errors.city = value.length < 3 ? 'Enter atleast 3 characters' : '';
                break;
            case 'pincode':
                errors.pincode = value.length < 6 ? 'pincode must be 6 chanrater long' : '';
                break;
            case 'username':
                errors.username = value.length < 8 ? 'username must be atleast 8 chanrater long' : '';
                break;

            case 'password':
                errors.password = value.length < 8 ? 'Password must be 8 chanrater long' : '';
                break;
            case 'confirmpassword':
                errors.confirmpassword = (value === this.state.password) ? '' : 'Password do not match';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
        })
    }
    formSubmit = (event) => {
        event.preventDefault();
        if (this.validate(this.state.errors)) {
            alert("Valid Form");
        }
        else {
            alert("Invalid Form");
        }
    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        return valid;
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="body">
                <h3 id="featured-head">REGISTRATION FORM <br /><img src="underline.png" alt='' height="20px" width="240px" /></h3>
                <h4 className="text-center">It'll Take A Minute To Register </h4>
                <p id="subpara"><i>You Are Only A Step Away To Get Benefits of all our services!</i></p>
                <div className="row">
                    <div id="div1" className="text-white col-lg-3 col-md-6 col-sm-12 d-block m-auto">
                        <p style={{ fontSize: "32px", fontWeight: "bold" }}>We’re here </p><br /><br />
                        <p style={{ opacity: ".8" }}> <i>Our door is always open for a good cup of coffee.</i></p> <br />
                        <br /><br /><br /><br />
                        <p> <span id="ouroffice">Our Office </span><br /><br /> <br />Unit No 501, Sigma It Park <br /> Plot No R-203, 204
                            <br /> Neosoft Technologies, T.T.C, Rabale <br /> Navi Mumbai - 400701.
                        </p>
                        <i className="fa fa-twitter fa-2x spacings"></i><i className="fa fa-instagram fa-2x spacings"></i><i
                            className="fa fa-pinterest fa-2x spacings"></i> <br /><br /><br /><br /><br />
                        <a href="index.html"><button id="backtohomebtn">Back To Home</button> </a>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12 d-block bg-white m-auto">
                        <div>
                            <form onSubmit={this.formSubmit} >
                                <h4>1. PERSONAL DETAILS</h4>
                                <table id="formTable" className="m-auto">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label className="form-label">FIRST NAME <sup>*</sup> {errors.fname.length > 0 && <span id="error1">{errors.fname}</span>} </label>
                                                <input id="inputfname" type="text" className="form-control" name="fname" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label className="form-label"> MIDDLE NAME  {errors.mname.length > 0 && <span id="error2">{errors.mname}</span>}</label>
                                                <input id="inputmname" type="text" className="form-control" name="mname" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label className="form-label">LAST NAME <sup>*</sup> {errors.lname.length > 0 && <span id="error2">{errors.lname}</span>}</label>
                                                <input type="text" className="form-control" name="lname" onChange={this.handler} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="form-label">MOBILE <sup>*</sup> {errors.mobile.length > 0 && <span id="error1">{errors.mobile}</span>}</label>
                                                <input type="number" className="form-control" name="mobile" onChange={this.handler} />
                                            </td>
                                            <td colSpan="2">
                                                <label className="form-label">EMAIL <sup>*</sup> {errors.email.length > 0 && <span id="error2">{errors.email}</span>}</label>
                                                <input type="text" className="form-control" name="email" onChange={this.handler} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <label className="form-label">D.O.B <sup>*</sup> {errors.dob.length > 0 && <span id="error2">{errors.dob}</span>}</label>
                                                <input type="date" className="form-control" name="dob" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label htmlFor="inputsex" className="form-label">SEX <sup>*</sup> </label>
                                                <select id="inputsex" name="sex" onChange={this.handler} required className="form-select">
                                                    <option>MALE</option>
                                                    <option>FEMALE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label htmlFor="inputstatus" className="form-label">STATUS <sup>*</sup></label>
                                                <select id="inputstatus" name="status" onChange={this.handler} required className="form-select">
                                                    <option>UNMARRIED</option>
                                                    <option>MARRIED</option>
                                                    <option>DIVORCED</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <label className="form-label">AADHAR <sup>*</sup> {errors.aadhar.length > 0 && <span id="error1">{errors.aadhar}</span>}</label>
                                                <input type="number" className="form-control" name="aadhar" onChange={this.handler} />
                                            </td>
                                            <td >
                                                <label className="form-label">PANCARD <sup>*</sup> {errors.pan.length > 0 && <span id="error1">{errors.pan}</span>}</label>
                                                <input type="text" className="form-control" name="pan" onChange={this.handler} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4>2. ADDRESS DETAILS</h4>
                                <table id="formTable" className="m-auto">
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">
                                                <label htmlFor="inputaddress" className="form-label">ADDRESS LINE 1 <sup>*</sup> {errors.address.length > 0 && <span id="error1">{errors.address}</span>} </label>
                                                <input id="inputaddress" type="text" className="form-control" name="address" onChange={this.handler} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <label htmlFor="inputcity" className="form-label">CITY <sup>*</sup> {errors.city.length > 0 && <span id="error1">{errors.city}</span>} </label>
                                                <input id="inputcity" type="text" className="form-control" name="city" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label htmlFor="inputstate" className="form-label">STATE <sup>*</sup> {errors.state.length > 0 && <span id="error2">{errors.state}</span>}</label>
                                                <select id="inputstate" name="state" onChange={this.handler} className="form-select">
                                                    <option defaultValue>MADHYA PRADESH</option>
                                                    <option>UP</option>
                                                    <option>J&K</option>
                                                    <option>HARYANA</option>
                                                    <option>PUNJAB</option>
                                                    <option>TAMIL NADU</option>
                                                    <option>AP</option>
                                                </select>
                                            </td>
                                            <td >
                                                <label className="form-label">PINCODE <sup>*</sup> {errors.pincode.length > 0 && <span id="error1">{errors.pincode}</span>}</label>
                                                <input type="number" className="form-control" name="pincode" onChange={this.handler} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4> 3. CREDENTIALS </h4>
                                <table id="formTable" className="m-auto">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label className="form-label"> USERNAME <sup>*</sup> {errors.username.length > 0 && <span id="error1">{errors.username}</span>}</label>
                                                <input type="password" className="form-control" name="username" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label className="form-label"> PASSWORD <sup>*</sup> {errors.password.length > 0 && <span id="error1">{errors.password}</span>}</label>
                                                <input type="password" className="form-control" name="password" onChange={this.handler} />
                                            </td>
                                            <td>
                                                <label className="form-label">CONFIRM PASSWORD <sup>*</sup> {errors.confirmpassword.length > 0 && <span id="error1">{errors.confirmpassword}</span>}</label>
                                                <input type="password" className="form-control" name="confirmpassword" onChange={this.handler} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button id="submitbtn" type="submit">SUBMIT</button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                <br />
            </div>

        )
    }
}

export default Contact
