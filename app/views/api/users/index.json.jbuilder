@users.each do |user| 
    json.set! user.id do 
        json.extract! user, 
            :id, 
            :username, 
            :photo_ids, 
            :follower_ids, 
            :following_ids, 
            :liked_photo_ids, 
            :authored_comment_ids, 
            :commented_photo_ids
        if user.profilePicture.attached?
            (json.profilePictureUrl url_for(user.profilePicture))
        end
    end 
end 