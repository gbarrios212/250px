import CommentsIndex from './comments_index';
import { connect } from 'react-redux';
// import { fetchPhotos } from '../../actions/photo_actions';
import { selectPhotoComments } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    debugger;
    let currentPhoto = state.entities.photos[ownProps.photoId]
    return({
        comments: selectPhotoComments(state, currentPhoto)
    })
}

// const mdp = (dispatch) => ({
//     fetchPhotos: () => dispatch(fetchPhotos())
// })

export default connect(msp, null)(CommentsIndex)