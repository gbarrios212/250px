import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotosIndexContainer from './photos/photos_index_container';


const App = () => (
  <>
    <header>
      <NavbarContainer />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <Route exaxt path="/" component={PhotosIndexContainer} />
  </>
);

export default App;