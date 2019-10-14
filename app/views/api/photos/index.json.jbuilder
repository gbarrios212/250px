@photos.each do |photo|
    json.set! photo.id do 
        json.partial! "api/photos/photo", photo: photo
        json.photoUrl url_for(photo.photoConnect)
    end
end
