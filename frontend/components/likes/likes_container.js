import Likes from './likes';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions'

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    })
} 

const mdp = (dispatch) => ({
    createLike: (photoId) => dispatch(createLike(photoId)),
    deleteLike: (photoId) => dispatch(deleteLike(photoId))
})

export default connect(msp, mdp)(Likes);
