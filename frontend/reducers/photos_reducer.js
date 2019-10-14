import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_NEW_PHOTO } from "../actions/photo_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let photo;
    let like;
    let comment; 
    // debugger;
    switch(action.type){
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_NEW_PHOTO:
            newState = merge({}, state, {[action.payload.photo.id]: action.payload.photo});
            return newState;
        case RECEIVE_PHOTO:
            photo = action.payload.photo; 
            // debugger;
            newState = merge({}, {[photo.id]: photo});
            return newState;
        case RECEIVE_COMMENT:
            comment = action.comment;
            newState = Object.assign({}, state);
            photo = newState[comment.photo_id]
            photo.comment_ids.push(comment.id);
            photo.commenter_ids.push(comment.author_id);
            return newState
        case REMOVE_PHOTO:
            newState = merge({}, state)
            delete newState[action.id];
            return newState;
        // case REMOVE_COMMENT: 
        //     newState = Object.assign({}, state);
        //     delete newState[action.commentId]
        case RECEIVE_LIKE: 
            like = action.like;
            newState = Object.assign({}, state);
            photo = newState[like.photo_id]
            photo.like_ids.push(like.id);
            photo.liker_ids.push(like.user_id);
        //case REMOVE_LIKE
        default: 
            return state;
    }
}

export default photosReducer;