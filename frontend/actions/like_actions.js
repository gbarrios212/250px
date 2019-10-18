import * as LikeApiUtil from '../util/likes_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (payload) => ({
    type: REMOVE_LIKE,
    payload
})

export const createLike = (photoId) => (dispatch) => {
    return LikeApiUtil.createLike(photoId)
        .then(like => {
            // debugger;
            dispatch(receiveLike(like))
        });
} 

export const deleteLike = (photoId) => (dispatch) => {
    return LikeApiUtil.deleteLike(photoId)
        .then(response => dispatch(removeLike(response))
    );
}