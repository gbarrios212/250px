import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_NEW_PHOTO } from "../actions/photo_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let photo;
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
            newState[comment.photo_id].comment_ids.push(comment.id);
            return newState
        case REMOVE_PHOTO:
            newState = merge({}, state)
            delete newState[action.id];
            return newState;
        // case REMOVE_COMMENT: 
        //     newState = Object.assign({}, state);
        //     delete newState[]
        default: 
            return state;
    }
}

export default photosReducer;