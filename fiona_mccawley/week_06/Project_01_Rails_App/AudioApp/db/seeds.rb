User.destroy_all

u1 = User.create(name: "Steve Albini", email: "steve@gmail.com", password: "chicken", password_confirmation: "chicken")
u2 = User.create(name: "Hash Rocket", email: "rocket@gmail.com", password: "chicken", password_confirmation: "chicken")
u3 = User.create(name: "Rails", email: "rails@gmail.com", password: "chicken", password_confirmation: "chicken")
u4 = User.create(name: "Rick Rubin", email: "rick@gmail.com", password: "chicken", password_confirmation: "chicken")
u5 = User.create(name: "Flood", email: "flood@gmail.com", password: "chicken", password_confirmation: "chicken")
u6 = User.create(name: "Me Llama", email: "llama@gmail.com", password: "chicken", password_confirmation: "chicken" )
u7 = User.create(name: "Butch Vig", email: "bvig@gmail.com", password: "chicken", password_confirmation: "chicken" )

p "Number of users: #{User.all.count}"






Engineer.destroy_all

steve = Engineer.create(name: "Steve Albini", bio: "Steven Albini is an American singer-songwriter, musician, record producer, audio engineer and music journalist. He was a member of Big Black, Rapeman and Flour, and is a member of Shellac. Owner and engineer at Electrical Audio Chicago", image: "http://weeklong.mixwiththemasters.com/wp-content/uploads/2014/08/MG_1074.jpg-.jpg", user_id: u1.id)
flood = Engineer.create(name: "Flood", bio: "Is the professional pseudonym of British post-punk and alternative rock record producer and audio engineer Mark Ellis. Flood's list of work includes projects with recording acts like New Order, U2, Nine Inch Nails, Depeche Mode, Gary Numan, Ministry, Thirty Seconds to Mars, Erasure, Nick Cave and the Bad Seeds, PJ Harvey, Foals, A-Ha, Orbital, Sigur Rós, The Smashing Pumpkins, The Killers, and Warpaint. Co Owner and engineer at Assault & Battery 1, London.", image: "http://www.theminimalbeat.com/wp-content/uploads/2016/07/1-5.jpg", user_id: u5.id)
rick = Engineer.create(name: "Rick Rubin", bio: " Rubin is the co-founder of Def Jam Records. Started in his NYU dorm room, joined by Russell Simmons and a four track recorder borrowed from the University. With the Beastie Boys, LL Cool J, Public Enemy, and Run–D.M.C., Rubin helped popularize hip hop music. A falling out with Columbia in 1988 forced him out of Def Jam. He then moved to Los Angeles, California, and started Def American, which later became known as American Recording. With his new label, Rubin truly began to embark upon a journey toward producer stardom, helming hit recordings for the Red Hot Chili Peppers (1991's Blood Sugar Sex Magik) and acclaimed work from Johnny Cash. ", image: "http://cdn.pastemagazine.com/www/articles/RickRubin_PhotoBryceDuffy.jpg?1372335392", user_id: u4.id)
butch = Engineer.create(name: "Butch Vig", bio: "An American musician and record producer, best known as the drummer and co-producer of the alternative rock band Garbage and the producer of Nevermind by Nirvana.", image: "http://media.jrn.com/images/b99336789z.1_20140903125914_000_g0b7mn9b.1-0.jpg", user_id: u7.id)


p "Engineer count is #{Engineer.all.count}"

Artist.destroy_all

hashrocket = Artist.create(name: "Hash Rocket", bio: "Founded by Ginger in 2004, their first album Cat equals God was released in 2005 to critical acclaim. One of the few bands to overcome the cat dog barrier that often breaks bands apart, Hash Rocket continue to pioneer species diversity.", image: "http://static.boredpanda.com/blog/wp-content/uploads/2017/02/animals-about-to-drop-album-photos-31-58aee2dd27168__700.jpg", user_id: u2.id)
rails = Artist.create(name: "Rails", bio: "They met each other through their love affair of acorns. The first album Oh Squirrel, my squirrel, hit #3 on the billboard music chart in 2006. Riding high on this, they released their unfortunately titled follow up, Hiding My Nuts in 2007, which was universally panned.", image: "http://static.boredpanda.com/blog/wp-content/uploads/2017/02/animals-about-to-drop-album-photos-58aeb22cb6327__700.jpg", user_id: u3.id)
shellac = Artist.create(name: "Shellac", bio: "Shellac is an American post-hardcore band from Chicago, Illinois, composed of Steve Albini (guitar and vocals), Bob Weston (bass guitar and vocals) and Todd Trainer (drums and vocals) and formed in 1992. Their music genre has been classified as post-hardcore but they describe themselves as a 'minimalist rock trio.'", image: "https://brassneckreviews.files.wordpress.com/2014/01/shellac-1.jpg", user_id: u1.id)
bigblack = Artist.create(name: "Big Black", bio: "Big Black was an American punk rock band from Evanston, Illinois, active from 1981 to 1987. Founded by singer and guitarist Steve Albini. Big Black's aggressive and abrasive music was characterized by distinctively clanky guitars and the use of a drum machine rather than a drum kit, elements that foreshadowed industrial rock", image: "https://s-media-cache-ak0.pinimg.com/originals/e3/3f/54/e33f546908d1322d01b468f60499d1f2.jpg", user_id: u1.id)
syntactic = Artist.create(name: "Syntactic Sugar", bio: "Escaping from a farm back in 2004, Syntactic Sugar released their hit single Meat Bad in 2005. This led to their hit album, Fur Feather Love in 2006.", image: "http://static.boredpanda.com/blog/wp-content/uploads/2017/02/animals-about-to-drop-album-photos-58aeb2b30934d__700.jpg", user_id: u6.id)



p "Artist count is #{Artist.all.count}"

Booking.destroy_all

b1 = Booking.create(appointment_time: DateTime.parse("03/05/2017 13:00"), engineer_id: steve.id, artist_id: hashrocket.id, user_id: u2.id)
b2 = Booking.create(appointment_time: DateTime.parse("06/05/2017 13:00"), engineer_id: steve.id, artist_id: hashrocket.id, user_id: u2.id)
b3 = Booking.create(appointment_time: DateTime.parse("03/05/2017 13:00"), engineer_id: rick.id, artist_id: rails.id, user_id: u3.id)
b4 = Booking.create(appointment_time: DateTime.parse("10/05/2017 13:00"), engineer_id: flood.id, artist_id: rails.id, user_id: u3.id)
b5 = Booking.create(appointment_time: DateTime.parse("03/05/2017 13:00"), engineer_id: butch.id, artist_id: syntactic.id, user_id: u6.id)
b6 = Booking.create(appointment_time: DateTime.parse("20/05/2017 13:00"), engineer_id: flood.id, artist_id: bigblack.id, user_id: u1.id)
b7 = Booking.create(appointment_time: DateTime.parse("30/05/2017 13:00"), engineer_id: butch.id, artist_id: shellac.id, user_id: u1.id)
b8 = Booking.create(appointment_time: DateTime.parse("03/06/2017 13:00"), engineer_id: rick.id, artist_id: syntactic.id, user_id: u6.id)


# Test association between bookings and engineers and artists
p "Booking count is #{Booking.all.count}"
#
