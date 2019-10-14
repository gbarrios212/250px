export const selectUserPhotos = (state, user) => {
    // debugger;
    // if (!state.entities.photos[0]){
    //     return [];
    // }
    return user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
};
  
export const selectPhotoComments = (state, photo) => {
    // debugger;
    return photo ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
}