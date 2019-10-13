import { 
    RECEIVE_COMMENT, 
    RECEIVE_COMMENT_ERRORS,
    CLEAR_COMMENT_ERRORS
} from '../actions/comment_actions';


const commentErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERRORS:
            return [];
        default: 
            return oldState;
    }
}

export default commentErrorsReducer;