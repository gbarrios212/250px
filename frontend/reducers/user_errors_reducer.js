import { 
    CHANGE_USER,
    RECEIVE_USER_ERRORS,
    CLEAR_USER_ERRORS
} from '../actions/user_actions';


const userErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case CHANGE_USER:
            return [];
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_USER_ERRORS:
            return [];
        default: 
            return oldState;
    }
}

export default userErrorsReducer;