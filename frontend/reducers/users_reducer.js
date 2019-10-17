import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_NEW_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';
import { CHANGE_USER, RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let photo;
    let like;
    let user;
    let newState;
    let userId;
    let photoId;
    let comment;
    let follow;
    let follower;
    let following;
    let followerId;
    let followingId;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            // //debugger;
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        case CHANGE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });
            //add a key with other user when on another one's page 
        case RECEIVE_USER:
            return Object.assign({}, oldState, action.payload.users);
            //add a key with all other users on log in, must be filtered in same way all photos are when in another place
        case RECEIVE_ALL_USERS:
            return Object.assign({}, oldState, action.users);
        case RECEIVE_NEW_PHOTO:
            photo = action.payload.photo;
            newState = Object.assign({}, oldState);         
            newState[photo.author_id].photo_ids.push(photo.id);
            return newState;
        case RECEIVE_COMMENT:
            comment = action.comment;
            newState = merge({}, oldState);
            user = newState[comment.author_id];
            user.authored_comment_ids.push(comment.id);
            user.commented_photo_ids.push(comment.photo_id);
            return newState;
        case REMOVE_COMMENT:
            comment = action.comment; 
            newState = merge({}, oldState);
            // debugger;
            user = newState[comment.author_id];
            user.authored_comment_ids = user.authored_comment_ids.filter(id => id !== comment.id);
            user.authored_comment_ids = user.commented_photo_ids.filter(id => id !== comment.photo_id);
            return newState;
        case RECEIVE_LIKE:
            like = action.like; 
            newState = merge({}, oldState);
            user = newState[like.user_id]
            user.liked_photo_ids.push(like.photo_id);
            user.authored_like_ids.push(like.photo_id);
            return newState;
        case REMOVE_LIKE:
            photoId = action.payload.like.photo_id;
            userId = action.payload.like.user_id;
            user = action.payload.users[userId];
            user.liked_photo_ids = user.liked_photo_ids.filter(id => id !== photoId);
            user.authored_like_ids = user.authored_like_ids.filter(id => id !== action.payload.like.id);
            newState = merge({}, oldState, action.payload.users);
            newState[userId].liked_photo_ids = user.liked_photo_ids
            return newState;
        case RECEIVE_FOLLOW:
            follow = action.follow; 
            newState = merge({}, oldState);
            follower = newState[follow.follower_id]
            following = newState[follow.following_id]
            newState[follower.id].following_ids.push(follow.following_id)
            follower.following_ids.push(follow.following_id)
            following.follower_ids.push(follow.follower_id)
            return newState;
        case REMOVE_FOLLOW:
            follow = action.payload.follow; 
            followerId = follow.follower_id;
            followingId = follow.following_id;
            follower = action.payload.users[followerId]
            following = action.payload.users[followingId]
            follower.following_ids = follower.following_ids.filter(id => id !== followingId);
            following.follower_ids = following.follower_ids.filter(id => id !== followerId);
            newState = merge({}, oldState, action.payload.users);
            newState[followerId].follower_ids = follower.following_ids;
            newState[followerId].following_ids = follower.following_ids;
            newState[followingId].follower_ids = following.follower_ids;
            return newState;
        default: 
            return oldState;
    }
}

export default usersReducer;

