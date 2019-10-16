export const CHANGE_USER = "CHANGE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const updateUser = (user) => ({
    type: CHANGE_USER, 
    user
})

export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})