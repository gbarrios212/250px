import * as UserApiUtil from "../util/user_api_util";

export const CHANGE_USER = "CHANGE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";


export const updateUser = (user) => ({
    type: CHANGE_USER, 
    user
})

//user and own photos nested
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})


export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const fetchUser = (id) => (dispatch) => {
    return UserApiUtil.fetchUser(id)
        .then(payload => (dispatch(receiveUser(payload))))
}