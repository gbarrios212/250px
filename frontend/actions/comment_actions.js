import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})


export const createComment = (comment) => (dispatch) => {
    return CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const updateComment = (comment) => (dispatch) => {
    return CommentApiUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const deleteComment = (commentId) => (dispatch) => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)));
}