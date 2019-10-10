class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :name, null: false
      t.string :location
      t.float :lat
      t.float :long
      t.date :date_taken
      t.string :camera
      t.string :lens
      t.string :focal_length
      t.string :aperture
      t.string :shutter_speed
      t.string :iso
      t.text :description
      t.integer :author_id
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :photos, :author_id, unique: true
  end
end
