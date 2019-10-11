import { deletePhoto } from '../../actions/photo_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { connect } from 'react-redux'
import { updatePhoto } from '../../util/photo_api_util';
import PhotoEditForm from './photo_edit_form';

const msp = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.photoId]
})

const mdp = (dispatch) => ({
    action: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
})

  export default connect(msp, mdp)(PhotoEditForm);
  