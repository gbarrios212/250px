json.extract! user, :id, :username, :email, :photo_ids


json.photos do 
    @user.photos.each do |photo| 
        json.set! photo.id do 
            json.partial! "api/photos/photo", photo: photo 
        end 
    end 
end 
