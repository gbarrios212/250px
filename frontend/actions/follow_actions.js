import * as FollowApiUtil from '../util/follows_api_util'

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
})

const removeFollow = (payload) => ({
    type: FOLLOW,
    payload
})

export const createFollow = (userId) => (dispatch) => {
    return FollowApiUtil.createFollow(userId)
        .then(follow => {
            dispatch(receiveFollow(follow))
        });
} 

export const deleteFollow = (userId) => (dispatch) => {
    return FollowApiUtil.deleteFollow(userId)
        .then(response => dispatch(removeFollow(response))
    );
}