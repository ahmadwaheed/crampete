import React, { Component } from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import { reduxForm,Field } from 'redux-form';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/authenticate_actions';



class Signin extends Component {
    state = { password: '', email: ''};
    constructor(props) {
        super(props);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }
    componentwillUpdate() {
        debugger;
        if (this.props.authenticated) {
            // const { history: { push } } = this.props;
            // push('/');
        }
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
    handleFormSubmit() {

        const values = {email:this.state.email, password: this.state.password}
        //Need to do something to log user in 
        const { history: { push } } = this.props;
        this.props.signinUser(values, push);
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
    render(){
        const {password, email} = this.state;
      return (
        <div className="Login_register flex-center default_padd mb-0">
    

            <form  className="login-register-box">
                <div className="social-Icons">
                    <a href="#"><i className="fa fa-facebook"> </i> Sign in with facebook</a>
                    <a href="#"><i className="fa fa-google-plus"> </i> Sign in with google</a>
                </div>
                
                <div className="seprator text-center">
                    <p style={{textAlign: 'center'}}>OR</p>
                </div>
                
                <div className="form-group">
                    <input type="email" placeholder="Email Address" className="form-control" onChange={this.updateEmail} value={email}  />
                    <input type="password" placeholder="Password" className="form-control" onChange={this.updatePassword} value={password} />
                </div>
                <div className="extra-fun d-flex">

                    <label className="custom-control custom-checkbox text-left">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        Remember Me
                    </label>

                    <div className="text-right">
                        <a href="">Forgot your password?</a>
                    </div>
                </div>
                {this.renderAlert()}

                <button className="btn" onClick={this.handleFormSubmit.bind(this)} type="button">Sign in</button>

                <p className="text-center mb-0">Don't have an account? <Link to="/Signup">Register Now</Link></p>
                
      
            </form>
        </div>
       
      );
       
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: (values,push) => { dispatch(actions.signinUser(values, push)); }
    }
}
function mapStateToProps(state) {
    return { errorMessage: state.authenticate.error, authenticated: state.authenticate.authenticated };
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'signin'
  })
)(Signin);