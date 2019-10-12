import { connect } from 'react-redux';
import Manage from './manage';
import { fetchPhotos } from '../../util/photo_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => {
    return {
      fetchPhotos: () => dispatch(fetchPhotos(user)),
      otherForm: (
        <button className="upload-button" onClick={() => dispatch(openModal('upload'))}>
          Upload to Library
        </button>
      ),
      closeModal: () => dispatch(closeModal())
    };
  };
  

export default connect(msp, mdp)(Manage);