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
    let currentPhoto = state.entities.photos[ownProps.photoId]
    return({
        comments: selectPhotoComments(state, currentPhoto)
    })
}

export default connect(msp, null)(CommentsIndex)