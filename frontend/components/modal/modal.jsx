import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePhotosFormContainer from '../photos/create_photos_form_container'
import FollowersListContainer from '../profile/followers_list_container';

function Modal({payload, closeModal}) {
  if (!payload) {
    return null;
  }
  let component;
  switch (payload.modal) {
    case 'upload':
      component = <CreatePhotosFormContainer />;
      break;
    case 'followers':
      component = <FollowersListContainer followers={payload.followers}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    payload: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
