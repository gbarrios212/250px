import * as photoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const CLEAR_PHOTO_ERRORS = "CLEAR_PHOTO_ERRORS"; 

///test
export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO"
////test 


const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS, 
    photos
})

export const receivePhoto = (payload) => ({
    type: RECEIVE_PHOTO, 
    payload
})

///test
export const receiveNewPhoto = (payload) => ({
    type: RECEIVE_NEW_PHOTO, 
    payload
})
///test

const removePhoto = (id) => ({
    type: REMOVE_PHOTO, 
    id
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_PHOTO_ERRORS
})

export const fetchPhotos = () => (dispatch) => {
    return photoApiUtil.fetchPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
}

export const fetchPhoto = (id) => (dispatch) => {
    return photoApiUtil.fetchPhoto(id)
        .then(payload => dispatch(receivePhoto(payload)));
}

export const createPhoto = (photo) => (dispatch) => {
    return photoApiUtil.createPhoto(photo)
        .then(payload => dispatch(receiveNewPhoto(payload)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const updatePhoto = (photo) => (dispatch) => {
    return photoApiUtil.updatePhoto(photo)
        .then(payload => dispatch(receivePhoto(payload)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const deletePhoto = (id) => (dispatch) => {
    return photoApiUtil.deletePhoto(id)
        .then(() => dispatch(removePhoto(id)));
}