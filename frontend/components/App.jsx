import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotosIndexContainer from './photos/photos_index_container';
import CreatePhotosFormContainer from './photos/create_photos_form_container'
import PhotoShowContainer from './photos/photo_show_container';
import PhotoEditFormContainer from './photos/photo_edit_form_container';

const App = () => (
  <>
    <header>
      <NavbarContainer />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/" component={PhotosIndexContainer} />
      {/* <Route exact path="/" component={CreatePhotosFormContainer} />
       */}

      {/* <Route path="/photos/new" component={CreatePhotosFormContainer} /> */}
      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      <Route exact path="/photos/:photoId/edit" component={PhotoEditFormContainer} />
      <Route exact path="/manage/public" component={CreatePhotosFormContainer} />
      {/* <Route exact path="/manage/:upload" component={CreatePhotosFormContainer} /> */}
  </>
);

export default App;