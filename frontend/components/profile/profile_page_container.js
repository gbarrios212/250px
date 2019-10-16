import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchPhotos } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchUser, fetchAllUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id]
  // let profileId = ownProps.match.params.userId
  // debugger;
  let profileUser = state.entities.users.otherUsers.users[ownProps.match.params.userId]
  // debugger;
  let photos = selectUserPhotos(state, profileUser)
  // debugger
  return ({
    currentUser: currentUser,
    photos: photos,
    profileUser: profileUser
  })
}

const mdp = (dispatch) => {
    return ({
      fetchPhotos: () => dispatch(fetchPhotos()),
      fetchUser: (id) => dispatch(fetchUser(id)),
      fetchAllUsers: () => dispatch(fetchAllUsers()) 
    });
};
  

export default connect(msp, mdp)(ProfilePage);