class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false 
      t.integer :photo_id, null: false 
      t.integer :parent_comment_id

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_index :comments, :author_id
    add_index :comments, :photo_id
    add_index :comments, :parent_comment_id
  end
end
