import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchPhotos } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  debugger;
  let currentUser = state.entities.users[state.session.id]
  // let profileUser = 
  let photos = selectUserPhotos(state, currentUser)
  let profileId = ownProps.match.params.userId
  return ({
    currentUser: currentUser,
    photos: photos,
    // profileId: 
  })
}

const mdp = (dispatch) => {
    return ({
      fetchPhotos: () => dispatch(fetchPhotos()),
      fetchUser: (id) => dispatch(fetchUser(id))
    });
};
  

export default connect(msp, mdp)(ProfilePage);