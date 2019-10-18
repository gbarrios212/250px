import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {

    let photo = state.entities.photos[ownProps.match.params.photoId];
     debugger;
    let photoAuthor;
    if (photo){
        photoAuthor = state.entities.users[photo.author_id];
    }
     ;
    return({ 
        currentUser: state.entities.users[state.session.id],
        photo,
        photoAuthor
    });
}

const mdp = (dispatch) => ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPhotos: () => dispatch(fetchPhotos())
})

export default connect(msp, mdp)(PhotoShow)