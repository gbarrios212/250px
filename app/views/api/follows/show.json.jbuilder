json.users do 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user,
                :follower_ids, 
                :following_ids
        end 
    end
end

json.follow do 
    json.extract! @follow, :id, :follower_id, :following_id 
end