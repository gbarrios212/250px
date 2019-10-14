export const createLike = (photoId) => {
    return $.ajax({
        method: "POST",
        url: `api/photos/${photoId}/likes`
    })
}

export const deleteLike = (photoId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${photoId}`
    })
}
