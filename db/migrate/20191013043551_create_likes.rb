class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.text :body, null: false
      t.integer :user_id, null: false 
      t.integer :photo_id, null: false 

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_index :likes, [:user_id, :photo_id], unique: true
  end
end
