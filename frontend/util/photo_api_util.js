export const fetchPhotos = () => {
    return $.ajax({
        url: "/api/photos"
    })
}

export const createPhoto = (photo) => {
    return $.ajax({
        method: "POST",
        url: "/api/photos",
        data: { photo }
    })
}