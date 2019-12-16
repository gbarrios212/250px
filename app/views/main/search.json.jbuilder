json.users do
  json.array!(@users) do |user|
    json.username user.username
    json.id user.id
  end
end

json.photos do 
  json.array!(@photos) do |photo|
    json.name photo.name
    json.id photo.id
  end
end