# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

u1 = User.create!(username: "Guest", email: "guest@guest.com", password_digest: BCrypt::Password.create("guestguest"))
u2 = User.create!(username: "Daisy", email: "bird@bird.com", password_digest: BCrypt::Password.create("birdbird"))
    #nice, grad student
u3 = User.create!(username: "Chimp", email: "chimp@chimp.com", password_digest: BCrypt::Password.create("chimpchimp"))
u4 = User.create!(username: "Ham", email: "ham@ham.com", password_digest: BCrypt::Password.create("hamham"))
    #ham just posts about his sound cloud 
            #hey guys im here to talk about my new single coming out this week its called b
u5 = User.create!(username: "Monkey", email: "monkey@monkey.com", password_digest: BCrypt::Password.create("monkeymonkey"))
    #trolls and thirsts
u6 = User.create!(username: "Karl Barx", email: "karl@karl.net", password_digest: BCrypt::Password.create("karlkarl"))
    # he sucks, nobody knows why here, just to be pretentious 
u7 = User.create!(username: "Henelope Cruz", email: "pen@pen.net", password_digest: BCrypt::Password.create("penpen"))
    # just posts pics of herself as a hen
u8 = User.create!(username: "theg0ldfinch", email: "finchyfonchy", password_digest: BCrypt::Password.create("penpen"))
    #comes here to speak different languages 
u9 = User.create!(username: "loony4loonz", email: "loon@loon.net", password_digest: BCrypt::Password.create("loonloon"))
u10 = User.create!(username: "blkswan", email: "swan@pen.net", password_digest: BCrypt::Password.create("loonloon"))

# file2 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file3 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file4 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file5 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file6 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file7 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file8 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file9 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file10 = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
# file12 = open('/https://250px-seeds.s3.us-east-2.amazonaws.com/Cockatiel-Australian-Parrot-Coimbatore-Bird-Photography.jpg')
#prof-pics

guest = open('https://250px-seeds.s3.us-east-2.amazonaws.com/bigbird.png')
daisy = open('https://250px-seeds.s3.us-east-2.amazonaws.com/a-female-resplendent-quetzal-pharomachrus-mocinno-at-the-dallas-world-aquarium_u-l-q11u4q40.jpg')
ham = open('https://250px-seeds.s3.us-east-2.amazonaws.com/Screen+Shot+2019-10-15+at+10.50.41+AM.png')
monkey = open('https://250px-seeds.s3.us-east-2.amazonaws.com/Screen+Shot+2019-10-16+at+11.46.43+AM.png')
karlbarx = open('https://250px-seeds.s3.us-east-2.amazonaws.com/karlbaxx.jpg')
hen = open('https://250px-seeds.s3.us-east-2.amazonaws.com/621b1098a9478c05494dbf99f2a96709--fancy-chicken-coop-chicken-coops.jpg')
loony = open('https://250px-seeds.s3.us-east-2.amazonaws.com/martin-pescador-dorsirrufo.jpg')
# swan = open()


#for heroku
u1.profilePicture.attach(io: guest, filename: 'bigbird.jpg')
u2.profilePicture.attach(io: daisy, filename: 'a-female-resplendent-quetzal-pharomachrus-mocinno-at-the-dallas-world-aquarium_u-l-q11u4q40.jpg')
u3.profilePicture.attach(io: guest, filename: 'bigbird.jpg')
u4.profilePicture.attach(io: ham, filename: 'Screen+Shot+2019-10-16+at+11.46.43+AM.png')
u5.profilePicture.attach(io: monkey, filename: 'Screen+Shot+2019-10-16+at+11.46.43+AM.png')
u6.profilePicture.attach(io: karlbarx, filename: 'karlbaxx')
u7.profilePicture.attach(io: hen, filename: '621b1098a9478c05494dbf99f2a96709--fancy-chicken-coop-chicken-coops.jpg')
u8.profilePicture.attach(io: guest, filename: 'bigbird.jpg')
u9.profilePicture.attach(io: loony, filename: 'martin-pescador-dorsirrufo.jpg')
u10.profilePicture.attach(io: guest, filename: 'bigbird.jpg')


comment1 = Comment.create!(body: "this photo sucks", author_id: 1, photo_id: 7)
comment2 = Comment.create!(body: "not nice!", author_id: 2, photo_id: 7, parent_comment_id: 1)
comment3 = Comment.create!(body: "sweet photo lmao jk", author_id: 5, photo_id: 7)




# "KWEEEEEEEEEN"
# "😍😍😍😍😍"
# "🎶I'M NOT A STRANGER🎶 I'M A 🔥🔥SONGWRITER🔥🔥🔥 I MOLD LYRICS WITH WORDS. 🎶🎶💯% original 💯%💥🎶🎶 kindly hit me up"
# "Hi, I’m a new small make up acc and i would appreciate it, if you come and say hello 💕💕💕"
# "🔥🔥🔥🔥hot and Beautiful"
# "I wrote a paper on this bird while in grad school (I’m a big fan of his work) and I wish this picture came out just a few years earlier while I was doing my research! I do a lot of my research through birding content and love your feed!"
# "Kommer der en udstilling på et tidspunkt? 🙌🏽"
# lame af 
# Someone forgot to recycle their plastic trash
# “The exhibition makes me think deeply about what it means to recognize another’s autonomy, their self-governance. As sexual beings we play across the demarcations between the “I” and the “you”: giving, withholding, teasing, overwhelming, enveloping, rejecting, and yielding. Certainly language (verbal and signed) mediates consent. But the body has its own coded signaling too, and it’s the other crucial component of consent. Outside of the romantic encounter I typically can read intention, purpose, and desire in others. Kha’s work here makes me see that only self-serving rationalizations or a refusal to recognize their humanity prevent me from understanding these things in a kiss.”
# More words = Smart ???
# Love the concept, execution could be so much better
# Love her 
# Queen and king forever❤️
# MHMMMM
# Verified
# ICONIC
# queen of being perfect omg
# ужасный педикюр
#wife
#wife
#wiiiiiiife
#WIIIIIFE 

# 20 photos 
# 10 users 
# likes, comments, follows. 


like1 = Like.create!(user_id: 2, photo_id: 7) 
like2 = Like.create!(user_id: 3, photo_id: 7)
like3 = Like.create!(user_id: 4, photo_id: 7)
like4 = Like.create!(user_id: 5, photo_id: 7)

#photos 
#a nice day to repost this cat