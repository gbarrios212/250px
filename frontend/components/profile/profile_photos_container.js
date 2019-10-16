import ProfilePhotos from './profile_photos';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectUserPhotos } from '../../reducers/selectors';

const msp = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return({
        currentUser,
        // photos: selectUserPhotos(state, currentUser)
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos())
    
})

export default connect(msp, mdp)(ProfilePhotos)