class AddPhotoUrlToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :photoUrl, :string
  end
end
