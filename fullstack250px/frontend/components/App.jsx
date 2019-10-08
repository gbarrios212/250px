import React from "react";
import GreetingContainer from "./greeting_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <header>
    <h1>Nice. This is an app.</h1>
    <GreetingContainer />
    <AuthRoute path="/signup" component={SignUpFormContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer}/>
  </header>
);

export default App;