# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.destroy_all

puts "Adding some dummy data to tasks..."

homework = Task.create(name: "Homework", description: "Create a rails CRUD APP", priority: "High")

gardening = Task.create(name: "Gardening", description: "Mow the lawn", priority: "Low")

washing = Task.create(name: "Washing", description: "Do the washing", priority: "Medium")


puts "You have #{Task.all.count} tasks in your database"

# t.text :task
# t.text :description
# t.text :priority
# t.timestamp :start_time
# t.date :due_date
# t.time :due_time
# t.boolean :overdue_status
