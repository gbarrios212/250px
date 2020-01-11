import PhotosIndex from './photos_index';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = (state) => {
    let currentUser = state.entities.users[state.session.id];
    let photos = Object.values(state.entities.photos);
    let followPhotos = [];

        if (currentUser.following_ids.length > 0) {
            photos.forEach(photo => {
                let authorId = photo.author_id;
                if (currentUser.following_ids.includes(authorId)) {
                    followPhotos.push(photo);
                }
            })
        } 
        return ({
        photos,
        followPhotos
    })
}

const mdp = (dispatch) => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(msp, mdp)(PhotosIndex)