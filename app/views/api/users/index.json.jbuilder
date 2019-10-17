# json.users do 
#     @users.each do |user| 
#         json.set! user.id do 
#             json.extract! user, 
#                 :id, 
#                 :photo_ids,
#                 :username, 
#                 :authored_like_ids, 
#                 :authored_comment_ids, 
#                 :liked_photo_ids, 
#                 :commented_photo_ids,
#                 :follower_ids,
#                 :following_ids
#             json.profilePictureUrl url_for(user.profilePicture)
#             # json.partial! "api/users/user", user: user    
#             # ^-- this seems excessive 
#         end 
#     end 
# end 


#alt 
json.users do 
    @users.each do |user| 
        json.set! user.id do 
            json.extract! user, :id, :username
            json.profilePictureUrl url_for(user.profilePicture)
        end 
    end 
end 