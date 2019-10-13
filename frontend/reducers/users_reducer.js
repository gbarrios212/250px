import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_NEW_PHOTO } from '../actions/photo_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        default: 
            return oldState;
    }
}

export default usersReducer;