import { 
    RECEIVE_PHOTO, 
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/photo_actions';


const photoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_PHOTO:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default: 
            return oldState;
    }
}

export default photoErrorsReducer;