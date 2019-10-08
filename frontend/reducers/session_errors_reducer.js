import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_ERRORS
} from '../actions/session_actions';
import sessionReducer from './session_reducer';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default: 
            return oldState;
    }
}

export default sessionErrorsReducer;