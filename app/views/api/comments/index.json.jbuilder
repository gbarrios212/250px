@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :author_id, :photo_id, :parent_comment_id
    end
end
