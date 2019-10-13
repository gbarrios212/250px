class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    after_initialize :ensure_session_token
    
    attr_reader :password

    has_many :photos,
    foreign_key: :author_id

    #data user has garnered total from own photos
    has_many :received_likes, 
        through: :photos, 
        source: :likes
    has_many :received_comments, 
        through: :photos, 
        source: :comments 

    #data user has contributed to other photos 
    has_many :authored_likes, 
        foreign_key: :user_id, 
        class_name: :Like 
    has_many :authored_comments, 
        foreign_key: :author_id, 
        class_name: :Comment

    #user connection to photos through own interactions
    has_many :liked_photos, 
        through: :authored_likes, 
        source: :photo 
    has_many :commented_photos, 
        through: :authored_comments, 
        source: :photo

    # has_many :galleries
    # has_many :followers
    # has_many :followings 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password) 
            return user 
        else 
            return nil
        end
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save! 
        self.session_token
    end


    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
