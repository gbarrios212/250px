json.partial! "api/users/user", user: @user


json.photos do 
    @user.photos.each do |photo| 
        json.set! photo.id do 
            json.partial! "api/photos/photo", photo: photo 
        end 
    end 
end 


#when we get, we only get the photos associated with this one user! 
#great for our profile. 