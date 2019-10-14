json.users do 
    json.set! @user.id do 
        json.extract! @user, :liked_photo_ids
    end 
end

json.photos do 
    json.set! @photo.id do 
        json.extract! @photo, :liker_ids
    end
end

json.like do 
    json.extract! @like, :id, :user_id, :photo_id 
end