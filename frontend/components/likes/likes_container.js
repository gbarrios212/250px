import Likes from './likes';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions'

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    })
} 

const mdp = (dispatch) => ({
    // createLike: (like) => dispatch(createLike(like)),
    createLike: (photoId) => dispatch(createLike(photoId)),
    deleteLike: (photoId, userId) => dispatch(deleteLike(photoId, userId))
})

export default connect(msp, mdp)(Likes);
