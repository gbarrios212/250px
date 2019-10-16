import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_NEW_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';
import { CHANGE_USER } from '../actions/user_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let photo;
    let like;
    let user;
    let newState;
    let userId;
    let photoId;
    let comment;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            debugger;
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case CHANGE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_NEW_PHOTO:
            photo = action.payload.photo;
            newState = Object.assign({}, oldState);
            
            newState[photo.author_id].photo_ids.push(photo.id);
            return newState;
        case RECEIVE_COMMENT:
            comment = action.comment;
            newState = Object.assign({}, oldState);
            user = newState[comment.author_id]
            user.authored_comment_ids.push(comment.id);
            user.commented_photo_ids.push(comment.photo_id);
            return newState
        case RECEIVE_LIKE:
            like = action.like; 
            newState = merge({}, oldState);
            user = newState[like.user_id]
            user.liked_photo_ids.push(like.photo_id);
            return newState;
        case REMOVE_LIKE:
            photoId = action.payload.like.photo_id;
            userId = action.payload.like.user_id;
            user = action.payload.users[userId];
            user.liked_photo_ids = user.liked_photo_ids.filter(id => id !== photoId);
            newState = merge({}, oldState, action.payload.users);
            newState[userId].liked_photo_ids = user.liked_photo_ids
            return newState;
        default: 
            return oldState;
    }
}

export default usersReducer;