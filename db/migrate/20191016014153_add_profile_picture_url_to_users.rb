class AddProfilePictureUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profilePictureUrl, :string
  end
end
