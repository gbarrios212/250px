import PhotosForm from './photos_form';
import { connect } from 'react-redux'
import { createPhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => ({
    photo: { name: "", 
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
    description: "",
    author_id: 1}
})

const mdp = (dispatch) => ({
    action: (photo) => dispatch(createPhoto(photo)) 
})

export default connect(msp, mdp)(PhotosForm);

//note temp hard-coded author_id