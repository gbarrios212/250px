import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_NEW_PHOTO } from '../actions/photo_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let photo;
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_NEW_PHOTO:
            photo = action.payload.photo;
            newState = Object.assign({}, oldState);
            debugger;
            newState[photo.author_id].photo_ids.push(photo.id);
            return newState;
        default: 
            return oldState;
    }
}

export default usersReducer;