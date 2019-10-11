import { deletePhoto } from '../../actions/photo_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { connect } from 'react-redux'
import { updatePhoto, clearErrors } from '../../actions/photo_actions';
import PhotoEditForm from './photo_edit_form';

const msp = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.photoId],
    errors: state.errors.photo
})

const mdp = (dispatch) => ({
    action: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    clearErrors: () => dispatch(clearErrors())
})

  export default connect(msp, mdp)(PhotoEditForm);
  