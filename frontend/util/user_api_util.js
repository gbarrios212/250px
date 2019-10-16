export const fetchUser = (id) => {
    return $.ajax({
        url: `api/users/${id}`
    })
}

export const fetchAllUsers = () => {
    return $.ajax({
        url: `api/users`
    })
}