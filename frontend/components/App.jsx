import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotosIndexContainer from './photos/photos_index_container';
import CreatePhotosFormContainer from './photos/create_photos_form_container'

const App = () => (
  <>
    <header>
      <NavbarContainer />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/" component={PhotosIndexContainer} />
      <Route exact path="/" component={CreatePhotosFormContainer} />
      

      {/* <Route path="/photos/new" component={CreatePhotosFormContainer} /> */}
      <Route path="/photos/:photoId" component={ShowPhotoContainer} />
      {/* <Route path="/photos/:photoId/edit" component={ShowPhotoContainer} /> */}
  </>
);

export default App;