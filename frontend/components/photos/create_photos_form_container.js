import PhotosForm from './photos_form';
import { connect } from 'react-redux'

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
    author_id: ""}
})

const mdp = (dispatch) => ({

})

export default connect(msp, mdp)(PhotosForm);