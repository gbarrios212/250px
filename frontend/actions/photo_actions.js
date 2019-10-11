import * as photoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS, 
    photos
})

const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO, 
    photo
})

const removePhoto = (id) => ({
    type: REMOVE_PHOTO, 
    id
})

// const receiveErrors = (errors) => ({
//     type: RECEIVE_ERRORS,
//     errors
// })

//display errors?

export const fetchPhotos = () => (dispatch) => {
    return photoApiUtil.fetchPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
}

export const fetchPhoto = (id) => (dispatch) => {
    return photoApiUtil.fetchPhoto(id)
        .then(photo => dispatch(receivePhoto(photo)));
}

export const createPhoto = (photo) => (dispatch) => {
    return photoApiUtil.createPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)));
}

export const updatePhoto = (photo) => (dispatch) => {
    debugger;
    return photoApiUtil.updatePhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)));
}

export const deletePhoto = (id) => (dispatch) => {
    return photoApiUtil.deletePhoto(id)
        .then(() => dispatch(removePhoto(id)));
}