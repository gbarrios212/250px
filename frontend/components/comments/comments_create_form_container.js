import CommentsCreateForm from './comments_create_form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    debugger;
    return $.ajax({
        photoId: ownProps.photoId
    })
}

const mdp = (dispatch) => ({
    createComment: (photoId, comment) => dispatch(createComment(photoId, comment))
})

export default connect(msp, mdp)(CommentsCreateForm);