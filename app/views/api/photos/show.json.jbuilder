json.photo do 
    json.partial! "api/photos/photo", photo: @photo
end

json.comments do 
    @photo.comments.each do |comment| 
        json.set! comment.id do 
            json.partial! 'api/comments/comment', comment: comment
            json.author do 
                json.extract! comment.author, :id, :username, :profilePictureUrl, :created_at
            end
        end 
    end 
end 