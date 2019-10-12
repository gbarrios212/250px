export const selectUserPhotos = (state, user) => {
    return user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
};
  
// export const selectPokemonItem = (state, id) => {
//     return state.entities.items[id];
// };