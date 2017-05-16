# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Adding some dummy data..."

Ocean.destroy_all

pacific =Ocean.create(name: "The Pacific Ocean", area: 166_243_550, depth: 4028)
atlantic = Ocean.create(name: "The Atlantic Ocean", area: 86_558_900	, depth: 3926)
indian = Ocean.create(name: "The Indian Ocean", area: 73_429_850, depth: 3923 )
southern = Ocean.create(name: "The Southern Ocean", area: 20_329_000, depth: 5000)
antartic = Ocean.create(name: "The Antartic Ocean", area: 13_226_875, depth: 1205)

puts "You have #{Ocean.all.count} oceans in your database."
