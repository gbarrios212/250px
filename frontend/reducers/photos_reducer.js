import { RECEIVE_ALL_PHOTOS } from "../actions/photo_actions";


const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        default: 
            return state;
    }
}

export default photosReducer;