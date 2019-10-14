import ManageLibrary from './manage_library';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectUserPhotos } from '../../reducers/selectors';
import { receiveActivePhotoId, clearActivePhotoId } from '../../actions/active_photo_actions';

const msp = (state) => {
    // debugger; 
    let currentUser = state.entities.users[state.session.id]
    return({
        // photos: currentUser.photo_ids.map(id => state.entities.photos[id])
        photos: selectUserPhotos(state, currentUser)
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    receiveActivePhotoId: (id) => dispatch(receiveActivePhotoId(id))  
})

export default connect(msp, mdp)(ManageLibrary)