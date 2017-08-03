import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signup from './components/signup';
import Signin from './components/signin';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';


firebaseApp.auth().onAuthStateChanged(user => {
    if (user){
        console.log('user has been sign in or sign up');
    }
    else {
        console.log('user is signed out or still need to be sign in ');
    }
})

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
    </Router>, document.querySelector('.container')
);