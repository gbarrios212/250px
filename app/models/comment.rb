class Comment < ApplicationRecord
    validates :body, :author_id, :photo_id, presence: true

    belongs_to :author, 
        class_name: :User 
    belongs_to :photo
    belongs_to :parent_comment, optional: true,
        class_name: :Comment
    has_many :replies, 
        class_name: :Comment,
        foreign_key: :parent_comment_id
    has_one :commented_photo_author, 
        through: :photo, 
        source: :author
end
