export const createFollow = (userId) => {
    return $.ajax({
        method: "POST",
        url: `api/users/${userId}/follows`
    })
}

export const deleteFollow = (userId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/follows/${userId}`
    })
}
