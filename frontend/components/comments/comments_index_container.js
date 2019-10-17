import CommentsIndex from './comments_index';
import { connect } from 'react-redux';
import { selectPhotoComments } from '../../reducers/selectors';

// const msp = (state) => {
//     return ({
//         comments: Object.values(state.entities.comments)
//     })
// }

const msp = (state, ownProps) => {
    // debugger;
    let currentUser = state.entities.users[state.session.id];
    let currentPhoto = state.entities.photos[ownProps.photoId];
    return({
        // currentPhoto,
        currentUser,
        comments: selectPhotoComments(state, currentPhoto)
    })
}

export default connect(msp, null)(CommentsIndex)