import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotosIndexContainer from './photos/photos_index_container';
import CreatePhotosFormContainer from './photos/create_photos_form_container'
import PhotoShowContainer from './photos/photo_show_container';
import PhotoEditFormContainer from './photos/photo_edit_form_container';

import Modal from './modal/modal';
import ManageContainer from "./manage/manage_container";

const App = () => (
  <>
  <Modal/>
    <header>
      <NavbarContainer />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/" component={PhotosIndexContainer} />

      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      <ProtectedRoute exact path="/photos/:photoId/edit" component={PhotoEditFormContainer} />
      <ProtectedRoute exact path="/manage/upload" component={ManageContainer} />
      <ProtectedRoute exact path="/manage/all" component={CreatePhotosFormContainer} />


  </>
);

export default App;