# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


guest = User.create!(username: "guest", email: "guest@guest.com", password_digest: BCrypt::Password.create("guestguest"))
bird = User.create!(username: "bird", email: "bird@bird.com", password_digest: BCrypt::Password.create("birdbird"))
chimp = User.create!(username: "chimp", email: "chimp@chimp.com", password_digest: BCrypt::Password.create("chimpchimp"))
ham = User.create!(username: "ham", email: "ham@ham.com", password_digest: BCrypt::Password.create("hamham"))
monkey = User.create!(username: "monkey", email: "monkey@monkey.com", password_digest: BCrypt::Password.create("monkeymonkey"))


# photo = Photo.create!(name: "sweet photo", author_id: 3)


comment1 = Comment.create!(body: "this photo sucks", author_id: 1, photo_id: 7)
comment2 = Comment.create!(body: "not nice!", author_id: 2, photo_id: 7, parent_comment_id: 1)
comment3 = Comment.create!(body: "sweet photo lmao", author_id: 5, photo_id: 7)


like1 = Like.create!(user_id: 2, photo_id: 7) 
like2 = Like.create!(user_id: 3, photo_id: 7)
like3 = Like.create!(user_id: 4, photo_id: 7)
like4 = Like.create!(user_id: 5, photo_id: 7)
