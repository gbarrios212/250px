class Like < ApplicationRecord
    validates :user_id, :photo_id, null: false
    validates :user_id, uniqueness: { scope: :photo_id } 

    belongs_to :user 
    belongs_to :photo
    has_one :liked_photo_author, 
        through: :photo, 
        source: :author
end
