

User.destroy_all


user1 = User.create(name: "Bill Gates", email: "bill@gates.com", password: "chicken", password_confirmation: "chicken", location: "12 york st, Sydney", image: "https://www.project-syndicate.org/default/library/eb7a653970f377481252dbb4a16923f2.square.jpg")
user2 = User.create(name: "Nick Johnson", email: "nick@johnson.com", password: "chicken", password_confirmation: "chicken", location: "opera house Sydney", image: "http://allsportstucson.com/wp-content/uploads/2014/01/2013.14.NJohnson.jpg")
user3 = User.create(name: "Zeppo Marx", email: "zeppo@marx.com", password: "chicken", password_confirmation: "chicken", location: "12 gladstone street, balmain", image: "https://s-media-cache-ak0.pinimg.com/236x/f5/7d/6c/f57d6cdf4a629dfcbae58ab253d0a887.jpg")
user4 = User.create(name: "Groucho Marx", email: "groucho@marx.com", password: "chicken", password_confirmation: "chicken", location: "45 elizabeth street, sydney, nsw", image: "http://www.nndb.com/people/855/000031762/groucho2-sm.jpg")
user5 = User.create(name: "Harpo Marx", email: "harpo@marx.com", password: "chicken", password_confirmation: "chicken", location: "56 York st, sydney, nsw", image: "https://static.comicvine.com/uploads/original/6/64684/1376887-harpo_marx_5.jpg")
user6 = User.create(name: "Gummo Marx", email: "gummo@marx.com", password: "chicken", password_confirmation: "chicken", location: "22 George st, sydney, nsw", image: "http://3.bp.blogspot.com/--30y2A2GA2M/TcNgy6-S4II/AAAAAAAAA3k/RT3Xx5GPSq8/s320/zeppo.jpg")
user7 = User.create(name: "Donald Trump", email: "donald@trump.com", password: "chicken", password_confirmation: "chicken", location: "120 eppin rd, Lane cove", image: "https://pbs.twimg.com/profile_images/1297925528/donald-trump_400x400.jpg")
user8 = User.create(name: "Nicole Kidman", email: "nicole@kidman.com", password: "chicken", password_confirmation: "chicken", location: "33 parramatta road, five dock", image: "http://www.topnews.in/files/Nicole-Kidman_1.jpg")
user9 = User.create(name: "Angelina Julie ", email: "angelina@julie.com", password: "chicken", password_confirmation: "chicken", location: "22 hunter street, parramatta", image: "http://cdn03.cdn.justjared.com/wp-content/uploads/headlines/2017/03/angelina-jolie-meets-with-archbishop.jpg")
user10 = User.create(name: "David Beckham", email: "david@beckham.com", password: "chicken", password_confirmation: "chicken", location: "6 carr st, waverton", image: "http://www.hellomagazine.com/imagenes/profiles/david-beckham/6301-david-beckham.jpg.jpg")
user11 = User.create(name: "Salman khan", email: "salman@khan.com", password: "chicken", password_confirmation: "chicken", location: "33 carr st, waverton", image: "http://images.desimartini.com/media/uploads/salman_khan_kick.jpg")
user12 = User.create(name: "Barack Obama", email: "barack@obama.com", password: "chicken", password_confirmation: "chicken", location: "134-136 walker st, North Sydney", image: "https://s-media-cache-ak0.pinimg.com/236x/6f/ce/6a/6fce6aeb696fc98214ebe296db1f4cf5.jpg")
user13 = User.create(name: "Matt Toussi", email: "matt@toussi.com", password: "chicken", password_confirmation: "chicken", location: "108 victoria street, ashfield ", image: "http://4vector.com/i/free-vector-male-user-icon-clip-art_117343_Male_User_Icon_clip_art_medium.png")

p "Users: #{ User.count }"

Pet.destroy_all

pet1 = Pet.create(name: "Bin", date_of_birth: 5, type_of_pet: "Dog", gender: "Male", description: "Brown in colour", image: "http://www.info-psi.estranky.cz/img/picture/30/77256-270px-clyde_the_bulldog.jpg", user_id: user1.id )

pet2 = Pet.create(name: "Asia", date_of_birth: 5, type_of_pet: "Persian Cat", gender: "Female", description: "Little cute gem white and brownish", image: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/Himalyan-cat.jpg", user_id: user2.id )
pet3 = Pet.create(name: "Biscuit", date_of_birth: 5, type_of_pet: "Dobberman Dog", gender: "Male", description: "Balck and Brown fiendly Dobberman ", image: "https://s-media-cache-ak0.pinimg.com/736x/37/63/78/3763785ef40ee4ceabdc4402cb3e1b99.jpg", user_id: user3.id )
pet4 = Pet.create(name: "Booboo", date_of_birth: 5, type_of_pet: "Cat", gender: "Male", description: "White in colour", image: "http://www.alpinecommunitynetwork.com/wp-content/uploads/8-5-13-lost-cat-NEO.jpg", user_id: user4.id )
pet5 = Pet.create(name: "Choochoo", date_of_birth: 5, type_of_pet: "Cat", gender: "Female", description: "White in colour", image: "https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header", user_id: user5.id )
pet6 = Pet.create(name: "Daisy", date_of_birth: 15, type_of_pet: "Chow Chow Dog", gender: "Female", description: "Wolly brown friendly chow chow", image: "https://s-media-cache-ak0.pinimg.com/736x/0c/2a/7e/0c2a7e5990e036d41b8c7acea4843fca.jpg", user_id: user6.id )
pet7 = Pet.create(name: "Domino", date_of_birth: 15, type_of_pet: "Pekingese Dog", gender: "Male", description: "Aggressive inteligent lion dog", image: "https://puppydogweb.com/gallery/pekingeses/pekingese_anasatasovska.jpg", user_id: user7.id )
pet8 = Pet.create(name: "Iris", date_of_birth: 15, type_of_pet: "Fish", gender: "Male", description: "Stunning fighter fish", image: "https://s-media-cache-ak0.pinimg.com/736x/58/83/7a/58837a77aa12e9e01a55a95d34bf7945.jpg", user_id: user8.id )
pet9 = Pet.create(name: "Koby", date_of_birth: 15, type_of_pet: "Iguana", gender: "Male", description: "colourful gem from nature", image: "http://www.petmd.com/sites/default/files/green-iguana-thumbnail-600.jpg", user_id: user9.id )
pet10 = Pet.create(name: "Lucy & Lulu", date_of_birth: 1, type_of_pet: "Labrador Retriever Dog", gender: "Male & Female", description: "Twin white labrador ", image: "https://s-media-cache-ak0.pinimg.com/originals/04/f7/03/04f7037507db7fa99710b6baec8a5cf8.jpg", user_id: user10.id )

p " Pets: #{ Pet.count } "


Service.destroy_all

service1 = Service.create(name: "Home Care", description: "All care done at home", price: 24)
service2 = Service.create(name: "Day care", description: "Taking care at sitter house", price: 57)
service3 = Service.create(name: "Walk my dog", description: "Walk your dog in a park", price: 20)
service4 = Service.create(name: "Dog training", description: "Proffessional dog training program", price: 42)
service5 = Service.create(name: "House sitting", description: "Having a sitter come and stay in your house", price: 30)
service6 = Service.create(name: "Dog Boarding", description: "Park walk", price: 15)
service7 = Service.create(name: "Grooming", description: "Getting your dog, cat, or even horse groomed", price: 10)
service8 = Service.create(name: "Fish feeding", description: "Feed your fish and clean the aquarium in basis schedule", price: 12)
service9 = Service.create(name: "Dog wash", description: "Take your dog to bath", price: 22)
service10 = Service.create(name: "Grooming", description: "good for getting fur around the eyes cleaned and their coat brushed and smelling nice", price: 16)

p "Services: #{ Service.count }"

Booking.destroy_all

booking1 = Booking.create(available: false, start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service1.id, owner_id: user1.id, sitter_id: user6.id )
booking1 = Booking.create(available: false, start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service2.id, owner_id: user2.id, sitter_id: user7.id )
booking1 = Booking.create(available: false, start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service3.id, owner_id: user3.id, sitter_id: user8.id )
booking1 = Booking.create(available: false, start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service4.id, owner_id: user4.id, sitter_id: user9.id )
booking1 = Booking.create(available: false, start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service5.id, owner_id: user5.id, sitter_id: user10.id )

a_booking1 = Booking.create(start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service1.id, sitter_id: user6.id)
a_booking2 = Booking.create(start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service2.id, sitter_id: user7.id)
a_booking3 = Booking.create(start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service3.id, sitter_id: user8.id)
a_booking4 = Booking.create(start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service4.id, sitter_id: user9.id)
a_booking5 = Booking.create(start_time: Time.now + 2.days, end_time: Time.now + 3.days, service_id: service5.id, sitter_id: user10.id)

p "Bookings: #{Booking.count}"
