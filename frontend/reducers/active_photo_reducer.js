// emtpy string 
//click updates string 
//edit form grabs string from ui active photo 

import { RECEIVE_ACTIVE_PHOTO, CLEAR_ACTIVE_PHOTO } from '../actions/active_photo_actions';

const activePhotoReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_ACTIVE_PHOTO:
            return action.photo;
        case CLEAR_ACTIVE_PHOTO:
            return "";
        default:
            return state;
    }
} 


export default activePhotoReducer;