# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

u1 = User.create!(username: "guest", email: "guest@guest.com", password_digest: BCrypt::Password.create("guestguest"))
u2 = User.create!(username: "Daisy", email: "bird@bird.com", password_digest: BCrypt::Password.create("birdbird"))
# u3 = User.create!(username: "Chimp", email: "chimp@chimp.com", password_digest: BCrypt::Password.create("chimpchimp"))
# u4 = User.create!(username: "Ham", email: "ham@ham.com", password_digest: BCrypt::Password.create("hamham"))
u5 = User.create!(username: "Monkey", email: "monkey@monkey.com", password_digest: BCrypt::Password.create("monkeymonkey"))
u6 = User.create!(username: "Karl Barx", email: "karl@karl.net", password_digest: BCrypt::Password.create("karlkarl"))
u7 = User.create!(username: "henelopecruz", email: "pen@pen.net", password_digest: BCrypt::Password.create("henhen"))
# u8 = User.create!(username: "theg0ldfinch", email: "finchyfonchy", password_digest: BCrypt::Password.create("penpen"))
# u9 = User.create!(username: "loony4loonz", email: "loon@loon.net", password_digest: BCrypt::Password.create("loonloon"))
# u10 = User.create!(username: "blkswan", email: "swan@pen.net", password_digest: BCrypt::Password.create("loonloon"))

file = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
file2 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/chicken-11.jpg')
file3 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/good-parrot.jpg')
file4 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/Curious-Parrot.jpg')
file5 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/karlbaxx.jpg')

#for heroku
u1.profilePicture.attach(io: file, filename: 'bigbird.png')
u2.profilePicture.attach(io: file4, filename: 'Curious-Parrot.jpg')
u5.profilePicture.attach(io: file3, filename: 'good-parrot.jpg')
u6.profilePicture.attach(io: file5, filename: 'karlbaxx.jpg')
u7.profilePicture.attach(io: file2, filename: 'chicken-11.png')


# u2.profilePicture.attach(io: file, filename: 'bigbird.png')
# u3.profilePicture.attach(io: file, filename: 'bigbird.png')
# u4.profilePicture.attach(io: file, filename: 'bigbird.png')
# u5.profilePicture.attach(io: file, filename: 'bigbird.png')
# u6.profilePicture.attach(io: file, filename: 'bigbird.png')
# u7.profilePicture.attach(io: file, filename: 'bigbird.png')
# u8.profilePicture.attach(io: file, filename: 'bigbird.png')
# u9.profilePicture.attach(io: file, filename: 'bigbird.png')
# u10.profilePicture.attach(io: file, filename: 'bigbird.png')

