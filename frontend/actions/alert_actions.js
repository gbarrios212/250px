export const RECEIVE_SUCCESS = "RECEIVE_SUCCESS";
export const CLEAR_SUCCESS = "CLEAR_SUCCESS";

export const fireSuccess = (message) => ({
    type: RECEIVE_SUCCESS,
    message
})

export const clearSuccess = () => ({
    type: CLEAR_SUCCESS
})
