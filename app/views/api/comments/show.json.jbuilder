json.comment do 
    json.partial! "api/comments/comment", comment: @comment
end

# json.photo do 
#     json.set! @comment.photo_id do 
#         json.partial! 'api/photos/photo', photo: @comment.photo
#     end 
# end 

json.photos do 
    json.set! @comment.photo_id do 
        json.extract! @comment.photo, :comment_ids, :commenter_ids
    end 
end 


json.users do 
    json.set! @comment.author_id do 
        json.extract! @comment.author, :commented_photo_ids
    end 
end
