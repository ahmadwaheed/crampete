import React, { Component } from 'react';
import {compose} from "redux"
import {connect} from "react-redux"
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../store/actions/authenticate_actions';


class Signup extends Component {

    state = { password: '', email: '', name : '', confirmpassword: ''};

    constructor(props) {
        super(props);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }
    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }
    updateName(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    updateConfirmPassword(evt) {
        this.setState({
            confirmpassword: evt.target.value
        });
    }
    
    handleFormSubmit() {

        const values = { name: this.state.name, email: this.state.email, password: this.state.password };
        const { history: { push } } = this.props;
        this.props.signupUser(values, push);
       
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render() {
        const { password ,email, name , confirmpassword } = this.state;
        return (
            <div className="Login_register flex-center default_padd mb-0">
    

                <form  className="login-register-box">
                    <div className="social-Icons">
                        <a href="#"><i className="fa fa-facebook"> </i> Sign up with facebook</a>
                        <a href="#"><i className="fa fa-google-plus"> </i> Sign up with google</a>
                    </div>
                    
                    <div className="seprator text-center">
                        <p style={{textAlign: 'center'}}>OR</p>
                    </div>
                    
                    <div className="form-group" style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
                        <input type="email" placeholder="Email Address" className="form-control" onChange={this.updateEmail} value={email}  />
                        <input type="text" className="form-control" id="name" value={name} onChange={this.updateName} placeholder="Name" name="name"/>
                        <input type="password" placeholder="Password" className="form-control" onChange={this.updatePassword} value={password} />
                        <input type="password" className="form-control" id="cpass" placeholder="Confirm Password" value={confirmpassword} onChange={this.updateConfirmPassword} name="cpass"/>
                    </div>
            
                    {this.renderAlert()}

                    <button className="btn" onClick={this.handleFormSubmit.bind(this)} type="button">Register</button>
                    
        
                </form>
            </div>
        );
    }
}

const validatefunction = values => {

    const errors = {};
    if (values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    console.log('values validate',values);
    return errors;
  
}
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (values,push) => { dispatch(actions.signupUser(values,push)); },
 
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authenticate.error };
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'signup'
  })
)(Signup);