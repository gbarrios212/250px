json.extract! photo, 
    :id, 
    :name, 
    :author_id, 
    :category, 
    :location, 
    :lat, 
    :long, 
    :date_taken, 
    :camera, 
    :lens, 
    :focal_length,
    :aperture, 
    :shutter_speed, 
    :iso, 
    :description, 
    :comment_ids, 
    :like_ids, 
    :liker_ids, 
    :commenter_ids 
json.photoUrl url_for(photo.photoConnect)

# json.set(:liked_user_ids, photo.likers.ids)

