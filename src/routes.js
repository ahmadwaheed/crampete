import React from 'react';
import {Switch, Route } from 'react-router';
import App from './App';
import Home from './modules/Home/Home';

import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import requireAuth from './modules/Authenticate/require_authentication';
import Signin from './modules/Authenticate/signin';
import Signout from './modules/Authenticate/signout';
import Signup from './modules/Authenticate/signup';

export default (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component = { requireAuth(Home) } />
            <Route  path="/Signin" component = {Signin} />
            <Route  path="/Signout" component = {Signout} />
            <Route  path="/Signup" component = {Signup} />
      
        </Switch>
        <Footer />
    </div>

);