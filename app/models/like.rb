class Like < ApplicationRecord
    validates [:user_id, :photo_id], presence: true

    belongs_to :user, 
    belongs_to :photo,
    belongs_to :parent_comment, 
        class_name: :Comment
end
