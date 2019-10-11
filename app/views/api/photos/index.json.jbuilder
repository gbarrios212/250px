@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :name
        json.photoUrl @photo.photoConnects.map { |file| url_for(file) }
    end
end
