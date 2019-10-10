import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from "../actions/photo_actions";
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState = merge({}, state, {[action.post.id]: action.post});
            return newState;
        case REMOVE_PHOTO:
            newState = merge({}, state)
            delete newState[action.id];
            return newState;
        default: 
            return state;
    }
}

export default photosReducer;