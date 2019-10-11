json.extract! photo, :id, :name, :author_id, :location, :lat, :long, :date_taken, :camera, :lens, :focal_length, :aperture, :shutter_speed, :iso, :description
json.photoUrl url_for(photo.photoConnect)