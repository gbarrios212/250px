export const selectUserPhotos = (state, user) => {
    // debugger;
    return user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
};
  
export const selectPhotoComments = (state, photo) => {
    // debugger;
    return photo ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
}