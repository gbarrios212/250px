import PhotosIndex from './photos_index';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';

const msp = (state) => ({
    photos: Object.values(state.entities.photos)
})

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(msp, mdp)(PhotosIndex)