import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchPhotos } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { selectUserPhotos, selectUserFollowers, selectUserFollowings } from '../../reducers/selectors';
import { fetchUser, fetchAllUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  let profileUser = state.entities.users[ownProps.match.params.userId];
  let photos = selectUserPhotos(state, profileUser);
  let followers = selectUserFollowers(state, profileUser);
  let followings = selectUserFollowings(state, profileUser);
  return ({
    currentUser: currentUser,
    photos: photos,
    profileUser: profileUser,
    followers: followers,
    followings: followings
  })
}

const mdp = (dispatch) => {
    return ({
      fetchPhotos: () => dispatch(fetchPhotos()),
      fetchUser: (id) => dispatch(fetchUser(id)),
      fetchAllUsers: () => dispatch(fetchAllUsers()), 
      openModal: (payload) => dispatch(openModal(payload))
    });
};
  

export default connect(msp, mdp)(ProfilePage);