class Follow < ApplicationRecord
    validates :follower_id, :following_id, null: false
    validates :follower_id, uniqueness: { scope: :following_id } 

    belongs_to :following,
        class_name: :User
    belongs_to :follower, 
        class_name: :User

end
