import CommentsIndexItem from './comments_index_item';
import { connect } from 'react-redux';
import { selectPhotoComments } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
     ;
    let currentUser = state.entities.users[state.session.id];
    // let currentPhoto = state.entities.photos[ownProps.photoId];
    let commentAuthorId = ownProps.comment.author_id;
    let author = state.entities.users[commentAuthorId];
    return({
        currentUser,
        author
    })
}

const mdp = (dispatch) => {
    return({
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    })
}

export default connect(msp, mdp)(CommentsIndexItem)