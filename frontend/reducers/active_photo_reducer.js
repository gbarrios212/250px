// emtpy string 
//click updates string 
//edit form grabs string from ui active photo 

import { RECEIVE_ACTIVE_PHOTO_ID, CLEAR_ACTIVE_PHOTO_ID } from '../actions/active_photo_actions';

const activePhotoReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_ACTIVE_PHOTO_ID:
            return action.photoId;
        case CLEAR_ACTIVE_PHOTO_ID:
            return null;
        default:
            return state;
    }
} 


export default activePhotoReducer;