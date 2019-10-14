import * as LikeApiUtil from '../util/likes_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})

// export const createLike = (like) => (dispatch) => {
//     return LikeApiUtil.createLike(like)
//         .then(like => dispatch(receiveLike(like)), err => dispatch(receiveErrors(err.responseJSON)));
// }


export const deleteLike = (likeId) => (dispatch) => {
    return LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(like))
            // , err => dispatch(receiveErrors(err.responseJSON))
            );
}

export const createLike = (photoId) => (dispatch) => {
    return LikeApiUtil.createLike(photoId)
        .then(like => dispatch(receiveLike(like))
        // , err => dispatch(receiveErrors(err.responseJSON))
        );
}
