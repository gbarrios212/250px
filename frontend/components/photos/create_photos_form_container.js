import PhotosForm from './photos_form';
import { connect } from 'react-redux'
import { createPhoto, clearErrors, receiveErrors, fetchPhotos, receiveNewPhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';
import { fireSuccess } from "../../actions/alert_actions";


const msp = (state, ownProps) => {
    // ;
    return ({

        currentUser: state.entities.users[state.session.id],
        photo: 
        { name: "", 
        category: " ",
        location: " ",
        lat: " ",
        long: " ",
        date_taken: " ",
        camera: " ",
        lens: " ",
        focal_length: " ",
        aperture: " ",
        shutter_speed: " ",
        iso: " ",
        description: " "},
        errors: state.errors.photo
    })
}

const mdp = (dispatch) => ({
    action: (photo) => dispatch(createPhoto(photo)), 
    clearErrors: () => dispatch(clearErrors()),
    receivePhotoErrors: (errors) => dispatch(receiveErrors(errors)),
    //test here
    // fetchPhotos: () => dispatch(fetchPhotos()),
    closeModal: () => dispatch(closeModal()),
    receiveNewPhoto: (photo) => dispatch(receiveNewPhoto(photo)),
    fireSuccess: (message) => dispatch(fireSuccess(message))
})

export default connect(msp, mdp)(PhotosForm);
