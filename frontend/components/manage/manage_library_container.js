// import React from 'react';
import ManageLibrary from './manage_library';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectUserPhotos } from '../../reducers/selectors';
import { receiveActivePhotoId, clearActivePhotoId } from '../../actions/active_photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    // //debugger; 
    let activePhotoId = state.ui.activePhotoId;
    let currentUser = state.entities.users[state.session.id];
    return({
        // photos: currentUser.photo_ids.map(id => state.entities.photos[id])
        photos: selectUserPhotos(state, currentUser),
        activePhotoId
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    modalSelect: () => dispatch(openModal('upload')),
    receiveActivePhotoId: (id) => dispatch(receiveActivePhotoId(id))  
})

export default connect(msp, mdp)(ManageLibrary)