# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create(name: "Jack", email: "Jack@ga.co", password: "chicken", password_confirmation: "chicken")
u2 = User.create(name: "Kane", email: "kane@ga.co", password: "goose", password_confirmation: "goose")
u3 = User.create(name: "Jill", email: "jill@ga.co", password: "psyduck", password_confirmation: "psyduck")

p u1.password_digest
p u2.password_digest
p u3.password_digest

Post.destroy_all

p1 = Post.create({
  heading: "Post One",
  content: "Mick Fanning is a better surfer than Kelly Slater"})

p2 = Post.create({
  heading: "Post Two",
  content: "Tarantulas only bite if you touch their private parts")

p3 = Post.create({
  heading: "Post Three",
  content: "What is the meaning of the universe?"})
