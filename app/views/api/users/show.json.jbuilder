# json.partial! "api/users/user", user: @user


# json.photos do 
#     @user.photos.each do |photo| 
#         json.set! photo.id do 
#             json.partial! "api/photos/photo", photo: photo 
#         end 
#     end 
# end 

# alt 
# causing session problems 
# json.users do 
    # json.set! @user.id do 
        json.partial! "api/users/user", user: @user
    # end
# end 

json.photos do 
    @user.photos.each do |photo| 
        json.set! photo.id do 
            json.extract! photo, :id, :photoUrl
        end 
    end 
end 