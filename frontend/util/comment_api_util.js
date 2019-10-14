
export const createComment = (photoId, comment) => {
    return $.ajax({
        method: "POST",
        url: `api/photos/${photoId}/comments`,
        data: { comment }
    })
}

//could be source of confusion

export const updateComment = (comment) => {
    return $.ajax({
        method: "PATCH",
        url: `api/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${id}`
    })
}