import Likes from './likes';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions'

const msp = (state) => {
    return({
        
    })
} 

const mdp = (dispatch) => ({
    // createLike: (like) => dispatch(createLike(like)),
    createLike: (photoId) => dispatch(createLike(photoId)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
})

export default connect(msp, mdp)(Likes);
