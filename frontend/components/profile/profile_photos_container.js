import ProfilePhotos from './profile_photos';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectUserPhotos } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    let currentId = ownProps.id;
    return({
        currentUser,
        currentId,
        // photos: selectUserPhotos(state, currentUser)
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos())
    
})

export default connect(msp, mdp)(ProfilePhotos)