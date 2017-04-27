# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Chef.destroy_all()

chef1 =  Chef.create({
  name: "Gordon Ramsay",
  nationality: "English",
  dob: "1966/11/08",
  image: "https://pbs.twimg.com/profile_images/780458835093762048/rPCw5QGz.jpg"
})

Recipe.destroy_all()

recipe1 = Recipe.create({
  title: "Noodles",
  ingredients: "noodles, boiling water",
  chef_id: chef1.id
})