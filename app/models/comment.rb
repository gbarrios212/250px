class Comment < ApplicationRecord
    validates :body, :author_id, :photo_id, presence: true

    belongs_to :author, 
        class_name: :User 
    belongs_to :photo
    belongs_to :parent_comment, 
        class_name: :Comment
end
