class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    after_initialize :ensure_session_token
    
    attr_reader :password

    # has_many :photos,
    # foreign_key: :author_id

    # has_many :likes, 
    #     through: :photos, 
    #     source: :likes
    # has_many :comments, 
    #     through: :photos, 
    #     source: :comments 

    # has_many :galleries
    # has_many :followers
    # has_many :followings 
    
    
end
