import * as photoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS, 
    photos
})


export const fetchPhotos = () => (dispatch) => {
    return photoApiUtil.fetchPhotos()
        .then(photos => dispatch(receiveAllPhotos(photos)));
}