import CommentsIndexItem from './comments_index_item';
import { connect } from 'react-redux';
import { selectPhotoComments } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';

// const msp = (state) => {
//     return ({
//         comments: Object.values(state.entities.comments)
//     })
// }

const msp = (state, ownProps) => {
    // debugger;
    let currentUser = state.entities.users[state.session.id];
    // let currentPhoto = state.entities.photos[ownProps.photoId];
    return({
        currentUser
    })
}

const mdp = (dispatch) => {
    return({
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    })
}

export default connect(msp, mdp)(CommentsIndexItem)