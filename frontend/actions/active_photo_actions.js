export const RECEIVE_ACTIVE_PHOTO= "RECEIVE_ACTIVE_PHOTO";
export const CLEAR_ACTIVE_PHOTO= "CLEAR_ACTIVE_PHOTO"

export const receiveActivePhoto = (photo) => ({
    type: RECEIVE_ACTIVE_PHOTO,
    photo
})

export const clearActivePhoto = () => ({
    type: CLEAR_ACTIVE_PHOTO
})

