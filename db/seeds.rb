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


photo = Photo.create!(name: "sweet photo", author_id: 3)