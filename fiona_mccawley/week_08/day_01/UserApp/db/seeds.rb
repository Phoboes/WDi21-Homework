User.destroy_all

5.times do |i|
  firstName = "First \##{i + 1}"
  lastName = "Last \##{i + 1}"
  password = "chicken"

  User.create firstName: firstName, lastName: lastName, password: password

end

p "Number of users: #{ User.count }"
