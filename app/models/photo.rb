class Photo < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    belongs_to :author,
        class_name: :User
    # has_many :likes
    # has_many :comments
    # has_many :galleries
    # has_many :follows,
        # through: :author,
        # source: :followers 
    # has_many :photo_galleries
        # foreign_key: :photo_id. 
        # class_name: :Galleries_photos check this !!!!
    # has_many :galleries,
        # through: :photo_galleries
        # source: :galleries check this!!!!
end