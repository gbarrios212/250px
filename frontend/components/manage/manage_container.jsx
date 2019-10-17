import { connect } from 'react-redux';
import Manage from './manage';
import { fetchPhotos } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos } from '../../reducers/selectors';

const msp = (state) => {
  // //debugger;
  let currentUser = state.entities.users[state.session.id]
  let photos = selectUserPhotos(state, currentUser)
  return ({
    currentUser: currentUser,
    photos: photos
  })
}

const mdp = dispatch => {
    return ({
      fetchPhotos: () => dispatch(fetchPhotos()),
      modalSelect: (
        <button className="upload-button" onClick={() => dispatch(openModal('upload'))}>
          Upload to Library
        </button>
      ),
      closeModal: () => dispatch(closeModal())
    });
  };
  

export default connect(msp, mdp)(Manage);