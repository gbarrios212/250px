export const selectUserPhotos = (state, user) => {
    return user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
};
  