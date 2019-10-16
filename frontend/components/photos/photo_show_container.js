import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {

    let photo = state.entities.photos[ownProps.match.params.photoId];
    let photoAuthor = state.entities.users.otherUsers.users[photo.author_id];
    debugger;
    return({ 
        currentUser: state.entities.users[state.session.id],
        photo,
        photoAuthor
    });
}

const mdp = (dispatch) => ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()) 
})

export default connect(msp, mdp)(PhotoShow)