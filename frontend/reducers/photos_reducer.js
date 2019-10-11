import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from "../actions/photo_actions";
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger;
    switch(action.type){
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState = merge({}, state, {[action.photo.id]: action.photo});
            return newState;
            // why do I want ID here? seems like that messes with my ability to select photo later 
            // also getting a random id: 5 sent up as a param to photos controller
            // return action.photo
        case REMOVE_PHOTO:
            newState = merge({}, state)
            delete newState[action.id];
            return newState;
        default: 
            return state;
    }
}

export default photosReducer;