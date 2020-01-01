export const selectUserPhotos = (state, user) => {
    let photos = user ? user.photo_ids.map(id => state.entities.photos[id]) : [];
    return photos.filter(photo => photo !== undefined );
};
  
export const selectPhotoComments = (state, photo) => {
    // // ;
    let comments = photo ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
    let filtered = comments.filter(comment => comment !== undefined );
    return filtered.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
}

export const selectUserFollowers = (state, user) => {
    let followers = user ? user.follower_ids.map(id => state.entities.users[id]) : [];
    return followers.filter(follower => follower !== undefined);
}

export const selectUserFollowings = (state, user) => {
    let followings = user ? user.following_ids.map(id => state.entities.users[id]) : [];
    return followings.filter(following => following !== undefined);
}