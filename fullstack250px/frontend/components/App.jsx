import React from "react";
import GreetingContainer from "./greeting_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';


const App = () => (
  <header>
    <h1>Nice. This is an app.</h1>
    <GreetingContainer />
    <Route path="/signup" component={SignUpFormContainer}/>
    <Route path="/login" component={LoginFormContainer}/>
  </header>
);

export default App;