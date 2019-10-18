# json.photo do 
#     json.partial! "api/photos/photo", photo: @photo
# end

# json.comments do 
#     @photo.comments.each do |comment| 
#         json.set! comment.id do 
#             json.partial! 'api/comments/comment', comment: comment
#             json.author do 
#                 json.extract! comment.author, :id, :username, :profilePictureUrl, :created_at
#             end
#         end 
#     end 
# end 

# alt 

# json.photos do 
    # json.set! @photo.id do
        json.partial! "api/photos/photo", photo: @photo
    # end
# end setting aside so page works with create photo form 

json.comments do 
    @photo.comments.each do |comment| 
        json.set! comment.id do 
            json.partial! 'api/comments/comment', comment: comment
        end
    end 
end 

json.users do
    @photo.commenters.each do |commenter|
        json.set! commenter.id do
            json.extract! commenter, 
                :id, 
                :username, 
                :profilePictureUrl, 
                :authored_comment_ids,
                :commented_photo_ids,
                :profilePictureUrl
        end
    end
end
