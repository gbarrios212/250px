import { RECEIVE_PHOTO } from "../actions/photo_actions";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let comments;
    switch(action.type){
        case RECEIVE_PHOTO:
            comments = action.payload.comments;
            return Object.assign({}, state, comments)
        // case RECEIVE_COMMENT: 
        //     newState = merge({}, state, {[action.comment.id]: action.comment});
        //     return newState;
        // case REMOVE_COMMENT:
        //     newState = merge({}. state);
        //     delete newState[action.id];
        //     return newState;
        default: 
            return state;
    }
}

export default commentsReducer;