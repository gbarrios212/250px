// export const createLike = (like) => {
//     return $.ajax({
//         method: "POST",
//         url: `api/photos/${like.photo_id}/likes`,
//         data: { like }
//     })
// }

// export const deleteLike = (id) => {
//     return $.ajax({
//         method: "DELETE",
//         url: `api/likes/${id}`
//     })
// }

export const createLike = (photoId) => {
    return $.ajax({
        method: "POST",
        url: `api/photos/${photoId}/likes`
    })
}

export const deleteLike = (userId, photoId) => {
    
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${id}`
    })
}