export const selectUserPhotos = (state, user) => {
    let photos = user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
    return photos.filter(photo => photo !== undefined );
};
  
export const selectPhotoComments = (state, photo) => {
    // debugger;
    let comments = photo ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
    return comments.filter(comment => comment !== undefined );
}