
import { connect } from 'react-redux'
import { updatePhoto } from '../../util/photo_api_util';
import PhotoEditForm from './photo_edit_form';

const msp = (state, ownProps) => ({
    photo: state.photos[ownProps.match.params.photoId]
})

const mdp = (dispatch) => ({
    action: (photo) => dispatch(updatePhoto(photo)) 
})

  export default connect(msp, mdp)(PhotoEditForm);
  