import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_actions';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    debugger;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default: 
            return oldState;
    }
}

export default sessionErrorsReducer;