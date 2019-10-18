import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from "../actions/photo_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, CHANGE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let comments;
    switch(action.type){
        case RECEIVE_PHOTO:
            comments = action.payload.comments;
            return Object.assign({}, state, comments)
        case RECEIVE_COMMENT: 
            newState = merge({}, state, {[action.comment.id]: action.comment});
            return newState;
        case CHANGE_COMMENT: 
            newState = merge({}, state, {[action.comment.id]: action.comment});
            return newState;
        case REMOVE_COMMENT:
            newState = merge({}, state);
            delete newState[action.commentId];
            return newState;
        case RECEIVE_ALL_PHOTOS:
            // return {};
            return state;
        default: 
            return state;
    }
}

export default commentsReducer;