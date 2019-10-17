import Likes from './likes';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions'

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    // //debugger;
    let photo = ownProps.photo;
    let likedStatus = currentUser.liked_photo_ids.includes(ownProps.photo.id)
    return({
        currentUser,
        photo,
        likedStatus
    })
} 

const mdp = (dispatch) => ({
    createLike: (photoId) => dispatch(createLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
})

export default connect(msp, mdp)(Likes);
