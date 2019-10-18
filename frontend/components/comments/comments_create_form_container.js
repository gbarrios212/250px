import CommentsCreateForm from './comments_create_form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    // // ;
    return $.ajax({
        photoId: ownProps.photoId, 
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = (dispatch) => {
    // ;
    return ({
        createComment: (photoId, comment) => dispatch(createComment(photoId, comment))
    })
}

export default connect(msp, mdp)(CommentsCreateForm);