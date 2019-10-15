import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchPhotos } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos } from '../../reducers/selectors';

const msp = (state) => {
  let currentUser = state.entities.users[state.session.id]
  let photos = selectUserPhotos(state, currentUser)
  return ({
    currentUser: currentUser,
    photos: photos
  })
}

const mdp = (dispatch) => {
    return ({
      fetchPhotos: () => dispatch(fetchPhotos())
    });
};
  

export default connect(msp, mdp)(ProfilePage);