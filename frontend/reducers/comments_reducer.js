import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT: 
            newState = merge({}, state, {[action.comment.id]: action.comment});
            return newState;
        case REMOVE_COMMENT:
            newState = merge({}. state);
            delete newState[action.id];
            return newState;
        default: 
            return state;
    }
}

export default commentsReducer;