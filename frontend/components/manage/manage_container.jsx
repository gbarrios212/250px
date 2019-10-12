import { connect } from 'react-redux';
import Manage from './manage';
import { fetchPhotos } from '../../util/photo_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = (state) => {
  let currentUser = state.entities.users[state.session.id]
  return ({
    currentUser: currentUser,
    photos: currentUser.photos
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