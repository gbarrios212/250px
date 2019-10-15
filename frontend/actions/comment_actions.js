import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';
export const CHANGE_COMMENT = "CHANGE_COMMENT";

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

const changeComment = (comment) => ({
    type: CHANGE_COMMENT,
    comment
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})



export const createComment = (photoId, comment) => (dispatch) => {
    return CommentApiUtil.createComment(photoId, comment)
        .then(response => dispatch(receiveComment(response.comments[response.comments.length - 1])), err => dispatch(receiveErrors(err.responseJSON)));
}

export const updateComment = (comment) => (dispatch) => {
    return CommentApiUtil.updateComment(comment)
        .then(comment => dispatch(changeComment(comment)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const deleteComment = (commentId) => (dispatch) => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)));
}