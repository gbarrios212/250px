import PhotosIndex from './photos_index';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = (state) => {
    // debugger;
        return ({
        photos: Object.values(state.entities.photos)
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(msp, mdp)(PhotosIndex)