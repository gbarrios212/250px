import React from "react";
import NavbarContainer from "./navbar_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { AuthRoute } from '../util/route_util';
import Splash from './splash';
import SplashContainer from './splash_container';


const App = () => (
  <>
    <header>
      <NavbarContainer />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
  </>
);

export default App;