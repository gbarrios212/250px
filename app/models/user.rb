# require 'open-uri'


class User < ApplicationRecord
    # include PgSearch 
    # pg_search_scope :search_by_username, against: [:username]

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    # validate :ensure_photo
    
    after_initialize :ensure_session_token
    after_initialize :profile_picture_nil
    #commented out for heroku

    attr_reader :password

    has_one_attached :profilePicture

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
    has_many :follower_connections,
        foreign_key: :following_id, 
        class_name: :Follow
    has_many :following_connections, 
        foreign_key: :follower_id,
        class_name: :Follow
    has_many :followers, 
        through: :follower_connections,
        source: :follower
    has_many :followings,
        through: :following_connections, 
        source: :following


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

    # def ensure_photo
    #     unless self.photoConnect.attached?
    #         errors[:photo] << "must be attached"
    #     end
    # end
#commented out for heroku
    def profile_picture_nil
        if !self.profilePicture.attached?
            # file = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
            self.profilePicture.attach(io: File.open('app/assets/images/bigbird.png'), filename: 'bigbird.png')
            # self.profilePicture.attach(io: file, filename: 'bigbird.png')
        end
    end
    
end
