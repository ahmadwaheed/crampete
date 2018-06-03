import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/authenticate_actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.renderLinks = this.renderLinks.bind(this);
    }
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <ul>
                    <li><a>Become an Instructor</a></li>
                    <li><a>{this.props.userName}</a></li>
                    <li><Link to="/signout" style={{textDecoration: 'none'}} className="sign_up">Signout</Link></li>
                </ul>
            )
        }
        else {
            return (
                <ul>
                    <li><a>Become an Instructor</a></li>
                    <li><Link to="/Signin" style={{textDecoration: 'none'}}>Log In</Link></li>
                    <li><Link to="/Signup"  style={{textDecoration: 'none'}}  className="sign_up">Signup</Link></li>
                </ul>
            )
        }
    }
    render() {
        return (
            <header className="container-fluid" id="header">
                <div className="row">
                    <div className="col-md-4">
                        <a className="logo">
                            <img  src={require('../../img/logo/logo.png')} />
                        </a>
                        <nav className="categories">
                            <ul>
                                <li><a><i className="fa fa-bars"></i>categories</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <div className="search"><input type="text" placeholder="Search for courses" /><i className="fa fa-search"></i></div>
                    </div>
                    <div className="col-md-4">
                        <nav className="menu">
                         {this.renderLinks()}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }

}

function mapStateToProps(state) {

    return { 
        authenticated: state.authenticate.authenticated,
        userName: state.authenticate.userName 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       signoutUser: () => { dispatch(actions.signoutUser()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

