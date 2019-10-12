import { connect } from 'react-redux';
import Manage from './manage';
import { fetchPhotos } from '../../util/photo_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos } from '../../reducers/selectors';

const msp = (state) => {
  let currentUser = state.entities.users[state.session.id]
  debugger;
  let photos = selectUserPhotos(state, currentUser)
  debugger
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