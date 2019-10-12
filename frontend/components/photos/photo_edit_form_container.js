import { deletePhoto } from '../../actions/photo_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import { connect } from 'react-redux'
import { updatePhoto, clearErrors, receiveErrors } from '../../actions/photo_actions';
import PhotoEditForm from './photo_edit_form';

const msp = (state, ownProps) =>{
    let photo;
    debugger;
    if (ownProps.match){
        photo = state.entities.photos[ownProps.match.params.photoId]
    } else {
        photo = state.entities.photos[5]
    }
    // temp note the hard code 
    
    return ({
        photo: photo,
        errors: state.errors.photo
    })
}

const mdp = (dispatch) => ({
    action: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    clearErrors: () => dispatch(clearErrors()),
    receivePhotoErrors: (errors) => dispatch(receiveErrors(errors))
})

  export default connect(msp, mdp)(PhotoEditForm);
  