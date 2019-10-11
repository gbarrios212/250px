import PhotosForm from './photos_form';
import { connect } from 'react-redux'
import { createPhoto, clearErrors } from '../../actions/photo_actions';

const msp = (state, ownProps) => ({
    photo: 
        { name: "", 
        category: "",
        location: "",
        lat: "",
        long: "",
        date_taken: "",
        camera: "",
        lens: "",
        focal_length: "",
        aperture: "",
        shutter_speed: "",
        iso: "",
        description: ""},
    errors: state.errors.photo
})

const mdp = (dispatch) => ({
    action: (photo) => dispatch(createPhoto(photo)), 
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(PhotosForm);
