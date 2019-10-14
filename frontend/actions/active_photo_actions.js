export const RECEIVE_ACTIVE_PHOTO_ID= "RECEIVE_ACTIVE_PHOTO_ID";
export const CLEAR_ACTIVE_PHOTO_ID= "CLEAR_ACTIVE_PHOTO_ID"

export const receiveActivePhotoId = (photoId) => ({
    type: RECEIVE_ACTIVE_PHOTO_ID,
    photoId
})

export const clearActivePhotoId = () => ({
    type: CLEAR_ACTIVE_PHOTO_ID
})

