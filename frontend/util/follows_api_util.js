export const createLike = (userId) => {
    return $.ajax({
        method: "POST",
        url: `api/users/${userId}/likes`
    })
}

export const deleteLike = (userId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${userId}`
    })
}
