import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_NEW_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';


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
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_NEW_PHOTO:
            photo = action.payload.photo;
            newState = Object.assign({}, oldState);
            
            newState[photo.author_id].photo_ids.push(photo.id);
            return newState;
        //the below pushes the comment a user made to their authored_comment_ids
        //this will be useful when severing a link - this must be on both the user and photo tables, 
            //as well as the comments table
        case RECEIVE_COMMENT:
            // debugger;
            comment = action.comment;
            newState = Object.assign({}, oldState);
            user = newState[comment.author_id]
            user.authored_comment_ids.push(comment.id);
            user.commented_photo_ids.push(comment.photo_id);
            return newState
        // case REMOVE_PHOTO: 
        // case REMOVE_COMMENT: 

        //the following correspond to user - liked photo relationship 
        case RECEIVE_LIKE:
            like = action.like; 
            newState = Object.assign({}, oldState);
            user = newState[like.user_id]
            user.liked_photo_ids.push(like.photo_id);
            return newState;
        case REMOVE_LIKE:
            photoId = action.payload.like.photo_id;
            userId = action.payload.like.user_id;
            user = action.payload.users[userId];
            // debugger;
            user.liked_photo_ids = user.liked_photo_ids.filter(id => id !== photoId);
            // delete action.payload.users[userId].liked_photo_ids[photoId];
            debugger;
            window.merge = merge;
            newState = merge({}, oldState, action.payload.users);
            debugger;
            // test below 
            newState[userId].liked_photo_ids = user.liked_photo_ids
            // test above
            return newState;
        default: 
            return oldState;
    }
}

export default usersReducer;